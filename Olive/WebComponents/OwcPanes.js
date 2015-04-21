
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.PaneList="pane-list";Olive.Controls.controlTypeNames.Pane="pane";Olive.Controls.controlTypeNames.PaneSplitter="pane-splitter";Olive.Controls.attributes.PaneSize=Olive.Controls.xmlns+"pane-size";Olive.Controls.attributes.MinPaneSize=Olive.Controls.xmlns+"min-pane-size";if(!Olive.Controls.IPaneListItem)
{Olive.Controls.IPaneListItem=new Interface("Olive.Controls.IPaneListItem");Olive.Controls.IPaneListItem.Implement=function OwcIPaneListItem_Implement(rObject,bDynamic)
{if(!this.Register(rObject,bDynamic))
return;Olive.IUiElements.ImplementInterface(rObject,bDynamic);JScript.Type.DeclareField(rObject,"m_nPaneItemMinSize",-1);JScript.Type.DeclareField(rObject,"m_nPaneItemMinFactor",-1);JScript.Type.DeclareField(rObject,"m_isSizsInPixels",false);JScript.Type.DeclareField(rObject,"m_nPaneItemSize",-1);JScript.Type.DeclareField(rObject,"m_nPaneItemWidth",-1);JScript.Type.DeclareField(rObject,"m_nPaneItemHeight",-1);JScript.Type.DeclareField(rObject,"m_sPaneMaximizeToolTip",null);JScript.Type.DeclareField(rObject,"m_sPaneMinimizeToolTip",null);JScript.Type.DeclareField(rObject,"m_isPaneBeforeSplitter",false);JScript.Type.DeclareField(rObject,"m_isPaneAfterSplitter",false);JScript.Type.DeclareField(rObject,"paneContainer",null);JScript.Type.DeclareField(rObject,"resizablePane",true);JScript.Type.DeclareMethod(rObject,"isVisible",OwcIPaneListItem_isVisible);JScript.Type.DeclareMethod(rObject,"show",OwcIPaneListItem_show);JScript.Type.DeclareMethod(rObject,"hide",OwcIPaneListItem_hide);JScript.Type.DeclareMethod(rObject,"isMinimized",OwcIPaneListItem_isMinimized);JScript.Type.DeclareMethod(rObject,"minimize",OwcIPaneListItem_minimize);JScript.Type.DeclareMethod(rObject,"restore",OwcIPaneListItem_restore);JScript.Type.DeclareMethod(rObject,"toggle",OwcIPaneListItem_toggle);JScript.Type.DeclareMethod(rObject,"toggleVisible",OwcIPaneListItem_toggleVisible);JScript.Type.DeclareMethod(rObject,"isColumnItem",OwcIPaneListItem_isColumnItem);JScript.Type.DeclareMethod(rObject,"getPaneItemSizeFactor",OwcIPaneListItem_getPaneItemSizeFactor);JScript.Type.DeclareMethod(rObject,"getPaneSize",OwcIPaneListItem_getPaneSize);JScript.Type.DeclareMethod(rObject,"getPixelLimit",OwcIPaneListItem_getPixelLimit);JScript.Type.DeclareMethod(rObject,"getPaneItemMinLimit",OwcIPaneListItem_getPaneItemMinLimit);JScript.Type.OverrideMethod(rObject,"bindHtmlElement",OwcIPaneListItem_bindHtmlElement);JScript.Type.OverrideMethod(rObject,"parseControlHtmlAttr",OwcIPaneListItem_parseControlHtmlAttr);}
function OwcIPaneListItem_isVisible()
{return this.isStateSet(Olive.IState.State.Visible,Olive.IState.State.VisibleMask);}
function OwcIPaneListItem_show()
{this.changeState(true,Olive.IState.State.Visible,Olive.IState.State.VisibleMask);if(this.paneContainer)
this.paneContainer.recalcLayout();}
function OwcIPaneListItem_hide()
{this.changeState(false,Olive.IState.State.Visible,Olive.IState.State.VisibleMask);if(this.paneContainer)
this.paneContainer.recalcLayout();}
function OwcIPaneListItem_toggleVisible()
{this.toggleState(Olive.IState.State.VisibleMask);if(this.paneContainer)
this.paneContainer.recalcLayout();}
function OwcIPaneListItem_isMinimized()
{return this.isStateSet(Olive.IState.State.Minimized);}
function OwcIPaneListItem_minimize()
{this.changeState(true,Olive.IState.State.Minimized);if(this.paneContainer)
this.paneContainer.recalcLayout();}
function OwcIPaneListItem_toggle()
{this.toggleState(Olive.IState.State.Minimized);if(this.paneContainer)
this.paneContainer.recalcLayout();}
function OwcIPaneListItem_restore()
{this.changeState(false,Olive.IState.State.Minimized);if(this.paneContainer)
this.paneContainer.recalcLayout();}
function OwcIPaneListItem_isColumnItem()
{if(this.paneContainer)
return this.paneContainer.isHorizontal();return false;}
function OwcIPaneListItem_getPaneItemSizeFactor()
{if(this.m_nPaneItemSize>0)
return this.m_nPaneItemSize;return-1;}
function OwcIPaneListItem_getPaneSize(oContainerSize,factor)
{var nMinSize=this.getPixelLimit(oContainerSize);var factorInPixels=this.m_isSizsInPixels;if(factor>1)
{if(this.WebApplication.sSplitterPosition_Cookie&&this.WebApplication.sSplitterPosition_Cookie!="")
{var splitPos=parseFloat(DHTML.getCookie(this.WebApplication.sSplitterPosition_Cookie));if(!isNaN(splitPos))
factor=splitPos;}}
var defaultSize=((!factorInPixels||factor<1)?Math.round(oContainerSize*factor):factor);var nPaneSize=((nMinSize>1&&defaultSize<nMinSize)?nMinSize:defaultSize);return nPaneSize;}
function OwcIPaneListItem_getPixelLimit(oContainerSize)
{var nLimit=this.getPaneItemMinLimit();if(nLimit<0)
return-1;if(nLimit<1)
return Math.round(nLimit*oContainerSize);return nLimit;}
function OwcIPaneListItem_getPaneItemMinLimit()
{if(this.m_nPaneItemMinFactor>0)
return this.m_nPaneItemMinFactor;if(this.m_nPaneItemMinSize>0)
return this.m_nPaneItemMinSize;return-1;}
function OwcIPaneListItem_bindHtmlElement(oHtmlElement)
{this.paneContainer=Olive.Object.FindParentImplementing(Olive.Controls.IPaneList,this);if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcIPaneListItem_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var sPaneSize=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.PaneSize);var sMinSize=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.MinPaneSize);if(sMinSize&&sMinSize.match(/\d+(\.\d+)?\%/gi))
{sMinSize=sMinSize.replace(/\%/g,"");this.m_nPaneItemMinFactor=parseFloat(sMinSize)/100.0;}
else if(sMinSize&&sMinSize.match(/\d+(\.\d+)?\px/gi))
{sMinSize=sMinSize.replace(/\px/g,"");this.m_nPaneItemMinSize=parseInt(sMinSize);this.m_isSizsInPixels=true;}
if(sPaneSize&&sPaneSize.match(/\d+(\.\d+)?\%/gi))
{sPaneSize=sPaneSize.replace(/\%/g,"");this.m_nPaneItemSize=parseFloat(sPaneSize)/100.0;}
else if(sPaneSize&&sPaneSize.match(/\d+(\.\d+)?\px/gi))
{sPaneSize=sPaneSize.replace(/\px/g,"");this.m_nPaneItemSize=parseInt(sPaneSize);this.m_isSizsInPixels=true;}}}
if(!Olive.Controls.IPaneList)
{Olive.Controls.IPaneList=new Interface("Olive.Controls.IPaneList");Olive.Controls.IPaneList.attributes={Kind:Olive.Controls.prefix+":"+"kind",FitParent:Olive.Controls.prefix+":"+"fit-parent"}
Olive.Controls.IPaneList.kind={Rows:"rows",Columns:"columns",Full:"full"}
Olive.Controls.IPaneList.Implement=function OwcIPaneList_Implement(rObject,bDynamic)
{if(!Olive.Controls.IPaneList.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"m_arrPaneItems",null);JScript.Type.DeclareField(rObject,"m_bFitParent",true);JScript.Type.DeclareField(rObject,"m_recalcLayoutTimeoutID",null);JScript.Type.DeclareField(rObject,"m_nBeforeSplitterPaneProportion",-1);JScript.Type.DeclareField(rObject,"kind",Olive.Controls.IPaneList.kind.Rows);JScript.Type.DeclareMethod(rObject,"get_PaneItemsCount",OwcIPaneList_get_PaneItemsCount);JScript.Type.DeclareMethod(rObject,"get_PaneItem",OwcIPaneList_get_PaneItem);JScript.Type.DeclareMethod(rObject,"getSplitterPaneProportion",OwcIPaneList_getSplitterPaneProportion);JScript.Type.DeclareMethod(rObject,"setSplitterPaneProportion",OwcIPaneList_setSplitterPaneProportion);JScript.Type.DeclareMethod(rObject,"isHorizontal",OwcIPaneList_isHorizontal);JScript.Type.DeclareMethod(rObject,"isFull",OwcIPaneList_isFull);JScript.Type.DeclareMethod(rObject,"recalcLayoutByTimeout",OwcIPaneList_recalcLayoutByTimeout);JScript.Type.DeclareMethod(rObject,"recalcLayout",OwcIPaneList_recalcLayout);JScript.Type.DeclareMethod(rObject,"resizeWithSplitter",OwcIPaneList_resizeWithSplitter);JScript.Type.OverrideMethod(rObject,"constructControl",OwcIPaneList_constructControl);JScript.Type.OverrideMethod(rObject,"parseControlHtmlAttr",OwcIPaneList_parseControlHtmlAttr);JScript.Type.OverrideMethod(rObject,"initControl",OwcIPaneList_initControl);JScript.Type.OverrideMethod(rObject,"termControl",OwcIPaneList_termControl);JScript.Type.DeclareMethod(rObject,"collectPaneItems",OwcIPaneList_collectPaneItems);JScript.Type.DeclareMethod(rObject,"filterPaneItems",OwcIPaneList_filterPaneItems);JScript.Type.DeclareMethod(rObject,"appendPaneItem",OwcIPaneList_appendPaneItem);JScript.Type.DeclareMethod(rObject,"_firePanesResized",OwcIPaneList_firePanesResized);rObject.registerOwcEventsClass2("panesResized","onPanesResized",true);}
function OwcIPaneList_get_PaneItemsCount()
{if(!this.m_arrPaneItems)
return 0;return this.m_arrPaneItems.length;}
function OwcIPaneList_get_PaneItem(vPane)
{if(!this.m_arrPaneItems)
return 0;if(typeof(vPane)=="number")
return this.m_arrPaneItems[vPane];var sPaneId=String(vPane);var iPaneItem,nPanesItemsCount=this.m_arrPaneItems.length;for(iPaneItem=0;iPaneItem<nPanesItemsCount;++iPaneItem)
{var oPaneItem=this.m_arrPaneItems[iPaneItem];if(oPaneItem.m_sId==sPaneId)
return oPaneItem;}
return null;}
function OwcIPaneList_getSplitterPaneProportion()
{return this.m_nBeforeSplitterPaneProportion;}
function OwcIPaneList_setSplitterPaneProportion(vBeforeSplitterPaneProportion)
{var nBeforeSplitterPaneProportion=typeof(vBeforeSplitterPaneProportion)=="number"?vBeforeSplitterPaneProportion:parseFloat(vBeforeSplitterPaneProportion);if(!isNaN(nBeforeSplitterPaneProportion)&&(nBeforeSplitterPaneProportion>0)&&(nBeforeSplitterPaneProportion<1))
{if(this.m_nBeforeSplitterPaneProportion!=nBeforeSplitterPaneProportion)
{this.m_nBeforeSplitterPaneProportion=nBeforeSplitterPaneProportion;this.recalcLayout();}}}
function OwcIPaneList_isHorizontal()
{return(this.kind.toLowerCase()==Olive.Controls.IPaneList.kind.Columns);}
function OwcIPaneList_isFull()
{return(this.kind.toLowerCase()==Olive.Controls.IPaneList.kind.Full);}
function OwcIPaneList_constructControl(oWebPage,oHtmlElement,oControlParent)
{if(Olive.Controls.IPaneList.IsImplementedBy(oControlParent)||Olive.Object.FindParentImplementing(Olive.Controls.IPaneList,oControlParent))
{Olive.Controls.IPane.Implement(this,true);}
else
{function onWindowResize(oEvent)
{var oPane=arguments.callee.oThis;oPane.recalcLayout();}
onWindowResize.oThis=this;window.onresize=onWindowResize;}
if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcIPaneList_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.m_bFitParent=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.IPaneList.attributes.FitParent,this.m_bFitParent);var sListKind=DHTML.getAttr(this.HtmlElement,Olive.Controls.IPaneList.attributes.Kind);if(sListKind)
this.kind=sListKind;}
function OwcIPaneList_initControl()
{this.collectPaneItems();if(!Olive.Controls.IPane.IsImplementedBy(this))
DHTML.addCssClassToElem(this.HtmlElement,"PaneRoot");var bIsHorizontal=this.isHorizontal();var iPaneItem,nPanesItemsCount=this.m_arrPaneItems.length;var oPaneBeforeSplitter=null;var oPaneAfterSplitter=null;var bSplitterMatched=false;for(iPaneItem=0;iPaneItem<nPanesItemsCount;++iPaneItem)
{var oPaneItem=this.m_arrPaneItems[iPaneItem];oPaneItem.initStateFromHtml();if(bIsHorizontal)
DHTML.addCssClassToElem(oPaneItem.HtmlElement,"PaneListColumn");else
DHTML.addCssClassToElem(oPaneItem.HtmlElement,"PaneListRow");if(!oPaneItem.isVisible())
continue;if(!oPaneItem.resizablePane)
{if(!bSplitterMatched&&(oPaneItem.controlType==Olive.Controls.controlTypeNames.PaneSplitter))
bSplitterMatched=true;continue;}
if(bSplitterMatched)
{oPaneAfterSplitter=oPaneItem;}
else
{oPaneBeforeSplitter=oPaneItem;}}
if(bSplitterMatched)
{oPaneAfterSplitter.m_isPaneAfterSplitter=true;oPaneBeforeSplitter.m_isPaneBeforeSplitter=true;}
this.recalcLayout();if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcIPaneList_termControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_recalcLayoutTimeoutID)
JScript_Timeout.clearTimeout(this.m_recalcLayoutTimeoutID);}
function OwcIPaneList_recalcLayoutByTimeout()
{this.m_recalcLayoutTimeoutID=null;this.recalcLayout();}
function OwcIPaneList_recalcLayout(nClientWidth,nClientHeight)
{if(!this.m_arrPaneItems)
return;var bIsHorizontal=this.isHorizontal();var bIsFull=this.isFull();var arrResizableItems=new Array();var nDistributeSize=0;if((nClientWidth==undefined)||(nClientWidth<0)||(nClientHeight==undefined)||(nClientHeight<0))
{var oRootElem;if(!Olive.Controls.IPaneListItem.IsImplementedBy(this))
{if(this.m_bFitParent)
oRootElem=this.getOwnerPage().m_oRootElem;else if(this.HtmlElement.offsetParent)
oRootElem=this.HtmlElement.offsetParent;else
oRootElem=this.HtmlElement;if((nClientWidth==undefined)||(nClientWidth<0))
nClientWidth=oRootElem.clientWidth;if((nClientHeight==undefined)||(nClientHeight<0))
nClientHeight=oRootElem.clientHeight;if(nClientWidth<10||nClientHeight<10)
return;DHTML.setElemWidth(this.HtmlElement,oRootElem.clientWidth);DHTML.setElemHeight(this.HtmlElement,oRootElem.clientHeight);}
else
{if((nClientWidth==undefined)||(nClientWidth<0))
nClientWidth=this.m_nPaneItemWidth;if((nClientHeight==undefined)||(nClientHeight<0))
nClientHeight=this.m_nPaneItemHeight;}}
nDistributeSize=(bIsHorizontal?nClientWidth:nClientHeight);var iPaneItem,nPanesItemsCount=this.m_arrPaneItems.length;var bAllResizablePanesAreVisible=true;for(iPaneItem=0;iPaneItem<nPanesItemsCount;++iPaneItem)
{var oPaneItem=this.m_arrPaneItems[iPaneItem];if(!oPaneItem.isVisible())
{if(oPaneItem.resizablePane)
{bAllResizablePanesAreVisible=false;}
continue;}
if(oPaneItem.isMinimized()&&oPaneItem.resizablePane)
{bAllResizablePanesAreVisible=false;}
if(!bIsFull&&(!oPaneItem.resizablePane||oPaneItem.isMinimized()))
{if(bIsHorizontal)
{if(oPaneItem.setPaneItemSize)
oPaneItem.setPaneItemSize(-1,nClientHeight);nDistributeSize-=DHTML.getElemWidth(oPaneItem.HtmlElement);}
else
{if(oPaneItem.setPaneItemSize)
oPaneItem.setPaneItemSize(nClientWidth,-1);if(oPaneItem.isMinimized())
{var oHeaderElem=oPaneItem.getUiElement(Olive.Controls.IPane.UiElement.Header);if(oHeaderElem)
nDistributeSize-=DHTML.getElemHeight(oHeaderElem);}
else
nDistributeSize-=DHTML.getElemHeight(oPaneItem.HtmlElement);}}
else
arrResizableItems.push(oPaneItem);}
Debug.trace("----- Resizing '"+this.m_sId+"' "+this.kind+" pane list -----");Debug.trace("Client size     : "+String(nClientWidth)+" x "+String(nClientHeight));Debug.trace("Distribute size : "+String(nDistributeSize)+" (fixed size = "+
String((bIsHorizontal?nClientWidth:nClientHeight)-nDistributeSize)+")");nPanesItemsCount=arrResizableItems.length;if(nPanesItemsCount>0)
{var arrPaneSize=new Array(nPanesItemsCount);var nRemainedSize=nDistributeSize;var nEqualSizedPanesCount=0;for(iPaneItem=0;iPaneItem<nPanesItemsCount;++iPaneItem)
{var oPaneItem=arrResizableItems[iPaneItem];var nFactor=oPaneItem.getPaneItemSizeFactor();var nPaneSize=-1;if((this.m_nBeforeSplitterPaneProportion>0)&&bAllResizablePanesAreVisible)
{var nCalculatedFactor=oPaneItem.m_isPaneBeforeSplitter?this.m_nBeforeSplitterPaneProportion:(1-this.m_nBeforeSplitterPaneProportion);nPaneSize=oPaneItem.getPaneSize(nDistributeSize,nCalculatedFactor);nRemainedSize-=nPaneSize;}
else if(nFactor>0)
{nPaneSize=oPaneItem.getPaneSize(nDistributeSize,nFactor);nRemainedSize-=nPaneSize;}
else
++nEqualSizedPanesCount;arrPaneSize[iPaneItem]=nPaneSize;}
if((nEqualSizedPanesCount>0)&&(nRemainedSize>0))
{var nEqualSizedPaneSize=Math.round(nRemainedSize/nEqualSizedPanesCount);var nFirstEqualSizedPaneSize=nEqualSizedPaneSize+(nRemainedSize%nEqualSizedPanesCount);var bFirstEqualSizedPane=true;for(iPaneItem=0;iPaneItem<nPanesItemsCount;++iPaneItem)
{if(arrPaneSize[iPaneItem]>=0)
continue;if(bFirstEqualSizedPane)
{arrPaneSize[iPaneItem]=nFirstEqualSizedPaneSize;bFirstEqualSizedPane=false;}
else
arrPaneSize[iPaneItem]=nEqualSizedPaneSize;}}
var nPaneItemSize=((nPanesItemsCount==0)?0:(nDistributeSize/nPanesItemsCount));for(iPaneItem=0;iPaneItem<nPanesItemsCount;++iPaneItem)
{var oPaneItem=arrResizableItems[iPaneItem];var nItemWidth,nItemHeight;if(bIsFull)
{nItemWidth=nClientWidth;nItemHeight=nClientHeight;}
else
{if(bIsHorizontal)
{nItemWidth=arrPaneSize[iPaneItem];nItemHeight=nClientHeight;}
else
{nItemWidth=nClientWidth;nItemHeight=arrPaneSize[iPaneItem];}}
Debug.trace("Item ["+oPaneItem.m_sId+"]: "+String(nItemWidth)+" x "+String(nItemHeight));oPaneItem.setPaneItemSize(nItemWidth,nItemHeight);}}
this._firePanesResized(false);Debug.trace("----- Resized '"+this.m_sId+"' "+this.kind+" pane list -----\n");}
function OwcIPaneList_resizeWithSplitter(oSplitter,nOffset)
{if(!this.m_arrPaneItems)
return false;var oPaneBeforeSplitter=null;var oPaneAfterSplitter=null;var iPaneItem,nPanesItemsCount=this.m_arrPaneItems.length;for(iPaneItem=0;iPaneItem<nPanesItemsCount;++iPaneItem)
{var oPaneItem=this.m_arrPaneItems[iPaneItem];if(oPaneItem.m_isPaneBeforeSplitter)
{oPaneBeforeSplitter=oPaneItem;}
else if(oPaneItem.m_isPaneAfterSplitter)
{oPaneAfterSplitter=oPaneItem;}}
if(!oPaneBeforeSplitter||!oPaneAfterSplitter)
return false;if(this.isHorizontal())
{var nLeftWidth=oPaneBeforeSplitter.m_nPaneItemWidth;var nRightWidth=oPaneAfterSplitter.m_nPaneItemWidth;var nMinLimit=oPaneBeforeSplitter.getPixelLimit(nLeftWidth+nRightWidth);if(nMinLimit>1&&(nLeftWidth+nOffset)<nMinLimit)
nOffset=nMinLimit-nLeftWidth;oPaneBeforeSplitter.setPaneItemSize(nLeftWidth+nOffset,-1);oPaneAfterSplitter.setPaneItemSize(nRightWidth-nOffset,-1);this.m_nBeforeSplitterPaneProportion=Math.abs((nLeftWidth+nOffset)/(nLeftWidth+nRightWidth));}
else
{var nTopHeight=oPaneBeforeSplitter.m_nPaneItemHeight;var nBottomHeight=oPaneAfterSplitter.m_nPaneItemHeight;oPaneBeforeSplitter.setPaneItemSize(-1,nTopHeight+nOffset);oPaneAfterSplitter.setPaneItemSize(-1,nBottomHeight-nOffset);this.m_nBeforeSplitterPaneProportion=Math.abs((nTopHeight+nOffset)/(nTopHeight+nBottomHeight));}
this._firePanesResized(true);}
function OwcIPaneList_collectPaneItems()
{var oScanner=new Olive.Controls.Scanner();oScanner.m_arrPaneItems=new Array();oScanner.setProcessControlCallback(this.appendPaneItem);oScanner.addFilter(this.filterPaneItems);oScanner.scan(this);this.m_arrPaneItems=oScanner.m_arrPaneItems;}
function OwcIPaneList_filterPaneItems(ctxScanner,oControl)
{if(Olive.Controls.IPaneListItem.IsImplementedBy(oControl)&&(!Olive.Controls.IPane.IsImplementedBy(oControl)||!oControl.get_standalonePane()))
{return Olive.Controls.Scanner.FilterMode.Process;}
return(Olive.Controls.Scanner.FilterMode.Reject+Olive.Controls.Scanner.FilterMode.StopFilter);}
function OwcIPaneList_appendPaneItem(ctxScanner,oControl)
{Array_appendItem(ctxScanner.m_arrPaneItems,oControl);}
function OwcIPaneList_firePanesResized(bResizedWithSplitter)
{var oEvent=this.createOwcEventObject("panesResized");oEvent.bResizedWithSplitter=bResizedWithSplitter;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}}
if(!Olive.Controls.IPaneSplitter)
{Olive.Controls.IPaneSplitter=new Interface("Olive.Controls.IPaneSplitter");Olive.Controls.IPaneSplitter.HDragger=new Olive.MoveDragger("dragLayer dragHorizontal");Olive.Controls.IPaneSplitter.VDragger=new Olive.MoveDragger("dragLayer dragVertical");Olive.Controls.IPaneSplitter.Implement=function OwcIPaneSplitter_Implement(rObject,bDynamic)
{if(!this.Register(rObject,bDynamic))
return;Olive.Controls.IPaneListItem.ImplementInterface(rObject,bDynamic);JScript.Type.DeclareField(rObject,"resizablePane",false);JScript.Type.DeclareMethod(rObject,"onDragStart",OwcIPaneSplitter_onDragStart);JScript.Type.DeclareMethod(rObject,"onDragMove",OwcIPaneSplitter_onDragMove);JScript.Type.DeclareMethod(rObject,"onDragEnd",OwcIPaneSplitter_onDragEnd);JScript.Type.OverrideMethod(rObject,"bindHtmlElement",OwcIPaneSplitter_bindHtmlElement);JScript.Type.OverrideMethod(rObject,"initControl",OwcIPaneSplitter_initControl);}
function OwcIPaneSplitter_onDragStart(oDragger)
{var xMin=-1,xMax=-1,yMin=-1,yMax=-1;var oRootElem=DHTML.getRootElement();if(this.isColumnItem())
{xMin=DHTML.getElemClientLeft(oRootElem)+50;xMax=Math.max(xMin,DHTML.getElemClientRight(oRootElem)-50);}
else
{yMin=DHTML.getElemClientTop(oRootElem)+50;yMax=Math.max(yMin,DHTML.getElemClientBottom(oRootElem)-50);}
Debug.trace(String(xMin)+" x "+String(xMax));var oDragTrackerElem=this.HtmlElement.ownerDocument.createElement("div");if(this.isColumnItem())
oDragTrackerElem.className="dragTrackerVertical";else
oDragTrackerElem.className="dragTrackerHorizontal";oDragTrackerElem.style.left=String(DHTML.getElemClientLeft(this.HtmlElement))+"px";oDragTrackerElem.style.top=String(DHTML.getElemClientTop(this.HtmlElement))+"px";DHTML.setElemWidth(oDragTrackerElem,DHTML.getElemWidth(this.HtmlElement));DHTML.setElemHeight(oDragTrackerElem,DHTML.getElemHeight(this.HtmlElement));oDragger.setDragTracker(oDragTrackerElem,xMin,yMin,xMax,yMax);}
function OwcIPaneSplitter_onDragMove(oDragger,pointMouse,oEvent)
{}
function OwcIPaneSplitter_onDragEnd(oDragger,pointMouse,oEvent,bCancel)
{if(bCancel)
return;var nOffset=0;if(this.isColumnItem())
{nOffset=pointMouse.x-oDragger.m_pointEnter.x;var sCssDirection=DHTML.getStyle(this.HtmlElement,"direction").toLowerCase();if(sCssDirection=="rtl")
nOffset=-nOffset;}
else
nOffset=pointMouse.y-oDragger.m_pointEnter.y;this.paneContainer.resizeWithSplitter(this,nOffset);}
function OwcIPaneSplitter_bindHtmlElement(oHtmlElement)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);oHtmlElement.ondragstart=function test_ondragStart(oDragger)
{OwcGetControlFromHtmlElem(this).onDragStart(oDragger);}
oHtmlElement.ondragmove=function test_ondragMove(oDragger,pointMouse,oEvent)
{OwcGetControlFromHtmlElem(this).onDragMove(oDragger,pointMouse,oEvent);}
oHtmlElement.ondragend=function test_ondragEnd(oDragger,pointMouse,oEvent,bCancel)
{OwcGetControlFromHtmlElem(this).onDragEnd(oDragger,pointMouse,oEvent,bCancel);}}
function OwcIPaneSplitter_initControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var oDragger=null;if(this.isColumnItem())
oDragger=Olive.Controls.IPaneSplitter.HDragger;else
oDragger=Olive.Controls.IPaneSplitter.VDragger;oDragger.enableDrag(this.HtmlElement);}}
if(!Olive.Controls.IPane)
{Olive.Controls.IPane=new Interface("Olive.Controls.IPane");Olive.Controls.IPane.Command={togglePane:"toggle",minimizePane:"minimize",restorePane:"restore",showPane:"show",hidePane:"hide"}
Olive.Controls.IPane.UiElement={Header:"header",Content:"content",Footer:"footer",ToggleCommand:"toggle-command"}
Olive.Controls.IPane.cssClass={PaneMinimizeCommand:"PaneMinimizeCommand",PaneMaximizeCommand:"PaneMaximizeCommand"}
Olive.Controls.IPane.attributes={Resizable:Olive.Controls.xmlns+"resizable",PaneMaximizeToolTip:Olive.Controls.xmlns+"PaneMaximizeToolTip",PaneMinimizeToolTip:Olive.Controls.xmlns+"PaneMinimizeToolTip",Standalone:Olive.Controls.xmlns+"standalone"}
Olive.Controls.IPane.Implement=function OwcIPane_Implement(rObject,bDynamic)
{if(!Olive.Controls.IPane.Register(rObject,bDynamic))
return;Olive.Controls.IPaneListItem.ImplementInterface(rObject,bDynamic);JScript.Type.DeclareField(rObject,"m_bStandalone",false);JScript.Type.DeclareMethod(rObject,"checkIsVisible",OwcIPane_checkIsVisible);JScript.Type.DeclareMethod(rObject,"setPaneItemSize",OwcIPane_setPaneItemSize);JScript.Type.DeclareMethod(rObject,"getToolTip",OwcIPane_getToolTip);JScript.Type.DeclareMethod(rObject,"get_standalonePane",OwcIPane_get_standalonePane);JScript.Type.DeclareMethod(rObject,"set_standalonePane",OwcIPane_set_standalonePane);Olive.CmdTarget.RegisterCommand(rObject,this.Command.minimizePane,"minimize");Olive.CmdTarget.RegisterCommand(rObject,this.Command.restorePane,"restore");Olive.CmdTarget.RegisterCommand(rObject,this.Command.togglePane,"toggle");Olive.CmdTarget.RegisterCommand(rObject,this.Command.showPane,"show");Olive.CmdTarget.RegisterCommand(rObject,this.Command.hidePane,"hide");JScript.Type.OverrideMethod(rObject,"parseControlHtmlAttr",OwcIPane_parseControlHtmlAttr);JScript.Type.OverrideMethod(rObject,"updateUiStateHtml",OwcIPane_updateUiStateHtml);JScript.Type.OverrideMethod(rObject,"updateUiState",OwcIPane_updateUiState);JScript.Type.OverrideMethod(rObject,"bindUiElement",OwcIPane_bindUiElement);}
function OwcIPane_checkIsVisible(element)
{if(element.className.toLowerCase().indexOf("invisible")!=-1)
return false;if(element.parentElement==null)
return true;return this.checkIsVisible(element.parentElement);}
function OwcIPane_setPaneItemSize(nWidth,nHeight)
{var bPaneIsColumn=this.isColumnItem();if((!bPaneIsColumn||this.resizablePane)&&(nWidth>=0))
DHTML.setElemWidth(this.HtmlElement,nWidth);if((bPaneIsColumn||this.resizablePane)&&(nHeight>=0))
DHTML.setElemHeight(this.HtmlElement,nHeight);var nContentHeight=nHeight;var nContentWidth=nWidth;var oHeaderElem=this.getUiElement(Olive.Controls.IPane.UiElement.Header);var oContentElem=this.getUiElement(Olive.Controls.IPane.UiElement.Content);var oFooterElem=this.getUiElement(Olive.Controls.IPane.UiElement.Footer);if(oContentElem&&oContentElem.offsetParent&&(oContentElem.offsetParent!=this.HtmlElement)&&this.checkIsVisible(oContentElem))
{if(nHeight>0)
{nContentHeight=Math.min(nContentHeight,oContentElem.offsetParent.clientHeight);}
if(nWidth>0)
{DHTML.setElemWidth(oContentElem.offsetParent,nWidth);nContentWidth=Math.min(nContentWidth,oContentElem.offsetParent.clientWidth);}}
if(oHeaderElem)
{if(nContentWidth>0)
DHTML.setElemWidth(oHeaderElem,nContentWidth);if(nContentHeight>0)
nContentHeight-=oHeaderElem.offsetHeight;}
if(oFooterElem)
{if(nContentWidth>0)
DHTML.setElemWidth(oFooterElem,nContentWidth);if(nContentHeight>0)
nContentHeight-=oFooterElem.offsetHeight;}
if(oContentElem)
{if(nContentHeight>0)
DHTML.setElemHeight(oContentElem,nContentHeight);if(nContentWidth>0)
DHTML.setElemWidth(oContentElem,nContentWidth);}
if(nContentWidth>0)
this.m_nPaneItemWidth=nContentWidth;if(nContentHeight>0)
this.m_nPaneItemHeight=nContentHeight;if(Olive.Controls.IPaneList.IsImplementedBy(this))
this.recalcLayout(nContentWidth,nContentHeight);}
function OwcIPane_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.resizablePane=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.IPane.attributes.Resizable,this.resizablePane);this.m_bStandalone=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.IPane.attributes.Standalone,this.m_bStandalone);this.m_sPaneMaximizeToolTip=DHTML.getAttr(this.HtmlElement,Olive.Controls.IPane.attributes.PaneMaximizeToolTip);if(!this.m_sPaneMaximizeToolTip){this.m_sPaneMaximizeToolTip=this.getResString("PANE_MAXIMIZE_TOOL_TIP");}
this.m_sPaneMinimizeToolTip=DHTML.getAttr(this.HtmlElement,Olive.Controls.IPane.attributes.PaneMinimizeToolTip);if(!this.m_sPaneMinimizeToolTip){this.m_sPaneMinimizeToolTip=this.getResString("PANE_MINIMIZE_TOOL_TIP");}}
function OwcIPane_getToolTip(bMinimized)
{return bMinimized?this.m_sPaneMaximizeToolTip:this.m_sPaneMinimizeToolTip;}
function OwcIPane_get_standalonePane()
{return this.m_bStandalone;}
function OwcIPane_set_standalonePane(bStandalone)
{this.m_bStandalone=bStandalone;}
function OwcIPane_updateUiStateHtml(nNewState,nPrevState)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.resizablePane)
{var bMinimized=((nNewState&Olive.IState.State.Minimized)==Olive.IState.State.Minimized);if(bMinimized)
{if(this.isColumnItem())
this.HtmlElement.style.width="";else
this.HtmlElement.style.height="";}}}
function OwcIPane_bindUiElement(oUiHtmlElem,sUiElemType)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcIPane_updateUiState(nNewState,nPrevState)
{this.updateUiStateHtml(nNewState,nPrevState);var bVisible=((nNewState&Olive.IState.State.VisibleMask)==Olive.IState.State.Visible);if(!bVisible)
return;var bMinimized=((nNewState&Olive.IState.State.Minimized)==Olive.IState.State.Minimized);var oContentElem=this.getUiElement(Olive.Controls.IPane.UiElement.Content);if(oContentElem)
{if(bMinimized)
DHTML.addCssClassToElem(oContentElem,"Hidden");else
DHTML.removeCssClassFromElem(oContentElem,"Hidden");}
var oToggleElem=this.getUiElement(Olive.Controls.IPane.UiElement.ToggleCommand);if(oToggleElem)
{if(bMinimized)
{DHTML.removeCssClassFromElem(oToggleElem,Olive.Controls.IPane.cssClass.PaneMinimizeCommand);DHTML.addCssClassToElem(oToggleElem,Olive.Controls.IPane.cssClass.PaneMaximizeCommand);}
else
{DHTML.removeCssClassFromElem(oToggleElem,Olive.Controls.IPane.cssClass.PaneMaximizeCommand);DHTML.addCssClassToElem(oToggleElem,Olive.Controls.IPane.cssClass.PaneMinimizeCommand);}
var sToolTip=this.getToolTip(bMinimized);if(sToolTip)
{setAttr(oToggleElem,"title",sToolTip);}}}}
if(!Olive.Controls.Pane)
{Olive.Controls.Pane=function OwcPane()
{if(!DHTML.Layout.initialized)
DHTML.Layout();}
JScript.Type.RegisterClass("Olive.Controls.Pane",Olive.Controls.Pane,Olive.Controls.Control,[Olive.Controls.IPane]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Pane,Olive.Controls.Pane);}
if(!Olive.Controls.PaneSplitter)
{Olive.Controls.PaneSplitter=function OwcPaneSplitter()
{if(!DHTML.Layout.initialized)
DHTML.Layout();}
JScript.Type.RegisterClass("Olive.Controls.PaneSplitter",Olive.Controls.PaneSplitter,Olive.Controls.Control,[Olive.Controls.IPaneSplitter]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.PaneSplitter,Olive.Controls.PaneSplitter);}
if(!Olive.Controls.PaneList)
{Olive.Controls.PaneList=function OwcPaneList()
{if(!DHTML.Layout.initialized)
DHTML.Layout();}
JScript.Type.RegisterClass("Olive.Controls.PaneList",Olive.Controls.PaneList,Olive.Controls.Control,[Olive.Controls.IPaneList]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.PaneList,Olive.Controls.PaneList);}