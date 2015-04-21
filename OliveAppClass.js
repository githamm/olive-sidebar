
{function SW_cssBind()
{owcBindWebSdkStylesheet("","styles/Application.css");owcBindWebSdkStylesheet("","styles/Thumbnails.css");owcBindWebSdkStylesheet("","styles/OwcPopupWindowDefault.css");if(isVersionOf_IE_AtLeast5_5())
{owcBindWebSdkStylesheet("/Olive/WebComponents/","Layout/OwcPopupWindow-IE.css");if(!isVersionOf_IE_AtLeast7())
{owcBindWebSdkStylesheet("/Olive/WebComponents/","Layout/OwcPopupWindow-IE6.css");owcBindWebSdkStylesheet("","styles/Styles-IE6.css");}}
owcBindWebSdkStylesheet("","styles/Viewer.css");owcBindWebSdkStylesheet("","styles/Menus.css");}
SW_cssBind();function OliveApplication()
{this.DataProviderUrl="server/GetContent.asp";this.m_customParamNames=["um"];}
OliveApplication.Preferences={Initial_Publication:"initial-publication",EncodeDecodeUrl:"encode-decode-url",EncodeDecodeLandingPageUrl:"encode-decode-landing-url",Initial_Tab:"initial-tab",DoublePageMode:"double-page-mode",FitMode:"fit-mode",ICViewer_ViewMode:"ic-view-mode",SearchRes_PageSize:"search-results-page-size",SearchQuery_Restricted:"input-search-query-restricted",Highlight_OnTocSection:"highlight-primitive-on-tocsection",Highlight_OnSearchResult:"highlight-title-on-search-result",Date_Format:"date-format",Date_Format_Weekday_Month:"date-format-weekday-month",Magnifier_MaxWidth:"magnifier-max-width",Magnifier_MaxHeight:"magnifier-max-height",Magnifier_MagPercent:"magnifier-mag-percent",IC_PopupWindow_MaxTitleLength:"ic-popupwindow-max-title-length",IC_MaxTitleLength:"ic-max-title-length",EnableSendPageEmail:"enable-send-page-email",EnablePrintPage:"enable-print-page",EnablePrintArea:"enable-print-area",EnableSaveForOffline:"enable-save-for-offline",EnableBookmarkPage:"enable-bookmark-page",EnableExternalBookmarkingDigg:"enable-external-bookmarking-digg",EnableExternalBookmarkingDelicious:"enable-external-bookmarking-delicious",EnableCopyToClipboardPage:"enable-copy-to-clipboard-page",EnableArticleTranslate:"enable-article-translate",EnableArticleListen:"enable-article-listen",EnableArticleSendEmail:"enable-article-mail",EnableArticlePrint:"enable-article-print",EnableArticleSaveMenu:"enable-article-save-menu",EnableArticleShareMenu:"enable-article-share-menu",EnableArticleFacebook:"enable-article-facebook",EnableArticleTwitter:"enable-article-twitter",EnableArticleDigg:"enable-article-digg",EnableArticleDelicious:"enable-article-delicious",EnableArticleCopyToClipboard:"enable-article-copy-to-clipboard",DownloadOnePagePDF:"download-one-page-pdf",DownloadPDF:"download-pdf",EnableEmailAlerts:"enable-email-alerts",EnableMyArticles:"enable-my-articles",SearchRes_SortByDate:"search-res-is-sort-by-date",FeaturedPages_CreateCoverBack:"create-cover-back",OpenNewIssue_Cookie:"open_new_issue_cookie",SaveBookmarkInFireFox_Cookie:"save_bookmark_in_firefox_cookie",DoublePageMode_Cookie:"double_page_mode_cookie",FitMode_Cookie:"fit_mode_cookie",SplitterPosition_Cookie:"splitter_position_cookie",PublicationPrefix:"SW_Publication_",NotAvailablePrefix:"SW_NotAvailable_",LandingPageUrl:"landing-page-url",UseZoomFromSearchResults:"use-zoom-from-search-results",ZoomFromSearchResults:"zoom-type-from-search-results",UseZoomFromToc:"use-zoom-from-toc",ZoomFromToc:"zoom-type-from-toc"};OliveApplication.UrlParams={ZoomToHit:"zoomtohit",ZoomToPrimitive:"zoomtoprimitive"};OliveApplication.ErrorCodes={ForbiddenPublication:11001,ForbiddenIssueDate:11002};OliveApplication.InitialTabs={cover:"cover",help:"help",toc:"toc"};OliveApplication.DeclareType=function OliveApp_DeclareType()
{this.DeclareField("m_sPublicationDescription",null);this.DeclareField("m_sContentsTitle",null);this.DeclareField("m_bDoublePageMode",true);this.DeclareField("m_sFitMode",Olive.Controls.Viewer.FitMode.Window);this.DeclareField("m_sInitialTab",OliveApplication.InitialTabs.Cover);this.DeclareField("m_sICViewMode",Olive.Data.InformationComponentViewerState.ViewMode.image);this.DeclareField("m_nSearchResPageSize",6);this.DeclareField("m_bSearchQueryRestricted",true);this.DeclareField("m_bHighlightOnTocSection",false);this.DeclareField("m_bHighlightPrimitiveOnSearchResult",false);this.DeclareField("m_bUseZoomFromSearchResults",false);this.DeclareField("m_bUseZoomFromSearchResultsIsInUrl",false);this.DeclareField("m_sZoomFromSearchResults","");this.DeclareField("m_bUseZoomFromToc",false);this.DeclareField("m_bUseZoomFromTocIsInUrl",false);this.DeclareField("m_sZoomFromToc","percent=120");this.DeclareField("m_sDateFormat","%B %d, %Y");this.DeclareField("m_nMagnifierMaxWidth",null);this.DeclareField("m_nMagnifierMaxHeight",null);this.DeclareField("m_nMagnifierMagPercent",null);this.DeclareField("m_nICPopupWindowMaxTitleLength",50);this.DeclareField("m_nICMaxTitleLength",Olive.WebAppBase.MaxTitleLength);this.DeclareField("m_bEnableSendPageEmail",true);this.DeclareField("m_bEnablePrintPage",true);this.DeclareField("m_bEnablePrintArea",false);this.DeclareField("m_bEnableSaveForOffline",true);this.DeclareField("m_bDownloadPDF",false);this.DeclareField("m_bDownloadOnePagePDF",true);this.DeclareField("m_bEnableBookmarkPage",true);this.DeclareField("m_bEnableExternalBookmarkingDigg",true);this.DeclareField("m_bEnableExternalBookmarkingDelicious",true);this.DeclareField("m_bEnableCopyToClipboardPage",true);this.DeclareField("m_bCreateCoverBack",false);this.DeclareField("m_sLandingPageUrl","");this.DeclareField("m_bEncodeDecodeLandingPageUrl",null);this.DeclareField("m_bEnableArticleTranslate",true);this.DeclareField("m_bEnableArticleListen",true);this.DeclareField("m_bEnableArticleSendEmail",true);this.DeclareField("m_bEnableArticlePrint",true);this.DeclareField("m_bEnableArticleSaveMenu",true);this.DeclareField("m_bEnableArticleShareMenu",true);this.DeclareField("m_bEnableArticleFacebook",true);this.DeclareField("m_bEnableArticleTwitter",true);this.DeclareField("m_bEnableArticleDigg",true);this.DeclareField("m_bEnableArticleDelicious",true);this.DeclareField("m_bEnableArticleCopyToClipboard",true);this.DeclareField("m_bEnableEmailAlerts",false);this.DeclareField("m_bEnableMyArticles",false);this.DeclareField("m_sOpenNewIssue_Cookie","olive_digital_edition_open_new_issue");this.DeclareField("m_sSaveBookmarkInFireFox_Cookie","olive_digital_edition_save_bookmark_page_in_firefox_browser");this.DeclareField("m_sDoublePageMode_Cookie","olive_digital_edition_double_page_mode");this.DeclareField("m_sFitMode_Cookie","olive_digital_edition_fit_mode");this.DeclareField("sSplitterPosition_Cookie","olive_digital_edition_splitter_position");this.DeclareField("m_documentViewSource",null);this.DeclareField("m_bRightsManagementInProgress",false);this.DeclareField("m_bMainPageLoaded",false);this.DeclareField("m_bContentPageLoaded",false);this.DeclareField("m_sDocHRef","");this.DeclareField("m_bSearchInCurrentIssue",true);this.DeclareField("m_bSearchInArticles",false);this.DeclareField("m_bSortByDate",false);this.DeclareField("m_bOpenICViewerOnDocumentLoad",false);this.DeclareMethod("get_MainPage",OliveApp_get_MainPage);this.DeclareMethod("setResString",OliveApp_setResString);this.DeclareMethod("get_DocViewSource",OliveApp_get_DocViewSource);this.DeclareMethod("LoadData",OliveApp_LoadData);this.DeclareMethod("onMainPageLoaded",OliveApp_onMainPageLoaded);this.DeclareMethod("onContentsPaneLoaded",OliveApp_onContentsPaneLoaded);this.DeclareMethod("onSearchPaneLoaded",OliveApp_onSearchPaneLoaded);this.DeclareMethod("OpenComponent",OliveApp_OpenComponent);this.DeclareMethod("FollowPageLink",OliveApp_FollowPageLink);this.DeclareMethod("ClosePopups",OliveApp_ClosePopups);this.DeclareMethod("SendItemByMail",OliveApp_SendItemByMail);this.DeclareMethod("buildQueryString",OliveApp_buildQueryString);this.DeclareMethod("buildBookmarkAdapters",OliveApp_buildBookmarkAdapters);this.DeclareMethod("buildURLParametersFromControl",OliveApp_buildURLParametersFromControl);this.DeclareMethod("getSearchSortOptions",OliveApp_getSearchSortOptions);this.DeclareMethod("isDocHRefDifferent",OliveApp_isDocHRefDifferent);this.DeclareMethod("loadInitialIssue",OliveApp_loadInitialIssue);this.DeclareMethod("_AccessNotificationCallback",OliveApp_AccessNotificationCallback);this.DeclareMethod("performRightsManagement",OliveApp_performRightsManagement);this.DeclareMethod("_openDifferentDocument",OliveApp_openDifferentDocument);this.DeclareMethod("_checkOkToChangeIssue",OliveApp_checkOkToChangeIssue);this.DeclareMethod("getEntityType",OliveApp_getEntityType);this.DeclareMethod("_checkOkToBookmarkPageInFirefoxBrowser",OliveApp_checkOkToBookmarkPageInFirefoxBrowser);this.DeclareMethod("_checkOkToBookmarkPageInIE8Browser",OliveApp_checkOkToBookmarkPageInIE8Browser);this.DeclareMethod("getIssueName",OliveApp_getIssueName);this.DeclareMethod("getIssueDateFromBaseHref",OliveApp_getIssueDateFromBaseHref);this.DeclareMethod("setPublicationDescription",OliveApp_setPublicationDescription);this.DeclareMethod("getPublicationDescription",OliveApp_getPublicationDescription);this.DeclareMethod("setContentsTitle",OliveApp_setContentsTitle);this.DeclareMethod("getContentsTitle",OliveApp_getContentsTitle);this.OverrideMethod("registerAppCommands",OliveApp_registerAppCommands);this.ReplaceMethod("onSettingsLoaded",OliveApp_onSettingsLoaded);this.OverrideMethod("initialize",OliveApp_initialize);this.OverrideMethod("prepareItemMailParams",OliveApp_prepareItemMailParams);this.ReplaceMethod("buildURL",OliveApp_buildURL);this.ReplaceMethod("parseURL",OliveApp_parseURL);this.ReplaceMethod("getItemTitle",OliveApp_getItemTitle);this.ReplaceMethod("getItemDocTitle",OliveApp_getItemDocTitle);this.ReplaceMethod("getDocHRef",OliveApp_getDocHRef);this.ReplaceMethod("_updateCopyLinkCmdUiState",OliveApp_updateCopyLinkCmdUiState);this.ReplaceMethod("copyItemToClipboard",OliveApp_copyItemToClipboard);this.ReplaceMethod("createPDFDownloadLink",OliveApp_createPDFDownloadLink);this.DeclareMethod("onDataReceived",OliveApp_onDataReceived);this.OverrideMethod("onErrorOccured",OliveApp_onErrorOccured);this.DeclareMethod("onDocumentLoaded",OliveApp_onDocumentLoaded);this.DeclareMethod("_onMorePublicationValueChanging",OliveApp_onMorePublicationValueChanging);};function OliveApp_initialize()
{this.BaseClassMethod.apply(this,arguments);Olive.EventSource.RegisterEventHandler("","valueChanging",false,this._onMorePublicationValueChanging,this);}
function OliveApp_buildBookmarkAdapters()
{var oBmAdapterDelicious=new Olive.BookmarkDeliciousAdapter();var oWindowOptions=this.getWindowOptions("PostDel_window",true);oBmAdapterDelicious.init(oWindowOptions);this.addBookmarkAdapter(oBmAdapterDelicious,"PostDel");oWindowOptions=this.getWindowOptions("DiggThis_window",true);var oBmAdapterDigThis=new Olive.BookmarkDigThisAdapter();oBmAdapterDigThis.init(oWindowOptions);this.addBookmarkAdapter(oBmAdapterDigThis,"DiggThis");oWindowOptions=this.getWindowOptions("Facebook_window",true);var oBmAdapterFacebook=new Olive.BookmarkFacebookAdapter();oBmAdapterFacebook.init(oWindowOptions);this.addBookmarkAdapter(oBmAdapterFacebook,"Facebook");oWindowOptions=this.getWindowOptions("Twitter_window",true);var oBmAdapterTwitter=new Olive.BookmarkTwitterAdapter();oBmAdapterTwitter.init(oWindowOptions);this.addBookmarkAdapter(oBmAdapterTwitter,"Twitter");}
function OliveApp_registerAppCommands()
{this.BaseClassMethod.apply(this,arguments);}
function OliveApp_onSettingsLoaded()
{this.buildBookmarkAdapters();document.title=this.getResString("WindowCaption");var sPublication=this.getPreference(OliveApplication.Preferences.Initial_Publication);if(!sPublication)
{sPublication=this.getPreference(OliveApplication.Preferences.NotAvailablePrefix+OliveApplication.Preferences.Initial_Publication);var sErrorMessage=this.getResString("NotAvailable_ErrorMessage_General");if(sPublication)
sErrorMessage=this.formatResString("NotAvailablePublication_ErrorMessage",sPublication)+sErrorMessage;else
sErrorMessage=this.getResString("NonePublicationAvailable_ErrorMessage")+sErrorMessage;this.reportError(DHTML.newError(OliveApplication.ErrorCodes.ForbiddenPublication,sErrorMessage));return;}
var sInitialBaseHRef=this.getPreference(OliveApplication.Preferences.PublicationPrefix+sPublication);if(!sInitialBaseHRef)
{sInitialBaseHRef=this.getPreference(OliveApplication.Preferences.NotAvailablePrefix+OliveApplication.Preferences.PublicationPrefix+sPublication);var sErrorMessage=this.getResString("NotAvailable_ErrorMessage_General");if(sInitialBaseHRef)
sErrorMessage=this.formatResString("NotAvailableIssue_ErrorMessage",sInitialBaseHRef)+sErrorMessage;else
sErrorMessage=this.formatResString("NoneIssueAvailable_ErrorMessage",sPublication)+sErrorMessage;this.reportError(DHTML.newError(OliveApplication.ErrorCodes.ForbiddenIssueDate,sErrorMessage));return;}
this.loadInitialIssue(sInitialBaseHRef);this.m_bEncodeDecodeUrl=this.getPreferenceBoolean(OliveApplication.Preferences.EncodeDecodeUrl,this.m_bEncodeDecodeUrl);this.m_bEncodeDecodeLandingPageUrl=this.getPreferenceBoolean(OliveApplication.Preferences.EncodeDecodeLandingPageUrl);var documentViewSource=this.parseURL(this.m_oQueryString);if(documentViewSource)
this.m_documentViewSource=documentViewSource;if(!this.get_DocViewSource())
return;this.m_bDoublePageMode=this.getPreferenceBoolean(OliveApplication.Preferences.DoublePageMode,this.m_bDoublePageMode);var sFitMode=this.getPreference(OliveApplication.Preferences.FitMode,this.m_sFitMode);if(sFitMode&&(sFitMode==Olive.Controls.Viewer.FitMode.Width||sFitMode==Olive.Controls.Viewer.FitMode.Window))
this.m_sFitMode=sFitMode;var sInitialTab=this.getPreference(OliveApplication.Preferences.Initial_Tab,this.m_sInitialTab);if(sInitialTab&&(sInitialTab in OliveApplication.InitialTabs))
this.m_sInitialTab=sInitialTab;var sICViewMode=DHTML.getCookie("ICViewMode");if(!sICViewMode||sICViewMode=="")
{sICViewMode=this.getPreference(OliveApplication.Preferences.ICViewer_ViewMode,this.m_sICViewMode);}
if(sICViewMode&&(sICViewMode in Olive.Data.InformationComponentViewerState.ViewMode))
{this.m_sICViewMode=sICViewMode;}
var nSearchResPageSize=this.getPreferenceNumber(OliveApplication.Preferences.SearchRes_PageSize,this.m_nSearchResPageSize);if(!isNaN(nSearchResPageSize))
this.m_nSearchResPageSize=nSearchResPageSize;this.m_bSearchQueryRestricted=this.getPreferenceBoolean(OliveApplication.Preferences.SearchQuery_Restricted,this.m_bSearchQueryRestricted);this.m_bHighlightOnTocSection=this.getPreferenceBoolean(OliveApplication.Preferences.Highlight_OnTocSection,this.m_bHighlightOnTocSection);this.m_bHighlightPrimitiveOnSearchResult=this.getPreferenceBoolean(OliveApplication.Preferences.Highlight_OnSearchResult,this.m_bHighlightPrimitiveOnSearchResult);if(!this.m_bUseZoomFromSearchResultsIsInUrl)
this.m_bUseZoomFromSearchResults=this.getPreferenceBoolean(OliveApplication.Preferences.UseZoomFromSearchResults,this.m_bUseZoomFromSearchResults);this.m_sZoomFromSearchResults=this.getPreference(OliveApplication.Preferences.ZoomFromSearchResults,this.m_sZoomFromSearchResults);if(!this.m_bUseZoomFromTocIsInUrl)
this.m_bUseZoomFromToc=this.getPreferenceBoolean(OliveApplication.Preferences.UseZoomFromToc,this.m_bUseZoomFromToc);this.m_sZoomFromToc=this.getPreference(OliveApplication.Preferences.ZoomFromToc,this.m_sZoomFromToc);this.m_sDateFormat=this.getPreference(OliveApplication.Preferences.Date_Format_Weekday_Month,this.m_sDateFormat);var nMagnifierMaxWidth=this.getPreferenceNumber(OliveApplication.Preferences.Magnifier_MaxWidth);if(!isNaN(nMagnifierMaxWidth))
this.m_nMagnifierMaxWidth=nMagnifierMaxWidth;var nMagnifierMaxHeight=this.getPreferenceNumber(OliveApplication.Preferences.Magnifier_MaxHeight);if(!isNaN(nMagnifierMaxHeight))
this.m_nMagnifierMaxHeight=nMagnifierMaxHeight;var nMagnifierMagPercent=this.getPreferenceNumber(OliveApplication.Preferences.Magnifier_MagPercent);if(!isNaN(nMagnifierMagPercent))
this.m_nMagnifierMagPercent=nMagnifierMagPercent;var nICPopupWindowMaxTitleLength=this.getPreferenceNumber(OliveApplication.Preferences.IC_PopupWindow_MaxTitleLength)
if(!isNaN(nICPopupWindowMaxTitleLength))
this.m_nICPopupWindowMaxTitleLength=nICPopupWindowMaxTitleLength;var nICMaxTitleLength=this.getPreferenceNumber(OliveApplication.Preferences.IC_MaxTitleLength)
if(!isNaN(nICMaxTitleLength))
this.m_nICMaxTitleLength=nICMaxTitleLength;this.m_bEnableSendPageEmail=this.getPreferenceBoolean(OliveApplication.Preferences.EnableSendPageEmail,this.m_bEnableSendPageEmail);this.m_bEnablePrintPage=this.getPreferenceBoolean(OliveApplication.Preferences.EnablePrintPage,this.m_bEnablePrintPage);this.m_bEnablePrintArea=this.getPreferenceBoolean(OliveApplication.Preferences.EnablePrintArea,this.m_bEnablePrintArea);this.m_bEnableSaveForOffline=this.getPreferenceBoolean(OliveApplication.Preferences.EnableSaveForOffline,this.m_bEnableSaveForOffline);this.m_bEnableBookmarkPage=this.getPreferenceBoolean(OliveApplication.Preferences.EnableBookmarkPage,this.m_bEnableBookmarkPage);this.m_bEnableExternalBookmarkingDigg=this.getPreferenceBoolean(OliveApplication.Preferences.EnableExternalBookmarkingDigg,this.m_bEnableExternalBookmarkingDigg);this.m_bEnableExternalBookmarkingDelicious=this.getPreferenceBoolean(OliveApplication.Preferences.EnableExternalBookmarkingDelicious,this.m_bEnableExternalBookmarkingDelicious);this.m_bEnableCopyToClipboardPage=this.getPreferenceBoolean(OliveApplication.Preferences.EnableCopyToClipboardPage,this.m_bEnableCopyToClipboardPage);this.m_bDownloadPDF=this.getPreferenceBoolean(OliveApplication.Preferences.DownloadPDF,this.m_bDownloadPDF);this.m_bDownloadOnePagePDF=this.getPreferenceBoolean(OliveApplication.Preferences.DownloadOnePagePDF,this.m_bDownloadOnePagePDF);this.m_bSortByDate=this.getPreferenceBoolean(OliveApplication.Preferences.SearchRes_SortByDate,this.m_bSortByDate);this.m_bCreateCoverBack=this.getPreferenceBoolean(OliveApplication.Preferences.FeaturedPages_CreateCoverBack,this.m_bCreateCoverBack);this.m_bEnableEmailAlerts=this.getPreferenceBoolean(OliveApplication.Preferences.EnableEmailAlerts,this.m_bEnableEmailAlerts);this.m_bEnableMyArticles=this.getPreferenceBoolean(OliveApplication.Preferences.EnableMyArticles,this.m_bEnableMyArticles);this.m_bEnableArticleTranslate=this.getPreferenceBoolean(OliveApplication.Preferences.EnableArticleTranslate,this.m_bEnableArticleTranslate);this.m_bEnableArticleListen=this.getPreferenceBoolean(OliveApplication.Preferences.EnableArticleListen,this.m_bEnableArticleListen);this.m_bEnableArticleSendEmail=this.getPreferenceBoolean(OliveApplication.Preferences.EnableArticleSendEmail,this.m_bEnableArticleSendEmail);this.m_bEnableArticlePrint=this.getPreferenceBoolean(OliveApplication.Preferences.EnableArticlePrint,this.m_bEnableArticlePrint);this.m_bEnableArticleSaveMenu=this.getPreferenceBoolean(OliveApplication.Preferences.EnableArticleSaveMenu,this.m_bEnableArticleSaveMenu);this.m_bEnableArticleShareMenu=this.getPreferenceBoolean(OliveApplication.Preferences.EnableArticleShareMenu,this.m_bEnableArticleShareMenu);this.m_bEnableArticleFacebook=this.getPreferenceBoolean(OliveApplication.Preferences.EnableArticleFacebook,this.m_bEnableArticleFacebook);this.m_bEnableArticleTwitter=this.getPreferenceBoolean(OliveApplication.Preferences.EnableArticleTwitter,this.m_bEnableArticleTwitter);this.m_bEnableArticleDigg=this.getPreferenceBoolean(OliveApplication.Preferences.EnableArticleDigg,this.m_bEnableArticleDigg);this.m_bEnableArticleDelicious=this.getPreferenceBoolean(OliveApplication.Preferences.EnableArticleDelicious,this.m_bEnableArticleDelicious);this.m_bEnableArticleCopyToClipboard=this.getPreferenceBoolean(OliveApplication.Preferences.EnableArticleCopyToClipboard,this.m_bEnableArticleCopyToClipboard);var sOpenNewIssue_Cookie=this.getPreference(OliveApplication.Preferences.OpenNewIssue_Cookie,this.m_sOpenNewIssue_Cookie);if(sOpenNewIssue_Cookie)
this.m_sOpenNewIssue_Cookie=sOpenNewIssue_Cookie;var sSaveBookmarkInFireFox_Cookie=this.getPreference(OliveApplication.Preferences.SaveBookmarkInFireFox_Cookie,this.m_sSaveBookmarkInFireFox_Cookie);if(sSaveBookmarkInFireFox_Cookie)
this.m_sSaveBookmarkInFireFox_Cookie=sSaveBookmarkInFireFox_Cookie;var sDoublePageMode_Cookie=this.getPreference(OliveApplication.Preferences.DoublePageMode_Cookie,this.m_sDoublePageMode_Cookie);if(sDoublePageMode_Cookie)
this.m_sDoublePageMode_Cookie=sDoublePageMode_Cookie;var sFitMode_Cookie=this.getPreference(OliveApplication.Preferences.FitMode_Cookie,this.m_sFitMode_Cookie);if(sFitMode_Cookie)
this.m_sFitMode_Cookie=sFitMode_Cookie;var sSplitterPosition_Cookie=this.getPreference(OliveApplication.Preferences.SplitterPosition_Cookie,this.sSplitterPosition_Cookie);if(sSplitterPosition_Cookie)
this.sSplitterPosition_Cookie=sSplitterPosition_Cookie;var sLandingPageUrl=this.getPreference(OliveApplication.Preferences.LandingPageUrl);if(sLandingPageUrl)
this.m_sLandingPageUrl=sLandingPageUrl;if(this.getResString("DATES_MONTH_FULL_01"))
{Locale_Default={MonthName:[this.getResString("DATES_MONTH_FULL_01"),this.getResString("DATES_MONTH_FULL_02"),this.getResString("DATES_MONTH_FULL_03"),this.getResString("DATES_MONTH_FULL_04"),this.getResString("DATES_MONTH_FULL_05"),this.getResString("DATES_MONTH_FULL_06"),this.getResString("DATES_MONTH_FULL_07"),this.getResString("DATES_MONTH_FULL_08"),this.getResString("DATES_MONTH_FULL_09"),this.getResString("DATES_MONTH_FULL_10"),this.getResString("DATES_MONTH_FULL_11"),this.getResString("DATES_MONTH_FULL_12")],AbbrMonthName:[this.getResString("DATES_MONTH_SHORT_01"),this.getResString("DATES_MONTH_SHORT_02"),this.getResString("DATES_MONTH_SHORT_03"),this.getResString("DATES_MONTH_SHORT_04"),this.getResString("DATES_MONTH_SHORT_05"),this.getResString("DATES_MONTH_SHORT_06"),this.getResString("DATES_MONTH_SHORT_07"),this.getResString("DATES_MONTH_SHORT_08"),this.getResString("DATES_MONTH_SHORT_09"),this.getResString("DATES_MONTH_SHORT_10"),this.getResString("DATES_MONTH_SHORT_11"),this.getResString("DATES_MONTH_SHORT_12")],WeekDayName:[this.getResString("DATES_WEEKDAY_FULL_1"),this.getResString("DATES_WEEKDAY_FULL_2"),this.getResString("DATES_WEEKDAY_FULL_3"),this.getResString("DATES_WEEKDAY_FULL_4"),this.getResString("DATES_WEEKDAY_FULL_5"),this.getResString("DATES_WEEKDAY_FULL_6"),this.getResString("DATES_WEEKDAY_FULL_7")],AbbrWeekDayName:[this.getResString("DATES_WEEKDAY_SHORT_1"),this.getResString("DATES_WEEKDAY_SHORT_2"),this.getResString("DATES_WEEKDAY_SHORT_3"),this.getResString("DATES_WEEKDAY_SHORT_4"),this.getResString("DATES_WEEKDAY_SHORT_5"),this.getResString("DATES_WEEKDAY_SHORT_6"),this.getResString("DATES_WEEKDAY_SHORT_7")],OneLetterWeekDayName:[this.getResString("DATES_WEEKDAY_ONELETTER_1"),this.getResString("DATES_WEEKDAY_ONELETTER_2"),this.getResString("DATES_WEEKDAY_ONELETTER_3"),this.getResString("DATES_WEEKDAY_ONELETTER_4"),this.getResString("DATES_WEEKDAY_ONELETTER_5"),this.getResString("DATES_WEEKDAY_ONELETTER_6"),this.getResString("DATES_WEEKDAY_ONELETTER_7")],AmPm:["AM","PM"],ShortDateFormat:"%m/%d/%Y"};}}
function OliveApp_loadInitialIssue(sDocHRef)
{this.m_sDocHRef=sDocHRef;var viewSource=Olive.ContentItem.CreateByType(OwcContentItem_Document);viewSource.m_sDocHRef=this.m_sDocHRef;this.m_documentViewSource=viewSource;}
function OliveApp_get_MainPage()
{return Olive.Page.GetPageForWindow(window);}
function OliveApp_setResString(doc,sId)
{var oHtmlElement=getObjFromDoc(doc,sId);if(oHtmlElement&&sId)
{var sResString=this.getResString(sId);if(sResString)
DHTML.pasteHtmlContent(oHtmlElement,sResString);var sResString_ToolTip=this.getResString(sId+"_ToolTip");if(sResString_ToolTip)
DHTML.setTooltip(oHtmlElement,sResString_ToolTip);}}
function OliveApp_get_DocViewSource()
{return this.m_documentViewSource;}
function OliveApp_onMainPageLoaded()
{var bUseStatistics=this.getPreferenceBoolean("OwcUseStatistics",true);if(bUseStatistics)
{var bUseGoogle=this.getPreferenceBoolean("enable-google-reporter",true);if(bUseGoogle)
{var mainPage=this.get_MainPage();mainPage._importScripts('http://www.google-analytics.com/urchin.js');this.m_oActivityProvider=new Olive.ContentActivityProvider();this.m_oActivityProvider.postInitialize();this.m_oActivityReporter=new Olive.ContentGoogleReporter();this.m_oActivityReporter.Init();}}
var bCollectMostPopularStatistics=this.getPreferenceBoolean("OwcCollectMostPopularStatistics",true);if(bCollectMostPopularStatistics){var factor=this.getPreferenceNumber("MostPopularReportOneOf",10);if(factor>1&&(Math.round(Math.random()*(factor-1))!=1))
bCollectMostPopularStatistics=false;if(bCollectMostPopularStatistics){if(!this.m_oActivityProvider){this.m_oActivityProvider=new Olive.ContentActivityProvider();this.m_oActivityProvider.postInitialize();}
this.m_oStatisticsReporter=new Olive.StatisticsReporter();this.m_oStatisticsReporter.Init();}}
this.m_bMainPageLoaded=true;this.LoadData();}
function OliveApp_onContentsPaneLoaded()
{this.m_bContentPageLoaded=true;if(this.m_bMainPageLoaded)
{var mainPage=this.get_MainPage();mainPage.bindContentPage();this.LoadData();}}
function OliveApp_onSearchPaneLoaded()
{if(this.m_bMainPageLoaded)
{var mainPage=this.get_MainPage();mainPage.bindSearchPage();}}
function OliveApp_LoadData()
{if(!this.m_bMainPageLoaded||!this.m_bContentPageLoaded)
return;var oContentItem=this.get_DocViewSource();if(oContentItem&&oContentItem.m_sEntityId)
this.m_bOpenICViewerOnDocumentLoad=true;var mainPage=this.get_MainPage();mainPage.OpenDocument(oContentItem,false,false,false,false,true);}
function OliveApp_OpenComponent(contentItem)
{var mainPage=this.get_MainPage();mainPage.OpenComponent(contentItem);}
function OliveApp_FollowPageLink(nPageNo)
{var mainPage=this.get_MainPage();mainPage._followPageLink(nPageNo);this.ClosePopups(true);}
function OliveApp_ClosePopups(bICViewerOnly)
{var mainPage=this.get_MainPage();if(bICViewerOnly)
{var oICViewer=OwcGetControl("popup_componentViewer");oICViewer.close();}
else
{mainPage.closeAllPopupWindows();}}
function OliveApp_SendItemByMail(contentItem,bIsEntity,oOpenerPage,oSrc)
{var mainPage=this.get_MainPage();var mailParams=this.prepareItemMailParams(contentItem,oSrc);mainPage.SendMail(mailParams,bIsEntity,oOpenerPage);}
function OliveApp_prepareItemMailParams(oContentItem,oSrc)
{if(!oContentItem)
return;var oMailParams=new Object();var sLinkUrl=this.buildURL(oContentItem,oSrc);var sEntryTitle;if(oSrc&&oSrc.getControlType&&oSrc.getControlType()==Olive.Controls.controlTypeNames.DocViewerAgg)
{sEntryTitle="";oMailParams.subject=this.getItemDocTitle(oContentItem);}
else
{sEntryTitle=this.getItemTitle(oContentItem);oMailParams.subject=sEntryTitle;}
oMailParams.messagebodyauto=this.formatResString("EMailBodyFormat",oMailParams.subject,sLinkUrl);oMailParams.from=this.getPreference(OwcPref_MailField_From,"");oMailParams.oSrcContentItem=oContentItem;return oMailParams;}
function OliveApp_buildURL(contentItem,oSrcControl)
{var isLandingPage=false;if(oSrcControl&&oSrcControl.getControlType&&oSrcControl.getControlType()==Olive.Controls.controlTypeNames.InformationComponentViewer)
{isLandingPage=true;}
var bEncodeDecodeUrl=this.m_bEncodeDecodeUrl;if(!bEncodeDecodeUrl&&isLandingPage)
{bEncodeDecodeUrl=this.m_bEncodeDecodeLandingPageUrl;}
var oQueryString=Olive.WebAppBase.buildURLParametersFromContentItem(contentItem,bEncodeDecodeUrl);var oControlParameters=this.buildURLParametersFromControl(oSrcControl,bEncodeDecodeUrl);if(!oQueryString)
return"";oQueryString.appendParams(oControlParameters,true);if(oSrcControl&&oSrcControl.getControlType&&oSrcControl.getControlType()==Olive.Controls.controlTypeNames.DocViewerAgg)
{var oNewContentItem=Olive.ContentItem.CreateByType(OwcContentItem_Document);oNewContentItem.copyDocRefFrom(contentItem);if(contentItem.m_nPageNo)
oNewContentItem.m_nPageNo=contentItem.m_nPageNo;contentItem=oNewContentItem;}
var url=this.getAppUrl();if(isLandingPage)
{url=this.getAppVirPath()+this.m_sLandingPageUrl;}
var sQueryString=oQueryString.getQueryString();if(sQueryString)
{url+=("?"+sQueryString);}
return url;}
function OliveApp_buildURLParametersFromControl(oSrcControl,bEncodeDecode)
{var queryString=new QueryString();queryString.m_bBase64=bEncodeDecode;return queryString;}
function OliveApp_buildQueryString(contentItem)
{var sQueryString="";if(contentItem)
{var queryString=new QueryString();queryString.m_bBase64=this.m_bEncodeDecodeUrl;var docHRef=contentItem.getDocHRef();if(docHRef)
queryString.addParam(Olive.WebAppBase.UrlParam.HRef,docHRef);if(("m_nPageNo"in contentItem)&&!!contentItem.m_nPageNo)
queryString.addParam(Olive.WebAppBase.UrlParam.PageNo,contentItem.m_nPageNo.toString());if("m_sEntityId"in contentItem)
queryString.addParam(Olive.WebAppBase.UrlParam.Entity,contentItem.m_sEntityId);if("m_sPrimId"in contentItem)
queryString.addParam(Olive.WebAppBase.UrlParam.Primitive,contentItem.m_sPrimId);var urlParams=queryString.getQueryString();if(urlParams)
sQueryString+=urlParams;}
return sQueryString;}
function OliveApp_parseURL(oQueryString)
{if(!oQueryString&&!this.m_oQueryString)
return null;if(this.m_oQueryString&&!oQueryString)
oQueryString=this.m_oQueryString;var sIsURLEncoded=oQueryString.getParam(Olive.WebAppBase.UrlParam.IsURLEncoded,0);var bIsURLEncoded=null;if(sIsURLEncoded!=null)
bIsURLEncoded=String_parseBoolean(sIsURLEncoded);if((!this.m_bEncodeDecodeUrl)&&!(bIsURLEncoded===true))
{var bIsActualURLEncoded=false;var sBaseHRef=oQueryString.getParam(Olive.WebAppBase.UrlParam.HRef,0);if(sBaseHRef)
{sBaseHRef=sBaseHRef.replace(/\\/g,"/");bIsActualURLEncoded=!sBaseHRef.match(/\/\d{4}\/\d{2}\/\d{2}$/g);if(bIsActualURLEncoded)
{oQueryString.m_bBase64=true;sBaseHRef=oQueryString.getParam(Olive.WebAppBase.UrlParam.HRef,0);sBaseHRef=sBaseHRef.replace(/\\/g,"/");bIsActualURLEncoded=!!sBaseHRef.match(/\/\d{4}\/\d{2}\/\d{2}$/g);}}
this.m_bEncodeDecodeUrl=bIsActualURLEncoded;}
if(sIsURLEncoded!=null)
this.m_bEncodeDecodeUrl=bIsURLEncoded;oQueryString.m_bBase64=this.m_bEncodeDecodeUrl;var debugMode=oQueryString.getParam("Debug",0);if(!!debugMode&&(debugMode.toLowerCase()=="true"))
this.enableDebugMode();var bZoomToHit=oQueryString.getParam(OliveApplication.UrlParams.ZoomToHit,0);if(bZoomToHit)
{this.m_bUseZoomFromSearchResults=String_parseBoolean(bZoomToHit);this.m_bUseZoomFromSearchResultsIsInUrl=true;}
var bZoomToPrimitive=oQueryString.getParam(OliveApplication.UrlParams.ZoomToPrimitive,0);if(bZoomToPrimitive)
{this.m_bUseZoomFromToc=String_parseBoolean(bZoomToPrimitive);this.m_bUseZoomFromTocIsInUrl=true;}
var viewSource=Olive.ContentItem.CreateByType(OwcContentItem_Document);viewSource.m_sDocHRef=this.m_sDocHRef;var paramPageNo=oQueryString.getParam(Olive.WebAppBase.UrlParam.PageNo,0);if(paramPageNo&&!isNaN(parseInt(paramPageNo,10)))
viewSource.m_nPageNo=parseInt(paramPageNo,10);var entityId=oQueryString.getParam(Olive.WebAppBase.UrlParam.Entity,0);if(entityId)
viewSource.m_sEntityId=entityId;var primId=oQueryString.getParam(Olive.WebAppBase.UrlParam.Primitive,0);if(primId)
viewSource.m_sPrimId=primId;return viewSource;}
function OliveApp_getIssueName(oContentItem,sFormatingStringIdentifier)
{if(!oContentItem)
return"";var sDocTitle="";var sResultDate="";var dateValue=this.getIssueDateFromBaseHref(oContentItem.m_sDocHRef);if(dateValue)
sResultDate=formatDateTimeString(this.m_sDateFormat,dateValue);var sPublication=oContentItem.getPublicationDescription();if(!sFormatingStringIdentifier)
sFormatingStringIdentifier="SWIssueDefaultDescription";if(sPublication)
{sDocTitle=this.formatResString(sFormatingStringIdentifier,sResultDate,sPublication);}
else
{sDocTitle=sResultDate;}
return sDocTitle;}
function OliveApp_getIssueDateFromBaseHref(sDocHRef)
{var dateValue=null;var sDate=sDocHRef.substring(sDocHRef.indexOf("/")+1);var nYear=parseInt(sDate.substr(0,4),10);var nMonth=parseInt(sDate.substr(5,2),10);var nDay=parseInt(sDate.substr(8,2),10);if(!isNaN(nYear)&&!isNaN(nMonth)&&!isNaN(nDay))
dateValue=new Date(nYear,nMonth-1,nDay);return dateValue;}
function OliveApp_getItemTitle(oContentItem)
{if(!oContentItem)
return"";var sEntryTitle="";if(oContentItem.m_sTitle)
{sEntryTitle=oContentItem.m_sTitle;if(sEntryTitle.length>=this.m_nICMaxTitleLength)
{sEntryTitle=sEntryTitle.substring(0,this.m_nICMaxTitleLength)+"...";}}
else
{sEntryTitle=this.getResString("Popup_Email_EntityName");}
var sIssueName=this.getIssueName(oContentItem);var sPages=oContentItem.m_sPageLabel?oContentItem.m_sPageLabel:oContentItem.m_nPageNo;return this.formatResString("SWEntityTitleFormat",sEntryTitle,sPages,sIssueName);}
function OliveApp_getItemDocTitle(oContentItem)
{var sIssueName=this.getIssueName(oContentItem);if(!oContentItem)
return"";var sPages=oContentItem.m_sPageLabel;return this.formatResString("SWDocumentTitleFormat",sPages,sIssueName);}
function OliveApp_getDocHRef()
{return this.get_DocViewSource().getDocHRef();}
function OliveApp_onDataReceived(eventArgs)
{eventArgs.cancelBubbling=true;if(eventArgs.Request&&eventArgs.Request.sErrorMessage)
{var nAccessErrorCode=1023;var nErrorCode=0;var sErrorCode=eventArgs.Request.getResponsePart("<code>","</code>",eventArgs.Request.sErrorMessage);if(sErrorCode)
nErrorCode=parseInt(sErrorCode,10);if(nErrorCode==nAccessErrorCode)
{eventArgs.Request.nErrorNumber=Olive.Errors.Code.AccessError;}}}
function OliveApp_onErrorOccured(eventArgs)
{if(eventArgs.ErrorObject&&eventArgs.ErrorObject.number==Olive.Errors.Code.AccessError)
{eventArgs.cancelDefaultAction=true;eventArgs.cancelBubbling=true;if(!this.m_bRightsManagementInProgress)
{this.m_bRightsManagementInProgress=true;if(eventArgs.srcObject&&eventArgs.srcObject.getContentItem)
var oContentItem=eventArgs.srcObject.getContentItem();if(this.performRightsManagement)
this.performRightsManagement(oContentItem);}}
else
{this.BaseClassMethod.apply(this,arguments);}}
function OliveApp_performRightsManagement(oContentItem)
{var sDocHRef="";var bFromSearchResult=false;if(oContentItem)
{bFromSearchResult=!(oContentItem.m_sContentSrc==OwcContentSrc_Document);if(oContentItem.getDocHRef)
{sDocHRef=oContentItem.getDocHRef();}}
var mainPage=this.get_MainPage();var oPopupArgs={sDocHRef:sDocHRef,bFromSearchResult:bFromSearchResult};mainPage.openAccessNotificationDialog(oPopupArgs);this.m_bRightsManagementInProgress=false;}
function OliveApp_AccessNotificationCallback(dialogResult,returnValue,popupInfo)
{var bAuthorized=false;if(returnValue.OK)
{bAuthorized=confirm("[need to add the authorization process here]  Do you have authorization?");}
this.m_bRightsManagementInProgress=false;if(bAuthorized)
{}
if(!returnValue.bFromSearchResult)
{}}
function OliveApp_getSearchSortOptions(bSortByDate)
{if("boolean"==typeof bSortByDate)
this.m_bSortByDate=bSortByDate;if(this.m_bSortByDate)
{var oSortOptions=new Olive.Data.SortOptions();oSortOptions.addSortField("IssueDateID",false);return oSortOptions;}
else
return null;}
function OliveApp_isDocHRefDifferent(oContentItem)
{var sDocHRef="";if(oContentItem&&oContentItem.getDocHRef)
sDocHRef=oContentItem.getDocHRef();return(sDocHRef&&sDocHRef!=this.m_sDocHRef);}
function OliveApp_openDifferentDocument(oContentItem,bDoNotResetTabs)
{this.ClosePopups();if(!oContentItem)
return;var mainPage=this.get_MainPage();mainPage.OpenDocument(oContentItem,false,true,false,false,bDoNotResetTabs);}
function OliveApp_getEntityType(sEntityId)
{var sEntityType=sEntityId.substr(0,2);var sEntityTypeName=Olive.ContentItem.Entity.EntityTypes.undefined;switch(sEntityType.toLowerCase())
{case"ar":sEntityTypeName=Olive.ContentItem.Entity.EntityTypes.article;break;case"ad":sEntityTypeName=Olive.ContentItem.Entity.EntityTypes.ad;break;case"pc":sEntityTypeName=Olive.ContentItem.Entity.EntityTypes.picture;break;default:break;}
return sEntityTypeName;}
function OliveApp_checkOkToChangeIssue(oContentItem)
{var sNewDocHRef=oContentItem.getDocHRef();if(sNewDocHRef)
{var sPriorDocHRef=this.m_sDocHRef;var sCookieName=this.WebApplication.m_sOpenNewIssue_Cookie;var sValue=DHTML.getCookie(sCookieName);if(sValue!="true")
{var oPopupArgs={sPriorDocHRef:sPriorDocHRef,sNewDocHRef:sNewDocHRef,oContentItem:oContentItem};var mainPage=this.get_MainPage();mainPage.OpenOkToChangeIssueDialog(oPopupArgs);}
else
{this._openDifferentDocument(oContentItem,true);}}}
function OliveApp_checkOkToBookmarkPageInFirefoxBrowser(docViewerAgg)
{var mainPage=this.get_MainPage();mainPage.OpenBookmarkInFirefoxDialog(docViewerAgg);}
function OliveApp_checkOkToBookmarkPageInIE8Browser(docViewerAgg,addToFavoritesLink,docTitle)
{var mainPage=this.get_MainPage();mainPage.OpenBookmarkInIE8Dialog(docViewerAgg,addToFavoritesLink,docTitle);}
function OliveApp_onDocumentLoaded(oEventData)
{if(oEventData.sPublicationDescription)
{this.setPublicationDescription(oEventData.sPublicationDescription);var sContentsTitle=this.getContentsTitle();sContentsTitle=formatDateTimeString(this.m_sDateFormat,sContentsTitle);document.title=this.getPublicationDescription()+",  "+sContentsTitle+" - "+this.getResString("WindowCaption");}}
function OliveApp_setPublicationDescription(sPublicationDescription)
{this.m_sPublicationDescription=sPublicationDescription;}
function OliveApp_getPublicationDescription()
{return this.m_sPublicationDescription;}
function OliveApp_setContentsTitle(sContentsTitle)
{this.m_sContentsTitle=sContentsTitle;}
function OliveApp_getContentsTitle()
{return this.m_sContentsTitle;}
OliveApplication.CheckOkToChangeIssue=function OliveApp_CheckOkToChangeIssue(oContentItem,oSrc,oTarget)
{var bOkToChange=false;var oPage=oSrc.get_WebPage();if(oPage)
bOkToChange=oPage.CheckOkToChangeIssue(oContentItem);return bOkToChange;}
function OliveApp_onMorePublicationValueChanging(oEventData)
{if(oEventData.curObject.controlType==Olive.Controls.controlTypeNames.Choice)
{oEventData.cancelBubbling=true;if(oEventData.prevValue!=null)
{var sPublicationName=oEventData.newValue;var sBaseHRef=this.getPreference(OliveApplication.Preferences.PublicationPrefix+sPublicationName);if(!sBaseHRef)
{var sErrorMessage=this.getResString("NotAvailable_ErrorMessage_General");sErrorMessage=this.formatResString("NoneIssueAvailable_ErrorMessage",sPublicationName)+sErrorMessage;this.reportError(DHTML.newError(OliveApplication.ErrorCodes.ForbiddenIssueDate,sErrorMessage));return;}
var oContentItem=new Olive.ContentItem.Document();oContentItem.m_sDocHRef=sBaseHRef;var mainPage=this.get_MainPage();if(this.WebApplication.isDocHRefDifferent(oContentItem))
{this.WebApplication.m_sDocHRef=sBaseHRef;mainPage.OpenDocument(oContentItem,true,true,true,true,false);}
else
{if(mainPage.m_oPopupWindow_MorePublications)
{mainPage.m_oPopupWindow_MorePublications.close();}}}}}
function OliveApp_updateCopyLinkCmdUiState(oCmdUiState)
{oCmdUiState.enableCommand(true);}
function OliveApp_copyItemToClipboard(oSrc)
{var oContentItem=Olive.Controls.IDataBound.getContentItem(oSrc);if(!oContentItem)
return;var sLinkUrl=this.buildURL(oContentItem,oSrc);if(isVersionOf_IE_AtLeast5_5())
{var res=window.clipboardData.setData("Text",sLinkUrl);if(!res)
this.reportKnownError(Olive.Errors.Code.CopyToClipboardFailed,sLinkUrl);}
else
{var mainPage=this.get_MainPage();mainPage.openCopyToClipboardPopup(sLinkUrl);}}
function OliveApp_createPDFDownloadLink(oSrc,sLinkType,bPhysicalPath)
{if(!oSrc)
{throw DHTML.newError(689,"The arguments are not valid.");return;}
var oContentItem=Olive.Controls.IDataBound.getContentItem(oSrc);if(!oContentItem)
return;var oDownloadContentItem=new Olive.ContentItem.PDFDownload();if(!oDownloadContentItem)
return;oDownloadContentItem.m_sDocHRef=oContentItem.getDocHRef();oDownloadContentItem.m_sItemType=sLinkType;if(undefined!=bPhysicalPath)
oDownloadContentItem.m_bPhysicalPath=!!bPhysicalPath;if(sLinkType==OwcPDFDownloadItem_Page){var nPageNum=oSrc.getPageNo();if(nPageNum>0)
oDownloadContentItem.m_nPageNo=nPageNum;}
var oParams=new QueryString();oDownloadContentItem.buildRefParams(oParams);var lastChar=this.m_sAppVirPath[this.m_sAppVirPath.length-1];var sLink=this.m_sAppVirPath+((lastChar!='/')?"/":"")+"DownloadPdf.aspx";sLink+="?"+oParams.getQueryString();sLink+="&Type=Content&For=PdfDownload";return sLink;}
JScript.Type.RegisterClass("OliveApplication",OliveApplication,Olive.WebAppBase);Olive.WebAppBase.ApplicationClass=OliveApplication;}