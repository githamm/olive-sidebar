var isRelease = true;
var g_sOwcPath=owcGetCommonerPath();owcBindWebComponentsSDK(g_sOwcPath);function owcBindWebComponentsSDK(sOwcHRef)
{if(typeof(isRelease)=="undefined"||isRelease==false)
{owcBindWebSdkScript(sOwcHRef,"JScriptCore.js");owcBindWebSdkScript(sOwcHRef,"DomCore.js");owcBindWebSdkScript(sOwcHRef,"OwcDHTML.js");owcBindWebSdkScript(sOwcHRef,"OwcGlobals.js");owcBindWebSdkScript(sOwcHRef,"OwcXHTTP.js");owcBindWebSdkScript(sOwcHRef,"OwcCommon.js");owcBindWebSdkScript(sOwcHRef,"OwcControl.js");owcBindWebSdkScript(sOwcHRef,"OwcDataExchange.js");owcBindWebSdkScript(sOwcHRef,"OwcUiElements.js");owcBindWebSdkScript(sOwcHRef,"OwcDataBound.js");owcBindWebSdkScript(sOwcHRef,"OwcBindings.js");owcBindWebSdkScript(sOwcHRef,"OwcWindow.js");owcBindWebSdkScript(sOwcHRef,"OwcPopupWindow.js");owcBindWebSdkScript(sOwcHRef,"OwcPage.js");owcBindWebSdkScript(sOwcHRef,"OwcControlCommon.js");owcBindWebSdkScript(sOwcHRef,"OwcBookmarkServices.js");owcBindWebSdkScript(sOwcHRef,"OwcAppBase.js");owcBindWebSdkScript(sOwcHRef,"OwcImageViewer.js");owcBindWebSdkScript(sOwcHRef,"OwcList.js");owcBindWebSdkScript(sOwcHRef,"OwcTree.js");owcBindWebSdkScript(sOwcHRef,"OwcFolderTree.js");owcBindWebSdkScript(sOwcHRef,"OwcDocList.js");owcBindWebSdkScript(sOwcHRef,"OwcThumbnail.js");owcBindWebSdkScript(sOwcHRef,"OwcToc.js");owcBindWebSdkScript(sOwcHRef,"OwcMenu.js");owcBindWebSdkScript(sOwcHRef,"OwcViewer.js");owcBindWebSdkScript(sOwcHRef,"OwcSearchParams.js");owcBindWebSdkScript(sOwcHRef,"OwcErrorCodesTable.js");owcBindWebSdkScript(sOwcHRef,"OwcPageBind.js");}
owcBindWebSdkStylesheet(sOwcHRef,"Layout/OwcDefault.css");if(owcIsInternetExplorer())
owcBindWebSdkStylesheet(sOwcHRef,"Layout/OwcDefault-IE.css");else
owcBindWebSdkStylesheet(sOwcHRef,"Layout/OwcDefault-NonIE.css");}
function owcBindWebSdkScript(sOwcHRef,sScriptFile)
{if(document.readyState!="complete")
document.writeln('<script language="javascript" type="text/javascript" src="'+sOwcHRef+sScriptFile+'"></script>');else if(!owcIsWebSdkScriptIncluded(sOwcHRef,sScriptFile))
owcAddScript(sOwcHRef+sScriptFile);}
function owcBindWebSdkStylesheet(sOwcHRef,sStylesheetFile)
{if(document.readyState!="complete")
document.writeln('<link type="text/css" rel="stylesheet" href="'+sOwcHRef+sStylesheetFile+'"></link>');else if(!owcIsWebSdkStylesheetIncluded(sOwcHRef,sStylesheetFile))
owcAddStylesheet(sOwcHRef+sStylesheetFile);}
function owcIsWebSdkScriptIncluded(sOwcHRef,sScriptFile)
{return(owcFindScriptPosition(sOwcHRef+sScriptFile)>=0);}
function owcIsWebSdkStylesheetIncluded(sOwcHRef,sStylesheetFile)
{return(owcFindStylesheetPosition(sOwcHRef+sStylesheetFile)>=0);}
function owcGetCommonerPath()
{var oScript=null;var sPath="/Olive/WebComponents/";var arrScripts=document.scripts;if(!document.scripts)
arrScripts=owcGetElementsByTagName("script");for(var iScript=0;iScript<arrScripts.length;++iScript)
{if(arrScripts[iScript].src.indexOf("OwcBind.js")>=0)
{sPath=arrScripts[iScript].src;sPath=sPath.replace("OwcBind.js","");break;}}
return sPath;}
function owcAddScript(uri,afterIndex)
{var oScriptElem=document.createElement("script");oScriptElem.language="javascript";oScriptElem.type="text/javascript";oScriptElem.src=uri;var headElem=owcGetElementsByTagName("head")[0];return headElem.appendChild(oScriptElem);}
function owcFindScriptPosition(uri,relativeMatch)
{var sMatchRef=uri.toLowerCase().replace(/\\/,"/");var arrScripts=document.scripts;if(!document.scripts)
arrScripts=owcGetElementsByTagName("script");for(var iScript=0;iScript<arrScripts.length;++iScript)
{var scriptSrc=arrScripts[iScript].src.toLowerCase().replace(/\\/,"/");if(relativeMatch)
{var pos=scriptSrc.indexOf(sMatchRef);if(pos>=0&&((pos+sMatchRef.length)==scriptSrc.length))
return iScript;}
else if(scriptSrc==sMatchRef)
return iScript;}
return-1;}
function owcAddStylesheet(uri,afterIndex)
{var oStylesheetElem=document.createElement("link");oStylesheetElem.rel="Stylesheet";oStylesheetElem.type="text/css";oStylesheetElem.href=uri;var headElem=owcGetElementsByTagName("head")[0];return headElem.appendChild(oStylesheetElem);}
function owcFindStylesheetPosition(uri,relativeMatch)
{var sMatchRef=uri.toLowerCase().replace(/\\/,"/");var arrStylesheets=document.links;if(!document.links)
arrStylesheets=owcGetElementsByTagName("link");for(var iStylesheet=0;iStylesheet<arrStylesheets.length;++iStylesheet)
{var elemStylesheet=arrStylesheets[iStylesheet];if(elemStylesheet.tagName.toLowerCase()!="link")
continue;var stylesheetSrc=elemStylesheet.href.toLowerCase().replace(/\\/,"/");if(relativeMatch)
{var pos=stylesheetSrc.indexOf(sMatchRef);if(pos>=0&&((pos+sMatchRef.length)==stylesheetSrc.length))
return iStylesheet;}
else if(stylesheetSrc==sMatchRef)
return iStylesheet;}
return-1;}
function owcGetElementsByTagName(name)
{if(!name||name=="")
return null;if(document.getElementsByTagName)
return document.getElementsByTagName(name);else if(document.all.tags)
return document.all.tags(name);return null;}
function owcIsInternetExplorer()
{return(typeof(ActiveXObject)!="undefined");}
function owcGetIEVersion()
{var verNum=0
if(navigator.appName=="Microsoft Internet Explorer"){var sVer=window.navigator.userAgent;var msie=sVer.indexOf("MSIE ");if(msie>0){verNum=parseFloat(sVer.substring(msie+5,sVer.indexOf(";",msie)));}}
return verNum;}
var Locale_Default={MonthName:["January","February","March","April","May","June","July","August","September","October","November","December"],AbbrMonthName:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],WeekDayName:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],AbbrWeekDayName:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],OneLetterWeekDayName:["S","M","T","W","T","F","S"],AmPm:["AM","PM"],ShortDateFormat:"%m/%d/%Y"};Date.prototype.getDaysInMonth=Date_getDaysInMonth;Date.prototype.getDayOfYear=Date_getDayOfYear;Date.prototype.getWeekOfYear=Date_getWeekOfYear;Date.prototype.formatDateTimeString=Date_formatDateTimeString;Date.prototype.parseDateTimeString=Date_parseDateTimeString;function Date_getDaysInMonth()
{var nMonth=this.getMonth();var nDays;if(nMonth==1)
{var nYear=this.getFullYear();nDays=((!(nYear%4)&&((nYear%100)||!(nYear%400)))?29:28);}
else
nDays=((nMonth==3||nMonth==5||nMonth==8||nMonth==10)?30:31);return nDays;}
function Date_getDayOfYear()
{var dateJanFirst=new Date(this);dateJanFirst.setDate(1);dateJanFirst.setMonth(0);var nDiff=this-dateJanFirst;return Math.floor(nDiff/86400000)+1;}
function Date_getWeekOfYear(nFirstWeekDay)
{var dateJanFirst=new Date(this.getFullYear(),0,1);var nOffset=dateJanFirst.getDay();if(nFirstWeekDay)
nOffset+=(nOffset<nFirstWeekDay?7:0)-nFirstWeekDay;return Math.floor((nOffset+this.getDayOfYear())/7)+1;}
function Date_formatDateTimeString(sFormat,oLocale)
{return formatDateTimeString(sFormat,this,oLocale);}
function Date_parseDateTimeString(sDate,sFormat,oLocale)
{var oDate=parseDateString(sDate,sFormat,oLocale);return oDate;}
function formatDateTimeString(sFormat,oDate,oLocale)
{var reFmtCode=/%\#?([aAbBcdgHIjmMpSUwWxXyYzZ%])/;var sRemained=sFormat;var sResult="";var nValue;if(!oLocale)
oLocale=Locale_Default;while(sRemained.length>0)
{var arrMatches=sRemained.match(reFmtCode);if(!arrMatches)
{sResult+=sRemained;break;}
sResult+=sRemained.substr(0,arrMatches.index);var bLeadingZeros=(sRemained.charAt(arrMatches.index+1)!="#");switch(arrMatches[1])
{case"a":sResult+=oLocale.AbbrWeekDayName[oDate.getDay()];break;case"A":sResult+=oLocale.WeekDayName[oDate.getDay()];break;case"o":sResult+=oLocale.OneLetterWeekDayName[oDate.getDay()];break;case"b":sResult+=oLocale.AbbrMonthName[oDate.getMonth()];break;case"B":sResult+=oLocale.MonthName[oDate.getMonth()];break;case"c":sResult+=oDate.toLocaleString();break;case"d":nValue=oDate.getDate();if(bLeadingZeros&&nValue<10)
sResult+="0"+String(nValue);else
sResult+=String(nValue);break;case"g":sResult+=oDate.toGMTString();break;case"H":nValue=oDate.getHours();if(bLeadingZeros&&nValue<10)
sResult+="0"+String(nValue);else
sResult+=String(nValue);break;case"I":nValue=oDate.getHours();if(nValue>12)
nValue-=12;if(nValue<10)
sResult+="0"+String(nValue);else
sResult+=String(nValue);break;case"j":nValue=oDate.getDayOfYear();if(bLeadingZeros&&nValue<10)
sResult+="0"+String(nValue);else
sResult+=String(nValue);break;case"m":nValue=oDate.getMonth()+1;if(bLeadingZeros&&nValue<10)
sResult+="0"+String(nValue);else
sResult+=String(nValue);break;case"M":nValue=oDate.getMinutes();if(bLeadingZeros&&nValue<10)
sResult+="0"+String(nValue);else
sResult+=String(nValue);break;case"p":sResult+=oLocale.AmPm[oDate.getHours()<12?0:1];break;case"S":nValue=oDate.getSeconds();if(bLeadingZeros&&nValue<10)
sResult+="0"+String(nValue);else
sResult+=String(nValue);break;case"U":sResult+=String(oDate.getWeekOfYear(0));break;case"w":sResult+=String(oDate.getDay());break;case"W":sResult+=String(oDate.getWeekOfYear(1));break;case"x":sResult+=oDate.toLocaleDateString();break;case"X":sResult+=oDate.toLocaleTimeString();break;case"y":nValue=(oDate.getFullYear()%100);if(bLeadingZeros&&nValue<10)
sResult+="0"+String(nValue);else
sResult+=String(nValue);break;case"Y":sResult+=String(oDate.getFullYear());break;case"z":nValue=-1*(oDate.getTimezoneOffset()/60);sResult+=(nValue<0?String(nValue):"+"+String(nValue));break;case"%":sResult+="%";break;}
sRemained=sRemained.substr(arrMatches.index+arrMatches[0].length);}
return sResult;}
function parseDateString(sDate,sFormat,oLocale)
{var reFmtCode=/%\#?([aAbBcdgHIjmMpSUwWxXyYzZ%])/;var sRemained=sFormat;var StringNonDatePatern="";var arrFormatTerms=new Array();var arrDateElements=new Array();var sDateRemained=sDate;var nValue;if(!oLocale)
oLocale=Locale_Default;while(sRemained.length>0||sDateRemained.length>0)
{var arrMatches=sRemained.match(reFmtCode);if(!arrMatches)
{StringNonDatePatern+=sRemained;var sDateElement=sDateRemained.substring(0,sDateRemained.length-sRemained.length);arrDateElements.push(sDateElement);sDateRemained="";break;}
NonDateFragment=sRemained.substr(0,arrMatches.index);StringNonDatePatern+=NonDateFragment+"(.+)";if(NonDateFragment)
{if(sDateRemained.indexOf(NonDateFragment)>0)
{var sDateElement=sDateRemained.substring(0,sDateRemained.indexOf(NonDateFragment));arrDateElements.push(sDateElement);sDateRemained=sDateRemained.substring(sDateRemained.indexOf(NonDateFragment)+NonDateFragment.length);}
else
{break;}}
var cDateTerm=arrMatches[1];arrFormatTerms.push(cDateTerm);sRemained=sRemained.substr(arrMatches.index+arrMatches.length);}
if(!arrDateElements||arrFormatTerms.length!=arrDateElements.length)
return null;var oDateStructure=new Object();for(iTerm=0;iTerm<arrFormatTerms.length;iTerm++)
{var sDateTerm=arrFormatTerms[iTerm];var sDateTermValue=arrDateElements[iTerm];ReadDateTerm(oDateStructure,sDateTerm,sDateTermValue);}
if(!((oDateStructure["fullyear"]||oDateStructure["year"])&&oDateStructure["month"]&&oDateStructure["date"]))
return null;var oDate=new Date('01/01/1900');if(oDateStructure["fullyear"])
oDate.setFullYear(oDateStructure["fullyear"]);if(oDateStructure["year"])
oDate.setYear(oDateStructure["year"]);if(oDateStructure["date"])
oDate.setDate(oDateStructure["date"]);if(oDateStructure["month"])
oDate.setMonth(oDateStructure["month"]-1);return oDate;}
function ReadDateTerm(oDateStructure,sType,sValue,oLocale)
{if(!oLocale)
oLocale=Locale_Default;var sDateMember=null;var nValue;var LocaleArr=null;switch(sType)
{case"a":nValue=Array_indexOf(oLocale.AbbrWeekDayName,sValue);break;case"b":LocaleArr=oLocale.AbbrMonthName+1;case"B":LocaleArr=oLocale.MonthName;nValue=Array_indexOf(LocaleArr,sValue)+1;case"m":nValue=parseInt(sValue,10);sDateMember="month";break;case"d":case"j":nValue=parseInt(sValue,10);sDateMember="date";break;case"y":nValue=parseInt(sValue,10);sDateMember="year";break;case"Y":nValue=parseInt(sValue,10);sDateMember="fullyear";break;}
if(sDateMember&&nValue!=undefined)
{oDateStructure[sDateMember]=nValue;}}
function String_parseBoolean(sValue,bDefault)
{if(!sValue)
return(bDefault?true:false);switch(sValue.toLowerCase())
{case"on":case"yes":case"true":case"1":return true;break;default:return false;}}
function String_parseInt(sValue,defaultVal)
{if("number"!=typeof defaultVal){defaultVal=null;}
if(!sValue){return defaultVal;}
var nVal=parseInt(sValue,10);if(isNaN(nVal)){return defaultVal;}else{return nVal;}}
function String_format(sFormat)
{return String_format_arg(sFormat,arguments,1);}
function String_format_arg(sFormat,oArguments,nStartFromArg)
{if(!sFormat)
return"";if(!oArguments)
{oArguments=new Array();nStartFromArg=0;}
var reFmtCode=/%(\d+)/;var sRemained=sFormat;var sResult="";--nStartFromArg;while(sRemained.length>0)
{var arrMatches=sRemained.match(reFmtCode);if(!arrMatches)
{sResult+=sRemained;break;}
sResult+=sRemained.substr(0,arrMatches.index);var nArgIndex=parseInt(arrMatches[1],10);if(nArgIndex>0)
{nArgIndex+=nStartFromArg;if(nArgIndex<oArguments.length)
sResult+=String(oArguments[nArgIndex]);}
sRemained=sRemained.substr(arrMatches.index+arrMatches.length);}
return sResult;}
function number_toPrecision(prec)
{var myValue=this.valueOf();var tempFactor=Math.pow(10,prec-1);return(Math.round(myValue*tempFactor)/tempFactor).toString();}
if(!Number.prototype.toPrecision)
{Number.prototype.toPrecision=number_toPrecision;}
function function_apply(oScope,args){var sarg=[];var rtrn,call;if(!oScope)
oScope=window;if(!args)
args=[];for(var i=0;i<args.length;i++){sarg[i]="args["+i+"]";}
call="oScope.__applyTemp__("+sarg.join(", ")+");";oScope.__applyTemp__=this;rtrn=eval(call);return rtrn;}
if(!Function.prototype.apply)
{Function.prototype.apply=function_apply;}
if(typeof(JScript_Timeout)=="undefined")
JScript_Timeout=new Object();if(!JScript_Timeout.m_nTimeoutUID)
JScript_Timeout.m_nTimeoutUID=0;if(!JScript_Timeout.m_oTimeoutDataCollection)
JScript_Timeout.m_oTimeoutDataCollection=new Object();if(!JScript_Timeout.setTimeout)
JScript_Timeout.setTimeout=JScript_Timeout_setTimeout;if(!JScript_Timeout.clearTimeout)
JScript_Timeout.clearTimeout=JScript_Timeout_clearTimeout;if(!JScript_Timeout.getTimeoutUID)
JScript_Timeout.getTimeoutUID=JScript_Timeout_getTimeoutUID;if(!JScript_Timeout.getTimeoutData)
JScript_Timeout.getTimeoutData=JScript_Timeout_getTimeoutData;function JScript_Timeout_setTimeout(cbkFunc,nTimeout,cbkThis,cbkArgs)
{var oTimeoutData=new Object();var sUID=this.getTimeoutUID();if(!cbkArgs)
cbkArgs=new Array();oTimeoutData.m_cbkThis=cbkThis;oTimeoutData.m_cbkFunc=cbkFunc;oTimeoutData.m_cbkArgs=cbkArgs;oTimeoutData.m_realTimeoutID=window.setTimeout("JScript_Timeout_callbackTimeout('"+sUID+"')",nTimeout);this.m_oTimeoutDataCollection[sUID]=oTimeoutData;return sUID;}
function JScript_Timeout_clearTimeout(sUID)
{var oTimeoutData=this.getTimeoutData(sUID);if(oTimeoutData)
window.clearTimeout(oTimeoutData.m_realTimeoutID);}
function JScript_Timeout_getTimeoutUID()
{var sUID=this.m_nTimeoutUID.toString();this.m_nTimeoutUID++;return sUID;}
function JScript_Timeout_getTimeoutData(sUID)
{var oTimeoutData=null;if(this.m_oTimeoutDataCollection[sUID])
{oTimeoutData=this.m_oTimeoutDataCollection[sUID];this.m_oTimeoutDataCollection[sUID]=null;delete(this.m_oTimeoutDataCollection[sUID]);}
return oTimeoutData;}
function JScript_Timeout_callbackTimeout(sUID)
{var oTimeoutData=JScript_Timeout.getTimeoutData(sUID);if(!oTimeoutData)
{Debug.trace("JScript_Timeout_callbackTimeout: timeout data for: "+sUID+" etry is empty");return;}
var cbkThis=oTimeoutData.m_cbkThis;var cbkFunc=oTimeoutData.m_cbkFunc;var cbkArgs=oTimeoutData.m_cbkArgs;if(typeof(cbkFunc)=="string")
eval(cbkFunc);else
cbkFunc.apply(cbkThis,cbkArgs);}
function JScript_isDate(oSrc)
{if(!oSrc)
return false;if(oSrc instanceof Date)
return true;if(typeof(oSrc)!="object")
return false;return("getFullYear"in oSrc);}
function Object_Clone_Normal(objSrc)
{if(!objSrc)
return null;if(JScript_isDate(objSrc))
return new Date(objSrc.valueOf());if(objSrc instanceof Function)
return objSrc;var objClone=new objSrc.constructor();for(var sProp in objSrc)
{var oSrcProp=objSrc[sProp];if(oSrcProp&&(typeof(oSrcProp)=="object"))
objClone[sProp]=Object_Clone_Normal(oSrcProp);else
objClone[sProp]=oSrcProp;}
return objClone;}
function Object_Clone_IE(objSrc)
{if(!objSrc)
return null;if(JScript_isDate(objSrc))
return new Date(objSrc.valueOf());if(objSrc instanceof Function)
return objSrc;var objClone=null;try
{objClone=new objSrc.constructor();}
catch(x)
{var objInterface=objSrc.constructor._olv_ti;var oMatch=objSrc.constructor.toString().match(/\s*function (.*)\(/);if(objInterface!=null)
oMatch=objInterface.name;else
oMatch=oMatch[1];eval("objClone = new "+oMatch+"();");}
for(var sProp in objSrc)
{var oSrcProp=objSrc[sProp];if(oSrcProp&&(typeof(oSrcProp)=="object")&&!(("apply"in oSrcProp)&&("length"in oSrcProp)))
objClone[sProp]=Object_Clone_IE(oSrcProp);else
objClone[sProp]=oSrcProp;}
return objClone;}
if(typeof(window.showModalDialog)!="undefined")
Object_Clone=Object_Clone_IE;else
Object_Clone=Object_Clone_Normal;function Object_CloneWithoutConstructor(objSrc,objClone)
{for(var sProp in objSrc)
{var oSrcProp=objSrc[sProp];if(!(typeof objClone[sProp]=="function"&&typeof objSrc[sProp]!="function")){if(oSrcProp&&(typeof(oSrcProp)=="object"))
objClone[sProp]=Object_Clone(oSrcProp);else
objClone[sProp]=oSrcProp;}}
return objClone;}
function Object_copyProperties(srcObject,targetObject,arrPropNames)
{if(!arrPropNames||arrPropNames.length<=0)
return;if(!srcObject||!targetObject)
return;for(var iName=0;iName<arrPropNames.length;iName++)
{var sPropName=arrPropNames[iName];var oValue=srcObject[sPropName];targetObject[sPropName]=oValue;}}
function Object_Destroy(rObject)
{for(var sProp in rObject)
rObject[sProp]=null;}
function Array_contains(rArray,vItem)
{return(Array_indexOf(rArray,vItem)>=0);}
function Array_indexOf(rArray,vItem)
{if(!rArray)
return-1;for(var i=0;i<rArray.length;++i)
if(rArray[i]==vItem)
return i;return-1;}
function Array_appendItem(rTrgArray,vItem)
{if(!vItem)
return rTrgArray;if(!rTrgArray)
{rTrgArray=new Array(1);rTrgArray[0]=vItem;}
else if(Array_indexOf(rTrgArray,vItem)<0)
rTrgArray.push(vItem);return rTrgArray;}
function Array_removeItem(rTrgArray,vItem)
{if(!rTrgArray||!vItem)
return-1;var iItemIndex=Array_indexOf(rTrgArray,vItem);if(iItemIndex>=0)
rTrgArray.splice(iItemIndex,1);return iItemIndex;}
function Array_removeItemByIndex(rTrgArray,iIndex)
{if(!rTrgArray||iIndex<0||iIndex>=rTrgArray.length)
return-1;rTrgArray.splice(iIndex,1);return iIndex;}
function Array_append(rTrgArray,vAppend)
{if(!vAppend)
return;if(vAppend instanceof Array)
{if(rTrgArray&&rTrgArray.length>0)
{for(var i=0;i<vAppend.length;++i)
rTrgArray=Array_appendItem(rTrgArray,vAppend[i]);}
else
rTrgArray=vAppend.slice(0);}
else
rTrgArray=Array_appendItem(rTrgArray,vAppend);return rTrgArray;}
function Array_remove(rTrgArray,vRemove)
{if(!vRemove||!rTrgArray||rTrgArray.length==0)
return rTrgArray;if(vRemove instanceof Array)
{for(var i=0;i<vRemove.length;++i)
Array_removeItem(rTrgArray,vRemove[i]);}
else
Array_removeItem(rTrgArray,vRemove);return rTrgArray;}
function Array_difference(array1,array2)
{if(!array1||!array2)
return array1;var arrDiff=null;for(var i=0;i<array1.length;++i)
{var vItem=array1[i];if(Array_indexOf(array2,vItem)<0)
arrDiff=Array_appendItem(arrDiff,vItem);}
return arrDiff;}
function EMail_validateAddress(sAddress)
{var reMailAddress=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*\.[\w-]{2,}$/;return reMailAddress.test(sAddress);}
function EMail_validateAddressList(sAddressList)
{var reMailAddressList=/^([\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*\.[\w-]{2,}[\s]*[;]*[\s]*)*$/;return reMailAddressList.test(sAddressList);}
function JScript_DeriveClass(rDerivedClass,rBaseClass)
{if(rDerivedClass.prototype instanceof rBaseClass)
return;var oPrevProto=rDerivedClass.prototype;rDerivedClass.prototype=new rBaseClass();for(var sProp in oPrevProto)
rDerivedClass.prototype[sProp]=oPrevProto[sProp];if("OwcEvents"in rDerivedClass.prototype)
{var arrEvents=Object_Clone(rDerivedClass.prototype.OwcEvents);rDerivedClass.prototype.OwcEvents=arrEvents;}
if("Implements"in rBaseClass.prototype)
{var arrImplements=new Array();for(var sInterface in rBaseClass.prototype.Implements)
arrImplements[sInterface]=rBaseClass.prototype.Implements[sInterface];rDerivedClass.prototype.Implements=arrImplements;}
rDerivedClass.prototype.constructor=oPrevProto.constructor;}
function Function_override(rObject,sMethodName,rOverrideFunction)
{if(!rOverrideFunction)
rOverrideFunction=this;var pfnBaseClassMethod=null;if((sMethodName in rObject)&&rObject[sMethodName])
pfnBaseClassMethod=rObject[sMethodName];rObject[sMethodName]=function()
{var oPrevBaseClassMethod=this.BaseClassMethod;this.BaseClassMethod=pfnBaseClassMethod;var retVal=rOverrideFunction.apply(this,arguments);this.BaseClassMethod=oPrevBaseClassMethod;if(!oPrevBaseClassMethod)
delete this["BaseClassMethod"];return retVal;}}
if(typeof(JScript)=="undefined")
JScript={};if(typeof(JScript.Type)=="undefined")
{JScript.Type={types:[],_declaring_type:null,_declaring_stack:[]};function TypeInfo(name,kind,scriptObject,flags)
{if(name!=undefined)
this.name=name;if(kind!=undefined)
this.kind=kind;if(flags!=undefined)
this.flags=flags;if(scriptObject!=undefined)
this.scriptObject=scriptObject;};TypeInfo.prototype.name="";TypeInfo.prototype.kind="";TypeInfo.prototype.flags=0;TypeInfo.prototype.scriptObject=null;TypeInfo.prototype.parent=null;TypeInfo.prototype.localName="";TypeInfo.prototype.baseTypes=null;TypeInfo.prototype.nestedTypes=null;TypeInfo.prototype.members=null;TypeInfo.prototype.resolved=false;TypeInfo.prototype.RegisterMember=function TypeInfo_RegisterMember(name,kind,scriptObject,flags)
{var oMemberInfo=new TypeInfo(JScript.Type.CombineName(this.name,name),kind,scriptObject,(flags?flags|TypeInfo.Flags.Member:TypeInfo.Flags.Member));if(!this.members)
this.members=[];this.members[name]=oMemberInfo;oMemberInfo.parent=this;oMemberInfo.localName=name;oMemberInfo.declared=true;if(this.kind==TypeInfo.Kind.Interface)
return oMemberInfo;if((this.kind==TypeInfo.Kind.Class)&&(oMemberInfo.flags&TypeInfo.Flags.Shared)==0)
oMemberInfo.ApplyOnScriptObject(this.scriptObject.prototype,false);else
oMemberInfo.ApplyOnScriptObject(this.scriptObject,false);return oMemberInfo;}
TypeInfo.prototype.ApplyOnScriptObject=function TypeInfo_ApplyOnScriptObject(scriptObject,bDynamic)
{if((this.flags&TypeInfo.Flags.Member)==0)
this.ApplyTypeOnScriptObject(scriptObject,bDynamic);else
this.ApplyMemberOnScriptObject(scriptObject,bDynamic);}
TypeInfo.prototype.ApplyTypeOnScriptObject=function TypeInfo_ApplyClassOnScriptObject(scriptObject,bDynamic)
{switch(this.kind)
{case TypeInfo.Kind.Class:if(scriptObject instanceof this.scriptObject)
return;break;case TypeInfo.Kind.Interface:if(this.scriptObject.IsImplementedBy(scriptObject))
return;break;}
if(this.baseTypes)
{for(var it in this.baseTypes)
if(this.baseTypes[it].ApplyTypeOnScriptObject)
this.baseTypes[it].ApplyTypeOnScriptObject(scriptObject,bDynamic);}
if(this.scriptObject.ImplementInterface)
this.scriptObject.ImplementInterface(scriptObject,bDynamic);else if(this.members)
{for(var it in this.members)
if(this.members[it].ApplyMemberOnScriptObject)
this.members[it].ApplyMemberOnScriptObject(scriptObject,bDynamic);if(this.kind==TypeInfo.Kind.Interface)
this.scriptObject.Register(scriptObject,bDynamic);}}
TypeInfo.prototype.ApplyMemberOnScriptObject=function TypeInfo_ApplyMemberOnScriptObject(scriptObject)
{if(this.kind==TypeInfo.Kind.Event||this.kind==TypeInfo.Kind.Command)
return;var sMemberName=this.localName;var member=this.scriptObject;if((this.flags&TypeInfo.Flags.Overrides)==TypeInfo.Flags.Overrides)
Function_override(scriptObject,sMemberName,member);else
{if((this.flags&TypeInfo.Flags.IfNotDefined)==TypeInfo.Flags.IfNotDefined)
{if((sMemberName in scriptObject)&&scriptObject[sMemberName]!=undefined&&member==null)
return;}
scriptObject[sMemberName]=member;}}
TypeInfo.prototype.AddBaseType=function TypeInfo_AddBaseType(tiBase)
{if(!this.baseTypes)
this.baseTypes=[];this.baseTypes.push(tiBase);return true;}
TypeInfo.prototype.AddInterface=function JScript_Type_AddInterface(tiInterface)
{if(!this.AddBaseType(tiInterface))
return;if(this.kind==TypeInfo.Kind.Class)
tiInterface.ApplyOnScriptObject(this.scriptObject.prototype,false);}
TypeInfo.prototype.ImplementInterface=function TypeInfo_ImplementInterface(rInterface)
{var tiInterface=rInterface._olv_ti;if(!tiInterface)
throw Olive.Errors.createError(Olive.Errors.Code.TypeInfoMissing,rInterface.Name);this.AddInterface(tiInterface);}
TypeInfo.prototype.DeclareField=function TypeInfo_DeclareField(sFieldName,vDefaultValue)
{return this.RegisterMember(sFieldName,TypeInfo.Kind.Field,vDefaultValue);}
TypeInfo.prototype.DeclareMethod=function TypeInfo_DeclareMethod(sMethodName,rFunction)
{if(!rFunction)
rFunction=null;return this.RegisterMember(sMethodName,TypeInfo.Kind.Method,rFunction,TypeInfo.Flags.IfNotDefined);}
TypeInfo.prototype.ReplaceMethod=function TypeInfo_ReplaceMethod(sMethodName,rFunction)
{return this.RegisterMember(sMethodName,TypeInfo.Kind.Method,(rFunction?rFunction:null),TypeInfo.Flags.Replaces);}
TypeInfo.prototype.OverrideMethod=function TypeInfo_OverrideMethod(sMethodName,rFunction)
{if(!rFunction)
return this.ReplaceMethod(sMethodName,null);return this.RegisterMember(sMethodName,TypeInfo.Kind.Method,rFunction,TypeInfo.Flags.Overrides);}
TypeInfo.prototype.DeclareEvent=function TypeInfo_DeclareEvent(sEventName,oEventsClass)
{var tiEvent=this.RegisterMember(sEventName,TypeInfo.Kind.Event,oEventsClass);if(oEventsClass.handlerProperty)
this.DeclareMethod(oEventsClass.handlerProperty,null);return tiEvent;}
TypeInfo.prototype.DeclareCommand=function TypeInfo_DeclareCommand(sCommandName,oCommandInfo)
{return this.RegisterMember(sCommandName,TypeInfo.Kind.Command,oCommandInfo);}
TypeInfo.prototype.FindMemberByHandler=function TypeInfoFindMemberNameByHandler(oHandler,scanBaseTypes)
{if(typeof(oHandler)=="string")
return this.FindMemberByName(oHandler,scanBaseTypes);if(typeof(oHandler)=="function")
return this.FindMemberByScriptObject(oHandler,scanBaseTypes);if((typeof(oHandler)=="object")&&(oHandler instanceof Delegate))
{if(oHandler.m_nType==Delegate.Type.Method)
return this.FindMemberByName(oHandler.m_oCallbackRef,scanBaseTypes);return this.FindMemberByScriptObject(oHandler.m_oCallbackRef,scanBaseTypes);}
return null;}
TypeInfo.prototype.FindMemberByScriptObject=function TypeInfo_FindMemberByScriptObject(scriptObject,scanBaseTypes)
{function MatchMemberByScriptObject(tiMember,scriptObject)
{return(tiMember.scriptObject==scriptObject);}
return this.FindMember(MatchMemberByScriptObject,scriptObject,scanBaseTypes);}
TypeInfo.prototype.FindMemberByName=function TypeInfo_FindMemberByName(name,scanBaseTypes)
{function MatchMemberByName(tiMember,name)
{return(tiMember.localName==name);}
return this.FindMember(MatchMemberByName,name,scanBaseTypes);}
TypeInfo.prototype.FindMember=function TypeInfo_FindMember(matcher,param,scanBaseTypes)
{if(this.members)
{for(var it in this.members)
{var tiMember=this.members[it];if(matcher.call(this,tiMember,param))
return tiMember;}}
if(!!this.baseTypes&&scanBaseTypes)
{for(var it in this.baseTypes)
{var tiMember=this.baseTypes[it].FindMember(matcher,param,true);if(tiMember)
return tiMember;}}
return null;}
TypeInfo.prototype.IsDerivedFrom=function TypeInfo_IsDerivedFrom(typeInfoBase){var typeName=(typeof(typeInfoBase)=="object")?typeInfoBase.name:typeInfoBase;if(this.name==typeName)
return true;if(!this.baseTypes)
return false;for(var index=0;index<this.baseTypes.length;++index){var baseType=this.baseTypes[index];if(baseType&&baseType.IsDerivedFrom(typeInfoBase))
return true;}
return false;}
TypeInfo.Kind={Namespace:"Namespace",Class:"Class",Interface:"Interface",Enum:"Enum",Field:"Field",Method:"Method",Event:"Event",Command:"Command"}
TypeInfo.Flags={Member:0x00000001,Shared:0x00000002,Overrides:0x00000004,IfNotDefined:0x00000008,Replaces:0x00000010}
JScript.Type.DeclareField=function JScript_Type_DeclareField(rClass,sFieldName,vDefaultValue)
{if(this._declaring_type&&!this._declaring_type.declared)
this._declaring_type.DeclareField(sFieldName,vDefaultValue);rClass[sFieldName]=vDefaultValue;};JScript.Type.DeclareMethod=function JScript_Type_DeclareMethod(rClass,sMethodName,rFunction)
{if(this._declaring_type&&!this._declaring_type.declared)
this._declaring_type.DeclareMethod(sMethodName,rFunction);if(!rFunction)
rFunction=null;if(!(sMethodName in rClass)||(typeof(rClass[sMethodName])==undefined)||(rFunction!=null))
rClass[sMethodName]=rFunction;};JScript.Type.ReplaceMethod=function JScript_Type_ReplaceMethod(rObject,sMethodName,rFunction)
{if(this._declaring_type&&!this._declaring_type.declared)
this._declaring_type.ReplaceMethod(sMethodName,rFunction);rObject[sMethodName]=(rFunction?rFunction:null);};JScript.Type.OverrideMethod=function JScript_Type_OverrideMethod(rObject,sMethodName,rFunction)
{if(this._declaring_type&&!this._declaring_type.declared)
this._declaring_type.OverrideMethod(sMethodName,rFunction);else
Function_override.apply(this,arguments);}
JScript.Type.CombineName=function JScript_Type_CombineName(sParentName,sName)
{if(!sName)
throw new Error(-1,"<sName> parameter is required and cannot be empty");if(!sParentName)
return sName;return sParentName+"."+sName;}
JScript.Type.GetParentNameFromFullName=function JScript_Type_GetParentNameFromFullName(sFullName)
{if(!sFullName)
return"";var nDotPos=sFullName.lastIndexOf(".");if(nDotPos<0)
return"";return sFullName.substring(0,nDotPos);}
JScript.Type.GetNameFromFullName=function JScript_Type_GetNameFromFullName(sFullName)
{if(!sFullName)
return"";var nDotPos=sFullName.lastIndexOf(".");if(nDotPos<0)
return sFullName;return sFullName.substring(nDotPos+1);}
JScript.Type.GetTypeInfo=function JScript_Type_GetTypeInfo(sTypeName)
{return JScript.Type.types[sTypeName];}
JScript.Type.GetObjectTypeInfo=function JScript_Type_GetObjectTypeInfo(oObject)
{if(!oObject||!oObject.constructor)
return null;return oObject.constructor._olv_ti;}
JScript.Type.GetObjectTypeInfoName=function JScript_Type_GetObjectTypeInfoName(oObject)
{var ti=JScript.Type.GetObjectTypeInfo(oObject);if(!ti)
return null;return ti.name;}
JScript.Type.RegisterType=function JScript_Type_RegisterType(sKind,sFullName,rJsObject,flags)
{if(!rJsObject)
rJsObject=eval(sFullName);var oTypeInfo=new TypeInfo(sFullName,sKind,rJsObject,flags);var sParentName=JScript.Type.GetParentNameFromFullName(sFullName);if(sParentName)
{oTypeInfo.localName=JScript.Type.GetNameFromFullName(sFullName);oTypeInfo.parent=JScript.Type.GetTypeInfo(sParentName);if(!oTypeInfo.parent)
throw Olive.Errors.createError(Olive.Errors.Code.UnknownType,sParentName,"registering "+sFullName+" "+sKind);if(!oTypeInfo.parent.nestedTypes)
oTypeInfo.parent.nestedTypes=[];oTypeInfo.parent.nestedTypes[oTypeInfo.localName]=oTypeInfo;}
else
oTypeInfo.localName=sFullName;JScript.Type.types[sFullName]=oTypeInfo;return oTypeInfo;}
JScript.Type.ApplyTypeOnScriptObject=function JScript_Type_ApplyTypeOnScriptObject(typeRef,scriptObject)
{var typeInfo=null;if(typeRef instanceof Interface)
typeInfo=JScript.Type.GetTypeInfo(typeRef.Name);else
typeInfo=typeRef._olv_ti;if(!typeInfo)
throw Olive.Errors.createError(Olive.Errors.Code.TypeInfoMissing,typeRef.toString());typeInfo.ApplyTypeOnScriptObject(scriptObject,true);}
JScript.Type.RegisterNamespace=function JScript_RegisterNamespace(sFullName,rNamespaceRef)
{if(!rNamespaceRef)
rNamespaceRef=eval(sFullName+" = { };");return JScript.Type.RegisterType(TypeInfo.Kind.Namespace,sFullName,rNamespaceRef);}
JScript.Type.RegisterEnum=function JScript_RegisterEnum(sFullName,rEnumRef)
{return JScript.Type.RegisterType(TypeInfo.Kind.Enum,sFullName,rEnumRef);}
JScript.Type.RegisterInterface=function JScript_RegisterInterface(sFullName,rInterfaceRef)
{return JScript.Type.RegisterType(TypeInfo.Kind.Interface,sFullName,rInterfaceRef);}
JScript.Type.RegisterClass=function JScript_RegisterClass(sFullClassName,rClassRef,rBaseClass,arrInterfaces,bDoNotApplyPrototype)
{if(!rClassRef)
rClassRef=eval(sFullClassName);var tiClass=JScript.Type.RegisterType(TypeInfo.Kind.Class,sFullClassName,rClassRef);rClassRef._olv_ti=tiClass;JScript.Type._startDeclareType(tiClass);if(rBaseClass)
JScript.Type.DeriveClass(rClassRef,rBaseClass);if(arrInterfaces)
{for(var it in arrInterfaces)
{if(typeof(arrInterfaces[it])=="object")
tiClass.ImplementInterface(arrInterfaces[it]);}}
if(rClassRef.DeclareType)
rClassRef.DeclareType.call(tiClass);if(!bDoNotApplyPrototype&&rClassRef.ApplyPrototype)
rClassRef.ApplyPrototype(rClassRef.prototype,false);JScript.Type._stopDeclareType(tiClass);return tiClass;}
JScript.Type.DeriveClass=function JScript_Type_DeriveClass(rDerivedClass,rBaseClass)
{if(rDerivedClass.prototype instanceof rBaseClass)
return;var oPrevProto=rDerivedClass.prototype;rDerivedClass.prototype=new rBaseClass();for(var sProp in oPrevProto)
rDerivedClass.prototype[sProp]=oPrevProto[sProp];if("OwcEvents"in rDerivedClass.prototype)
{var arrEvents=Object_Clone(rDerivedClass.prototype.OwcEvents);rDerivedClass.prototype.OwcEvents=arrEvents;}
if("Implements"in rBaseClass.prototype)
{var arrImplements=new Array();for(var sInterface in rBaseClass.prototype.Implements)
arrImplements[sInterface]=rBaseClass.prototype.Implements[sInterface];rDerivedClass.prototype.Implements=arrImplements;}
rDerivedClass.prototype.constructor=oPrevProto.constructor;var tiDerived=rDerivedClass._olv_ti;var tiBase=rBaseClass._olv_ti;if(!tiDerived)
throw Olive.Errors.createError(Olive.Errors.Code.TypeInfoMissing,rDerivedClass.toString());if(!tiBase)
throw Olive.Errors.createError(Olive.Errors.Code.TypeInfoMissing,rBaseClass.toString());tiDerived.AddBaseType(tiBase);}
JScript.Type.IsMemberExists=function JScript_Type_IsMemberExists(oObject,sMember)
{if(!sMember||!oObject||(typeof(oObject)!="object"))
return false;return(sMember in oObject);};JScript.Type.IsMethodDefined=function JScript_Type_IsMethodDefined(oObject,sMethodName)
{if(!this.IsMemberExists(oObject,sMethodName))
return false;var pfnMethod=oObject[sMethodName];if(!pfnMethod)
return false;return(typeof(pfnMethod)=="function");}
JScript.Type.IsDerivedFrom=function JScript_Type_IsDerivedFrom(sDerivedTypeName,sBaseTypeName)
{var oDerivedTypeInfo=JScript.Type.GetTypeInfo(sDerivedTypeName);var oBaseTypeInfo=JScript.Type.GetTypeInfo(sBaseTypeName);if(!oDerivedTypeInfo||!oBaseTypeInfo)
return false;return oDerivedTypeInfo.IsDerivedFrom(oBaseTypeInfo);}
JScript.Type.IsInstanceOf=function JScript_Type_IsInstanceOf(oObject,sTypeName)
{if(!sTypeName||!oObject||(typeof(oObject)!="object"))
return false;var oTypeInfo=JScript.Type.GetTypeInfo(sTypeName);if(!oTypeInfo)
return false;var oObjTypeInfo=JScript.Type.GetObjectTypeInfo(oObject);if(!oObjTypeInfo)
return false;return oObjTypeInfo.IsDerivedFrom(oTypeInfo);}
JScript.Type.IsEnumEntry=function JScript_Type_IsEnumEntry(oEnum,sEntry)
{if(!oEnum||(sEntry===undefined)||(sEntry===null))
return false;sEntry=sEntry.toLowerCase();for(var sProp in oEnum)
{if(oEnum[sProp].toLowerCase()==sEntry)
return true;}
return false;};JScript.Type._startDeclareType=function JScript_Type_startDeclareType(typeInfo)
{if(this._declaring_type)
this._declaring_stack.push(this._declaring_type);this._declaring_type=typeInfo;}
JScript.Type._stopDeclareType=function JScript_Type_stopDeclareType(typeInfo)
{if(this._declaring_type!=typeInfo)
throw"Internal error: \'"+typeInfo.name+"\' type is not being declared";typeInfo.declared=true;this._declaring_type=(this._declaring_stack.length>0?this._declaring_stack.pop():null);}}
function Delegate()
{}
Delegate.Type={Generic:"generic",Method:"method"};Delegate.ApplyPrototype=function Delegate_ApplyPrototype(rObject)
{rObject.m_nType=Delegate.Type.Generic;rObject.m_oThis=null;rObject.m_oCallbackRef=null;rObject.setCallback=Delegate_setCallback;rObject.matchHandler=Delegate_matchHandler;rObject.call=Delegate_Generic_call;rObject.apply=Delegate_Generic_apply;}
Delegate.CreateDelegate=function Delegate_CreateDelegate(oCallbackRef,oThis,nType)
{if(!oCallbackRef)
return null;if(nType==undefined)
nType=Delegate.Type.Generic;var oDelegate=new Delegate();oDelegate.setCallback(oCallbackRef,oThis,nType);return oDelegate;}
Delegate.PrepareArguments=function Delegate_PrepareArguments(arrArguments,nStartFrom,nCount)
{if(!arrArguments||((nStartFrom==undefined)&&(nCount==undefined)))
return arrArguments;if(nCount==undefined)
nCount=arrArguments.length-nStartFrom;if(nCount<=0)
return null;var arrNewArg=new Array(nCount);for(var iArg=0;iArg<nCount;++iArg)
arrNewArg[iArg]=arrArguments[iArg+nStartFrom];return arrNewArg;}
Delegate.RetrieveMethod=function Delegate_RetrieveMethod(oThis,sMethod)
{if(!oThis||!sMethod)
return null;return oThis[sMethod];}
Delegate.CallMethod=function Delegate_CallMethod(oThis,sMethod)
{var oMethodRef=Delegate.RetrieveMethod(oThis,sMethod);if(oMethodRef)
{var arrArguments=Delegate.PrepareArguments(arguments,2);return Delegate.ApplyCallback(oThis,oMethodRef,arrArguments);}}
Delegate.ApplyMethod=function Delegate_ApplyMethod(oThis,sMethod,arrArguments)
{var oMethodRef=Delegate.RetrieveMethod(oThis,sMethod);return Delegate.ApplyCallback(oThis,oMethodRef,arrArguments);}
Delegate.ApplyCallback=function Delegate_ApplyCallback(oThis,oCallback,arrArguments)
{if(!oCallback)
return;if(typeof(oCallback)=="function")
return oCallback.apply(oThis,arrArguments);else if(typeof(oCallback)=="string")
{function EvalCode(sCode){return eval(sCode);}
var retVal=EvalCode.call(oThis,oCallback);if(retVal&&(typeof(retVal)=="function"))
return retVal.apply(oThis,arrArguments);return retVal;}
else if(typeof(oCallback)=="object")
return oCallback.apply(oThis,arrArguments);}
Delegate.IsEqual=function Delegate_IsEqual(oSrc,oTrg)
{if(oSrc==oTrg)
return true;if(!oSrc||!oTrg)
return false;if((oSrc.m_nType!=oTrg.m_nType)||(oSrc.m_oCallbackRef!=oTrg.m_oCallbackRef)||(oSrc.m_oThis!=oTrg.m_oThis))
return false;return true;}
function Delegate_setCallback(oCallbackRef,oThis,nType)
{this.m_oThis=(oThis?oThis:null);this.m_oCallbackRef=(oCallbackRef?oCallbackRef:null);if(this.m_nType==nType)
return;this.m_nType=nType;switch(nType)
{case Delegate.Type.Generic:this.call=Delegate_Generic_call;this.apply=Delegate_Generic_apply;break;case Delegate.Type.Method:this.call=Delegate_Method_call;this.apply=Delegate_Method_apply;break;}}
function Delegate_matchHandler(oCallbackRef,oObject,nType)
{if(nType==undefined)
nType=Delegate.Type.Generic;if(this.m_nType!=nType)
return false;if(!oCallbackRef)
oCallbackRef=null;if(this.m_oCallbackRef!=oCallbackRef)
return false;if(!oObject)
oObject=null;if(this.m_oThis!=oObject)
return false;return true;}
function Delegate_Generic_call(oThis)
{if(this.m_oThis)
oThis=this.m_oThis;var arrArguments=Delegate.PrepareArguments(arguments,1);Delegate.ApplyCallback(oThis,this.m_oCallbackRef,arrArguments);}
function Delegate_Generic_apply(oThis,arrArguments)
{if(this.m_oThis)
oThis=this.m_oThis;Delegate.ApplyCallback(oThis,this.m_oCallbackRef,arrArguments);}
function Delegate_Method_call(oThis)
{if(this.m_oThis)
oThis=this.m_oThis;var arrArguments=Delegate.PrepareArguments(arguments,1);Delegate.ApplyMethod(oThis,this.m_oCallbackRef,arrArguments);}
function Delegate_Method_apply(oThis,arrArguments)
{if(this.m_oThis)
oThis=this.m_oThis;Delegate.ApplyMethod(oThis,this.m_oCallbackRef,arrArguments);}
Delegate.ApplyPrototype(Delegate.prototype);function Interface(sName)
{this.Name=sName;this.Id=sName.toLowerCase();this._olv_ti=JScript.Type.RegisterInterface(sName,this);}
Interface.ApplyPrototype=function Interface_ApplyPrototype(rObject)
{rObject.Id="";rObject.Name="";rObject._olv_ti=null;rObject.Implement=null;rObject.ImplementInterface=function Interface_ImplementInterface(rObject,bDynamic)
{if(this.IsImplementedBy(rObject))
return;if(!bDynamic)
{if(JScript.Type._declaring_type&&!JScript.Type._declaring_type.declared&&JScript.Type._declaring_type.kind==TypeInfo.Kind.Interface)
JScript.Type._declaring_type.AddBaseType(this._olv_ti);}
this.Implement(rObject,bDynamic);}
rObject.Register=function Interface_register(rObject,bDynamic)
{if(!rObject)
return false;if(this.IsImplementedBy(rObject))
return false;if(bDynamic)
{if(!rObject.ImplementsDynamic)
rObject.ImplementsDynamic=new Array();rObject.ImplementsDynamic[this.Id]=this;}
else
{if(!rObject.Implements)
rObject.Implements=new Array();rObject.Implements[this.Id]=this;}
return true;}
rObject.IsImplementedBy=function Interface_IsImplementedBy(rObject)
{if(!rObject||!rObject.Implements)
return false;if(this.Id in rObject.Implements)
return true;if(rObject.ImplementsDynamic&&(this.Id in rObject.ImplementsDynamic))
return true;return false;}}
Interface.ApplyPrototype(Interface.prototype);Interface.IsImplemented=function Interface_IsImplemented(rObject,sInterface)
{if(!rObject||!rObject.Implements||!sInterface)
return false;if(rObject.Implements[sInterface.toLowerCase()]!=undefined)
return true;if(rObject.ImplementsDynamic&&rObject.ImplementsDynamic[sInterface.toLowerCase()]!=undefined)
return true;return false;}
function Debug()
{}
if(!Debug.assert)
Debug.assert=function Debug_assert(bCondition,sMessage){};if(!Debug.trace)
Debug.trace=function Debug_trace(sMessage){};if(!Debug.dumpObject)
Debug.dumpObject=function Debug_DumpObject(oObject,sEol,bDoNotDumpValues)
{if(!sEol)
sEol="\n";var sDump="";var sProp;for(sProp in oObject)
{try
{var vPropValue=oObject[sProp];}
catch(ex)
{sDump+=sProp+" [unavailable]"+sEol;continue;}
sDump+=sProp+" ["+typeof(vPropValue)+"] = ";if(!bDoNotDumpValues)
{switch(typeof(vPropValue))
{case"string":sDump+="'"+vPropValue+"'";break;case"function":sDump+="'"+vPropValue+"'";break;case"object":sDump+="'";if(vPropValue==null)
sDump+="null";else if("toString"in vPropValue)
sDump+=+vPropValue.toString();else
sDump+=String(vPropValue);sDump+="'";break;case"undefined":sDump+="undefined";break;case"number":sDump+=String(vPropValue);break;case"boolean":sDump+=String(vPropValue);break;}}
else
sDump+="n/a";sDump+=sEol;}
return sDump;}
if(!Debug.Timer)
{Debug.Timer=function DebugTimer()
{this.m_arrCheckpoints=new Array();}
Debug.Timer.prototype.clear=function DebugTimer_clear()
{this.m_arrCheckpoints=new Array();}
Debug.Timer.prototype.checkPoint=function DebugTimer_checkpoint(sTitle)
{var oCheckpoint={title:sTitle,time:new Date()};this.m_arrCheckpoints.push(oCheckpoint);}
Debug.Timer.prototype.getTotalTimeElapsed=function DebugTimer_getTotalTimeElapsed()
{if(this.m_arrCheckpoints.length>1)
return(this.m_arrCheckpoints[this.m_arrCheckpoints.length-1].time-this.m_arrCheckpoints[0].time);return 0;}
Debug.Timer.prototype.toString=function DebugTimer_toString()
{var sTimerText="elapsed :"+String(this.getTotalTimeElapsed()/1000);if(this.m_arrCheckpoints.length>1)
{var oPrevCheckpoint=this.m_arrCheckpoints[0];sTimerText+="\n{";for(var iCheckpoint=1;iCheckpoint<this.m_arrCheckpoints.length;++iCheckpoint)
{var oCheckpoint=this.m_arrCheckpoints[iCheckpoint];sTimerText+="\n\t"+oCheckpoint.title+": "+String((oCheckpoint.time-oPrevCheckpoint.time)/1000)+"sec.";oPrevCheckpoint=oCheckpoint;}
sTimerText+="\n}";}
return sTimerText;}}
function generateUniqueID(sPrefix)
{var ID="";if(sPrefix)
ID=sPrefix+"_";var s=new Date();ID+=parseInt(Math.random()*1000000,10)+"_"+s.getTime();return ID;}
window.console=window.console||{log:function(){},info:function(){},debug:function(){}};
function DOM()
{}
DOM.NodeType={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12};DOM.CreateFragmentFromContent=function DOM_CreateFragmentFromContent(oSrcElem)
{var oFragment=oSrcElem.ownerDocument.createDocumentFragment();if(!oSrcElem)
return oFragment;for(var oCurNode=oSrcElem.firstChild;oCurNode;oCurNode=oCurNode.nextSibling)
oFragment.appendChild(oCurNode.cloneNode(true));return oFragment;}
DOM.MoveContentToFragment=function DOM_MoveContentToFragment(oSrcElem)
{var oFragment=oSrcElem.ownerDocument.createDocumentFragment();if(!oSrcElem)
return oFragment;while(oSrcElem.firstChild)
oFragment.appendChild(oSrcElem.firstChild);return oFragment;}
DOM.MoveContentToParent=function DOM_MoveContentToParent(oSrcElem)
{var oFragment=DOM.MoveContentToFragment(oSrcElem);oSrcElem.parentNode.replaceChild(oFragment,oSrcElem);}
DOM.ClearContent=function DOM_ClearContent(oSrcElem)
{while(oSrcElem.firstChild)
oSrcElem.removeChild(oSrcElem.firstChild);}
DOM.PasteContent=function DOM_PasteContent(oSrcElem,oContent,bAppend)
{if(!bAppend)
DOM.ClearContent(oSrcElem);if(oContent)
return oSrcElem.appendChild(oContent);return null;}
function DHTML_Walk(oDomNode,rCallbackFunction,arrArguments,rCallbackObject)
{var oStartNode=oDomNode;if(!rCallbackFunction)
return;if(!arrArguments)
arrArguments=new Array(1);if(!rCallbackObject)
rCallbackObject=this;oDomNode=oStartNode.firstChild;while(oDomNode)
{if(oDomNode.nodeType==1)
{arrArguments[0]=oDomNode;rCallbackFunction.apply(rCallbackObject,arrArguments);}
if(oDomNode.firstChild)
oDomNode=oDomNode.firstChild;else
{while(!oDomNode.nextSibling)
{oDomNode=oDomNode.parentNode;if(oDomNode==oStartNode)
return;}
oDomNode=oDomNode.nextSibling;}}}
function DHTML_WalkRecursive(oDomNode,rCallbackFunction,arrArguments,rCallbackObject)
{if(!oDomNode||!rCallbackFunction)
return;if(!arrArguments)
arrArguments=new Array(1);if(!rCallbackObject)
rCallbackObject=this;DHTML_WalkRecursiveEx(oDomNode,rCallbackFunction,arrArguments,rCallbackObject);}
function DHTML_WalkRecursiveEx(oDomNode,rCallbackFunction,arrArguments,rCallbackObject)
{var curChildNodes=oDomNode.childNodes;if(!curChildNodes)
return;for(var iNode=0;iNode<curChildNodes.length;++iNode)
{var oCurHtmlElem=curChildNodes[iNode];if(oCurHtmlElem.nodeType!=1)
continue;arrArguments[0]=oCurHtmlElem;var oSubObject=rCallbackFunction.apply(rCallbackObject,arrArguments);if(oSubObject)
DHTML_WalkRecursiveEx(oCurHtmlElem,rCallbackFunction,arrArguments,oSubObject);}}
function DHTML_getAttr(oHtmlElem,sAttrName,sDefault)
{if("string"!=typeof sDefault)
sDefault=null;if(!oHtmlElem||!sAttrName||sAttrName=="")
return sDefault;var oAttrNode=oHtmlElem.getAttributeNode(sAttrName);return(oAttrNode?oAttrNode.value:sDefault);}
function DHTML_getAttrBoolean(oHtmlElem,sAttrName,bDefault)
{var vValue=DHTML_getAttr(oHtmlElem,sAttrName);return String_parseBoolean(vValue,bDefault);}
function DHTML_getAttrNumber(oHtmlElem,sAttrName,nDefault)
{var vAttr=DHTML_getAttr(oHtmlElem,sAttrName);if(typeof(vAttr)=="undefined"||!vAttr)
vAttr=nDefault;if(typeof(vAttr)!="number")
{var sAttr=String(vAttr);if(sAttr.search(/\./)!=-1)
vAttr=parseFloat(sAttr);else if(sAttr.search(/0x/i)==0)
vAttr=parseInt(sAttr,16);else
vAttr=parseInt(sAttr,10);}
return vAttr;}
function DHTML_getValue(oHtmlNode,sMultipleValueSeparator,sNoValuePlaceholder)
{if(!oHtmlNode)
return null;var vValue=null;if(oHtmlNode.nodeType==1)
{if(DHTML_isSelectElem(oHtmlNode))
{if(oHtmlNode.selectedIndex>=0)
{if(oHtmlNode.multiple&&sMultipleValueSeparator)
{var arrValues=[];var arrOptions=oHtmlNode.options;for(var i=0;i<arrOptions.length;++i)
{if(arrOptions[i].selected)
{if(sNoValuePlaceholder&&arrOptions[i].value==sNoValuePlaceholder)
{arrValues=[];break;}
else
{arrValues.push(arrOptions[i].value);}}}
vValue=arrValues.join(sMultipleValueSeparator);}
else
{vValue=oHtmlNode.options[oHtmlNode.selectedIndex].value;}}
else
vValue="";}
else if(DHTML_isCheckboxElem(oHtmlNode))
{if(oHtmlNode.value)
vValue=oHtmlNode.value;else
vValue=oHtmlNode.checked;}
else if("value"in oHtmlNode)
vValue=oHtmlNode.value;else
vValue=DHTML.getTextContent(oHtmlNode);}
else
vValue=DHTML.getTextContent(oHtmlNode);if(sNoValuePlaceholder&&vValue==sNoValuePlaceholder)
vValue="";return vValue;}
function DHTML_getInnerHtml(oHtmlNode)
{if(!oHtmlNode)
return null;return oHtmlNode.innerHTML;}
function DHTML_getTextContent(obj)
{if(obj.textContent)
return obj.textContent;if(obj.innerText)
return obj.innerText;if(obj.text)
return obj.text;else if(obj.childNodes&&obj.childNodes.length>0&&obj.childNodes[0].nodeType==3)
return obj.childNodes[0].nodeValue;return"";}
function DHTML_setValue(oHtmlNode,oValue,sFormattedValue,sMultipleValueSeparator)
{if(!oHtmlNode)
return;if(!sFormattedValue||(oHtmlNode.nodeType==1&&oHtmlNode.tagName.toLowerCase()=="select"))
sFormattedValue=((oValue==undefined)||(oValue==null))?"":String(oValue);else
sFormattedValue=String(sFormattedValue);if(DHTML.isCheckboxElem(oHtmlNode))
{if(oHtmlNode.value)
oHtmlNode.checked=(oValue==oHtmlNode.value);else
oHtmlNode.checked=oValue;}
else if(DHTML.isRadioButton(oHtmlNode))
oHtmlNode.checked=(oValue==oHtmlNode.value);else if(DHTML.isSelectElem(oHtmlNode)&&oHtmlNode.multiple&&sMultipleValueSeparator)
{var arrValues=sFormattedValue.split(sMultipleValueSeparator);var arrOptions=oHtmlNode.options;for(var i=0;i<arrOptions.length;++i)
{arrOptions[i].selected=(0<=Array_indexOf(arrValues,arrOptions[i].value));}}
else if("value"in oHtmlNode)
{var ctrl=oHtmlNode.parentNode.attributes["owc:control"];if(!!ctrl)
{switch(ctrl.value)
{case"monthlist":var tempValue=parseInt(sFormattedValue,10);if(tempValue<10)
sFormattedValue="0"+tempValue;break;}}
oHtmlNode.value=sFormattedValue;}
else if("innerText"in oHtmlNode)
oHtmlNode.innerText=sFormattedValue;else
oHtmlNode.innerHTML=sFormattedValue;}
function DHTML_pasteHtmlContent(oHtmlElem,sHtmlContent)
{if(!oHtmlElem||oHtmlElem.innerHTML==sHtmlContent)
return;oHtmlElem.innerHTML=sHtmlContent;}
function DHTML_clearHtmlContent(oHtmlElem)
{DHTML_pasteHtmlContent(oHtmlElem,"");}
function DHTML_addCssClassToElem(oHtmlElem,sClass)
{if(!oHtmlElem)
return;var classes=oHtmlElem.className.split(" ");var className,index,count=classes.length;for(index=0;index<count;++index)
{className=classes[index];if(className==sClass)
return;}
if(count==0)
oHtmlElem.className=sClass;else
oHtmlElem.className+=" "+sClass;}
function DHTML_removeCssClassFromElem(oHtmlElem,sClass)
{if(!oHtmlElem)
return;var reClass=new RegExp("\\s*"+sClass+"\\s*","gi");var arrMatch=reClass.exec(oHtmlElem.className);if(arrMatch!=null)
{var sClassName=oHtmlElem.className.substr(0,arrMatch.index);var nLastIndex=arrMatch.lastIndex?arrMatch.lastIndex:(arrMatch.index+sClass.length+1);if(nLastIndex<oHtmlElem.className.length)
{if(sClassName!="")
sClassName+=" ";sClassName+=oHtmlElem.className.substr(nLastIndex);}
oHtmlElem.className=sClassName;}}
function DHTML_isCssClassAppears(oHtmlElem,sClass)
{if(!oHtmlElem)
return false;var classes=oHtmlElem.className.split(" ");var className,index,count=classes.length;for(index=0;index<count;++index)
{className=classes[index];if(className==sClass)
return true;}
return false;}
function DHTML_replaceCssClassToElem(oHtmlElem,sFindClass,sReplaceBy,bDoNotAddIfNone)
{if(!oHtmlElem)
return;var reClass=new RegExp("(\\s|^)"+sFindClass+"(\\s|$)","gi");var arrMatch=reClass.exec(oHtmlElem.className);if(arrMatch!=null)
oHtmlElem.className=oHtmlElem.className.replace(reClass,arrMatch[1]+sReplaceBy+arrMatch[2]);else if(!bDoNotAddIfNone)
{reClass=new RegExp("(\\s|^)"+sReplaceBy+"(\\s|$)","gi");if(reClass.exec(oHtmlElem.className)==null)
oHtmlElem.className+=(((oHtmlElem.className!="")?" ":"")+sReplaceBy);}}
function DHTML_copyStyles(srcElement,targetElement)
{targetElement.className=srcElement.className;targetElement.style.cssText=srcElement.style.cssText;}
function DHTML_setOpacity(oHtmlElem,nOpacity)
{if("filter"in oHtmlElem.style)
{var nOpacityPercents=Math.round(nOpacity*100);oHtmlElem.style.filter="alpha(opacity="+nOpacityPercents+")";}
else
oHtmlElem.style.opacity=nOpacity;}
function DHTML_cssFindRuleInDocument(sSelector,oDocument)
{if(!oDocument)
oDocument=document;var arrStyleSheets=document.styleSheets;for(var iStyleSheet=0;iStyleSheet<arrStyleSheets.length;++iStyleSheet)
{var oStyleSheet=arrStyleSheets.item(iStyleSheet);var oRule=DHTML_cssFindRule(oStyleSheet,sSelector);if(oRule)
return oRule;}
return null;}
function DHTML_cssFindAllRulesForInDocument(sSelector,oDocument)
{if(!oDocument)
oDocument=document;var arrMatchedRules=new Array();var arrStyleSheets=document.styleSheets;for(var iStyleSheet=0;iStyleSheet<arrStyleSheets.length;++iStyleSheet)
{var oStyleSheet=arrStyleSheets.item(iStyleSheet);DHTML_cssFindAllRulesFor(oStyleSheet,sSelector,arrMatchedRules);}
return arrMatchedRules;}
function DHTML_cssFindRuleIndex(oStyleSheet,sSelector,nStartFromIndex)
{var arrRules=(oStyleSheet.cssRules?oStyleSheet.cssRules:oStyleSheet.rules);if(nStartFromIndex==undefined)
nStartFromIndex=0;for(var iRule=nStartFromIndex;iRule<arrRules.length;++iRule)
{var oRule=arrRules.item(iRule);if(oRule.selectorText==sSelector)
return iRule;}
return-1;}
function DHTML_cssFindRule(oStyleSheet,sSelector)
{var iRuleIndex=DHTML_cssFindRuleIndex(oStyleSheet,sSelector);if(iRuleIndex<0)
return null;var arrRules=(oStyleSheet.cssRules?oStyleSheet.cssRules:oStyleSheet.rules);return arrRules[iRuleIndex];}
function DHTML_cssFindAllRulesFor(oStyleSheet,sSelector,arrMatchedRules)
{var nStartFromRule=0;var arrRules=(oStyleSheet.cssRules?oStyleSheet.cssRules:oStyleSheet.rules);while(nStartFromRule<arrRules.length)
{var iRuleIndex=DHTML_cssFindRuleIndex(oStyleSheet,sSelector,nStartFromRule);if(iRuleIndex<0)
break;arrMatchedRules.push(arrRules[iRuleIndex]);nStartFromRule=iRuleIndex+1;}
return arrMatchedRules;}
function DHTML_cssInsertRule(oStyleSheet,sSelector,sStyles,iIndex)
{if(oStyleSheet.addRule)
oStyleSheet.addRule(sSelector,sStyles,iIndex);else
{if((iIndex==undefined)||iIndex<0)
iIndex=oStyleSheet.cssRules.length;oStyleSheet.insertRule(sSelector+"{ "+sStyles+" }",iIndex);}}
function DHTML_cssDeleteRule(oStyleSheet,iIndex)
{if(oStyleSheet.removeRule)
oStyleSheet.removeRule(iIndex);else
oStyleSheet.deleteRule(iIndex);}
if(document.namespaces)
{DHTML_matchElemTag=function(oHtmlElem,sTagName,sNsPrefix)
{if(!oHtmlElem||!oHtmlElem.tagName)
return false;var sHtmlElemTagName=oHtmlElem.tagName.toLowerCase();var nColon=sHtmlElemTagName.indexOf(":");if(nColon!=-1&&sNsPrefix===sHtmlElemTagName.substr(0,nColon)&&sTagName===sHtmlElemTagName.substr(nColon+1))
return true;else if(oHtmlElem.scopeName.toLowerCase()!=sNsPrefix)
return false;return(sHtmlElemTagName==sTagName);};}
else
{DHTML_matchElemTag=function(oHtmlElem,sTagName,sNsPrefix)
{if(!oHtmlElem||!oHtmlElem.tagName)
return false;var sElemTagName=oHtmlElem.tagName.toLowerCase();return(sElemTagName==(sNsPrefix+":"+sTagName))};}
function DHTML_getCellIndex(elem){if(!elem){return null;}
var nIndex=elem.cellIndex;if(nIndex===0){var oParent=getParent(elem);if(oParent&&elem!=oParent.firstChild){nIndex=-1;for(var i=0;i<oParent.childNodes.length;i++){if(elem===oParent.childNodes[i]){nIndex=i;break;}}
if(nIndex==-1){return null;}}}
return nIndex;}
function DHTML_focus(oHtmlElem)
{if(oHtmlElem&&oHtmlElem.focus)
{oHtmlElem.focus();}}
function DHTML_newError(nNum,sMessage)
{var oErr=new Error();if(typeof oErr.number!="undefined"){return new Error(nNum,sMessage);}else{oErr=new Error(sMessage);oErr.number=nNum;return oErr;}}
function IE_DHTML_copyToClipboard(sText)
{window.clipboardData.setData("Text",sText);}
function IE_DHTML_getClipboardText()
{return window.clipboardData.getData("Text");}
function Mozilla_DHTML_copyToClipboard(sText)
{netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');var copytext=sText;var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);str.data=copytext;var trans=Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);trans.addDataFlavor("text/unicode");trans.setTransferData("text/unicode",str,copytext.length*2);var clipid=Components.interfaces.nsIClipboard;var clip=Components.classes["@mozilla.org/widget/clipboard;1"].getService(clipid);clip.setData(trans,null,clipid.kGlobalClipboard);}
function Mozilla_DHTML_getClipboardText(sText)
{var pastetext="";netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');var clip=Components.classes["@mozilla.org/widget/clipboard;1"].getService(Components.interfaces.nsIClipboard);if(!clip)return false;var trans=Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);if(!trans)return false;trans.addDataFlavor("text/unicode");clip.getData(trans,clip.kGlobalClipboard);var str=new Object();var strLength=new Object();trans.getTransferData("text/unicode",str,strLength);if(str)
str=str.value.QueryInterface(Components.interfaces.nsISupportsString);if(str)
pastetext=str.data.substring(0,strLength.value/2);return pastetext;}
function DHTML_setCookie(sName,sValue,nExpirationDays,sPath,sDomain,sSecure,bThisSessionOnly)
{if("number"!=typeof nExpirationDays)
nExpirationDays=365*50;nExpirationDate=(new Date()).valueOf()+(nExpirationDays*24*60*60*1000);document.cookie=sName+"="+escape(sValue)+
((!bThisSessionOnly)?"; expires="+(new Date(nExpirationDate)).toGMTString():"")+"; path="+(sPath?sPath:"/")+
((sDomain)?"; domain="+sDomain:"")+
((sSecure)?"; secure":"");}
function DHTML_getCookie(sName)
{var sCookies=document.cookie;if(!sName||sCookies.length<sName.length||sName.indexOf("=")!=-1)
return null;if(sCookies.substr(0,sName.length)==sName)
{var sPrefix=sName;var nBegin=0;}else
{sPrefix="; "+sName;nBegin=sCookies.indexOf(sPrefix);}
if(nBegin==-1)
return null;var nEqual=nBegin+sPrefix.length;if(sCookies.substr(nEqual,1)!="=")
return"";var nEnd=sCookies.indexOf(";",nEqual);if(nEnd==-1)
{nEnd=sCookies.length;}
var nValue=nEqual+1;return unescape(sCookies.substr(nValue,nEnd-nValue));}
function DHTML_deleteCookie(sName,sPath,sDomain)
{if(DHTML.getCookie(sName))
{document.cookie=sName+"="+"; path="+(sPath?sPath:"/")+
((sDomain)?"; domain="+sDomain:"")+"; expires=Thu, 01-Jan-1970 00:00:01 GMT";}}
if(document.addEventListener)
{DHTML_attachEvent=function(rObject,sEventName,rHandler,bUseCapture)
{if(!rObject||!sEventName)
return false;if(!bUseCapture)
bUseCapture=false;rObject.addEventListener(sEventName,rHandler,bUseCapture);};DHTML_detachEvent=function(rObject,sEventName,rHandler,bUseCapture)
{if(!rObject||!sEventName)
return false;if(!bUseCapture)
bUseCapture=false;rObject.removeEventListener(sEventName,rHandler,bUseCapture);};}
else if(document.attachEvent)
{DHTML_attachEvent=function(rObject,sEventName,rHandler)
{function wrapper(){rHandler.apply(rObject,arguments);};wrapper.src=rObject;wrapper.pfn=rHandler;var propName="CustomHandler__"+sEventName;if(!(propName in rObject))
rObject[propName]=[wrapper];else
{var handlers=rObject[propName];for(var i=handlers.length-1;i>=0;--i)
{var theHandler=handlers[i];if(theHandler.src==rObject&&theHandler.pfn==rHandler)
return true;}
handlers.push(wrapper);}
return rObject.attachEvent("on"+sEventName.toLowerCase(),wrapper);};DHTML_detachEvent=function(rObject,sEventName,rHandler)
{var propName="CustomHandler__"+sEventName;if(propName in rObject)
{var handlers=rObject[propName];for(var i=handlers.length-1;i>=0;--i)
{var theHandler=handlers[i];if(theHandler.src==rObject&&theHandler.pfn==rHandler)
{rObject.detachEvent("on"+sEventName.toLowerCase(),theHandler);handlers.splice(i,1);}}}};}
else
{DHTML_attachEvent=function(rObject,sEventName,rHandler)
{if(!rObject||!sEventName)
return false;var sPropName="on"+sEventName.toLowerCase();rObject[sPropName]=rHandler;return true;};DHTML_detachEvent=function(rObject,sEventName,rHandler)
{if(!rObject||!sEventName)
return false;var sPropName="on"+sEventName.toLowerCase();rObject[sPropName]=null;};}
function getEvent(oEvent)
{if(!oEvent)
oEvent=window.event;return oEvent;}
function getEventTarget(oEvent)
{oEvent=getEvent(oEvent);var target;if(oEvent.target)target=oEvent.target;else if(oEvent.srcElement)target=oEvent.srcElement;if(target.nodeType==3)
target=target.parentNode;return target;}
function getMouseOutEnterObj(oEvent)
{oEvent=getEvent(oEvent);var target=null;if(oEvent.toElement)
target=oEvent.toElement;else if(oEvent.relatedTarget)
target=oEvent.relatedTarget;return target;}
function getEventMouseButtons(oEvent)
{oEvent=getEvent(oEvent);if("which"in oEvent)
return oEvent.which;return oEvent.button;}
function stopEventBubbling(event)
{if(!event)var event=window.event;event.cancelBubble=true;if(event.stopPropagation)event.stopPropagation();}
function isCtrlKeyPressed(oEvent)
{oEvent=getEvent(oEvent);return oEvent.ctrlKey;}
function isMetaKeyPressed(oEvent)
{oEvent=getEvent(oEvent);if(typeof(oEvent.metaKey)!="undefined"&&oEvent.metaKey==true)
return true;else
return false;}
function getEventClientX(oEvent)
{if(!oEvent)var oEvent=window.event;if(isSafari())
return oEvent.pageX-document.body.scrollLeft;if(oEvent.clientX)
return oEvent.clientX;else
return 0;}
function getEventClientY(oEvent)
{if(!oEvent)var oEvent=window.event;if(isSafari())
return oEvent.pageY-document.body.scrollTop;if(oEvent.clientY)
return oEvent.clientY;else
return 0;}
function getEventPageX(event)
{if(!event)var event=window.event;if(event.pageX)
return event.pageX;else if(event.clientX)
return event.clientX+document.body.scrollLeft;else
return 0;}
function getEventPageY(event)
{if(!event)var event=window.event;if(event.pageY)
return event.pageY;else if(event.clientY)
return event.clientY+document.body.scrollTop;else
return 0;}
function getEventPageFullX(event,srcElement){if(!event)
var event=window.event;if(event.pageX&&isSafari())
return event.pageX;var offset=srcElement.scrollLeft;if(typeof(offset)!="undefined"){var parent=srcElement.parentNode;while(parent&&(typeof(parent.scrollLeft)!="undefined")){offset+=parent.scrollLeft;parent=parent.parentNode;}}else
offset=0;if(event.pageX)
return event.pageX+offset;else if(event.clientX)
return event.clientX+offset;else
return 0;}
function getEventPageFullY(event,srcElement){if(!event)
var event=window.event;if(event.pageY&&isSafari())
return event.pageY;var offset=srcElement.scrollTop;if(typeof(offset)!="undefined"){var parent=srcElement.parentNode;while(parent&&(typeof(parent.scrollTop)!="undefined")){offset+=parent.scrollTop;parent=parent.parentNode;}}else
offset=0;if(event.pageY)
return event.pageY+offset;else if(event.clientY)
return event.clientY+offset;else
return 0;}
function getEventPageFullY2(event,srcElement)
{if(!event)var event=window.event;if(event.pageY&&isSafari())
return event.pageY;else if(event.pageY)
return event.pageY+document.body.scrollTop;else if(event.clientY)
{var offset=srcElement.scrollTop;if(typeof(offset)!="undefined"){var parent=srcElement.parentNode;while(parent&&(typeof(parent.scrollTop)!="undefined")){offset+=parent.scrollTop;parent=parent.parentNode;}}else
offset=0;return event.clientY+offset;}
else
return 0;}
function preventEventDefaultAction(event)
{if(!event)var event=window.event;event.returnValue=false;if(event.preventDefault)event.preventDefault();}
function getObj(name)
{if(!name||name=="")
return null;return getObjFromDoc(document,name);}
function getObjFromDoc(doc,name)
{if(!name||!doc)
return null;if(doc.getElementById)
return doc.getElementById(name);else if(doc.all)
return doc.all[name];return null;}
function getObjects(name)
{if(!name||name=="")
return null;return getObjectsFromDoc(document,name);}
function getObjectsFromDoc(doc,name)
{if(!name||!doc)
return null;if(doc.all)
{if(!doc.all[name])
return null;if(typeof(doc.all[name].length)=="undefined")
return new Array(doc.all[name]);else
return doc.all[name];}
else if(doc.getElementsByName)
{return doc.getElementsByName(name);}
return null;}
function getObjsByTag(name)
{if(!name||name=="")
return null;if(document.getElementsByTagName)
return document.getElementsByTagName(name);else if(document.all.tags)
return document.all.tags(name);return null;}
function getChildObjsByTag(parent,name)
{if(!parent||!name||name=="")
return null;var result=null;result=parent.getElementsByTagName(name);if(!result||(result.length==0))
result=parent.getElementsByTagName(name.toLowerCase());if(!result||(result.length==0))
result=parent.getElementsByTagName(name.toUpperCase());if(result.length==0&&name=="*")result=null;if(parent.all&&parent.all.tags&&(result==null)){result=parent.all.tags(name.toUpperCase());if(!result||(result.length==0))
result=parent.all.tags(name.toLowerCase());}
return result;}
function getChildObjsByTagNsPrefix(parent,name,sNsPrefix)
{if(!name||!parent||!parent.childNodes||!parent.childNodes.length){return null;}
var lowName=name.toLowerCase();var result=parent.getElementsByTagName(lowName);if(!result||!result.length){var lowNs=sNsPrefix.toLowerCase();result=parent.getElementsByTagName(lowNs+(lowNs?":":"")+lowName);}
if(result&&!result.length){var sName=(sNsPrefix+(sNsPrefix?":":"")+name).toUpperCase();result=[];var arrChildNodes=parent.getElementsByTagName("*");for(var i=0;i<arrChildNodes.length;++i){sNode=arrChildNodes[i];if(sNode.nodeName==sName){result.push(sNode);}}}
if(result&&!result.length){result=null;}
return result;}
function getChildObjectByTag(parent,name,nIndex)
{var arrChildObjs=getChildObjsByTag(parent,name);if(!arrChildObjs||arrChildObjs.length==0)
return null;if(!nIndex)
nIndex=0;return arrChildObjs[nIndex];}
function getAttr(elem,attr){if(!elem||!attr||attr=="")
return null;var res=null;if(elem.getAttribute){if(attr.indexOf(":")==-1&&(res=elem.getAttribute(attr))){return res;}else{var resNode=getAttrNode(elem,attr);return(resNode?resNode.value:null);}}else{return res;}}
function getAttrNode(elem,attr){if(!elem||!attr||attr=="")
return null;var resNode=null;if(elem.getAttributeNode){resNode=elem.getAttributeNode(attr);if(!resNode){resNode=elem.getAttributeNode(attr.toLowerCase());}
if(!resNode){resNode=elem.getAttributeNode(attr.toUpperCase());}
return(resNode?resNode:null);}else{return null;}}
function setAttr(elem,attr,val){if(!elem||!attr||attr==""){return;}
if(elem.setAttribute){if(attr.indexOf(":")==-1){elem.setAttribute(attr,val);}else{var aNode=document.createAttribute(attr);if(!aNode||aNode.nodeName.toLowerCase()==attr.toLowerCase()){elem.setAttribute(attr,val);}else{aNode=getAttrNode(elem,attr);if(aNode){aNode.nodeValue=val;}else{}}}}else{eval("elem."+attr+" = val");}
return;}
function hasAttr(elem,attr){return(getAttr(elem,attr)==null?false:true);}
function removeAttr(elem,attr){if(!elem||!attr||attr=="")
return;if(elem.removeAttribute){elem.removeAttribute(attr);}else{eval("elem."+attr+" = null;");}}
function appendObj(parent,elem){if(!parent||!elem)
return null;if(parent.appendChild)
return parent.appendChild(elem);else if(parent.insertAdjacentElement)
return parent.insertAdjacentElement("beforeEnd",elem);return null;}
function insertObj(parent,elem,beforeElem)
{if(!parent||!elem)
return null;if(parent.insertBefore)
return parent.insertBefore(elem,beforeElem);else if(elem.insertAdjacentElement)
{if(beforeElem)
return beforeElem.insertAdjacentElement("beforeBegin",elem);else
return parent.insertAdjacentElement("beforeEnd",elem);}
return null;}
function insertObjWhere(parent,elem,beforeElem,where){var result=null;if(parent&&elem){if(parent.insertBefore)
result=parent.insertBefore(elem,beforeElem);else if(parent.insertAdjacentElement&&where)
result=parent.insertAdjacentElement(where,elem);}
return result;}
function crossFrameAppendObj(parent,elem)
{if(!parent||!elem)
return null;if(parent.insertAdjacentElement)
parent.insertAdjacentElement("BeforeEnd",elem);else
parent.appendChild(elem);}
function getElemFromColl(coll,attr,val)
{if(!coll||!coll.length)
return null;for(var i=0;i<coll.length;i++)
{if(getAttr(coll[i],attr)==val)
return coll[i];}
return null;}
function getElemsFromColl(coll,attr,val)
{if(!coll||!coll.length)
return null;var arrRes=new Array();for(var i=0;i<coll.length;i++)
{if(getAttr(coll[i],attr)==val)
arrRes.push(coll[i]);}
return arrRes;}
function getOwnerDoc(elem)
{if(!elem)
return null;if(elem.ownerDocument)
return elem.ownerDocument;else if(elem.document)
return elem.document;else
return null;}
function getParent(obj)
{if(!obj)
return null;if(obj.parentElement)
return obj.parentElement;else if(obj.parentNode)
return obj.parentNode;return null;}
function findPosLeft(obj)
{var curLeft=0;if(obj.offsetParent){while(obj.offsetParent){curLeft+=obj.offsetLeft;if(obj.clientLeft&&((typeof(obj.filters)=="undefined")||(typeof(obj.isDisabled)!="undefined")))
curLeft+=obj.clientLeft;obj=obj.offsetParent;}}else if(obj.x)
curLeft+=obj.x;return curLeft;}
function findPosTop(obj)
{var curTop=0;if(obj.offsetParent){while(obj.offsetParent){curTop+=obj.offsetTop;if(obj.clientTop&&((typeof(obj.filters)=="undefined")||(typeof(obj.isDisabled)!="undefined")))
curTop+=obj.clientTop;obj=obj.offsetParent;}}else if(obj.y)
curTop+=obj.y;return curTop;}
function findPosLeft1(obj)
{var curLeft=0;if(!obj.offsetParent)
{while(!obj.offsetParent&&obj.parentNode)
{if(obj.offsetLeft>0)
curLeft+=obj.offsetLeft;obj=obj.parentNode;}}
if(obj.offsetParent){while(obj.offsetParent){curLeft+=obj.offsetLeft;curLeft-=obj.offsetParent.scrollLeft;if(obj.clientLeft&&((typeof(obj.filters)=="undefined")||(typeof(obj.isDisabled)!="undefined")))
curLeft+=obj.clientLeft;obj=obj.offsetParent;}}else if(obj.x)
curLeft+=obj.x;return curLeft;}
function findPosTop1(obj)
{var curTop=0;if(!obj.offsetParent)
{while(!obj.offsetParent&&obj.parentNode)
{if(obj.offsetTop>0)
curTop+=obj.offsetTop;obj=obj.parentNode;}}
if(obj.offsetParent){while(obj.offsetParent){curTop+=obj.offsetTop;curTop-=obj.offsetParent.scrollTop;if(obj.clientTop&&((typeof(obj.filters)=="undefined")||(typeof(obj.isDisabled)!="undefined")))
curTop+=obj.clientTop;obj=obj.offsetParent;}}else if(obj.y)
curTop+=obj.y;return curTop;}
function findOffsetParent(obj)
{if(!obj.offsetParent)
{while(!obj.offsetParent&&obj.parentNode)
{obj=obj.parentNode;}}
return obj;}
function DHTML_getOffsetParent(oElem)
{var oPositionedElem=DHTML.findOffsetParent(oElem);if(!oPositionedElem)
return null;return oPositionedElem.offsetParent;}
function getWindowTop(wnd)
{if(!wnd)wnd=window;if(wnd.screenTop)
return wnd.screenTop;if(wnd.screenY)
return wnd.screenY;return null;}
function getWindowLeft(wnd)
{if(!wnd)wnd=window;if(wnd.screenX)
return wnd.screenX;if(wnd.screenLeft)
return wnd.screenLeft;return null;}
function getScrollOffsetX(wnd)
{if(!wnd)wnd=window;var nScrollX=0;if(wnd.document.documentElement&&wnd.document.documentElement.scrollLeft)
nScrollX=wnd.document.documentElement.scrollLeft;else if(wnd.document.body&&wnd.document.body.scrollLeft)
nScrollX=wnd.document.body.scrollLeft;else if(wnd.pageXOffset)
nScrollX=wnd.self.pageXOffset;else if(wnd.scrollX)
nScrollX=wnd.scrollX;return nScrollX;}
function getScrollOffsetY(wnd)
{if(!wnd)wnd=window;var nScrollY=0;if(wnd.document.documentElement&&wnd.document.documentElement.scrollTop)
nScrollY=wnd.document.documentElement.scrollTop;else if(wnd.document.body&&wnd.document.body.scrollTop)
nScrollY=wnd.document.body.scrollTop;else if(wnd.pageYOffset)
nScrollY=wnd.self.pageYOffset;else if(wnd.scrollY)
nScrollY=wnd.scrollY;return nScrollY;}
function getInnerHeight(wnd)
{if(!wnd)wnd=window;var y;if(typeof(wnd.self.innerHeight)!="undefined")
{y=self.innerHeight;}
else if(wnd.document.documentElement&&wnd.document.documentElement.clientHeight)
{y=wnd.document.documentElement.clientHeight;}
else if(wnd.document.body)
{y=wnd.document.body.clientHeight;}
return y;}
function getInnerWidth(wnd)
{if(!wnd)wnd=window;var x;if(typeof(wnd.self.innerHeight)!="undefined")
{x=wnd.self.innerWidth;}
else if(wnd.document.documentElement&&wnd.document.documentElement.clientWidth)
{x=wnd.document.documentElement.clientWidth;}
else if(wnd.document.body)
{x=wnd.document.body.clientWidth;}
return x;}
function parseIntFromCssSize(size)
{var num=parseInt(size,10);if(isNaN(num))
num=parseInt(size.toString().slice(0,-2),10);if(!isNaN(num))
return num;else
return null;}
function isRTLDoc(doc)
{var result=false;var docDir,htmlDir;if(doc&&doc.body){if(doc.body.currentStyle){docDir=doc.body.currentStyle.direction;}
else if(document.defaultView&&document.defaultView.getComputedStyle){docDir=document.defaultView.getComputedStyle(doc.body,null).getPropertyValue("direction");}}
if(docDir)
result=((docDir.toUpperCase()=="RTL")||(docDir.toLowerCase()=="rtl"));return result;}
function getMinIEVersion()
{if(isMinVersionIE7())
{if(DHTML_isIE8())
return 8;return 7;}else{if(isVersionOf_IE_AtLeast5_5())
return 5.5;}
return 0;}
function isMinVersionIE7(){return((typeof(window.XMLHttpRequest)!="undefined"));}
function isVersionOf_IE_AtLeast7(){return(isVersionOf_IE_AtLeast5_5()&&(typeof(window.XMLHttpRequest)!="undefined"));}
function DTHML_isIE8()
{var minVer=getMinIEVersion();return(DHTML_isIE8()||minVer>6);}
function DHTML_isIE8()
{var rv=-1;var ua=navigator.userAgent;var re=new RegExp("Trident\/([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null)
rv=parseFloat(RegExp.$1);return(rv==4);}
function isVersionOf_IE_AtLeast5_5(){return((typeof(document.body.filters)!="undefined")&&(typeof(document.body.isDisabled)!="undefined"));}
function isVersionOf_IE_Less5_5(){return((typeof(document.body.filters)!="undefined")&&(typeof(document.body.isDisabled)=="undefined"));}
function isVersionOf_IE_Script_LessThan(nMinimumMajorVersion,nMinimumMinorVersion)
{var bIsLess=false;if(isVersionOf_IE_AtLeast5_5()&&"function"==typeof ScriptEngineMajorVersion&&"function"==typeof ScriptEngineMinorVersion)
{var nMajorVersion=ScriptEngineMajorVersion();bIsLess=((nMajorVersion==nMinimumMajorVersion&&ScriptEngineMinorVersion()<nMinimumMinorVersion)||nMajorVersion<nMinimumMajorVersion);}
return bIsLess;}
function isSafari(){var res=((typeof(document.childNodes)!="undefined")&&(typeof(document.all)=="undefined")&&(typeof(navigator.taintEnabled)=="undefined")&&(typeof(navigator.accentColorName)=="undefined"));var mainPage=Olive.Page.GetPageForWindow(window);if(!mainPage)
return res;res=res||(typeof(MainPage_onPageItemActivated)=="function"&&(arguments.callee.caller==MainPage_onPageItemActivated));return res;}
function isMacintosh(){return navigator.userAgent.toLowerCase().indexOf("macintosh")!=-1;}
function isMozilla()
{return(typeof(window.sidebar)!="undefined");}
function createHoverCssClass(item,itemHover){if((document.styleSheets)&&(document.styleSheets.length!=0)){var theRules=new Array();var src;var dst;for(var i=0;i<document.styleSheets.length;i++){theRules[i]=new Array();if(document.styleSheets[i].cssRules)
theRules[i]=document.styleSheets[i].cssRules;else if(document.styleSheets[i].rules)
theRules[i]=document.styleSheets[i].rules;if(theRules[i].length==0)
continue;for(var j=0;j<theRules[i].length;j++){var selText=theRules[i][j].selectorText;if(isSelector(selText,itemHover))
dst=theRules[i][j];else if(isSelector(selText,item))
src=theRules[i][j];}}
if(src&&dst){var srcCss=src.style.cssText+"; ";srcCss+=dst.style.cssText;dst.style.cssText=srcCss;}
return;}}
function isSelector(selText,selName){var reg=new RegExp("([\\s]+)","g");var selTextArr=selText.split(reg);for(var i=0;i<selTextArr.length;i++){var oneSelArr=selTextArr[i].split(".");var oneSel=oneSelArr[oneSelArr.length-1];if(oneSel.toLowerCase()==selName.toLowerCase())
break;}
return(i<selTextArr.length);}
function getControlByHtmlChild(objHtml){result=null;if(objHtml){var target=objHtml;while(target&&!DHTML_getAttr(target,"owc:Control"))
target=target.parentNode;result=((target&&target.m_OwcControl)?target.m_OwcControl:null);}
return result;}
function DHTML_isDescendent(descendentNode,ancestorNode){var retVal=false;var target=descendentNode;try
{while(target&&target.parentNode&&!(retVal=(target==ancestorNode))){target=target.parentNode;}}
catch(ex)
{}
return retVal;}
function DHTML_CollectGarbage()
{if(typeof(CollectGarbage)!="undefined")
setTimeout(CollectGarbage,100);}
function DHTML_GetIFrameDocument(oIFrame)
{if(!oIFrame)
return null;var oDoc=null;if(oIFrame.contentWindow)
oDoc=oIFrame.contentWindow.document;else if(oIFrame.contentDocument)
oDoc=oIFrame.contentDocument;else if(oIFrame.document)
oDoc=oIFrame.document;return oDoc;}
function QueryString()
{}
function QueryString_ApplyPrototype(rObject)
{if(RegExp.compile)
{rObject.m_reParam=new RegExp();rObject.m_reParam.compile("(?:&|^)(\\w+)\\s*=([^&]*)","g");}
else
rObject.m_reParam=new RegExp("(?:&|^)(\\w+)\\s*=([^&]*)","g");rObject.m_arrParams=null;rObject.m_bCaseSensitive=false;rObject.m_bBase64=false;rObject.Count=0;rObject.clear=QueryString_clear;rObject.parseUrl=QueryString_parseUrl;rObject.parseUrlQuery=QueryString_parseUrlQuery;rObject.getQueryString=QueryString_getQueryString;rObject.addParam=QueryString_addParam;rObject.getParam=QueryString_getParam;rObject.removeParam=QueryString_removeParam;rObject.appendParams=QueryString_appendParams;rObject.moveParam=QueryString_moveParam;rObject.getEncodedParam=QueryString_getEncodedParam;rObject.getDecodedParam=QueryString_getDecodedParam;}
QueryString_ApplyPrototype(QueryString.prototype);function QueryString_clear()
{this.m_arrParams=null;}
function QueryString_parseUrl(sUrl)
{var sUrlQuery="";var nQueryStringStart=sUrl.indexOf("?");if(nQueryStringStart>=0)
sUrlQuery=sUrl.substr(nQueryStringStart+1);this.parseUrlQuery(sUrlQuery);}
function QueryString_parseUrlQuery(sUrlQuery)
{this.clear();if(!sUrlQuery)
return;var arrMatches=null;while((arrMatches=this.m_reParam.exec(sUrlQuery))!=null)
{var sParamName=arrMatches[1];var sParamValue=arrMatches[2];var sValue="";try
{sValue=decodeURIComponent(sParamValue);}
catch(ex)
{sValue=unescape(sParamValue);}
this.addParam(sParamName,sValue,false,true);}}
function QueryString_getQueryString(sParamSeparator,sNameSeparator,bEncodeValues)
{var paramList=this.m_arrParams;if(!paramList)
return"";if(sParamSeparator==undefined)
sParamSeparator="&";if(sNameSeparator==undefined)
sNameSeparator="=";if(bEncodeValues==undefined)
bEncodeValues=true;var sQueryString=[];var iValue,valueCount;for(var sParamName in paramList)
{var arrParamValues=paramList[sParamName];if(!arrParamValues)
continue;valueCount=arrParamValues.length;for(iValue=0;iValue<valueCount;++iValue)
sQueryString.push([sParamName,bEncodeValues?encodeURIComponent(arrParamValues[iValue]):arrParamValues[iValue]].join(sNameSeparator))}
return sQueryString.join(sParamSeparator);}
function QueryString_addParam(sParamName,sParamValue,bReplaceIfFound,bDoNotEncode)
{if(!this.m_arrParams)
this.m_arrParams=new Object();if(!this.m_bCaseSensitive)
sParamName=sParamName.toLowerCase();if(bDoNotEncode==undefined)
bDoNotEncode=false;var arrParamValues=null;if(!(sParamName in this.m_arrParams))
{arrParamValues=new Array();this.m_arrParams[sParamName]=arrParamValues;++this.Count;}
else
arrParamValues=this.m_arrParams[sParamName];if(bReplaceIfFound&&arrParamValues.length>0)
arrParamValues[0]=bDoNotEncode?sParamValue:this.getEncodedParam(sParamValue);else
arrParamValues.push(bDoNotEncode?sParamValue:this.getEncodedParam(sParamValue));}
function QueryString_getParam(sParamName,iIndex,bDoNotDecode)
{if(!this.m_arrParams)
return null;if(!this.m_bCaseSensitive)
sParamName=sParamName.toLowerCase();if(sParamName in this.m_arrParams)
{var arrParamValues=this.m_arrParams[sParamName];var paramValue=(typeof(iIndex)!="undefined"?arrParamValues[iIndex]:arrParamValues);if(bDoNotDecode)
return paramValue;else
return this.getDecodedParam(paramValue);}
return null;}
function QueryString_removeParam(sParamName)
{if(!this.m_arrParams)
return;if(!this.m_bCaseSensitive)
sParamName=sParamName.toLowerCase();if(sParamName in this.m_arrParams)
{delete this.m_arrParams[sParamName];--this.Count;}}
function QueryString_appendParams(oSrcParams,bReplaceIfFound)
{if(!oSrcParams||!oSrcParams.m_arrParams)
return;for(var sParamName in oSrcParams.m_arrParams)
{var arrParamValues=oSrcParams.m_arrParams[sParamName];if(!arrParamValues)
continue;for(var iValue=0;iValue<arrParamValues.length;++iValue)
this.addParam(sParamName,arrParamValues[iValue],bReplaceIfFound);}}
function QueryString_moveParam(oSrcParams,paramName,bReplaceIfFound)
{if(!oSrcParams||!oSrcParams.m_arrParams)
return;var arrParamValues=oSrcParams.m_arrParams[paramName];if(!arrParamValues)
return;for(var iValue=0;iValue<arrParamValues.length;++iValue)
this.addParam(paramName,arrParamValues[iValue],bReplaceIfFound);oSrcParams.removeParam(paramName);}
function QueryString_getEncodedParam(sParamValue)
{if(this.m_bBase64)
return Base64.encode(sParamValue);else
return sParamValue;}
function QueryString_getDecodedParam(vParamValue)
{if(this.m_bBase64)
{var vNewParamValue="";if(!vParamValue)
return vNewParamValue;if(typeof(vParamValue)=="object"&&vParamValue.length)
{vNewParamValue=new Array();for(var index=0;index<vParamValue.length;++index)
vNewParamValue.push(Base64.decode(vParamValue[index]));}
else
{vNewParamValue=Base64.decode(vParamValue);}
return vNewParamValue;}
else
return vParamValue;}
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.",encode:function(input)
{var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;if(typeof(input)!="string")
input+="";input=Base64._utf8_encode(input);while(i<input.length)
{chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2))
{enc3=enc4=64;}
else if(isNaN(chr3))
{enc4=64;}
output=output+
this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+
this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4);}
return output;},decode:function(input)
{var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\-\_\.]/g,"");while(i<input.length)
{enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64)
{output=output+String.fromCharCode(chr2);}
if(enc4!=64)
{output=output+String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string)
{string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++)
{var c=string.charCodeAt(n);if(c<128)
{utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048))
{utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else
{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext)
{var string="";var i=0;var c=c1=c2=0;while(i<utftext.length)
{c=utftext.charCodeAt(i);if(c<128)
{string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224))
{c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else
{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
function Url_appendParameter(sUrl,sParamName,sParamValue,bUnique)
{if(!sParamName)
return sUrl;var sParamEq=sParamName+"=";var sAmpParamEq="&"+sParamEq;if(bUnique===true&&sUrl&&(sUrl.substring(0,sParamEq.length)==sParamEq||sUrl.indexOf(sAmpParamEq)!=-1))
return sUrl;if(sUrl&&(sUrl.length>0))
sUrl+=sAmpParamEq;else
sUrl+=sParamEq;if(sParamValue===null||(sParamValue==undefined))
sParamValue="";sUrl+=encodeURIComponent(sParamValue);return sUrl;}
function DHTML_isInputElem(oDomNode,sType)
{if(!oDomNode||(oDomNode.nodeType!=1))
return false;if(oDomNode.tagName.toLowerCase()!="input")
return false;return(!sType||(DHTML_getAttr(oDomNode,"type").toLowerCase()==sType.toLowerCase()));}
function DHTML_isCheckboxElem(oDomNode)
{return DHTML_isInputElem(oDomNode,"checkbox");}
function DHTML_isSelectElem(oDomNode)
{if(!oDomNode||(oDomNode.nodeType!=1))
return false;return(oDomNode.tagName.toLowerCase()=="select");}
function DHTML_isImageElem(oDomNode)
{if(!oDomNode||(oDomNode.nodeType!=1))
return false;return(oDomNode.tagName.toLowerCase()=="img");}
function DHTML_isHiddenElem(oDomNode,bDoNotCheckAncestors)
{while(oDomNode&&(oDomNode.nodeType==1))
{var sDisplay=DHTML_getStyle(oDomNode,"display").toLowerCase();if(sDisplay=="none")
return true;if(bDoNotCheckAncestors)
break;oDomNode=oDomNode.parentNode;}
return false;}
function DHTML_isDisabledElem(oDomNode)
{if(!oDomNode||(oDomNode.nodeType!=1))
return true;return oDomNode.disabled;}
function DHTML_getStyle(oElem,sCssStyle)
{var sValue="";if(document.defaultView&&document.defaultView.getComputedStyle)
{var oDoc=getOwnerDoc(oElem);if(!oDoc)
oDoc=document;var oComputedStyle=oDoc.defaultView.getComputedStyle(oElem,null);if(oComputedStyle)
sValue=oComputedStyle.getPropertyValue(sCssStyle);}
else if(oElem.currentStyle)
{sCssStyle=sCssStyle.replace(/\-(\w)/g,function(strMatch,p1){return p1.toUpperCase();});sValue=oElem.currentStyle[sCssStyle];}
return sValue;}
function DHTML_computeCssSize(oElem,sCssStyle)
{var sValue=DHTML_getStyle(oElem,sCssStyle);if(!sValue)
return 0;var rePixels=/([0-9]+)px/i;var arrMatch=rePixels.exec(sValue);if(arrMatch)
return parseInt(arrMatch[1],10);return 0;}
function DHTML_getRootElement(oDocument)
{if(!oDocument)
oDocument=document;var oRootElem=getChildObjectByTag(oDocument,"body",0);if(!oRootElem)
oRootElem=getChildObjectByTag(oDocument,"frameset",0);return oRootElem;}
function DHTML_Layout(oDocument)
{if(DHTML_Layout.initialized)
return;if(!oDocument)
oDocument=document;var oLayout=arguments.callee;var oRootElem=DHTML_getRootElement(oDocument);var oTempDiv=oDocument.createElement("div");oTempDiv.style.position="absolute";oTempDiv.style.width="50px";oTempDiv.style.height="50px";oTempDiv.style.margin="0px";oTempDiv.style.padding="0px";oRootElem.appendChild(oTempDiv);oTempDiv.style.padding="1px";if(oTempDiv.offsetWidth==50)
oLayout.excludePadding=false;else
oLayout.excludePadding=true;oTempDiv.style.padding="";oTempDiv.style.border="solid 1px black";if(oTempDiv.offsetWidth==50)
oLayout.excludeBorder=false;else
oLayout.excludeBorder=true;oTempDiv.style.border="";oRootElem.removeChild(oTempDiv);DHTML_Layout.initialized=true;}
DHTML_Layout.initialized=false;DHTML_Layout.excludePadding=true;DHTML_Layout.excludeBorder=true;function DHTML_setElemWidth(oHtmlElement,nWidth)
{if(!oHtmlElement)
return;if(!DHTML_Layout.initialized)
DHTML_Layout(oHtmlElement.ownerDocument);var nOffset=0;if(!isSafari())
{nOffset+=DHTML_computeCssSize(oHtmlElement,"margin-left");nOffset+=DHTML_computeCssSize(oHtmlElement,"margin-right");}
if(DHTML_Layout.excludeBorder)
{nOffset+=DHTML_computeCssSize(oHtmlElement,"border-left-width");nOffset+=DHTML_computeCssSize(oHtmlElement,"border-right-width");}
if(DHTML_Layout.excludePadding)
{nOffset+=DHTML_computeCssSize(oHtmlElement,"padding-left");nOffset+=DHTML_computeCssSize(oHtmlElement,"padding-right");}
var nStyleWidth=((nWidth>nOffset)?nWidth-nOffset:0);oHtmlElement.style.width=String(nStyleWidth)+"px";}
function DHTML_setElemHeight(oHtmlElement,nHeight)
{if(!oHtmlElement)
return;if(!DHTML_Layout.initialized)
DHTML_Layout(oHtmlElement.ownerDocument);var nOffset=0;nOffset+=DHTML_computeCssSize(oHtmlElement,"margin-top");nOffset+=DHTML_computeCssSize(oHtmlElement,"margin-bottom");if(DHTML_Layout.excludeBorder)
{nOffset+=DHTML_computeCssSize(oHtmlElement,"border-top-width");nOffset+=DHTML_computeCssSize(oHtmlElement,"border-bottom-width");}
if(DHTML_Layout.excludePadding)
{nOffset+=DHTML_computeCssSize(oHtmlElement,"padding-top");nOffset+=DHTML_computeCssSize(oHtmlElement,"padding-bottom");}
var nStyleHeight=((nHeight>nOffset)?nHeight-nOffset:0);oHtmlElement.style.height=String(nStyleHeight)+"px";}
function DHTML_getElemWidth(oHtmlElement,nWidth)
{if(!oHtmlElement)
return 0;if(!DHTML_Layout.initialized)
DHTML_Layout(oHtmlElement.ownerDocument);if(nWidth==undefined)
nWidth=oHtmlElement.offsetWidth;if(!nWidth)
nWidth=0;if(DHTML_Layout.excludeBorder)
{nWidth+=DHTML_computeCssSize(oHtmlElement,"border-left-width");nWidth+=DHTML_computeCssSize(oHtmlElement,"border-right-width");}
nWidth+=DHTML_computeCssSize(oHtmlElement,"margin-left");nWidth+=DHTML_computeCssSize(oHtmlElement,"margin-right");return nWidth;}
function DHTML_getElemHeight(oHtmlElement,nHeight)
{if(!oHtmlElement)
return 0;if(!DHTML_Layout.initialized)
DHTML_Layout(oHtmlElement.ownerDocument);if(nHeight==undefined)
nHeight=oHtmlElement.offsetHeight;if(!nHeight)
nHeight=0;if(DHTML_Layout.excludeBorder)
{nHeight+=DHTML_computeCssSize(oHtmlElement,"border-top-width");nHeight+=DHTML_computeCssSize(oHtmlElement,"border-bottom-width");}
nHeight+=DHTML_computeCssSize(oHtmlElement,"margin-top");nHeight+=DHTML_computeCssSize(oHtmlElement,"margin-bottom");return nHeight;}
function DHTML_getElemClientLeft(oElement)
{var nPos=0;var oCurElem=oElement;while(oCurElem!=null)
{nPos+=oCurElem.offsetLeft;oCurElem=oCurElem.offsetParent;}
return nPos;}
function DHTML_getElemClientRight(oElement)
{return DHTML_getElemClientLeft(oElement)+oElement.offsetWidth;}
function DHTML_getElemClientTop(oElement)
{var nPos=0;var oCurElem=oElement;while(oCurElem!=null)
{nPos+=oCurElem.offsetTop;oCurElem=oCurElem.offsetParent;}
return nPos;}
function DHTML_getElemClientBottom(oElement)
{return DHTML_getElemClientTop(oElement)+oElement.offsetHeight;}
function DHTML_addToFavorites(sLinkUrl,sEntryTitle)
{if(!sLinkUrl||!sEntryTitle)
return false;if(getMinIEVersion()>=5.5)
window.external.AddFavorite(sLinkUrl,sEntryTitle);else if(window.sidebar)
window.sidebar.addPanel(sEntryTitle,sLinkUrl,"");else
return false;return true;}
function DHTML_setTooltip(oHtmlElem,sText)
{if(oHtmlElem||oHtmlElem!=undefined)
setAttr(oHtmlElem,"title",sText);}
function DHTML_removeTooltip(oHtmlElem)
{if(oHtmlElem||oHtmlElem!=undefined)
oHtmlElem.removeAttribute("title");}
function DHTML_setAlt(oHtmlElem,sText)
{if(oHtmlElem||oHtmlElem!=undefined)
setAttr(oHtmlElem,"alt",sText);}
function DHTML_removeAlt(oHtmlElem)
{if(oHtmlElem||oHtmlElem!=undefined)
oHtmlElem.removeAttribute("alt");}
function DHTML_getSelectValuesAsArray(oSelectHtmlElement,oArray)
{if(oSelectHtmlElement&&oSelectHtmlElement.options&&oArray)
{var length=oSelectHtmlElement.options.length;for(var i=0;i<length;i++)
{oArray[i]=oSelectHtmlElement.options[i].value;}}}
if(typeof(DHTML)=="undefined")
{JScript.Type.RegisterNamespace("DHTML");function DHTML_ApplyPrototype(rClassProto)
{rClassProto.Walk=DHTML_Walk;rClassProto.WalkRecursive=DHTML_WalkRecursive;rClassProto.WalkRecursiveEx=DHTML_WalkRecursiveEx;rClassProto.matchElemTag=DHTML_matchElemTag;rClassProto.isInputElem=DHTML_isInputElem;rClassProto.isCheckboxElem=DHTML_isCheckboxElem;rClassProto.isRadioButton=DHTML_isRadioButton;rClassProto.isSelectElem=DHTML_isSelectElem;rClassProto.isImageElem=DHTML_isImageElem;rClassProto.getAttr=DHTML_getAttr;rClassProto.getAttrBoolean=DHTML_getAttrBoolean;rClassProto.getAttrNumber=DHTML_getAttrNumber;rClassProto.getOwnerDoc=getOwnerDoc;rClassProto.getRootElement=DHTML_getRootElement;rClassProto.getIFrameDocument=DHTML_GetIFrameDocument;rClassProto.getParent=getParent;rClassProto.isDescendent=DHTML_isDescendent;rClassProto.getCellIndex=DHTML_getCellIndex;rClassProto.setTooltip=DHTML_setTooltip;rClassProto.removeTooltip=DHTML_removeTooltip;rClassProto.getValue=DHTML_getValue;rClassProto.setValue=DHTML_setValue;rClassProto.getInnerHtml=DHTML_getInnerHtml;rClassProto.getTextContent=DHTML_getTextContent;rClassProto.pasteHtmlContent=DHTML_pasteHtmlContent;rClassProto.clearHtmlContent=DHTML_clearHtmlContent;rClassProto.addCssClassToElem=DHTML_addCssClassToElem;rClassProto.removeCssClassFromElem=DHTML_removeCssClassFromElem;rClassProto.replaceCssClassToElem=DHTML_replaceCssClassToElem;rClassProto.isCssClassAppears=DHTML_isCssClassAppears;rClassProto.getStyle=DHTML_getStyle;rClassProto.copyStyles=DHTML_copyStyles;rClassProto.setOpacity=DHTML_setOpacity;rClassProto.isHiddenElem=DHTML_isHiddenElem;rClassProto.isDisabledElem=DHTML_isDisabledElem;rClassProto.computeCssSize=DHTML_computeCssSize;rClassProto.Layout=DHTML_Layout;rClassProto.cssFindRuleInDocument=DHTML_cssFindRuleInDocument;rClassProto.cssFindAllRulesForInDocument=DHTML_cssFindAllRulesForInDocument;rClassProto.cssFindRuleIndex=DHTML_cssFindRuleIndex;rClassProto.cssFindRule=DHTML_cssFindRule;rClassProto.cssFindAllRulesFor=DHTML_cssFindAllRulesFor;rClassProto.cssInsertRule=DHTML_cssInsertRule;rClassProto.cssDeleteRule=DHTML_cssDeleteRule;rClassProto.attachEvent=DHTML_attachEvent;rClassProto.detachEvent=DHTML_detachEvent;rClassProto.eventStopBubbling=stopEventBubbling;rClassProto.eventPreventDefaultAction=preventEventDefaultAction;rClassProto.eventGetObject=getEvent;rClassProto.eventGetTarget=getEventTarget;rClassProto.eventGetMouseOutEnterObj=getMouseOutEnterObj;rClassProto.eventGetMouseButtons=getEventMouseButtons;rClassProto.eventGetClientX=getEventClientX;rClassProto.eventGetClientY=getEventClientY;rClassProto.eventGetPageX=getEventPageX;rClassProto.eventGetPageY=getEventPageY;rClassProto.eventGetPageFullX=getEventPageFullX;rClassProto.eventGetPageFullY=getEventPageFullY;rClassProto.eventGetPageFullY2=getEventPageFullY2;rClassProto.findOffsetParent=findOffsetParent;rClassProto.getOffsetParent=DHTML_getOffsetParent;rClassProto.getLeft=findPosLeft;rClassProto.getTop=findPosTop;rClassProto.getLeft1=findPosLeft1;rClassProto.getTop1=findPosTop1;rClassProto.getWindowTop=getWindowTop;rClassProto.getWindowLeft=getWindowLeft;rClassProto.getScrollOffsetX=getScrollOffsetX;rClassProto.getScrollOffsetY=getScrollOffsetY;rClassProto.getInnerHeight=getInnerHeight;rClassProto.getInnerWidth=getInnerWidth;rClassProto.getElemWidth=DHTML_getElemWidth;rClassProto.setElemWidth=DHTML_setElemWidth;rClassProto.getElemHeight=DHTML_getElemHeight;rClassProto.setElemHeight=DHTML_setElemHeight;rClassProto.getElemClientLeft=DHTML_getElemClientLeft;rClassProto.getElemClientRight=DHTML_getElemClientRight;rClassProto.getElemClientTop=DHTML_getElemClientTop;rClassProto.getElemClientBottom=DHTML_getElemClientBottom;rClassProto.setCookie=DHTML_setCookie;rClassProto.getCookie=DHTML_getCookie;rClassProto.deleteCookie=DHTML_deleteCookie;if(typeof(window.clipboardData)=="object")
{rClassProto.copyToClipboard=IE_DHTML_copyToClipboard;rClassProto.getClipboardText=IE_DHTML_getClipboardText;}
else if(typeof(netscape)=="object")
{try
{netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');rClassProto.copyToClipboard=Mozilla_DHTML_copyToClipboard;rClassProto.getClipboardText=Mozilla_DHTML_getClipboardText;}
catch(ex)
{rClassProto.copyToClipboard=null;rClassProto.getClipboardText=null;}}
else
{rClassProto.copyToClipboard=null;rClassProto.getClipboardText=null;}
rClassProto.focus=DHTML_focus;rClassProto.newError=DHTML_newError;rClassProto.addToFavorites=DHTML_addToFavorites;rClassProto.CollectGarbage=DHTML_CollectGarbage;}
function DHTML_isRadioButton(oDomNode)
{return this.isInputElem(oDomNode,"radio");}
DHTML_ApplyPrototype(DHTML);}
JScript.Type.RegisterNamespace("Olive");if(typeof(OwcGlobals)=="undefined")
OwcGlobals=new Object();if(!OwcGlobals.standardInit)
OwcGlobals.standardInit=OwcGlobals_standardInit;if(!Olive.Resources)
{JScript.Type.RegisterNamespace("Olive.Resources");Olive.Resources.ResName={};Olive.Resources.defineResString=function OwcResources_defineResString(sResName,sResString,bDoNotReplace)
{if(!this.m_arrResources)
this.m_arrResources=new Array();sResName=sResName.toUpperCase();if((sResName in this.m_arrResources)&&bDoNotReplace)
return;this.m_arrResources[sResName]=sResString;}
Olive.Resources.getResString=function OwcResources_getResString(sResName)
{if(!sResName)
return"";sResName=sResName.toUpperCase();if(this.m_arrResources&&(sResName in this.m_arrResources))
return this.m_arrResources[sResName];return"";}
Olive.Resources.defineGlobalResString=function OwcResources_defineGlobalResString(sResConstName,sResName,sResString,bDoNotReplace)
{this.ResName[sResConstName]=sResName;if(bDoNotReplace==undefined)
bDoNotReplace=true;this.defineResString(sResName,sResString,bDoNotReplace);}}
if(!Olive.Errors)
{JScript.Type.RegisterNamespace("Olive.Errors");Olive.Errors.Code=[];Olive.Errors.FirstSdkErrorId=2000;Olive.Errors.getErrorInfo=function OwcErrors_getErrorInfo(nErrId)
{if(!this.m_arrErrorInfo)
return null;return this.m_arrErrorInfo[nErrId];}
Olive.Errors.createError=function OwcErrors_createError(nErrId)
{var oErrorInfo=this.getErrorInfo(nErrId);var nErrCode,sErrMsg,bCreateDefaultMessage=true;if(oErrorInfo)
{bCreateDefaultMessage=false;nErrCode=(oErrorInfo.errorCode?oErrorInfo.errorCode:nErrId);var sFormatString=null;if(oErrorInfo.errorMsgFormatResId)
sFormatString=Olive.Errors.getLocalizedFormatString(oErrorInfo.errorMsgFormatResId);else if(oErrorInfo.errorMsgFormatString)
sFormatString=oErrorInfo.errorMsgFormatString;if(sFormatString)
sErrMsg=String_format_arg(sFormatString,arguments,1);else if(oErrorInfo.errorMsgResId)
sErrMsg=Olive.Resources.getResString(oErrorInfo.errorMsgResId);else if(oErrorInfo.errorMsg)
sErrMsg=oErrorInfo.errorMsg;else
bCreateDefaultMessage=true;}
else
nErrCode=nErrId;if(bCreateDefaultMessage)
{sErrMsg=Olive.Errors.getLocalizedErrorMsg(Olive.Resources.ResName.ErrorOccured);for(var iArg=1;iArg<arguments.length;++iArg)
sErrMsg+=" "+String(arguments[iArg]);}
return DHTML.newError(nErrId,sErrMsg);}
Olive.Errors.defineKnownError=function OwcErrors_defineKnownError(sConstName,nErrId,sErrMsgFormatResId,nErrCode)
{var oErrorInfo=new Object();if(nErrCode!=undefined)
oErrorInfo.errorCode=nErrCode;oErrorInfo.errorMsgFormatResId=sErrMsgFormatResId;Olive.Errors.Code[sConstName]=nErrId;if(!this.m_arrErrorInfo)
this.m_arrErrorInfo=new Array();this.m_arrErrorInfo[nErrId]=oErrorInfo;}
Olive.Errors.getLocalizedFormatString=function OwcErrors_getLocalizedFormatString(sErrorKey)
{if(typeof(OwcGetApplication)!="undefined"&&OwcGetApplication())
{var oAppObj=OwcGetApplication();return oAppObj.getResString(sErrorKey);}
else
{return Olive.Resources.getResString(sErrorKey);}}
Olive.Errors.getLocalizedErrorMsg=function OwcErrors_getLocalizedErrorMsg(sErrorKey,oValue)
{var sFormatString=Olive.Errors.getLocalizedFormatString(sErrorKey);var arguments=new Array(oValue);return String_format_arg(sFormatString,arguments,0);}}
function OwcGlobals_standardInit()
{if(!this.DefaultDataProvider)
this.DefaultDataProvider="GetContent.asp";Olive.Resources.defineGlobalResString("Downloading","Downloading","Downloading data, please wait...");Olive.Resources.defineGlobalResString("EMailSubjectFormat","EMailSubjectFormat","\"%1\" in %2");Olive.Resources.defineGlobalResString("EMailSubjectDefault","EMailSubjectDefault","An interesting article");Olive.Resources.defineGlobalResString("EMailBodyFormat","EMailBodyFormat","Please see <a href=\"%2\" target=\"_blank\">%1</a><br/>");Olive.Resources.defineGlobalResString("EMailBadAddress","EMailBadAddress","\'%1\' is not a valid e-mail address");Olive.Resources.defineGlobalResString("EMailBadAddressList","EMailBadAddressList","\'%1\' is not a valid e-mail address list");Olive.Resources.defineGlobalResString("BAD_STRING","BAD_STRING","String value is expected");Olive.Resources.defineGlobalResString("BAD_BOOLEAN","BAD_BOOLEAN","Boolean value is expected");Olive.Resources.defineGlobalResString("BAD_NUMBER","BAD_NUMBER","Numeric value is expected");Olive.Resources.defineGlobalResString("BAD_DATE_STRING","BAD_DATE_STRING","Date value is expected");Olive.Resources.defineGlobalResString("BAD_YEAR","BAD_YEAR","Year value is expected");Olive.Resources.defineGlobalResString("BAD_MONTH","BAD_MONTH","Valid month number is an integer between 1 and 12");Olive.Resources.defineGlobalResString("BAD_DAY","BAD_DAY","Valid day number is an integer between 1 and 31");Olive.Resources.defineGlobalResString("BAD_PAGE_NO","BAD_PAGE_NO","This page is invalid.");Olive.Resources.defineGlobalResString("DefaultFavoritesTitle","DefaultFavoritesTitle","An interesting link");Olive.Resources.defineGlobalResString("VIEWER_MENU_PAGE_LABEL_SINGLE","VIEWER_MENU_PAGE_LABEL_SINGLE","%2 of %5");Olive.Resources.defineGlobalResString("VIEWER_MENU_PAGE_LABEL_DOUBLE","VIEWER_MENU_PAGE_LABEL_DOUBLE","%2/%4 of %5");Olive.Resources.defineGlobalResString("ErrorOccured","ErrorOccured","Error occured");Olive.Resources.defineGlobalResString("Err_LoadSettings","Err_LoadSettings","Error loading settings: \'%1\'");Olive.Resources.defineGlobalResString("Err_FavoritesNotSupported","Err_FavoritesNotSupported","This link is active only with Firefox or Microsoft Internet Explorer 5.5 (or higher) for Windows");Olive.Resources.defineGlobalResString("Err_ClipboardNotSupported","Err_ClipboardNotSupported","This link is active only with Microsoft Internet Explorer 5.0 or higher for Windows");Olive.Resources.defineGlobalResString("Err_CopyToClipboardFailed","Err_CopyToClipboardFailed","Unable to add this item to the clipboard\nUrl: \'%1\'");Olive.Resources.defineGlobalResString("Err_ServerError","Err_ServerError","Error loading data from server: \'%1\'");Olive.Resources.defineGlobalResString("Err_HtmlAttrMissing","Err_HtmlAttrMissing","A required \'%1\' HTML attribute is missing.");Olive.Resources.defineGlobalResString("Err_EndOfArticle","Err_EndOfArticle","You are currently viewing the end of the article");Olive.Resources.defineGlobalResString("Err_StartOfArticle","Err_StartOfArticle","You are currently viewing the beginning of the article");Olive.Resources.defineGlobalResString("Err_MediaNotInserted","Err_MediaNotInserted","Media is not inserted.  Please, insert media and repeat the operation.");Olive.Resources.defineGlobalResString("Err_NoFlashProxy","Err_NoFlashProxy","Command failed - Flash object was not found");Olive.Resources.defineGlobalResString("Err_NoProgressiveDownload","Err_NoProgressiveDownload","Error: Cannot initiate progressive downloading. Reason: server did not supply enough parameters");Olive.Resources.defineGlobalResString("Err_UnknownControlType","Err_UnknownControlType","\'%1\' is not a known Olive Web control type name");Olive.Resources.defineGlobalResString("Err_UnknownSearchOption","Err_UnknownSearchOption","\'%1\' is not a supported Olive search option name");Olive.Resources.defineGlobalResString("NO_PAGE","NO_PAGE","Olive.Page.bind(): Netiher <body> nor <frameset> elements are found on HTML page");Olive.Resources.defineGlobalResString("Err_MandatoryField","Err_MandatoryField","The following field is mandatory: \'%1\'");Olive.Resources.defineGlobalResString("Err_InvalidHtmlAttrValue","Err_InvalidHtmlAttrValue","The following value for the attribute \'%1\' is invalid: \'%2\'");Olive.Resources.defineGlobalResString("Err_InvalidNavigation","Err_InvalidNavigation","The requested location does not exist");Olive.Resources.defineGlobalResString("Err_NotSupported","Err_NotSupported","%1 is not supported");Olive.Resources.defineGlobalResString("Err_UnknownType","Err_UnknownType","Cannot find definition of '%1' (%2)");Olive.Resources.defineGlobalResString("Err_TypeInfoMissing","Err_TypeInfoMissing","Type information is missing for '%1'");Olive.Resources.defineGlobalResString("Err_ParamMissing","Err_ParamMissing","'%1' parameter is required and cannot be <null> or <undefined>");Olive.Resources.defineGlobalResString("Err_MemberNotFound","Err_MemberNotFound","'%1' member of '%2' is not found ");Olive.Resources.defineGlobalResString("Err_UpdateFlashPlayer","Err_UpdateFlashPlayer","The version of Adobe Flash Player necessary for the optimal performance of this software has not been found on your computer. Its installation is highly recommended. Please, open the following URL in the new browser window to update your Adobe Flash Player: %3");Olive.Resources.defineGlobalResString("Err_InvalidData","Err_InvalidData","Data is not valid");Olive.Resources.defineGlobalResString("Err_AccessError","Err_AccessError","Access error");Olive.Resources.defineGlobalResString("Err_CreateObjectFailure","Err_CreateObjectFailure","Failed to create %1.");Olive.Resources.defineGlobalResString("Err_AuthenticationFailed","Err_AuthenticationFailed","Authentication failure.");Olive.Errors.defineKnownError("CannotLoadSettings",Olive.Errors.FirstSdkErrorId,Olive.Resources.ResName.Err_LoadSettings);Olive.Errors.defineKnownError("AddToFavoritesNotSupported",Olive.Errors.FirstSdkErrorId+1,Olive.Resources.ResName.Err_FavoritesNotSupported);Olive.Errors.defineKnownError("ClipboardNotSupported",Olive.Errors.FirstSdkErrorId+2,Olive.Resources.ResName.Err_ClipboardNotSupported);Olive.Errors.defineKnownError("CopyToClipboardFailed",Olive.Errors.FirstSdkErrorId+3,Olive.Resources.ResName.Err_CopyToClipboardFailed);Olive.Errors.defineKnownError("LoadDataFailed",Olive.Errors.FirstSdkErrorId+4,Olive.Resources.ResName.Err_ServerError);Olive.Errors.defineKnownError("HtmlAttrMissing",Olive.Errors.FirstSdkErrorId+5,Olive.Resources.ResName.Err_HtmlAttrMissing);Olive.Errors.defineKnownError("EndOfArticle",Olive.Errors.FirstSdkErrorId+6,Olive.Resources.ResName.Err_EndOfArticle);Olive.Errors.defineKnownError("StartOfArticle",Olive.Errors.FirstSdkErrorId+7,Olive.Resources.ResName.Err_StartOfArticle);Olive.Errors.defineKnownError("MediaNotInserted",Olive.Errors.FirstSdkErrorId+8,Olive.Resources.ResName.Err_MediaNotInserted);Olive.Errors.defineKnownError("NoFlashProxy",Olive.Errors.FirstSdkErrorId+9,Olive.Resources.ResName.Err_NoFlashProxy);Olive.Errors.defineKnownError("NoProgressiveDownload",Olive.Errors.FirstSdkErrorId+10,Olive.Resources.ResName.Err_NoProgressiveDownload);Olive.Errors.defineKnownError("UnknownControlType",Olive.Errors.FirstSdkErrorId+11,Olive.Resources.ResName.Err_UnknownControlType);Olive.Errors.defineKnownError("UnknownSearchOption",Olive.Errors.FirstSdkErrorId+12,Olive.Resources.ResName.Err_UnknownSearchOption);Olive.Errors.defineKnownError("NoPage",Olive.Errors.FirstSdkErrorId+13,Olive.Resources.ResName.NO_PAGE);Olive.Errors.defineKnownError("MandatoryField",Olive.Errors.FirstSdkErrorId+14,Olive.Resources.ResName.Err_MandatoryField);Olive.Errors.defineKnownError("InvalidHtmlAttrValue",Olive.Errors.FirstSdkErrorId+15,Olive.Resources.ResName.Err_InvalidHtmlAttrValue);Olive.Errors.defineKnownError("InvalidNavigation",Olive.Errors.FirstSdkErrorId+16,Olive.Resources.ResName.Err_InvalidNavigation);Olive.Errors.defineKnownError("NotSupported",Olive.Errors.FirstSdkErrorId+17,Olive.Resources.ResName.Err_NotSupported);Olive.Errors.defineKnownError("UnknownType",Olive.Errors.FirstSdkErrorId+18,Olive.Resources.ResName.Err_UnknownType);Olive.Errors.defineKnownError("TypeInfoMissing",Olive.Errors.FirstSdkErrorId+19,Olive.Resources.ResName.Err_TypeInfoMissing);Olive.Errors.defineKnownError("ParamMissing",Olive.Errors.FirstSdkErrorId+20,Olive.Resources.ResName.Err_ParamMissing);Olive.Errors.defineKnownError("MemberNotFound",Olive.Errors.FirstSdkErrorId+21,Olive.Resources.ResName.Err_MemberNotFound);Olive.Errors.defineKnownError("UpdateFlashPlayer",Olive.Errors.FirstSdkErrorId+22,Olive.Resources.ResName.Err_UpdateFlashPlayer);Olive.Errors.defineKnownError("InvalidData",Olive.Errors.FirstSdkErrorId+23,Olive.Resources.ResName.Err_InvalidData);Olive.Errors.defineKnownError("AccessError",Olive.Errors.FirstSdkErrorId+24,Olive.Resources.ResName.Err_AccessError);Olive.Errors.defineKnownError("CreateObjectFailure",Olive.Errors.FirstSdkErrorId+25,Olive.Resources.ResName.Err_CreateObjectFailure);Olive.Errors.defineKnownError("InvalidPage",Olive.Errors.FirstSdkErrorId+26,Olive.Resources.ResName.BAD_PAGE_NO);Olive.Errors.defineKnownError("AuthenticationFailed",Olive.Errors.FirstSdkErrorId+27,Olive.Resources.ResName.Err_AuthenticationFailed);}
if(OwcGlobals.standardInit);OwcGlobals.standardInit()
if(OwcGlobals.customInit)
OwcGlobals.customInit();
if(typeof(Olive)=="undefined")
Olive=new Object();if(!Olive.XHTTP)
{JScript.Type.RegisterNamespace("Olive.XHTTP");Olive.XHTTP.Initialize=function OwcXmlHttp_Initialize()
{this.NextRequestId=0;if(window.XMLHttpRequest)
return Olive.XHTTP.Request.ApplyPrototype_XMLHTTP(Olive.XHTTP.Request.prototype,XMLHTTP_CreateRaw);if(window.ActiveXObject)
{var oXmlHttpRequest=null;try
{oXmlHttpRequest=new ActiveXObject("MSXML2.XMLHTTP");if(oXmlHttpRequest)
return Olive.XHTTP.Request.ApplyPrototype_XMLHTTP(Olive.XHTTP.Request.prototype,XMLHTTP_CreateMsXml2);}catch(ex){}
try
{oXmlHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");if(oXmlHttpRequest)
return Olive.XHTTP.Request.ApplyPrototype_XMLHTTP(Olive.XHTTP.Request.prototype,XMLHTTP_CreateMsXml);}catch(ex){}}
if(document&&document.createElement)
return Olive.XHTTP.Request.ApplyPrototype_XmlIsland(Olive.XHTTP.Request.prototype);return false;}
Olive.XHTTP.m_bInitiazlized=false;Olive.XHTTP.CreateRequest=function OwcXmlHttp_CreateRequest()
{if(!this.m_bInitiazlized)
{Olive.XHTTP.m_bInitiazlized=Olive.XHTTP.Initialize();if(!Olive.XHTTP.m_bInitiazlized)
{return null;}}
var oRequest=new Olive.XHTTP.Request();oRequest.id=Olive.XHTTP.NextRequestId++;oRequest.timeStart=new Date();oRequest.initialize();return oRequest;}}
if(!Olive.XHTTP.Request)
{Olive.XHTTP.Request=function OwcHttpRequest()
{}
Olive.XHTTP.Request.ApplyPrototype=function OwcHttpRequest_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"id",0);JScript.Type.DeclareField(rObject,"timeStart",null);JScript.Type.DeclareField(rObject,"timeDataReceived",null);JScript.Type.DeclareField(rObject,"timeProcessed",null);JScript.Type.DeclareMethod(rObject,"onDataReceived",null);JScript.Type.DeclareMethod(rObject,"onError",null);JScript.Type.DeclareMethod(rObject,"initialize",null);JScript.Type.DeclareMethod(rObject,"terminate",null);JScript.Type.DeclareMethod(rObject,"abort",null);JScript.Type.DeclareMethod(rObject,"load",null);JScript.Type.DeclareMethod(rObject,"getResponseText",null);JScript.Type.DeclareMethod(rObject,"getResponseXml",null);JScript.Type.DeclareMethod(rObject,"getResponsePart",OwcHttpRequest_GetResponsePart);JScript.Type.DeclareMethod(rObject,"notifyDataReceived",OwcHttpRequest_notifyDataReceived);JScript.Type.DeclareMethod(rObject,"notifyErrorOccured",OwcHttpRequest_notifyErrorOccured);}
Olive.XHTTP.Request.ApplyPrototype_XMLHTTP=function OwcXmlHttp_Initialize_XMLHTTP(rObject,rCreateObject)
{Olive.XHTTP.Request.ApplyPrototype(rObject);JScript.Type.ReplaceMethod(rObject,"initialize",OwcHttpRequest_XMLHTTP_Initialize);JScript.Type.ReplaceMethod(rObject,"terminate",OwcHttpRequest_XMLHTTP_Terminate);JScript.Type.ReplaceMethod(rObject,"abort",OwcHttpRequest_XMLHTTP_Abort);JScript.Type.ReplaceMethod(rObject,"load",OwcHttpRequest_XMLHTTP_load);JScript.Type.ReplaceMethod(rObject,"getResponseText",OwcHttpRequest_XMLHTTP_getResponseText);JScript.Type.ReplaceMethod(rObject,"getResponseXml",OwcHttpRequest_XMLHTTP_getResponseXml);JScript.Type.ReplaceMethod(rObject,"createXmlHttpRequest",rCreateObject);JScript.Type.ReplaceMethod(rObject,"onReadyStateChanged",OwcHttpRequest_XMLHTTP_onReadyStateChanged);return true;}
Olive.XHTTP.Request.ApplyPrototype_XmlIsland=function OwcXmlHttp_Initialize_XmlIsland(rObject)
{Olive.XHTTP.Request.ApplyPrototype(rObject);JScript.Type.ReplaceMethod(rObject,"initialize",OwcHttpRequest_XML_Initialize);JScript.Type.ReplaceMethod(rObject,"terminate",OwcHttpRequest_XML_Terminate);JScript.Type.ReplaceMethod(rObject,"abort",OwcHttpRequest_XML_Abort);JScript.Type.ReplaceMethod(rObject,"load",OwcHttpRequest_XML_load);JScript.Type.ReplaceMethod(rObject,"getResponseText",OwcHttpRequest_XML_getResponseText);JScript.Type.ReplaceMethod(rObject,"getResponseXml",OwcHttpRequest_XML_getResponseXml);JScript.Type.ReplaceMethod(rObject,"onReadyStateChanged",OwcHttpRequest_XML_onReadyStateChanged);return true;}
function OwcHttpRequest_notifyDataReceived()
{if(this.onDataReceived)
{if(typeof(this.onDataReceived)=="function")
this.onDataReceived(this);else
{var oCallback=eval(this.onDataReceived);if(oCallback&&typeof(oCallback)=="function")
oCallback.call(this,this);}}
if(this.m_oDataCallback)
{this.m_oDataCallback.OlvRequest=null;this.m_oDataCallback=null;}
this.terminate();}
function OwcHttpRequest_notifyErrorOccured(nErrCode,sErrText)
{if(this.onError)
{if(typeof(this.onError)=="function")
{this.onError(nErrCode,sErrText);return;}
var oCallback=eval(this.onError);if(oCallback&&typeof(oCallback)=="function")
oCallback.call(this,this,nErrCode,sErrText);}
if(this.m_oDataCallback)
{this.m_oDataCallback.OlvRequest=null;this.m_oDataCallback=null;}
this.terminate();}
function OwcHttpRequest_GetResponsePart(sStart,sEnd,sResponse)
{if(typeof(sResponse)=="undefined")
sResponse=this.getResponseText();var nStart=sResponse.indexOf(sStart);if(nStart<0)
return null;nStart+=sStart.length;var nEnd=sResponse.indexOf(sEnd,nStart);if(nStart<0)
return null;var sPart=sResponse.substr(nStart,nEnd-nStart);return sPart;}
function XMLHTTP_CreateRaw()
{return new XMLHttpRequest();}
function XMLHTTP_CreateMsXml2()
{return new ActiveXObject("MSXML2.XMLHTTP");}
function XMLHTTP_CreateMsXml()
{return ActiveXObject("Microsoft.XMLHTTP");}
function OwcHttpRequest_XMLHTTP_Initialize()
{this.m_oXmlHttpRequest=this.createXmlHttpRequest();var olvRequest=this;this.m_oDataCallback=function Owc_XMLHTTP_DataCallback()
{olvRequest.onReadyStateChanged();}
this.m_oXmlHttpRequest.onreadystatechange=this.m_oDataCallback;}
function OwcHttpRequest_XMLHTTP_Terminate()
{if(this.m_oXmlHttpRequest)
{this.m_oXmlHttpRequest=null;delete this.m_oXmlHttpRequest;}}
function OwcHttpRequest_XMLHTTP_Abort()
{if(this.m_oXmlHttpRequest)
{this.m_oXmlHttpRequest.onreadystatechange=function(){}
this.m_oXmlHttpRequest.abort();}
this.terminate();}
function OwcHttpRequest_XMLHTTP_load(sUrl,sMethod,bAsync,sPostData,sUsername,sPassword)
{if(typeof(sMethod)=="undefined")
sMethod=(sPostData?"POST":"GET");if(typeof(bAsync)=="undefined")
bAsync=true;if(!sUsername)
sUsername=null;if(!sPassword)
sPassword=null;if(typeof(sPostData)=="undefined")
sPostData=null;this.m_oXmlHttpRequest.open(sMethod,sUrl,bAsync,sUsername,sPassword);if(bAsync)
{var olvRequest=this;function OwcHttpRequest_Async_Send()
{if(olvRequest.m_oXmlHttpRequest)
olvRequest.m_oXmlHttpRequest.send(sPostData);}
setTimeout(OwcHttpRequest_Async_Send,0,"JavaScript");}
else
{this.m_oXmlHttpRequest.send(sPostData);if(!window.ActiveXObject)
this.onReadyStateChanged();}}
function OwcHttpRequest_XMLHTTP_getResponseText()
{if(this.m_oXmlHttpRequest)
return this.m_oXmlHttpRequest.responseText;}
function OwcHttpRequest_XMLHTTP_getResponseXml()
{if(this.m_oXmlHttpRequest)
return this.m_oXmlHttpRequest.responseXML;}
function OwcHttpRequest_XMLHTTP_onReadyStateChanged()
{if(!this.m_oXmlHttpRequest||this.m_oXmlHttpRequest.readyState!=4)
return;this.timeDataReceived=new Date();if(this.m_oXmlHttpRequest.status>=400)
this.notifyErrorOccured(this.m_oXmlHttpRequest.status,this.m_oXmlHttpRequest.statusText);else
this.notifyDataReceived()
this.timeProcessed=new Date();}
function OwcHttpRequest_XML_Initialize()
{this.m_oXMLRequest=document.createElement("XML");this.m_oXMLRequest.validateOnParse=false;var oCallback=new Function("arguments.callee.OlvRequest.onReadyStateChanged()");oCallback.OlvRequest=this;this.m_oDataCallback=oCallback;this.m_oXMLRequest.onreadystatechange=oCallback;}
function OwcHttpRequest_XML_Terminate()
{if(this.m_oXMLRequest)
{this.m_oXMLRequest=null;delete this.m_oXMLRequest;}}
function OwcHttpRequest_XML_Abort()
{}
function OwcHttpRequest_XML_load(sUrl,sMethod,bAsync,sPostData,sUsername,sPassword)
{if(typeof(sMethod)=="undefined")
sMethod="GET";if(typeof(bAsync)=="undefined")
bAsync=true;if(!sUsername)
sUsername=null;if(!sPassword)
sPassword=null;if(typeof(sPostData)=="undefined")
sPostData=null;this.m_oXMLRequest.async=bAsync;this.m_oXMLRequest.load(sUrl);}
function OwcHttpRequest_XML_getResponseText()
{if(this.m_oXMLRequest)
return this.m_oXMLRequest.xml;}
function OwcHttpRequest_XML_getResponseXml()
{return this.m_oXMLRequest;}
function OwcHttpRequest_XML_onReadyStateChanged()
{if(this.m_oXMLRequest.readyState!="interactive")
return;this.timeDataReceived=new Date();if(this.m_oXMLRequest.parseError.errorCode!=0)
this.notifyErrorOccured(this.m_oXMLRequest.parseError.errorCode,this.m_oXMLRequest.parseError.reason);else
this.notifyDataReceived()
this.timeProcessed=new Date();}}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(!Olive.EventClass)
{Olive.EventClass=function OwcEventClass()
{}
Olive.EventClass.prototype.name="";Olive.EventClass.prototype.handlerProperty=null;Olive.EventClass.prototype.supportsBubbling=false;Olive.EventClass.prototype.defaultAction=null;}
if(!Olive.Event)
{Olive.Event=function OwcEvent(rSrcObject,rEventClass)
{this.eventClass=rEventClass;if(rEventClass)
this.type=rEventClass.name;this.srcObject=rSrcObject;}
Olive.Event.prototype.eventClass=null;Olive.Event.prototype.type=null;Olive.Event.prototype.srcObject=null;Olive.Event.prototype.curObject=null;Olive.Event.prototype.cancelBubbling=false;Olive.Event.prototype.cancelDefaultAction=false;}
if(!Olive.EventSource)
{Olive.EventSource=function OwcEventSource()
{}
Olive.EventSource.ApplyPrototype=function OwcEventSource_ApplyPrototype(rObject,bDynamic)
{JScript.Type.DeclareField(rObject,"OwcEvents",new Array());JScript.Type.DeclareField(rObject,"OwcEventHandlers",null);JScript.Type.DeclareMethod(rObject,"registerOwcEventsClass",OwcEventSource_registerOwcEventsClass);JScript.Type.DeclareMethod(rObject,"registerOwcEventsClass2",OwcEventSource_registerOwcEventsClass2);JScript.Type.DeclareMethod(rObject,"getOwcEventsClass",OwcEventSource_getOwcEventsClass);JScript.Type.DeclareMethod(rObject,"attachOwcEventHandler",OwcEventSource_attachOwcEventHandler);JScript.Type.DeclareMethod(rObject,"detachOwcEventHandler",OwcEventSource_detachOwcEventHandler);JScript.Type.DeclareMethod(rObject,"detachAllOwcEventHandlers",OwcEventSource_detachAllOwcEventHandlers);JScript.Type.DeclareMethod(rObject,"createOwcEventObject",OwcEventSource_createOwcEventObject);JScript.Type.DeclareMethod(rObject,"fireOwcEvent",OwcEventSource_fireOwcEvent);JScript.Type.DeclareMethod(rObject,"attachHtmlEventHandlers",OwcEventSource_attachHtmlEventHandlers);}
Olive.EventSource.hookEvent=function OwcEventSource_hookEvent(rObject,sEventClass,oHook,oThis,nType)
{var oSrcEventClass=rObject.getOwcEventsClass(sEventClass);if(!oSrcEventClass)
throw DHTML.newError(0,"'"+sEventClass+"' event is not registered for this object");var oTrgEventClass=Object_Clone(oSrcEventClass);oTrgEventClass.defaultAction=Delegate.CreateDelegate(oHook,oThis,nType);rObject.registerOwcEventsClass(oTrgEventClass);}
function OwcEventSource_registerOwcEventsClass(oEventsClass)
{if(JScript.Type._declaring_type!=null&&!JScript.Type._declaring_type.declared)
JScript.Type._declaring_type.DeclareEvent(oEventsClass.name,oEventsClass);this.OwcEvents[oEventsClass.name]=oEventsClass;if(oEventsClass.handlerProperty&&!(oEventsClass.handlerProperty in this))
this[oEventsClass.handlerProperty]=null;}
function OwcEventSource_registerOwcEventsClass2(sName,sHandlerProperty,bSupportsBubbling,defaultAction,defaultActionObject,nDefaultActionType)
{var oEventClass=new Olive.EventClass();oEventClass.name=sName;if(sHandlerProperty)
oEventClass.handlerProperty=sHandlerProperty;if(bSupportsBubbling)
oEventClass.supportsBubbling=true;if(defaultAction)
oEventClass.defaultAction=Delegate.CreateDelegate(defaultAction,defaultActionObject,nDefaultActionType);this.registerOwcEventsClass(oEventClass);return oEventClass;}
function OwcEventSource_getOwcEventsClass(rEventClass)
{if(rEventClass)
{if(typeof(rEventClass)=="string")
rEventClass=this.OwcEvents[rEventClass];}
return rEventClass;}
function OwcEventSource_attachOwcEventHandler(rEventClass,rHandler,rObject,nType)
{var oEventClass=this.getOwcEventsClass(rEventClass)
if(!oEventClass)
{alert("Event class is unknown :"+String(rEventClass));return false;}
var oNewHandler=Delegate.CreateDelegate(rHandler,rObject,nType);if(!oNewHandler)
return false;var arrHandlers=null;if(!this.OwcEventHandlers)
this.OwcEventHandlers=new Array();else
arrHandlers=this.OwcEventHandlers[oEventClass.name];if(!arrHandlers)
{arrHandlers=new Array();this.OwcEventHandlers[oEventClass.name]=arrHandlers;}
for(var iHandler=0;iHandler<arrHandlers.length;++iHandler)
if(Delegate.IsEqual(arrHandlers[iHandler],oNewHandler))
return true;arrHandlers.push(oNewHandler);return true;}
function OwcEventSource_detachOwcEventHandler(rEventClass,rHandler,rObject,nType)
{if(!this.OwcEventHandlers)
return false;rEventClass=this.getOwcEventsClass(rEventClass)
if(!rEventClass)
return false;var arrHandlers=this.OwcEventHandlers[rEventClass.name];if(!arrHandlers)
return false;for(var i=arrHandlers.length-1;i>=0;--i)
{if(arrHandlers[i].matchHandler(rHandler,rObject,nType))
{arrHandlers.splice(i,1);return true;}}
return false;}
function OwcEventSource_detachAllOwcEventHandlers(rEventClass)
{if(!this.OwcEventHandlers)
return true;if(rEventClass===null)
{this.OwcEventHandlers=null;return true;}
rEventClass=this.getOwcEventsClass(rEventClass)
if(!rEventClass)
return true;var arrHandlers=this.OwcEventHandlers[rEventClass.name];if(arrHandlers)
{delete this.OwcEventHandlers[rEventClass.name];return true;}
return false;}
function OwcEventSource_createOwcEventObject(rEventClass)
{rEventClass=this.getOwcEventsClass(rEventClass)
if(!rEventClass)
return null;var oEvent=new Olive.Event(this,rEventClass);return oEvent;}
function OwcEventSource_fireOwcEvent(oEvent)
{var oEventClass=null;var bRetValue=true;oEventClass=this.getOwcEventsClass(oEvent.type);if(!oEventClass)
oEventClass=oEvent.eventClass;if(!oEventClass)
return false;if(!oEvent.srcObject)
oEvent.srcObject=this;oEvent.curObject=this;if(this.WebApplication)
this.WebApplication._FireGlobalEvents(oEvent);Delegate.CallMethod(this,oEventClass.handlerProperty,oEvent);var arrHandlers=(this.OwcEventHandlers?this.OwcEventHandlers[oEventClass.name]:null);if(arrHandlers)
{for(var i=arrHandlers.length-1;i>=0;--i)
arrHandlers[i].call(this,oEvent);}
if(oEventClass.defaultAction&&!oEvent.cancelDefaultAction)
oEventClass.defaultAction.call(this,oEvent);if(oEventClass.supportsBubbling&&!oEvent.cancelBubbling&&this.Parent)
this.Parent.fireOwcEvent(oEvent);}
function OwcEventSource_attachHtmlEventHandlers(oHtmlElem,sHtmlPRefix)
{if(!this.OwcEvents)
return;for(var sEventClass in this.OwcEvents)
{var oEventClass=this.OwcEvents[sEventClass];if(!oEventClass.handlerProperty)
continue;var sHandler=DHTML.getAttr(oHtmlElem,sHtmlPRefix+oEventClass.handlerProperty);if(sHandler)
this[oEventClass.handlerProperty]=sHandler;}}
JScript.Type.RegisterClass("Olive.EventSource",Olive.EventSource);}
Olive.EventSource.RegisterEventHandler=function(sTypeName,sEventName,bFireOnAllBubblingLevels,rHandler,rObject,nType)
{if(typeof(OwcGetApplication)=="undefined"||!OwcGetApplication())
throw new Error(785,"Registering global event handlers is not operational without Application Object.");var oAppObj=OwcGetApplication();if(!oAppObj.g_arrGlobalEvents)
oAppObj.g_arrGlobalEvents=new Object();if(sEventName=="")
sEventName="All Events";var arrSourceTypes=oAppObj.g_arrGlobalEvents[sEventName];if(!arrSourceTypes)
{arrSourceTypes=new Array();oAppObj.g_arrGlobalEvents[sEventName]=arrSourceTypes;}
var oHandlerDelegate=Delegate.CreateDelegate(rHandler,rObject,nType);var oNewTypeDataContainer=new Olive.EventSource._structEventHandlers(sTypeName,oHandlerDelegate,bFireOnAllBubblingLevels);arrSourceTypes.push(oNewTypeDataContainer);}
Olive.EventSource.UnregisterEventHandler=function(sTypeName,sEventName,rHandler,rObject,nType)
{if(typeof(OwcGetApplication)=="undefined"||!OwcGetApplication())
return;var oAppObj=OwcGetApplication();if(!oAppObj.g_arrGlobalEvents)
return;if(sEventName=="")
sEventName="All Events";var arrSourceTypes=oAppObj.g_arrGlobalEvents[sEventName];if(!arrSourceTypes)
return;var oHandlerDelegate=Delegate.CreateDelegate(rHandler,rObject,nType);for(var index in arrSourceTypes)
{var oTypeHandlerContainer=arrSourceTypes[index];var sLocalTypeName=oTypeHandlerContainer.getTypeName();if(sTypeName==""||JScript.Type.IsDerivedFrom(sLocalTypeName,sTypeName))
{var oDelegate=oTypeHandlerContainer.getHandler();if(Delegate.IsEqual(oDelegate,oHandlerDelegate))
delete arrSourceTypes[index];}}}
Olive.EventSource._structEventHandlers=function(sTypeName,oHandlerDelegate,bAllowBubbling)
{this._typeName=sTypeName;this._handler=oHandlerDelegate;this.allowBubbling=bAllowBubbling;this.getTypeName=function()
{return this._typeName;}
this.getHandler=function()
{return this._handler;}}
if(!Olive.Object)
{Olive.Object=function OwcObject()
{}
Olive.Object.DeclareType=function OwcObject_DeclareType(rObject)
{this.DeclareMethod("displayMessage",OwcObject_displayMessage);this.DeclareMethod("getResString",OwcObject_getResString);this.DeclareMethod("reportError",OwcObject_reportError);this.DeclareMethod("reportKnownError",OwcObject_reportKnownError);}
Olive.Object.ApplyPrototype=function OwcObject_ApplyPrototype(rObject)
{rObject.registerOwcEventsClass2("errorOccured","onErrorOccured",true);rObject.registerOwcEventsClass2("customActivityOccured","onCustomActivityOccured",true);}
function OwcObject_getResString(sResName)
{if(this.WebApplication)
return this.WebApplication.getResString(sResName);return Olive.Resources.getResString(sResName);}
function OwcObject_displayMessage(sMessage)
{alert(sMessage);}
function OwcObject_reportError(oError)
{var bDisplayMessage=true;var oEvent=this.createOwcEventObject("errorOccured");oEvent.ErrorObject=oError;this.fireOwcEvent(oEvent);if(oEvent.cancelDefaultAction)
bDisplayMessage=false;Object_Destroy(oEvent);if(bDisplayMessage&&!this.WebApplication)
this.displayMessage(oError.message);}
function OwcObject_reportKnownError(nErrId)
{var oError=Olive.Errors.createError.apply(Olive.Errors,arguments);this.reportError(oError);}
Olive.Object.FindParentImplementing=function OwcObject_FindParentImplementing(rInterface,oThis)
{if(!rInterface)
return null;if(!oThis)
oThis=this;var oParent=oThis.Parent;while(oParent)
{if(rInterface.IsImplementedBy(oParent))
return oParent;oParent=oParent.Parent;}
return null;}
JScript.Type.RegisterClass("Olive.Object",Olive.Object,Olive.EventSource);}
if(!Olive.CmdTarget)
{Olive.CmdTarget=function OwcCmdTarget()
{}
Olive.CmdTarget.DeclareType=function OwcCmdTarget_DeclareType(rObject)
{this.DeclareField("m_arrCommands",null);this.DeclareMethod("launchCommand",OwcCmdTarget_launchCommand);this.DeclareMethod("checkCmdUiState",OwcCmdTarget_checkCmdUiState);this.DeclareMethod("queryCmdUiState",OwcCmdTarget_queryCmdUiState);this.DeclareMethod("notifyCmdStateChanged",OwcCmdTarget_notifyCmdStateChanged);}
Olive.CmdTarget.ApplyPrototype=function OwcCmdTarget_ApplyPrototype(rObject)
{rObject.registerOwcEventsClass2("cmdStateChanged","onCmdStateChanged",true);}
Olive.CmdTarget.RegisterCommand=function OwcRegisterControlCommand(rObject,sCommandName,sHandlerProp,sUpdateUiStateProp)
{if(!rObject)
rObject=this;else if(rObject instanceof String)
rObject=eval(rObject);if(!rObject.m_arrCommands)
rObject.m_arrCommands=new Array();var sCommandId=sCommandName.toLowerCase();var oCommand=new Object();oCommand.m_sCommandName=sCommandId;oCommand.m_sHandlerProp=sHandlerProp;oCommand.m_sUpdateUiStateProp=sUpdateUiStateProp;if(JScript.Type._declaring_type!=null&&!JScript.Type._declaring_type.declared)
JScript.Type._declaring_type.DeclareCommand(sCommandId,oCommand);rObject.m_arrCommands[sCommandId]=oCommand;}
function OwcCmdTarget_launchCommand(sCommandName,oCommandParams)
{var bHandled=false;if(this.m_arrCommands)
{sCommandName=sCommandName.toLowerCase();if(sCommandName in this.m_arrCommands)
{var oCommand=this.m_arrCommands[sCommandName];var sHandlerProp=(oCommand?oCommand.m_sHandlerProp:null);if(sHandlerProp instanceof Function)
bHandled=sHandlerProp.call(this,oCommandParams);else if((sHandlerProp in this)&&this[sHandlerProp])
{this[sHandlerProp](oCommandParams);bHandled=true;}}}
if(!bHandled&&this.Parent&&this.Parent.launchCommand)
bHandled=this.Parent.launchCommand(sCommandName,oCommandParams);return bHandled;}
function OwcCmdTarget_checkCmdUiState(oCmdUiState)
{var handled=this.queryCmdUiState(oCmdUiState);if(this.WebApplication)
{if(handled)
this.WebApplication.hookQueryCmdUiSate(oCmdUiState,this);else
handled=this.WebApplication.hookQueryCmdUiSate(oCmdUiState,oCmdUiState.handlerObject);}
return handled;}
function OwcCmdTarget_queryCmdUiState(oCmdUiState)
{var bHandled=false;if(this.m_arrCommands)
{var sCommandName=oCmdUiState.commandName;if(sCommandName in this.m_arrCommands)
{var oCommand=this.m_arrCommands[sCommandName];var sUiHandlerProp=(oCommand?oCommand.m_sUpdateUiStateProp:null);if(sUiHandlerProp instanceof Function)
bHandled=sUiHandlerProp.call(this,oCmdUiState);else if((sUiHandlerProp in this)&&this[sUiHandlerProp])
bHandled=this[sUiHandlerProp](oCmdUiState);if(!bHandled&&!oCmdUiState.handlerObject)
{var sHandlerProp=(oCommand?oCommand.m_sHandlerProp:null);if(sHandlerProp instanceof Function)
oCmdUiState.handlerObject=this;else if((sHandlerProp in this)&&this[sHandlerProp])
oCmdUiState.handlerObject=this;}
else
{oCmdUiState.handlerObject=this;return true;}}}
if(this.Parent&&this.Parent.queryCmdUiState)
bHandled=this.Parent.queryCmdUiState(oCmdUiState);return bHandled;}
function OwcCmdTarget_notifyCmdStateChanged()
{var oEvent=this.createOwcEventObject("cmdStateChanged");this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
JScript.Type.RegisterClass("Olive.CmdTarget",Olive.CmdTarget,Olive.Object);}
if(!Olive.CmdUiState)
{Olive.CmdUiState=function OwcCmdUiState(oSrcControl,sCmdName,oCmdParams)
{this.commandName=sCmdName;this.commandParams=oCmdParams;this.srcControl=oSrcControl;}
Olive.CmdUiState.DeclareType=function OwcCmdUiState_DeclareType(rObject)
{this.DeclareField("m_dwChangedAspects",0);this.DeclareField("m_bCmdVisible",false);this.DeclareField("m_bCmdEnabled",false);this.DeclareField("m_bCmdChecked",false);this.DeclareField("m_bImgSet",false);this.DeclareField("m_bSetLabel",false);this.DeclareField("m_sCmdText",null);this.DeclareField("m_oCmdIcon",null);this.DeclareField("commandName","");this.DeclareField("commandParams",null);this.DeclareField("srcControl",null);this.DeclareField("handlerObject",null);this.DeclareMethod("isAspectChanged",OwcCmdUiState_isAspectChanged);this.DeclareMethod("showCommand",OwcCmdUiState_showCommand);this.DeclareMethod("enableCommand",OwcCmdUiState_enableCommand);this.DeclareMethod("setCommandText",OwcCmdUiState_setCommandText);this.DeclareMethod("checkCommand",OwcCmdUiState_checkCommand);this.DeclareMethod("setCommandImage",OwcCmdUiState_setCommandImage);}
Olive.CmdUiState.Aspects={visible:0x00000001,enabled:0x00000002,checked:0x00000004,text:0x00000008,icon:0x00000010};function OwcCmdUiState_isAspectChanged(nAspect)
{return((this.m_dwChangedAspects&nAspect)==nAspect);}
function OwcCmdUiState_showCommand(bShow)
{if(bShow==undefined)
bShow=true;this.m_dwChangedAspects|=Olive.CmdUiState.Aspects.visible;this.m_bCmdVisible=bShow;}
function OwcCmdUiState_enableCommand(bEnable)
{if(bEnable==undefined)
bEnable=true;this.m_dwChangedAspects|=Olive.CmdUiState.Aspects.enabled;this.m_bCmdEnabled=bEnable;}
function OwcCmdUiState_setCommandText(sText)
{if(sText==undefined)
sText="";this.m_dwChangedAspects|=Olive.CmdUiState.Aspects.text;this.m_sCmdText=sText;this.m_bSetLabel=true;}
function OwcCmdUiState_checkCommand(bCheck)
{if(bCheck==undefined)
bCheck=false;this.m_dwChangedAspects|=Olive.CmdUiState.Aspects.checked;this.m_bCmdChecked=bCheck;}
function OwcCmdUiState_setCommandImage(sImgSrc)
{if(sImgSrc==undefined)
sImgSrc="";this.m_dwChangedAspects|=Olive.CmdUiState.Aspects.icon;this.m_oCmdIcon=sImgSrc;}
JScript.Type.RegisterClass("Olive.CmdUiState",Olive.CmdUiState);}
if(!Olive.IState)
{Olive.IState=new Interface("Olive.IState");Olive.IState.Implement=function OwcIState_Implement(rObject,bDynamic)
{if(!Olive.IState.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"m_nState",0);JScript.Type.DeclareField(rObject,"m_bHotColdBehavior",false);JScript.Type.DeclareMethod(rObject,"getState",OwcIState_getState);JScript.Type.DeclareMethod(rObject,"setState",OwcIState_setState);JScript.Type.DeclareMethod(rObject,"changeState",OwcIState_changeState);JScript.Type.DeclareMethod(rObject,"toggleState",OwcIState_toggleState);JScript.Type.DeclareMethod(rObject,"modifyState",OwcIState_modifyState);JScript.Type.DeclareMethod(rObject,"isStateSet",OwcIState_isStateSet);JScript.Type.DeclareMethod(rObject,"updateStateBehaviors",OwcIState_updateStateBehaviors);JScript.Type.DeclareMethod(rObject,"initStateFromHtml",OwcIState_initStateFromHtml);JScript.Type.OverrideMethod(rObject,"parseControlHtmlAttr",OwcIState_parseControlHtmlAttr);rObject.registerOwcEventsClass2("stateChanged","onStateChanged",true);}
Olive.IState.State={Visible:0x00000000,Invisible:0x80000000,VisibleMask:0x80000000,Enabled:0x00000000,Disabled:0x40000000,EnabledMask:0x40000000,Inactive:0x00000000,Active:0x20000000,ActiveMask:0x20000000,Cold:0x00000000,Hot:0x10000000,HotMask:0x10000000,Collapsed:0x00000000,Expanded:0x08000000,ExpandMask:0x08000000,ExpandedOnce:0x04000000,NotSelected:0x00000000,Selected:0x02000000,SelectedMask:0x02000000,DataLoaded:0x00000000,DataNotLoaded:0x01000000,DataMask:0x01000000,NormalSize:0x00000000,Minimized:0x00800000,SubMenuOpenedMask:0x00400000,SubMenuOpened:0x00400000,SubMenuClosed:0x00000000,Checked:0x00200000,Unchecked:0x00000000,CheckedMask:0x00200000,SetCommandImage:0x00100000,NoCommandImage:0x00000000,CommandImageMask:0x00100000,SetCommandLabel:0x00080000,NoCommandLabel:0x00000000,CommandLabelMask:0x00080000,UnPressed:0x00000000,Pressed:0x00040000,PressedMask:0x00040000}
Olive.IState._regexSplitFlag=/([ \t]*,[ \t]*)|[ \t]+/gi;function OwcIState_getState()
{return this.m_nState;}
function OwcIState_setState(nNewState,bDoNotNotify)
{var nPrevState=this.getState();if(nPrevState==nNewState)
return;this.m_nState=nNewState;this.updateStateBehaviors(nNewState,nPrevState);if(!bDoNotNotify)
{if(Interface.IsImplemented(this,"Olive.IUiElements"))
this.updateUiState(nNewState,nPrevState);var oEvent=this.createOwcEventObject("stateChanged");oEvent.prevState=nPrevState;oEvent.newState=nNewState;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}}
function OwcIState_changeState(bSetState,nState,nStateMask,bDoNotNotify)
{if(!nStateMask)
nStateMask=nState;var nNewState=(this.getState()&~nStateMask);if(bSetState)
nNewState|=nState;else
nNewState|=(~nState&nStateMask);this.setState(nNewState,bDoNotNotify);}
function OwcIState_toggleState(nStateMask,bDoNotNotify)
{var nPrevState=this.getState();var nNewState=(nPrevState&~nStateMask)|((nPrevState^nStateMask)&nStateMask);this.setState(nNewState,bDoNotNotify);}
function OwcIState_modifyState(nRemoveState,nAddState,bDoNotNotify)
{if(!nRemoveState)
nRemoveState=0;if(!nAddState)
nAddState=0;var nNewState=((this.getState()&~nRemoveState)|nAddState);this.setState(nNewState,bDoNotNotify);}
function OwcIState_isStateSet(nState,nMask)
{if(nMask==undefined)
nMask=nState;return((this.m_nState&nMask)==nState);}
function OwcIState_initStateFromHtml()
{var bHidden=DHTML.isHiddenElem(this.HtmlElement,true);var bDisabled=DHTML.isDisabledElem(this.HtmlElement,true);this.changeState(bHidden,Olive.IState.State.Invisible,Olive.IState.State.VisibleMask,true);this.changeState(bDisabled,Olive.IState.State.Disabled,Olive.IState.State.EnabledMask,true);}
function OwcIState_updateStateBehaviors(nNewState,nPrevState)
{if(this.m_bHotColdBehavior)
{var nStyleChanged=(nPrevState^nNewState);if(nStyleChanged&Olive.IState.State.EnabledMask)
{var bEnabled=((nNewState&Olive.IState.State.EnabledMask)==Olive.IState.State.Enabled);if(bEnabled)
{DHTML.attachEvent(this.HtmlElement,"mouseover",OwcIState_DHTML_onMouseOver);DHTML.attachEvent(this.HtmlElement,"mouseout",OwcIState_DHTML_onMouseOut);}
else
{DHTML.detachEvent(this.HtmlElement,"mouseover",OwcIState_DHTML_onMouseOver);DHTML.detachEvent(this.HtmlElement,"mouseout",OwcIState_DHTML_onMouseOut);}}}}
function OwcIState_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var sInitState=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.initState);if(sInitState)
{var nAddState=0;var stateFlags=Olive.IState._lookupFlags;if(!stateFlags)
{stateFlags={};var srcFlags=Olive.IState.State;for(var sFlagName in srcFlags)
stateFlags[sFlagName.toLowerCase()]=srcFlags[sFlagName];Olive.IState._lookupFlags=stateFlags;}
sInitState=sInitState.toLowerCase();var arrStateFlags=sInitState.split(Olive.IState._regexSplitFlag);for(var iFlag=0;iFlag<arrStateFlags.length;++iFlag)
{var sStateFlag=arrStateFlags[iFlag];if(sStateFlag&&(sStateFlag in stateFlags))
nAddState|=stateFlags[sStateFlag];}
if(nAddState)
this.modifyState(0,nAddState);}}
function OwcIState_DHTML_onMouseOver(oEvent)
{var oControl=OwcGetControlFromHtmlElem(this);if(oControl)
oControl.changeState(true,Olive.IState.State.Hot,Olive.IState.State.HotMask);}
function OwcIState_DHTML_onMouseOut(oEvent)
{var oControl=OwcGetControlFromHtmlElem(this);if(oControl)
oControl.changeState(false,Olive.IState.State.Hot,Olive.IState.State.HotMask);}}
if(!Olive.ISelection)
{Olive.ISelection=new Interface("Olive.ISelection");Olive.ISelection.Implement=function OwcISelection_Implement(rObject,bDynamic)
{if(!Olive.ISelection.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"m_arrSelection",null);JScript.Type.DeclareField(rObject,"m_bSupportMultiSelect",false);JScript.Type.DeclareMethod(rObject,"selectionChange",OwcISelection_selectionChange);JScript.Type.DeclareMethod(rObject,"selectionClear",OwcISelection_selectionClear);JScript.Type.DeclareMethod(rObject,"isItemSelected",OwcISelection_isItemSelected);JScript.Type.DeclareMethod(rObject,"getSelectedItemsCount",OwcISelection_getSelectedItemsCount);JScript.Type.DeclareMethod(rObject,"getSelectedItem",OwcISelection_getSelectedItem);JScript.Type.DeclareMethod(rObject,"getSelectedContentItem",OwcISelection_getSelectedContentItem);JScript.Type.DeclareMethod(rObject,"onItemMouseDown",OwcISelection_onItemMouseDown);JScript.Type.ReplaceMethod(rObject,"onSelectionChanged",null);rObject.registerOwcEventsClass2("selectionChanging","onSelectionChanging",true);rObject.registerOwcEventsClass2("selectionChanged","onSelectionChanged",true);rObject.registerOwcEventsClass2("selectionItemClicked","onSelectionItemClicked",true);}
Olive.ISelection.Mode={Select:0x00000000,Unselect:0x00000001,MaskSelect:0x00000001,Replace:0x00000000,Extend:0x00000002,MaskExtend:0x00000002}
function OwcISelection_selectionChange(vSelection,nSelectMode)
{var arrPrevSelection=this.m_arrSelection;var arrNewSelection=null;var bSelectItems=((nSelectMode&Olive.ISelection.Mode.MaskSelect)==Olive.ISelection.Mode.Select);var bReplaceSelection=((nSelectMode&Olive.ISelection.Mode.MaskExtend)==Olive.ISelection.Mode.Replace);if(bReplaceSelection)
{if(bSelectItems)
arrNewSelection=Array_append(null,vSelection);else
arrNewSelection=null;}
else
{if(!vSelection)
return;if(arrPrevSelection)
arrNewSelection=arrPrevSelection.slice(0);if(bSelectItems)
arrNewSelection=Array_append(arrNewSelection,vSelection);else
arrNewSelection=Array_remove(arrNewSelection,vSelection);}
var arrSelectedItems=Array_difference(arrNewSelection,arrPrevSelection);var arrUnselectedItems=Array_difference(arrPrevSelection,arrNewSelection);if((!arrSelectedItems||arrSelectedItems.length==0)&&(!arrUnselectedItems||arrUnselectedItems.length==0))
return;var oEvent=this.createOwcEventObject("selectionChanging");oEvent.prevSelection=arrPrevSelection;oEvent.newSelection=arrNewSelection;oEvent.arrSelectedItems=arrSelectedItems;oEvent.arrUnselectedItems=arrUnselectedItems;this.fireOwcEvent(oEvent);var bCancelDefaultAction=oEvent.cancelDefaultAction;arrNewSelection=oEvent.newSelection;oEvent.newSelection=null;Object_Destroy(oEvent);if(bCancelDefaultAction)
return;arrSelectedItems=Array_difference(arrNewSelection,arrPrevSelection);arrUnselectedItems=Array_difference(arrPrevSelection,arrNewSelection);this.m_arrSelection=arrNewSelection;if(arrUnselectedItems&&arrUnselectedItems.length>0)
{for(var i=0;i<arrUnselectedItems.length;++i)
{var oItem=arrUnselectedItems[i];if(Olive.IState.IsImplementedBy(oItem))
oItem.changeState(false,Olive.IState.State.Selected,Olive.IState.State.SelectedMask);}}
if(arrSelectedItems&&arrSelectedItems.length>0)
{for(var i=0;i<arrSelectedItems.length;++i)
{var oItem=arrSelectedItems[i];if(Olive.IState.IsImplementedBy(oItem))
oItem.changeState(true,Olive.IState.State.Selected,Olive.IState.State.SelectedMask);}}
var oEvent=this.createOwcEventObject("selectionChanged");oEvent.prevSelection=arrPrevSelection;oEvent.newSelection=arrNewSelection;oEvent.arrSelectedItems=arrSelectedItems;oEvent.arrUnselectedItems=arrUnselectedItems;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);this.notifyCmdStateChanged();}
function OwcISelection_selectionClear()
{this.selectionChange(null,Olive.ISelection.Mode.Select|Olive.ISelection.Mode.Replace);}
function OwcISelection_isItemSelected(oItem)
{return(Array_indexOf(this.m_arrSelection,oItem)>=0);}
function OwcISelection_getSelectedItemsCount()
{if(!this.m_arrSelection)
return 0;return this.m_arrSelection.length;}
function OwcISelection_getSelectedItem(nIndex)
{if(!nIndex)
nIndex=0;if(nIndex<0||(!this.m_arrSelection))
return null;if(nIndex>=this.m_arrSelection.length)
return null;return this.m_arrSelection[nIndex];}
function OwcISelection_getSelectedContentItem(nIndex)
{var oControl=this.getSelectedItem(nIndex);return Olive.Controls.IDataBound.getContentItem(oControl);}
function OwcISelection_onItemMouseDown(oItem,oEvent)
{if(!oItem)
return;var bSupportMultiSelect=this.m_bSupportMultiSelect;var bItemSelected=oItem.isStateSet(Olive.IState.State.Selected,Olive.IState.State.SelectedMask);var nMouseButtons=getEventMouseButtons(oEvent);if(nMouseButtons==1||nMouseButtons==0)
{var bToggleSelectionWin=(isCtrlKeyPressed(oEvent)&&!isSafari());var bToggleSelectionMac=isMetaKeyPressed(oEvent);var nMode=Olive.ISelection.Mode.Replace;if(bToggleSelectionWin||bToggleSelectionMac)
{if(bSupportMultiSelect)
{nMode=Olive.ISelection.Mode.Extend;stopEventBubbling(oEvent);if(bItemSelected)
nMode|=Olive.ISelection.Mode.Unselect;else
nMode|=Olive.ISelection.Mode.Select;}
else
return;}
else
{if(!bItemSelected)
{nMode|=Olive.ISelection.Mode.Select;}
else
{if(bSupportMultiSelect)
{this.selectionClear();}
nMode=Olive.ISelection.Mode.Select;}}
this.selectionChange(oItem,nMode);}
else if(nMouseButtons&0x2)
{if(!bItemSelected)
{this.selectionChange(oItem,Olive.ISelection.Mode.Select|Olive.ISelection.Mode.Replace);}}
var oEvent=this.createOwcEventObject("selectionItemClicked");oEvent.nMouseButtons=nMouseButtons;oEvent.oItemClicked=oItem;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}}
if(!Olive.IActiveItem)
{Olive.IActiveItem=new Interface("Olive.IActiveItem");Olive.IActiveItem.Implement=function OwcIActiveItem_Implement(rObject,sItemType,dwState,dwStateMask,bDynamic)
{if(!Olive.IActiveItem.Register(rObject,bDynamic))
return;if(dwState==undefined)
{dwState=Olive.IState.State.Active;dwStateMask=Olive.IState.State.ActiveMask;}
JScript.Type.DeclareField(rObject,"m_sItemType",sItemType);JScript.Type.DeclareField(rObject,"m_dwActiveItemState",dwState);JScript.Type.DeclareField(rObject,"m_dwActiveItemStateMask",dwStateMask);JScript.Type.DeclareField(rObject,"m_iActiveItem",-1);JScript.Type.DeclareMethod(rObject,"getItemsCount",OwcIActiveItem_getItemsCount);JScript.Type.DeclareMethod(rObject,"getItem",OwcIActiveItem_getItem);JScript.Type.DeclareMethod(rObject,"indexOfItem",OwcIActiveItem_indexOfItem);JScript.Type.DeclareMethod(rObject,"getActiveItemIndex",OwcIActiveItem_getActiveItemIndex);JScript.Type.DeclareMethod(rObject,"getActiveItem",OwcIActiveItem_getActiveItem);JScript.Type.DeclareMethod(rObject,"setActiveItem",OwcIActiveItem_setActiveItem);JScript.Type.OverrideMethod(rObject,"initControl",OwcIActiveItem_initControl);rObject.registerOwcEventsClass2("itemActivating","onItemActivating",true);rObject.registerOwcEventsClass2("itemActivated","onItemActivated",true);}
function OwcIActiveItem_initControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var nActiveItem=this.getActiveItemIndex();if(nActiveItem<0)
{var iItem,nItemsCount=this.getItemsCount();for(iItem=0;iItem<nItemsCount;++iItem)
{var oItem=this.getItem(iItem);if(oItem.isStateSet(this.m_dwActiveItemState,this.m_dwActiveItemStateMask))
{nActiveItem=iItem;break;}}
if(nActiveItem>=0)
this.m_iActiveItem=nActiveItem;}}
function OwcIActiveItem_getActiveItemIndex()
{return this.m_iActiveItem;}
function OwcIActiveItem_getActiveItem()
{return this.getItem(this.m_iActiveItem);}
function OwcIActiveItem_setActiveItem(vItem,bDoNotNotify)
{var iActiveItemIndex=-1;var oActiveItem=null;if(typeof(vItem)=="number")
{oActiveItem=this.getItem(vItem);if(oActiveItem)
iActiveItemIndex=vItem;}
else if(typeof(vItem)=="object")
{oActiveItem=vItem;iActiveItemIndex=this.indexOfItem(oActiveItem);}
if(!bDoNotNotify)
{var oEvent=this.createOwcEventObject("itemActivating");oEvent.prevActiveItemIndex=iPrevItemIndex;oEvent.prevActiveItem=oPrevItem;oEvent.activeItemIndex=iActiveItemIndex;oEvent.activeItem=oActiveItem;this.fireOwcEvent(oEvent);var bCancelDefaultAction=oEvent.cancelDefaultAction;Object_Destroy(oEvent);if(bCancelDefaultAction)
return;}
if(this.m_iActiveItem==iActiveItemIndex)
return;var iPrevItemIndex=this.m_iActiveItem;var oPrevItem=this.getItem(this.m_iActiveItem);if(oPrevItem)
oPrevItem.changeState(false,this.m_dwActiveItemState,this.m_dwActiveItemStateMask)
this.m_iActiveItem=iActiveItemIndex;if(oActiveItem)
oActiveItem.changeState(true,this.m_dwActiveItemState,this.m_dwActiveItemStateMask)
if(!bDoNotNotify)
{var oEvent=this.createOwcEventObject("itemActivated");oEvent.prevActiveItemIndex=iPrevItemIndex;oEvent.prevActiveItem=oPrevItem;oEvent.activeItemIndex=iActiveItemIndex;oEvent.activeItem=oActiveItem;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}}
function OwcIActiveItem_getItemsCount()
{return this.getControlsCount(this.m_sItemType);}
function OwcIActiveItem_indexOfItem(oItem)
{return this.indexOfControl(oItem,this.m_sItemType);}
function OwcIActiveItem_getItem(iItemIndex)
{return this.getControl(iItemIndex,this.m_sItemType);}}
if(!Olive.ICmdSource)
{Olive.ICmdSource=new Interface("Olive.ICmdSource");Olive.ICmdSource.Implement=function OwcICmdSource_Implement(rObject,bDynamic)
{if(!this.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"m_oCmdTarget",null);JScript.Type.DeclareMethod(rObject,"getCmdTarget",OwcICmdSource_getCmdTarget);JScript.Type.DeclareMethod(rObject,"setCmdTarget",OwcICmdSource_setCmdTarget);JScript.Type.DeclareMethod(rObject,"sendCommand",OwcICmdSource_sendCommand);JScript.Type.DeclareMethod(rObject,"updateCommand",OwcICmdSource_updateCommand);JScript.Type.DeclareMethod(rObject,"updateAllCommands",OwcICmdSource_updateAllCommands);JScript.Type.DeclareMethod(rObject,"updateCmdUiState",OwcICmdSource_updateCmdUiState);}
Olive.ICmdSource.UpdateAll=function OwcICmdSource_UpdateAll(oRootControl,oCmdParams)
{function callback_updateCmdSource(ctxScanner,oCmdSrcControl)
{oCmdSrcControl.updateAllCommands();}
function callback_filterCmdSource(ctxScanner,oControl)
{if(Olive.ICmdSource.IsImplementedBy(oControl))
return Olive.Controls.Scanner.FilterMode.Process;return(Olive.Controls.Scanner.FilterMode.Reject+Olive.Controls.Scanner.FilterMode.StopFilter);}
var oScanner=new Olive.Controls.Scanner();oScanner.setProcessControlCallback(callback_updateCmdSource);oScanner.addFilter(callback_filterCmdSource);oScanner.scan(oRootControl);}
Olive.ICmdSource.BindCommandBars=function OwcICmdSource_bindCommandBars(oBarContainer,oCmdTarget)
{var arrControls=oBarContainer.findControlsImplementing(Olive.ICmdSource);var iCmdBar,nCmdBarCount=arrControls.length;for(iCmdBar=0;iCmdBar<nCmdBarCount;++iCmdBar)
arrControls[iCmdBar].setCmdTarget(oCmdTarget);}
function OwcICmdSource_getCmdTarget()
{if(this.m_oCmdTarget)
return this.m_oCmdTarget;var oParent=Olive.Object.FindParentImplementing(Olive.ICmdSource,this);if(oParent)
return oParent.getCmdTarget();return null;}
function OwcICmdSource_setCmdTarget(oCmdTarget,bDoNotUpdateState)
{if(this.m_oCmdTarget==oCmdTarget)
return;if(this.m_oCmdTarget)
this.m_oCmdTarget.detachOwcEventHandler("cmdStateChanged",this.updateAllCommands,this);this.m_oCmdTarget=oCmdTarget;if(this.m_oCmdTarget)
this.m_oCmdTarget.attachOwcEventHandler("cmdStateChanged",this.updateAllCommands,this);if(!bDoNotUpdateState)
this.updateAllCommands();}
function OwcICmdSource_sendCommand(sCmdName,oCmdParams)
{var oCmdTarget=this.getCmdTarget();if(!oCmdTarget)
oCmdTarget=this;oCmdTarget.launchCommand(sCmdName,oCmdParams);}
function OwcICmdSource_updateCommand(sCmdName,oCmdParams,rSrcControl)
{var oCmdTarget=this.getCmdTarget();if(!oCmdTarget)
oCmdTarget=this;if(!rSrcControl)
rSrcControl=this;if(sCmdName)
sCmdName=sCmdName.toLowerCase();var oCmdUiState=new Olive.CmdUiState(rSrcControl,sCmdName,oCmdParams);oCmdTarget.checkCmdUiState(oCmdUiState);this.updateCmdUiState(oCmdUiState);}
function OwcICmdSource_updateAllCommands()
{this.updateCommand(null);}
function OwcICmdSource_updateCmdUiState(oCmdUiState)
{}}
if(!Olive.IActiveControlTracker)
{Olive.IActiveControlTracker=new Interface("Olive.IActiveControlTracker");Olive.IActiveControlTracker.Implement=function OwcIActiveControlTracker_Implement(rObject,bDynamic)
{if(!this.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"m_oControlMap",null);JScript.Type.DeclareMethod(rObject,"registerActiveTrackable",OwcIActiveControlTracker_registerActiveTrackable);JScript.Type.DeclareMethod(rObject,"unregisterActiveTrackable",OwcIActiveControlTracker_unregisterActiveTrackable);}
function OwcIActiveControlTracker_registerActiveTrackable(oControl,sInterfaceName)
{if(!oControl||!sInterfaceName)
return false;if(!Interface.IsImplemented(oControl,sInterfaceName))
return false;if(!Interface.IsImplemented(oControl,"Olive.IActivityTrackable"))
return false;if(!this.m_oControlMap)
this.m_oControlMap=new Object();if(this.m_oControlMap[sInterfaceName])
{var oOldContol=this.m_oControlMap[sInterfaceName];if(oOldContol==oControl)
return true;else
oOldContol.deactivateControl();}
this.m_oControlMap[sInterfaceName]=oControl;}
function OwcIActiveControlTracker_unregisterActiveTrackable(oControl,sInterfaceName)
{if(!oControl||!sInterfaceName||!this.m_oControlMap)
return false;if(!this.m_oControlMap[sInterfaceName])
return false;if(this.m_oControlMap[sInterfaceName]==oControl)
{this.m_oControlMap[sInterfaceName]=null;delete(this.m_oControlMap[sInterfaceName]);return true;}
return false;}}
if(!Olive.IActivityTrackable)
{Olive.IActivityTrackable=new Interface("Olive.IActivityTrackable");Olive.IActivityTrackable.Implement=function OwcIActivityTrackable_Implement(rObject,bDynamic)
{if(!this.Register(rObject,bDynamic))
return;JScript.Type.DeclareMethod(rObject,"deactivateControl",OwcIActivityTrackable_deactivateControl);}
function OwcIActivityTrackable_deactivateControl()
{}}
if(!Olive.MoveDragger)
{Olive.MoveDragger=function OwcMoveDragger(sDragLayerClass)
{if(sDragLayerClass)
this.m_sDragLayerClass=sDragLayerClass;this.m_rectDragBounds={left:-1,top:-1,right:-1,bottom:-1};this.m_minDragOffset={x:3,y:3};}
Olive.MoveDragger.DeclareType=function OwcMoveDragger_DeclareType(rObject)
{this.DeclareField("m_sDragLayerClass","dragLayer");this.DeclareField("m_oDragLayer",null);this.DeclareField("m_oDragElement",null);this.DeclareField("m_oDragTracker",null);this.DeclareField("m_rectDragBounds",null);this.DeclareField("m_minDragOffset",null);this.DeclareField("m_pointEnter",null);this.DeclareField("m_pointLast",null);this.DeclareMethod("enableDrag",OwcMoveDragger_enableDrag);this.DeclareMethod("disableDrag",OwcMoveDragger_disableDrag);this.DeclareMethod("setDragTracker",OwcMoveDragger_setDragTracker);this.DeclareMethod("updateDragTracker",OwcMoveDragger_updateDragTracker);this.DeclareMethod("dragCanStart",OwcMoveDragger_dragCanStart);this.DeclareMethod("dragStart",OwcMoveDragger_dragStart);this.DeclareMethod("dragMove",OwcMoveDragger_dragMove);this.DeclareMethod("dragEnd",OwcMoveDragger_dragEnd);this.DeclareMethod("modeTrackStart",OwcMoveDragger_modeTrackStart);this.DeclareMethod("modeTrackEnd",OwcMoveDragger_modeTrackEnd);this.DeclareMethod("modeDragStart",OwcMoveDragger_modeDragStart);this.DeclareMethod("modeDragEnd",OwcMoveDragger_modeDragEnd);this.DeclareMethod("removeDragLayer",OwcMoveDragger_removeDragLayer);}
function OwcMoveDragger_enableDrag(oHtmlElement)
{if(!oHtmlElement||oHtmlElement.oliveMoveByDrag)
return;oHtmlElement.oliveMoveByDrag=this;DHTML.attachEvent(oHtmlElement,"mousedown",OwcMoveDragger_Normal_onMouseDown);}
function OwcMoveDragger_disableDrag(oHtmlElement)
{if(!oHtmlElement||!oHtmlElement.oliveMoveByDrag)
return;DHTML.detachEvent(oHtmlElement,"mousedown",OwcMoveDragger_Normal_onMouseDown);oHtmlElement.oliveMoveByDrag=null;try
{delete oHtmlElement["oliveMoveByDrag"];}
catch(e)
{}}
function OwcMoveDragger_setDragTracker(oDragTrackerElem,xMin,yMin,xMax,yMax)
{this.m_rectDragBounds={left:-1,top:-1,right:-1,bottom:-1};if(xMin!=undefined)
this.m_rectDragBounds.left=xMin;if(yMin!=undefined)
this.m_rectDragBounds.top=yMin;if(xMax!=undefined)
this.m_rectDragBounds.right=xMax;if(yMax!=undefined)
this.m_rectDragBounds.bottom=yMax;if(this.m_oDragLayer)
this.m_oDragTracker=this.m_oDragLayer.appendChild(oDragTrackerElem);else
this.m_oDragTracker=oDragTrackerElem;}
function OwcMoveDragger_updateDragTracker(ptMouse)
{if(!this.m_oDragTracker)
return;var ptTrackerPrev={x:this.m_oDragTracker.offsetLeft,y:this.m_oDragTracker.offsetTop};var ptTrackerNext={x:ptTrackerPrev.x,y:ptTrackerPrev.y};var ptLast=(this.m_pointLast?this.m_pointLast:this.m_pointEnter);var ptNext={x:ptMouse.x,y:ptMouse.y};if((this.m_rectDragBounds.left>=0)&&(this.m_rectDragBounds.right>=0))
{ptNext.x=Math.max(Math.min(ptMouse.x,this.m_rectDragBounds.right),this.m_rectDragBounds.left);var dx=(ptNext.x-ptLast.x);ptTrackerNext.x=ptTrackerPrev.x+dx;}
if((this.m_rectDragBounds.top>=0)&&(this.m_rectDragBounds.bottom>=0))
{ptNext.y=Math.max(Math.min(ptMouse.y,this.m_rectDragBounds.bottom),this.m_rectDragBounds.top);var dy=(ptNext.y-ptLast.y);ptTrackerNext.y=ptTrackerPrev.y+dy;}
if(ptTrackerPrev.x!=ptTrackerNext.x)
this.m_oDragTracker.style.left=String(ptTrackerNext.x)+"px";if(ptTrackerPrev.y!=ptTrackerNext.y)
this.m_oDragTracker.style.top=String(ptTrackerNext.y)+"px";this.m_pointLast=ptNext;}
function OwcMoveDragger_dragStart(pointMouse,oEvent)
{if(this.m_oDragElement.ondragstart)
this.m_oDragElement.ondragstart(this);this.dragMove(pointMouse,oEvent);}
function OwcMoveDragger_dragMove(pointMouse,oEvent)
{if(this.m_oDragElement.ondragmove)
this.m_oDragElement.ondragmove(this,pointMouse,oEvent);this.updateDragTracker(pointMouse);}
function OwcMoveDragger_dragEnd(pointMouse,oEvent,bCancel)
{if(!bCancel)
this.updateDragTracker(pointMouse);if(this.m_oDragElement.ondragend)
this.m_oDragElement.ondragend(this,pointMouse,oEvent,bCancel);this.removeDragLayer();}
function OwcMoveDragger_modeTrackStart(oHtmlElement,oEvent)
{var oDocument=oHtmlElement.ownerDocument;var oDragLayer=oDocument.createElement("div");oDragLayer.className=this.m_sDragLayerClass;var oBody=getChildObjectByTag(oDocument,"body",0);this.m_oDragLayer=oBody.appendChild(oDragLayer);this.m_oDragElement=oHtmlElement;if(this.m_oDragLayer.setCapture)
this.m_oDragLayer.setCapture();this.m_pointEnter={x:getEventClientX(oEvent),y:getEventClientY(oEvent)};this.m_oDragLayer.Dragger=this;DHTML.attachEvent(this.m_oDragLayer,"mousemove",OwcMoveDragger_Track_onMouseMove);DHTML.attachEvent(this.m_oDragLayer,"mouseup",OwcMoveDragger_Track_onMouseUp);if(!this.m_oDragLayer.setCapture)
DHTML.attachEvent(this.m_oDragLayer,"mouseout",OwcMoveDragger_Track_onMouseOut);}
function OwcMoveDragger_modeTrackEnd()
{DHTML.detachEvent(this.m_oDragLayer,"mousemove",OwcMoveDragger_Track_onMouseMove);DHTML.detachEvent(this.m_oDragLayer,"mouseup",OwcMoveDragger_Track_onMouseUp);if(!this.m_oDragLayer.setCapture)
DHTML.detachEvent(this.m_oDragLayer,"mouseout",OwcMoveDragger_Track_onMouseOut);}
function OwcMoveDragger_modeDragStart()
{DHTML.attachEvent(this.m_oDragLayer,"mousemove",OwcMoveDragger_Drag_onMouseMove);DHTML.attachEvent(this.m_oDragLayer,"mouseup",OwcMoveDragger_Drag_onMouseUp);if(!this.m_oDragLayer.setCapture)
DHTML.attachEvent(window,"mouseout",OwcMoveDragger_Drag_onMouseOut);}
function OwcMoveDragger_modeDragEnd()
{DHTML.detachEvent(this.m_oDragLayer,"mousemove",OwcMoveDragger_Drag_onMouseMove);DHTML.detachEvent(this.m_oDragLayer,"mouseup",OwcMoveDragger_Drag_onMouseUp);if(!this.m_oDragLayer.setCapture)
DHTML.detachEvent(window,"mouseout",OwcMoveDragger_Drag_onMouseOut);}
function OwcMoveDragger_removeDragLayer()
{if(this.m_oDragLayer)
{this.m_oDragLayer.parentNode.removeChild(this.m_oDragLayer);this.m_oDragLayer=null;}
this.m_oDragElement=null;this.m_pointEnter=null;this.m_pointLast=null;}
function OwcMoveDragger_dragCanStart(dx,dy,oEvent)
{if(!this.m_minDragOffset)
return true;if(dx>=this.m_minDragOffset.x)
return true;if(dy>=this.m_minDragOffset.y)
return true;return false;}
function OwcMoveDragger_Normal_onMouseDown(oEvent)
{var nMouseButtons=getEventMouseButtons(oEvent);if(nMouseButtons==1)
this.oliveMoveByDrag.modeTrackStart(this,oEvent);preventEventDefaultAction(oEvent);return false;}
function OwcMoveDragger_Track_onMouseMove(oEvent)
{var pointMouse={x:getEventClientX(oEvent),y:getEventClientY(oEvent)};var dx=Math.abs(pointMouse.x-this.Dragger.m_pointEnter.x);var dy=Math.abs(pointMouse.y-this.Dragger.m_pointEnter.y);if(this.Dragger.dragCanStart(dx,dy,oEvent))
{this.Dragger.modeTrackEnd();this.Dragger.modeDragStart();this.Dragger.dragStart(pointMouse,oEvent);}
stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);return false;}
function OwcMoveDragger_Track_onMouseUp(oEvent)
{var pointMouse={x:getEventClientX(oEvent),y:getEventClientY(oEvent)};var dx=Math.abs(pointMouse.x-this.Dragger.m_pointEnter.x);var dy=Math.abs(pointMouse.y-this.Dragger.m_pointEnter.y);this.Dragger.modeTrackEnd();var nMouseButtons=getEventMouseButtons(oEvent);if(nMouseButtons==1)
{if(this.Dragger.dragCanStart(dx,dy,oEvent))
{this.Dragger.dragStart(pointMouse,oEvent);this.Dragger.dragEnd(pointMouse,oEvent);}}
this.Dragger.removeDragLayer();stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);return false;}
function OwcMoveDragger_Track_onMouseOut(oEvent)
{if(getEventTarget(oEvent)!=this)
return false;this.Dragger.modeTrackEnd();this.Dragger.removeDragLayer();stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);return false;}
function OwcMoveDragger_Drag_onMouseMove(oEvent)
{var pointMouse={x:getEventClientX(oEvent),y:getEventClientY(oEvent)};this.Dragger.dragMove(pointMouse,oEvent);stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);return false;}
function OwcMoveDragger_Drag_onMouseUp(oEvent)
{var nMouseButtons=getEventMouseButtons(oEvent);if(nMouseButtons==1)
{var pointMouse={x:getEventClientX(oEvent),y:getEventClientY(oEvent)};this.Dragger.modeDragEnd();this.Dragger.dragEnd(pointMouse,oEvent);}
else
{this.Dragger.modeDragEnd();this.Dragger.dragEnd(null,oEvent,true);}
stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);return false;}
function OwcMoveDragger_Drag_onMouseOut(oEvent)
{if(getEventTarget(oEvent)!=this)
return false;this.Dragger.modeDragEnd();this.Dragger.dragEnd(null,oEvent,true);stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);return false;}
JScript.Type.RegisterClass("Olive.MoveDragger",Olive.MoveDragger);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.CmdTarget)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcCommon.js to your file");JScript.Type.RegisterNamespace("Olive.Controls");if(!Olive.Controls.prefix)
Olive.Controls.prefix="owc";if(!Olive.Controls.xmlns)
Olive.Controls.xmlns=Olive.Controls.prefix+":";if(!Olive.Controls.elements)
{Olive.Controls.elements=new Object();Olive.Controls.elements.Data="data";Olive.Controls.elements.DataProvider="data-provider";Olive.Controls.elements.Extend="extend";}
if(!Olive.Controls.attributes)
{Olive.Controls.attributes={ControlType:Olive.Controls.prefix+":"+"control",Ui:Olive.Controls.prefix+":"+"ui",initState:Olive.Controls.prefix+":"+"init-state",MaxImageWidth:Olive.Controls.prefix+":"+"max-image-width",MaxImageHeight:Olive.Controls.prefix+":"+"max-image-height",autoMagnify:Olive.Controls.prefix+":"+"auto-magnify",MultiSelect:Olive.Controls.prefix+":"+"multi-select",autoAttachHtmlHandlers:Olive.Controls.prefix+":"+"html-handlers"};}
if(!Olive.Controls.controlTypeNames)
{Olive.Controls.controlTypeNames={Control:"Control"};}
function OwcGetControl(sControlId,bScanAncestors)
{return OwcGetControlFromHtmlElem(getObj(sControlId),bScanAncestors);}
function OwcGetControlFromHtmlElem(oHtmlElem,bScanAncestors)
{if(!oHtmlElem)
return null;if(oHtmlElem.m_OwcControl)
return oHtmlElem.m_OwcControl;if(!bScanAncestors)
return null;return OwcGetControlFromHtmlElem(oHtmlElem.parentNode,true);}
if(!Olive.Controls.Scanner)
{Olive.Controls.Scanner=function OwcControlScanner()
{}
Olive.Controls.Scanner.DeclareType=function OwcControlScanner_DeclareType(rObject)
{this.DeclareField("m_nDefaultFilterResult",Olive.Controls.Scanner.FilterMode.Accept);this.DeclareField("m_arrFilters",null);this.DeclareField("m_delegateProcessControl",null);this.DeclareField("m_bCancelScanning",false);this.DeclareMethod("scan",OwcControlScanner_scan);this.DeclareMethod("filter",OwcControlScanner_filter);this.DeclareMethod("setProcessControlCallback",OwcControlScanner_setProcessControlCallback);this.DeclareMethod("addFilter",OwcControlScanner_addFilter);this.DeclareMethod("clearFilters",OwcControlScanner_clearFilters);this.DeclareMethod("cancelScanning",OwcControlScanner_cancelScanning);this.DeclareMethod("isScanningCancelled",OwcControlScanner_isScanningCancelled);}
Olive.Controls.Scanner.FilterMode={Accept:0x00000000,Reject:0x00000001,ScanChildren:0x00000000,DoNotScanChildren:0x00000002,ScanSiblings:0x00000000,DoNotScanSiblings:0x00000004,ContinueScanning:0x00000000,StopScanning:0x00000008,StopFilter:0x00000010,Skip:0x00000013,Process:0x00000002,ProcessAndStop:0x0000001A}
Olive.Controls.Scanner.FindControls=function OwcControlScanner_findControls(oContainer,pfnFilter)
{function OwcControlScanner_findControls_Process(ctxScanner,oControl)
{ctxScanner.m_arrMatched.push(oControl);}
var oScanner=new Olive.Controls.Scanner();oScanner.m_arrMatched=new Array();oScanner.setProcessControlCallback(OwcControlScanner_findControls_Process);oScanner.addFilter(pfnFilter);oScanner.scan(oContainer);return oScanner.m_arrMatched;}
function OwcControlScanner_scan(oControlsContainer)
{var arrScanStack=new Array();var oCurParent,nCurCount,iCurPos;var nArgCount=2;if(arguments.length>1)
nArgCount+=(arguments.length-1);var arrArguments=new Array(nArgCount);for(var iArg=2;iArg<nArgCount;++iArg)
arrArguments[iArg]=arguments[iArg-1];arrArguments[0]=this;oCurParent=oControlsContainer;iCurPos=0;nCurCount=oCurParent.getControlsCount();this.m_bCancelScanning=false;while(oCurParent)
{var oCurControl=oCurParent.getControl(iCurPos);if(!oCurControl)
break;arrArguments[1]=oCurControl;var nFilterResult=this.filter(oControlsContainer,arrArguments);if((nFilterResult&Olive.Controls.Scanner.FilterMode.Reject)==0)
{this.m_delegateProcessControl.apply(oControlsContainer,arrArguments);if(this.isScanningCancelled())
break;}
if(nFilterResult&Olive.Controls.Scanner.FilterMode.StopScanning)
break;var bMoveToNextSibling=true;if((nFilterResult&Olive.Controls.Scanner.FilterMode.DoNotScanChildren)==0)
{var nSubControlsCount=oCurControl.getControlsCount();if(nSubControlsCount>0)
{var oStackPos=new Object();oStackPos.curParent=oCurParent;oStackPos.curCount=nCurCount;oStackPos.curPos=iCurPos;arrScanStack.push(oStackPos);oCurParent=oCurControl;nCurCount=nSubControlsCount;iCurPos=0;bMoveToNextSibling=false;}}
if(bMoveToNextSibling)
{while(((nFilterResult&Olive.Controls.Scanner.FilterMode.DoNotScanSiblings)!=0)||((iCurPos+1)>=nCurCount))
{nFilterResult=Olive.Controls.Scanner.FilterMode.ContinueScanning;if(arrScanStack.length>0)
{var oStackPos=arrScanStack.pop();oCurParent=oStackPos.curParent;nCurCount=oStackPos.curCount;iCurPos=oStackPos.curPos;}
else
{oCurParent=null;nCurCount=0;iCurPos=-2;}}
++iCurPos;}}}
function OwcControlScanner_filter(oDefaultThis,arrArguments)
{var nFilterResult=this.m_nDefaultFilterResult;if(this.m_arrFilters)
{var iFilter,nFiltersCount=this.m_arrFilters.length;for(iFilter=0;iFilter<nFiltersCount;++iFilter)
{var nFilterFlags=this.m_arrFilters[iFilter].apply(oDefaultThis,arrArguments);nFilterResult|=nFilterFlags;if(nFilterFlags&Olive.Controls.Scanner.FilterMode.StopFilter)
{nFilterResult&=~Olive.Controls.Scanner.FilterMode.StopFilter;break;}}}
return nFilterResult;}
function OwcControlScanner_setProcessControlCallback(oProcessControlDelegate)
{this.m_delegateProcessControl=oProcessControlDelegate;}
function OwcControlScanner_addFilter(oFilterDelegate)
{if(oFilterDelegate)
this.m_arrFilters=Array_appendItem(this.m_arrFilters,oFilterDelegate);}
function OwcControlScanner_clearFilters()
{this.m_arrFilters=null;}
function OwcControlScanner_cancelScanning()
{this.m_bCancelScanning=true;}
function OwcControlScanner_isScanningCancelled()
{return this.m_bCancelScanning;}
JScript.Type.RegisterClass("Olive.Controls.Scanner",Olive.Controls.Scanner);}
if(!Olive.Controls.IControlFactory)
{Olive.Controls.IControlFactory=new Interface("Olive.Controls.IControlFactory");Olive.Controls.IControlFactory.Implement=function OwcIControlFactory_Implement(rObject,bDynamic)
{if(!Olive.Controls.IControlFactory.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"m_arrControlTypes",null);JScript.Type.DeclareMethod(rObject,"registerControlType",OwcIControlFactory_registerControlType);JScript.Type.DeclareMethod(rObject,"getRegisteredControlType",OwcIControlFactory_getRegisteredControlType);JScript.Type.DeclareMethod(rObject,"createControlInstance",OwcIControlFactory_createControlInstance);JScript.Type.DeclareMethod(rObject,"createControl",OwcIControlFactory_createControl);}
function OwcIControlFactory_registerControlType(controlTypeName,controlClass)
{if(!this.m_arrControlTypes)
this.m_arrControlTypes=[];var oControlType={ControlType:controlTypeName,ControlTypeId:controlTypeName.toLowerCase(),ControlConstructor:controlClass}
this.m_arrControlTypes[oControlType.ControlTypeId]=oControlType;return oControlType;}
function OwcIControlFactory_getRegisteredControlType(sControlType)
{if(!sControlType)
return null;if(this.m_arrControlTypes)
{var oControlType=this.m_arrControlTypes[sControlType.toLowerCase()];if(oControlType)
return oControlType;}
var oParent=Olive.Object.FindParentImplementing(Olive.Controls.IControlFactory,this);if(oParent)
return oParent.getRegisteredControlType(sControlType);if(Olive.Controls.ControlFactory==this)
return null;return Olive.Controls.ControlFactory.getRegisteredControlType(sControlType);}
function OwcIControlFactory_createControlInstance(sControlType)
{var oControlType=this.getRegisteredControlType(sControlType);if(!oControlType)
return null;var oControl=new oControlType.ControlConstructor();oControl.controlType=oControlType.ControlTypeId;return oControl;}
function OwcIControlFactory_createControl(sControlType,oPage,oCurHtmlElem,oControlParent,isDynamicContent)
{var oControl=this.createControlInstance(sControlType);if(oControl)
oControl.constructControl(oPage,oCurHtmlElem,oControlParent,isDynamicContent);return oControl;}}
if(!Olive.Controls.ControlFactory)
{Olive.Controls.ControlFactory=new Object();Olive.Controls.IControlFactory.Implement(Olive.Controls.ControlFactory,true);}
Olive.Controls.RegisterControlType=function OwcControls_RegisterControlType(controlTypeName,controlClass)
{return this.ControlFactory.registerControlType(controlTypeName,controlClass);}
if(!Olive.Controls.IControlContainer)
{Olive.Controls.IControlContainer=new Interface("Olive.Controls.IControlContainer");Olive.Controls.IControlContainer.Implement=function OwcIControlContainer_Implement(rObject,bDynamic)
{if(!this.Register(rObject,bDynamic))
return;Olive.Controls.IControlFactory.ImplementInterface(rObject,bDynamic);JScript.Type.DeclareField(rObject,"Controls",null);JScript.Type.DeclareMethod(rObject,"get_HtmlElement",OwcControlsContainer_get_HtmlElement);JScript.Type.DeclareMethod(rObject,"get_WebPage",OwcControlsContainer_get_WebPage);JScript.Type.DeclareMethod(rObject,"bindControls",OwcControlsContainer_bindControls);JScript.Type.DeclareMethod(rObject,"initializeControls",OwcControlsContainer_initializeControls);JScript.Type.DeclareMethod(rObject,"clearControls",OwcControlsContainer_clearControls);JScript.Type.DeclareMethod(rObject,"clearSelections",OwcControlsContainer_clearSelections);JScript.Type.DeclareMethod(rObject,"addControl",OwcControlsContainer_addControl);JScript.Type.DeclareMethod(rObject,"removeControl",OwcControlsContainer_removeControl);JScript.Type.DeclareMethod(rObject,"findControlsImplementing",OwcControlsContainer_findControlsImplementing);JScript.Type.DeclareMethod(rObject,"findControlById",OwcControlsContainer_findControlById);JScript.Type.DeclareMethod(rObject,"findControlByType",OwcControlsContainer_findControlByType);JScript.Type.DeclareMethod(rObject,"findControlsByType",OwcControlsContainer_findControlsByType);JScript.Type.DeclareMethod(rObject,"getControlsCount",OwcControlsContainer_getControlsCount);JScript.Type.DeclareMethod(rObject,"getControl",OwcControlsContainer_getControl);JScript.Type.DeclareMethod(rObject,"getControlRev",OwcControlsContainer_getControlRev);JScript.Type.DeclareMethod(rObject,"indexOfControl",OwcControlsContainer_indexOfControl);JScript.Type.DeclareMethod(rObject,"isFirstControl",OwcControlsContainer_isFirstControl);JScript.Type.DeclareMethod(rObject,"isLastControl",OwcControlsContainer_isLastControl);JScript.Type.DeclareMethod(rObject,"setActiveMask",OwcControlsContainer_setActiveMask);JScript.Type.DeclareMethod(rObject,"bindContent",OwcControlsContainer_bindContent);JScript.Type.DeclareMethod(rObject,"clearContent",OwcControlsContainer_clearContent);JScript.Type.DeclareMethod(rObject,"pasteContent",OwcControlsContainer_pasteContent);JScript.Type.DeclareMethod(rObject,"getHtmlContentTarget",OwcControlsContainer_getHtmlContentTarget);JScript.Type.DeclareMethod(rObject,"_onHtmlContentParsed",null);JScript.Type.DeclareMethod(rObject,"postHtmlContentPaste",null);}
function OwcControlsContainer_get_HtmlElement(){return null;}
function OwcControlsContainer_get_WebPage(){return null;}
var sOliveNameSpace=Olive.Controls.xmlns;var nOliveNameSpace=sOliveNameSpace.length;function OwcControlsContainer_bindControls(oDomNode,oPage,oRequest){if(!oDomNode)
oDomNode=this.get_HtmlElement();if(!oDomNode)
return false;if(!oPage)
oPage=this.get_WebPage();var attrControlType=Olive.Controls.attributes.ControlType;var attrUi=Olive.Controls.attributes.Ui;var uiInterface=Olive.IUiElements;var isDynamicContent=!!oRequest;var getOliveTagName;getOliveTagName=function(node){if(node.scopeName){if(node.scopeName.toLowerCase()!="owc")
return null;if(node.nodeName.toLowerCase()=="owc:data")
return"data";if(node.nodeName.toLowerCase()=="owc:data-provider")
return"data-provider";return node.nodeName;}else{var sName=node.nodeName;if(sName.length>nOliveNameSpace&&sName.substr(0,nOliveNameSpace).toLowerCase()==sOliveNameSpace)
return sName.substr(nOliveNameSpace);return null;}}
var nodes,index,count,currentNode,container,newControl;var childNodes,childNodesCount;var uiElementParent=null;var controlType="";var uiElemType="";var stack=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var state,stackSize;var checkElement,match;container=this;parentNode=oDomNode;nodes=oDomNode.childNodes;count=nodes.length;if(count==0)
return true;index=0;if(uiInterface.IsImplementedBy(this))
uiElementParent=this;else
uiElementParent=Olive.Object.FindParentImplementing(uiInterface,this);stackSize=0;index=0;while(index<count){currentNode=nodes[index];if(currentNode.nodeType==1){checkElement=true;if(attrNode=currentNode.getAttributeNode(attrControlType)){controlType=attrNode.nodeValue;newControl=container.createControl(controlType,oPage,currentNode,container,isDynamicContent);if(!newControl)
this.reportKnownError(Olive.Errors.Code.UnknownControlType,controlType);checkElement=false;}
else
newControl=null;if(uiElementParent&&(attrNode=currentNode.getAttributeNode(attrUi))){uiElemType=attrNode.nodeValue;uiElementParent.bindUiElement(currentNode,uiElemType.toLowerCase());checkElement=false;}
if(checkElement&&(match=getOliveTagName(currentNode))){childNodes=null;childNodesCount=0;switch(match.length){case 4:container.parseControlData(currentNode);break;case 13:if(container instanceof Olive.Page)
OwcGlobals.DefaultDataProvider=DHTML.getTextContent(currentNode);else
container.DataProviderUrl=DHTML.getTextContent(currentNode);break;default:var functionName=DHTML.getAttr(currentNode,"apply-proto");if(functionName){var protoFunction=eval(functionName);if(protoFunction)
protoFunction.call(container,container,true);}
else{var typeName=DHTML.getAttr(currentNode,"type");if(typeName){var obj=this.getTypeInfoName(typeName);if(obj)
JScript.Type.ApplyTypeOnScriptObject(obj,container);}}
break;}}
else{childNodes=currentNode.childNodes;childNodesCount=childNodes.length;}}
else
childNodesCount=0;if(childNodesCount>0){if(++index<count){state={_container:container,_ui_parent:uiElementParent,_nodes:nodes,_count:count,_index:index};if(stackSize<stack.length)
stack[stackSize]=state;else
stack.push(state);++stackSize;}
if(newControl){container=newControl;if(uiInterface.IsImplementedBy(newControl))
uiElementParent=newControl;newControl=null;}
nodes=childNodes;count=childNodesCount;index=0;}
else if(++index==count){if(stackSize==0)
break;state=stack[--stackSize];container=state._container;uiElementParent=state._ui_parent;nodes=state._nodes;count=state._count;index=state._index;}}}
function OwcControlsContainer_getTypeInfoName(name){for(var oType in JScript.Type.types){var typeName=JScript.Type.GetNameFromFullName(oType);if(typeName&&(typeName==name))
return JScript.Type.types[oType].scriptObject;}
return null;}
function OwcControlsContainer_initializeControls(oHtmlParentElement)
{if(!this.Controls)
return;for(var iControl=0;iControl<this.Controls.length;++iControl)
{var oControl=this.Controls[iControl];if(!oControl)
continue;if(oHtmlParentElement&&!DHTML.isDescendent(oControl.HtmlElement,oHtmlParentElement))
continue;oControl.initControl();var oEvent=oControl.createOwcEventObject("controlInitialized");oControl.fireOwcEvent(oEvent);Object_Destroy(oEvent);}}
function OwcControlsContainer_clearControls(oHtmlParentElement)
{if(!this.Controls)
return;for(var iControl=0;iControl<this.Controls.length;++iControl)
{var oControl=this.Controls[iControl];if(oControl&&(!oHtmlParentElement||!oControl.HtmlElement||DHTML.isDescendent(oControl.HtmlElement,oHtmlParentElement))){oControl.termControl();}}
this.Controls=null;DHTML.CollectGarbage();}
function OwcControlsContainer_clearSelections()
{if(this.m_arrSelection)
this.m_arrSelection=null;if(this.Parent.m_arrSelection)
this.Parent.m_arrSelection=null;}
function OwcControlsContainer_addControl(oControl)
{if(!this.Controls)
this.Controls=new Array();this.Controls.push(oControl);}
function OwcControlsContainer_removeControl(iControl,bTerminate)
{if(!this.Controls)
return;var oControl=this.Controls.splice(iControl,1);if(oControl&&bTerminate)
oControl.termControl();return oControl;}
function OwcControlsContainer_findControlsImplementing(vInterface)
{var sInterfaceName="";if(typeof(vInterface)=="string")
sInterfaceName=vInterface;else
sInterfaceName=vInterface.Id;function _filterControlsImplementing(ctxScanner,oControl)
{if(Interface.IsImplemented(oControl,sInterfaceName))
return Olive.Controls.Scanner.FilterMode.Process;return(Olive.Controls.Scanner.FilterMode.Reject+Olive.Controls.Scanner.FilterMode.StopFilter);}
return Olive.Controls.Scanner.FindControls(this,_filterControlsImplementing);}
function OwcControlsContainer_findControlById(sId)
{function _filterControlById(ctxScanner,oControl)
{if(oControl.m_sId==sId)
return Olive.Controls.Scanner.FilterMode.ProcessAndStop;return(Olive.Controls.Scanner.FilterMode.Reject+Olive.Controls.Scanner.FilterMode.StopFilter);}
var arrMatched=Olive.Controls.Scanner.FindControls(this,_filterControlById);if(arrMatched.length>0)
return arrMatched[0];return null;}
function OwcControlsContainer_findControlByType(sControlTypeName)
{function _filterControlByTypeName(ctxScanner,oControl)
{if(oControl.controlType==sControlTypeName)
return Olive.Controls.Scanner.FilterMode.ProcessAndStop;return(Olive.Controls.Scanner.FilterMode.Reject+Olive.Controls.Scanner.FilterMode.StopFilter);}
if(!this.Controls)
return null;var arrMatched=Olive.Controls.Scanner.FindControls(this,_filterControlByTypeName);if(arrMatched.length>0)
return arrMatched[0];return null;}
function OwcControlsContainer_findControlsByType(vControlType)
{function _filterControlByTypeName(ctxScanner,oControl)
{if(oControl.controlType==vControlType)
return Olive.Controls.Scanner.FilterMode.Process;return(Olive.Controls.Scanner.FilterMode.Reject+Olive.Controls.Scanner.FilterMode.StopFilter);}
function _filterControlByTypeClass(ctxScanner,oControl)
{if(oControl instanceof vControlType)
return Olive.Controls.Scanner.FilterMode.Process;return(Olive.Controls.Scanner.FilterMode.Reject+Olive.Controls.Scanner.FilterMode.StopFilter);}
if(!this.Controls)
return null;var pfnFilter=null;switch(typeof vControlType)
{case"string":vControlType=vControlType.toLowerCase();pfnFilter=_filterControlByTypeName;break;case"object":pfnFilter=_filterControlByTypeClass;break;default:return null;}
var arrMatched=Olive.Controls.Scanner.FindControls(this,pfnFilter);return arrMatched;}
function OwcControlsContainer_getControlsCount(oControlType)
{if(!this.Controls)
return 0;if(!oControlType)
return this.Controls.length;var nCount=0;if(typeof(oControlType)=="string")
{oControlType=oControlType.toLowerCase();for(var iControl=0;iControl<this.Controls.length;++iControl)
{var oControl=this.Controls[iControl];if(oControl.controlType==oControlType)
++nCount;}}
else
{for(var iControl=0;iControl<this.Controls.length;++iControl)
{var oControl=this.Controls[iControl];if(oControl instanceof oControlType){++nCount;}}}
return nCount;}
function OwcControlsContainer_getControl(iIndex,oControlType)
{if(!this.Controls||iIndex<0||iIndex>=this.Controls.length)
return null;if(!oControlType)
return this.Controls[iIndex];var nCount=0;if(typeof(oControlType)=="string")
{oControlType=oControlType.toLowerCase();for(var iControl=0;iControl<this.Controls.length;++iControl)
{var oControl=this.Controls[iControl];if(oControl.controlType==oControlType)
{if(nCount==iIndex)
return oControl;++nCount;}}}
else
{for(var iControl=0;iControl<this.Controls.length;++iControl)
{var oControl=this.Controls[iControl];if(oControl instanceof oControlType)
{if(nCount==iIndex)
return oControl;++nCount;}}}
return null;}
function OwcControlsContainer_getControlRev(iIndex,oControlType)
{if(!this.Controls||iIndex<0||iIndex>=this.Controls.length)
return null;if(!oControlType)
return this.Controls[this.Controls.length-1];var nCount=0;if(typeof(oControlType)=="string")
{oControlType=oControlType.toLowerCase();for(var iControl=this.Controls.length-1;iControl>=0;--iControl)
{var oControl=this.Controls[iControl];if(oControl.controlType==oControlType)
{if(nCount==iIndex)
return oControl;++nCount;}}}
else
{for(var iControl=this.Controls.length-1;iControl>=0;--iControl)
{var oControl=this.Controls[iControl];if(oControl instanceof oControlType)
{if(nCount==iIndex)
return oControl;++nCount;}}}
return null;}
function OwcControlsContainer_indexOfControl(oControl,oControlType)
{if(!oControl)
return-1;if(!oControlType)
return Array_indexOf(this.Controls,oControl);var iIndex=0;if(typeof(oControlType)=="string")
{oControlType=oControlType.toLowerCase();for(var iControl=0;iControl<this.Controls.length;++iControl)
{var oSubControl=this.Controls[iControl];if(oSubControl===oControl)
return iIndex;if(oSubControl.controlType==oControlType)
++iIndex;}}
else
{for(var iControl=0;iControl<this.Controls.length;++iControl)
{var oSubControl=this.Controls[iControl];if(oSubControl===oControl)
return iIndex;if(oSubControl instanceof oControlType)
++iIndex;}}
return-1;}
function OwcControlsContainer_isFirstControl(oControlParam,oControlType)
{if(!oControlParam||!this.Controls||this.Controls.length==0)
return false;return(this.getControl(0,oControlType)==oControlParam);}
function OwcControlsContainer_isLastControl(oControlParam,oControlType)
{if(!oControlParam||!this.Controls||this.Controls.length==0)
return false;return(this.getControlRev(0,oControlType)==oControlParam);}
function OwcControlsContainer_setActiveMask(sMaskType,dwBitmask,nItemCount,sControlType)
{if(!this.Controls)
return;if(!sControlType)
sControlType=null;for(var iControl=0;iControl<this.Controls.length;++iControl)
{var oControl=this.Controls[iControl];if(!oControl||!("setActiveMask"in oControl)||!oControl.setActiveMask)
continue;if(sControlType&&oControl.controlType!=sControlType)
continue;oControl.setActiveMask(sMaskType,dwBitmask,nItemCount);}}
function OwcControlsContainer_bindContent(oHtmlElement,oRequest)
{if((!oRequest)||oRequest.m_bBindControls)
this.bindControls(oHtmlElement,this.get_WebPage(),oRequest);this.initializeControls(oHtmlElement);if(this.postHtmlContentPaste)
{if(!oHtmlElement)
oHtmlElement=this.getHtmlContentTarget();this.postHtmlContentPaste(oRequest,oHtmlElement);}
Olive.ICmdSource.UpdateAll(this);}
function OwcControlsContainer_clearContent(sHtmlContent,oHtmlElement)
{var oHtmlContentTarget=(oHtmlElement?oHtmlElement:this.getHtmlContentTarget());this.clearSelections();this.clearControls(oHtmlContentTarget);if(!sHtmlContent)
sHtmlContent="";if(oHtmlContentTarget)
DHTML.pasteHtmlContent(oHtmlContentTarget,sHtmlContent);}
function OwcControlsContainer_pasteContent(sHtmlContent,oHtmlElement,oRequest)
{this.clearContent("",oHtmlElement);var oHtmlContentTarget=(oHtmlElement?oHtmlElement:this.getHtmlContentTarget());DHTML.pasteHtmlContent(oHtmlContentTarget,(sHtmlContent?sHtmlContent:""));this.bindContent(oHtmlElement,oRequest);}
function OwcControlsContainer_getHtmlContentTarget()
{return this.get_HtmlElement();}}
if(!Olive.Controls.Control)
{Olive.Controls.Control=function OwcControl()
{}
Olive.Controls.Control.DeclareType=function OwcControl_DeclareType()
{this.DeclareField("m_sId",null);this.DeclareField("m_bCtxMenuEnabled",false);this.DeclareField("m_oCtxMenu",null);this.DeclareField("m_autoAttachHtmlHandlers",true);this.DeclareField("WebApplication",null);this.DeclareField("WebPage",null);this.DeclareField("Parent",null);this.DeclareField("HtmlElement",null);this.DeclareField("controlType","");this.DeclareMethod("getControlType",OwcControl_getControlType);this.DeclareMethod("getOwnerPage",OwcControl_getOwnerPage);this.ReplaceMethod("get_HtmlElement",OwcControl_get_HtmlElement);this.ReplaceMethod("get_WebPage",OwcControl_get_WebPage);this.DeclareMethod("constructControl",OwcControl_constructControl);this.DeclareMethod("bindHtmlElement",OwcControl_bindHtmlElement);this.DeclareMethod("applyAdditionalInterfaces",OwcControl_applyAdditionalInterfaces);this.DeclareMethod("parseControlHtmlAttr",OwcControl_parseControlHtmlAttr);this.DeclareMethod("parseControlData",null);this.DeclareMethod("initControl",OwcControl_initControl);this.DeclareMethod("termControl",OwcControl_termControl);this.DeclareMethod("bindUiElement",null);this.DeclareMethod("getAncestorContentItemProperty",OwcControl_getAncestorContentItemProperty);this.DeclareMethod("getContextMenu",OwcControl_getContextMenu);this.DeclareMethod("setContextMenu",OwcControl_setContextMenu);this.DeclareMethod("enableContextMenu",OwcControl_enableContextMenu);this.DeclareMethod("trackContextMenu",OwcControl_trackContextMenu);this.DeclareMethod("setTooltip",OwcControl_setTooltip);this.DeclareMethod("removeTooltip",OwcControl_removeTooltip);this.DeclareMethod("setAlt",OwcControl_setAlt);this.DeclareMethod("removeAlt",OwcControl_removeAlt);}
Olive.Controls.Control.ApplyPrototype=function OwcControl_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("controlInitialized","onInitialized");rObject.registerOwcEventsClass2("busyStateChanged","onBusyStateChanged");}
function OwcControl_getControlType()
{return this.controlType;}
function OwcControl_getOwnerPage()
{if(!this.HtmlElement)
return null;return Olive.Page.GetPageForDocument(this.HtmlElement.ownerDocument);}
function OwcControl_get_HtmlElement()
{return this.HtmlElement;}
function OwcControl_get_WebPage()
{return this.WebPage;}
function OwcControl_constructControl(oWebPage,oHtmlElement,oControlParent,isDynamicContent)
{this.WebPage=oWebPage;if(oWebPage)
this.WebApplication=oWebPage.WebApplication;this.Parent=oControlParent;this.applyAdditionalInterfaces(oHtmlElement);if(this.Parent)
this.Parent.addControl(this);if(oHtmlElement)
this.bindHtmlElement(oHtmlElement,isDynamicContent);}
function OwcControl_applyAdditionalInterfaces(oHtmlElement)
{if(!Olive.Controls.IFormField.IsImplementedBy(this))
{var sFieldName=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.FieldName);if(sFieldName)
{var oControl=this;while(oControl)
{if(oControl.autoApplyFieldInterface)
{oControl.autoApplyFieldInterface(this,oHtmlElement,sFieldName);break;}
oControl=oControl.Parent;}}}}
function OwcControl_bindHtmlElement(oHtmlElement,isDynamicContent)
{this.HtmlElement=oHtmlElement;oHtmlElement.m_OwcControl=this;if(isDynamicContent)
this.m_autoAttachHtmlHandlers=false;this.parseControlHtmlAttr();}
function OwcControl_parseControlHtmlAttr()
{this.m_sId=DHTML.getAttr(this.HtmlElement,"id");if(!this.m_autoAttachHtmlHandlers)
this.m_autoAttachHtmlHandlers=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.autoAttachHtmlHandlers,false);if(this.m_autoAttachHtmlHandlers)
this.attachHtmlEventHandlers(this.HtmlElement,Olive.Controls.xmlns);}
function OwcControl_initControl()
{if(Olive.IState.IsImplementedBy(this))
{this.initStateFromHtml();this.updateStateBehaviors(this.getState(),~this.getState());}
if(Olive.IUiElements.IsImplementedBy(this))
this.initUiState();this.initializeControls(null);}
function OwcControl_termControl()
{if(this.HtmlElement)
this.HtmlElement.m_OwcControl=null;this.clearSelections();this.clearControls();Object_Destroy(this);}
function OwcControl_getAncestorContentItemProperty(sProp)
{var sRes=null;var sObj=this;do{if(sObj.m_oContentItem&&("undefined"!=typeof sObj.m_oContentItem[sProp])&&sObj.m_oContentItem[sProp]!==null){sRes=sObj.m_oContentItem[sProp];break;}
sObj=(sObj.Parent?sObj.Parent:null);}while(sObj);return sRes;}
function OwcControl_getContextMenu(bScanAncestors)
{if(this.m_oCtxMenu)
return this.m_oCtxMenu;if(!bScanAncestors||!this.Parent||!this.Parent.getContextMenu)
return null;this.Parent.getContextMenu(true);}
function OwcControl_setContextMenu(rContextMenu,bDoNotAutoEnable)
{this.m_oCtxMenu=rContextMenu;if(!bDoNotAutoEnable)
this.enableContextMenu((rContextMenu!=null)&&(rContextMenu!=undefined));}
function OwcControl_enableContextMenu(bEnable)
{if(bEnable)
{if(this.m_bCtxMenuEnabled)
return;DHTML.attachEvent(this.HtmlElement,"contextmenu",OwcControl_HTML_onContextMenu);this.m_bCtxMenuEnabled=true;}
else if(!this.m_bCtxMenuEnabled)
{DHTML.detachEvent(this.HtmlElement,"contextmenu",OwcControl_HTML_onContextMenu);this.m_bCtxMenuEnabled=false;}
function OwcControl_HTML_onContextMenu(oEvent)
{var rContextMenu=null;var rContextControl=null;var rSrcElement=getEventTarget(oEvent);var rSrcControl=OwcGetControlFromHtmlElem(rSrcElement,true);var rCurElement=this;var rCurControl=OwcGetControlFromHtmlElem(rCurElement);rContextMenu=Olive.Controls.getContextMenu(rSrcControl);if(!rContextMenu)
{rContextMenu=Olive.Controls.getContextMenu(rCurControl);if(rContextMenu)
rContextControl=rCurControl;}
else
rContextControl=rSrcControl;if(rContextMenu)
{stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);rContextControl.trackContextMenu(rContextMenu,rSrcControl,rCurControl,oEvent);}}}
function OwcControl_trackContextMenu(rContextMenu,rSrcControl,rCurControl,oEvent)
{rContextMenu.trackPopupMenu(this,rSrcControl,rCurControl,oEvent);}
function OwcControl_setTooltip(sText)
{DHTML.setTooltip(this.HtmlElement,sText);}
function OwcControl_removeTooltip()
{DHTML.removeTooltip(this.HtmlElement);}
function OwcControl_setAlt(sText)
{DHTML.setAlt(this.HtmlElement,sText);}
function OwcControl_removeAlt()
{DHTML.removeAlt(this.HtmlElement);}
JScript.Type.RegisterClass("Olive.Controls.Control",Olive.Controls.Control,Olive.CmdTarget,[Olive.Controls.IControlContainer]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Control,Olive.Controls.Control);}
Olive.Controls.getContextMenu=function OwcControl_Global_getContextMenu(rObject,bScanAncestors)
{if(!rObject||!rObject.getContextMenu)
return null;return rObject.getContextMenu(bScanAncestors);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if((typeof(Olive)=="undefined")||(typeof(Olive.Controls)=="undefined"))
throw DHTML.newError(0,"Olive Web Controls SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.attributes.Format=Olive.Controls.prefix+":"+"Format";Olive.Controls.attributes.InitFormat=Olive.Controls.prefix+":"+"init-format";Olive.Controls.attributes.HtmlValue=Olive.Controls.prefix+":"+"HtmlValue";Olive.Controls.attributes.DataType=Olive.Controls.prefix+":"+"DataType";Olive.Controls.attributes.FieldName=Olive.Controls.prefix+":"+"FieldName";Olive.Controls.attributes.FieldRequired=Olive.Controls.prefix+":"+"Required";Olive.Controls.attributes.MultipleValueSeparator=Olive.Controls.prefix+":"+"multiple-value-separator";Olive.Controls.attributes.NoValuePlaceholder=Olive.Controls.prefix+":"+"no-value-placeholder";Olive.Controls.attributes.DisableOnChangeBehaviour=Olive.Controls.prefix+":"+"DisableOnChangeBehaviour";Olive.Controls.attributes.InitValue=Olive.Controls.prefix+":"+"init-value";Olive.Controls.attributes.ReadOnly=Olive.Controls.prefix+":"+"read-only";Olive.Controls.DataTypeName={Object:"object",String:"string",Boolean:"boolean",Number:"number",Date:"date",Year:"year",Month:"month",Day:"day",EMail:"email",EMailList:"email-list",SortBy:"sort-by"}
Olive.Controls.FieldNameLocalePrefix="FIELD_DISPLAY";Olive.Controls.SearchOperatorOr="<or>";Olive.Controls.NoValuePlaceholder="NO_VALUE_FOR_THIS_FIELD";if(!Olive.Controls.DataType)
{Olive.Controls.DataType=function OwcDataType()
{}
Olive.Controls.DataType.DeclareType=function OwcDataType_DeclareType(rObject)
{this.DeclareField("m_oLookupSupport",null);this.DeclareMethod("getDefaultFormat",Olive.Controls.DataType.getDefaultFormat);this.DeclareMethod("formatValue",Olive.Controls.DataType.toString);this.DeclareMethod("parseValue",Olive.Controls.DataType.parseValue);this.DeclareMethod("validateValue",Olive.Controls.DataType.validateValue);this.DeclareMethod("createNewValue",Olive.Controls.DataType.createNewValue);this.DeclareMethod("compareValue",Olive.Controls.DataType.compareValue);this.DeclareMethod("get_LookupSupport",OwcDataType_get_LookupSupport);this.DeclareMethod("set_LookupSupport",OwcDataType_set_LookupSupport);}
Olive.Controls.DataType.getDefaultFormat=function OwcDataType_getDefaultFormat()
{return null;}
Olive.Controls.DataType.toString=function OwcDataType_toString(oValue,sFormat)
{if((oValue==null)||(oValue==undefined))
return"";if(oValue.toString)
return oValue.toString(sFormat);return String(oValue);}
Olive.Controls.DataType.parseValue=function OwcDataType_parseValue(oValue,sFormat)
{return oValue;}
Olive.Controls.DataType.validateValue=function OwcDataType_validateValue(oValue,bDoNotThrowError)
{return true;}
Olive.Controls.DataType.createNewValue=function OwcDataType_createNewValue()
{return new Object();}
Olive.Controls.DataType.compareValue=function OwcDataType_compareValue(oPrevValue,oNewValue)
{if(oPrevValue==oNewValue)
return true;if(oPrevValue&&oNewValue&&(oPrevValue.valueOf()===oNewValue.valueOf()))
return true;return false;}
function OwcDataType_get_LookupSupport()
{return this.m_oLookupSupport;}
function OwcDataType_set_LookupSupport(oLookupSupport)
{this.m_oLookupSupport=oLookupSupport;}
Olive.Controls.DataType.m_arrDataTypes=new Array();Olive.Controls.DataType.RegisterDataType=function OwcDataType_Register(sTypeName,rDataTypeClass)
{if(typeof(rDataTypeClass)=="string")
rDataTypeClass=eval(rDataTypeClass);var oDataType=null;if(typeof(rDataTypeClass)=="function")
oDataType=new rDataTypeClass();else
oDataType=rDataTypeClass;return this.m_arrDataTypes[sTypeName.toLowerCase()]=oDataType;}
Olive.Controls.DataType.RegisterClassDataType=function OwcDataType_RegisterClass(sTypeName,rConstructor)
{if(typeof(rConstructor)=="string")
rConstructor=eval(rConstructor);var oDataType=new Olive.Controls.DataType.Object(rConstructor);return Olive.Controls.DataType.RegisterDataType(sTypeName,oDataType);}
Olive.Controls.DataType.LookupDataType=function OwcDataType_Lookup(sTypeName)
{return this.m_arrDataTypes[sTypeName.toLowerCase()];}
JScript.Type.RegisterClass("Olive.Controls.DataType",Olive.Controls.DataType);}
if(!Olive.Controls.DataType.Object)
{Olive.Controls.DataType.Object=function OwcDataTypeObject(oConstructor)
{if(oConstructor)
this.m_oConstructor=oConstructor;}
Olive.Controls.DataType.Object.DeclareType=function OwcDataTypeObject_DeclareType(rObject)
{this.DeclareField("m_oConstructor",Object);this.ReplaceMethod("createNewValue",OwcDataTypeObject_createNewValue);}
function OwcDataTypeObject_createNewValue()
{if(this.m_oConstructor)
return new this.m_oConstructor();return new Object();}
JScript.Type.RegisterClass("Olive.Controls.DataType.Object",Olive.Controls.DataType.Object,Olive.Controls.DataType);Olive.Controls.DataType.RegisterDataType(Olive.Controls.DataTypeName.Object,Olive.Controls.DataType.Object);}
if(!Olive.Controls.DataType.String)
{Olive.Controls.DataType.String=function OwcDataTypeString()
{}
Olive.Controls.DataType.String.DeclareType=function OwcDataTypeString_DeclareType(rObject)
{this.ReplaceMethod("formatValue",Olive.Controls.DataType.String.formatValue);this.ReplaceMethod("parseValue",Olive.Controls.DataType.String.parseValue);this.ReplaceMethod("validateValue",Olive.Controls.DataType.String.validateValue);}
Olive.Controls.DataType.String.formatValue=function OwcDataTypeString_formatValue(oValue,sFormat)
{if((oValue==null)||(oValue==undefined))
return"";return String(oValue);}
Olive.Controls.DataType.String.parseValue=function OwcDataTypeString_parseValue(oValue,sFormat)
{if((oValue==null)||(oValue==undefined))
return"";return String(oValue);}
Olive.Controls.DataType.String.validateValue=function OwcDataTypeString_validateValue(oValue,bDoNotThrowError)
{if(oValue===null||(typeof(oValue)=="string"))
return true;if(!bDoNotThrowError)
{var sErrorMessage=Olive.Errors.getLocalizedErrorMsg("BAD_STRING");throw DHTML.newError(0,sErrorMessage);}
return false;}
JScript.Type.RegisterClass("Olive.Controls.DataType.String",Olive.Controls.DataType.String,Olive.Controls.DataType);Olive.Controls.DataType.RegisterDataType(Olive.Controls.DataTypeName.String,Olive.Controls.DataType.String);}
if(!Olive.Controls.DataType.Boolean)
{Olive.Controls.DataType.Boolean=function OwcDataTypeBoolean()
{}
Olive.Controls.DataType.Boolean.DeclareType=function OwcDataTypeBoolean_DeclareType(rObject)
{this.ReplaceMethod("formatValue",Olive.Controls.DataType.Boolean.formatValue);this.ReplaceMethod("parseValue",Olive.Controls.DataType.Boolean.parseValue);this.ReplaceMethod("validateValue",Olive.Controls.DataType.Boolean.validateValue);}
Olive.Controls.DataType.Boolean.formatValue=function OwcDataTypeBoolean_formatValue(oValue,sFormat)
{if(!sFormat||sFormat=="")
return String(oValue);var arrValues=sFormat.split(";");return(oValue?arrValues[1]:arrValues[0]);}
Olive.Controls.DataType.Boolean.parseValue=function OwcDataTypeBoolean_parseValue(oValue,sFormat)
{if(typeof(oValue)=="boolean")
return oValue;if((oValue==null)||(oValue==undefined))
return false;if(typeof(oValue)=="number")
return(oValue!=0);if(typeof(oValue)!="string")
oValue=String(oValue);var bValue=false;if(oValue&&sFormat&&sFormat!="")
{sFormat=sFormat.toLowerCase();var arrValues=sFormat.split(";");bValue=(arrValues[1]==oValue.toLowerCase());}
else
bValue=String_parseBoolean(oValue);return bValue;}
Olive.Controls.DataType.Boolean.validateValue=function OwcDataTypeBoolean_validateValue(oValue,bDoNotThrowError)
{if(oValue===null||(typeof(oValue)=="boolean"))
return true;if(!bDoNotThrowError)
{var sErrorMessage=Olive.Errors.getLocalizedErrorMsg("BAD_BOOLEAN");throw DHTML.newError(0,sErrorMessage);}
return false;}
JScript.Type.RegisterClass("Olive.Controls.DataType.Boolean",Olive.Controls.DataType.Boolean,Olive.Controls.DataType);Olive.Controls.DataType.RegisterDataType(Olive.Controls.DataTypeName.Boolean,Olive.Controls.DataType.Boolean);}
if(!Olive.Controls.DataType.Number)
{Olive.Controls.DataType.Number=function OwcDataTypeNumber()
{}
Olive.Controls.DataType.Number.DeclareType=function OwcDataTypeNumber_DeclareType(rObject)
{this.ReplaceMethod("formatValue",Olive.Controls.DataType.Number.formatValue);this.ReplaceMethod("parseValue",Olive.Controls.DataType.Number.parseValue);this.ReplaceMethod("validateValue",Olive.Controls.DataType.Number.validateValue);}
Olive.Controls.DataType.Number.formatValue=function OwcDataTypeNumber_formatValue(oValue,sFormat)
{return String(oValue);}
Olive.Controls.DataType.Number.parseValue=function OwcDataTypeNumber_parseValue(oValue,sFormat)
{if(typeof(oValue)=="number")
return oValue;if((oValue==null)||(oValue==undefined))
return 0;if(typeof(oValue)!="string")
oValue=String(oValue);var nValue=parseInt(oValue,10);return nValue;}
Olive.Controls.DataType.Number.validateValue=function OwcDataTypeNumber_validateValue(oValue,bDoNotThrowError)
{if(oValue===null||(typeof(oValue)=="number"))
return true;if(!bDoNotThrowError)
{var sErrorMessage=Olive.Errors.getLocalizedErrorMsg("BAD_NUMBER");throw DHTML.newError(0,sErrorMessage);}
return false;}
JScript.Type.RegisterClass("Olive.Controls.DataType.Number",Olive.Controls.DataType.Number,Olive.Controls.DataType);Olive.Controls.DataType.RegisterDataType(Olive.Controls.DataTypeName.Number,Olive.Controls.DataType.Number);}
if(!Olive.Controls.DataType.Date)
{Olive.Controls.DataType.Date=function OwcDataTypeDate()
{}
Olive.Controls.DataType.Date.DeclareType=function OwcDataTypeDate_DeclareType(rObject)
{this.ReplaceMethod("getDefaultFormat",Olive.Controls.DataType.Date.getDefaultFormat);this.ReplaceMethod("formatValue",Olive.Controls.DataType.Date.formatValue);this.ReplaceMethod("parseValue",Olive.Controls.DataType.Date.parseValue);this.ReplaceMethod("validateValue",Olive.Controls.DataType.Date.validateValue);}
Olive.Controls.DataType.Date.getDefaultFormat=function OwcDataTypeDate_getDefaultFormat()
{if(Locale_Default)
return Locale_Default.ShortDateFormat;return"%m/%d/%Y";}
Olive.Controls.DataType.Date.formatValue=function OwcDataTypeDate_formatValue(oValue,sFormat)
{if(oValue==null||oValue==undefined)
return"";if(!sFormat||sFormat=="")
sFormat=this.getDefaultFormat();var oDate;if(oValue instanceof Date)
oDate=oValue;else
oDate=new Date(oValue);return oDate.formatDateTimeString(sFormat);}
Olive.Controls.DataType.Date.parseValue=function OwcDataTypeDate_parseValue(oValue,sFormat)
{if(oValue instanceof Date)
return oValue;if((oValue==null)||(oValue==undefined))
return null;else if(typeof(oValue)!="string")
oValue=String(oValue);var dateValue=null;if(sFormat)
{dateValue=Date.prototype.parseDateTimeString(oValue,sFormat);}
oValue=oValue.replace(/^\s+|\s+$/g,"");if(!dateValue&&oValue)
{var nDateTime=Date.parse(oValue);if(isNaN(nDateTime))
{if(typeof(oValue)=="string"&&!isNaN(parseInt(oValue,10))&&oValue.length==8)
{var nYear=parseInt(oValue.substr(0,4),10);var nMonth=parseInt(oValue.substr(4,2),10);var nDay=parseInt(oValue.substr(6,2),10);if(!isNaN(nYear)&&!isNaN(nMonth)&&!isNaN(nDay))
dateValue=new Date(nYear,nMonth-1,nDay);else
dateValue=undefined;}
else
dateValue=undefined;}
else
dateValue=new Date(nDateTime);}
return dateValue;}
Olive.Controls.DataType.Date.validateValue=function OwcDataTypeDate_validateValue(oValue,bDoNotThrowError)
{if(oValue===null||(oValue instanceof Date))
return true;if(!bDoNotThrowError)
{var sErrorMessage=Olive.Errors.getLocalizedErrorMsg("BAD_DATE_STRING");throw DHTML.newError(0,sErrorMessage);}
return false;}
JScript.Type.RegisterClass("Olive.Controls.DataType.Date",Olive.Controls.DataType.Date,Olive.Controls.DataType);Olive.Controls.DataType.RegisterDataType(Olive.Controls.DataTypeName.Date,Olive.Controls.DataType.Date);}
if(!Olive.Controls.DataType.Year)
{Olive.Controls.DataType.Year=function OwcDataTypeYear()
{}
Olive.Controls.DataType.Year.DeclareType=function OwcDataTypeYear_DeclareType(rObject)
{this.ReplaceMethod("getDefaultFormat",Olive.Controls.DataType.Year.getDefaultFormat);this.ReplaceMethod("formatValue",Olive.Controls.DataType.Year.formatValue);this.ReplaceMethod("parseValue",Olive.Controls.DataType.Year.parseValue);this.ReplaceMethod("validateValue",Olive.Controls.DataType.Year.validateValue);}
Olive.Controls.DataType.Year.getDefaultFormat=function OwcDataType_getDefaultFormat()
{return"%Y";}
Olive.Controls.DataType.Year.formatValue=function OwcDataTypeYear_formatValue(oValue,sFormat)
{var oDate;if(oValue instanceof Date)
oDate=oValue;else
{var nYear=Olive.Controls.DataType.Number.parseValue(oValue);oDate=new Date(nYear,0,1);}
if(!sFormat)
sFormat=this.getDefaultFormat();return oDate.formatDateTimeString(sFormat);}
Olive.Controls.DataType.Year.parseValue=function OwcDataTypeYear_parseValue(oValue,sFormat)
{if(oValue instanceof Date)
return oValue.getFullYear();return Olive.Controls.DataType.Number.parseValue(oValue,sFormat);}
Olive.Controls.DataType.Year.validateValue=function OwcDataTypeYear_validateValue(oValue,bDoNotThrowError)
{if(!Olive.Controls.DataType.Number.validateValue(oValue,bDoNotThrowError))
return false;if(oValue>=0)
return true;if(!bDoNotThrowError)
{var sErrorMessage=Olive.Errors.getLocalizedErrorMsg("BAD_YEAR");throw DHTML.newError(0,sErrorMessage);}
return false;}
JScript.Type.RegisterClass("Olive.Controls.DataType.Year",Olive.Controls.DataType.Year,Olive.Controls.DataType.Number);Olive.Controls.DataType.RegisterDataType(Olive.Controls.DataTypeName.Year,Olive.Controls.DataType.Year);}
if(!Olive.Controls.DataType.Month)
{Olive.Controls.DataType.Month=function OwcDataTypeMonth()
{}
Olive.Controls.DataType.Month.DeclareType=function OwcDataTypeMonth_DeclareType(rObject)
{this.ReplaceMethod("getDefaultFormat",Olive.Controls.DataType.Month.getDefaultFormat);this.ReplaceMethod("formatValue",Olive.Controls.DataType.Month.formatValue);this.ReplaceMethod("parseValue",Olive.Controls.DataType.Month.parseValue);this.ReplaceMethod("validateValue",Olive.Controls.DataType.Month.validateValue);}
Olive.Controls.DataType.Month.getDefaultFormat=function OwcDataType_getDefaultFormat()
{return"%B";}
Olive.Controls.DataType.Month.formatValue=function OwcDataTypeMonth_formatValue(oValue,sFormat)
{var oDate;if(oValue instanceof Date)
oDate=oValue;else
{var nMonth=this.parseValue(oValue);oDate=new Date(2005,nMonth-1,1);}
if(!sFormat)
sFormat=this.getDefaultFormat();return oDate.formatDateTimeString(sFormat);}
Olive.Controls.DataType.Month.parseValue=function OwcDataTypeMonth_parseValue(oValue,sFormat)
{if(oValue instanceof Date)
return(oValue.getMonth()+1);return Olive.Controls.DataType.Number.parseValue(oValue,sFormat);}
Olive.Controls.DataType.Month.validateValue=function OwcDataTypeMonth_validateValue(oValue,bDoNotThrowError)
{if(!Olive.Controls.DataType.Number.validateValue(oValue,bDoNotThrowError))
return false;if(oValue>0&&oValue<13)
return true;if(!bDoNotThrowError)
{var sErrorMessage=Olive.Errors.getLocalizedErrorMsg("BAD_MONTH");throw DHTML.newError(0,sErrorMessage);}
return false;}
JScript.Type.RegisterClass("Olive.Controls.DataType.Month",Olive.Controls.DataType.Month,Olive.Controls.DataType.Number);Olive.Controls.DataType.RegisterDataType(Olive.Controls.DataTypeName.Month,Olive.Controls.DataType.Month);}
if(!Olive.Controls.DataType.Day)
{Olive.Controls.DataType.Day=function OwcDataTypeDay()
{}
Olive.Controls.DataType.Day.DeclareType=function OwcDataTypeDay_DeclareType(rObject)
{this.ReplaceMethod("getDefaultFormat",Olive.Controls.DataType.Day.getDefaultFormat);this.ReplaceMethod("formatValue",Olive.Controls.DataType.Day.formatValue);this.ReplaceMethod("parseValue",Olive.Controls.DataType.Day.parseValue);this.ReplaceMethod("validateValue",Olive.Controls.DataType.Day.validateValue);}
Olive.Controls.DataType.Day.getDefaultFormat=function OwcDataType_getDefaultFormat()
{return"%d";}
Olive.Controls.DataType.Day.formatValue=function OwcDataTypeDay_formatValue(oValue,sFormat)
{var oDate;if(oValue instanceof Date)
oDate=oValue;else
{var nDay=this.parseValue(oValue);oDate=new Date(2005,0,nDay);}
if(!sFormat)
sFormat=this.getDefaultFormat();return oDate.formatDateTimeString(sFormat);}
Olive.Controls.DataType.Day.parseValue=function OwcDataTypeDay_parseValue(oValue,sFormat)
{if(oValue instanceof Date)
return oValue.getDate();return Olive.Controls.DataType.Number.parseValue(oValue,sFormat);}
Olive.Controls.DataType.Day.validateValue=function OwcDataTypeDay_validateValue(oValue,bDoNotThrowError)
{if(!Olive.Controls.DataType.Number.validateValue(oValue,bDoNotThrowError))
return false;if(oValue>0&&oValue<32)
return true;if(!bDoNotThrowError)
{var sErrorMessage=Olive.Errors.getLocalizedErrorMsg("BAD_DAY");throw DHTML.newError(0,sErrorMessage);}
return false;}
JScript.Type.RegisterClass("Olive.Controls.DataType.Day",Olive.Controls.DataType.Day,Olive.Controls.DataType.Number);Olive.Controls.DataType.RegisterDataType(Olive.Controls.DataTypeName.Day,Olive.Controls.DataType.Day);}
if(!Olive.Controls.DataType.EMail)
{Olive.Controls.DataType.EMail=function OwcDataTypeEMail()
{}
Olive.Controls.DataType.EMail.DeclareType=function OwcDataTypeEMail_DeclareType(rObject)
{this.ReplaceMethod("validateValue",Olive.Controls.DataType.EMail.validateValue);}
Olive.Controls.DataType.EMail.validateValue=function OwcDataTypeEMail_validateValue(oValue,bDoNotThrowError)
{if(!Olive.Controls.DataType.String.validateValue(oValue,bDoNotThrowError))
return false;if(oValue&&(oValue!="")&&!EMail_validateAddress(oValue))
{if(!bDoNotThrowError)
{var sErrorMessage=Olive.Errors.getLocalizedErrorMsg("EMailBadAddress",oValue);throw DHTML.newError(0,sErrorMessage);}
return false;}
return true;}
JScript.Type.RegisterClass("Olive.Controls.DataType.EMail",Olive.Controls.DataType.EMail,Olive.Controls.DataType.String);Olive.Controls.DataType.RegisterDataType(Olive.Controls.DataTypeName.EMail,Olive.Controls.DataType.EMail);}
if(!Olive.Controls.DataType.EMailList)
{Olive.Controls.DataType.EMailList=function OwcDataTypeEMailList()
{}
Olive.Controls.DataType.EMailList.DeclareType=function OwcDataTypeEMailList_DeclareType(rObject)
{this.ReplaceMethod("validateValue",Olive.Controls.DataType.EMailList.validateValue);}
Olive.Controls.DataType.EMailList.validateValue=function OwcDataTypeEMailList_validateValue(oValue,bDoNotThrowError)
{if(!Olive.Controls.DataType.String.validateValue(oValue,bDoNotThrowError))
return false;if(oValue&&(oValue!="")&&!EMail_validateAddressList(oValue))
{if(!bDoNotThrowError)
{var sErrorMessage=Olive.Errors.getLocalizedErrorMsg("EMailBadAddressList",oValue);throw DHTML.newError(0,sErrorMessage);}
return false;}
return true;}
JScript.Type.RegisterClass("Olive.Controls.DataType.EMailList",Olive.Controls.DataType.EMailList,Olive.Controls.DataType.String);Olive.Controls.DataType.RegisterDataType(Olive.Controls.DataTypeName.EMailList,Olive.Controls.DataType.EMailList);}
if(!Olive.Controls.DataType.SortBy)
{Olive.Controls.DataType.SortBy=function OwcDataTypeSortBy()
{}
Olive.Controls.DataType.SortBy.DeclareType=function OwcDataTypeSortBy_DeclareType(rObject)
{this.ReplaceMethod("createNewValue",OwcDataTypeSortBy_createNewValue);this.ReplaceMethod("formatValue",OwcDataTypeSortBy_formatValue);this.ReplaceMethod("parseValue",OwcDataTypeSortBy_parseValue);this.ReplaceMethod("validateValue",OwcDataTypeSortBy_validateValue);}
function OwcDataTypeSortBy_createNewValue()
{return new Olive.Data.SortOptions();}
function OwcDataTypeSortBy_formatValue(oValue)
{if(!oValue)
return"";return oValue.toString();}
function OwcDataTypeSortBy_parseValue(oValue)
{if(oValue instanceof Olive.Data.SortOptions)
return oValue;var sSortOptions=Olive.Controls.DataType.toString(oValue);if(!sSortOptions||(sSortOptions==""))
return null;var oValue=this.createNewValue();oValue.parse(sSortOptions);return oValue;}
function OwcDataTypeSortBy_validateValue(oValue,bDoNotThrowError)
{return true;}
JScript.Type.RegisterClass("Olive.Controls.DataType.SortBy",Olive.Controls.DataType.SortBy,Olive.Controls.DataType.Object);Olive.Controls.DataType.RegisterDataType(Olive.Controls.DataTypeName.SortBy,Olive.Controls.DataType.SortBy);}
if(!Olive.Controls.IValue)
{Olive.Controls.IValue=new Interface("Olive.Controls.IValue");Olive.Controls.IValue.UiElements={HtmlValue:"value"}
Olive.Controls.IValue.Commands={Lookup:"Lookup"}
Olive.Controls.IValue.Implement=function OwcIValue_Implement(rObject,bDynamic)
{if(!Olive.Controls.IValue.Register(rObject,bDynamic))
return;Olive.IUiElements.ImplementInterface(rObject,bDynamic);JScript.Type.DeclareField(rObject,"m_oValue",null);JScript.Type.DeclareField(rObject,"m_sValueFormat",null);JScript.Type.DeclareField(rObject,"m_sValueInitFormat",null);JScript.Type.DeclareField(rObject,"m_sDataType",null);JScript.Type.DeclareField(rObject,"m_oDataType",null);JScript.Type.DeclareField(rObject,"m_sMultipleValueSeparator",Olive.Controls.SearchOperatorOr);JScript.Type.DeclareField(rObject,"m_sNoValuePlaceholder",Olive.Controls.NoValuePlaceholder);JScript.Type.DeclareField(rObject,"m_bHtmlValue",false);JScript.Type.DeclareField(rObject,"m_bReadOnly",false);JScript.Type.DeclareField(rObject,"m_bUpdatingControls",false);JScript.Type.DeclareField(rObject,"m_bDisableOnChangeBehaviour",false);JScript.Type.DeclareField(rObject,"m_oLookupSupport",null);JScript.Type.OverrideMethod(rObject,"bindHtmlElement",OwcIValue_bindHtmlElement);JScript.Type.OverrideMethod(rObject,"parseControlHtmlAttr",OwcIValue_parseControlHtmlAttr);JScript.Type.DeclareMethod(rObject,"getValue",OwcIValue_getValue);JScript.Type.DeclareMethod(rObject,"setValue",OwcIValue_setValue);JScript.Type.DeclareMethod(rObject,"getFormat",OwcIValue_getFormat);JScript.Type.DeclareMethod(rObject,"setFormat",OwcIValue_setFormat);JScript.Type.DeclareMethod(rObject,"formatValue",OwcIValue_formatValue);JScript.Type.DeclareMethod(rObject,"parseValue",OwcIValue_parseValue);JScript.Type.DeclareMethod(rObject,"validateValue",OwcIValue_validateValue);JScript.Type.DeclareMethod(rObject,"compareValue",OwcIValue_compareValue);JScript.Type.DeclareMethod(rObject,"updateControl",OwcIValue_updateControl);JScript.Type.DeclareMethod(rObject,"updateData",OwcIValue_updateData);JScript.Type.DeclareMethod(rObject,"getHtmlValue",OwcIValue_getHtmlValue);JScript.Type.DeclareMethod(rObject,"setHtmlValue",OwcIValue_setHtmlValue);JScript.Type.DeclareMethod(rObject,"reportValidationError",OwcIValue_reportValidationError);JScript.Type.DeclareMethod(rObject,"isReadOnly",OwcIValue_isReadOnly);JScript.Type.DeclareMethod(rObject,"setReadOnly",OwcIValue_setReadOnly);JScript.Type.DeclareMethod(rObject,"getCheckedValue",OwcIValue_getCheckedValue);JScript.Type.DeclareMethod(rObject,"getUncheckedValue",OwcIValue_getUncheckedValue);JScript.Type.DeclareMethod(rObject,"get_LookupSupport",OwcIValue_get_LookupSupport);JScript.Type.DeclareMethod(rObject,"set_LookupSupport",OwcIValue_set_LookupSupport);JScript.Type.DeclareMethod(rObject,"lookupValue",OwcIValue_lookupValue);JScript.Type.DeclareMethod(rObject,"_updateLookupValue",OwcIValue_updateLookupValue);JScript.Type.DeclareMethod(rObject,"_LookupValue_updateUiState",OwcIValue_LookupValue_updateUiState);JScript.Type.OverrideMethod(rObject,"getHtmlValueElement",OwcIValue_getHtmlValueElement);JScript.Type.DeclareMethod(rObject,"attachBehavior",OwcIValue_attachBehavior);JScript.Type.DeclareMethod(rObject,"isUpdatingControl",OwcIValue_isUpdatingControl);JScript.Type.DeclareMethod(rObject,"startUpdatingControl",OwcIValue_startUpdatingControl);JScript.Type.DeclareMethod(rObject,"stopUpdatingControl",OwcIValue_stopUpdatingControl);rObject.registerOwcEventsClass2("valueChanging","onValueChanging",true);rObject.registerOwcEventsClass2("valueChanged","onValueChanged",true);rObject.registerOwcEventsClass2("validationError","onValidationError",true);Olive.CmdTarget.RegisterCommand(rObject,Olive.Controls.IValue.Commands.Lookup,"lookupValue","_LookupValue_updateUiState");}
function OwcIValue_bindHtmlElement(oHtmlElement)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(DHTML.isSelectElem(oHtmlElement))
OwcIValue_Combo_ApplyPrototype(this);if(!Olive.Controls.IComplexValue.IsImplementedBy(this))
this.attachBehavior(oHtmlElement);}
function OwcIValue_parseControlHtmlAttr()
{var attributes=Olive.Controls.attributes;var sDefaultDataType=this.m_sDataType;if(!sDefaultDataType)
{var oHtmlValueElement=this.getHtmlValueElement();if(DHTML.isCheckboxElem(oHtmlValueElement)&&!oHtmlValueElement.value)
sDefaultDataType=Olive.Controls.DataTypeName.Boolean;else
sDefaultDataType=Olive.Controls.DataTypeName.String;}
this.m_sValueFormat=DHTML.getAttr(this.HtmlElement,attributes.Format);this.m_sValueInitFormat=DHTML.getAttr(this.HtmlElement,attributes.InitFormat);var sDataType=DHTML.getAttr(this.HtmlElement,attributes.DataType);if(sDataType)
this.m_sDataType=sDataType;else
this.m_sDataType=sDefaultDataType;this.m_oDataType=Olive.Controls.DataType.LookupDataType(this.m_sDataType);this.m_bHtmlValue=DHTML.getAttrBoolean(this.HtmlElement,attributes.HtmlValue,false);var oParent=Olive.Object.FindParentImplementing(Olive.Controls.IComplexValue,this);if(oParent)
this.m_bDisableOnChangeBehaviour=DHTML.getAttrBoolean(this.HtmlElement,attributes.DisableOnChangeBehaviour,oParent.m_bDisableOnChangeBehaviour);else
this.m_bDisableOnChangeBehaviour=DHTML.getAttrBoolean(this.HtmlElement,attributes.DisableOnChangeBehaviour,false);this.m_bReadOnly=DHTML.getAttrBoolean(this.HtmlElement,attributes.ReadOnly,this.m_bReadOnly);this.m_sMultipleValueSeparator=DHTML.getAttr(this.HtmlElement,attributes.MultipleValueSeparator,this.m_sMultipleValueSeparator);this.m_sNoValuePlaceholder=DHTML.getAttr(this.HtmlElement,attributes.NoValuePlaceholder,this.m_sNoValuePlaceholder);var sInitValue=DHTML.getAttr(this.HtmlElement,attributes.InitValue);if(sInitValue)
{this.m_oValue=this.parseValue(sInitValue,this.m_sValueInitFormat);this.setHtmlValue(this.getValue());}
if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcIValue_isReadOnly()
{return this.m_bReadOnly;}
function OwcIValue_setReadOnly(bReadOnly)
{if(bReadOnly==undefined)
bReadOnly=true;this.m_bReadOnly=bReadOnly;}
function OwcIValue_getCheckedValue(oHtmlElement,bParse)
{if(!oHtmlElement)
oHtmlElement=this.getHtmlValueElement();var oValue=DHTML.getValue(oHtmlElement);if(bParse)
return this.parseValue(oValue);return oValue;}
function OwcIValue_getUncheckedValue(oHtmlElement,bParse)
{var oValue="";if(bParse)
return this.parseValue(oValue);return oValue;}
function OwcIValue_getValue()
{return this.m_oValue;}
function OwcIValue_setValue(oValue,bDoNotUpdateControl,bDoNotNotify)
{if(this.isReadOnly())
return false;oValue=this.parseValue(oValue);if(!this.validateValue(oValue))
return false;if(bDoNotUpdateControl==undefined)
bDoNotUpdateControl=false;if(typeof(bDoNotNotify)=="undefined"||bDoNotNotify==null)
bDoNotNotify=false;if(DHTML.isRadioButton(this.getHtmlValueElement()))
{var oCheckedValue=this.getCheckedValue(null,true);var oUncheckedValue=this.getUncheckedValue(null,true);if(!this.compareValue(oCheckedValue,oValue)&&!this.compareValue(oUncheckedValue,oValue))
oValue=oUncheckedValue;}
var oEvent=this.createOwcEventObject("valueChanging");oEvent.prevValue=this.m_oValue;oEvent.newValue=oValue;oEvent.DoNotUpdateControl=bDoNotUpdateControl;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);if(this.compareValue&&!this.compareValue(this.m_oValue,oValue))
{var oPrevValue=this.m_oValue;this.m_oValue=oValue;if(!bDoNotNotify)
{var oEvent=this.createOwcEventObject("valueChanged");oEvent.prevValue=oPrevValue;oEvent.newValue=oValue;oEvent.DoNotUpdateControl=bDoNotUpdateControl;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}}
if(!bDoNotUpdateControl&&!this.isUpdatingControl())
this.updateControl();return true;}
function OwcIValue_getFormat()
{if(this.m_sValueFormat)
return this.m_sValueFormat;if(this.m_oDataType)
return this.m_oDataType.getDefaultFormat();return null;}
function OwcIValue_setFormat(sFormat,bUpdateControl)
{if(this.m_sValueFormat==sFormat)
return false;this.m_sValueFormat=sFormat;if(bUpdateControl)
this.updateControl();}
function OwcIValue_formatValue(oValue,sFormat)
{if(!sFormat)
sFormat=this.getFormat();if(this.m_oDataType)
return this.m_oDataType.formatValue(oValue,sFormat);return oValue;}
function OwcIValue_validateValue(oValue,bDoNotReportErrors)
{var bValueIsValid=true;if(this.m_oDataType)
{try
{bValueIsValid=this.m_oDataType.validateValue(oValue,bDoNotReportErrors);}
catch(ex)
{this.reportValidationError(oValue,ex);bValueIsValid=false;}}
return bValueIsValid;}
function OwcIValue_parseValue(oValue,sFormat)
{if(!sFormat)
sFormat=this.getFormat();if(this.m_oDataType)
return this.m_oDataType.parseValue(oValue,sFormat);return oValue;}
function OwcIValue_compareValue(oPrevValue,oNewValue)
{if(this.m_oDataType)
return this.m_oDataType.compareValue(oPrevValue,oNewValue);return Olive.Controls.DataType.compareValue(oPrevValue,oNewValue);}
function OwcIValue_updateControl()
{var bPrevUpdatingControls=this.startUpdatingControl();var oValue=this.getValue();this.setHtmlValue(oValue);this.stopUpdatingControl(bPrevUpdatingControls);}
function OwcIValue_updateData()
{var oValue=this.getHtmlValue();return this.setValue(oValue,true);}
function OwcIValue_getHtmlValue(bParseValue)
{var oHtmlElement=this.getHtmlValueElement();var sControlValue=null;if(this.m_bHtmlValue)
sControlValue=DHTML.getInnerHtml(oHtmlElement);else if(DHTML.isRadioButton(oHtmlElement)||DHTML.isCheckboxElem(oHtmlElement))
{if(oHtmlElement.checked)
sControlValue=this.getCheckedValue(oHtmlElement);else
sControlValue=this.getUncheckedValue();}
else if(DHTML.isSelectElem(oHtmlElement)&&oHtmlElement.multiple)
sControlValue=DHTML.getValue(oHtmlElement,this.m_sMultipleValueSeparator,this.m_sNoValuePlaceholder);else
sControlValue=DHTML.getValue(oHtmlElement);if(bParseValue)
return this.parseValue(sControlValue);return sControlValue;}
function OwcIValue_setHtmlValue(oValue)
{if(this.isReadOnly())
return;var oHtmlElement=this.getHtmlValueElement();if(this.m_bHtmlValue)
DHTML.pasteHtmlContent(oHtmlElement,this.formatValue(oValue));else if(DHTML.isRadioButton(oHtmlElement))
{oHtmlElement.checked=(oValue==DHTML.getValue(oHtmlElement));}
else if(DHTML.isSelectElem(oHtmlElement)&&oHtmlElement.multiple)
DHTML.setValue(oHtmlElement,oValue,this.formatValue(oValue),this.m_sMultipleValueSeparator,this.m_sNoValuePlaceholder);else
DHTML.setValue(oHtmlElement,oValue,this.formatValue(oValue));}
function OwcIValue_reportValidationError(oValue,oError)
{var oEvent=this.createOwcEventObject("validationError");oEvent.value=oValue;oEvent.error=oError;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcIValue_get_LookupSupport()
{if(this.m_oLookupSupport)
return this.m_oLookupSupport;if(this.m_oDataType)
return this.m_oDataType.get_LookupSupport();return null;}
function OwcIValue_set_LookupSupport(oLookupSupport)
{this.m_oLookupSupport=oLookupSupport;}
function OwcIValue_lookupValue()
{var oLookupSupport=this.get_LookupSupport();if(oLookupSupport==null)
{this.reportKnownError(Olive.Errors.Code.NotSupported,"Lookup values");return;}
oLookupSupport.lookupValue(this);}
function OwcIValue_LookupValue_updateUiState(oCmdState)
{var oLookupSupport=this.get_LookupSupport();oCmdState.enableCommand(oLookupSupport!=null);return true;}
function OwcIValue_updateLookupValue(dialogResult,lookupValue,popupInfo)
{if(dialogResult!=Olive.PopupInfo.DialogResult.Cancel)
this.setValue(lookupValue);}
function OwcIValue_getHtmlValueElement()
{var oValueElement=null;if(this.BaseClassMethod)
oValueElement=this.BaseClassMethod.apply(this,arguments);if(!oValueElement)
oValueElement=this.getUiElement(Olive.Controls.IValue.UiElements.HtmlValue);if(!oValueElement)
oValueElement=this.get_HtmlElement();return oValueElement;}
function OwcIValue_attachBehavior(oHtmlElement)
{if(!this.m_bDisableOnChangeBehaviour)
{DHTML.attachEvent(oHtmlElement,"change",OwcIValue_DHTML_onChanged);DHTML.attachEvent(oHtmlElement,"keypress",OwcIValue_DHTML_onKeyPress);}}
function OwcIValue_DHTML_onChanged(oEvent)
{var oHtmlElement=getEventTarget(oEvent);if(!oHtmlElement)
return false;var oControl=OwcGetControlFromHtmlElem(oHtmlElement,true);if(!oControl||oControl.isUpdatingControl())
return false;oControl.updateData();return true;}
function OwcIValue_DHTML_onKeyPress(oEvent)
{if(oEvent.keyCode==13)
OwcIValue_DHTML_onChanged(oEvent);}
function OwcIValue_startUpdatingControl()
{var bPrevState=this.m_bUpdatingControls;this.m_bUpdatingControls=true;return bPrevState;}
function OwcIValue_stopUpdatingControl(bPrevState)
{this.m_bUpdatingControls=((bPrevState!=undefined)?bPrevState:false);}
function OwcIValue_isUpdatingControl()
{return this.m_bUpdatingControls;}
function OwcIValue_Combo_ApplyPrototype(rObject)
{if(!("ValueMaskType"in rObject))
rObject.ValueMaskType=null;rObject.setActiveMask=OwcIValue_Combo_setActiveMask;return rObject;}
function OwcIValue_Combo_setActiveMask(sMaskType,dwBitmask,nItemCount)
{if(!this.HtmlElement)
return;if(sMaskType!=this.ValueMaskType)
return;if(this.ActiveValueMask==dwBitmask&&this.ValueMaskLength==nItemCount)
return;this.ActiveValueMask=dwBitmask;this.ValueMaskLength=nItemCount;this.HtmlElement.options.length=0;var dwMask=1;var bMatched=false;for(var iItem=1;iItem<=nItemCount;++iItem)
{if((dwBitmask&dwMask)==dwMask)
{var sValue=this.formatValue(iItem);this.HtmlElement.options[this.HtmlElement.options.length]=new Option(sValue,iItem);if(sValue==this.m_oValue)
{bMatched=true;this.HtmlElement.selectedIndex=this.HtmlElement.options.length-1;}}
dwMask=(dwMask<<1);}
if(!bMatched)
this.m_oValue=null;}}
if(!Olive.Controls.IComplexValue)
{Olive.Controls.IComplexValue=new Interface("Olive.Controls.IComplexValue");Olive.Controls.IComplexValue.Implement=function OwcIComplexValue_Implement(rObject,bDynamic)
{Olive.Controls.IValue.ImplementInterface(rObject,bDynamic);if(!Olive.Controls.IComplexValue.Register(rObject,bDynamic))
return;if(!rObject.m_sDataType)
rObject.m_sDataType=Olive.Controls.DataTypeName.Object;JScript.Type.DeclareMethod(rObject,"createNewValue",OwcIComplexValue_createNewValue);JScript.Type.ReplaceMethod(rObject,"updateControl",OwcIComplexValue_updateControl);JScript.Type.ReplaceMethod(rObject,"updateData",OwcIComplexValue_updateData);JScript.Type.DeclareMethod(rObject,"_validateData",null);JScript.Type.DeclareMethod(rObject,"filterControlRead",OwcIComplexValue_filterControlRead);JScript.Type.DeclareMethod(rObject,"filterControlWrite",OwcIComplexValue_filterControlWrite);JScript.Type.DeclareMethod(rObject,"filterControl",OwcIComplexValue_filterControl);JScript.Type.DeclareMethod(rObject,"updateControlFromData",OwcIComplexValue_updateControlFromData);JScript.Type.DeclareMethod(rObject,"updateDataFromControl",OwcIComplexValue_updateDataFromControl);JScript.Type.DeclareMethod(rObject,"updateControlFromDataField",OwcIComplexValue_updateControlFromDataField);JScript.Type.DeclareMethod(rObject,"updateDataFieldFromControl",OwcIComplexValue_updateDataFieldFromControl);JScript.Type.DeclareMethod(rObject,"createScanner",OwcIComplexValue_createScanner);}
function OwcIComplexValue_createNewValue()
{if(this.m_oDataType)
return this.m_oDataType.createNewValue();return new Object();}
function OwcIComplexValue_updateControl(oDataObject)
{var bPrevUpdatingControls=this.startUpdatingControl();if(oDataObject===undefined)
oDataObject=this.getValue();var oScanner=this.createScanner(this.updateControlFromData,false);oScanner.scan(this,oDataObject);this.stopUpdatingControl(bPrevUpdatingControls);return oScanner.isScanningCancelled();}
function OwcIComplexValue_updateData(oDataObject)
{if(!oDataObject)
oDataObject=this.createNewValue();var oScanner=this.createScanner(this.updateDataFromControl,true);oScanner.scan(this,oDataObject);if(oScanner.isScanningCancelled())
return false;if(this._validateData)
{if(!this._validateData())
{this.reportKnownError(Olive.Errors.Code.InvalidData);return false;}}
return this.setValue(oDataObject,true);}
function OwcIComplexValue_filterControlRead(ctxScanner,oControl)
{if(DHTML.isDisabledElem(oControl.HtmlElement))
return Olive.Controls.Scanner.FilterMode.Skip;return Olive.Controls.Scanner.FilterMode.Accept;}
function OwcIComplexValue_filterControlWrite(ctxScanner,oControl)
{return Olive.Controls.Scanner.FilterMode.Accept;}
function OwcIComplexValue_filterControl(ctxScanner,oControl)
{if(Olive.Controls.IValue.IsImplementedBy(oControl))
return Olive.Controls.Scanner.FilterMode.Process;return(Olive.Controls.Scanner.FilterMode.Reject+Olive.Controls.Scanner.FilterMode.StopFilter);}
function OwcIComplexValue_updateControlFromData(ctxScanner,oControl,oDataObject)
{var sFieldName=null;if(Olive.Controls.IFormField.IsImplementedBy(oControl))
sFieldName=oControl.getFieldName();if(!this.updateControlFromDataField(oControl,oDataObject,sFieldName))
ctxScanner.cancelScanning();}
function OwcIComplexValue_updateDataFromControl(ctxScanner,oControl,oDataObject)
{if(!oControl.updateData())
{ctxScanner.cancelScanning();return false;}
var sFieldName=null;if(Olive.Controls.IFormField.IsImplementedBy(oControl))
{sFieldName=oControl.getFieldName();var oValue=oControl.getValue();if((!oValue||(oValue==""))&&oControl.isFieldRequired())
{var sLocalizedFieldName=oControl.getLocalizedFieldName();this.reportKnownError(Olive.Errors.Code.MandatoryField,sLocalizedFieldName);ctxScanner.cancelScanning();return false;}}
if(DHTML.isRadioButton(oControl.HtmlElement)&&!oControl.HtmlElement.checked)
return true;if(!this.updateDataFieldFromControl(oControl,oDataObject,sFieldName))
{ctxScanner.cancelScanning();return false;}
return true;}
function OwcIComplexValue_updateControlFromDataField(oControl,oDataObject,sFieldName)
{var oValue=((sFieldName&&oDataObject)?oDataObject[sFieldName]:oDataObject);return oControl.setValue(oValue);}
function OwcIComplexValue_updateDataFieldFromControl(oControl,oDataObject,sFieldName)
{if(sFieldName)
oDataObject[sFieldName]=oControl.getValue();return true;}
function OwcIComplexValue_createScanner(oProcessCallback,bForRead)
{var oScanner=new Olive.Controls.Scanner();if(oProcessCallback)
oScanner.setProcessControlCallback(oProcessCallback);if(bForRead!=undefined)
{if(bForRead)
oScanner.addFilter(this.filterControlRead);else
oScanner.addFilter(this.filterControlWrite);}
oScanner.addFilter(this.filterControl);return oScanner;}}
if(!Olive.Controls.ILookupSupport)
{Olive.Controls.ILookupSupport=new Interface("Olive.Controls.ILookupSupport");Olive.Controls.ILookupSupport.Implement=function OwcILookupSupport_Implement(rObject,bDynamic)
{if(!Olive.Controls.ILookupSupport.Register(rObject,bDynamic))
return;JScript.Type.DeclareMethod(rObject,"lookupValue",OwcILookupSupport_lookupValue);}
Olive.Controls.ILookupSupport.lookupWithPopup=function OwcILookupSupport_lookupWithPopup(oValueControl,sUrl,oWindowOptionsNameOrRef,bOwcPopup)
{if(!oValueControl)
return;var oPage=oValueControl.get_WebPage();var lookupArguments={};lookupArguments.srcControl=oValueControl;lookupArguments.initValue=oValueControl.getHtmlValue(true);var callbackOnClose=Delegate.CreateDelegate("_updateLookupValue",oValueControl,Delegate.Type.Method);oPage.openPopup(sUrl,oWindowOptionsNameOrRef,lookupArguments,callbackOnClose,bOwcPopup);}
function OwcILookupSupport_lookupValue(oValueControl)
{}}
if(!Olive.Controls.LookupWindowSupport)
{Olive.Controls.LookupWindowSupport=function OwcLookupWindowSupport(sUrl,windowOptionsRef,bEmulatedPopup)
{if(sUrl)
this.m_sUrl=sUrl;if(windowOptionsRef)
this.m_windowOptionsRef=windowOptionsRef;if(bEmulatedPopup!=undefined)
this.m_bEmulatedPopup=bEmulatedPopup;}
Olive.Controls.LookupWindowSupport.DeclareType=function OwcLookupWindowSupport_DeclareType()
{this.DeclareField("m_sUrl",null);this.DeclareField("m_windowOptionsRef",null);this.DeclareField("m_bEmulatedPopup",false);this.ReplaceMethod("lookupValue",OwcLookupWindowSupport_lookupValue);}
function OwcLookupWindowSupport_lookupValue(oValueControl)
{Olive.Controls.ILookupSupport.lookupWithPopup(oValueControl,this.m_sUrl,this.m_windowOptionsRef,this.m_bEmulatedPopup);}
JScript.Type.RegisterClass("Olive.Controls.LookupWindowSupport",Olive.Controls.LookupWindowSupport,Olive.Object,[Olive.Controls.ILookupSupport]);}
if(!Olive.Controls.IForm)
{Olive.Controls.IForm=new Interface("Olive.Controls.IForm");Olive.Controls.IForm.Implement=function OwcIForm_Implement(rObject,bDynamic)
{Olive.Controls.IComplexValue.ImplementInterface(rObject,bDynamic);if(!Olive.Controls.IForm.Register(rObject,bDynamic))
return;JScript.Type.DeclareMethod(rObject,"findFieldControls",OwcIForm_findFieldControls);JScript.Type.DeclareMethod(rObject,"getFieldValue",OwcIForm_getFieldValue);JScript.Type.DeclareMethod(rObject,"setFieldValue",OwcIForm_setFieldValue);JScript.Type.OverrideMethod(rObject,"filterControl",OwcIForm_filterControl);JScript.Type.DeclareMethod(rObject,"createFieldScanner",OwcIForm_createFieldScanner);JScript.Type.DeclareMethod(rObject,"filterControlByFieldName",OwcIForm_filterControlByFieldName);JScript.Type.DeclareMethod(rObject,"saveControlRef",OwcIForm_saveControlRef);JScript.Type.DeclareMethod(rObject,"setFieldControlValue",OwcIForm_setFieldControlValue);JScript.Type.DeclareMethod(rObject,"autoApplyFieldInterface",OwcIForm_autoApplyFieldInterface);Olive.EventSource.hookEvent(rObject,"validationError",OwcIForm_hookOnValidationError);}
function OwcIForm_findFieldControls(sFieldName,bFindFirstControl,bForRead)
{var oScanner=this.createFieldScanner(sFieldName,bFindFirstControl,this.saveControlRef,bForRead);oScanner.scan(this,(sFieldName?sFieldName.toLowerCase():null));return oScanner.retVal;}
function OwcIForm_getFieldValue(sFieldName,oDefaultValue)
{if(!sFieldName)
return oDefaultValue;var oValue=oDefaultValue;var oControl=this.findFieldControls(sFieldName,true,true);if(oControl)
{oValue=oControl.getHtmlValue(true);if(oValue===null||oValue===undefined)
oValue=oDefaultValue;}
return oValue;}
function OwcIForm_setFieldValue(sFieldName,oValue)
{var oScanner=this.createFieldScanner(sFieldName,false,this.setFieldControlValue,false);oScanner.retVal=0;oScanner.scan(this,sFieldName.toLowerCase(),oValue);if(oScanner.isScanningCancelled())
return-1;return oScanner.retVal;}
function OwcIForm_filterControl(ctxScanner,oControl)
{if(!Olive.Controls.IFormField.IsImplementedBy(oControl))
return(Olive.Controls.Scanner.FilterMode.Reject+Olive.Controls.Scanner.FilterMode.StopFilter);if(this.BaseClassMethod)
return this.BaseClassMethod.apply(this,arguments);return Olive.Controls.Scanner.FilterMode.Process;}
function OwcIForm_filterControlByFieldName(ctxScanner,oControl,sFieldName)
{if(sFieldName)
{var sControlFieldName=oControl.getFieldName();if(sControlFieldName.toLowerCase()!=sFieldName)
return Olive.Controls.Scanner.FilterMode.Skip;}
return ctxScanner.m_nProcessFilterFlags;}
function OwcIForm_createFieldScanner(sFieldName,bFindFirstControl,oProcessCallback,bForRead)
{var oScanner=this.createScanner(oProcessCallback,bForRead);oScanner.addFilter(this.filterControlByFieldName);if(bFindFirstControl==undefined)
bFindFirstControl=false;if(bFindFirstControl)
oScanner.m_nProcessFilterFlags=Olive.Controls.Scanner.FilterMode.ProcessAndStop;else
oScanner.m_nProcessFilterFlags=Olive.Controls.Scanner.FilterMode.Process;oScanner.m_bReturnFirstControl=bFindFirstControl;oScanner.retVal=null;return oScanner;}
function OwcIForm_saveControlRef(ctxScanner,oControl)
{if(ctxScanner.m_bReturnFirstControl)
ctxScanner.retVal=oControl;else
ctxScanner.retVal=Array_appendItem(ctxScanner.retVal,oControl);}
function OwcIForm_setFieldControlValue(ctxScanner,oControl,sFieldName,oValue)
{if(!oControl.setValue(oValue))
ctxScanner.cancelScanning();++ctxScanner.retVal;}
function OwcIForm_autoApplyFieldInterface(oControl,oHtmlElement,sFieldName)
{Olive.Controls.IFormField.Implement(oControl,true);}
function OwcIForm_hookOnValidationError(oEvent)
{oEvent.cancelBubble=true;this.displayMessage(oEvent.error.message);DHTML.focus(oEvent.srcObject.HtmlElement);if(oEvent.srcObject.HtmlElement.select)
oEvent.srcObject.HtmlElement.select();}}
if(!Olive.Controls.IFormField)
{Olive.Controls.IFormField=new Interface("Olive.Controls.IFormField");Olive.Controls.IFormField.Implement=function OwcIFormField_Implement(rObject,bDynamic)
{if(!Olive.Controls.IFormField.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"m_sFieldName","");JScript.Type.DeclareField(rObject,"m_bFieldRequired",false);JScript.Type.DeclareMethod(rObject,"getFieldName",OwcIFormField_getFieldName);JScript.Type.DeclareMethod(rObject,"getLocalizedFieldName",OwcIFormField_getLocalizedFieldName);JScript.Type.DeclareMethod(rObject,"isFieldRequired",OwcIFormField_isFieldRequired);JScript.Type.DeclareMethod(rObject,"parseFieldName",OwcIFormField_parseFieldName);JScript.Type.OverrideMethod(rObject,"parseControlHtmlAttr",OwcIFormField_parseControlHtmlAttr);}
function OwcIFormField_parseFieldName()
{if(this.m_sFieldName&&(this.m_sFieldName!=""))
return;var sFieldName=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.FieldName);if(sFieldName&&(sFieldName!=""))
this.m_sFieldName=sFieldName;else
this.reportKnownError(Olive.Errors.Code.HtmlAttrMissing,Olive.Controls.attributes.FieldName);}
function OwcIFormField_parseControlHtmlAttr()
{this.parseFieldName();this.m_bFieldRequired=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.FieldRequired,false);if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcIFormField_getFieldName()
{return this.m_sFieldName;}
function OwcIFormField_getLocalizedFieldName()
{var sRet=this.m_sFieldName;var oParent=Olive.Object.FindParentImplementing(Olive.Controls.IForm,this);if(oParent)
{var sFormType=oParent.controlType;var sLocaleKey=Olive.Controls.FieldNameLocalePrefix+"_"+sFormType+"_"+this.m_sFieldName;var sLocalizedName=this.getResString(sLocaleKey);if(sLocalizedName)
sRet=sLocalizedName;}
return sRet;}
function OwcIFormField_isFieldRequired()
{return this.m_bFieldRequired;}}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web Controls classes are not included.  Add OwcControl.js to your file");if(!Olive.IUiElemTypes)
{Olive.IUiElemTypes=new Interface("Olive.IUiElemTypes");Olive.IUiElemTypes.Implement=function OwcIUiElemTypes_Implement(rObject,bDynamic)
{if(!Olive.IUiElemTypes.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"m_arrUiElemTypes",null);JScript.Type.DeclareMethod(rObject,"registerUiElemType",OwcIUiElemTypes_registerUiElemType);JScript.Type.DeclareMethod(rObject,"getUiElemType",OwcIUiElemTypes_getUiElemType);}
function OwcIUiElemTypes_registerUiElemType(sUiElemType,oUiElemType)
{if(!this.m_arrUiElemTypes)
this.m_arrUiElemTypes=new Array();sUiElemType=sUiElemType.toLowerCase();this.m_arrUiElemTypes[sUiElemType]=oUiElemType;return oUiElemType;}
function OwcIUiElemTypes_getUiElemType(sUiElemType)
{if(!this.m_arrUiElemTypes)
return null;return this.m_arrUiElemTypes[sUiElemType.toLowerCase()];}}
if(!Olive.IUiElements)
{Olive.IUiElements=new Interface("Olive.IUiElements");Olive.IUiElements.Implement=function OwcUiElements_Implement(rObject,bDynamic)
{if(!Olive.IUiElements.Register(rObject,bDynamic))
return;Olive.IState.ImplementInterface(rObject,bDynamic);Olive.IUiElemTypes.ImplementInterface(rObject,bDynamic);JScript.Type.DeclareField(rObject,"m_arrUiElements",null);JScript.Type.OverrideMethod(rObject,"termControl",OwcIUiElements_termControl);JScript.Type.OverrideMethod(rObject,"_onHtmlContentParsed",OwcIUiElements_onHtmlContentParsed);JScript.Type.DeclareMethod(rObject,"bindUiElement",OwcIUiElements_bindUiElement);JScript.Type.DeclareMethod(rObject,"getUiElement",OwcIUiElements_getUiElement);JScript.Type.DeclareMethod(rObject,"initUiState",OwcIUiElements_initUiState);JScript.Type.DeclareMethod(rObject,"updateUiState",OwcIUiElements_updateUiState);JScript.Type.DeclareMethod(rObject,"updateUiStateHtml",OwcIUiElements_updateUiStateHtml);}
function OwcIUiElements_bindUiElement(oUiHtmlElem,sUiElemType)
{var oUiElemType=this.getUiElemType(sUiElemType);if(oUiElemType)
oUiElemType.bindUiElement(oUiHtmlElem,this);else
oUiHtmlElem.owcUiParent=this;if(!this.m_arrUiElements)
this.m_arrUiElements=new Array();this.m_arrUiElements[sUiElemType]=oUiHtmlElem;}
function OwcIUiElements_initUiState()
{var dwState=this.getState();this.updateUiState(dwState,~dwState);}
function OwcIUiElements_updateUiState(dwNewState,dwPrevState)
{if(this.updateUiStateHtml)
this.updateUiStateHtml(dwNewState,dwPrevState);if(!this.m_arrUiElements)
return;var dwChangedState=(dwNewState^dwPrevState);for(var sUiElemType in this.m_arrUiElements)
{var oUiElemType=this.getUiElemType(sUiElemType);if(!oUiElemType||typeof(oUiElemType)!="object")
continue;var oUiElem=this.m_arrUiElements[sUiElemType];oUiElemType.updateUiElemState(this,oUiElem,dwNewState,dwPrevState,dwChangedState);}}
function OwcIUiElements_updateUiStateHtml(dwNewState,dwPrevState)
{var dwChangedState=(dwNewState^dwPrevState);if(dwChangedState&Olive.IState.State.EnabledMask)
{var bEnabled=((dwNewState&Olive.IState.State.EnabledMask)==Olive.IState.State.Enabled);this.HtmlElement.disabled=!bEnabled;if(bEnabled)
DHTML.removeCssClassFromElem(this.HtmlElement,"Disabled");else
DHTML.addCssClassToElem(this.HtmlElement,"Disabled");}
if(dwChangedState&Olive.IState.State.VisibleMask)
{var bVisible=((dwNewState&Olive.IState.State.VisibleMask)==Olive.IState.State.Visible);if(bVisible)
DHTML.removeCssClassFromElem(this.HtmlElement,"Hidden");else
DHTML.addCssClassToElem(this.HtmlElement,"Hidden");}
if(dwChangedState&Olive.IState.State.HotMask)
{var bHot=((dwNewState&Olive.IState.State.HotMask)==Olive.IState.State.Hot);if(bHot)
DHTML.addCssClassToElem(this.HtmlElement,"Highlighted");else
DHTML.removeCssClassFromElem(this.HtmlElement,"Highlighted");}
if(dwChangedState&Olive.IState.State.PressedMask)
{var bPressed=((dwNewState&Olive.IState.State.PressedMask)==Olive.IState.State.Pressed);if(bPressed)
DHTML.addCssClassToElem(this.HtmlElement,"Pressed");else
DHTML.removeCssClassFromElem(this.HtmlElement,"Pressed");}}
function OwcIUiElements_onHtmlContentParsed()
{if(this.BaseClassMethod&&(this.BaseClassMethod!=arguments.callee))
this.BaseClassMethod.call(this);this.initStateFromHtml();this.initUiState();}
function OwcIUiElements_getUiElement(sUiElemType)
{if(!this.m_arrUiElements||!sUiElemType)
return null;return this.m_arrUiElements[sUiElemType.toLowerCase()];}
function OwcIUiElements_termControl()
{if(this.m_arrUiElements)
{for(var sUiElemType in this.m_arrUiElements)
{var oUiHtmlElement=this.m_arrUiElements[sUiElemType];if(oUiHtmlElement)
oUiHtmlElement.owcUiParent=null;}
this.m_arrUiElements=null;}
if(this.BaseClassMethod&&(this.BaseClassMethod!=arguments.callee))
this.BaseClassMethod.call(this);}}
if(!Olive.UiElemType)
{Olive.UiElemType=function OwcUiElemType()
{}
Olive.UiElemType.DeclareType=function OwcUiElemType_DeclareType(rObject)
{this.DeclareField("className",null);this.DeclareMethod("bindUiElement",OwcUiElemType_bindUiElement);this.DeclareMethod("bindUiElementCommon",OwcUiElemType_bindUiElementCommon);this.DeclareMethod("bindUiElementCustom",null);this.DeclareMethod("updateUiElemState",OwcUiElemType_updateUiElemState);}
function OwcUiElemType_bindUiElement(oUiElement,oControl)
{this.bindUiElementCommon(oControl,oUiElement);if(this.bindUiElementCustom)
this.bindUiElementCustom(oControl,oUiElement);}
function OwcUiElemType_bindUiElementCommon(oControl,oUiElement)
{if(this.className)
DHTML.addCssClassToElem(oUiElement,this.className);oUiElement.owcUiParent=oControl;}
function OwcUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{}
JScript.Type.RegisterClass("Olive.UiElemType",Olive.UiElemType);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined")
throw DHTML.newError(0,"Olive Web Controls classes are not included.  Add OwcControl.js to your file");JScript.Type.RegisterNamespace("Olive.Data");Olive.Controls.attributes.AutoLoad=Olive.Controls.xmlns+"AutoLoad";Olive.Controls.attributes.ClearHtmlOnRequestSent=Olive.Controls.xmlns+"clear-html-on-request-sent";Olive.Controls.attributes.TemplateId=Olive.Controls.xmlns+"TemplateId";Olive.Controls.attributes.ContentCmd=Olive.Controls.xmlns+"ContentCmd";Olive.Controls.attributes.SearchCollection="collection";Olive.Controls.attributes.SearchScore="score";Olive.Controls.attributes.TocSearchHits="hits";Olive.Controls.attributes.MostPopularRank="Score";var OwcContentSrc_Document="document";var OwcContentSrc_Entity="entity";var OwcContentSrc_Primitive="primitive";var OwcContentSrc_Page="page";var OwcContentSrc_Tree="tree";var OwcContentSrc_Folder="folder";var OwcContentSrc_SearchResult="searchres";var OwcContentSrc_Mail="mail";var OwcContentSrc_Print="printlist";var OwcContentSrc_Link="link";var OwcContentSrc_SearchQuery="searchquery";var OwcContentSrc_DocumentThumbList="document-thumb-list";var OwcContentSrc_PublicationThumbList="publication-thumb-list";var OwcContentSrc_YearRange="year-range";var OwcContentSrc_MonthRange="month-range";var OwcContentSrc_PDFDownload="pdf-download";var OwcContentSrc_PerformanceReport="performance-report";var OwcContentSrc_MostPopular="mostpopular";var OwcContentItem_Document="document";var OwcContentItem_Entity="entity";var OwcContentItem_Primitive="primitive";var OwcContentItem_TocEntry="tocentry";var OwcContentItem_Page="page";var OwcContentItem_Tree="foldertree";var OwcContentItem_Folder="folder";var OwcContentItem_SearchQuery="searchquery";var OwcContentItem_SearchResult="searchresult";var OwcContentItem_Mail="mail";var OwcContentItem_Print="printlist";var OwcContentItem_Link="link";var OwcContentItem_DocumentThumbList="document-thumb-list";var OwcContentItem_PublicationThumbList="publication-thumb-list";var OwcContentItem_YearRange="year-range";var OwcContentItem_MonthRange="month-range";var OwcContentItem_PDFDownload="pdf-download";var OwcContentItem_PerformanceReport="performance-report";var OwcContentItem_MostPopular="mostpopular";var OwcUrlParam_ContentSrc="ContentSrc";var OwcUrlParam_TemplateId="TemplateId";var OwcUrlParam_DocHRef="DocHRef";var OwcUrlParam_RepFormat="RepFormat";var OwcUrlParam_PreviewImgExt="PreviewImgExt";var OwcUrlParam_EntityId="EntityId";var OwcUrlParam_ChunkId="ChunkId";var OwcUrlParam_ChunkNo="ChunkNo";var OwcUrlParam_TocEntry="TocEntry";var OwcUrlParam_PrimId="PrimId";var OwcUrlParam_ImgExt="ImgExt";var OwcUrlParam_PageId="PageId";var OwcUrlParam_PageNo="PageNo";var OwcUrlParam_PageLabel="PageLabel";var OwcUrlParam_Tree="Tree";var OwcUrlParam_Folder="Folder";var OwcUrlParam_QueryFlags="QueryFlags";var OwcUrlParam_QueryStr="QueryStr";var OwcUrlParam_SearchSubfolders="recursive";var OwcUrlParam_MailFormat="Format";var OwcUrlParam_MailFrom="From";var OwcUrlParam_MailTo="To";var OwcUrlParam_MailCc="Cc";var OwcUrlParam_MailSubject="Subject";var OwcUrlParam_MailBody="Body";var OwcUrlParam_MailBodyAppended="BodyAppended";var OwcUrlParam_Field="Field";var OwcUrlParam_Progressive="Progressive";var OwcUrlParam_ContentSort="SortBy";var OwcUrlParam_PageSize="PageSize";var OwcUrlParam_SearchOptions="SearchOptions";var OwcUrlParam_FirstHitX="FirstHitX";var OwcUrlParam_FirstHitY="FirstHitY";var OwcUrlParam_LastHitX="LastHitX";var OwcUrlParam_LastHitY="LastHitY";var OwcUrlParam_FirstHitPage="FirstHitPage";var OwcUrlParam_LastHitPage="LastHitPage";var OwcUrlParam_MaxImageWidth="MaxImageWidth";var OwcUrlParam_MaxImageHeight="MaxImageHeight";var OwcUrlParam_UserParam="UserParam";var OwcUrlParam_PagesToPrint="PagesToPrint";var OwcUrlParam_PageFormat="PageFormat";var OwcUrlParam_PrintScale="PrintScale";var OwcUrlParam_UseFullPrintSize="UseFullPrintSize";var OwcUrlParam_ItemType="ItemType";var OwcUrlParam_IsMozilla="IsMozilla";var OwcUrlParam_PageNumbers="page-numbers";var OwcUrlParam_PageLabels="page-labels";var OwcUrlParam_PageTitles="page-titles";var OwcUrlParam_Publication="publication";var OwcUrlParam_FromDate="from-date";var OwcUrlParam_ToDate="to-date";var OwcUrlParam_DayOfWeek="day-of-week";var OwcUrlParam_Section="section";var OwcUrlParam_PageCriterion="page-criterion";var OwcUrlParam_NextAnchorPage="next-anchor-page";var OwcUrlParam_PagesCount="pages-count";var OwcUrlParam_Year="year";var OwcUrlParam_FieldFilteringSet="FieldFilteringSet";var OwcUrlParam_PDFDownloadItem="pdf-download-item";var OwcUrlParam_PhysicalPath="physical-path";var OwcQSParam_DocUid="DocUid";var OwcQSParam_DocHRef="DocHRef";var OwcQSParam_PageNo="PageNo";var OwcPDFDownloadItem_Doc="document";var OwcPDFDownloadItem_Page="page";var OwcPerformanceReportItem_AppLoadingTime="App-Loading-Time";if(!Olive.ContentItem)
{Olive.ContentItem=function OwcContentItem()
{};Olive.ContentItem.ApplyPrototype=function OwcContentItem_ApplyPrototype(rObject){JScript.Type.DeclareField(rObject,"DataObjectType",null);JScript.Type.DeclareField(rObject,"m_sContentSrc",null);JScript.Type.DeclareField(rObject,"m_custom",null);JScript.Type.DeclareMethod(rObject,"getParentItem",OwcContentItem_getParentItem);JScript.Type.DeclareMethod(rObject,"setParentItem",OwcContentItem_setParentItem);JScript.Type.DeclareMethod(rObject,"getParentItemByType",OwcContentItem_getParentItemByType);JScript.Type.DeclareMethod(rObject,"contentCanLoad",OwcContentItem_contentCanLoad);JScript.Type.DeclareMethod(rObject,"contentBuildParams",OwcContentItem_contentBuildParams);JScript.Type.DeclareMethod(rObject,"buildRefParams",OwcContentItem_buildRefParams);JScript.Type.DeclareMethod(rObject,"parseRefParams",OwcContentItem_parseRefParams);JScript.Type.DeclareMethod(rObject,"buildQueryString",OwcContentItem_buildQueryString);JScript.Type.DeclareMethod(rObject,"getDataType",OwcContentItem_getDataType);JScript.Type.DeclareMethod(rObject,"copyFrom",OwcContentItem_copyFrom);JScript.Type.DeclareMethod(rObject,"addCustomParameter",OwcContentItem_addCustomParameter);JScript.Type.DeclareMethod(rObject,"removeCustomParameter",OwcContentItem_removeCustomParameter);JScript.Type.DeclareMethod(rObject,"parseData",null);JScript.Type.DeclareMethod(rObject,"getDocHRef",null);JScript.Type.DeclareMethod(rObject,"isSameDocHRef",null);JScript.Type.DeclareMethod(rObject,"getPublicationDescription",null);JScript.Type.DeclareMethod(rObject,"copyDocRefFrom",OwcContentItem_copyDocRefFrom);};Olive.ContentItem.CreateByType=function OwcContentItem_Clone(sType)
{var oContentItem=null;switch(sType.toLowerCase())
{case OwcContentItem_Document:oContentItem=new Olive.ContentItem.Document();break;case OwcContentItem_Entity:oContentItem=new Olive.ContentItem.Entity();break;case OwcContentItem_Primitive:oContentItem=new Olive.ContentItem.Primitive();break;case OwcContentItem_SearchResult:oContentItem=new Olive.ContentItem.SearchResult();break;case OwcContentItem_SearchQuery:oContentItem=new Olive.ContentItem.SearchQuery();break;case OwcContentItem_Page:oContentItem=new Olive.ContentItem.Page();break;case OwcContentItem_Tree:oContentItem=new Olive.ContentItem.FolderTree();break;case OwcContentItem_Folder:oContentItem=new Olive.ContentItem.Folder();break;case OwcContentItem_TocEntry:oContentItem=new Olive.ContentItem.TocEntry();break;case OwcContentItem_Mail:oContentItem=new Olive.ContentItem.Mail();break;case OwcContentItem_Print:oContentItem=new Olive.ContentItem.Print();break;case OwcContentItem_Link:oContentItem=new Olive.ContentItem.Link();break;case OwcContentItem_DocumentThumbList:oContentItem=new Olive.ContentItem.DocumentThumbList();break;case OwcContentItem_PublicationThumbList:oContentItem=new Olive.ContentItem.PublicationThumbList();break;case OwcContentItem_YearRange:oContentItem=new Olive.ContentItem.YearRange();break;case OwcContentItem_MonthRange:oContentItem=new Olive.ContentItem.MonthRange();break;case OwcContentItem_PDFDownload:oContentItem=new Olive.ContentItem.PDFDownload();break;case OwcContentItem_MostPopular:oContentItem=new Olive.ContentItem.MostPopular();break;}
return oContentItem;};Olive.ContentItem.Clone=function OwcContentItem_Clone(oSrcItem)
{var oTrgItem=null;if(oSrcItem)
oTrgItem=Olive.ContentItem.CreateByType(oSrcItem.getDataType());if(!oTrgItem)
return null;oTrgItem.copyFrom(oSrcItem);return oTrgItem;};function OwcContentItem_addCustomParameter(name,value){if(!this.m_custom)
this.m_custom={};this.m_custom[name]=value;}
function OwcContentItem_removeCustomParameter(name){if(this.m_custom)
delete this.custom[name];}
function OwcContentItem_copyFrom(oSrcItem)
{if(!oSrcItem)
return;for(var sPropName in oSrcItem)
{var oSrcProp=oSrcItem[sPropName];if(typeof(oSrcProp)=="object")
{if(!oSrcProp)
{this[sPropName]=oSrcProp;continue;}
if(("length"in oSrcProp)&&("apply"in oSrcProp))
continue;if(JScript_isDate(oSrcProp))
{this[sPropName]=new Date(oSrcProp.getTime());continue;}
if(sPropName=="m_custom"){if(!this.m_custom)
this.m_custom={};for(var name in oSrcProp)
this.m_custom[name]=oSrcProp[name];}}
else if(typeof(oSrcProp)!="function")
this[sPropName]=oSrcProp;}
if(oSrcItem.m_oSearchParams)
{var oSearchParams=new Olive.Data.SearchQuery();oSearchParams.copyFrom(oSrcItem.m_oSearchParams);this.m_oSearchParams=oSearchParams;}
var oParentItem=oSrcItem.getParentItem();if(oParentItem)
this.setParentItem(Olive.ContentItem.Clone(oParentItem));}
function OwcContentItem_getParentItem()
{return this.m_oParentItem;}
function OwcContentItem_setParentItem(oParentItem)
{this.m_oParentItem=oParentItem;}
function OwcContentItem_getParentItemByType(sContentItemType)
{sContentItemType=sContentItemType.toLowerCase();for(var oDataItem=this;oDataItem;oDataItem=oDataItem.getParentItem())
{if(oDataItem.getDataType().toLowerCase()==sContentItemType)
{return oDataItem;}}
return null;}
function OwcContentItem_contentCanLoad()
{return(this.m_sContentSrc&&(this.m_sContentSrc!=""));}
function OwcContentItem_contentBuildParams(oParams,bExcludeLayoutParams)
{if(this.m_sContentSrc&&(this.m_sContentSrc!=""))
oParams.addParam(OwcUrlParam_ContentSrc,this.m_sContentSrc,true);}
Olive.ContentItem.buildRefParams=function OwcContentItem_buildRefParams_Global(oItem,oParams)
{if(!oItem)
return;if(oItem.m_oParentItem)
Olive.ContentItem.buildRefParams(oItem.m_oParentItem,oParams);oItem.buildRefParams(oParams);};function OwcContentItem_buildRefParams(oParams)
{}
function OwcContentItem_buildQueryString()
{var oParams=new QueryString();Olive.ContentItem.buildRefParams(this,oParams);var sQueryString="?"+oParams.getQueryString();return sQueryString;}
function OwcContentItem_parseRefParams(oParams)
{if(this.m_oParentItem)
Olive.ContentItem.parseRefParams(oParams);}
function OwcContentItem_getDataType()
{return this.DataObjectType;}
function OwcContentItem_copyDocRefFrom(oSrcItem)
{var oCurItem=oSrcItem;while(oCurItem)
{if(oCurItem.m_sDocHRef)
{this.m_sDocHRef=oCurItem.m_sDocHRef;return true;}
if(oCurItem.m_sDocUid)
{this.m_sDocUid=oCurItem.m_sDocUid;return true;}
if(oCurItem.m_sDocContentId)
{this.m_sDocContentId=oCurItem.m_sDocContentId;this.m_nDocVersion=oCurItem.m_nDocVersion;return true;}
oCurItem=oCurItem.getParentItem();}
return false;}
function OwcContentItemCommon_getDocHRef()
{if(this.m_sDocHRef)
return this.m_sDocHRef;return null;}
function OwcContentItemCommon_getPublicationDescription()
{if(this.m_sPublicationDescription)
return this.m_sPublicationDescription;return null;}
JScript.Type.RegisterClass("Olive.ContentItem",Olive.ContentItem);}
if(!Olive.ContentItem.Document)
{Olive.ContentItem.Document=function OwcContentDocument()
{};Olive.ContentItem.Document.ApplyPrototype=function OwcContentDocument_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_Document);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_Document);OwcContentDocument_ApplyPrototype_DataMembers(rObject);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentDocument_contentCanLoad);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentDocument_contentBuildParams);JScript.Type.OverrideMethod(rObject,"buildRefParams",OwcContentDocument_buildRefParams);JScript.Type.OverrideMethod(rObject,"parseRefParams",OwcContentDocument_parseRefParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentDocument_parseData);JScript.Type.ReplaceMethod(rObject,"getDocHRef",OwcContentItemCommon_getDocHRef);JScript.Type.ReplaceMethod(rObject,"isSameDocHRef",OwcContentDocument_isSameDocHRef);JScript.Type.ReplaceMethod(rObject,"getPublicationDescription",OwcContentItemCommon_getPublicationDescription);};function OwcContentDocument_ApplyPrototype_DataMembers(rObject)
{JScript.Type.DeclareField(rObject,"m_sDocHRef",null);JScript.Type.DeclareField(rObject,"m_sDocUid",null);JScript.Type.DeclareField(rObject,"m_sDocContentId",null);JScript.Type.DeclareField(rObject,"m_nDocVersion",-1);JScript.Type.DeclareField(rObject,"m_sDocName",null);JScript.Type.DeclareField(rObject,"m_sRepFormat",null);JScript.Type.DeclareField(rObject,"m_nPageNo",null);JScript.Type.DeclareField(rObject,"m_sSection",null);JScript.Type.DeclareField(rObject,"m_nSecondPageNo",null);JScript.Type.DeclareField(rObject,"m_sSecondPageLabel",null);JScript.Type.DeclareField(rObject,"m_sPageLabel",null);JScript.Type.DeclareField(rObject,"m_nNumPagesDisplayed",null);JScript.Type.DeclareField(rObject,"m_sPublicationDescription",null);JScript.Type.DeclareField(rObject,"m_sPreviewImgExt",null);JScript.Type.DeclareField(rObject,"m_bUseFullPrintSize",false);}
function OwcContentDocument_contentCanLoad()
{if(!OwcContentItem_contentCanLoad.apply(this,arguments))
return false;var bCanLoad=false;if(this.m_sDocUid&&(this.m_sDocUid!=""))
bCanLoad=true;else if(this.m_sDocHRef&&(this.m_sDocHRef!=""))
bCanLoad=true;else if(this.m_sDocContentId&&(this.m_sDocContentId!=""))
bCanLoad=true;if(!bCanLoad)
{var oParentItem=this.getParentItem();if(oParentItem)
{bCanLoad=OwcContentDocument_contentCanLoad.apply(oParentItem,arguments);}}
return bCanLoad;}
function OwcContentDocument_contentBuildParams(oParams,bExcludeLayoutParams)
{OwcContentItem_contentBuildParams.apply(this,arguments);OwcContentDocument_buildRefParams.apply(this,arguments);}
function OwcContentDocument_buildRefParams(oParams)
{if(this.m_sDocUid&&(this.m_sDocUid!=""))
oParams.addParam(OwcUrlParam_DocHRef,"uid:"+this.m_sDocUid,true);else if(this.m_sDocHRef&&(this.m_sDocHRef!=""))
oParams.addParam(OwcUrlParam_DocHRef,this.m_sDocHRef,true);else if(this.m_sDocContentId&&(this.m_sDocContentId!=""))
{var sDocHRef="cid:"+this.m_sDocContentId;if(this.m_nDocVersion>0)
sDocHRef+=",ver:"+String(this.m_nDocVersion);oParams.addParam(OwcUrlParam_DocHRef,sDocHRef,true);}
if(this.m_sPrimId)
oParams.addParam(OwcUrlParam_PrimId,this.m_sPrimId,true);if(this.m_sEntityId)
oParams.addParam(OwcUrlParam_EntityId,this.m_sEntityId,true);if(this.m_nPageNo&&(this.m_nPageNo>0))
oParams.addParam(OwcUrlParam_PageNo,String(this.m_nPageNo),true);if(this.m_sRepFormat)
oParams.addParam(OwcUrlParam_RepFormat,this.m_sRepFormat,true);if(this.m_sPreviewImgExt)
oParams.addParam(OwcUrlParam_PreviewImgExt,this.m_sPreviewImgExt,true);if(this.m_bUseFullPrintSize)
oParams.addParam(OwcUrlParam_UseFullPrintSize,this.m_bUseFullPrintSize,false);}
function OwcContentDocument_parseRefParams(oParams)
{var sDocHref=oParams.getParam(OwcUrlParam_DocHRef,0);if(sDocHref==null)
throw new Error("Required parameter '"+OwcUrlParam_DocHRef+"' not present.");if((ind=sDocHref.indexOf("uid:"))!=-1)
this.m_sDocUid=sDocHref.substring(ind+4);else if((ind=sDocHref.indexOf("cid:"))!=-1)
{this.m_sDocContentId=sDocHref.substring(ind+4);if((ind2=sDocHref.indexOf("ver:"))!=-1)
this.m_nDocVersion=sDocHref.substring(ind2+4);}
else
this.m_sDocHRef=sDocHref;var sPrimId=oParams.getParam(OwcUrlParam_PrimId,0);if(sPrimId!=null)
this.m_sPrimId=sPrimId;var sPageNo=oParams.getParam(OwcUrlParam_PageNo,0);if(sPageNo!=null&&parseInt(sPageNo,10)>0)
this.m_nPageNo=parseInt(sPageNo,10);var sRepFormat=oParams.getParam(OwcUrlParam_RepFormat,0);if(sRepFormat)
this.m_sRepFormat=sRepFormat;var sPreviewImgExt=oParams.getParam(OwcUrlParam_PreviewImgExt,0);if(sPreviewImgExt)
this.m_sPreviewImgExt=sPreviewImgExt;}
function OwcContentDocument_parseData(oHtmlElement)
{this.m_sDocHRef=DHTML.getAttr(oHtmlElement,"doc-href",this.m_sDocHRef);this.m_sDocUid=DHTML.getAttr(oHtmlElement,"doc-uid",this.m_sDocUid);this.m_sDocContentId=DHTML.getAttr(oHtmlElement,"doc-cid",this.m_sDocContentId);this.m_nDocVersion=DHTML.getAttr(oHtmlElement,"doc-ver",this.m_nDocVersion);this.m_sDocName=DHTML.getAttr(oHtmlElement,"doc-name",this.m_sDocName);this.m_sRepFormat=DHTML.getAttr(oHtmlElement,"doc-format",this.m_sRepFormat);this.m_sPreviewImgExt=DHTML.getAttr(oHtmlElement,"doc-pv-ext",this.m_sPreviewImgExt);}
function OwcContentDocument_isSameDocHRef(oContentItem)
{var sDataType=oContentItem.getDataType();switch(sDataType)
{case OwcContentItem_Document:break;case OwcContentItem_TocEntry:var oParentItem=oContentItem.getRootItem();if(oParentItem&&oParentItem.getDataType()==OwcContentItem_Document)
oContentItem=oParentItem;else
return false;break;default:return false;}
var sDocHRef=oContentItem.getDocHRef();return(sDocHRef==this.getDocHRef());}
JScript.Type.RegisterClass("Olive.ContentItem.Document",Olive.ContentItem.Document,Olive.ContentItem);}
if(!Olive.ContentItem.Entity)
{Olive.ContentItem.Entity=function OwcContentEntity()
{};Olive.ContentItem.Entity.EntityTypes={article:"article",picture:"picture",ad:"ad",undefined:"undefined"};Olive.ContentItem.Entity.EntityFormats={data:"data"};Olive.ContentItem.Entity.ApplyPrototype=function OwcContentEntity_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_Entity);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_Entity);OwcContentEntity_ApplyPrototype_DataMembers(rObject);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentEntity_contentCanLoad);JScript.Type.DeclareMethod(rObject,"contentCanLoadTypeSpecificParams",OwcContentEntity_contentCanLoadTypeSpecificParams);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentEntity_contentBuildParams);JScript.Type.OverrideMethod(rObject,"buildRefParams",OwcContentEntity_buildRefParams);JScript.Type.OverrideMethod(rObject,"parseRefParams",OwcContentEntity_parseRefParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentEntity_parseData);JScript.Type.ReplaceMethod(rObject,"getDocHRef",OwcContentItemCommon_getDocHRef);JScript.Type.ReplaceMethod(rObject,"getPublicationDescription",OwcContentItemCommon_getPublicationDescription);};function OwcContentEntity_ApplyPrototype_DataMembers(rObject)
{OwcContentDocument_ApplyPrototype_DataMembers(rObject);JScript.Type.DeclareField(rObject,"m_sEntityId",null);JScript.Type.DeclareField(rObject,"m_sChunkId",null);JScript.Type.DeclareField(rObject,"m_nChunkNo",null);JScript.Type.DeclareField(rObject,"m_sFirstChunk",null);JScript.Type.DeclareField(rObject,"m_sLastChunk",null);JScript.Type.DeclareField(rObject,"m_sPreviousChunk",null);JScript.Type.DeclareField(rObject,"m_sNextChunk",null);JScript.Type.DeclareField(rObject,"m_sFirstHitChunk",null);JScript.Type.DeclareField(rObject,"m_sLastHitChunk",null);JScript.Type.DeclareField(rObject,"m_sPreviousHitChunk",null);JScript.Type.DeclareField(rObject,"m_sNextHitChunk",null);JScript.Type.DeclareField(rObject,"m_sTitle",null);JScript.Type.DeclareField(rObject,"m_sSection",null);JScript.Type.DeclareField(rObject,"m_nPageNo",-1);JScript.Type.DeclareField(rObject,"m_sPageLabel",null);}
function OwcContentEntity_contentCanLoad()
{var bCanLoad=OwcContentDocument_contentCanLoad.apply(this,arguments);if(bCanLoad)
bCanLoad=this.contentCanLoadTypeSpecificParams();return bCanLoad;}
function OwcContentEntity_contentCanLoadTypeSpecificParams()
{var bCanLoad=false;if(this.m_sEntityId&&(this.m_sEntityId!=""))
bCanLoad=true;if(!bCanLoad)
{var oParentItem=this.getParentItem();if(oParentItem)
{bCanLoad=OwcContentEntity_contentCanLoadTypeSpecificParams.apply(oParentItem,arguments);}}
return bCanLoad;}
function OwcContentEntity_contentBuildParams(oParams,bExcludeLayoutParams)
{OwcContentDocument_contentBuildParams.apply(this,arguments);OwcContentEntity_buildRefParams.apply(this,arguments);}
function OwcContentEntity_buildRefParams(oParams)
{OwcContentDocument_buildRefParams.apply(this,arguments);if(this.m_sEntityId)
oParams.addParam(OwcUrlParam_EntityId,this.m_sEntityId,true);if(this.m_sChunkId)
oParams.addParam(OwcUrlParam_ChunkId,this.m_sChunkId,true);if(typeof(this.m_nChunkNo)=="number")
oParams.addParam(OwcUrlParam_ChunkNo,this.m_nChunkNo,true);}
function OwcContentEntity_parseRefParams(oParams)
{OwcContentDocument_parseRefParams.apply(this,arguments);var sEntityId=oParams.getParam(OwcUrlParam_EntityId,0);if(sEntityId==null)
throw new Error("Required parameter '"+OwcUrlParam_EntityId+"' not present.");else
this.m_sEntityId=sEntityId;var sChunkId=oParams.getParam(OwcUrlParam_ChunkId,0);if(sChunkId!=null)
this.m_sChunkId=sChunkId;var sChunkNo=oParams.getParam(OwcUrlParam_ChunkNo,0);if(sChunkNo!=null&&parseInt(sChunkNo,10)>0)
this.m_nChunkNo=parseInt(sChunkNo,10);}
function OwcContentEntity_parseData(oHtmlElement)
{OwcContentDocument_parseData.call(this,oHtmlElement);this.m_sEntityId=DHTML.getAttr(oHtmlElement,"entityId",this.m_sEntityId);this.m_sChunkId=DHTML.getAttr(oHtmlElement,"chunk-id","");this.m_sFirstChunk=DHTML.getAttr(oHtmlElement,"first-chunk","");this.m_sLastChunk=DHTML.getAttr(oHtmlElement,"last-chunk","");this.m_sPreviousChunk=DHTML.getAttr(oHtmlElement,"previous-chunk","");this.m_sNextChunk=DHTML.getAttr(oHtmlElement,"next-chunk","");this.m_sFirstHitChunk=DHTML.getAttr(oHtmlElement,"first-hit-chunk","");this.m_sLastHitChunk=DHTML.getAttr(oHtmlElement,"last-hit-chunk","");this.m_sPreviousHitChunk=DHTML.getAttr(oHtmlElement,"previous-hit-chunk","");this.m_sNextHitChunk=DHTML.getAttr(oHtmlElement,"next-hit-chunk","");this.m_sTitle=DHTML.getAttr(oHtmlElement,"name","");this.m_sSection=DHTML.getAttr(oHtmlElement,"section","");var nPageNo=DHTML.getAttrNumber(oHtmlElement,"page-no",-1);if(nPageNo>0)
this.m_nPageNo=nPageNo;this.m_sPageLabel=DHTML.getAttr(oHtmlElement,"label");}
JScript.Type.RegisterClass("Olive.ContentItem.Entity",Olive.ContentItem.Entity,Olive.ContentItem);}
if(!Olive.ContentItem.Primitive)
{Olive.ContentItem.Primitive=function OwcContentPrimitive()
{};Olive.ContentItem.Primitive.ApplyPrototype=function OwcContentPrimitive_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_Primitive);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_Primitive);OwcContentPrimitive_ApplyPrototype_DataMembers(rObject);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentPrimitive_contentCanLoad);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentPrimitive_contentBuildParams);JScript.Type.OverrideMethod(rObject,"buildRefParams",OwcContentPrimitive_buildRefParams);JScript.Type.OverrideMethod(rObject,"parseRefParams",OwcContentPrimitive_parseRefParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentPrimitive_parseData);JScript.Type.ReplaceMethod(rObject,"getPublicationDescription",OwcContentItemCommon_getPublicationDescription);};function OwcContentPrimitive_ApplyPrototype_DataMembers(rObject)
{OwcContentDocument_ApplyPrototype_DataMembers(rObject);JScript.Type.DeclareField(rObject,"m_sPrimId",null);JScript.Type.DeclareField(rObject,"m_sImgExt",null);}
function OwcContentPrimitive_contentCanLoad()
{var bCanLoad=OwcContentDocument_contentCanLoad.apply(this,arguments);if(!bCanLoad)
return false;if(this.m_sPrimId&&(this.m_sPrimId!=""))
return true;return false;}
function OwcContentPrimitive_contentBuildParams(oParams,bExcludeLayoutParams)
{OwcContentDocument_contentBuildParams.apply(this,arguments);OwcContentPrimitive_buildRefParams.apply(this,arguments);}
function OwcContentPrimitive_buildRefParams(oParams)
{OwcContentDocument_buildRefParams.apply(this,arguments);if(this.m_sPrimId)
oParams.addParam(OwcUrlParam_PrimId,this.m_sPrimId,true);if(this.m_sImgExt)
oParams.addParam(OwcUrlParam_ImgExt,this.m_sImgExt,true);}
function OwcContentPrimitive_parseRefParams(oParams)
{OwcContentDocument_parseRefParams.apply(this,arguments);var sPrimId=oParams.getParam(OwcUrlParam_PrimId,0);if(sPrimId==null)
throw new Error("Required parameter '"+OwcUrlParam_PrimId+"' not present.");else
this.m_sPrimId=sPrimId;var sImgExt=oParams.getParam(OwcUrlParam_ImgExt,0);if(sImgExt!=null)
this.m_sImgExt=sImgExt;}
function OwcContentPrimitive_parseData(oHtmlElement)
{OwcContentDocument_parseData.call(this,oHtmlElement);this.m_sPrimId=DHTML.getAttr(oHtmlElement,"prim_Id");this.m_sImgExt=DHTML.getAttr(oHtmlElement,"img-extension",this.m_sImgExt);}
JScript.Type.RegisterClass("Olive.ContentItem.Primitive",Olive.ContentItem.Primitive,Olive.ContentItem);}
if(!Olive.ContentItem.Page)
{Olive.ContentItem.Page=function OwcContentPage()
{};Olive.ContentItem.Page.ApplyPrototype=function OwcContentPage_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_Page);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_Page);OwcContentEntity_ApplyPrototype_DataMembers(rObject);JScript.Type.DeclareField(rObject,"m_sPageId",null);JScript.Type.DeclareField(rObject,"m_nPageNo",-1);JScript.Type.DeclareField(rObject,"m_sPageLabel",null);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentPage_contentCanLoad);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentPage_contentBuildParams);JScript.Type.OverrideMethod(rObject,"buildRefParams",OwcContentPage_buildRefParams);JScript.Type.OverrideMethod(rObject,"parseRefParams",OwcContentPage_parseRefParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentPage_parseData);JScript.Type.ReplaceMethod(rObject,"getDocHRef",OwcContentItemCommon_getDocHRef);JScript.Type.ReplaceMethod(rObject,"getPublicationDescription",OwcContentItemCommon_getPublicationDescription);};function OwcContentPage_contentCanLoad()
{var bCanLoad=OwcContentDocument_contentCanLoad.call(this);if(!bCanLoad)
return false;return true;}
function OwcContentPage_contentBuildParams(oParams,bExcludeLayoutParams)
{OwcContentEntity_contentBuildParams.call(this,oParams);OwcContentPage_buildRefParams.apply(this,arguments);}
function OwcContentPage_buildRefParams(oParams)
{OwcContentEntity_buildRefParams.apply(this,arguments);if(this.m_sPageId)
oParams.addParam(OwcUrlParam_PageId,this.m_sPageId,true);else if(this.m_sPageLabel)
oParams.addParam(OwcUrlParam_PageLabel,this.m_sPageLabel,true);else if(this.m_nPageNo>0)
oParams.addParam(OwcUrlParam_PageNo,String(this.m_nPageNo),true);}
function OwcContentPage_parseRefParams(oParams)
{OwcContentEntity_parseRefParams.apply(this,arguments);var sPageId=oParams.getParam(OwcUrlParam_PageId,0);if(sPageId!=null)
this.m_sPageId=sPageId;var sPageLabel=oParams.getParam(OwcUrlParam_PageLabel,0);if(sPageLabel!=null)
this.m_sPageLabel=sPageLabel;var sPageNo=oParams.getParam(OwcUrlParam_PageNo,0);if(sPageNo!=null&&parseInt(sPageNo,10)>0)
this.m_nPageNo=parseInt(sPageNo,10);}
function OwcContentPage_parseData(oHtmlElement)
{OwcContentDocument_parseData.call(this,oHtmlElement);this.m_sPageId=DHTML.getAttr(oHtmlElement,"id");var sPageNo=DHTML.getAttr(oHtmlElement,"page-no");if(sPageNo)
this.m_nPageNo=parseInt(sPageNo,10);this.m_sPageLabel=DHTML.getAttr(oHtmlElement,"label");}
JScript.Type.RegisterClass("Olive.ContentItem.Page",Olive.ContentItem.Page,Olive.ContentItem);}
if(!Olive.ContentItem.TocEntry)
{Olive.ContentItem.TocEntry=function OwcContentTocEntry()
{};Olive.ContentItem.TocEntry.ApplyPrototype=function OwcContentTocEntry_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_TocEntry);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_Document);JScript.Type.DeclareField(rObject,"m_nTocEntryId",-1);JScript.Type.DeclareField(rObject,"m_nTocSearchHits",null);JScript.Type.DeclareField(rObject,"m_nFirstHitPage",null);JScript.Type.DeclareField(rObject,"m_bIsInformationComponent",false);JScript.Type.DeclareField(rObject,"m_sPrimId",null);JScript.Type.DeclareField(rObject,"m_bIsSection",false);JScript.Type.DeclareField(rObject,"m_sTitle",false);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentTocEntry_contentBuildParams);JScript.Type.OverrideMethod(rObject,"buildRefParams",OwcContentTocEntry_buildRefParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentTocEntry_parseData);JScript.Type.ReplaceMethod(rObject,"getDocHRef",OwcContentTocEntry_getDocHRef);JScript.Type.DeclareMethod(rObject,"getSectionName",OwcContentTocEntry_getSectionName);JScript.Type.ReplaceMethod(rObject,"isSameDocHRef",OwcContentTocEntry_isSameDocHRef);JScript.Type.ReplaceMethod(rObject,"getRootItem",OwcContentTocEntry_getRootItem);};function OwcContentTocEntry_contentBuildParams(oParams,bExcludeLayoutParams)
{OwcContentEntity_contentBuildParams.call(this,oParams);this.buildRefParams(oParams);}
function OwcContentTocEntry_buildRefParams(oParams)
{var sPrevEntityId=null;if(!this.m_bIsInformationComponent)
sPrevEntityId=oParams.getParam(OwcUrlParam_EntityId,0);OwcContentEntity_buildRefParams.call(this,oParams);if(!this.m_bIsInformationComponent&&sPrevEntityId)
oParams.addParam(OwcUrlParam_EntityId,sPrevEntityId,true);oParams.addParam(OwcUrlParam_TocEntry,this.m_nTocEntryId,true);if(this.m_sPrimId)
oParams.addParam(OwcUrlParam_PrimId,this.m_sPrimId,true);if(this.m_nPageNo&&(this.m_nPageNo>0))
oParams.addParam(OwcUrlParam_PageNo,String(this.m_nPageNo),true);}
function OwcContentTocEntry_parseData(oHtmlElement)
{var sTocSearchHits=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.TocSearchHits);if(sTocSearchHits){this.m_nTocSearchHits=parseInt(sTocSearchHits,10);}
this.m_nTocEntryId=DHTML.getAttr(oHtmlElement,"uid");OwcContentEntity_parseData.call(this,oHtmlElement);var sTitle=DHTML.getAttr(oHtmlElement,"title");if(sTitle){this.m_sTitle=sTitle;this.m_sToolTip=sTitle;}
var sPageNo=DHTML.getAttr(oHtmlElement,"page_no");if(sPageNo){this.m_nPageNo=parseInt(sPageNo,10);}
var sPageLabel=DHTML.getAttr(oHtmlElement,"page_label");if(sPageLabel){this.m_sPageLabel=sPageLabel;}
var sFirstPageNo=DHTML.getAttr(oHtmlElement,"first_page");if(sFirstPageNo){this.m_nFirstHitPage=parseInt(sFirstPageNo,10);}
var sPrimId=DHTML.getAttr(oHtmlElement,"prim_Id");if(sPrimId){this.m_sPrimId=sPrimId;}
this.m_bIsSection=DHTML.getAttrBoolean(oHtmlElement,"IS_SECTION");this.m_bIsInformationComponent=DHTML.getAttrBoolean(oHtmlElement,"IS_IC");if(this.m_bIsInformationComponent)
this.m_sContentSrc=OwcContentSrc_Entity;}
function OwcContentTocEntry_getRootItem()
{var bFound=false;var oParentItem=null;var oItem=this;do
{oParentItem=oItem.m_oParentItem;if(oParentItem)
{var sDataType=oParentItem.getDataType();if((sDataType==OwcContentItem_Document)||(sDataType==OwcContentItem_SearchResult))
{bFound=true;}}
else
break;oItem=oParentItem;}while(!bFound)
return oParentItem;}
function OwcContentTocEntry_getDocHRef()
{var oParentItem=this.getRootItem();if(oParentItem==null)
return null;else
return oParentItem.getDocHRef();}
function OwcContentTocEntry_getSectionName()
{var bFound=false;var oParentItem=null;var oItem=this;var sTitle=null;while(oItem)
{if(oItem.m_bIsSection)
return oItem.m_sTitle;else
oItem=oItem.m_oParentItem;}
return sTitle;}
function OwcContentTocEntry_isSameDocHRef(oContentItem)
{var oParentItem=this.getRootItem();if(oParentItem==null)
return false;else
return oParentItem.isSameDocHRef(oContentItem);}
JScript.Type.RegisterClass("Olive.ContentItem.TocEntry",Olive.ContentItem.TocEntry,Olive.ContentItem);}
if(!Olive.ContentItem.FolderTree)
{Olive.ContentItem.FolderTree=function OwcContentFolderTree()
{};Olive.ContentItem.FolderTree.ApplyPrototype=function OwcContentFolderTree_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_Tree);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_Tree);OwcContentFolderTree_ApplyPrototype_DataMembers(rObject);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentFolderTree_contentCanLoad);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentFolderTree_contentBuildParams);JScript.Type.OverrideMethod(rObject,"buildRefParams",OwcContentFolderTree_buildRefParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentFolderTree_parseData);};function OwcContentFolderTree_ApplyPrototype_DataMembers(rObject)
{rObject.m_sTreeUid=null;rObject.m_sTreeName=null;}
function OwcContentFolderTree_contentCanLoad()
{if(this.m_sTreeUid&&(this.m_sTreeUid!=""))
return true;if(this.m_sTreeName&&(this.m_sTreeName!=""))
return true;return false;}
function OwcContentFolderTree_contentBuildParams(oParams,bExcludeLayoutParams)
{if(this.BaseClassMethod)
this.BaseClassMethod.call(this,oParams);this.buildRefParams(oParams);}
function OwcContentFolderTree_buildRefParams(oParams)
{if(this.m_sTreeUid&&this.m_sTreeUid!="")
oParams.addParam(OwcUrlParam_Tree,"uid:"+this.m_sTreeUid,true);else if(this.m_sTreeName&&this.m_sTreeName!="")
oParams.addParam(OwcUrlParam_Tree,this.m_sTreeName,true);}
function OwcContentFolderTree_parseData(oHtmlElement)
{var sTreeUid=DHTML.getAttr(oHtmlElement,"tree-uid");if(sTreeUid){this.m_sTreeUid=sTreeUid;}
var sTreeName=DHTML.getAttr(oHtmlElement,"tree-name");if(sTreeName){this.m_sTreeName=sTreeName;}}
JScript.Type.RegisterClass("Olive.ContentItem.FolderTree",Olive.ContentItem.FolderTree,Olive.ContentItem);}
if(!Olive.ContentItem.Folder)
{Olive.ContentItem.Folder=function OwcContentFolder()
{};Olive.ContentItem.Folder.ApplyPrototype=function OwcContentFolder_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_Folder);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_Folder);OwcContentFolderTree_ApplyPrototype_DataMembers(rObject);OwcContentPaginatedList_ApplyPrototype_DataMembers(rObject);JScript.Type.DeclareField(rObject,"m_sFolderUid",null);JScript.Type.DeclareField(rObject,"m_sFolderQName",null);JScript.Type.DeclareField(rObject,"m_sTitle",null);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentFolder_contentCanLoad);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentFolder_contentBuildParams);JScript.Type.OverrideMethod(rObject,"buildRefParams",OwcContentFolder_buildRefParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentFolder_parseData);JScript.Type.ReplaceMethod(rObject,"parsePaginationData",OwcContentPaginatedList_parseData);};function OwcContentFolder_buildRefParams(oParams)
{if(this.m_sFolderQName&&this.m_sFolderQName!="")
oParams.addParam(OwcUrlParam_Folder,this.m_sFolderQName);else if(this.m_sFolderUid&&this.m_sFolderUid!="")
{OwcContentFolderTree_buildRefParams.call(this,oParams);oParams.addParam(OwcUrlParam_Folder,"uid:"+this.m_sFolderUid,true);}}
function OwcContentFolder_contentCanLoad()
{if(this.m_sFolderQName&&(this.m_sFolderQName!=""))
return true;if(!OwcContentFolderTree_contentCanLoad.call(this))
return false;return(this.m_sFolderUid&&(this.m_sFolderUid!=""));}
function OwcContentFolder_contentBuildParams(oParams,bExcludeLayoutParams)
{this.BaseClassMethod.call(this,oParams);this.buildRefParams(oParams);}
function OwcContentFolder_parseData(oHtmlElement)
{OwcContentFolderTree_parseData.call(this,oHtmlElement);var sFolderUid=DHTML.getAttr(oHtmlElement,"folder-uid");if(sFolderUid){this.m_sFolderUid=sFolderUid;}
var sFolderQName=DHTML.getAttr(oHtmlElement,"folder-qname");if(sFolderQName){this.m_sFolderQName=sFolderQName;}
var sTitle=DHTML.getAttr(oHtmlElement,"title");if(sTitle){this.m_sTitle=sTitle;}
this.parsePaginationData(oHtmlElement);}
JScript.Type.RegisterClass("Olive.ContentItem.Folder",Olive.ContentItem.Folder,Olive.ContentItem);}
if(!Olive.ContentItem.SearchQuery)
{Olive.ContentItem.SearchQuery=function OwcContentSearchQuery()
{};Olive.ContentItem.SearchQuery.ApplyPrototype=function OwcContentSearchQuery_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_SearchQuery);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_SearchQuery);JScript.Type.DeclareField(rObject,"m_oSearchParams",null);OwcContentPaginatedList_ApplyPrototype_DataMembers(rObject);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentSearchQuery_contentCanLoad);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentSearchQuery_contentBuildParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentSearchQuery_parseData);JScript.Type.ReplaceMethod(rObject,"parsePaginationData",OwcContentPaginatedList_parseData);};function OwcContentSearchQuery_contentCanLoad()
{if(!OwcContentItem_contentCanLoad.call(this,arguments))
return false;if(!this.m_oSearchParams)
return false;return true;}
function OwcContentSearchQuery_contentBuildParams(oParams,bExcludeLayoutParams)
{this.m_oSearchParams.contentBuildParams(oParams,bExcludeLayoutParams);}
function OwcContentSearchQuery_parseData(oHtmlElement)
{this.parsePaginationData(oHtmlElement);if(!!this.m_oSearchParams)
{var stemming=DHTML.getAttr(oHtmlElement,"stemming");if(!!stemming)
{if(String_parseBoolean(stemming,false))
this.m_oSearchParams.setStemmingMode(Olive.Data.SearchOptions.Mode.Enabled);else
this.m_oSearchParams.setStemmingMode(Olive.Data.SearchOptions.Mode.Disabled);}
var phonic=DHTML.getAttr(oHtmlElement,"phonic");if(!!phonic)
{if(String_parseBoolean(phonic,false))
this.m_oSearchParams.setPhonicMode(Olive.Data.SearchOptions.Mode.Enabled);else
this.m_oSearchParams.setPhonicMode(Olive.Data.SearchOptions.Mode.Disabled);}
var synonyms=DHTML.getAttr(oHtmlElement,"synonym");if(!!synonyms)
{if(String_parseBoolean(synonyms,false))
this.m_oSearchParams.setSynonymsMode(Olive.Data.SearchOptions.Mode.Enabled);else
this.m_oSearchParams.setSynonymsMode(Olive.Data.SearchOptions.Mode.Disabled);}
var fuzzyLevel=DHTML.getAttrNumber(oHtmlElement,"fuzzy-level",-1);if(fuzzyLevel>=0)
this.m_oSearchParams.setFuzzyLevel(fuzzyLevel);if(!!this.m_oSearchParams.m_arrUserParams)
{var userParams=DHTML.getAttr(oHtmlElement,"user-params");if(!!userParams)
{var paramsArray=userParams.split("^");for(var i=0;i<paramsArray.length;i+=2)
this.m_oSearchParams.m_arrUserParams[paramsArray[i]]=paramsArray[i+1];}}}}
JScript.Type.RegisterClass("Olive.ContentItem.SearchQuery",Olive.ContentItem.SearchQuery,Olive.ContentItem);}
if(!Olive.ContentItem.SearchResult)
{Olive.ContentItem.SearchResult=function OwcContentSearchResult()
{};Olive.ContentItem.SearchResult.ApplyPrototype=function OwcContentSearchResult_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_SearchResult);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_SearchResult);JScript.Type.DeclareField(rObject,"m_nSearchScore",null);JScript.Type.DeclareField(rObject,"m_nTotalHitsCount",-1);JScript.Type.DeclareField(rObject,"m_nContentHitsCount",-1);JScript.Type.DeclareField(rObject,"m_nMetaHitsCount",-1);JScript.Type.DeclareField(rObject,"m_nFirstHitPage",-1);JScript.Type.DeclareField(rObject,"m_nLastHitPage",-1);JScript.Type.DeclareField(rObject,"m_nFirstHitX",undefined);JScript.Type.DeclareField(rObject,"m_nFirstHitY",undefined);JScript.Type.DeclareField(rObject,"m_nLastHitX",undefined);JScript.Type.DeclareField(rObject,"m_nLastHitY",undefined);JScript.Type.DeclareField(rObject,"m_nFirstHitTocEntryId",-1);JScript.Type.DeclareField(rObject,"m_nLastHitTocEntryId",-1);JScript.Type.DeclareField(rObject,"m_sPublicationDescription",null);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentSearchResult_contentBuildParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentSearchResult_parseData);JScript.Type.ReplaceMethod(rObject,"getDocHRef",OwcContentItemCommon_getDocHRef);JScript.Type.ReplaceMethod(rObject,"isSameDocHRef",OwcContentSearchResult_isSameDocHRef);JScript.Type.ReplaceMethod(rObject,"getPublicationDescription",OwcContentItemCommon_getPublicationDescription);};function OwcContentSearchResult_contentBuildParams(oParams,bExcludeLayoutParams)
{OwcContentEntity_contentBuildParams.apply(this,arguments);if(this.m_nFirstHitX!=undefined)
oParams.addParam(OwcUrlParam_FirstHitX,this.m_nFirstHitX,true);if(this.m_nFirstHitY!=undefined)
oParams.addParam(OwcUrlParam_FirstHitY,this.m_nFirstHitY,true);if(this.m_nLastHitX!=undefined)
oParams.addParam(OwcUrlParam_LastHitX,this.m_nLastHitX,true);if(this.m_nLastHitY!=undefined)
oParams.addParam(OwcUrlParam_LastHitY,this.m_nLastHitY,true);if(this.m_nFirstHitPage>0)
oParams.addParam(OwcUrlParam_FirstHitPage,this.m_nFirstHitPage,true);if(this.m_nLastHitPage>0)
oParams.addParam(OwcUrlParam_LastHitPage,this.m_nLastHitPage,true);}
function OwcContentSearchResult_parseData(oHtmlElement)
{OwcContentEntity_parseData.call(this,oHtmlElement);var sPageNo=DHTML.getAttr(oHtmlElement,"page-no");if(sPageNo)
this.m_nPageNo=parseInt(sPageNo,10);this.m_sPrimId=DHTML.getAttr(oHtmlElement,"prim_Id");this.m_nTotalHitsCount=DHTML.getAttrNumber(oHtmlElement,"total-hits",-1);this.m_nContentHitsCount=DHTML.getAttrNumber(oHtmlElement,"content-hits",-1);this.m_nMetaHitsCount=DHTML.getAttrNumber(oHtmlElement,"meta-hits",-1);this.m_nFirstHitPage=DHTML.getAttrNumber(oHtmlElement,"first-hit-page",-1);this.m_nLastHitPage=DHTML.getAttrNumber(oHtmlElement,"last-hit-page",-1);this.m_nFirstHitX=DHTML.getAttrNumber(oHtmlElement,"first-hit-x",-1);this.m_nFirstHitY=DHTML.getAttrNumber(oHtmlElement,"first-hit-y",-1);this.m_nLastHitX=DHTML.getAttrNumber(oHtmlElement,"last-hit-x",-1);this.m_nLastHitY=DHTML.getAttrNumber(oHtmlElement,"last-hit-y",-1);this.m_nFirstHitTocEntryId=DHTML.getAttrNumber(oHtmlElement,"first-hit-toc-entry",-1);this.m_nLastHitTocEntryId=DHTML.getAttrNumber(oHtmlElement,"last-hit-toc-entry",-1);this.m_sPublicationDescription=DHTML.getAttr(oHtmlElement,"publication-description");var sSearchScore=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.SearchScore);if(sSearchScore)
{var nSearchScore=parseFloat(sSearchScore);if(!isNaN(nSearchScore)){this.m_nSearchScore=nSearchScore;}}
var sCollection=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.SearchCollection);if(sCollection)
this.m_sCollection=sCollection;}
function OwcContentSearchResult_isSameDocHRef(oContentItem)
{var sDataType=oContentItem.getDataType();switch(sDataType)
{case OwcContentItem_SearchResult:break;case OwcContentItem_TocEntry:var oParentItem=oContentItem.getRootItem();if(oParentItem&&oParentItem.getDataType()==OwcContentItem_SearchResult)
oContentItem=oParentItem;else
return false;break;default:return false;}
var sDocHRef=oContentItem.getDocHRef();return(sDocHRef==this.getDocHRef());}
JScript.Type.RegisterClass("Olive.ContentItem.SearchResult",Olive.ContentItem.SearchResult,Olive.ContentItem.Entity);}
function OwcContentPaginatedList_ApplyPrototype_DataMembers(rObject)
{JScript.Type.DeclareField(rObject,"m_nResultsCount",null);JScript.Type.DeclareField(rObject,"m_nResultsFrom",null);JScript.Type.DeclareField(rObject,"m_nResultsTo",null);JScript.Type.DeclareField(rObject,"m_nResultsThisPage",null);JScript.Type.DeclareField(rObject,"m_nPageCount",null);JScript.Type.DeclareField(rObject,"m_nPageNo",null);JScript.Type.DeclareField(rObject,"m_nPageSize",null);}
function OwcContentPaginatedList_parseData(oHtmlElement)
{var sResultsCount=DHTML.getAttr(oHtmlElement,"results-count");if(sResultsCount){this.m_nResultsCount=parseInt(sResultsCount,10);}
var sResultsFrom=DHTML.getAttr(oHtmlElement,"results-from");if(sResultsFrom){this.m_nResultsFrom=parseInt(sResultsFrom,10);}
var sResultsTo=DHTML.getAttr(oHtmlElement,"results-to");if(sResultsTo){this.m_nResultsTo=parseInt(sResultsTo,10);}
var sResultsThisPage=DHTML.getAttr(oHtmlElement,"results-this-page");if(sResultsThisPage){this.m_nResultsThisPage=parseInt(sResultsThisPage,10);}
var sPageCount=DHTML.getAttr(oHtmlElement,"page-count");if(sPageCount){this.m_nPageCount=parseInt(sPageCount,10);}
var sPageNo=DHTML.getAttr(oHtmlElement,"page-no");if(sPageNo){this.m_nPageNo=parseInt(sPageNo,10);}
var sPageSize=DHTML.getAttr(oHtmlElement,"page-size");if(sPageSize){this.m_nPageSize=parseInt(sPageSize,10);}}
if(!Olive.ContentItem.Mail)
{Olive.ContentItem.Mail=function OwcContentMail()
{};Olive.ContentItem.Mail.ApplyPrototype=function OwcContentMail_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_Mail);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_Mail);JScript.Type.DeclareField(rObject,"m_arrFields",null);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentMail_contentCanLoad);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentMail_contentBuildParams);JScript.Type.DeclareMethod(rObject,"getField",OwcContentMail_getField);JScript.Type.DeclareMethod(rObject,"setField",OwcContentMail_setField);};function OwcContentMail()
{this.m_arrFields=new Array();}
function OwcContentMail_contentCanLoad()
{var sTo=this.getField(OwcUrlParam_MailTo);if(!sTo||(sTo==""))
return false;return true;}
function OwcContentMail_contentBuildParams(oParams,bExcludeLayoutParams)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);for(var sFieldName in this.m_arrFields)
oParams.addParam(sFieldName,this.m_arrFields[sFieldName],true);var sMailFormat=this.getField(OwcUrlParam_MailFormat);if(!sMailFormat)
oParams.addParam(OwcUrlParam_MailFormat,"HTML");}
function OwcContentMail_getField(sFieldName)
{return this.m_arrFields[sFieldName.toLowerCase()];}
function OwcContentMail_setField(sFieldName,sFieldValue)
{this.m_arrFields[sFieldName.toLowerCase()]=sFieldValue;}
JScript.Type.RegisterClass("Olive.ContentItem.Mail",Olive.ContentItem.Mail,Olive.ContentItem);}
if(!Olive.ContentItem.Print)
{Olive.ContentItem.Print=function OwcContentPrint()
{};Olive.ContentItem.Print.ApplyPrototype=function OwcContentPrint_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_Print);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_Print);OwcContentDocument_ApplyPrototype_DataMembers(rObject);OwcContentEntity_ApplyPrototype_DataMembers(rObject);JScript.Type.DeclareField(rObject,"m_oPrintFormData",null);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentPrint_contentCanLoad);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentPrint_contentBuildParams);JScript.Type.OverrideMethod(rObject,"parseRefParams",OwcContentPrint_parseRefParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentPrint_parseData);JScript.Type.ReplaceMethod(rObject,"getDocHRef",OwcContentItemCommon_getDocHRef);JScript.Type.DeclareMethod(rObject,"setFirstChunk",OwcContentItemCommon_setFirstChunk);JScript.Type.DeclareMethod(rObject,"getFirstChunk",OwcContentItemCommon_getFirstChunk);JScript.Type.DeclareMethod(rObject,"setLastChunk",OwcContentItemCommon_setLastChunk);JScript.Type.DeclareMethod(rObject,"getLastChunk",OwcContentItemCommon_getLastChunk);};function OwcContentPrint_contentCanLoad()
{return OwcContentDocument_contentCanLoad.call(this);}
function OwcContentPrint_contentBuildParams(oParams,bExcludeLayoutParams)
{var oPrintFormData=this.m_oPrintFormData;if(oPrintFormData)
{var oPrintItemType=oPrintFormData.getPrintItemType();if(oPrintItemType==OwcContentItem_Document)
{OwcContentDocument_contentBuildParams.call(this,oParams);this.m_oPrintFormData.contentBuildParams(oParams);}
else if(oPrintItemType==OwcContentItem_Entity)
{OwcContentEntity_contentBuildParams.call(this,oParams);}
if(isMozilla())
oParams.addParam(OwcUrlParam_IsMozilla,true,true);}}
function OwcContentPrint_parseData(oHtmlElement)
{}
function OwcContentPrint_parseRefParams(oParams)
{OwcContentDocument_parseRefParams.apply(this,arguments);var oPrintFormData=this.m_oPrintFormData;if(oPrintFormData&&oPrintFormData.parseRefParams)
{oPrintFormData.parseRefParams(oParams);}}
function OwcContentItemCommon_setFirstChunk(param)
{if(this.m_oPrintFormData&&param)
this.m_oPrintFormData.setFirstChunk(param);}
function OwcContentItemCommon_getFirstChunk()
{if(this.m_oPrintFormData&&this.m_oPrintFormData.getFirstChunk)
return this.m_oPrintFormData.getFirstChunk();else
return"";}
function OwcContentItemCommon_setLastChunk(param)
{if(this.m_oPrintFormData&&param)
this.m_oPrintFormData.setLastChunk(param);}
function OwcContentItemCommon_getLastChunk()
{if(this.m_oPrintFormData&&this.m_oPrintFormData.getLastChunk)
return this.m_oPrintFormData.getLastChunk();else
return"";}
JScript.Type.RegisterClass("Olive.ContentItem.Print",Olive.ContentItem.Print,Olive.ContentItem);}
if(!Olive.ContentItem.Link)
{Olive.ContentItem.Link=function OwcContentLink()
{};Olive.ContentItem.Link.ApplyPrototype=function OwcContentLink_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_Link);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_Link);JScript.Type.DeclareField(rObject,"m_sLinkType",null);JScript.Type.DeclareField(rObject,"m_sLinkTarget",null);JScript.Type.DeclareField(rObject,"m_sLinkSeebox",null);JScript.Type.DeclareField(rObject,"m_sDocHRef",null);JScript.Type.DeclareField(rObject,"m_nPageNo",-1);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentLink_parseData);JScript.Type.ReplaceMethod(rObject,"getDocHRef",OwcContentItemCommon_getDocHRef);JScript.Type.ReplaceMethod(rObject,"getPublicationDescription",OwcContentLink_getPublicationDescription);};function OwcContentLink_parseData(oHtmlElement)
{this.m_sLinkType=DHTML.getAttr(oHtmlElement,"link-type");var sLinkTarget=DHTML.getAttr(oHtmlElement,"link-target");if(this.m_sLinkType=="URL")
{if(sLinkTarget.charAt(0)=="."&&sLinkTarget.toLowerCase().indexOf("www")==-1)
sLinkTarget="www"+sLinkTarget;if(sLinkTarget.indexOf("://")==-1)
sLinkTarget="http://"+sLinkTarget;}
else if(this.m_sLinkType=="EML"&&sLinkTarget.substr(0,8).toLowerCase()!="mailto:")
sLinkTarget="mailto:"+sLinkTarget;this.m_sLinkTarget=sLinkTarget;this.m_sLinkSeebox=DHTML.getAttr(oHtmlElement,"link-seebox");this.m_sDocHRef=DHTML.getAttr(oHtmlElement,"doc-href");this.m_nPageNo=DHTML.getAttrNumber(oHtmlElement,"page-no",-1);}
function OwcContentLink_getPublicationDescription()
{var oItem=this;var oParentItem=null;var bFound=false;do
{oParentItem=oItem.getParentItem();if(oParentItem)
{var sDataType=oParentItem.getDataType();if(sDataType==OwcContentItem_SearchResult)
{bFound=true;}}
else
break;oItem=oParentItem;}while(!bFound)
if(oParentItem)
return oParentItem.getPublicationDescription();return null;}
JScript.Type.RegisterClass("Olive.ContentItem.Link",Olive.ContentItem.Link,Olive.ContentItem);}
if(!Olive.ContentItem.DocumentThumbList)
{Olive.ContentItem.DocumentThumbList=function OwcContentDocumentThumbList()
{};Olive.ContentItem.DocumentThumbList.ApplyPrototype=function OwcContentDocumentThumbList_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_DocumentThumbList);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_DocumentThumbList);OwcContentDocument_ApplyPrototype_DataMembers(rObject);OwcContentPaginatedList_ApplyPrototype_DataMembers(rObject);JScript.Type.DeclareField(rObject,"m_sPageNumbers",null);JScript.Type.DeclareField(rObject,"m_sPageLabels",null);JScript.Type.DeclareField(rObject,"m_sPageTitles",null);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentDocumentThumbList_contentBuildParams);JScript.Type.OverrideMethod(rObject,"parseData",OwcContentDocumentThumbList_parseData);JScript.Type.ReplaceMethod(rObject,"buildRefParams",OwcContentDocumentThumbList_buildRefParams);JScript.Type.DeclareMethod(rObject,"parsePaginationData",OwcContentPaginatedList_parseData);};function OwcContentDocumentThumbList_contentBuildParams(oParams,bExcludeLayoutParams)
{if(this.BaseClassMethod)
this.BaseClassMethod.call(this,oParams);this.buildRefParams(oParams);}
function OwcContentDocumentThumbList_buildRefParams(oParams)
{if(this.m_sPageNumbers&&(this.m_sPageNumbers!=""))
oParams.addParam(OwcUrlParam_PageNumbers,this.m_sPageNumbers);if(this.m_sPageLabels&&(this.m_sPageLabels!=""))
oParams.addParam(OwcUrlParam_PageLabels,this.m_sPageLabels);if(this.m_sPageTitles&&(this.m_sPageTitles!=""))
oParams.addParam(OwcUrlParam_PageTitles,this.m_sPageTitles);}
function OwcContentDocumentThumbList_parseData(oHtmlElement)
{var sPageNumbers=DHTML.getAttr(oHtmlElement,OwcUrlParam_PageNumbers);if(sPageNumbers)
this.m_sPageNumbers=sPageNumbers;var sPageLabels=DHTML.getAttr(oHtmlElement,OwcUrlParam_PageLabels);if(sPageLabels)
this.m_sPageLabels=sPageLabels;var sPageTitles=DHTML.getAttr(oHtmlElement,OwcUrlParam_PageTitles);if(sPageTitles)
this.m_sPageTitles=sPageTitles;this.parsePaginationData(oHtmlElement);}
JScript.Type.RegisterClass("Olive.ContentItem.DocumentThumbList",Olive.ContentItem.DocumentThumbList,Olive.ContentItem.Document);}
if(!Olive.ContentItem.PublicationThumbList)
{Olive.ContentItem.PublicationThumbList=function OwcContentPublicationThumbList()
{};Olive.ContentItem.PublicationThumbList.ApplyPrototype=function OwcContentPublicationThumbList_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_PublicationThumbList);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_PublicationThumbList);OwcContentPaginatedList_ApplyPrototype_DataMembers(rObject);JScript.Type.DeclareField(rObject,"m_sPublication",null);JScript.Type.DeclareField(rObject,"m_nDayOfWeek",null);JScript.Type.DeclareField(rObject,"m_sSection",null);JScript.Type.DeclareField(rObject,"m_sFromDate",null);JScript.Type.DeclareField(rObject,"m_sToDate",null);JScript.Type.DeclareField(rObject,"m_sPageCriterion",null);JScript.Type.DeclareField(rObject,"m_sNextAnchorPage",null);JScript.Type.DeclareField(rObject,"m_nPagesCount",null);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentPublicationThumbList_contentCanLoad);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentPublicationThumbList_contentBuildParams);JScript.Type.ReplaceMethod(rObject,"buildRefParams",OwcContentPublicationThumbList_buildRefParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentPublicationThumbList_parseData);JScript.Type.DeclareMethod(rObject,"parsePaginationData",OwcContentPaginatedList_parseData);};function OwcContentPublicationThumbList_contentCanLoad()
{if(this.BaseClassMethod)
{if(!this.BaseClassMethod.call(this))
return false;}
if(this.m_sPublication&&(this.m_sPublication!=""))
return true;}
function OwcContentPublicationThumbList_contentBuildParams(oParams,bExcludeLayoutParams)
{if(this.BaseClassMethod)
this.BaseClassMethod.call(this,oParams);this.buildRefParams(oParams);}
function OwcContentPublicationThumbList_buildRefParams(oParams)
{if(this.m_sPublication&&(this.m_sPublication!=""))
oParams.addParam(OwcUrlParam_Publication,this.m_sPublication,true);if(this.m_sFromDate&&(this.m_sFromDate!=""))
oParams.addParam(OwcUrlParam_FromDate,this.m_sFromDate,true);if(this.m_sToDate&&(this.m_sToDate!=""))
oParams.addParam(OwcUrlParam_ToDate,this.m_sToDate,true);if(this.m_nDayOfWeek&&(this.m_nDayOfWeek>=0)&&(this.m_nDayOfWeek<=7))
oParams.addParam(OwcUrlParam_DayOfWeek,String(this.m_nDayOfWeek),true);if(this.m_sSection&&(this.m_sSection!=""))
oParams.addParam(OwcUrlParam_Section,this.m_sSection,true);if(this.m_sPageCriterion&&(this.m_sPageCriterion!=""))
oParams.addParam(OwcUrlParam_PageCriterion,this.m_sPageCriterion,true);if(this.m_sNextAnchorPage&&(this.m_sNextAnchorPage!=""))
oParams.addParam(OwcUrlParam_NextAnchorPage,this.m_sNextAnchorPage,true);if(this.m_nPagesCount&&(this.m_nPagesCount>0))
oParams.addParam(OwcUrlParam_PagesCount,String(this.m_nPagesCount),true);}
function OwcContentPublicationThumbList_parseData(oHtmlElement)
{var sPublication=DHTML.getAttr(oHtmlElement,OwcUrlParam_Publication);if(sPublication)
this.m_sPublication=sPublication;var sFromDate=DHTML.getAttr(oHtmlElement,OwcUrlParam_FromDate);if(sFromDate)
this.m_sFromDate=sFromDate;var sToDate=DHTML.getAttr(oHtmlElement,OwcUrlParam_ToDate);if(sToDate)
this.m_sToDate=sToDate;var nDayOfWeek=DHTML.getAttrNumber(oHtmlElement,OwcUrlParam_DayOfWeek,0);if(nDayOfWeek)
this.m_nDayOfWeek=nDayOfWeek;var sSection=DHTML.getAttr(oHtmlElement,OwcUrlParam_Section);if(sSection)
this.m_sSection=sSection;var sPageCriterion=DHTML.getAttr(oHtmlElement,OwcUrlParam_PageCriterion);if(sPageCriterion)
this.m_sPageCriterion=sPageCriterion;var sNextAnchorPage=DHTML.getAttr(oHtmlElement,OwcUrlParam_NextAnchorPage);if(sNextAnchorPage)
this.m_sNextAnchorPage=sNextAnchorPage;this.parsePaginationData(oHtmlElement);}
JScript.Type.RegisterClass("Olive.ContentItem.PublicationThumbList",Olive.ContentItem.PublicationThumbList,Olive.ContentItem);}
if(!Olive.ContentItem.YearRange)
{Olive.ContentItem.YearRange=function OwcContentYearRange()
{};Olive.ContentItem.YearRange.ApplyPrototype=function OwcContentYearRange_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_YearRange);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_YearRange);JScript.Type.DeclareField(rObject,"m_sPublication",null);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentYearRange_contentCanLoad);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentYearRange_contentBuildParams);JScript.Type.ReplaceMethod(rObject,"buildRefParams",OwcContentYearRange_buildRefParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentYearRange_parseData);JScript.Type.DeclareMethod(rObject,"getPublication",OwcContentYearRange_getPublication);};function OwcContentYearRange_contentCanLoad()
{return true;}
function OwcContentYearRange_contentBuildParams(oParams,bExcludeLayoutParams)
{if(this.BaseClassMethod)
this.BaseClassMethod.call(this,oParams);this.buildRefParams(oParams);}
function OwcContentYearRange_buildRefParams(oParams)
{if(this.m_sPublication&&(this.m_sPublication!=""))
oParams.addParam(OwcUrlParam_Publication,this.m_sPublication,true);}
function OwcContentYearRange_parseData(oHtmlElement)
{var sPublication=DHTML.getAttr(oHtmlElement,OwcUrlParam_Publication);if(sPublication)
this.m_sPublication=sPublication;}
function OwcContentYearRange_getPublication()
{return this.m_sPublication;}
JScript.Type.RegisterClass("Olive.ContentItem.YearRange",Olive.ContentItem.YearRange,Olive.ContentItem);}
if(!Olive.ContentItem.MonthRange)
{Olive.ContentItem.MonthRange=function OwcContentMonthRange()
{};Olive.ContentItem.MonthRange.ApplyPrototype=function OwcContentMonthRange_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_MonthRange);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_MonthRange);JScript.Type.DeclareField(rObject,"m_sPublication",null);JScript.Type.DeclareField(rObject,"m_sYear",null);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentMonthRange_contentCanLoad);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentMonthRange_contentBuildParams);JScript.Type.ReplaceMethod(rObject,"buildRefParams",OwcContentMonthRange_buildRefParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentMonthRange_parseData);JScript.Type.DeclareMethod(rObject,"getPublication",OwcContentMonthRange_getPublication);JScript.Type.DeclareMethod(rObject,"getFromYear",OwcContentMonthRange_getFromYear);JScript.Type.DeclareMethod(rObject,"getToYear",OwcContentMonthRange_getToYear);JScript.Type.DeclareMethod(rObject,"getYear",OwcContentMonthRange_getYear);};function OwcContentMonthRange_contentCanLoad()
{return true;}
function OwcContentMonthRange_contentBuildParams(oParams,bExcludeLayoutParams)
{if(this.BaseClassMethod)
this.BaseClassMethod.call(this,oParams);this.buildRefParams(oParams);}
function OwcContentMonthRange_buildRefParams(oParams)
{if(this.m_sPublication&&(this.m_sPublication!=""))
oParams.addParam(OwcUrlParam_Publication,this.m_sPublication,true);if(this.m_sYear&&(this.m_sYear!=""))
oParams.addParam(OwcUrlParam_Year,this.m_sYear,true);}
function OwcContentMonthRange_parseData(oHtmlElement)
{var sPublication=DHTML.getAttr(oHtmlElement,OwcUrlParam_Publication);if(sPublication)
this.m_sPublication=sPublication;var sYear=DHTML.getAttr(oHtmlElement,OwcUrlParam_Year);if(sYear)
this.m_sYear=sYear;}
function OwcContentMonthRange_getPublication()
{return this.m_sPublication;}
function OwcContentMonthRange_getFromYear()
{return this.m_sYear;}
function OwcContentMonthRange_getToYear()
{return this.m_sYear;}
function OwcContentMonthRange_getYear()
{return this.m_sYear;}
JScript.Type.RegisterClass("Olive.ContentItem.MonthRange",Olive.ContentItem.MonthRange,Olive.ContentItem);}
if(!Olive.ContentItem.PDFDownload)
{Olive.ContentItem.PDFDownload=function OwcContentPDFDownload()
{};Olive.ContentItem.PDFDownload.ApplyPrototype=function OwcContentPDFDownload_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_PDFDownload);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_PDFDownload);OwcContentEntity_ApplyPrototype_DataMembers(rObject);JScript.Type.DeclareField(rObject,"m_sItemType",OwcPDFDownloadItem_Doc);JScript.Type.DeclareField(rObject,"m_bPhysicalPath",null);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentPDFDownload_contentBuildParams);JScript.Type.OverrideMethod(rObject,"buildRefParams",OwcContentPDFDownload_buildRefParams);JScript.Type.OverrideMethod(rObject,"parseRefParams",OwcContentPage_parseRefParams);};function OwcContentPDFDownload_contentBuildParams(oParams,bExcludeLayoutParams)
{OwcContentPage_contentBuildParams.apply(this,arguments);OwcContentPDFDownload_buildRefParams.apply(this,arguments);}
function OwcContentPDFDownload_buildRefParams(oParams)
{OwcContentPage_buildRefParams.apply(this,arguments);if(this.m_sItemType!=undefined)
oParams.addParam(OwcUrlParam_PDFDownloadItem,this.m_sItemType,true);if(this.m_bPhysicalPath!=null)
oParams.addParam(OwcUrlParam_PhysicalPath,this.m_bPhysicalPath,true);if(this.m_sContentSrc!=undefined)
oParams.addParam(OwcUrlParam_ContentSrc,this.m_sContentSrc,true);}
function OwcContentPDFDownload_parseRefParams(oParams)
{OwcContentPage_parseRefParams.apply(this,arguments);var sItemType=oParams.getParam(OwcUrlParam_PDFDownloadItem,0);if(sItemType!=null)
this.m_sItemType=sItemType;var sPhysicalPath=oParams.getParam(OwcUrlParam_PhysicalPath,0);if(sPhysicalPath!=null)
this.m_bPhysicalPath=String_parseBoolean(sPhysicalPath);}
JScript.Type.RegisterClass("Olive.ContentItem.PDFDownload",Olive.ContentItem.PDFDownload,Olive.ContentItem);}
var OwcCmd_SetTemplateId="SetTemplateId";if(!Olive.Controls.IDataBound)
{Olive.Controls.IDataBound=new Interface("Olive.Controls.IDataBound");Olive.Controls.IDataBound.RequestStatus={None:0x00000000,WaitingForResponse:0x00000001};Olive.Controls.IDataBound.Implement=function OwcIDataBound_Implement(rObject,bDynamic)
{if(!Olive.Controls.IDataBound.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"DataProviderUrl","");JScript.Type.DeclareField(rObject,"m_customParameters",null);JScript.Type.DeclareField(rObject,"m_oContentItem",null);JScript.Type.DeclareField(rObject,"m_oServerRequest",null);JScript.Type.DeclareField(rObject,"m_sContentCmd",null);JScript.Type.DeclareField(rObject,"m_sTemplateId","");if(typeof(rObject.m_bDisableContentAutoLoad)=="undefined")
rObject.m_bDisableContentAutoLoad=false;JScript.Type.DeclareField(rObject,"m_bClearHtmlOnRequestSent",true);JScript.Type.OverrideMethod(rObject,"parseControlHtmlAttr",OwcIDataBound_parseControlHtmlAttr);JScript.Type.OverrideMethod(rObject,"parseControlData",OwcIDataBound_parseControlData);JScript.Type.OverrideMethod(rObject,"bindHtmlElement",OwcIDataBound_bindHtmlElement);JScript.Type.OverrideMethod(rObject,"initControl",OwcIDataBound_initControl);JScript.Type.OverrideMethod(rObject,"termControl",OwcIDataBound_terminate);JScript.Type.DeclareMethod(rObject,"buildRequestUrl",OwcIDataBound_buildRequestUrl);JScript.Type.DeclareMethod(rObject,"addRequestTypeParams",OwcIDataBound_addRequestTypeParams);JScript.Type.DeclareMethod(rObject,"getDataProviderUrl",OwcIDataBound_getDataProviderUrl);JScript.Type.DeclareMethod(rObject,"requestData",OwcIDataBound_requestData);JScript.Type.DeclareMethod(rObject,"sendRequestRaw",OwcIDataBound_sendRequestRaw);JScript.Type.DeclareMethod(rObject,"setTemplateId",OwcIDataBound_setTemplateId);JScript.Type.DeclareMethod(rObject,"_updateSetTemplateIdCmdUiState",OwcIDataBound_updateSetTemplateIdCmdUiState);JScript.Type.DeclareMethod(rObject,"setLoadingDataMessage",OwcIDataBound_setLoadingDataMessage);JScript.Type.DeclareMethod(rObject,"getRequestStatus",OwcIDataBound_getRequestStatus);JScript.Type.DeclareMethod(rObject,"getErrorMsgCode",OwcIDataBound_getErrorMsgCode);JScript.Type.DeclareMethod(rObject,"addCustomParameter",OwcIDataBound_addCustomParameter);JScript.Type.DeclareMethod(rObject,"removeCustomParameter",OwcIDataBound_removeCustomParameter);JScript.Type.DeclareMethod(rObject,"processResponse",OwcIDataBound_processResponse);JScript.Type.DeclareMethod(rObject,"parseResponseText",OwcIDataBound_parseResponseText);JScript.Type.DeclareMethod(rObject,"processResponseData",OwcIDataBound_processResponseData);JScript.Type.DeclareMethod(rObject,"processResponseHtml",OwcIDataBound_processResponseHtml);JScript.Type.DeclareMethod(rObject,"postHtmlContentPaste");JScript.Type.DeclareMethod(rObject,"contentBuildParams",OwcIDataBound_contentBuildParams);JScript.Type.OverrideMethod(rObject,"contentBuildControlParams",OwcIDataBound_contentBuildControlParams);JScript.Type.DeclareMethod(rObject,"getContentItem",OwcIDataBound_getContentItem);JScript.Type.DeclareMethod(rObject,"getContentItemOfType",OwcIDataBound_getContentItemOfType);JScript.Type.DeclareMethod(rObject,"copyAncestorContentItem",OwcIDataBound_copyAncestorContentItem);JScript.Type.DeclareMethod(rObject,"contentCanLoadItem",OwcIDataBound_contentCanLoadItem);JScript.Type.DeclareMethod(rObject,"contentCanLoad",OwcIDataBound_contentCanLoad);JScript.Type.DeclareMethod(rObject,"contentLoad",OwcIDataBound_contentLoad);JScript.Type.DeclareMethod(rObject,"contentLoadItem",OwcIDataBound_contentLoadItem);Olive.CmdTarget.RegisterCommand(rObject,OwcCmd_SetTemplateId,"setTemplateId","_updateSetTemplateIdCmdUiState");rObject.registerOwcEventsClass2("sendingRequest","onSendingRequest",true);rObject.registerOwcEventsClass2("dataReceived","onDataReceived",true);rObject.registerOwcEventsClass2("dataProcessed","onDataProcessed",true);rObject.registerOwcEventsClass2("contentItemClicked","onContentItemClicked",true);rObject.registerOwcEventsClass2("contentItemDblClicked","onContentItemDblClicked",true);rObject.registerOwcEventsClass2("contentItemRightClicked","onContentItemRightClicked",true);rObject.registerOwcEventsClass2("contentItemActiveStateChanged","onContentItemActiveStateChanged",true);rObject.registerOwcEventsClass2("contentSelectionChanged","onContentSelectionChanged",true);rObject.registerOwcEventsClass2("folderTreeNameReceived","onFolderTreeNameReceived",true);};Olive.Controls.IDataBound.getHtmlContentTargetNull=function OwcIDataBound_getHtmlContentTargetNull()
{return null;};Olive.Controls.IDataBound.getContentItem=function OwcIDataBound_getContentItem(oControl)
{var oRefControl=oControl;while(oRefControl)
{if(Olive.Controls.IDataBound.IsImplementedBy(oRefControl))
return oRefControl.getContentItem();oRefControl=oRefControl.Parent;}
if(!oRefControl)
return null;};function OwcIDataBound_getContentItemOfType(sContentItemType,bDeleteAncestorOfThatType)
{sContentItemType=sContentItemType.toLowerCase();var oContentItem=this.getContentItem();var oPriorDataItem=null;for(var oDataItem=oContentItem;oDataItem;oDataItem=oDataItem.getParentItem())
{var sDataType=oDataItem.getDataType().toLowerCase();if(sDataType==sContentItemType)
{if(bDeleteAncestorOfThatType&&oPriorDataItem)
{oPriorDataItem.m_oParentItem=null;}
return oDataItem;}
oPriorDataItem=oDataItem;}
return null;}
function OwcIDataBound_copyAncestorContentItem(oContentControl,sDataObjectType)
{if(!oContentControl||!sDataObjectType)
return false;var bRet=false;var oAncestorContentItem=oContentControl.getContentItemOfType(sDataObjectType);if(oAncestorContentItem)
{var oNewContentItem=Olive.ContentItem.Clone(oAncestorContentItem);this.m_oContentItem=oNewContentItem;bRet=true;}
return bRet;}
function OwcIDataBound_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var sContentCmd=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.ContentCmd);if(sContentCmd)
this.m_sContentCmd=sContentCmd;var sTemplateId=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.TemplateId);if(sTemplateId)
this.m_sTemplateId=sTemplateId;var bAutoLoad=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.AutoLoad,!this.m_bDisableContentAutoLoad);this.m_bDisableContentAutoLoad=!bAutoLoad;this.m_bClearHtmlOnRequestSent=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.ClearHtmlOnRequestSent,this.m_bClearHtmlOnRequestSent);}
function OwcIDataBound_bindHtmlElement(oHtmlElement)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);DHTML.attachEvent(oHtmlElement,"click",OwcIDataBound_Html_Content_onClick);DHTML.attachEvent(oHtmlElement,"contextmenu",OwcIDataBound_Html_Content_onRightClick);}
function OwcIDataBound_initControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(!this.m_bDisableContentAutoLoad)
this.contentLoad();}
function OwcIDataBound_terminate()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_oServerRequest!=null)
{this.m_oServerRequest.abort();this.m_oServerRequest=null;}}
function OwcIDataBound_setTemplateId(sTemplateId,bDoNotLoadContent)
{if(sTemplateId!=this.m_sTemplateId)
{this.m_sTemplateId=sTemplateId;if(!bDoNotLoadContent&&this.contentLoad)
this.contentLoad();}}
function OwcIDataBound_updateSetTemplateIdCmdUiState(oCmdUiState)
{var bEnabled=(oCmdUiState.commandParams==this.m_sTemplateId);oCmdUiState.checkCommand(bEnabled);oCmdUiState.enableCommand(true);return true;}
function OwcIDataBound_buildRequestUrl(oParams)
{var oQueryString;if(typeof(oParams)=="string")
{oQueryString=new QueryString();oQueryString.parseUrlQuery(oParams);}
else
oQueryString=oParams;this.addRequestTypeParams(oQueryString);return(this.getDataProviderUrl()+"?"+oQueryString.getQueryString());}
function OwcIDataBound_addRequestTypeParams(oParams)
{oParams.addParam("Type","Content");if(this.controlType)
oParams.addParam("For",this.controlType);}
function OwcIDataBound_getDataProviderUrl()
{var sDataProviderUrl=OwcGlobals.DefaultDataProvider;if(this.DataProviderUrl)
sDataProviderUrl=this.DataProviderUrl;else if(this.WebApplication)
sDataProviderUrl=this.WebApplication.DataProviderUrl;return sDataProviderUrl;}
function OwcIDataBound_requestData(oParams,oHtmlContentTarget)
{var sUrl=this.buildRequestUrl(oParams);this.sendRequestRaw(oHtmlContentTarget,sUrl);}
function OwcIDataBound_sendRequestRaw(oHtmlContentTarget,sUrl,oPostData,sMethod,bAsync)
{if(!oHtmlContentTarget)
oHtmlContentTarget=this.getHtmlContentTarget();if(oHtmlContentTarget&&this.m_bClearHtmlOnRequestSent)
{this.clearControls(oHtmlContentTarget);if(this.setLoadingDataMessage)
this.setLoadingDataMessage(oHtmlContentTarget);}
if(this.m_oServerRequest!=null)
this.m_oServerRequest.abort();var oRequest=Olive.XHTTP.CreateRequest();oRequest.m_OwcControl=this;oRequest.onDataReceived=Olive.Controls.IDataBound.Request_onDataReceived;oRequest.onError=Olive.Controls.IDataBound.Request_onDataError;oRequest.sErrorMessage="";oRequest.nErrorNumber=-1;oRequest.m_oHtmlContentTarget=oHtmlContentTarget;oRequest.m_bBindControls=false;this.m_oServerRequest=oRequest;if(this.WebApplication&&this.WebApplication.hookSendRequest)
this.WebApplication.hookSendRequest(oRequest);var oEvent=this.createOwcEventObject("sendingRequest");oEvent.Request=oRequest;this.fireOwcEvent(oEvent);var bCancelDefaultAction=oEvent.cancelDefaultAction;Object_Destroy(oEvent);if(bCancelDefaultAction)
return;oRequest.load(sUrl,sMethod,bAsync,oPostData);}
function OwcIDataBound_setLoadingDataMessage(oHtmlContentTarget)
{var sMsg=this.getResString("Downloading");this.clearContent("<span><i>"+sMsg+"</i></span>",oHtmlContentTarget);}
function OwcIDataBound_getRequestStatus()
{if(this.m_oServerRequest!=null)
return Olive.Controls.IDataBound.RequestStatus.WaitingForResponse;else
return Olive.Controls.IDataBound.RequestStatus.None;}
Olive.Controls.IDataBound.Request_onDataReceived=function OwcIDataBound_Request_onDataReceived()
{if(this.m_OwcControl.processResponse)
this.m_OwcControl.processResponse(this);this.m_OwcControl=null;this.m_oHtmlContentTarget=null;this.DataContent=null;this.HtmlContent=null;this.m_oServerRequest=null;};Olive.Controls.IDataBound.Request_onDataError=function OwcIDataBound_onDataError()
{this.m_OwcControl.getErrorMsgCode(this);if(this.m_oHtmlContentTarget&&this.nErrorNumber==Olive.Errors.Code.LoadDataFailed)
this.m_OwcControl.clearContent("<b style='color:red'>"+this.sErrorMessage+"</b>",this.m_oHtmlContentTarget);else
{var oError=Olive.Errors.createError(this.nErrorNumber,this.sErrorMessage);oError.Request=this;this.m_OwcControl.reportError(oError);}
this.m_OwcControl=null;this.m_oServerRequest=null;};function OwcIDataBound_getErrorMsgCode(oRequest)
{if(oRequest.sErrorMessage)
{var msgErrCode=oRequest.getResponsePart("<err><code>","</code>",oRequest.sErrorMessage);var msgErrDesc=oRequest.getResponsePart("</code><description>","</description>",oRequest.sErrorMessage);if(msgErrCode==Olive.Errors.Code.AuthenticationFailed)
{var loginUrl=this.WebApplication.getPreference("login-url",false);oRequest.sErrorMessage="Error "+msgErrCode+": "+msgErrDesc;alert(oRequest.sErrorMessage);if(loginUrl)
window.top.location=loginUrl;}}}
function OwcIDataBound_processResponse(oRequest)
{var sResponseText=oRequest.getResponseText();oRequest.sErrorMessage=oRequest.getResponsePart("<Error><![CDATA[","]]></Error>",sResponseText);if(oRequest.sErrorMessage)
oRequest.nErrorNumber=Olive.Errors.Code.LoadDataFailed;var parseRes=this.parseResponseText(oRequest);var oEvent=this.createOwcEventObject("dataReceived");oEvent.Request=oRequest;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);if(!parseRes)
return;if(oRequest.DataContent)
this.processResponseData(oRequest);this.processResponseHtml(oRequest);var oEvent=this.createOwcEventObject("dataProcessed");if(this.controlType)
oEvent.curObjectType=this.controlType;oEvent.Request=oRequest;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcIDataBound_parseResponseText(oRequest)
{if(oRequest.sErrorMessage)
{oRequest.onError();return false;}
var sResponseText=oRequest.getResponseText();oRequest.DataContent=oRequest.getResponsePart("<OwcData><![CDATA[","]]></OwcData>",sResponseText);var reNamespace=new RegExp(" xmlns:owc=\"[^\"]*\"","gi");var sHtmlContent=oRequest.getResponsePart("<OwcHtml>","</OwcHtml>",sResponseText);if(sHtmlContent)
{sHtmlContent=sHtmlContent.replace(reNamespace,"");sHtmlContent=sHtmlContent.replace(/\xC2\xA0/g,"&nbsp;");}
oRequest.HtmlContent=sHtmlContent;var sBindControls=oRequest.getResponsePart("<Bind>","</Bind>",sResponseText);if(sBindControls)
oRequest.m_bBindControls=String_parseBoolean(sBindControls);return true;}
function OwcIDataBound_processResponseData(oRequest)
{}
function OwcIDataBound_processResponseHtml(oRequest)
{var oHtmlContentElement=oRequest.m_oHtmlContentTarget;if(!oHtmlContentElement)
return;this.pasteContent(oRequest.HtmlContent,oHtmlContentElement,oRequest);}
function OwcIDataBound_Html_Content_onClick(oEvent)
{if(isCtrlKeyPressed(oEvent)||isMetaKeyPressed(oEvent))
return;var oControl=OwcGetControlFromHtmlElem(this);if(!oControl)
return;var oContentItem=oControl.getContentItem();if(oContentItem)
{stopEventBubbling(oEvent);var oEvent=oControl.createOwcEventObject("contentItemClicked");oEvent.OlvContentItem=oContentItem;this.m_OwcControl.fireOwcEvent(oEvent);Object_Destroy(oEvent);if(oControl.m_sContentCmd)
oControl.launchCommand(oControl.m_sContentCmd,oContentItem);}}
function OwcIDataBound_Html_Content_onRightClick(oEvent)
{var oControl=OwcGetControlFromHtmlElem(this);if(!oControl)
return;var oContentItem=oControl.getContentItem();if(oContentItem)
{var bDisableDefaultMenu=false;var oEventNew=oControl.createOwcEventObject("contentItemRightClicked");oEventNew.OlvContentItem=oContentItem;oEventNew.disableDefaultContextMenu=false;oControl.fireOwcEvent(oEventNew);bDisableDefaultMenu=oEventNew.disableDefaultContextMenu;Object_Destroy(oEventNew);if(bDisableDefaultMenu)
{stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);}}}
function OwcIDataBound_parseControlData(oDataHtmlObject)
{if(this.BaseClassMethod&&this.BaseClassMethod!=OwcIDataBound_parseControlData)
{var bRetVal=this.BaseClassMethod.apply(this,arguments);if(bRetVal)
return true;}
if(!oDataHtmlObject)
return false;var sType=DHTML.getAttr(oDataHtmlObject,"type");if(!sType)
return false;var bAppendToExisting=String_parseBoolean(DHTML.getAttr(oDataHtmlObject,"append-to-content-item"));if(!this.m_oContentItem||!bAppendToExisting)
{this.m_oContentItem=null;var oParentContentItem=this.getContentItem();var oContentItem=null;switch(sType.toLowerCase())
{case OwcContentItem_Document:oContentItem=new Olive.ContentItem.Document();break;case OwcContentItem_Entity:oContentItem=new Olive.ContentItem.Entity();break;case OwcContentItem_Primitive:oContentItem=new Olive.ContentItem.Primitive();break;case OwcContentItem_SearchResult:oContentItem=new Olive.ContentItem.SearchResult();break;case OwcContentItem_Page:oContentItem=new Olive.ContentItem.Page();break;case OwcContentItem_Tree:oContentItem=new Olive.ContentItem.FolderTree();break;case OwcContentItem_Folder:oContentItem=new Olive.ContentItem.Folder();break;case OwcContentItem_TocEntry:oContentItem=new Olive.ContentItem.TocEntry();break;case OwcContentItem_Mail:oContentItem=new Olive.ContentItem.Mail();break;case OwcContentItem_Print:oContentItem=new Olive.ContentItem.Print();break;case OwcContentItem_Link:oContentItem=new Olive.ContentItem.Link();break;case OwcContentItem_DocumentThumbList:oContentItem=new Olive.ContentItem.DocumentThumbList();break;case OwcContentItem_PublicationThumbList:oContentItem=new Olive.ContentItem.PublicationThumbList();break;case OwcContentItem_YearRange:oContentItem=new Olive.ContentItem.YearRange();break;case OwcContentItem_MonthRange:oContentItem=new Olive.ContentItem.MonthRange();break;case OwcContentItem_MostPopular:oContentItem=new Olive.ContentItem.MostPopular();break;}
if(oContentItem)
oContentItem.setParentItem(oParentContentItem);this.m_oContentItem=oContentItem;}
if(!this.m_oContentItem)
return false;this.m_oContentItem.parseData(oDataHtmlObject);return true;}
function OwcIDataBound_getContentItem()
{if(this.m_oContentItem)
return this.m_oContentItem;for(var oParent=this.Parent;oParent;oParent=oParent.Parent)
{if(oParent.getContentItem)
break;}
if(oParent)
return oParent.getContentItem();return null;}
function OwcIDataBound_contentCanLoadItem(oContentItem)
{if(oContentItem&&oContentItem.contentCanLoad)
return oContentItem.contentCanLoad();return false;}
function OwcIDataBound_contentLoadItem(oContentItem,bClone)
{if(!this.contentCanLoadItem(oContentItem))
return false;this.m_oContentItem=(bClone?Object_Clone(oContentItem):oContentItem);this.contentLoad();}
function OwcIDataBound_contentCanLoad()
{return this.contentCanLoadItem(this.getContentItem());}
function OwcIDataBound_addCustomParameter(name,value){if(!this.m_customParameters)
this.m_customParameters={};this.m_customParameters[name]=value;}
function OwcIDataBound_removeCustomParameter(name){if(this.m_customParameters)
delete this.m_customParameters[name];}
function OwcIDataBound_contentBuildParams(oParams)
{var arrContentItems=[];var oContentItem=this.getContentItem();if(oContentItem&&oContentItem.m_custom){for(var name in oContentItem.m_custom){oParams.addParam(name,oContentItem.m_custom[name],false);}}
while(oContentItem)
{arrContentItems.push(oContentItem);oContentItem=oContentItem.getParentItem();}
while(arrContentItems.length>0)
{oContentItem=arrContentItems.pop();if(oContentItem&&oContentItem.contentBuildParams)
{oContentItem.contentBuildParams(oParams,arrContentItems.length>0);}}}
function OwcIDataBound_contentBuildControlParams(oParams)
{if(this.m_sTemplateId)
oParams.addParam(OwcUrlParam_TemplateId,this.m_sTemplateId,true);if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcIDataBound_contentLoad()
{if(!this.contentCanLoad())
return;var oParams=new QueryString();this.contentBuildParams(oParams);if(this.contentBuildControlParams)
this.contentBuildControlParams(oParams);if(this.m_customParameters){for(var name in this.m_customParameters){oParams.addParam(name,this.m_customParameters[name],false);}}
if(this.WebApplication)
this.WebApplication.updateRequestParams(oParams);this.requestData(oParams);}}
if(!Olive.Data.SortField)
{Olive.Data.SortField=function OwcSortField(sField,bAscending)
{this.SortField=(sField?sField:"");this.SortAscending=((bAscending==undefined)?true:bAscending);};Olive.Data.SortField.ApplyPrototype=function OwcSortField_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"SortField","");JScript.Type.DeclareField(rObject,"SortAscending",true);};JScript.Type.RegisterClass("Olive.Data.SortField",Olive.Data.SortField);}
if(!Olive.Data.SortOptions)
{Olive.Data.SortOptions=function OwcSortOptions()
{};Olive.Data.SortOptions.ApplyPrototype=function OwcSortOptions_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"m_arrSortFields",null);JScript.Type.DeclareMethod(rObject,"isEmpty",OwcSortOptions_isEmpty);JScript.Type.DeclareMethod(rObject,"clear",OwcSortOptions_clear);JScript.Type.DeclareMethod(rObject,"addSortField",OwcSortOptions_addSortField);JScript.Type.DeclareMethod(rObject,"contentBuildParams",OwcSortOptions_contentBuildParams);JScript.Type.DeclareMethod(rObject,"parse",OwcSortOptions_parse);JScript.Type.ReplaceMethod(rObject,"toString",OwcSortOptions_toString);JScript.Type.DeclareMethod(rObject,"copyFrom",OwcSortOptions_copyFrom);};function OwcSortOptions_isEmpty()
{return(!this.m_arrSortFields||this.m_arrSortFields.length==0);}
function OwcSortOptions_clear()
{this.m_arrSortFields=null;}
function OwcSortOptions_addSortField(sField,bAscending)
{var oField=new Olive.Data.SortField(sField,bAscending);if(!this.m_arrSortFields)
this.m_arrSortFields=new Array();Array_appendItem(this.m_arrSortFields,oField);}
function OwcSortOptions_contentBuildParams(oParams)
{var sSortTerms=this.toString();if(sSortTerms&&sSortTerms!="")
oParams.addParam(OwcUrlParam_ContentSort,sSortTerms);}
function OwcSortOptions_parse(sSortOptions)
{this.clear();if(!sSortOptions||sSortOptions=="")
return;var arrSortFields=sSortOptions.split("^");if(arrSortFields.length>0)
{for(var iField=0;iField<arrSortFields.length;++iField)
{var sFieldData=arrSortFields[iField];var arrFieldData=sFieldData.split(";");if(arrFieldData.length<1)
continue;var sFieldName=arrFieldData[0];var bAscending=true;if(arrFieldData.length>1)
bAscending=(arrFieldData[1].toLowerCase()=="asc");this.addSortField(sFieldName,bAscending);}}}
function OwcSortOptions_toString()
{if(!this.m_arrSortFields||this.m_arrSortFields.length<1)
return"";var sSortTerms="";for(var iField=0;iField<this.m_arrSortFields.length;++iField)
{var oSortField=this.m_arrSortFields[iField];if(iField>0)
sSortTerms+="^";sSortTerms+=oSortField.SortField+";"+
(oSortField.SortAscending?"asc":"desc");}
return sSortTerms;}
function OwcSortOptions_copyFrom(oSrc)
{if(!oSrc||!oSrc.m_arrSortFields)
return;this.m_arrSortFields=new Array();for(var iField=0;iField<oSrc.m_arrSortFields.length;++iField)
{var oSrcField=oSrc.m_arrSortFields[iField];var oNewField=new Olive.Data.SortField(oSrcField.SortField,oSrcField.SortAscending);this.m_arrSortFields.push(oNewField);}}
JScript.Type.RegisterClass("Olive.Data.SortOptions",Olive.Data.SortOptions);}
if(!Olive.ContentItem.PerformanceReport)
{Olive.ContentItem.PerformanceReport=function OwcPerformanceReport()
{};Olive.ContentItem.PerformanceReport.ApplyPrototype=function OwcPerformanceReport_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_PerformanceReport);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_PerformanceReport);JScript.Type.DeclareField(rObject,"m_nAppLoadingTime",null);JScript.Type.OverrideMethod(rObject,"contentCanLoad",OwcContentPerformanceReport_contentCanLoad);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentPerformanceReport_contentBuildParams);JScript.Type.ReplaceMethod(rObject,"buildRefParams",OwcContentPerformanceReport_buildRefParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentPerformanceReport_parseData);};function OwcContentPerformanceReport_contentCanLoad()
{return true;}
function OwcContentPerformanceReport_contentBuildParams(oParams,bExcludeLayoutParams)
{if(this.BaseClassMethod)
this.BaseClassMethod.call(this,oParams);this.buildRefParams(oParams);}
function OwcContentPerformanceReport_buildRefParams(oParams)
{if(this.m_nAppLoadingTime)
oParams.addParam(OwcPerformanceReportItem_AppLoadingTime,this.m_nAppLoadingTime,true);}
function OwcContentPerformanceReport_parseData(oHtmlElement)
{var nAppLoadingTime=DHTML.getAttr(oHtmlElement,OwcPerformanceReportItem_AppLoadingTime);if(nAppLoadingTime)
this.m_nAppLoadingTime=nAppLoadingTime;}
JScript.Type.RegisterClass("Olive.ContentItem.PerformanceReport",Olive.ContentItem.PerformanceReport,Olive.ContentItem);}
if(!Olive.ContentItem.MostPopular)
{Olive.ContentItem.MostPopular=function OwcContentMostPopular()
{};Olive.ContentItem.MostPopular.ApplyPrototype=function OwcContentMostPopular_ApplyPrototype(rObject)
{JScript.Type.DeclareField(rObject,"DataObjectType",OwcContentItem_MostPopular);JScript.Type.DeclareField(rObject,"m_sContentSrc",OwcContentSrc_MostPopular);JScript.Type.DeclareField(rObject,"m_nTocSearchHits",null);JScript.Type.DeclareField(rObject,"m_sPublicationDescription",null);JScript.Type.OverrideMethod(rObject,"contentBuildParams",OwcContentMostPopular_contentBuildParams);JScript.Type.ReplaceMethod(rObject,"parseData",OwcContentMostPopular_parseData);JScript.Type.ReplaceMethod(rObject,"getDocHRef",OwcContentItemCommon_getDocHRef);JScript.Type.ReplaceMethod(rObject,"isSameDocHRef",OwcContentMostPopular_isSameDocHRef);JScript.Type.ReplaceMethod(rObject,"getPublicationDescription",OwcContentItemCommon_getPublicationDescription);};function OwcContentMostPopular_contentBuildParams(oParams,bExcludeLayoutParams)
{OwcContentEntity_contentBuildParams.apply(this,arguments);}
function OwcContentMostPopular_parseData(oHtmlElement)
{OwcContentEntity_parseData.call(this,oHtmlElement);var sPageNo=DHTML.getAttr(oHtmlElement,"page-no");if(sPageNo)
this.m_nPageNo=parseInt(sPageNo,10);this.m_sPrimId=DHTML.getAttr(oHtmlElement,"primitiveid");this.m_sPublicationDescription=DHTML.getAttr(oHtmlElement,"publication-name");var sSearchScore=DHTML.getAttr(oHtmlElement,Olive.Controls.attributes.MostPopularRank);if(sSearchScore)
{var nSearchScore=parseFloat(sSearchScore);if(!isNaN(nSearchScore))
{this.m_nTocSearchHits=nSearchScore;}}}
function OwcContentMostPopular_isSameDocHRef(oContentItem)
{var sDataType=oContentItem.getDataType();switch(sDataType)
{case OwcContentItem_MostPopular:break;case OwcContentItem_TocEntry:var oParentItem=oContentItem.getRootItem();if(oParentItem&&oParentItem.getDataType()==OwcContentItem_MostPopular)
oContentItem=oParentItem;else
return false;break;default:return false;}
var sDocHRef=oContentItem.getDocHRef();return(sDocHRef==this.getDocHRef());}
JScript.Type.RegisterClass("Olive.ContentItem.MostPopular",Olive.ContentItem.MostPopular,Olive.ContentItem.Entity);}
if(!Olive.IBinding)
{Olive.IBinding=new Interface("Olive.IBinding");Olive.IBinding.Implement=function OwcIBinding_Implement(rObject,bDynamic)
{if(!Olive.IBinding.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"BindingSource",null);JScript.Type.DeclareField(rObject,"BindingTarget",null);JScript.Type.DeclareMethod(rObject,"bind",OwcIBinding_bindCommon);JScript.Type.DeclareMethod(rObject,"unbind",OwcIBinding_unbindCommon);JScript.Type.DeclareMethod(rObject,"_bindCommon",OwcIBinding_bindCommon);JScript.Type.DeclareMethod(rObject,"_unbindCommon",OwcIBinding_unbindCommon);}
Olive.IBinding.GetControl=function OwcBinding_GetControl(vControl)
{if(typeof(vControl)=="string")
return OwcGetControl(vControl);else if(typeof(vControl)=="object")
return vControl;return null;}
function OwcIBinding_bindCommon(vContentSrc,vContentTrg,vCheckSrcInterface,vCheckTrgInterface)
{var oContentSrcControl=Olive.IBinding.GetControl(vContentSrc);var oContentTrgControl=Olive.IBinding.GetControl(vContentTrg);if(!oContentSrcControl||!oContentTrgControl)
return false;if(vCheckSrcInterface)
{if(!Interface.IsImplemented(oContentSrcControl,vCheckSrcInterface))
{return false;}
if(!vCheckTrgInterface)
vCheckTrgInterface=vCheckSrcInterface;if(!Interface.IsImplemented(oContentTrgControl,vCheckTrgInterface))
{return false;}}
this.unbind();this.BindingSource=oContentSrcControl;this.BindingTarget=oContentTrgControl;return true;}
function OwcIBinding_unbindCommon()
{this.BindingSource=null;this.BindingTarget=null;}}
if(!Olive.Binding)
{Olive.Binding=function OwcBinding()
{}
JScript.Type.RegisterClass("Olive.Binding",Olive.Binding,Olive.Object,[Olive.IBinding]);}
if(!Olive.Binding.BindContentSource)
{Olive.Binding.BindContentSource=function OwcBindContentSource()
{}
Olive.Binding.BindContentSource.DeclareType=function OwcBindContentSource_DeclareType()
{this.ReplaceMethod("bind",OwcBindContentSource_bind);this.ReplaceMethod("unbind",OwcBindContentSource_unbind);this.DeclareMethod("setPreEventHandlerAction",OwcBindContentSource_setPreEventHandlerAction);this.DeclareMethod("m_sPreEventHandlerAction",null);this.DeclareMethod("_onSrcContentItemClicked",OwcBindContentSource_onSrcContentItemClicked);}
Olive.Binding.BindContentSource.BindControls=function OwcBindContentSource_BindControls(vContentSrc,vContentTrg)
{var oBinding=new Olive.Binding.BindContentSource();if(!oBinding.bind(vContentSrc,vContentTrg))
return null;return oBinding;}
function OwcBindContentSource_bind(vContentSrc,vContentTrg)
{if(!this._bindCommon(vContentSrc,vContentTrg,"Olive.Controls.IDataBound"))
return false;this.BindingSource.attachOwcEventHandler("contentItemClicked","_onSrcContentItemClicked",this,Delegate.Type.Method);return true;}
function OwcBindContentSource_unbind()
{if(this.BindingSource&&this.BindingTarget)
this.BindingSource.detachOwcEventHandler("contentItemClicked","_onSrcContentItemClicked",this,Delegate.Type.Method);this._unbindCommon();}
function OwcBindContentSource_onSrcContentItemClicked(oEvent)
{var bDoLoadTarget=true;if(this.m_sPreEventHandlerAction)
bDoLoadTarget=this.m_sPreEventHandlerAction(oEvent.OlvContentItem,this.BindingSource,this.BindingTarget);if(bDoLoadTarget)
this.BindingTarget.contentLoadItem(oEvent.OlvContentItem,true);}
function OwcBindContentSource_setPreEventHandlerAction(oExternalFunc)
{if(oExternalFunc)
this.m_sPreEventHandlerAction=oExternalFunc;}
JScript.Type.RegisterClass("Olive.Binding.BindContentSource",Olive.Binding.BindContentSource,Olive.Binding);}
if(!Olive.Binding.BindContentToValue)
{Olive.Binding.BindContentToValue=function OwcBindContentToValue()
{}
Olive.Binding.BindContentToValue.DeclareType=function OwcBindContentToValue_DeclareType()
{this.ReplaceMethod("bind",OwcBindContentToValue_bind);this.ReplaceMethod("unbind",OwcBindContentToValue_unbind);this.DeclareMethod("_ExtractValue",OwcBindContentToValue_ExtractValue);this.DeclareMethod("_onSrcContentItemClicked",OwcBindContentToValue_onSrcContentItemClicked);}
function OwcBindContentToValue_ExtractValue()
{}
Olive.Binding.BindContentToValue.BindControls=function OwcBindContentToValue_BindControls(vContentSrc,vContentTrg,oExtractValueFunc)
{var oBinding=new Olive.Binding.BindContentToValue();if(!oBinding.bind(vContentSrc,vContentTrg,oExtractValueFunc))
return null;return oBinding;}
function OwcBindContentToValue_bind(vContentSrc,vContentTrg,oExtractValueFunc)
{if(!oExtractValueFunc)
return false;this._ExtractValue=oExtractValueFunc;if(!this._bindCommon(vContentSrc,vContentTrg,"Olive.Controls.IDataBound","Olive.Controls.IValue"))
return false;this.BindingSource.attachOwcEventHandler("contentItemClicked","_onSrcContentItemClicked",this,Delegate.Type.Method);return true;}
function OwcBindContentToValue_unbind()
{if(this.BindingSource&&this.BindingTarget)
this.BindingSource.detachOwcEventHandler("contentItemClicked","_onSrcContentItemClicked",this,Delegate.Type.Method);this._unbindCommon();}
function OwcBindContentToValue_onSrcContentItemClicked(oEvent)
{if(!this._ExtractValue)
return null;var oValue=this._ExtractValue(oEvent.OlvContentItem,this.BindingSource,this.BindingTarget);if(!oValue)
return null;this.BindingTarget.setValue(oValue);}
JScript.Type.RegisterClass("Olive.Binding.BindContentToValue",Olive.Binding.BindContentToValue,Olive.Binding);}
if(!Olive.Binding.SyncActiveItems)
{Olive.Binding.SyncActiveItems=function OwcBindSyncActiveItems()
{}
Olive.Binding.SyncActiveItems.DeclareType=function OwcBindSyncActiveItems_DeclareType()
{this.ReplaceMethod("bind",OwcBindSyncActiveItems_bind);this.ReplaceMethod("unbind",OwcBindSyncActiveItems_unbind);this.DeclareMethod("_onActiveItemChanged",OwcBindSyncActiveItems_onActiveItemChanged);}
Olive.Binding.SyncActiveItems.BindControls=function OwcBindSyncActiveItems_BindControls(vContentSrc,vContentTrg)
{var oBinding=new Olive.Binding.SyncActiveItems();if(!oBinding.bind(vContentSrc,vContentTrg))
return null;return oBinding;}
function OwcBindSyncActiveItems_bind(vContentSrc,vContentTrg)
{if(!this._bindCommon(vContentSrc,vContentTrg,"Olive.IActiveItem"))
return false;var nActiveItemSrc=this.BindingSource.getActiveItemIndex();var nActiveItemTrg=this.BindingTarget.getActiveItemIndex();if(nActiveItemSrc<0&&nActiveItemTrg>=0)
this.BindingSource.setActiveItem(nActiveItemTrg);else if(nActiveItemSrc>=0&&nActiveItemTrg<0)
this.BindingTarget.setActiveItem(nActiveItemSrc);this.BindingSource.attachOwcEventHandler("itemActivated","_onActiveItemChanged",this,Delegate.Type.Method);this.BindingTarget.attachOwcEventHandler("itemActivated","_onActiveItemChanged",this,Delegate.Type.Method);return true;}
function OwcBindSyncActiveItems_unbind()
{if(this.BindingSource)
this.BindingSource.detachOwcEventHandler("itemActivated","_onActiveItemChanged",this,Delegate.Type.Method);if(this.BindingTarget)
this.BindingTarget.detachOwcEventHandler("itemActivated","_onActiveItemChanged",this,Delegate.Type.Method);this._unbindCommon();}
function OwcBindSyncActiveItems_onActiveItemChanged(oEvent)
{var nItemIndex=oEvent.activeItemIndex;if(oEvent.srcObject==this.BindingSource)
this.BindingTarget.setActiveItem(nItemIndex);else if(oEvent.srcObject==this.BindingTarget)
this.BindingSource.setActiveItem(nItemIndex);}
JScript.Type.RegisterClass("Olive.Binding.SyncActiveItems",Olive.Binding.SyncActiveItems,Olive.Binding);}
if(!Olive.Binding.BindContentsOnValueChanged)
{Olive.Binding.BindContentsOnValueChanged=function OwcBindContentsOnValueChanged()
{}
Olive.Binding.BindContentsOnValueChanged.DeclareType=function OwcBindContentsOnValueChanged_DeclareType()
{this.ReplaceMethod("bind",OwcBindContentsOnValueChanged_bind);this.ReplaceMethod("unbind",OwcBindContentsOnValueChanged_unbind);this.DeclareMethod("_onValueChanged",OwcBindContentsOnValueChanged_onValueChanged);}
Olive.Binding.BindContentsOnValueChanged.BindControls=function OwcBindContentsOnValueChanged_BindControls(vContentSrc,vContentTrg)
{var oBinding=new Olive.Binding.BindContentsOnValueChanged();if(!oBinding.bind(vContentSrc,vContentTrg))
return null;return oBinding;}
function OwcBindContentsOnValueChanged_bind(vContentSrc,vContentTrg)
{if(!this._bindCommon(vContentSrc,vContentTrg,"Olive.Controls.IValue","Olive.Controls.IDataBound"))
return false;this.BindingSource.attachOwcEventHandler("valueChanged","_onValueChanged",this,Delegate.Type.Method);return true;}
function OwcBindContentsOnValueChanged_unbind()
{if(this.BindingSource&&this.BindingTarget)
this.BindingSource.detachOwcEventHandler("valueChanged","_onValueChanged",this,Delegate.Type.Method);this._unbindCommon();}
function OwcBindContentsOnValueChanged_onValueChanged(oEvent)
{var oSrcContenItem=this.BindingSource.getContentItem();var oContentItem=this.BindingTarget.createContentItem(oSrcContenItem,oEvent.newValue);this.BindingTarget.contentLoadItem(oContentItem,true);}
JScript.Type.RegisterClass("Olive.Binding.BindContentsOnValueChanged",Olive.Binding.BindContentsOnValueChanged,Olive.Binding);}
if(!Olive.Binding.BindContentsOnValueChanging)
{Olive.Binding.BindContentsOnValueChanging=function OwcBindContentsOnValueChanging()
{}
Olive.Binding.BindContentsOnValueChanging.DeclareType=function OwcBindContentsOnValueChanging_DeclareType()
{this.OverrideMethod("bind",OwcBindContentsOnValueChanging_bind);this.OverrideMethod("unbind",OwcBindContentsOnValueChanging_unbind);this.DeclareMethod("_onValueChanging",OwcBindContentsOnValueChanging_onValueChanging);}
Olive.Binding.BindContentsOnValueChanging.BindControls=function OwcBindContentsOnValueChanging_BindControls(vContentSrc,vContentTrg)
{var oBinding=new Olive.Binding.BindContentsOnValueChanging();if(!oBinding.bind(vContentSrc,vContentTrg))
return null;return oBinding;}
function OwcBindContentsOnValueChanging_bind(vContentSrc,vContentTrg)
{if(!this._bindCommon(vContentSrc,vContentTrg,"Olive.Controls.IValue","Olive.Controls.IDataBound"))
return false;this.BindingSource.attachOwcEventHandler("valueChanging","_onValueChanging",this,Delegate.Type.Method);return true;}
function OwcBindContentsOnValueChanging_unbind()
{if(this.BindingSource&&this.BindingTarget)
this.BindingSource.detachOwcEventHandler("valueChanging","_onValueChanging",this,Delegate.Type.Method);this._unbindCommon();}
function OwcBindContentsOnValueChanging_onValueChanging(oEvent)
{var oSrcContenItem=this.BindingSource.getContentItem();var oContentItem=this.BindingTarget.createContentItem(oSrcContenItem,oEvent.newValue);this.BindingTarget.contentLoadItem(oContentItem,true);}
JScript.Type.RegisterClass("Olive.Binding.BindContentsOnValueChanging",Olive.Binding.BindContentsOnValueChanging,Olive.Binding);}
if(!Olive.Binding.BindToDocNavigation)
{Olive.Binding.BindToDocNavigation=function OwcBindToDocNavigation()
{}
Olive.Binding.BindToDocNavigation.DeclareType=function OwcBindToDocNavigation_DeclareType()
{this.DeclareField("m_bHighlightICOnly",false);this.DeclareField("m_bUseZoomToPrimitive",false);this.DeclareField("m_sZoom","");this.ReplaceMethod("bind",OwcBindToDocNavigation_bind);this.ReplaceMethod("unbind",OwcBindToDocNavigation_unbind);this.DeclareMethod("setHighlightICOnly",OwcBindToDocNavigation_setHighlightICOnly);this.DeclareMethod("setPreEventHandlerAction",OwcBindToDocNavigation_setPreEventHandlerAction);this.DeclareMethod("useZoomToPrimitive",OwcBindToDocNavigation_useZoomToPrimitive);this.DeclareMethod("m_sPreEventHandlerAction",null);this.DeclareMethod("_onSrcContentItemClicked",OwcBindToDocNavigation_onSrcContentItemClicked);}
Olive.Binding.BindToDocNavigation.BindControls=function OwcBindToDocNavigation_BindControls(vContentSrc,vContentTrg)
{var oBinding=new Olive.Binding.BindToDocNavigation();if(!oBinding.bind(vContentSrc,vContentTrg))
return null;return oBinding;}
function OwcBindToDocNavigation_bind(vContentSrc,vContentTrg)
{if(!this._bindCommon(vContentSrc,vContentTrg,"Olive.Controls.IDataBound","Olive.Controls.IDocViewer"))
return false;this.BindingSource.attachOwcEventHandler("contentItemClicked","_onSrcContentItemClicked",this,Delegate.Type.Method);return true;}
function OwcBindToDocNavigation_unbind()
{if(this.BindingSource&&this.BindingTarget)
this.BindingSource.detachOwcEventHandler("contentItemClicked","_onSrcContentItemClicked",this,Delegate.Type.Method);this._unbindCommon();}
function OwcBindToDocNavigation_onSrcContentItemClicked(oEvent)
{var bDoNavigate=true;if(this.m_sPreEventHandlerAction)
bDoNavigate=this.m_sPreEventHandlerAction(oEvent.OlvContentItem,this.BindingSource,this.BindingTarget);if(!bDoNavigate)
return;var oContentItem=oEvent.OlvContentItem;var sDataType=oContentItem.getDataType();var bNoHighlight=(this.m_bHighlightICOnly&&"boolean"==typeof oContentItem.m_bIsInformationComponent&&!oContentItem.m_bIsInformationComponent);if(this.m_bUseZoomToPrimitive&&!oContentItem.m_bIsSection&&oContentItem.m_sPrimId)
{this.BindingTarget.navigateToPrimitive(oContentItem.getDocHRef(),oContentItem.m_nPageNo,oContentItem.m_sEntityId,oContentItem.m_sPrimId,!bNoHighlight,this.m_sZoom);}
else if(sDataType==OwcContentItem_TocEntry||sDataType==OwcContentItem_Page)
{var nPageNo=oContentItem.m_nPageNo;var sPrimitiveId=oContentItem.m_sPrimId;var sEntityId=oContentItem.m_sEntityId;if(bNoHighlight)
{sPrimitiveId="";sEntityId="";}
this.BindingTarget.gotoPageWithHighlighting(nPageNo,sPrimitiveId,sEntityId,null,null,true);}}
function OwcBindToDocNavigation_setHighlightICOnly(bHighlightICOnly)
{this.m_bHighlightICOnly=bHighlightICOnly;}
function OwcBindToDocNavigation_setPreEventHandlerAction(oExternalFunc)
{if(oExternalFunc)
this.m_sPreEventHandlerAction=oExternalFunc;}
function OwcBindToDocNavigation_useZoomToPrimitive(bUseZoomToPrimitive,sZoom)
{this.m_bUseZoomToPrimitive=!!bUseZoomToPrimitive;this.m_sZoom=sZoom.toLowerCase();}
JScript.Type.RegisterClass("Olive.Binding.BindToDocNavigation",Olive.Binding.BindToDocNavigation,Olive.Binding);}
if(!Olive.Binding.BindSearchResultsToDocViewer)
{Olive.Binding.BindSearchResultsToDocViewer=function OwcBindSearchResultsToDocViewer()
{}
Olive.Binding.BindSearchResultsToDocViewer.DeclareType=function OwcBindSearchResultsToDocViewer_DeclareType()
{this.ReplaceMethod("bind",OwcBindSearchResultsToDocViewer_bind);this.ReplaceMethod("unbind",OwcBindSearchResultsToDocViewer_unbind);this.DeclareMethod("setPreEventHandlerAction",OwcBindSearchResultsToDocViewer_setPreEventHandlerAction);this.DeclareMethod("m_sPreEventHandlerAction",null);this.DeclareMethod("setHighlightFirstPrimitive",OwcBindSearchResultsToDocViewer_setHighlightFirstPrimitive);this.DeclareMethod("useZoomToHit",OwcBindSearchResultsToDocViewer_useZoomToHit);this.DeclareField("m_bHighlightFirstPrimitive",false);this.DeclareField("m_bUseZoomToHit",false);this.DeclareField("m_sZoom","");this.DeclareMethod("_onSrcContentItemClicked",OwcBindSearchResultsToDocViewer_onSrcContentItemClicked);}
Olive.Binding.BindSearchResultsToDocViewer.BindControls=function OwcBindSearchResultsToDocViewer_BindControls(vContentSrc,vContentTrg)
{var oBinding=new Olive.Binding.BindSearchResultsToDocViewer();if(!oBinding.bind(vContentSrc,vContentTrg))
return null;return oBinding;}
function OwcBindSearchResultsToDocViewer_bind(vContentSrc,vContentTrg)
{if(!this._bindCommon(vContentSrc,vContentTrg,"Olive.Controls.IDataBound","Olive.Controls.IDocViewer"))
return false;this.BindingSource.attachOwcEventHandler("contentItemClicked","_onSrcContentItemClicked",this,Delegate.Type.Method);return true;}
function OwcBindSearchResultsToDocViewer_unbind()
{if(this.BindingSource&&this.BindingTarget)
this.BindingSource.detachOwcEventHandler("contentItemClicked","_onSrcContentItemClicked",this,Delegate.Type.Method);this._unbindCommon();}
function OwcBindSearchResultsToDocViewer_onSrcContentItemClicked(oEvent)
{var bDoNavigate=true;if(this.m_sPreEventHandlerAction)
bDoNavigate=this.m_sPreEventHandlerAction(oEvent.OlvContentItem,this.BindingSource,this.BindingTarget);if(!bDoNavigate)
return;var oContentItem=oEvent.OlvContentItem;var fvSearchResult=null;var nPageNo=oContentItem.m_nPageNo;var sPrimitiveId=oContentItem.m_sPrimId;var sSearchQuery=null;var bLoadHitsForDocument="auto";var nFirstHitPage=oContentItem.m_nFirstHitPage;for(var oDataItem=oContentItem;oDataItem;oDataItem=oDataItem.m_oParentItem)
{if(oDataItem.DataObjectType==OwcContentItem_SearchResult)
fvSearchResult=oDataItem;else if(oDataItem.DataObjectType==OwcContentItem_SearchQuery&&oDataItem.m_oSearchParams)
sSearchQuery=oDataItem.m_oSearchParams.toString();}
if(!fvSearchResult)
return;var sEntityId=fvSearchResult.m_sEntityId;if(this.m_bUseZoomToHit)
{var oNavigateToHitParams=this.BindingTarget.getNavigateToHitParams(fvSearchResult);this.BindingTarget.navigateToHit(oNavigateToHitParams.sDocHRef,oNavigateToHitParams.sEntityId,oNavigateToHitParams.nEntityPageNo,oNavigateToHitParams.nFirstHitPageNo,oNavigateToHitParams.sHitBoxCenter,this.m_bHighlightFirstPrimitive,this.m_sZoom);if(oNavigateToHitParams.nFirstHitPageNo>0)
{this.BindingTarget.loadSearchHits(oNavigateToHitParams.nFirstHitPageNo,null,sSearchQuery,bLoadHitsForDocument,oNavigateToHitParams.sEntityId,null,oNavigateToHitParams.sDocHRef,true);}}
else
{if(nFirstHitPage>0)
{if(this.m_bHighlightFirstPrimitive&&nPageNo==nFirstHitPage)
{this.BindingTarget.gotoPageWithHighlighting(nPageNo,sPrimitiveId,sEntityId,null,null,true);}
nPageNo=nFirstHitPage;this.BindingTarget.loadSearchHits(nPageNo,null,sSearchQuery,bLoadHitsForDocument,sEntityId,null);}
else
{nPageNo=(oContentItem.m_nPageNo>0)?oContentItem.m_nPageNo:1;if(this.m_bHighlightFirstPrimitive)
this.BindingTarget.gotoPageWithHighlighting(nPageNo,sPrimitiveId,sEntityId,null,null,true);else
this.BindingTarget.gotoPageWithHighlighting(nPageNo,"","",null,null,true);}}}
function OwcBindSearchResultsToDocViewer_findSearchQuery(oContentItem)
{}
function OwcBindSearchResultsToDocViewer_setPreEventHandlerAction(oExternalFunc)
{if(oExternalFunc)
this.m_sPreEventHandlerAction=oExternalFunc;}
function OwcBindSearchResultsToDocViewer_setHighlightFirstPrimitive(bHighlight)
{this.m_bHighlightFirstPrimitive=!!bHighlight;}
function OwcBindSearchResultsToDocViewer_useZoomToHit(bUseZoomToHit,sZoom)
{this.m_bUseZoomToHit=!!bUseZoomToHit;this.m_sZoom=sZoom.toLowerCase();}
JScript.Type.RegisterClass("Olive.Binding.BindSearchResultsToDocViewer",Olive.Binding.BindSearchResultsToDocViewer,Olive.Binding);}
if(!Olive.WindowOptions)
{Olive.WindowOptions=function OwcWindowOptions()
{}
Olive.WindowOptions.Features={channelmode:"channelmode",directories:"directories",fullscreen:"fullscreen",location:"location",menubar:"menubar",resizable:"resizable",scrollbars:"scrollbars",status:"status",titlebar:"titlebar",toolbar:"toolbar"}
Olive.WindowOptions.Types={browserpopup:"browserpopup",emulatedpopup:"emulatedpopup"}
Olive.WindowOptions.DeclareType=function OwcWindowOptions_DeclareType()
{this.DeclareField("m_arrFeatures",null);this.DeclareField("left",undefined);this.DeclareField("top",undefined);this.DeclareField("width",undefined);this.DeclareField("height",undefined);this.DeclareField("target",undefined);this.DeclareField("href",undefined);this.DeclareField("centerWindow",true);this.DeclareField("windowType",Olive.WindowOptions.Types.browserpopup);this.DeclareMethod("getFeature",OwcWindowOptions_getFeature);this.DeclareMethod("setFeature",OwcWindowOptions_setFeature);this.DeclareMethod("buildFeaturesString",OwcWindowOptions_buildFeaturesString);}
Olive.WindowOptions.getDefaultOptions=function OwcWindowOptions_getDefaultOptions(sWindowName)
{var oDefaultOptions=new Olive.WindowOptions();oDefaultOptions.target=sWindowName;oDefaultOptions.width="70%";oDefaultOptions.height="70%";oDefaultOptions.centerWindow=true;oDefaultOptions.setFeature(Olive.WindowOptions.Features.menubar,false);oDefaultOptions.setFeature(Olive.WindowOptions.Features.toolbar,false);oDefaultOptions.setFeature(Olive.WindowOptions.Features.resiable,true);oDefaultOptions.setFeature(Olive.WindowOptions.Features.status,true);oDefaultOptions.setFeature(Olive.WindowOptions.Features.scrollbars,true);return oDefaultOptions;}
Olive.WindowOptions.parsePosValue=function OwcWindowOptions_parsePosValue(oValue,nParentValue)
{if((oValue==undefined)||(typeof(oValue)=="number"))
return oValue;if(oValue===null)
return undefined;oValue=oValue.replace(/\b/g,"");var rePosValue=/^(\d+)(%|(px))?$/i;var arrMatch=rePosValue.exec(oValue);if(!arrMatch)
return undefined;var nNumValue=parseInt(arrMatch[1],10);if((arrMatch.length>1)&&(arrMatch[2]=="%"))
nNumValue=Math.round(nParentValue*nNumValue/100);return nNumValue;}
function OwcWindowOptions_getFeature(sFeatureName)
{if(!sFeatureName||!this.m_arrFeatures)
return undefined;return this.m_arrFeatures[sFeatureName.toLowerCase()];}
function OwcWindowOptions_setFeature(sFeatureName,oValue)
{if(!sFeatureName)
return;sFeatureName=sFeatureName.toLowerCase()
if((oValue==undefined)||(oValue==null))
{if(!this.m_arrFeatures)
return;if(sFeatureName in this.m_arrFeatures)
delete this.m_arrFeatures[sFeatureName];}
else
{if(!this.m_arrFeatures)
this.m_arrFeatures=new Array();this.m_arrFeatures[sFeatureName]=oValue;}}
function OwcWindowOptions_buildFeaturesString()
{var arrFeatures=new Array();var nLeft=Olive.WindowOptions.parsePosValue(this.left,screen.width);var nTop=Olive.WindowOptions.parsePosValue(this.top,screen.height);var nWidth=Olive.WindowOptions.parsePosValue(this.width,screen.width);var nHeight=Olive.WindowOptions.parsePosValue(this.height,screen.height);if(this.centerWindow)
{if(nWidth&&nWidth>0)
nLeft=Math.round(Math.max(0,(screen.width-nWidth)/2));if(nHeight&&nHeight>0)
nTop=Math.round(Math.max(0,(screen.height-nHeight)/2));}
if(nLeft!=undefined)
arrFeatures.push("left="+String(nLeft));if(nTop!=undefined)
arrFeatures.push("top="+String(nTop));if(nWidth&&nWidth>0)
arrFeatures.push("width="+String(nWidth));if(nHeight&&nHeight>0)
arrFeatures.push("height="+String(nHeight));if(this.m_arrFeatures)
{for(var sFeature in this.m_arrFeatures)
{var oValue=this.m_arrFeatures[sFeature];var sFeatureName=sFeature;if(sFeature in Olive.WindowOptions.Features)
sFeatureName=Olive.WindowOptions.Features[sFeature];var sFeatureString=sFeatureName+"="+(oValue?"yes":"no");arrFeatures.push(sFeatureString);}}
return arrFeatures.join(",");}
JScript.Type.RegisterClass("Olive.WindowOptions",Olive.WindowOptions);}
if(!Olive.WindowBinder)
{Olive.WindowBinder=function OwcWindowBinder()
{}
Olive.WindowBinder.DeclareType=function OwcWindowBinder_DeclareType()
{this.DeclareField("windowObject",null);this.DeclareField("pageClass",null);this.DeclareField("pageApplyCustomProto",null);this.DeclareMethod("bind",OwcWindowBinder_bind);this.DeclareMethod("createPageObject",OwcWindowBinder_createPageObject);this.DeclareMethod("unbind",OwcWindowBinder_unbind);}
Olive.WindowBinder.GetBinderForWindow=function OwcWindowBinder_GetBinderForWindow(oWindow)
{if(!oWindow||!oWindow.OliveBinder)
return null;return oWindow.OliveBinder;}
Olive.WindowBinder.RegisterPageClass=function OwcWindowBinder_RegisterPageClass(oWindow,rPageClass)
{var oBinder=Olive.WindowBinder.GetBinderForWindow(oWindow);if(!oBinder)
throw DHTML.newError(0,"Olive.WindowBinder.RegisterPageClass(): Olive page binder is either not defined yet or page is already bound");oBinder.pageClass=rPageClass;}
Olive.WindowBinder.RegisterPageCustomPrototype=function OwcWindowBinder_RegisterPageCustomPrototype(oWindow,pfbApplyCustomProto)
{var oBinder=Olive.WindowBinder.GetBinderForWindow(oWindow);if(!oBinder)
throw DHTML.newError(0,"Olive.WindowBinder.RegisterPageCustomPrototype(): Olive page binder is either not defined yet or page is already bound");oBinder.pageApplyCustomProto=pfbApplyCustomProto;}
Olive.WindowBinder.bindWindow=function OwcWindowBinder_bindWindow(oWindow)
{var oBinder=new Olive.WindowBinder();oBinder.bind(oWindow);}
function OwcWindowBinder_bind(oWindow)
{var oBinder=Olive.WindowBinder.GetBinderForWindow(oWindow);if(oBinder)
return;oWindow.OliveBinder=this;this.windowObject=oWindow;DHTML.attachEvent(oWindow,"load",Olive.WindowBinder.HTML_onPageLoaded);}
function OwcWindowBinder_createPageObject()
{if(!this.windowObject)
throw DHTML.newError(0,"Loading HTML: Refernce tothe window object is disappeared from Olive binder");var pageClass=(this.pageClass?this.pageClass:Olive.Page);var oWindow=this.windowObject;this.unbind();var oPageObject=new pageClass();if(this.pageApplyCustomProto)
this.pageApplyCustomProto.call(oPageObject,oWindow);oPageObject.bind(oWindow);}
function OwcWindowBinder_unbind(oWindow)
{DHTML.detachEvent(this.windowObject,"load",Olive.WindowBinder.HTML_onPageLoaded);this.windowObject.OliveBinder=null;this.windowObject=null;}
Olive.WindowBinder.HTML_onPageLoaded=function OwcWindowBinder_onPageLoaded(oEvent)
{var oBinder=Olive.WindowBinder.GetBinderForWindow(this);if(!oBinder)
throw DHTML.newError(0,"Loading HTML: Olive SDK binder disappeared from window");oBinder.createPageObject();}
JScript.Type.RegisterClass("Olive.WindowBinder",Olive.WindowBinder);}
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
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined")
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcCommon.js to your file");if(!Olive.IActiveWindowsManager)
{Olive.IActiveWindowsManager=new Interface("Olive.Controls.IActiveWindowsManager");Olive.IActiveWindowsManager.BaseZIndex=100;Olive.IActiveWindowsManager.BaseMaskClassName="OliveBaseMaskClass";Olive.IActiveWindowsManager.Implement=function IActiveWindowsManager_Implement(rObject,bDynamic)
{if(!Olive.IActiveWindowsManager.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"m_arrActiveWindowsList",null);JScript.Type.DeclareField(rObject,"m_currentActiveWindow",null);JScript.Type.DeclareField(rObject,"m_iZIndex",Olive.IActiveWindowsManager.BaseZIndex);JScript.Type.DeclareField(rObject,"m_BaseMaskHTMLElement",null);JScript.Type.DeclareField(rObject,"m_IActiveWindowsManager_bInitialized",false);JScript.Type.DeclareMethod(rObject,"registerWindow",IActiveWindowsManager_registerWindow);JScript.Type.DeclareMethod(rObject,"unregisterWindow",IActiveWindowsManager_unregisterWindow);JScript.Type.DeclareMethod(rObject,"unregisterAllWindows",IActiveWindowsManager_unregisterAllWindows);JScript.Type.DeclareMethod(rObject,"destroyWindowsManager",IActiveWindowsManager_destroy);JScript.Type.DeclareMethod(rObject,"getManagedWindowsNum",IActiveWindowsManager_getManagedWindowsNum);JScript.Type.DeclareMethod(rObject,"getActiveWindow",IActiveWindowsManager_getActiveWindow);JScript.Type.DeclareMethod(rObject,"getTopMostZIndex",IActiveWindowsManager_getTopMostZIndex);JScript.Type.DeclareMethod(rObject,"isValidWindowObject",IActiveWindowsManager_isValidWindowObject);JScript.Type.DeclareMethod(rObject,"activateWindow",IActiveWindowsManager_activateWindow);JScript.Type.DeclareMethod(rObject,"deactivateWindow",IActiveWindowsManager_deactivateWindow);JScript.Type.DeclareMethod(rObject,"createBaseMaskHTMLElement",null);JScript.Type.DeclareMethod(rObject,"activateMaskHTMLElement",IActiveWindowsManager_activateMaskHTMLElement);JScript.Type.DeclareMethod(rObject,"deactivateMaskHTMLElement",IActiveWindowsManager_deactivateMaskHTMLElement);}
function IActiveWindowsManager_registerWindow(oWindow)
{if(!this.isValidWindowObject)
{throw DHTML.newError(0,"The parameter is not valid window object.");}
if(oWindow==this.m_currentActiveWindow)
return;if(this.m_currentActiveWindow!=null)
{this.deactivateWindow();this.m_arrActiveWindowsList=Array_appendItem(this.m_arrActiveWindowsList,this.m_currentActiveWindow);}
var iIndex=Array_indexOf(this.m_arrActiveWindowsList,oWindow);if(iIndex>=0)
{this.m_arrActiveWindowsList.splice(iIndex,1);}
this.m_currentActiveWindow=oWindow;this.activateWindow();if(this.getManagedWindowsNum()==1)
this.activateMaskHTMLElement();}
function IActiveWindowsManager_unregisterWindow(oWindow)
{if(!this.isValidWindowObject)
{throw DHTML.newError(0,"The parameter is not valid window object.");}
if(this.m_currentActiveWindow==oWindow)
{this.deactivateWindow();if(this.m_arrActiveWindowsList&&this.m_arrActiveWindowsList.length>0)
{this.m_currentActiveWindow=this.m_arrActiveWindowsList.pop();this.activateWindow();}
else
{this.m_currentActiveWindow=null;}}
else
{var iIndex=Array_indexOf(this.m_arrActiveWindowsList,oWindow);if(iIndex>=0)
{this.m_arrActiveWindowsList.splice(iIndex,1);}}
if(this.getManagedWindowsNum()==0)
this.deactivateMaskHTMLElement();}
function IActiveWindowsManager_unregisterAllWindows()
{this.deactivateWindow();this.m_currentActiveWindow=null;this.m_arrActiveWindowsList=null;this.deactivateMaskHTMLElement();}
function IActiveWindowsManager_getManagedWindowsNum()
{var iWindowsNum=0;if(this.m_currentActiveWindow)
iWindowsNum++;if(this.m_arrActiveWindowsList)
iWindowsNum+=this.m_arrActiveWindowsList.length;return iWindowsNum;}
function IActiveWindowsManager_getActiveWindow()
{return this.m_currentActiveWindow;}
function IActiveWindowsManager_activateWindow()
{var oWindow=this.m_currentActiveWindow;if(!oWindow)
return;var newZindex=this.getTopMostZIndex();if(oWindow.setZIndex)
oWindow.setZIndex(newZindex);if(oWindow.onWindowActivated)
oWindow.onWindowActivated();}
function IActiveWindowsManager_deactivateWindow()
{var oWindow=this.m_currentActiveWindow;if(!oWindow)
return;if(oWindow.onWindowDeactivated)
oWindow.onWindowDeactivated();}
function IActiveWindowsManager_getTopMostZIndex()
{return++this.m_iZIndex;}
function IActiveWindowsManager_isValidWindowObject(oWindow)
{if(oWindow&&oWindow.navigateTo)
return true;else
return false;}
function IActiveWindowsManager_activateMaskHTMLElement()
{if(!this.m_IActiveWindowsManager_bInitialized)
{this.m_IActiveWindowsManager_bInitialized=true;if(this.createBaseMaskHTMLElement)
this.createBaseMaskHTMLElement();}
if(!this.m_BaseMaskHTMLElement)
return;this.m_BaseMaskHTMLElement.oActiveWindowsManager=this;DHTML.attachEvent(this.m_BaseMaskHTMLElement,"mousedown",BaseMaskHTMLElement_DHTML_onMouseDown);this.m_BaseMaskHTMLElement.style.zIndex=Olive.IActiveWindowsManager.BaseZIndex;}
function IActiveWindowsManager_deactivateMaskHTMLElement()
{if(!this.m_BaseMaskHTMLElement)
return;DHTML.detachEvent(this.m_BaseMaskHTMLElement,"mousedown",BaseMaskHTMLElement_DHTML_onMouseDown);this.m_BaseMaskHTMLElement.oActiveWindowsManager=null;this.m_BaseMaskHTMLElement.style.zIndex=-1;}
function IActiveWindowsManager_destroy()
{this.unregisterAllWindows();this.m_BaseMaskHTMLElement=null;}
function BaseMaskHTMLElement_DHTML_onMouseDown(oEvent)
{if(this.oActiveWindowsManager&&this.oActiveWindowsManager.unregisterAllWindows)
this.oActiveWindowsManager.unregisterAllWindows();}}
if(!Olive.PopupInfo)
{Olive.PopupInfo=function OwcPopupInfo()
{}
Olive.PopupInfo.DialogResult={Cancel:0,OK:1}
Olive.PopupInfo.DeclareType=function OwcPopupInfo_DeclareType()
{this.DeclareField("windowObject",null);this.DeclareField("openerPage",null);this.DeclareField("callbackOnClose",null);this.DeclareField("m_bOwcPopup",false);this.DeclareField("popupArguments",null);this.DeclareField("returnValue",null);this.DeclareField("dialogResult",Olive.PopupInfo.DialogResult.Cancel);this.DeclareField("isUnloading",false);this.DeclareField("replacingPopup",null);this.DeclareField("formerUrl","");this.DeclareMethod("initialize",OwcPopupInfo_initialize);this.DeclareMethod("openPopup",OwcPopupInfo_openPopup);this.DeclareMethod("closePopup",OwcPopupInfo_closePopup);this.DeclareMethod("isClosed",OwcPopupInfo_isClosed);this.DeclareMethod("isEmulatedWindow",OwcPopupInfo_isEmulatedWindow);this.DeclareMethod("getURL",OwcPopupInfo_getURL);this.DeclareMethod("notifyPopupLoading",OwcPopupInfo_notifyPopupLoading);this.DeclareMethod("notifyPopupUnloading",OwcPopupInfo_notifyPopupUnloading);this.DeclareMethod("setReturnValue",OwcPopupInfo_setReturnValue);this.DeclareMethod("setDialogResult",OwcPopupInfo_setDialogResult);this.DeclareMethod("notifyOpenerOnClose",OwcPopupInfo_notifyOpenerOnClose);}
function OwcPopupInfo_initialize(oOpenerPage,oArguments,oCallbackOnClose,bOwcPopup)
{this.openerPage=oOpenerPage;this.popupArguments=oArguments;this.callbackOnClose=oCallbackOnClose;this.m_bOwcPopup=bOwcPopup;}
function OwcPopupInfo_openPopup(sUrl,oWindowOptions,sTarget)
{var oParentWindow=this.openerPage.getWindowObject();var sFeatures="";var bReplace=false;if(oWindowOptions)
{if(oWindowOptions.buildFeaturesString)
sFeatures=oWindowOptions.buildFeaturesString();if(!sUrl)
sUrl=oWindowOptions.href;if(!sTarget)
sTarget=oWindowOptions.target;}
if(!this.isEmulatedWindow())
{var oParentWindow=this.openerPage.getBrowserWindow();this.windowObject=oParentWindow.open(sUrl,sTarget,sFeatures,bReplace);}
else
{this.windowObject=Olive.Controls.PopupWindow.findPopupWindowControl(oParentWindow,sTarget,oWindowOptions);if(!this.windowObject&&sUrl)
this.windowObject=Olive.Controls.PopupWindow.createNavigationWindow(oParentWindow,sTarget,oWindowOptions);}
var oPrevPopup=this.openerPage.findPopupInfo(this.windowObject,true);if(oPrevPopup!=this)
oPrevPopup.replacingPopup=this;if(this.windowObject&&this.isEmulatedWindow())
this.windowObject.openInternal(oParentWindow,sUrl,sFeatures,bReplace,this);return this.windowObject;}
function OwcPopupInfo_closePopup(bDoNotWait)
{if(!this.windowObject||this.windowObject.closed)
return;if(bDoNotWait)
{var oPopupPage=Olive.Page.GetPageForWindow(this.windowObject);if(oPopupPage)
oPopupPage.detachPage();}
if(this.windowObject.close)
this.windowObject.close();}
function OwcPopupInfo_isClosed()
{if(!this.windowObject||(this.replacingPopup&&this.m_bOwcPopup))
return true;return this.windowObject.closed;}
function OwcPopupInfo_isEmulatedWindow()
{return this.m_bOwcPopup;}
function OwcPopupInfo_getURL()
{if(this.windowObject.location)
return this.windowObject.location.href;if(this.windowObject.OlivePage&&this.windowObject.OlivePage.m_oWindow&&this.windowObject.OlivePage.m_oWindow.location)
return this.windowObject.OlivePage.m_oWindow.location.href;return null;}
function OwcPopupInfo_notifyPopupLoading()
{this.windowObject.focus();if(!this.isUnloading)
return;var sNewUrl=this.getURL();var bIsSameUrl=(this.formerUrl.toLowerCase()==sNewUrl.toLowerCase());this.isUnloading=false;this.openerPage.notifyPopupReloaded(this,bIsSameUrl);}
function OwcPopupInfo_notifyPopupUnloading()
{if(!this.replacingPopup)
{this.isUnloading=true;this.formerUrl=this.getURL();this.openerPage.notifyPopupUnloading(this);}
else
this.openerPage.notifyPopupUnloaded(this);}
function OwcPopupInfo_setReturnValue(value)
{this.returnValue=value;}
function OwcPopupInfo_setDialogResult(dialogResult,returnValue)
{this.dialogResult=dialogResult;if(returnValue!=undefined)
this.setReturnValue(returnValue);this.notifyOpenerOnClose();}
function OwcPopupInfo_notifyOpenerOnClose()
{if(!this.callbackOnClose)
return;this.callbackOnClose.call(null,this.dialogResult,this.returnValue,this);this.callbackOnClose=null;}
JScript.Type.RegisterClass("Olive.PopupInfo",Olive.PopupInfo);}
if(!Olive.Page)
{Olive.Page=function OwcPage()
{}
Olive.Page.DeclareType=function OwcPage_DeclareType()
{this.DeclareField("m_oWindow",null);this.DeclareField("m_oDocument",null);this.DeclareField("m_bInitialized",false);this.DeclareField("m_sPageId",null);this.DeclareField("m_oRootElem",null);this.DeclareField("m_oQueryString",null);this.DeclareField("m_arrPopupWindows",null);this.DeclareField("m_nUnloadingPopupsCount",0);this.DeclareField("m_intervalTrackUnloadingPopups",-1);this.DeclareField("m_oKeyBoardEventsDispatcher",null);this.DeclareField("m_magnifierControl",null);this.DeclareField("Parent",null);this.DeclareField("WebApplication",null);this.DeclareField("isFrameset",false);this.DeclareField("isPopup",false);this.DeclareField("popupInfo",null);this.ReplaceMethod("get_HtmlElement",OwcPage_get_HtmlElement);this.ReplaceMethod("get_WebPage",OwcPage_get_WebPage);this.DeclareMethod("getBrowserWindow",OwcPage_getBrowserWindow);this.DeclareMethod("getWindowObject",OwcPage_getWindowObject);this.DeclareMethod("getControlOnPage",OwcPage_getControlOnPage);this.DeclareMethod("getPagePopupArguments",OwcPage_getPagePopupArguments);this.DeclareMethod("getWindowOptions",OwcPage_getWindowOptions);this.DeclareMethod("openPopup",OwcPage_openPopup);this.DeclareMethod("preparePopupWindow",OwcPage_preparePopupWindow);this.DeclareMethod("openPopupWindow",OwcPage_openPopupWindow);this.DeclareMethod("getPopupCount",OwcPage_getPopupCount);this.DeclareMethod("getPopupByPageId",OwcPage_getPopupByPageId);this.DeclareMethod("findPopupInfo",OwcPage_findPopupInfo);this.DeclareMethod("closeAllPopupWindows",OwcPage_closeAllPopupWindows);this.DeclareMethod("detachPage",OwcPage_detachPage);this.DeclareMethod("getDocument",OwcPage_getDocument);this.DeclareMethod("removePopup",OwcPage_removePopup);this.DeclareMethod("getContainerPage",OwcPage_getContainerPage);this.DeclareMethod("getTopContainerPage",OwcPage_getTopContainerPage);this.DeclareMethod("getMagnifier",OwcPage_getMagnifier);this.DeclareMethod("setMagnifier",OwcPage_setMagnifier);this.DeclareMethod("bind",OwcPage_bind);this.DeclareMethod("readPopupInfoFromOpener",OwcPage_readPopupInfoFromOpener);this.DeclareMethod("initialize",OwcPage_initialize);this.DeclareMethod("preInitialize",null);this.DeclareMethod("postInitialize",null);this.DeclareMethod("terminate",OwcPage_terminate);this.DeclareMethod("createBaseMaskHTMLElement",OwcPage_createBaseMaskHTMLElement);this.DeclareMethod("addPopupInfo",OwcPage_addPopupInfo);this.DeclareMethod("removePopupInfo",OwcPage_removePopupInfo);this.DeclareMethod("removePopupInfoByRef",OwcPage_removePopupInfoByRef);this.DeclareMethod("notifyPopupReloaded",OwcPage_notifyPopupReloaded);this.DeclareMethod("notifyPopupUnloading",OwcPage_notifyPopupUnloading);this.DeclareMethod("notifyPopupUnloaded",OwcPage_notifyPopupUnloaded);this.DeclareMethod("startTrackingUnloadingPopups",OwcPage_startTrackingUnloadingPopups);this.DeclareMethod("stopTrackingUnloadingPopups",OwcPage_stopTrackingUnloadingPopups);this.DeclareMethod("trackUnloadingPopups",OwcPage_trackUnloadingPopups);}
Olive.Page.ApplyPrototype=function OwcPage_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("pageLoaded","onPageLoaded",true);rObject.registerOwcEventsClass2("pageUnloaded","onPageUnloaded",true);}
Olive.Page.GetPageForWindow=function OwcPage_GetPageForWindow(oWindow)
{try
{if(!oWindow||!oWindow.OlivePage)
return null;}
catch(e)
{return null;}
return oWindow.OlivePage;}
Olive.Page.GetPageForDocument=function OwcPage_GetPageForDocument(oDocument)
{if(!oDocument||!oDocument.OlivePage)
return null;return oDocument.OlivePage;}
function OwcPage_getDocument()
{return this.m_oDocument;}
function OwcPage_get_HtmlElement()
{return this.m_oRootElem;}
function OwcPage_get_WebPage()
{return this;}
function OwcPage_getBrowserWindow()
{return this.m_oWindow;}
function OwcPage_getWindowObject()
{if(this.m_oOwcWindowContainer)
return this.m_oOwcWindowContainer;return this.getBrowserWindow();}
function OwcPage_getControlOnPage(sControlId,bScanAncestors)
{var oCtrl=null;if(!this.m_oDocument)
return oCtrl;var oHtmlElem=getObjFromDoc(this.m_oDocument,sControlId);if(oHtmlElem)
oCtrl=OwcGetControlFromHtmlElem(oHtmlElem,bScanAncestors);return oCtrl;}
function OwcPage_getPagePopupArguments()
{if(!this.popupInfo)
return null;return this.popupInfo.popupArguments;}
function OwcPage_getWindowOptions(sName)
{if(this.WebApplication)
return this.WebApplication.getWindowOptions(sName);return Olive.WindowOptions.getDefaultOptions(sName);}
function OwcPage_openPopup(sUrl,oWindowOptionsNameOrRef,oArguments,oCallbackOnClose,bOwcPopup)
{var oPopup=this.preparePopupWindow(oArguments,oCallbackOnClose,bOwcPopup);var oWindowOptions=oWindowOptionsNameOrRef;if((typeof(oWindowOptionsNameOrRef)=="string")||!oWindowOptionsNameOrRef)
{oWindowOptions=this.getWindowOptions(oWindowOptionsNameOrRef);if(bOwcPopup)
oWindowOptions=Object_Clone(oWindowOptions);oWindowOptions.target=oWindowOptionsNameOrRef;}
var oPopupWindow=this.openPopupWindow(oPopup,sUrl,oWindowOptions);if(!oPopupWindow)
{this.removePopupInfoByRef(oPopup);}
return oPopupWindow;}
function OwcPage_preparePopupWindow(oArguments,oCallbackOnClose,bOwcPopup)
{var oPopupInfo=new Olive.PopupInfo();oPopupInfo.initialize(this,oArguments,oCallbackOnClose,bOwcPopup);return oPopupInfo;}
function OwcPage_openPopupWindow(oPopupInfo,sUrl,oWindowOptions,sTarget)
{var nPopupCount=this.getPopupCount();this.addPopupInfo(oPopupInfo);return oPopupInfo.openPopup(sUrl,oWindowOptions,sTarget);}
function OwcPage_getPopupCount()
{if(!this.m_arrPopupWindows)
return 0;return this.m_arrPopupWindows.length;}
function OwcPage_getPopupByPageId(sPageId)
{if(!this.m_arrPopupWindows)
return null;for(var iIndex=0;iIndex<this.m_arrPopupWindows.length;++iIndex)
{var oPopupInfo=this.m_arrPopupWindows[iIndex];if(oPopupInfo.windowObject&&oPopupInfo.windowObject.OlivePage&&oPopupInfo.windowObject.OlivePage.m_sPageId&&oPopupInfo.windowObject.OlivePage.m_sPageId==sPageId)
return oPopupInfo;}
return null;}
function OwcPage_findPopupInfo(oWindow,bNotReused)
{if(!this.m_arrPopupWindows)
return null;for(var iIndex=0;iIndex<this.m_arrPopupWindows.length;++iIndex)
{var oPopupInfo=this.m_arrPopupWindows[iIndex];if(oPopupInfo.windowObject==oWindow&&(!bNotReused||!oPopupInfo.replacingPopup))
return oPopupInfo;}
return null;}
function OwcPage_closeAllPopupWindows(bDoNotWait)
{var iPopup,nPopupCount=(this.m_arrPopupWindows?this.m_arrPopupWindows.length:0);for(var iPopup=nPopupCount-1;iPopup>=0;--iPopup)
{var oPopupInfo=this.m_arrPopupWindows[iPopup];if(!oPopupInfo.isClosed())
oPopupInfo.closePopup(bDoNotWait);}
if(bDoNotWait)
{this.m_arrPopupWindows=null;this.stopTrackingUnloadingPopups();}}
function OwcPage_detachPage()
{this.Parent=null;this.popupInfo=null;}
function OwcPage_removePopup(oPopupWindowRef)
{var oPopupInfo=this.findPopupInfo(oPopupWindowRef);if(!oPopupInfo)
return;this.removePopupInfoByRef(oPopupInfo);}
function OwcPage_getContainerPage()
{var oPage=null;if(this.m_oOwcWindowContainer&&this.m_oOwcWindowContainer.getOwnerPage)
oPage=this.m_oOwcWindowContainer.getOwnerPage();return oPage;}
function OwcPage_getTopContainerPage()
{var oTopPage=null;var oPage=this;while(oPage)
{oTopPage=oPage;oPage=oPage.getContainerPage();}
return oTopPage;}
function OwcPage_getMagnifier(forControl)
{return this.m_magnifierControl;}
function OwcPage_setMagnifier(magnifierControl)
{this.m_magnifierControl=magnifierControl;}
function OwcPage_bind(oWindow)
{oWindow.OlivePage=this;this.m_oWindow=oWindow;if(oWindow.document)
{oWindow.document.OlivePage=this;this.m_oDocument=oWindow.document;}
if(oWindow.location)
{var sUrl=oWindow.location.href;this.m_oQueryString=new QueryString();this.m_oQueryString.parseUrl(sUrl);}
if(typeof(OwcGetApplication)=="function")
this.WebApplication=OwcGetApplication();var oRootElem=getChildObjectByTag(this.m_oDocument,"body",0);var bIsFrameset=false;if(!oRootElem)
{oRootElem=getChildObjectByTag(this.m_oDocument,"frameset",0);if(!oRootElem)
this.reportKnownError(Olive.Errors.Code.NoPage);bIsFrameset=true;}
this.m_sPageId=DHTML.getAttr(oRootElem,"id");this.m_oRootElem=oRootElem;this.isFrameset=bIsFrameset;this.isPopup=false;if(oWindow.parent&&oWindow.parent!=oWindow)
{var oParentControl=Olive.Controls.PopupWindow.getPopUpWindowControl(oWindow);if(oParentControl)
{this.m_oOwcWindowContainer=oParentControl;oParentControl.OlivePage=this;}}
if(oWindow.opener||(this.m_oOwcWindowContainer))
{if(this.readPopupInfoFromOpener())
this.popupInfo.notifyPopupLoading();}
this.Parent=this.WebApplication;DHTML.attachEvent(this.m_oWindow,"unload",OwcPage_DHTML_onWindowUnload);if(this.WebApplication&&!this.WebApplication.isReady())
{this.WebApplication.attachOwcEventHandler("applicationReady",OwcPage_onApplicationReady,this);}
else
this.initialize();}
function OwcPage_readPopupInfoFromOpener()
{var oWindow=this.getWindowObject();var oParentPage=Olive.Page.GetPageForWindow(oWindow.opener);if(!oParentPage)
return false;var oPopupInfo=oParentPage.findPopupInfo(oWindow,true);if(!oPopupInfo)
return false;this.popupInfo=oPopupInfo;this.isPopup=true;return true;}
function OwcPage_initialize()
{var oPopupArguments=(this.popupInfo?this.popupInfo.popupArguments:null);Debug.assert(!this.m_bInitialized,"Page (id="+String(this.m_sPageId)+") is laready initialized");if(this.preInitialize)
this.preInitialize(oPopupArguments);this.bindContent();this.m_oKeyBoardEventsDispatcher=new Olive.KeyBoardEventsDispatcher(this);this.m_oKeyBoardEventsDispatcher.startCatchEvents();if(this.m_oOwcWindowContainer)
this.m_oOwcWindowContainer.startCatchKeyBoardEvents(this);if(this.postInitialize)
this.postInitialize(oPopupArguments);this.m_bInitialized=true;var oEvent=this.createOwcEventObject("pageLoaded");this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcPage_terminate()
{DHTML.detachEvent(this.m_oWindow,"unload",OwcPage_DHTML_onWindowUnload);var oEvent=this.createOwcEventObject("pageUnloaded");this.fireOwcEvent(oEvent);Object_Destroy(oEvent);if(this.destroyWindowsManager)
this.destroyWindowsManager();this.closeAllPopupWindows(true);if(this.isPopup&&this.popupInfo)
{this.popupInfo.notifyPopupUnloading();this.popupInfo=null;}
this.clearControls();if(this.m_oKeyBoardEventsDispatcher)
this.m_oKeyBoardEventsDispatcher.stopCatchEvents();this.m_oKeyBoardEventsDispatcher=null;this.WebApplication=null;this.Parent=null;if(this.m_oDocument)
this.m_oDocument.OlivePage=null;this.m_oDocument=null;if(this.m_oOwcWindowContainer)
this.m_oOwcWindowContainer.OlivePage=null;this.m_oOwcWindowContainer=null;if(this.m_oWindow)
this.m_oWindow.OlivePage=null;this.m_oWindow=null;}
function OwcPage_createBaseMaskHTMLElement()
{var oRootElement=this.get_HtmlElement();if(oRootElement.tagName.toLowerCase()!="body")
return;var oMaskElement=this.m_oDocument.createElement("DIV");DHTML.addCssClassToElem(oMaskElement,Olive.IActiveWindowsManager.BaseMaskClassName);oMaskElement=oRootElement.appendChild(oMaskElement);this.m_BaseMaskHTMLElement=oMaskElement;}
function OwcPage_addPopupInfo(oPopupInfo)
{this.m_arrPopupWindows=Array_appendItem(this.m_arrPopupWindows,oPopupInfo);}
function OwcPage_removePopupInfo(iIndex)
{this.m_arrPopupWindows.splice(iIndex,1);}
function OwcPage_removePopupInfoByRef(oPopupInfo)
{var iPopupIndex=Array_indexOf(this.m_arrPopupWindows,oPopupInfo);if(iPopupIndex==-1)
return false;this.removePopupInfo(iPopupIndex);return true;}
function OwcPage_notifyPopupReloaded(oPopupInfo,bSameUrl)
{var iPopupIndex=Array_indexOf(this.m_arrPopupWindows,oPopupInfo);if(iPopupIndex<0)
return;if(!bSameUrl)
this.notifyPopupUnloaded(oPopupInfo,iPopupIndex);if(this.m_nUnloadingPopupsCount<2)
this.stopTrackingUnloadingPopups();else
--this.m_nUnloadingPopupsCount;}
function OwcPage_notifyPopupUnloading(oPopupInfo)
{var iPopupIndex=Array_indexOf(this.m_arrPopupWindows,oPopupInfo);if(iPopupIndex<0)
return;++this.m_nUnloadingPopupsCount;if(this.m_nUnloadingPopupsCount==1)
this.startTrackingUnloadingPopups();}
function OwcPage_notifyPopupUnloaded(oPopupInfo,iPopupIndex)
{if(iPopupIndex==undefined)
iPopupIndex=Array_indexOf(this.m_arrPopupWindows,oPopupInfo);if(iPopupIndex<0)
return;this.removePopupInfo(iPopupIndex)}
function OwcPage_startTrackingUnloadingPopups()
{if(this.m_intervalTrackUnloadingPopups>=0)
return;var oThisPage=this;function OwcPage_trackPopupTimer()
{oThisPage.trackUnloadingPopups();}
this.m_intervalTrackUnloadingPopups=this.m_oWindow.setInterval(OwcPage_trackPopupTimer,500);}
function OwcPage_stopTrackingUnloadingPopups()
{this.m_nUnloadingPopupsCount=0;if(this.m_intervalTrackUnloadingPopups<0)
return;this.m_oWindow.clearInterval(this.m_intervalTrackUnloadingPopups);this.m_intervalTrackUnloadingPopups=-1;}
function OwcPage_trackUnloadingPopups()
{var nClosedPopups=0;var iPopup,nPopupCount=(this.m_arrPopupWindows?this.m_arrPopupWindows.length:0);for(var iPopup=nPopupCount-1;iPopup>=0;--iPopup)
{var oPopupInfo=this.m_arrPopupWindows[iPopup];if(oPopupInfo.isClosed()&&oPopupInfo.isUnloading)
{this.removePopupInfo(iPopup)
nClosedPopups++;}}
if(this.m_nUnloadingPopupsCount>nClosedPopups)
this.m_nUnloadingPopupsCount-=nClosedPopups;else
this.stopTrackingUnloadingPopups();}
function OwcPage_DHTML_onWindowUnload(oEvent)
{var oPage=Olive.Page.GetPageForWindow(this);if(oPage)
oPage.terminate();}
function OwcPage_onApplicationReady(oEvent)
{this.WebApplication.detachOwcEventHandler("applicationReady",OwcPage_onApplicationReady,this);this.initialize();}
JScript.Type.RegisterClass("Olive.Page",Olive.Page,Olive.CmdTarget,[Olive.Controls.IControlContainer,Olive.IActiveControlTracker,Olive.IActiveWindowsManager]);}
if(!Olive.PrintPage)
{Olive.PrintPage=function OwcPrintPage()
{}
Olive.PrintPage.DeclareType=function OwcPrintPage_DeclareType()
{this.DeclareMethod("print",OwcPrintPage_print);}
Olive.PrintPage.ApplyPrototype=function OwcPrintPage_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("dataPrinted","onDataPrinted",true);}
function OwcPrintPage_print(oContentItem)
{var oWindow=this.getBrowserWindow();if(isVersionOf_IE_AtLeast7())
oWindow.document.execCommand("print",false,null);else
oWindow.print();var oEvent=this.createOwcEventObject("dataPrinted");oEvent.OlvContentItem=oContentItem;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
JScript.Type.RegisterClass("Olive.PrintPage",Olive.PrintPage,Olive.Page);}
if(!Olive.DialogPage)
{Olive.DialogPage=function OwcDialogPage()
{}
Olive.DialogPage.Commands={Cancel:"Cancel",OK:"OK"}
Olive.DialogPage.DeclareType=function OwcDialogPage_DeclareType()
{this.DeclareMethod("dialogClose",OwcDialogPage_dialogClose);this.DeclareMethod("dialogOK",OwcDialogPage_dialogOK);this.DeclareMethod("dialogCancel",OwcDialogPage_dialogCancel);this.DeclareMethod("_OnDialogOK",OwcDialogPage_OnDialogOK);this.DeclareMethod("_DialogOK_updateUiState",OwcDialogPage_DialogOK_updateUiState);}
Olive.DialogPage.ApplyPrototype=function OwcDialogPage_ApplyPrototype(rObject,bDynamic)
{Olive.CmdTarget.RegisterCommand(rObject,Olive.DialogPage.Commands.OK,"_OnDialogOK","_DialogOK_updateUiState");Olive.CmdTarget.RegisterCommand(rObject,Olive.DialogPage.Commands.Cancel,"dialogCancel");}
function OwcDialogPage_dialogClose(dialogResult,returnValue)
{if(this.popupInfo)
this.popupInfo.setDialogResult(dialogResult,returnValue);var oWindow=this.getWindowObject();if(oWindow)
oWindow.close();}
function OwcDialogPage_dialogOK(returnValue)
{this.dialogClose(Olive.PopupInfo.DialogResult.OK,returnValue);}
function OwcDialogPage_dialogCancel()
{this.dialogClose(Olive.PopupInfo.DialogResult.Cancel);}
function OwcDialogPage_OnDialogOK(returnValue)
{this.dialogOK(returnValue);}
function OwcDialogPage_DialogOK_updateUiState(oCmdUiState)
{oCmdUiState.enableCommand(true);}
JScript.Type.RegisterClass("Olive.DialogPage",Olive.DialogPage,Olive.Page);}
if(!Olive.LookupPage)
{Olive.LookupPage=function OwcLookupPage()
{}
Olive.LookupPage.DeclareType=function OwcLookupPage_DeclareType()
{this.DeclareField("m_lookupValue",null);this.DeclareMethod("get_LookupValue",OwcLookupPage_get_LookupValue);this.DeclareMethod("set_LookupValue",OwcLookupPage_set_LookupValue);this.DeclareMethod("validateLookupValue",OwcLookupPage_validateLookupValue);this.ReplaceMethod("_OnDialogOK",OwcLookupPage_OnDialogOK);this.ReplaceMethod("_DialogOK_updateUiState",OwcLookupPage_DialogOK_updateUiState);}
function OwcLookupPage_get_LookupValue()
{return this.m_lookupValue;}
function OwcLookupPage_set_LookupValue(lookupValue)
{this.m_lookupValue=lookupValue;Olive.ICmdSource.UpdateAll(this);}
function OwcLookupPage_validateLookupValue(lookupValue)
{return(lookupValue!=null&&lookupValue!=undefined);}
function OwcLookupPage_OnDialogOK(returnValue)
{if((returnValue==undefined)||(returnValue==null))
{returnValue=this.get_LookupValue();if(!this.validateLookupValue(returnValue))
this.dialogCancel();}
this.dialogOK(returnValue);}
function OwcLookupPage_DialogOK_updateUiState(oCmdUiState)
{var lookupValue=oCmdUiState.commandParams;if((lookupValue==undefined)||(lookupValue==null))
lookupValue=this.get_LookupValue();var bEnableCommand=this.validateLookupValue(lookupValue);oCmdUiState.enableCommand(bEnableCommand);}
JScript.Type.RegisterClass("Olive.LookupPage",Olive.LookupPage,Olive.DialogPage);}
if(!Olive.KeyBoardEventsDispatcher)
{Olive.KeyBoardEventsDispatcher=function OwcKeyBoardEventsDispatcher(oPage)
{if(!oPage)
return;this.m_oParentPage=oPage;}
Olive.KeyBoardEventsDispatcher.DeclareType=function OwcKeyBoardEventsDispatcher_DeclareType()
{this.DeclareField("m_oParentPage",null);this.DeclareField("m_bCatchEvantsEnabled",false);this.DeclareField("m_arrDocKeyEvents",new Array("keydown","keyup","keypress"));this.DeclareField("m_arrControls",null);this.DeclareField("m_ActiveKeyTarget",null);this.DeclareField("m_arrKeyTargetStack",null);this.DeclareMethod("registerKeyListener",OwcKeyBoardEventsDispatcher_registerKeyListener);this.DeclareMethod("unregisterKeyListener",OwcKeyBoardEventsDispatcher_unregisterKeyListener);this.DeclareMethod("pushActiveKeyListener",OwcKeyBoardEventsDispatcher_pushActiveKeyListener);this.DeclareMethod("popActiveKeyListener",OwcKeyBoardEventsDispatcher_popActiveKeyListener);this.DeclareMethod("startCatchEvents",OwcKeyBoardEventsDispatcher_startCatchEvents);this.DeclareMethod("stopCatchEvents",OwcKeyBoardEventsDispatcher_stopCatchEvents);this.DeclareMethod("defaultEventHandler",OwcKeyBoardEventsDispatcher_defaultEventHandler);this.DeclareMethod("dispatchEvent",OwcKeyBoardEventsDispatcher_dispatchEvent);this.DeclareMethod("findControl",OwcKeyBoardEventsDispatcher_findControl);this.DeclareMethod("buildCallbackData",OwcKeyBoardEventsDispatcher_buildCallbackData);this.DeclareMethod("_unregisterKeyListenerInternal",OwcKeyBoardEventsDispatcher_unregisterKeyListenerInternal);this.DeclareMethod("_registerKeyListenerInternal",OwcKeyBoardEventsDispatcher_registerKeyListenerInternal);}
function OwcKeyBoardEventsDispatcher_buildCallbackData(rCtrl,rCallBackFunc)
{if(!rCtrl||!rCallBackFunc)
return null;var oCbkData=new Object();oCbkData.m_rCallBackFunc=rCallBackFunc;oCbkData.m_rCtrl=rCtrl;return oCbkData;}
function OwcKeyBoardEventsDispatcher_pushActiveKeyListener(rCtrl,rCallBackFunc)
{var oCbckData=this.buildCallbackData(rCtrl,rCallBackFunc);if(!oCbckData||!this.m_bCatchEvantsEnabled)
return false;this._unregisterKeyListenerInternal(rCtrl,true);if(this.m_ActiveKeyTarget)
{if(this.m_ActiveKeyTarget.m_rCtrl==rCtrl)
return true;this._unregisterKeyListenerInternal(this.m_ActiveKeyTarget.m_rCtrl);this.m_arrKeyTargetStack=Array_appendItem(this.m_arrKeyTargetStack,this.m_ActiveKeyTarget);}
this.m_ActiveKeyTarget=oCbckData;return this._registerKeyListenerInternal(this.m_ActiveKeyTarget.m_rCtrl,this.m_ActiveKeyTarget.m_rCallBackFunc);}
function OwcKeyBoardEventsDispatcher_popActiveKeyListener()
{if(!this.m_ActiveKeyTarget)
return null;var sCtrl=this.m_ActiveKeyTarget.m_rCtrl;this._unregisterKeyListenerInternal(this.m_ActiveKeyTarget.m_rCtrl);if(this.m_arrKeyTargetStack&&this.m_arrKeyTargetStack.length>0)
{this.m_ActiveKeyTarget=this.m_arrKeyTargetStack.pop();this._registerKeyListenerInternal(this.m_ActiveKeyTarget.m_rCtrl,this.m_ActiveKeyTarget.m_rCallBackFunc);}
else
{this.m_ActiveKeyTarget=null;}
return sCtrl;}
function OwcKeyBoardEventsDispatcher_registerKeyListener(rCtrl,rCallBackFunc)
{if(!this.m_bCatchEvantsEnabled)
return false;if(!rCtrl||!rCallBackFunc)
return false;this.unregisterKeyListener(rCtrl);this._registerKeyListenerInternal(rCtrl,rCallBackFunc);}
function OwcKeyBoardEventsDispatcher_registerKeyListenerInternal(rCtrl,rCallBackFunc)
{if(!this.m_bCatchEvantsEnabled)
return false;if(!rCtrl||!rCallBackFunc)
return false;if(this.findControl(rCtrl)>=0)
return true;else
{var oCbkData=new Object();oCbkData.m_rCallBackFunc=rCallBackFunc;oCbkData.m_rCtrl=rCtrl;this.m_arrControls=Array_appendItem(this.m_arrControls,oCbkData);}
return true;}
function OwcKeyBoardEventsDispatcher_findControl(rCtrl,bSearchInTargetStack)
{var arrCtrls=this.m_arrControls;if(bSearchInTargetStack)
arrCtrls=this.m_arrKeyTargetStack;if(!arrCtrls)
return-1;for(var i=0;i<arrCtrls.length;i++)
{if(arrCtrls[i].m_rCtrl==rCtrl)
return i;}
return-1;}
function OwcKeyBoardEventsDispatcher_unregisterKeyListener(rCtrl)
{if(!rCtrl)
return;if(this.m_ActiveKeyTarget&&rCtrl==this.m_ActiveKeyTarget.m_rCtrl)
{this.popActiveKeyListener();return;}
this._unregisterKeyListenerInternal(rCtrl,true);this._unregisterKeyListenerInternal(rCtrl);}
function OwcKeyBoardEventsDispatcher_unregisterKeyListenerInternal(rCtrl,bSearchInTargetStack)
{var arrCtrls=this.m_arrControls;if(bSearchInTargetStack)
arrCtrls=this.m_arrKeyTargetStack;var nCtrlId=this.findControl(rCtrl,bSearchInTargetStack);if(nCtrlId<0)
return;else
{arrCtrls.splice(nCtrlId,1);}}
function OwcKeyBoardEventsDispatcher_dispatchEvent(oEvent)
{if(!this.m_arrControls)
return;var tempArray=this.m_arrControls.slice(0);for(var i=0;i<tempArray.length;i++)
{var rCtrl=tempArray[i].m_rCtrl;var rEventHandler=tempArray[i].m_rCallBackFunc;if(rEventHandler)
rEventHandler.call(rCtrl,oEvent);}}
function OwcKeyBoardEventsDispatcher_startCatchEvents()
{if(!this.m_oParentPage)
{return false;}
if(this.m_bCatchEvantsEnabled)
return true;var oDocument=this.m_oParentPage.getDocument();if(!this.m_arrDocKeyEvents)
return false;for(var i=0;i<this.m_arrDocKeyEvents.length;i++)
{DHTML.attachEvent(oDocument,this.m_arrDocKeyEvents[i],OwcKeyBoardEventsDispatcher_defaultEventHandler);}
this.m_bCatchEvantsEnabled=true;return true;}
function OwcKeyBoardEventsDispatcher_stopCatchEvents()
{var oDocument=this.m_oParentPage.getDocument();if(!this.m_arrDocKeyEvents)
return;for(var i=0;i<this.m_arrDocKeyEvents.length;i++)
{DHTML.detachEvent(oDocument,this.m_arrDocKeyEvents[i],OwcKeyBoardEventsDispatcher_defaultEventHandler);}
this.m_bCatchEvantsEnabled=false;}
function OwcKeyBoardEventsDispatcher_defaultEventHandler(oEvent)
{var oDocument=this;oParentPage=Olive.Page.GetPageForDocument(oDocument);if(oParentPage.m_oKeyBoardEventsDispatcher&&oParentPage.m_oKeyBoardEventsDispatcher.dispatchEvent)
oParentPage.m_oKeyBoardEventsDispatcher.dispatchEvent(oEvent);}
JScript.Type.RegisterClass("Olive.KeyBoardEventsDispatcher",Olive.KeyBoardEventsDispatcher);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.Value="value";Olive.Controls.controlTypeNames.Field="field";Olive.Controls.controlTypeNames.Date="date";Olive.Controls.controlTypeNames.Year="year";Olive.Controls.controlTypeNames.Month="month";Olive.Controls.controlTypeNames.Day="day";Olive.Controls.controlTypeNames.Command="command";Olive.Controls.controlTypeNames.LangList="langlist";Olive.Controls.controlTypeNames.CommandButton="commandbutton";Olive.Controls.controlTypeNames.TabStrip="tabstrip";Olive.Controls.controlTypeNames.TabItem="tabitem";Olive.Controls.controlTypeNames.PageSwitcher="pageswitcher";Olive.Controls.controlTypeNames.PageItem="pageitem";Olive.Controls.controlTypeNames.Choice="choice";Olive.Controls.controlTypeNames.ChoiceOption="choice-option";var sStopperImageUrl=owcGetCommonerPath()+"Layout/empty.gif";var OwcCssClass_PlaceholderImgLeftRight="OwcPlaceholderImgLeftRight";var OwcCssClass_Button="OwcButton";var OwcCssClass_ButtonLeft="OwcButtonLeft";var OwcCssClass_ButtonBody="OwcButtonBody";var OwcCssClass_ButtonRight="OwcButtonRight";var OwcCssClass_TabItemFirst="FirstTab";var OwcCssClass_TabItemLast="LastTab";var OwcCssClass_TabItemActive="ActiveTab";var OwcCssClass_TabItem="OwcTabItem";var OwcCssClass_TabLeft="TabLeft";var OwcCssClass_TabBody="TabBody";var OwcCssClass_TabRight="TabRight";var OwcCssClass_PageVisible="Visible";var OwcCssClass_PageHidden="Invisible";var OwcCssClass_OptionSelected="selected";var OwcUiElem_TabPosition="tabpos";Olive.Controls.attributes.Command=Olive.Controls.prefix+":"+"Command";Olive.Controls.attributes.CommandParams=Olive.Controls.prefix+":"+"CommandParams";Olive.Controls.attributes.ContentParams=Olive.Controls.prefix+":"+"content-params";Olive.Controls.attributes.Decorate=Olive.Controls.prefix+":"+"Decorate";Olive.Controls.attributes.DecorateWithTable=Olive.Controls.prefix+":"+"decorate-with-table";Olive.Controls.attributes.UpdateImageViewers=Olive.Controls.prefix+":"+"update-image-viewers";var OwcActiveMask_Day="Day";var OwcActiveMask_Month="Month";var OwcCmd_SetToday="Today";if(!Olive.Controls.Value)
{Olive.Controls.Value=function OwcControlValue()
{}
JScript.Type.RegisterClass("Olive.Controls.Value",Olive.Controls.Value,Olive.Controls.Control,[Olive.Controls.IValue]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Value,Olive.Controls.Value);}
if(!Olive.Controls.Field)
{Olive.Controls.Field=function OwcControlField()
{}
JScript.Type.RegisterClass("Olive.Controls.Field",Olive.Controls.Field,Olive.Controls.Control,[Olive.Controls.IValue,Olive.Controls.IFormField]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Field,Olive.Controls.Field);}
if(!Olive.Controls.Date)
{Olive.Controls.Date=function OwcControlDate()
{}
Olive.Controls.Date.DeclareType=function OwcControlDate_DeclareType(rObject)
{this.DeclareField("m_sDataType",Olive.Controls.DataTypeName.Date);this.DeclareMethod("setToday",OwcControlDate_setToday);}
Olive.Controls.Date.ApplyPrototype=function OwcControlDate_ApplyPrototype(rObject)
{Olive.CmdTarget.RegisterCommand(rObject,OwcCmd_SetToday,"setToday");}
function OwcControlDate_setToday()
{var oTodayDate=new Date();this.setValue(oTodayDate);}
JScript.Type.RegisterClass("Olive.Controls.Date",Olive.Controls.Date,Olive.Controls.Value);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Date,Olive.Controls.Date);}
if(!Olive.Controls.Year)
{Olive.Controls.Year=function OwcControlYear()
{}
Olive.Controls.Year.DeclareType=function OwcControlYear_DeclareType(rObject)
{this.DeclareField("ValueMaskType","Year");this.DeclareField("m_sDataType",Olive.Controls.DataTypeName.Year);}
JScript.Type.RegisterClass("Olive.Controls.Year",Olive.Controls.Year,Olive.Controls.Value);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Year,Olive.Controls.Year);}
if(!Olive.Controls.Month)
{Olive.Controls.Month=function OwcControlMonth()
{}
Olive.Controls.Month.DeclareType=function OwcControlMonth_DeclareType(rObject)
{this.DeclareField("ValueMaskType",OwcActiveMask_Month);this.DeclareField("m_sDataType",Olive.Controls.DataTypeName.Month);}
JScript.Type.RegisterClass("Olive.Controls.Month",Olive.Controls.Month,Olive.Controls.Value);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Month,Olive.Controls.Month);}
if(!Olive.Controls.Day)
{Olive.Controls.Day=function OwcDayControl()
{}
Olive.Controls.Day.DeclareType=function OwcDayControl_DeclareType(rObject)
{this.DeclareField("ValueMaskType",OwcActiveMask_Day);this.DeclareField("m_sDataType",Olive.Controls.DataTypeName.Day);}
JScript.Type.RegisterClass("Olive.Controls.Day",Olive.Controls.Day,Olive.Controls.Value);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Day,Olive.Controls.Day);}
var OwcUiElem_CommandCheckMark="commandCheckMark";var OwcCssClass_CommandChecked="owcCommandChecked";var OwcCssClass_CommandUnchecked="owcCommandUnchecked";if(!Olive.UiElemType.CommandCheckMark)
{Olive.UiElemType.CommandCheckMark=function OwcCommandCheckMarkUiElemType()
{};Olive.UiElemType.CommandCheckMark.DeclareType=function OwcCommandCheckMarkUiElemType_DeclareType(rObject)
{this.ReplaceMethod("updateUiElemState",OwcCommandCheckMark_updateUiElemState);}
function OwcCommandCheckMark_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{if(((dwNewState^dwPrevState)&Olive.IState.State.CheckedMask)!=0)
{var bActive=((dwNewState&Olive.IState.State.CheckedMask)==Olive.IState.State.Checked);if(bActive)
{DHTML.replaceCssClassToElem(oUiElem,OwcCssClass_CommandUnchecked,OwcCssClass_CommandChecked);}
else
{DHTML.replaceCssClassToElem(oUiElem,OwcCssClass_CommandChecked,OwcCssClass_CommandUnchecked);}}}
JScript.Type.RegisterClass("Olive.UiElemType.CommandCheckMark",Olive.UiElemType.CommandCheckMark,Olive.UiElemType);}
var OwcUiElem_CommandImage="commandImage";if(!Olive.UiElemType.CommandImage)
{Olive.UiElemType.CommandImage=function OwcCommandImageUiElemType()
{};Olive.UiElemType.CommandImage.DeclareType=function OwcCommandImageUiElemType_DeclareType(rObject)
{this.DeclareField("sImageSource","");this.ReplaceMethod("updateUiElemState",OwcCommandImage_updateUiElemState);this.DeclareMethod("getImageSource",OwcCommandImage_getImageSource);this.DeclareMethod("setImageSource",OwcCommandImage_setImageSource);}
function OwcCommandImage_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{if(((dwNewState^dwPrevState)&Olive.IState.State.CommandImageMask)!=0)
{var sImgSrc=this.getImageSource();if(sImgSrc!=""&&sImgSrc!=undefined&&sImgSrc!=null)
{var sHtmlContent="<img src="+sImgSrc+">";DHTML.pasteHtmlContent(oUiElem,sHtmlContent);}}}
function OwcCommandImage_getImageSource()
{return this.sImageSource;}
function OwcCommandImage_setImageSource(imgSrc)
{this.sImageSource=imgSrc;}
JScript.Type.RegisterClass("Olive.UiElemType.CommandImage",Olive.UiElemType.CommandImage,Olive.UiElemType);}
var OwcUiElem_CommandLabel="commandLabel";if(!Olive.UiElemType.CommandLabel)
{Olive.UiElemType.CommandLabel=function OwcCommandLabelUiElemType()
{};Olive.UiElemType.CommandLabel.DeclareType=function OwcCommandLabelUiElemType_DeclareType(rObject)
{this.DeclareField("commandLabel","");this.ReplaceMethod("updateUiElemState",OwcCommandLabelUiElemType_updateUiElemState);this.DeclareMethod("getCommandLabel",OwcCommandLabelUiElemType_getCommandLabel);this.DeclareMethod("setCommandLabel",OwcCommandLabelUiElemType_setCommandLabel);}
function OwcCommandLabelUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{if(((dwNewState^dwPrevState)&Olive.IState.State.CommandLabelMask)!=0)
{if(this.getCommandLabel()!="")
DHTML.pasteHtmlContent(oUiElem,this.getCommandLabel());}}
function OwcCommandLabelUiElemType_getCommandLabel()
{return this.commandLabel;}
function OwcCommandLabelUiElemType_setCommandLabel(sText)
{this.commandLabel=sText;}
JScript.Type.RegisterClass("Olive.UiElemType.CommandLabel",Olive.UiElemType.CommandLabel,Olive.UiElemType);}
if(!Olive.Controls.ICmdItem)
{Olive.Controls.ICmdItem=new Interface("Olive.Controls.ICmdItem");Olive.Controls.ICmdItem.Implement=function OwcICmdItem_Implement(rObject,bDynamic)
{if(!this.Register(rObject,bDynamic))
return;Olive.IUiElements.ImplementInterface(rObject,bDynamic);Olive.ICmdSource.ImplementInterface(rObject,bDynamic);JScript.Type.DeclareField(rObject,"m_sCommand",null);JScript.Type.DeclareField(rObject,"m_sCommandParams",null);JScript.Type.DeclareField(rObject,"m_bClickBehavior",true);JScript.Type.DeclareField(rObject,"m_bPressedBehavior",true);JScript.Type.DeclareField(rObject,"m_bContentParams",false);JScript.Type.DeclareField(rObject,"m_bHotColdBehavior",true);JScript.Type.ReplaceMethod(rObject,"updateCmdUiState",OwcICmdItem_updateCmdUiState);JScript.Type.DeclareMethod(rObject,"clickBehavior",OwcICmdItem_clickBehavior);JScript.Type.OverrideMethod(rObject,"parseControlHtmlAttr",OwcICmdItem_parseControlHtml);JScript.Type.OverrideMethod(rObject,"sendCommand",OwcICmdItem_sendCommand);JScript.Type.OverrideMethod(rObject,"updateCommand",OwcICmdItem_updateCommand);JScript.Type.OverrideMethod(rObject,"updateStateBehaviors",OwcICmdItem_updateStateBehaviors);rObject.registerUiElemType(OwcUiElem_CommandCheckMark,new Olive.UiElemType.CommandCheckMark());rObject.registerUiElemType(OwcUiElem_CommandImage,new Olive.UiElemType.CommandImage());rObject.registerUiElemType(OwcUiElem_CommandLabel,new Olive.UiElemType.CommandLabel());}
function OwcICmdItem_parseControlHtml()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.m_sCommand=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.Command,this.m_sCommand);this.m_sCommandParams=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.CommandParams,this.m_sCommandParams);this.m_bContentParams=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.ContentParams,this.m_bContentParams);}
function OwcICmdItem_updateStateBehaviors(nNewState,nPrevState)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_bClickBehavior)
{var nStyleChanged=(nPrevState^nNewState);if(nStyleChanged&Olive.IState.State.EnabledMask)
{var bEnabled=((nNewState&Olive.IState.State.EnabledMask)==Olive.IState.State.Enabled);if(bEnabled)
DHTML.attachEvent(this.HtmlElement,"click",OwcICmdItem_DHTML_onClick);else
DHTML.detachEvent(this.HtmlElement,"click",OwcICmdItem_DHTML_onClick);}}
if(this.m_bPressedBehavior)
{var nStyleChanged=(nPrevState^nNewState);if(nStyleChanged&Olive.IState.State.EnabledMask)
{var bEnabled=((nNewState&Olive.IState.State.EnabledMask)==Olive.IState.State.Enabled);if(bEnabled)
{DHTML.attachEvent(this.HtmlElement,"mousedown",OwcICmdItem_DHTML_onMouseDown);DHTML.attachEvent(this.HtmlElement,"mouseup",OwcICmdItem_DHTML_onMouseUp);}
else
{DHTML.detachEvent(this.HtmlElement,"mousedown",OwcICmdItem_DHTML_onMouseDown);DHTML.detachEvent(this.HtmlElement,"mouseup",OwcICmdItem_DHTML_onMouseUp);}}}}
function OwcICmdItem_sendCommand(sCmdName,oCmdParams)
{if(!sCmdName)
{sCmdName=this.m_sCommand;if(!oCmdParams)
{if(this.m_bContentParams)
oCmdParams=Olive.Controls.IDataBound.getContentItem(this);if(!oCmdParams)
oCmdParams=this.m_sCommandParams;}}
if(this.BaseClassMethod)
this.BaseClassMethod.call(this,sCmdName,oCmdParams);}
function OwcICmdItem_updateCommand(sCmdName,oCmdParams,rSrcControl)
{if(!Olive.IState.IsImplementedBy(this))
return;if(!sCmdName)
{sCmdName=this.m_sCommand;if(!oCmdParams)
oCmdParams=this.m_sCommandParams;}
if(this.BaseClassMethod)
this.BaseClassMethod.call(this,sCmdName,oCmdParams,rSrcControl);}
function OwcICmdItem_updateCmdUiState(oCmdUiState)
{if(oCmdUiState.isAspectChanged(Olive.CmdUiState.Aspects.enabled))
this.changeState(oCmdUiState.m_bCmdEnabled,Olive.IState.State.Enabled,Olive.IState.State.EnabledMask);else
this.changeState((oCmdUiState.handlerObject!=null),Olive.IState.State.Enabled,Olive.IState.State.EnabledMask);if(oCmdUiState.isAspectChanged(Olive.CmdUiState.Aspects.visible))
this.changeState(oCmdUiState.m_bCmdVisible,Olive.IState.State.Visible,Olive.IState.State.VisibleMask);if(oCmdUiState.isAspectChanged(Olive.CmdUiState.Aspects.checked))
{this.changeState(oCmdUiState.m_bCmdChecked,Olive.IState.State.Checked,Olive.IState.State.CheckedMask);}
if(oCmdUiState.isAspectChanged(Olive.CmdUiState.Aspects.text))
{var oCmdUILabelHtmlElemType=this.getUiElemType(OwcUiElem_CommandLabel);if(oCmdUILabelHtmlElemType)
oCmdUILabelHtmlElemType.setCommandLabel(oCmdUiState.m_sCmdText);this.toggleState(Olive.IState.State.SetCommandLabel);if(oCmdUiState.m_bSetLabel)
{if(Olive.Controls.IValue.IsImplementedBy(this))
this.setValue(oCmdUiState.m_sCmdText,false,true);}}
if(oCmdUiState.isAspectChanged(Olive.CmdUiState.Aspects.icon))
{var oCmdUIIconHtmlElemType=this.getUiElemType(OwcUiElem_CommandImage);if(oCmdUIIconHtmlElemType)
oCmdUIIconHtmlElemType.setImageSource(oCmdUiState.m_oCmdIcon);this.toggleState(Olive.IState.State.SetCommandImage);}}
function OwcICmdItem_clickBehavior(oEvent)
{this.sendCommand();}
function OwcICmdItem_DHTML_onClick(oEvent)
{stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);var oControl=OwcGetControlFromHtmlElem(this);if(oControl)
oControl.clickBehavior(oEvent);}
function OwcICmdItem_DHTML_onMouseDown(oEvent)
{var oControl=OwcGetControlFromHtmlElem(this);oControl.changeState(true,Olive.IState.State.Pressed,Olive.IState.State.PressedMask);}
function OwcICmdItem_DHTML_onMouseUp(oEvent)
{var oControl=OwcGetControlFromHtmlElem(this);oControl.changeState(false,Olive.IState.State.Pressed,Olive.IState.State.PressedMask);}}
if(!Olive.Controls.ICmdSelectionItem)
{Olive.Controls.ICmdSelectionItem=new Interface("Olive.Controls.ICmdSelectionItem");Olive.Controls.ICmdSelectionItem.Implement=function ICmdSelectionItem_Implement(rObject,bDynamic)
{if(!this.Register(rObject,bDynamic))
return;Olive.Controls.ICmdItem.ImplementInterface(rObject,bDynamic);JScript.Type.ReplaceMethod(rObject,"onValueChanged",OwcICmdSelectionItem_onValueChanged);JScript.Type.OverrideMethod(rObject,"sendCommand",OwcICmdSelectionItem_sendCommand);JScript.Type.OverrideMethod(rObject,"clickBehavior",OwcICmdSelectionItem_clickBehavior);}
function OwcICmdSelectionItem_onValueChanged(oEvent)
{oEvent.cancelBubble=true;this.sendCommand(null,oEvent.newValue);}
function OwcICmdSelectionItem_clickBehavior(oEvent)
{var bDoDefaultAction=false;}
function OwcICmdSelectionItem_sendCommand(sCmdName,oCmdParams)
{if(!oCmdParams)
oCmdParams=this.getHtmlValue();if(this.BaseClassMethod)
this.BaseClassMethod.call(this,sCmdName,oCmdParams);}}
if(!Olive.Controls.Command)
{Olive.Controls.Command=function OwcCommand()
{}
JScript.Type.RegisterClass("Olive.Controls.Command",Olive.Controls.Command,Olive.Controls.Control,[Olive.Controls.ICmdItem]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Command,Olive.Controls.Command);}
if(!Olive.Controls.LangList)
{Olive.Controls.LangList=function OwcLangList()
{}
Olive.Controls.LangList.DeclareType=function OwcLangList_DeclareType()
{this.ReplaceMethod("contentCanLoad",OwcLangList_contentCanLoad);this.ReplaceMethod("contentLoad",OwcLangList_contentLoad);this.ReplaceMethod("setLoadingDataMessage",null);this.ReplaceMethod("getHtmlValueElement",OwcLangList_getHtmlValueElement);this.OverrideMethod("postHtmlContentPaste",OwcLangList_postHtmlContentPaste);}
function OwcLangList_contentCanLoad()
{return true;}
function OwcLangList_contentLoad()
{this.requestData("");}
function OwcLangList_getHtmlValueElement()
{var oSelect=getChildObjectByTag(this.HtmlElement,"select",0);if(oSelect)
return oSelect;return this.HtmlElement;}
function OwcLangList_postHtmlContentPaste()
{oHtmlElement=this.getHtmlValueElement();if(oHtmlElement)
this.attachBehavior(oHtmlElement);}
JScript.Type.RegisterClass("Olive.Controls.LangList",Olive.Controls.LangList,Olive.Controls.Value,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.LangList,Olive.Controls.LangList);}
if(!Olive.Controls.CommandButton)
{Olive.Controls.CommandButton=function OwcCommandButton()
{}
Olive.Controls.CommandButton.DeclareType=function OwcCommandButton_DeclareType(rObject)
{this.OverrideMethod("bindHtmlElement",OwcCommandButton_bindHtmlElement);this.DeclareField("m_bDecoratedWithTable",false);}
function OwcCommandButton_HTML_Apply(oHtmlElement,sBtnClass,sBtnLeftClass,sBtnBodyClass,sBtnRightClass,bDecoratedWithTable)
{if(!sBtnClass)
sBtnClass=OwcCssClass_Button;if(!sBtnLeftClass)
sBtnLeftClass=OwcCssClass_ButtonLeft;if(!sBtnBodyClass)
sBtnBodyClass=OwcCssClass_ButtonBody;if(!sBtnRightClass)
sBtnRightClass=OwcCssClass_ButtonRight;DHTML.addCssClassToElem(oHtmlElement,sBtnClass);var sInnerHtml=oHtmlElement.innerHTML;var sButtonHtml="";if(bDecoratedWithTable)
{sButtonHtml+="<table cellspacing='0' cellpadding='0'><tr>";sButtonHtml+="<td class='"+sBtnLeftClass+"'>"+OwcCommandButton_HTML_getPlaceHolderImage(sBtnLeftClass)+"</td>";sButtonHtml+="<td class='"+sBtnBodyClass+"'>"+OwcCommandButton_HTML_getStopperImage(sBtnRightClass)+sInnerHtml+OwcCommandButton_HTML_getStopperImage(sBtnRightClass)+"</td>";sButtonHtml+="<td class='"+sBtnRightClass+"'>"+OwcCommandButton_HTML_getPlaceHolderImage(sBtnRightClass)+"</td>";sButtonHtml+="</tr></table>";}
else
{sButtonHtml+="<span class='"+sBtnLeftClass+"'>"+OwcCommandButton_HTML_getPlaceHolderImage(sBtnLeftClass)+"</span>";sButtonHtml+="<span class='"+sBtnBodyClass+"'>"+OwcCommandButton_HTML_getStopperImage(sBtnRightClass)+sInnerHtml+OwcCommandButton_HTML_getStopperImage(sBtnRightClass)+"</span>";sButtonHtml+="<span class='"+sBtnRightClass+"'>"+OwcCommandButton_HTML_getPlaceHolderImage(sBtnRightClass)+"</span>";}
DHTML.pasteHtmlContent(oHtmlElement,sButtonHtml);}
function OwcCommandButton_HTML_getStopperImage()
{return"";}
function OwcCommandButton_HTML_getPlaceHolderImage(sClass)
{return"<img  src=\""+sStopperImageUrl+"\" class=\""+OwcCssClass_PlaceholderImgLeftRight+"\" alt=\"\" />";}
function OwcCommandButton_bindHtmlElement(oHtmlElement)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.m_bDecoratedWithTable=DHTML.getAttrBoolean(oHtmlElement,Olive.Controls.attributes.DecorateWithTable,false);OwcCommandButton_HTML_Apply(oHtmlElement,null,null,null,null,this.m_bDecoratedWithTable);}
JScript.Type.RegisterClass("Olive.Controls.CommandButton",Olive.Controls.CommandButton,Olive.Controls.Command);;Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.CommandButton,Olive.Controls.CommandButton);}
if(!Olive.Controls.Tab)
{Olive.Controls.Tab=function OwcTab()
{}
Olive.Controls.Tab.cssClass={TabStrip:"OwcTab",TabContent:"OwcTabContent",TabItems:"OwcTabItems",TabEnd:"OwcTabEnd"}
Olive.Controls.Tab.DeclareType=function OwcTab_DeclareType(rObject)
{this.DeclareField("m_bDecorated",false);this.DeclareField("m_bDecoratedWithTable",false);this.DeclareMethod("isDecorated",OwcTab_isDecorated);this.DeclareMethod("isDecoratedWithTable",OwcTab_isDecoratedWithTable);this.OverrideMethod("bindHtmlElement",OwcTab_bindHtmlElement);}
function OwcTab_isDecorated()
{return this.m_bDecorated;}
function OwcTab_isDecoratedWithTable()
{return this.m_bDecoratedWithTable;}
function OwcTab_bindHtmlElement(oHtmlElement)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.m_bDecorated=DHTML.getAttrBoolean(oHtmlElement,Olive.Controls.attributes.Decorate,false);this.m_bDecoratedWithTable=DHTML.getAttrBoolean(oHtmlElement,Olive.Controls.attributes.DecorateWithTable,false);if(this.m_bDecorated||this.m_bDecoratedWithTable)
{var sTabClass=Olive.Controls.Tab.cssClass.TabStrip;var sTabContentClass=Olive.Controls.Tab.cssClass.TabContent;var sTabItemsClass=Olive.Controls.Tab.cssClass.TabItems;var sTabEndClass=Olive.Controls.Tab.cssClass.TabEnd;var sInnerHtml=oHtmlElement.innerHTML;var sTabHtml="<table class='"+sTabClass+"' cellspacing='0' cellpadding='0'><tr>";sTabHtml+="<td class='"+sTabContentClass+"'>";sTabHtml+=sInnerHtml;sTabHtml+="<td class='"+sTabEndClass+"'></td>";sTabHtml+="</tr></table>";DHTML.pasteHtmlContent(oHtmlElement,sTabHtml);}}
JScript.Type.RegisterClass("Olive.Controls.Tab",Olive.Controls.Tab,Olive.Controls.Control,[Olive.IActiveItem]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.TabStrip,Olive.Controls.Tab);}
if(!Olive.UiElemType.TabItemPos)
{Olive.UiElemType.TabItemPos=function OwcUiElemTypeTabItemPos()
{}
Olive.UiElemType.TabItemPos.DeclareType=function OwcUiElemTypeTabItemPos_DeclareType(rObject)
{this.ReplaceMethod("updateUiElemState",OwcUiElemTypeTabItemPos_updateUiElemState);}
function OwcUiElemTypeTabItemPos_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{if(oControl.isFirstTab())
DHTML.addCssClassToElem(oUiElem,OwcCssClass_TabItemFirst);else
DHTML.removeCssClassFromElem(oUiElem,OwcCssClass_TabItemFirst);if(oControl.isLastTab())
DHTML.addCssClassToElem(oUiElem,OwcCssClass_TabItemLast);else
DHTML.removeCssClassFromElem(oUiElem,OwcCssClass_TabItemLast);}
JScript.Type.RegisterClass("Olive.UiElemType.TabItemPos",Olive.UiElemType.TabItemPos,Olive.UiElemType);;}
if(!Olive.Controls.TabItem)
{Olive.Controls.TabItem=function OwcTabItem()
{}
Olive.Controls.TabItem.DeclareType=function OwcTabItem_DeclareType(rObject)
{this.OverrideMethod("bindHtmlElement",OwcTabItem_bindHtmlElement);this.OverrideMethod("updateUiState",OwcTabItem_updateUiState);this.DeclareMethod("isFirstTab",OwcTabItem_isFirstTab);this.DeclareMethod("isLastTab",OwcTabItem_isLastTab);}
Olive.Controls.TabItem.ApplyPrototype=function OwcTabItem_ApplyPrototype(rObject)
{rObject.registerUiElemType(OwcUiElem_TabPosition,new Olive.UiElemType.TabItemPos());}
function OwcTabItem_bindHtmlElement(oHtmlElement)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var oTabStrip=Olive.Object.FindParentImplementing(Olive.IActiveItem,this);if(!oTabStrip||oTabStrip.isDecorated()||oTabStrip.isDecoratedWithTable())
{OwcCommandButton_HTML_Apply(oHtmlElement,OwcCssClass_TabItem,OwcCssClass_TabLeft,OwcCssClass_TabBody,OwcCssClass_TabRight,oTabStrip.isDecoratedWithTable());var sInnerHtml=oHtmlElement.innerHTML;var sTabItemHtml="<span "+Olive.Controls.attributes.Ui+"='"+OwcUiElem_TabPosition+"'>"+sInnerHtml+"</span>";DHTML.pasteHtmlContent(oHtmlElement,sTabItemHtml);}
DHTML.attachEvent(oHtmlElement,"click",OwcTabItem_HTML_onClick);}
function OwcTabItem_HTML_onClick(oEvent)
{var oControl=OwcGetControlFromHtmlElem(this);if(oControl&&oControl.Parent)
oControl.Parent.setActiveItem(oControl);}
function OwcTabItem_updateUiState(dwNewState,dwOldState)
{if(((dwNewState^dwOldState)&Olive.IState.State.ActiveMask)!=0)
{var bActive=((dwNewState&Olive.IState.State.ActiveMask)==Olive.IState.State.Active);if(bActive)
DHTML.addCssClassToElem(this.HtmlElement,OwcCssClass_TabItemActive);else
DHTML.removeCssClassFromElem(this.HtmlElement,OwcCssClass_TabItemActive);}
if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcTabItem_isFirstTab()
{return this.Parent.isFirstControl(this,Olive.Controls.controlTypeNames.TabItem);}
function OwcTabItem_isLastTab()
{return this.Parent.isLastControl(this,Olive.Controls.controlTypeNames.TabItem);}
JScript.Type.RegisterClass("Olive.Controls.TabItem",Olive.Controls.TabItem,Olive.Controls.Control,[Olive.IUiElements]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.TabItem,Olive.Controls.TabItem);}
if(!Olive.Controls.PageSwitcher)
{Olive.Controls.PageSwitcher=function OwcPageSwitcher()
{}
Olive.Controls.PageSwitcher.Item=function OwcPageSwitcherItem()
{}
Olive.Controls.PageSwitcher.Item.DeclareType=function OwcPageSwitcherItem_DeclareType(rObject)
{this.DeclareField("m_bUpdateImageViewers",true);this.DeclareMethod("_updateImageViewers",OwcPageSwitcherItem_updateImageViewers);this.OverrideMethod("bindHtmlElement",OwcPageSwitcherItem_bindHtmlElement);this.OverrideMethod("updateUiState",OwcPageSwitcherItem_updateUiState);}
function OwcPageSwitcherItem_bindHtmlElement(oHtmlElement)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.m_bUpdateImageViewers=DHTML.getAttrBoolean(oHtmlElement,Olive.Controls.attributes.UpdateImageViewers,this.m_bUpdateImageViewers);}
function OwcPageSwitcherItem_updateUiState(dwNewState,dwOldState)
{if(((dwNewState^dwOldState)&Olive.IState.State.ActiveMask)!=0)
{var bActive=((dwNewState&Olive.IState.State.ActiveMask)==Olive.IState.State.Active);if(bActive)
{DHTML.replaceCssClassToElem(this.HtmlElement,OwcCssClass_PageHidden,OwcCssClass_PageVisible);if(this.m_bUpdateImageViewers)
this._updateImageViewers();}
else
DHTML.replaceCssClassToElem(this.HtmlElement,OwcCssClass_PageVisible,OwcCssClass_PageHidden);}
if(((dwNewState^dwOldState)&Olive.IState.State.VisibleMask)!=0)
{dwOldState&=~Olive.IState.State.VisibleMask;dwNewState&=~Olive.IState.State.VisibleMask;}
if(this.BaseClassMethod)
this.BaseClassMethod.call(this,dwNewState,dwOldState);}
function OwcPageSwitcherItem_updateImageViewers()
{var arrImageViewers=this.findControlsImplementing("Olive.Controls.IImageViewer");if(!arrImageViewers||arrImageViewers.length==0)
return;for(var i=0;i<arrImageViewers.length;++i)
{var oImageViewer=arrImageViewers[i];oImageViewer.htmlUpdateContent();}}
JScript.Type.RegisterClass("Olive.Controls.PageSwitcher",Olive.Controls.PageSwitcher,Olive.Controls.Control,[Olive.IActiveItem]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.PageSwitcher,Olive.Controls.PageSwitcher);JScript.Type.RegisterClass("Olive.Controls.PageSwitcher.Item",Olive.Controls.PageSwitcher.Item,Olive.Controls.Control,[Olive.IUiElements]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.PageItem,Olive.Controls.PageSwitcher.Item);}
if(!Olive.Controls.Choice)
{Olive.Controls.Choice=function OwcChoice()
{}
Olive.Controls.Choice.DeclareType=function OwcChoice_DeclareType()
{this.ReplaceMethod("getHtmlValue",OwcChoice_getHtmlValue);this.ReplaceMethod("setHtmlValue",OwcChoice_setHtmlValue);}
function OwcChoice_getHtmlValue(bParseValue)
{var sControlValue=null;var oActiveItem=this.getActiveItem();if(oActiveItem)
sControlValue=oActiveItem.getValue();if(bParseValue)
return this.parseValue(sControlValue);return sControlValue;}
function OwcChoice_setHtmlValue(oValue)
{var iItem,iItemsCount=this.getItemsCount();for(iItem=0;iItem<iItemsCount;++iItem)
{var oItem=this.getItem(iItem);var oItemValue=oItem.getValue();if(this.compareValue(oValue,oItemValue))
{this.setActiveItem(iItem);return;}}
this.setActiveItem(-1);}
Olive.Controls.Choice.Option=function OwcChoiceOption()
{}
Olive.Controls.Choice.Option.DeclareType=function OwcChoiceOption_DeclareType()
{this.DeclareField("m_bClickBehavior",true);this.DeclareField("m_bReadOnly",true);this.OverrideMethod("updateUiState",OwcChoiceOption_updateUiState);this.OverrideMethod("updateStateBehaviors",OwcChoiceOption_updateStateBehaviors);this.OverrideMethod("initStateFromHtml",OwcChoiceOption_initStateFromHtml);}
function OwcChoiceOption_initStateFromHtml()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var bActive=DHTML.isCssClassAppears(this.HtmlElement,OwcCssClass_OptionSelected);this.changeState(bActive,Olive.IState.State.Active,Olive.IState.State.ActiveMask);if(bActive)
{var oChoiceControl=Olive.Object.FindParentImplementing(Olive.IActiveItem,this);if(oChoiceControl)
{oChoiceControl.setActiveItem(this,true);oChoiceControl.updateData();}}}
function OwcChoiceOption_updateUiState(dwNewState,dwOldState)
{if(((dwNewState^dwOldState)&Olive.IState.State.ActiveMask)!=0)
{var bActive=((dwNewState&Olive.IState.State.ActiveMask)==Olive.IState.State.Active);if(bActive)
DHTML.addCssClassToElem(this.HtmlElement,OwcCssClass_OptionSelected);else
DHTML.removeCssClassFromElem(this.HtmlElement,OwcCssClass_OptionSelected);var oHtmlValueElement=this.getHtmlValueElement();if(DHTML.isRadioButton(oHtmlValueElement))
{oHtmlValueElement.checked=bActive;}}
if(this.BaseClassMethod)
this.BaseClassMethod.call(this,dwNewState,dwOldState);}
function OwcChoiceOption_updateStateBehaviors(nNewState,nPrevState)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_bClickBehavior)
{var nStyleChanged=(nPrevState^nNewState);if(nStyleChanged&Olive.IState.State.EnabledMask)
{var bEnabled=((nNewState&Olive.IState.State.EnabledMask)==Olive.IState.State.Enabled);if(bEnabled)
DHTML.attachEvent(this.HtmlElement,"click",OwcChoiceOption_DHTML_onClick);else
DHTML.detachEvent(this.HtmlElement,"click",OwcChoiceOption_DHTML_onClick);}}}
function OwcChoiceOption_DHTML_onClick(oEvent)
{var oControl=OwcGetControlFromHtmlElem(this);if(!oControl)
return;var oChoiceControl=Olive.Object.FindParentImplementing(Olive.IActiveItem,oControl);if(oChoiceControl)
{oChoiceControl.setActiveItem(oControl);oChoiceControl.updateData();}}
JScript.Type.RegisterClass("Olive.Controls.Choice",Olive.Controls.Choice,Olive.Controls.Control,[Olive.IActiveItem,Olive.Controls.IValue]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Choice,Olive.Controls.Choice);JScript.Type.RegisterClass("Olive.Controls.Choice.Option",Olive.Controls.Choice.Option,Olive.Controls.Value,[Olive.IUiElements]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.ChoiceOption,Olive.Controls.Choice.Option);}
if(!Olive.IBookmarkService)
{Olive.IBookmarkService=new Interface("Olive.IBookmarkService");Olive.IBookmarkService.Implement=function OwcIBookmarkService_Implement(rObject,bDynamic)
{if(!Olive.IBookmarkService.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"m_arrAdapters",null);JScript.Type.DeclareMethod(rObject,"createBookmark",OwcIBookmarkService_createBookmark);JScript.Type.DeclareMethod(rObject,"buildBookmark",OwcIBookmarkService_buildBookmark);JScript.Type.DeclareMethod(rObject,"fillBookmarkDataObject",OwcIBookmarkService_fillBookmarkDataObject);JScript.Type.DeclareMethod(rObject,"buildBookmarkTitle",OwcIBookmarkService_buildTitle);JScript.Type.DeclareMethod(rObject,"buildBookmarkURL",OwcIBookmarkService_buildURL);JScript.Type.DeclareMethod(rObject,"buildBookmarkDescription",OwcIBookmarkService_buildDescription);JScript.Type.DeclareMethod(rObject,"buildBookmarkCategory",OwcIBookmarkService_buildCategory);JScript.Type.DeclareMethod(rObject,"addBookmarkAdapter",OwcIBookmarkService_addAdapter);JScript.Type.DeclareMethod(rObject,"removeBookmarkAdapter",OwcIBookmarkService_removeAdapterById);JScript.Type.DeclareMethod(rObject,"getBookmarkAdapterById",OwcIBookmarkService_getAdapterById);rObject.registerOwcEventsClass2("bookmarkSaved","onBookmarkSaved",true);}
function OwcIBookmarkService_createBookmark(sBookmarkProviderID,oContentItem,oSourceConrtrol,oReservedParams)
{var oBookmarkData=new Olive.Bookmark();this.fillBookmarkDataObject(oBookmarkData,oContentItem,oSourceConrtrol);this.buildBookmark(sBookmarkProviderID,oBookmarkData);}
function OwcIBookmarkService_buildBookmark(sBookmarkProviderID,oBookmarkData)
{var oBookmarkServiceAdapter=this.getBookmarkAdapterById(sBookmarkProviderID);if(!oBookmarkServiceAdapter)
return false;var bBookmarkSavedSuccessfully=oBookmarkServiceAdapter.doBookmark(oBookmarkData);if(bBookmarkSavedSuccessfully)
{var oEvent=this.createOwcEventObject("bookmarkSaved");oEvent.oBookmarkData=oBookmarkData;oEvent.oBookmarkServiceAdapter=oBookmarkServiceAdapter;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
return true;}
function OwcIBookmarkService_fillBookmarkDataObject(oBookmarkData,oContentItem,oSourceConrtrol)
{oBookmarkData.setSourceData(oContentItem,oSourceConrtrol);var sTitle=this.buildBookmarkTitle(oContentItem,oSourceConrtrol);oBookmarkData.setTitle(sTitle);var sURL=this.buildBookmarkURL(oContentItem,oSourceConrtrol);oBookmarkData.setURL(sURL);var sCategory=this.buildBookmarkCategory(oContentItem,oSourceConrtrol);oBookmarkData.setCategory(sCategory);var sDescription=this.buildBookmarkDescription(oContentItem,oSourceConrtrol);oBookmarkData.setDescription(sDescription);}
function OwcIBookmarkService_buildTitle(oContentItem,oSourceConrtrol)
{if(typeof(OwcGetApplication)=="undefined"||!OwcGetApplication())
return null;var oAppObj=OwcGetApplication();var sEntryTitle=(oAppObj.getShareTitle)?oAppObj.getShareTitle(oContentItem):oAppObj.getItemTitle(oContentItem);if(sEntryTitle=="")
{sEntryTitle=oAppObj.getItemDocTitle(oContentItem);if(sEntryTitle=="")
sEntryTitle=oAppObj.getResString(Olive.Resources.ResName.DefaultFavoritesTitle);}
return sEntryTitle;}
function OwcIBookmarkService_buildURL(oContentItem,oSourceConrtrol)
{if(typeof(OwcGetApplication)=="undefined"||!OwcGetApplication())
return null;var oAppObj=OwcGetApplication();return oAppObj.buildURL(oContentItem,oSourceConrtrol);}
function OwcIBookmarkService_buildDescription(oContentItem,oSourceConrtrol)
{}
function OwcIBookmarkService_buildCategory(oContentItem,oSourceConrtrol)
{}
function OwcIBookmarkService_addAdapter(oAdapterObject,sId)
{if(!oAdapterObject||!JScript.Type.IsInstanceOf(oAdapterObject,"Olive.BookmarkAdapter"))
return null;if(!sId||sId=="")
return null;if(!this.m_arrAdapters)
this.m_arrAdapters=new Object();if(this.m_arrAdapters[sId])
return this.m_arrAdapters[sId];this.m_arrAdapters[sId]=oAdapterObject;return this.m_arrAdapters[sId];}
function OwcIBookmarkService_removeAdapterById(sId)
{if(this.m_arrAdapters&&this.m_arrAdapters[sId])
{var oAdapter=this.m_arrAdapters[sId];this.m_arrAdapters[sId]=null;delete(this.m_arrAdapters[sId]);return oAdapter;}
return null;}
function OwcIBookmarkService_getAdapterById(sId)
{if(this.m_arrAdapters&&this.m_arrAdapters[sId])
{return(this.m_arrAdapters[sId])?this.m_arrAdapters[sId]:null;}
return null;}}
if(!Olive.Bookmark)
{Olive.Bookmark=function()
{}
Olive.Bookmark.DeclareType=function OwcBookmark_DeclareType()
{this.DeclareField("m_sTitle","");this.DeclareField("m_sURL","");this.DeclareField("m_sCategory","");this.DeclareField("m_sDescription","");this.DeclareField("m_oContentItem",null);this.DeclareField("m_oViewControl",null);this.DeclareMethod("setSourceData",OwcBookmark_setSourceData);this.DeclareMethod("getField",OwcBookmark_getField);this.DeclareMethod("setField",OwcBookmark_setField);this.DeclareMethod("getTitle",OwcBookmark_getTitle);this.DeclareMethod("setTitle",OwcBookmark_setTitle);this.DeclareMethod("getURL",OwcBookmark_getURL);this.DeclareMethod("setURL",OwcBookmark_setURL);this.DeclareMethod("getCategory",OwcBookmark_getCategory);this.DeclareMethod("setCategory",OwcBookmark_setCategory);this.DeclareMethod("getDescription",OwcBookmark_getDescription);this.DeclareMethod("setDescription",OwcBookmark_setDescription);this.DeclareMethod("_getField",OwcBookmark_getFieldInternal);this.DeclareMethod("_setField",OwcBookmark_setFieldInternal);}
function OwcBookmark_setSourceData(oContentItem,oViewControl)
{this.m_oContentItem=oContentItem;this.m_oViewControl=oViewControl;}
function OwcBookmark_getFieldInternal(sFieldId)
{return this[sFieldId];}
function OwcBookmark_setFieldInternal(sFieldId,vFieldValue)
{this[sFieldId]=vFieldValue;}
function OwcBookmark_getField(sFieldId)
{switch(sFieldId)
{case Olive.BookmarkField.FieldID.Title:return this.getTitle();break;case Olive.BookmarkField.FieldID.URL:return this.getURL();break;case Olive.BookmarkField.FieldID.Category:return this.getCategory();break;case Olive.BookmarkField.FieldID.Description:return this.getDescription();break;default:return this._getField(sFieldId);}}
function OwcBookmark_setField(sFieldId,vFieldValue)
{switch(sFieldId)
{case Olive.BookmarkField.FieldID.Title:return this.setTitle(vFieldValue);break;case Olive.BookmarkField.FieldID.Url:return this.setURL(vFieldValue);break;case Olive.BookmarkField.FieldID.Category:return this.setCategory(vFieldValue);break;case Olive.BookmarkField.FieldID.Description:return this.setDescription(vFieldValue);break;default:this._setField(sFieldId,vFieldValue);}}
function OwcBookmark_getTitle()
{return this.m_sTitle;}
function OwcBookmark_setTitle(sTitle)
{this.m_sTitle=sTitle;}
function OwcBookmark_getURL()
{return this.m_sURL;}
function OwcBookmark_setURL(oValue)
{this.m_sURL=oValue;}
function OwcBookmark_getCategory()
{return this.m_sCategory;}
function OwcBookmark_setCategory(oCategory)
{this.m_sCategory=oCategory;}
function OwcBookmark_getDescription()
{return this.m_sDescription;}
function OwcBookmark_setDescription(sDescription)
{this.m_sDescription=sDescription;}
JScript.Type.RegisterClass("Olive.Bookmark",Olive.Bookmark);}
if(!Olive.BookmarkField)
{Olive.BookmarkField=function(sId,sUrlParamName,oValue,bMandatory)
{this.m_sId=sId;this.m_sURLParamName=sUrlParamName;this.m_oValue=oValue;this.m_bIsMandatory=bMandatory;}
Olive.BookmarkField.FieldID={Title:"title",URL:"url",Category:"category",Description:"description"};Olive.BookmarkField.DeclareType=function OwcBookmarkField_DeclareType()
{this.DeclareField("m_sId","");this.DeclareField("m_sURLParamName","");this.DeclareField("m_oValue","");this.DeclareField("m_bIsMandatory","");}
JScript.Type.RegisterClass("Olive.BookmarkField",Olive.BookmarkField);}
if(!Olive.BookmarkAdapter)
{Olive.BookmarkAdapter=function()
{}
Olive.BookmarkAdapter.DeclareType=function OwcBookmarkAdapter_DeclareType()
{this.DeclareField("m_oWindowOptions",null);this.DeclareField("m_sAdapterURL","");this.DeclareField("m_sAdapterName","");this.DeclareField("m_sParamSeparator",null);this.DeclareField("m_sNameValueSeparator",null);this.DeclareField("m_oBMFieldsList",null);this.DeclareMethod("init",OwcBookmarkAdapter_init);this.DeclareMethod("doBookmark",OwcBookmarkAdapter_doBookmark);this.DeclareMethod("getAdapterURL",OwcBookmarkAdapter_getAdapterURL);this.DeclareMethod("getAdapterName",OwcBookmarkAdapter_getAdapterName);this.DeclareMethod("_declareField",OwcBookmarkAdapter_declareField);this.DeclareMethod("_buildQuery",OwcBookmarkAdapter_buildQuery);this.DeclareMethod("_openPopup",OwcBookmarkAdapter_openPopup);}
function OwcBookmarkAdapter_init(oWindowOptions)
{}
function OwcBookmarkAdapter_doBookmark(oBookmarkData)
{var sURL=this._buildQuery(oBookmarkData);if(!sURL)
return false;this._openPopup(sURL);return true;}
function OwcBookmarkAdapter_getAdapterURL()
{return this.m_sAdapterURL;}
function OwcBookmarkAdapter_getAdapterName()
{return this.m_sAdapterName;}
function OwcBookmarkAdapter_declareField(sId,sURLParamName,bMandatory,sDefaultValue)
{if(!sId||sId==""||!sURLParamName||sURLParamName=="")
return false;if(!this.m_oBMFieldsList)
this.m_oBMFieldsList=new Object();var oField=new Olive.BookmarkField(sId,sURLParamName,sDefaultValue,bMandatory);this.m_oBMFieldsList[sId]=oField;return true;}
function OwcBookmarkAdapter_buildQuery(oBookmarkData)
{var oBookmarkQuery=new QueryString();for(var sFieldId in this.m_oBMFieldsList)
{var oField=this.m_oBMFieldsList[sFieldId];var oValue=oBookmarkData.getField(sFieldId);if(!oValue)
{oValue=oField.m_oValue;}
if(oValue)
{oBookmarkQuery.addParam(oField.m_sURLParamName,oValue);}
else if(oField.m_bIsMandatory)
{return null;}}
var urlParams=oBookmarkQuery.getQueryString(this.m_sNameValueSeparator,this.m_sNameValueSeparator,true);return(this.getAdapterURL()+"?"+urlParams);}
function OwcBookmarkAdapter_openPopup(sURL)
{var curentPage=Olive.Page.GetPageForWindow(window);if(this.m_oWindowOptions)
curentPage.openPopup(sURL,this.m_oWindowOptions,null,null,(this.m_oWindowOptions.windowType==Olive.WindowOptions.Types.emulatedpopup));else
curentPage.openPopup(sURL,"",null,null,false);}
JScript.Type.RegisterClass("Olive.BookmarkAdapter",Olive.BookmarkAdapter,Olive.Object);}
if(!OwcGlobals)
throw DHTML.newError(0,"Olive Web Controls globals are not included.  Add OwcGlobals.js to your HTML file");var OwcPref_AppDataProvider="AppDataProvider";var OwcPref_AppUrl="AppUrl";var OwcPref_AppVirPath="AppVirPath";var OwcPref_MailField_From="MailField_From";var OwcUrlParam_Debug="DebugMode";var OwcCmd_AddToFavorites="add2favorites";var OwcCmd_CopyLink="copylink";if(!Olive.WebAppBase)
{Olive.WebAppBase=function OwcWebAppBase()
{this.m_LoadingStartedTime=new Date();}
Olive.WebAppBase.UrlParam={View:"View",HRef:"HRef",PageNo:"PageNo",Entity:"Entity",TocEntry:"TocEntry",Primitive:"Primitive",IsURLEncoded:"IsURLEncoded"}
Olive.WebAppBase.MaxTitleLength=100;Olive.WebAppBase.DeclareType=function OwcWebAppBase_DeclareType()
{this.DeclareField("m_oQueryString",null);this.DeclareField("m_bEncodeDecodeUrl",false);this.DeclareField("m_oCustomRequestParams",null);this.DeclareField("m_bSettingsLoaded",false);this.DeclareField("m_arrPreferences",null);this.DeclareField("m_arrStringTable",null);this.DeclareField("m_oDefaultPopupOptions",null);this.DeclareField("m_arrWindowOptions",null);this.DeclareField("m_arrCommandStates",null);this.DeclareField("m_sAppUrl","");this.DeclareField("m_sAppVirPath","");this.DeclareField("DataProviderUrl",OwcGlobals.DefaultDataProvider);this.DeclareField("WebApplication",null);this.DeclareField("m_LoadingStartedTime",null);this.DeclareField("m_LoadingEndedTime",null);this.DeclareField("m_customParamNames",null);this.DeclareMethod("initialize",OwcWebAppBase_initialize);this.DeclareMethod("loadSettings",OwcWebAppBase_loadSettings);this.DeclareMethod("parseSettings",OwcWebAppBase_parseSettings);this.DeclareMethod("parsePreferences",OwcWebAppBase_parsePreferences);this.DeclareMethod("parseResources",OwcWebAppBase_parseResources);this.DeclareMethod("parseWindowOptions",OwcWebAppBase_parseWindowOptions);this.DeclareMethod("parseCommandsStates",OwcWebAppBase_parseCommandsStates);this.DeclareMethod("isReady",OwcWebAppBase_isReady);this.DeclareMethod("onSettingsLoaded",null);this.DeclareMethod("getAppUrl",OwcWebAppBase_getAppUrl);this.DeclareMethod("getAppVirPath",OwcWebAppBase_getAppVirPath);this.DeclareMethod("getPreference",OwcWebAppBase_getPreference);this.DeclareMethod("getPreferenceBoolean",OwcWebAppBase_getPreferenceBoolean);this.DeclareMethod("getPreferenceNumber",OwcWebAppBase_getPreferenceNumber);this.ReplaceMethod("getResString",OwcWebAppBase_getResString);this.DeclareMethod("formatResString",OwcWebAppBase_formatResString);this.DeclareMethod("getCommandState",OwcWebAppBase_getCommandState);this.DeclareMethod("getDocHRef",OwcWebAppBase_getDocHRef);this.DeclareMethod("getAppFrame",OwcWebAppBase_getAppFrame);this.DeclareMethod("getWindowOptions",OwcWebAppBase_getWindowOptions);this.DeclareMethod("openWindow",OwcWebAppBase_openWindow);this.DeclareMethod("updateRequestParams",OwcWebAppBase_updateRequestParams);this.DeclareMethod("hookSendRequest",OwcWebAppBase_hookSendRequest);this.DeclareMethod("reportLoadingTime",OwcWebAppBase_reportLoadingTime);this.DeclareMethod("_createPerformanceReportUrl",OwcWebAppBase_createPerformanceReportUrl);this.DeclareMethod("onErrorOccured",OwcWebAppBase_onErrorOccured);this.ReplaceMethod("reportError",OwcWebAppBase_reportError);this.DeclareMethod("prepareItemMailParams",OwcWebAppBase_prepareItemMailParams);this.DeclareMethod("registerAppCommands",OwcWebAppBase_registerAppCommands);this.DeclareMethod("addItemToFavorites",OwcWebAppBase_addItemToFavorites);this.DeclareMethod("copyItemToClipboard",OwcWebAppBase_copyItemToClipboard);this.DeclareMethod("createPDFDownloadLink",OwcWebAppBase_createPDFDownloadLink);this.DeclareMethod("hookQueryCmdUiSate",OwcWebAppBase_hookQueryCmdUiSate);this.DeclareMethod("_updateCopyLinkCmdUiState",OwcWebAppBase_updateCopyLinkCmdUiState);this.DeclareMethod("buildURL",OwcWebAppBase_buildURL);this.DeclareMethod("parseURL",OwcWebAppBase_parseURL);this.DeclareMethod("getItemTitle",OwcWebAppBase_getItemTitle);this.DeclareMethod("getShareTitle",OwcWebAppBase_getShareTitle);this.DeclareMethod("getItemDocTitle",OwcWebAppBase_getItemDocTitle);this.DeclareMethod("cloneObject",OwcWebAppBase_cloneObject);this.DeclareMethod("_FireGlobalEvents",OwcWebAppBase_FireGlobalEvents);this.DeclareMethod("enableDebugMode",OwcWebAppBase_enableDebugMode);}
Olive.WebAppBase.ApplyPrototype=function OwcWebAppBase_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("applicationReady");rObject.registerOwcEventsClass2("bookmarkAdded","onBookmarkAdded",true);}
Olive.WebAppBase.buildURLParametersFromContentItem=function(contentItem,bEncodeDecodeUrl)
{if(!contentItem)
return;var queryString=new QueryString();if(typeof(bEncodeDecodeUrl)=="boolean")
queryString.m_bBase64=bEncodeDecodeUrl;var viewKind=OwcContentItem_Document;var docHRef=contentItem.getDocHRef();if(docHRef)
queryString.addParam(Olive.WebAppBase.UrlParam.HRef,docHRef);if(("m_nPageNo"in contentItem)&&!!contentItem.m_nPageNo)
queryString.addParam(Olive.WebAppBase.UrlParam.PageNo,contentItem.m_nPageNo.toString());if(contentItem.DataObjectType==OwcContentItem_Entity||contentItem.DataObjectType==OwcContentItem_SearchResult)
{var entityId=contentItem.m_sEntityId;if(entityId)
{queryString.addParam(Olive.WebAppBase.UrlParam.Entity,entityId);viewKind=OwcContentItem_Entity;}}
else if(contentItem.DataObjectType==OwcContentItem_TocEntry)
{var tocEntryId=contentItem.m_nTocEntryId;if(tocEntryId>0)
{queryString.addParam(Olive.WebAppBase.UrlParam.TocEntry,tocEntryId);viewKind=OwcContentItem_TocEntry;}}
queryString.addParam(Olive.WebAppBase.UrlParam.View,viewKind);return queryString;}
function OwcWebAppBase_initialize()
{if(window.location)
{var sUrl=window.location.href;var nQueryPos=sUrl.indexOf("?");if(nQueryPos>=0)
this.m_sAppUrl=sUrl.substr(0,nQueryPos);else
this.m_sAppUrl=sUrl;this.m_oQueryString=new QueryString();this.m_oQueryString.parseUrl(sUrl);if(this.m_customParamNames!=null&&this.m_customParamNames.length>0)
{if(!this.m_oCustomRequestParams)
this.m_oCustomRequestParams=new QueryString();for(var i=0;i<this.m_customParamNames.length;++i)
{var paramName=this.m_customParamNames[i];this.m_oCustomRequestParams.moveParam(this.m_oQueryString,paramName,false);}}}
this.m_oDefaultPopupOptions=Olive.WindowOptions.getDefaultOptions();if(this.registerAppCommands)
this.registerAppCommands();this.loadSettings();this.WebApplication=OwcGetApplication();}
function OwcWebAppBase_loadSettings()
{var oRequest=Olive.XHTTP.CreateRequest();oRequest.m_oApplication=this;oRequest.onDataReceived=OwcWebAppBase_Request_onDataReceived;oRequest.onError=OwcWebAppBase_Request_onDataError;var settingsQuery=new QueryString();settingsQuery.addParam("Type","Settings");settingsQuery.addParam("For","Application");if(this.m_oQueryString)
settingsQuery.appendParams(this.m_oQueryString,false);if(this.m_oCustomRequestParams)
settingsQuery.appendParams(this.m_oCustomRequestParams,false);var sUrl=this.DataProviderUrl+"?"+settingsQuery.getQueryString();oRequest.load(sUrl,"GET");}
function OwcWebAppBase_parseSettings(oHttpRequest)
{var oXml=oHttpRequest.getResponseXml();if(oXml)
{this.parsePreferences(oXml);this.parseResources(oXml);this.parseCommandsStates(oXml)
this.parseWindowOptions(oXml);}
this.m_bSettingsLoaded=true;this.DataProviderUrl=this.getPreference(OwcPref_AppDataProvider,this.DataProviderUrl);this.m_sAppUrl=this.getPreference(OwcPref_AppUrl,this.m_sAppUrl);this.m_sAppVirPath=this.getPreference(OwcPref_AppVirPath,this.m_sAppVirPath);if(this.onSettingsLoaded)
this.onSettingsLoaded();var oEvent=this.createOwcEventObject("applicationReady");this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcWebAppBase_parsePreferences(oXml)
{var oPrefRootElem=getChildObjectByTag(oXml,"Preferences",0);if(!oPrefRootElem)
return;if(!this.m_arrPreferences)
this.m_arrPreferences=new Object();var arrPreferences=getChildObjsByTag(oPrefRootElem,"Prop");for(var iProp=0;iProp<arrPreferences.length;++iProp)
{var oPropElem=arrPreferences[iProp];var sName=DHTML.getAttr(oPropElem,"name");var sValue=DHTML.getTextContent(oPropElem);this.m_arrPreferences[sName]=sValue;}}
function OwcWebAppBase_parseResources(oXml)
{var arrStrings=getChildObjsByTag(oXml,"LocaleString");if(!arrStrings||arrStrings.length==0)
return;if(!this.m_arrStringTable)
this.m_arrStringTable=new Object();for(var iRes=0;iRes<arrStrings.length;++iRes)
{var oStringRes=arrStrings[iRes];var sName=DHTML.getAttr(oStringRes,"NAME");var sValue=DHTML.getTextContent(oStringRes);this.m_arrStringTable[sName]=sValue;}}
function OwcWebAppBase_parseWindowOptions(oXml)
{var arrOptionElem=getChildObjsByTag(oXml,"WindowOptions");if(!arrOptionElem||arrOptionElem.length==0)
return;if(!this.m_arrWindowOptions)
this.m_arrWindowOptions=new Array();for(var iOption=0;iOption<arrOptionElem.length;++iOption)
{var oWindowOptionsElem=arrOptionElem[iOption];var sWindowName=DHTML.getAttr(oWindowOptionsElem,"name");var oWindowOptions=new Olive.WindowOptions();var sEmulated=DHTML.getAttr(oWindowOptionsElem,"emulated");if(sEmulated&&sEmulated.toLowerCase()=="yes")
{oWindowOptions.windowType=Olive.WindowOptions.Types.emulatedpopup;}
var sTitle=DHTML.getAttr(oWindowOptionsElem,"title");if(sTitle)
oWindowOptions.m_sTitle=sTitle;var arrHtmlAttr=oWindowOptionsElem.attributes;var iAttr,nAttrCount=arrHtmlAttr.length;for(iAttr=0;iAttr<nAttrCount;++iAttr)
{var oHtmlAttr=arrHtmlAttr.item(iAttr);var sName=oHtmlAttr.nodeName;if(sName=="name")
continue;if((sName in oWindowOptions)||("m_n"+sName in oWindowOptions))
{if(typeof(oWindowOptions[sName])=="boolean")
oWindowOptions[sName]=String_parseBoolean(oHtmlAttr.nodeValue);else
oWindowOptions[sName]=oHtmlAttr.nodeValue;}
else
{var bFeature=String_parseBoolean(oHtmlAttr.nodeValue);oWindowOptions.setFeature(sName,bFeature);}}
if(sWindowName)
this.m_arrWindowOptions[sWindowName.toLowerCase()]=oWindowOptions;else
this.m_oDefaultPopupOptions=oWindowOptions;}}
function OwcWebAppBase_parseCommandsStates(oXml)
{var oRootCommandsListElem=getChildObjectByTag(oXml,"CommandStates");if(!oRootCommandsListElem)
return;var arrStylesElem=getChildObjsByTag(oRootCommandsListElem,"State");if(!arrStylesElem||arrStylesElem.length==0)
return;if(!this.m_arrCommandStates)
this.m_arrCommandStates=new Object();for(var iStyle=0;iStyle<arrStylesElem.length;iStyle++)
{var oStyleNode=arrStylesElem[iStyle];var sStyleType=DHTML.getAttr(oStyleNode,"type");var arrCommands=getChildObjsByTag(oStyleNode,"Command");for(var iCommand=0;iCommand<arrCommands.length;iCommand++)
{var oCommand=arrCommands[iCommand];var sCommandName=DHTML.getAttr(oCommand,"id");if(sCommandName)
sCommandName=sCommandName.toLowerCase();else
continue;var sTargetType=DHTML.getAttr(oCommand,"command-taret-type");if(!sTargetType)
sTargetType="default";if(!this.m_arrCommandStates[sCommandName])
this.m_arrCommandStates[sCommandName]=new Object();this.m_arrCommandStates[sCommandName][sTargetType]=sStyleType;}}}
function OwcWebAppBase_Request_onDataReceived()
{var sResponseText=this.getResponseText();var sErrMsg=this.getResponsePart("<Error><![CDATA[","]]></Error>",sResponseText);if(sErrMsg)
{var msgErrCode=this.getResponsePart("<err><code>","</code>",sErrMsg);var loginUrl="";if(msgErrCode==Olive.Errors.Code.AuthenticationFailed)
{loginUrl=this.getResponsePart("<url>","</url>",sErrMsg);sErrMsg=this.getResponsePart("<description>","</description>",sErrMsg);}
this.onError(Olive.Errors.Code.LoadDataFailed,sErrMsg);if(loginUrl&&loginUrl!="")
window.top.location=loginUrl;return;}
this.m_oApplication.parseSettings(this);this.m_oApplication=null;}
function OwcWebAppBase_Request_onDataError(nErrCode,sErrMsg)
{this.m_oApplication.reportKnownError(Olive.Errors.Code.CannotLoadSettings,sErrMsg);this.m_oApplication=null;}
function OwcWebAppBase_isReady()
{return this.m_bSettingsLoaded;}
function OwcWebAppBase_getAppUrl()
{return this.m_sAppUrl;}
function OwcWebAppBase_getAppVirPath()
{return this.m_sAppVirPath;}
function OwcWebAppBase_getPreference(sPrefName,vDefault)
{if(this.m_arrPreferences&&(sPrefName in this.m_arrPreferences))
return this.m_arrPreferences[sPrefName];return vDefault;}
function OwcWebAppBase_getPreferenceBoolean(sPrefName,vDefault)
{var vProp=this.getPreference(sPrefName,vDefault);if(typeof(vProp)!="boolean")
vProp=String_parseBoolean(String(vProp));return vProp;}
function OwcWebAppBase_getPreferenceNumber(sPrefName,vDefault)
{var vProp=this.getPreference(sPrefName,vDefault);if(typeof(vProp)!="number")
{var sProp=String(vProp);if(sProp.search(/0x/gi)==0)
vProp=parseInt(sProp,16);else
vProp=parseInt(sProp,10);}
return vProp;}
function OwcWebAppBase_getResString(sResName)
{if(!sResName)
return"";sResName=sResName.toUpperCase();if(this.m_arrStringTable&&(sResName in this.m_arrStringTable))
return this.m_arrStringTable[sResName];return Olive.Resources.getResString(sResName);}
function OwcWebAppBase_formatResString(sResName)
{var sFormatString=this.getResString(sResName);return String_format_arg(sFormatString,arguments,1);}
function OwcWebAppBase_getCommandState(sCommandName,oTargetObject)
{if(!sCommandName)
return null;sCommandName=sCommandName.toLowerCase();if(!this.m_arrCommandStates||!this.m_arrCommandStates[sCommandName])
return null;sTargetType=JScript.Type.GetObjectTypeInfoName(oTargetObject);if(this.m_arrCommandStates[sCommandName][sTargetType])
return this.m_arrCommandStates[sCommandName][sTargetType];if(this.m_arrCommandStates[sCommandName]["default"])
return this.m_arrCommandStates[sCommandName]["default"];return null;}
function OwcWebAppBase_getDocHRef()
{return"";}
function OwcWebAppBase_getAppFrame()
{return window;}
function OwcWebAppBase_getWindowOptions(sWindowName,bDoNotReturnDefaults)
{var oOptions=null;if(this.m_arrWindowOptions)
oOptions=this.m_arrWindowOptions[sWindowName.toLowerCase()];if(oOptions)
return oOptions;return(bDoNotReturnDefaults?null:this.m_oDefaultPopupOptions);}
function OwcWebAppBase_openWindow(sURL,sName,sFeatures,bReplace)
{if(typeof bReplace=="boolean"){return window.open(sURL,sName,sFeatures,bReplace);}else{return window.open(sURL,sName,sFeatures);}}
function OwcWebAppBase_updateRequestParams(oParams)
{if(this.m_oCustomRequestParams)
oParams.appendParams(this.m_oCustomRequestParams);}
function OwcWebAppBase_hookSendRequest(oRequest)
{}
function OwcWebAppBase_reportLoadingTime()
{if(!this.m_LoadingStartedTime||!this.m_LoadingEndedTime)
return;var oRequest=Olive.XHTTP.CreateRequest();if(!oRequest)
return;var sReportUrl=this._createPerformanceReportUrl();oRequest.load(sReportUrl,"POST",true,"");}
function OwcWebAppBase_createPerformanceReportUrl()
{var oPerformanceReportContentItem=new Olive.ContentItem.PerformanceReport();if(!oPerformanceReportContentItem)
return;oPerformanceReportContentItem.m_nAppLoadingTime=this.m_LoadingEndedTime.getTime()-this.m_LoadingStartedTime.getTime();var oParams=new QueryString();oPerformanceReportContentItem.buildRefParams(oParams);var sPerfReportUrl=this.DataProviderUrl;sPerfReportUrl+="?"+oParams.getQueryString();sPerfReportUrl+="&For=PerformanceReport";return sPerfReportUrl;}
function OwcWebAppBase_onErrorOccured(oEvent)
{this.reportError(oEvent.ErrorObject,oEvent.srcObject);}
function OwcWebAppBase_reportError(oError,oErrorSource)
{if(oErrorSource)
oErrorSource.displayMessage(oError.message);else
this.displayMessage(oError.message);}
function OwcWebAppBase_prepareItemMailParams(oContentItem)
{var oMailParams=new Object();var sLinkUrl=this.buildURL(oContentItem);var sEntryTitle=this.getItemTitle(oContentItem);var sDocTitle=this.getItemDocTitle(oContentItem);if(sEntryTitle!="")
{if(sDocTitle=="")
{oMailParams.subject=sEntryTitle;}
else
{oMailParams.subject=this.formatResString(Olive.Resources.ResName.EMailSubjectFormat,sEntryTitle,sDocTitle);}}
else if(sDocTitle!="")
oMailParams.subject=sDocTitle;else
oMailParams.subject=this.getResString(Olive.Resources.ResName.EMailSubjectDefault);oMailParams.body=this.formatResString(Olive.Resources.ResName.EMailBodyFormat,oMailParams.subject,sLinkUrl,sEntryTitle,sDocTitle);oMailParams.from=this.getPreference(OwcPref_MailField_From,"sample@olivesoftware.com");oMailParams.oSrcContentItem=oContentItem;return oMailParams;}
function OwcWebAppBase_registerAppCommands()
{Olive.CmdTarget.RegisterCommand(this,OwcCmd_AddToFavorites,"addItemToFavorites");Olive.CmdTarget.RegisterCommand(this,OwcCmd_CopyLink,"copyItemToClipboard","_updateCopyLinkCmdUiState");}
function OwcWebAppBase_addItemToFavorites(oSrc)
{var oContentItem=Olive.Controls.IDataBound.getContentItem(oSrc);if(!oContentItem)
return;var sLinkUrl=this.buildURL(oContentItem,oSrc);var sEntryTitle=this.getItemTitle(oContentItem);if(sEntryTitle=="")
{sEntryTitle=this.getItemDocTitle(oContentItem);if(sEntryTitle=="")
sEntryTitle=this.getResString(Olive.Resources.ResName.DefaultFavoritesTitle);}
if(!DHTML.addToFavorites(sLinkUrl,sEntryTitle))
this.reportKnownError(Olive.Errors.Code.AddToFavoritesNotSupported);else
{var objEvent=this.createOwcEventObject("bookmarkAdded");objEvent.OlvContentItem=oContentItem;this.fireOwcEvent(objEvent);Object_Destroy(objEvent);}}
function OwcWebAppBase_createPDFDownloadLink(oSrc,sLinkType,bPhysicalPath)
{if(!oSrc)
{throw DHTML.newError(689,"The arguments are not valid.");return;}
var oContentItem=Olive.Controls.IDataBound.getContentItem(oSrc);if(!oContentItem)
return;var oDownloadContentItem=new Olive.ContentItem.PDFDownload();if(!oDownloadContentItem)
return;oDownloadContentItem.m_sDocHRef=oContentItem.getDocHRef();oDownloadContentItem.m_sItemType=sLinkType;if(undefined!=bPhysicalPath)
oDownloadContentItem.m_bPhysicalPath=!!bPhysicalPath;var nPageNum=oSrc.getPageNo();if(nPageNum>0)
oDownloadContentItem.m_nPageNo=nPageNum;var oParams=new QueryString();oDownloadContentItem.buildRefParams(oParams);var sLink=oSrc.getDataProviderUrl();sLink+="?"+oParams.getQueryString();sLink+="&Type=Content&For=PdfDownload";return sLink;}
function OwcWebAppBase_hookQueryCmdUiSate(oCmdUiState,handlerObject)
{var sState=this.getCommandState(oCmdUiState.commandName,handlerObject);if(sState)
{switch(sState)
{case"hidden":oCmdUiState.showCommand(false);oCmdUiState.enableCommand(false);return true;break;case"disabled":oCmdUiState.enableCommand(false);return true;break;}}
return false;}
function OwcWebAppBase_copyItemToClipboard(oSrc)
{var oContentItem=Olive.Controls.IDataBound.getContentItem(oSrc);if(!oContentItem)
return;if(!isVersionOf_IE_AtLeast5_5())
{this.reportKnownError(Olive.Errors.Code.ClipboardNotSupported);return;}
var sLinkUrl=this.buildURL(oContentItem,oSrc);var res=window.clipboardData.setData("Text",sLinkUrl);if(!res)
this.reportKnownError(Olive.Errors.Code.CopyToClipboardFailed,sLinkUrl);}
function OwcWebAppBase_updateCopyLinkCmdUiState(oCmdUiState)
{var bCommandEnabled=isVersionOf_IE_AtLeast5_5();oCmdUiState.enableCommand(bCommandEnabled);}
function OwcWebAppBase_buildURL(oContentItem,oSourceConrtrol)
{var sUrl=this.getAppUrl();var queryString=Olive.WebAppBase.buildURLParametersFromContentItem(oContentItem);var sUrlParams=queryString.getQueryString();if(sUrlParams)
sUrl+=("?"+sUrlParams);return sUrl;}
function OwcWebAppBase_parseURL()
{}
function OwcWebAppBase_getItemTitle(oContentItem)
{if(!oContentItem||!oContentItem.m_sTitle)
return"";var sEntryTitle=oContentItem.m_sTitle;if(sEntryTitle.length>=Olive.WebAppBase.MaxTitleLength)
{sEntryTitle=sEntryTitle.substring(0,Olive.WebAppBase.MaxTitleLength)+"...";}
return sEntryTitle;}
function OwcWebAppBase_getShareTitle(oContentItem)
{var result="";if(!oContentItem)
return result;var sEntryTitle="";if(oContentItem.m_sTitle)
{sEntryTitle=oContentItem.m_sTitle;if(sEntryTitle.length>=this.m_nICMaxTitleLength)
{sEntryTitle=sEntryTitle.substring(0,this.m_nICMaxTitleLength)+"...";}
result=sEntryTitle;}
else
{var sIssueName=this.getIssueName(oContentItem);var sPages=oContentItem.m_sPageLabel?oContentItem.m_sPageLabel:oContentItem.m_nPageNo;result=this.formatResString("SWEntityTitleFormat",sEntryTitle,sPages,sIssueName);}
return result;}
function OwcWebAppBase_getItemDocTitle(oContentItem)
{while(oContentItem)
{if(oContentItem.m_sDocName)
return oContentItem.m_sDocName;oContentItem=oContentItem.m_oParentItem;}
return"";}
function OwcWebAppBase_cloneObject(oSrcObject)
{return Object_Clone(oSrcObject);}
OwcWebAppBase_FireGlobalEvents=function(oEvent)
{if(!this.g_arrGlobalEvents)
return;var bIsBubbling=(oEvent.srcObject!=oEvent.curObject);var sourceObj=oEvent.srcObject;var oSourceObjTypeInfo=JScript.Type.GetObjectTypeInfo(sourceObj);if(!oSourceObjTypeInfo)
return;var arrSourceTypes=this.g_arrGlobalEvents[oEvent.type];if(!!arrSourceTypes)
{for(var index in arrSourceTypes)
{var oTypeHandlerContainer=arrSourceTypes[index];if(bIsBubbling&&!oTypeHandlerContainer.allowBubbling)
continue;var sTypeName=oTypeHandlerContainer.getTypeName();if(sTypeName==""||oSourceObjTypeInfo.IsDerivedFrom(sTypeName))
{var oDelegate=oTypeHandlerContainer.getHandler();oDelegate.call(null,oEvent);}}}
arrSourceTypes=this.g_arrGlobalEvents["All Events"];if(!!arrSourceTypes)
{for(var index in arrSourceTypes)
{var oTypeHandlerContainer=arrSourceTypes[index];if(bIsBubbling&&!oTypeHandlerContainer.allowBubbling)
continue;var sTypeName=oTypeHandlerContainer.getTypeName();if(sTypeName==""||oSourceObjTypeInfo.IsDerivedFrom(sTypeName))
{var oDelegate=oTypeHandlerContainer.getHandler();oDelegate.call(null,oEvent);}}}}
function OwcWebAppBase_enableDebugMode(bEnable)
{if(bEnable==undefined)
bEnable=true;if(bEnable)
{if(!this.m_oCustomRequestParams)
this.m_oCustomRequestParams=new QueryString();this.m_oCustomRequestParams.addParam(OwcUrlParam_Debug,"save-all");if(document.addEventListener)
document.addEventListener("keypress",OwcWebAppBase_DHTML_onKeyPress,false);else if("attachEvent"in document)
document.attachEvent("onkeypress",OwcWebAppBase_DHTML_onKeyPress);}
else
{if(this.m_oCustomRequestParams)
this.m_oCustomRequestParams.removeParam(OwcUrlParam_Debug);}}
function OwcWebAppBase_DHTML_onKeyPress(oEvent)
{if(!oEvent)
oEvent=window.event;if(oEvent.shiftKey&&oEvent.ctrlKey&&(oEvent.charCode==68||oEvent.keyCode==4))
{alert("debugger");if(oEvent.stopPropagation)
oEvent.stopPropagation();else
oEvent.cancelBubbling=true;}}
JScript.Type.RegisterClass("Olive.WebAppBase",Olive.WebAppBase,Olive.CmdTarget,[Olive.IBookmarkService]);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.ImageViewer="image-viewer";Olive.Controls.attributes.src=Olive.Controls.prefix+":"+"src";Olive.Controls.attributes.fitMode=Olive.Controls.prefix+":"+"fit-mode";Olive.Controls.attributes.scaleMethod=Olive.Controls.prefix+":"+"scale-method";Olive.Controls.attributes.basicLeft=Olive.Controls.prefix+":"+"basic-left";Olive.Controls.attributes.basicTop=Olive.Controls.prefix+":"+"basic-top";Olive.Controls.attributes.basicWidth=Olive.Controls.prefix+":"+"basic-width";Olive.Controls.attributes.basicHeight=Olive.Controls.prefix+":"+"basic-height";Olive.Controls.attributes.basicScale=Olive.Controls.prefix+":"+"basic-scale";Olive.Controls.attributes.repositionOnZoom=Olive.Controls.prefix+":"+"reposition-on-zoom";if(!Olive.Controls.IImageViewer)
{Olive.Controls.IImageViewer=new Interface("Olive.Controls.IImageViewer");Olive.Controls.IImageViewer.ScaleMethod={Auto:"auto",HtmlWidthHeight:"html",CssFilter:"css-filter",CanvasScale:"canvas-scale"};Olive.Controls.IImageViewer.Implement=function OwcIImageViewer_Implement(rObject,bDynamic)
{if(!this.Register(rObject,bDynamic))
return;Olive.Controls.IZoomable.ImplementInterface(rObject,bDynamic);JScript.Type.DeclareField(rObject,"m_sScaleMethod",Olive.Controls.IImageViewer.ScaleMethod.Auto);JScript.Type.DeclareField(rObject,"m_sActualScaleMethod",null);JScript.Type.DeclareField(rObject,"m_nMaxImageWidth",-1);JScript.Type.DeclareField(rObject,"m_nMaxImageHeight",-1);JScript.Type.DeclareField(rObject,"m_sImageUrl","");JScript.Type.DeclareField(rObject,"m_bAttachedToImage",false);JScript.Type.DeclareField(rObject,"m_bImageLoaded",false);JScript.Type.DeclareField(rObject,"m_bIsLoading",false);JScript.Type.DeclareField(rObject,"m_oImage",null);JScript.Type.DeclareField(rObject,"m_bAutoMagnify",false);JScript.Type.DeclareField(rObject,"m_nRetryCount",0);JScript.Type.DeclareField(rObject,"m_nMaxRetryCount",5);JScript.Type.DeclareField(rObject,"m_nNaturalWidth",0);JScript.Type.DeclareField(rObject,"m_nNaturalHeight",0);JScript.Type.DeclareField(rObject,"m_bNaturalWidthHeightCalculated",false);JScript.Type.DeclareMethod(rObject,"getScaleMethod",ImageViewer_getScaleMethod);JScript.Type.DeclareMethod(rObject,"setScaleMethod",ImageViewer_setScaleMethod);JScript.Type.DeclareMethod(rObject,"calculateScaleMethod",ImageViewer_calculateScaleMethod);JScript.Type.DeclareMethod(rObject,"isImageLoaded",ImageViewer_isImageLoaded);JScript.Type.DeclareMethod(rObject,"getImageUrl",ImageViewer_getImageUrl);JScript.Type.DeclareMethod(rObject,"setImageUrl",ImageViewer_setImageUrl);JScript.Type.DeclareMethod(rObject,"calcNaturalWidthHeight",ImageViewer_calcNaturalWidthHeight);JScript.Type.DeclareMethod(rObject,"getNaturalWidth",ImageViewer_getNaturalWidth);JScript.Type.DeclareMethod(rObject,"getNaturalHeight",ImageViewer_getNaturalHeight);JScript.Type.DeclareMethod(rObject,"getImageWidth",ImageViewer_getImageWidth);JScript.Type.DeclareMethod(rObject,"getImageHeight",ImageViewer_getImageHeight);JScript.Type.DeclareMethod(rObject,"getMaxImageWidth",ImageViewer_getMaxImageWidth);JScript.Type.DeclareMethod(rObject,"setMaxImageWidth",ImageViewer_setMaxImageWidth);JScript.Type.DeclareMethod(rObject,"getMaxImageHeight",ImageViewer_getMaxImageHeight);JScript.Type.DeclareMethod(rObject,"setMaxImageHeight",ImageViewer_setMaxImageHeight);JScript.Type.DeclareMethod(rObject,"onImageLoaded",ImageViewer_onImageLoaded);JScript.Type.DeclareMethod(rObject,"onImageError",ImageViewer_onImageError);JScript.Type.DeclareMethod(rObject,"attachMagnifier",ImageViewer_attachMagnifier);JScript.Type.DeclareMethod(rObject,"htmlGetNestedElement",ImageViewer_htmlGetNestedElement);JScript.Type.DeclareMethod(rObject,"htmlUpdateContent",ImageViewer_htmlUpdateContent);JScript.Type.DeclareMethod(rObject,"htmlUpdateZoom",HtmlWidthHeight_htmlUpdateZoom);JScript.Type.OverrideMethod(rObject,"bindHtmlElement",ImageViewer_bindHtmlElement);JScript.Type.OverrideMethod(rObject,"parseControlHtmlAttr",ImageViewer_parseControlHtmlAttr);JScript.Type.OverrideMethod(rObject,"initControl",ImageViewer_initControl);rObject.registerOwcEventsClass2("imageProcessed","onImageProcessed",true);};function ImageViewer_bindHtmlElement(oHtmlElement)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.m_bAttachedToImage=DHTML.isImageElem(oHtmlElement);if(this.m_bAttachedToImage)
{this.m_oImage=oHtmlElement;this.setFitMode(Olive.Controls.IZoomable.FitMode.None);}
else
this.m_oImage=document.createElement("img");this.m_oImage.Viewer=this;this.m_oImage.onload=Image_onLoaded;this.m_oImage.onerror=Image_onError;this.setScaleMethod(this.m_sScaleMethod);}
function ImageViewer_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var attributes=Olive.Controls.attributes;this.m_sImageUrl=DHTML.getAttr(this.HtmlElement,attributes.src);this.m_nMaxImageWidth=DHTML.getAttrNumber(this.HtmlElement,attributes.MaxImageWidth,this.m_nMaxImageWidth);this.m_nMaxImageHeight=DHTML.getAttrNumber(this.HtmlElement,attributes.MaxImageHeight,this.m_nMaxImageHeight);this.m_bAutoMagnify=DHTML.getAttrBoolean(this.HtmlElement,attributes.autoMagnify,this.m_bAutoMagnify);var sScaleMethod=DHTML.getAttr(this.HtmlElement,attributes.scaleMethod);if(sScaleMethod)
this.setScaleMethod(sScaleMethod);}
function ImageViewer_initControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_bAutoMagnify)
this.attachMagnifier();if(this.m_sImageUrl&&!this.m_bIsLoading)
this.setImageUrl(this.m_sImageUrl);}
function ImageViewer_getScaleMethod()
{return this.m_sScaleMethod;}
function ImageViewer_setScaleMethod(sMethod)
{this.calculateScaleMethod(sMethod);if(this.isImageLoaded())
this.htmlUpdateContent();}
function ImageViewer_calculateScaleMethod(sMethod)
{sMethod=sMethod.toLowerCase();this.scaleMethod_prepareHTML=null;this.scaleMethod_reinitializeImage=null;this.m_sScaleMethod=sMethod;var nZoom=this.getZoom();if(this.m_bAttachedToImage)
sMethod=Olive.Controls.IImageViewer.ScaleMethod.HtmlWidthHeight;else if(sMethod==Olive.Controls.IImageViewer.ScaleMethod.Auto)
{if(this.m_nBasicScale==1&&nZoom==1&&this.m_sFitMode==Olive.Controls.IZoomable.FitMode.None)
sMethod=Olive.Controls.IImageViewer.ScaleMethod.HtmlWidthHeight;else if(isVersionOf_IE_AtLeast5_5())
sMethod=Olive.Controls.IImageViewer.ScaleMethod.CssFilter;else if(isMacintosh())
sMethod=Olive.Controls.IImageViewer.ScaleMethod.HtmlWidthHeight;else
{sMethod=Olive.Controls.IImageViewer.ScaleMethod.HtmlWidthHeight;}}
this.m_sActualScaleMethod=sMethod;switch(sMethod)
{case Olive.Controls.IImageViewer.ScaleMethod.CssFilter:this.htmlUpdateZoom=CssFilter_htmlUpdateZoom;break;case Olive.Controls.IImageViewer.ScaleMethod.CanvasScale:this.scaleMethod_prepareHTML=Canvas_prepareHTML;this.htmlUpdateZoom=CanvasScale_htmlUpdateZoom;if(isSafari())
this.scaleMethod_reinitializeImage=CanvasScale_reinitializeImage;break;default:this.htmlUpdateZoom=HtmlWidthHeight_htmlUpdateZoom;this.m_sActualScaleMethod=Olive.Controls.IImageViewer.ScaleMethod.HtmlWidthHeight;break;}}
function ImageViewer_isImageLoaded()
{return(this.m_oImage&&this.m_bImageLoaded);}
function ImageViewer_getImageUrl()
{return this.m_oImage.src;}
function ImageViewer_setImageUrl(sUrl,bDoNotCheckRetryCount)
{if(this&&this.m_oImage)
{this.m_bNaturalWidthHeightCalculated=false;this.m_bWidthHeightCalculated=false;if(bDoNotCheckRetryCount)
{this.m_bImageLoaded=false;this.m_bIsLoading=true;this.m_oImage.src=sUrl;}
else if(this.m_nRetryCount<this.m_nMaxRetryCount)
{this.m_nRetryCount++;this.m_bImageLoaded=false;this.m_bIsLoading=true;this.m_sImageUrl=sUrl;this.m_oImage.src=sUrl;}}}
function ImageViewer_calcNaturalWidthHeight()
{if(!this.m_bNaturalWidthHeightCalculated)
{this.m_nNaturalWidth=0;this.m_nNaturalHeight=0;if(this.isImageLoaded())
{if(this.m_oImage.width>0&&this.m_oImage.height>0)
{this.m_nNaturalWidth=this.m_oImage.width;this.m_nNaturalHeight=this.m_oImage.height;}
else
{if(this.m_bAttachedToImage)
{var sPrevWidth=this.m_oImage.style.width;var sPrevHeight=this.m_oImage.style.height;this.m_oImage.style.width="auto";this.m_oImage.style.height="auto";if(this.m_oImage.width>0&&this.m_oImage.height>0)
{this.m_nNaturalWidth=this.m_oImage.width;this.m_nNaturalHeight=this.m_oImage.height;}
this.m_oImage.style.width=sPrevWidth;this.m_oImage.style.height=sPrevHeight;}
else
{var oImgElem=this.htmlGetNestedElement("img");if(oImgElem&&oImgElem.width>0&&oImgElem.height>0)
{this.m_nNaturalWidth=oImgElem.width;this.m_nNaturalHeight=oImgElem.height;}}}}
if(this.m_nNaturalWidth>0&&this.m_nNaturalHeight>0)
this.m_bNaturalWidthHeightCalculated=true;}}
function ImageViewer_getNaturalWidth()
{this.calcNaturalWidthHeight();return this.m_nNaturalWidth;}
function ImageViewer_getNaturalHeight()
{this.calcNaturalWidthHeight();return this.m_nNaturalHeight;}
function ImageViewer_getImageWidth()
{var nRetVal=0;if(this.isImageLoaded())
{this.calculateWidthHeight();if(this.m_bWidthHeightCalculated)
nRetVal=this.m_nCalculatedWidth;}
return nRetVal;}
function ImageViewer_getImageHeight()
{var nRetVal=0;if(this.isImageLoaded())
{this.calculateWidthHeight();if(this.m_bWidthHeightCalculated)
nRetVal=this.m_nCalculatedHeight;}
return nRetVal;}
function ImageViewer_getMaxImageWidth()
{return this.m_nMaxImageWidth;}
function ImageViewer_setMaxImageWidth(nWidth)
{if(!isNaN(nWidth))
this.m_nMaxImageWidth=nWidth;}
function ImageViewer_getMaxImageHeight()
{return this.m_nMaxImageHeight;}
function ImageViewer_setMaxImageHeight(nHeight)
{if(!isNaN(nHeight))
this.m_nMaxImageHeight=nHeight;}
function ImageViewer_onImageLoaded()
{this.m_bImageLoaded=true;this.m_bIsLoading=false;this.htmlUpdateContent();var oEvent=this.createOwcEventObject("imageProcessed");oEvent.bSuccess=true;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function ImageViewer_onImageError()
{this.m_bImageLoaded=false;this.m_bIsLoading=false;var oEvent=this.createOwcEventObject("imageProcessed");oEvent.bSuccess=false;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function ImageViewer_attachMagnifier()
{var oPage=this.get_WebPage();var magnifierControl=oPage.getMagnifier(this);if(magnifierControl)
DHTML.attachEvent(this.HtmlElement,"mouseover",function(){magnifierControl.onShow.apply(magnifierControl,arguments);});}
function ImageViewer_htmlUpdateContent()
{if(!this.m_bAttachedToImage)
{if(this.scaleMethod_prepareHTML)
{if(this.m_sActualScaleMethod==Olive.Controls.IImageViewer.ScaleMethod.CanvasScale&&isSafari())
{this.HtmlElement.innerHTML="";var oClone=this.m_oImage.cloneNode(true);var oChild=this.HtmlElement.appendChild(oClone);this.calculateWidthHeight();this.HtmlElement.removeChild(oChild);}
this.HtmlElement.innerHTML=this.scaleMethod_prepareHTML();}
else
{this.HtmlElement.innerHTML="";this.HtmlElement.appendChild(this.m_oImage.cloneNode(true));}}
this.updateZoom();}
function Image_onLoaded()
{if(this.Viewer.onImageLoaded)
this.Viewer.onImageLoaded();}
function Image_onError()
{if(this.Viewer.onImageError)
this.Viewer.onImageError();}
function ImageViewer_htmlGetNestedElement(sTagName,iIndex)
{if(iIndex==undefined)
iIndex=0;var arrElements=this.HtmlElement.getElementsByTagName(sTagName);if(arrElements.length<=iIndex)
return;return arrElements.item(iIndex);}
function HtmlWidthHeight_htmlUpdateZoom()
{var oImgElem=null;if(this.m_bAttachedToImage)
oImgElem=this.m_oImage;else
oImgElem=this.htmlGetNestedElement("img");if(oImgElem)
{var nWidth=this.getNaturalWidth(oImgElem);var nHeight=this.getNaturalHeight(oImgElem);this.m_nZoomFactor=this.calcFitZoomFactor(this.m_sFitMode);var nZoom=this.getZoom();oImgElem.style.width=String(nWidth*nZoom)+"px";oImgElem.style.height=String(nHeight*nZoom)+"px";}
return true;}
function CssFilter_htmlUpdateZoom()
{var oImgElem=this.htmlGetNestedElement("img");if(oImgElem)
{this.m_nZoomFactor=this.calcFitZoomFactor(this.m_sFitMode);var nZoom=this.getZoom();oImgElem.style.filter="progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11='"+String(nZoom)+"', M22='"+String(nZoom)+"')";}
return true;}
function Canvas_prepareHTML()
{return"<div style='position: relative;'><canvas></canvas></div>";}
function CanvasScale_reinitializeImage(oDiv)
{if(oDiv)
{var oMainDiv=oDiv.parentNode;oMainDiv.removeChild(oDiv);if(this.scaleMethod_prepareHTML)
this.HtmlElement.innerHTML=this.scaleMethod_prepareHTML();}}
function CanvasScale_htmlUpdateZoom()
{var bOK=true;var nZoom=null;var nWidth=null;var nHeight=null;var oDivElem=this.htmlGetNestedElement("div");if(oDivElem)
{if(this.scaleMethod_reinitializeImage)
{this.scaleMethod_reinitializeImage(oDivElem);}
nWidth=this.getNaturalWidth();nHeight=this.getNaturalHeight();this.m_nZoomFactor=this.calcFitZoomFactor(this.m_sFitMode);nZoom=this.getZoom();oDivElem.style.width=String(nWidth*nZoom)+"px";oDivElem.style.height=String(nHeight*nZoom)+"px";}
var oCanvas=this.htmlGetNestedElement("canvas");if(oCanvas)
{nZoom=this.getZoom();nWidth=this.getNaturalWidth();nHeight=this.getNaturalHeight();oCanvas.setAttribute('width',nWidth*nZoom);oCanvas.setAttribute('height',nHeight*nZoom);var ctx=oCanvas.getContext('2d');ctx.scale(nZoom,nZoom);try
{ctx.drawImage(this.m_oImage,0,0,nWidth,nHeight);}
catch(ex)
{bOK=false;this.setImageUrl(this.m_sImageUrl);}}
return bOK;}}
if(!Olive.Controls.IZoomable)
{Olive.Controls.IZoomable=new Interface("Olive.Controls.IZoomable");Olive.Controls.IZoomable.FitMode={None:"none",FitToWidth:"width",FitToHeight:"height",FitToWindow:"window"};Olive.Controls.IZoomable.Implement=function OwcIZoomable_Implement(rObject,bDynamic)
{if(!this.Register(rObject,bDynamic))
return;JScript.Type.DeclareField(rObject,"m_nZoomFactor",1.0);JScript.Type.DeclareField(rObject,"m_sFitMode",Olive.Controls.IZoomable.FitMode.FitToWindow);JScript.Type.DeclareField(rObject,"m_nBasicLeft",0);JScript.Type.DeclareField(rObject,"m_nBasicTop",0);JScript.Type.DeclareField(rObject,"m_nBasicWidth",0);JScript.Type.DeclareField(rObject,"m_nBasicHeight",0);JScript.Type.DeclareField(rObject,"m_nBasicScale",null);JScript.Type.DeclareField(rObject,"m_bRepositionOnZoom",false);JScript.Type.DeclareField(rObject,"m_nCalculatedWidth",0);JScript.Type.DeclareField(rObject,"m_nCalculatedHeight",0);JScript.Type.DeclareField(rObject,"m_bWidthHeightCalculated",false);JScript.Type.OverrideMethod(rObject,"parseControlHtmlAttr",OwcIZoomable_parseControlHtmlAttr);JScript.Type.DeclareMethod(rObject,"getZoom",OwcIZoomable_getZoom);JScript.Type.DeclareMethod(rObject,"setZoom",OwcIZoomable_setZoom);JScript.Type.DeclareMethod(rObject,"setFitMode",OwcIZoomable_setFitMode);JScript.Type.DeclareMethod(rObject,"redrawObjectOnZoom");JScript.Type.DeclareMethod(rObject,"updatePositionForZoom",OwcIZoomable_updatePositionForZoom);JScript.Type.DeclareMethod(rObject,"zoomIn",OwcIZoomable_zoomIn);JScript.Type.DeclareMethod(rObject,"zoomOut",OwcIZoomable_zoomOut);JScript.Type.DeclareMethod(rObject,"zoomToFitWidth",OwcIZoomable_zoomToFitWidth);JScript.Type.DeclareMethod(rObject,"zoomToFitHeight",OwcIZoomable_zoomToFitHeight);JScript.Type.DeclareMethod(rObject,"zoomToFitWindow",OwcIZoomable_zoomToFitWindow);JScript.Type.DeclareMethod(rObject,"getRepositionOnZoom",OwcIZoomable_getRepositionOnZoom);JScript.Type.DeclareMethod(rObject,"setRepositionOnZoom",OwcIZoomable_setRepositionOnZoom);JScript.Type.DeclareMethod(rObject,"getBasicLeft",OwcIZoomable_getBasicLeft);JScript.Type.DeclareMethod(rObject,"setBasicLeft",OwcIZoomable_setBasicLeft);JScript.Type.DeclareMethod(rObject,"getBasicTop",OwcIZoomable_getBasicTop);JScript.Type.DeclareMethod(rObject,"setBasicTop",OwcIZoomable_setBasicTop);JScript.Type.DeclareMethod(rObject,"getBasicWidth",OwcIZoomable_getBasicWidth);JScript.Type.DeclareMethod(rObject,"setBasicWidth",OwcIZoomable_setBasicWidth);JScript.Type.DeclareMethod(rObject,"getBasicHeight",OwcIZoomable_getBasicHeight);JScript.Type.DeclareMethod(rObject,"setBasicHeight",OwcIZoomable_setBasicHeight);JScript.Type.DeclareMethod(rObject,"getBasicScale",OwcIZoomable_getBasicScale);JScript.Type.DeclareMethod(rObject,"setBasicScale",OwcIZoomable_setBasicScale);JScript.Type.DeclareMethod(rObject,"calculateWidthHeight",OwcIZoomable_calculateWidthHeight);JScript.Type.DeclareMethod(rObject,"updateZoom",OwcIZoomable_updateZoom);JScript.Type.DeclareMethod(rObject,"getElemWidth",OwcIZoomable_getElemWidth);JScript.Type.DeclareMethod(rObject,"getElemHeight",OwcIZoomable_getElemHeight);JScript.Type.DeclareMethod(rObject,"calcFitZoomFactor",OwcIZoomable_calcFitZoomFactor);JScript.Type.DeclareMethod(rObject,"calcNaturalWidthHeight");JScript.Type.DeclareMethod(rObject,"getNaturalWidth");JScript.Type.DeclareMethod(rObject,"getNaturalHeight");JScript.Type.DeclareMethod(rObject,"getImgWidth");JScript.Type.DeclareMethod(rObject,"getImgHeight");JScript.Type.DeclareMethod(rObject,"getMaxImageWidth");JScript.Type.DeclareMethod(rObject,"getMaxImageHeight");JScript.Type.DeclareMethod(rObject,"isImageLoaded");};function OwcIZoomable_parseControlHtmlAttr()
{var attributes=Olive.Controls.attributes;this.m_nBasicLeft=DHTML.getAttrNumber(this.HtmlElement,attributes.basicLeft,this.m_nBasicLeft);this.m_nBasicTop=DHTML.getAttrNumber(this.HtmlElement,attributes.basicTop,this.m_nBasicTop);this.m_nBasicWidth=DHTML.getAttrNumber(this.HtmlElement,attributes.basicWidth,this.m_nBasicWidth);this.m_nBasicHeight=DHTML.getAttrNumber(this.HtmlElement,attributes.basicHeight,this.m_nBasicHeight);var nBasicScale=DHTML.getAttrNumber(this.HtmlElement,attributes.basicScale,"");if(!isNaN(nBasicScale))
{this.m_nBasicScale=nBasicScale;}
this.m_bRepositionOnZoom=DHTML.getAttrBoolean(this.HtmlElement,attributes.repositionOnZoom,this.m_bRepositionOnZoom);var sFitMode=DHTML.getAttr(this.HtmlElement,attributes.fitMode);if(sFitMode)
this.setFitMode(sFitMode);if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);}
function OwcIZoomable_zoomIn()
{this.setZoom(this.getZoom()*1.25);}
function OwcIZoomable_zoomOut()
{this.setZoom(this.getZoom()/1.25);}
function OwcIZoomable_zoomToFitWidth()
{this.setFitMode(Olive.Controls.IZoomable.FitMode.FitToWidth);}
function OwcIZoomable_zoomToFitHeight()
{this.setFitMode(Olive.Controls.IZoomable.FitMode.FitToHeight);}
function OwcIZoomable_zoomToFitWindow()
{this.setFitMode(Olive.Controls.IZoomable.FitMode.FitToWindow);}
function OwcIZoomable_getRepositionOnZoom()
{return this.m_bRepositionOnZoom;}
function OwcIZoomable_setRepositionOnZoom(bRepositionOnZoom)
{this.m_bRepositionOnZoom=bRepositionOnZoom;}
function OwcIZoomable_getBasicLeft()
{if(isNaN(this.m_nBasicLeft))
return 0;else
return this.m_nBasicLeft;}
function OwcIZoomable_setBasicLeft(nBasicLeft)
{this.m_nBasicLeft=nBasicLeft;}
function OwcIZoomable_getBasicTop()
{if(isNaN(this.m_nBasicTop))
return 0;else
return this.m_nBasicTop;}
function OwcIZoomable_setBasicTop(nBasicTop)
{this.m_nBasicTop=nBasicTop;}
function OwcIZoomable_getBasicWidth()
{if(isNaN(this.m_nBasicWidth))
return 0;else
return this.m_nBasicWidth;}
function OwcIZoomable_setBasicWidth(nBasicWidth)
{this.m_nBasicWidth=nBasicWidth;}
function OwcIZoomable_getBasicHeight()
{if(isNaN(this.m_nBasicHeight))
return 0;else
return this.m_nBasicHeight;}
function OwcIZoomable_setBasicHeight(nBasicHeight)
{this.m_nBasicHeight=nBasicHeight;}
function OwcIZoomable_getBasicScale()
{if(this.m_nBasicScale===null||isNaN(this.m_nBasicScale))
return null;else
return this.m_nBasicScale;}
function OwcIZoomable_setBasicScale(nBasicScale)
{this.m_nBasicScale=nBasicScale;}
function OwcIZoomable_getZoom()
{return this.m_nZoomFactor;}
function OwcIZoomable_setZoom(nZoomFactor)
{this.m_nZoomFactor=nZoomFactor;var bImageViewer=Olive.Controls.IImageViewer.IsImplementedBy(this);if(bImageViewer)
{var sPriorActualScaleMethod=this.m_sActualScaleMethod;this.calculateScaleMethod(this.getScaleMethod());}
if(bImageViewer&&sPriorActualScaleMethod!=this.m_sActualScaleMethod)
{if(this.isImageLoaded())
{this.htmlUpdateContent();}}
else
{if(this.m_sFitMode!=Olive.Controls.IZoomable.FitMode.None)
{var nAutoZoomFactor=this.calcFitZoomFactor(this.m_sFitMode);if(nAutoZoomFactor!=nZoomFactor)
this.setFitMode(Olive.Controls.IZoomable.FitMode.None);}
this.updateZoom();}}
function OwcIZoomable_setFitMode(sFitMode)
{this.m_sFitMode=sFitMode.toLowerCase();if(this.m_sFitMode!=Olive.Controls.IZoomable.FitMode.None)
{var nZoomFactor=this.calcFitZoomFactor(sFitMode);this.setZoom(nZoomFactor);}}
function OwcIZoomable_updatePositionForZoom()
{if(!this.getRepositionOnZoom())
return;var nZoom=this.getZoom();var nBasicLeft=this.getBasicLeft();var nBasicTop=this.getBasicTop();if(nBasicLeft!==null)
this.HtmlElement.style.left=String(nBasicLeft*nZoom)+"px";if(nBasicTop!==null)
this.HtmlElement.style.top=String(nBasicTop*nZoom)+"px";}
function OwcIZoomable_calculateWidthHeight()
{if(!this.m_bWidthHeightCalculated)
{var nBasicScale=this.getBasicScale();var nBasicWidth=this.getBasicWidth();var nBasicHeight=this.getBasicHeight();if(nBasicWidth>0&&nBasicHeight>0&&nBasicScale===null)
{this.m_nCalculatedWidth=nBasicWidth;this.m_nCalculatedHeight=nBasicHeight;this.m_bWidthHeightCalculated=true;}
else if(this.getNaturalWidth&&this.getNaturalHeight)
{var nNaturalWidth=this.getNaturalWidth();var nNaturalHeight=this.getNaturalHeight();if(nNaturalWidth>0&&nNaturalHeight>0)
{this.m_nCalculatedWidth=nNaturalWidth;this.m_nCalculatedHeight=nNaturalHeight;this.m_bWidthHeightCalculated=true;}}}}
function OwcIZoomable_updateZoom()
{var bOK=true;if(this.htmlUpdateZoom)
bOK=this.htmlUpdateZoom();else if(Olive.Controls.IZoomable.IsImplementedBy(this))
{var nWidth=this.getElemWidth();var nHeight=this.getElemHeight();this.m_nZoomFactor=this.calcFitZoomFactor(this.m_sFitMode);var nZoom=this.getZoom();this.HtmlElement.style.width=String(nWidth*nZoom)+"px";this.HtmlElement.style.height=String(nHeight*nZoom)+"px";}
if(bOK)
{this.updatePositionForZoom();}}
function OwcIZoomable_getElemWidth()
{var nRetVal=0;if(this.getImageWidth)
{nRetVal=this.getImageWidth();}
else
{this.calculateWidthHeight();if(this.m_bWidthHeightCalculated)
nRetVal=this.m_nCalculatedWidth;}
return nRetVal;}
function OwcIZoomable_getElemHeight()
{var nRetVal=0;if(this.getImageHeight)
nRetVal=this.getImageHeight();else
{this.calculateWidthHeight();if(this.m_bWidthHeightCalculated)
nRetVal=this.m_nCalculatedHeight;}
return nRetVal;}
function OwcIZoomable_calcFitZoomFactor(sFitMode)
{var nCurZoomFactor=this.getZoom();if(this.isImageLoaded&&!this.isImageLoaded())
return nCurZoomFactor;var nWidth=this.getElemWidth();var nHeight=this.getElemHeight();if(nWidth==0||nHeight==0)
return nCurZoomFactor;var nMaxZoomFactor=Number.MAX_VALUE;if(this.getMaxImageWidth)
{var nMaxImageWidth=this.getMaxImageWidth();if(nMaxImageWidth>0)
nMaxZoomFactor=Math.min(nMaxZoomFactor,nMaxImageWidth/nWidth);}
if(this.getMaxImageHeight)
{var nMaxImageHeight=this.getMaxImageHeight();if(nMaxImageHeight>0)
nMaxZoomFactor=Math.min(nMaxZoomFactor,nMaxImageHeight/nHeight);}
sFitMode=sFitMode.toLowerCase();nCurZoomFactor=Math.min(nMaxZoomFactor,nCurZoomFactor);if(sFitMode==Olive.Controls.IZoomable.FitMode.None)
{var nBasicScale=this.getBasicScale();if(nBasicScale===null)
{return nCurZoomFactor;}
else
{return nCurZoomFactor*nBasicScale;}}
var nClientWidth=this.HtmlElement.clientWidth?this.HtmlElement.clientWidth:0;var nClientHeight=this.HtmlElement.clientHeight?this.HtmlElement.clientHeight:0;var nBasicWidth=this.getBasicWidth();var nBasicHeight=this.getBasicHeight();if(nBasicWidth>0&&nBasicHeight>0)
{nClientWidth=nBasicWidth;nClientHeight=nBasicHeight;}
var nNaturalWidth=this.getNaturalWidth();var nNaturalHeight=this.getNaturalHeight();if(nNaturalWidth>0&&nNaturalHeight>0)
{nWidth=nNaturalWidth;nHeight=nNaturalHeight;}
var nFitToWidth=nClientWidth/nWidth;var nFitToHeight=nClientHeight/nHeight;nFitToWidth=Math.min(nMaxZoomFactor,nFitToWidth);nFitToHeight=Math.min(nMaxZoomFactor,nFitToHeight);switch(sFitMode)
{case Olive.Controls.IZoomable.FitMode.FitToWidth:return nFitToWidth;case Olive.Controls.IZoomable.FitMode.FitToHeight:return nFitToHeight;case Olive.Controls.IZoomable.FitMode.FitToWindow:return Math.min(nFitToWidth,nFitToHeight);}}}
if(!Olive.Controls.ImageViewer)
{Olive.Controls.ImageViewer=function OwcImageViewer()
{};JScript.Type.RegisterClass("Olive.Controls.ImageViewer",Olive.Controls.ImageViewer,Olive.Controls.Control,[Olive.Controls.IImageViewer]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.ImageViewer,Olive.Controls.ImageViewer);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.List="list";Olive.Controls.controlTypeNames.ListItem="listitem";Olive.Controls.controlTypeNames.ListSortBy="sortby";Olive.Controls.attributes.UsePagination=Olive.Controls.xmlns+"UsePagination";Olive.Controls.attributes.PageSize=Olive.Controls.xmlns+"PageSize";Olive.Controls.attributes.SelectionHighlighting=Olive.Controls.xmlns+"selection-highlighting";Olive.Controls.attributes.CssClass=Olive.Controls.xmlns+"list-item-css";Olive.Controls.attributes.CssClassSelected=Olive.Controls.xmlns+"list-item-css-selected";Olive.Controls.attributes.ItemType=Olive.Controls.xmlns+"ItemType";var OwcUrlParam_ListPageNo="listpageno";var OwcUiElem_Header="header";var OwcUiElem_ListItems="list-items";var OwcUiElem_Footer="footer";var OwcCmd_PrevPage="PrevPage";var OwcCmd_NextPage="NextPage";var OwcCmd_FirstPage="FirstPage";var OwcCmd_LastPage="LastPage";var OwcCmd_GoToPage="GoToPage";var OwcCmd_SetPageSize="SetPageSize";var OwcCssClass_PrevPage="OwcPrevPageButton";var OwcCssClass_NextPage="OwcNextPageButton";var OwcCssClass_FirstPage="OwcFirstPageButton";var OwcCssClass_LastPage="OwcLastPageButton";var OwcCssClass_PageLink="OwcPageLink";var OwcCssClass_PageLinkCurrent="OwcPageLink_c";var OwcCssClass_PrevPageDisabled="OwcPrevPageButton_d";var OwcCssClass_NextPageDisabled="OwcNextPageButton_d";var OwcCssClass_FirstPageDisabled="OwcFirstPageButton_d";var OwcCssClass_LastPageDisabled="OwcLastPageButton_d";var OwcCssClass_Hidden="Hidden";var OwcCssClass_ListItem="OwcListItem";var OwcCssClass_ListItemSelected="OwcListItemSelected";if(!Olive.Controls.ListSortBy)
{Olive.Controls.ListSortBy=function OwcListSortBy()
{};Olive.Controls.ListSortBy.DeclareType=function OwcListSortBy_DeclareType(rObject)
{this.DeclareField("m_oListControl",null);this.OverrideMethod("bindHtmlElement",OwcListSortBy_bindHtmlElement);this.DeclareMethod("getListControl",OwcListSortBy_getListControl);this.DeclareMethod("setListControl",OwcListSortBy_setListControl);this.DeclareMethod("updateSelectionFromList",OwcListSortBy_updateSelectionFromList);this.DeclareMethod("updateListFromSelection",OwcListSortBy_updateListFromSelection);};function OwcListSortBy_bindHtmlElement(oHtmlElement)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);DHTML.attachEvent(oHtmlElement,"change",OwcListSortBy_HTML_onChange);this.updateSelectionFromList();}
function OwcListSortBy_HTML_onChange(oEvent)
{OwcGetControlFromHtmlElem(this).updateListFromSelection();}
function OwcListSortBy_getListControl()
{if(this.m_oListControl)
return this.m_oListControl;return this.Parent;}
function OwcListSortBy_setListControl(oListControl)
{this.m_oListControl=oListControl;}
function OwcListSortBy_updateSelectionFromList()
{var oListControl=this.getListControl();var sValue="";if(oListControl.getSortOptions)
{var oSortOptions=oListControl.getSortOptions();if(oSortOptions)
sValue=oSortOptions.toString();}
DHTML.setValue(this.HtmlElement,sValue);}
function OwcListSortBy_updateListFromSelection()
{var oSortOptions=null;var sValue=DHTML.getValue(this.HtmlElement);if(sValue&&(sValue!=""))
{oSortOptions=new Olive.Data.SortOptions();oSortOptions.parse(sValue);if(oSortOptions.isEmpty())
oSortOptions=null;}
var oListControl=this.getListControl();oListControl.setSortOptions(oSortOptions);}
JScript.Type.RegisterClass("Olive.Controls.ListSortBy",Olive.Controls.ListSortBy,Olive.Controls.Control);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.ListSortBy,Olive.Controls.ListSortBy);}
if(!Olive.ListItemType)
{Olive.ListItemType=function OwcListItemType()
{};JScript.Type.RegisterClass("Olive.ListItemType",Olive.ListItemType,null,[Olive.IUiElemTypes]);}
if(!Olive.Controls.ListItem)
{Olive.Controls.ListItem=function OwcListItem()
{};Olive.Controls.ListItem.DeclareType=function OwcListItem_DeclareType()
{this.DeclareField("m_oList",null);this.DeclareField("m_oItemType",null);this.OverrideMethod("parseControlHtmlAttr",OwcListItem_parseControlHtml);this.OverrideMethod("bindHtmlElement",OwcListItem_bindHtmlElement);this.OverrideMethod("getUiElemType",OwcListItem_getUiElemType);this.OverrideMethod("initUiState",OwcListItem_initUiState);this.OverrideMethod("updateUiState",OwcListItem_updateUiState);this.DeclareMethod("itemSelect",OwcListItem_itemSelect);};function OwcListItem_parseControlHtml()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.m_oList=this.Parent;var sListItemType=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.ItemType);if(sListItemType)
sListItemType=sListItemType.toLowerCase();this.m_oItemType=this.m_oList.getItemType(sListItemType);}
function OwcListItem_bindHtmlElement(oHtmlElement)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);DHTML.attachEvent(oHtmlElement,"mousedown",OwcListItem_DHTML_onMouseDown);if(isSafari())
DHTML.attachEvent(oHtmlElement,"contextmenu",OwcListItem_DHTML_onMouseDown);}
function OwcListItem_getUiElemType(sItemType)
{if(!this.m_oItemType)
return null;return this.m_oItemType.getUiElemType(sItemType);}
function OwcListItem_initUiState()
{var bSelectionHighlighting=this.m_oList.m_bSelectionHighlighting;var sItemCssClass=this.m_oList.m_sItemCssClass;if(bSelectionHighlighting&&sItemCssClass)
DHTML.addCssClassToElem(this.HtmlElement,sItemCssClass);if(this.BaseClassMethod&&this.BaseClassMethod!=arguments.callee)
this.BaseClassMethod.apply(this,arguments);}
function OwcListItem_updateUiState(nNewState,nPrevState)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var nStyleChanged=(nPrevState^nNewState);var bSelectionHighlighting=this.m_oList.m_bSelectionHighlighting;if((nStyleChanged&Olive.IState.State.SelectedMask)&&bSelectionHighlighting)
{var bSelected=((nNewState&Olive.IState.State.SelectedMask)==Olive.IState.State.Selected);this.itemSelect(bSelected);}}
function OwcListItem_itemSelect(bSelect)
{var oList=this.m_oList;var sCssClass=((oList&&oList.m_sItemCssClass)?oList.m_sItemCssClass:OwcCssClass_ListItem);var sCssClassSelected=((oList&&oList.m_sItemCssClassSelected)?oList.m_sItemCssClassSelected:OwcCssClass_ListItemSelected);if(bSelect)
{DHTML.replaceCssClassToElem(this.HtmlElement,sCssClass,sCssClassSelected);}
else
{DHTML.replaceCssClassToElem(this.HtmlElement,sCssClassSelected,sCssClass);}
if(!bSelect)
{var iControl,nControlsCount=this.getControlsCount();for(iControl=0;iControl<nControlsCount;++iControl)
{var oControl=this.getControl(iControl);if(oControl&&Olive.ISelection.IsImplementedBy(oControl))
oControl.selectionClear();}}}
function OwcListItem_DHTML_onMouseDown(oEvent)
{var oListItem=OwcGetControlFromHtmlElem(this);if(!oListItem||!oListItem.m_oList)
return;var oList=oListItem.m_oList;if(!oList.m_bSelectionHighlighting)
return;oList.onItemMouseDown(oListItem,oEvent);}
JScript.Type.RegisterClass("Olive.Controls.ListItem",Olive.Controls.ListItem,Olive.Controls.Control,[Olive.IUiElements]);}
if(!Olive.Controls.List)
{Olive.Controls.List=function OwcList()
{OwcListRegisterItemType(this,"ListItem",Olive.Controls.controlTypeNames.ListItem,"Olive.Controls.ListItem");};Olive.Controls.List.DeclareType=function OwcList_DeclareType()
{this.DeclareField("m_bUsePagination",false);this.DeclareField("m_nPageSize",null);this.DeclareField("m_bSelectionHighlighting",false);this.DeclareField("m_sItemCssClass",OwcCssClass_ListItem);this.DeclareField("m_sItemCssClassSelected",OwcCssClass_ListItemSelected);this.DeclareField("m_bSupportMultiSelect",false);this.DeclareField("m_nPageNo",null);this.DeclareField("m_oSortOptions",null);this.DeclareField("m_arrItemTypes",null);this.DeclareField("m_oDefaultItemType",null);this.OverrideMethod("parseControlHtmlAttr",OwcListControl_parseControlHtml);this.OverrideMethod("contentBuildControlParams",OwcListControl_contentBuildControlParams);this.OverrideMethod("postHtmlContentPaste",OwcListControl_postHtmlContentPaste);this.OverrideMethod("updateCommandState",OwcListControl_updateCommandState);this.ReplaceMethod("getHtmlContentTarget",OwcListControl_getHtmlContentTarget);this.DeclareMethod("getItemType",OwcListControl_getItemType);this.DeclareMethod("getSortOptions",OwcListControl_getSortOptions);this.DeclareMethod("setSortOptions",OwcListControl_setSortOptions);this.DeclareMethod("sortBy",OwcListControl_sortBy);this.DeclareMethod("navigateToPage",null);this.DeclareMethod("_updateGotoPageCommandUiState",OwcListControl_updateGotoPageCommandUiState);this.DeclareMethod("goToPage",OwcListControl_goToPage);this.DeclareMethod("prevPage",OwcListControl_prevPage);this.DeclareMethod("nextPage",OwcListControl_nextPage);this.DeclareMethod("firstPage",OwcListControl_firstPage);this.DeclareMethod("lastPage",OwcListControl_lastPage);this.DeclareMethod("setPageSize",OwcListControl_setPageSize);};Olive.Controls.List.ApplyPrototype=function OwcList_ApplyPrototype(rObject,bDynamic)
{rObject.registerUiElemType(OwcUiElem_Header,new Olive.UiElemType());rObject.registerUiElemType(OwcUiElem_ListItems,new Olive.UiElemType());rObject.registerUiElemType(OwcUiElem_Footer,new Olive.UiElemType());Olive.CmdTarget.RegisterCommand(rObject,OwcCmd_GoToPage,"goToPage","_updateGotoPageCommandUiState");Olive.CmdTarget.RegisterCommand(rObject,OwcCmd_PrevPage,"prevPage","_updateGotoPageCommandUiState");Olive.CmdTarget.RegisterCommand(rObject,OwcCmd_NextPage,"nextPage","_updateGotoPageCommandUiState");Olive.CmdTarget.RegisterCommand(rObject,OwcCmd_FirstPage,"firstPage","_updateGotoPageCommandUiState");Olive.CmdTarget.RegisterCommand(rObject,OwcCmd_LastPage,"lastPage","_updateGotoPageCommandUiState");Olive.CmdTarget.RegisterCommand(rObject,OwcCmd_SetPageSize,"setPageSize");};function OwcListRegisterItemType(rObject,sItemTypeName,sControlType,sItemClass)
{if(!rObject.m_arrItemTypes)
rObject.m_arrItemTypes=new Array();var oItemType=new Olive.ListItemType();rObject.m_arrItemTypes[sItemTypeName.toLowerCase()]=oItemType;if(!rObject.m_oDefaultItemType)
rObject.m_oDefaultItemType=oItemType;if(sControlType)
rObject.registerControlType(sControlType,eval(sItemClass));return oItemType;}
function OwcListControl_parseControlHtml()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var attributes=Olive.Controls.attributes;this.m_bUsePagination=DHTML.getAttrBoolean(this.HtmlElement,attributes.UsePagination,this.m_bUsePagination);this.m_nPageSize=DHTML.getAttrNumber(this.HtmlElement,attributes.PageSize,10);this.m_bSelectionHighlighting=DHTML.getAttrBoolean(this.HtmlElement,attributes.SelectionHighlighting,this.m_bSelectionHighlighting);this.m_sItemCssClass=DHTML.getAttr(this.HtmlElement,attributes.CssClass,this.m_sItemCssClass);this.m_sItemCssClassSelected=DHTML.getAttr(this.HtmlElement,attributes.CssClassSelected,this.m_sItemCssClassSelected);this.m_bSupportMultiSelect=DHTML.getAttrBoolean(this.HtmlElement,attributes.MultiSelect,this.m_bSupportMultiSelect);}
function OwcListControl_contentBuildControlParams(oParams)
{if(this.m_bUsePagination&&this.m_nPageSize>0)
{oParams.addParam(OwcUrlParam_PageSize,this.m_nPageSize,true);oParams.addParam(OwcUrlParam_ListPageNo,this.m_nPageNo?this.m_nPageNo:1,true);}
if(this.m_oSortOptions)
this.m_oSortOptions.contentBuildParams(oParams);}
function OwcListControl_getHtmlContentTarget()
{var oListItemsElem=this.getUiElement(OwcUiElem_ListItems);if(!oListItemsElem)
oListItemsElem=this.HtmlElement;return oListItemsElem;}
function OwcListControl_getItemType(sItemType)
{var oItemType=null;if(sItemType&&this.m_arrItemTypes)
oItemType=this.m_arrItemTypes[sItemType.toLowerCase()];if(!oItemType)
oItemType=this.m_oDefaultItemType;return oItemType;}
function OwcListControl_getSortOptions()
{return this.m_oSortOptions;}
function OwcListControl_setSortOptions(oSortOptions,bDoNotReloadContent)
{if(oSortOptions)
this.m_oSortOptions=Object_Clone(oSortOptions);else
this.m_oSortOptions=null;if(!bDoNotReloadContent&&this.contentLoad)
{if(this.m_bUsePagination)
this.m_nPageNo=1;this.contentLoad();}}
function OwcListControl_sortBy(sField,bAscending,bDoNotReloadContent)
{var oSortOptions=null;if(sField)
{oSortOptions=new Olive.Data.SortOptions();oSortOptions.addSortField(sField,bAscending);}
this.setSortOptions(oSortOptions,bDoNotReloadContent);}
function OwcListControl_updateGotoPageCommandUiState(oCmdUiState)
{var bEnableCommand=false;if(this.m_bUsePagination&&this.getContentItem&&this.navigateToPage)
{var oContentItem=this.getContentItem();if(oContentItem&&oContentItem.m_nPageNo!==null&&oContentItem.m_nPageCount!==null)
{var nCurPageNo=oContentItem.m_nPageNo;var nTrgPageNo=-1;switch(oCmdUiState.commandName.toLowerCase())
{case OwcCmd_PrevPage.toLowerCase():nTrgPageNo=nCurPageNo-1;break;case OwcCmd_NextPage.toLowerCase():nTrgPageNo=nCurPageNo+1;break;case OwcCmd_FirstPage.toLowerCase():nTrgPageNo=1;break;case OwcCmd_LastPage.toLowerCase():nTrgPageNo=oContentItem.m_nPageCount;break;case OwcCmd_GoToPage.toLowerCase():if(typeof(oCmdUiState.commandParams)=="string")
nTrgPageNo=parseInt(oCmdUiState.commandParams,10);else if(typeof(oCmdUiState.commandParams)=="number")
nTrgPageNo=Number(oCmdUiState.commandParams);else
nTrgPageNo=parseInt(String(oCmdUiState.commandParams),10);break;}
if(!isNaN(nTrgPageNo)&&nTrgPageNo>=1&&nTrgPageNo<=oContentItem.m_nPageCount&&nTrgPageNo!=nCurPageNo)
bEnableCommand=true;}}
oCmdUiState.enableCommand(bEnableCommand);}
function OwcListControl_updateCommandState(oHtmlContentElement)
{if(this.m_bUsePagination&&this.getContentItem){var oContent=this.getContentItem();if(oContent&&oContent.m_nPageNo!==null){var arrCmds=this.findControlsByType(Olive.Controls.controlTypeNames.Command);if(!arrCmds)
return;for(var i=0;i<arrCmds.length;++i){var sCmd=arrCmds[i].m_sCommand;if(oContent.m_nPageCount<=1&&(sCmd==OwcCmd_PrevPage||sCmd==OwcCmd_NextPage||sCmd==OwcCmd_FirstPage||sCmd==OwcCmd_LastPage)){DHTML.addCssClassToElem(arrCmds[i].HtmlElement,OwcCssClass_Hidden);}else{DHTML.removeCssClassFromElem(arrCmds[i].HtmlElement,OwcCssClass_Hidden);switch(arrCmds[i].m_sCommand){case OwcCmd_GoToPage:var nCmdPageNo=arrCmds[i].m_nPageNo;if(nCmdPageNo==oContent.m_nPageNo)
DHTML.replaceCssClassToElem(arrCmds[i].HtmlElement,OwcCssClass_PageLink,OwcCssClass_PageLinkCurrent,true);else
DHTML.replaceCssClassToElem(arrCmds[i].HtmlElement,OwcCssClass_PageLinkCurrent,OwcCssClass_PageLink,true);break;case OwcCmd_PrevPage:if(oContent.m_nPageNo==1){DHTML.replaceCssClassToElem(arrCmds[i].HtmlElement,OwcCssClass_PrevPage,OwcCssClass_PrevPageDisabled,true);}else{DHTML.replaceCssClassToElem(arrCmds[i].HtmlElement,OwcCssClass_PrevPageDisabled,OwcCssClass_PrevPage,true);}
break;case OwcCmd_NextPage:if(oContent.m_nPageNo==oContent.m_nPageCount){DHTML.replaceCssClassToElem(arrCmds[i].HtmlElement,OwcCssClass_NextPage,OwcCssClass_NextPageDisabled,true);}else{DHTML.replaceCssClassToElem(arrCmds[i].HtmlElement,OwcCssClass_NextPageDisabled,OwcCssClass_NextPage,true);}
break;case OwcCmd_FirstPage:if(oContent.m_nPageNo==1){DHTML.replaceCssClassToElem(arrCmds[i].HtmlElement,OwcCssClass_FirstPage,OwcCssClass_PrevPageDisabled,true);}else{DHTML.replaceCssClassToElem(arrCmds[i].HtmlElement,OwcCssClass_FirstPageDisabled,OwcCssClass_PrevPage,true);}
break;case OwcCmd_LastPage:if(oContent.m_nPageNo==oContent.m_nPageCount){DHTML.replaceCssClassToElem(arrCmds[i].HtmlElement,OwcCssClass_LastPage,OwcCssClass_NextPageDisabled,true);}else{DHTML.replaceCssClassToElem(arrCmds[i].HtmlElement,OwcCssClass_LastPageDisabled,OwcCssClass_NextPage,true);}
break;}}}}}}
function OwcListControl_postHtmlContentPaste(oRequest,oHtmlContentElement)
{this.notifyCmdStateChanged();this.updateCommandState(oHtmlContentElement);}
function OwcListControl_goToPage(sPageNo)
{var nPageNo=parseInt(sPageNo,10);if(this.m_bUsePagination&&this.getContentItem)
{var oContent=this.getContentItem();if(nPageNo&&oContent&&oContent.m_nPageNo!==null&&oContent.m_nPageCount!==null&&1<=nPageNo&&nPageNo<=oContent.m_nPageCount&&nPageNo!=oContent.m_nPageNo&&this.navigateToPage)
{this.m_nPageNo=nPageNo;this.m_nPageSize=oContent.m_nPageSize;this.navigateToPage();}}}
function OwcListControl_prevPage(){if(this.m_bUsePagination&&this.getContentItem){var oContent=this.getContentItem();if(oContent&&oContent.m_nPageNo!==null&&oContent.m_nPageCount!==null&&oContent.m_nPageNo>1&&this.navigateToPage){this.m_nPageNo=oContent.m_nPageNo-1;this.m_nPageSize=oContent.m_nPageSize;this.navigateToPage();}}}
function OwcListControl_nextPage(){if(this.m_bUsePagination&&this.getContentItem){var oContent=this.getContentItem();if(oContent&&oContent.m_nPageNo!==null&&oContent.m_nPageCount!==null&&oContent.m_nPageNo<oContent.m_nPageCount&&this.navigateToPage){this.m_nPageNo=oContent.m_nPageNo+1;this.m_nPageSize=oContent.m_nPageSize;this.navigateToPage();}}}
function OwcListControl_firstPage(){if(this.m_bUsePagination&&this.getContentItem){var oContent=this.getContentItem();if(oContent&&oContent.m_nPageNo!==null&&oContent.m_nPageCount!==null&&oContent.m_nPageNo>1&&this.navigateToPage){this.m_nPageNo=1;this.m_nPageSize=oContent.m_nPageSize;this.navigateToPage();}}}
function OwcListControl_lastPage(){if(this.m_bUsePagination&&this.getContentItem){var oContent=this.getContentItem();if(oContent&&oContent.m_nPageNo!==null&&oContent.m_nPageCount!==null&&oContent.m_nPageNo<oContent.m_nPageCount&&this.navigateToPage){this.m_nPageNo=oContent.m_nPageCount;this.m_nPageSize=oContent.m_nPageSize;this.navigateToPage();}}}
function OwcListControl_setPageSize(sPageSize,bDoNotLoadContent)
{var nPageSize=(typeof(sPageSize)=="number"?sPageSize:parseInt(sPageSize,10));if(this.m_bUsePagination)
{if(this.m_nPageSize==nPageSize)
return;this.m_nPageSize=nPageSize;if(Olive.Controls.IDataBound.IsImplementedBy(this))
{var oContent=this.getContentItem();if(oContent&&nPageSize>0)
this.m_nPageNo=Math.ceil(oContent.m_nResultsFrom/nPageSize);if(!bDoNotLoadContent)
this.contentLoad();}}}
JScript.Type.RegisterClass("Olive.Controls.List",Olive.Controls.List,Olive.Controls.Control,[Olive.IUiElements,Olive.ISelection]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.List,Olive.Controls.List);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.Tree="tree";Olive.Controls.controlTypeNames.TreeNode="treenode";var OwcCmd_ToggleExpand="expand";var OwcUrlParam_ExpandAll="ExpandAll";var OwcUrlParam_AutoProgressiveSize="AutoProgressiveSize";Olive.Controls.attributes.NodeType=Olive.Controls.xmlns+"NodeType";Olive.Controls.attributes.Expand=Olive.Controls.xmlns+"Expand";Olive.Controls.attributes.ExpandAll=Olive.Controls.xmlns+"ExpandAll";Olive.Controls.attributes.Download=Olive.Controls.xmlns+"Download";Olive.Controls.attributes.NodeIcon=Olive.Controls.xmlns+"Icon";Olive.Controls.attributes.AutoProgressiveSize=Olive.Controls.xmlns+"AutoProgressiveSize";Olive.Controls.attributes.SingleNodeExpandable=Olive.Controls.xmlns+"single-node-expandable";Olive.Controls.attributes.SingleNodeExpandableMaxDepth=Olive.Controls.xmlns+"single-node-expandable-max-depth";Olive.Controls.attributes.ToggleOnSelectableAreaClicked=Olive.Controls.xmlns+"toggle-on-selectable-area-clicked";var OwcCssClass_TreeNode="treeNode";var OwcCssClass_TreeOutline="treeNodeOutline";var OwcCssClass_Collapsed="treeContentHidden";var OwcCssClass_SelectArea="treeNodeSelectArea";var OwcCssClass_Selected="treeNodeSelected";var OwcUiElem_TreeOutline="treeoutline";var OwcUiElem_TreeBox="treebox";var OwcUiElem_TreeIcon="treeicon";var OwcUiElem_TreeNodeSelection="treenodeselectablearea";var OwcUiElem_TreeSubNodes="treesubnodes";var OwcUiElem_TreeSubNodesTarget="treesubnodestarget";var OwcTreeOutline_Expanded=0x00000000;var OwcTreeOutline_Collapsed=0x00000001;var OwcTreeOutline_NonExpandable=0x00000002;var OwcTreeOutline_ExpandMask=0x00000003;var OwcTreeOutline_RootLevel=0x00000004;var OwcTreeOutline_FirstNode=0x00000008;var OwcTreeOutline_LastNode=0x00000010;var OwcTreeOutline_Max=0x0000001F;var OwcTreeNodeState_NoData=0x00000010;var OwcTreeNodeExpand_Toggle=0;var OwcTreeNodeExpand_Expand=1;var OwcTreeNodeExpand_Collapse=2;var OwcTreeNodeExpand_ExpandAll=3;var OwcTreeNodeExpand_CollapseAll=4;if(!Olive.ITreeNode)
{Olive.ITreeNode=new Interface("Olive.ITreeNode");Olive.ITreeNode.Implement=function OwcITreeNode_Implement(rObject,bDynamic)
{if(!Olive.ITreeNode.Register(rObject,bDynamic))
return;};}
if(!Olive.Controls.Tree)
{Olive.Controls.Tree=function OwcTree()
{};Olive.Controls.Tree.DeclareType=function OwcTree_DeclareType()
{this.DeclareField("m_arrNodeTypes",null);this.DeclareField("m_oDefaultNodeType",null);this.DeclareField("m_bSupportMultiSelect",false);this.DeclareField("m_nAutoProgressiveSize",-1);this.DeclareField("m_bSingleNodeExpandable",false);this.DeclareField("m_nSingleNodeExpandableMaxDepth",1);this.DeclareField("m_bToggleOnSelectableAreaClicked",false);this.OverrideMethod("parseControlHtmlAttr",OwcTree_parseControlHtml);this.OverrideMethod("parseControlData",OwcTree_parseControlData);this.OverrideMethod("initControl",OwcTree_initControl);this.OverrideMethod("onSelectionChanged",OwcTree_onSelectionChanged);this.OverrideMethod("contentBuildControlParams",OwcTree_contentBuildControlParams);this.DeclareMethod("registerNodeTypes",OwcTree_registerNodeTypes);this.DeclareMethod("getNodeOutlineName",OwcTree_getNodeOutlineName);this.DeclareMethod("setDefaultNodeType",OwcTree_setDefaultNodeType);this.DeclareMethod("getNodeType",OwcTree_getNodeType);this.DeclareMethod("onChildNodeExpandChanging",OwcTreeOrTreeNode_onChildNodeExpandChanging);this.DeclareMethod("expandTree",OwcTreeOrTreeNode_expandTree);var arrOutlineNames=new Array(OwcTreeOutline_Max);for(var dwOutline=0;dwOutline<OwcTreeOutline_Max;++dwOutline)
{var sOutlineName="";switch(dwOutline&(OwcTreeOutline_FirstNode|OwcTreeOutline_LastNode))
{case OwcTreeOutline_FirstNode:if(dwOutline&OwcTreeOutline_RootLevel)
sOutlineName+="f";else
sOutlineName+="m";break;case OwcTreeOutline_LastNode:sOutlineName+="l";break;case 0:sOutlineName+="m";break;default:sOutlineName+="l";break;}
switch(dwOutline&OwcTreeOutline_ExpandMask)
{case OwcTreeOutline_Expanded:sOutlineName+="c";break;case OwcTreeOutline_Collapsed:sOutlineName+="x";break;}
arrOutlineNames[dwOutline]=sOutlineName;}
arrOutlineNames["OwcTreeOutline_Expanded|OwcTreeOutline_Collapsed"]="e";this.DeclareField("m_arrOutlineNames",arrOutlineNames);};function OwcTreeRegisterNodeType(rObject,sNodeTypeName,sControlType,sNodeClass)
{if(!rObject.m_arrNodeTypes)
rObject.m_arrNodeTypes=new Array();var oNodeType=rObject.m_arrNodeTypes[sNodeTypeName.toLowerCase()];if(!oNodeType)
{oNodeType=new Olive.Controls.TreeNodeType();oNodeType.m_sNodeTypeName=sNodeTypeName;rObject.m_arrNodeTypes[sNodeTypeName.toLowerCase()]=oNodeType;}
if(!rObject.m_oDefaultNodeType)
rObject.m_oDefaultNodeType=oNodeType;if(sControlType)
rObject.registerControlType(sControlType,eval(sNodeClass));return oNodeType;}
function OwcTree_parseControlHtml()
{this.registerNodeTypes();if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.m_nAutoProgressiveSize=DHTML.getAttrNumber(this.HtmlElement,Olive.Controls.attributes.AutoProgressiveSize,this.m_nAutoProgressiveSize);this.m_bSupportMultiSelect=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.MultiSelect,false);this.m_bSingleNodeExpandable=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.SingleNodeExpandable,this.m_bSingleNodeExpandable);this.m_nSingleNodeExpandableMaxDepth=DHTML.getAttrNumber(this.HtmlElement,Olive.Controls.attributes.SingleNodeExpandableMaxDepth,this.m_nSingleNodeExpandableMaxDepth);this.m_bToggleOnSelectableAreaClicked=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.ToggleOnSelectableAreaClicked,this.m_bToggleOnSelectableAreaClicked);}
function OwcTree_registerNodeTypes()
{OwcTreeRegisterNodeType(this,"TreeNode",Olive.Controls.controlTypeNames.TreeNode,"Olive.Controls.TreeNode");}
function OwcTree_parseControlData(oDataElement)
{if(this.BaseClassMethod&&(this.BaseClassMethod!=arguments.callee))
this.BaseClassMethod.apply(this,arguments);var sDataType=DHTML.getAttr(oDataElement,"type");if(sDataType!="TreeLayout")
return false;var arrNodeTypes=getChildObjsByTagNsPrefix(oDataElement,"NodeType",Olive.Controls.prefix);if(arrNodeTypes&&arrNodeTypes.length>0)
{for(var iNodeType=0;iNodeType<arrNodeTypes.length;++iNodeType)
{var oNodeTypeElem=arrNodeTypes[iNodeType];var sNodeTypeName=DHTML.getAttr(oNodeTypeElem,"name");var oNodeType=this.getNodeType(sNodeTypeName);if(!oNodeType)
{if(!sNodeTypeName)
continue;oNodeType=OwcTreeRegisterNodeType(this,sNodeTypeName);}
var bNoIcon=DHTML.getAttrBoolean(oNodeTypeElem,"noIcon",false);if(bNoIcon)
{oNodeType.m_sIconUrl=null;oNodeType.m_sIconSelectedUrl=null;}
else
{var sIconUrl=DHTML.getAttr(oNodeTypeElem,"iconUrl");if(sIconUrl)
oNodeType.m_sIconUrl=sIconUrl;var sIconSelectedUrl=DHTML.getAttr(oNodeTypeElem,"iconSelectedUrl");if(sIconSelectedUrl)
oNodeType.m_sIconSelectedUrl=sIconSelectedUrl;}
var sNodeCssClass=DHTML.getAttr(oNodeTypeElem,"cssClass");if(sNodeCssClass)
oNodeType.m_sNodeCssClass=sNodeCssClass;var sSelectedCssClass=DHTML.getAttr(oNodeTypeElem,"cssClassSelected");if(sSelectedCssClass)
oNodeType.m_sSelectedCssClass=sSelectedCssClass;}}
return true;}
function OwcTree_setDefaultNodeType(vNodeType)
{if(typeof(vNodeType)!="object")
vNodeType=this.getNodeType(vNodeType);if(vNodeType)
this.m_oDefaultNodeType=vNodeType;}
function OwcTree_contentBuildControlParams(oParams)
{if(this.m_nAutoProgressiveSize>=0)
oParams.addParam(OwcUrlParam_AutoProgressiveSize,String(this.m_nAutoProgressiveSize));}
function OwcTree_initControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_bSingleNodeExpandable)
{this.onNodeExpandChanging=this.onChildNodeExpandChanging;}}
function OwcTree_onSelectionChanged(oEvent)
{}
function OwcTree_getNodeType(sNodeType)
{if(!sNodeType||sNodeType==""||!this.m_arrNodeTypes)
return this.m_oDefaultNodeType;var oNodeType=this.m_arrNodeTypes[sNodeType.toLowerCase()];return oNodeType;}
function OwcTree_getNodeOutlineName(dwOutlineMask)
{return(this.m_arrOutlineNames?this.m_arrOutlineNames[dwOutlineMask]:"");}
function OwcTreeOrTreeNode_onChildNodeExpandChanging(oEvent)
{if(oEvent.Expanding&&oEvent.curObject==oEvent.srcObject.Parent&&oEvent.srcObject.m_oTree&&oEvent.srcObject.m_oTree.m_bSingleNodeExpandable)
{var arrTreeSubnodes=this.findControlsImplementing(Olive.ITreeNode);for(var i=0;i<arrTreeSubnodes.length;++i)
{var oNode=arrTreeSubnodes[i];if(oNode!=oEvent.srcObject&&oNode.isNodeExpanded())
{oNode.nodeExpand(OwcTreeNodeExpand_Collapse);}}}}
function OwcTreeOrTreeNode_expandTree(expandMode,nDepth,nStart)
{var arrTreeSubnodes=this.findControlsImplementing(Olive.ITreeNode);for(var i=0;i<arrTreeSubnodes.length;++i)
arrTreeSubnodes[i].nodeExpand(expandMode,nDepth,nStart);}
JScript.Type.RegisterClass("Olive.Controls.Tree",Olive.Controls.Tree,Olive.Controls.Control,[Olive.ISelection]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Tree,Olive.Controls.Tree);}
if(!Olive.UiElemType.TreeOutline)
{Olive.UiElemType.TreeOutline=function OwcTreeOutlineUiElemType()
{};Olive.UiElemType.TreeOutline.DeclareType=function OwcTreeOutlineUiElemType_DeclareType(rObject)
{this.DeclareField("className",OwcCssClass_TreeOutline);this.ReplaceMethod("updateUiElemState",OwcTreeOutlineUiElemType_updateUiElemState);};function OwcTreeOutlineUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{var sClass="to"+oControl.m_oTree.getNodeOutlineName("OwcTreeOutline_Expanded|OwcTreeOutline_Collapsed");if(!oControl.isNodeLastChild())
DHTML.addCssClassToElem(oUiElem,sClass);else
DHTML.removeCssClassFromElem(oUiElem,sClass);}
JScript.Type.RegisterClass("Olive.UiElemType.TreeOutline",Olive.UiElemType.TreeOutline,Olive.UiElemType);}
if(!Olive.UiElemType.TreeNodeSelect)
{Olive.UiElemType.TreeNodeSelect=function OwcTreeNodeSelectUiElemType()
{};Olive.UiElemType.TreeNodeSelect.DeclareType=function OwcTreeNodeSelectUiElemType_DeclareType(rObject)
{this.DeclareField("className",OwcCssClass_SelectArea);this.ReplaceMethod("bindUiElementCustom",OwcTreeNodeSelect_bindUiElementCustom);this.ReplaceMethod("updateUiElemState",OwcTreeNodeSelect_updateUiElemState);};function OwcTreeNodeSelect_bindUiElementCustom(oControl,oUiElem)
{DHTML.attachEvent(oUiElem,"selectstart",OwcTreeNode_onSelectStart);if(oControl.m_oTree&&oControl.m_oTree.m_bSupportMultiSelect)
{DHTML.attachEvent(oUiElem,"mousedown",OwcTreeNode_onMouseDown);if(isSafari())
DHTML.attachEvent(oUiElem,"contextmenu",OwcTreeNode_onMouseDown);}
else
{DHTML.attachEvent(oUiElem,"click",OwcTreeNode_onMouseDown);DHTML.attachEvent(oUiElem,"contextmenu",OwcTreeNode_onMouseDown);}}
function OwcTreeNodeSelect_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{var oNodeType=oControl.m_oNodeType;var sCssClass=(oNodeType?oNodeType.m_sSelectedCssClass:OwcCssClass_Selected);var bSelected=oControl.isNodeSelected();if(bSelected)
DHTML.addCssClassToElem(oUiElem,sCssClass);else
DHTML.removeCssClassFromElem(oUiElem,sCssClass);}
function OwcTreeNode_onMouseDown(oEvent)
{oEvent=getEvent(oEvent);if(this.owcUiParent&&this.owcUiParent.m_oTree)
{var oTreeNode=this.owcUiParent;var oTreeControl=oTreeNode.m_oTree;oTreeControl.onItemMouseDown(oTreeNode,oEvent);if(oTreeControl.m_bToggleOnSelectableAreaClicked)
{var nMouseButtons=getEventMouseButtons(oEvent);var bCtrlKeyPressedWin=(isCtrlKeyPressed(oEvent)&&!isSafari());var bMetaKeyPressedMac=isMetaKeyPressed(oEvent);var bContextMenuEvent=(oEvent.type.toLowerCase()=="contextmenu");if((nMouseButtons==1||nMouseButtons==0)&&!bCtrlKeyPressedWin&&!bMetaKeyPressedMac&&!bContextMenuEvent)
{var nNodeOutline=oTreeNode.getOutlineMask();var nExpandState=(nNodeOutline&OwcTreeOutline_ExpandMask);if(nExpandState!=OwcTreeOutline_NonExpandable)
oTreeNode.nodeExpand(OwcTreeNodeExpand_Toggle);}}}
if(this.BaseClassMethod&&this.BaseClassMethod!=arguments.callee)
this.BaseClassMethod.apply(this,arguments);}
JScript.Type.RegisterClass("Olive.UiElemType.TreeNodeSelect",Olive.UiElemType.TreeNodeSelect,Olive.UiElemType);}
if(!Olive.UiElemType.TreeIcon)
{Olive.UiElemType.TreeIcon=function OwcTreeIconUiElemType()
{};Olive.UiElemType.TreeIcon.DeclareType=function OwcTreeIconUiElemType_DeclareType(rObject)
{this.ReplaceMethod("updateUiElemState",OwcTreeIcon_updateUiElemState);};function OwcTreeIcon_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{var sIconUrl;if((dwNewState&Olive.IState.State.SelectedMask)==Olive.IState.State.Selected)
sIconUrl=oControl.getNodeIconSelectedUrl();else
sIconUrl=oControl.getNodeIconUrl();if(!sIconUrl||sIconUrl=="")
return;var oImgElem=getChildObjectByTag(oUiElem,"img");if(oImgElem)
{if(oImgElem.src!=sIconUrl)
oImgElem.src=sIconUrl;}
else
{var sHtml="<img src='"+sIconUrl+"' />";DHTML.pasteHtmlContent(oUiElem,sHtml);}}
JScript.Type.RegisterClass("Olive.UiElemType.TreeIcon",Olive.UiElemType.TreeIcon,Olive.UiElemType);}
if(!Olive.UiElemType.TreeBox)
{Olive.UiElemType.TreeBox=function OwcTreeBoxUiElemType()
{};Olive.UiElemType.TreeBox.DeclareType=function OwcTreeBoxUiElemType_DeclareType(rObject)
{this.DeclareField("className",OwcCssClass_TreeOutline);this.ReplaceMethod("updateUiElemState",OwcTreeBox_updateUiElemState);};function OwcTreeBox_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{var nNodeOutline=oControl.getOutlineMask();var nExpandState=(nNodeOutline&OwcTreeOutline_ExpandMask);if(nExpandState==OwcTreeOutline_NonExpandable)
DHTML.detachEvent(oUiElem,"click",OwcTreeBox_onClick);else
DHTML.attachEvent(oUiElem,"click",OwcTreeBox_onClick);var sClass="to"+oControl.m_oTree.getNodeOutlineName(nNodeOutline);DHTML.removeCssClassFromElem(oUiElem,"to[efml][cx]?");DHTML.addCssClassToElem(oUiElem,sClass);}
function OwcTreeBox_onClick(oEvent)
{oEvent=getEvent(oEvent);var nMouseButtons=getEventMouseButtons(oEvent);if(this.owcUiParent)
{stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);this.owcUiParent.nodeExpand(OwcTreeNodeExpand_Toggle);var oControl=this.owcUiParent;if(!oControl)
return;var oEventNew=oControl.createOwcEventObject("treeBoxMouseDown");oControl.fireOwcEvent(oEventNew);Object_Destroy(oEventNew);return false;}}
JScript.Type.RegisterClass("Olive.UiElemType.TreeBox",Olive.UiElemType.TreeBox,Olive.UiElemType);}
if(!Olive.UiElemType.TreeSubNodes)
{Olive.UiElemType.TreeSubNodes=function OwcTreeSubNodesUiElemType()
{};Olive.UiElemType.TreeSubNodes.DeclareType=function OwcTreeSubNodesUiElemType_DeclareType(rObject)
{this.ReplaceMethod("updateUiElemState",OwcTreeSubNodes_updateUiElemState);};function OwcTreeSubNodes_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{var bExpanded=oControl.isNodeExpanded();if(bExpanded)
DHTML.removeCssClassFromElem(oUiElem,OwcCssClass_Collapsed);else
DHTML.addCssClassToElem(oUiElem,OwcCssClass_Collapsed);}
JScript.Type.RegisterClass("Olive.UiElemType.TreeSubNodes",Olive.UiElemType.TreeSubNodes,Olive.UiElemType);}
if(!Olive.Controls.TreeNodeType)
{Olive.Controls.TreeNodeType=function OwcTreeNodeType()
{this.registerUiElemType(OwcUiElem_TreeOutline,new Olive.UiElemType.TreeOutline());this.registerUiElemType(OwcUiElem_TreeBox,new Olive.UiElemType.TreeBox());this.registerUiElemType(OwcUiElem_TreeNodeSelection,new Olive.UiElemType.TreeNodeSelect());this.registerUiElemType(OwcUiElem_TreeIcon,new Olive.UiElemType.TreeIcon());this.registerUiElemType(OwcUiElem_TreeSubNodes,new Olive.UiElemType.TreeSubNodes());};Olive.Controls.TreeNodeType.DeclareType=function OwcTreeNodeType_DeclareType(rObject)
{this.DeclareField("m_sIconUrl",null);this.DeclareField("m_sIconSelectedUrl",null);this.DeclareField("m_sNodeCssClass",OwcCssClass_TreeNode);this.DeclareField("m_sSelectedCssClass",OwcCssClass_Selected);};JScript.Type.RegisterClass("Olive.Controls.TreeNodeType",Olive.Controls.TreeNodeType,null,[Olive.IUiElemTypes]);}
if(!Olive.Controls.TreeNode)
{Olive.Controls.TreeNode=function OwcTreeNode()
{};Olive.Controls.TreeNode.DeclareType=function OwcTreeNode_DeclareType()
{this.DeclareField("m_oTree",null);this.DeclareField("m_oNodeType",null);this.DeclareField("m_nLevel",0);this.DeclareField("m_sNodeIconUrl",null);this.DeclareField("m_bExpandAll",false);this.OverrideMethod("createOwcEventObject",OwcTreeNode_createOwcEventObject);this.OverrideMethod("parseControlHtmlAttr",OwcTreeNode_parseControlHtml);this.OverrideMethod("initControl",OwcTreeNode_initControl);this.OverrideMethod("initUiState",OwcTreeNode_initUiState);this.OverrideMethod("getUiElemType",OwcTreeNode_getUiElemType);this.OverrideMethod("contentBuildControlParams",OwcTreeNode_contentBuildControlParams);this.OverrideMethod("getHtmlContentTarget",OwcTreeNode_getHtmlContentTarget);this.OverrideMethod("postHtmlContentPaste",OwcTreeNode_postHtmlContentPaste);this.DeclareMethod("isNodeExpandable",OwcTreeNode_isNodeExpandable);this.DeclareMethod("isNodeExpanded",OwcTreeNode_isNodeExpanded);this.DeclareMethod("isNodeSelected",OwcTreeNode_isNodeSelected);this.DeclareMethod("isNodeFirstChild",OwcTreeNode_isNodeFirstChild);this.DeclareMethod("isNodeLastChild",OwcTreeNode_isNodeLastChild);this.DeclareMethod("getOutlineMask",OwcTreeNode_getOutlineMask);this.DeclareMethod("getNodeIconUrl",OwcTreeNode_getNodeIconUrl);this.DeclareMethod("getNodeIconSelectedUrl",OwcTreeNode_getNodeIconSelectedUrl);this.DeclareMethod("nodeExpand",OwcTreeNode_nodeExpand);this.DeclareMethod("nodeSelect",OwcTreeNode_nodeSelect);this.DeclareMethod("onChildNodeExpandChanging",OwcTreeOrTreeNode_onChildNodeExpandChanging);};Olive.Controls.TreeNode.ApplyPrototype=function OwcTreeNode_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("nodeExpandChanging","onNodeExpandChanging",true);rObject.registerOwcEventsClass2("nodeExpandChanged","onNodeExpandChanged",true);rObject.registerOwcEventsClass2("treeBoxMouseDown","onTreeBoxMouseDown",true);Olive.CmdTarget.RegisterCommand(rObject,OwcCmd_ToggleExpand,"nodeExpand");};function OwcTreeNode_createOwcEventObject(rEventClass)
{var oEvent=this.BaseClassMethod.apply(this,arguments);oEvent.owcTree=this.m_oTree;oEvent.owcTreeNode=this;return oEvent;}
function OwcTreeNode_getUiElemType(sNodeType)
{if(!this.m_oNodeType)
return null;return this.m_oNodeType.getUiElemType(sNodeType);}
function OwcTreeNode_initUiState()
{DHTML.addCssClassToElem(this.HtmlElement,OwcCssClass_TreeNode);if(this.m_oNodeType&&this.m_oNodeType.m_sNodeCssClass)
DHTML.addCssClassToElem(this.HtmlElement,this.m_oNodeType.m_sNodeCssClass);if(this.BaseClassMethod&&this.BaseClassMethod!=arguments.callee)
this.BaseClassMethod.apply(this,arguments);}
function OwcTreeNode_onSelectStart(oEvent)
{oEvent=getEvent(oEvent);stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);return false;}
function OwcTreeNode_parseControlHtml()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if("m_oTree"in this.Parent)
{this.m_oTree=this.Parent.m_oTree;this.m_nLevel=this.Parent.m_nLevel+1;}
else
{this.m_oTree=this.Parent;this.m_nLevel=0;}
var sTreeNodeType=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.NodeType);if(sTreeNodeType)
sTreeNodeType=sTreeNodeType.toLowerCase();this.m_oNodeType=this.m_oTree.getNodeType(sTreeNodeType);var sNodeIcon=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.NodeIcon);if(sNodeIcon)
{this.m_sNodeIconUrl=sNodeIcon;}
var bExpanded=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.Expand,false);this.changeState(bExpanded,Olive.IState.State.Expanded,Olive.IState.State.ExpandMask);this.m_bExpandAll=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.ExpandAll,this.m_bExpandAll);var bProgressiveDownload=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.attributes.Download);if(bProgressiveDownload)
this.m_nState|=OwcTreeNodeState_NoData;}
function OwcTreeNode_initControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var oTree=this.m_oTree;if(oTree&&oTree.m_bSingleNodeExpandable&&this.m_nLevel<oTree.m_nSingleNodeExpandableMaxDepth)
{this.attachOwcEventHandler("nodeExpandChanging",this.onChildNodeExpandChanging,this);}}
function OwcTreeNode_isNodeExpandable()
{if((this.m_nState&OwcTreeNodeState_NoData)==OwcTreeNodeState_NoData)
return true;return(this.getControlsCount(Olive.Controls.TreeNode)>0);}
function OwcTreeNode_isNodeExpanded()
{return this.isStateSet(Olive.IState.State.Expanded,Olive.IState.State.ExpandMask);}
function OwcTreeNode_isNodeSelected()
{return this.isStateSet(Olive.IState.State.Selected,Olive.IState.State.SelectedMask);}
function OwcTreeNode_isNodeFirstChild()
{return this.Parent.isFirstControl(this,Olive.Controls.TreeNode);}
function OwcTreeNode_isNodeLastChild()
{return this.Parent.isLastControl(this,Olive.Controls.TreeNode);}
function OwcTreeNode_getOutlineMask()
{var dwMask=0;if(this.m_nLevel==0)
dwMask+=OwcTreeOutline_RootLevel;if(this.isNodeFirstChild())
dwMask+=OwcTreeOutline_FirstNode;if(this.isNodeLastChild())
dwMask+=OwcTreeOutline_LastNode;if(!this.isNodeExpandable())
dwMask+=OwcTreeOutline_NonExpandable;else if(this.isNodeExpanded())
dwMask+=OwcTreeOutline_Expanded;else
dwMask+=OwcTreeOutline_Collapsed;return dwMask;}
function OwcTreeNode_getNodeIconUrl()
{if(this.m_sNodeIconUrl)
return this.m_sNodeIconUrl;return this.m_oNodeType.m_sIconUrl;}
function OwcTreeNode_getNodeIconSelectedUrl()
{if(this.m_sNodeIconSelectedUrl)
return this.m_sNodeIconSelectedUrl;return this.m_oNodeType.m_sIconSelectedUrl;}
function OwcTreeNode_contentBuildControlParams(oParams)
{if(this.m_oTree)
this.m_oTree.contentBuildControlParams(oParams);if((this.m_nState&OwcTreeNodeState_NoData)==OwcTreeNodeState_NoData)
oParams.addParam(OwcUrlParam_Progressive,"1",true);if(this.m_bExpandAll)
oParams.addParam(OwcUrlParam_ExpandAll,"0",true);}
function OwcTreeNode_getHtmlContentTarget()
{var oSubNodes=this.m_arrUiElements[OwcUiElem_TreeSubNodesTarget];return oSubNodes;}
function OwcTreeNode_postHtmlContentPaste()
{if((this.m_nState&OwcTreeNodeState_NoData)==OwcTreeNodeState_NoData)
{this.modifyState(OwcTreeNodeState_NoData);if(this.isNodeExpanded()&&!this.isNodeExpandable())
this.modifyState(Olive.IState.State.ExpandMask,Olive.IState.State.Collapsed);}}
function OwcTreeNode_nodeExpand(nExpandMode,nDepth,nStart)
{if(typeof(nDepth)=="number"&&nDepth<=0)
return;if(nExpandMode==undefined)
nExpandMode=OwcTreeNodeExpand_Toggle;var bExpanded=this.isNodeExpanded();var dwStateApply=0;var bApplyToSubNodes=false;switch(nExpandMode)
{case OwcTreeNodeExpand_ExpandAll:bApplyToSubNodes=true;case OwcTreeNodeExpand_Expand:dwStateApply=Olive.IState.State.Expanded;break;case OwcTreeNodeExpand_CollapseAll:bApplyToSubNodes=true;case OwcTreeNodeExpand_Collapse:dwStateApply=Olive.IState.State.Collapsed;break;default:dwStateApply=(bExpanded?Olive.IState.State.Collapsed:Olive.IState.State.Expanded);break;}
var dwPrevState=this.getState();var dwNewState=(dwPrevState&~Olive.IState.State.ExpandMask)|dwStateApply;var bExpanding=((dwNewState&Olive.IState.State.ExpandMask)==Olive.IState.State.Expanded);bApplyToSubNodes=bApplyToSubNodes||(this.m_bExpandAll&&bExpanding);var bNoChangeInState=(dwNewState==dwPrevState);if(bNoChangeInState&&!bApplyToSubNodes)
return;if(typeof(nStart)!="number"||isNaN(nStart)||nStart<=0)
{var oEvent=this.createOwcEventObject("nodeExpandChanging");oEvent.Expanding=bExpanding;this.fireOwcEvent(oEvent);var bCancelDefaultAction=oEvent.cancelDefaultAction;Object_Destroy(oEvent);if(bCancelDefaultAction)
return;}
if(bExpanding)
{if((dwNewState&OwcTreeNodeState_NoData)==OwcTreeNodeState_NoData)
{if(this.contentCanLoad())
this.contentLoad();else
{this.reportKnownError(Olive.Errors.Code.NoProgressiveDownload);return;}}
else if(nExpandMode==OwcTreeNodeExpand_ExpandAll||this.m_bExpandAll)
{var arrTreeSubnodes=this.findControlsImplementing(Olive.ITreeNode);for(var iSubNode=0;arrTreeSubnodes&&iSubNode<arrTreeSubnodes.length;iSubNode++)
{if(arrTreeSubnodes[iSubNode].isNodeExpandable())
{arrTreeSubnodes[iSubNode].nodeExpand(OwcTreeNodeExpand_ExpandAll,nDepth-1,nStart-1);}}}}
else
{if(nExpandMode==OwcTreeNodeExpand_CollapseAll)
{var arrTreeSubnodes=this.findControlsImplementing(Olive.ITreeNode);for(var iSubNode=0;arrTreeSubnodes&&iSubNode<arrTreeSubnodes.length;iSubNode++)
{if(arrTreeSubnodes[iSubNode].isNodeExpanded())
{arrTreeSubnodes[iSubNode].nodeExpand(OwcTreeNodeExpand_CollapseAll,nDepth-1,nStart-1);}}}}
if(typeof(nStart)!="number"||isNaN(nStart)||nStart<=0)
{this.modifyState(Olive.IState.State.ExpandMask,dwStateApply);oEvent=this.createOwcEventObject("nodeExpandChanged");oEvent.Expanded=bExpanding;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}}
function OwcTreeNode_nodeSelect(bSelect)
{this.changeState(bSelect,Olive.IState.State.Selected,Olive.IState.State.SelectedMask);}
JScript.Type.RegisterClass("Olive.Controls.TreeNode",Olive.Controls.TreeNode,Olive.Controls.Control,[Olive.IUiElements,Olive.ITreeNode]);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.FolderTree="foldertree";Olive.Controls.controlTypeNames.Folder="folder";var OwcAttr_DisplaySpecialFolders=Olive.Controls.xmlns+"SpecialFolders";var OwcFolderTree_ShowSpecialFolders=0x00000004;if(!Olive.Controls.FolderTreeNode)
{Olive.Controls.FolderTreeNode=function OwcFolderTreeNode()
{};Olive.Controls.FolderTreeNode.DeclareType=function OwcFolderTreeNode_DeclareType(rObject)
{this.DeclareField("m_bDisableContentAutoLoad",true);};JScript.Type.RegisterClass("Olive.Controls.FolderTreeNode",Olive.Controls.FolderTreeNode,Olive.Controls.TreeNode,[Olive.Controls.IDataBound]);}
if(!Olive.Controls.FolderTree)
{Olive.Controls.FolderTree=function OwcFolderTree()
{};Olive.Controls.FolderTree.DeclareType=function OwcFolderTree_DeclareType(rObject)
{this.DeclareField("m_dwQueryFlags",0);this.DeclareField("displayName","");this.OverrideMethod("parseControlHtmlAttr",OwcFolderTree_parseControlHtmlAttr);this.OverrideMethod("parseControlData",OwcFolderTree_parseControlData);this.OverrideMethod("registerNodeTypes",OwcFolderTree_registerNodeTypes);this.OverrideMethod("contentBuildControlParams",OwcFolderTree_contentBuildControlParams);this.DeclareMethod("displayTree",OwcFolderTree_displayTree);this.DeclareMethod("getDisplayName",OwcFolderTree_getDisplayName);}
Olive.Controls.FolderTree.ApplyPrototype=function OwcFolderTree_ApplyPrototype(rObject)
{rObject.registerOwcEventsClass2("treeBoxMouseDown","onTreeBoxMouseDown",true);}
function OwcFolderTree_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var bDisplaySpecialFolders=DHTML.getAttrBoolean(this.HtmlElement,OwcAttr_DisplaySpecialFolders);if(bDisplaySpecialFolders)
this.m_dwQueryFlags|=OwcFolderTree_ShowSpecialFolders;}
function OwcFolderTree_registerNodeTypes()
{var sSdkPath=owcGetCommonerPath();var oFolderNodeType=OwcTreeRegisterNodeType(this,"Folder",Olive.Controls.controlTypeNames.Folder,"Olive.Controls.FolderTreeNode")
oFolderNodeType.m_sIconUrl=sSdkPath+"Layout/images/folder.gif";this.setDefaultNodeType(oFolderNodeType);var oInboxFolderNodeType=OwcTreeRegisterNodeType(this,"Inbox");oInboxFolderNodeType.m_sIconUrl=sSdkPath+"Layout/images/inbox.gif";}
function OwcFolderTree_parseControlData(oDataElement)
{var bResult=false;var sDataType=DHTML.getAttr(oDataElement,"type").toLowerCase();if((sDataType!="foldertreedata")&&this.BaseClassMethod&&(this.BaseClassMethod!=arguments.callee)){var bResult=this.BaseClassMethod.apply(this,arguments);return bResult;}
if(sDataType!="foldertreedata")
return bResult;this.displayName=DHTML.getAttr(oDataElement,"displayName");var oEvent=this.createOwcEventObject("folderTreeNameReceived");this.fireOwcEvent(oEvent);Object_Destroy(oEvent);return true;}
function OwcFolderTree_getDisplayName(){return this.displayName;}
function OwcFolderTree_contentBuildControlParams(oParams)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_dwQueryFlags)
oParams.addParam(OwcUrlParam_QueryFlags,String(this.m_dwQueryFlags));}
function OwcFolderTree_displayTree(sTreeIdOrName,vSelectFolder,nExpandLevel)
{var oContentItem=this.getContentItem();if(!oContentItem)
{oContentItem=new Olive.ContentItem.FolderTree();this.m_oContentItem=oContentItem;}
if(typeof(sTreeIdOrName)=="number")
this.m_oContentItem.m_sTreeUid=sTreeIdOrName;else
this.m_oContentItem.m_sTreeName=sTreeIdOrName;this.contentLoad();}
JScript.Type.RegisterClass("Olive.Controls.FolderTree",Olive.Controls.FolderTree,Olive.Controls.Tree,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.FolderTree,Olive.Controls.FolderTree);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.DocList="doclist";Olive.Controls.controlTypeNames.DocListItem="doclistitem";if(!Olive.Controls.DocList)
{Olive.Controls.DocList=function OwcDocList()
{OwcListRegisterItemType(this,"Document",Olive.Controls.controlTypeNames.DocListItem,"Olive.Controls.DocListItem");}
Olive.Controls.DocList.DeclareType=function OwcDocList_DeclareType(rObject)
{this.DeclareMethod("navigateToPage",OwcDocList_navigateToPage);this.DeclareMethod("displayFolderContent",OwcDocList_displayFolderContent);}
function OwcDocList_navigateToPage(){this.displayFolderContent();}
function OwcDocList_displayFolderContent(sTreeId,sFolderId,nPageNoToDisplay,nItemsPerPage,sSelectDocId,sSortingField,sSortingOrder)
{var oContentItem=this.getContentItem();if(!oContentItem)
{oContentItem=new Olive.ContentItem.Folder();this.m_oContentItem=oContentItem;}
if("string"==typeof sTreeId){this.m_oContentItem.m_sTreeUid=sTreeId;if("string"==typeof sFolderId)
this.m_oContentItem.m_sFolderUid=sFolderId;}else{if("string"==typeof sFolderId)
this.m_oContentItem.m_sFolderQName=sFolderId;}
if("number"==typeof nPageNoToDisplay)
this.m_nPageNo=nPageNoToDisplay;if("number"==typeof nItemsPerPage)
this.m_nPageSize=nItemsPerPage;if(sSortingField)
this.sortBy(sSortingField,sSortingOrder,true);else if(sSortingField!=undefined)
this.setSortOptions(null,true);this.contentLoad();}
JScript.Type.RegisterClass("Olive.Controls.DocList",Olive.Controls.DocList,Olive.Controls.List,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.DocList,Olive.Controls.DocList);}
if(!Olive.Controls.DocListItem)
{Olive.Controls.DocListItem=function OwcDocListItem()
{}
Olive.Controls.DocListItem.DeclareType=function OwcDocListItem_DeclareType(rObject)
{this.DeclareField("m_bDisableContentAutoLoad",true);}
JScript.Type.RegisterClass("Olive.Controls.DocListItem",Olive.Controls.DocListItem,Olive.Controls.ListItem,[Olive.Controls.IDataBound]);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.Thumbnail="thumbnail";Olive.Controls.attributes.ImageKind=Olive.Controls.prefix+":"+"image-kind";var OwcUrlParam_ImageKind="ImageKind";if(!Olive.Controls.Thumbnail)
{Olive.Controls.Thumbnail=function OwcThumbnail()
{};Olive.Controls.Thumbnail.ImageKind={PageImage:"page",PagePreview:"page-preview",FirstDocPagePreview:"first-doc-page-preview",FirstEntityPagePreview:"first-entity-page-preview",FirstHitPagePreview:"first-hit-page-preview"}
Olive.Controls.Thumbnail.DeclareType=function OwcThumbnail_DeclareType()
{this.DeclareField("m_sImageKind",Olive.Controls.Thumbnail.ImageKind.PagePreview);this.DeclareField("m_bAutoMagnify",true);this.OverrideMethod("parseControlHtmlAttr",OwcThumbnail_parseControlHtml);this.OverrideMethod("contentBuildControlParams",OwcThumbnail_contentBuildControlParams);this.ReplaceMethod("requestData",OwcThumbnail_requestData);};function OwcThumbnail_requestData(oParams,oHtmlContentTarget)
{var sUrl=this.buildRequestUrl(oParams);this.setImageUrl(sUrl);}
function OwcThumbnail_parseControlHtml()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var sImageKind=DHTML.getAttr(this.HtmlElement,Olive.Controls.attributes.ImageKind);if(sImageKind)
this.m_sImageKind=sImageKind;}
function OwcThumbnail_contentBuildControlParams(oParams)
{oParams.addParam(OwcUrlParam_ImageKind,this.m_sImageKind);if(this.m_nMaxImageWidth>0)
oParams.addParam(OwcUrlParam_MaxImageWidth,String(this.m_nMaxImageWidth));if(this.m_nMaxImageHeight>0)
oParams.addParam(OwcUrlParam_MaxImageHeight,String(this.m_nMaxImageHeight));}
JScript.Type.RegisterClass("Olive.Controls.Thumbnail",Olive.Controls.Thumbnail,Olive.Controls.ImageViewer,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Thumbnail,Olive.Controls.Thumbnail);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.TOC="toc";Olive.Controls.controlTypeNames.TocEntry="tocentry";Olive.Controls.controlTypeNames.TocDoc="tocdoc";Olive.Controls.controlTypeNames.TocSearchRes="tocsearchres";Olive.Controls.controlTypeNames.TocSection="tocsection";var OwcUiElem_EntrySnippet="entrysnippet";var OwcUiElem_PageLink="tocentrypagelink";var OwcUiElem_ICLink="tocentryiclink";var OwcCssClass_EntrySnippet="entry-snippet";var OwcCssClass_PageLink="page-link";var OwcCssClass_ICLink="ic-link";if(!Olive.Controls.TocEntryTreeNode)
{Olive.Controls.TocEntryTreeNode=function OwcTocEntryTreeNode()
{};Olive.Controls.TocEntryTreeNode.DeclareType=function OwcTocEntryTreeNode_DeclareType()
{this.DeclareField("m_bDisableContentAutoLoad",true);};Olive.Controls.TocEntryTreeNode.ApplyPrototype=function OwcTocEntryTreeNode_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("entrySnippetClicked","onEntrySnippetClicked",true);rObject.registerOwcEventsClass2("pageLinkClicked","onPageLinkClicked",true);rObject.registerOwcEventsClass2("icLinkClicked","onIcLinkClicked",true);};JScript.Type.RegisterClass("Olive.Controls.TocEntryTreeNode",Olive.Controls.TocEntryTreeNode,Olive.Controls.TreeNode,[Olive.Controls.IDataBound]);}
if(!Olive.Controls.TocDocTreeNode)
{Olive.Controls.TocDocTreeNode=function OwcTocDocTreeNode()
{};Olive.Controls.TocDocTreeNode.DeclareType=function OwcTocDocTreeNode_DeclareType()
{this.DeclareField("m_bDisableContentAutoLoad",true);};JScript.Type.RegisterClass("Olive.Controls.TocDocTreeNode",Olive.Controls.TocDocTreeNode,Olive.Controls.TreeNode,[Olive.Controls.IDataBound]);}
if(!Olive.Controls.TocSectionTreeNode)
{Olive.Controls.TocSectionTreeNode=function OwcTocSectionTreeNode()
{};Olive.Controls.TocSectionTreeNode.DeclareType=function OwcTocSectionTreeNode_DeclareType()
{this.DeclareField("m_bDisableContentAutoLoad",true);};JScript.Type.RegisterClass("Olive.Controls.TocSectionTreeNode",Olive.Controls.TocSectionTreeNode,Olive.Controls.TreeNode,[Olive.Controls.IDataBound]);}
if(!Olive.Controls.TocSearchResTreeNode)
{Olive.Controls.TocSearchResTreeNode=function OwcTocSearchResTreeNode()
{};Olive.Controls.TocSearchResTreeNode.DeclareType=function OwcTocSearchResTreeNode_DeclareType()
{this.DeclareField("m_bDisableContentAutoLoad",true);this.DeclareMethod("readDataNode",OwcTocSearchResTreeNode_readDataNode);this.OverrideMethod("parseControlHtmlAttr",OwcTocSearchResTreeNode_parseControlHtml);}
function OwcTocSearchResTreeNode_parseControlHtml()
{if(this.BaseClassMethod){this.BaseClassMethod.apply(this,arguments);}
if(this.getContentItem)
{var oContentItem=Object_Clone(this.getContentItem());var tmpControl=this;while(tmpControl){if(tmpControl.getContentItem&&tmpControl.controlType&&(("undefined"!=typeof Olive.Controls.controlTypeNames.SearchResItem&&tmpControl.controlType==Olive.Controls.controlTypeNames.SearchResItem))){var oControl=tmpControl;break;}
tmpControl=tmpControl.Parent;}
if(oControl&&oControl.HtmlElement&&oControl.HtmlElement.childNodes&&oControl.HtmlElement.childNodes[0])
{this.readDataNode(oControl.HtmlElement.childNodes[0],oContentItem);}}
this.m_oContentItem=oContentItem;}
function OwcTocSearchResTreeNode_readDataNode(oCurHtmlElem,oContentItem)
{var bDataElement=DHTML.matchElemTag(oCurHtmlElem,Olive.Controls.elements.Data,Olive.Controls.prefix);if(bDataElement){var sType=DHTML.getAttr(oCurHtmlElem,"type");if(sType.toLowerCase()!=OwcContentItem_SearchResult){return;}
var sTitle=DHTML.getAttr(oCurHtmlElem,"title");if(sTitle){oContentItem.m_sTitle=sTitle;}}}
JScript.Type.RegisterClass("Olive.Controls.TocSearchResTreeNode",Olive.Controls.TocSearchResTreeNode,Olive.Controls.TreeNode,[Olive.Controls.IDataBound]);}
if(!Olive.UiElemType.EntrySnippet)
{Olive.UiElemType.EntrySnippet=function OwcEntrySnippetUiElemType()
{};Olive.UiElemType.EntrySnippet.DeclareType=function OwcEntrySnippetUiElemType_DeclareType(rObject)
{this.DeclareField("className",OwcCssClass_EntrySnippet);this.ReplaceMethod("updateUiElemState",OwcEntrySnippetUiElemType_updateUiElemState);};function OwcEntrySnippetUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{DHTML.attachEvent(oUiElem,"click",OwcTocEntry_onEntrySnippetClick);}
function OwcTocEntry_onEntrySnippetClick(oEvent)
{oEvent=getEvent(oEvent);var oParentControl=this.owcUiParent;if(!oParentControl)
return;if(oParentControl)
{var oTreeControl=oParentControl.m_oTree;oTreeControl.selectionChange(oParentControl,Olive.IState.State.Selected);var oEventNew=oParentControl.createOwcEventObject("entrySnippetClicked");oParentControl.fireOwcEvent(oEventNew);Object_Destroy(oEventNew);}}
JScript.Type.RegisterClass("Olive.UiElemType.EntrySnippet",Olive.UiElemType.EntrySnippet,Olive.UiElemType);}
if(!Olive.UiElemType.PageLink)
{Olive.UiElemType.PageLink=function OwcPageLinkUiElemType()
{};Olive.UiElemType.PageLink.DeclareType=function OwcPageLinkUiElemType_DeclareType(rObject)
{this.DeclareField("className",OwcCssClass_PageLink);this.ReplaceMethod("updateUiElemState",OwcPageLinkUiElemType_updateUiElemState);};function OwcPageLinkUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{DHTML.attachEvent(oUiElem,"click",OwcTocEntry_onPageLinkClick);}
function OwcTocEntry_onPageLinkClick(oEvent)
{oEvent=getEvent(oEvent);var oParentControl=this.owcUiParent;if(!oParentControl)
return;if(oParentControl)
{var oTreeControl=oParentControl.m_oTree;oTreeControl.selectionChange(oParentControl,Olive.IState.State.Selected);var oEventNew=oParentControl.createOwcEventObject("pageLinkClicked");var oContentItem=oParentControl.getContentItem();if(oContentItem)
{oEventNew.nPageNo=oContentItem.m_nPageNo;oEventNew.nPrimId=oContentItem.m_sPrimId;oEventNew.sEntityId=oContentItem.m_sEntityId;}
oParentControl.fireOwcEvent(oEventNew);Object_Destroy(oEventNew);}}
JScript.Type.RegisterClass("Olive.UiElemType.PageLink",Olive.UiElemType.PageLink,Olive.UiElemType);}
if(!Olive.UiElemType.ICLink)
{Olive.UiElemType.ICLink=function OwcICLinkUiElemType()
{};Olive.UiElemType.ICLink.DeclareType=function OwcICLinkUiElemType_DeclareType(rObject)
{this.DeclareField("className",OwcCssClass_ICLink);this.ReplaceMethod("updateUiElemState",OwcICLinkUiElemType_updateUiElemState);};function OwcICLinkUiElemType_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{DHTML.attachEvent(oUiElem,"click",OwcTocEntry_onIcLinkClick);}
function OwcTocEntry_onIcLinkClick(oEvent)
{oEvent=getEvent(oEvent);var oParentControl=this.owcUiParent;if(!oParentControl)
return;if(oParentControl)
{stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);var oTreeControl=oParentControl.m_oTree;oTreeControl.selectionChange(oParentControl,Olive.IState.State.Selected);var oEventNew=oParentControl.createOwcEventObject("icLinkClicked");var oContentItem=oParentControl.getContentItem();if(oContentItem)
{oEventNew.sEntityId=oContentItem.m_sEntityId;}
oParentControl.fireOwcEvent(oEventNew);Object_Destroy(oEventNew);}}
JScript.Type.RegisterClass("Olive.UiElemType.ICLink",Olive.UiElemType.ICLink,Olive.UiElemType);}
if(!Olive.Controls.Toc)
{Olive.Controls.Toc=function OwcToc()
{}
Olive.Controls.Toc.attributes={FieldFilteringSet:Olive.Controls.xmlns+"FieldFilteringSet"}
Olive.Controls.Toc.DeclareType=function OwcToc_DeclareType()
{this.DeclareField("m_sFieldFilteringSet",null);this.DeclareMethod("getFullPathToPage",OwcToc_getFullPathToPage);this.OverrideMethod("registerNodeTypes",OwcToc_registerNodeTypes);this.OverrideMethod("parseControlHtmlAttr",OwcToc_parseControlHtmlAttr);this.OverrideMethod("contentBuildControlParams",OwcToc_contentBuildControlParams);};function OwcToc_registerNodeTypes()
{var sSdkPath=owcGetCommonerPath();var oDocNodeType=OwcTreeRegisterNodeType(this,"TocDocNode",Olive.Controls.controlTypeNames.TocDoc,"Olive.Controls.TocDocTreeNode");oDocNodeType.m_sIconUrl=sSdkPath+"layout/images/doc.gif";var oSearchResNodeType=OwcTreeRegisterNodeType(this,"TocSearchResNode",Olive.Controls.controlTypeNames.TocSearchRes,"Olive.Controls.TocSearchResTreeNode");oSearchResNodeType.m_sIconUrl=sSdkPath+"layout/images/doc.gif";var oSectionNodeType=OwcTreeRegisterNodeType(this,"TocSectionNode",Olive.Controls.controlTypeNames.TocSection,"Olive.Controls.TocSectionTreeNode");oSectionNodeType.m_sIconUrl=sSdkPath+"layout/images/doc.gif";var oTocEntryNodeType=OwcTreeRegisterNodeType(this,"TocEntryNode",Olive.Controls.controlTypeNames.TocEntry,"Olive.Controls.TocEntryTreeNode");oTocEntryNodeType.m_sIconUrl=sSdkPath+"layout/images/toc.gif";oTocEntryNodeType.registerUiElemType(OwcUiElem_EntrySnippet,new Olive.UiElemType.EntrySnippet());oTocEntryNodeType.registerUiElemType(OwcUiElem_PageLink,new Olive.UiElemType.PageLink());oTocEntryNodeType.registerUiElemType(OwcUiElem_ICLink,new Olive.UiElemType.ICLink());this.setDefaultNodeType(oTocEntryNodeType);}
function OwcToc_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var sFSet=DHTML.getAttr(this.HtmlElement,Olive.Controls.Toc.attributes.FieldFilteringSet);if(sFSet&&sFSet!="")
this.m_sFieldFilteringSet=sFSet;}
function OwcToc_contentBuildControlParams(oParams)
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_sFieldFilteringSet)
oParams.addParam(OwcUrlParam_FieldFilteringSet,String(this.m_sFieldFilteringSet));}
function OwcToc_getFullPathToPage(nPageNo)
{var arrTocEntries=this.Controls[0].Controls;var arrLevels=new Array();while(arrTocEntries&&arrTocEntries.length>0)
{var i=0;while(true)
{if(i>=arrTocEntries.length||arrTocEntries[i].m_oContentItem.m_nPageNo>=nPageNo)
{if(i>=arrTocEntries.length||arrTocEntries[i].m_oContentItem.m_nPageNo>nPageNo)
--i;if(i<0)
{arrTocEntries=null;break;}
arrLevels.push(arrTocEntries[i]);arrTocEntries=arrTocEntries[i].Controls;break;}
++i;}}
return arrLevels;}
JScript.Type.RegisterClass("Olive.Controls.Toc",Olive.Controls.Toc,Olive.Controls.Tree,[Olive.Controls.IDataBound]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.TOC,Olive.Controls.Toc);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");Olive.Controls.controlTypeNames.Menu="menu";Olive.Controls.controlTypeNames.MenuItem="menuitem";Olive.Controls.controlTypeNames.MenuItemEdit="menuitem-edit";Olive.Controls.controlTypeNames.MenuItemSelection="menuitem-selection";var OwcCssClass_MenuOpened="menuOpened";var OwcCssClass_MenuClosed="menuClosed";var OwcUiElem_MenuDropDownArrow="menuDropdownArrow";if(!Olive.UiElemType.MenuDropdownArrow)
{Olive.UiElemType.MenuDropdownArrow=function OwcMenuDropdownArrowUiElemType()
{};Olive.UiElemType.MenuDropdownArrow.DeclareType=function OwcMenuDropdownArrowUiElemType_DeclareType(rObject)
{this.ReplaceMethod("updateUiElemState",OwcMenuDropdownArrow_updateUiElemState);}
function OwcMenuDropdownArrow_updateUiElemState(oControl,oUiElem,dwNewState,dwPrevState,dwChangedState)
{if(((dwNewState^dwPrevState)&Olive.IState.State.SubMenuOpened)!=0)
{var bActive=((dwNewState&Olive.IState.State.SubMenuOpenedMask)==Olive.IState.State.SubMenuOpened);if(bActive)
{DHTML.replaceCssClassToElem(oUiElem,OwcCssClass_MenuClosed,OwcCssClass_MenuOpened);}
else
{DHTML.replaceCssClassToElem(oUiElem,OwcCssClass_MenuOpened,OwcCssClass_MenuClosed);}}}
JScript.Type.RegisterClass("Olive.UiElemType.MenuDropdownArrow",Olive.UiElemType.MenuDropdownArrow,Olive.UiElemType);}
if(!Olive.Controls.Menu)
{Olive.Controls.Menu=function OwcMenu()
{}
Olive.Controls.MenuType={StaticMenu:"menu",PopupMenu:"popup",ContextMenu:"contextmenu"}
Olive.Controls.OpeningBehaviour={MouseOver:"mouseover",MouseClick:"mouseclick",Toggle:"toggle"}
Olive.Controls.Menu.attributes={MenuType:Olive.Controls.xmlns+"MenuType",OpeningMenuBehaviour:Olive.Controls.xmlns+"opening-behaviour",MenuClosingTimeout:Olive.Controls.xmlns+"timeout",CmdTargetID:Olive.Controls.prefix+":"+"cmd-target-id"}
Olive.Controls.Menu.DeclareType=function OwcMenu_DeclareType()
{this.DeclareField("m_bStaticMenu",true);this.DeclareField("m_sMenuType",Olive.Controls.MenuType.StaticMenu);this.DeclareField("m_oCommandSource",null);this.DeclareField("m_bHidden",true);this.DeclareField("m_oCurrentMenuItem",null);this.DeclareField("m_bVerticalInvert",false);this.DeclareField("m_bHorizontalInvert",false);this.DeclareField("m_closeTimeoutID",null);this.DeclareField("m_nClosingTimeout",1500);this.DeclareField("m_bUseEscalateEsc",false);this.DeclareField("m_nOpeningBehaviour",Olive.Controls.OpeningBehaviour.MouseOver);this.DeclareMethod("getCommandSource",OwcMenu_getCommandSource);this.DeclareMethod("setCommandSource",OwcMenu_setCommandSource);this.DeclareMethod("trackPopupMenu",OwcMenu_trackPopupMenu);this.DeclareMethod("updateMenuState",OwcMenu_updateMenuState);this.ReplaceMethod("updateAllCommands",OwcMenu_updateMenuState);this.DeclareMethod("getParentMenuItem",OwcMenu_getParentMenuItem);this.DeclareMethod("getParentMenu",OwcMenu_getParentMenu);this.DeclareMethod("isSubMenu",OwcMenu_isSubMenu);this.DeclareMethod("isRootMenu",OwcMenu_isRootMenu);this.DeclareMethod("isStaticMenu",OwcMenu_isStaticMenu);this.DeclareMethod("isActive",OwcMenu_isActive);this.DeclareMethod("hasToggleBehaviour",OwcMenu_hasToggleBehaviour);this.DeclareMethod("hasMouseClickBehaviour",OwcMenu_hasMouseClickBehaviour);this.DeclareMethod("hasMouseOverBehaviour",OwcMenu_hasMouseOverBehaviour);this.DeclareMethod("setOpeningBehaviour",OwcMenu_setOpeningBehaviour);this.DeclareMethod("getOpeningBehaviour",OwcMenu_getOpeningBehaviour);this.DeclareMethod("calculateActiveState",OwcMenu_calculateActiveState);this.DeclareMethod("calculateActiveStateCustom",null);this.DeclareMethod("open",OwcMenu_open);this.DeclareMethod("close",OwcMenu_close);this.DeclareMethod("closeByTimeout",OwcMenu_closeByTimeout);this.DeclareMethod("cancelCloseByTimeout",OwcMenu_cancelCloseByTimeout);this.DeclareMethod("onMenuItemClicked",OwcMenu_onMenuItemClicked);this.DeclareMethod("onMenuItemMouseOver",OwcMenu_onMenuItemMouseOver);this.DeclareMethod("setCurrentMenuItem",OwcMenu_setCurrentMenuItem);this.DeclareMethod("clearCurrentMenuItem",OwcMenu_clearCurrentMenuItem);this.DeclareMethod("getRootMenu",OwcMenu_getRootMenu);this.DeclareMethod("positionMenu",OwcMenu_positionMenu);this.DeclareMethod("setTimeout",OwcMenu_setTimeout);this.OverrideMethod("parseControlHtmlAttr",OwcMenu_parseControlHtmlAttr);this.OverrideMethod("initControl",OwcMenu_initControl);this.OverrideMethod("termControl",OwcMenu_termControl);this.ReplaceMethod("deactivateControl",OwcMenu_deactivateControl);this.DeclareMethod("hideMenu",OwcMenu_hideMenu);this.DeclareMethod("updateMenuItemState",OwcMenu_updateMenuItemState);this.DeclareMethod("createMenuItemScanner",OwcMenu_createMenuItemScanner);this.DeclareMethod("filterMenuItems",OwcMenu_filterMenuItems);this.DeclareMethod("keyBoardEventsHandler",OwcMenu_keyBoardEventsHandler);}
Olive.Controls.Menu.ApplyPrototype=function OwcMenu_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("menuInitializing","onMenuInitializing",true);rObject.registerOwcEventsClass2("menuCancelled","onMenuCancelled",true);Olive.CmdTarget.RegisterCommand(rObject,"closemenu","close");}
function OwcMenu_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var sMenuType=getAttr(this.HtmlElement,Olive.Controls.Menu.attributes.MenuType);if(sMenuType)
this.m_sMenuType=sMenuType;var sOppeningBehaviour=DHTML.getAttr(this.HtmlElement,Olive.Controls.Menu.attributes.OpeningMenuBehaviour);this.setOpeningBehaviour(sOppeningBehaviour);var nCustomTimeout=getAttr(this.HtmlElement,Olive.Controls.Menu.attributes.MenuClosingTimeout);if(nCustomTimeout)
this.setTimeout(nCustomTimeout);if(this.m_sMenuType.toLowerCase()==Olive.Controls.MenuType.ContextMenu)
{if(this.Parent&&this.Parent.setContextMenu)
this.Parent.setContextMenu(this);this.m_bStaticMenu=false;}
else
this.m_bStaticMenu=true;}
function OwcMenu_initControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var sCmdTargetId=getAttr(this.HtmlElement,Olive.Controls.Menu.attributes.CmdTargetID);if(sCmdTargetId)
{var oCmdTarget=this.WebPage.findControlById(sCmdTargetId);if(oCmdTarget)
this.setCmdTarget(oCmdTarget);}
this.calculateActiveState();this.updateMenuState();DHTML.attachEvent(this.HtmlElement,"mouseover",OwcMenu_DHTML_onMouseOver);DHTML.attachEvent(this.HtmlElement,"mouseout",OwcMenu_DHTML_onMouseOut);}
function OwcMenu_termControl()
{DHTML.detachEvent(this.HtmlElement,"mouseover",OwcMenu_DHTML_onMouseOver);DHTML.detachEvent(this.HtmlElement,"mouseout",OwcMenu_DHTML_onMouseOut);this.cancelCloseByTimeout();var oPage=this.getOwnerPage();if(oPage.m_oKeyBoardEventsDispatcher)
oPage.m_oKeyBoardEventsDispatcher.unregisterKeyListener(this,this.keyBoardEventsHandler);oPage.unregisterActiveTrackable(this,"Olive.ICmdSource");if(this.BaseClassMethod&&(this.BaseClassMethod!=arguments.callee))
this.BaseClassMethod.call(this);}
function OwcMenu_getCommandSource()
{return this.m_oCommandSource;}
function OwcMenu_setCommandSource(oCommandSource,bDoNotUpdateState)
{if(this.m_oCommandSource==oCommandSource)
return;this.m_oCommandSource=oCommandSource;if(!bDoNotUpdateState)
this.updateMenuState();}
function OwcMenu_trackPopupMenu(rCmdTarget,rSrcControl,rCurControl,oEvent)
{this.setCmdTarget(rCmdTarget,false);this.setCommandSource(rSrcControl,false);this.updateMenuState();this.open(oEvent);}
function OwcMenu_DHTML_onKeyPress_EscalateEscape_IE_EscalateEscape_IE(oEvent)
{if(oEvent.keyCode!=27)
return;stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);var oControl=OwcGetControlFromHtmlElem(this);if(!oControl)
return;oControl.close();}
function OwcMenu_keyBoardEventsHandler(oEvent)
{if(!oEvent)
return;switch(oEvent.type)
{case"keypress":if(oEvent.keyCode!=27)
return;break;default:return;}
this.close();}
function OwcMenu_updateMenuState()
{var oCommandSource=this.getCommandSource();var oScanner=this.createMenuItemScanner(this.updateMenuItemState);oScanner.scan(this,oCommandSource);}
function OwcMenu_getParentMenuItem()
{if(!this.Parent)
return null;if(!Olive.Controls.ICmdItem.IsImplementedBy(this.Parent))
return null;return this.Parent;}
function OwcMenu_getParentMenu()
{var oParentMenuItem=this.getParentMenuItem();if(oParentMenuItem)
return oParentMenuItem.getParentMenu();return null;}
function OwcMenu_isSubMenu()
{return(this.getParentMenuItem()!=null);}
function OwcMenu_setTimeout(nTimeout)
{var bRes=false;if(!isNaN(nTimeout)&&nTimeout>0)
{this.m_nClosingTimeout=nTimeout;bRes=true;}
return bRes;}
function OwcMenu_isRootMenu()
{return!this.isSubMenu();}
function OwcMenu_isStaticMenu()
{return(this.m_sMenuType==Olive.Controls.MenuType.StaticMenu)?true:false;}
function OwcMenu_isActive()
{return this.isStateSet(Olive.IState.State.Active);}
function OwcMenu_hasToggleBehaviour()
{return(this.getOpeningBehaviour()==Olive.Controls.OpeningBehaviour.Toggle)?true:false;}
function OwcMenu_hasMouseClickBehaviour()
{return(this.getOpeningBehaviour()==Olive.Controls.OpeningBehaviour.MouseClick)?true:false;}
function OwcMenu_hasMouseOverBehaviour()
{return(this.getOpeningBehaviour()==Olive.Controls.OpeningBehaviour.MouseOver)?true:false;}
function OwcMenu_setOpeningBehaviour(sOppeningBehaviour)
{if(!this.isRootMenu())
return;switch(sOppeningBehaviour)
{case Olive.Controls.OpeningBehaviour.MouseOver:case Olive.Controls.OpeningBehaviour.MouseClick:this.m_nOpeningBehaviour=sOppeningBehaviour;break;case Olive.Controls.OpeningBehaviour.Toggle:if(this.isStaticMenu())
this.m_nOpeningBehaviour=Olive.Controls.OpeningBehaviour.Toggle;break;default:if(this.isStaticMenu())
this.m_nOpeningBehaviour=Olive.Controls.OpeningBehaviour.Toggle;else
this.m_nOpeningBehaviour=Olive.Controls.OpeningBehaviour.MouseOver;}
this.calculateActiveState();}
function OwcMenu_getOpeningBehaviour()
{if(this.isRootMenu())
return this.m_nOpeningBehaviour;var nOpeningBehaviour=this.getRootMenu().m_nOpeningBehaviour;if(nOpeningBehaviour==Olive.Controls.OpeningBehaviour.Toggle)
return Olive.Controls.OpeningBehaviour.MouseOver;else
return nOpeningBehaviour;}
function OwcMenu_calculateActiveState(sAction)
{switch(sAction)
{case"click":if(this.hasToggleBehaviour()&&this.m_oCurrentMenuItem)
if(this.m_oCurrentMenuItem.hasSubMenu())
this.toggleState(Olive.IState.State.Active);else
this.changeState(false,Olive.IState.State.Active,Olive.IState.State.ActiveMask,true);break;case"close":if(this.hasToggleBehaviour())
this.changeState(false,Olive.IState.State.Active,Olive.IState.State.ActiveMask,true);case"mouseover":break;default:if(this.hasToggleBehaviour())
this.changeState(false,Olive.IState.State.Active,Olive.IState.State.ActiveMask,true);else
this.changeState(true,Olive.IState.State.Active,Olive.IState.State.ActiveMask,true);}
if(this.calculateActiveStateCustom)
this.calculateActiveStateCustom();}
function OwcMenu_open(oEvent)
{if(this.isRootMenu()&&this.m_closeTimeoutID)
{this.cancelCloseByTimeout();if(this.m_oCurrentMenuItem)
this.clearCurrentMenuItem();}
if(this.isRootMenu()||this.getParentMenu().isStaticMenu())
{var oPage=this.getOwnerPage();oPage.m_oKeyBoardEventsDispatcher.pushActiveKeyListener(this,this.keyBoardEventsHandler);oPage.registerActiveTrackable(this,"Olive.ICmdSource");}
this.positionMenu(oEvent);if(this.m_bUseEscalateEsc)
{this.HtmlElement.focus();DHTML.attachEvent(this.HtmlElement,"keypress",OwcMenu_DHTML_onKeyPress_EscalateEscape_IE);}}
function OwcMenu_closeByTimeout()
{if(!this.isRootMenu())
return;if(this.m_closeTimeoutID)
return;this.m_closeTimeoutID=JScript_Timeout.setTimeout(this.close,this.m_nClosingTimeout,this,null);}
function OwcMenu_cancelCloseByTimeout()
{if(!this.isRootMenu())
return;if(!this.m_closeTimeoutID)
return;JScript_Timeout.clearTimeout(this.m_closeTimeoutID);this.m_closeTimeoutID=null;}
function OwcMenu_close()
{if(this.m_oCurrentMenuItem)
this.clearCurrentMenuItem();if(!this.isStaticMenu())
{this.hideMenu();}
if(this.m_bUseEscalateEsc)
{var oParentMenu=this.getParentMenu();if(oParentMenu)
oParentMenu.HtmlElement.focus();DHTML.detachEvent(this.HtmlElement,"keypress",OwcMenu_DHTML_onKeyPress_EscalateEscape_IE);}
if(this.isRootMenu()||this.getParentMenu().isStaticMenu())
{this.getRootMenu().cancelCloseByTimeout();var oPage=this.getOwnerPage();if(oPage)
{if(oPage.m_oKeyBoardEventsDispatcher)
oPage.m_oKeyBoardEventsDispatcher.unregisterKeyListener(this,this.keyBoardEventsHandler);oPage.unregisterActiveTrackable(this,"Olive.ICmdSource");}}
this.calculateActiveState("close");}
function OwcMenu_deactivateControl()
{var oRootMenu=this.getRootMenu();oRootMenu.close();}
function OwcMenu_onMenuItemClicked(oNewMenuItem)
{this.setCurrentMenuItem(oNewMenuItem);this.calculateActiveState("click");return true;}
function OwcMenu_onMenuItemMouseOver(oNewMenuItem)
{this.getRootMenu().cancelCloseByTimeout();if(this.isActive()&&!this.hasMouseClickBehaviour())
this.setCurrentMenuItem(oNewMenuItem);this.calculateActiveState("mouseover");return true;}
function OwcMenu_setCurrentMenuItem(oNewMenuItem)
{if(this.m_oCurrentMenuItem&&this.m_oCurrentMenuItem!=oNewMenuItem)
this.m_oCurrentMenuItem.deactivate();this.m_oCurrentMenuItem=oNewMenuItem;}
function OwcMenu_clearCurrentMenuItem()
{if(this.m_oCurrentMenuItem)
this.m_oCurrentMenuItem.deactivate();this.m_oCurrentMenuItem=null;}
function OwcMenu_getRootMenu()
{if(this.isRootMenu())
return this;return this.getParentMenu().getRootMenu();}
function OwcMenu_hideMenu()
{this.HtmlElement.style.visibility="hidden";this.HtmlElement.style.display="none";this.m_bHidden=true;}
function OwcMenu_positionMenu(oEvent)
{if(this.HtmlElement.style.display=="none"||this.HtmlElement.style.display=="")
this.HtmlElement.style.display="block";var isHebrew=isRTLDoc(getOwnerDoc(this.HtmlElement));var StartX=0;var StartY=0;var MIHeight=0;var MIWidth=0;var MenuHeight=DHTML.getElemHeight(this.HtmlElement);var MenuWidth=DHTML.getElemWidth(this.HtmlElement);var nVector2_Right=0;var nVector2_Bottom=0;var nVector1_Right=1;var nVector1_Bottom=0;var bUseDelta=false;this.m_bVerticalInvert=false;this.m_bHorizontalInvert=false;if(oEvent)
{StartX=getEventClientX(oEvent);StartY=getEventClientY(oEvent);}
else
{var oParentMenuItem=this.getParentMenuItem();if(oParentMenuItem)
{var oParentMenu=oParentMenuItem.getParentMenu();this.m_bHorizontalInvert=oParentMenu.m_bHorizontalInvert;StartX=findPosLeft1(oParentMenuItem.HtmlElement);StartY=findPosTop1(oParentMenuItem.HtmlElement);if(oParentMenu.isRootMenu()&&oParentMenu.isStaticMenu())
{nVector1_Right=0;nVector1_Bottom=1;MIHeight=DHTML.getElemHeight(oParentMenu.HtmlElement);MIWidth=DHTML.getElemWidth(oParentMenuItem.HtmlElement);}
else
{bUseDelta=true;MIHeight=DHTML.getElemHeight(oParentMenuItem.HtmlElement);MIWidth=DHTML.getElemWidth(oParentMenu.HtmlElement);}
if(this.m_bHorizontalInvert)
{nVector1_Right=1-nVector1_Right;nVector2_Right=1-nVector2_Right;}
var zIndex=DHTML.getStyle(oParentMenu.HtmlElement,"zIndex");this.HtmlElement.style.zIndex=zIndex+1;}}
var MenuGlobalLeft=StartX+nVector1_Right*MIWidth-MenuWidth*nVector2_Right;var MenuGlobalRight=MenuGlobalLeft+MenuWidth;var XLeastVisibleWindowPoint=getInnerWidth()+getScrollOffsetX();if(MenuGlobalLeft<0||XLeastVisibleWindowPoint<MenuGlobalRight)
{this.m_bHorizontalInvert=!this.m_bHorizontalInvert;nVector1_Right=1-nVector1_Right;nVector2_Right=1-nVector2_Right;MenuGlobalLeft=StartX+nVector1_Right*MIWidth-MenuWidth*nVector2_Right;}
var MenuGlobalTop=StartY+nVector1_Bottom*MIHeight-MenuHeight*nVector2_Bottom;var MenuGlobalBottom=MenuGlobalTop+MenuHeight;var YLeastVisibleWindowPoint=getInnerHeight()+getScrollOffsetY();if(MenuGlobalBottom>YLeastVisibleWindowPoint)
{this.m_bVerticalInvert=!this.m_bVerticalInvert;nVector1_Bottom=1-nVector1_Bottom;nVector2_Bottom=1-nVector2_Bottom;var nPortion=1;if(bUseDelta&&MIHeight>0)
{var dy=MenuGlobalBottom-YLeastVisibleWindowPoint;var nUnitsCount=Math.ceil((dy+MIHeight-1)/MIHeight);nPortion=nUnitsCount*MIHeight/MenuHeight;}
MenuGlobalTop=StartY+nVector1_Bottom*MIHeight-MenuHeight*nVector2_Bottom*nPortion;}
var MenuX=findPosLeft1(this.HtmlElement);var MenuY=findPosTop1(this.HtmlElement);var offsetY=MenuGlobalTop-MenuY;var offsetX=MenuGlobalLeft-MenuX;var posX=this.HtmlElement.offsetLeft+offsetX;var posY=this.HtmlElement.offsetTop+offsetY;this.HtmlElement.style.left=posX+"px";this.HtmlElement.style.top=posY+"px";this.HtmlElement.style.visibility="visible";this.m_bHidden=false;}
function OwcMenu_updateMenuItemState(ctxScanner,oMenuItemControl,oCmdParams)
{oMenuItemControl.updateCommand(null,oCmdParams);}
function OwcMenu_createMenuItemScanner(oProcessCallback)
{var oScanner=new Olive.Controls.Scanner();if(oProcessCallback)
oScanner.setProcessControlCallback(oProcessCallback);oScanner.addFilter(this.filterMenuItems);return oScanner;}
function OwcMenu_filterMenuItems(ctxScanner,oControl)
{if(Olive.ICmdSource.IsImplementedBy(oControl))
return Olive.Controls.Scanner.FilterMode.Process;return(Olive.Controls.Scanner.FilterMode.Reject+Olive.Controls.Scanner.FilterMode.StopFilter);}
function OwcMenu_DHTML_onMouseOver(oEvent)
{var oMenuControl=OwcGetControlFromHtmlElem(this);var oMenuItem=null;oMenuControl.getRootMenu().cancelCloseByTimeout();}
function OwcMenu_DHTML_onMouseOut(oEvent)
{stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);var oControl=OwcGetControlFromHtmlElem(this);var RootMenu=oControl.getRootMenu();if(!oControl)
return;var oEventSrc=getEventTarget(oEvent);var toElement=getMouseOutEnterObj(oEvent);var isDescendent=DHTML.isDescendent(toElement,RootMenu.HtmlElement);if(isDescendent)
return;oControl.getRootMenu().closeByTimeout();}
JScript.Type.RegisterClass("Olive.Controls.Menu",Olive.Controls.Menu,Olive.Controls.Control,[Olive.ICmdSource,Olive.IState,Olive.IActivityTrackable]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.Menu,Olive.Controls.Menu);}
if(!Olive.Controls.MenuItem)
{Olive.Controls.MenuItem=function OwcMenuItem()
{}
Olive.Controls.MenuItem.DeclareType=function OwcMenuItem_DeclareType()
{this.DeclareField("m_bHotColdBehavior",true);this.DeclareMethod("getParentMenu",OwcMenuItem_getParentMenu);this.DeclareMethod("getRootMenu",OwcMenuItem_getRootMenu);this.DeclareMethod("hasSubMenu",OwcMenuItem_hasSubMenu);this.DeclareMethod("hasCommand",OwcMenuItem_hasCommand);this.DeclareMethod("openSubMenu",OwcMenuItem_openSubMenu);this.DeclareMethod("closeSubMenu",OwcMenuItem_closeSubMenu);this.DeclareMethod("toggleSubMenu",OwcMenuItem_toggleSubMenu);this.DeclareMethod("activate",OwcMenuItem_activate);this.DeclareMethod("deactivate",OwcMenuItem_deactivate);this.DeclareMethod("getPopupMenu",OwcMenuItem_getPopupMenu);this.ReplaceMethod("clickBehavior",OwcMenuItem_clickBehavior);this.OverrideMethod("initControl",OwcMenuItem_initControl);this.OverrideMethod("termControl",OwcMenuItem_termControl);this.OverrideMethod("sendCommand",OwcMenuItem_sendCommand);this.OverrideMethod("updateCommand",OwcMenuItem_updateCommand);}
Olive.Controls.MenuItem.ApplyPrototype=function OwcMenuItem_ApplyPrototype(rObject,bDynamic)
{rObject.registerUiElemType(OwcUiElem_MenuDropDownArrow,new Olive.UiElemType.MenuDropdownArrow());}
function OwcMenuItem_initControl()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);DHTML.attachEvent(this.HtmlElement,"mouseover",OwcMenuItem_DHTML_onMouseOver);}
function OwcMenuItem_termControl()
{DHTML.detachEvent(this.HtmlElement,"mouseover",OwcMenuItem_DHTML_onMouseOver);if(this.BaseClassMethod&&(this.BaseClassMethod!=arguments.callee))
this.BaseClassMethod.call(this);}
function OwcMenuItem_DHTML_onMouseOver(oEvent)
{stopEventBubbling(oEvent);preventEventDefaultAction(oEvent);var oControl=OwcGetControlFromHtmlElem(this);if(!oControl)
return;if(oControl.getParentMenu())
{var bDoDefaultAction=oControl.getParentMenu().onMenuItemMouseOver(oControl);if(bDoDefaultAction)
oControl.activate(oEvent);}}
function OwcMenuItem_getParentMenu()
{for(var oMenu=this.Parent;oMenu;oMenu=oMenu.Parent)
if(Olive.ICmdSource.IsImplementedBy(oMenu))
return oMenu;return null;}
function OwcMenuItem_getRootMenu()
{var oRootMenu=null;var oParentMenu=this.getParentMenu();if(oParentMenu)
oRootMenu=oParentMenu.getRootMenu();return oRootMenu;}
function OwcMenuItem_hasSubMenu()
{return(this.getPopupMenu()!=null);}
function OwcMenuItem_hasCommand()
{return(this.m_sCommand)?true:false;}
function OwcMenuItem_openSubMenu()
{var oPopupMenu=this.getPopupMenu();if(!oPopupMenu)
return;oPopupMenu.updateAllCommands();oPopupMenu.open();this.changeState(true,Olive.IState.State.SubMenuOpened,Olive.IState.State.SubMenuOpenedMask);}
function OwcMenuItem_closeSubMenu()
{var oPopupMenu=this.getPopupMenu();if(!oPopupMenu)
return;oPopupMenu.close();this.changeState(false,Olive.IState.State.SubMenuOpened,Olive.IState.State.SubMenuOpenedMask);}
function OwcMenuItem_toggleSubMenu()
{if(!this.hasSubMenu())
return;if(this.isStateSet(Olive.IState.State.SubMenuOpened,Olive.IState.State.SubMenuOpenedMask))
{this.closeSubMenu();}
else
{this.openSubMenu();}}
function OwcMenuItem_activate(oEvent)
{var sEventType=oEvent.type;switch(sEventType)
{case"mouseover":if(this.getParentMenu().isActive()&&!this.getParentMenu().hasMouseClickBehaviour()&&this.hasSubMenu())
this.openSubMenu();break;case"click":if(this.hasSubMenu())
{if(this.getParentMenu().hasMouseClickBehaviour()||this.getParentMenu().hasToggleBehaviour())
this.toggleSubMenu()}
else
{this.sendCommand()
this.getRootMenu().close();}
break;}}
function OwcMenuItem_deactivate()
{this.changeState(false,Olive.IState.State.Hot,Olive.IState.State.HotMask);if(this.hasSubMenu())
this.closeSubMenu();}
function OwcMenuItem_clickBehavior(oEvent)
{var bDoDefaultAction=this.getParentMenu().onMenuItemClicked(this);if(bDoDefaultAction)
this.activate(oEvent);}
function OwcMenuItem_sendCommand(sCmdName,oCmdParams)
{if(!oCmdParams)
{if(this.m_sCommandParams)
oCmdParams=this.m_sCommandParams;else
{var oMenu=this.getParentMenu();if(oMenu)
oCmdParams=oMenu.getCommandSource();}}
if(this.BaseClassMethod)
this.BaseClassMethod.call(this,sCmdName,oCmdParams);}
function OwcMenuItem_updateCommand(sCmdName,oCmdParams)
{this.changeState(false,Olive.IState.State.Hot,Olive.IState.State.HotMask);if(this.hasCommand())
{this.BaseClassMethod.call(this,sCmdName,oCmdParams);}}
function OwcMenuItem_getPopupMenu()
{return this.findControlByType(Olive.Controls.controlTypeNames.Menu);}
JScript.Type.RegisterClass("Olive.Controls.MenuItem",Olive.Controls.MenuItem,Olive.Controls.Control,[Olive.IState,Olive.Controls.ICmdItem,Olive.IUiElements]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.MenuItem,Olive.Controls.MenuItem);}
if(!Olive.Controls.MenuItemEdit)
{Olive.Controls.MenuItemEdit=function OwcMenuItemEdit()
{}
Olive.Controls.MenuItemEdit.attributes={EraseOnClick:Olive.Controls.xmlns+"erase-on-click"}
Olive.Controls.MenuItemEdit.DeclareType=function MenuItemEdit_DeclareType()
{this.DeclareField("m_bHotColdBehavior",false);this.DeclareField("m_bClickBehavior",true);this.DeclareField("m_bEraseOnClick",true);this.ReplaceMethod("onValueChanged",MenuItemEdit_onValueChanged);this.ReplaceMethod("clickBehavior",MenuItemEdit_clickBehavior);this.OverrideMethod("sendCommand",MenuItemEdit_sendCommand);}
function MenuItemEdit_clickBehavior(oEvent)
{var bDoDefaultAction=this.getParentMenu().onMenuItemClicked(this);if(this.m_bEraseOnClick)
this.setHtmlValue("");}
function MenuItemEdit_onValueChanged(oEvent)
{oEvent.cancelBubble=true;if(!(this.m_bEraseOnClick&&!oEvent.newValue))
this.sendCommand(null,oEvent.newValue);}
function MenuItemEdit_parseControlHtmlAttr()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);this.m_bEraseOnClick=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.MenuItemEdit.attributes.EraseOnClick,this.m_bEraseOnClick);}
function MenuItemEdit_sendCommand(sCmdName,oCmdParams)
{if(!oCmdParams)
oCmdParams=this.getHtmlValue();if(this.BaseClassMethod)
this.BaseClassMethod.call(this,sCmdName,oCmdParams);}
JScript.Type.RegisterClass("Olive.Controls.MenuItemEdit",Olive.Controls.MenuItemEdit,Olive.Controls.MenuItem,[Olive.Controls.IValue]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.MenuItemEdit,Olive.Controls.MenuItemEdit);}
if(!Olive.Controls.MenuItemSelection)
{Olive.Controls.MenuItemSelection=function OwcMenuItemSelection()
{}
Olive.Controls.MenuItemSelection.DeclareType=function MenuItemSelection_DeclareType()
{this.DeclareField("m_bHotColdBehavior",false);this.DeclareField("m_bClickBehavior",true);this.OverrideMethod("clickBehavior",MenuItemSelection_clickBehavior);}
function MenuItemSelection_clickBehavior(oEvent)
{if(this.getParentMenu())
var bDoDefaultAction=this.getParentMenu().onMenuItemClicked(this);}
JScript.Type.RegisterClass("Olive.Controls.MenuItemSelection",Olive.Controls.MenuItemSelection,Olive.Controls.MenuItem,[Olive.Controls.IValue,Olive.Controls.ICmdSelectionItem]);Olive.Controls.RegisterControlType(Olive.Controls.controlTypeNames.MenuItemSelection,Olive.Controls.MenuItemSelection);}
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined"||!Olive.Controls)
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcControl.js to your file");if(!Olive.Controls.IDocViewer)
{Olive.Controls.IDocViewer=new Interface("Olive.Controls.IDocViewer");Olive.Controls.IDocViewer.Implement=function OwcIDocViewer_Implement(rObject,bDynamic)
{if(!Olive.Controls.IDocViewer.Register(rObject,bDynamic))
return;};}
if(!Olive.Controls.Viewer)
{Olive.Controls.Viewer=function OwcViewer()
{};Olive.Controls.Viewer.attributes={ViewHitsForWholeDocument:Olive.Controls.xmlns+"hits-for-whole-document"};Olive.Controls.Viewer.Mode={DoublePageView:0x00010000,HighlightEntities:0x00020000,FlipWithCorners:0x00040000,FlipAnimationEffect:0x00080000,HighlightEntitiesOnMouseOver:0x00100000,ViewHitsForDocument:0x00200000,HighlightTitles:0x00400000};Olive.Controls.Viewer.FitMode={Window:"window",Height:"height",Width:"width"};Olive.Controls.Viewer.GatefoldMode={closed:0x00000000};Olive.Controls.Viewer.DeclareType=function OwcViewer_DeclareType()
{this.DeclareMethod("displayDocumentByPageNumber",OwcViewer_displayDocumentByPageNumber);this.DeclareMethod("displayDocumentByPageNumberLabel",OwcViewer_displayDocumentByPageNumberLabel);this.DeclareMethod("displayDocumentByPageNumberFromSearch",OwcViewer_displayDocumentByPageNumberFromSearch);this.DeclareMethod("displayDocumentByPageNumberLabelFromSearch",OwcViewer_displayDocumentByPageNumberLabelFromSearch);this.DeclareMethod("viewerGotoPageByNumber",OwcViewer_viewerGotoPageByNumber);this.DeclareMethod("viewerGotoPageByLabel",OwcViewer_viewerGotoPageByLabel);this.DeclareMethod("viewerReloadCurPageByNumber",OwcViewer_viewerReloadCurPageByNumber);this.DeclareMethod("viewerReloadCurPageByLabel",OwcViewer_viewerReloadCurPageByLabel);this.DeclareMethod("viewerGotoEntity",OwcViewer_viewerGotoEntity);this.DeclareMethod("viewerGotoPrevHit",OwcViewer_viewerGotoPrevHit);this.DeclareMethod("viewerGotoNextHit",OwcViewer_viewerGotoNextHit);this.DeclareMethod("viewerGotoPrevHitPage",null);this.DeclareMethod("viewerGotoNextHitPage",null);this.DeclareMethod("viewerGotoLastHitPage",null);this.DeclareMethod("viewerGotoFirstHitPage",null);this.DeclareMethod("clearSearchHits",null);this.DeclareMethod("loadSearchHits",null);this.DeclareMethod("loadSearchHitsForDocument",null);this.DeclareMethod("loadSearchHitsForEntity",null);this.DeclareMethod("cmdSetZoomFactor",OwcViewer_cmdSetZoomFactor);this.DeclareMethod("zoomIn",OwcViewer_zoomIn);this.DeclareMethod("zoomOut",OwcViewer_zoomOut);this.DeclareMethod("zoomFitWidth",OwcViewer_zoomFitWidth);this.DeclareMethod("zoomFitHeight",OwcViewer_zoomFitHeight);this.DeclareMethod("zoomFitWindow",OwcViewer_zoomFitWindow);this.DeclareMethod("gotoNextPage",OwcViewer_nextPage);this.DeclareMethod("gotoPrevPage",OwcViewer_prevPage);this.DeclareMethod("gotoFirstPage",OwcViewer_gotoFirstPage);this.DeclareMethod("gotoLastPage",OwcViewer_gotoLastPage);this.DeclareMethod("gotoPage",OwcViewer_gotoPage);this.DeclareMethod("gotoPageByLabel",OwcViewer_gotoPageByLabel);this.DeclareMethod("gotoPageByLabelAndPageNo",OwcViewer_gotoPageByLabelAndPageNo);this.DeclareMethod("gotoPageWithHighlighting",null);this.DeclareMethod("navigateToHit",null);this.DeclareMethod("navigateToBox",null);this.DeclareMethod("navigateToPrimitive",null);this.DeclareMethod("_onFlipAreaOrPageButtonClickedDefault",null);this.DeclareMethod("getRotation",OwcViewer_getRotation);this.DeclareMethod("rotateLeft",OwcViewer_rotateLeft);this.DeclareMethod("rotateRight",OwcViewer_rotateRight);this.DeclareMethod("cmdSetRotation",OwcViewer_cmdSetRotation);this.DeclareMethod("getModeDoublePage",OwcViewer_getModeDoublePage);this.DeclareMethod("cmdChangeModeDoublePage",OwcViewer_cmdChangeModeDoublePage);this.DeclareMethod("setModeDoublePage",OwcViewer_setModeDoublePage);this.DeclareMethod("getModeHighlightEntities",OwcViewer_getModeHighlightEntities);this.DeclareMethod("setModeHighlightEntities",OwcViewer_setModeHighlightEntities);this.DeclareMethod("cmdChangeModeHighlightEntities",OwcViewer_cmdChangeModeHighlightEntities);this.DeclareMethod("getModeHighlightEntitiesOnMouseOver",OwcViewer_getModeHighlightEntitiesOnMouseOver);this.DeclareMethod("setModeHighlightEntitiesOnMouseOver",OwcViewer_setModeHighlightEntitiesOnMouseOver);this.DeclareMethod("cmdChangeModeHighlightEntitiesOnMouseOver",OwcViewer_cmdChangeModeHighlightEntitiesOnMouseOver);this.DeclareMethod("getModeFlipWithCorners",OwcViewer_getModeFlipWithCorners);this.DeclareMethod("setModeFlipWithCorners",OwcViewer_setModeFlipWithCorners);this.DeclareMethod("cmdChangeModeFlipWithCorners",OwcViewer_cmdChangeModeFlipWithCorners);this.DeclareMethod("getModeFlipAnimationEffect",OwcViewer_getModeFlipAnimationEffect);this.DeclareMethod("setModeFlipAnimationEffect",OwcViewer_setModeFlipAnimationEffect);this.DeclareMethod("cmdChangeModeFlipAnimationEffect",OwcViewer_cmdChangeModeFlipAnimationEffect);this.DeclareMethod("getModeHighlightTitles",OwcViewer_getModeHighlightTitles);this.DeclareMethod("setModeHighlightTitles",OwcViewer_setModeHighlightTitles);this.DeclareMethod("cmdChangeModeHighlightTitles",OwcViewer_cmdChangeModeHighlightTitles);this.DeclareMethod("getModeViewHitsForDocument",OwcViewer_getModeViewHitsForDocument);this.DeclareMethod("setModeViewHitsForDocument",OwcViewer_setModeViewHitsForDocument);this.DeclareMethod("cmdChangeModeViewHitsForDocument",OwcViewer_cmdChangeModeViewHitsForDocument);this.DeclareMethod("getPageNo",OwcViewer_getPageNo);this.DeclareMethod("getTotalPagesCount",OwcViewer_getTotalPagesCount);this.DeclareMethod("getLastVisiblePageNo",OwcViewer_getLastVisiblePageNo);this.DeclareMethod("getNumPagesDisplayed",OwcViewer_getNumPagesDisplayed);this.DeclareMethod("getZoomFactor",OwcViewer_getZoomFactor);this.DeclareMethod("getDocumentLoaded",OwcViewer_getDocumentLoaded);this.DeclareMethod("getCurrentDocHRef",OwcViewer_getCurrentDocHRef);this.DeclareMethod("getZoomFitMode",OwcViewer_getZoomFitMode);this.DeclareMethod("getFirstHitPage",OwcViewer_getFirstHitPage);this.DeclareMethod("getLastHitPage",OwcViewer_getLastHitPage);this.DeclareMethod("getPageLabels",OwcViewer_getPageLabels);this.DeclareMethod("getPageNoForPageLabel",OwcViewer_getPageNoForPageLabel);this.DeclareMethod("getPageLabelForPageNo",OwcViewer_getPageLabelForPageNo);this.DeclareMethod("hasOnePagePDF",OwcViewer_hasOnePagePDF);this.DeclareMethod("hasDocumentPDF",OwcViewer_hasDocumentPDF);this.DeclareMethod("calculateDestinationPage",OwcViewer_calculateDestinationPage);this.DeclareMethod("getPendingActions",OwcViewer_getPendingActions);this.DeclareMethod("addPendingAction",OwcViewer_addPendingAction);this.DeclareMethod("clearPendingActions",OwcViewer_clearPendingActions);this.DeclareMethod("isPageInRange",OwcViewer_isPageInRange);this.DeclareMethod("unload",OwcViewer_unload);this.DeclareMethod("viewerDisplayDocumentByPageNumber",OwcViewer_viewerDisplayDocumentByPageNumber);this.DeclareMethod("viewerDisplayDocumentByPageNumberLabel",OwcViewer_viewerDisplayDocumentByPageNumberLabel);this.DeclareMethod("defineHits",OwcViewer_defineHits);this.DeclareMethod("viewerTestBHrefPageNo",OwcViewer_viewerTestBHrefPageNo);this.DeclareMethod("internalSetZoomFactor",OwcViewer_internalSetZoomFactor);this.DeclareMethod("gotoPageInternal",OwcViewer_gotoPageInternal);this.DeclareMethod("setViewerStateInternal",OwcViewer_setViewerStateInternal);this.DeclareMethod("onCheckBrowserStatus",OwcViewer_onCheckBrowserStatus);this.DeclareMethod("onGetPendingActions",OwcViewer_onGetPendingActions);this.DeclareMethod("onDocumentLoaded",OwcViewer_onDocumentLoaded);this.DeclareMethod("onPageTurned",OwcViewer_onPageTurned);this.DeclareMethod("onPageModeChanged",OwcViewer_onPageModeChanged);this.DeclareMethod("_onPageChanged",OwcViewer_onPageChanged);this.DeclareMethod("onFlipLinksOnPage",OwcViewer_onFlipLinksOnPage);this.DeclareMethod("onPageVisibilityChanged",OwcViewer_onPageVisibilityChanged);this.DeclareMethod("setPageNo",OwcViewer_setPageNo);this.DeclareMethod("setTotalPagesCount",OwcViewer_setTotalPagesCount);this.DeclareMethod("setNumPagesDisplayed",OwcViewer_setNumPagesDisplayed);this.DeclareMethod("setZoomFactor",OwcViewer_setZoomFactor);this.DeclareMethod("setZoomFitMode",OwcViewer_setZoomFitMode);this.DeclareMethod("setDocumentLoaded",OwcViewer_setDocumentLoaded);this.DeclareMethod("clearFirstHitPage",OwcViewer_clearFirstHitPage);this.DeclareMethod("clearLastHitPage",OwcViewer_clearLastHitPage);this.DeclareMethod("setFirstHitPage",OwcViewer_setFirstHitPage);this.DeclareMethod("setLastHitPage",OwcViewer_setLastHitPage);this.DeclareMethod("setHitsDataLoaded",OwcViewer_setHitsDataLoaded);this.DeclareMethod("setRotation",OwcViewer_setRotation);this.DeclareMethod("setRotationInternal",OwcViewer_setRotationInternal);this.OverrideMethod("parseControlHtmlAttr",OwcViewer_parseControlHtml);this.DeclareField("m_nCurrentPageNo",1);this.DeclareField("m_nNumPagesDisplayed",2);this.DeclareField("m_nZoomFactor",1.0);this.DeclareField("m_sZoomFitMode",Olive.Controls.Viewer.FitMode.Window);this.DeclareField("m_sRotation",0);this.DeclareField("m_nFirstHitPage",Number.MAX_VALUE);this.DeclareField("m_nLastHitPage",Number.MIN_VALUE);this.DeclareField("m_nRotation",0);this.DeclareField("m_oMapPageLabels",null);this.DeclareField("m_arrPendingActions",[]);this.DeclareField("m_bLoadingEnded",false);this.DeclareField("m_bHitsLoaded",false);this.DeclareField("m_bDocumentLoaded",false);this.DeclareField("m_sCurrentDocHRef","");this.DeclareField("m_bUseMaxPageLabel",false);this.DeclareField("searchStr",null);this.DeclareField("collName",null);this.DeclareField("entityID",null);this.DeclareField("firstPage",1);this.DeclareField("lastPage",null);this.DeclareField("baseLegalPage",null);this.DeclareField("firstLegalPage",null);this.DeclareField("lastLegalPage",null);this.DeclareField("bRetrieveHits",false);this.DeclareField("language",null);this.DeclareField("langDirection","ltr");this.DeclareField("pageRes",null);this.DeclareField("imagesRes",null);this.DeclareField("firstPageWidth",0);this.DeclareField("secondPageWidth",0);this.DeclareField("totalPageWidth",0);this.DeclareField("pageHeight",0);this.DeclareField("m_bHasOnePagePDF",false);this.DeclareField("m_bHasDocumentPDF",false);var requestParams={bScrollToHit:true,bScrollToHighlightRect:false,bScrollToPos:false,scrollPos:{}};this.DeclareField("loadReqParams",requestParams);this.DeclareMethod("queryCmdUiState_gotoPage",OwcViewer_queryCmdUiState_gotoPage);this.DeclareMethod("queryCmdUiState_zoom",OwcViewer_queryCmdUiState_zoom);this.DeclareMethod("queryCmdUiState_mode",OwcViewer_queryCmdUiState_mode);this.DeclareMethod("queryCmdUiState_HitsNavigation",OwcViewer_queryCmdUiState_HitsNavigation);this.DeclareMethod("queryCmdUiState_Rotation",OwcViewer_queryCmdUiState_Rotation);};Olive.Controls.Viewer.ApplyPrototype=function OwcViewer_ApplyPrototype(rObject,bDynamic)
{rObject.registerOwcEventsClass2("BookInitialized","onBookInitialized",true);rObject.registerOwcEventsClass2("documentLoaded","onDocumentLoaded",true);rObject.registerOwcEventsClass2("pageTurned","onPageTurned",true);rObject.registerOwcEventsClass2("pageViewed","onPageViewed",true);rObject.registerOwcEventsClass2("pageVisibilityChanged","onPageVisibilityChanged",true);rObject.registerOwcEventsClass2("flipAreaOrPageButtonClicked","onFlipAreaOrPageButtonClicked",true,"_onFlipAreaOrPageButtonClickedDefault",null,Delegate.Type.Method);rObject.registerOwcEventsClass2("gatefoldStatusChanged","onGatefoldStatusChanged",true);rObject.registerOwcEventsClass2("SearchHitsCleared","onSearchHitsCleared");rObject.registerOwcEventsClass2("RotationChanged","onRotationChanged");rObject.registerOwcEventsClass2("pageModeChanged","onPageModeChanged",true);rObject.registerOwcEventsClass2("FlipEfectChanged","onFlipEfectChanged");rObject.registerOwcEventsClass2("HighlightTitlesChanged","onHighlightTitlesChanged");rObject.registerOwcEventsClass2("zoomChanged","onZoomChanged",true);rObject.registerOwcEventsClass2("entityDoubleClicked","onEntityDoubleClicked",true);rObject.registerOwcEventsClass2("entityClicked","onEntityClicked",true);rObject.registerOwcEventsClass2("pageClicked","onPageClicked",true);rObject.registerOwcEventsClass2("fitZoomChanged","onFitZoomChanged",true);rObject.registerOwcEventsClass2("SearchHitsLoaded","onSearchHitsLoaded",true);rObject.registerOwcEventsClass2("HighlightEntitiesOnMouseOverChanged","onHighlightEntitiesOnMouseOverChanged",true);rObject.registerOwcEventsClass2("ViewHitsForDocumentChanged","onViewHitsForDocumentChanged",true);rObject.registerOwcEventsClass2("embeddedLinkClicked","onEmbeddedLinkClicked",true);rObject.registerOwcEventsClass2("richMediaPlayed","onRichMediaPlayed",true);rObject.registerOwcEventsClass2("fullScreenChanged","onFullScreenChanged",true);rObject.registerOwcEventsClass2("checkBrowserStatus","onCheckBrowserStatus",true);rObject.registerOwcEventsClass2("getPendingActions","onGetPendingActions",true);rObject.registerOwcEventsClass2("flipLinksOnPage","onFlipLinksOnPage",true);rObject.registerOwcEventsClass2("tickerMouseOver","onTickerMouseOver",true);rObject.registerOwcEventsClass2("tickerMouseOut","onTickerMouseOut",true);Olive.CmdTarget.RegisterCommand(rObject,"gotonextpage","gotoNextPage","queryCmdUiState_gotoPage");Olive.CmdTarget.RegisterCommand(rObject,"gotoprevpage","gotoPrevPage","queryCmdUiState_gotoPage");Olive.CmdTarget.RegisterCommand(rObject,"gotofirstpage","gotoFirstPage","queryCmdUiState_gotoPage");Olive.CmdTarget.RegisterCommand(rObject,"gotolastpage","gotoLastPage","queryCmdUiState_gotoPage");Olive.CmdTarget.RegisterCommand(rObject,"gotopage","gotoPage","queryCmdUiState_gotoPage");Olive.CmdTarget.RegisterCommand(rObject,"gotopagebylabel","gotoPageByLabel","queryCmdUiState_gotoPage");Olive.CmdTarget.RegisterCommand(rObject,"gotopagebylabelandpageno","gotoPageByLabelAndPageNo","queryCmdUiState_gotoPage");Olive.CmdTarget.RegisterCommand(rObject,"setZoom","cmdSetZoomFactor","queryCmdUiState_zoom");Olive.CmdTarget.RegisterCommand(rObject,"zoomIn","zoomIn","queryCmdUiState_zoom");Olive.CmdTarget.RegisterCommand(rObject,"zoomOut","zoomOut","queryCmdUiState_zoom");Olive.CmdTarget.RegisterCommand(rObject,"zoomFitWidth","zoomFitWidth","queryCmdUiState_zoom");Olive.CmdTarget.RegisterCommand(rObject,"zoomFitHeight","zoomFitHeight","queryCmdUiState_zoom");Olive.CmdTarget.RegisterCommand(rObject,"zoomFitWindow","zoomFitWindow","queryCmdUiState_zoom");Olive.CmdTarget.RegisterCommand(rObject,"DoublePageMode","cmdChangeModeDoublePage","queryCmdUiState_mode");Olive.CmdTarget.RegisterCommand(rObject,"HighlightEntities","cmdChangeModeHighlightEntities","queryCmdUiState_mode");Olive.CmdTarget.RegisterCommand(rObject,"HighlightEntitiesOnMouseOverMode","cmdChangeModeHighlightEntitiesOnMouseOver","queryCmdUiState_mode");Olive.CmdTarget.RegisterCommand(rObject,"FlipWithCornersMode","cmdChangeModeFlipWithCorners","queryCmdUiState_mode");Olive.CmdTarget.RegisterCommand(rObject,"FlipAnimationEffectMode","cmdChangeModeFlipAnimationEffect","queryCmdUiState_mode");Olive.CmdTarget.RegisterCommand(rObject,"HighlightTitlesMode","cmdChangeModeHighlightTitles","queryCmdUiState_mode");Olive.CmdTarget.RegisterCommand(rObject,"ViewHitsForDocumentMode","cmdChangeModeViewHitsForDocument","queryCmdUiState_mode");Olive.CmdTarget.RegisterCommand(rObject,"ClearSearchHits","clearSearchHits","queryCmdUiState_HitsNavigation");Olive.CmdTarget.RegisterCommand(rObject,"GoToNextHitPage","viewerGotoNextHitPage","queryCmdUiState_HitsNavigation");Olive.CmdTarget.RegisterCommand(rObject,"GoToPrevHitPage","viewerGotoPrevHitPage","queryCmdUiState_HitsNavigation");Olive.CmdTarget.RegisterCommand(rObject,"GoToFirstHitPage","viewerGotoFirstHitPage","queryCmdUiState_HitsNavigation");Olive.CmdTarget.RegisterCommand(rObject,"GoToLastHitPage","viewerGotoLastHitPage","queryCmdUiState_HitsNavigation");Olive.CmdTarget.RegisterCommand(rObject,"RotateLeft","rotateLeft","queryCmdUiState_Rotation");Olive.CmdTarget.RegisterCommand(rObject,"RotateRight","rotateRight","queryCmdUiState_Rotation");Olive.CmdTarget.RegisterCommand(rObject,"setRotation","cmdSetRotation","queryCmdUiState_Rotation");};function OwcViewer_parseControlHtml()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);var bLoadHitsForDocument=DHTML.getAttrBoolean(this.HtmlElement,Olive.Controls.Viewer.attributes.ViewHitsForWholeDocument,false);this.setModeViewHitsForDocument(bLoadHitsForDocument);}
function OwcViewer_onPageChanged(oEvent)
{var oContentItem=this.getContentItem();if(!oContentItem)
return;if(oEvent.nPageNo)
{oContentItem.m_nPageNo=oEvent.nPageNo;oContentItem.m_sPageLabel=((oEvent.sPageLabel)?oEvent.sPageLabel:this.getPageLabelForPageNo(oEvent.nPageNo));}
if(oEvent.sSectionName)
oContentItem.m_sSection=oEvent.sSectionName;if(oEvent.nNumPagesDisplayed)
oContentItem.m_nNumPagesDisplayed=oEvent.nNumPagesDisplayed;if(oContentItem.m_nNumPagesDisplayed==1)
{oContentItem.m_nSecondPageNo=null;oContentItem.m_sSecondPageLabel=null;}
else
{oContentItem.m_nSecondPageNo=this.getLastVisiblePageNo();oContentItem.m_sSecondPageLabel=this.getPageLabelForPageNo(oContentItem.m_nSecondPageNo);}}
function OwcViewer_onCheckBrowserStatus(oEvent)
{oEvent.sFlashEventReturnValue="{\"bOfflineMode\":"+(!window.navigator.onLine)+"}";}
function OwcViewer_getPendingActions()
{return this.m_arrPendingActions;}
function OwcViewer_addPendingAction(oPendingAction)
{this.m_arrPendingActions.push(oPendingAction);}
function OwcViewer_clearPendingActions()
{this.m_arrPendingActions=[];}
function OwcViewer_onGetPendingActions(oEvent)
{var sReturnValue="[";var arrActions=this.getPendingActions();for(iAction=0;iAction<arrActions.length;++iAction)
{var oAction=arrActions[iAction]
if(oAction&&oAction.sFunction)
{var oParams=oAction.oParams;if(oParams&&oParams.sDocHRef==this.getCurrentDocHRef())
{sReturnValue+="{\"sFunction\":\""+oAction.sFunction+"\", \"oParams\":{";for(var sProp in oParams)
{sReturnValue+=("\""+sProp+"\":\""+oParams[sProp]+"\",");}
if(sReturnValue.substr(sReturnValue.length-1)==",")
sReturnValue=sReturnValue.substr(0,sReturnValue.length-1);sReturnValue+="}}";}}
sReturnValue+=",";}
if(sReturnValue.substr(sReturnValue.length-1)==",")
sReturnValue=sReturnValue.substr(0,sReturnValue.length-1);sReturnValue+="]";this.clearPendingActions();oEvent.sFlashEventReturnValue=sReturnValue;}
function OwcViewer_onFlipLinksOnPage(oEvent)
{var arrFlipLinks=oEvent.arrFlipLinks;var oPage=this.get_WebPage();for(var sIndex in arrFlipLinks)
{var oLinkData=arrFlipLinks[sIndex];window.open(oLinkData.sTarget,oLinkData.sWndName,oLinkData.sWndFeatures);}}
function OwcViewer_onDocumentLoaded(oEvent)
{var oContentItem=this.getContentItem();this.m_bUseMaxPageLabel=(!!this.WebApplication)?this.WebApplication.getPreferenceBoolean("use-max-page-label",false):false;if(!oContentItem)
return;this._onPageChanged(oEvent);if(oEvent.sDocumentTitle)
oContentItem.m_sDocName=oEvent.sDocumentTitle;if(oEvent.sPublicationDescription)
oContentItem.m_sPublicationDescription=oEvent.sPublicationDescription;}
function OwcViewer_onPageModeChanged(oEvent)
{this._onPageChanged(oEvent);}
function OwcViewer_onPageTurned(oEvent)
{this._onPageChanged(oEvent);}
function OwcViewer_setDocumentLoaded(bLoaded,bDoNotNotify,sCurrentDocHRef)
{this.m_bDocumentLoaded=bLoaded;this.m_sCurrentDocHRef=sCurrentDocHRef;if(!bDoNotNotify)
this.notifyCmdStateChanged();}
function OwcViewer_getDocumentLoaded()
{return this.m_bDocumentLoaded;}
function OwcViewer_getCurrentDocHRef()
{return this.m_sCurrentDocHRef;}
function OwcViewer_displayDocumentByPageNumber(baseHref,pageNo){var result=this.viewerDisplayDocumentByPageNumber(baseHref,pageNo);if(result)
this.contentLoad();return result;}
function OwcViewer_displayDocumentByPageNumberLabel(baseHref,pageNo,pageLabel){var result=this.viewerDisplayDocumentByPageNumberLabel(baseHref,pageNo,pageLabel);if(result)
this.contentLoad();return result;}
function OwcViewer_displayDocumentByPageNumberFromSearch(baseHref,pageNo,collName,searchStr,entityID){var result=this.viewerDisplayDocumentByPageNumber(baseHref,pageNo);if(result){this.bRetrieveHits=this.defineHits(baseHref,collName,searchStr,entityID);this.collName=collName;this.searchStr=searchStr;this.entityID=entityID;this.contentLoad();}
return result;}
function OwcViewer_displayDocumentByPageNumberLabelFromSearch(baseHref,pageNo,pageLabel,collName,searchStr,entityID){var result=this.viewerDisplayDocumentByPageNumberLabel(baseHref,pageNo,pageLabel);if(result){this.bRetrieveHits=this.defineHits(baseHref,collName,searchStr,entityID);this.collName=collName;this.searchStr=searchStr;this.entityID=entityID;this.contentLoad();}
return result;}
function OwcViewer_viewerGotoPageByNumber(pageNo){this.loadReqParams.bScrollToPos=true;this.loadReqParams.scrollPos.x=getScrollOffsetX();this.loadReqParams.scrollPos.y=getScrollOffsetY();this.cleanHighlightedEntities(false);if(this.m_oContentItem){if(typeof pageNo=="string"){pageNo=parseInt(pageNo,10);}
this.m_oContentItem.m_nPageNo=pageNo;this.m_oContentItem.m_sPageLabel=null;}
return this.contentLoad();}
function OwcViewer_viewerGotoPageByLabel(pageLabel){this.loadReqParams.bScrollToPos=true;this.loadReqParams.scrollPos.x=getScrollOffsetX();this.loadReqParams.scrollPos.y=getScrollOffsetY();this.cleanHighlightedEntities(false);if(this.m_oContentItem){this.m_oContentItem.m_nPageNo=-1;this.m_oContentItem.m_sPageLabel=pageLabel;}
return this.contentLoad();}
function OwcViewer_viewerReloadCurPageByNumber(pageNo){return this.viewerGotoPageByNumber(pageNo);}
function OwcViewer_viewerReloadCurPageByLabel(pageLabel){return this.viewerGotoPageByLabel(pageLabel);}
function OwcViewer_viewerGotoEntity(sEntityId){if(this.m_oContentItem&&(this.m_oContentItem.DataObjectType==OwcContentItem_Entity)){this.m_oContentItem.m_sEntityId=sEntityId;}
return this.contentLoad();}
function OwcViewer_viewerGotoPrevHit(){if(this.prevHit)
return this.prevHit();}
function OwcViewer_viewerGotoNextHit(){if(this.nextHit)
return this.nextHit();}
function OwcViewer_unload(){}
function OwcViewer_viewerTestBHrefPageNo(baseHref,pageNo){if(!baseHref||!pageNo)
return false;var oContentItem=this.getContentItem();if(!oContentItem)
this.m_oContentItem=new Olive.ContentItem.Page();this.m_oContentItem.m_sDocHRef=baseHref;if(typeof pageNo=="string"){pageNo=parseInt(pageNo,10);}
if(isNaN(pageNo)){return false;}
if(((this.firstPage!=null)&&(pageNo<this.firstPage))||((this.lastPage!=null)&&(pageNo>this.lastPage)))
return false;if((this.firstLegalPage!=null)&&(this.lastLegalPage!=null)&&((pageNo<this.firstLegalPage)||(pageNo>this.lastLegalPage)))
return false;return true;}
function OwcViewer_viewerDisplayDocumentByPageNumber(baseHref,pageNo){if(typeof pageNo=="string"){pageNo=parseInt(pageNo,10);}
var result=this.viewerTestBHrefPageNo(baseHref,pageNo);if(result){this.m_oContentItem.m_nPageNo=pageNo;this.m_oContentItem.m_sPageLabel=null;this.setPageNo(pageNo);}
return result;}
function OwcViewer_viewerDisplayDocumentByPageNumberLabel(baseHref,pageNo,pageLabel){if(typeof pageNo=="string"){pageNo=parseInt(pageNo,10);}
var result=(pageLabel?this.viewerTestBHrefPageNo(baseHref,pageNo):false);if(result){this.m_oContentItem.m_nPageNo=pageNo;this.m_oContentItem.m_sPageLabel=pageLabel;var nPageNo=parseInt(pageNo,10);this.setPageNo(nPageNo);}
return result;}
function OwcViewer_defineHits(baseHref,collName,searchStr,entityID){var bRetrieveHits=(this.bDisplayHits&&((this.searchStr!=searchStr)||(this.m_oContentItem.m_sDocHRef!=baseHref)||(this.collName!=collName)||(this.entityID!=entityID)));if((searchStr!=null)&&bRetrieveHits){this.selHitIndex=0;this.selHitPageNo=this.getPageNo();}else if(searchStr==null){this.hits=new Array();this.hitQuads=new Object();}
return bRetrieveHits;}
function OwcViewer_getZoomFactor()
{return this.m_nZoomFactor;}
function OwcViewer_setZoomFactor(nZoomFactor,bDoNotNotify)
{if(this.m_nZoomFactor==nZoomFactor)
return;this.m_nZoomFactor=nZoomFactor;if(!bDoNotNotify)
this.notifyCmdStateChanged();}
function OwcViewer_cmdSetZoomFactor(nZoomFactor)
{if(typeof(nZoomFactor)!="number")
{if(typeof(nZoomFactor)=="string")
{nZoomFactor=parseInt(nZoomFactor,10);nZoomFactor/=100.0;}
else
return;}
this.internalSetZoomFactor(nZoomFactor);}
function OwcViewer_internalSetZoomFactor(nZoomFactor)
{this.setZoomFactor(nZoomFactor);}
function OwcViewer_zoomIn()
{this.internalSetZoomFactor(this.getZoomFactor()*1.25);}
function OwcViewer_zoomOut()
{this.internalSetZoomFactor(this.getZoomFactor()/1.25);}
function OwcViewer_zoomFitWidth()
{this.setZoomFitMode(Olive.Controls.Viewer.FitMode.Width);}
function OwcViewer_zoomFitHeight()
{this.setZoomFitMode(Olive.Controls.Viewer.FitMode.Height);}
function OwcViewer_zoomFitWindow()
{this.setZoomFitMode(Olive.Controls.Viewer.FitMode.Window);}
function OwcViewer_setZoomFitMode(sNewFitMode,bDoNotNotify)
{if(typeof(sNewFitMode)!="string")
return false;switch(sNewFitMode.toLowerCase())
{case Olive.Controls.Viewer.FitMode.Width:case Olive.Controls.Viewer.FitMode.Height:case Olive.Controls.Viewer.FitMode.Window:break;default:return false;}
this.m_sZoomFitMode=sNewFitMode.toLowerCase();if(!bDoNotNotify)
this.notifyCmdStateChanged();return true;}
function OwcViewer_getZoomFitMode()
{return this.m_sZoomFitMode;}
function OwcViewer_queryCmdUiState_zoom(oCmdUiState)
{if(!this.getDocumentLoaded()||!this.internalSetZoomFactor)
{oCmdUiState.enableCommand(false);return false;}
switch(oCmdUiState.commandName.toLowerCase())
{case"setzoom":var nZoomPercents=(this.getZoomFactor()*100);var sZoomFactor="";if(nZoomPercents>1)
nZoomPercents=Math.round(nZoomPercents*100)/100;var sZoomFactor=String(nZoomPercents)+"%";oCmdUiState.setCommandText(sZoomFactor);break;case"zoomfitheight":var bChecked=(this.getZoomFitMode().toLowerCase()==Olive.Controls.Viewer.FitMode.Height)?true:false;oCmdUiState.checkCommand(bChecked);break;case"zoomfitwidth":var bChecked=(this.getZoomFitMode().toLowerCase()==Olive.Controls.Viewer.FitMode.Width)?true:false;oCmdUiState.checkCommand(bChecked);break;case"zoomfitwindow":var bChecked=(this.getZoomFitMode().toLowerCase()==Olive.Controls.Viewer.FitMode.Window)?true:false;oCmdUiState.checkCommand(bChecked);break;}
oCmdUiState.enableCommand(true);return false;}
function OwcViewer_setPageNo(nPageNo,bDoNotNotify)
{this.m_nCurrentPageNo=parseInt(nPageNo,10);if(!bDoNotNotify)
this.notifyCmdStateChanged();}
function OwcViewer_getPageNo()
{return this.m_nCurrentPageNo;}
function OwcViewer_setTotalPagesCount(nPageNo)
{this.lastPage=nPageNo;}
function OwcViewer_getTotalPagesCount()
{return this.lastPage;}
function OwcViewer_getLastVisiblePageNo()
{var nLastVisiblePageNo=this.getPageNo()+this.getNumPagesDisplayed()-1;return nLastVisiblePageNo;}
function OwcViewer_setNumPagesDisplayed(nNumPages)
{this.m_nNumPagesDisplayed=nNumPages;}
function OwcViewer_getNumPagesDisplayed()
{return this.m_nNumPagesDisplayed;}
function OwcViewer_isFirstPage(nPageNo)
{var bIsFirstPage=false;if(nPageNo==this.firstPage)
bIsFirstPage=true;return bIsFirstPage;}
function OwcViewer_isLastPage(nPageNo)
{var bIsLastPage=false;if(nPageNo==this.lastPage)
bIsLastPage=true;return bIsLastPage;}
function OwcViewer_isPageInRange(nPageNo)
{var bIsInRange=true;if(isNaN(nPageNo))
bIsInRange=false;if(nPageNo<this.firstPage||this.lastPage<nPageNo)
bIsInRange=false;return bIsInRange;}
function OwcViewer_gotoPageInternal(nPageNo,bRelativeNavigation)
{if(!this.viewerGotoPageByNumber(nPageNo))
return false;this.selHitIndex=0;this.curEntity=0;return true;}
function OwcViewer_gotoPage(nPageNo)
{if(typeof(nPageNo)=="string")
{var oNumberRegExp=new RegExp("^\\s*\\d\\d*\\s*$");if(oNumberRegExp.test(nPageNo))
nPageNo=parseInt(nPageNo,10);}
if(typeof(nPageNo)!="number"||isNaN(nPageNo)||(this.getTotalPagesCount&&(nPageNo<1||nPageNo>this.getTotalPagesCount())))
{this.reportKnownError(Olive.Errors.Code.InvalidPage);this.notifyCmdStateChanged();return false;}
return this.gotoPageInternal(nPageNo);}
function OwcViewer_getPageLabels()
{return this.m_oMapPageLabels;}
function OwcViewer_getPageNoForPageLabel(sPageLabel,startPage)
{if(!this.m_oMapPageLabels)
return null;sPageLabel=sPageLabel.replace(/(^\s*)|(\s*$)/g,"");for(var nPageNo=1;nPageNo<=this.m_oMapPageLabels.length;nPageNo++)
{if(this.m_oMapPageLabels[nPageNo].toLowerCase()==sPageLabel.toLowerCase())
return nPageNo;}
return null;}
function OwcViewer_getPageLabelForPageNo(nPageNo){if(this.isPageInRange(nPageNo)){if(this.m_sPageLabel)
return this.m_sPageLabel;var sPageLabel=null;var flashObj=this.getFlashObjRef();if(!!flashObj&&flashObj.olv_getPageLabelInSection&&this.m_bUseMaxPageLabel)
sPageLabel=flashObj.olv_getPageLabelInSection(nPageNo);if(!!sPageLabel)
return sPageLabel;return nPageNo;}
else return null;}
function OwcViewer_calculateDestinationPage(sDirection,nDestinationPage)
{var nPageNo=1;var bRelativeNavigation=false;switch(sDirection)
{case"home":nPageNo=1;break;case"back":bRelativeNavigation=true;nPageNo=this.getPageNo()-1;break;case"forward":bRelativeNavigation=true;nPageNo=this.getLastVisiblePageNo()+1;break;case"end":nPageNo=this.getTotalPagesCount();break;case"exact":nPageNo=nDestinationPage;break;}
var oReturn={nPageNo:nPageNo,bRelativeNavigation:bRelativeNavigation}
return oReturn;}
function OwcViewer_gotoPageByLabel(sPageLabel,bDoNotNotify)
{var nPageNo=this.getPageNoForPageLabel(sPageLabel);if(nPageNo!=null)
{this.gotoPageInternal(nPageNo);return true;}
if(!bDoNotNotify)
{this.reportKnownError(Olive.Errors.Code.InvalidPage);this.notifyCmdStateChanged();}
return false;}
function OwcViewer_gotoPageByLabelAndPageNo(sPageId)
{if(typeof(sPageId)!="string")
sPageId=""+sPageId;return this.gotoPageByLabel(sPageId,true);}
function OwcViewer_gotoFirstPage()
{var nPageNo=(this.firstLegalPage?this.firstLegalPage:this.firstPage);return this.gotoPageInternal(nPageNo);}
function OwcViewer_gotoLastPage()
{var nPageNo=(this.lastLegalPage?this.lastLegalPage:this.lastPage);return this.gotoPageInternal(nPageNo);}
function OwcViewer_nextPage()
{return this.gotoPageInternal(this.getPageNo()+this.getNumPagesDisplayed(),true);}
function OwcViewer_prevPage()
{return this.gotoPageInternal(Math.max(1,this.getPageNo()-1),true);}
function OwcViewer_queryCmdUiState_gotoPage(oCmdUiState)
{if(!this.getDocumentLoaded())
{oCmdUiState.enableCommand(false);return false;}
var nPageNo=-1;var nPage=this.getPageNo();if(!nPage)
return false;switch(oCmdUiState.commandName.toLowerCase())
{case"gotoprevpage":nPageNo=this.getPageNo()-this.getNumPagesDisplayed();if(nPageNo<1)
nPageNo=1;break;case"gotonextpage":nPageNo=this.getPageNo()+this.getNumPagesDisplayed();break;case"gotofirstpage":nPageNo=(this.firstLegalPage?this.firstLegalPage:this.firstPage);break;case"gotolastpage":nPageNo=(this.lastLegalPage?this.lastLegalPage:this.lastPage);break;case"gotopage":nPageNo=this.getPageNo();if(nPageNo)
{oCmdUiState.setCommandText(String(nPageNo));oCmdUiState.enableCommand(true);}
else
{oCmdUiState.setCommandText("");oCmdUiState.enableCommand(false);}
return true;break;case"gotopagebylabelandpageno":case"gotopagebylabel":nPageNo=this.getPageNo();var nNumPagesDisplayed=this.getNumPagesDisplayed();var sCommandText="";if(nPageNo&&nNumPagesDisplayed>0){var sPageLabel=this.getPageLabelForPageNo(nPageNo);if(nPageNo%2!=0)
this.m_nPageLabelRight=this.m_sPageLabel;if(!sPageLabel)
sPageLabel=String(nPageNo);var nLastPageNo=this.getTotalPagesCount();var sLastPageLabel=this.getPageLabelForPageNo(nLastPageNo);if(!sLastPageLabel)
sLastPageLabel=String(nLastPageNo);if(nNumPagesDisplayed>1){var nLastVisiblePageNo=this.getLastVisiblePageNo();var sLastVisiblePageLabel=this.m_nPageLabelRight;if(!sLastVisiblePageLabel)
sLastVisiblePageLabel=String(nLastVisiblePageNo);var sFormat=this.getResString("VIEWER_MENU_PAGE_LABEL_DOUBLE");}
else{sFormat=this.getResString("VIEWER_MENU_PAGE_LABEL_SINGLE");}
var sLastPage=nLastPageNo?String(nLastPageNo):"";if(this.WebApplication&&this.WebApplication.m_bUsePagesInSection){var flashObj=this.getFlashObjRef();if(flashObj.olv_getPagesInSection)
sLastPage=flashObj.olv_getPagesInSection();if(flashObj.olv_getPageLabelInSection&&this.m_bUseMaxPageLabel)
sLastPage=flashObj.olv_getPageLabelInSection(sLastPage);}
var arrArguments=[nPageNo,sPageLabel?sPageLabel:"",nLastVisiblePageNo?String(nLastVisiblePageNo):"",sLastVisiblePageLabel?sLastVisiblePageLabel:"",sLastPage,sLastPageLabel?sLastPageLabel:""];sCommandText=String_format_arg(sFormat,arrArguments,0);}
oCmdUiState.setCommandText(sCommandText);if(sCommandText=="")
oCmdUiState.enableCommand(false);else
oCmdUiState.enableCommand(true);return true;break;}
var bCanNavigate=true;if(!this.getPageNo()||nPageNo<=0||!this.firstPage||(nPageNo<this.firstPage)||!this.lastPage||(nPageNo>this.lastPage)||(this.firstLegalPage&&(nPageNo<this.firstLegalPage))||(this.lastLegalPage&&(nPageNo>this.lastLegalPage))||((this.getPageNo()<=nPageNo)&&(this.getPageNo()+this.getNumPagesDisplayed())>nPageNo))
bCanNavigate=false;oCmdUiState.enableCommand(bCanNavigate);return true;}
function OwcViewer_hasOnePagePDF()
{return this.m_bHasOnePagePDF;}
function OwcViewer_hasDocumentPDF()
{return this.m_bHasDocumentPDF;}
function OwcViewer_clearFirstHitPage(bDoNotNotify)
{this.m_nFirstHitPage=Number.MAX_VALUE;if(!bDoNotNotify)
this.notifyCmdStateChanged();}
function OwcViewer_clearLastHitPage(bDoNotNotify)
{this.m_nLastHitPage=Number.MIN_VALUE;if(!bDoNotNotify)
this.notifyCmdStateChanged();}
function OwcViewer_setFirstHitPage(nFirstHitPage,bDoNotNotify)
{if(!this.isPageInRange(nFirstHitPage))
return;this.m_nFirstHitPage=nFirstHitPage;if(!bDoNotNotify)
this.notifyCmdStateChanged();}
function OwcViewer_setLastHitPage(nLastHitPage,bDoNotNotify)
{if(this.isPageInRange(nLastHitPage))
this.m_nLastHitPage=nLastHitPage;if(!bDoNotNotify)
this.notifyCmdStateChanged();}
function OwcViewer_getFirstHitPage()
{return this.m_nFirstHitPage;}
function OwcViewer_getLastHitPage()
{return this.m_nLastHitPage;}
function OwcViewer_setHitsDataLoaded(bHitsLoaded,bDoNotNotify)
{if(bHitsLoaded==this.m_bHitsLoaded)
return;this.m_bHitsLoaded=bHitsLoaded;if(this.m_bHitsLoaded==false)
{this.clearFirstHitPage(false);this.clearLastHitPage(false);}
if(!bDoNotNotify)
this.notifyCmdStateChanged();}
function OwcViewer_queryCmdUiState_HitsNavigation(oCmdUiState)
{if(!this.getDocumentLoaded()||!this.m_bHitsLoaded)
{oCmdUiState.enableCommand(false);return false;}
var bEnableCommand=false;switch(oCmdUiState.commandName.toLowerCase())
{case"gotolasthitpage":case"gotonexthitpage":if(this.getLastVisiblePageNo()<this.getLastHitPage())
bEnableCommand=true;break;case"gotoprevhitpage":case"gotofirsthitpage":if(this.getFirstHitPage()<this.getPageNo())
bEnableCommand=true;break;case"clearsearchhits":bEnableCommand=true;break;}
oCmdUiState.enableCommand(bEnableCommand);return false;}
function OwcViewer_setRotation(nNewRotation,bDoNotNotify)
{if(isNaN(nNewRotation)||nNewRotation%90!=0)
return false;nNewRotation=nNewRotation%270;if(this.m_nRotation==nNewRotation)
return true;this.m_nRotation=nNewRotation;if(!bDoNotNotify)
this.notifyCmdStateChanged();return true;}
function OwcViewer_setRotationInternal(nNewRotation)
{this.setRotation(nNewRotation);}
function OwcViewer_getRotation()
{return this.m_nRotation;}
function OwcViewer_cmdSetRotation(sNewRotation)
{if(typeof(sNewRotation)=="string")
sNewRotation=parseInt(sNewRotation,10);this.setRotationInternal(sNewRotation);}
function OwcViewer_rotateLeft()
{this.setRotationInternal(this.getRotation()-90);}
function OwcViewer_rotateRight()
{this.setRotationInternal(this.getRotation()+90);}
function OwcViewer_queryCmdUiState_Rotation(oCmdUiState)
{if(!this.getDocumentLoaded()&&this.setRotationInternal)
{oCmdUiState.enableCommand(false);return false;}
var bCommandEnabled=true;if(oCmdUiState.commandName.toLowerCase()=="setrotation")
{oCmdUiState.setCommandText(this.getRotation());}
oCmdUiState.enableCommand(bCommandEnabled);}
function OwcViewer_queryCmdUiState_mode(oCmdUiState)
{if(!this.getDocumentLoaded())
{oCmdUiState.enableCommand(false);return false;}
var bChecked=false;var bCommandEnabled=true;switch(oCmdUiState.commandName.toLowerCase())
{case"doublepagemode":var sParams=oCmdUiState.commandParams;if(typeof(sParams)=="string"&&sParams.toLowerCase()=="toggle")
{sParams="";}
var bDoubleModeParam=String_parseBoolean(sParams,true);var bDoubleMode=this.getModeDoublePage();bChecked=bDoubleModeParam?bDoubleMode:!bDoubleMode;break;case"flipanimationeffectmode":bChecked=this.getModeFlipAnimationEffect();break;case"highlighttitlesmode":bChecked=this.getModeHighlightTitles();break;case"highlightentitiesmode":bChecked=this.getModeHighlightEntities();break;case"highlightentitiesonmouseovermode":bChecked=this.getModeHighlightEntitiesOnMouseOver();break;case"flipwithcornersmode":bChecked=this.getModeFlipWithCorners();break;case"viewhitsfordocumentmode":bChecked=this.getModeViewHitsForDocument();break;default:bChecked=false;bCommandEnabled=false;}
oCmdUiState.checkCommand(bChecked);oCmdUiState.enableCommand(bCommandEnabled);}
function OwcViewer_cmdChangeModeDoublePage(newState,nPageNo)
{this.setModeDoublePage(newState,nPageNo);}
function OwcViewer_getModeDoublePage()
{return this.isStateSet(Olive.Controls.Viewer.Mode.DoublePageView);}
function OwcViewer_setModeDoublePage(newState,nPageNo)
{this.setViewerStateInternal(newState,Olive.Controls.Viewer.Mode.DoublePageView);}
function OwcViewer_cmdChangeModeHighlightEntities(newState)
{this.setModeHighlightEntities(newState);}
function OwcViewer_getModeHighlightEntities()
{return this.isStateSet(Olive.Controls.Viewer.Mode.HighlightEntities);}
function OwcViewer_setModeHighlightEntities(newState)
{this.setViewerStateInternal(newState,Olive.Controls.Viewer.Mode.HighlightEntities);}
function OwcViewer_cmdChangeModeHighlightEntitiesOnMouseOver(newState)
{this.setModeHighlightEntitiesOnMouseOver(newState);}
function OwcViewer_getModeHighlightEntitiesOnMouseOver()
{return this.isStateSet(Olive.Controls.Viewer.Mode.HighlightEntitiesOnMouseOver);}
function OwcViewer_setModeHighlightEntitiesOnMouseOver(newState)
{this.setViewerStateInternal(newState,Olive.Controls.Viewer.Mode.HighlightEntitiesOnMouseOver);}
function OwcViewer_cmdChangeModeFlipWithCorners(newState)
{this.setModeFlipWithCorners(newState);}
function OwcViewer_getModeFlipWithCorners()
{return this.isStateSet(Olive.Controls.Viewer.Mode.FlipWithCorners);}
function OwcViewer_setModeFlipWithCorners(newState)
{this.setViewerStateInternal(newState,Olive.Controls.Viewer.Mode.FlipWithCorners);}
function OwcViewer_cmdChangeModeFlipAnimationEffect(newState)
{this.setModeFlipAnimationEffect(newState);}
function OwcViewer_getModeFlipAnimationEffect()
{return this.isStateSet(Olive.Controls.Viewer.Mode.FlipAnimationEffect);}
function OwcViewer_setModeFlipAnimationEffect(newState)
{this.setViewerStateInternal(newState,Olive.Controls.Viewer.Mode.FlipAnimationEffect);}
function OwcViewer_cmdChangeModeHighlightTitles(newState)
{this.setModeHighlightTitles(newState);}
function OwcViewer_getModeHighlightTitles()
{return this.isStateSet(Olive.Controls.Viewer.Mode.HighlightTitles);}
function OwcViewer_setModeHighlightTitles(newState)
{this.setViewerStateInternal(newState,Olive.Controls.Viewer.Mode.HighlightTitles);}
function OwcViewer_cmdChangeModeViewHitsForDocument(newState)
{var oldState=this.getModeViewHitsForDocument();this.setModeViewHitsForDocument(newState);var newState=this.getModeViewHitsForDocument();if(oldState==newState)
return;var oEvent=this.createOwcEventObject("ViewHitsForDocumentChanged");oEvent.bViewHitsForDocument=newState;this.fireOwcEvent(oEvent);Object_Destroy(oEvent);}
function OwcViewer_getModeViewHitsForDocument()
{return this.isStateSet(Olive.Controls.Viewer.Mode.ViewHitsForDocument);}
function OwcViewer_setModeViewHitsForDocument(newState,bDoNotNotify)
{this.setViewerStateInternal(newState,Olive.Controls.Viewer.Mode.ViewHitsForDocument,bDoNotNotify);}
function OwcViewer_setViewerStateInternal(newState,stateModifier,bDoNotNotify)
{if(typeof(newState)=="string")
{if(newState.toLowerCase()=="toggle")
{this.toggleState(stateModifier);return;}
newState=String_parseBoolean(newState);}
this.changeState(newState,stateModifier,null,bDoNotNotify);}
function OwcViewer_onPageVisibilityChanged()
{if(!this.m_bLoadingEnded)
{if(this.WebApplication)
{this.WebApplication.m_LoadingEndedTime=new Date();this.WebApplication.reportLoadingTime();}
this.m_bLoadingEnded=true;}}
JScript.Type.RegisterClass("Olive.Controls.Viewer",Olive.Controls.Viewer,Olive.Controls.Control,[Olive.Controls.IDocViewer,Olive.Controls.IDataBound,Olive.IUiElements]);}
if(!Olive.Data.SearchOptions)
{Olive.Data.SearchOptions=function OwcSearchOptions()
{}
Olive.Data.SearchOptions.DeclareType=function SearchOptions_DeclareType(rObject)
{this.DeclareField("m_nSearchFlags",0);this.DeclareField("m_nSearchFlagsMask",0);this.DeclareField("m_nFuzzyLevel",-1);this.DeclareMethod("clear",OwcSearchOptions_clear);this.DeclareMethod("copyOptions",OwcSearchOptions_copyOptions);this.DeclareMethod("getStemmingMode",OwcSearchOptions_getStemmingMode);this.DeclareMethod("setStemmingMode",OwcSearchOptions_setStemmingMode);this.DeclareMethod("getPhonicMode",OwcSearchOptions_getPhonicMode);this.DeclareMethod("setPhonicMode",OwcSearchOptions_setPhonicMode);this.DeclareMethod("getSynonymsMode",OwcSearchOptions_getSynonymsMode);this.DeclareMethod("setSynonymsMode",OwcSearchOptions_setSynonymsMode);this.DeclareMethod("getFuzzyLevel",OwcSearchOptions_getFuzzyLevel);this.DeclareMethod("setFuzzyLevel",OwcSearchOptions_setFuzzyLevel);this.DeclareMethod("getOptionsString",OwcSearchOptions_getOptionsString);this.DeclareMethod("getOperatorMask",OwcSearchOptions_getOperatorMask);this.DeclareMethod("setOperatorMask",OwcSearchOptions_setOperatorMask);this.DeclareMethod("getOperatorFlags",OwcSearchOptions_getOperatorFlags);this.DeclareMethod("setOperatorFlags",OwcSearchOptions_setOperatorFlags);this.DeclareMethod("parseOperators",OwcSearchOptions_parseOperators);this.DeclareMethod("parseOptions",OwcSearchOptions_parseOptions);this.DeclareMethod("dumpOptions",OwcSearchOptions_dumpOptions);this.DeclareMethod("dumpOptionFlags",OwcSearchOptions_dumpOptionFlags);this.DeclareMethod("dumpOperators",OwcSearchOptions_dumpOperators);this.DeclareMethod("dumpOptionParams",OwcSearchOptions_dumpOptionParams);this.DeclareMethod("getSearchFlagMode",OwcSearchOptions_getSearchFlagMode);this.DeclareMethod("setSearchFlagMode",OwcSearchOptions_setSearchFlagMode);this.DeclareMethod("getRecursiveMode",OwcSearchOptions_getRecursiveMode);this.DeclareMethod("setRecursiveMode",OwcSearchOptions_setRecursiveMode);}
Olive.Data.SearchOptions.ParseOptions=function SearchOptions_ParseOptions(sOptionsString)
{var oOptions=new SearchOptions();if(sOptionsString&&(sOptionsString!=""))
oOptions.parse(sOptionsString);return oOptions;}
Olive.Data.SearchOptions.Mode={Undefined:-1,Enabled:1,Disabled:0}
Olive.Data.SearchOptions.Flags={Stemming:0x00000001,Phonic:0x00000002,Synonyms:0x00000004,HitsOnly:0x00000008,Recursive:0x00000010,PropagateHits:0x00000020}
Olive.Data.SearchOptions.Operator={Default:0x00000000,And:0x10000000,Or:0x20000000,Near:0x40000000,Not:0x80000000,RangeStart:0x01000000,RangeEnd:0x02000000,Range:0x03000000,AndOrNearMask:0x70000000,RangeMask:0x03000000,Mask:0xF3000000}
Olive.Data.SearchOptions.OperatorName={And:"and",Or:"or",Near:"near",Not:"not",RangeStart:"range-start",RangeEnd:"range-end",Range:"range"}
Olive.Data.SearchOptions.ParamNames={FuzzyLevel:"fuzzy",Operators:"op"}
function OwcSearchOptions_clear()
{this.m_nSearchFlags=0;this.m_nSearchFlagsMask=0;this.m_nFuzzyLevel=-1;}
function OwcSearchOptions_copyOptions(oOptions)
{this.clear();if(!oOptions)
return;this.m_nSearchFlags=oOptions.m_nSearchFlags;this.m_nSearchFlagsMask=oOptions.m_nSearchFlagsMask;this.m_nFuzzyLevel=oOptions.m_nFuzzyLevel;}
function OwcSearchOptions_getStemmingMode()
{return this.getSearchFlagMode(Olive.Data.SearchOptions.Flags.Stemming);}
function OwcSearchOptions_setStemmingMode(nMode)
{return this.setSearchFlagMode(Olive.Data.SearchOptions.Flags.Stemming,nMode);}
function OwcSearchOptions_getPhonicMode()
{return this.getSearchFlagMode(Olive.Data.SearchOptions.Flags.Phonic);}
function OwcSearchOptions_setPhonicMode(nMode)
{return this.setSearchFlagMode(Olive.Data.SearchOptions.Flags.Phonic,nMode);}
function OwcSearchOptions_getSynonymsMode()
{return this.getSearchFlagMode(Olive.Data.SearchOptions.Flags.Synonyms);}
function OwcSearchOptions_setSynonymsMode(nMode)
{return this.setSearchFlagMode(Olive.Data.SearchOptions.Flags.Synonyms,nMode);}
function OwcSearchOptions_getRecursiveMode()
{return this.getSearchFlagMode(Olive.Data.SearchOptions.Flags.Recursive);}
function OwcSearchOptions_setRecursiveMode(nMode)
{return this.setSearchFlagMode(Olive.Data.SearchOptions.Flags.Recursive,nMode);}
function OwcSearchOptions_getFuzzyLevel()
{return this.m_nFuzzyLevel;}
function OwcSearchOptions_setFuzzyLevel(nLevel)
{this.m_nFuzzyLevel=nLevel;}
function OwcSearchOptions_getSearchFlagMode(nSearchFlag)
{if((this.m_nSearchFlagsMask&nSearchFlag)!=nSearchFlag)
return Olive.Data.SearchOptions.Mode.Undefined;if((this.m_nSearchFlags&nSearchFlag)==nSearchFlag)
return Olive.Data.SearchOptions.Mode.Enabled;return Olive.Data.SearchOptions.Mode.Disabled;}
function OwcSearchOptions_setSearchFlagMode(nSearchFlag,nMode)
{if(nMode!=Olive.Data.SearchOptions.Mode.Undefined)
{this.m_nSearchFlagsMask|=nSearchFlag;if(nMode==Olive.Data.SearchOptions.Mode.Enabled)
this.m_nSearchFlags|=nSearchFlag;else
this.m_nSearchFlags&=~nSearchFlag;}
else
this.m_nSearchFlagsMask&=~nSearchFlag;}
function OwcSearchOptions_getOptionsString()
{var arrOptions=new Array();this.dumpOptions(arrOptions);return arrOptions.join(",");}
function OwcSearchOptions_getOperatorMask()
{return(this.m_nSearchFlagsMask&Olive.Data.SearchOptions.Operator.Mask);}
function OwcSearchOptions_setOperatorMask(nMask)
{this.m_nSearchFlagsMask&=~Olive.Data.SearchOptions.Operator.Mask;this.m_nSearchFlagsMask|=nMask;}
function OwcSearchOptions_getOperatorFlags()
{return(this.m_nSearchFlags&this.getOperatorMask());}
function OwcSearchOptions_setOperatorFlags(nFlags,bUpdateMask)
{var nSetFlags=(nFlags&Olive.Data.SearchOptions.Operator.Mask);this.m_nSearchFlags&=~Olive.Data.SearchOptions.Operator.Mask;this.m_nSearchFlags|=nSetFlags;if(bUpdateMask)
this.m_nSearchFlagsMask|=nSetFlags;}
function OwcSearchOptions_parseOperators(sOperators,reSeparator)
{if(!sOperators)
sOperators="";if(!reSeparator)
reSeparator=/[\+\t ]/;var arrOperators=sOperators.toLowerCase().split(reSeparator);if(Array_indexOf(arrOperators,Olive.Data.SearchOptions.OperatorName.Not)>=0)
{this.m_nSearchFlagsMask|=Olive.Data.SearchOptions.Operator.Not;this.m_nSearchFlags|=Olive.Data.SearchOptions.Operator.Not;}
if(Array_indexOf(arrOperators,Olive.Data.SearchOptions.OperatorName.And)>=0)
{this.m_nSearchFlagsMask|=Olive.Data.SearchOptions.Operator.AndOrNearMask;this.m_nSearchFlags|=Olive.Data.SearchOptions.Operator.And;}
else if(Array_indexOf(arrOperators,Olive.Data.SearchOptions.OperatorName.Or)>=0)
{this.m_nSearchFlagsMask|=Olive.Data.SearchOptions.Operator.AndOrNearMask;this.m_nSearchFlags|=Olive.Data.SearchOptions.Operator.Or;}
else if(Array_indexOf(arrOperators,Olive.Data.SearchOptions.OperatorName.Near)>=0)
{this.m_nSearchFlagsMask|=Olive.Data.SearchOptions.Operator.AndOrNearMask;this.m_nSearchFlags|=Olive.Data.SearchOptions.Operator.Near;}
else
this.m_nSearchFlagsMask&=~Olive.Data.SearchOptions.Operator.AndOrNearMask;if(Array_indexOf(arrOperators,Olive.Data.SearchOptions.OperatorName.RangeStart)>=0)
{this.m_nSearchFlagsMask|=Olive.Data.SearchOptions.Operator.RangeMask;this.m_nSearchFlags|=Olive.Data.SearchOptions.Operator.RangeStart;}
else if(Array_indexOf(arrOperators,Olive.Data.SearchOptions.OperatorName.RangeEnd)>=0)
{this.m_nSearchFlagsMask|=Olive.Data.SearchOptions.Operator.RangeMask;this.m_nSearchFlags|=Olive.Data.SearchOptions.Operator.RangeEnd;}
else if(Array_indexOf(arrOperators,Olive.Data.SearchOptions.OperatorName.Range)>=0)
{this.m_nSearchFlagsMask|=Olive.Data.SearchOptions.Operator.RangeMask;this.m_nSearchFlags|=Olive.Data.SearchOptions.Operator.Range;}
else
this.m_nSearchFlagsMask&=~Olive.Data.SearchOptions.Operator.RangeMask;}
function OwcSearchOptions_dumpOptions(arrOptionStrings)
{this.dumpOptionFlags(arrOptionStrings);this.dumpOperators(arrOptionStrings);this.dumpOptionParams(arrOptionStrings);}
function OwcSearchOptions_dumpOptionFlags(arrOptionStrings)
{for(var sFlagName in Olive.Data.SearchOptions.Flags)
{var nFlag=Olive.Data.SearchOptions.Flags[sFlagName];var nMode=this.getSearchFlagMode(nFlag);if(nMode==Olive.Data.SearchOptions.Mode.Undefined)
continue;var sOption=sFlagName+":";if(nMode==Olive.Data.SearchOptions.Mode.Enabled)
sOption+="1";else
sOption+="0";arrOptionStrings.push(sOption);}}
function OwcSearchOptions_dumpOperators(arrOptions)
{var arrOperators=new Array();if(this.m_nSearchFlagsMask&Olive.Data.SearchOptions.Operator.Not)
{var nNotOp=(this.m_nSearchFlags&Olive.Data.SearchOptions.Operator.Not);if(nNotOp==Olive.Data.SearchOptions.Operator.Not)
arrOperators.push(Olive.Data.SearchOptions.OperatorName.Not);}
if(this.m_nSearchFlagsMask&Olive.Data.SearchOptions.Operator.AndOrNearMask)
{var nAndOrOp=(this.m_nSearchFlags&Olive.Data.SearchOptions.Operator.AndOrNearMask);if(nAndOrOp==Olive.Data.SearchOptions.Operator.And)
arrOperators.push(Olive.Data.SearchOptions.OperatorName.And);else if(nAndOrOp==Olive.Data.SearchOptions.Operator.Or)
arrOperators.push(Olive.Data.SearchOptions.OperatorName.Or);else
arrOperators.push(Olive.Data.SearchOptions.OperatorName.Near);}
if(this.m_nSearchFlagsMask&Olive.Data.SearchOptions.Operator.RangeMask)
{var nRangeOp=(this.m_nSearchFlags&Olive.Data.SearchOptions.Operator.RangeMask);if(nRangeOp==Olive.Data.SearchOptions.Operator.RangeStart)
arrOperators.push(Olive.Data.SearchOptions.OperatorName.RangeStart);else if(nRangeOp==Olive.Data.SearchOptions.Operator.RangeEnd)
arrOperators.push(Olive.Data.SearchOptions.OperatorName.RangeEnd);else
arrOperators.push(Olive.Data.SearchOptions.OperatorName.Range);}
if(arrOperators.length>0)
{var sOption=Olive.Data.SearchOptions.ParamNames.Operators+":"+
arrOperators.join("+");arrOptions.push(sOption);}}
function OwcSearchOptions_dumpOptionParams(arrOptionStrings)
{if(this.m_nFuzzyLevel<0)
return;var sOption=Olive.Data.SearchOptions.ParamNames.FuzzyLevel+":"+String(this.m_nFuzzyLevel);arrOptionStrings.push(sOption);}
function OwcSearchOptions_parseOptions(sOptionsString)
{var reOptionParts=/([\w-]+):([^,]*)/g;var arrMatches=null;while((arrMatches=reOptionParts.exec(sOptionsString))!=null)
{var sOptionName=arrMatches[1];var sOptionValue=arrMatches[2];switch(sOptionName.toLowerCase())
{case Olive.Data.SearchOptions.ParamNames.Operators:this.parseOperators(sOptionValue);break;case Olive.Data.SearchOptions.ParamNames.FuzzyLevel:this.setFuzzyLevel(parseInt(sOptionValue,10));break;default:var sFlagName=sOptionName.toLowerCase()
for(var sFlag in Olive.Data.SearchOptions.Flags)
{if(sFlag.toLowerCase()!=sFlagName)
continue;var nFlagMask=Olive.Data.SearchOptions.Flags[sFlag];if(sOptionValue==Olive.Data.SearchOptions.Mode.Disabled)
this.setSearchFlagMode(nFlagMask,Olive.Data.SearchOptions.Mode.Disabled);else
this.setSearchFlagMode(nFlagMask,Olive.Data.SearchOptions.Mode.Enabled);break;}
break;}}}
JScript.Type.RegisterClass("Olive.Data.SearchOptions",Olive.Data.SearchOptions);}
if(!Olive.Data.SearchTerm)
{Olive.Data.SearchTerm=function OwcSearchTerm()
{}
Olive.Data.SearchTerm.DeclareType=function OwcSearchTerm_DeclareType(rObject)
{this.DeclareField("m_sFieldName","");this.DeclareField("m_arrValues",null);this.DeclareMethod("matchOptions",OwcSearchTerm_matchOptions);this.DeclareMethod("contentBuildParams",OwcSearchTerm_contentBuildParams);this.DeclareMethod("parseSearchTerm",OwcSearchTerm_parseSearchTerm);this.DeclareMethod("copyFrom",OwcSearchTerm_copyFrom);this.DeclareMethod("addValue",OwcSearchTerm_addValue);this.DeclareMethod("getValue",OwcSearchTerm_getValue);this.DeclareMethod("getValuesCount",OwcSearchTerm_getValuesCount);this.DeclareMethod("removeValue",OwcSearchTerm_removeValue);}
function OwcSearchTerm_matchOptions(oOptions)
{var nTrgOperatorMask=0;var nTrgOperatorFlags=0;if(oOptions)
{nTrgOperatorMask=oOptions.getOperatorMask();nTrgOperatorFlags=oOptions.getOperatorFlags();}else
return true;var nSrcOperatorMask=this.getOperatorMask();if((nTrgOperatorMask^nSrcOperatorMask)!=0)
return false;var nSrcOperatorFlags=this.getOperatorFlags();if(nTrgOperatorFlags!=nSrcOperatorFlags)
return false;return true;}
function OwcSearchTerm_contentBuildParams(oParams)
{if(!this.m_arrValues)
return;var sValue="";sValue+=this.m_sFieldName+";";sValue+=this.getOptionsString()+";";var nValuesCount=this.m_arrValues.length;if(nValuesCount>0)
{var arrValues=new Array(nValuesCount);for(var iValue=0;iValue<nValuesCount;++iValue)
{var oCurValue=this.m_arrValues[iValue];if(oCurValue instanceof Date)
oCurValue=formatDateTimeString("%Y%m%d",oCurValue);arrValues[iValue]=oCurValue;}
sValue+=arrValues.join("^");}
oParams.addParam(OwcUrlParam_Field,sValue);}
function OwcSearchTerm_parseSearchTerm(sSearchTerm)
{var arrTokens=sSearchTerm.split(";");var sFieldName=arrTokens[0];var sFieldOptions=arrTokens[1];var sFieldValues=arrTokens[2];this.m_sFieldName=sFieldName;if(sFieldOptions)
this.parseOptions(sFieldOptions);if(sFieldValues)
{var arrValues=sFieldValues.split("^");for(var iValue=0;iValue<arrValues.length;++iValue)
{var oCurValue=arrValues[iValue];this.addValue(oCurValue);}}}
function OwcSearchTerm_copyFrom(oSrc)
{if(!oSrc)
return;this.copyOptions(oSrc);this.m_sFieldName=oSrc.m_sFieldName;this.m_arrValues=Object_Clone(oSrc.m_arrValues);}
function OwcSearchTerm_addValue(oValue,allowDuplicate)
{if(allowDuplicate)
{if(!this.m_arrValues)
this.m_arrValues=[oValue];else
this.m_arrValues.push(oValue);}
else
this.m_arrValues=Array_append(this.m_arrValues,oValue);}
function OwcSearchTerm_getValue()
{if(!this.m_arrValues||this.m_arrValues.length<1)
return null;if(this.m_arrValues.length==1)
return this.m_arrValues[0];return this.m_arrValues;}
function OwcSearchTerm_getValuesCount()
{if(!this.m_arrValues)
return 0;return this.m_arrValues.length;}
function OwcSearchTerm_removeValue(iIndex)
{return Array_removeItemByIndex(this.m_arrValues,iIndex);}
JScript.Type.RegisterClass("Olive.Data.SearchTerm",Olive.Data.SearchTerm,Olive.Data.SearchOptions);}
if(!Olive.Data.SearchQuery)
{Olive.Data.SearchQuery=function OwcSearchQuery()
{}
Olive.Data.SearchQuery.DeclareType=function OwcSearchQuery_DeclareType(rObject)
{this.DeclareField("m_oSortBy",null);this.DeclareField("m_nPageSize",-1);this.DeclareField("m_arrFields",null);this.DeclareField("m_arrUserParams",null);this.DeclareField("m_sTemplateName",null);this.OverrideMethod("clear",OwcSearchQuery_clear);this.DeclareMethod("copyFrom",OwcSearchQuery_copyFrom);this.DeclareMethod("getPageSize",OwcSearchQuery_getPageSize);this.DeclareMethod("setPageSize",OwcSearchQuery_setPageSize);this.DeclareMethod("getTemplateName",OwcSearchQuery_getTemplateName);this.DeclareMethod("setTemplateName",OwcSearchQuery_setTemplateName);this.DeclareMethod("getSortBy",OwcSearchQuery_getSortBy);this.DeclareMethod("setSortBy",OwcSearchQuery_setSortBy);this.DeclareMethod("getHitsOnlyMode",OwcSearchQuery_getHitsOnlyMode);this.DeclareMethod("setHitsOnlyMode",OwcSearchQuery_setHitsOnlyMode);this.DeclareMethod("getPropagateHitsMode",OwcSearchQuery_getPropagateHitsMode);this.DeclareMethod("setPropagateHitsMode",OwcSearchQuery_setPropagateHitsMode);this.DeclareMethod("contentBuildParams",OwcSearchQuery_contentBuildParams);this.ReplaceMethod("toString",OwcSearchQuery_toString);this.DeclareMethod("parseQuery",OwcSearchQuery_parseQuery);this.DeclareMethod("findSearchInTerm",OwcSearchQuery_findSearchInTerm);this.DeclareMethod("addSearchInField",OwcSearchQuery_addSearchInField);this.DeclareMethod("copySearchInField",OwcSearchQuery_copySearchInField);this.DeclareMethod("addSearchInContentField",OwcSearchQuery_addSearchInContentField);this.DeclareMethod("addSearchInFolder",OwcSearchQuery_addSearchInFolder);this.DeclareMethod("addSearchInDocument",OwcSearchQuery_addSearchInDocument);this.DeclareMethod("getSearchInField",OwcSearchQuery_getSearchInField);this.DeclareMethod("getUserParam",OwcSearchQuery_getUserParam);this.DeclareMethod("setUserParam",OwcSearchQuery_setUserParam);this.DeclareMethod("_addSearchTerm",OwcSearchQuery_addSearchTerm);}
Olive.Data.SearchQuery.SpecialFields={Folder:"olv:Folder",Document:"olv:Document"}
function OwcSearchQuery_clear()
{if(this.BaseClassMethod)
this.BaseClassMethod.apply(this,arguments);if(this.m_oSortBy)
this.m_oSortBy.clear();this.m_nPageSize=-1;this.m_arrFields=null;this.m_arrUserParams=null;}
function OwcSearchQuery_copyFrom(oSrc)
{if(!oSrc)
return;this.copyOptions(oSrc);if(oSrc.m_oSortBy)
{this.m_oSortBy=new Olive.Data.SortOptions();this.m_oSortBy.copyFrom(oSrc.m_oSortBy);}
this.m_nPageSize=oSrc.m_nPageSize;this.m_sTemplateName=oSrc.m_sTemplateName;if(oSrc.m_arrFields)
{this.m_arrFields=new Array();for(var sField in oSrc.m_arrFields)
{this.copySearchInField(sField,oSrc);}}
if(oSrc.m_arrUserParams)
{this.m_arrUserParams=new Array();for(var sParam in oSrc.m_arrUserParams)
this.m_arrUserParams[sParam]=oSrc.m_arrUserParams[sParam];}}
function OwcSearchQuery_getPageSize()
{return this.m_nPageSize;}
function OwcSearchQuery_setPageSize(nPageSize)
{this.m_nPageSize=(nPageSize==undefined?-1:nPageSize);}
function OwcSearchQuery_getTemplateName()
{return this.m_sTemplateName;}
function OwcSearchQuery_setTemplateName(sTemplateName)
{this.m_sTemplateName=(sTemplateName?sTemplateName:null);}
function OwcSearchQuery_getSortBy()
{return this.m_oSortBy;}
function OwcSearchQuery_setSortBy(oSortBy)
{this.m_oSortBy=oSortBy;}
function OwcSearchQuery_getHitsOnlyMode()
{return this.getSearchFlagMode(Olive.Data.SearchOptions.Flags.HitsOnly);}
function OwcSearchQuery_setHitsOnlyMode(nMode)
{return this.setSearchFlagMode(Olive.Data.SearchOptions.Flags.HitsOnly,nMode);}
function OwcSearchQuery_getPropagateHitsMode()
{return this.getSearchFlagMode(Olive.Data.SearchOptions.Flags.PropagateHits);}
function OwcSearchQuery_setPropagateHitsMode(nMode)
{return this.setSearchFlagMode(Olive.Data.SearchOptions.Flags.PropagateHits,nMode);}
function OwcSearchQuery_contentBuildParams(oParams,bExcludeLayoutParams)
{if(this.m_arrFields)
{for(var sFieldName in this.m_arrFields)
{var arrSearchTerms=this.m_arrFields[sFieldName];if(arrSearchTerms)
{var arrRangeTerms=new Array();for(var iTerm=0;iTerm<arrSearchTerms.length;++iTerm)
{var oSearchTerm=arrSearchTerms[iTerm];var nOpFlags=oSearchTerm.getOperatorFlags();if((nOpFlags&Olive.Data.SearchOptions.Operator.RangeMask)==0)
{oSearchTerm.contentBuildParams(oParams);continue;}
var bMatchedPair=false;var nSrcRangeOp=(nOpFlags&Olive.Data.SearchOptions.Operator.RangeMask);var nSrcNonRangeOpFlag=(oSearchTerm.m_nSearchFlags&oSearchTerm.m_nSearchFlagsMask);nSrcNonRangeOpFlag&=~Olive.Data.SearchOptions.Operator.RangeMask;for(var iPairTerm=arrRangeTerms.length-1;iPairTerm>=0;--iPairTerm)
{var oPairTerm=arrRangeTerms[iPairTerm];var nTrgOpFlags=oPairTerm.getOperatorFlags();var nTrgRangeOp=(nTrgOpFlags&Olive.Data.SearchOptions.Operator.RangeMask);var nTrgNonRangeOpFlag=(oPairTerm.m_nSearchFlags&oPairTerm.m_nSearchFlagsMask);nTrgNonRangeOpFlag&=~Olive.Data.SearchOptions.Operator.RangeMask;if(nTrgNonRangeOpFlag!=nSrcNonRangeOpFlag)
continue;if(oPairTerm.m_nSearchFlagsMask!=oSearchTerm.m_nSearchFlagsMask)
continue;if(nTrgRangeOp==nSrcRangeOp)
continue;var oStartTerm,oEndTerm;if(nSrcRangeOp==Olive.Data.SearchOptions.Operator.RangeStart)
{oStartTerm=oSearchTerm;oEndTerm=oPairTerm;}
else
{oStartTerm=oPairTerm;oEndTerm=oSearchTerm;}
var oMergedTerm=new Olive.Data.SearchTerm();oMergedTerm.copyFrom(oStartTerm);oMergedTerm.m_nSearchFlags|=Olive.Data.SearchOptions.Operator.Range;oMergedTerm.addValue(oEndTerm.getValue(),true);oMergedTerm.contentBuildParams(oParams);Array_removeItemByIndex(arrRangeTerms,iPairTerm);bMatchedPair=true;break;}
if(!bMatchedPair)
arrRangeTerms.push(oSearchTerm);}
for(var iTerm=0;iTerm<arrRangeTerms.length;++iTerm)
{var oSearchTerm=arrRangeTerms[iTerm];oSearchTerm.contentBuildParams(oParams);}}}}
var sOptions=this.getOptionsString();if(sOptions&&(sOptions!=""))
oParams.addParam(OwcUrlParam_SearchOptions,sOptions);if(this.m_nPageSize>0&&!bExcludeLayoutParams)
oParams.addParam(OwcUrlParam_PageSize,this.m_nPageSize);if(this.m_sTemplateName&&!bExcludeLayoutParams)
oParams.addParam(OwcUrlParam_TemplateId,this.m_sTemplateName);if(this.m_oSortBy)
this.m_oSortBy.contentBuildParams(oParams);if(this.m_arrUserParams)
{var arrParams=new Array();for(var sParamName in this.m_arrUserParams)
{var sParamValue=this.m_arrUserParams[sParamName];oParams.addParam(OwcUrlParam_UserParam,sParamName+"^"+sParamValue);}}}
function OwcSearchQuery_toString()
{var oParams=new QueryString();this.contentBuildParams(oParams);return oParams.getQueryString();}
function OwcSearchQuery_parseQuery(sQueryString)
{this.clear();var oParams=new QueryString();oParams.parseUrlQuery(sQueryString);var sOptionsString=oParams.getParam(OwcUrlParam_SearchOptions,0);if(sOptionsString)
this.parseOptions(sOptionsString);var arrFields=oParams.getParam(OwcUrlParam_Field);if(arrFields)
{for(var iField=0;iField<arrFields.length;++iField)
{var sSearchTerm=arrFields[iField];var oSearchTerm=new Olive.Data.SearchTerm();oSearchTerm.parseSearchTerm(sSearchTerm);var nOpMask=oSearchTerm.getOperatorMask();var nOpFlags=oSearchTerm.getOperatorFlags();if((nOpFlags&nOpMask)==Olive.Data.SearchOptions.Operator.Range)
{var nOpNoRangeFlags=(nOpFlags&~Olive.Data.SearchOptions.Operator.RangeMask);var oStartRangeTerm=new Olive.Data.SearchTerm();oStartRangeTerm.copyFrom(oSearchTerm);oStartRangeTerm.setOperatorFlags(nOpNoRangeFlags|Olive.Data.SearchOptions.Operator.RangeStart);oStartRangeTerm.removeValue(1);var oEndRangeTerm=new Olive.Data.SearchTerm();oEndRangeTerm.copyFrom(oSearchTerm);oEndRangeTerm.setOperatorFlags(nOpNoRangeFlags|Olive.Data.SearchOptions.Operator.RangeEnd);oEndRangeTerm.removeValue(0);this._addSearchTerm(oStartRangeTerm);this._addSearchTerm(oEndRangeTerm);}
else
this._addSearchTerm(oSearchTerm);}}
var sPageSize=oParams.getParam(OwcUrlParam_PageSize,0);if(sPageSize)
this.setPageSize(parseInt(sPageSize,10));var sTemplateName=oParams.getParam(OwcUrlParam_TemplateId,0);if(sTemplateName)
this.setTemplateName(sTemplateName);var arrSortOptions=oParams.getParam(OwcUrlParam_ContentSort);if(arrSortOptions)
{var sSortOptions=arrSortOptions.join("^");var oSortBy=new Olive.Data.SortOptions();oSortBy.parse(sSortOptions);this.setSortBy(oSortBy);}
var arrUserParams=oParams.getParam(OwcUrlParam_UserParam);if(arrUserParams)
{for(var iParam=0;iParam<arrUserParams.length;++iParam)
{var sParamDef=arrUserParams[iParam];var arrTokens=sParamDef.split("^");this.setUserParam(arrTokens[0],arrTokens[1]);}}}
function OwcSearchQuery_findSearchInTerm(sSearchIn,oOptions)
{if(!sSearchIn||!this.m_arrFields)
return null;var arrTerms=this.m_arrFields[sSearchIn.toLowerCase()];if(!arrTerms||(arrTerms.length==0))
return null;for(var iTerm=0;iTerm<arrTerms.length;++iTerm)
{var oSearchTerm=arrTerms[iTerm];if(oSearchTerm.matchOptions(oOptions))
return oSearchTerm;}
return null;}
function OwcSearchQuery_addSearchInField(sSearchIn,oValue,oOptions)
{if(!oValue)
return;var oSearchTerm=this.findSearchInTerm(sSearchIn,oOptions);if(!oSearchTerm)
{oSearchTerm=new Olive.Data.SearchTerm();oSearchTerm.m_sFieldName=sSearchIn;oSearchTerm.copyOptions(oOptions);this._addSearchTerm(oSearchTerm);}
oSearchTerm.addValue(oValue);}
function OwcSearchQuery_copySearchInField(sFieldName,oSrcSeQuery)
{if(!oSrcSeQuery||!oSrcSeQuery.m_arrFields)
return;sField=sFieldName.toLowerCase();var arrSrcSearchTerms=oSrcSeQuery.m_arrFields[sField];var arrTrgSearchTerms=null;if(arrSrcSearchTerms)
{arrTrgSearchTerms=new Array();for(var iTerm=0;iTerm<arrSrcSearchTerms.length;++iTerm)
{var oSrcTerm=arrSrcSearchTerms[iTerm];var oTrgTerm=new Olive.Data.SearchTerm();oTrgTerm.copyFrom(oSrcTerm);arrTrgSearchTerms.push(oTrgTerm);}}
if(!this.m_arrFields)
this.m_arrFields=new Array();this.m_arrFields[sField]=arrTrgSearchTerms;}
function OwcSearchQuery_addSearchInContentField(sSearchIn,oContentItem,oOptions)
{if(!oContentItem)
return;var oContentRefParams=new QueryString();Olive.ContentItem.buildRefParams(oContentItem,oContentRefParams);var sFieldValue=oContentRefParams.getQueryString(",","=",false);this.addSearchInField(sSearchIn,sFieldValue,oOptions);}
function OwcSearchQuery_addSearchInFolder(oFolder,oOptions)
{if(!oFolder)
return;if(typeof(oFolder)=="object")
this.addSearchInContentField(Olive.Data.SearchQuery.SpecialFields.Folder,oFolder,oOptions);else
this.addSearchInField(Olive.Data.SearchQuery.SpecialFields.Folder,oFolder,oOptions);}
function OwcSearchQuery_addSearchInDocument(oDocument,oOptions)
{if(!oDocument)
return;if(typeof(oDocument)=="object")
this.addSearchInContentField(Olive.Data.SearchQuery.SpecialFields.Document,oDocument,oOptions);else
this.addSearchInField(Olive.Data.SearchQuery.SpecialFields.Document,oDocument,oOptions);}
function OwcSearchQuery_getSearchInField(sSearchIn,oOptions)
{var oSearchTerm=this.findSearchInTerm(sSearchIn,oOptions);if(!oSearchTerm)
return null;return oSearchTerm.getValue();}
function OwcSearchQuery_getUserParam(sParamName)
{if(!this.m_arrUserParams)
return null;if(sParamName in this.m_arrUserParams)
return this.m_arrUserParams[sParamName];return null;}
function OwcSearchQuery_setUserParam(sParamName,sParamValue)
{if(!this.m_arrUserParams)
this.m_arrUserParams=new Array();if(sParamValue==null||sParamValue==undefined)
delete this.m_arrUserParams[sParamName];else
this.m_arrUserParams[sParamName]=sParamValue;}
function OwcSearchQuery_addSearchTerm(oSearchTerm)
{var sFieldName=oSearchTerm.m_sFieldName;var arrFieldTerms=null;if(this.m_arrFields)
arrFieldTerms=this.m_arrFields[sFieldName.toLowerCase()];else
this.m_arrFields=new Array();if(!arrFieldTerms)
{arrFieldTerms=new Array();this.m_arrFields[sFieldName.toLowerCase()]=arrFieldTerms;}
Array_appendItem(arrFieldTerms,oSearchTerm);}
JScript.Type.RegisterClass("Olive.Data.SearchQuery",Olive.Data.SearchQuery,Olive.Data.SearchOptions);}
var OwcErr_DateValueInvalid=2004;var OwcErr_MonthValueInvalid=2005;var OwcErr_YearValueInvalid=2006;var OwcErr_DayValueInvalid=2007;var OwcErr_ServerReturnedError=2008;var OwcErr_MailFieldIsRequired=2014;var OwcErr_MailFromInvalid=2015;var OwcErr_MailToInvalid=2016;
if(typeof(JScript)=="undefined")
throw DHTML.newError(0,"JavaScript OOP API is not included.  Add JScriptCore.js to your file");if(typeof(Olive)=="undefined")
throw DHTML.newError(0,"Olive Web SDK core classes are not included.  Add OwcCommon.js to your file");if(typeof(Olive.Page)=="undefined")
throw DHTML.newError(0,"Olive.Page class is not included.  Add OwcPage.js to your file");Olive.WindowBinder.bindWindow(window);