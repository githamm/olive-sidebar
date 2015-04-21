
function OwcGetApplication()
{return OwcGetApplication.Application;}
var applicationClass=Olive.WebAppBase.ApplicationClass;if(applicationClass==null||applicationClass==undefined)
applicationClass=OliveApplication;OwcGetApplication.Application=new applicationClass();OwcGetApplication.Application.initialize();