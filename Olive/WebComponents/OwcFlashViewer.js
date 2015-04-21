
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.FlashViewer="flashviewer";Olive.Controls.attributes.FlashContentOptions=Olive.Controls.xmlns+"FlashContentOptions";Olive.Controls.attributes.BgColor=Olive.Controls.xmlns+"BgColor";Olive.Controls.attributes.AllowTransparentOnMac=Olive.Controls.xmlns+"allow-transparent-on-mac";Olive.Controls.attributes.FirstPage=Olive.Controls.xmlns+"first-page";var OwcFlashViewer_WithHits="with-hits";var OwcFlashViewer_OnEntity="on-entity";var OwcFlashParam_OpenTOCAtStart="OpenTOCAtStart";var OwcFlashParam_OnePageMode="OnePageMode";var gRefFlashReader=null;if(!Olive.Controls.FlashViewer)
{Olive.Controls.FlashViewer=function OwcFlashViewer()
{};Olive.Controls.FlashViewer.MouseMode={Text:"textload",SmartZoom:"smartzoommode",SimpleZoom:"simplezoommode",NoZoom:"nozoommode"};Olive.Controls.FlashViewer.ZoomTypes={ZoomNone:"none",ZoomWidth:"width",ZoomHeight:"height",ZoomWindow:"window",ZoomIn:"in",ZoomPercent:"percent",ZoomBox:"box",ZoomPrimitive:"primitive"};Olive.Controls.FlashViewer.AlignTypes={AlignLeft:"left",AlignXCenter:"xcenter",AlignRight:"right",AlignXNone:"xnone",AlignXStart:"xstart",AlignTop:"top",AlignYCenter:"ycenter",AlignBottom:"bottom",AlignYNone:"ynone"};Olive.Controls.FlashViewer.ResolutionTypes={entityxml:-1,pageimage:0};Olive.Controls.FlashViewer.ApplyPrototype=function OwcFlashViewer_ApplyPrototype(rObject)
{Olive.Controls.IDataBound.ImplementInterface(rObject);JScript.Type.ReplaceMethod(rObject,"bindHtmlElement",OwcFlashViewer_bindHtmlElement);JScript.Type.OverrideMethod(rObject,"initControl",OwcFlashViewer_initControl);JScript.Type.OverrideMethod(rObject,"parseControlHtmlAttr",OwcFlashViewer_parseControlHtml);JScript.Type.OverrideMethod(rObject,"contentBuildControlParams",OwcFlashReader_contentBuildControlParams);JScript.Type.OverrideMethod(rObject,"contentLoad",OwcFlashReader_contentLoad);JScript.Type.OverrideMethod(rObject,"processResponse",OwcFlashReader_processResponse);JScript.Type.ReplaceMethod(rObject,"gotoPageInternal",OwcFlashViewer_gotoPageInternal);JScript.Type.ReplaceMethod(rObject,"gotoPageByLabel",OwcFlashViewer_gotoPageByLabel);JScript.Type.ReplaceMethod(rObject,"gotoPageWithHighlighting",OwcFlashViewer_gotoPageWithHighlighting);JScript.Type.ReplaceMethod(rObject,"navigateToHit",OwcFlashViewer_navigateToHit);JScript.Type.ReplaceMethod(rObject,"navigateToBox",OwcFlashViewer_navigateToBox);JScript.Type.ReplaceMethod(rObject,"navigateToPrimitive",OwcFlashViewer_navigateToPrimitive);JScript.Type.ReplaceMethod(rObject,"cmdChangeModeDoublePage",OwcFlashViewer_cmdChangeModeDoublePage);JScript.Type.ReplaceMethod(rObject,"cmdChangeModeFlipAnimationEffect",OwcFlashViewer_cmdChangeModeFlipAnimationEffect);JScript.Type.ReplaceMethod(rObject,"cmdChangeModeHighlightTitles",OwcFlashViewer_cmdChangeModeHighlightTitles);JScript.Type.ReplaceMethod(rObject,"cmdChangeModeHighlightEntitiesOnMouseOver",OwcFlashViewer_cmdChangeModeHighlightEntitiesOnMouseOver);JScript.Type.ReplaceMethod(rObject,"setRotationInternal",OwcFlashViewer_setRotationInternal);JScript.Type.ReplaceMethod(rObject,"internalSetZoomFactor",OwcFlashViewer_internalSetZoomFactor);JScript.Type.ReplaceMethod(rObject,"zoomFitWidth",OwcFlashViewer_zoomFitWidth);JScript.Type.ReplaceMethod(rObject,"zoomFitHeight",OwcFlashViewer_zoomFitHeight);JScript.Type.ReplaceMethod(rObject,"zoomFitWindow",OwcFlashViewer_zoomFitWindow);JScript.Type.ReplaceMethod(rObject,"setPageLabels",OwcFlashViewer_setPageLabels);JScript.Type.ReplaceMethod(rObject,"_onFlipAreaOrPageButtonClickedDefault",OwcFlashViewer_onFlipAreaOrPageButtonClicked);JScript.Type.DeclareMethod(rObject,"viewerGotoPrevHitPage",OwcFlashViewer_viewerGotoPrevHitPage);JScript.Type.DeclareMethod(rObject,"viewerGotoNextHitPage",OwcFlashViewer_viewerGotoNextHitPage);JScript.Type.DeclareMethod(rObject,"viewerGotoLastHitPage",OwcFlashViewer_viewerGotoLastHitPage);JScript.Type.DeclareMethod(rObject,"viewerGotoFirstHitPage",OwcFlashViewer_viewerGotoFirstHitPage);JScript.Type.DeclareMethod(rObject,"clearSearchHits",OwcFlashViewer_clearSearchHits);JScript.Type.DeclareMethod(rObject,"loadSearchHits",OwcFlashViewer_loadSearchHits);JScript.Type.DeclareMethod(rObject,"loadSearchHitsForDocument",OwcFlashViewer_loadSearchHitsForDocument);JScript.Type.DeclareMethod(rObject,"loadSearchHitsForEntity",OwcFlashViewer_loadSearchHitsForEntity);JScript.Type.DeclareMethod(rObject,"setTextMouseMode",OwcFlashViewer_setTextMouseMode);JScript.Type.DeclareMethod(rObject,"setSmartZoomMouseMode",OwcFlashViewer_setSmartZoomMouseMode);JScript.Type.DeclareMethod(rObject,"setSimpleZoomMouseMode",OwcFlashViewer_setSimpleZoomMouseMode);JScript.Type.DeclareMethod(rObject,"setMouseMode",OwcFlashViewer_setMouseMode);JScript.Type.DeclareMethod(rObject,"getMouseMode",OwcFlashViewer_getMouseMode);JScript.Type.DeclareMethod(rObject,"queryCmdUiState_MouseMode",OwcFlashViewer_queryCmdUiState_MouseMode);JScript.Type.DeclareMethod(rObject,"downloadPDF",OwcFlashViewer_downloadPDF);JScript.Type.DeclareMethod(rObject,"print",OwcFlashViewer_print);JScript.Type.DeclareMethod(rObject,"about",OwcFlashViewer_about);JScript.Type.DeclareMethod(rObject,"saveForOffline",OwcFlashViewer_saveForOffline);JScript.Type.DeclareMethod(rObject,"toggleTOC",OwcFlashViewer_toggleTOC);JScript.Type.DeclareMethod(rObject,"sendCommandToPlugIn",OwcFlashViewer_sendCommandToPlugIn);JScript.Type.DeclareMethod(rObject,"displayDocument",OwcFlashViewer_displayDocument);JScript.Type.DeclareMethod(rObject,"readSearchQuery",OwcFlashViewer_readSearchQuery);JScript.Type.ReplaceMethod(rObject,"sendRequestRaw",OwcFlashViewer_sendRequestRaw);JScript.Type.DeclareMethod(rObject,"processCustomFlashEvent",OwcFlashReader_processCustomFlashEvent);JScript.Type.DeclareMethod(rObject,"getFlashObjRef",OwcFlashReader_getFlashObjRef);JScript.Type.DeclareMethod(rObject,"flashContainerHide",OwcFlashReader_flashContainerHide);JScript.Type.DeclareMethod(rObject,"flashContainerShow",OwcFlashReader_flashContainerShow);JScript.Type.DeclareMethod(rObject,"closeTOC",OwcFlashReader_closeTOC);JScript.Type.DeclareMethod(rObject,"generateHTMLContent",OwcFlashReader_generateHTMLContent);JScript.Type.DeclareMethod(rObject,"HighlightSearchResults",OwcFlashReader_HighlightSearchResults);JScript.Type.DeclareMethod(rObject,"HighlightSearchResults_AfterLoad",OwcFlashReader_HighlightSearchResults_AfterLoad);JScript.Type.DeclareMethod(rObject,"passToFlashObj",OwcFlashReader_passToFlashObj);JScript.Type.DeclareMethod(rObject,"sendCommandToFlashObj",OwcFlashViewer_sendCommandToFlashObj);JScript.Type.DeclareMethod(rObject,"sendCommandsToFlashObj",OwcFlashViewer_sendCommandsToFlashObj);JScript.Type.DeclareMethod(rObject,"parseQueryString",OwcFlashReader_parseQueryString);JScript.Type.DeclareMethod(rObject,"parseParams",OwcFlashReader_parseParams);JScript.Type.DeclareMethod(rObject,"isLiveConnectAvailable",OwcFlashReader_isLiveConnectAvailable);JScript.Type.DeclareMethod(rObject,"getFlashEventDataString",OwcFlashReader_getFlashEventDataString);JScript.Type.DeclareMethod(rObject,"synchronizeData",OwcFlashViewer_synchronizeData);JScript.Type.DeclareMethod(rObject,"syncField",OwcFlashViewer_syncField);JScript.Type.DeclareMethod(rObject,"dispatchFlashEvent",OwcFlashReader_DispatchFlashEvent);JScript.Type.DeclareMethod(rObject,"attachMouseWheelEvent",OwcFlashViewer_attachMouseWheelEvent);JScript.Type.DeclareMethod(rObject,"getNavigateToHitParams",OwcFlashViewer_getNavigateToHitParams);JScript.Type.DeclareField(rObject,"m_sMouseMode",Olive.Controls.FlashViewer.MouseMode.SmartZoom);JScript.Type.DeclareField(rObject,"bgColor","#808080");JScript.Type.DeclareField(rObject,"m_bAllowTransparentOnMac",false);JScript.Type.DeclareField(rObject,"m_sWModeForTransparency","transparent");JScript.Type.DeclareField(rObject,"m_sWMode","opaque");JScript.Type.DeclareField(rObject,"m_oHtmlParams",{});JScript.Type.DeclareField(rObject,"m_oAppArgParams",{});JScript.Type.DeclareField(rObject,"objChunksDataStorage",new Object());JScript.Type.DeclareField(rObject,"flashObjRef",null);JScript.Type.DeclareField(rObject,"m_sQueryStr","");JScript.Type.DeclareField(rObject,"m_sSearchStr",null);JScript.Type.DeclareField(rObject,"m_sCollection",null);JScript.Type.DeclareField(rObject,"m_sLanguage",null);JScript.Type.DeclareField(rObject,"m_sPrimId",null);JScript.Type.DeclareField(rObject,"m_nPageNo",null);JScript.Type.DeclareField(rObject,"m_sPageLabel",null);JScript.Type.DeclareField(rObject,"m_bShown",true);JScript.Type.DeclareField(rObject,"urlFlashReader","");JScript.Type.DeclareField(rObject,"urlLoaderSwfFile","");JScript.Type.DeclareField(rObject,"urlSkinSwfFile","");JScript.Type.DeclareField(rObject,"urlSplashSwfFile","");JScript.Type.DeclareField(rObject,"urlEmptySwfFile","");JScript.Type.DeclareField(rObject,"bHtmlPasteFlash",true);JScript.Type.DeclareField(rObject,"sFirstPage",OwcFlashViewer_WithHits);JScript.Type.DeclareField(rObject,"OwcBaseDir","");JScript.Type.DeclareField(rObject,"UrlParam_RequestType","RequestType");JScript.Type.DeclareField(rObject,"UrlParam_PrimitiveBox","PrimitiveBox");JScript.Type.DeclareField(rObject,"UrlParam_LoadFlash","LoadFlash");JScript.Type.DeclareField(rObject,"UrlParam_DPBaseUrl","DPBaseUrl");JScript.Type.DeclareField(rObject,"UrlParam_DPType","DataProviderType");JScript.Type.DeclareField(rObject,"UrlParam_PrimId","PrimId");JScript.Type.DeclareField(rObject,"UrlParam_Path","Path");JScript.Type.DeclareField(rObject,"UrlParam_PageNo","PageNo");JScript.Type.DeclareField(rObject,"UrlParam_Label","PageLabel");JScript.Type.DeclareField(rObject,"EP_APPLICATION_NAME","EP");if(typeof getEP_AppName=="function"&&getEP_AppName())
rObject.EP_APPLICATION_NAME=getEP_AppName();JScript.Type.DeclareField(rObject,"FlashDefaultObjId",null);JScript.Type.DeclareField(rObject,"EP_FlashUIDVarName","ResponseUID");JScript.Type.DeclareField(rObject,"EP_FlashDataVarName","ResponseData");rObject.registerOwcEventsClass2("flashEventReceived","onFlashEventReceived",true);rObject.registerOwcEventsClass2("flashGotoPage","onFlashGotoPage",true);rObject.registerOwcEventsClass2("print","onPrint",true);rObject.registerOwcEventsClass2("saveForOfflineStarted","onSaveForOfflineStarted",true);rObject.registerOwcEventsClass2("saveForOfflineEnded","onSaveForOfflineEnded",true);rObject.registerOwcEventsClass2("saveForOfflineProgress","onSaveForOfflineProgress",true);rObject.registerOwcEventsClass2("toggleFrame","onToggleFrame",true);rObject.registerOwcEventsClass2("mouseModeChanged","onMouseModeChanged",true);rObject.registerOwcEventsClass2("oldFlashPlayerVersion","onOldFlashPlayerVersion",true);rObject.registerOwcEventsClass2("errorStatusReceived","onErrorStatusReceived",true);rObject.registerOwcEventsClass2("richMediaCommand","onRichMediaCommand",true);Olive.CmdTarget.RegisterCommand(rObject,"setTextMouseMode","setTextMouseMode","queryCmdUiState_MouseMode");Olive.CmdTarget.RegisterCommand(rObject,"setSmartZoomMouseMode","setSmartZoomMouseMode","queryCmdUiState_MouseMode");Olive.CmdTarget.RegisterCommand(rObject,"setSimpleZoomMouseMode","setSimpleZoomMouseMode","queryCmdUiState_MouseMode");Olive.CmdTarget.RegisterCommand(rObject,"downloadPDF","downloadPDF",null);Olive.CmdTarget.RegisterCommand(rObject,"print","print",null);Olive.CmdTarget.RegisterCommand(rObject,"about","about",null);Olive.CmdTarget.RegisterCommand(rObject,"saveForOffline","saveForOffline",null);};function OwcFlashViewer_receiveErrorFromFlash()
{var sSelfID=arguments[0];var sErrorMessage=arguments[1];var oFlashReaderCtrl=OwcGetControl(sSelfID,true);var oEvent=oFlashReaderCtrl.createOwcEventObject("errorStatusReceived");oEvent.sErrorMessage=sErrorMessage;oFlashReaderCtrl.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcFlashViewer_bindHtmlElement(oHtmlElement)
{OwcControl_bindHtmlElement.call(this,oHtmlElement);if(!isVersionOf_IE_AtLeast5_5()&&(this.m_sWMode=="transparent"||this.m_sWMode=="opaque"))
{this.attachMouseWheelEvent(oHtmlElement,OwcFlashViewer_DHTML_onMouseWheel);}}
function OwcFlashViewer_initControl()
{this.FlashDefaultObjId=generateUniqueID("FlashReader");if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcFlashViewer_parseControlHtml(){if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var contentOptions=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.FlashContentOptions);if(contentOptions)
{this.m_oHtmlParams=this.parseParams(contentOptions);}
this.m_bAllowTransparentOnMac=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.AllowTransparentOnMac,this.m_bAllowTransparentOnMac);if(isMacintosh()&&!this.m_bAllowTransparentOnMac)
{this.m_sWModeForTransparency="opaque";}
var bgColor=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.BgColor);if(!bgColor&&!!this.WebApplication)
bgColor=this.WebApplication.getPreference("flash-bg-color");if(bgColor)
{if(bgColor.toLowerCase()=="transparent")
{this.m_sWMode=this.m_sWModeForTransparency;bgColor="";}
this.bgColor=bgColor;}
var sFirstPage=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.FirstPage);if(sFirstPage)
{sFirstPage=sFirstPage.toLowerCase();if((sFirstPage!=OwcFlashViewer_WithHits)&&(sFirstPage!=OwcFlashViewer_OnEntity))
this.reportKnownError(Olive.Errors.Code.InvalidHtmlAttrValue,Olive.Controls.attributes.FieldName,sFirstPage);else
this.sFirstPage=sFirstPage;}
gRefFlashReader=this;}
function OwcFlashReader_parseParams(sParams){var retVal={};var arrOptions=sParams.split("||");for(var j=0;j<arrOptions.length;j++){arrOptions[j]=arrOptions[j].replace(/\|_/g,"|");var arrOptionsSplit=arrOptions[j].split("=");if(arrOptionsSplit.length>1){retVal[arrOptionsSplit[0]]=arrOptionsSplit[1];}}
return retVal;}
function OwcFlashViewer_displayDocument(bHtmlPasteFlash,oAppArgParams)
{this.m_nPageNo=null;this.m_sPrimId=null;this.m_sEntityId=null;this.m_sPageLabel=null;this.m_sCollection=null;this.m_sSearchStr=null;this.m_sLanguage=null;this.m_sQueryStr=null;if(oAppArgParams)
this.m_oAppArgParams=oAppArgParams;var fvContentItem=this.getContentItem();if(fvContentItem)
{if(fvContentItem.m_nFirstHitPage&&this.sFirstPage==OwcFlashViewer_WithHits)
{this.m_nPageNo=fvContentItem.m_nFirstHitPage;fvContentItem.m_nPageNo=this.m_nPageNo;}
else if(fvContentItem.m_nPageNo)
{this.m_nPageNo=fvContentItem.m_nPageNo;}
if(fvContentItem.m_sPrimId)
this.m_sPrimId=fvContentItem.m_sPrimId;if(fvContentItem.m_sPageLabel)
this.m_sPageLabel=fvContentItem.m_sPageLabel;var fvSearchQuery=null;var fvSearchResult=null;var fvDocument=null;for(var oDataItem=fvContentItem;oDataItem;oDataItem=oDataItem.m_oParentItem)
{if(oDataItem.DataObjectType==OwcContentItem_Document)
fvDocument=oDataItem;else if(oDataItem.DataObjectType==OwcContentItem_SearchResult)
fvSearchResult=oDataItem;else if(oDataItem.DataObjectType==OwcContentItem_SearchQuery)
fvSearchQuery=oDataItem.m_oSearchParams;}
if(fvSearchResult)
{this.m_sCollection=fvSearchResult.m_sCollection;this.m_sEntityId=fvSearchResult.m_sEntityId;if(!fvDocument&&fvSearchResult.m_nTotalHitsCount>0&&fvSearchResult.m_nContentHitsCount!=0)
{this.m_sPrimId=null;fvContentItem.m_sPrimId=null;}}
else if(fvContentItem.m_sCollection)
this.m_sCollection=fvContentItem.m_sCollection;if(fvSearchQuery)
this.readSearchQuery(fvSearchQuery);}
if(typeof(bHtmlPasteFlash)=="boolean")
this.bHtmlPasteFlash=bHtmlPasteFlash;this.contentLoad();}
function OwcFlashViewer_readSearchQuery(oSearchQuery)
{this.m_sSearchStr=oSearchQuery.toString();}
function OwcFlashReader_contentBuildControlParams(oParams)
{var mergedParams={};var qsParams={};if(this.m_sQueryStr&&this.m_sQueryStr!="undefined")
qsParams=this.parseParams(this.m_sQueryStr);var sParamName;for(sParamName in this.m_oHtmlParams)
mergedParams[sParamName]=this.m_oHtmlParams[sParamName];for(sParamName in this.m_oAppArgParams)
mergedParams[sParamName]=this.m_oAppArgParams[sParamName];for(sParamName in qsParams)
mergedParams[sParamName]=qsParams[sParamName];for(sParamName in mergedParams)
oParams.addParam(sParamName,mergedParams[sParamName]);if(this.m_sPageLabel)
oParams.addParam(this.UrlParam_Label,this.m_sPageLabel);if(this.m_sLanguage)
{oParams.addParam("Language",this.m_sLanguage);var langLC=this.m_sLanguage.toLowerCase();if(langLC=="hebrew"||langLC=="ar"||langLC=="arabic")
oParams.addParam("Hebrew","1");}
oParams.addParam("AppName",this.EP_APPLICATION_NAME);var flashObj=this.getFlashObjRef();oParams.addParam(this.UrlParam_DPBaseUrl,this.getDataProviderUrl());oParams.addParam(this.UrlParam_DPType,Olive.Controls.controlTypeNames.FlashViewer);oParams.addParam(this.UrlParam_RequestType,this.UrlParam_LoadFlash);if(isMozilla())
oParams.addParam(OwcUrlParam_IsMozilla,true,true);if(this.m_sEntityId)
oParams.addParam("EntityId",this.m_sEntityId,true);}
function OwcFlashReader_contentLoad()
{if(!this.bHtmlPasteFlash)
{if(this.m_sSearchStr)
this.HighlightSearchResults();else
{if(!this.getContentItem().m_nPageNo)
this.getContentItem().m_nPageNo="1";this.BaseClassMethod.apply(this,arguments);}
return;}
if(!this.contentCanLoad())
return;this.setDocumentLoaded(false,false,"");this.objChunksDataStorage=new Object();var oParams=new QueryString();oParams.m_bCaseSensitive=true;this.contentBuildParams(oParams);if(this.contentBuildControlParams)
this.contentBuildControlParams(oParams);if(this.WebApplication)
this.WebApplication.updateRequestParams(oParams);if(this.m_sSearchStr)
{this.attachOwcEventHandler("documentLoaded",this.HighlightSearchResults_AfterLoad,this);}
var htmlContent=this.generateHTMLContent(false,oParams);if(this.HtmlElement)
this.HtmlElement.innerHTML="";var overflowBefore=this.HtmlElement.style.overflow.valueOf();this.HtmlElement.style.overflow="";this.HtmlElement.innerHTML=htmlContent;this.HtmlElement.style.overflow=overflowBefore;var body=this.HtmlElement.parentElement;if(body)
body.bgColor=this.bgColor;this.flashObjRef=eval("document."+this.FlashDefaultObjId);}
function OwcFlashViewer_sendRequestRaw(oHtmlContentTarget,sUrl,oPostData,sMethod,bAsync)
{var oRequest=Olive.XHTTP.CreateRequest();oRequest.m_OwcControl=this;oRequest.onDataReceived=Olive.Controls.IDataBound.Request_onDataReceived;oRequest.onError=Olive.Controls.IDataBound.Request_onDataError;if(this.WebApplication&&this.WebApplication.hookSendRequest)
this.WebApplication.hookSendRequest(oRequest);var oEvent=this.createOwcEventObject("sendingRequest");oEvent.Request=oRequest;this.fireOwcEvent(oEvent);var bCancelDefaultAction=oEvent.cancelDefaultAction;Object_Destroy(oEvent);if(bCancelDefaultAction)
return;oRequest.load(sUrl,sMethod,bAsync,oPostData);}
function OwcFlashReader_processResponse(oRequest){var oEvent=this.createOwcEventObject("dataReceived");oEvent.Request=oRequest;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);this.parseResponseText(oRequest);this.m_nPageNo=null;this.m_sPrimId=null;}
function OwcFlashViewer_gotoPageWithHighlighting(nPageNo,sPrimitiveId,sEntityId,bRelativeNavigation,nContinuousScroll,bOpenGatefold)
{if((!sPrimitiveId||sPrimitiveId=="")&&(!sEntityId||sEntityId==""))
{if(typeof(nPageNo)=="string")
{nPageNo=parseInt(nPageNo,10);if(isNaN(nPageNo))
return false;}
if(typeof(nPageNo)!="number")
return false;this.sendCommandToFlashObj("gotoPageById",{'nPageNo':nPageNo,'bRelativeNavigation':(!!bRelativeNavigation),'nContinuousScroll':nContinuousScroll,'bOpenGatefold':(!!bOpenGatefold)});return true;}
if(!this.getDocumentLoaded())
return false;this.sendCommandToFlashObj("gotoPageAndHighlight",{'pageNumber':nPageNo,'primitiveId':sPrimitiveId,'entityId':sEntityId});return true;}
function OwcFlashViewer_navigateToHit(sDocHRef,sEntityId,nEntityPageNo,nFirstHitPageNo,sHitBoxCenter,bHighlightEntityCaption,sZoom,bDoNotCreateContentItem)
{var oParams={sDocHRef:sDocHRef,sEntityId:sEntityId,nEntityPageNo:nEntityPageNo,nFirstHitPageNo:nFirstHitPageNo,sHitBoxCenter:sHitBoxCenter,bHighlightEntityCaption:bHighlightEntityCaption,sZoom:sZoom};if(sDocHRef==this.getCurrentDocHRef())
this.sendCommandToFlashObj("navigateToHit",oParams);else
{this.addPendingAction({sFunction:"navigateToHit",oParams:oParams});if(!bDoNotCreateContentItem)
{var oContentItem=Olive.ContentItem.CreateByType(OwcContentItem_Document);oContentItem.m_sDocHRef=sDocHRef;oContentItem.m_nPageNo=nFirstHitPageNo>0?nFirstHitPageNo:nEntityPageNo;this.m_oContentItem=oContentItem;}
this.displayDocument(true);}}
function OwcFlashViewer_getNavigateToHitParams(oContentItem)
{var sBox="-1 -1";if(oContentItem.m_nFirstHitPage>0)
{sBox=(oContentItem.m_nFirstHitX*4)+" "+(oContentItem.m_nFirstHitY*4);}
var nPageNo=oContentItem.m_nPageNo>0?oContentItem.m_nPageNo:1;var sPrimitiveId=oContentItem.m_sPrimId;return{sDocHRef:oContentItem.getDocHRef(),sEntityId:oContentItem.m_sEntityId,nEntityPageNo:nPageNo,nFirstHitPageNo:oContentItem.m_nFirstHitPage,sHitBoxCenter:sBox};}
function OwcFlashViewer_navigateToBox(sDocHRef,nPageNo,sBox,sZoom,sAlign,nBoxResolution,bDoNotCreateContentItem)
{if(nBoxResolution==undefined||nBoxResolution==null)
nBoxResolution=0;var oParams={sDocHRef:sDocHRef,nPageNo:nPageNo,sBox:sBox,sZoom:sZoom,sAlign:sAlign,nBoxResolution:nBoxResolution};if(sDocHRef==this.getCurrentDocHRef())
this.sendCommandToFlashObj("navigateToBox",oParams);else
{this.addPendingAction({sFunction:"navigateToBox",oParams:oParams});if(!bDoNotCreateContentItem)
{var oContentItem=Olive.ContentItem.CreateByType(OwcContentItem_Document);oContentItem.m_sDocHRef=sDocHRef;oContentItem.m_nPageNo=nPageNo;this.m_oContentItem=oContentItem;}
this.displayDocument(true);}}
function OwcFlashViewer_navigateToPrimitive(sDocHRef,nPageNo,sEntityId,sPrimitiveId,bHighlightPrimitive,sZoom,bDoNotCreateContentItem)
{var oParams={sDocHRef:sDocHRef,nPageNo:nPageNo,sEntityId:sEntityId,sPrimitiveId:sPrimitiveId,bHighlightPrimitive:bHighlightPrimitive,sZoom:sZoom};if(sDocHRef==this.getCurrentDocHRef())
this.sendCommandToFlashObj("navigateToPrimitive",oParams);else
{this.addPendingAction({sFunction:"navigateToPrimitive",oParams:oParams});if(!bDoNotCreateContentItem)
{var oContentItem=Olive.ContentItem.CreateByType(OwcContentItem_Document);oContentItem.m_sDocHRef=sDocHRef;oContentItem.m_nPageNo=nPageNo;oContentItem.m_sEntityId=sEntityId;oContentItem.m_sPrimId=sPrimitiveId;this.m_oContentItem=oContentItem;}
this.displayDocument(true);}}
function OwcFlashViewer_onFlipAreaOrPageButtonClicked(oEvent)
{if(!oEvent)
return;var oNavigation=this.calculateDestinationPage(oEvent.sDirection,oEvent.nDestinationPage);this.gotoPageInternal(oNavigation.nPageNo,oNavigation.bRelativeNavigation,oEvent.nContinuousScroll,oEvent.bOpenGatefold);}
function OwcFlashViewer_gotoPageByLabel(sPageLabel){var flashObj=this.getFlashObjRef();if(flashObj.olv_gotoPageByLabel(sPageLabel))
return true;this.reportKnownError(Olive.Errors.Code.InvalidPage);this.notifyCmdStateChanged();return false;}
function OwcFlashViewer_gotoPageInternal(nPageNo,bRelativeNavigation,nContinuousScroll,bOpenGatefold)
{var oEvent=this.createOwcEventObject("flashGotoPage");oEvent.nPageNo=nPageNo;oEvent.addCommand=null;this.fireOwcEvent(oEvent);var addCommand=oEvent.addCommand;var bCancelDefaultAction=oEvent.cancelDefaultAction;Object_Destroy(oEvent);if(bCancelDefaultAction)
return;if(addCommand)
{this.sendCommandsToFlashObj([{commandName:"gotoPageById",oDataParams:{'nPageNo':nPageNo,'bRelativeNavigation':(!!bRelativeNavigation),'nContinuousScroll':nContinuousScroll,'bOpenGatefold':bOpenGatefold}},{commandName:addCommand.commandName,oDataParams:addCommand.params}]);}
else
this.sendCommandToFlashObj("gotoPageById",{'nPageNo':nPageNo,'bRelativeNavigation':(!!bRelativeNavigation),'nContinuousScroll':nContinuousScroll,'bOpenGatefold':bOpenGatefold});}
function OwcFlashViewer_cmdChangeModeDoublePage(newState,nPageNo)
{this.sendCommandToFlashObj("cmdChangeModeDoublePage",{'newState':newState,'nPageNo':nPageNo});}
function OwcFlashViewer_cmdChangeModeFlipAnimationEffect(newState)
{this.sendCommandToFlashObj("cmdChangeModeFlipAnimationEffect",{'newState':newState});}
function OwcFlashViewer_cmdChangeModeHighlightTitles(newState)
{this.sendCommandToFlashObj("cmdChangeModeHighlightTitles",{'newState':newState});}
function OwcFlashViewer_cmdChangeModeHighlightEntitiesOnMouseOver(newState)
{this.sendCommandToFlashObj("cmdChangeModeHighlightEntitiesOnMouseOver",{'newState':newState});}
function OwcFlashViewer_internalSetZoomFactor(nZoomFactor)
{this.sendCommandToFlashObj("setZoomFactor",{'nZoomFactor':nZoomFactor*100});}
function OwcFlashViewer_zoomFitWidth()
{this.sendCommandToFlashObj("zoomFitWidth",null);}
function OwcFlashViewer_zoomFitHeight()
{this.sendCommandToFlashObj("zoomFitHeight",null);}
function OwcFlashViewer_zoomFitWindow()
{this.sendCommandToFlashObj("zoomFitWindow",null);}
function OwcFlashViewer_viewerGotoPrevHitPage()
{this.sendCommandToFlashObj("gotoPrevHitPage",null);}
function OwcFlashViewer_viewerGotoNextHitPage()
{this.sendCommandToFlashObj("gotoNextHitPage",null);}
function OwcFlashViewer_viewerGotoFirstHitPage()
{this.sendCommandToFlashObj("gotoFirstHitPage",null);}
function OwcFlashViewer_viewerGotoLastHitPage()
{this.sendCommandToFlashObj("gotoLastHitPage",null);}
function OwcFlashViewer_setRotationInternal(nRotation)
{this.sendCommandToFlashObj("setRotation",{"nRotation":nRotation});}
function OwcFlashViewer_setTextMouseMode()
{this.sendCommandToFlashObj("setTextMouseMode",null);}
function OwcFlashViewer_setSmartZoomMouseMode()
{this.sendCommandToFlashObj("setSmartZoomMouseMode",null);}
function OwcFlashViewer_setSimpleZoomMouseMode()
{this.sendCommandToFlashObj("setSimpleZoomMouseMode",null);}
function OwcFlashViewer_setMouseMode(sNewMouseMode,bDoNotNotify)
{if(typeof(sNewMouseMode)!="string")
return false;switch(sNewMouseMode.toLowerCase())
{case Olive.Controls.FlashViewer.MouseMode.Text:case Olive.Controls.FlashViewer.MouseMode.SmartZoom:case Olive.Controls.FlashViewer.MouseMode.SimpleZoom:break;default:return false;}
this.m_sMouseMode=sNewMouseMode.toLowerCase();if(!bDoNotNotify)
this.notifyCmdStateChanged();return true;}
function OwcFlashViewer_getMouseMode()
{return this.m_sMouseMode;}
function OwcFlashViewer_queryCmdUiState_MouseMode(oCmdUiState)
{var bEnableCommand=this.getDocumentLoaded();var bChecked=false;switch(oCmdUiState.commandName.toLowerCase())
{case"settextmousemode":bChecked=(this.getMouseMode().toLowerCase()==Olive.Controls.FlashViewer.MouseMode.Text)?true:false;break;case"setsmartzoommousemode":bChecked=(this.getMouseMode().toLowerCase()==Olive.Controls.FlashViewer.MouseMode.SmartZoom)?true:false;break;case"setsimplezoommousemode":bChecked=(this.getMouseMode().toLowerCase()==Olive.Controls.FlashViewer.MouseMode.SimpleZoom)?true:false;break;default:bEnableCommand=false;break}
oCmdUiState.checkCommand(bChecked);oCmdUiState.enableCommand(bEnableCommand);return false;}
function OwcFlashViewer_downloadPDF()
{this.sendCommandToFlashObj("downloadPDF",null);}
function OwcFlashViewer_print()
{this.sendCommandToFlashObj("print",null);}
function OwcFlashViewer_about()
{this.sendCommandToFlashObj("aboutInfo",null);}
function OwcFlashViewer_saveForOffline()
{this.sendCommandToFlashObj("saveForOffline",null);}
function OwcFlashViewer_toggleTOC()
{this.sendCommandToFlashObj("toggleTOC",null);}
function OwcFlashViewer_sendCommandToPlugIn(sPlugInID,sFunctionName,sJSONArgument)
{this.sendCommandToFlashObj("sendCommandToPlugIn",{'sPlugInID':sPlugInID,'sFunctionName':sFunctionName,'sJSONArgument':sJSONArgument});}
function OwcFlashViewer_sendCommandToFlashObj(sCommandName,oDataParams)
{var xmlCommandData='<?xml version="1.0" encoding="utf-8" ?>'
+'<Command>'
+'<Param NAME="CommandID">'+sCommandName+'</Param>';for(var sPropName in oDataParams)
{var oPropValue=oDataParams[sPropName];xmlCommandData+='<Param NAME="'+sPropName+'">'+oPropValue+'</Param>';}
xmlCommandData+='</Command>';this.passToFlashObj("APIProvider",xmlCommandData);}
function OwcFlashViewer_sendCommandsToFlashObj(arrCommands)
{var xmlCommandData='<?xml version="1.0" encoding="utf-8" ?>'
+'<Commands>';for(var i=0;i<arrCommands.length;++i)
{var currentCommand=arrCommands[i];var sCommandName=currentCommand.commandName;xmlCommandData+='<Command>'+'<Param NAME="CommandID">'+sCommandName+'</Param>';var oDataParams=currentCommand.oDataParams;for(var sPropName in oDataParams)
{var oPropValue=oDataParams[sPropName];xmlCommandData+='<Param NAME="'+sPropName+'">'+oPropValue+'</Param>';}
xmlCommandData+='</Command>';}
xmlCommandData+='</Commands>';this.passToFlashObj("APIProvider",xmlCommandData);}
function OwcFlashReader_closeTOC()
{this.toggleTOC();if(this.flashObjRef&&this.flashObjRef.focus)
{DHTML.focus(this.flashObjRef);}}
function OwcFlashViewer_clearSearchHits()
{this.sendCommandToFlashObj("clearSearchHits",null);}
function OwcFlashViewer_loadSearchHits(nPageNo,sPageLabel,sSearchQuery,bLoadHitsForDocument,sEntityId,sPrimId,sDocHRef,bDoNotNavigate)
{var searchData={sSearchPhrase:encodeURIComponent((sSearchQuery)?sSearchQuery:this.m_sSearchStr),sEntityId:(sEntityId)?sEntityId:this.m_sEntityId,sPrimId:(sPrimId)?sPrimId:this.m_sPrimId,nPageNo:(nPageNo)?nPageNo:this.m_nPageNo,sPageLabel:(sPageLabel)?sPageLabel:this.m_sPageLabel,sDocCollection:"",sDocHRef:sDocHRef?sDocHRef:"",bDoNotNavigate:!!bDoNotNavigate};var sCommandId="loadSearchHits";if(typeof(bLoadHitsForDocument)!="boolean")
bLoadHitsForDocument=this.getModeViewHitsForDocument();if(bLoadHitsForDocument)
{sCommandId="loadSearchHitsForDocument";}
if(!sDocHRef||sDocHRef==this.getCurrentDocHRef())
this.sendCommandToFlashObj(sCommandId,searchData);else
{this.addPendingAction({sFunction:sCommandId,oParams:searchData});}}
function OwcFlashViewer_loadSearchHitsForEntity(nPageNo,sPageLabel,sSearchQuery,sEntityId,sPrimId,sDocHRef,bDoNotNavigate)
{this.loadSearchHits(nPageNo,sPageLabel,sSearchQuery,false,sEntityId,sPrimId,sDocHRef,bDoNotNavigate);}
function OwcFlashViewer_loadSearchHitsForDocument(nPageNo,sPageLabel,sSearchQuery,sEntityId,sPrimId,sDocHRef,bDoNotNavigate)
{this.loadSearchHits(nPageNo,sPageLabel,sSearchQuery,true,sEntityId,sPrimId,sDocHRef,bDoNotNavigate);}
function OwcFlashReader_HighlightSearchResults_AfterLoad(oEvent)
{this.detachOwcEventHandler("documentLoaded",this.HighlightSearchResults_AfterLoad,this);this.HighlightSearchResults();}
function OwcFlashReader_HighlightSearchResults()
{if(!this.m_sSearchStr)
return;if(this.m_nPageNo>0)
this.loadSearchHits();else
{this.m_sSearchStr=null;this.gotoPageWithHighlighting(this.m_nPageNo,this.m_sPrimId,this.m_sEntityId)}
this.m_sSearchStr=null;}
function OwcFlashReader_generateHTMLContent(i_bIsProxyObj,oParams){var content,id,MovieClipSrc,height,width,bgColor=this.bgColor;id=this.FlashDefaultObjId;MovieClipSrc=this.FlashSourceUrl;height="100%";width="100%";oParams.addParam("SELF_ID",id);if(this.WebApplication&&this.WebApplication.m_sCulture)
oParams.addParam("App_LANG",this.WebApplication.m_sCulture);oParams.addParam("HTML_EVENT_HANDLER","OwcFlashReader_handleFlashEvent");oParams.removeParam(OwcUrlParam_Field);var sUrl=this.buildRequestUrl(oParams);content="<OBJECT classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0'";content+="WIDTH='"+width+"' HEIGHT='"+height+"' id='"+id+"' ALIGN='' VIEWASTEXT>";content+="<PARAM NAME='movie' VALUE=\""+sUrl+"\">";content+="<PARAM NAME='SCALE' value='noscale'>";content+="<PARAM NAME='salign' VALUE='LT'>";content+="<PARAM NAME='swLiveConnect' VALUE='true'>";content+="<PARAM NAME='quality' VALUE='high'>";content+="<param name='allowFullScreen' value='true' />";content+="<param name='allowScriptAccess' value='always' />";content+="<param name='wmode' value='"+this.m_sWMode+"' />";content+="<PARAM NAME=bgcolor VALUE='"+bgColor+"'>";content+="<EMBED  src=\""+sUrl+"\" ";content+="quality='high' wmode='"+this.m_sWMode+"' bgcolor='"+bgColor+"' ";content+=" WIDTH='"+width+"' HEIGHT='"+height+"' ";content+="NAME='"+id+"' "+"allowFullScreen='true' allowScriptAccess='always' ";content+="ALIGN='top' TYPE='application/x-shockwave-flash' PLUGINSPAGE='http://www.macromedia.com/go/getflashplayer' ";content+=" scale='noscale' salign='LT'>";content+="</EMBED></OBJECT>";return content;}
function OwcFlashReader_contentCallback(elmContent,requestId,callUid,i_queryStr){dataFrameObj.release();if(typeof(i_queryStr)!="undefined"&&i_queryStr!="")
this.parseQueryString(i_queryStr.split("|"));if(decodeURIComponent(elmContent.value).indexOf("Media not")!=-1)
this.reportKnownError(Olive.Errors.Code.MediaNotInserted);this.passToFlashObj(callUid,decodeURIComponent(elmContent.value));}
function OwcFlashReader_setFlashObjRef(i_objRef)
{if(typeof(i_objRef)!="undefined"&&i_objRef)
this.flashObjRef=i_objRef;else
{var refObj=eval("document."+this.FlashDefaultObjId);if(this.HtmlElement&&refObj)
this.flashObjRef=refObj;}}
function OwcFlashReader_getFlashObjRef(){var flashObj=this.flashObjRef;if(flashObj==null)
return null;if(flashObj[0])
flashObj=flashObj[0];return flashObj;}
function OwcFlashReader_parseQueryString(i_queryArr)
{for(var i=0;i<i_queryArr.length-1;++i){switch(i_queryArr[i].split("=")[0]){case"UrlFlashReader":this.urlFlashReader=i_queryArr[i].split("=")[1];break;case"UrlLoader":this.urlLoaderSwfFile=i_queryArr[i].split("=")[1];break;case"UrlReader":this.urlReaderSwfFile=i_queryArr[i].split("=")[1];break;case"UrlSplash":this.urlSplashSwfFile=i_queryArr[i].split("=")[1];break;case"UrlSkin":this.urlSkinSwfFile=i_queryArr[i].split("=")[1];break;case"UrlEmpty":this.urlEmptySwfFile=i_queryArr[i].split("=")[1];break;case"IISLess":var strVal=i_queryArr[i].split("=")[1];if(strVal.indexOf("false")!=-1)
this.bIsIISLessVersion=false;else
if(strVal.indexOf("true")!=-1)
this.bIsIISLessVersion=true;break;case"ReaderBGColor":this.bgcolor=i_queryArr[i].split("=")[1];break;}}}
function FlashReader_DoFSCommand(command,args){switch(command){case"msg2":flashApp.value+="\n"+args;break;}}
function OwcFlashReader_passToFlashObj(i_uid,i_data){var flashObj=null;flashObj=this.getFlashObjRef();if(!flashObj)
return;if(flashObj[0])
flashObj=flashObj[0];if(this.isLiveConnectAvailable(flashObj)){if(isNaN(i_uid)){flashObj.SetVariable("_root.mcSkin.mcJScript.jsaCommand",i_uid);flashObj.SetVariable("_root.mcSkin.mcJScript.jsCommXML",i_data);flashObj.TGotoFrame("_root.mcSkin.mcJScript",2);}else{var varUID="_global."+this.EP_FlashUIDVarName;var varData="_global."+this.EP_FlashDataVarName;flashObj.SetVariable(varUID,i_uid);flashObj.SetVariable(varData,i_data);flashObj.TGotoFrame("_root",2);}}}
function OwcFlashReader_flashContainerHide()
{if(!this.HtmlElement||!this.m_bShown)
return;this.divContainer_style_width=this.HtmlElement.style.width;this.divContainer_style_height=this.HtmlElement.style.height;this.HtmlElement.style.width="0px";this.HtmlElement.style.height="0px";this.m_bShown=false;}
function OwcFlashReader_flashContainerShow()
{if(!this.HtmlElement||this.m_bShown)
return;this.HtmlElement.style.width=this.divContainer_style_width;this.HtmlElement.style.height=this.divContainer_style_height;this.m_bShown=true;}
function OwcFlashReader_isLiveConnectAvailable(FlashObj)
{var sDPBaseUrl="";var bLiveConnectAvailable=false;try{sDPBaseUrl=FlashObj.GetVariable("_root.DPBaseUrl");if(sDPBaseUrl&&(sDPBaseUrl==this.getDataProviderUrl()))
{bLiveConnectAvailable=true;}}
catch(x){}
return bLiveConnectAvailable;}
function OwcFlashReader_processCustomFlashEvent(oCustomData)
{}
function evaluateJSCode(args){eval(args);}
function OwcFlashReader_getFlashEventDataString(sChunkData,sUID,nChunkNo,nTotalChunks)
{if(!nTotalChunks||nTotalChunks<=1)
return sChunkData;if(!sChunkData)
sChunkData="";if(!this.objChunksDataStorage[sUID])
this.objChunksDataStorage[sUID]=new Array();this.objChunksDataStorage[sUID].push(sChunkData);if(this.objChunksDataStorage[sUID].length==nTotalChunks)
{var sResData=this.objChunksDataStorage[sUID].join("");this.objChunksDataStorage[sUID]=null;delete this.objChunksDataStorage[sUID];return sResData;}
return null;}
function OwcFlashViewer_synchronizeData(oFlashEventData)
{var bDoNotNotify=true;for(var prop in oFlashEventData)
{this.syncField(prop,oFlashEventData[prop],bDoNotNotify);}
if(oFlashEventData&&oFlashEventData.sPageLabel)
this.m_sPageLabel=oFlashEventData.sPageLabel;this.notifyCmdStateChanged();}
function OwcFlashViewer_syncField(prop,value,bDoNotNotify)
{switch(prop)
{case"sBaseHref":this.setDocumentLoaded(true,bDoNotNotify,value);break;case"nPageNo":if(value!=null)this.setPageNo(value,bDoNotNotify);break;case"nNumPagesDisplayed":this.setNumPagesDisplayed(value);break;case"bDoublePageMode":this.setModeDoublePage(value);break;case"bFlipAnimationEffect":this.setModeFlipAnimationEffect(value);break;case"bHighlightTitles":this.setModeHighlightTitles(value);break;case"bHighlightEntitiesOnMouseOver":this.setModeHighlightEntitiesOnMouseOver(value);break;case"isRightToLeft":;break;case"sDocumentTitle":;break;case"nTotalPages":this.setTotalPagesCount(value);break;case"nZoom":this.setZoomFactor(value/100,bDoNotNotify);break;case"sFitMode":this.setZoomFitMode(value);break;case"sMouseMode":this.setMouseMode(value);break;case"nFirstHitPage":this.setFirstHitPage(value,bDoNotNotify);this.setHitsDataLoaded(true,bDoNotNotify);break;case"nLastHitPage":this.setLastHitPage(value,bDoNotNotify);this.setHitsDataLoaded(true,bDoNotNotify);break;case"nRotation":this.setRotation(value,bDoNotNotify);break;case"arrPageLabels":this.setPageLabels(value);break;case"bHasOnePagePDF":this.m_bHasOnePagePDF=value;break;case"bHasDocumentPDF":this.m_bHasDocumentPDF=value;break;}}
function OwcFlashViewer_setPageLabels(arrLabels)
{this.m_oMapPageLabels=arrLabels;}
function OwcFlashReader_DispatchFlashEvent(sEventName,sChunkData,sUID,sChunkNo,sTotalChunks)
{var sReturnValue="";if(!sEventName||sEventName=="")
return sReturnValue;var oFlashEventData=null;var nChunkNo=parseInt(sChunkNo,10);var nTotalChunks=parseInt(sTotalChunks,10);var sFlashEventObject=this.getFlashEventDataString(sChunkData,sUID,nChunkNo,nTotalChunks);if(sFlashEventObject==null)
return sReturnValue;if(sFlashEventObject)
{eval("oFlashEventData = "+sFlashEventObject+";");}
var oEvent=this.createOwcEventObject("flashEventReceived");oEvent.oFlashEventData=oFlashEventData;this.fireOwcEvent(oEvent);if(sEventName.toLowerCase()!="richmediaplayed")
this.synchronizeData(oFlashEventData);var bCancelDefaultAction=oEvent.cancelDefaultAction;Object_Destroy(oEvent);if(bCancelDefaultAction)
return sReturnValue;if(!this.getOwcEventsClass(sEventName))
{sReturnValue=this.processCustomFlashEvent(oFlashEventData);return sReturnValue;}
switch(sEventName)
{case"documentLoaded":break;case"SearchHitsCleared":this.setHitsDataLoaded(false);break;}
oEvent=this.createOwcEventObject(sEventName);oEvent.sFlashEventReturnValue="";for(var prop in oFlashEventData)
{if(oEvent[prop]!=undefined)
continue;oEvent[prop]=oFlashEventData[prop];}
var result=this.fireOwcEvent(oEvent);sReturnValue=oEvent.sFlashEventReturnValue;bCancelDefaultAction=oEvent.cancelDefaultAction;if(bCancelDefaultAction)
{Object_Destroy(oEvent);return sReturnValue;}
switch(sEventName)
{case"oldFlashPlayerVersion":this.reportKnownError(Olive.Errors.Code.UpdateFlashPlayer,oEvent.sCurrentVersion,oEvent.sExpectedVersion,oEvent.sDownloadURL);break;}
Object_Destroy(oEvent);return sReturnValue;}
function OwcFlashReader_handleFlashEvent(str)
{var sSelfId,sEventName,sChunkData,sUID,sChunkNo,sTotalChunks;var arrArguments=str.split("\",\"");if(arrArguments.length==6)
{arrArguments[0]=arrArguments[0].substring(1);var sLast=arrArguments[arrArguments.length-1];arrArguments[arrArguments.length-1]=sLast.substring(0,sLast.length-1);}
else if(arguments.length==6)
{arrArguments=arguments;}
else
return"";sSelfId=arrArguments[0];sEventName=arrArguments[1];sChunkData=unescape(arrArguments[2]);sUID=arrArguments[3];sChunkNo=arrArguments[4];sTotalChunks=arrArguments[5];var oFlashReaderCtrl=OwcGetControl(sSelfId,true);if(oFlashReaderCtrl&&oFlashReaderCtrl.dispatchFlashEvent)
return oFlashReaderCtrl.dispatchFlashEvent(sEventName,sChunkData,sUID,sChunkNo,sTotalChunks);}
function OwcFlashViewer_attachMouseWheelEvent(rObject,rHandler,bUseCapture)
{if(isMozilla())
DHTML.attachEvent(rObject,"DOMMouseScroll",rHandler,bUseCapture);else
DHTML.attachEvent(rObject,"mousewheel",rHandler,bUseCapture);}
function OwcFlashViewer_DHTML_onMouseWheel(oEvent)
{var oControl=OwcGetControlFromHtmlElem(this);if(!oControl)
return;var nDelta=(oEvent.detail?-oEvent.detail:oEvent.wheelDelta/40);oControl.sendCommandToFlashObj("launchMouseWheel",{'nDelta':nDelta});DHTML.eventPreventDefaultAction(oEvent);DHTML.eventStopBubbling(oEvent);}
JScript.Type.RegisterClass("Olive.Controls.FlashViewer",Olive.Controls.FlashViewer,Olive.Controls.Viewer);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.FlashViewer,Olive.Controls.FlashViewer);}