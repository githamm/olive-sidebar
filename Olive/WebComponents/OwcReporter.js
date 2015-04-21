
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(!Olive.ActivityReporter)
{Olive.ActivityReporter=function OwcActivityReporter()
{}
Olive.ActivityReporter.DeclareType=function OwcActivityReporter_DeclareType()
{this.DeclareField("OwcActivityInfo",null);this.DeclareMethod("activityHandler",OwcActivityReporter_activityHandler);this.DeclareMethod("filterActivities",OwcActivityReporter_filterActivities);this.DeclareMethod("getAdditionalData",OwcActivityReporter_getAdditionalData);}
function OwcActivityReporter_activityHandler(activityInfo)
{OwcActivityInfo=activityInfo;return true;}
function OwcActivityReporter_filterActivities()
{return true;}
function OwcActivityReporter_getAdditionalData()
{return true;}
JScript.Type.RegisterClass("Olive.ActivityReporter",Olive.ActivityReporter,Olive.Object);}
if(!Olive.ContentActivityReporter)
{Olive.ContentActivityReporter=function OwcContentActivityReporter()
{}
Olive.ContentActivityReporter.SearchRange={archive:"Archive",currentIssue:"CurrentIssue"};Olive.ContentActivityReporter.DeclareType=function OwcContentActivityReporter_DeclareType()
{this.DeclareField("OwcPublication",Olive.Activity.Defaults.undefined);this.DeclareField("OwcIssueDate",Olive.Activity.Defaults.undefined);this.DeclareField("OwcSection",Olive.Activity.Defaults.undefined);this.DeclareField("OwcDocTitle","");this.DeclareField("OwcSearchQuery","");this.DeclareField("OwcPageNo",0);this.DeclareField("OwcPageLabel",Olive.Activity.Defaults.undefined);this.DeclareField("OwcEntType",Olive.ContentItem.Entity.EntityTypes.undefined);this.DeclareField("OwcEntName","");this.DeclareField("OwcEntId","");this.DeclareField("OwcPrimId","");this.DeclareField("OwcURL",Olive.Activity.Defaults.undefined);this.DeclareField("OwcAdapterURL",Olive.Activity.Defaults.undefined);this.DeclareField("OwcAdapterName","");this.DeclareField("OwcDuration",0);this.DeclareField("OwcListOfPageSectionsForPrint","");this.DeclareField("OwcSearchInCurrentIssue",true);this.ReplaceMethod("activityHandler",OwcContentActivityReporter_activityHandler);this.OverrideMethod("filterActivities",OwcContentActivityReporter_filterActivities);this.OverrideMethod("getAdditionalData",OwcContentActivityReporter_getAdditionalData);this.ReplaceMethod("reportActivityData",OwcContentActivityReporter_reportActivityData);this.DeclareMethod("Init",OwcContentActivityReporter_Init);this.DeclareMethod("_nullFields",OwcContentActivityReporter_nullFields);this.DeclareMethod("_trimLastSpace",OwcContentActivityReporter_trimLastSpace);this.DeclareMethod("_formatUrl",OwcContentActivityReporter_formatUrl);}
function OwcContentActivityReporter_Init()
{this.OwcPublication=this.getDefaultPlaceholder();Olive.EventSource.RegisterEventHandler("","contentActivityOccured",false,this.activityHandler,this);}
function OwcContentActivityReporter_activityHandler(activityInfo)
{try
{this._nullFields();this.OwcActivityInfo=activityInfo.oActivity;if(this.OwcActivityInfo.get_Publication&&this.OwcActivityInfo.get_Publication())
{this.OwcPublication=this._trimLastSpace(this.OwcActivityInfo.get_Publication());}
if(this.OwcActivityInfo.get_IssueDate&&this.OwcActivityInfo.get_IssueDate())
{this.OwcIssueDate=this._trimLastSpace(this.OwcActivityInfo.get_IssueDate());}
if(this.OwcActivityInfo.get_Section&&this.OwcActivityInfo.get_Section())
{this.OwcSection=this._trimLastSpace(this.OwcActivityInfo.get_Section());}
if(this.OwcActivityInfo.get_DocName&&this.OwcActivityInfo.get_DocName())
{this.OwcDocTitle=this._trimLastSpace(this.OwcActivityInfo.get_DocName());}
if(this.OwcActivityInfo.get_SearchQuery&&this.OwcActivityInfo.get_SearchQuery())
{this.OwcSearchQuery=this._trimLastSpace(this.OwcActivityInfo.get_SearchQuery());}
if(this.OwcActivityInfo.get_PageNo&&this.OwcActivityInfo.get_PageNo())
{this.OwcPageNo=this._trimLastSpace(this.OwcActivityInfo.get_PageNo());}
if(this.OwcActivityInfo.get_PageLabel&&this.OwcActivityInfo.get_PageLabel())
{this.OwcPageLabel=this._trimLastSpace(this.OwcActivityInfo.get_PageLabel());}
if(this.OwcActivityInfo.get_Title&&this.OwcActivityInfo.get_Title())
{this.OwcEntName=this._trimLastSpace(this.OwcActivityInfo.get_Title());}
if(this.OwcActivityInfo.get_EntityId&&this.OwcActivityInfo.get_EntityId())
{this.OwcEntId=this._trimLastSpace(this.OwcActivityInfo.get_EntityId());}
if(this.OwcActivityInfo.get_PrimitiveId&&this.OwcActivityInfo.get_PrimitiveId())
{this.OwcPrimId=this._trimLastSpace(this.OwcActivityInfo.get_PrimitiveId());}
if(this.OwcActivityInfo.get_LinkTarget&&this.OwcActivityInfo.get_LinkTarget())
{var sTempUrl=this._trimLastSpace(this.OwcActivityInfo.get_LinkTarget());this.OwcURL=this._formatUrl(sTempUrl);}
if(this.OwcActivityInfo.get_AdapterURL&&this.OwcActivityInfo.get_AdapterURL())
{var sTempUrl=this._trimLastSpace(this.OwcActivityInfo.get_AdapterURL());this.OwcAdapterURL=this._formatUrl(sTempUrl);}
if(this.OwcActivityInfo.get_AdapterName&&this.OwcActivityInfo.get_AdapterName())
{this.OwcAdapterName=this.OwcActivityInfo.get_AdapterName();}
if(this.OwcActivityInfo.get_EntityType&&this.OwcActivityInfo.get_EntityType())
{this.OwcEntType=this._trimLastSpace(this.OwcActivityInfo.get_EntityType());}
if(this.OwcActivityInfo.get_Duration&&this.OwcActivityInfo.get_Duration())
{this.OwcDuration=this.OwcActivityInfo.get_Duration();}
if(this.OwcActivityInfo.get_SearchInCurrentIssue&&typeof(this.OwcActivityInfo.get_SearchInCurrentIssue)=="function")
{this.OwcSearchInCurrentIssue=this.OwcActivityInfo.get_SearchInCurrentIssue();}
if(this.OwcActivityInfo.get_ListOfItems&&this.OwcActivityInfo.get_NumOfItems&&(this.OwcActivityInfo.m_sActivityType==Olive.Activity.Data.ActivityType.printDocument||this.OwcActivityInfo.m_sActivityType==Olive.Activity.Data.ActivityType.bookmarkServiceItemSaved||this.OwcActivityInfo.m_sActivityType==Olive.Activity.Data.ActivityType.bookmarkAdded)&&this.OwcActivityInfo.get_NumOfItems()>0)
{var oList=this.OwcActivityInfo.get_ListOfItems();var sPageSectionString="";var sPageSection="";var nFirstItem=oList[0];var nLastItem=nFirstItem;var nTempLastItem=nFirstItem;for(var j=1;j<oList.length;j++)
{nLastItem=oList[j];if(nLastItem!=(nTempLastItem+1))
{if(nFirstItem!=nTempLastItem)
sPageSection=nFirstItem.toString()+"-"+nTempLastItem.toString();else
sPageSection=nFirstItem.toString();sPageSectionString+=sPageSection;sPageSectionString+=",";nFirstItem=nLastItem;}
nTempLastItem=nLastItem;}
if(nFirstItem==nLastItem)
{sPageSection=nFirstItem.toString();sPageSectionString+=sPageSection;}
else if(nFirstItem<nLastItem)
{sPageSection=nFirstItem.toString()+"-"+nTempLastItem.toString();sPageSectionString+=sPageSection;}
var nLength=sPageSectionString.length;if(sPageSectionString.lastIndexOf(',')==(nLength-1))
this.OwcListOfPageSectionsForPrint=sPageSectionString.substring(0,(nLength-2));else
this.OwcListOfPageSectionsForPrint=sPageSectionString;}
this.filterActivities();this.getAdditionalData();this.reportActivityData();}
catch(e)
{return false;}
return true;}
function OwcContentActivityReporter_filterActivities()
{return this.OwcActivityInfo;}
function OwcContentActivityReporter_getAdditionalData()
{return this.OwcActivityInfo;}
function OwcContentActivityReporter_reportActivityData()
{return true;}
function OwcContentActivityReporter_nullFields()
{this.OwcPublication=this.getDefaultPlaceholder();this.OwcIssueDate="";this.OwcSection=this.getDefaultPlaceholder();this.OwcDocTitle="";this.OwcSearchQuery="";this.OwcPageNo=0;this.OwcPageLabel=this.getDefaultPlaceholder();this.OwcEntType=Olive.ContentItem.Entity.EntityTypes.undefined;this.OwcEntName="";this.OwcEntId="";this.OwcPrimId="";this.OwcURL=this.getDefaultPlaceholder();this.OwcAdapterURL=this.getDefaultPlaceholder();this.OwcDuration=0;this.OwcListOfPageSectionsForPrint="";}
function OwcContentActivityReporter_trimLastSpace(sString)
{if(!sString||typeof(sString)!="string")
return sString;var sTrimmedStr=sString.replace(/^\s+|\s+$/g,'');return sTrimmedStr;}
function OwcContentActivityReporter_formatUrl(sUrl)
{if(!sUrl||typeof(sUrl)!="string")
return sUrl;var sTempUrl=sUrl.toLowerCase();var nRemoveHead=sTempUrl.indexOf("://");if(nRemoveHead>-1)
sTempUrl=sTempUrl.substring(nRemoveHead+3);var sFormatedUrl=sTempUrl.replace(/[\/]/g,"_");return sFormatedUrl;}
JScript.Type.RegisterClass("Olive.ContentActivityReporter",Olive.ContentActivityReporter,Olive.ActivityReporter,[Olive.IActivityDefaults]);}