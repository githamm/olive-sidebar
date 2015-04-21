
if(!Olive.BookmarkTwitterAdapter)
{Olive.BookmarkTwitterAdapter=function()
{}
Olive.BookmarkTwitterAdapter.DeclareType=function OwcBookmarkTwitterAdapter_DeclareType()
{this.ReplaceMethod("init",OwcBookmarkTwitterAdapter_init);}
function OwcBookmarkTwitterAdapter_init(oWindowOptions,via)
{this.m_oWindowOptions=oWindowOptions;this.m_sAdapterURL="http://twitter.com/intent/tweet";this.m_sAdapterName="www.twitter.com";this.m_sParamSeparator=";";this._declareField(Olive.BookmarkField.FieldID.Title,"text",true);this._declareField(Olive.BookmarkField.FieldID.URL,"url",true);if(via!=null){this._declareField("via","via",true,via);}}
JScript.Type.RegisterClass("Olive.BookmarkTwitterAdapter",Olive.BookmarkTwitterAdapter,Olive.BookmarkAdapter);}
if(!Olive.BookmarkFacebookAdapter)
{Olive.BookmarkFacebookAdapter=function()
{}
Olive.BookmarkFacebookAdapter.DeclareType=function BookmarkFacebookAdapter_DeclareType()
{this.ReplaceMethod("init",OwcBookmarkFacebookAdapter_init);}
function OwcBookmarkFacebookAdapter_init(oWindowOptions)
{this.m_oWindowOptions=oWindowOptions;this.m_sAdapterURL="http://www.facebook.com/share.php";this.m_sAdapterName="www.facebook.com";this.m_sParamSeparator="&";this._declareField(Olive.BookmarkField.FieldID.URL,"u",true);this._declareField(Olive.BookmarkField.FieldID.Title,"t",true);}
JScript.Type.RegisterClass("Olive.BookmarkFacebookAdapter",Olive.BookmarkFacebookAdapter,Olive.BookmarkAdapter);}
if(!Olive.BookmarkGoogleBuzzAdapter)
{Olive.BookmarkGoogleBuzzAdapter=function()
{}
Olive.BookmarkGoogleBuzzAdapter.DeclareType=function OwcBookmarkGoogleBuzzAdapter_DeclareType()
{this.ReplaceMethod("init",OwcBookmarkGoogleBuzzAdapter_init);}
function OwcBookmarkGoogleBuzzAdapter_init(oWindowOptions)
{this.m_oWindowOptions=oWindowOptions;this.m_sAdapterURL="http://www.google.com/buzz/post";this.m_sAdapterName="www.google.com";this.m_sParamSeparator=";";this._declareField(Olive.BookmarkField.FieldID.Title,"message",true);this._declareField(Olive.BookmarkField.FieldID.URL,"url",true);}
JScript.Type.RegisterClass("Olive.BookmarkGoogleBuzzAdapter",Olive.BookmarkGoogleBuzzAdapter,Olive.BookmarkAdapter);}
if(!Olive.BookmarkBuzzComAdapter)
{Olive.BookmarkBuzzComAdapter=function()
{}
Olive.BookmarkBuzzComAdapter.DeclareType=function OwcBookmarkBuzzComAdapter_DeclareType()
{this.ReplaceMethod("init",OwcBookmarkBuzzComAdapter_init);}
function OwcBookmarkBuzzComAdapter_init(oWindowOptions)
{this.m_oWindowOptions=oWindowOptions;this.m_sAdapterURL="http://www.buzz.com/";this.m_sAdapterName="www.buzz.com";this.m_sParamSeparator=";";}
JScript.Type.RegisterClass("Olive.BookmarkBuzzComAdapter",Olive.BookmarkBuzzComAdapter,Olive.BookmarkAdapter);}
if(!Olive.BookmarkDeliciousAdapter)
{Olive.BookmarkDeliciousAdapter=function()
{}
Olive.BookmarkDeliciousAdapter.DeclareType=function OwcBookmarkDeliciousAdapter_DeclareType()
{this.ReplaceMethod("init",OwcBookmarkDeliciousAdapter_init);}
function OwcBookmarkDeliciousAdapter_init(oWindowOptions)
{this.m_oWindowOptions=oWindowOptions;this.m_sAdapterURL="http://del.icio.us/post";this.m_sAdapterName="del.icio.us";this.m_sParamSeparator=";";this._declareField(Olive.BookmarkField.FieldID.Title,"title",true);this._declareField(Olive.BookmarkField.FieldID.URL,"url",true);this._declareField("v","v",true,4);this._declareField("jump","jump",true,"close");this._declareField(Olive.BookmarkField.FieldID.Description,"notes",false);}
JScript.Type.RegisterClass("Olive.BookmarkDeliciousAdapter",Olive.BookmarkDeliciousAdapter,Olive.BookmarkAdapter);}
if(!Olive.BookmarkDigThisAdapter)
{Olive.BookmarkDigThisAdapter=function()
{}
Olive.BookmarkDigThisAdapter.DeclareType=function OwcBookmarkDigThisAdapter_DeclareType()
{this.ReplaceMethod("init",OwcBookmarkDigThisAdapter_init);}
function OwcBookmarkDigThisAdapter_init(oWindowOptions)
{this.m_oWindowOptions=oWindowOptions;this.m_sAdapterURL="http://digg.com/submit";this.m_sAdapterName="digg.com";this._declareField(Olive.BookmarkField.FieldID.Title,"title",true);this._declareField(Olive.BookmarkField.FieldID.URL,"url",true);this._declareField(Olive.BookmarkField.FieldID.Category,"topic",true,"world_news");this._declareField(Olive.BookmarkField.FieldID.Description,"bodytext",false,"");this._declareField("media","media",true,"news");}
JScript.Type.RegisterClass("Olive.BookmarkDigThisAdapter",Olive.BookmarkDigThisAdapter,Olive.BookmarkAdapter);}