SMLIBFWW_LISTBUILDER_W_CREATE.prototype = new SMLIBFWW_MASTER_W();
SMLIBFWW_LISTBUILDER_W_CREATE.prototype.constructor = SMLIBFWW_LISTBUILDER_W_CREATE;
function SMLIBFWW_LISTBUILDER_W_CREATE(mid, pid) {
    this.Version = "2.0.0";
    this.ID = "SMLIBFWW_LISTBUILDER_W_CREATE";
    if (mid != null) {
        this.ID = mid;
    }
    this.WidgetName = "LISTBUILDER";
    this.WidgetElement = "SMLIBFWW_LISTBUILDER_W_CREATE";
    this.MajorConfigureMode = 3;
    this.OverFlow = "overflow:hidden;";
    this.SetSizeCode(FS_SC_S_100PX100P);
    this.Init(mid, pid)
    this.MinFunctionLevel = 0;
    this.ListBuildCreateOption = $.fn.smlib_listbuilder_option();
    if (LoginForm.HasLogin()) {
        this.FocusPatronID = LoginPatron().PatronID;
    }
    this.ListBuilderCreate = null;
}
SMLIBFWW_LISTBUILDER_W_CREATE.prototype.AfterReady = function () {
    if (LoginForm != null) {
        if (LoginForm.HasLogin()) {
            this.InitContentByPatron();
            if (this.HasPermission()) {
                this.LoadListBuildCreate();
            }
        }
        else {
            SMLIBCookie.SetCookie("LOGIN_REDIRECT_PAGE", window.location + "", 1);
            window.location = "SmartLibraryPageLoader.aspx?PageName=LOGIN_FULL";
            return;
        }
    }
}
SMLIBFWW_LISTBUILDER_W_CREATE.prototype.LoadListBuildCreate = function () {

    if (typeof SMLIBFWW_FILE_UPLOADER_W === "undefined") {
        try {
            AttachWidgetOnce("FILE_UPLOADER");

        }
        catch (err) {

        }
    }    
    this.LoadListBuildCreateDIV = new SMLIB_DIV();
    this.LoadListBuildCreateDIV.ID = this.ID + "_LoadListBuildCreateDIV";
    this.LoadListBuildCreateDIV.InnerHTML = "";
    this.LoadListBuildCreateDIV.SetSizeCode(this.WidgetSizeCode);
    this.LoadListBuildCreateDIV.Load();
    this.ShowContent(this.LoadListBuildCreateDIV.DivInterHtml);

    this.ListBuildCreateOption = $.fn.smlib_listbuilder_option();
    this.ListBuildCreateOption.position = 'relative';
    this.ListBuildCreateOption.width = this.WidgetSizeCode.GetWidgetWidthNumber() - 40;
    this.ListBuildCreateOption.height = this.WidgetSizeCode.GetWidgetHeightNumber() - 40;
    this.ListBuildCreateOption.top = 20;
    this.ListBuildCreateOption.left = 20;
    this.ListBuildCreateOption.additional_css = '';
    this.ListBuildCreateOption.loadingimg = SMLIB_GLOBAL_ROOT_URL + 'img/loadingblack.gif';
    this.ListBuildCreateOption.bgfile = '';
    this.ListBuildCreateOption.showsearchuserbtn = IsTeacher();

    this.ListBuildCreateOption.webroot = SMLIB_GLOBAL_ROOT_URL;
    this.ListBuildCreateOption.widgetroot = SMLIB_GLOBAL_ROOT_URL+ "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/";
    this.ListBuildCreateOption.titleroot = SMLIB_GLOBAL_ROOT_URL + "SmartLibraryWeb/SmartLibraryPageLoader.aspx?PageName=TITLE_DETAIL&BookID=";
    this.ListBuildCreateOption.patronroot = SMLIB_GLOBAL_ROOT_URL + "SmartLibraryWeb/SmartLibraryPageLoader.aspx?PageName=PATRON_PROFILE&PatronBarcode=";
    this.ListBuildCreateOption.loadbuilderservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/LoadListBuilder";
    this.ListBuildCreateOption.savelistservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/SaveList";
    this.ListBuildCreateOption.deletelistservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/DeleteList";
    this.ListBuildCreateOption.saveitemservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/SaveItem";
    this.ListBuildCreateOption.deleteitemservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/DeleteItem";
    this.ListBuildCreateOption.reorderitemservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/ReorderItem";
    this.ListBuildCreateOption.savesharedemailservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/SaveShareItem";
    this.ListBuildCreateOption.deletesharedemailservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/DeleteShareItem";
    this.ListBuildCreateOption.getitemdetailservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/GetItemDetail";
    this.ListBuildCreateOption.emailsharedemailservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/EmailShareItem";
    this.ListBuildCreateOption.sharetypechangeservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/ChangeShareItemType";
    this.ListBuildCreateOption.youtubesearchservice = "https://www.googleapis.com/youtube/v3/search";
    this.ListBuildCreateOption.youtubesearchkey = "AIzaSyAfu3N-LFqCIFB4-WVrtM8deSDCsWAhi0A";
    this.ListBuildCreateOption.booksearchservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/SearchBookByKeyword";
    this.ListBuildCreateOption.filesearchservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/SearchFileByKeyword";
    this.ListBuildCreateOption.patronsearchservice = SMLIB_GLOBAL_ROOT_URL + "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/SERVICE/SMLIBFWW_LISTBUILDER_S.asmx/SearchPatronByKeyword";
    if (this.ListBuildCreateOption.youtubesearchkey == "")
    {
        this.ListBuildCreateOption.showyoutubebtn = false;
    }
    if (typeof SMLIBFWW_FILE_UPLOADER_W === "undefined") {
        this.ListBuildCreateOption.showfilebtn = false;
    }
    
    if (CurrentPageObj.HasWidget("SMLIBFWW_SEARCH_RESULT_CONTAINER_W_CONTAINER")) {
        this.ListBuildCreateOption.showcataloguebtn = false;
    }    
    this.ListBuilderCreate = $("#" + this.LoadListBuildCreateDIV.ID).smlib_listbuilder_create(this.ListBuildCreateOption);
    this.ListBuilderCreate.smlibLoadBuilder();

}
SMLIBFWW_LISTBUILDER_W_CREATE.prototype.SetFocusTitle = function (focustitle) {

    if (this.ListBuilderCreate != null) {
        if (this.ListBuilderCreate.focuslist.id == "") {
            return;
        }
        var newitem = new $.fn.smlib_listbuilder_item();
        newitem.id = '';
        newitem.title = focustitle.Title;
        newitem.desc = focustitle.MultimediaDescription;
        newitem.index = this.ListBuilderCreate.focuslist.item.length + 1;
        newitem.type = 'CATALOGUE';
        newitem.refid = focustitle.BookID;
        newitem.url = this.ListBuilderCreate.smlib_listbuilder_create_options.titleroot + focustitle.BookID;
        newitem.creator = '';
        newitem.creation = '';
        newitem.itemcover = focustitle.ActualCoverURL;
        newitem.itemlogo = '';
        newitem.msg = '';
        if (this.ListBuilderCreate.smlib_listbuilder_create_options.autoadd) {
            this.ListBuilderCreate.smlib_ItemList_ListItemSaveService(newitem);
        }
        else
        {
            if ((this.ListBuilderCreate.focuslist.type != "MY_LIST") && (this.ListBuilderCreate.focuslist.type != "COLLABORATE_LIST")) {                
                return;
            }
            //this.ListBuilderCreate.smlib_Content_LoadContent("CATALOGUE_FORM");
            $('#' + this.ListBuilderCreate.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_BookForm_InnerHTML(this.ListBuilderCreate.smlibid, this.ListBuilderCreate.smlib_listbuilder_create_options));
            $('#' + this.ListBuilderCreate.smlibid + '_bookform_contentdiv').html('');
            this.ListBuilderCreate.bookresultset = [];
            var result = {
                item: [
                    { "bookid": focustitle.BookID + '', "title": focustitle.Title, "coverurl": focustitle.ActualCoverURL, "description": focustitle.MultimediaDescription }
                ],
                msg:""
            };
            this.ListBuilderCreate.smlib_BookForm_SearchServiceResult(result);
        }
    }
    else {
        
    }
}
SMLIBFWW_LISTBUILDER_W_CREATE.prototype.SetFocusURL = function (title, link, desc, linkdes) {
  
    if (this.ListBuilderCreate != null) {
        if (this.ListBuilderCreate.focuslist.id == "") {
            return;
        }
        var newitem = new $.fn.smlib_listbuilder_item();
        newitem.id = '';
        newitem.title = title;
        newitem.desc = desc;
        newitem.index = this.ListBuilderCreate.focuslist.item.length + 1;
        newitem.type = 'URL';
        newitem.refid = '';
        newitem.url = link;
        newitem.creator = '';
        newitem.creation = '';
        newitem.itemcover = '';
        newitem.itemlogo = linkdes.toUpperCase();
        newitem.msg = '';
        if (this.ListBuilderCreate.smlib_listbuilder_create_options.autoadd) {
            this.ListBuilderCreate.smlib_ItemList_ListItemSaveService(newitem);
        }
        else {
            if ((this.ListBuilderCreate.focuslist.type != "MY_LIST") && (this.ListBuilderCreate.focuslist.type != "COLLABORATE_LIST")) {
                return;
            }
            //this.ListBuilderCreate.smlib_Content_LoadContent("URL_FORM");
            $('#' + this.ListBuilderCreate.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_URLForm_InnerHTML(this.ListBuilderCreate.smlibid, this.ListBuilderCreate.smlib_listbuilder_create_options,"NEW"));           
            $('#' + this.ListBuilderCreate.smlibid + '_urlform_titlebox').val(title);
            $('#' + this.ListBuilderCreate.smlibid + '_urlform_urlbox').val(link);
            $('#' + this.ListBuilderCreate.smlibid + '_urlform_descbox').val(desc);            
        }
    }
    else {

    }

}