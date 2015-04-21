
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");function sortNumbers(a,b)
{return a-b;}
Olive.Controls.controlTypeNames.PrintForm="printform";var OwcUiElem_PrintCurrentPage="currentpage";var OwcUiElem_PrintFirstVisiblePage="firstvisiblepage";var OwcUiElem_PrintLastVisiblePage="lastvisiblepage";var OwcUiElem_PrintTotalPages="totalpages";var OwcUiElem_PrintSinglePageArea="singlepagearea";var OwcUiElem_PrintDoublePageArea="doublepagearea";var OwcUiElem_PrintChunksArea="printchunksarea";Olive.Controls.attributes.PrintAllPages=Olive.Controls.prefix+":"+"printallpages";Olive.Controls.attributes.PrintCurrentPage=Olive.Controls.prefix+":"+"printcurrentpage";Olive.Controls.attributes.PrintPageFormat=Olive.Controls.xmlns+"pageformat";Olive.Controls.attributes.PrintScale=Olive.Controls.xmlns+"printscale";Olive.Controls.attributes.PrintUseFullPageSize=Olive.Controls.xmlns+"usefullpagesize";if(!Olive.Data.PageRange)
{Olive.Data.PageRange=function OwcPageRange()
{};Olive.Data.PageRange.DeclareType=function OwcPageRange_DeclareType(rObject)
{this.DeclareField("m_sArrayOfPagesToPrint",null);this.DeclareMethod("getPageRangeAsString",OwcPageRange_getPageRangeAsString);this.DeclareMethod("setPageRange",OwcPageRange_setPageRange);};function OwcPageRange_getPageRangeAsString()
{return this.m_sArrayOfPagesToPrint;}
function OwcPageRange_setPageRange(sPageRange)
{this.m_sArrayOfPagesToPrint=(sPageRange?sPageRange:"");}
JScript.Type.RegisterClass("Olive.Data.PageRange",Olive.Data.PageRange);}
if(!Olive.Data.PrintFormData)
{Olive.Data.PrintFormData=function OwcPrintFormData()
{};Olive.Data.PrintFormData.DeclareType=function OwcPrintFormData_DeclareType(rObject)
{this.DeclareField("m_sPageFormat",Olive.Data.PrintFormData.FormatOfPagesToPrint.A4);this.DeclareField("m_sPageOrientation",Olive.Data.PrintFormData.PageOrientation.Portrait);this.DeclareField("m_sPageKind",Olive.Data.PrintFormData.KindOfPagesToPrint.All);this.DeclareField("m_sPrintDataType",Olive.Data.PrintFormData.UrlParams.PrintDataTypeValues.Number);this.DeclareField("m_nPrintScale",100);this.DeclareField("m_bFitToPage",true);this.DeclareField("m_sPagesRangeType",Olive.Data.PrintFormData.PagesInRangeToPrint.Current);this.DeclareField("m_oPageRange",new Olive.Data.PageRange());this.DeclareField("m_sPageRange","");this.DeclareField("m_sCurrentPage","");this.DeclareField("m_sLastVisiblePage","");this.DeclareField("m_sTotalNumOfPages",Olive.Data.PrintFormData.PagesInRangeToPrint.All);this.DeclareField("m_bPageDoubleMode",null);this.DeclareField("m_nDoublePagesToPrint",Olive.Data.PrintFormData.Double.allvisiblepages);this.DeclareField("m_sPrintItemType",OwcContentItem_Entity);this.DeclareField("m_sFirstChunk","");this.DeclareField("m_sLastChunk","");this.DeclareField("m_sPrintComponentType",Olive.ContentItem.Entity.EntityTypes.undefined);this.DeclareField("m_oComponentViewerState",null);this.DeclareMethod("getPrintForm",OwcPrintFormData_getPrintForm);this.DeclareMethod("getPageFormat",OwcPrintFormData_getPageFormat);this.DeclareMethod("setPageFormat",OwcPrintFormData_setPageFormat);this.DeclareMethod("getPageDimensions",OwcPrintFormData_getPageDimensions);this.DeclareMethod("getPageOrientation",OwcPrintFormData_getPageOrientation);this.DeclareMethod("setPageOrientation",OwcPrintFormData_setPageOrientation);this.DeclareMethod("getPageKind",OwcPrintFormData_getPageKind);this.DeclareMethod("setPageKind",OwcPrintFormData_setPageKind);this.DeclareMethod("getPrintScale",OwcPrintFormData_getPrintScale);this.DeclareMethod("setPrintScale",OwcPrintFormData_setPrintScale);this.DeclareMethod("getFitToPage",OwcPrintFormData_getFitToPage);this.DeclareMethod("setFitToPage",OwcPrintFormData_setFitToPage);this.DeclareMethod("getPrintDataType",OwcPrintFormData_getPrintDataType);this.DeclareMethod("setPrintDataType",OwcPrintFormData_setPrintDataType);this.DeclareMethod("getPagesRangeType",OwcPrintFormData_getPagesRangeType);this.DeclareMethod("setPagesRangeType",OwcPrintFormData_setPagesRangeType);this.DeclareMethod("getPageRange",OwcPrintFormData_getPageRange);this.DeclareMethod("setPageRange",OwcPrintFormData_setPageRange);this.DeclareMethod("getCurrentPage",OwcPrintFormData_getCurrentPage);this.DeclareMethod("setCurrentPage",OwcPrintFormData_setCurrentPage);this.DeclareMethod("setLastVisiblePage",OwcPrintFormData_setLastVisiblePage);this.DeclareMethod("getLastVisiblePage",OwcPrintFormData_getLastVisiblePage);this.DeclareMethod("getDoubleMode",OwcPrintFormData_getDoubleMode);this.DeclareMethod("setDoubleMode",OwcPrintFormData_setDoubleMode);this.DeclareMethod("getDoublePagesToPrint",OwcPrintFormData_getDoublePagesToPrint);this.DeclareMethod("setDoublePagesToPrint",OwcPrintFormData_setDoublePagesToPrint);this.DeclareMethod("getDoublePagesToPrintByField",OwcPrintFormData_getDoublePagesToPrintByField);this.DeclareMethod("setDoublePagesToPrintByField",OwcPrintFormData_setDoublePagesToPrintByField);this.DeclareMethod("getPrintItemType",OwcPrintFormData_getPrintItemType);this.DeclareMethod("setPrintItemType",OwcPrintFormData_setPrintItemType);this.DeclareMethod("getPrintComponentType",OwcPrintFormData_getPrintComponentType);this.DeclareMethod("setPrintComponentType",OwcPrintFormData_setPrintComponentType);this.DeclareMethod("getTotalPagesCount",OwcPrintFormData_getTotalPagesCount);this.DeclareMethod("setTotalPagesCount",OwcPrintFormData_setTotalPagesCount);this.DeclareMethod("getFirstChunk",OwcPrintFormData_getFirstChunk);this.DeclareMethod("setFirstChunk",OwcPrintFormData_setFirstChunk);this.DeclareMethod("getLastChunk",OwcPrintFormData_getLastChunk);this.DeclareMethod("setLastChunk",OwcPrintFormData_setLastChunk);this.DeclareMethod("contentBuildParams",OwcPrintFormData_contentBuildParams);this.DeclareMethod("parseRefParams",OwcPrintFormData_parseRefParams);};Olive.Data.PrintFormData.PagesInRangeToPrint={All:"all",Current:"current",Custom:"custom"};Olive.Data.PrintFormData.Double={1:"firstvisiblepage",2:"lastvisiblepage",3:"allvisiblepages",firstvisiblepage:0x00000001,lastvisiblepage:0x00000002,allvisiblepages:0x00000003};Olive.Data.PrintFormData.PageOrientation={Portrait:"portrait",Landscape:"landscape"};Olive.Data.PrintFormData.KindOfPagesToPrint={All:"all",Odd:"odd",Even:"even"};Olive.Data.PrintFormData.FormatOfPagesToPrint={A4:"a4",Letter:"letter",Legal:"legal",_11x17:"11x17"};Olive.Data.PrintFormData.PrintFullScale="full";Olive.Data.PrintFormData.UrlParams={PrintPageFilter:"printfilter",RangeValues:{PrintAllPages:"printallpages"},PrintDataType:"printdata",PrintDataTypeValues:{Label:"label",Number:"number"}};function OwcPrintFormData_getPrintForm()
{return this;}
function OwcPrintFormData_getPageFormat()
{return this.m_sPageFormat;}
function OwcPrintFormData_setPageFormat(param)
{this.m_sPageFormat=param;}
function OwcPrintFormData_getPageDimensions()
{var nWidth=642;var nHeight=910;switch(this.getPageFormat().toLowerCase())
{case Olive.Data.PrintFormData.FormatOfPagesToPrint.Letter:nWidth=640;if(isSafari())
nHeight=820;else if(isVersionOf_IE_AtLeast5_5())
nHeight=800;else
nHeight=890;break;case Olive.Data.PrintFormData.FormatOfPagesToPrint.Legal:nWidth=660;nHeight=1120;break;case Olive.Data.PrintFormData.FormatOfPagesToPrint.A4:nWidth=642;if(isSafari())
nHeight=850;else if(isVersionOf_IE_AtLeast5_5())
nHeight=900;else
nHeight=910;break;case Olive.Data.PrintFormData.FormatOfPagesToPrint._11x17:nWidth=900;nHeight=1450;break;default:break;}
var sImageOrientation=this.getPageOrientation();if(!sImageOrientation)
{var nTemp=nWidth;nWidth=nHeight;nHeight=nTemp;}
return{nWidth:nWidth,nHeight:nHeight};}
function OwcPrintFormData_getPageOrientation()
{if(this.m_sPageOrientation==Olive.Data.PrintFormData.PageOrientation.Portrait)
return true;else
return false;}
function OwcPrintFormData_setPageOrientation(param)
{if(param=="true")
this.m_sPageOrientation=Olive.Data.PrintFormData.PageOrientation.Portrait;else
this.m_sPageOrientation=Olive.Data.PrintFormData.PageOrientation.Landscape;}
function OwcPrintFormData_getPageKind()
{return this.m_sPageKind;}
function OwcPrintFormData_setPageKind(param)
{this.m_sPageKind=param;}
function OwcPrintFormData_getPrintScale()
{return this.m_nPrintScale;}
function OwcPrintFormData_setPrintScale(param)
{var nValue=100;if("string"==typeof param)
{if(param.toLowerCase()==Olive.Data.PrintFormData.PrintFullScale)
param==100;else
param=parseInt(param,10);}
if("number"==typeof param&&!isNaN(param))
nValue=param;this.m_nPrintScale=nValue;}
function OwcPrintFormData_getFitToPage()
{return this.m_bFitToPage;}
function OwcPrintFormData_setFitToPage(param)
{if("string"==typeof param)
{param=String_parseBoolean(param);}
this.m_bFitToPage=param;}
function OwcPrintFormData_getPrintDataType()
{return this.m_sPrintDataType;}
function OwcPrintFormData_setPrintDataType(param)
{this.m_sPrintDataType=param;}
function OwcPrintFormData_getPagesRangeType()
{return this.m_sPagesRangeType;}
function OwcPrintFormData_setPagesRangeType(param)
{var sRangeType=param.toLowerCase();if(JScript.Type.IsEnumEntry(Olive.Data.PrintFormData.PagesInRangeToPrint,sRangeType))
this.m_sPagesRangeType=sRangeType;else
this.m_sPagesRangeType=Olive.Data.PrintFormData.PagesInRangeToPrint.Current;}
function OwcPrintFormData_setPageRange(param,fieldtype)
{if(fieldtype=="pagestoprint")
{this.setPagesRangeType(param);}
else if(fieldtype=="custompages"&&param)
{this.m_sPageRange=param;}}
function OwcPrintFormData_getPageRange(fieldname)
{if(!fieldname)
{var oPageRange=this.m_oPageRange;if(oPageRange)
{var sPageRange="";var sPagesRangeType=this.getPagesRangeType();switch(sPagesRangeType)
{case Olive.Data.PrintFormData.PagesInRangeToPrint.Custom:sPageRange=this.m_sPageRange;break;case Olive.Data.PrintFormData.PagesInRangeToPrint.All:sPageRange=Olive.Data.PrintFormData.UrlParams.RangeValues.PrintAllPages;break;case Olive.Data.PrintFormData.PagesInRangeToPrint.Current:default:var sCurrentPage=this.getCurrentPage();var sLastVisiblePage=this.getLastVisiblePage();var bDoubleMode=this.getDoubleMode();if(bDoubleMode)
{var nDoublePagesToPrint=this.getDoublePagesToPrint();switch(nDoublePagesToPrint)
{case Olive.Data.PrintFormData.Double.firstvisiblepage:sPageRange=sCurrentPage;break;case Olive.Data.PrintFormData.Double.lastvisiblepage:sPageRange=sLastVisiblePage;break;case Olive.Data.PrintFormData.Double.allvisiblepages:sPageRange=sCurrentPage+"-"+sLastVisiblePage;break;default:break;}}
else
{sPageRange=sCurrentPage;}
break;}
oPageRange.setPageRange(sPageRange);sPageRange=oPageRange.getPageRangeAsString();}
return sPageRange;}
switch(fieldname.toLowerCase())
{case"pagestoprint":return this.getPagesRangeType();break;case"custompages":default:return this.m_sPageRange;break;}}
function OwcPrintFormData_setDoublePagesToPrintByField(sValue,fieldname)
{fieldname=fieldname.toLowerCase();if(!(JScript.Type.IsEnumEntry(Olive.Data.PrintFormData.Double,fieldname)))
return;if(sValue)
this.m_nDoublePagesToPrint|=Olive.Data.PrintFormData.Double[fieldname];else
this.m_nDoublePagesToPrint&=~Olive.Data.PrintFormData.Double[fieldname];}
function OwcPrintFormData_getDoublePagesToPrint()
{return this.m_nDoublePagesToPrint;}
function OwcPrintFormData_setDoublePagesToPrint(vParam)
{if("string"==typeof vParam&&JScript.Type.IsEnumEntry(Olive.Data.PrintFormData.Double,vParam))
this.m_nDoublePagesToPrint=Olive.Data.PrintFormData.Double[vParam];else if("number"==typeof vParam&&"string"==typeof Olive.Data.PrintFormData.Double[vParam])
this.m_nDoublePagesToPrint=vParam;}
function OwcPrintFormData_getDoublePagesToPrintByField(fieldname)
{fieldname=fieldname.toLowerCase();if(!(JScript.Type.IsEnumEntry(Olive.Data.PrintFormData.Double,fieldname)))
return false;var nMatchingBitFlags=this.m_nDoublePagesToPrint&Olive.Data.PrintFormData.Double[fieldname];return(nMatchingBitFlags==Olive.Data.PrintFormData.Double[fieldname])?fieldname:"";}
function OwcPrintFormData_getCurrentPage()
{if("number"==typeof this.m_sCurrentPage)
return String(this.m_sCurrentPage);else
return this.m_sCurrentPage;}
function OwcPrintFormData_setCurrentPage(param)
{if("number"==typeof param)
param=String(param);this.m_sCurrentPage=param;}
function OwcPrintFormData_getLastVisiblePage()
{if("number"==typeof this.m_sLastVisiblePage)
return String(this.m_sLastVisiblePage);else
return this.m_sLastVisiblePage;}
function OwcPrintFormData_setLastVisiblePage(param)
{if("number"==typeof param)
param=String(param);this.m_sLastVisiblePage=param;}
function OwcPrintFormData_getDoubleMode()
{return this.m_bPageDoubleMode;}
function OwcPrintFormData_setDoubleMode(param)
{this.m_bPageDoubleMode=param;}
function OwcPrintFormData_setTotalPagesCount(param)
{if("number"==typeof param)
param=String(param);if(param)
this.m_sTotalNumOfPages=param;}
function OwcPrintFormData_getTotalPagesCount()
{if("number"==typeof this.m_sTotalNumOfPages)
return String(this.m_sTotalNumOfPages);else
return this.m_sTotalNumOfPages;}
function OwcPrintFormData_getPrintItemType()
{return this.m_sPrintItemType;}
function OwcPrintFormData_setPrintItemType(param)
{this.m_sPrintItemType=param;}
function OwcPrintFormData_setPrintComponentType(param)
{this.m_sPrintComponentType=param;}
function OwcPrintFormData_getPrintComponentType(param)
{return this.m_sPrintComponentType;}
function OwcPrintFormData_getFirstChunk()
{return this.m_sFirstChunk;}
function OwcPrintFormData_setFirstChunk(param)
{this.m_sFirstChunk=param;}
function OwcPrintFormData_getLastChunk()
{return this.m_sLastChunk;}
function OwcPrintFormData_setLastChunk(param)
{this.m_sLastChunk=param;}
function OwcPrintFormData_contentBuildParams(oParams)
{oParams.addParam(OwcUrlParam_PageFormat,this.getPageFormat(),true);oParams.addParam(OwcUrlParam_PrintScale,this.getPrintScale(),true);oParams.addParam(OwcUrlParam_PagesToPrint,this.getPageRange(),true);oParams.addParam(Olive.Data.PrintFormData.UrlParams.PrintPageFilter,this.getPageKind(),true);oParams.addParam(Olive.Data.PrintFormData.UrlParams.PrintDataType,this.getPrintDataType(),true);}
function OwcPrintFormData_parseRefParams(oParams)
{var sPagesToPrint=oParams.getParam(OwcUrlParam_PagesToPrint,0);if(sPagesToPrint)
this.setPageRange(sPagesToPrint,"pagestoprint");var sPageFormat=oParams.getParam(OwcUrlParam_PageFormat,0);if(sPageFormat)
this.setPageFormat(sPageFormat);var sPrintScale=oParams.getParam(OwcUrlParam_PrintScale,0);if(sPrintScale)
this.setPrintScale(sPrintScale);var sPrintPageFilter=oParams.getParam(Olive.Data.PrintFormData.UrlParams.PrintPageFilter,0);if(sPrintPageFilter)
this.setPageKind(sPrintPageFilter);var sPrintDataType=oParams.getParam(Olive.Data.PrintFormData.UrlParams.PrintDataType,0);if(sPrintDataType)
this.setPrintDataType(sPrintDataType);var sItemType=oParams.getParam(OwcUrlParam_ItemType,0);if(sItemType)
this.setPrintItemType(sItemType);}
JScript.Type.RegisterClass("Olive.Data.PrintFormData",Olive.Data.PrintFormData);}
if(!Olive.UiElemType.PrintCurrentPage)
{Olive.UiElemType.PrintCurrentPage=function OwcPrintCurrentPageUiElemType()
{};Olive.UiElemType.PrintCurrentPage.DeclareType=function OwcPrintCurrentPageUiElemType_DeclareType(rObject)
{this.ReplaceMethod("updateUiElemState",OwcPrintCurrentPageUiElemType_updateUiElemState);this.ReplaceMethod("bindUiElementCustom",OwcPrintUiElemType_bindUiElementCustom);};function OwcPrintCurrentPageUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{var oValue=oControl.getValue();if(oValue&&oValue.getDoubleMode)
{var bDoubleMode=oValue.getDoubleMode();if(!bDoubleMode)
{var sCurrentPage=oValue.getCurrentPage();DHTML.pasteHtmlContent(oUiElem,sCurrentPage);}}}
function OwcPrintUiElemType_bindUiElementCustom(oControl,oUiElem)
{oControl._setContainsLabelUiElems(true);}
JScript.Type.RegisterClass("Olive.UiElemType.PrintCurrentPage",Olive.UiElemType.PrintCurrentPage,Olive.UiElemType);}
if(!Olive.UiElemType.PrintFirstVisiblePage)
{Olive.UiElemType.PrintFirstVisiblePage=function OwcPrintFirstVisiblePageUiElemType()
{};Olive.UiElemType.PrintFirstVisiblePage.DeclareType=function OwcPrintFirstVisiblePageUiElemType_DeclareType(rObject)
{this.ReplaceMethod("updateUiElemState",OwcPrintFirstVisiblePageUiElemType_updateUiElemState);this.ReplaceMethod("bindUiElementCustom",OwcPrintUiElemType_bindUiElementCustom);};function OwcPrintFirstVisiblePageUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{var oValue=oControl.getValue();if(oValue&&oValue.getDoubleMode)
{var bDoubleMode=oValue.getDoubleMode();if(bDoubleMode)
{var sCurrentPage=oValue.getCurrentPage();DHTML.pasteHtmlContent(oUiElem,sCurrentPage);}}}
JScript.Type.RegisterClass("Olive.UiElemType.PrintFirstVisiblePage",Olive.UiElemType.PrintFirstVisiblePage,Olive.UiElemType);}
if(!Olive.UiElemType.PrintLastVisiblePage)
{Olive.UiElemType.PrintLastVisiblePage=function OwcPrintLastVisiblePageUiElemType()
{};Olive.UiElemType.PrintLastVisiblePage.DeclareType=function OwcPrintLastVisiblePageUiElemType_DeclareType(rObject)
{this.ReplaceMethod("updateUiElemState",OwcPrintLastVisiblePageUiElemType_updateUiElemState);this.ReplaceMethod("bindUiElementCustom",OwcPrintUiElemType_bindUiElementCustom);};function OwcPrintLastVisiblePageUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{var oValue=oControl.getValue();if(oValue&&oValue.getDoubleMode)
{var bDoubleMode=oValue.getDoubleMode();if(bDoubleMode)
{var sLastVisiblePage=oValue.getLastVisiblePage();}
if(sLastVisiblePage)
{DHTML.pasteHtmlContent(oUiElem,sLastVisiblePage);}}}
JScript.Type.RegisterClass("Olive.UiElemType.PrintLastVisiblePage",Olive.UiElemType.PrintLastVisiblePage,Olive.UiElemType);}
if(!Olive.UiElemType.PrintTotalPages)
{Olive.UiElemType.PrintTotalPages=function OwcPrintTotalPagesUiElemType()
{};Olive.UiElemType.PrintTotalPages.DeclareType=function OwcPrintTotalPagesUiElemType_DeclareType(rObject)
{this.ReplaceMethod("updateUiElemState",OwcPrintTotalPagesUiElemType_updateUiElemState);};function OwcPrintTotalPagesUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{var oValue=oControl.getValue();if(oValue&&oValue.getTotalPagesCount)
{var sTotalPages=oValue.getTotalPagesCount();if(sTotalPages!==Olive.Data.PrintFormData.PagesInRangeToPrint.All)
{var nTotalPages=parseInt(sTotalPages,10);if(sTotalPages&&!isNaN(nTotalPages))
{DHTML.pasteHtmlContent(oUiElem,sTotalPages);}}}}
JScript.Type.RegisterClass("Olive.UiElemType.PrintTotalPages",Olive.UiElemType.PrintTotalPages,Olive.UiElemType);}
if(!Olive.UiElemType.PrintSinglePageArea)
{Olive.UiElemType.PrintSinglePageArea=function OwcPrintSinglePageAreaUiElemType()
{};Olive.UiElemType.PrintSinglePageArea.DeclareType=function OwcPrintSinglePageAreaUiElemType_DeclareType(rObject)
{this.ReplaceMethod("updateUiElemState",OwcPrintSinglePageAreaUiElemType_updateUiElemState);};function OwcPrintSinglePageAreaUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{var oValue=oControl.getValue();if(oValue&&oValue.getDoubleMode)
{var bDoubleMode=oValue.getDoubleMode();if(bDoubleMode)
{DHTML.addCssClassToElem(oUiElem,"Hidden");}
else
{DHTML.removeCssClassFromElem(oUiElem,"Hidden");}}}
JScript.Type.RegisterClass("Olive.UiElemType.PrintSinglePageArea",Olive.UiElemType.PrintSinglePageArea,Olive.UiElemType);}
if(!Olive.UiElemType.PrintDoublePageArea)
{Olive.UiElemType.PrintDoublePageArea=function OwcPrintDoublePageAreaUiElemType()
{};Olive.UiElemType.PrintDoublePageArea.DeclareType=function OwcPrintDoublePageAreaUiElemType_DeclareType(rObject)
{this.ReplaceMethod("updateUiElemState",OwcPrintDoublePageAreaUiElemType_updateUiElemState);};function OwcPrintDoublePageAreaUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{var oValue=oControl.getValue();if(oValue&&oValue.getDoubleMode)
{var bDoubleMode=oValue.getDoubleMode();if(bDoubleMode)
{DHTML.removeCssClassFromElem(oUiElem,"Hidden");}
else
{DHTML.addCssClassToElem(oUiElem,"Hidden");}}}
JScript.Type.RegisterClass("Olive.UiElemType.PrintDoublePageArea",Olive.UiElemType.PrintDoublePageArea,Olive.UiElemType);}
if(!Olive.UiElemType.PrintChunksArea)
{Olive.UiElemType.PrintChunksArea=function OwcPPrintChunksAreaUiElemType()
{};Olive.UiElemType.PrintChunksArea.DeclareType=function OwcPrintChunksAreaUiElemType_DeclareType(rObject)
{this.ReplaceMethod("updateUiElemState",OwcPrintChunksAreaUiElemType_updateUiElemState);};function OwcPrintChunksAreaUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{var bRemoveCssClassHidden=true;var oValue=oControl.getValue();if(oValue&&(oValue.getPrintComponentType||(oValue.m_oComponentViewerState&&oValue.m_oComponentViewerState.getViewMode)))
{var sEntityType=oValue.getPrintComponentType().toLowerCase();if(sEntityType==Olive.ContentItem.Entity.EntityTypes.picture.toLowerCase()||sEntityType==Olive.ContentItem.Entity.EntityTypes.ad.toLowerCase())
{bRemoveCssClassHidden=false;}
else if(oValue.m_oComponentViewerState&&oValue.m_oComponentViewerState.getViewMode&&(oValue.m_oComponentViewerState.getViewMode().toLowerCase()=="text"))
bRemoveCssClassHidden=false;else if(oValue.getFirstChunk&&oValue.getLastChunk&&(oValue.getFirstChunk()==oValue.getLastChunk()))
bRemoveCssClassHidden=false;}
if(bRemoveCssClassHidden)
DHTML.removeCssClassFromElem(oUiElem,"Hidden");else
DHTML.addCssClassToElem(oUiElem,"Hidden");}
JScript.Type.RegisterClass("Olive.UiElemType.PrintChunksArea",Olive.UiElemType.PrintChunksArea,Olive.UiElemType);}
if(!Olive.Controls.PrintForm)
{Olive.Controls.PrintForm=function OwcPrintForm()
{this.registerUiElemType(OwcUiElem_PrintCurrentPage,new Olive.UiElemType.PrintCurrentPage());this.registerUiElemType(OwcUiElem_PrintFirstVisiblePage,new Olive.UiElemType.PrintFirstVisiblePage());this.registerUiElemType(OwcUiElem_PrintLastVisiblePage,new Olive.UiElemType.PrintLastVisiblePage());this.registerUiElemType(OwcUiElem_PrintTotalPages,new Olive.UiElemType.PrintTotalPages());this.registerUiElemType(OwcUiElem_PrintSinglePageArea,new Olive.UiElemType.PrintSinglePageArea());this.registerUiElemType(OwcUiElem_PrintDoublePageArea,new Olive.UiElemType.PrintDoublePageArea());this.registerUiElemType(OwcUiElem_PrintChunksArea,new Olive.UiElemType.PrintChunksArea());this.m_oValue=this.createNewValue();};Olive.Controls.PrintForm.DeclareType=function OwcPrintForm_DeclareType(rObject)
{this.DeclareField("m_bDisableContentAutoLoad",true);this.DeclareField("m_bContainsLabelUiElems",false);this.OverrideMethod("setValue",OwcPrintForm_setValue);this.ReplaceMethod("createNewValue",OwcPrintForm_createNewValue);this.ReplaceMethod("updateControlFromDataField",OwcPrintForm_updateControlFromDataField);this.ReplaceMethod("updateDataFieldFromControl",OwcPrintForm_updateDataFieldFromControl);this.OverrideMethod("_validateData",OwcPrintForm_validateData);this.DeclareMethod("_ReadPrintData",OwcPrintForm_ReadPrintData);this.DeclareMethod("_WriteToPrintData",OwcPrintForm_WriteToPrintData);this.DeclareMethod("_updateDoublePageMode",OwcPrintForm_updateDoublePageMode);this.DeclareMethod("_setContainsLabelUiElems",OwcPrintForm_setContainsLabelUiElems);};function OwcPrintForm_setValue(oValue,bDoNotUpdateControl,bDoNotNotify)
{var bReturnOK=false;if(this.m_bContainsLabelUiElems)
oValue.setPrintDataType(Olive.Data.PrintFormData.UrlParams.PrintDataTypeValues.Label);if(this.BaseClassMethod)
bReturnOK=this.BaseClassMethod.apply(this,arguments);this._updateDoublePageMode();this.initUiState();return bReturnOK;}
function OwcPrintForm_createNewValue()
{return new Olive.Data.PrintFormData();}
function OwcPrintForm_setContainsLabelUiElems(bValue)
{this.m_bContainsLabelUiElems=bValue;}
function OwcPrintForm_updateDataFieldFromControl(oControl,oDataObject,sFieldName)
{if(!sFieldName)
return true;return this._WriteToPrintData(oControl,oDataObject,sFieldName);}
function OwcPrintForm_updateControlFromDataField(oControl,oDataObject,sFieldName)
{if(!sFieldName)
return true;return this._ReadPrintData(oControl,oDataObject,sFieldName);}
function OwcPrintForm_ReadPrintData(oControl,oDataObject,sFieldName)
{switch(sFieldName.toLowerCase())
{case"pageformat":return oControl.setValue(oDataObject.getPageFormat());case"pageorientation":return oControl.setValue(oDataObject.getPageOrientation());case"firstvisiblepage":return oControl.setValue(oDataObject.getDoublePagesToPrintByField(Olive.Data.PrintFormData.Double[Olive.Data.PrintFormData.Double.firstvisiblepage]));case"lastvisiblepage":return oControl.setValue(oDataObject.getDoublePagesToPrintByField(Olive.Data.PrintFormData.Double[Olive.Data.PrintFormData.Double.lastvisiblepage]));case"pagestoprint":return oControl.setValue(oDataObject.getPageRange("pagestoprint"));case"custompages":return oControl.setValue(oDataObject.getPageRange("custompages"));case"pagekind":return oControl.setValue(oDataObject.getPageKind());case"printscale":return oControl.setValue(oDataObject.getPrintScale());case"printdatatype":return oControl.setValue(oDataObject.getPrintDataType());case"fittopage":return oControl.setValue(oDataObject.getFitToPage());case"chunkingmode":var oComponentViewerState=oDataObject.m_oComponentViewerState;if(oComponentViewerState)
return oControl.setValue(oComponentViewerState.getChunkingMode());else
return true;default:return true;}}
function OwcPrintForm_WriteToPrintData(oControl,oDataObject,sFieldName)
{var oValue=oControl.getValue();switch(sFieldName.toLowerCase())
{case"pageformat":oDataObject.setPageFormat(oValue.toLowerCase());return true;case"pageorientation":oDataObject.setPageOrientation(oValue.toLowerCase());return true;case"firstvisiblepage":oDataObject.setDoublePagesToPrintByField(oValue,Olive.Data.PrintFormData.Double[Olive.Data.PrintFormData.Double.firstvisiblepage]);return true;case"lastvisiblepage":oDataObject.setDoublePagesToPrintByField(oValue,Olive.Data.PrintFormData.Double[Olive.Data.PrintFormData.Double.lastvisiblepage]);return true;case"pagestoprint":oDataObject.setPageRange(oValue.toLowerCase(),"pagestoprint");return true;case"custompages":oDataObject.setPageRange(oValue.toLowerCase(),"custompages");return true;case"pagekind":oDataObject.setPageKind(oValue.toLowerCase());return true;case"printscale":oDataObject.setPrintScale(oValue.toLowerCase());return true;case"printdatatype":oDataObject.setPrintDataType(oValue.toLowerCase());return true;case"chunkingmode":var oComponentViewerState=oDataObject.m_oComponentViewerState;if(oComponentViewerState)
oComponentViewerState.setChunkingMode(oValue.toLowerCase());return true;default:return true;}}
function OwcPrintForm_validateData()
{var bValidateOK=true;if(this.BaseClassMethod)
bValidateOK=this.BaseClassMethod.apply(this,arguments);if(bValidateOK)
{var oValue=this.getValue();if(oValue&&oValue.getPageRange&&oValue.getPrintItemType()=="document")
{var sPageRange=oValue.getPageRange();bValidateOK=!!sPageRange;}}
return bValidateOK;}
function OwcPrintForm_updateDoublePageMode()
{var oValue=this.getValue();if(oValue&&oValue.getDoubleMode)
{var bDoubleMode=oValue.getDoubleMode();if(bDoubleMode)
{var sCurrentPage=oValue.getCurrentPage();var sLastVisiblePage=oValue.getLastVisiblePage();}
if(!(bDoubleMode&&sCurrentPage&&sLastVisiblePage&&sCurrentPage!=sLastVisiblePage))
{oValue.setDoubleMode(false);}}}
JScript.Type.RegisterClass("Olive.Controls.PrintForm",Olive.Controls.PrintForm,Olive.Controls.Control,[Olive.Controls.IForm,Olive.IUiElements]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.PrintForm,Olive.Controls.PrintForm);}