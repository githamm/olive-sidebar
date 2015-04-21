
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.Magnifier="magnifier";var OwcMagnifierAttr_MagPercent=Olive.Controls.xmlns+"MagPercent";var OwcMagnifierAttr_MaxHeight=Olive.Controls.xmlns+"MaxHeight";var OwcMagnifierAttr_MaxWidth=Olive.Controls.xmlns+"MaxWidth";var OwcMagnifierAttr_SelfHiding=Olive.Controls.xmlns+"SelfHiding";if(!Olive.Controls.Magnifier)
{Olive.Controls.Magnifier=function OwcMagnifier()
{};Olive.Controls.Magnifier.DeclareType=function OwcMagnifier_DeclareType()
{this.OverrideMethod("bindHtmlElement",OwcMagnifier_bindHtmlElement);this.OverrideMethod("parseControlHtmlAttr",OwcMagnifier_parseControlHtml);this.OverrideMethod("onImageLoaded",OwcMagnifier_onImageLoaded);this.OverrideMethod("getMaxImageWidth",OwcMagnifier_getMaxImageWidth);this.OverrideMethod("setMaxImageWidth",OwcMagnifier_setMaxImageWidth);this.OverrideMethod("getMaxImageHeight",OwcMagnifier_getMaxImageHeight);this.OverrideMethod("setMaxImageHeight",OwcMagnifier_setMaxImageHeight);this.DeclareField("m_nMagPercent",100);this.DeclareField("m_nMaxImageHeight",150);this.DeclareField("m_nMaxImageWidth",150);this.DeclareField("m_x",0);this.DeclareField("m_y",0);this.DeclareField("m_bSelfHiding",true);this.DeclareField("m_oSrcElem",null);this.DeclareField("m_bAttachedFromHtmlElement",false);this.DeclareMethod("setMagPercent",OwcMagnifier_setMagPercent);this.DeclareMethod("setMaxHeight",OwcMagnifier_setMaxImageHeight);this.DeclareMethod("setMaxWidth",OwcMagnifier_setMaxImageWidth);this.DeclareMethod("hide",OwcMagnifier_hide);this.DeclareMethod("initFloater",OwcMagnifier_initFloater);this.DeclareMethod("placeFloater",OwcMagnifier_placeFloater);this.DeclareMethod("onShow",OwcMagnifier_onShow);this.DeclareMethod("onMouseMove",OwcMagnifier_onMouseMove);};function OwcMagnifier_bindHtmlElement(oHtmlElement)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(!this.WebPage.getMagnifier())
this.WebPage.setMagnifier(this);this.HtmlElement.style.visibility="hidden";this.HtmlElement.style.zIndex=-10;}
function OwcMagnifier_parseControlHtml()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var nMagPercent=DHTML.getAttrNumber(this.HtmlElement,OwcMagnifierAttr_MagPercent);if(nMagPercent)
this.setMagPercent(nMagPercent);var nMaxHeight=DHTML.getAttrNumber(this.HtmlElement,OwcMagnifierAttr_MaxHeight);if(nMaxHeight)
this.setMaxHeight(nMaxHeight);var nMaxWidth=DHTML.getAttrNumber(this.HtmlElement,OwcMagnifierAttr_MaxWidth);if(nMaxWidth)
this.setMaxWidth(nMaxWidth);this.m_bSelfHiding=DHTML.getAttrBoolean(this.HtmlElement,OwcMagnifierAttr_SelfHiding,true);}
function OwcMagnifier_onShow(oEvent,bAttachFromHtmlElement)
{if(this.m_bSelfHiding)
{var oSrcElem=getEventTarget(oEvent);var oParentControl=OwcGetControlFromHtmlElem(oSrcElem,!bAttachFromHtmlElement);if(Olive.Controls.IImageViewer.IsImplementedBy(oParentControl))
oSrcElem=oParentControl.HtmlElement;else if(bAttachFromHtmlElement)
{var bIsCanvas=(oSrcElem&&(oSrcElem.nodeType==1)&&(oSrcElem.tagName.toLowerCase()=="canvas"));if(DHTML.isImageElem(oSrcElem)||bIsCanvas)
oSrcElem=getParent(oSrcElem);if(!oSrcElem)
return;}
else if(!DHTML.isImageElem(oSrcElem))
{var oParentImageViewer=Olive.Object.FindParentImplementing(Olive.Controls.IImageViewer,oParentImageViewer);if(oParentImageViewer)
oSrcElem=oParentImageViewer.HtmlElement;else
{oSrcElem=getChildObjectByTag(oSrcElem,"img",0);if(!oSrcElem)
return;}}
this.m_oSrcElem=oSrcElem;var oMagnifierControl=this;this.m_bAttachedFromHtmlElement=!!bAttachFromHtmlElement;DHTML.attachEvent(document,"mousemove",function(){OwcMagnifier_onMouseMove.apply(oMagnifierControl,arguments);});}
if(!this.m_oSrcElem)
return;var posX=this.m_oSrcElem.offsetLeft-getScrollOffsetX();var posY=this.m_oSrcElem.offsetTop-getScrollOffsetY();if(this.m_oSrcElem.offsetParent)
{var oParentOffset=this.m_oSrcElem.offsetParent;while(oParentOffset.tagName.toLowerCase()!="body")
{var oControl=OwcGetControlFromHtmlElem(oParentOffset,false);if(oControl&&oControl.controlType==Olive.Controls.controlTypeNames.PopupWindow)
break;posX+=oParentOffset.offsetLeft-oParentOffset.scrollLeft;posY+=oParentOffset.offsetTop-oParentOffset.scrollTop;oParentOffset=oParentOffset.offsetParent;}}
this.m_x=posX;this.m_y=posY;this.initFloater();}
function OwcMagnifier_hide()
{if(this.m_bSelfHiding&&this.m_oSrcElem&&this.isImageLoaded())
{var sSrcUrl="";var oSrcControl=OwcGetControlFromHtmlElem(this.m_oSrcElem,false);if(Olive.Controls.IImageViewer.IsImplementedBy(oSrcControl))
sSrcUrl=oSrcControl.getImageUrl();else if(this.m_bAttachedFromHtmlElement)
{var oSrcElem=getChildObjectByTag(this.m_oSrcElem,"img",0);if(oSrcElem)
sSrcUrl=oSrcElem.src;}
else if(DHTML.isImageElem(this.m_oSrcElem))
sSrcUrl=this.m_oSrcElem.src;if(sSrcUrl)
{var sMagnifierUrl=this.getImageUrl();if(sMagnifierUrl.indexOf(sSrcUrl)==-1)
return;}}
this.HtmlElement.style.visibility="hidden";this.HtmlElement.style.zIndex=-10;}
function OwcMagnifier_onMouseMove(oEvent)
{var oTarget=getEventTarget(oEvent);if(DHTML.isDescendent(oTarget,this.m_oSrcElem))
return;if(DHTML.isDescendent(oTarget,this.HtmlElement))
return;this.hide();DHTML.detachEvent(document,"mousemove",OwcMagnifier_onMouseMove);this.m_bAttachedFromHtmlElement=false;}
function OwcMagnifier_initFloater()
{var sSrcUrl="";var oSrcControl=OwcGetControlFromHtmlElem(this.m_oSrcElem,false);if(Olive.Controls.IImageViewer.IsImplementedBy(oSrcControl))
sSrcUrl=oSrcControl.getImageUrl();else if(this.m_bAttachedFromHtmlElement)
{var oSrcElem=getChildObjectByTag(this.m_oSrcElem,"img",0);if(oSrcElem)
sSrcUrl=oSrcElem.src;}
else if(DHTML_isImageElem(this.m_oSrcElem))
sSrcUrl=this.m_oSrcElem.src;if(sSrcUrl)
this.setImageUrl(sSrcUrl,true);}
function OwcMagnifier_onImageLoaded()
{this.setFitMode(Olive.Controls.IZoomable.FitMode.None);this.setZoom(this.m_nMagPercent/100);if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.placeFloater();}
function OwcMagnifier_placeFloater(bResized,oImg)
{var isHebrew=isRTLDoc(getOwnerDoc(this.HtmlElement));var windowInnerWidth=getInnerWidth();var windowInnerHeight=getInnerHeight();var origImgWidth=this.getImageWidth();var origImgHeight=this.getImageHeight();var minFloaterWidth=origImgWidth;var minFloaterHeight=origImgHeight;var nContentWidth=origImgWidth*this.getZoom();var nContentHeight=origImgHeight*this.getZoom();var floaterWidth=Math.max(this.HtmlElement.offsetWidth,nContentWidth+6);if(isHebrew)
this.m_x+=this.m_oSrcElem.offsetWidth-floaterWidth;this.m_x+=(isHebrew?-35:35);if((this.m_x+floaterWidth)>windowInnerWidth)
this.m_x-=(floaterWidth);if(this.m_x<0)
this.m_x=0;var floaterHeight=Math.max(this.HtmlElement.offsetHeight,nContentHeight+6);if((this.m_y+floaterHeight+35)>windowInnerHeight)
{this.m_y-=(floaterHeight-35);if(this.m_y<0)
this.m_y=0;}
else
this.m_y+=35;this.HtmlElement.style.left=this.m_x+getScrollOffsetX()+"px";this.HtmlElement.style.top=this.m_y+getScrollOffsetY()+"px";this.HtmlElement.style.zIndex=10;this.HtmlElement.style.visibility="visible";}
function OwcMagnifier_getMaxImageWidth()
{var nAbsoluteMaxWidth=getInnerWidth()*0.8;var nMaxWidth=0;if(this.BaseClassMethod)
nMaxWidth=this.BaseClassMethod.apply(this,arguments);else
nMaxWidth=Olive.Controls.ImageViewer.prototype.getMaxImageWidth.apply(this,arguments);if(nMaxWidth<0)
return nAbsoluteMaxWidth;return Math.min(nAbsoluteMaxWidth,nMaxWidth);}
function OwcMagnifier_setMaxImageWidth(nWidth)
{var nMaxWidth=((nWidth<150)?150:nWidth);if(this.BaseClassMethod)
this.BaseClassMethod.call(this,nMaxWidth);else
Olive.Controls.ImageViewer.prototype.setMaxImageWidth.call(this,nMaxWidth);}
function OwcMagnifier_getMaxImageHeight()
{var nAbsoluteMaxHeight=getInnerHeight()*0.8;var nMaxHeight=0;if(this.BaseClassMethod)
nMaxHeight=this.BaseClassMethod.apply(this,arguments);else
nMaxHeight=Olive.Controls.ImageViewer.prototype.getMaxImageHeight.apply(this,arguments);if(nMaxHeight<0)
return nAbsoluteMaxHeight;return Math.min(nAbsoluteMaxHeight,nMaxHeight);}
function OwcMagnifier_setMaxImageHeight(nHeight)
{var nMaxHeight=((nHeight<150)?150:nHeight);if(this.BaseClassMethod)
this.BaseClassMethod.call(this,nMaxHeight);else
Olive.Controls.ImageViewer.prototype.setMaxImageHeight.call(this,nMaxHeight);}
function OwcMagnifier_setMagPercent(percent)
{var nMagPercent=Math.min(200,Math.max(50,percent));if(!isNaN(nMagPercent))
this.m_nMagPercent=nMagPercent;}
JScript.Type.RegisterClass("Olive.Controls.Magnifier",Olive.Controls.Magnifier,Olive.Controls.ImageViewer);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Magnifier,Olive.Controls.Magnifier);}