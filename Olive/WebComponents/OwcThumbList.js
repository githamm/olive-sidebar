
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.ThumbList="thumb-list";Olive.Controls.controlTypeNames.ThumbListItem="page-list-item";Olive.Controls.attributes.ThumbListKind=Olive.Controls.prefix+":"+"kind";Olive.Controls.attributes.ThumbListTopicName=Olive.Controls.prefix+":"+"topic-name";Olive.Controls.attributes.ThumbListShowEmptyPage=Olive.Controls.prefix+":"+"show-empty-page";Olive.Controls.attributes.ThumbListPageCriterion=Olive.Controls.prefix+":"+"page-criterion";Olive.Controls.attributes.ThumbListCreateCoverBack=Olive.Controls.prefix+":"+"create-cover-back";Olive.Controls.attributes.ThumbListUseMagnifier=Olive.Controls.prefix+":"+"use-magnifier";Olive.Controls.attributes.ThumbListMagnifierOffset=Olive.Controls.prefix+":"+"magnifier-offset";var OwcThumbList_AllQuickNavigation="all-quick-navigation";var OwcUrlParam_ThumbListKind="ThumbListKind";var OwcUrlParam_ThumbListTopicName="topic-name";var OwcUrlParam_ThumbListShowEmptyPage="ShowEmptyPage";var OwcUrlParam_ThumbListPageCriterion="page-criterion";var OwcUrlParam_ThumbListCreateCoverBack="create-cover-back";if(!Olive.Controls.ThumbList)
{Olive.Controls.ThumbList=function OwcThumbList()
{OwcListRegisterItemType(this,"Page",Olive.Controls.controlTypeNames.ThumbListItem,"Olive.Controls.ThumbListItem");}
Olive.Controls.ThumbList.ThumbListKind={Auto:"auto",DocPages:"doc-pages",QuickNavigation:"quick-navigation",RepositoryScan:"repository-scan"}
Olive.Controls.ThumbList.DateDefinitions={FromYear:"1600",ToYear:"9999",FromMonth:"01",ToMonth:"12",FromDay:"01"}
Olive.Controls.ThumbList.onThumbnailMouseOverGlobal=function Thumblist_onThumbnailMouseOver(oElem,oEvent)
{var oHtmlElem=Olive.Controls.ThumbList.findHtmlParentByAttr(oElem,Olive.Controls.attributes.ControlType,Olive.Controls.controlTypeNames.ThumbList);var oParentControl=OwcGetControlFromHtmlElem(oHtmlElem);if(oParentControl)
{oParentControl.onThumbnailMouseOver(oElem,oEvent);}};Olive.Controls.ThumbList.onThumbnailImageLoadGlobal=function Thumblist_onImageLoad(oElem)
{var oHtmlElem=Olive.Controls.ThumbList.findHtmlParentByAttr(oElem,Olive.Controls.attributes.ControlType,Olive.Controls.controlTypeNames.ThumbList);var oParentControl=OwcGetControlFromHtmlElem(oHtmlElem);if(oParentControl)
{oParentControl.onImageLoad(oElem);}};Olive.Controls.ThumbList.findHtmlParentByAttr=function Thumblist_findHtmlParentByAttr(oHtmlElemArg,sAttrName,sAttrValue)
{var oHtmlElem=oHtmlElemArg;while(oHtmlElem)
{if(DHTML.getAttr(oHtmlElem,sAttrName)===sAttrValue)
break;oHtmlElem=oHtmlElem.parentNode;}
return oHtmlElem;};Olive.Controls.ThumbList.Templates={ThumbListFeaturedPages:"ThumbListFeaturedPages"}
Olive.Controls.ThumbList.DeclareType=function OwcThumbList_DeclareType(rObject)
{this.OverrideMethod("navigateToPage",OwcThumbList_navigateToPage);this.OverrideMethod("parseControlHtmlAttr",OwcThumbList_parseControlHtmlAttr);this.OverrideMethod("initControl",OwcThumbList_initControl);this.OverrideMethod("contentBuildControlParams",OwcThumbList_contentBuildControlParams);this.DeclareField("m_sKind",Olive.Controls.ThumbList.ThumbListKind.Auto);this.DeclareField("m_sTopicName",OwcThumbList_AllQuickNavigation);this.DeclareField("m_bShowEmptyPage",true);this.DeclareField("m_sPageCriterion",null);this.DeclareMethod("displayDocumentThumbnails",OwcThumbList_displayDocumentThumbnails);this.DeclareMethod("displayQuickNavigationLinks",OwcThumbList_displayQuickNavigationLinks);this.DeclareMethod("displayPublicationThumbnails",OwcThumbList_displayPublicationThumbnails);this.DeclareMethod("createContentItem",OwcThumbList_createContentItem);this.DeclareField("m_bCreateCoverBack",false);this.DeclareMethod("get_CreateCoverBack",OwcThumbList_get_CreateCoverBack);this.DeclareMethod("set_CreateCoverBack",OwcThumbList_set_CreateCoverBack);this.DeclareField("m_arrAnchors",null);this.DeclareField("m_nPagesCount",null);this.DeclareMethod("_assignAnchors",OwcThumbList_assignAnchors);this.DeclareMethod("_buildFromDate",OwcThumbList_buildFromDate);this.DeclareMethod("_buildToDate",OwcThumbList_buildToDate);this.DeclareField("m_bUseMagnifier",false);this.DeclareField("m_oMagnifier",null);this.DeclareMethod("onThumbnailMouseOver",OwcThumbList_onThumbnailMouseOver);this.DeclareMethod("onImageLoad",OwcThumbList_onImageLoad);}
function OwcThumbList_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.m_sKind=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.ThumbListKind,this.m_sKind);this.m_sTopicName=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.ThumbListTopicName,this.m_sTopicName);this.m_bShowEmptyPage=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.ThumbListShowEmptyPage,this.m_bShowEmptyPage);this.m_sPageCriterion=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.ThumbListPageCriterion);this.set_CreateCoverBack(DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.ThumbListCreateCoverBack,this.m_bCreateCoverBack));this.m_bUseMagnifier=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.ThumbListUseMagnifier,this.m_bUseMagnifier);}
function OwcThumbList_initControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_bUseMagnifier)
{var oPage=this.getOwnerPage();if(oPage)
this.m_oMagnifier=oPage.findControlByType(Olive.Controls.controlTypeNames.Magnifier);}}
function OwcThumbList_contentBuildControlParams(oParams)
{var oContent=this.getContentItem();var bIsQuickNavigationKind=(this.m_sKind.toLowerCase()==Olive.Controls.ThumbList.ThumbListKind.QuickNavigation);var bIsTopicNameDefined=(this.m_sTopicName!=OwcThumbList_AllQuickNavigation);if((bIsQuickNavigationKind||bIsTopicNameDefined)&&!this.m_sTemplateId)
this.m_sTemplateId=Olive.Controls.ThumbList.Templates.ThumbListFeaturedPages;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_sKind.toLowerCase()!=Olive.Controls.ThumbList.ThumbListKind.Auto)
oParams.addParam(OwcUrlParam_ThumbListKind,this.m_sKind,true);if(this.m_sTopicName&&(this.m_sTopicName.toLowerCase()!=OwcThumbList_AllQuickNavigation))
oParams.addParam(OwcUrlParam_ThumbListTopicName,this.m_sTopicName,true);if(!this.m_bShowEmptyPage)
oParams.addParam(OwcUrlParam_ThumbListShowEmptyPage,this.m_bShowEmptyPage,true);if(this.m_sPageCriterion)
oParams.addParam(OwcUrlParam_ThumbListPageCriterion,this.m_sPageCriterion,true);if(this.get_CreateCoverBack())
oParams.addParam(OwcUrlParam_ThumbListCreateCoverBack,this.get_CreateCoverBack(),true);}
function OwcThumbList_navigateToPage()
{if(this.m_bUsePagination)
{var oContent=this.getContentItem();if(oContent&&oContent.DataObjectType==OwcContentItem_PublicationThumbList&&oContent.m_nPageNo!==null)
{this._assignAnchors(oContent);}}
this.contentLoad();}
function OwcThumbList_displayDocumentThumbnails(sDocHRef,arrPages,bByPageLabels)
{var oContentItem=new Olive.ContentItem.DocumentThumbList();if(sDocHRef&&sDocHRef!="")
oContentItem.m_sDocHRef=sDocHRef;else
return;if(arrPages&&arrPages.length!=0)
{if(!bByPageLabels)
oContentItem.m_sPageNumbers=arrPages.join(",");else
oContentItem.m_sPageLabels=arrPages.join(",");}
this.m_oContentItem=oContentItem;this.contentLoad();}
function OwcThumbList_displayQuickNavigationLinks(sDocHRef,sTopicName,arrPageTitles)
{var oContentItem=new Olive.ContentItem.DocumentThumbList();if(sDocHRef&&sDocHRef!="")
oContentItem.m_sDocHRef=sDocHRef;else
return;if(sTopicName)
{this.m_sTopicName=sTopicName;if(arrPageTitles&&arrPageTitles.length!=0)
oContentItem.m_sPageTitles=arrPageTitles.join(",");}
else
this.m_sTopicName=OwcThumbList_AllQuickNavigation;this.m_oContentItem=oContentItem;this.contentLoad();}
function OwcThumbList_displayPublicationThumbnails(sPublication,sFromDate,sToDate,nDayOfWeek,sSection,sPageCriterion)
{var oContentItem=new Olive.ContentItem.PublicationThumbList();if(sPublication&&sPublication!="")
oContentItem.m_sPublication=sPublication;else
return;if(sFromDate)
oContentItem.m_sFromDate=sFromDate;if(sToDate)
oContentItem.m_sToDate=sToDate;if(nDayOfWeek)
oContentItem.m_nDayOfWeek=nDayOfWeek;if(sSection)
oContentItem.m_sSection=sSection;if(sPageCriterion)
oContentItem.m_sPageCriterion=sPageCriterion;this.m_oContentItem=oContentItem;this.contentLoad();this.m_arrAnchors=null;this.m_nPagesCount=null;}
function OwcThumbList_get_CreateCoverBack()
{return this.m_bCreateCoverBack;}
function OwcThumbList_set_CreateCoverBack(value)
{this.m_bCreateCoverBack=value;}
function OwcThumbList_createContentItem(oContentItem,sValue,sDay,nDayOfWeek,sSection,sPageCriterion)
{if(!oContentItem)
return null;var sPublication=oContentItem.getPublication();if(sPublication=="")
{sPublication="*";}
var sMonth=null;var sFromYear=null;var sToYear=null;switch(oContentItem.getDataType())
{case OwcContentItem_MonthRange:sMonth=sValue;break;case OwcContentItem_YearRange:sFromYear=sValue;sToYear=sValue;break;}
if(oContentItem.getFromYear)
sFromYear=oContentItem.getFromYear();if(oContentItem.getToYear)
sToYear=oContentItem.getToYear();this.m_oContentItem=new Olive.ContentItem.PublicationThumbList();this.m_oContentItem.m_sPublication=sPublication;this.m_oContentItem.m_sFromDate=this._buildFromDate(sFromYear,sMonth,sDay);this.m_oContentItem.m_sToDate=this._buildToDate(sToYear,sMonth,sDay);if(nDayOfWeek)
this.m_oContentItem.m_nDayOfWeek=nDayOfWeek;if(sSection)
this.m_oContentItem.m_sSection=sSection;if(sPageCriterion)
this.m_oContentItem.m_sPageCriterion=sPageCriterion;if(this.m_bUsePagination)
this.m_nPageNo=1;this.m_arrAnchors=null;this.m_nPagesCount=null;return this.m_oContentItem;}
function OwcThumbList_buildToDate(sYear,sMonth,sDay)
{var sDate="";var nYear=parseInt(sYear,10);var nMonth=parseInt(sMonth,10);if(!sYear||isNaN(nYear))
{if(sMonth&&!isNaN(nMonth))
{sYear="*";}
else
{sYear=Olive.Controls.ThumbList.DateDefinitions.ToYear;nYear=parseInt(sYear,10);}}
if(!sMonth||isNaN(nMonth))
{sMonth=Olive.Controls.ThumbList.DateDefinitions.ToMonth;nMonth=parseInt(sMonth,10);}
if(!sDay||sDay=="undefined")
{if(!sYear||isNaN(nYear))
{sDay=31;}
else
{var nDay=28;var nZeroBasedMonth=nMonth-1;var oDate=new Date(nYear,nZeroBasedMonth,nDay);var nNewMonth=oDate.getMonth();while(nZeroBasedMonth==nNewMonth)
{nDay+=1;oDate.setDate(nDay);nNewMonth=oDate.getMonth();}
sDay=(nDay-1).toString();}}
sDate=sYear+"/";sDate+=sMonth+"/";sDate+=sDay;return sDate;}
function OwcThumbList_buildFromDate(sYear,sMonth,sDay)
{var sDate="";var nYear=parseInt(sYear,10);var nMonth=parseInt(sMonth,10);if(!sYear||isNaN(nYear))
{if(sMonth&&!isNaN(nMonth))
{sYear="*";}
else
{sYear=Olive.Controls.ThumbList.DateDefinitions.FromYear;}}
if(!sMonth||isNaN(nMonth))
{sMonth=Olive.Controls.ThumbList.DateDefinitions.FromMonth;}
if(!sDay)
sDay=Olive.Controls.ThumbList.DateDefinitions.FromDay;sDate=sYear+"/";sDate+=sMonth+"/";sDate+=sDay;return sDate;}
function OwcThumbList_assignAnchors(oContent)
{if(!oContent.m_sNextAnchorPage)
return;if(!this.m_arrAnchors)
{this.m_arrAnchors=new Array("");this.m_nPagesCount=1;}
if(!isNaN(this.m_nPageNo)&&this.m_nPagesCount==oContent.m_nPageNo&&this.m_nPagesCount<this.m_nPageNo)
{this.m_arrAnchors.push(oContent.m_sNextAnchorPage);this.m_nPagesCount++;}
if(this.m_nPagesCount!=this.m_nPageNo-1)
{oContent.m_sNextAnchorPage=this.m_arrAnchors[this.m_nPageNo-1];oContent.m_nPagesCount=(this.m_nPagesCount>this.m_nPageNo)?this.m_nPagesCount:null;}}
function OwcThumbList_onThumbnailMouseOver(oHtmlElem,oEvent)
{if(this.m_bUseMagnifier&&this.m_oMagnifier)
{this.m_oMagnifier.onShow(oEvent,true);}}
function OwcThumbList_onImageLoad(oImage)
{var oThumbDiv=oImage.parentNode;var nImageOriginalWidth=0;var nImageOriginalHeight=0;var sDivWidth=DHTML.getAttr(oThumbDiv,"width");var sDivHeight=DHTML.getAttr(oThumbDiv,"height");var nThumbDivWidth=parseIntFromCssSize(sDivWidth);var nThumbDivHeight=parseIntFromCssSize(sDivHeight);if(isVersionOf_IE_AtLeast5_5())
{oImage.style.display="block";if(!oImage.width||!oImage.height)
{var oImageSave=new Image();oImageSave.src=oImage.src;nImageOriginalWidth=oImageSave.width;nImageOriginalHeight=oImageSave.height;}
else
{nImageOriginalWidth=oImage.width;nImageOriginalHeight=oImage.height;}
if(nThumbDivWidth>0&&nThumbDivHeight>0)
{var nZoom=Math.min(nThumbDivWidth/nImageOriginalWidth,nThumbDivHeight/nImageOriginalHeight);oImage.style.filter="progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11='"+String(nZoom)+"', M22='"+String(nZoom)+"')";}}
else if(isMozilla())
{var oImagesOriginal=getChildObjsByTag(oThumbDiv,"img");if(oImagesOriginal&&oImagesOriginal.length>0)
{var oImageOriginal=oImagesOriginal[0];}
var oCanvases=getChildObjsByTag(oThumbDiv,"canvas");if(oCanvases&&oCanvases.length>0)
{var oCanvas=oCanvases[0];}
if(oImageOriginal&&oCanvas)
{nImageOriginalHeight=oImageOriginal.height;nImageOriginalWidth=oImageOriginal.width;var context=oCanvas.getContext("2d");if(nThumbDivWidth>0&&nThumbDivHeight>0)
{oCanvas.width=nThumbDivWidth;oCanvas.height=nThumbDivHeight;oCanvas.style.display="block";var nCanvasHeight=oCanvas.height;var nCanvasWidth=oCanvas.width;var minHeight=Math.min(nCanvasHeight,nImageOriginalHeight);var minWidth=Math.min(nCanvasWidth,nImageOriginalWidth);context.scale(1.0,1.0);context.drawImage(oImageOriginal,0,0,minWidth,minHeight);}}}
else
{oImage.style.display="block";oImage.width=nThumbDivWidth;oImage.height=nThumbDivHeight;}}
JScript.Type.RegisterClass("Olive.Controls.ThumbList",Olive.Controls.ThumbList,Olive.Controls.List,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.ThumbList,Olive.Controls.ThumbList);}
if(!Olive.Controls.ThumbListItem)
{Olive.Controls.ThumbListItem=function OwcThumbListItem()
{}
Olive.Controls.ThumbListItem.DeclareType=function OwcThumbListItem_DeclareType()
{this.DeclareField("m_bDisableContentAutoLoad",true);this.OverrideMethod("bindHtmlElement",OwcThumbListItem_bindHtmlElement);}
Olive.Controls.ThumbListItem.ApplyPrototype=function OwcThumbListItem_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("thumbListItemMouseOver","onThumbListItemMouseOver",true);rObject.registerOwcEventsClass2("thumbListItemMouseOut","onThumbListItemMouseOut",true);}
function OwcThumbListItem_bindHtmlElement(oHtmlElement)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);DHTML.attachEvent(oHtmlElement,"mouseover",OwcThumbListItem_DHTML_onMouseOver);DHTML.attachEvent(oHtmlElement,"mouseout",OwcThumbListItem_DHTML_onMouseOut);}
function OwcThumbListItem_DHTML_onMouseOver(oEvent)
{var oControl=OwcGetControlFromHtmlElem(this);if(!oControl)
return;var oEvent=oControl.createOwcEventObject("thumbListItemMouseOver");oControl.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcThumbListItem_DHTML_onMouseOut(oEvent)
{var oControl=OwcGetControlFromHtmlElem(this);if(!oControl)
return;var oEvent=oControl.createOwcEventObject("thumbListItemMouseOut");oControl.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
JScript.Type.RegisterClass("Olive.Controls.ThumbListItem",Olive.Controls.ThumbListItem,Olive.Controls.ListItem,[Olive.Controls.IDataBound]);}