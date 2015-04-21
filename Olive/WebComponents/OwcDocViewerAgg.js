
Olive.Controls.controlTypeNames.DocViewerAgg="doc-viewer-agg";if(!Olive.Controls.DocViewerAgg)
{Olive.Controls.DocViewerAgg=function OwcDocViewerAgg()
{};Olive.Controls.DocViewerAgg.panes={TocPane:"TOC",SearchPane:"Search",ThumbnailsPane:"Thumbnails",FeaturedPagesPane:"FeaturedPages"};Olive.Controls.DocViewerAgg.UIElements={UIViewerRootPanel:"ViewerRootPanel",UIViewerNavigationPanel:"ViewerNavigationPanel",UIViewerSplitter:"ViewerSplitter",UIViewerContentPanel:"ViewerContentPanel",UIViewerBar:"ViewerBar",UINavigationTabStrip:"NavigationTabs",UINavigationPages:"NavigationPages"};Olive.Controls.DocViewerAgg.Commands={ViewPane:"ViewPane"};Olive.Controls.DocViewerAgg.NavigationCodes={PreviousPage:-100,NextPage:-101};Olive.Controls.DocViewerAgg.attributes={BindPageThumbnails:Olive.Controls.prefix+":"+"bind-page-thumbnails",BindFeaturedPages:Olive.Controls.prefix+":"+"bind-featured-pages",DoubleModeOnGotopage:Olive.Controls.prefix+":"+"double-mode-on-gotopage",DoubleModeOnFlipping:Olive.Controls.prefix+":"+"double-mode-on-flipping"};Olive.Controls.DocViewerAgg.DeclareType=function OwcDocViewerAgg_DeclareType()
{this.DeclareField("m_arrPanes",null);this.DeclareField("m_oNavigationPane",null);this.DeclareField("m_oRootPaneSplitter",null);this.DeclareField("m_oViewerPane",null);this.DeclareField("m_oNavPageSwitcher",null);this.DeclareField("m_oNavTabStrip",null);this.DeclareField("m_oViewerCtrl",null);this.DeclareField("m_oTOCCtrl",null);this.DeclareField("m_oSearchResCtrl",null);this.DeclareField("m_oPageThumbnailsCtrl",null);this.DeclareField("m_oFeaturedPagesCtrl",null);this.DeclareField("m_bBindPageThumbnails",true);this.DeclareField("m_bBindFeaturedPages",true);this.DeclareField("m_bDoubleModeOnGotopage",false);this.DeclareField("m_bDoubleModeOnFlipping",false);this.DeclareField("m_bGlobalDoublePageMode",true);this.DeclareField("m_oBindTocToDocViewer",null);this.DeclareField("m_oBindSearchResToDocViewer",null);this.DeclareField("m_bDoNotLoadDocViewer",false);this.DeclareMethod("get_BindPageThumbnails",OwcDocViewerAgg_get_BindPageThumbnails);this.DeclareMethod("set_BindPageThumbnails",OwcDocViewerAgg_set_BindPageThumbnails);this.DeclareMethod("get_BindFeaturedPages",OwcDocViewerAgg_get_BindFeaturedPages);this.DeclareMethod("set_BindFeaturedPages",OwcDocViewerAgg_set_BindFeaturedPages);this.DeclareMethod("get_DoubleModeOnGotopage",OwcDocViewerAgg_get_DoubleModeOnGotopage);this.DeclareMethod("set_DoubleModeOnGotopage",OwcDocViewerAgg_set_DoubleModeOnGotopage);this.DeclareMethod("get_DoubleModeOnFlipping",OwcDocViewerAgg_get_DoubleModeOnFlipping);this.DeclareMethod("set_DoubleModeOnFlipping",OwcDocViewerAgg_set_DoubleModeOnFlipping);this.DeclareMethod("get_GlobalDoublePageMode",OwcDocViewerAgg_get_GlobalDoublePageMode);this.DeclareMethod("set_GlobalDoublePageMode",OwcDocViewerAgg_set_GlobalDoublePageMode);this.DeclareMethod("get_TocControl",OwcDocViewerAgg_get_TocControl);this.DeclareMethod("set_TocControl",OwcDocViewerAgg_set_TocControl);this.DeclareMethod("get_SearchResControl",OwcDocViewerAgg_get_SearchResControl);this.DeclareMethod("set_SearchResControl",OwcDocViewerAgg_set_SearchResControl);this.DeclareMethod("get_PageThumbnailsControl",OwcDocViewerAgg_get_PageThumbnailsControl);this.DeclareMethod("set_PageThumbnailsControl",OwcDocViewerAgg_set_PageThumbnailsControl);this.DeclareMethod("get_FeaturedPagesControl",OwcDocViewerAgg_get_FeaturedPagesControl);this.DeclareMethod("set_FeaturedPagesControl",OwcDocViewerAgg_set_FeaturedPagesControl);this.DeclareMethod("PreparePrintData",OwcDocViewerAgg_PreparePrintData);this.DeclareMethod("CancelDoubleModeOnGotopage",OwcDocViewerAgg_CancelDoubleModeOnGotopage);this.DeclareMethod("ApplyDoubleModeOnGotopage",OwcDocViewerAgg_ApplyDoubleModeOnGotopage);this.DeclareMethod("navigateToBox",OwcDocViewerAgg_navigateToBox);this.DeclareMethod("navigateToHit",OwcDocViewerAgg_navigateToHit);this.DeclareMethod("navigateToPrimitive",OwcDocViewerAgg_navigateToPrimitive);this.OverrideMethod("initControl",OwcDocViewerAgg_initControl);this.OverrideMethod("contentLoad",OwcDocViewerAgg_contentLoad);this.OverrideMethod("parseControlHtmlAttr",OwcDocViewerAgg_parseControlHtmlAttr);this.DeclareMethod("_onTabActivating",OwcDocViewerAgg_onTabActivating);this.DeclareMethod("_onNavigationPageStateChanged",OwcDocViewerAgg_onNavigationPageStateChanged);this.DeclareMethod("_onFlashGotoPage",OwcDocViewerAgg_onFlashGotoPage);this.DeclareMethod("_onFlipAreaOrPageButtonClicked",OwcDocViewerAgg_onFlipAreaOrPageButtonClicked);this.DeclareMethod("_onSearchRequest",OwcDocViewerAgg_onSearchRequest);this.DeclareMethod("_onPageThumbnailContentItemClicked",OwcDocViewerAgg_onPageThumbnailContentItemClicked);this.DeclareMethod("_onFeaturedPagesContentItemClicked",OwcDocViewerAgg_onFeaturedPagesContentItemClicked);this.DeclareMethod("_onErrorStatusReceived",OwcDocViewerAgg_onErrorStatusReceived);this.DeclareMethod("_onPagesModeChanged",OwcDocViewerAgg_onPagesModeChanged);this.DeclareMethod("_FindViewerParts",OwcDocViewerAgg_FindViewerParts);this.DeclareMethod("_getAbsolutePageNo",OwcDocViewerAgg_getAbsolutePageNo);this.DeclareMethod("_FindPanesByUIType",OwcDocViewerAgg_FindPanesByUIType);this.DeclareMethod("_FindNavigationPane",OwcDocViewerAgg_FindNavigationPane);this.DeclareMethod("_FindUiControl",OwcDocViewerAgg_FindUiControl);this.DeclareMethod("_ViewPane",OwcDocViewerAgg_ViewPane);this.DeclareMethod("_ViewPane_updateUiState",OwcDocViewerAgg_ViewPane_updateUiState);this.DeclareMethod("_HideNavigationPane",OwcDocViewerAgg_HideNavigationPane);this.DeclareMethod("_ShowNavigationPane",OwcDocViewerAgg_ShowNavigationPane);};Olive.Controls.DocViewerAgg.ApplyPrototype=function OwcDocViewerAgg_ApplyPrototype(rObject,bDynamic)
{Olive.CmdTarget.RegisterCommand(rObject,this.Commands.ViewPane,rObject._ViewPane,rObject._ViewPane_updateUiState);rObject.registerOwcEventsClass2("pageThumbnailClicked","onPageThumbnailClicked",true,OwcDocViewerAgg_onContentItemClickedDefault);rObject.registerOwcEventsClass2("featuredPageClicked","onFeaturedPageClicked",true,OwcDocViewerAgg_onContentItemClickedDefault);rObject.registerOwcEventsClass2("navigationPaneVisibilityChanged","onNavigationPaneVisibilityChanged",true);rObject.registerOwcEventsClass2("globalDoublePageModeChanged","onGlobalDoublePageModeChanged",true);};function OwcDocViewerAgg_get_BindPageThumbnails()
{return this.m_bBindPageThumbnails;}
function OwcDocViewerAgg_set_BindPageThumbnails(value)
{this.m_bBindPageThumbnails=value;}
function OwcDocViewerAgg_get_BindFeaturedPages()
{return this.m_bBindFeaturedPages;}
function OwcDocViewerAgg_set_BindFeaturedPages(value)
{this.m_bBindFeaturedPages=value;}
function OwcDocViewerAgg_get_DoubleModeOnGotopage()
{return this.m_bDoubleModeOnGotopage;}
function OwcDocViewerAgg_set_DoubleModeOnGotopage(value)
{this.m_bDoubleModeOnGotopage=value;}
function OwcDocViewerAgg_get_DoubleModeOnFlipping()
{return this.m_bDoubleModeOnFlipping;}
function OwcDocViewerAgg_set_DoubleModeOnFlipping(value)
{this.m_bDoubleModeOnFlipping=value;}
function OwcDocViewerAgg_get_GlobalDoublePageMode()
{return this.m_bGlobalDoublePageMode;}
function OwcDocViewerAgg_set_GlobalDoublePageMode(value)
{var bPrevValue=this.m_bGlobalDoublePageMode;if(bPrevValue!=value)
{this.m_bGlobalDoublePageMode=value;var oEvent=this.createOwcEventObject("globalDoublePageModeChanged");oEvent.bGlobalDoublePageMode=value;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}}
function OwcDocViewerAgg_PreparePrintData()
{if(!this.m_oViewerCtrl)
return null;var docContentItem=this.getContentItem();if(!docContentItem)
return null;var isTwoPageView=this.m_oViewerCtrl.getModeDoublePage();var docPagesCount=this.m_oViewerCtrl.getTotalPagesCount();var currentPageNo=this.m_oViewerCtrl.getPageNo();var currentPageLabel=this.m_oViewerCtrl.getPageLabelForPageNo(currentPageNo);var lastVisiblePageNo=this.m_oViewerCtrl.getLastVisiblePageNo();var lastVisiblePageLabel=this.m_oViewerCtrl.getPageLabelForPageNo(lastVisiblePageNo);if(docPagesCount<0||currentPageLabel===null||lastVisiblePageLabel===null)
return null;if(isTwoPageView==null||isTwoPageView==undefined)
isTwoPageView=false;var printData=new Olive.Data.PrintFormData();printData.setPrintItemType(OwcContentItem_Document);printData.setTotalPagesCount(String(docPagesCount));printData.setCurrentPage(String(currentPageLabel));printData.setDoubleMode(isTwoPageView);printData.setLastVisiblePage(String(lastVisiblePageLabel));return printData;}
function OwcDocViewerAgg_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.set_BindPageThumbnails(DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.DocViewerAgg.attributes.BindPageThumbnails,this.m_bBindPageThumbnails));this.set_BindFeaturedPages(DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.DocViewerAgg.attributes.BindFeaturedPages,this.m_bBindFeaturedPages));this.set_DoubleModeOnGotopage(DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.DocViewerAgg.attributes.DoubleModeOnGotopage,this.m_bDoubleModeOnGotopage));this.set_DoubleModeOnFlipping(DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.DocViewerAgg.attributes.DoubleModeOnFlipping,this.m_bDoubleModeOnFlipping));}
function OwcDocViewerAgg_initControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this._FindViewerParts();if(this.m_oNavigationPane)
this.m_oNavigationPane.attachOwcEventHandler("stateChanged",this._onNavigationPageStateChanged,this);if(this.m_oNavTabStrip&&this.m_oNavPageSwitcher)
{this.m_oNavTabStrip.attachOwcEventHandler("itemActivating",this._onTabActivating,this);Olive.Binding.SyncActiveItems.BindControls(this.m_oNavTabStrip,this.m_oNavPageSwitcher);}
if(this.m_oViewerCtrl)
{var searchFormControls=this.findControlsByType(Olive.Controls.controlTypeNames.SearchForm);if(searchFormControls)
{for(var i=0;i<searchFormControls.length;i++)
searchFormControls[i].attachOwcEventHandler("searchRequest",this._onSearchRequest,this);}
var viewerCommandBar=this._FindUiControl(Olive.Controls.DocViewerAgg.UIElements.UIViewerBar,Olive.Controls.controlTypeNames.Menu);if(viewerCommandBar)
viewerCommandBar.setCmdTarget(this.m_oViewerCtrl);if(this.m_oViewerPane)
Olive.ICmdSource.BindCommandBars(this.m_oViewerPane,this.m_oViewerCtrl);if(this.get_DoubleModeOnGotopage())
{this.ApplyDoubleModeOnGotopage();}
if(this.get_DoubleModeOnGotopage()&&!this.get_DoubleModeOnFlipping())
this.m_oViewerCtrl.attachOwcEventHandler("flipAreaOrPageButtonClicked",this._onFlipAreaOrPageButtonClicked,this);this.m_oViewerCtrl.attachOwcEventHandler("errorStatusReceived",this._onErrorStatusReceived,this);}
Olive.ICmdSource.UpdateAll(this);}
function OwcDocViewerAgg_CancelDoubleModeOnGotopage()
{this.m_oViewerCtrl.detachOwcEventHandler("flashGotoPage",this._onFlashGotoPage,this);}
function OwcDocViewerAgg_ApplyDoubleModeOnGotopage()
{this.m_oViewerCtrl.attachOwcEventHandler("flashGotoPage",this._onFlashGotoPage,this);}
function OwcDocViewerAgg_navigateToHit(sDocHRef,sEntityId,nEntityPageNo,nFirstHitPageNo,sHitBoxCenter,bHighlightEntityCaption,sZoom)
{if(this.m_oViewerCtrl)
{if(sDocHRef!=this.m_oViewerCtrl.getCurrentDocHRef())
{var oContentItem=Olive.ContentItem.CreateByType(OwcContentItem_Document);oContentItem.m_sDocHRef=sDocHRef;oContentItem.m_nPageNo=nFirstHitPageNo>0?nFirstHitPageNo:nEntityPageNo;this.m_bDoNotLoadDocViewer=true;this.contentLoadItem(oContentItem);}
this.m_oViewerCtrl.navigateToHit(sDocHRef,sEntityId,nEntityPageNo,nFirstHitPageNo,sHitBoxCenter,bHighlightEntityCaption,sZoom,true)}}
function OwcDocViewerAgg_navigateToBox(sDocHRef,nPageNo,sBox,sZoom,sAlign,nBoxResolution)
{if(this.m_oViewerCtrl)
{if(sDocHRef!=this.m_oViewerCtrl.getCurrentDocHRef())
{var oContentItem=Olive.ContentItem.CreateByType(OwcContentItem_Document);oContentItem.m_sDocHRef=sDocHRef;oContentItem.m_nPageNo=nPageNo;this.m_bDoNotLoadDocViewer=true;this.contentLoadItem(oContentItem);}
this.m_oViewerCtrl.navigateToBox(sDocHRef,nPageNo,sBox,sZoom,sAlign,nBoxResolution,true);}}
function OwcDocViewerAgg_navigateToPrimitive(sDocHRef,nPageNo,sEntityId,sPrimitiveId,bHighlightPrimitive,sZoom)
{if(this.m_oViewerCtrl)
{if(sDocHRef!=this.m_oViewerCtrl.getCurrentDocHRef())
{var oContentItem=Olive.ContentItem.CreateByType(OwcContentItem_Document);oContentItem.m_sDocHRef=sDocHRef;oContentItem.m_nPageNo=nPageNo;oContentItem.m_sEntityId=sEntityId;oContentItem.m_sPrimId=sPrimitiveId;this.m_bDoNotLoadDocViewer=true;this.contentLoadItem(oContentItem);}
this.m_oViewerCtrl.navigateToPrimitive(sDocHRef,nPageNo,sEntityId,sPrimitiveId,bHighlightPrimitive,sZoom,true)}}
function OwcDocViewerAgg_contentLoad()
{function callback_loadData(ctxScanner,oDataBoundControl)
{oDataBoundControl.m_oContentItem=null;oDataBoundControl.contentLoad();}
function callback_filterDataBoundControl(ctxScanner,oControl)
{if(Olive.Controls.IDataBound.IsImplementedBy(oControl))
{if(oControl.controlType==Olive.Controls.controlTypeNames.ThumbList||oControl.controlType==Olive.Controls.controlTypeNames.TOC)
return Olive.Controls.Scanner.FilterMode.Process;return Olive.Controls.Scanner.FilterMode.Skip;}
return(Olive.Controls.Scanner.FilterMode.Reject+Olive.Controls.Scanner.FilterMode.StopFilter);}
var oScanner=new Olive.Controls.Scanner();oScanner.setProcessControlCallback(callback_loadData);oScanner.addFilter(callback_filterDataBoundControl);oScanner.scan(this);if(this.m_oViewerCtrl&&!this.m_bDoNotLoadDocViewer)
{this.m_oViewerCtrl.m_oContentItem=null;this.m_oViewerCtrl.displayDocument(true);}
this.m_bDoNotLoadDocViewer=false;}
function OwcDocViewerAgg_ViewPane(sPaneName)
{if(!this.m_arrPanes||!sPaneName||!(sPaneName in this.m_arrPanes))
return;var nPanePageIndex=this.m_arrPanes[sPaneName];this.m_oNavPageSwitcher.setActiveItem(nPanePageIndex);if(this.m_oNavigationPane&&!this.m_oNavigationPane.isVisible())
this.m_oNavigationPane.show();}
function OwcDocViewerAgg_ViewPane_updateUiState(oCmdUiState)
{var nPanePageIndex=-1;if(this.m_arrPanes&&oCmdUiState.commandParams&&(oCmdUiState.commandParams in this.m_arrPanes))
nPanePageIndex=this.m_arrPanes[oCmdUiState.commandParams];if(nPanePageIndex>=0)
{oCmdUiState.enableCommand(true);oCmdUiState.checkCommand(this.m_oNavPageSwitcher.getActiveItemIndex()==nPanePageIndex);}
else
{oCmdUiState.enableCommand(false);oCmdUiState.checkCommand(false);}}
function OwcDocViewerAgg_ShowNavigationPane(bDoNotNotify)
{if(!bDoNotNotify&&!this.m_oNavigationPane.isVisible())
{var oEvent=this.createOwcEventObject("navigationPaneVisibilityChanged");oEvent.bPaneVisible=true;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
if(this.m_oNavigationPane&&!this.m_oNavigationPane.isVisible())
this.m_oNavigationPane.show();if(this.m_oRootPaneSplitter&&!this.m_oRootPaneSplitter.isVisible())
this.m_oRootPaneSplitter.show();}
function OwcDocViewerAgg_HideNavigationPane(bDoNotNotify)
{if(!bDoNotNotify&&this.m_oNavigationPane.isVisible())
{var oEvent=this.createOwcEventObject("navigationPaneVisibilityChanged");oEvent.bPaneVisible=false;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
if(this.m_oRootPaneSplitter&&this.m_oRootPaneSplitter.isVisible())
this.m_oRootPaneSplitter.hide();if(this.m_oNavigationPane&&this.m_oNavigationPane.isVisible())
this.m_oNavigationPane.hide();}
function OwcDocViewerAgg_onTabActivating(eventData)
{if(eventData.activeItem)
this._ShowNavigationPane(false);}
function OwcDocViewerAgg_onNavigationPageStateChanged(eventData)
{if(eventData.srcObject!=this.m_oNavigationPane)
return;var stateChanged=eventData.prevState^eventData.newState;if((stateChanged&Olive.IState.State.VisibleMask)!=0)
{var paneVisible=((eventData.newState&Olive.IState.State.VisibleMask)==Olive.IState.State.Visible);if(this.m_oViewerCtrl)
{var bDoubleMode=this.m_oViewerCtrl.getModeDoublePage();var bGlobalDoublePageMode=this.get_GlobalDoublePageMode();if(bDoubleMode==paneVisible&&(bGlobalDoublePageMode||(!bGlobalDoublePageMode&&bDoubleMode)))
{this.m_oViewerCtrl.cmdChangeModeDoublePage(!paneVisible);}}}}
function OwcDocViewerAgg_onFlipAreaOrPageButtonClicked(eventData)
{if(!eventData)
return;eventData.cancelDefaultAction=true;var oNavigation=this.m_oViewerCtrl.calculateDestinationPage(eventData.sDirection,eventData.nDestinationPage);this.m_oViewerCtrl.gotoPageWithHighlighting(oNavigation.nPageNo,null,null,oNavigation.bRelativeNavigation,eventData.nContinuousScroll,eventData.bOpenGatefold);}
function OwcDocViewerAgg_onSearchRequest(eventData)
{if(this.m_oSearchResCtrl)
{eventData.cancelBubbling=true;var contentItem=this.getContentItem();if(!contentItem)
return;eventData.SearchParams.addSearchInDocument(contentItem);this.m_oSearchResCtrl.loadSearchResults(eventData.SearchParams);}}
function OwcDocViewerAgg_onPageThumbnailContentItemClicked(eventData)
{var oEvent=this.createOwcEventObject("pageThumbnailClicked");oEvent.OlvContentItem=eventData.OlvContentItem;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcDocViewerAgg_onFeaturedPagesContentItemClicked(eventData)
{var oEvent=this.createOwcEventObject("featuredPageClicked");oEvent.OlvContentItem=eventData.OlvContentItem;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcDocViewerAgg_onContentItemClickedDefault(eventData)
{if(!eventData)
return;eventData.cancelBubbling=true;if(!this.m_oViewerCtrl)
return;var oContentItem=eventData.OlvContentItem;var sDataType=oContentItem.getDataType();if(sDataType==OwcContentItem_Page)
{var nPageNo=oContentItem.m_nPageNo;var sPrimitiveId=oContentItem.m_sPrimId;this.m_oViewerCtrl.gotoPageWithHighlighting(nPageNo,sPrimitiveId,null,null,null,true);}}
function OwcDocViewerAgg_onFlashGotoPage(eventData)
{if(!this.m_oViewerCtrl||!this.m_oNavigationPane||!eventData)
return;var bOnePageMode=!this.m_oViewerCtrl.getModeDoublePage();var nCurrentPage=this.m_oViewerCtrl.getPageNo();var nDestinationPage=eventData.nPageNo;var nFirstPage=1;if(this.get_GlobalDoublePageMode())
{if(bOnePageMode)
{var bNext=((nDestinationPage-nCurrentPage)==1)?true:false;var bPrevious=((nDestinationPage-nCurrentPage)==-1)?true:false;var bCurrentPageIsEven=((nCurrentPage%2)==0)?true:false;if((bCurrentPageIsEven&&bNext)||(!bCurrentPageIsEven&&bPrevious&&nDestinationPage!=nFirstPage))
{eventData.cancelDefaultAction=true;this.m_oViewerCtrl.attachOwcEventHandler("pageModeChanged",this._onPagesModeChanged,this);this.m_oViewerCtrl.cmdChangeModeDoublePage(true,nDestinationPage);}
else if(nDestinationPage!=nFirstPage)
{this.m_oViewerCtrl.attachOwcEventHandler("pageModeChanged",this._onPagesModeChanged,this);eventData.addCommand={commandName:"cmdChangeModeDoublePage",params:{'newState':true}};}}
else
{if(nDestinationPage==nFirstPage)
{this.m_oViewerCtrl.attachOwcEventHandler("pageModeChanged",this._onPagesModeChanged,this);eventData.addCommand={commandName:"cmdChangeModeDoublePage",params:{'newState':false}};}}}}
function OwcDocViewerAgg_onPagesModeChanged(oEvent)
{if(!oEvent)
return;this.m_oViewerCtrl.detachOwcEventHandler("pageModeChanged",this._onPagesModeChanged,this);var bIsNavPaneVisible=this.m_oNavigationPane.isVisible();if(oEvent.bDoublePageMode==bIsNavPaneVisible)
{if(bIsNavPaneVisible)
this._HideNavigationPane(false);else
this._ShowNavigationPane(false);}}
function OwcDocViewerAgg_getAbsolutePageNo(nRelativePageNo,nAbsolutePageNo)
{var nRetValue=null;if("number"==typeof nRelativePageNo)
{if(nRelativePageNo==Olive.Controls.DocViewerAgg.NavigationCodes.PreviousPage)
{nRetValue=nAbsolutePageNo-1;}
else if(nRelativePageNo==Olive.Controls.DocViewerAgg.NavigationCodes.NextPage)
{nRetValue=nAbsolutePageNo+1;}
else
{nRetValue=nRelativePageNo;}}
else
nRetValue=nAbsolutePageNo;return nRetValue;}
function OwcDocViewerAgg_FindViewerParts()
{var arrControls=this.findControlsImplementing(Olive.Controls.IDocViewer);if(arrControls&&(arrControls.length>0))
this.m_oViewerCtrl=arrControls[0];var oRootPane=this._FindUiControl(Olive.Controls.DocViewerAgg.UIElements.UIViewerRootPanel,Olive.Controls.controlTypeNames.PaneList);this._FindPanesByUIType(oRootPane);if(oRootPane)
{if(!this.m_oNavigationPane)
this.m_oNavigationPane=oRootPane.get_PaneItem(0);if(!this.m_oRootPaneSplitter)
this.m_oRootPaneSplitter=oRootPane.get_PaneItem(1);if(!this.m_oViewerPane)
this.m_oViewerPane=oRootPane.get_PaneItem(2);}
this.m_oNavPageSwitcher=this._FindUiControl(Olive.Controls.DocViewerAgg.UIElements.UINavigationPages,Olive.Controls.controlTypeNames.PageSwitcher);this.m_oNavTabStrip=this._FindUiControl(Olive.Controls.DocViewerAgg.UIElements.UINavigationPages,Olive.Controls.controlTypeNames.TabStrip);if(this.m_oNavigationPane)
{this.set_TocControl(this.m_oNavigationPane.findControlByType(Olive.Controls.controlTypeNames.TOC));this.set_SearchResControl(this.m_oNavigationPane.findControlByType(Olive.Controls.controlTypeNames.SearchRes));var arrThumblistControls=this.m_oNavigationPane.findControlsByType(Olive.Controls.controlTypeNames.ThumbList);if(arrThumblistControls)
{for(var i=0;i<arrThumblistControls.length;i++)
{var oThumblistControl=arrThumblistControls[i];var sEventKind="";var sKind=oThumblistControl.m_sKind.toLowerCase();switch(sKind)
{case Olive.Controls.ThumbList.ThumbListKind.DocPages:this.set_PageThumbnailsControl(oThumblistControl);break;case Olive.Controls.ThumbList.ThumbListKind.QuickNavigation:this.set_FeaturedPagesControl(oThumblistControl);break;}}}}
if(this.m_oNavPageSwitcher)
{this.m_arrPanes=new Array();this._FindNavigationPane(Olive.Controls.DocViewerAgg.panes.TocPane,"ctrlPaneToc");this._FindNavigationPane(Olive.Controls.DocViewerAgg.panes.SearchPane,"ctrlPaneSearch");this._FindNavigationPane(Olive.Controls.DocViewerAgg.panes.ThumbnailsPane,"ctrlPaneThumbnails");this._FindNavigationPane(Olive.Controls.DocViewerAgg.panes.FeaturedPagesPane,"ctrlPaneFeaturedPages");}}
function OwcDocViewerAgg_FindPanesByUIType(oRootPane)
{var controlList=oRootPane.findControlsImplementing(Olive.Controls.IPaneListItem);if(!controlList||controlList.length<1)
return null;for(var i=0;i<controlList.length;++i)
{var control=controlList[i];var controlHtmlElement=control.get_HtmlElement();var uiElement=DHTML.getAttr(controlHtmlElement,Olive.Controls.attributes.Ui,"").toLowerCase();switch(uiElement)
{case Olive.Controls.DocViewerAgg.UIElements.UIViewerNavigationPanel.toLowerCase():this.m_oNavigationPane=control;break;case Olive.Controls.DocViewerAgg.UIElements.UIViewerSplitter.toLowerCase():this.m_oRootPaneSplitter=control;break;case Olive.Controls.DocViewerAgg.UIElements.UIViewerContentPanel.toLowerCase():this.m_oViewerPane=control;break;}}}
function OwcDocViewerAgg_FindNavigationPane(sPaneName,sPaneId)
{var oPanePage=OwcGetControl(sPaneId);this.m_arrPanes[sPaneName]=(oPanePage?this.m_oNavPageSwitcher.indexOfItem(oPanePage):-1);}
function OwcDocViewerAgg_FindUiControl(uiElementType,controlType,parent)
{var uiHtmlElement=this.getUiElement(uiElementType);if(uiHtmlElement)
return OwcGetControlFromHtmlElem(uiHtmlElement,true);if(!controlType)
return null;if(!parent)
parent=this;var controlList=parent.findControlsByType(controlType);if(!controlList||controlList.length<1)
return null;for(var i=0;i<controlList.length;++i)
{var control=controlList[i];var controlHtmlElement=control.get_HtmlElement();var uiElement=DHTML.getAttr(controlHtmlElement,Olive.Controls.attributes.Ui,"").toLowerCase();if(uiElement==uiElementType.toLowerCase())
return control;}
return controlList[0];}
function OwcDocViewerAgg_get_TocControl()
{return this.m_oTOCCtrl;}
function OwcDocViewerAgg_set_TocControl(control)
{if(this.m_oTOCCtrl==control)
return;this.m_oTOCCtrl=control;if(control&&this.m_oViewerCtrl)
this.m_oBindTocToDocViewer=Olive.Binding.BindToDocNavigation.BindControls(this.m_oTOCCtrl,this.m_oViewerCtrl);}
function OwcDocViewerAgg_get_SearchResControl()
{return this.m_oSearchResCtrl;}
function OwcDocViewerAgg_set_SearchResControl(control)
{if(this.m_oSearchResCtrl==control)
return;this.m_oSearchResCtrl=control;if(control&&this.m_oViewerCtrl)
this.m_oBindSearchResToDocViewer=Olive.Binding.BindSearchResultsToDocViewer.BindControls(this.m_oSearchResCtrl,this.m_oViewerCtrl);}
function OwcDocViewerAgg_get_PageThumbnailsControl()
{return this.m_oPageThumbnailsCtrl;}
function OwcDocViewerAgg_set_PageThumbnailsControl(control)
{if(this.m_oPageThumbnailsCtrl==control)
return;this.m_oPageThumbnailsCtrl=control;if(control&&this.m_oViewerCtrl)
{if(this.get_BindPageThumbnails())
Olive.Binding.BindToDocNavigation.BindControls(this.m_oPageThumbnailsCtrl,this.m_oViewerCtrl);else
this.m_oPageThumbnailsCtrl.attachOwcEventHandler("contentItemClicked",this._onPageThumbnailContentItemClicked,this);}}
function OwcDocViewerAgg_get_FeaturedPagesControl()
{return this.m_oFeaturedPagesCtrl;}
function OwcDocViewerAgg_set_FeaturedPagesControl(control)
{if(this.m_oFeaturedPagesCtrl==control)
return;this.m_oFeaturedPagesCtrl=control;if(control&&this.m_oViewerCtrl)
{if(this.get_BindFeaturedPages())
Olive.Binding.BindToDocNavigation.BindControls(this.m_oFeaturedPagesCtrl,this.m_oViewerCtrl);else
this.m_oFeaturedPagesCtrl.attachOwcEventHandler("contentItemClicked",this._onFeaturedPagesContentItemClicked,this);}}
function OwcDocViewerAgg_onErrorStatusReceived(eventData)
{this.m_oTOCCtrl.clearContent("<b style='color:red'>"+eventData.sErrorMessage+"</b>");var descStart="<description>";var descEnd="</description>";var nStart=eventData.sErrorMessage.indexOf(descStart)+descStart.length;var nEnd=eventData.sErrorMessage.indexOf(descEnd,nStart);var sDesc=eventData.sErrorMessage.substr(nStart,nEnd-nStart);this.displayMessage(sDesc);}
JScript.Type.RegisterClass("Olive.Controls.DocViewerAgg",Olive.Controls.DocViewerAgg,Olive.Controls.Control,[Olive.Controls.IDataBound,Olive.IUiElements]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.DocViewerAgg,Olive.Controls.DocViewerAgg);}