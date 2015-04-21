
if(typeof(JScript.Type.DeriveClass)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.InformationComponentViewer="informationcomponentviewer";Olive.Controls.controlTypeNames.ICViewerPage="icviewerpage";Olive.Controls.controlTypeNames.ICViewerChunk="icviewerchunk";Olive.Controls.controlTypeNames.Primitive="primitive";Olive.Controls.controlTypeNames.ICViewerHit="icviewerhit";Olive.Controls.controlTypeNames.ICViewerLink="icviewerlink";Olive.Controls.controlTypeNames.SeeAlsoList="see-also-list";Olive.Controls.attributes.InformationComponentViewMode=Olive.Controls.xmlns+"view-mode";Olive.Controls.attributes.InformationComponentTextModeFilter=Olive.Controls.xmlns+"text-mode-filter";Olive.Controls.attributes.InformationComponentChunkingMode=Olive.Controls.xmlns+"chunking-mode";Olive.Controls.attributes.InformationComponentEmbeddingMode=Olive.Controls.xmlns+"embedding-mode";Olive.Controls.attributes.InformationComponentEmbeddingLocation=Olive.Controls.xmlns+"embedding-location";Olive.Controls.attributes.InformationComponentUseReadingOrder=Olive.Controls.xmlns+"use-reading-order";Olive.Controls.attributes.InformationComponentHitHighlightMode=Olive.Controls.xmlns+"hit-highlight-mode";Olive.Controls.attributes.InformationComponentLinkHighlightMode=Olive.Controls.xmlns+"link-highlight-mode";Olive.Controls.attributes.InformationComponentMaxWidth=Olive.Controls.xmlns+"max-width";Olive.Controls.attributes.InformationComponentMaxHeight=Olive.Controls.xmlns+"max-height";Olive.Controls.attributes.InformationComponentZoomFactor=Olive.Controls.xmlns+"zoom-factor";Olive.Controls.attributes.DefaultContainerWidth=Olive.Controls.xmlns+"default-container-width";Olive.Controls.attributes.DefaultContainerHeight=Olive.Controls.xmlns+"default-container-height";Olive.Controls.attributes.AutoScrollToFirstHit=Olive.Controls.xmlns+"auto-scroll-to-first-hit";Olive.Controls.attributes.InformationComponentHitSrc=Olive.Controls.xmlns+"hit-src";Olive.Controls.attributes.InformationComponentCurrentHitSrc=Olive.Controls.xmlns+"current-hit-src";Olive.Controls.attributes.InformationComponentNoImage=Olive.Controls.xmlns+"no-image";Olive.Controls.attributes.InformationComponentNoImageMode=Olive.Controls.xmlns+"no-image-mode";Olive.Controls.attributes.InformationComponentImagesOnly=Olive.Controls.xmlns+"images-only";Olive.Controls.attributes.InformationComponentEntityType=Olive.Controls.xmlns+"entity-type";Olive.Controls.attributes.InformationComponentEntityFormat=Olive.Controls.xmlns+"entity-format";Olive.Controls.attributes.InformationComponentIsScanned=Olive.Controls.xmlns+"is-scanned";Olive.Controls.attributes.RightClickEnabled=Olive.Controls.xmlns+"right-click-enabled";Olive.Controls.attributes.MouseOverEnabled=Olive.Controls.xmlns+"mouse-over-enabled";Olive.Controls.attributes.MouseOutEnabled=Olive.Controls.xmlns+"mouse-out-enabled";Olive.Controls.attributes.InformationComponentPurposeMode=Olive.Controls.xmlns+"purpose-mode";Olive.Controls.attributes.InformationComponentPageContainer=Olive.Controls.xmlns+"page-container";Olive.Controls.attributes.InformationComponentHitCss=Olive.Controls.xmlns+"hit-css";Olive.Controls.attributes.InformationComponentCurrentHitCss=Olive.Controls.xmlns+"current-hit-css";Olive.Controls.attributes.InformationComponentLinkCss=Olive.Controls.xmlns+"link-css";Olive.Controls.attributes.InformationComponentTickerCss=Olive.Controls.xmlns+"ticker-css";if(!Olive.Data.InformationComponentViewerState)
{Olive.Data.InformationComponentViewerState=function OwcInformationComponentViewerState()
{};Olive.Data.InformationComponentViewerState.ViewMode={text:"text",image:"image",auto:"auto"};Olive.Data.InformationComponentViewerState.ViewModeActual={text:"text",image:"image"};Olive.Data.InformationComponentViewerState.TextModeFilter={none:0x00000000,noads:0x00000001,noscanned:0x00000002,nopictures:0x00000004,nodata:0x00000008};Olive.Data.InformationComponentViewerState.ChunkingMode={all:"all",chunk:"chunk",page:"page",newspaper:"newspaper",auto:"auto"};Olive.Data.InformationComponentViewerState.EmbeddingMode={none:"none",all:"all",link:"link"};Olive.Data.InformationComponentViewerState.EmbeddingLocation={end:"end"};Olive.Data.InformationComponentViewerState.DeclareType=function OwcInformationComponentViewerState_DeclareType(rObject)
{this.DeclareField("m_sViewMode",Olive.Data.InformationComponentViewerState.ViewMode.image);this.DeclareField("m_nTextModeFilter",Olive.Data.InformationComponentViewerState.TextModeFilter.none);this.DeclareField("m_sChunkingMode",Olive.Data.InformationComponentViewerState.ChunkingMode.chunk);this.DeclareField("m_sEmbeddingMode",Olive.Data.InformationComponentViewerState.EmbeddingMode.all);this.DeclareField("m_sEmbeddingLocation",Olive.Data.InformationComponentViewerState.EmbeddingLocation.end);this.DeclareField("m_bUseReadingOrder",true);this.DeclareField("m_bHitHighlightMode",true);this.DeclareField("m_bLinkHighlightMode",true);this.DeclareField("m_bLoadNextChunkWithHits",true);this.DeclareField("m_bAutoScrollToFirstHit",true);this.DeclareField("m_nDefaultContainerWidth",700);this.DeclareField("m_nDefaultContainerHeight",500);this.DeclareField("m_oZoomMode",null);this.DeclareMethod("contentBuildControlParams",OwcInformationComponentViewerState_contentBuildControlParams);this.DeclareMethod("getViewMode",OwcInformationComponentViewerState_getViewMode);this.DeclareMethod("setViewMode",OwcInformationComponentViewerState_setViewMode);this.DeclareMethod("getTextModeFilter",OwcInformationComponentViewerState_getTextModeFilter);this.DeclareMethod("setTextModeFilter",OwcInformationComponentViewerState_setTextModeFilter);this.DeclareMethod("getChunkingMode",OwcInformationComponentViewerState_getChunkingMode);this.DeclareMethod("setChunkingMode",OwcInformationComponentViewerState_setChunkingMode);this.DeclareMethod("getEmbeddingMode",OwcInformationComponentViewerState_getEmbeddingMode);this.DeclareMethod("setEmbeddingMode",OwcInformationComponentViewerState_setEmbeddingMode);this.DeclareMethod("getEmbeddingLocation",OwcInformationComponentViewerState_getEmbeddingLocation);this.DeclareMethod("setEmbeddingLocation",OwcInformationComponentViewerState_setEmbeddingLocation);this.DeclareMethod("getUseReadingOrder",OwcInformationComponentViewerState_getUseReadingOrder);this.DeclareMethod("setUseReadingOrder",OwcInformationComponentViewerState_setUseReadingOrder);this.DeclareMethod("getHitHighlightMode",OwcInformationComponentViewerState_getHitHighlightMode);this.DeclareMethod("setHitHighlightMode",OwcInformationComponentViewerState_setHitHighlightMode);this.DeclareMethod("getLinkHighlightMode",OwcInformationComponentViewerState_getLinkHighlightMode);this.DeclareMethod("setLinkHighlightMode",OwcInformationComponentViewerState_setLinkHighlightMode);this.DeclareMethod("getLoadNextChunkWithHits",OwcInformationComponentViewerState_getLoadNextChunkWithHits);this.DeclareMethod("setLoadNextChunkWithHits",OwcInformationComponentViewerState_setLoadNextChunkWithHits);this.DeclareMethod("getAutoScrollToFirstHit",OwcInformationComponentViewerState_getAutoScrollToFirstHit);this.DeclareMethod("setAutoScrollToFirstHit",OwcInformationComponentViewerState_setAutoScrollToFirstHit);this.DeclareMethod("getDefaultContainerWidth",OwcInformationComponentViewerState_getDefaultContainerWidth);this.DeclareMethod("setDefaultContainerWidth",OwcInformationComponentViewerState_setDefaultContainerWidth);this.DeclareMethod("getDefaultContainerHeight",OwcInformationComponentViewerState_getDefaultContainerHeight);this.DeclareMethod("setDefaultContainerHeight",OwcInformationComponentViewerState_setDefaultContainerHeight);this.DeclareMethod("getZoomMode",OwcInformationComponentViewerState_getZoomMode);this.DeclareMethod("setZoomMode",OwcInformationComponentViewerState_setZoomMode);};function OwcInformationComponentViewerState_contentBuildControlParams(oParams)
{var sViewMode=this.getViewMode();oParams.addParam(Olive.Controls.InformationComponentViewer.UrlParams.ViewMode,sViewMode);var nTextModeFilter=this.getTextModeFilter();if(sViewMode!=Olive.Data.InformationComponentViewerState.ViewMode.auto&&nTextModeFilter!=Olive.Data.InformationComponentViewerState.TextModeFilter.none)
oParams.addParam(Olive.Controls.InformationComponentViewer.UrlParams.TextModeFilter,nTextModeFilter);oParams.addParam(Olive.Controls.InformationComponentViewer.UrlParams.ChunkingMode,this.getChunkingMode());oParams.addParam(Olive.Controls.InformationComponentViewer.UrlParams.EmbeddingMode,this.getEmbeddingMode());oParams.addParam(Olive.Controls.InformationComponentViewer.UrlParams.EmbeddingLocation,this.getEmbeddingLocation());oParams.addParam(Olive.Controls.InformationComponentViewer.UrlParams.UseReadingOrder,this.getUseReadingOrder());oParams.addParam(Olive.Controls.InformationComponentViewer.UrlParams.LoadNextChunkWithHits,this.getLoadNextChunkWithHits());}
function OwcInformationComponentViewerState_getViewMode()
{return this.m_sViewMode;}
function OwcInformationComponentViewerState_setViewMode(sViewMode)
{if(sViewMode&&sViewMode in Olive.Data.InformationComponentViewerState.ViewMode&&sViewMode!=this.m_sViewMode)
{this.m_sViewMode=sViewMode;return true;}else
return false;}
function OwcInformationComponentViewerState_getTextModeFilter()
{return this.m_nTextModeFilter;}
function OwcInformationComponentViewerState_setTextModeFilter(vTextModeFilter)
{var nTextModeFilter=Olive.Data.InformationComponentViewerState.TextModeFilter.none;if("number"==typeof vTextModeFilter)
{for(var sMode in Olive.Data.InformationComponentViewerState.TextModeFilter)
{nTextModeFilter|=(vTextModeFilter&Olive.Data.InformationComponentViewerState.TextModeFilter[sMode]);}}
else if("string"==typeof vTextModeFilter)
{var arrFilter=vTextModeFilter.toLowerCase().split("|");for(var i=0;i<arrFilter.length;++i)
{nTextModeFilter|=Olive.Data.InformationComponentViewerState.TextModeFilter[arrFilter[i]];}}
this.m_nTextModeFilter=nTextModeFilter;return true;}
function OwcInformationComponentViewerState_getChunkingMode()
{return this.m_sChunkingMode;}
function OwcInformationComponentViewerState_setChunkingMode(sChunkingMode)
{if(sChunkingMode&&sChunkingMode in Olive.Data.InformationComponentViewerState.ChunkingMode&&sChunkingMode!=this.m_sChunkingMode)
{this.m_sChunkingMode=sChunkingMode;return true;}else
return false;}
function OwcInformationComponentViewerState_getEmbeddingMode()
{return this.m_sEmbeddingMode;}
function OwcInformationComponentViewerState_setEmbeddingMode(sEmbeddingMode)
{if(sEmbeddingMode&&sEmbeddingMode in Olive.Data.InformationComponentViewerState.EmbeddingMode&&sEmbeddingMode!=this.m_sEmbeddingMode)
{this.m_sEmbeddingMode=sEmbeddingMode;return true;}else
return false;}
function OwcInformationComponentViewerState_getEmbeddingLocation()
{return this.m_sEmbeddingLocation;}
function OwcInformationComponentViewerState_setEmbeddingLocation(sEmbeddingLocation)
{if(sEmbeddingLocation&&sEmbeddingLocation in Olive.Data.InformationComponentViewerState.EmbeddingLocation&&sEmbeddingLocation!=this.m_sEmbeddingLocation)
{this.m_sEmbeddingLocation=sEmbeddingLocation;return true;}else
return false;}
function OwcInformationComponentViewerState_getUseReadingOrder()
{return this.m_bUseReadingOrder;}
function OwcInformationComponentViewerState_setUseReadingOrder(vUseReadingOrder)
{var bCurrentMode=this.getUseReadingOrder();if("string"==typeof vUseReadingOrder)
{if("toggle"==vUseReadingOrder.toLowerCase())
vUseReadingOrder=!bCurrentMode;else
vUseReadingOrder=String_parseBoolean(vUseReadingOrder);}
if(bCurrentMode!=!!vUseReadingOrder)
{this.m_bUseReadingOrder=!!vUseReadingOrder;return true;}else
return false;}
function OwcInformationComponentViewerState_getHitHighlightMode()
{return this.m_bHitHighlightMode;}
function OwcInformationComponentViewerState_setHitHighlightMode(vHitHighlightMode)
{var bCurrentMode=this.getHitHighlightMode();if("string"==typeof vHitHighlightMode)
{if("toggle"==vHitHighlightMode.toLowerCase())
vHitHighlightMode=!bCurrentMode;else
vHitHighlightMode=String_parseBoolean(vHitHighlightMode);}
if(bCurrentMode!=!!vHitHighlightMode)
{this.m_bHitHighlightMode=!!vHitHighlightMode;return true;}else
return false;}
function OwcInformationComponentViewerState_getLinkHighlightMode()
{return this.m_bLinkHighlightMode;}
function OwcInformationComponentViewerState_setLinkHighlightMode(vLinkHighlightMode)
{var bCurrentMode=this.getLinkHighlightMode();if("string"==typeof vLinkHighlightMode)
{if("toggle"==vLinkHighlightMode.toLowerCase())
vLinkHighlightMode=!bCurrentMode;else
vLinkHighlightMode=String_parseBoolean(vLinkHighlightMode);}
if(bCurrentMode!=!!vLinkHighlightMode)
{this.m_bLinkHighlightMode=!!vLinkHighlightMode;return true;}else
return false;}
function OwcInformationComponentViewerState_getLoadNextChunkWithHits()
{return this.m_bLoadNextChunkWithHits;}
function OwcInformationComponentViewerState_setLoadNextChunkWithHits(vLoadNextChunkWithHits)
{var bCurrentMode=this.getLoadNextChunkWithHits();if("string"==typeof vLoadNextChunkWithHits)
{if("toggle"==vLoadNextChunkWithHits.toLowerCase())
vLoadNextChunkWithHits=!bCurrentMode;else
vLoadNextChunkWithHits=String_parseBoolean(vLoadNextChunkWithHits);}
if(bCurrentMode!=!!vLoadNextChunkWithHits)
{this.m_bLoadNextChunkWithHits=!!vLoadNextChunkWithHits;return true;}else
return false;}
function OwcInformationComponentViewerState_getAutoScrollToFirstHit()
{return this.m_bAutoScrollToFirstHit;}
function OwcInformationComponentViewerState_setAutoScrollToFirstHit(vAutoScrollToFirstHit)
{var bCurrentMode=this.getAutoScrollToFirstHit();if("string"==typeof vAutoScrollToFirstHit)
{if("toggle"==vAutoScrollToFirstHit.toLowerCase())
vAutoScrollToFirstHit=!bCurrentMode;else
vAutoScrollToFirstHit=String_parseBoolean(vAutoScrollToFirstHit);}
if(bCurrentMode!=!!vAutoScrollToFirstHit)
{this.m_bAutoScrollToFirstHit=!!vAutoScrollToFirstHit;return true;}else
return false;}
function OwcInformationComponentViewerState_getDefaultContainerWidth()
{return this.m_nDefaultContainerWidth;}
function OwcInformationComponentViewerState_setDefaultContainerWidth(nDefaultContainerWidth)
{if(nDefaultContainerWidth&&!isNaN(nDefaultContainerWidth)&&nDefaultContainerWidth>0&&this.m_nDefaultContainerWidth!=nDefaultContainerWidth)
{this.m_nDefaultContainerWidth=nDefaultContainerWidth;return true;}else
return false;}
function OwcInformationComponentViewerState_getDefaultContainerHeight()
{return this.m_nDefaultContainerHeight;}
function OwcInformationComponentViewerState_setDefaultContainerHeight(nDefaultContainerHeight)
{if(nDefaultContainerHeight&&!isNaN(nDefaultContainerHeight)&&nDefaultContainerHeight>0&&this.m_nDefaultContainerHeight!=nDefaultContainerHeight)
{this.m_nDefaultContainerHeight=nDefaultContainerHeight;return true;}else
return false;}
function OwcInformationComponentViewerState_getZoomMode()
{return this.m_oZoomMode;}
function OwcInformationComponentViewerState_setZoomMode(sZoomMode,nFactor,nWidth,nHeight)
{if(!this.m_oZoomMode)
this.m_oZoomMode=new Olive.Data.InformationComponentViewerZoom();var nCalcHeight=nHeight-((nHeight>400)?42:0);return this.m_oZoomMode.setZoom(sZoomMode,nFactor,nWidth,nCalcHeight);}
JScript.Type.RegisterClass("Olive.Data.InformationComponentViewerState",Olive.Data.InformationComponentViewerState);}
if(!Olive.Data.InformationComponentViewerZoom)
{Olive.Data.InformationComponentViewerZoom=function OwcInformationComponentViewerZoom()
{};Olive.Data.InformationComponentViewerZoom.ZoomMode={zoomfactor:"zoomfactor",pagedimensions:"pagedimensions"};Olive.Data.InformationComponentViewerZoom.DeclareType=function OwcInformationComponentViewerZoom_DeclareType(rObject)
{this.DeclareField("m_sZoomMode",Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor);this.DeclareField("m_nZoomFactor",1);this.DeclareField("m_nMaxWidth",null);this.DeclareField("m_nMaxHeight",null);this.DeclareMethod("setZoom",OwcInformationComponentViewerZoom_setZoom);};function OwcInformationComponentViewerZoom_setZoom(sMode,vFactor,vWidth,vHeight)
{var sPriorZoomMode=this.m_sZoomMode;var nPriorZoomFactor=this.m_nZoomFactor;var nPriorMaxWidth=this.m_nMaxWidth;var nPriorMaxHeight=this.m_nMaxHeight;var bChanged=false;switch(sMode.toLowerCase())
{case Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor:this.m_sZoomMode=Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor;this.m_nMaxWidth=null;this.m_nMaxHeight=null;if(vFactor)
{if("string"==typeof vFactor)
{vFactor=parseFloat(vFactor);}
if(!isNaN(vFactor)&&vFactor>0)
{this.m_nZoomFactor=vFactor/100;bChanged=sPriorZoomMode!=this.m_sZoomMode||nPriorZoomFactor!=this.m_nZoomFactor;}}
break;case Olive.Data.InformationComponentViewerZoom.ZoomMode.pagedimensions:this.m_sZoomMode=Olive.Data.InformationComponentViewerZoom.ZoomMode.pagedimensions;this.m_nZoomFactor=null;this.m_nMaxWidth=null;this.m_nMaxHeight=null;var nInfinity=99999;if(vWidth&&"string"==typeof vWidth)
{vWidth=parseFloat(vWidth);}
if(vWidth&&!isNaN(vWidth)&&vWidth>0)
{this.m_nMaxWidth=vWidth;}
if(vHeight&&"string"==typeof vHeight)
{vHeight=parseFloat(vHeight);}
if(vHeight&&!isNaN(vHeight)&&vHeight>0)
{this.m_nMaxHeight=vHeight;}
if(this.m_nMaxWidth||this.m_nMaxHeight)
{if(!this.m_nMaxWidth)
{this.m_nMaxWidth=nInfinity;}
if(!this.m_nMaxHeight)
{this.m_nMaxHeight=nInfinity;}
bChanged=sPriorZoomMode!=this.m_sZoomMode||nPriorMaxWidth!=this.m_nMaxWidth||nPriorMaxHeight!=this.m_nMaxHeight;}
else
{return this.setZoom(Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor,100);}
break;default:break;}
return bChanged;}
JScript.Type.RegisterClass("Olive.Data.InformationComponentViewerZoom",Olive.Data.InformationComponentViewerZoom);}
if(!Olive.Controls.InformationComponentViewer)
{Olive.Controls.InformationComponentViewer=function OwcInformationComponentViewer()
{};Olive.Controls.InformationComponentViewer.PurposeMode={Print:"print",View:"view"};Olive.Controls.InformationComponentViewer.Commands={PreviousChunk:"PreviousChunk",NextChunk:"NextChunk",FirstChunk:"FirstChunk",LastChunk:"LastChunk",PreviousHitChunk:"PreviousHitChunk",NextHitChunk:"NextHitChunk",FirstHitChunk:"FirstHitChunk",LastHitChunk:"LastHitChunk",SetViewMode:"SetViewMode",SetChunkingMode:"SetChunkingMode",SetEmbeddingMode:"SetEmbeddingMode",SetUseReadingOrder:"SetUseReadingOrder",SetHitHighlightMode:"SetHitHighlightMode",SetLinkHighlightMode:"SetLinkHighlightMode",ZoomIn:"ZoomIn",ZoomOut:"ZoomOut",SetZoomFactor:"SetZoomFactor"};Olive.Controls.InformationComponentViewer.NavigationObj={hit:0x00000001,link:0x00000002,page:0x00000004,hitpage:0x00000008,chunk:0x00000010,hitchunk:0x00000020};Olive.Controls.InformationComponentViewer.NavigationDir={first:0x00010000,previous:0x00020000,next:0x00040000,last:0x00080000,firstinwindow:0x00100000,lastinwindow:0x00200000,id:0x00100000,relativemask:0x003F0000};Olive.Controls.InformationComponentViewer.UrlParams={ViewMode:"viewmode",TextModeFilter:"textmodefilter",ChunkingMode:"chunkingmode",EmbeddingMode:"embeddingmode",EmbeddingLocation:"embeddinglocation",UseReadingOrder:"usereadingorder",LoadNextChunkWithHits:"loadnextchunkwithhits",RequestType:"requesttype",RequestTypeValues:{content:"content",search:"search",all:"all"},EntityTextMode:"entitytextmode",EntityTextModeValues:{plain:"plain",html:"html",xml:"xml"}};Olive.Controls.InformationComponentViewer.cssClass={TextHit:"InfoComponentTextHit",TextCurrentHit:"InfoComponentTextCurrentHit",ImageHit:"InfoComponentImageHit",ImageCurrentHit:"InfoComponentImageCurrentHit",Link:"InfoComponentLink",Ticker:"InfoComponentTicker"};Olive.Controls.InformationComponentViewer.DeclareType=function OwcInformationComponentViewer_DeclareType()
{this.DeclareField("m_oState",null);this.DeclareField("m_sViewModeActual",null);this.DeclareField("m_bNoImageMode",false);this.DeclareField("m_bImagesOnly",false);this.DeclareField("m_bIsScanned",false);this.DeclareField("m_sEntityType","");this.DeclareField("m_sEntityFormat","");this.DeclareField("m_bRightClickEnabled",false);this.DeclareField("m_bMouseOverEnabled",false);this.DeclareField("m_bMouseOutEnabled",false);this.DeclareField("m_nDefaultZoomInOutInterval",1.25);this.DeclareField("m_bIsRequestFromViewer",false);this.DeclareField("m_arrControlSubTypes",[Olive.Controls.controlTypeNames.ICViewerPage,Olive.Controls.controlTypeNames.ICViewerChunk,Olive.Controls.controlTypeNames.Primitive,Olive.Controls.controlTypeNames.ICViewerHit,Olive.Controls.controlTypeNames.ICViewerLink,Olive.Controls.controlTypeNames.SeeAlsoList]);this.DeclareField("m_oSubControlsByType",null);this.DeclareField("m_oCurrentObjs",{});this.DeclareField("m_oCurrentObjsForLoad",{});this.DeclareField("m_oImageStatus",{m_nImages:0,m_nSuccess:0,m_nFailure:0,m_bCountWasCalculated:false,m_bEventWasFired:false});this.DeclareField("m_sPurposeMode",Olive.Controls.InformationComponentViewer.PurposeMode.View);this.DeclareField("m_bTextModeEnabled",true);this.OverrideMethod("parseControlHtmlAttr",OwcInformationComponentViewer_parseControlHtmlAttr);this.OverrideMethod("requestData",OwcInformationComponentViewer_requestData);this.OverrideMethod("contentBuildControlParams",OwcInformationComponentViewer_contentBuildControlParams);this.OverrideMethod("postHtmlContentPaste",OwcInformationComponentViewer_postHtmlContentPaste);this.DeclareMethod("loadICViewer",OwcInformationComponentViewer_loadICViewer);this.DeclareMethod("unloadICViewer",OwcInformationComponentViewer_unloadICViewer);this.DeclareMethod("buildEntityTextUrl",OwcInformationComponentViewer_buildEntityTextUrl);this.DeclareMethod("searchInIC",OwcInformationComponentViewer_searchInIC);this.DeclareMethod("toggleHits",OwcInformationComponentViewer_toggleHits);this.DeclareMethod("toggleLinks",OwcInformationComponentViewer_toggleLinks);this.DeclareMethod("getViewMode",OwcInformationComponentViewer_getViewMode);this.DeclareMethod("setViewMode",OwcInformationComponentViewer_setViewMode);this.DeclareMethod("getViewModeActual",OwcInformationComponentViewer_getViewModeActual);this.DeclareMethod("_setViewModeActual",OwcInformationComponentViewer_setViewModeActual);this.DeclareMethod("getTextModeFilter",OwcInformationComponentViewer_getTextModeFilter);this.DeclareMethod("setTextModeFilter",OwcInformationComponentViewer_setTextModeFilter);this.DeclareMethod("getChunkingMode",OwcInformationComponentViewer_getChunkingMode);this.DeclareMethod("setChunkingMode",OwcInformationComponentViewer_setChunkingMode);this.DeclareMethod("getEmbeddingMode",OwcInformationComponentViewer_getEmbeddingMode);this.DeclareMethod("setEmbeddingMode",OwcInformationComponentViewer_setEmbeddingMode);this.DeclareMethod("getEmbeddingLocation",OwcInformationComponentViewer_getEmbeddingLocation);this.DeclareMethod("setEmbeddingLocation",OwcInformationComponentViewer_setEmbeddingLocation);this.DeclareMethod("getUseReadingOrder",OwcInformationComponentViewer_getUseReadingOrder);this.DeclareMethod("setUseReadingOrder",OwcInformationComponentViewer_setUseReadingOrder);this.DeclareMethod("getHitHighlightMode",OwcInformationComponentViewer_getHitHighlightMode);this.DeclareMethod("setHitHighlightMode",OwcInformationComponentViewer_setHitHighlightMode);this.DeclareMethod("getLinkHighlightMode",OwcInformationComponentViewer_getLinkHighlightMode);this.DeclareMethod("setLinkHighlightMode",OwcInformationComponentViewer_setLinkHighlightMode);this.DeclareMethod("getLoadNextChunkWithHits",OwcInformationComponentViewer_getLoadNextChunkWithHits);this.DeclareMethod("setLoadNextChunkWithHits",OwcInformationComponentViewer_setLoadNextChunkWithHits);this.DeclareMethod("getAutoScrollToFirstHit",OwcInformationComponentViewer_getAutoScrollToFirstHit);this.DeclareMethod("setAutoScrollToFirstHit",OwcInformationComponentViewer_setAutoScrollToFirstHit);this.DeclareMethod("getDefaultContainerWidth",OwcInformationComponentViewer_getDefaultContainerWidth);this.DeclareMethod("setDefaultContainerWidth",OwcInformationComponentViewer_setDefaultContainerWidth);this.DeclareMethod("getDefaultContainerHeight",OwcInformationComponentViewer_getDefaultContainerHeight);this.DeclareMethod("setDefaultContainerHeight",OwcInformationComponentViewer_setDefaultContainerHeight);this.DeclareMethod("getRightClickEnabled",OwcInformationComponentViewer_getRightClickEnabled);this.DeclareMethod("setRightClickEnabled",OwcInformationComponentViewer_setRightClickEnabled);this.DeclareMethod("getMouseOverEnabled",OwcInformationComponentViewer_getMouseOverEnabled);this.DeclareMethod("setMouseOverEnabled",OwcInformationComponentViewer_setMouseOverEnabled);this.DeclareMethod("getMouseOutEnabled",OwcInformationComponentViewer_getMouseOutEnabled);this.DeclareMethod("setMouseOutEnabled",OwcInformationComponentViewer_setMouseOutEnabled);this.DeclareMethod("getZoomMode",OwcInformationComponentViewer_getZoomMode);this.DeclareMethod("setZoomMode",OwcInformationComponentViewer_setZoomMode);this.DeclareMethod("setZoomFactor",OwcInformationComponentViewer_setZoomFactor);this.DeclareMethod("zoomIn",OwcInformationComponentViewer_zoomIn);this.DeclareMethod("zoomOut",OwcInformationComponentViewer_zoomOut);this.DeclareMethod("getZoomInOutInterval",OwcInformationComponentViewer_getZoomInOutInterval);this.DeclareMethod("zoomViewer",OwcInformationComponentViewer_zoomViewer);this.DeclareMethod("_zoomByPageDimensions",OwcInformationComponentViewer_zoomByPageDimensions);this.DeclareMethod("_zoomByFactor",OwcInformationComponentViewer_zoomByFactor);this.DeclareMethod("_zoomSubControl",OwcInformationComponentViewer_zoomSubControl);this.DeclareMethod("getOptimumContainerSize",OwcInformationComponentViewer_getOptimumContainerSize);this.DeclareMethod("getPurposeMode",OwcInformationComponentViewer_getPurposeMode);this.DeclareMethod("setPurposeMode",OwcInformationComponentViewer_setPurposeMode);this.DeclareMethod("navigateTo",OwcInformationComponentViewer_navigateTo);this.DeclareMethod("_getControlTypeFromNavigationObj",OwcInformationComponentViewer_getControlTypeFromNavigationObj);this.DeclareMethod("_getControlByTypeAndId",OwcInformationComponentViewer_getControlByTypeAndId);this.DeclareMethod("goToFirst",OwcInformationComponentViewer_goToFirst);this.DeclareMethod("goToPrevious",OwcInformationComponentViewer_goToPrevious);this.DeclareMethod("goToNext",OwcInformationComponentViewer_goToNext);this.DeclareMethod("goToLast",OwcInformationComponentViewer_goToLast);this.DeclareMethod("goToFirstChunk",OwcInformationComponentViewer_goToFirstChunk);this.DeclareMethod("goToPreviousChunk",OwcInformationComponentViewer_goToPreviousChunk);this.DeclareMethod("goToNextChunk",OwcInformationComponentViewer_goToNextChunk);this.DeclareMethod("goToLastChunk",OwcInformationComponentViewer_goToLastChunk);this.DeclareMethod("goToFirstHitChunk",OwcInformationComponentViewer_goToFirstHitChunk);this.DeclareMethod("goToPreviousHitChunk",OwcInformationComponentViewer_goToPreviousHitChunk);this.DeclareMethod("goToNextHitChunk",OwcInformationComponentViewer_goToNextHitChunk);this.DeclareMethod("goToLastHitChunk",OwcInformationComponentViewer_goToLastHitChunk);this.DeclareMethod("makeControlCurrent",OwcInformationComponentViewer_makeControlCurrent);this.DeclareMethod("_updateNavigationCmdUiState",OwcInformationComponentViewer_updateNavigationCmdUiState);this.DeclareMethod("_updateBooleanCmdUiState",OwcInformationComponentViewer_updateBooleanCmdUiState);this.DeclareMethod("_updateViewModeCmdUiState",OwcInformationComponentViewer_updateViewModeCmdUiState);this.DeclareMethod("_updateChunkingModeCmdUiState",OwcInformationComponentViewer_updateChunkingModeCmdUiState);this.DeclareMethod("_updateEmbeddingModeCmdUiState",OwcInformationComponentViewer_updateEmbeddingModeCmdUiState);this.DeclareMethod("_updateZoomCmdUiState",OwcInformationComponentViewer_updateZoomCmdUiState);this.DeclareMethod("onDataProcessed",OwcInformationComponentViewer_onDataProcessed);this.DeclareMethod("_countImages",OwcInformationComponentViewer_countImages);this.DeclareMethod("onImageProcessed",OwcInformationComponentViewer_onImageProcessed);this.DeclareMethod("_checkCount",OwcInformationComponentViewer_checkCount);this.DeclareMethod("_onLinkControlClicked",OwcInformationComponentViewer_onLinkControlClicked);this.DeclareMethod("_collectSubControls",OwcInformationComponentViewer_collectSubControls);this.DeclareMethod("_appendSubControl",OwcInformationComponentViewer_appendSubControl);this.DeclareMethod("_getCurrentObject",OwcInformationComponentViewer_getCurrentObject);this.DeclareMethod("_setCurrentObject",OwcInformationComponentViewer_setCurrentObject);this.DeclareMethod("_getControlFromId",OwcInformationComponentViewer_getControlFromId);this.DeclareMethod("_navigateOnLoad",OwcInformationComponentViewer_navigateOnLoad);this.DeclareMethod("_getCurrentObjectForLoad",OwcInformationComponentViewer_getCurrentObjectForLoad);this.DeclareMethod("_setCurrentObjectForLoad",OwcInformationComponentViewer_setCurrentObjectForLoad);};Olive.Controls.InformationComponentViewer.ApplyPrototype=function OwcInformationComponentViewer_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("viewerResized","onViewerResized",true);rObject.registerOwcEventsClass2("viewerLoaded","onViewerLoaded",true);rObject.registerOwcEventsClass2("modeChanged","onModeChanged",true);rObject.registerOwcEventsClass2("linkClicked","onLinkClicked",true,OwcInformationComponentViewer_openLinkInNewWindow);rObject.registerOwcEventsClass2("imagesLoaded","onImagesLoaded",true);Olive.CmdTarget.RegisterCommand(rObject,this.Commands.SetViewMode,"setViewMode","_updateViewModeCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.SetChunkingMode,"setChunkingMode","_updateChunkingModeCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.SetEmbeddingMode,"setEmbeddingMode","_updateEmbeddingModeCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.SetUseReadingOrder,"setUseReadingOrder","_updateBooleanCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.PreviousChunk,"goToPreviousChunk","_updateNavigationCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.NextChunk,"goToNextChunk","_updateNavigationCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.FirstChunk,"goToFirstChunk","_updateNavigationCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.LastChunk,"goToLastChunk","_updateNavigationCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.PreviousHitChunk,"goToPreviousHitChunk","_updateNavigationCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.NextHitChunk,"goToNextHitChunk","_updateNavigationCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.FirstHitChunk,"goToFirstHitChunk","_updateNavigationCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.LastHitChunk,"goToLastHitChunk","_updateNavigationCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.SetHitHighlightMode,"setHitHighlightMode","_updateBooleanCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.SetLinkHighlightMode,"setLinkHighlightMode","_updateBooleanCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.SetZoomFactor,"setZoomFactor","_updateZoomCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.ZoomIn,"zoomIn","_updateZoomCmdUiState");Olive.CmdTarget.RegisterCommand(rObject,this.Commands.ZoomOut,"zoomOut","_updateZoomCmdUiState");};function OwcInformationComponentViewer_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var attributes=Olive.Controls.attributes;this.m_oState=new Olive.Data.InformationComponentViewerState();this.setViewMode(DHTML.getAttr(this.HtmlElement,attributes.InformationComponentViewMode,this.getViewMode()).toLowerCase(),true);this.setTextModeFilter(DHTML.getAttr(this.HtmlElement,attributes.InformationComponentTextModeFilter,this.getTextModeFilter()),true);this.setChunkingMode(DHTML.getAttr(this.HtmlElement,attributes.InformationComponentChunkingMode,this.getChunkingMode()).toLowerCase(),true);this.setEmbeddingMode(DHTML.getAttr(this.HtmlElement,attributes.InformationComponentEmbeddingMode,this.getEmbeddingMode()).toLowerCase(),true);this.setEmbeddingLocation(DHTML.getAttr(this.HtmlElement,attributes.InformationComponentEmbeddingLocation,this.getEmbeddingLocation()).toLowerCase(),true);this.setUseReadingOrder(DHTML.getAttrBoolean(this.HtmlElement,attributes.InformationComponentUseReadingOrder,this.getUseReadingOrder()),true);this.setHitHighlightMode(DHTML.getAttrBoolean(this.HtmlElement,attributes.InformationComponentHitHighlightMode,this.getHitHighlightMode()),true);this.setLinkHighlightMode(DHTML.getAttrBoolean(this.HtmlElement,attributes.InformationComponentLinkHighlightMode,this.getLinkHighlightMode()),true);this.setDefaultContainerWidth(DHTML.getAttrNumber(this.HtmlElement,attributes.DefaultContainerWidth,this.getDefaultContainerWidth()),true);this.setDefaultContainerHeight(DHTML.getAttrNumber(this.HtmlElement,attributes.DefaultContainerHeight,this.getDefaultContainerHeight()),true);this.setAutoScrollToFirstHit(DHTML.getAttrBoolean(this.HtmlElement,attributes.AutoScrollToFirstHit,this.getAutoScrollToFirstHit()),true);this.setPurposeMode(DHTML.getAttr(this.HtmlElement,attributes.InformationComponentPurposeMode,this.getPurposeMode()).toLowerCase(),true);var sMaxWidth=DHTML.getAttrNumber(this.HtmlElement,attributes.InformationComponentMaxWidth);var sMaxHeight=DHTML.getAttrNumber(this.HtmlElement,attributes.InformationComponentMaxHeight);var sZoomFactor=DHTML.getAttrNumber(this.HtmlElement,attributes.InformationComponentZoomFactor);if(sMaxWidth||sMaxHeight)
{this.setZoomMode(Olive.Data.InformationComponentViewerZoom.ZoomMode.pagedimensions,null,sMaxWidth,sMaxHeight,true);}
else if(sZoomFactor)
{this.setZoomMode(Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor,sZoomFactor,null,null,true);}
else
{this.setZoomMode(Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor,100,null,null,true);}
this.m_bRightClickEnabled=DHTML.getAttrBoolean(this.HtmlElement,attributes.RightClickEnabled,this.m_bRightClickEnabled);this.m_bMouseOverEnabled=DHTML.getAttrBoolean(this.HtmlElement,attributes.MouseOverEnabled,this.m_bMouseOverEnabled);this.m_bMouseOutEnabled=DHTML.getAttrBoolean(this.HtmlElement,attributes.MouseOutEnabled,this.m_bMouseOutEnabled);}
function OwcInformationComponentViewer_requestData()
{this.m_oImageStatus={m_nImages:0,m_nSuccess:0,m_nFailure:0,m_bCountWasCalculated:false,m_bEventWasFired:false};if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcInformationComponentViewer_contentBuildControlParams(oParams)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.m_oState.contentBuildControlParams(oParams);if(this.getContentItemOfType(OwcContentItem_SearchQuery))
{oParams.addParam(Olive.Controls.InformationComponentViewer.UrlParams.RequestType,Olive.Controls.InformationComponentViewer.UrlParams.RequestTypeValues.all);if(this.getAutoScrollToFirstHit())
this._setCurrentObjectForLoad(Olive.Controls.controlTypeNames.ICViewerHit,Olive.Controls.InformationComponentViewer.NavigationDir.firstinwindow);}
else
{oParams.addParam(Olive.Controls.InformationComponentViewer.UrlParams.RequestType,Olive.Controls.InformationComponentViewer.UrlParams.RequestTypeValues.content);}}
function OwcInformationComponentViewer_postHtmlContentPaste(oRequest,oHtmlContentElement)
{this.m_bNoImageMode=false;this.m_bImagesOnly=false;this.m_bIsScanned=false;this.m_sEntityType="";this.m_sEntityFormat="";this._collectSubControls(this.m_arrControlSubTypes);this._countImages();if(this.m_oSubControlsByType&&this.m_oSubControlsByType[Olive.Controls.controlTypeNames.ICViewerChunk])
{var arrChunks=this.m_oSubControlsByType[Olive.Controls.controlTypeNames.ICViewerChunk];if(arrChunks.length>0)
{var sViewMode=arrChunks[0].m_sViewMode;var sPriorViewMode=this.getViewMode();if(sViewMode)
{this._setViewModeActual(sViewMode);if(sPriorViewMode!=Olive.Data.InformationComponentViewerState.ViewMode.auto)
{this.setViewMode(sViewMode,true);}}
this.m_bNoImageMode=arrChunks[0].m_bNoImageMode;this.m_bImagesOnly=arrChunks[0].m_bImagesOnly;this.m_bIsScanned=arrChunks[0].m_bIsScanned;this.m_sEntityType=arrChunks[0].m_sEntityType;this.m_sEntityFormat=arrChunks[0].m_sEntityFormat;}}
if(!(this.m_oSubControlsByType&&this.m_oSubControlsByType[Olive.Controls.controlTypeNames.SeeAlsoList]&&this.m_oSubControlsByType[Olive.Controls.controlTypeNames.SeeAlsoList].length==1&&this.m_oSubControlsByType[Olive.Controls.controlTypeNames.SeeAlsoList][0].getRequestStatus()==Olive.Controls.IDataBound.RequestStatus.WaitingForResponse))
{this.zoomViewer();}
this._navigateOnLoad();this.setLoadNextChunkWithHits(true,true);this.toggleLinks(this.getLinkHighlightMode(),true);this.toggleHits(this.getHitHighlightMode(),true);if((this.m_bRightClickEnabled||this.m_bMouseOverEnabled||this.m_bMouseOutEnabled)&&this.m_oSubControlsByType)
{var arrPrims=this.m_oSubControlsByType[Olive.Controls.controlTypeNames.Primitive];if(arrPrims)
{for(var i=0;i<arrPrims.length;++i)
{if(this.m_bRightClickEnabled)
DHTML.attachEvent(arrPrims[i].HtmlElement,"contextmenu",OwcPrimitive_DHTML_onRightClick);if(this.m_bMouseOverEnabled)
DHTML.attachEvent(arrPrims[i].HtmlElement,"mouseover",OwcPrimitive_DHTML_onMouseOver);if(this.m_bMouseOutEnabled)
DHTML.attachEvent(arrPrims[i].HtmlElement,"mouseout",OwcPrimitive_DHTML_onMouseOut);}}}
var oEvent=this.createOwcEventObject("viewerLoaded");oEvent.oNavigableCommands=null;oEvent.bIsRequestFromViewer=this.m_bIsRequestFromViewer;this.m_bIsRequestFromViewer=false;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);this.notifyCmdStateChanged();}
function OwcInformationComponentViewer_loadICViewer(oContentItem,oState,bIsRequestFromViewer)
{if(oContentItem)
this.m_oContentItem=Olive.ContentItem.Clone(oContentItem);if(oState)
this.m_oState=Object_CloneWithoutConstructor(oState,this.m_oState);this.m_bIsRequestFromViewer=!!bIsRequestFromViewer;var bUseParam=("boolean"==typeof bIsRequestFromViewer);if(bUseParam)
{var bPriorVal=this.getLoadNextChunkWithHits();this.setLoadNextChunkWithHits(!bIsRequestFromViewer,true);}
this.contentLoad();if(bUseParam)
{this.setLoadNextChunkWithHits(bPriorVal,true);}}
function OwcInformationComponentViewer_unloadICViewer()
{this.clearControls(this.HtmlElement);this.m_oSubControlsByType=null;this.m_oCurrentObjs=null;this.m_oCurrentObjsForLoad=null;this._setViewModeActual(null);}
function OwcInformationComponentViewer_buildEntityTextUrl(sContentType,sTemplateId)
{var sUrl="";if(this.contentCanLoad())
{var oParams=new QueryString();this.contentBuildParams(oParams);if(this.WebApplication)
this.WebApplication.updateRequestParams(oParams);if(!(sContentType&&sContentType in Olive.Controls.InformationComponentViewer.UrlParams.EntityTextModeValues))
{sContentType=Olive.Controls.InformationComponentViewer.UrlParams.EntityTextModeValues.plain;}
oParams.addParam(Olive.Controls.InformationComponentViewer.UrlParams.EntityTextMode,sContentType);if(sTemplateId)
{oParams.addParam(OwcUrlParam_TemplateId,sTemplateId,true);}
sUrl=this.buildRequestUrl(oParams);}
return sUrl;}
function OwcInformationComponentViewer_searchInIC(oSearchParams)
{var oContentItem=this.getContentItem();oContentItem.m_oSearchParams=oSearchParams;this.loadICViewer(oContentItem);}
function OwcInformationComponentViewer_toggleHits(bOn,bDoNotNotifyCmdStateChanged)
{if(this.m_oSubControlsByType&&this.m_oSubControlsByType[Olive.Controls.controlTypeNames.ICViewerHit])
{var arrHits=this.m_oSubControlsByType[Olive.Controls.controlTypeNames.ICViewerHit];for(var i=0;i<arrHits.length;++i)
{arrHits[i].updateState(bOn);}
if(!bDoNotNotifyCmdStateChanged)
{this.notifyCmdStateChanged();}}}
function OwcInformationComponentViewer_toggleLinks(bOn,bDoNotNotifyCmdStateChanged)
{if(this.m_oSubControlsByType&&this.m_oSubControlsByType[Olive.Controls.controlTypeNames.ICViewerLink])
{var arrLinks=this.m_oSubControlsByType[Olive.Controls.controlTypeNames.ICViewerLink];for(var i=0;i<arrLinks.length;++i)
{arrLinks[i].updateState(bOn);}
if(!bDoNotNotifyCmdStateChanged)
{this.notifyCmdStateChanged();}}}
function OwcInformationComponentViewer_MakeLinksVisible()
{this.setLinkHighlightMode(true);}
function OwcInformationComponentViewer_MakeLinksInvisible()
{this.setLinkHighlightMode(false);}
function OwcInformationComponentViewer_getViewMode()
{return this.m_oState.getViewMode();}
function OwcInformationComponentViewer_setViewMode(sViewMode,bDoNotRefresh)
{var bChanged=this.m_oState.setViewMode(sViewMode);if(bChanged&&!bDoNotRefresh)
{this.loadICViewer(null,null,true);if(this.WebApplication)
{this.WebApplication.m_sICViewMode=sViewMode;}
DHTML.setCookie("ICViewMode",sViewMode);}
return bChanged;}
function OwcInformationComponentViewer_getPurposeMode()
{return this.m_sPurposeMode;}
function OwcInformationComponentViewer_setPurposeMode(sPurposeMode)
{if(sPurposeMode&&sPurposeMode in Olive.Controls.InformationComponentViewer.PurposeMode&&sPurposeMode!=this.m_sPurposeMode)
{this.m_sPurposeMode=sPurposeMode;return true;}else
return false;}
function OwcInformationComponentViewer_getViewModeActual()
{return this.m_sViewModeActual;}
function OwcInformationComponentViewer_setViewModeActual(vViewModeActual)
{if((vViewModeActual===null)||(vViewModeActual&&vViewModeActual in Olive.Data.InformationComponentViewerState.ViewModeActual))
this.m_sViewModeActual=vViewModeActual;}
function OwcInformationComponentViewer_getTextModeFilter()
{return this.m_oState.getTextModeFilter();}
function OwcInformationComponentViewer_setTextModeFilter(vTextModeFilter,bDoNotRefresh)
{var bRetValue=this.m_oState.setTextModeFilter(vTextModeFilter);if(!bDoNotRefresh)
this.loadICViewer(null,null,true);return bRetValue;}
function OwcInformationComponentViewer_getChunkingMode()
{return this.m_oState.getChunkingMode();}
function OwcInformationComponentViewer_setChunkingMode(sChunkingMode,bDoNotRefresh)
{var bChanged=this.m_oState.setChunkingMode(sChunkingMode);if(bChanged&&!bDoNotRefresh)
this.loadICViewer(null,null,true);return bChanged;}
function OwcInformationComponentViewer_getEmbeddingMode()
{return this.m_oState.getEmbeddingMode();}
function OwcInformationComponentViewer_setEmbeddingMode(sEmbeddingMode,bDoNotRefresh)
{var bChanged=this.m_oState.setEmbeddingMode(sEmbeddingMode);if(bChanged&&!bDoNotRefresh)
this.loadICViewer(null,null,true);return bChanged;}
function OwcInformationComponentViewer_getEmbeddingLocation()
{return this.m_oState.getEmbeddingLocation();}
function OwcInformationComponentViewer_setEmbeddingLocation(sEmbeddingLocation,bDoNotRefresh)
{var bChanged=this.m_oState.setEmbeddingLocation(sEmbeddingLocation);if(bChanged&&!bDoNotRefresh)
this.loadICViewer();return bChanged;}
function OwcInformationComponentViewer_getUseReadingOrder()
{return this.m_oState.getUseReadingOrder();}
function OwcInformationComponentViewer_setUseReadingOrder(bUseReadingOrder,bDoNotRefresh)
{var bChanged=this.m_oState.setUseReadingOrder(bUseReadingOrder);if(bChanged&&!bDoNotRefresh)
this.loadICViewer(null,null,true);return bChanged;}
function OwcInformationComponentViewer_getHitHighlightMode()
{return this.m_oState.getHitHighlightMode();}
function OwcInformationComponentViewer_setHitHighlightMode(vHitHighlightMode,bDoNotRefresh)
{if("string"==typeof vHitHighlightMode)
{if("toggle"==vHitHighlightMode.toLowerCase())
vHitHighlightMode=!this.getHitHighlightMode();else
vHitHighlightMode=String_parseBoolean(vHitHighlightMode);}
var bChanged=this.m_oState.setHitHighlightMode(vHitHighlightMode);if(bChanged&&!bDoNotRefresh)
this.toggleHits(this.getHitHighlightMode());return bChanged;}
function OwcInformationComponentViewer_getLinkHighlightMode()
{return this.m_oState.getLinkHighlightMode();}
function OwcInformationComponentViewer_setLinkHighlightMode(vLinkHighlightMode,bDoNotRefresh)
{if("string"==typeof vLinkHighlightMode)
{if("toggle"==vLinkHighlightMode.toLowerCase())
vLinkHighlightMode=!this.getLinkHighlightMode();else
vLinkHighlightMode=String_parseBoolean(vLinkHighlightMode);}
var bChanged=this.m_oState.setLinkHighlightMode(vLinkHighlightMode);if(bChanged&&!bDoNotRefresh)
this.toggleLinks(this.getLinkHighlightMode());return bChanged;}
function OwcInformationComponentViewer_getLoadNextChunkWithHits()
{return this.m_oState.getLoadNextChunkWithHits();}
function OwcInformationComponentViewer_setLoadNextChunkWithHits(bLoadNextChunkWithHits,bDoNotRefresh)
{var bChanged=this.m_oState.setLoadNextChunkWithHits(bLoadNextChunkWithHits);if(bChanged&&!bDoNotRefresh)
this.loadICViewer();return bChanged;}
function OwcInformationComponentViewer_getAutoScrollToFirstHit()
{return this.m_oState.getAutoScrollToFirstHit();}
function OwcInformationComponentViewer_setAutoScrollToFirstHit(bAutoScrollToFirstHit,bDoNotRefresh)
{var bChanged=this.m_oState.setAutoScrollToFirstHit(bAutoScrollToFirstHit);if(bChanged&&!bDoNotRefresh)
this.loadICViewer();return bChanged;}
function OwcInformationComponentViewer_getDefaultContainerWidth()
{return this.m_oState.getDefaultContainerWidth();}
function OwcInformationComponentViewer_setDefaultContainerWidth(nDefaultContainerWidth,bDoNotRefresh)
{var bChanged=this.m_oState.setDefaultContainerWidth(nDefaultContainerWidth);if(bChanged&&!bDoNotRefresh)
this.loadICViewer();return bChanged;}
function OwcInformationComponentViewer_getDefaultContainerHeight()
{return this.m_oState.getDefaultContainerHeight();}
function OwcInformationComponentViewer_setDefaultContainerHeight(nDefaultContainerHeight,bDoNotRefresh)
{var bChanged=this.m_oState.setDefaultContainerHeight(nDefaultContainerHeight);if(bChanged&&!bDoNotRefresh)
this.loadICViewer();return bChanged;}
function OwcInformationComponentViewer_getRightClickEnabled()
{return this.m_bRightClickEnabled;}
function OwcInformationComponentViewer_setRightClickEnabled(vRightClickEnabled)
{var bCurrentMode=this.getRightClickEnabled();if("string"==typeof vRightClickEnabled)
{if("toggle"==vRightClickEnabled.toLowerCase())
vRightClickEnabled=!bCurrentMode;else
vRightClickEnabled=String_parseBoolean(vRightClickEnabled);}
if(bCurrentMode!=!!vRightClickEnabled)
{this.m_bRightClickEnabled=!!vRightClickEnabled;return true;}else
return false;}
function OwcInformationComponentViewer_getMouseOverEnabled()
{return this.m_bMouseOverEnabled;}
function OwcInformationComponentViewer_setMouseOverEnabled(vMouseOverEnabled)
{var bCurrentMode=this.getMouseOverEnabled();if("string"==typeof vMouseOverEnabled)
{if("toggle"==vMouseOverEnabled.toLowerCase())
vMouseOverEnabled=!bCurrentMode;else
vMouseOverEnabled=String_parseBoolean(vMouseOverEnabled);}
if(bCurrentMode!=!!vMouseOverEnabled)
{this.m_bMouseOverEnabled=!!vMouseOverEnabled;return true;}else
return false;}
function OwcInformationComponentViewer_getMouseOutEnabled()
{return this.m_bMouseOutEnabled;}
function OwcInformationComponentViewer_setMouseOutEnabled(vMouseOutEnabled)
{var bCurrentMode=this.getMouseOutEnabled();if("string"==typeof vMouseOutEnabled)
{if("toggle"==vMouseOutEnabled.toLowerCase())
vMouseOutEnabled=!bCurrentMode;else
vMouseOutEnabled=String_parseBoolean(vMouseOutEnabled);}
if(bCurrentMode!=!!vMouseOutEnabled)
{this.m_bMouseOutEnabled=!!vMouseOutEnabled;return true;}else
return false;}
function OwcInformationComponentViewer_getZoomMode()
{return this.m_oState.getZoomMode();}
function OwcInformationComponentViewer_setZoomMode(sMode,vFactor,vWidth,vHeight,bDoNotRefresh)
{var bChanged=this.m_oState.setZoomMode(sMode,vFactor,vWidth,vHeight);if(bChanged&&!bDoNotRefresh)
{this.zoomViewer();}
return bChanged;}
function OwcInformationComponentViewer_setZoomFactor(nFactor)
{this.setZoomMode(Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor,nFactor);this.notifyCmdStateChanged();}
function OwcInformationComponentViewer_zoomIn(vFactor)
{var oZoom=this.getZoomMode();var oNewZoom=this.getZoomInOutInterval(vFactor,true,oZoom);if(oZoom.m_sZoomMode==Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor)
{this.setZoomMode(Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor,oNewZoom.nZoomFactor);}
else if(oZoom.m_sZoomMode==Olive.Data.InformationComponentViewerZoom.ZoomMode.pagedimensions)
{this.setZoomMode(Olive.Data.InformationComponentViewerZoom.ZoomMode.pagedimensions,null,oNewZoom.nMaxWidth,oNewZoom.nMaxHeight);}
this.notifyCmdStateChanged();}
function OwcInformationComponentViewer_zoomOut(vFactor)
{var oZoom=this.getZoomMode();var oNewZoom=this.getZoomInOutInterval(vFactor,false,oZoom);if(oZoom.m_sZoomMode==Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor)
{this.setZoomMode(Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor,oNewZoom.nZoomFactor);}
else if(oZoom.m_sZoomMode==Olive.Data.InformationComponentViewerZoom.ZoomMode.pagedimensions)
{this.setZoomMode(Olive.Data.InformationComponentViewerZoom.ZoomMode.pagedimensions,null,oNewZoom.nMaxWidth,oNewZoom.nMaxHeight);}
this.notifyCmdStateChanged();}
function OwcInformationComponentViewer_getZoomInOutInterval(vFactor,bZoomIn,oZoom)
{var nFactor=null;if(vFactor&&"string"==typeof(vFactor))
{nFactor=parseFloat(vFactor);}
if(!nFactor||isNaN(nFactor))
{nFactor=this.m_nDefaultZoomInOutInterval;}
if(!bZoomIn)
{nFactor=1/nFactor;}
if(oZoom.m_sZoomMode==Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor)
{return{nZoomFactor:nFactor*oZoom.m_nZoomFactor*100};}
else if(oZoom.m_sZoomMode==Olive.Data.InformationComponentViewerZoom.ZoomMode.pagedimensions)
{return{nMaxWidth:nFactor*oZoom.m_nMaxWidth,nMaxHeight:nFactor*oZoom.m_nMaxHeight};}}
function OwcInformationComponentViewer_zoomViewer()
{var oZoom=this.getZoomMode();if(oZoom&&this.m_oSubControlsByType)
{if(oZoom.m_sZoomMode==Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor)
{this._zoomByFactor(oZoom.m_nZoomFactor);}
else if(oZoom.m_sZoomMode==Olive.Data.InformationComponentViewerZoom.ZoomMode.pagedimensions)
{this._zoomByPageDimensions(oZoom.m_nMaxWidth,oZoom.m_nMaxHeight);}}
var oOptimumSize=this.getOptimumContainerSize();var oEvent=this.createOwcEventObject("viewerResized");oEvent.nOptimumWidth=oOptimumSize.nWidth;oEvent.nOptimumHeight=oOptimumSize.nHeight;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcInformationComponentViewer_zoomByFactor(nZoomFactor)
{for(var sType in this.m_oSubControlsByType)
{var arrSubControls=this.m_oSubControlsByType[sType];for(var i=0;i<arrSubControls.length;++i)
{if(Olive.Controls.IZoomable.IsImplementedBy(arrSubControls[i]))
{arrSubControls[i].setZoom(nZoomFactor);}}}}
function OwcInformationComponentViewer_zoomByPageDimensions(nMaxWidth,nMaxHeight)
{var sViewModeActual=this.getViewModeActual();if(sViewModeActual==Olive.Data.InformationComponentViewerState.ViewModeActual.image)
{if(this.m_oSubControlsByType[Olive.Controls.controlTypeNames.ICViewerPage])
{var arrPages=this.m_oSubControlsByType[Olive.Controls.controlTypeNames.ICViewerPage];for(var i=0;i<arrPages.length;++i)
{var oHtmlElement=arrPages[i].HtmlElement;if(oHtmlElement)
{var oParent=oHtmlElement.parentNode;if(!DHTML.getAttrBoolean(oParent,Olive.Controls.attributes.InformationComponentPageContainer,false))
{continue;}
var nParentHeight=DHTML.getElemHeight(oParent);var nElementHeight=DHTML.getElemHeight(oHtmlElement);var nHeaderFooterHeight=nParentHeight-nElementHeight;var nBasicWidth=arrPages[i].getBasicWidth();var nBasicHeight=arrPages[i].getBasicHeight();if(nBasicWidth&&nBasicHeight)
{var nMaxContentHeight=nMaxHeight-nHeaderFooterHeight;var nZoom=Math.min(1,Math.min(nMaxWidth/nBasicWidth,nMaxContentHeight/nBasicHeight));if(nZoom>0)
{if(Olive.Controls.IZoomable.IsImplementedBy(arrPages[i]))
arrPages[i].setZoom(nZoom);var oScanner=new Olive.Controls.Scanner();oScanner.m_oICViewer=this;oScanner.m_nZoom=nZoom;oScanner.setProcessControlCallback(this._zoomSubControl);oScanner.scan(arrPages[i]);}}}}}}
else if(sViewModeActual==Olive.Data.InformationComponentViewerState.ViewModeActual.text)
{var arrPrims=this.m_oSubControlsByType[Olive.Controls.controlTypeNames.Primitive];for(var j=0;j<arrPrims.length;++j)
{if(arrPrims[j].setZoom)
{nBasicWidth=arrPrims[j].getBasicWidth();nBasicHeight=arrPrims[j].getBasicHeight();if(nBasicWidth&&nBasicHeight)
{nZoom=Math.min(1,Math.min(nMaxWidth/nBasicWidth,nMaxHeight/nBasicHeight));if(nZoom>0)
arrPrims[j].setZoom(nZoom);}}}}}
function OwcInformationComponentViewer_zoomSubControl(ctxScanner,oSubControl)
{var sType=oSubControl.controlType;if(sType in ctxScanner.m_oICViewer.m_oSubControlsByType&&oSubControl.setZoom)
oSubControl.setZoom(ctxScanner.m_nZoom);}
function OwcInformationComponentViewer_getOptimumContainerSize()
{var nWidth=0;var nHeight=0;if(this.getViewModeActual()==Olive.Data.InformationComponentViewerState.ViewModeActual.image)
{var nElemWidth=null;var nElemHeight=null;var arrPageContainers=this.HtmlElement.childNodes;for(var i=0;i<arrPageContainers.length;++i)
{if(arrPageContainers[i].nodeType==DOM.NodeType.ELEMENT_NODE)
{if(DHTML.matchElemTag(arrPageContainers[i],Olive.Controls.elements.Data,Olive.Controls.prefix))
continue;if(DHTML.getAttrBoolean(arrPageContainers[i],Olive.Controls.attributes.InformationComponentPageContainer,false))
{var arrPageElems=arrPageContainers[i].childNodes;for(var j=0;j<arrPageElems.length;++j)
{if(arrPageElems[j].nodeType==DOM.NodeType.ELEMENT_NODE)
{nElemHeight=DHTML.getElemHeight(arrPageElems[j]);nHeight+=nElemHeight;if(DHTML.getAttr(arrPageElems[j],Olive.Controls.attributes.ControlType,"").toLowerCase()==Olive.Controls.controlTypeNames.ICViewerPage)
{nElemWidth=DHTML.getElemWidth(arrPageElems[j]);nWidth=Math.max(nWidth,nElemWidth);}}}}
else
{nElemWidth=DHTML.getElemWidth(arrPageContainers[i]);nElemHeight=DHTML.getElemHeight(arrPageContainers[i]);nWidth=Math.max(nWidth,nElemWidth);nHeight+=nElemHeight;}}}}
var oRet={nWidth:(nWidth>0)?nWidth:this.getDefaultContainerWidth(),nHeight:(nHeight>0)?nHeight:this.getDefaultContainerHeight()};return oRet;}
function OwcInformationComponentViewer_countImages()
{var nCount=0;if(this.m_oSubControlsByType&&this.m_oSubControlsByType[Olive.Controls.controlTypeNames.Primitive])
{var arrControls=this.m_oSubControlsByType[Olive.Controls.controlTypeNames.Primitive];for(var i=0;i<arrControls.length;++i)
{if(Olive.Controls.IImageViewer.IsImplementedBy(arrControls[i]))
{nCount++;}}}
this.m_oImageStatus.m_nImages=nCount;this.m_oImageStatus.m_bCountWasCalculated=true;this._checkCount();}
function OwcInformationComponentViewer_onDataProcessed(eventArgs)
{if(eventArgs&&eventArgs.srcObject&&eventArgs.srcObject.getControlType()==Olive.Controls.controlTypeNames.SeeAlsoList)
{this.zoomViewer();}}
function OwcInformationComponentViewer_onImageProcessed(oEvent)
{if(!Olive.Controls.IImageViewer.IsImplementedBy(oEvent.srcObject)||oEvent.srcObject.controlType!=Olive.Controls.controlTypeNames.Primitive)
return;if(oEvent.bSuccess)
{++this.m_oImageStatus.m_nSuccess;}
else
{++this.m_oImageStatus.m_nFailure;}
this._checkCount();oEvent.cancelBubbling=true;}
function OwcInformationComponentViewer_checkCount()
{var oStatus=this.m_oImageStatus;if(oStatus.m_bCountWasCalculated&&oStatus.m_nImages<=(oStatus.m_nSuccess+oStatus.m_nFailure)&&!oStatus.m_bEventWasFired)
{oStatus.m_bEventWasFired=true;var oEvent=this.createOwcEventObject("imagesLoaded");oEvent.nSuccess=oStatus.m_nSuccess;oEvent.nFailure=oStatus.m_nFailure;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}}
function OwcInformationComponentViewer_onLinkControlClicked(oEventArg)
{var oEvent=this.createOwcEventObject("linkClicked");oEvent.OwcContentItem=oEventArg.OwcContentItem;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcInformationComponentViewer_openLinkInNewWindow(oEvent)
{oEvent.cancelDefaultAction=true;var oContentItem=oEvent.OwcContentItem;if(oContentItem.DataObjectType==OwcContentItem_Entity)
{var oContentItemSearchQuery=this.getContentItemOfType(OwcContentItem_SearchQuery);if(oContentItemSearchQuery)
{oContentItem.m_oParentItem=oContentItemSearchQuery;}
else
{oContentItem.m_oParentItem=null;}
this.loadICViewer(oContentItem);}
else if(oContentItem.DataObjectType==OwcContentItem_Link)
{if(oContentItem.m_sLinkType=="CPG")
{var oViewerContentItem=this.getContentItem();oViewerContentItem.m_sChunkId=oContentItem.m_sLinkTarget;oViewerContentItem.m_nChunkNo=null;oViewerContentItem.m_nPageNo=null;this.loadICViewer(null,null,true);}
else if(oContentItem.m_sLinkType=="URL"||oContentItem.m_sLinkType=="EML")
{var sLinkType=oContentItem.m_sLinkType;var oPage=Olive.Page.GetPageForWindow(window);var vWindowOptions=null;if(vWindowOptions===null)
{vWindowOptions=new Olive.WindowOptions();vWindowOptions.setFeature(Olive.WindowOptions.Features.menubar,true);vWindowOptions.setFeature(Olive.WindowOptions.Features.location,true);vWindowOptions.setFeature(Olive.WindowOptions.Features.resizable,true);vWindowOptions.setFeature(Olive.WindowOptions.Features.scrollbars,true);vWindowOptions.target=oContentItem.m_sLinkType=="EML"?"_self":"_new";}
oPage.openPopup(oContentItem.m_sLinkTarget,vWindowOptions);}}}
function OwcInformationComponentViewer_collectSubControls(arrControlTypes)
{var oScanner=new Olive.Controls.Scanner();oScanner.m_oSubControlsByType={};for(var i=0;i<arrControlTypes.length;++i)
{oScanner.m_oSubControlsByType[arrControlTypes[i]]=[];}
oScanner.setProcessControlCallback(this._appendSubControl);oScanner.scan(this);this.m_oSubControlsByType=oScanner.m_oSubControlsByType;}
function OwcInformationComponentViewer_appendSubControl(ctxScanner,oSubControl)
{var sType=oSubControl.controlType;if(sType in ctxScanner.m_oSubControlsByType)
Array_appendItem(ctxScanner.m_oSubControlsByType[sType],oSubControl);}
function OwcInformationComponentViewer_navigateOnLoad()
{for(var sType in this.m_oCurrentObjsForLoad)
{var sControl=this.m_oCurrentObjsForLoad[sType];var oControl=this._getControlFromId(sType,sControl);if(oControl)
this._setCurrentObject(sType,oControl);break;}
this.m_oCurrentObjsForLoad={};}
function OwcInformationComponentViewer_getCurrentObject(sType)
{if(this.m_oCurrentObjs[sType])
return this.m_oCurrentObjs[sType];return null;}
function OwcInformationComponentViewer_setCurrentObject(sType,oControl)
{this.m_oCurrentObjs[sType]=oControl;this.makeControlCurrent(oControl);}
function OwcInformationComponentViewer_getControlFromId(sType,vId)
{var oReturnValue=null;if(this.m_oSubControlsByType&&sType in this.m_oSubControlsByType)
{var arrSubControls=this.m_oSubControlsByType[sType];if(arrSubControls)
{for(var i=0;i<arrSubControls.length;++i)
{var oControl=arrSubControls[i];switch(sType)
{case Olive.Controls.controlTypeNames.ICViewerChunk:if(oControl&&oControl.getContentItem)
{var oContentItem=oControl.getContentItem();if(oContentItem&&oContentItem.m_sEntityId==vId)
oReturnValue=oControl;}
break;case Olive.Controls.controlTypeNames.ICViewerHit:if(i===0&&vId==Olive.Controls.InformationComponentViewer.NavigationDir.firstinwindow)
{oReturnValue=oControl;}
break;default:break;}
if(oReturnValue)
break;}}}
return oReturnValue;}
function OwcInformationComponentViewer_getCurrentObjectForLoad(sType)
{if(this.m_oCurrentObjsForLoad[sType])
return this.m_oCurrentObjsForLoad[sType];return null;}
function OwcInformationComponentViewer_setCurrentObjectForLoad(sType,vId)
{if(Array_contains(this.m_arrControlSubTypes,sType))
this.m_oCurrentObjsForLoad[sType]=vId;}
function OwcInformationComponentViewer_navigateTo(nControlType,nNavigationDirection,vObjectId)
{var vFoundObjectId=null;var bNavigationSucceeded=false;var sControlType=this._getControlTypeFromNavigationObj(nControlType);if(nNavigationDirection&Olive.Controls.InformationComponentViewer.NavigationDir.relativemask)
{var oContentItem=this.getContentItem();if(oContentItem)
{switch(nControlType|nNavigationDirection)
{case(Olive.Controls.InformationComponentViewer.NavigationDir.first|Olive.Controls.InformationComponentViewer.NavigationObj.chunk):vFoundObjectId=oContentItem.m_sFirstChunk;break;case(Olive.Controls.InformationComponentViewer.NavigationDir.previous|Olive.Controls.InformationComponentViewer.NavigationObj.chunk):vFoundObjectId=oContentItem.m_sPreviousChunk;break;case(Olive.Controls.InformationComponentViewer.NavigationDir.next|Olive.Controls.InformationComponentViewer.NavigationObj.chunk):vFoundObjectId=oContentItem.m_sNextChunk;break;case(Olive.Controls.InformationComponentViewer.NavigationDir.last|Olive.Controls.InformationComponentViewer.NavigationObj.chunk):vFoundObjectId=oContentItem.m_sLastChunk;break;case(Olive.Controls.InformationComponentViewer.NavigationDir.first|Olive.Controls.InformationComponentViewer.NavigationObj.hitchunk):vFoundObjectId=oContentItem.m_sFirstHitChunk;break;case(Olive.Controls.InformationComponentViewer.NavigationDir.previous|Olive.Controls.InformationComponentViewer.NavigationObj.hitchunk):vFoundObjectId=oContentItem.m_sPreviousHitChunk;break;case(Olive.Controls.InformationComponentViewer.NavigationDir.next|Olive.Controls.InformationComponentViewer.NavigationObj.hitchunk):vFoundObjectId=oContentItem.m_sNextHitChunk;break;case(Olive.Controls.InformationComponentViewer.NavigationDir.last|Olive.Controls.InformationComponentViewer.NavigationObj.hitchunk):vFoundObjectId=oContentItem.m_sLastHitChunk;break;default:break;}}}
else if(nNavigationDirection&Olive.Controls.InformationComponentViewer.NavigationDir.id)
{vFoundObjectId=vObjectId;}
if(vFoundObjectId)
{var oControl=this._getControlByTypeAndId(sControlType,vFoundObjectId);if(oControl)
{bNavigationSucceeded=true;}
else
{switch(sControlType)
{case Olive.Controls.controlTypeNames.ICViewerChunk:oContentItem.m_sChunkId=vFoundObjectId;oContentItem.m_nChunkNo=null;oContentItem.m_nPageNo=null;break;default:break;}
bNavigationSucceeded=true;this.loadICViewer(null,null,true);}}
if(!bNavigationSucceeded)
{this.reportKnownError(Olive.Errors.Code.InvalidNavigation);}}
function OwcInformationComponentViewer_getControlTypeFromNavigationObj(nControlType)
{var sRetVal=null;switch(nControlType)
{case Olive.Controls.InformationComponentViewer.NavigationObj.hit:sRetVal=Olive.Controls.controlTypeNames.ICViewerHit;break;case Olive.Controls.InformationComponentViewer.NavigationObj.link:sRetVal=Olive.Controls.controlTypeNames.ICViewerLink;break;case Olive.Controls.InformationComponentViewer.NavigationObj.chunk:case Olive.Controls.InformationComponentViewer.NavigationObj.hitchunk:sRetVal=Olive.Controls.controlTypeNames.ICViewerChunk;break;case Olive.Controls.InformationComponentViewer.NavigationObj.page:case Olive.Controls.InformationComponentViewer.NavigationObj.hitpage:sRetVal=Olive.Controls.controlTypeNames.ICViewerPage;break;default:break;}
return sRetVal;}
function OwcInformationComponentViewer_getControlByTypeAndId(sControlType,vId)
{var oControl=null;if(this.m_oSubControlsByType&&sControlType&&vId)
{var arrControls=this.m_oSubControlsByType[sControlType];if(arrControls)
{if("string"==typeof vId)
{for(var i=0;i<arrControls.length;++i)
{if(arrControls[i].getContentItem)
var oContentItem=arrControls[i].getContentItem();switch(sControlType)
{case Olive.Controls.controlTypeNames.ICViewerChunk:if(oContentItem&&oContentItem.m_sEntityId==vId)
oControl=arrControls[i];break;case Olive.Controls.controlTypeNames.ICViewerPage:if(oContentItem&&(oContentItem.m_sPageLabel===vId||parseInt(vId,10)===oContentItem.m_nPageNo))
oControl=arrControls[i];break;default:break;}
if(oControl)
break;}}
else if("number"==typeof vId&&arrControls[vId])
{oControl=arrControls[vId];}}}
if(!oControl)
oControl=null;return oControl;}
function OwcInformationComponentViewer_goToFirst(nControlType)
{this.navigateTo(nControlType,Olive.Controls.InformationComponentViewer.NavigationDir.first);}
function OwcInformationComponentViewer_goToPrevious(nControlType)
{this.navigateTo(nControlType,Olive.Controls.InformationComponentViewer.NavigationDir.previous);}
function OwcInformationComponentViewer_goToNext(nControlType)
{this.navigateTo(nControlType,Olive.Controls.InformationComponentViewer.NavigationDir.next);}
function OwcInformationComponentViewer_goToLast(nControlType)
{this.navigateTo(nControlType,Olive.Controls.InformationComponentViewer.NavigationDir.last);}
function OwcInformationComponentViewer_goToFirstChunk()
{this.goToFirst(Olive.Controls.InformationComponentViewer.NavigationObj.chunk);}
function OwcInformationComponentViewer_goToPreviousChunk()
{this.goToPrevious(Olive.Controls.InformationComponentViewer.NavigationObj.chunk);}
function OwcInformationComponentViewer_goToNextChunk()
{this.goToNext(Olive.Controls.InformationComponentViewer.NavigationObj.chunk);}
function OwcInformationComponentViewer_goToLastChunk()
{this.goToLast(Olive.Controls.InformationComponentViewer.NavigationObj.chunk);}
function OwcInformationComponentViewer_goToFirstHitChunk()
{this.goToFirst(Olive.Controls.InformationComponentViewer.NavigationObj.hitchunk);}
function OwcInformationComponentViewer_goToPreviousHitChunk()
{this.goToPrevious(Olive.Controls.InformationComponentViewer.NavigationObj.hitchunk);}
function OwcInformationComponentViewer_goToNextHitChunk()
{this.goToNext(Olive.Controls.InformationComponentViewer.NavigationObj.hitchunk);}
function OwcInformationComponentViewer_goToLastHitChunk()
{this.goToLast(Olive.Controls.InformationComponentViewer.NavigationObj.hitchunk);}
function OwcInformationComponentViewer_updateBooleanCmdUiState(oCmdUiState)
{var bEnable=false;var sName=oCmdUiState.commandName.toLowerCase();var sMode=oCmdUiState.commandParams?oCmdUiState.commandParams.toLowerCase():"";var bToggleMode=(sMode=="toggle");var bMode=null;if(!bToggleMode)
bMode=String_parseBoolean(sMode);var bOptionIsPossible=false;var bOptionIsEnabled=false;switch(sName)
{case"sethithighlightmode":bOptionIsPossible=!!(this.m_oSubControlsByType&&this.m_oSubControlsByType[Olive.Controls.controlTypeNames.ICViewerHit]&&this.m_oSubControlsByType[Olive.Controls.controlTypeNames.ICViewerHit].length>0);if(bOptionIsPossible)
bOptionIsEnabled=this.getHitHighlightMode();break;case"setlinkhighlightmode":bOptionIsPossible=!!(this.m_oSubControlsByType&&this.m_oSubControlsByType[Olive.Controls.controlTypeNames.ICViewerLink]&&this.m_oSubControlsByType[Olive.Controls.controlTypeNames.ICViewerLink].length>0);if(bOptionIsPossible)
bOptionIsEnabled=this.getLinkHighlightMode();break;case"setusereadingorder":var vViewModeActual=this.getViewModeActual();if(vViewModeActual)
{bOptionIsPossible=(vViewModeActual==Olive.Data.InformationComponentViewerState.ViewModeActual.text);}
else
{var sViewMode=this.getViewMode();bOptionIsPossible=(sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.text||sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.auto);}
if(bOptionIsPossible)
bOptionIsEnabled=this.getUseReadingOrder();break;default:break;}
if(bToggleMode)
bEnable=bOptionIsPossible;else
{if(bMode)
bEnable=bOptionIsPossible&&(!bOptionIsEnabled);else
bEnable=bOptionIsPossible&&bOptionIsEnabled;}
oCmdUiState.enableCommand(bEnable);oCmdUiState.checkCommand(bOptionIsEnabled);}
function OwcInformationComponentViewer_updateNavigationCmdUiState(oCmdUiState)
{var oContentItem=this.getContentItem();if(!oContentItem)
{oCmdUiState.enableCommand(false);return false;}
var bEnable=false;var sChunkTypeName=Olive.Controls.controlTypeNames.ICViewerChunk;switch(oCmdUiState.commandName.toLowerCase())
{case"previouschunk":if(oContentItem.m_sPreviousChunk&&!this._getControlByTypeAndId(sChunkTypeName,oContentItem.m_sPreviousChunk))
bEnable=true;break;case"nextchunk":if(oContentItem.m_sNextChunk&&!this._getControlByTypeAndId(sChunkTypeName,oContentItem.m_sNextChunk))
bEnable=true;break;case"firstchunk":if(oContentItem.m_sFirstChunk&&!this._getControlByTypeAndId(sChunkTypeName,oContentItem.m_sFirstChunk))
bEnable=true;break;case"lastchunk":if(oContentItem.m_sLastChunk&&!this._getControlByTypeAndId(sChunkTypeName,oContentItem.m_sLastChunk))
bEnable=true;break;case"previoushitchunk":if(oContentItem.m_sPreviousHitChunk&&!this._getControlByTypeAndId(sChunkTypeName,oContentItem.m_sPreviousHitChunk))
bEnable=true;break;case"nexthitchunk":if(oContentItem.m_sNextHitChunk&&!this._getControlByTypeAndId(sChunkTypeName,oContentItem.m_sNextHitChunk))
bEnable=true;break;case"firsthitchunk":if(oContentItem.m_sFirstHitChunk&&!this._getControlByTypeAndId(sChunkTypeName,oContentItem.m_sFirstHitChunk))
bEnable=true;break;case"lasthitchunk":if(oContentItem.m_sLastHitChunk&&!this._getControlByTypeAndId(sChunkTypeName,oContentItem.m_sLastHitChunk))
bEnable=true;break;default:break;}
oCmdUiState.enableCommand(bEnable);return true;}
function OwcInformationComponentViewer_updateViewModeCmdUiState(oCmdUiState)
{var bCommandEnabled=false;var bChecked=false;var sModeName=oCmdUiState.commandParams.toLowerCase();switch(sModeName)
{case Olive.Data.InformationComponentViewerState.ViewMode.text:var nTextModeFilter=this.getTextModeFilter();var bTextModeEnabled=!(((nTextModeFilter&Olive.Data.InformationComponentViewerState.TextModeFilter.noscanned)&&this.m_bIsScanned)||((nTextModeFilter&Olive.Data.InformationComponentViewerState.TextModeFilter.noads)&&this.m_sEntityType==Olive.ContentItem.Entity.EntityTypes.ad)||((nTextModeFilter&Olive.Data.InformationComponentViewerState.TextModeFilter.nopictures)&&this.m_sEntityType==Olive.ContentItem.Entity.EntityTypes.picture)||((nTextModeFilter&Olive.Data.InformationComponentViewerState.TextModeFilter.nodata)&&this.m_sEntityFormat==Olive.ContentItem.Entity.EntityFormats.data));bCommandEnabled=(this.m_bNoImageMode?true:bTextModeEnabled);if(this.m_bImagesOnly==true)
bCommandEnabled=false;this.m_bTextModeEnabled=bCommandEnabled
break;case Olive.Data.InformationComponentViewerState.ViewMode.image:case Olive.Data.InformationComponentViewerState.ViewMode.auto:bCommandEnabled=!this.m_bNoImageMode;break;default:break;}
if(bCommandEnabled)
bChecked=(this.getViewMode()==sModeName);oCmdUiState.checkCommand(bChecked);oCmdUiState.enableCommand(bCommandEnabled);}
function OwcInformationComponentViewer_updateChunkingModeCmdUiState(oCmdUiState)
{var bChecked=false;var sModeName=oCmdUiState.commandParams.toLowerCase();var bCommandEnabled=JScript.Type.IsEnumEntry(Olive.Data.InformationComponentViewerState.ChunkingMode,sModeName);if(bCommandEnabled)
bChecked=(this.getChunkingMode()==sModeName);oCmdUiState.checkCommand(bChecked);oCmdUiState.enableCommand(bCommandEnabled);}
function OwcInformationComponentViewer_updateEmbeddingModeCmdUiState(oCmdUiState)
{var bChecked=false;var bCommandEnabled=false;var bModeIsOK=false;var vViewModeActual=this.getViewModeActual();if(vViewModeActual)
{bModeIsOK=(vViewModeActual==Olive.Data.InformationComponentViewerState.ViewModeActual.text);}
else
{var sViewMode=this.getViewMode();bModeIsOK=(sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.text||sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.auto);}
if(bModeIsOK)
{var sModeName=oCmdUiState.commandParams.toLowerCase();bCommandEnabled=JScript.Type.IsEnumEntry(Olive.Data.InformationComponentViewerState.EmbeddingMode,sModeName);if(bCommandEnabled)
bChecked=(this.getEmbeddingMode()==sModeName);}
oCmdUiState.checkCommand(bChecked);oCmdUiState.enableCommand(bCommandEnabled);}
function OwcInformationComponentViewer_updateZoomCmdUiState(oCmdUiState)
{var oZoom=this.getZoomMode();if(oZoom&&oZoom.m_sZoomMode==Olive.Data.InformationComponentViewerZoom.ZoomMode.zoomfactor)
{var nZoomPercents=(oZoom.m_nZoomFactor*100);if(nZoomPercents>1)
nZoomPercents=Math.round(nZoomPercents*100)/100;var sZoomFactor=String(nZoomPercents)+"%";oCmdUiState.setCommandText(sZoomFactor);}
var bCommandEnabled=(Olive.Data.InformationComponentViewerState.ViewModeActual.image==this.getViewModeActual()||this.m_oImageStatus.m_nImages>0);oCmdUiState.enableCommand(bCommandEnabled);}
function OwcInformationComponentViewer_makeControlCurrent(oControl)
{var oElem=oControl.HtmlElement;if(oElem.scrollIntoView)
oElem.scrollIntoView();}
JScript.Type.RegisterClass("Olive.Controls.InformationComponentViewer",Olive.Controls.InformationComponentViewer,Olive.Controls.Control,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.InformationComponentViewer,Olive.Controls.InformationComponentViewer);}
if(!Olive.Controls.ICViewerPage)
{Olive.Controls.ICViewerPage=function OwcICViewerPage()
{};Olive.Controls.ICViewerPage.DeclareType=function OwcICViewerPage_DeclareType()
{this.OverrideMethod("constructControl",OwcICViewerPage_constructControl);this.DeclareField("m_bDisableContentAutoLoad",true);this.DeclareField("m_sViewMode",null);};function OwcICViewerPage_constructControl(oWebPage,oHtmlElement,oControlParent)
{this.m_sViewMode=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.InformationComponentViewMode,"").toLowerCase();if(this.m_sViewMode&&this.m_sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.image)
{Olive.Controls.IZoomable.Implement(this,true);}
if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.Controls.ICViewerPage",Olive.Controls.ICViewerPage,Olive.Controls.Control,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.ICViewerPage,Olive.Controls.ICViewerPage);}
if(!Olive.Controls.ICViewerChunk)
{Olive.Controls.ICViewerChunk=function OwcICViewerChunk()
{};Olive.Controls.ICViewerChunk.DeclareType=function OwcICViewerChunk_DeclareType()
{this.OverrideMethod("constructControl",OwcICViewerChunk_constructControl);this.OverrideMethod("parseControlHtmlAttr",OwcICViewerChunk_parseControlHtmlAttr);this.DeclareField("m_bDisableContentAutoLoad",true);this.DeclareField("m_sViewMode",null);this.DeclareField("m_bNoImageMode",false);this.DeclareField("m_bImagesOnly",false);this.DeclareField("m_sEntityType","");this.DeclareField("m_sEntityFormat","");this.DeclareField("m_bIsScanned",false);};function OwcICViewerChunk_constructControl(oWebPage,oHtmlElement,oControlParent)
{this.m_sViewMode=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.InformationComponentViewMode,"").toLowerCase();if(this.m_sViewMode&&this.m_sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.image)
{Olive.Controls.IZoomable.Implement(this,true);}
if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcICViewerChunk_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var attributes=Olive.Controls.attributes;this.m_bNoImageMode=DHTML.getAttrBoolean(this.HtmlElement,attributes.InformationComponentNoImageMode,this.m_bNoImageMode);this.m_bImagesOnly=DHTML.getAttrBoolean(this.HtmlElement,attributes.InformationComponentImagesOnly,this.m_bImagesOnly);this.m_bIsScanned=DHTML.getAttrBoolean(this.HtmlElement,attributes.InformationComponentIsScanned,this.m_bIsScanned);this.m_sEntityType=DHTML.getAttr(this.HtmlElement,attributes.InformationComponentEntityType,this.m_sEntityType).toLowerCase();var sEntityFormat=DHTML.getAttr(this.HtmlElement,attributes.InformationComponentEntityFormat);if(sEntityFormat)
{this.m_sEntityFormat=sEntityFormat.toLowerCase();}}
JScript.Type.RegisterClass("Olive.Controls.ICViewerChunk",Olive.Controls.ICViewerChunk,Olive.Controls.Control,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.ICViewerChunk,Olive.Controls.ICViewerChunk);}
if(!Olive.Controls.Primitive)
{Olive.Controls.Primitive=function OwcPrimitive()
{};Olive.Controls.Primitive.DeclareType=function OwcPrimitive_DeclareType()
{this.DeclareField("m_bDisableContentAutoLoad",true);this.DeclareField("m_bNoImage",false);this.OverrideMethod("constructControl",OwcPrimitive_constructControl);this.OverrideMethod("parseControlHtmlAttr",OwcPrimitive_parseControlHtmlAttr);};Olive.Controls.Primitive.ApplyPrototype=function OwcPrimitive_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("primitiveMouseOver","onPrimitiveMouseOver",true);rObject.registerOwcEventsClass2("primitiveMouseOut","onPrimitiveMouseOut",true);rObject.registerOwcEventsClass2("primitiveRightClick","onPrimitiveRightClick",true);};function OwcPrimitive_constructControl(oWebPage,oHtmlElement,oControlParent)
{var sViewMode=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.InformationComponentViewMode,"").toLowerCase();if(sViewMode&&Olive.Data.InformationComponentViewerState.ViewMode[sViewMode]==Olive.Data.InformationComponentViewerState.ViewMode.image)
{Olive.Controls.IImageViewer.Implement(this,true);JScript.Type.OverrideMethod(this,"requestData",OwcPrimitive_Image_requestData);this.m_bDisableContentAutoLoad=false;}
if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcPrimitive_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.m_bNoImage=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.InformationComponentNoImage,false);}
function OwcPrimitive_DHTML_onRightClick(oEvent)
{OwcPrimitive_DHTML_fireMouseEvent(oEvent,"RightClick");}
function OwcPrimitive_DHTML_onMouseOver(oEvent)
{OwcPrimitive_DHTML_fireMouseEvent(oEvent,"MouseOver");}
function OwcPrimitive_DHTML_onMouseOut(oEvent)
{OwcPrimitive_DHTML_fireMouseEvent(oEvent,"MouseOut");}
function OwcPrimitive_DHTML_fireMouseEvent(oHtmlEvent,sEventName)
{var oControl=OwcGetControlFromHtmlElem(this);if(!oControl)
return;var oContentItem=oControl.getContentItem();if(oContentItem)
{stopEventBubbling(oHtmlEvent);var oEvent=oControl.createOwcEventObject("primitive"+sEventName);oEvent.OlvContentItem=oContentItem;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}}
function OwcPrimitive_Image_requestData(oParams,oHtmlContentTarget)
{if(!this.m_bNoImage)
{this.m_sImageUrl=this.buildRequestUrl(oParams);if(this.m_sImageUrl)
this.setImageUrl(this.m_sImageUrl);}}
JScript.Type.RegisterClass("Olive.Controls.Primitive",Olive.Controls.Primitive,Olive.Controls.Control,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Primitive,Olive.Controls.Primitive);}
if(!Olive.Controls.ICViewerHit)
{Olive.Controls.ICViewerHit=function OwcICViewerHit()
{};Olive.Controls.ICViewerHit.DeclareType=function OwcICViewerHit_DeclareType()
{this.OverrideMethod("constructControl",OwcICViewerHit_constructControl);this.OverrideMethod("parseControlHtmlAttr",OwcICViewerHit_parseControlHtml);this.DeclareMethod("makeCurrent",OwcICViewerHit_makeCurrent);this.DeclareMethod("makeNotCurrent",OwcICViewerHit_makeNotCurrent);this.ReplaceMethod("updateState",OwcICViewerHit_updateState);this.DeclareField("m_sViewMode",null);this.DeclareField("m_sHitSrc",null);this.DeclareField("m_sCurrentHitSrc",null);this.DeclareField("m_sHitCss",null);this.DeclareField("m_sCurrentHitCss",null);this.DeclareField("m_oImageElem",null);};function OwcICViewerHit_constructControl(oWebPage,oHtmlElement,oControlParent)
{this.m_sViewMode=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.InformationComponentViewMode,"").toLowerCase();if(this.m_sViewMode&&this.m_sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.image)
{this.m_sViewMode=Olive.Data.InformationComponentViewerState.ViewMode.image;var bIsImg=DHTML.isImageElem(oHtmlElement);var sHitSrc=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.InformationComponentHitSrc);var sCurrentHitSrc=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.InformationComponentCurrentHitSrc);if(bIsImg||(sHitSrc&&sCurrentHitSrc))
{this.m_sHitSrc=sHitSrc;this.m_sCurrentHitSrc=sCurrentHitSrc;}
Olive.Controls.IZoomable.Implement(this,true);JScript.Type.OverrideMethod(this,"initControl",OwcICViewerHit_Image_initControl);}
else
{this.m_sViewMode=Olive.Data.InformationComponentViewerState.ViewMode.text;this.m_sHitCss=Olive.Controls.InformationComponentViewer.cssClass.TextHit;this.m_sCurrentHitCss=Olive.Controls.InformationComponentViewer.cssClass.TextCurrentHit;}
if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcICViewerHit_parseControlHtml()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var sHitCss=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.InformationComponentHitCss,this.m_sHitCss);if(sHitCss)
this.m_sHitCss=sHitCss;var sCurrentHitCss=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.InformationComponentCurrentHitCss,this.m_sCurrentHitCss);if(sCurrentHitCss)
this.m_sCurrentHitCss=sCurrentHitCss;}
function OwcICViewerHit_Image_initControl()
{if(this.m_sHitCss)
DHTML.addCssClassToElem(this.HtmlElement,this.m_sHitCss);if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_sHitSrc&&this.m_sCurrentHitSrc)
{var sInnerHtml="<img src='"+this.m_sHitSrc+"' style='height: 100%; width: 100%;' />";DHTML.pasteHtmlContent(this.HtmlElement,sInnerHtml);var arrElements=this.HtmlElement.getElementsByTagName("img");if(arrElements.length==1)
this.m_oImageElem=arrElements[0];}}
function OwcICViewerHit_makeCurrent()
{if(this.m_sHitCss||this.m_sCurrentHitCss)
DHTML.replaceCssClassToElem(this.HtmlElement,this.m_sHitCss,this.m_sCurrentHitCss);if(this.m_sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.image)
{DHTML.removeCssClassFromElem(this.HtmlElement,"Hidden");if(this.m_oImageElem)
this.m_oImageElem.src=this.m_sCurrentHitSrc;}}
function OwcICViewerHit_makeNotCurrent()
{if(this.m_sHitCss||this.m_sCurrentHitCss)
DHTML.replaceCssClassToElem(this.HtmlElement,this.m_sCurrentHitCss,this.m_sHitCss);if(this.m_sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.image)
{DHTML.removeCssClassFromElem(this.HtmlElement,"Hidden");if(this.m_oImageElem)
this.m_oImageElem.src=this.m_sHitSrc;}}
function OwcICViewerHit_updateState(bOn)
{if(this.m_sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.image)
{if(bOn)
DHTML.removeCssClassFromElem(this.HtmlElement,"Hidden");else
DHTML.addCssClassToElem(this.HtmlElement,"Hidden");}
else if(this.m_sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.text)
{if(bOn)
{if(this.m_sHitCss)
DHTML.addCssClassToElem(this.HtmlElement,this.m_sHitCss);}
else
{if(this.m_sHitCss)
DHTML.removeCssClassFromElem(this.HtmlElement,this.m_sHitCss);if(this.m_sCurrentHitCss)
DHTML.removeCssClassFromElem(this.HtmlElement,this.m_sCurrentHitCss);}}}
JScript.Type.RegisterClass("Olive.Controls.ICViewerHit",Olive.Controls.ICViewerHit,Olive.Controls.Control);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.ICViewerHit,Olive.Controls.ICViewerHit);}
if(!Olive.Controls.ICViewerLink)
{Olive.Controls.ICViewerLink=function OwcICViewerLink()
{};Olive.Controls.ICViewerLink.DeclareType=function OwcICViewerLink_DeclareType()
{this.DeclareField("m_sViewMode",null);this.DeclareField("m_sLinkCss",Olive.Controls.InformationComponentViewer.cssClass.Link);this.DeclareField("m_sTickerCss",Olive.Controls.InformationComponentViewer.cssClass.Ticker);this.DeclareField("m_bDisableContentAutoLoad",true);this.OverrideMethod("constructControl",OwcICViewerLink_constructControl);this.OverrideMethod("parseControlHtmlAttr",OwcICViewerLink_parseControlHtmlAttr);this.OverrideMethod("initControl",OwcICViewerLink_initControl);this.ReplaceMethod("updateState",OwcICViewerLink_updateState);};Olive.Controls.ICViewerLink.ApplyPrototype=function OwcICViewerLink_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("linkControlClicked","_onLinkControlClicked",true);rObject.registerOwcEventsClass2("tickerLinkMouseOver","onTickerLinkMouseOver",true);rObject.registerOwcEventsClass2("tickerLinkMouseOut","onTickerLinkMouseOut",true);};function OwcICViewerLink_constructControl(oWebPage,oHtmlElement,oControlParent)
{this.m_sViewMode=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.InformationComponentViewMode,"").toLowerCase();if(this.m_sViewMode&&this.m_sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.image)
{var bIsImg=DHTML.isImageElem(oHtmlElement);var sSrc=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.src);if(bIsImg||sSrc)
Olive.Controls.IImageViewer.Implement(this,true);else
Olive.Controls.IZoomable.Implement(this,true);}
else
this.m_sViewMode=Olive.Data.InformationComponentViewerState.ViewMode.text;if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcICViewerLink_parseControlHtmlAttr()
{var sLinkCss=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.InformationComponentLinkCss,this.m_sLinkCss);if(sLinkCss)
this.m_sLinkCss=sLinkCss;var sTickerCss=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.InformationComponentTickerCss,this.m_sTickerCss);if(sTickerCss)
this.m_sTickerCss=sTickerCss;}
function OwcICViewerLink_initControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.image)
{DHTML.attachEvent(this.HtmlElement,"click",OwcICViewerLink_DHTML_onClick);DHTML.addCssClassToElem(this.HtmlElement,this.m_sLinkCss);}
else
DHTML.removeCssClassFromElem(this.HtmlElement,this.m_sLinkCss);var oContentItem=this.getContentItem();if(oContentItem&&oContentItem.m_sLinkType=="TCKR")
{DHTML.addCssClassToElem(this.HtmlElement,this.m_sTickerCss);DHTML.attachEvent(this.HtmlElement,"mouseover",OwcICViewerTickerLink_DHTML_onMouseOver);DHTML.attachEvent(this.HtmlElement,"mouseout",OwcICViewerTickerLink_DHTML_onMouseOut);}}
function OwcICViewerLink_updateState(bOn)
{if(this.m_sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.image)
{if(bOn)
DHTML.removeCssClassFromElem(this.HtmlElement,"Hidden");else
DHTML.addCssClassToElem(this.HtmlElement,"Hidden");}
else if(this.m_sViewMode==Olive.Data.InformationComponentViewerState.ViewMode.text)
{if(bOn&&!DHTML.isCssClassAppears(this.HtmlElement,this.m_sLinkCss))
{DHTML.addCssClassToElem(this.HtmlElement,this.m_sLinkCss);DHTML.attachEvent(this.HtmlElement,"click",OwcICViewerLink_DHTML_onClick);}
else if(!bOn&&DHTML.isCssClassAppears(this.HtmlElement,this.m_sLinkCss))
{DHTML.removeCssClassFromElem(this.HtmlElement,this.m_sLinkCss);DHTML.detachEvent(this.HtmlElement,"click",OwcICViewerLink_DHTML_onClick);}}}
function OwcICViewerLink_DHTML_onClick(oHtmlEvent)
{var oControl=OwcGetControlFromHtmlElem(this);if(!oControl)
return;var oEvent=oControl.createOwcEventObject("linkControlClicked");var oContentItem=oControl.getContentItem();oEvent.OwcContentItem=oContentItem;oControl.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcICViewerTickerLink_DHTML_onMouseOver(oHtmlEvent)
{var oControl=OwcGetControlFromHtmlElem(this);if(!oControl)
return;var oEvent=oControl.createOwcEventObject("tickerLinkMouseOver");var oContentItem=oControl.getContentItem();oEvent.OwcContentItem=oContentItem;oControl.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcICViewerTickerLink_DHTML_onMouseOut(oHtmlEvent)
{var oControl=OwcGetControlFromHtmlElem(this);if(!oControl)
return;var oEvent=oControl.createOwcEventObject("tickerLinkMouseOut");var oContentItem=oControl.getContentItem();oEvent.OwcContentItem=oContentItem;oControl.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
JScript.Type.RegisterClass("Olive.Controls.ICViewerLink",Olive.Controls.ICViewerLink,Olive.Controls.Control,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.ICViewerLink,Olive.Controls.ICViewerLink);}
if(!Olive.Controls.SeeAlsoList)
{Olive.Controls.SeeAlsoList=function OwcSeeAlsoList(){}
Olive.Controls.SeeAlsoList.DeclareType=function OwcSeeAlsoList_DeclareType(){}
JScript.Type.RegisterClass("Olive.Controls.SeeAlsoList",Olive.Controls.SeeAlsoList,Olive.Controls.Control,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.SeeAlsoList,Olive.Controls.SeeAlsoList);}