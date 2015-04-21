/**=========================================================================
 File    : OwcGoogleReporter.js
 Author  : E.W.Z.
 Created : 05-Sep-2007
 Summary : Core classes for Olive Analytics
*=========================================================================*/
if (typeof(JScript) == "undefined")
	throw DHTML.newError(0, "JavaScript OOP API is not included.  Add JScriptCore.js to your file");

/******************************************************************************
 * Class    : Olive.ContentGoogleReporter
 * Overview : Class describing type of custom JScript event
******************************************************************************/

if (!Olive.ContentGoogleReporter)
{
	Olive.ContentGoogleReporter = function OwcContentGoogleReporter()
	{
		this.m_googleInitialized = false;
		this._olv_reported = {};
		this.getReporterSettings();
	} // Olive.ContentGoogleReporter()

	Olive.ContentGoogleReporter.DeclareType = function OwcContentGoogleReporter_DeclareType()
	{
		this.DeclareField("OwcTrackingCode", "UA-51944164-1");
		this.DeclareField("OwcReportStr", "");
		this.DeclareField("UseUrchin", false);

		this.OverrideMethod("Init", GoogleReporter_init);
		this.ReplaceMethod("reportActivityData", OwcContentGoogleReporter_reportActivityData);
		this.DeclareMethod("prepareGoogleData", OwcContentGoogleReporter_prepareGoogleData);
		this.DeclareMethod("getReporterSettings", OwcContentGoogleReporter_getReporterSettings);

		this.DeclareMethod("_initializeGoogle", GoogleReporter_initializeGoogle);
		this.DeclareMethod("_oliveReport", OwcContentGoogleReporter_oliveReport);
	}

	Olive.ContentGoogleReporter.ApplyPrototype = function OwcContentGoogleReporter_ApplyPrototype(rObject, bDynamic)
	{
	} // Olive.ContentGoogleReporter.ApplyPrototype()

	function GoogleReporter_init()
	{
		// Perform basic initialization
		try {
			this.BaseClassMethod();
		}
		catch (ex) {
			this._oliveReport("base_init", "Base init failed - " + (ex ? ex.message : "reason unknown"));
		}

		// Urchin does not require special initialization
		if (this.UseUrchin)
			return;
		if (!this.m_googleInitialized)
			this._initializeGoogle();
	}

	function GoogleReporter_initializeGoogle() {
		if (this.m_googleInitialized)
			return;
		var checkpoint = 0;
		try {
			// Inject Google Analytics code to the Web page
			(function (i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date(); a = s.createElement(o),
				m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
			})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
			checkpoint = 1;

			// Initialize Google analytics
			ga('create', this.OwcTrackingCode);
			checkpoint = 2;

			// Enable demographics tracking
			ga('require', 'displayfeatures');
			checkpoint = 3;

			this.m_googleInitialized = true;
			// this._oliveReport(null, "Initialized. Code=" + this.OwcTrackingCode);
		}
		catch (ex) {
			this._oliveReport("ga_ibit", "GA init failed - cp " + checkpoint + " - " + (ex ? ex.message : "reason unknown"));
		}
	}

	function OwcContentGoogleReporter_getReporterSettings()
	{
		var application = OwcGetApplication.Application;
		var tmpTrkngCode = application.getPreference("OwcTrackingCode");
		if (tmpTrkngCode)
			this.OwcTrackingCode = tmpTrkngCode;
		this.UseUrchin = application.getPreferenceBoolean("use-urchin-reporter", false);
		this._oliveTrackUrl = application.getPreference("olive-track-url", null);
	}
	
	function OwcContentGoogleReporter_prepareGoogleData()
	{
		this.OwcReportStr = "";
		switch(this.OwcActivityInfo.m_sActivityType)
		{
			case Olive.Activity.Data.ActivityType.pageViewed:
			case Olive.Activity.Data.ActivityType.zoom:
			{
				this.OwcReportStr = "/" + this.OwcPublication + "_" + this.OwcIssueDate.replace(/\//gi,"-");
				this.OwcReportStr += "/page";
				this.OwcReportStr += "/" + this.OwcSection + "_" + this.OwcPageLabel;
				if (this.OwcEntName)
					 this.OwcReportStr += "_" + this.OwcEntName;
			}
			break;
			case Olive.Activity.Data.ActivityType.componentOpened:
			{
				this.OwcReportStr = "/" + this.OwcPublication + "_" + this.OwcIssueDate.replace(/\//gi,"-");
				this.OwcReportStr += "/" + this.OwcEntType + "/" + this.OwcSection + "_" + this.OwcPageLabel;
				if (this.OwcEntName)
					 this.OwcReportStr += "_" + this.OwcEntName;
			}
			break;
			case Olive.Activity.Data.ActivityType.searchRequestSubmited:
			{
				this.OwcReportStr = "/" + this.OwcPublication;
				if (this.OwcIssueDate)
					this.OwcReportStr += "_" + this.OwcIssueDate.replace(/\//gi,"-");
				this.OwcReportStr += "/action/" + Olive.ContentGoogleReporter.ActionName[this.OwcActivityInfo.m_sActivityType];
				this.OwcReportStr += "/";
				if (this.OwcSearchInCurrentIssue)
					this.OwcReportStr += Olive.ContentActivityReporter.SearchRange.currentIssue;
				else
					this.OwcReportStr += Olive.ContentActivityReporter.SearchRange.archive;
					
				if (this.OwcSearchQuery && typeof(this.OwcSearchQuery) != "undefined") 
					this.OwcReportStr += "_" + this.OwcSearchQuery;
			}
			break;
			case Olive.Activity.Data.ActivityType.mailSent:
			case Olive.Activity.Data.ActivityType.printEntity:
			{
				this.OwcReportStr = "/" + this.OwcPublication + "_" + this.OwcIssueDate.replace(/\//gi,"-");
				this.OwcReportStr += "/action/" + Olive.ContentGoogleReporter.ActionName[this.OwcActivityInfo.m_sActivityType];
				this.OwcReportStr += "/";
				if (this.OwcSection && typeof(this.OwcSection) != "undefined")
					this.OwcReportStr += this.OwcSection;
				if (this.OwcPageLabel && typeof(this.OwcPageLabel) != "undefined")
					this.OwcReportStr += "_" + this.OwcPageLabel;
				if (this.OwcEntName)
					this.OwcReportStr += "_" + this.OwcEntName;
			}
			break;
			case Olive.Activity.Data.ActivityType.printDocument:
			{
				this.OwcReportStr = "/" + this.OwcPublication + "_" + this.OwcIssueDate.replace(/\//gi,"-");
				this.OwcReportStr += "/action/" + Olive.ContentGoogleReporter.ActionName[this.OwcActivityInfo.m_sActivityType];
				this.OwcReportStr += "/";
				if (this.OwcSection && typeof(this.OwcSection) != "undefined")
					this.OwcReportStr += this.OwcSection;
				
				if (   this.OwcListOfPageSectionsForPrint && typeof (this.OwcListOfPageSectionsForPrint) != "undefined")
					this.OwcReportStr += "_" + this.OwcListOfPageSectionsForPrint;
				else if (this.OwcPageNo && typeof(this.OwcPageNo) != "undefined")
					this.OwcReportStr += "_" + this.OwcPageNo;
			}
			break;
			case Olive.Activity.Data.ActivityType.bookmarkAdded:
			{
				this.OwcReportStr = "/" + this.OwcPublication + "_" + this.OwcIssueDate.replace(/\//gi,"-");
				this.OwcReportStr += "/action/" + Olive.ContentGoogleReporter.ActionName[this.OwcActivityInfo.m_sActivityType];
				if (this.OwcSection)
					this.OwcReportStr += "/" + this.OwcSection;
					
				if (this.OwcPageLabel && typeof(this.OwcPageLabel) != "undefined")
					this.OwcReportStr += "_" + this.OwcPageLabel;
					
				if (this.OwcEntName)
					this.OwcReportStr += "_" + this.OwcEntName;
			}
			break;
			case Olive.Activity.Data.ActivityType.bookmarkServiceItemSaved:
			{
				this.OwcReportStr = "/" + this.OwcPublication + "_" + this.OwcIssueDate.replace(/\//gi,"-");
				this.OwcReportStr += "/action/" + Olive.ContentGoogleReporter.ActionName[this.OwcActivityInfo.m_sActivityType];
				if (this.OwcSection)
					this.OwcReportStr += "/" + this.OwcSection;
					
				if (this.OwcPageLabel && typeof(this.OwcPageLabel) != "undefined")
					this.OwcReportStr += "_" + this.OwcPageLabel;
					
				if (this.OwcEntName)
					this.OwcReportStr += "_" + this.OwcEntName;
				if (this.OwcAdapterName)
					this.OwcReportStr += "_" + this.OwcAdapterName;
			}
			break;
			case Olive.Activity.Data.ActivityType.linkClicked:
			{
				 this.OwcReportStr = "/" + this.OwcPublication + "_" + this.OwcIssueDate.replace(/\//gi,"-") + "/" + Olive.ContentGoogleReporter.ActionName[this.OwcActivityInfo.m_sActivityType] + "/";
				 if (this.OwcPageLabel && typeof(this.OwcPageLabel) != "undefined")
					this.OwcReportStr += this.OwcPageLabel;
				 if (this.OwcURL && typeof (this.OwcURL) != "undefined")
					this.OwcReportStr += "_" + this.OwcURL;
			}
			break;
			case Olive.Activity.Data.ActivityType.richMediaPlayed:
			{
				this.OwcReportStr = "/" + this.OwcPublication + "_" + this.OwcIssueDate.replace(/\//gi,"-");
				this.OwcReportStr += "/action/" + Olive.ContentGoogleReporter.ActionName[this.OwcActivityInfo.m_sActivityType];
				if (this.OwcSection)
					this.OwcReportStr += "/" + this.OwcSection;
				if (this.OwcPageLabel)
					this.OwcReportStr += "_" + this.OwcPageLabel;
				if (this.OwcURL)
					this.OwcReportStr += "_" + this.OwcURL;
				if (this.OwcDuration)
					this.OwcReportStr += "_" + this.OwcDuration;
			} 
			break;
			default:
			{
				return false;
			}
		}
		return true;
	}

	function OwcContentGoogleReporter_reportActivityData()
	{
		var errorsToReport = [];

		try
		{
			if (this.prepareGoogleData())
			{
				if (this.UseUrchin)
				{
					_uacct = this.OwcTrackingCode;
					if (this.OwcReportStr)
						urchinTracker(this.OwcReportStr);
				}
				else {
					if (!this.m_googleInitialized) {
						errorsToReport.push("Force Google init");
						this._initializeGoogle();
					}
					ga('send', 'pageview', { page: this.OwcReportStr });
				}
			}
		}
		catch (e) {
			// Errors in reporting should not interrupt application
			errorsToReport.push("GA report failed:" + (e ? (e.message ? e.message : e.toString()) : "Unknown error"));
		}

		// Report errors to Olive
		if (errorsToReport.length > 0)
			this._oliveReport("track", errorsToReport);
	}

	function OwcContentGoogleReporter_oliveReport(type, messages)
	{
		if (!messages)
			return;
		try {
			if (!!type && this._olv_reported[type])
				return;	// Already reported

			if (!(messages instanceof Array))
				messages = [messages];

			for (var i = 0; i < messages.length; ++i) {
				var text = messages[i];

				if (!!this._oliveTrackUrl) {
					var url = this._oliveTrackUrl + "?r=" + Math.round(Math.random() * 1000) + "_" + ((new Date()).valueOf() % 113);
					if (!!type)
						url += "&type=" + encodeURIComponent(type);
					if (!!text)
						url += "&msg=" + encodeURIComponent(text);
					try {
						var reportImage = new Image();
						reportImage.src = url;
					}
					catch (e) {
					}
				}

				if (!!window.console)
				{
					if (type)
						console.warn("Analytics report: " + type + ":" + text);
					else
						console.log("Analytics report: " + text);
				}
			}

			if (!!type)
				this._olv_reported[type] = true;
		}
		catch (ex) {
			// Ignore errors
		}
	}

	JScript.Type.RegisterClass("Olive.ContentGoogleReporter", Olive.ContentGoogleReporter, Olive.ContentActivityReporter);
} // Define Olive.ContentGoogleReporter class

if (!Olive.ContentGoogleReporter.ActionName)
{
	Olive.ContentGoogleReporter.ActionName = 
	{
		pageViewed			    : "view",
		zoom				    : "zoom",
		printDocument           : "print",
		printEntity             : "print",
		searchRequestSubmited	: "search",
		mailSent			    : "email",
		bookmarkAdded		    : "bookmark",
		bookmarkSaved		    : "bookmark",
		linkClicked			    : "link",
		componentOpened		    : "clickedtotext",
		richMediaPlayed         : "play"
		
	}
	JScript.Type.RegisterClass("Olive.ContentGoogleReporter.ActionName", Olive.ContentGoogleReporter.ActionName);
}