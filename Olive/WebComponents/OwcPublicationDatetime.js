
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.PublicationList="publicationlist";Olive.Controls.controlTypeNames.YearList="yearlist";Olive.Controls.controlTypeNames.MonthList="monthlist";if(!Olive.Controls.PublicationList)
{Olive.Controls.PublicationList=function OwcControlPublicationList()
{}
Olive.Controls.PublicationList.DefaultValue="";Olive.Controls.PublicationList.DeclareType=function OwcControlPublicationList_DeclareType()
{this.DeclareField("m_sPublication",Olive.Controls.PublicationList.DefaultValue);this.OverrideMethod("parseControlHtmlAttr",OwcPublicationList_parseControlHtmlAttr);this.OverrideMethod("contentCanLoad",OwcPublicationList_contentCanLoad);this.OverrideMethod("getHtmlValueElement",OwcPublicationList_getHtmlValueElement);this.OverrideMethod("postHtmlContentPaste",OwcPublicationList_postHtmlContentPaste);this.DeclareMethod("createContentItem",OwcPublicationList_createContentItem);}
function OwcPublicationList_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_oValue)
this.m_sPublication=this.m_oValue;}
function OwcPublicationList_contentCanLoad()
{return true;}
function OwcPublicationList_getHtmlValueElement()
{var oSelect=getChildObjectByTag(this.HtmlElement,"select",0);if(oSelect)
return oSelect;return this.HtmlElement;}
function OwcPublicationList_postHtmlContentPaste()
{oHtmlElement=this.getHtmlValueElement();if(oHtmlElement)
{this.attachBehavior(oHtmlElement);if(this.m_sPublication)
{this.setValue(this.m_sPublication);this.m_sPublication=null;}
else
this.updateData();}}
function OwcPublicationList_createContentItem()
{return null;}
JScript.Type.RegisterClass("Olive.Controls.PublicationList",Olive.Controls.PublicationList,Olive.Controls.Value,[Olive.Controls.IDataBound,Olive.Controls.IValue]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.PublicationList,Olive.Controls.PublicationList);}
if(!Olive.Controls.YearList)
{Olive.Controls.YearList=function OwcControlYearList()
{}
Olive.Controls.YearList.DefaultValue="";Olive.Controls.YearList.DeclareType=function OwcControlYearList_DeclareType()
{this.DeclareField("m_sYear",Olive.Controls.YearList.DefaultValue);this.OverrideMethod("parseControlHtmlAttr",OwcYearList_parseControlHtmlAttr);this.OverrideMethod("parseValue",OwcYearList_parseValue);this.OverrideMethod("validateValue",OwcYearList_validateValue);this.OverrideMethod("getHtmlValueElement",OwcYearList_getHtmlValueElement);this.OverrideMethod("postHtmlContentPaste",OwcYearList_postHtmlContentPaste);this.DeclareMethod("createContentItem",OwcYearList_createContentItem);}
function OwcYearList_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_oValue)
this.m_sYear=this.m_oValue;}
function OwcYearList_parseValue(oValue)
{if(typeof(oValue)=="string"&&oValue.toLowerCase()=="")
return oValue;else
{if(this.BaseClassMethod)
return this.BaseClassMethod.apply(this,arguments);}}
function OwcYearList_validateValue(oValue)
{if(typeof(oValue)=="string"&&oValue.toLowerCase()=="")
return true;else
{if(this.BaseClassMethod)
return this.BaseClassMethod.apply(this,arguments);}}
function OwcYearList_getHtmlValueElement()
{var oSelect=getChildObjectByTag(this.HtmlElement,"select",0);if(oSelect)
return oSelect;return this.HtmlElement;}
function OwcYearList_postHtmlContentPaste()
{oHtmlElement=this.getHtmlValueElement();if(oHtmlElement)
{this.attachBehavior(oHtmlElement);if(this.m_sYear)
{this.setValue(this.m_sYear);this.m_sYear=null;}
else
this.updateData();}}
function OwcYearList_createContentItem(oContentItem,sPublication)
{if(!this.m_oContentItem)
this.m_oContentItem=new Olive.ContentItem.YearRange();this.m_oContentItem.m_sPublication=sPublication;return this.m_oContentItem;}
JScript.Type.RegisterClass("Olive.Controls.YearList",Olive.Controls.YearList,Olive.Controls.Year,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.YearList,Olive.Controls.YearList);}
if(!Olive.Controls.MonthList)
{Olive.Controls.MonthList=function OwcControlMonthList()
{}
Olive.Controls.MonthList.DefaultValue="";Olive.Controls.MonthList.DeclareType=function OwcControlMonthList_DeclareType()
{this.DeclareField("m_sMonth",Olive.Controls.MonthList.DefaultValue);this.OverrideMethod("parseControlHtmlAttr",OwcMonthList_parseControlHtmlAttr);this.OverrideMethod("parseValue",OwcMonthList_parseValue);this.OverrideMethod("validateValue",OwcMonthList_validateValue);this.OverrideMethod("getHtmlValueElement",OwcMonthList_getHtmlValueElement);this.OverrideMethod("postHtmlContentPaste",OwcMonthList_postHtmlContentPaste);this.DeclareMethod("createContentItem",OwcMonthList_createContentItem);}
function OwcMonthList_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_oValue)
this.m_sMonth=this.parseValue(this.m_oValue);}
function OwcMonthList_parseValue(oValue)
{if(typeof(oValue)=="string"&&oValue.toLowerCase()=="")
return oValue;else
{if(this.BaseClassMethod)
return this.BaseClassMethod.apply(this,arguments);}}
function OwcMonthList_validateValue(oValue)
{if(typeof(oValue)=="string"&&oValue.toLowerCase()=="")
return true;else
{if(this.BaseClassMethod)
return this.BaseClassMethod.apply(this,arguments);}}
function OwcMonthList_getHtmlValueElement()
{var oSelect=getChildObjectByTag(this.HtmlElement,"select",0);if(oSelect)
return oSelect;return this.HtmlElement;}
function OwcMonthList_postHtmlContentPaste()
{oHtmlElement=this.getHtmlValueElement();if(oHtmlElement)
{this.attachBehavior(oHtmlElement);if(this.m_sMonth)
{this.setValue(this.m_sMonth);this.m_sMonth=null;}
else
this.updateData();}}
function OwcMonthList_loadContent(oContentItem)
{if(oContentItem)
this.m_oContentItem=oContentItem;this.contentLoad();}
function OwcMonthList_createContentItem(oContentItem,sYear)
{if(!this.m_oContentItem)
this.m_oContentItem=new Olive.ContentItem.MonthRange();if(oContentItem&&oContentItem.getPublication)
this.m_oContentItem.m_sPublication=oContentItem.getPublication();this.m_oContentItem.m_sYear=sYear;return this.m_oContentItem;}
JScript.Type.RegisterClass("Olive.Controls.MonthList",Olive.Controls.MonthList,Olive.Controls.Month,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.MonthList,Olive.Controls.MonthList);}