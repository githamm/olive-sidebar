
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");if(!Olive.IActivityDefaults)
{Olive.IActivityDefaults=new Interface("Olive.IActivityDefaults");Olive.IActivityDefaults.Implement=function OwcIActivityDefaults_Implement(rObject,bDynamic)
{if(!Olive.IActivityDefaults.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"m_sDefaultPlaceholder",Olive.Activity.Defaults.undefined);JScript.Type.DeclareField(rObject,"m_bDefaultPlaceholderInitialized",false);JScript.Type.DeclareMethod(rObject,"_initDefaultPlaceholder",OwcIActivityDefaults_initDefaultPlaceholder);JScript.Type.DeclareMethod(rObject,"getDefaultPlaceholder",OwcIActivityDefaults_getDefaultPlaceholder);}
function OwcIActivityDefaults_initDefaultPlaceholder()
{if(this.m_bDefaultPlaceholderInitialized==false)
{var sTmpDefaultPlaceholder=OwcGetApplication.Application.getPreference("statictics-placeholder");if(sTmpDefaultPlaceholder)
this.m_sDefaultPlaceholder=sTmpDefaultPlaceholder;this.m_bDefaultPlaceholderInitialized=true;}}
function OwcIActivityDefaults_getDefaultPlaceholder()
{if(this.m_bDefaultPlaceholderInitialized==false)
this._initDefaultPlaceholder();return this.m_sDefaultPlaceholder;}}
if(!Olive.Activity)
{Olive.Activity=function OwcActivity()
{}
Olive.Activity.Defaults={undefined:"Undefined"}
JScript.Type.RegisterClass("Olive.Activity",Olive.Activity,Olive.Object);}
if(!Olive.Activity.Data)
{Olive.Activity.Data=function OwcOliveActivityData()
{}
Olive.Activity.Data.ActivityType={pageViewed:"pageViewed",zoom:"zoom",printDocument:"printDocument",printEntity:"printEntity",searchRequestSubmited:"searchRequestSubmited",mailSent:"mailSent",bookmarkAdded:"bookmarkAdded",linkClicked:"linkClicked",componentOpened:"componentOpened",bookmarkServiceItemSaved:"bookmarkSaved",richMediaPlayed:"richMediaPlayed"}
JScript.Type.RegisterClass("Olive.Activity.Data",Olive.Activity.Data);}
if(!Olive.Activity.EntityData)
{Olive.Activity.EntityData=function OwcActivityEntityData()
{this.nullObject();}
Olive.Activity.EntityData.DeclareType=function OwcActivityEntityData_DeclareType()
{this.DeclareField("m_sEntityId",null);this.DeclareField("m_sTitle",null);this.DeclareField("m_sSection",Olive.Activity.Defaults.undefined);this.DeclareField("m_sEntityType",null);this.DeclareField("m_sPageLabel",null);this.DeclareField("m_nPageNo",null);this.DeclareMethod("get_EntityId",OwcActivityEntityData_get_EntityId);this.DeclareMethod("set_EntityId",OwcActivityEntityData_set_EntityId);this.DeclareMethod("get_Section",OwcActivityEntityData_get_Section);this.DeclareMethod("set_Section",OwcActivityEntityData_set_Section);this.DeclareMethod("get_Title",OwcActivityEntityData_get_Title);this.DeclareMethod("set_Title",OwcActivityEntityData_set_Title);this.DeclareMethod("get_EntityType",OwcActivityEntityData_get_EntityType);this.DeclareMethod("set_EntityType",OwcActivityEntityData_set_EntityType);this.DeclareMethod("get_PageLabel",OwcActivityEntityData_get_PageLabel);this.DeclareMethod("set_PageLabel",OwcActivityEntityData_set_PageLabel);this.DeclareMethod("get_PageNo",OwcActivityEntityData_get_PageNo);this.DeclareMethod("set_PageNo",OwcActivityEntityData_set_PageNo);this.DeclareMethod("_retrieveEntityTypeFromEntityId",OwcActivityEntityData_retrieveEntityTypeFromEntityId);this.DeclareMethod("_detectEntityType",OwcActivityEntityData_detectEntityType);this.DeclareMethod("nullObject",OwcActivityEntityData_nullObject);}
function OwcActivityEntityData_get_EntityId()
{return this.m_sEntityId;}
function OwcActivityEntityData_set_EntityId(sEntityId)
{if(!sEntityId&&typeof(sEntityId)!="string")
return;this.m_sEntityId=sEntityId;var sEntityType=this._retrieveEntityTypeFromEntityId(sEntityId);if(sEntityType&&typeof(sEntityType)=="string")
this.set_EntityType(sEntityType);}
function OwcActivityEntityData_get_Section()
{return this.m_sSection;}
function OwcActivityEntityData_set_Section(sSection)
{if(sSection&&typeof(sSection)=="string")
this.m_sSection=sSection;}
function OwcActivityEntityData_get_Title()
{return this.m_sTitle;}
function OwcActivityEntityData_set_Title(sTitle)
{if(sTitle&&typeof(sTitle)=="string")
this.m_sTitle=sTitle;}
function OwcActivityEntityData_get_EntityType()
{return this.m_sEntityType;}
function OwcActivityEntityData_set_EntityType(sEntityType)
{if(!sEntityType||typeof(sEntityType)!="string")
return;this.m_sEntityType=sEntityType;}
function OwcActivityEntityData_retrieveEntityTypeFromEntityId(sEntityId)
{if(typeof(sEntityId)!="string")
return;var sEntityType=sEntityId.substring(0,2);var sType="";sType=this._detectEntityType(sEntityType);return sType;}
function OwcActivityEntityData_detectEntityType(sEntityType)
{if(typeof(sEntityType)!="string")
return;var sType="";switch(sEntityType.toLowerCase())
{case"ar":sType=Olive.ContentItem.Entity.EntityTypes.article;break;case"ad":sType=Olive.ContentItem.Entity.EntityTypes.ad;break;case"pc":sType=Olive.ContentItem.Entity.EntityTypes.picture;break;default:sType=Olive.ContentItem.Entity.EntityTypes.unknown;break;}
return sType;}
function OwcActivityEntityData_get_PageLabel()
{return this.m_sPageLabel;}
function OwcActivityEntityData_set_PageLabel(sPageLabel)
{if(sPageLabel&&typeof(sPageLabel)!="undefined")
this.m_sPageLabel=sPageLabel;}
function OwcActivityEntityData_get_PageNo()
{return this.m_nPageNo;}
function OwcActivityEntityData_set_PageNo(nPageNo)
{if(!isNaN(nPageNo))
this.m_nPageNo=nPageNo;}
function OwcActivityEntityData_nullObject()
{this.m_sEntityId=null;this.m_sTitle=null;this.m_sSection=Olive.Activity.Defaults.undefined;this.m_sEntityType=null;this.m_sPageLabel=null;this.m_nPageNo=null;}
JScript.Type.RegisterClass("Olive.Activity.EntityData",Olive.Activity.EntityData,Olive.Object);}
if(!Olive.Activity.SearchResultData)
{Olive.Activity.SearchResultData=function OwcActivitySearchResultData()
{this.nullObject();}
Olive.Activity.SearchResultData.DeclareType=function OwcActivitySearchResultData_DeclareType()
{this.DeclareField("m_sPublication",null);this.DeclareField("m_sIssueDate",null);this.DeclareField("m_sDocName",null);this.DeclareField("m_sPrimitiveId",null);this.DeclareField("m_nPageNo",null);this.DeclareMethod("get_Publication",OwcActivitySearchResultData_get_Publication);this.DeclareMethod("set_Publication",OwcActivitySearchResultData_set_Publication);this.DeclareMethod("get_IssueDate",OwcActivitySearchResultData_get_IssueDate);this.DeclareMethod("set_IssueDate",OwcActivitySearchResultData_set_IssueDate);this.DeclareMethod("get_DocName",OwcActivitySearchResultData_get_DocName);this.DeclareMethod("set_DocName",OwcActivitySearchResultData_set_DocName);this.DeclareMethod("get_PrimitiveId",OwcActivitySearchResultData_get_PrimitiveId);this.DeclareMethod("set_PrimitiveId",OwcActivitySearchResultData_set_PrimitiveId);this.DeclareMethod("get_PageNo",OwcActivitySearchResultData_get_PageNo);this.DeclareMethod("set_PageNo",OwcActivitySearchResultData_set_PageNo);this.OverrideMethod("nullObject",OwcActivitySearchResultData_nullObject);}
function OwcActivitySearchResultData_get_Publication()
{return this.m_sPublication;}
function OwcActivitySearchResultData_set_Publication(sPublication)
{if(sPublication&&typeof(sPublication)=="string")
this.m_sPublication=sPublication;}
function OwcActivitySearchResultData_get_IssueDate()
{return this.m_sIssueDate;}
function OwcActivitySearchResultData_set_IssueDate(sIssueDate)
{if(sIssueDate&&typeof(sIssueDate)=="string")
this.m_sIssueDate=sIssueDate;}
function OwcActivitySearchResultData_get_DocName()
{return this.m_sDocName;}
function OwcActivitySearchResultData_set_DocName(sDocName)
{if(sDocName&&typeof(sDocName)=="string")
this.m_sDocName=sDocName;}
function OwcActivitySearchResultData_get_PrimitiveId()
{return this.m_sPrimitiveId;}
function OwcActivitySearchResultData_set_PrimitiveId(sPrimitiveId)
{if(sPrimitiveId&&typeof(sPrimitiveId)=="string")
this.m_sPrimitiveId=sPrimitiveId;}
function OwcActivitySearchResultData_set_DocName(sDocName)
{if(sDocName&&typeof(sDocName)=="string")
this.m_sDocName=sDocName;}
function OwcActivitySearchResultData_get_PageNo()
{return this.m_nPageNo;}
function OwcActivitySearchResultData_set_PageNo(nPageNo)
{if(!isNaN(nPageNo))
this.m_nPageNo=nPageNo;}
function OwcActivitySearchResultData_nullObject()
{this.m_sPublication=null;this.m_sIssueDate=null;this.m_sDocName=null;this.m_sPrimitiveId=null;this.m_nPageNo=null;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.Activity.SearchResultData",Olive.Activity.SearchResultData,Olive.Activity.EntityData);}
if(!Olive.ContentActivity)
{Olive.ContentActivity=function OwcContentActivity(oEvent)
{this.nullObject();if(oEvent&&typeof(oEvent)!="undefined")
this.m_oEvent=oEvent;}
Olive.ContentActivity.DeclareType=function OwcContentActivity_DeclareType()
{this.DeclareField("m_sActivityType",null);this.DeclareField("m_oEvent",null);this.DeclareMethod("get_ActivityType",OwcContentActivity_get_ActivityType);this.DeclareMethod("set_ActivityType",OwcContentActivity_set_ActivityType);this.DeclareMethod("get_EventObject",OwcContentActivity_get_EventObject);this.DeclareMethod("set_EventObject",OwcContentActivity_set_EventObject);this.DeclareMethod("get_EventType",OwcContentActivity_get_EventType);this.DeclareMethod("get_SrcType",OwcContentActivity_get_SrcType);this.DeclareMethod("nullObject",OwcContentActivity_nullObject);}
function OwcContentActivity_get_ActivityType()
{return this.m_sActivityType;}
function OwcContentActivity_set_ActivityType(sType)
{if(sType&&typeof(sType)=="string")
this.m_sActivityType=sType;}
function OwcContentActivity_set_EventObject(oEvent)
{if(oEvent)
this.m_oEvent=oEvent;}
function OwcContentActivity_get_EventObject(oEvent)
{return this.m_oEvent;}
function OwcContentActivity_get_EventType()
{if(this.m_oEvent&&this.m_oEvent.type)
return this.m_oEvent.type;}
function OwcContentActivity_get_SrcType()
{if(this.m_oEvent&&this.m_oEvent.srcObject)
{var oSrcObj=this.m_oEvent.srcObject;if(oSrcObj.getControlType)
return oSrcObj.getControlType();}
return null;}
function OwcContentActivity_nullObject()
{this.m_sActivityType=null;this.m_oEvent=null;}
JScript.Type.RegisterClass("Olive.ContentActivity",Olive.ContentActivity,Olive.Activity);}
if(!Olive.DocumentContentActivity)
{Olive.DocumentContentActivity=function OwcDocumentContentActivity(oEvent)
{this.nullObject();}
Olive.DocumentContentActivity.DeclareType=function OwcDocumentContentActivity_DeclareType()
{this.DeclareField("m_sPublication",null);this.DeclareField("m_sIssueDate",null);this.DeclareMethod("get_Publication",OwcDocumentContentActivity_get_Publication);this.DeclareMethod("set_Publication",OwcDocumentContentActivity_set_Publication);this.DeclareMethod("get_IssueDate",OwcDocumentContentActivity_get_IssueDate);this.DeclareMethod("set_IssueDate",OwcDocumentContentActivity_set_IssueDate);this.OverrideMethod("nullObject",OwcDocumentContentActivity_nullObject);}
function OwcDocumentContentActivity_get_Publication()
{return this.m_sPublication;}
function OwcDocumentContentActivity_set_Publication(sPublication)
{if(sPublication&&typeof(sPublication)=="string")
this.m_sPublication=sPublication;}
function OwcDocumentContentActivity_get_IssueDate()
{return this.m_sIssueDate;}
function OwcDocumentContentActivity_set_IssueDate(sDate)
{if(sDate&&typeof(sDate)=="string")
this.m_sIssueDate=sDate;}
function OwcDocumentContentActivity_nullObject()
{this.m_sPublication=null;this.m_sIssueDate=null;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.DocumentContentActivity",Olive.DocumentContentActivity,Olive.ContentActivity);}
if(!Olive.SearchRequestContentActivity)
{Olive.SearchRequestContentActivity=function OwcSearchRequestContentActivity(oEvent)
{this.nullObject();}
Olive.SearchRequestContentActivity.DeclareType=function OwcSearchRequestContentActivity_DeclareType()
{this.DeclareField("m_sSearchedComponentType",null);this.DeclareField("m_sSearchedText",null);this.DeclareField("m_bSearchInCurrentIssue",true);this.DeclareMethod("get_EntityType",OwcSearchRequestContentActivity_get_EntityType);this.DeclareMethod("set_EntityType",OwcSearchRequestContentActivity_set_EntityType);this.DeclareMethod("get_SearchQuery",OwcSearchRequestContentActivity_get_SearchQuery);this.DeclareMethod("set_SearchQuery",OwcSearchRequestContentActivity_set_SearchQuery);this.DeclareMethod("get_SearchInCurrentIssue",OwcSearchRequestContentActivity_get_SearchInCurrentIssue);this.DeclareMethod("set_SearchInCurrentIssue",OwcSearchRequestContentActivity_set_SearchInCurrentIssue);this.OverrideMethod("nullObject",OwcSearchRequestContentActivity_nullObject);}
function OwcSearchRequestContentActivity_get_EntityType()
{return this.m_sSearchedComponentType;}
function OwcSearchRequestContentActivity_set_EntityType(sSearchedComponentType)
{if(sSearchedComponentType&&typeof(sSearchedComponentType)=="string")
this.m_sSearchedComponentType=sSearchedComponentType;}
function OwcSearchRequestContentActivity_get_SearchQuery()
{return this.m_sSearchedText;}
function OwcSearchRequestContentActivity_set_SearchQuery(sSearchedText)
{if(sSearchedText&&typeof(sSearchedText)=="string")
this.m_sSearchedText=sSearchedText;}
function OwcSearchRequestContentActivity_get_SearchInCurrentIssue()
{return this.m_bSearchInCurrentIssue;}
function OwcSearchRequestContentActivity_set_SearchInCurrentIssue(param)
{this.m_bSearchInCurrentIssue=param;}
function OwcSearchRequestContentActivity_nullObject()
{this.m_sSearchedComponentType=null;this.m_sSearchedText=null;this.m_bSearchInCurrentIssue=true;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.SearchRequestContentActivity",Olive.SearchRequestContentActivity,Olive.DocumentContentActivity);}
if(!Olive.PageContentActivity)
{Olive.PageContentActivity=function OwcPageContentActivity(oEvent)
{this.nullObject();}
Olive.PageContentActivity.DeclareType=function OwcPageContentActivity_DeclareType()
{this.DeclareField("m_nPageNo",null);this.DeclareField("m_sPageLabel",null);this.DeclareField("m_sSection",this.m_sDefaultPlacehoder);this.DeclareMethod("get_Section",OwcPageContentActivity_get_Section);this.DeclareMethod("set_Section",OwcPageContentActivity_set_Section);this.DeclareMethod("get_PageNo",OwcPageContentActivity_get_PageNo);this.DeclareMethod("set_PageNo",OwcPageContentActivity_set_PageNo);this.DeclareMethod("get_PageLabel",OwcPageContentActivity_get_PageLabel);this.DeclareMethod("set_PageLabel",OwcPageContentActivity_set_PageLabel);this.OverrideMethod("nullObject",OwcPageContentActivity_nullObject);}
function OwcPageContentActivity_get_Section()
{return this.m_sSection;}
function OwcPageContentActivity_set_Section(sSection)
{if(sSection&&typeof(sSection)=="string")
this.m_sSection=sSection;}
function OwcPageContentActivity_get_PageNo()
{return this.m_nPageNo;}
function OwcPageContentActivity_set_PageNo(nPageNo)
{if(nPageNo&&Number(nPageNo)!=NaN)
this.m_nPageNo=nPageNo;}
function OwcPageContentActivity_get_PageLabel()
{return this.m_sPageLabel;}
function OwcPageContentActivity_set_PageLabel(sLabel)
{if(sLabel&&typeof(sLabel)=="string")
this.m_sPageLabel=sLabel;}
function OwcPageContentActivity_nullObject()
{this.m_nPageNo=null;this.m_sPageLabel=null;this.m_sSection=this.m_sDefaultPlacehoder;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.PageContentActivity",Olive.PageContentActivity,Olive.DocumentContentActivity);}
if(!Olive.RichMediaContentActivity)
{Olive.RichMediaContentActivity=function OwcRichMediaContentActivity(oEvent)
{this.nullObject();}
Olive.RichMediaContentActivity.DeclareType=function OwcRichMediaContentActivity_DeclareType()
{this.DeclareField("m_nDuration",null);this.DeclareField("m_sURL",null);this.DeclareMethod("get_Duration",OwcRichMediaContentActivity_get_Duration);this.DeclareMethod("set_Duration",OwcRichMediaContentActivity_set_Duration);this.DeclareMethod("get_LinkTarget",OwcRichMediaContentActivity_get_LinkTarget);this.DeclareMethod("set_LinkTarget",OwcRichMediaContentActivity_set_LinkTarget);this.DeclareMethod("nullObject",OwcRichMediaContentActivity_nullObject);}
function OwcRichMediaContentActivity_get_Duration()
{return this.m_nDuration;}
function OwcRichMediaContentActivity_set_Duration(nDuration)
{if(nDuration&&Number(nDuration)!=NaN)
this.m_nDuration=nDuration;}
function OwcRichMediaContentActivity_get_LinkTarget()
{return this.m_sURL;}
function OwcRichMediaContentActivity_set_LinkTarget(sURL)
{if(sURL&&typeof(sURL)=="string")
this.m_sURL=sURL;}
function OwcRichMediaContentActivity_nullObject()
{this.m_nDuration=null;this.m_sURL=null;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.RichMediaContentActivity",Olive.RichMediaContentActivity,Olive.PageContentActivity);}
if(!Olive.EntityContentActivity)
{Olive.EntityContentActivity=function OwcEntityContentActivity(sDataType,oEvent)
{this.nullObject();this.m_sContentItemType=sDataType;}
Olive.EntityContentActivity.DeclareType=function OwcEntityContentActivity_DeclareType()
{this.DeclareField("m_oEntityData",null);this.DeclareField("m_sContentItemType",OwcContentItem_Document);this.DeclareMethod("get_EntityId",OwcEntityContentActivity_get_EntityId);this.DeclareMethod("set_EntityId",OwcEntityContentActivity_set_EntityId);this.DeclareMethod("get_EntityType",OwcEntityContentActivity_get_EntityType);this.DeclareMethod("get_Title",OwcEntityContentActivity_get_Title);this.DeclareMethod("set_Title",OwcEntityContentActivity_set_Title);this.OverrideMethod("get_Section",OwcEntityContentActivity_get_Section);this.OverrideMethod("set_Section",OwcEntityContentActivity_set_Section);this.OverrideMethod("get_PageNo",OwcEntityContentActivity_get_PageNo);this.OverrideMethod("set_PageNo",OwcEntityContentActivity_set_PageNo);this.OverrideMethod("get_PageLabel",OwcEntityContentActivity_get_PageLabel);this.OverrideMethod("set_PageLabel",OwcEntityContentActivity_set_PageLabel);this.OverrideMethod("nullObject",OwcEntityContentActivity_nullObject);this.DeclareMethod("_set_ContentItemType",OwcEntityContentActivity_set_ContentItemType);this.DeclareMethod("_get_ContentItemType",OwcEntityContentActivity_get_ContentItemType);}
function OwcEntityContentActivity_get_Section()
{if(this.m_sContentItemType==OwcContentItem_Entity)
return this.m_oEntityData.get_Section();else if(this.BaseClassMethod)
return this.BaseClassMethod.apply(this,arguments);else
return null;}
function OwcEntityContentActivity_set_Section(sSection)
{if(sSection&&typeof(sSection)=="string")
{if(this.m_sContentItemType==OwcContentItem_Entity)
return this.m_oEntityData.set_Section(sSection);else if(this.BaseClassMethod)
return this.BaseClassMethod.apply(this,arguments);else
return null;}}
function OwcEntityContentActivity_get_PageNo()
{if(this.m_sContentItemType==OwcContentItem_Entity)
return this.m_oEntityData.get_PageNo();else if(this.BaseClassMethod)
return this.BaseClassMethod.apply(this,arguments);else
return null;}
function OwcEntityContentActivity_set_PageNo(nPageNo)
{if(nPageNo&&Number(nPageNo)!=NaN)
{if(this.m_sContentItemType==OwcContentItem_Entity)
return this.m_oEntityData.set_PageNo(nPageNo);else if(this.BaseClassMethod)
return this.BaseClassMethod.apply(this,arguments);else
return null;}}
function OwcEntityContentActivity_get_PageLabel()
{if(this.m_sContentItemType==OwcContentItem_Entity)
return this.m_oEntityData.get_PageLabel();else if(this.BaseClassMethod)
return this.BaseClassMethod.apply(this,arguments);else
return null;}
function OwcEntityContentActivity_set_PageLabel(sLabel)
{if(sLabel&&typeof(sLabel)=="string")
{if(this.m_sContentItemType==OwcContentItem_Entity)
return this.m_oEntityData.set_PageLabel(sLabel);else if(this.BaseClassMethod)
return this.BaseClassMethod.apply(this,arguments);else
return null;}}
function OwcEntityContentActivity_get_EntityId()
{return this.m_oEntityData.get_EntityId();}
function OwcEntityContentActivity_set_EntityId(sEntityId)
{if(sEntityId&&typeof(sEntityId)=="string")
this.m_oEntityData.set_EntityId(sEntityId);}
function OwcEntityContentActivity_get_EntityType()
{return this.m_oEntityData.get_EntityType();}
function OwcEntityContentActivity_get_Title()
{return this.m_oEntityData.get_Title();}
function OwcEntityContentActivity_set_Title(sTitle)
{if(sTitle&&typeof(sTitle)=="string")
this.m_oEntityData.set_Title(sTitle);}
function OwcEntityContentActivity_set_ContentItemType(sContentItemType)
{if(sContentItemType&&typeof(sContentItemType)!="undefined")
this.m_sContentItemType=sContentItemType;}
function OwcEntityContentActivity_get_ContentItemType()
{return this.m_sContentItemType;}
function OwcEntityContentActivity_nullObject()
{this.m_oEntityData=new Olive.Activity.EntityData();this.m_sContentItemType=OwcContentItem_Document;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.EntityContentActivity",Olive.EntityContentActivity,Olive.PageContentActivity);}
if(!Olive.ZoomContentActivity)
{Olive.ZoomContentActivity=function OwcZoomContentActivity(sDataType,oEvent)
{this.nullObject();this.m_sContentItemType=sDataType;}
Olive.ZoomContentActivity.DeclareType=function OwcZoomContentActivity_DeclareType()
{this.DeclareField(this,"m_nZoom",null);this.DeclareMethod("get_Zoom",OwcZoomContentActivity_get_Zoom);this.DeclareMethod("set_Zoom",OwcZoomContentActivity_set_Zoom);this.OverrideMethod("nullObject",OwcZoomContentActivity_nullObject);}
function OwcZoomContentActivity_get_Zoom()
{return this.m_nZoom;}
function OwcZoomContentActivity_set_Zoom(nZoom)
{if(!isNaN(nZoom))
this.m_nZoom=nZoom;}
function OwcZoomContentActivity_nullObject()
{this.m_nZoom=null;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.ZoomContentActivity",Olive.ZoomContentActivity,Olive.EntityContentActivity);}
if(!Olive.ListOfItemsContentActivity)
{Olive.ListOfItemsContentActivity=function OwcListOfItemsContentActivity(oEvent)
{this.nullObject();}
Olive.ListOfItemsContentActivity.DeclareType=function OwcListOfItemsContentActivity_DeclareType()
{this.DeclareField("m_sItemType",null);this.DeclareField("m_oListOfItems",null);this.DeclareMethod("get_ItemType",OwcListOfItemsContentActivity_get_ItemType);this.DeclareMethod("set_ItemType",OwcListOfItemsContentActivity_set_ItemType);this.DeclareMethod("get_NumOfItems",OwcListOfItemsContentActivity_get_NumOfItems);this.DeclareMethod("addItem",OwcListOfItemsContentActivity_addItem);this.DeclareMethod("get_ListOfItems",OwcListOfItemsContentActivity_get_ListOfItems);this.OverrideMethod("nullObject",OwcListOfItemsContentActivity_nullObject);}
function OwcListOfItemsContentActivity_get_ItemType()
{return this.m_sItemType;}
function OwcListOfItemsContentActivity_set_ItemType(sItemType)
{if(sItemType&&typeof(sItemType)=="string")
this.m_sItemType=sItemType;}
function OwcListOfItemsContentActivity_get_NumOfItems()
{return this.m_oListOfItems.length;}
function OwcListOfItemsContentActivity_addItem(oItem)
{this.m_oListOfItems.push(oItem);}
function OwcListOfItemsContentActivity_get_ListOfItems()
{return this.m_oListOfItems;}
function OwcListOfItemsContentActivity_nullObject()
{this.m_sItemType=null;this.m_oListOfItems=new Array();if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.ListOfItemsContentActivity",Olive.ListOfItemsContentActivity,Olive.PageContentActivity);}
if(!Olive.ListOfEntitiesContentActivity)
{Olive.ListOfEntitiesContentActivity=function OwcListOfEntitiesContentActivity(oEvent)
{this.nullObject();}
Olive.ListOfEntitiesContentActivity.DeclareType=function OwcListOfEntitiesContentActivity_DeclareType()
{this.DeclareField("m_sItemType",null);this.DeclareField("m_oListOfItems",null);this.DeclareMethod("get_ItemType",OwcListOfEntitiesContentActivity_get_ItemType);this.DeclareMethod("set_ItemType",OwcListOfEntitiesContentActivity_set_ItemType);this.DeclareMethod("get_NumOfItems",OwcListOfEntitiesContentActivity_get_NumOfItems);this.DeclareMethod("addItem",OwcListOfEntitiesContentActivity_addItem);this.DeclareMethod("get_ListOfItems",OwcListOfEntitiesContentActivity_get_ListOfItems);this.OverrideMethod("nullObject",OwcListOfEntitiesContentActivity_nullObject);}
function OwcListOfEntitiesContentActivity_get_ItemType()
{return this.m_sItemType;}
function OwcListOfEntitiesContentActivity_set_ItemType(sItemType)
{if(sItemType&&typeof(sItemType)=="string")
this.m_sItemType=sItemType;}
function OwcListOfEntitiesContentActivity_get_NumOfItems()
{return this.m_oListOfItems.length;}
function OwcListOfEntitiesContentActivity_addItem(oItem)
{this.m_oListOfItems.push(oItem);}
function OwcListOfEntitiesContentActivity_get_ListOfItems()
{return this.m_oListOfItems;}
function OwcListOfEntitiesContentActivity_nullObject()
{this.m_sItemType=null;this.m_oListOfItems=new Array();if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.ListOfEntitiesContentActivity",Olive.ListOfEntitiesContentActivity,Olive.EntityContentActivity);}
if(!Olive.SearchResultsContentActivity)
{Olive.SearchResultsContentActivity=function OwcSearchResultsContentActivity(oEvent)
{this.nullObject();this.m_oListOfItems=new Array();}
Olive.SearchResultsContentActivity.DeclareType=function OwcSearchResultsContentActivity_DeclareType()
{this.DeclareField("m_nTotalResultsNumber",null);this.DeclareField("m_sSearchQuery",null);this.DeclareMethod("get_TotalResultsNumber",OwcSearchResultsContentActivity_get_TotalResultsNumber);this.DeclareMethod("set_TotalResultsNumber",OwcSearchResultsContentActivity_set_TotalResultsNumber);this.DeclareMethod("get_SearchQuery",OwcSearchResultsContentActivity_get_SearchQuery);this.DeclareMethod("set_SearchQuery",OwcSearchResultsContentActivity_set_SearchQuery);this.OverrideMethod("nullObject",OwcSearchResultsContentActivity_nullObject);}
function OwcSearchResultsContentActivity_get_TotalResultsNumber()
{return this.m_nTotalResultsNumber;}
function OwcSearchResultsContentActivity_set_TotalResultsNumber(nNumber)
{if(!isNaN(nNumber))
this.m_nTotalResultsNumber=nNumber;}
function OwcSearchResultsContentActivity_get_SearchQuery()
{return this.m_sSearchQuery;}
function OwcSearchResultsContentActivity_set_SearchQuery(sQuery)
{if(sQuery&&typeof(sQuery)!="undefined")
this.m_sSearchQuery=sQuery;}
function OwcSearchResultsContentActivity_nullObject()
{this.m_nTotalResultsNumber=null;this.m_sSearchQuery=null;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.SearchResultsContentActivity",Olive.SearchResultsContentActivity,Olive.ListOfItemsContentActivity);}
if(!Olive.MailContentActivity)
{Olive.MailContentActivity=function OwcMailContentActivity(sDataType,oEvent)
{this.nullObject();this.m_sContentItemType=sDataType;}
Olive.MailContentActivity.DeclareType=function OwcMailContentActivity_DeclareType()
{this.DeclareField("m_sMailFrom",null);this.DeclareField("m_sMailTo",null);this.DeclareField("m_sMailSubject",null);this.DeclareField("m_sMessageBodyAuto",null);this.DeclareMethod("get_MailFrom",OwcMailContentActivity_get_MailFrom);this.DeclareMethod("set_MailFrom",OwcMailContentActivity_set_MailFrom);this.DeclareMethod("get_MailTo",OwcMailContentActivity_get_MailTo);this.DeclareMethod("set_MailTo",OwcMailContentActivity_set_MailTo);this.DeclareMethod("get_MailSubject",OwcMailContentActivity_get_MailSubject);this.DeclareMethod("set_MailSubject",OwcMailContentActivity_set_MailSubject);this.OverrideMethod("nullObject",OwcMailContentActivity_nullObject);}
function OwcMailContentActivity_get_MailFrom()
{return this.m_sMailFrom;}
function OwcMailContentActivity_set_MailFrom(sFrom)
{if(sFrom&&typeof(sFrom)=="string")
this.m_sMailFrom=sFrom;}
function OwcMailContentActivity_get_MailTo()
{return this.m_sMailTo;}
function OwcMailContentActivity_set_MailTo(sTo)
{if(sTo&&typeof(sTo)=="string")
this.m_sMailTo=sTo;}
function OwcMailContentActivity_get_MailSubject()
{return this.m_sMailSubject;}
function OwcMailContentActivity_set_MailSubject(sSubject)
{if(sSubject&&typeof(sSubject)=="string")
this.m_sMailSubject=sSubject;}
function OwcMailContentActivity_nullObject()
{this.m_sMailFrom=null;this.m_sMailTo=null;this.m_sMailSubject=null;this.m_sMessageBodyAuto=null;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.MailContentActivity",Olive.MailContentActivity,Olive.EntityContentActivity);}
if(!Olive.LinkContentActivity)
{Olive.LinkContentActivity=function OwcLinkContentActivity(sDataType,oEvent)
{this.nullObject();this.m_sContentItemType=sDataType;}
Olive.LinkContentActivity.DeclareType=function OwcLinkContentActivity_DeclareType()
{this.DeclareField("m_sLinkTarget",null);this.DeclareField("m_sLinkType",null);this.DeclareMethod("get_LinkTarget",OwcLinkContentActivity_get_LinkTarget);this.DeclareMethod("set_LinkTarget",OwcLinkContentActivity_set_LinkTarget);this.DeclareMethod("get_LinkType",OwcLinkContentActivity_get_LinkType);this.DeclareMethod("set_LinkType",OwcLinkContentActivity_set_LinkType);this.OverrideMethod("nullObject",OwcLinkContentActivity_nullObject);}
function OwcLinkContentActivity_get_LinkTarget()
{return this.m_sLinkTarget;}
function OwcLinkContentActivity_set_LinkTarget(sLinkTarget)
{if(sLinkTarget&&typeof(sLinkTarget)=="string")
this.m_sLinkTarget=sLinkTarget;else if(sLinkTarget&&typeof(sLinkTarget)=="number")
this.m_sLinkTarget=sLinkTarget.toString();}
function OwcLinkContentActivity_get_LinkType()
{return this.m_sLinkType;}
function OwcLinkContentActivity_set_LinkType(sLinkType)
{if(sLinkType&&typeof(sLinkType)=="string")
this.m_sLinkType=sLinkType;}
function OwcLinkContentActivity_nullObject()
{this.m_sLinkTarget=null;this.m_sLinkType=null;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.LinkContentActivity",Olive.LinkContentActivity,Olive.EntityContentActivity);}
if(!Olive.BookmarkServiceItemContentActivity)
{Olive.BookmarkServiceItemContentActivity=function OwcBookmarkServiceItemContentActivity(sDataType,oEvent)
{this.nullObject();this.m_sContentItemType=sDataType;}
Olive.BookmarkServiceItemContentActivity.DeclareType=function OwcBookmarkServiceItemContentActivity_DeclareType()
{this.DeclareField("m_sAdapterName",null);this.DeclareField("m_sAdapterURL",null);this.DeclareMethod("get_AdapterName",OwcBookmarkServiceItemContentActivity_get_AdapterName);this.DeclareMethod("set_AdapterName",OwcBookmarkServiceItemContentActivity_set_AdapterName);this.DeclareMethod("get_AdapterURL",OwcBookmarkServiceItemContentActivity_get_AdapterURL);this.DeclareMethod("set_AdapterURL",OwcBookmarkServiceItemContentActivity_set_AdapterURL);this.OverrideMethod("nullObject",OwcBookmarkServiceItemContentActivity_nullObject);}
function OwcBookmarkServiceItemContentActivity_get_AdapterName()
{return this.m_sAdapterName;this.m_oListOfItems=new Array();}
function OwcBookmarkServiceItemContentActivity_set_AdapterName(sAdapterName)
{if(sAdapterName&&typeof(sAdapterName)=="string")
this.m_sAdapterName=sAdapterName;}
function OwcBookmarkServiceItemContentActivity_get_AdapterURL()
{return this.m_sAdapterURL;}
function OwcBookmarkServiceItemContentActivity_set_AdapterURL(sAdapterURL)
{if(sAdapterURL&&typeof(sAdapterURL)=="string")
this.m_sAdapterURL=sAdapterURL;}
function OwcBookmarkServiceItemContentActivity_nullObject()
{this.m_sAdapterName=null;this.m_sAdapterURL=null;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.BookmarkServiceItemContentActivity",Olive.BookmarkServiceItemContentActivity,Olive.ListOfEntitiesContentActivity);}
if(!Olive.ActivityProvider)
{Olive.ActivityProvider=function OwcActivityProvider()
{}
JScript.Type.RegisterClass("Olive.ActivityProvider",Olive.ActivityProvider,Olive.EventSource);}
if(!Olive.ContentActivityProvider)
{Olive.ContentActivityProvider=function OwcContentActivityProvider()
{}
Olive.ContentActivityProvider.DeclareType=function OwcContentActivityProvider_DeclareType()
{this.DeclareField("WebApplication",null);this.DeclareMethod("onPageViewed",OwcContentActivityProvider_onPageViewed);this.DeclareMethod("onEntityClicked",OwcContentActivityProvider_onEntityClicked);this.DeclareMethod("onPageClicked",OwcContentActivityProvider_onPageClicked);this.DeclareMethod("onReadyToPrint",OwcContentActivityProvider_onReadyToPrint);this.DeclareMethod("onDataPrinted",OwcContentActivityProvider_onDataPrinted);this.DeclareMethod("onViewerLoaded",OwcContentActivityProvider_onViewerLoaded);this.DeclareMethod("onSearchRequest",OwcContentActivityProviderSearchRes_onSearchRequest);this.DeclareMethod("onMailSentOk",OwcContentActivityProvider_onMailSentOk);this.DeclareMethod("onBookmarkAdded",OwcContentActivityProvider_onBookmarkAdded);this.DeclareMethod("onBookmarkServiceItemSaved",OwcContentActivityProvider_onBookmarkServiceItemSaved);this.DeclareMethod("onLinkClicked",OwcContentActivityProvider_onLinkClicked);this.DeclareMethod("onEmbeddedLinkClicked",OwcContentActivityProvider_onEmbeddedLinkClicked);this.DeclareMethod("onContentItemClicked",OwcContentActivityProvider_onContentItemClicked);this.DeclareMethod("onRichMediaPlayed",OwcContentActivityProvider_onRichMediaPlayed);this.ReplaceMethod("postInitialize",OwcContentActivityProvider_postInitialize);this.DeclareMethod("_fillCommonData",OwcContentActivityProvider_fillCommonData);this.DeclareMethod("_extractDocName",OwcContentActivityProvider_extractDocName);this.DeclareMethod("_extractIssueDate",OwcContentActivityProvider_extractIssueDate);this.DeclareMethod("_fillEntityDataFromContentItem",OwcContentActivityProvider_fillEntityDataFromContentItem);this.DeclareMethod("_fillActivityObject",OwcContentActivityProvider_fillActivityObject);this.DeclareMethod("_buildInternalLink",OwcContentActivityProvider_buildInternalLink);this.DeclareMethod("_fireContentActivityEvent",OwcContentActivityProvider_fireContentActivityEvent);}
Olive.ContentActivityProvider.ApplyPrototype=function OwcContentActivityProvider_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("contentActivityOccured","onContentActivityOccured",true);}
function OwcContentActivityProvider_postInitialize()
{this.WebApplication=OwcGetApplication();Olive.EventSource.RegisterEventHandler("","pageViewed",false,this.onPageViewed,this);Olive.EventSource.RegisterEventHandler("Olive.Controls.TocEntryTreeNode","contentItemClicked",false,this.onContentItemClicked,this);Olive.EventSource.RegisterEventHandler("","entityClicked",false,this.onEntityClicked,this);Olive.EventSource.RegisterEventHandler("","pageClicked",false,this.onPageClicked,this);Olive.EventSource.RegisterEventHandler("","readyToPrint",false,this.onReadyToPrint,this);Olive.EventSource.RegisterEventHandler("","dataPrinted",false,this.onDataPrinted,this);Olive.EventSource.RegisterEventHandler("","viewerLoaded",false,this.onViewerLoaded,this);Olive.EventSource.RegisterEventHandler("","searchRequest",false,this.onSearchRequest,this);Olive.EventSource.RegisterEventHandler("","mailSentOk",false,this.onMailSentOk,this);Olive.EventSource.RegisterEventHandler("","bookmarkAdded",false,this.onBookmarkAdded,this);Olive.EventSource.RegisterEventHandler("","bookmarkSaved",false,this.onBookmarkServiceItemSaved,this);Olive.EventSource.RegisterEventHandler("","linkClicked",false,this.onLinkClicked,this);Olive.EventSource.RegisterEventHandler("","embeddedLinkClicked",false,this.onEmbeddedLinkClicked,this);Olive.EventSource.RegisterEventHandler("","richMediaPlayed",false,this.onRichMediaPlayed,this);}
function OwcContentActivityProvider_onPageViewed(oEvent)
{var oActivity=new Olive.PageContentActivity();oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.pageViewed);var sBaseHRef=oEvent.srcObject.getContentItem().m_sDocHRef;this._fillActivityObject(oActivity,oEvent,sBaseHRef,oEvent.sSectionName,oEvent.nPageNo,oEvent.sPageLabel,null,null);this._fireContentActivityEvent(oActivity);}
function OwcContentActivityProvider_onEntityClicked(oEvent)
{if(oEvent.bZoomIn&&typeof(oEvent.bZoomIn)!="undefined")
{var oActivity=new Olive.EntityContentActivity(OwcContentItem_Entity);oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.componentOpened);this._fillActivityObject(oActivity,oEvent,oEvent.sBaseHref,oEvent.sSectionName,oEvent.nPageNoClicked,oEvent.sPageLabel,oEvent.sEntityID,oEvent.sEntityTitle);this._fireContentActivityEvent(oActivity);}}
function OwcContentActivityProvider_onContentItemClicked(oEvent)
{var sBaseHRef=null;var sSectionName=null;var nPageNo=null;var sPageLabel=null;var sEntityId=null;var sEntityTitle=null;if(oEvent.OlvContentItem&&typeof(oEvent.OlvContentItem)!="undefined")
{var oItemClicked=oEvent.OlvContentItem;sBaseHRef=oItemClicked.getDocHRef();sEntityId=oItemClicked.m_sEntityId;sEntityTitle=oItemClicked.m_sTitle;nPageNo=oItemClicked.m_nPageNo;sPageLabel=oItemClicked.m_sPageLabel;sSectionName=oItemClicked.getSectionName();}
var oActivity=new Olive.EntityContentActivity(OwcContentItem_Entity);oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.componentOpened);this._fillActivityObject(oActivity,oEvent,sBaseHRef,sSectionName,nPageNo,sPageLabel,sEntityId,sEntityTitle);this._fireContentActivityEvent(oActivity);}
function OwcContentActivityProvider_onPageClicked(oEvent)
{var oActivity=null;if(oEvent.bZoomIn)
{if(oEvent.srcObject.getContentItem&&oEvent.srcObject.getContentItem())
{var oContentItem=oEvent.srcObject.getContentItem();var sDataType=oContentItem.getDataType();switch(sDataType.toLowerCase())
{case OwcContentItem_Document:oActivity=new Olive.ZoomContentActivity(OwcContentItem_Document);break;case OwcContentItem_Entity:default:oActivity=new Olive.ZoomContentActivity(OwcContentItem_Entity);break;}}
if((!oActivity||typeof(oActivity)=="undefined")&&oEvent.curObject&&typeof(oEvent.curObject)!="undefined"&&oEvent.curObject.reportError)
{var oError=Olive.Errors.createError(Olive.Errors.Code.CreateObjectFailure,"zoom activity object.");oEvent.curObject.reportError(oError);}
else
{var sBaseHRef=null;if(oContentItem.getDocHRef)
sBaseHRef=oContentItem.getDocHRef();oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.zoom);this._fillActivityObject(oActivity,oEvent,sBaseHRef,oEvent.sSectionName,oEvent.nPageNoClicked,oEvent.sPageLabel,null,null);this._fireContentActivityEvent(oActivity);}}}
function OwcContentActivityProvider_onReadyToPrint(oEvent)
{var sBaseHRef=oEvent.srcObject.getContentItem().m_sDocHRef;var oActivity=new Olive.ListOfItemsContentActivity();oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.printDocument);this._fillActivityObject(oActivity,oEvent,sBaseHRef,null,null,null,null,null);var oPrintData=null;var nCurrentPage=null;if(oEvent.srcObject.getContentItem&&oEvent.srcObject.getContentItem().m_oPrintFormData)
{oPrintData=oEvent.srcObject.getContentItem().m_oPrintFormData;if(oPrintData.m_sCurrentPage)
{nCurrentPage=Number(oPrintData.m_sCurrentPage);oActivity.set_PageNo(nCurrentPage);}
var oArrayOfPages=oPrintData.m_oPageRange.m_nArrayOfPagesToPrint;if(oArrayOfPages&&oArrayOfPages.length>0)
{var nNumOfPagesToPrint=oArrayOfPages.length;for(var i=0;i<nNumOfPagesToPrint;i++)
{var nItem=oArrayOfPages[i];oActivity.addItem(nItem);}
oActivity.set_ItemType("number");}}
this._fireContentActivityEvent(oActivity);}
function OwcContentActivityProvider_onDataPrinted(oEvent)
{var oActivity=new Olive.EntityContentActivity(OwcContentItem_Entity);var oContentItem=oEvent.OlvContentItem;if(oContentItem)
{var sBaseHRef=null;if(oContentItem.getDocHRef)
sBaseHRef=oContentItem.getDocHRef();oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.printEntity);this._fillActivityObject(oActivity,oEvent,sBaseHRef,oContentItem.m_sSection,oContentItem.m_nPageNo,oContentItem.m_sPageLabel,oContentItem.m_sEntityId,oContentItem.m_sTitle);}
this._fireContentActivityEvent(oActivity);}
function OwcContentActivityProvider_onViewerLoaded(oEvent)
{if(oEvent.bIsRequestFromViewer==false)
{var oActivity=new Olive.EntityContentActivity(OwcContentItem_Entity);var oContentItem=null;if(oEvent.srcObject.getContentItem&&oEvent.srcObject.getContentItem())
{oContentItem=oEvent.srcObject.getContentItem();if((!oContentItem.m_oPrintFormData||typeof(oContentItem.m_oPrintFormData)=="undefined")&&(oEvent.srcObject.getPurposeMode&&oEvent.srcObject.getPurposeMode()!="print"))
{var sBaseHRef=null;if(oContentItem.getDocHRef)
sBaseHRef=oContentItem.getDocHRef();oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.componentOpened);this._fillActivityObject(oActivity,oEvent,sBaseHRef,oContentItem.m_sSection,oContentItem.m_nPageNo,oContentItem.m_sPageLabel,oContentItem.m_sEntityId,oContentItem.m_sTitle);this._fireContentActivityEvent(oActivity);}}}}
function OwcContentActivityProviderSearchRes_onSearchRequest(oEvent)
{var oActivity=new Olive.SearchRequestContentActivity();oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.searchRequestSubmited);var sBaseHRef=null;var sEntityType=null;var sSearchedText=null;if(oEvent.SearchParams&&typeof(oEvent.SearchParams)!="undefined"&&oEvent.SearchParams.m_arrFields&&typeof(oEvent.SearchParams.m_arrFields)!="undefined")
{if((oEvent.SearchParams.m_arrFields.base_href&&typeof(oEvent.SearchParams.m_arrFields.base_href)!="undefined")||(oEvent.SearchParams.m_arrFields.publication&&oEvent.SearchParams.m_arrFields.publication[0]&&oEvent.SearchParams.m_arrFields.publication[0].m_arrValues&&typeof(oEvent.SearchParams.m_arrFields.publication[0].m_arrValues)!="undefined"))
{if(oEvent.SearchParams.m_arrFields.base_href&&oEvent.SearchParams.m_arrFields.base_href[0])
{sBaseHRef=oEvent.SearchParams.m_arrFields.base_href[0].getValue();oActivity.set_SearchInCurrentIssue(true);}
else
{if(oEvent.srcObject&&oEvent.srcObject.WebApplication&&oEvent.srcObject.WebApplication.getDocHRef&&oEvent.srcObject.WebApplication.getDocHRef())
sBaseHRef=oEvent.srcObject.WebApplication.getDocHRef();else if(oEvent.SearchParams.m_arrFields.publication&&oEvent.SearchParams.m_arrFields.publication[0]&&oEvent.SearchParams.m_arrFields.publication[0].m_arrValues&&oEvent.SearchParams.m_arrFields.publication[0].m_arrValues[0])
sBaseHRef=oEvent.SearchParams.m_arrFields.publication[0].m_arrValues[0];oActivity.set_SearchInCurrentIssue(false);}
this._fillActivityObject(oActivity,oEvent,sBaseHRef,null,null,null,null,null);}
if(oEvent.SearchParams.m_arrFields.entitytype&&typeof(oEvent.SearchParams.m_arrFields.entitytype)!="undefined")
{if(oEvent.SearchParams.m_arrFields.entitytype[0])
{sEntityType=oEvent.SearchParams.m_arrFields.entitytype[0].getValue();oActivity.set_EntityType(sEntityType);}}
if(oEvent.SearchParams.m_arrFields.text&&typeof(oEvent.SearchParams.m_arrFields.text)!="undefined")
{if(oEvent.SearchParams.m_arrFields.text[0])
{sSearchedText=oEvent.SearchParams.m_arrFields.text[0].getValue();oActivity.set_SearchQuery(sSearchedText);}}
this._fireContentActivityEvent(oActivity);}}
function OwcContentActivityProvider_onMailSentOk(oEvent)
{var oActivity=null;var oValue=null;if(oEvent.srcObject.getValue&&oEvent.srcObject.getValue())
{oValue=oEvent.srcObject.getValue();var oContentItem=oValue.oSrcContentItem;var sEntityId=null;if(oContentItem&&typeof(oContentItem)!="undefined")
{var sDataType=oContentItem.getDataType();switch(sDataType.toLowerCase())
{case OwcContentItem_Document:oActivity=new Olive.MailContentActivity(OwcContentItem_Document);break;case OwcContentItem_Entity:default:oActivity=new Olive.MailContentActivity(OwcContentItem_Entity);if(oContentItem.m_sEntityId&&typeof(oContentItem.m_sEntityId)!="undefined")
sEntityId=oContentItem.m_sEntityId;break;}
if((!oActivity||typeof(oActivity)=="undefined")&&oEvent.curObject&&typeof(oEvent.curObject)!="undefined"&&oEvent.curObject.reportError)
{var oError=Olive.Errors.createError(Olive.Errors.Code.CreateObjectFailure,"mail activity object.");oEvent.curObject.reportError(oError);}
else
{var sBaseHRef=null;if(oContentItem.getDocHRef)
sBaseHRef=oContentItem.getDocHRef();this._fillActivityObject(oActivity,oEvent,sBaseHRef,oContentItem.m_sSection,oContentItem.m_nPageNo,oContentItem.m_sPageLabel,sEntityId,oContentItem.m_sTitle);oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.mailSent);oValue=oEvent.srcObject.getValue();if(oValue.from)
oActivity.set_MailFrom(oValue.from);if(oValue.to)
oActivity.set_MailTo(oValue.to);if(oValue.subject)
oActivity.set_MailSubject(oValue.subject);this._fireContentActivityEvent(oActivity);}}}}
function OwcContentActivityProvider_onBookmarkAdded(oEvent)
{var oActivity=null;var oContentItem=null;if(oEvent.OlvContentItem)
{oContentItem=oEvent.OlvContentItem;var sDataType=oContentItem.getDataType();switch(sDataType.toLowerCase())
{case OwcContentItem_Document:oActivity=new Olive.ListOfItemsContentActivity(OwcContentItem_Document);break;case OwcContentItem_Entity:default:oActivity=new Olive.ListOfEntitiesContentActivity(OwcContentItem_Entity);break;}
if((!oActivity||typeof(oActivity)=="undefined")&&oEvent.curObject&&typeof(oEvent.curObject)!="undefined"&&oEvent.curObject.reportError)
{var oError=Olive.Errors.createError(Olive.Errors.Code.CreateObjectFailure,"bookmark activity object.");oEvent.curObject.reportError(oError);}
else
{var sBaseHRef=null;if(oContentItem.getDocHRef)
sBaseHRef=oContentItem.getDocHRef();oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.bookmarkAdded);this._fillActivityObject(oActivity,oEvent,sBaseHRef,oContentItem.m_sSection,oContentItem.m_nPageNo,oContentItem.m_sPageLabel,oContentItem.m_sEntityId,oContentItem.m_sTitle);this._fireContentActivityEvent(oActivity);}}}
function OwcContentActivityProvider_onBookmarkServiceItemSaved(oEvent)
{var oActivity=null;if(oEvent.oBookmarkData&&oEvent.oBookmarkData.m_oContentItem&&typeof(oEvent.oBookmarkData.m_oContentItem)!="undefined")
{var oContentItem=oEvent.oBookmarkData.m_oContentItem;var sDataType=oContentItem.getDataType();var sEntityId=null;switch(sDataType.toLowerCase())
{case OwcContentItem_Document:oActivity=new Olive.BookmarkServiceItemContentActivity(OwcContentItem_Document);break;case OwcContentItem_Entity:default:oActivity=new Olive.BookmarkServiceItemContentActivity(OwcContentItem_Entity);if(oContentItem.m_sEntityId&&typeof(oContentItem.m_sEntityId)!="undefined")
sEntityId=oContentItem.m_sEntityId;break;}
if((!oActivity||typeof(oActivity)=="undefined")&&oEvent.curObject&&typeof(oEvent.curObject)!="undefined"&&oEvent.curObject.reportError)
{var oError=Olive.Errors.createError(Olive.Errors.Code.CreateObjectFailure,"bookmark service activity object.");oEvent.curObject.reportError(oError);}
else
{var sBaseHRef=null;if(oContentItem.getDocHRef)
sBaseHRef=oContentItem.getDocHRef();oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.bookmarkServiceItemSaved);this._fillActivityObject(oActivity,oEvent,sBaseHRef,oContentItem.m_sSection,oContentItem.m_nPageNo,oContentItem.m_sPageLabel,sEntityId,oContentItem.m_sTitle);if(oEvent.oBookmarkServiceAdapter.getAdapterName)
oActivity.set_AdapterName(oEvent.oBookmarkServiceAdapter.getAdapterName());if(oEvent.oBookmarkServiceAdapter.getAdapterURL)
oActivity.set_AdapterURL(oEvent.oBookmarkServiceAdapter.getAdapterURL());this._fireContentActivityEvent(oActivity);}}}
function OwcContentActivityProvider_onLinkClicked(oEvent)
{var oActivity=null;var oParentItem=null;if(oEvent.OwcContentItem&&oEvent.OwcContentItem.m_oParentItem)
{var sDataType=null;oParentItem=oEvent.OwcContentItem.m_oParentItem;if(oParentItem.getDataType)
sDataType=oParentItem.getDataType();while(sDataType!=OwcContentItem_Entity)
{if(oParentItem.m_oParentItem)
{oParentItem=oParentItem.m_oParentItem;if(oParentItem.getDataType)
sDataType=oParentItem.getDataType();}
else
{oParentItem=null;break;}}
if(oParentItem&&typeof(oParentItem)!="undefined"&&oEvent.OwcContentItem.m_sLinkType&&oEvent.OwcContentItem.m_sLinkType.toLowerCase()!="pg")
{oActivity=new Olive.LinkContentActivity(OwcContentItem_Entity);if((!oActivity||typeof(oActivity)=="undefined")&&oEvent.curObject&&typeof(oEvent.curObject)!="undefined"&&oEvent.curObject.reportError)
{var oError=Olive.Errors.createError(Olive.Errors.Code.CreateObjectFailure,"link content activity object.");oEvent.curObject.reportError(oError);}
else
{var sBaseHRef=null;if(oParentItem.getDocHRef)
sBaseHRef=oParentItem.getDocHRef();oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.linkClicked);this._fillActivityObject(oActivity,oEvent,sBaseHRef,oParentItem.m_sSection,oParentItem.m_nPageNo,oParentItem.m_sPageLabel,oParentItem.m_sEntityId,oParentItem.m_sTitle);if(oEvent.OwcContentItem.m_sLinkType)
oActivity.set_LinkType(oEvent.OwcContentItem.m_sLinkType);if(oEvent.OwcContentItem.m_sLinkTarget)
oActivity.set_LinkTarget(oEvent.OwcContentItem.m_sLinkTarget);this._fireContentActivityEvent(oActivity);}}}}
function OwcContentActivityProvider_onEmbeddedLinkClicked(oEvent)
{var oActivity=null;if(oEvent.sLinkTYPE&&oEvent.sLinkTYPE.toLowerCase()!="pg")
{if(oEvent.sEntityId&&typeof(oEvent.sEntityId)!="endefined")
oActivity=new Olive.LinkContentActivity(OwcContentItem_Document);else
oActivity=new Olive.LinkContentActivity(OwcContentItem_Entity);if((!oActivity||typeof(oActivity)=="undefined")&&oEvent.curObject&&typeof(oEvent.curObject)!="undefined"&&oEvent.curObject.reportError)
{var oError=Olive.Errors.createError(Olive.Errors.Code.CreateObjectFailure,"link content activity object.");oEvent.curObject.reportError(oError);}
else
{oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.linkClicked);this._fillActivityObject(oActivity,oEvent,oEvent.sBaseHref,oEvent.sSectionName,oEvent.nPageNo,oEvent.sPageLabel,oEvent.sEntityId,oEvent.sEntityTitle);if(oEvent.sLinkTYPE)
oActivity.set_LinkType(oEvent.sLinkTYPE);if(oEvent.sLinkTarget)
oActivity.set_LinkTarget(oEvent.sLinkTarget);this._fireContentActivityEvent(oActivity);}}}
function OwcContentActivityProvider_onRichMediaPlayed(oEvent)
{var oActivity=null;oActivity=new Olive.RichMediaContentActivity();if((!oActivity||typeof(oActivity)=="undefined")&&oEvent.curObject&&typeof(oEvent.curObject)!="undefined"&&oEvent.curObject.reportError)
{var oError=Olive.Errors.createError(Olive.Errors.Code.CreateObjectFailure,"rich media played content activity object.");oEvent.curObject.reportError(oError);}
else
{oActivity.set_ActivityType(Olive.Activity.Data.ActivityType.richMediaPlayed);this._fillActivityObject(oActivity,oEvent,oEvent.sBaseHref,oEvent.sSectionName,oEvent.nPageNo,oEvent.sPageLabel,null,null);if(oEvent.sURL)
{var sUrl=oEvent.sURL;var nLastSlashIndex=sUrl.lastIndexOf("/");if(nLastSlashIndex>=0)
sUrl=sUrl.substr(nLastSlashIndex+1);else
sUrl="";oActivity.set_LinkTarget(sUrl);}
if(oEvent.nDuration)
oActivity.set_Duration(oEvent.nDuration);this._fireContentActivityEvent(oActivity);}}
function OwcContentActivityProvider_fillCommonData(oActivity,oEvent,sBaseHRef)
{if(!oActivity)
return;if(oEvent&&typeof(oEvent)!="undefined")
oActivity.set_EventObject(oEvent);var sPublication=this._extractDocName(sBaseHRef);var sIssuDate=this._extractIssueDate(sBaseHRef);oActivity.set_Publication(sPublication);oActivity.set_IssueDate(sIssuDate);}
function OwcContentActivityProvider_extractDocName(sBaseHRef)
{if(!sBaseHRef||typeof(sBaseHRef)=="undefined")
return null;var oPublicationData=sBaseHRef.match(/\w{1,}/i);var sPublication=null;if(oPublicationData&&oPublicationData.length&&oPublicationData.length>0)
sPublication=oPublicationData[0];return sPublication;}
function OwcContentActivityProvider_extractIssueDate(sBaseHRef)
{if(!sBaseHRef||typeof(sBaseHRef)=="undefined")
return null;var oIssuDate=sBaseHRef.match(/\d{4}\/\d{2}\/\d{2}/i);var sIssuDate=null;if(oIssuDate&&oIssuDate.length&&oIssuDate.length>0)
sIssuDate=oIssuDate[0];return sIssuDate;}
function OwcContentActivityProvider_fireContentActivityEvent(oActivity)
{var oActivityEvent=this.createOwcEventObject("contentActivityOccured");oActivityEvent.oActivity=oActivity;this.fireOwcEvent(oActivityEvent);Object_Destroy(oActivityEvent);}
function OwcContentActivityProvider_fillEntityDataFromContentItem(oEvent,oActivity,oContentItem)
{if(!oActivity||!oContentItem)
return;var sBaseHRef=null;if(oContentItem.m_sDocHRef)
sBaseHRef=oContentItem.m_sDocHRef;this._fillCommonData(oActivity,oEvent,sBaseHRef);if(oContentItem.m_sEntityId)
oActivity.set_EntityId(oContentItem.m_sEntityId);if(oContentItem.m_sSection)
oActivity.set_Section(oContentItem.m_sSection);if(oContentItem.m_sTitle)
oActivity.set_Title(oContentItem.m_sTitle);}
function OwcContentActivityProvider_fillActivityObject(oObject,oEvent,sBaseHRef,sSection,nPageNo,sPageLabel,sComponentId,sTitle)
{if((!oObject||typeof(oObject)=="undefined")&&oEvent.curObject&&typeof(oEvent.curObject)!="undefined"&&oEvent.curObject.reportError)
{var oError=Olive.Errors.createError(Olive.Errors.Code.CreateObjectFailure,"activity object.");oEvent.curObject.reportError(oError);return;}
if(oEvent&&typeof(oEvent)!="undefined"&&oObject.set_EventObject&&typeof(oObject.set_EventObject)!="undefined")
oObject.set_EventObject(oEvent);if(sBaseHRef&&typeof(sBaseHRef)!="undefined"&&oObject.set_Publication&&typeof(oObject.set_Publication)!="undefined"&&oObject.set_IssueDate&&typeof(oObject.set_IssueDate)!="undefined")
{var sPublication=this._extractDocName(sBaseHRef);var sIssuDate=this._extractIssueDate(sBaseHRef);oObject.set_Publication(sPublication);oObject.set_IssueDate(sIssuDate);}
if(sSection&&typeof(sSection)!="undefined"&&oObject.set_Section&&typeof(oObject.set_Section)!="undefined")
oObject.set_Section(sSection);if(nPageNo&&!isNaN(nPageNo)&&oObject.set_PageNo&&typeof(oObject.set_PageNo)!="undefined")
oObject.set_PageNo(nPageNo);if(sPageLabel&&typeof(sPageLabel)!="undefined"&&oObject.set_PageLabel&&typeof(oObject.set_PageLabel)!="undefined")
oObject.set_PageLabel(sPageLabel);if(sComponentId&&typeof(sComponentId)!="undefined"&&oObject.set_EntityId&&typeof(oObject.set_EntityId)!="undefined")
oObject.set_EntityId(sComponentId);if(sTitle&&typeof(sTitle)!="undefined"&&oObject.set_Title&&typeof(oObject.set_Title)!="undefined")
oObject.set_Title(sTitle);}
function OwcContentActivityProvider_buildInternalLink(sBaseHRef,sPageNo)
{if(sBaseHRef==null||typeof(sBaseHRef)=="undefined"||sPageNo==null||typeof(sPageNo)=="undefined")
return"";var sPath=sBaseHRef+"/"+sPageNo;return sPath;}
JScript.Type.RegisterClass("Olive.ContentActivityProvider",Olive.ContentActivityProvider,Olive.ActivityProvider,[Olive.IActivityDefaults]);}