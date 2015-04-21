
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.PopupWindow="popupwindow";var OwcUiElem_PopupWindowCaption="popupwindowcaption";var OwcUiElem_PopupWindowTitle="popupwindowtitle";var OwcUiElem_PopupWindowCloseButton="popupwindowclosebutton";var OwcUiElem_PopupWindowTopLeftCorner="popupwindowtopleftcorner";var OwcUiElem_PopupWindowTopBorder="popupwindowtopborder";var OwcUiElem_PopupWindowTopRightCorner="popupwindowtoprightcorner";var OwcUiElem_PopupWindowContentRightBorder="popupwindowcontentrightborder";var OwcUiElem_PopupWindowBottomRightCorner="popupwindowbottomrightcorner";var OwcUiElem_PopupWindowBottomBorder="popupwindowbottomborder";var OwcUiElem_PopupWindowBottomLeftCorner="popupwindowbottomleftcorner";var OwcUiElem_PopupWindowContentLeftBorder="popupwindowcontentleftborder";var OwcUiElem_PopupWindowClient="client";var OwcUiElem_PopupWindowMask="mask";var OwcCssClass_PopupWindow="PopupWindow";var OwcCssClass_PopupWindowActive="PopupWindowActive";var OwcCssClass_PopupWindowFrame="PopupWindowFrame";var OwcCssClass_PopupWindowFrameTop="PopupWindowFrameTop";var OwcCssClass_PopupWindowFrameContent="PopupWindowFrameContent";var OwcCssClass_PopupWindowFrameBottom="PopupWindowFrameBottom";var OwcCssClass_PopupWindowTopLeftCorner="PopupWindowTopLeftCorner";var OwcCssClass_PopupWindowTopBorder="PopupWindowTopBorder";var OwcCssClass_PopupWindowTopRightCorner="PopupWindowTopRightCorner";var OwcCssClass_PopupWindowContentLeftBorder="PopupWindowContentLeftBorder";var OwcCssClass_PopupWindowContent="PopupWindowContent";var OwcCssClass_PopupWindowContentArea="PopupWindowContentArea";var OwcCssClass_PopupWindowContentRightBorder="PopupWindowContentRightBorder";var OwcCssClass_PopupWindowBottomLeftCorner="PopupWindowBottomLeftCorner";var OwcCssClass_PopupWindowBottomBorder="PopupWindowBottomBorder";var OwcCssClass_PopupWindowBottomRightCorner="PopupWindowBottomRightCorner";var OwcCssClass_PopupWindowCaption="PopupWindowCaption";var OwcCssClass_PopupWindowTitle="PopupWindowTitle";var OwcCssClass_PopupWindowDragArea="PopupWindowDragArea";var OwcCssClass_PopupWindowClose="PopupWindowClose";var OwcCssClass_PopupWindowClient="PopupWindowClient";var OwcCssClass_PopupWindowMask="PopupWindowMask";var OwcCssClass_PopupWindowResizable="PopupWindowResizable";Olive.Controls.attributes.MaximalWidthPercent=Olive.Controls.xmlns+"maximal-width-percent";Olive.Controls.attributes.MaximalHeightPercent=Olive.Controls.xmlns+"maximal-height-percent";if(!Olive.UiElemType.PopupWindowCaption)
{Olive.UiElemType.PopupWindowCaption=function OwcPopupWindowCaption()
{};Olive.UiElemType.PopupWindowCaption.DeclareType=function OwcPopupWindowCaptionUiElemType_DeclareType()
{this.ReplaceMethod("bindUiElementCustom",OwcPopupWindowCaption_bindUiElementCustom);this.DeclareMethod("enableDragging",OwcPopupWindowCaption_EnableDragging);}
function OwcPopupWindowCaption_bindUiElementCustom(oControl,oUiElem)
{this.enableDragging(oControl,oUiElem);}
function OwcPopupWindowCaption_EnableDragging(oControl,oUiElem)
{oUiElem.ondragstart=OwcPopupWindowCaption_onDragStart;oUiElem.ondragmove=OwcPopupWindowCaption_onDragMoveEnd;oUiElem.ondragend=OwcPopupWindowCaption_onDragMoveEnd;oControl.m_oMoveDragger.enableDrag(oUiElem);}
function OwcPopupWindowCaption_onDragStart(oDragger)
{if(!oDragger)
return;oDragger.m_nLeftStart=oDragger.m_oControlElem.offsetLeft;oDragger.m_nTopStart=oDragger.m_oControlElem.offsetTop;}
function OwcPopupWindowCaption_onDragMoveEnd(oDragger,pointMouse,oEvent,bCancel)
{if((bCancel)||(!oDragger))
{return;}
var xOffset=pointMouse.x-oDragger.m_pointEnter.x;var yOffset=pointMouse.y-oDragger.m_pointEnter.y;oDragger.m_oControlElem.m_OwcControl.setLeft(oDragger.m_nLeftStart+xOffset);oDragger.m_oControlElem.m_OwcControl.setTop(oDragger.m_nTopStart+yOffset);}
JScript.Type.RegisterClass("Olive.UiElemType.PopupWindowCaption",Olive.UiElemType.PopupWindowCaption,Olive.UiElemType);}
if(!Olive.UiElemType.PopupWindowCloseButton)
{Olive.UiElemType.PopupWindowCloseButton=function OwcPopupWindowCloseButton()
{};Olive.UiElemType.PopupWindowCloseButton.DeclareType=function OwcPopupWindowCloseButtonUiElemType_DeclareType(rObject)
{this.ReplaceMethod("bindUiElementCustom",OwcPopupWindowCloseButton_bindUiElementCustom);}
function OwcPopupWindowCloseButton_bindUiElementCustom(oControl,oUiElem)
{oUiElem.onmousedown=OwcPopupWindowCloseButton_onMouseDown;oUiElem.onclick=OwcPopupWindowCloseButton_onClick;}
function OwcPopupWindowCloseButton_onMouseDown(oEvent)
{oEvent=getEvent(oEvent);stopEventBubbling(oEvent);}
function OwcPopupWindowCloseButton_onClick(oEvent)
{var oPopupWindow=this.owcUiParent;oPopupWindow.close();}
JScript.Type.RegisterClass("Olive.UiElemType.PopupWindowCloseButton",Olive.UiElemType.PopupWindowCloseButton,Olive.UiElemType);}
if(!Olive.UiElemType.PopupWindowTopLeftCorner)
{Olive.UiElemType.PopupWindowTopLeftCorner=function OwcPopupWindowTopLeftCorner()
{};Olive.UiElemType.PopupWindowTopLeftCorner.DeclareType=function OwcPopupWindowTopLeftCornerUiElemType_DeclareType(rObject)
{this.DeclareMethod("enableResize",OwcPopupWindowTopLeftCorner_EnableResize);this.DeclareMethod("disableResize",OwcPopupWindowTopLeftCorner_DisableResize);}
function OwcPopupWindowTopLeftCorner_EnableResize(oControl,oUiElem)
{oUiElem.ondragstart=OwcPopupWindowTopLeftCorner_onDragStart;oUiElem.ondragmove=OwcPopupWindowTopLeftCorner_onDragMoveEnd;oUiElem.ondragend=OwcPopupWindowTopLeftCorner_onDragMoveEnd;oControl.m_oMoveDragger.enableDrag(oUiElem);}
function OwcPopupWindowTopLeftCorner_DisableResize(oControl,oUiElem)
{oUiElem.ondragstart=null;oUiElem.ondragmove=null;oUiElem.ondragend=null;oControl.m_oMoveDragger.disableDrag(oUiElem);}
function OwcPopupWindowTopLeftCorner_onDragStart(oDragger)
{oDragger.m_nWidthStart=oDragger.m_oControlElem.offsetWidth;oDragger.m_nHeightStart=oDragger.m_oControlElem.offsetHeight;oDragger.m_nLeftStart=oDragger.m_oControlElem.offsetLeft;oDragger.m_nTopStart=oDragger.m_oControlElem.offsetTop;}
function OwcPopupWindowTopLeftCorner_onDragMoveEnd(oDragger,pointMouse,oEvent,bCancel)
{if(bCancel)
{return;}
var xOffset=pointMouse.x-oDragger.m_pointEnter.x;var yOffset=pointMouse.y-oDragger.m_pointEnter.y;var nTopOffset=oDragger.m_oControlElem.m_OwcControl.getValidTopOffset(oDragger.m_nTopStart,yOffset);var nHeightOffset=oDragger.m_oControlElem.m_OwcControl.getValidHeightOffset(oDragger.m_nHeightStart,-yOffset);var minYOffset=0;if(nHeightOffset>0)
{minYOffset=Math.min(-nTopOffset,nHeightOffset);}
else if(nHeightOffset<0)
{minYOffset=Math.max(-nTopOffset,nHeightOffset);}
var nLeftOffset=oDragger.m_oControlElem.m_OwcControl.getValidLeftOffset(oDragger.m_nLeftStart,xOffset);var nWidthOffset=oDragger.m_oControlElem.m_OwcControl.getValidWidthOffset(oDragger.m_nWidthStart,-xOffset);var minXOffset=0;if(nWidthOffset>0)
{minXOffset=Math.min(-nLeftOffset,nWidthOffset);}
else if(nWidthOffset<0)
{minXOffset=Math.max(-nLeftOffset,nWidthOffset);}
oDragger.m_oControlElem.style.width=String(oDragger.m_nWidthStart+minXOffset)+"px";oDragger.m_oControlElem.style.height=String(oDragger.m_nHeightStart+minYOffset)+"px";oDragger.m_oControlElem.m_OwcControl.setLeft(oDragger.m_nLeftStart-minXOffset);oDragger.m_oControlElem.m_OwcControl.setTop(oDragger.m_nTopStart-minYOffset);}
JScript.Type.RegisterClass("Olive.UiElemType.PopupWindowTopLeftCorner",Olive.UiElemType.PopupWindowTopLeftCorner,Olive.UiElemType);}
if(!Olive.UiElemType.PopupWindowTopBorder)
{Olive.UiElemType.PopupWindowTopBorder=function OwcPopupWindowTopBorder()
{};Olive.UiElemType.PopupWindowTopBorder.DeclareType=function OwcPopupWindowTopBorderUiElemType_DeclareType(rObject)
{this.DeclareMethod("enableResize",OwcPopupWindowTopBorder_EnableResize);this.DeclareMethod("disableResize",OwcPopupWindowTopBorder_DisableResize);}
function OwcPopupWindowTopBorder_EnableResize(oControl,oUiElem)
{oUiElem.ondragstart=OwcPopupWindowTopBorder_onDragStart;oUiElem.ondragmove=OwcPopupWindowTopBorder_onDragMoveEnd;oUiElem.ondragend=OwcPopupWindowTopBorder_onDragMoveEnd;oControl.m_oMoveDragger.enableDrag(oUiElem);}
function OwcPopupWindowTopBorder_DisableResize(oControl,oUiElem)
{oUiElem.ondragstart=null;oUiElem.ondragmove=null;oUiElem.ondragend=null;oControl.m_oMoveDragger.disableDrag(oUiElem);}
function OwcPopupWindowTopBorder_onDragStart(oDragger)
{oDragger.m_nHeightStart=oDragger.m_oControlElem.offsetHeight;oDragger.m_nTopStart=oDragger.m_oControlElem.offsetTop;}
function OwcPopupWindowTopBorder_onDragMoveEnd(oDragger,pointMouse,oEvent,bCancel)
{if(bCancel)
{return;}
var yOffset=pointMouse.y-oDragger.m_pointEnter.y;var nTopOffset=oDragger.m_oControlElem.m_OwcControl.getValidTopOffset(oDragger.m_nTopStart,yOffset);var nHeightOffset=oDragger.m_oControlElem.m_OwcControl.getValidHeightOffset(oDragger.m_nHeightStart,-yOffset);var minYOffset=0;if(nHeightOffset>0)
{minYOffset=Math.min(-nTopOffset,nHeightOffset);}
else if(nHeightOffset<0)
{minYOffset=Math.max(-nTopOffset,nHeightOffset);}
oDragger.m_oControlElem.style.height=String(oDragger.m_nHeightStart+minYOffset)+"px";oDragger.m_oControlElem.m_OwcControl.setTop(oDragger.m_nTopStart-minYOffset);}
JScript.Type.RegisterClass("Olive.UiElemType.PopupWindowTopBorder",Olive.UiElemType.PopupWindowTopBorder,Olive.UiElemType);}
if(!Olive.UiElemType.PopupWindowTopRightCorner)
{Olive.UiElemType.PopupWindowTopRightCorner=function OwcPopupWindowTopRightCorner()
{};Olive.UiElemType.PopupWindowTopRightCorner.DeclareType=function OwcPopupWindowTopRightCornerUiElemType_DeclareType(rObject)
{this.DeclareMethod("enableResize",OwcPopupWindowTopRightCorner_EnableResize);this.DeclareMethod("disableResize",OwcPopupWindowTopRightCorner_DisableResize);}
function OwcPopupWindowTopRightCorner_EnableResize(oControl,oUiElem)
{oUiElem.ondragstart=OwcPopupWindowTopRightCorner_onDragStart;oUiElem.ondragmove=OwcPopupWindowTopRightCorner_onDragMoveEnd;oUiElem.ondragend=OwcPopupWindowTopRightCorner_onDragMoveEnd;oControl.m_oMoveDragger.enableDrag(oUiElem);}
function OwcPopupWindowTopRightCorner_DisableResize(oControl,oUiElem)
{oUiElem.ondragstart=null;oUiElem.ondragmove=null;oUiElem.ondragend=null;oControl.m_oMoveDragger.disableDrag(oUiElem);}
function OwcPopupWindowTopRightCorner_onDragStart(oDragger)
{oDragger.m_nWidthStart=oDragger.m_oControlElem.offsetWidth;oDragger.m_nHeightStart=oDragger.m_oControlElem.offsetHeight;oDragger.m_nTopStart=oDragger.m_oControlElem.offsetTop;}
function OwcPopupWindowTopRightCorner_onDragMoveEnd(oDragger,pointMouse,oEvent,bCancel)
{if(bCancel)
{return;}
var xOffset=pointMouse.x-oDragger.m_pointEnter.x;var yOffset=pointMouse.y-oDragger.m_pointEnter.y;var nTopOffset=oDragger.m_oControlElem.m_OwcControl.getValidTopOffset(oDragger.m_nTopStart,yOffset);var nHeightOffset=oDragger.m_oControlElem.m_OwcControl.getValidHeightOffset(oDragger.m_nHeightStart,-yOffset);var minYOffset=0;if(nHeightOffset>0)
{minYOffset=Math.min(-nTopOffset,nHeightOffset);}
else if(nHeightOffset<0)
{minYOffset=Math.max(-nTopOffset,nHeightOffset);}
var nWidthOffset=oDragger.m_oControlElem.m_OwcControl.getValidWidthOffset(oDragger.m_nWidthStart,xOffset);oDragger.m_oControlElem.style.width=String(oDragger.m_nWidthStart+nWidthOffset)+"px";oDragger.m_oControlElem.style.height=String(oDragger.m_nHeightStart+minYOffset)+"px";oDragger.m_oControlElem.m_OwcControl.setTop(oDragger.m_nTopStart-minYOffset);}
JScript.Type.RegisterClass("Olive.UiElemType.PopupWindowTopRightCorner",Olive.UiElemType.PopupWindowTopRightCorner,Olive.UiElemType);}
if(!Olive.UiElemType.PopupWindowContentRightBorder)
{Olive.UiElemType.PopupWindowContentRightBorder=function OwcPopupWindowContentRightBorder()
{};Olive.UiElemType.PopupWindowContentRightBorder.DeclareType=function OwcPopupWindowContentRightBorderUiElemType_DeclareType(rObject)
{this.DeclareMethod("enableResize",OwcPopupWindowContentRightBorder_EnableResize);this.DeclareMethod("disableResize",OwcPopupWindowContentRightBorder_DisableResize);}
function OwcPopupWindowContentRightBorder_EnableResize(oControl,oUiElem)
{oUiElem.ondragstart=OwcPopupWindowContentRightBorder_onDragStart;oUiElem.ondragmove=OwcPopupWindowContentRightBorder_onDragMoveEnd;oUiElem.ondragend=OwcPopupWindowContentRightBorder_onDragMoveEnd;oControl.m_oMoveDragger.enableDrag(oUiElem);}
function OwcPopupWindowContentRightBorder_DisableResize(oControl,oUiElem)
{oUiElem.ondragstart=null;oUiElem.ondragmove=null;oUiElem.ondragend=null;oControl.m_oMoveDragger.disableDrag(oUiElem);}
function OwcPopupWindowContentRightBorder_onDragStart(oDragger)
{oDragger.m_nWidthStart=oDragger.m_oControlElem.offsetWidth;}
function OwcPopupWindowContentRightBorder_onDragMoveEnd(oDragger,pointMouse,oEvent,bCancel)
{if(bCancel)
{return;}
var xOffset=pointMouse.x-oDragger.m_pointEnter.x;var nWidthOffset=oDragger.m_oControlElem.m_OwcControl.getValidWidthOffset(oDragger.m_nWidthStart,xOffset);oDragger.m_oControlElem.style.width=String(oDragger.m_nWidthStart+nWidthOffset)+"px";}
JScript.Type.RegisterClass("Olive.UiElemType.PopupWindowContentRightBorder",Olive.UiElemType.PopupWindowContentRightBorder,Olive.UiElemType);}
if(!Olive.UiElemType.PopupWindowBottomRightCorner)
{Olive.UiElemType.PopupWindowBottomRightCorner=function OwcPopupWindowBottomRightCorner()
{};Olive.UiElemType.PopupWindowBottomRightCorner.DeclareType=function OwcPopupWindowBottomRightCornerUiElemType_DeclareType(rObject)
{this.DeclareMethod("enableResize",OwcPopupWindowBottomRightCorner_EnableResize);this.DeclareMethod("disableResize",OwcPopupWindowBottomRightCorner_DisableResize);}
function OwcPopupWindowBottomRightCorner_EnableResize(oControl,oUiElem)
{oUiElem.ondragstart=OwcPopupWindowBottomRightCorner_onDragStart;oUiElem.ondragmove=OwcPopupWindowBottomRightCorner_onDragMoveEnd;oUiElem.ondragend=OwcPopupWindowBottomRightCorner_onDragMoveEnd;oControl.m_oMoveDragger.enableDrag(oUiElem);}
function OwcPopupWindowBottomRightCorner_DisableResize(oControl,oUiElem)
{oUiElem.ondragstart=null;oUiElem.ondragmove=null;oUiElem.ondragend=null;oControl.m_oMoveDragger.disableDrag(oUiElem);}
function OwcPopupWindowBottomRightCorner_onDragStart(oDragger)
{oDragger.m_nWidthStart=oDragger.m_oControlElem.offsetWidth;oDragger.m_nHeightStart=oDragger.m_oControlElem.offsetHeight;}
function OwcPopupWindowBottomRightCorner_onDragMoveEnd(oDragger,pointMouse,oEvent,bCancel)
{if(bCancel)
{return;}
var xOffset=pointMouse.x-oDragger.m_pointEnter.x;var yOffset=pointMouse.y-oDragger.m_pointEnter.y;var nHeightOffset=oDragger.m_oControlElem.m_OwcControl.getValidHeightOffset(oDragger.m_nHeightStart,yOffset);var nWidthOffset=oDragger.m_oControlElem.m_OwcControl.getValidWidthOffset(oDragger.m_nWidthStart,xOffset);oDragger.m_oControlElem.style.width=String(oDragger.m_nWidthStart+nWidthOffset)+"px";oDragger.m_oControlElem.style.height=String(oDragger.m_nHeightStart+nHeightOffset)+"px";}
JScript.Type.RegisterClass("Olive.UiElemType.PopupWindowBottomRightCorner",Olive.UiElemType.PopupWindowBottomRightCorner,Olive.UiElemType);}
if(!Olive.UiElemType.PopupWindowBottomBorder)
{Olive.UiElemType.PopupWindowBottomBorder=function OwcPopupWindowBottomBorder()
{};Olive.UiElemType.PopupWindowBottomBorder.DeclareType=function OwcPopupWindowBottomBorderUiElemType_DeclareType(rObject)
{this.DeclareMethod("enableResize",OwcPopupWindowBottomBorder_EnableResize);this.DeclareMethod("disableResize",OwcPopupWindowBottomBorder_DisableResize);}
function OwcPopupWindowBottomBorder_EnableResize(oControl,oUiElem)
{oUiElem.ondragstart=OwcPopupWindowBottomBorder_onDragStart;oUiElem.ondragmove=OwcPopupWindowBottomBorder_onDragMoveEnd;oUiElem.ondragend=OwcPopupWindowBottomBorder_onDragMoveEnd;oControl.m_oMoveDragger.enableDrag(oUiElem);}
function OwcPopupWindowBottomBorder_DisableResize(oControl,oUiElem)
{oUiElem.ondragstart=null;oUiElem.ondragmove=null;oUiElem.ondragend=null;oControl.m_oMoveDragger.disableDrag(oUiElem);}
function OwcPopupWindowBottomBorder_onDragStart(oDragger)
{oDragger.m_nHeightStart=oDragger.m_oControlElem.offsetHeight;}
function OwcPopupWindowBottomBorder_onDragMoveEnd(oDragger,pointMouse,oEvent,bCancel)
{if(bCancel)
{return;}
var yOffset=pointMouse.y-oDragger.m_pointEnter.y;var nHeightOffset=oDragger.m_oControlElem.m_OwcControl.getValidHeightOffset(oDragger.m_nHeightStart,yOffset);oDragger.m_oControlElem.style.height=String(oDragger.m_nHeightStart+nHeightOffset)+"px";}
JScript.Type.RegisterClass("Olive.UiElemType.PopupWindowBottomBorder",Olive.UiElemType.PopupWindowBottomBorder,Olive.UiElemType);}
if(!Olive.UiElemType.PopupWindowBottomLeftCorner)
{Olive.UiElemType.PopupWindowBottomLeftCorner=function OwcPopupWindowBottomLeftCorner()
{};Olive.UiElemType.PopupWindowBottomLeftCorner.DeclareType=function OwcPopupWindowBottomLeftCornerUiElemType_DeclareType(rObject)
{this.DeclareMethod("enableResize",OwcPopupWindowBottomLeftCorner_EnableResize);this.DeclareMethod("disableResize",OwcPopupWindowBottomLeftCorner_DisableResize);}
function OwcPopupWindowBottomLeftCorner_EnableResize(oControl,oUiElem)
{oUiElem.ondragstart=OwcPopupWindowBottomLeftCorner_onDragStart;oUiElem.ondragmove=OwcPopupWindowBottomLeftCorner_onDragMoveEnd;oUiElem.ondragend=OwcPopupWindowBottomLeftCorner_onDragMoveEnd;oControl.m_oMoveDragger.enableDrag(oUiElem);}
function OwcPopupWindowBottomLeftCorner_DisableResize(oControl,oUiElem)
{oUiElem.ondragstart=null;oUiElem.ondragmove=null;oUiElem.ondragend=null;oControl.m_oMoveDragger.disableDrag(oUiElem);}
function OwcPopupWindowBottomLeftCorner_onDragStart(oDragger)
{oDragger.m_nWidthStart=oDragger.m_oControlElem.offsetWidth;oDragger.m_nHeightStart=oDragger.m_oControlElem.offsetHeight;oDragger.m_nLeftStart=oDragger.m_oControlElem.offsetLeft;}
function OwcPopupWindowBottomLeftCorner_onDragMoveEnd(oDragger,pointMouse,oEvent,bCancel)
{if(bCancel)
{return;}
var xOffset=pointMouse.x-oDragger.m_pointEnter.x;var yOffset=pointMouse.y-oDragger.m_pointEnter.y;var nHeightOffset=oDragger.m_oControlElem.m_OwcControl.getValidHeightOffset(oDragger.m_nHeightStart,yOffset);var nLeftOffset=oDragger.m_oControlElem.m_OwcControl.getValidLeftOffset(oDragger.m_nLeftStart,xOffset);var nWidthOffset=oDragger.m_oControlElem.m_OwcControl.getValidWidthOffset(oDragger.m_nWidthStart,-xOffset);var minXOffset=0;if(nWidthOffset>0)
{minXOffset=Math.min(-nLeftOffset,nWidthOffset);}
else if(nWidthOffset<0)
{minXOffset=Math.max(-nLeftOffset,nWidthOffset);}
oDragger.m_oControlElem.style.width=String(oDragger.m_nWidthStart+minXOffset)+"px";oDragger.m_oControlElem.style.height=String(oDragger.m_nHeightStart+nHeightOffset)+"px";oDragger.m_oControlElem.m_OwcControl.setLeft(oDragger.m_nLeftStart-minXOffset);}
JScript.Type.RegisterClass("Olive.UiElemType.PopupWindowBottomLeftCorner",Olive.UiElemType.PopupWindowBottomLeftCorner,Olive.UiElemType);}
if(!Olive.UiElemType.PopupWindowContentLeftBorder)
{Olive.UiElemType.PopupWindowContentLeftBorder=function OwcPopupWindowContentLeftBorder()
{};Olive.UiElemType.PopupWindowContentLeftBorder.DeclareType=function OwcPopupWindowContentLeftBorderUiElemType_DeclareType(rObject)
{this.DeclareMethod("enableResize",OwcPopupWindowContentLeftBorder_EnableResize);this.DeclareMethod("disableResize",OwcPopupWindowContentLeftBorder_DisableResize);}
function OwcPopupWindowContentLeftBorder_EnableResize(oControl,oUiElem)
{oUiElem.ondragstart=OwcPopupWindowContentLeftBorder_onDragStart;oUiElem.ondragmove=OwcPopupWindowContentLeftBorder_onDragMoveEnd;oUiElem.ondragend=OwcPopupWindowContentLeftBorder_onDragMoveEnd;oControl.m_oMoveDragger.enableDrag(oUiElem);}
function OwcPopupWindowContentLeftBorder_DisableResize(oControl,oUiElem)
{oUiElem.ondragstart=null;oUiElem.ondragmove=null;oUiElem.ondragend=null;oControl.m_oMoveDragger.disableDrag(oUiElem);}
function OwcPopupWindowContentLeftBorder_onDragStart(oDragger)
{oDragger.m_nWidthStart=oDragger.m_oControlElem.offsetWidth;oDragger.m_nLeftStart=oDragger.m_oControlElem.offsetLeft;}
function OwcPopupWindowContentLeftBorder_onDragMoveEnd(oDragger,pointMouse,oEvent,bCancel)
{if(bCancel)
{return;}
var xOffset=pointMouse.x-oDragger.m_pointEnter.x;var nLeftOffset=oDragger.m_oControlElem.m_OwcControl.getValidLeftOffset(oDragger.m_nLeftStart,xOffset);var nWidthOffset=oDragger.m_oControlElem.m_OwcControl.getValidWidthOffset(oDragger.m_nWidthStart,-xOffset);var minXOffset=0;if(nWidthOffset>0)
{minXOffset=Math.min(-nLeftOffset,nWidthOffset);}
else if(nWidthOffset<0)
{minXOffset=Math.max(-nLeftOffset,nWidthOffset);}
oDragger.m_oControlElem.style.width=String(oDragger.m_nWidthStart+minXOffset)+"px";oDragger.m_oControlElem.m_OwcControl.setLeft(oDragger.m_nLeftStart-minXOffset);}
JScript.Type.RegisterClass("Olive.UiElemType.PopupWindowContentLeftBorder",Olive.UiElemType.PopupWindowContentLeftBorder,Olive.UiElemType);}
if(!Olive.Data.PopupWindowOptions)
{Olive.Data.PopupWindowOptions=function OwcPopupWindowOptions()
{};Olive.Data.PopupWindowOptions.SettingsValues={auto:"auto"};Olive.Data.PopupWindowOptions.DeclareType=function OwcPopupWindowOptions_DeclareType(rObject)
{this.DeclareField("m_nMinimalWidth",Olive.Data.PopupWindowOptions.DefaultMinimalWidth);this.DeclareField("m_nMinimalHeight",Olive.Data.PopupWindowOptions.DefaultMinimalHeight);this.DeclareField("m_nMaximalWidthPercent",Olive.Data.PopupWindowOptions.DefaultMaximalWidthPercent);this.DeclareField("m_nMaximalHeightPercent",Olive.Data.PopupWindowOptions.DefaultMaximalHeightPercent);this.DeclareField("m_bIsResizable",true);this.DeclareField("m_nZIndex",0);this.DeclareField("m_sTitle","");this.DeclareField("m_nTop","auto");this.DeclareField("m_nLeft","auto");this.DeclareField("m_nWidth","auto");this.DeclareField("m_nHeight","auto");this.DeclareField("target","auto");this.DeclareField("windowType",Olive.WindowOptions.Types.emulatedpopup);this.DeclareMethod("getMinimalWidth",OwcPopupWindowOptions_getMinimalWidth);this.DeclareMethod("setMinimalWidth",OwcPopupWindowOptions_setMinimalWidth);this.DeclareMethod("getMinimalHeight",OwcPopupWindowOptions_getMinimalHeight);this.DeclareMethod("setMinimalHeight",OwcPopupWindowOptions_setMinimalHeight);this.DeclareMethod("setMaximalWidthPercent",OwcPopupWindowOptions_setMaximalWidthPercent);this.DeclareMethod("getMaximalWidthPercent",OwcPopupWindowOptions_getMaximalWidthPercent);this.DeclareMethod("setMaximalHeightPercent",OwcPopupWindowOptions_setMaximalHeightPercent);this.DeclareMethod("getMaximalHeightPercent",OwcPopupWindowOptions_getMaximalHeightPercent);this.DeclareMethod("getIsResizable",OwcPopupWindowOptions_getIsResizable);this.DeclareMethod("setIsResizable",OwcPopupWindowOptions_setIsResizable);this.DeclareMethod("getZIndex",OwcPopupWindowOptions_getZIndex);this.DeclareMethod("setZIndex",OwcPopupWindowOptions_setZIndex);this.DeclareMethod("getTitle",OwcPopupWindowOptions_getTitle);this.DeclareMethod("setTitle",OwcPopupWindowOptions_setTitle);this.DeclareMethod("getTop",OwcPopupWindowOptions_getTop);this.DeclareMethod("setTop",OwcPopupWindowOptions_setTop);this.DeclareMethod("getLeft",OwcPopupWindowOptions_getLeft);this.DeclareMethod("setLeft",OwcPopupWindowOptions_setLeft);this.DeclareMethod("getWidth",OwcPopupWindowOptions_getWidth);this.DeclareMethod("setWidth",OwcPopupWindowOptions_setWidth);this.DeclareMethod("getHeight",OwcPopupWindowOptions_getHeight);this.DeclareMethod("setHeight",OwcPopupWindowOptions_setHeight);}
Olive.Data.PopupWindowOptions.DefaultMinimalWidth=50;Olive.Data.PopupWindowOptions.DefaultMinimalHeight=50;Olive.Data.PopupWindowOptions.DefaultMaximalWidthPercent=80;Olive.Data.PopupWindowOptions.DefaultMaximalHeightPercent=80;function OwcPopupWindowOptions_getMinimalWidth()
{return this.m_nMinimalWidth;}
function OwcPopupWindowOptions_setMinimalWidth(nValue)
{this.m_nMinimalWidth=nValue;}
function OwcPopupWindowOptions_getMinimalHeight()
{return this.m_nMinimalHeight;}
function OwcPopupWindowOptions_setMinimalHeight(nValue)
{this.m_nMinimalHeight=nValue;}
function OwcPopupWindowOptions_getMaximalWidthPercent()
{return this.m_nMaximalWidthPercent;}
function OwcPopupWindowOptions_setMaximalWidthPercent(nValue)
{this.m_nMaximalWidthPercent=nValue;}
function OwcPopupWindowOptions_getMaximalHeightPercent()
{return this.m_nMaximalHeightPercent;}
function OwcPopupWindowOptions_setMaximalHeightPercent(nValue)
{this.m_nMaximalHeightPercent=nValue;}
function OwcPopupWindowOptions_getIsResizable()
{return this.m_bIsResizable;}
function OwcPopupWindowOptions_setIsResizable(bValue)
{this.m_bIsResizable=bValue;}
function OwcPopupWindowOptions_getZIndex()
{return this.m_nZIndex;}
function OwcPopupWindowOptions_setZIndex(nValue)
{this.m_nZIndex=nValue;}
function OwcPopupWindowOptions_getTitle()
{return this.m_sTitle;}
function OwcPopupWindowOptions_setTitle(sTitle)
{this.m_sTitle=sTitle;}
function OwcPopupWindowOptions_getTop()
{return this.m_nTop;}
function OwcPopupWindowOptions_setTop(nTop)
{this.m_nTop=nTop;}
function OwcPopupWindowOptions_getLeft()
{return this.m_nLeft;}
function OwcPopupWindowOptions_setLeft(nLeft)
{this.m_nLeft=nLeft;}
function OwcPopupWindowOptions_getWidth()
{return this.m_nWidth;}
function OwcPopupWindowOptions_setWidth(nWidth)
{this.m_nWidth=nWidth;}
function OwcPopupWindowOptions_getHeight()
{return this.m_nHeight;}
function OwcPopupWindowOptions_setHeight(nHeight)
{this.m_nHeight=nHeight;}
JScript.Type.RegisterClass("Olive.Data.PopupWindowOptions",Olive.Data.PopupWindowOptions);}
if(!Olive.Controls.PopupWindow)
{Olive.Controls.PopupWindow=function OwcPopupWindow()
{};Olive.Controls.PopupWindow.WindowNamePrefix="OwcWindowName_";Olive.Controls.PopupWindow.attributes={ContentType:Olive.Controls.prefix+":"+"ContentType",Caption:Olive.Controls.prefix+":"+"Caption",CreateFrame:Olive.Controls.prefix+":"+"CreateFrame",PreserveContent:Olive.Controls.prefix+":"+"PreserveContent"}
Olive.Controls.PopupWindow.DeclareType=function OwcPopupWindow_DeclareType(rObject)
{this.DeclareMethod("init",OwcPopupWindow_init);this.DeclareMethod("navigateTo",OwcPopupWindow_navigateTo);this.DeclareMethod("show",OwcPopupWindow_show);this.DeclareMethod("hide",OwcPopupWindow_hide);this.DeclareMethod("close",OwcPopupWindow_close);this.DeclareMethod("open",OwcPopupWindow_open);this.DeclareMethod("openInternal",OwcPopupWindow_openInternal);this.DeclareMethod("getPopupArguments",OwcPopupWindow_getPopupArguments);this.DeclareMethod("getWindowOptions",OwcPopupWindow_getWindowOptions);this.DeclareMethod("setResizable",OwcPopupWindow_setResizable);this.DeclareMethod("getOwnerActiveWindowsManager",OwcPopupWindow_getOwnerActiveWindowsManager);this.DeclareMethod("getContentActiveWindowsManager",OwcPopupWindow_getContentActiveWindowsManager);this.DeclareMethod("activate",OwcPopupWindow_activate);this.DeclareMethod("deactivate",OwcPopupWindow_deactivate);this.DeclareMethod("isActive",OwcPopupWindow_isActive);this.DeclareMethod("onWindowActivated",OwcPopupWindow_onWindowActivated);this.DeclareMethod("onWindowDeactivated",OwcPopupWindow_onWindowDeactivated);this.DeclareMethod("startCatchKeyBoardEvents",OwcPopupWindow_startCatchKeyBoardEvents);this.DeclareMethod("createWindowFrame",OwcPopupWindow_createWindowFrame);this.DeclareMethod("setZIndex",OwcPopupWindow_setZIndex);this.DeclareMethod("getZIndex",OwcPopupWindow_getZIndex);this.DeclareMethod("focus",OwcPopupWindow_focus);this.DeclareMethod("getWindowParentSize",OwcPopupWindow_getWindowParentSize);this.DeclareMethod("getWindowSizeLimits",OwcPopupWindow_getWindowSizeLimits);this.DeclareMethod("autoSize",OwcPopupWindow_autoSize);this.DeclareMethod("getValidLeftOffset",OwcPopupWindow_getValidLeftOffset);this.DeclareMethod("getValidTopOffset",OwcPopupWindow_getValidTopOffset);this.DeclareMethod("getValidWidthOffset",OwcPopupWindow_getValidWidthOffset);this.DeclareMethod("getValidHeightOffset",OwcPopupWindow_getValidHeightOffset);this.DeclareMethod("setLeft",OwcPopupWindow_setLeft);this.DeclareMethod("setTop",OwcPopupWindow_setTop);this.DeclareMethod("setWidth",OwcPopupWindow_setWidth);this.DeclareMethod("setHeight",OwcPopupWindow_setHeight);this.DeclareMethod("_getWindowClientHtmlElement",OwcPopupWindow_getWindowClientHtmlElement);this.DeclareMethod("keyBoardEventsHandler",OwcPopupWindow_keyBoardEventsHandler);this.DeclareMethod("_setWindowTitle",OwcPopupWindow_setWindowTitle);this.DeclareMethod("_applyWindowOptions",OwcPopupWindow_applyWindowOptions);this.DeclareField("m_oWindowOptions",null);this.DeclareField("m_oMoveDragger",null);this.DeclareField("m_sContentType","HTML");this.DeclareField("m_oSizeLimits",null);this.DeclareField("opener",null);this.DeclareField("closed",true);this.DeclareField("m_popupInfo",null);this.OverrideMethod("parseControlHtmlAttr",OwcPopupWindow_parseControlHtml);this.OverrideMethod("initControl",OwcPopupWindow_initControl);}
Olive.Controls.PopupWindow.ApplyPrototype=function OwcPopupWindow_ApplyPrototype(rObject)
{rObject.m_oPopupWindowCaptionUiElemType=new Olive.UiElemType.PopupWindowCaption();rObject.registerUiElemType(OwcUiElem_PopupWindowCaption,rObject.m_oPopupWindowCaptionUiElemType);rObject.m_oPopupWindowCloseButtonUiElemType=new Olive.UiElemType.PopupWindowCloseButton();rObject.registerUiElemType(OwcUiElem_PopupWindowCloseButton,rObject.m_oPopupWindowCloseButtonUiElemType);rObject.m_oPopupWindowTopLeftCornerUiElemType=new Olive.UiElemType.PopupWindowTopLeftCorner();rObject.registerUiElemType(OwcUiElem_PopupWindowTopLeftCorner,rObject.m_oPopupWindowTopLeftCornerUiElemType);rObject.m_oPopupWindowTopBorderUiElemType=new Olive.UiElemType.PopupWindowTopBorder();rObject.registerUiElemType(OwcUiElem_PopupWindowTopBorder,rObject.m_oPopupWindowTopBorderUiElemType);rObject.m_oPopupWindowTopRightCornerUiElemType=new Olive.UiElemType.PopupWindowTopRightCorner();rObject.registerUiElemType(OwcUiElem_PopupWindowTopRightCorner,rObject.m_oPopupWindowTopRightCornerUiElemType);rObject.m_oPopupWindowContentRightBorderUiElemType=new Olive.UiElemType.PopupWindowContentRightBorder();rObject.registerUiElemType(OwcUiElem_PopupWindowContentRightBorder,rObject.m_oPopupWindowContentRightBorderUiElemType);rObject.m_oPopupWindowBottomRightCornerUiElemType=new Olive.UiElemType.PopupWindowBottomRightCorner();rObject.registerUiElemType(OwcUiElem_PopupWindowBottomRightCorner,rObject.m_oPopupWindowBottomRightCornerUiElemType);rObject.m_oPopupWindowBottomBorderUiElemType=new Olive.UiElemType.PopupWindowBottomBorder();rObject.registerUiElemType(OwcUiElem_PopupWindowBottomBorder,rObject.m_oPopupWindowBottomBorderUiElemType);rObject.m_oPopupWindowBottomLeftCornerUiElemType=new Olive.UiElemType.PopupWindowBottomLeftCorner();rObject.registerUiElemType(OwcUiElem_PopupWindowBottomLeftCorner,rObject.m_oPopupWindowBottomLeftCornerUiElemType);rObject.m_oPopupWindowContentLeftBorderUiElemType=new Olive.UiElemType.PopupWindowContentLeftBorder();rObject.registerUiElemType(OwcUiElem_PopupWindowContentLeftBorder,rObject.m_oPopupWindowContentLeftBorderUiElemType);}
function OwcPopupWindow_parseControlHtml()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);oHtmlElement=this.HtmlElement;DHTML.addCssClassToElem(oHtmlElement,OwcCssClass_PopupWindow);this.m_oWindowOptions=new Olive.Data.PopupWindowOptions();this.m_oMoveDragger=new Olive.MoveDragger();var nZIndex=DHTML.getStyle(oHtmlElement,"zIndex");nZIndex=(nZIndex=="")?0:nZIndex;this.m_oWindowOptions.setZIndex(nZIndex);var sTitle=DHTML.getAttr(oHtmlElement,Olive.Controls.PopupWindow.attributes.Caption);if(!sTitle)
sTitle="";this.m_oWindowOptions.setTitle(sTitle);var nMaximalWidthPercent=DHTML.getAttrNumber(this.HtmlElement,Olive.Controls.attributes.MaximalWidthPercent,0);if(nMaximalWidthPercent&&!isNaN(nMaximalWidthPercent))
{this.m_oWindowOptions.setMaximalWidthPercent(nMaximalWidthPercent);}
var nMaximalHeightPercent=DHTML.getAttrNumber(this.HtmlElement,Olive.Controls.attributes.MaximalHeightPercent,0);if(nMaximalHeightPercent&&!isNaN(nMaximalHeightPercent))
{this.m_oWindowOptions.setMaximalHeightPercent(nMaximalHeightPercent);}
this.m_oMoveDragger.m_oControlElem=oHtmlElement;this.m_sContentType=DHTML.getAttr(oHtmlElement,Olive.Controls.PopupWindow.attributes.ContentType);if(this.m_sContentType&&!(this.m_sContentType=="HTML"||this.m_sContentType=="URL"))
{throw DHTML.newError(0,"Popup Window content type is invalid. This attribute supports only for 'HTML' or 'URL' values.");}
else if(!(this.m_sContentType)||this.m_sContentType=="")
{this.m_sContentType="URL";}
var bCreateFrame=DHTML.getAttrBoolean(oHtmlElement,Olive.Controls.PopupWindow.attributes.CreateFrame,true);if(bCreateFrame)
{var bPreserveContent=DHTML.getAttrBoolean(oHtmlElement,Olive.Controls.PopupWindow.attributes.PreserveContent,true);this.createWindowFrame(bPreserveContent);}}
function OwcPopupWindow_initControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.init();}
function OwcPopupWindow_createWindowFrame(bPreserveContent)
{var oControl=(this.getControlType?this:OwcGetControlFromHtmlElem(this));if(!oControl)
{return;}
var oHtmlElement=this.HtmlElement;var sContentHtml="";if(bPreserveContent)
{sContentHtml=DHTML.getInnerHtml(oHtmlElement);}
var sTitle=this.m_oWindowOptions.getTitle();var sInnerHtml="<div class='"+OwcCssClass_PopupWindowFrame+" "+OwcCssClass_PopupWindowResizable+"'>";sInnerHtml+="<div class='"+OwcCssClass_PopupWindowFrameTop+"'>";sInnerHtml+="<div "+Olive.Controls.attributes.Ui+"="+OwcUiElem_PopupWindowTopLeftCorner+" class='"+OwcCssClass_PopupWindowTopLeftCorner+"'></div>";sInnerHtml+="<div "+Olive.Controls.attributes.Ui+"="+OwcUiElem_PopupWindowTopBorder+" class='"+OwcCssClass_PopupWindowTopBorder+"'></div>";sInnerHtml+="<div "+Olive.Controls.attributes.Ui+"="+OwcUiElem_PopupWindowTopRightCorner+" class='"+OwcCssClass_PopupWindowTopRightCorner+"'></div>";sInnerHtml+="</div>";sInnerHtml+="<div class='"+OwcCssClass_PopupWindowFrameContent+"'>";sInnerHtml+="<div "+Olive.Controls.attributes.Ui+"="+OwcUiElem_PopupWindowContentLeftBorder+" class='"+OwcCssClass_PopupWindowContentLeftBorder+"'></div>";sInnerHtml+="<div class='"+OwcCssClass_PopupWindowContent+"'>";sInnerHtml+="<div "+Olive.Controls.attributes.Ui+"="+OwcUiElem_PopupWindowCaption+" class='"+OwcCssClass_PopupWindowCaption+"'>";sInnerHtml+="<span  "+Olive.Controls.attributes.Ui+"= '"+OwcUiElem_PopupWindowTitle+"' class='"+OwcCssClass_PopupWindowTitle+"'>"+sTitle+"</span><div class='"+OwcCssClass_PopupWindowDragArea+"'></div>";sInnerHtml+="<button "+Olive.Controls.attributes.Ui+"="+OwcUiElem_PopupWindowCloseButton+" class='"+OwcCssClass_PopupWindowClose+"'></button>";sInnerHtml+="</div>";sInnerHtml+="<div "+Olive.Controls.attributes.Ui+"="+OwcUiElem_PopupWindowClient+" class='"+OwcCssClass_PopupWindowClient+"'>";if(this.m_sContentType=="HTML")
sInnerHtml+=sContentHtml;sInnerHtml+="</div>";sInnerHtml+="<div "+Olive.Controls.attributes.Ui+"="+OwcUiElem_PopupWindowMask+" class='"+OwcCssClass_PopupWindowMask+"'></div>";sInnerHtml+="</div>";sInnerHtml+="<div "+Olive.Controls.attributes.Ui+"="+OwcUiElem_PopupWindowContentRightBorder+" class='"+OwcCssClass_PopupWindowContentRightBorder+"'></div>";sInnerHtml+="</div>";sInnerHtml+="<div class='"+OwcCssClass_PopupWindowFrameBottom+"'>";sInnerHtml+="<div "+Olive.Controls.attributes.Ui+"="+OwcUiElem_PopupWindowBottomLeftCorner+" class='"+OwcCssClass_PopupWindowBottomLeftCorner+"'></div>";sInnerHtml+="<div "+Olive.Controls.attributes.Ui+"="+OwcUiElem_PopupWindowBottomBorder+" class='"+OwcCssClass_PopupWindowBottomBorder+"'></div>";sInnerHtml+="<div "+Olive.Controls.attributes.Ui+"="+OwcUiElem_PopupWindowBottomRightCorner+" class='"+OwcCssClass_PopupWindowBottomRightCorner+"'></div>";sInnerHtml+="</div>";sInnerHtml+="</div>";DHTML.pasteHtmlContent(oHtmlElement,sInnerHtml);}
function OwcPopupWindow_init(oWindowOptions)
{if(oWindowOptions&&JScript.Type.IsInstanceOf(oWindowOptions,"Olive.Data.PopupWindowOptions"))
{this.m_oWindowOptions=oWindowOptions;}
this._applyWindowOptions();}
Olive.Controls.PopupWindow.getPopUpWindowControl=function getPopUpWindowControl(oWindow)
{var oCtrl=null;if(!oWindow.name||oWindow.name==""||!oWindow.parent||!oWindow.parent.OlivePage)
return oCtrl;var sWindowName=oWindow.name;if(sWindowName.indexOf(Olive.Controls.PopupWindow.WindowNamePrefix)!=0)
return oCtrl;var sCtrlName=sWindowName.substring(Olive.Controls.PopupWindow.WindowNamePrefix.length);oCtrl=oWindow.parent.OlivePage.getControlOnPage(sCtrlName);return oCtrl;}
Olive.Controls.PopupWindow.findPopupWindowControl=function findPopupWindowControl(rOpenerWindow,sTarget,oWindowOptions)
{var oWindowObj=rOpenerWindow;if(JScript.Type.IsInstanceOf(rOpenerWindow,"Olive.Controls.PopupWindow")){oWindowObj=rOpenerWindow.OlivePage.getBrowserWindow();}
var oCtrl=null;do
{var oPageTop=Olive.Page.GetPageForWindow(oWindowObj);oCtrl=oPageTop.getControlOnPage(sTarget);if(!oCtrl&&sTarget&&(sTarget.toUpperCase().indexOf("SW_")==0))
oCtrl=oPageTop.getControlOnPage(sTarget.substring(3));if(oCtrl)
{var winOptions=oCtrl.getWindowOptions();if(oWindowOptions.m_sTitle&&winOptions.m_sTitle!=oWindowOptions.m_sTitle){winOptions.setTitle(oWindowOptions.m_sTitle);}}
if(oWindowObj.parent&&oWindowObj.parent!=oWindowObj&&oWindowObj.parent.document.body&&Olive.Page.GetPageForWindow(oWindowObj.parent))
oWindowObj=oWindowObj.parent;else
oWindowObj=null;}while(!oCtrl&&oWindowObj)
if(oCtrl)
oCtrl.init(oWindowOptions);return oCtrl;}
Olive.Controls.PopupWindow.createNavigationWindow=function(oParentWindow,sTarget,oWindowOptions)
{var TopWindow=oParentWindow;if(oParentWindow.top&&oParentWindow.top!=TopWindow)
{if(oParentWindow.top.document.body&&Olive.Page.GetPageForWindow(oParentWindow.top))
{TopWindow=oParentWindow.top;}
else
{while(TopWindow.parent&&TopWindow.parent!=TopWindow&&TopWindow.parent.document.body&&Olive.Page.GetPageForWindow(TopWindow.parent))
{TopWindow=TopWindow.parent;}}}
var TopDocument=TopWindow.document;var TopPage=Olive.Page.GetPageForWindow(TopWindow);var oWindowHtmlElement=TopDocument.createElement("div");oWindowHtmlElement.setAttribute("owc:control","PopupWindow");oWindowHtmlElement.setAttribute("id",sTarget);oWindowHtmlElement.setAttribute("owc:contenttype","URL");oWindowHtmlElement.setAttribute("owc:createframe","true");oWindowHtmlElement=TopDocument.body.appendChild(oWindowHtmlElement);TopPage.parseHtmlElem(oWindowHtmlElement,TopPage);var oWindowControl=OwcGetControlFromHtmlElem(oWindowHtmlElement);oWindowControl.initControl();oWindowControl.init(oWindowOptions);return oWindowControl;}
function OwcPopupWindow_show()
{var oControl=(this.getControlType?this:OwcGetControlFromHtmlElem(this));if(!oControl)
{return;}
oControl.closed=false;oControl.HtmlElement.style.visibility="visible";oControl.HtmlElement.style.display="block";}
function OwcPopupWindow_hide()
{var oControl=(this.getControlType?this:OwcGetControlFromHtmlElem(this));if(!oControl)
{return;}
oControl.HtmlElement.style.visibility="hidden";oControl.HtmlElement.style.display="none";}
function OwcPopupWindow_close()
{if(this.closed)
return;var oPage=this.getOwnerPage();if(oPage&&oPage.m_oKeyBoardEventsDispatcher)
oPage.m_oKeyBoardEventsDispatcher.unregisterKeyListener(this);this.deactivate();DHTML.detachEvent(this.HtmlElement,"mousedown",OwcPopupWindow_DHTML_onMouseDown);this.opener=null;this.m_popupInfo=null;this.hide();this.closed=true;if(this.m_sContentType=="URL")
{oPage=this.OlivePage;if(oPage&&oPage.m_oKeyBoardEventsDispatcher)
oPage.m_oKeyBoardEventsDispatcher.unregisterKeyListener(this);if(oPage&&oPage.terminate)
{oPage.terminate();}
var rIframe=getChildObjectByTag(this.HtmlElement,"iframe",0);if(rIframe)
{rIframe.src="";}}
else
{if(this.opener&&this.opener.OlivePage)
this.opener.OlivePage.removePopup(this);}}
function OwcPopupWindow_openInternal(rOpenerWindow,sUrl,sFeatures,bReplace,oPopupInfo)
{if(!rOpenerWindow)
return;this.opener=rOpenerWindow;this.m_popupInfo=oPopupInfo;if(sUrl!=null&&this.m_sContentType=="URL")
{this.navigateTo(sUrl);}
this.activate();this.show();this.closed=false;}
function OwcPopupWindow_startCatchKeyBoardEvents(oPage)
{if(oPage.m_oKeyBoardEventsDispatcher)
oPage.m_oKeyBoardEventsDispatcher.pushActiveKeyListener(this,this.keyBoardEventsHandler);}
function OwcPopupWindow_keyBoardEventsHandler(oEvent)
{if(!oEvent)
return;switch(oEvent.type)
{case"keypress":if(oEvent.keyCode!=27)
return;break;default:return;}
if(this.isActive())
this.close();}
function OwcPopupWindow_open(sUrl,oWindowOptionsNameOrRef,oArguments,oCallbackOnClose,bOwcPopup)
{if(!this.OlivePage)
return null;return this.OlivePage.openPopup(sUrl,oWindowOptionsNameOrRef,oArguments,oCallbackOnClose,bOwcPopup)}
function OwcPopupWindow_getPopupArguments()
{if(!this.m_popupInfo)
return null;return this.m_popupInfo.popupArguments;}
function OwcPopupWindow_getContentActiveWindowsManager()
{var oPage=this.OlivePage;if(oPage&&Olive.IActiveWindowsManager.IsImplementedBy(oPage))
return oPage;return null;}
function OwcPopupWindow_getOwnerActiveWindowsManager()
{var oPage=this.getOwnerPage();if(oPage&&Olive.IActiveWindowsManager.IsImplementedBy(oPage))
return oPage;return null;}
function OwcPopupWindow_focus()
{var oPage=this.getOwnerPage();if(this.OlivePage)
oPage=this.OlivePage;if(oPage)
oPage.getBrowserWindow().focus();}
function OwcPopupWindow_activate()
{var oActiveWindowsManager=this.getOwnerActiveWindowsManager();if(oActiveWindowsManager)
oActiveWindowsManager.registerWindow(this);}
function OwcPopupWindow_deactivate()
{var oActiveWindowsManager=this.getOwnerActiveWindowsManager();if(oActiveWindowsManager)
oActiveWindowsManager.unregisterWindow(this);}
function OwcPopupWindow_onWindowActivated()
{this.focus();this.changeState(true,Olive.IState.State.Active,Olive.IState.State.ActiveMask,true);var oPage=this.getOwnerPage();this.startCatchKeyBoardEvents(oPage);DHTML.addCssClassToElem(this.HtmlElement,OwcCssClass_PopupWindowActive);DHTML.detachEvent(this.HtmlElement,"mousedown",OwcPopupWindow_DHTML_onMouseDown);}
function OwcPopupWindow_onWindowDeactivated()
{this.changeState(false,Olive.IState.State.Active,Olive.IState.State.ActiveMask,true);var oActiveChildWindowsManager=this.getContentActiveWindowsManager();if(oActiveChildWindowsManager)
oActiveChildWindowsManager.unregisterAllWindows();var oPage=this.getOwnerPage();if(oPage&&oPage.m_oKeyBoardEventsDispatcher)
oPage.m_oKeyBoardEventsDispatcher.unregisterKeyListener(this);DHTML.removeCssClassFromElem(this.HtmlElement,OwcCssClass_PopupWindowActive);DHTML.attachEvent(this.HtmlElement,"mousedown",OwcPopupWindow_DHTML_onMouseDown);}
function OwcPopupWindow_DHTML_onMouseDown(oEvent)
{var oControl=OwcGetControlFromHtmlElem(this);if(oControl&&oControl.activate)
oControl.activate();}
function OwcPopupWindow_isActive()
{return this.isStateSet(Olive.IState.State.Active);}
function OwcPopupWindow_getWindowOptions()
{return this.m_oWindowOptions;}
function OwcPopupWindow_setResizable(bIsResizable)
{var oPopupWindowFrame=getChildObjsByTag(this.HtmlElement,"div")[0];if(bIsResizable)
{if(oPopupWindowFrame)
DHTML.addCssClassToElem(oPopupWindowFrame,OwcCssClass_PopupWindowResizable);if(this.getUiElement(OwcUiElem_PopupWindowTopLeftCorner))
this.m_oPopupWindowTopLeftCornerUiElemType.enableResize(this,this.getUiElement(OwcUiElem_PopupWindowTopLeftCorner));if(this.getUiElement(OwcUiElem_PopupWindowTopBorder))
this.m_oPopupWindowTopBorderUiElemType.enableResize(this,this.getUiElement(OwcUiElem_PopupWindowTopBorder));if(this.getUiElement(OwcUiElem_PopupWindowTopRightCorner))
this.m_oPopupWindowTopRightCornerUiElemType.enableResize(this,this.getUiElement(OwcUiElem_PopupWindowTopRightCorner));if(this.getUiElement(OwcUiElem_PopupWindowContentRightBorder))
this.m_oPopupWindowContentRightBorderUiElemType.enableResize(this,this.getUiElement(OwcUiElem_PopupWindowContentRightBorder));if(this.getUiElement(OwcUiElem_PopupWindowBottomRightCorner))
this.m_oPopupWindowBottomRightCornerUiElemType.enableResize(this,this.getUiElement(OwcUiElem_PopupWindowBottomRightCorner));if(this.getUiElement(OwcUiElem_PopupWindowBottomBorder))
this.m_oPopupWindowBottomBorderUiElemType.enableResize(this,this.getUiElement(OwcUiElem_PopupWindowBottomBorder));if(this.getUiElement(OwcUiElem_PopupWindowBottomLeftCorner))
this.m_oPopupWindowBottomLeftCornerUiElemType.enableResize(this,this.getUiElement(OwcUiElem_PopupWindowBottomLeftCorner));if(this.getUiElement(OwcUiElem_PopupWindowContentLeftBorder))
this.m_oPopupWindowContentLeftBorderUiElemType.enableResize(this,this.getUiElement(OwcUiElem_PopupWindowContentLeftBorder));}
else
{if(oPopupWindowFrame)
DHTML.removeCssClassFromElem(oPopupWindowFrame,OwcCssClass_PopupWindowResizable);if(this.getUiElement(OwcUiElem_PopupWindowTopLeftCorner))
this.m_oPopupWindowTopLeftCornerUiElemType.disableResize(this,this.getUiElement(OwcUiElem_PopupWindowTopLeftCorner));if(this.getUiElement(OwcUiElem_PopupWindowTopBorder))
this.m_oPopupWindowTopBorderUiElemType.disableResize(this,this.getUiElement(OwcUiElem_PopupWindowTopBorder));if(this.getUiElement(OwcUiElem_PopupWindowTopRightCorner))
this.m_oPopupWindowTopRightCornerUiElemType.disableResize(this,this.getUiElement(OwcUiElem_PopupWindowTopRightCorner));if(this.getUiElement(OwcUiElem_PopupWindowContentRightBorder))
this.m_oPopupWindowContentRightBorderUiElemType.disableResize(this,this.getUiElement(OwcUiElem_PopupWindowContentRightBorder));if(this.getUiElement(OwcUiElem_PopupWindowBottomRightCorner))
this.m_oPopupWindowBottomRightCornerUiElemType.disableResize(this,this.getUiElement(OwcUiElem_PopupWindowBottomRightCorner));if(this.getUiElement(OwcUiElem_PopupWindowBottomBorder))
this.m_oPopupWindowBottomBorderUiElemType.disableResize(this,this.getUiElement(OwcUiElem_PopupWindowBottomBorder));if(this.getUiElement(OwcUiElem_PopupWindowBottomLeftCorner))
this.m_oPopupWindowBottomLeftCornerUiElemType.disableResize(this,this.getUiElement(OwcUiElem_PopupWindowBottomLeftCorner));if(this.getUiElement(OwcUiElem_PopupWindowContentLeftBorder))
this.m_oPopupWindowContentLeftBorderUiElemType.disableResize(this,this.getUiElement(OwcUiElem_PopupWindowContentLeftBorder));}}
function OwcPopupWindow_setZIndex(nZIndex)
{var oControl=(this.getControlType?this:OwcGetControlFromHtmlElem(this));if(!oControl)
{return;}
oControl.HtmlElement.style.zIndex=nZIndex;}
function OwcPopupWindow_getZIndex()
{var oControl=(this.getControlType?this:OwcGetControlFromHtmlElem(this));if(!oControl)
{return;}
return oControl.HtmlElement.style.zIndex;}
function OwcPopupWindow_navigateTo(sURL)
{var oContentElem=this._getWindowClientHtmlElement();var sInnerHtml="<iframe src='"+sURL+"' frameborder='0' class='"+OwcCssClass_PopupWindowContentArea+"' name='"+Olive.Controls.PopupWindow.WindowNamePrefix+this.HtmlElement.id+"'></iframe>";DHTML.pasteHtmlContent(oContentElem,sInnerHtml);}
function OwcPopupWindow_getWindowClientHtmlElement()
{var oClientElem=this.getUiElement(OwcUiElem_PopupWindowClient);if(!oClientElem)
oClientElem=this.HtmlElement;return oClientElem;}
function OwcPopupWindow_setWindowTitle(sTitle)
{var oTitleElem=this.getUiElement(OwcUiElem_PopupWindowTitle);if(oTitleElem)
DHTML.pasteHtmlContent(oTitleElem,sTitle);}
function OwcPopupWindow_applyWindowOptions()
{if(!this.m_oWindowOptions)
return;this.setResizable(this.m_oWindowOptions.getIsResizable());this.setZIndex(this.m_oWindowOptions.getZIndex());this._setWindowTitle(this.m_oWindowOptions.getTitle());this.setHeight(this.m_oWindowOptions.getHeight());this.setWidth(this.m_oWindowOptions.getWidth());this.setLeft(this.m_oWindowOptions.getLeft());this.setTop(this.m_oWindowOptions.getTop());}
function OwcPopupWindow_getWindowParentSize()
{var oParentHtmlElem=DHTML.getOffsetParent(this.HtmlElement);if(!oParentHtmlElem)
oParentHtmlElem=DHTML.getRootElement();var size={width:oParentHtmlElem.clientWidth,height:oParentHtmlElem.clientHeight};return size;}
function OwcPopupWindow_getWindowSizeLimits(nMaximalWidthPercentOverride,nMaximalHeightPercentOverride)
{var parentSize=this.getWindowParentSize();var oOptions=this.getWindowOptions();var nMaximalWidthPercent=oOptions.getMaximalWidthPercent();if(nMaximalWidthPercentOverride&&nMaximalWidthPercentOverride>nMaximalWidthPercent)
{nMaximalWidthPercent=nMaximalWidthPercentOverride;}
var nMaximalHeightPercent=oOptions.getMaximalHeightPercent();if(nMaximalHeightPercentOverride&&nMaximalHeightPercentOverride>nMaximalHeightPercent)
{nMaximalHeightPercent=nMaximalHeightPercentOverride;}
var limits={minWidth:oOptions.getMinimalWidth(),maxWidth:Math.round(parentSize.width*0.01*nMaximalWidthPercent),minHeight:oOptions.getMinimalHeight(),maxHeight:Math.round(parentSize.height*0.01*nMaximalHeightPercent)}
return limits;}
function OwcPopupWindow_autoSize(nNewClientWidth,nNewClientHeight,nMaximalWidthPercentOverride,nMaximalHeightPercentOverride)
{var oClientElem=this._getWindowClientHtmlElement();var oWindowElem=this.HtmlElement;var nWindowWidth=DHTML.getElemWidth(oWindowElem);var nWindowHeight=DHTML.getElemHeight(oWindowElem);var nClientWidth=DHTML.getElemWidth(oClientElem);var nClientHeight=DHTML.getElemHeight(oClientElem);var nFrameWidth=nWindowWidth-nClientWidth;var nFrameHeight=nWindowHeight-nClientHeight;var limits=this.getWindowSizeLimits(nMaximalWidthPercentOverride,nMaximalHeightPercentOverride);var nNewWindowWidth=nNewClientWidth+nFrameWidth;var nNewWindowHeight=nNewClientHeight+nFrameHeight;var nScrollBarSize=26;if(nNewWindowWidth>limits.maxWidth&&(nNewWindowHeight+nScrollBarSize)<=limits.maxHeight)
nNewWindowHeight+=nScrollBarSize;if(nNewWindowHeight>limits.maxHeight&&(nNewWindowWidth+nScrollBarSize)<=limits.maxWidth)
nNewWindowWidth+=nScrollBarSize;if(nNewWindowWidth<limits.minWidth)
nNewWindowWidth=limits.minWidth;if(nNewWindowWidth>limits.maxWidth)
nNewWindowWidth=limits.maxWidth;if(nNewWindowHeight<limits.minHeight)
nNewWindowHeight=limits.minHeight;if(nNewWindowHeight>limits.maxHeight)
nNewWindowHeight=limits.maxHeight;var nNewWindowLeft=0;var nNewWindowTop=0;var oOptions=this.getWindowOptions();var parentSize=this.getWindowParentSize();var bCenterWindow=true;if(bCenterWindow)
{var nNewWindowLeft=Math.round((parentSize.width-nNewWindowWidth)/2);var nNewWindowTop=Math.round((parentSize.height-nNewWindowHeight)/2);}
else
{var nNewWindowLeft=oWindowElem.offsetLeft;var nNewWindowTop=oWindowElem.offsetTop;var nMinLeft=0;var nMaxLeft=parentSize.width-nNewWindowWidth;var nMinTop=0;var nMaxTop=parentSize.height-nNewWindowHeight;if(nNewWindowLeft<nMinLeft)
nNewWindowLeft=nMinLeft;if(nNewWindowLeft>nMaxLeft)
nNewWindowLeft=nMaxLeft;if(nNewWindowTop<nMinTop)
nNewWindowTop=nMinTop;if(nNewWindowTop>nMaxTop)
nNewWindowTop=nMaxTop;}
DHTML.setElemWidth(oWindowElem,nNewWindowWidth);DHTML.setElemHeight(oWindowElem,nNewWindowHeight);oWindowElem.style.left=String(nNewWindowLeft)+"px";oWindowElem.style.top=String(nNewWindowTop)+"px";}
function OwcPopupWindow_setLeft(nNewX)
{if(isNaN(nNewX))
return;var oWindowElem=this.HtmlElement;var nCurrentLeft=this.HtmlElement.offsetLeft;var nValidOffset=this.getValidLeftOffset(nCurrentLeft,nNewX-nCurrentLeft);nNewX=nCurrentLeft+nValidOffset;oWindowElem.style.left=String(nNewX)+"px";}
function OwcPopupWindow_setTop(nNewY)
{if(isNaN(nNewY))
return;var oWindowElem=this.HtmlElement;var nCurrentTop=this.HtmlElement.offsetTop;var nValidOffset=this.getValidTopOffset(nCurrentTop,nNewY-nCurrentTop);nNewY=nCurrentTop+nValidOffset;oWindowElem.style.top=String(nNewY)+"px";}
function OwcPopupWindow_getValidLeftOffset(nCurrentLeft,nOffset)
{var oWindowElem=this.HtmlElement;var oOptions=this.getWindowOptions();var minWidth=oOptions.getMinimalWidth();var parentSize=this.getWindowParentSize();var nWindowWidth=Math.max(DHTML.getElemWidth(oWindowElem),minWidth);var nNewX=nCurrentLeft+nOffset;var nNewOffset=0;if(nNewX<minWidth-nWindowWidth)
nNewX=minWidth-nWindowWidth;if(nNewX>parentSize.width-minWidth)
nNewX=parentSize.width-minWidth;nNewOffset=nNewX-nCurrentLeft;return nNewOffset;}
function OwcPopupWindow_getValidTopOffset(nCurrentTop,nOffset)
{var oWindowElem=this.HtmlElement;var oOptions=this.getWindowOptions();var minHeight=oOptions.getMinimalHeight();var parentSize=this.getWindowParentSize();var nNewY=nCurrentTop+nOffset;var nNewOffset=0;if(nNewY<0)
nNewY=0;if(nNewY>parentSize.height-minHeight)
nNewY=parentSize.height-minHeight;nNewOffset=nNewY-nCurrentTop;return nNewOffset;}
function OwcPopupWindow_getValidWidthOffset(nCurrentWidth,nOffset)
{var limits=this.getWindowSizeLimits();var nNewWindowWidth=nCurrentWidth+nOffset;var nNewOffset=0;if(nNewWindowWidth<limits.minWidth)
nNewWindowWidth=limits.minWidth;if(nNewWindowWidth>limits.maxWidth)
nNewWindowWidth=limits.maxWidth;nNewOffset=nNewWindowWidth-nCurrentWidth;if(nOffset==0||nNewOffset/nOffset<0)
nNewOffset=0;return nNewOffset;}
function OwcPopupWindow_getValidHeightOffset(nCurrentHeight,nOffset)
{var limits=this.getWindowSizeLimits();var nNewWindowHeight=nCurrentHeight+nOffset;var nNewOffset=0;if(nNewWindowHeight<limits.minHeight)
nNewWindowHeight=limits.minHeight;if(nNewWindowHeight>limits.maxHeight)
nNewWindowHeight=limits.maxHeight;nNewOffset=nNewWindowHeight-nCurrentHeight;if(nOffset==0||nNewOffset/nOffset<0)
nNewOffset=0;return nNewOffset;}
function OwcPopupWindow_setWidth(nNewWindowWidth)
{if(isNaN(nNewWindowWidth))
return;var oWindowElem=this.HtmlElement;var limits=this.getWindowSizeLimits();if(nNewWindowWidth<limits.minWidth)
nNewWindowWidth=limits.minWidth;if(nNewWindowWidth>limits.maxWidth)
nNewWindowWidth=limits.maxWidth;DHTML.setElemWidth(oWindowElem,nNewWindowWidth);}
function OwcPopupWindow_setHeight(nNewWindowHeight)
{if(isNaN(nNewWindowHeight))
return;var oWindowElem=this.HtmlElement;var limits=this.getWindowSizeLimits();if(nNewWindowHeight<limits.minHeight)
nNewWindowHeight=limits.minHeight;if(nNewWindowHeight>limits.maxHeight)
nNewWindowHeight=limits.maxHeight;DHTML.setElemHeight(oWindowElem,nNewWindowHeight);}
JScript.Type.RegisterClass("Olive.Controls.PopupWindow",Olive.Controls.PopupWindow,Olive.Controls.Control,[Olive.IUiElements]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.PopupWindow,Olive.Controls.PopupWindow);}