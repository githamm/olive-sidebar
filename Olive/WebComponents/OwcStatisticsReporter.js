
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(!Olive.StatisticsReporter)
{Olive.StatisticsReporter=function OwcStatisticsReporter()
{this._nullFields();}
Olive.StatisticsReporter.DeclareType=function OwcStatisticsReporter_DeclareType()
{this.DeclareField("OwcReportStr","");this.DeclareField("OwcReportSeparator",",");this.ReplaceMethod("reportActivityData",OwcStatisticsReporter_reportActivityData);this.DeclareMethod("prepareReportData",OwcStatisticsReporter_prepareReportData);this.DeclareMethod("reportHeader",OwcStatisticsReporter_reportHeader);this.DeclareMethod("prepareField",OwcStatisticsReporter_prepareField);this.DeclareMethod("reportData",OwcStatisticsReporter_reportData);this.DeclareMethod("_nullFields",OwcStatisticsReporter_nullFields);}
Olive.StatisticsReporter.ApplyPrototype=function OwcStatisticsReporter_ApplyPrototype(rObject,bDynamic)
{}
function OwcStatisticsReporter_prepareReportData()
{var actionName=Olive.StatisticsReporter.ActionName[this.OwcActivityInfo.get_ActivityType()];if(!actionName)
return false;if(this.OwcAdapterName)
actionName+="_"+this.OwcAdapterName;this.OwcReportStr=this.prepareField(this.OwcPublication)+this.OwcReportSeparator;this.OwcReportStr+=this.prepareField(this.OwcIssueDate)+this.OwcReportSeparator;this.OwcReportStr+=this.prepareField(this.OwcPageNo)+this.OwcReportSeparator;this.OwcReportStr+=this.prepareField(this.OwcEntId)+this.OwcReportSeparator;this.OwcReportStr+=this.prepareField(actionName);return true;}
function OwcStatisticsReporter_reportHeader()
{this.OwcReportStr=this.prepareField("OwcPublication")+this.OwcReportSeparator;this.OwcReportStr+=this.prepareField("OwcIssueDate")+this.OwcReportSeparator;this.OwcReportStr+=this.prepareField("OwcPageNo")+this.OwcReportSeparator;this.OwcReportStr+=this.prepareField("OwcEntId")+this.OwcReportSeparator;this.OwcReportStr+=this.prepareField("ActionName");this.reportData();}
function OwcStatisticsReporter_prepareField(field)
{if(field==null||typeof(field)=="undefined")
return"";var re=new RegExp(this.OwcReportSeparator,"gi");return field.toString().replace(re,"_");}
function OwcStatisticsReporter_reportActivityData()
{try
{var publisherMode=OliveApp_get_MainPage().WebApplication.getPreferenceBoolean("publisher-mode",false);if(publisherMode)
return;if(this.OwcEntId&&this.OwcEntId.substr(0,2).toLowerCase()=="ar"&&this.prepareReportData())
{this.reportData();}
this._nullFields();}
catch(e)
{}}
function OwcStatisticsReporter_reportData()
{var oRequest=Olive.XHTTP.CreateRequest();var sUrl="server/OwcStatistics.ashx?ReportStr="+encodeURIComponent(this.OwcReportStr)+"&rnd1="+Math.random()+"&rnd2="+Math.random();oRequest.load(sUrl,"GET",false);}
function OwcStatisticsReporter_nullFields()
{this.OwcPublication="";this.OwcIssueDate="";this.OwcSection="";this.OwcDocTitle="";this.OwcSearchQuery="";this.OwcPageNo=0;this.OwcPageLabel="";this.OwcEntName="";this.OwcEntType="";this.OwcEntId="";this.OwcPrimId="";this.OwcListOfPageSectionsForPrint="";this.OwcSearchInCurrentIssue="";this.OwcSearchQuery="";this.OwcURL="";this.OwcAdapterName="";}
JScript.Type.RegisterClass("Olive.StatisticsReporter",Olive.StatisticsReporter,Olive.ContentActivityReporter);}
if(!Olive.StatisticsReporter.ActionName)
{Olive.StatisticsReporter.ActionName={zoom:"zoom",printEntity:"print",mailSent:"email",bookmarkAdded:"bookmark",bookmarkSaved:"bookmark",componentOpened:"clickedtotext",pageViewed:"pageViewed"}
JScript.Type.RegisterClass("Olive.StatisticsReporter.ActionName",Olive.StatisticsReporter.ActionName);}