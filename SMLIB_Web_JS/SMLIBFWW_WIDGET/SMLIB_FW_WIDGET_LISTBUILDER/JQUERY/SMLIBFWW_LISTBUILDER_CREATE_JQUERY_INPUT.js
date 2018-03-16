(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_Input_InnerHTML = function (smlibid, smlib_listbuilder_create_options) {
        var innerhtml = '';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_inputdiv" ';
        innerhtml += 'class="smlib_listbuilder_create_inputdiv" ';
        innerhtml += '>';
        innerhtml += '<div id="' + smlibid + '_inputdivcontent" style="width:100%;">';   
        innerhtml += '</div>';
        innerhtml += '</div>';      
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_Input_AssignFunctions = function (maindiv) {
        $.fn.smlib_listbuilder_create.smlib_Input_AssignControls(maindiv);
        maindiv.smlib_Input_ShowListClick = $.fn.smlib_listbuilder_create.smlib_Input_ShowListClick;
        maindiv.smlib_Input_AddListClick = $.fn.smlib_listbuilder_create.smlib_Input_AddListClick;
        maindiv.smlib_Input_AddCatalogueClick = $.fn.smlib_listbuilder_create.smlib_Input_AddCatalogueClick;
        maindiv.smlib_Input_AddFileClick = $.fn.smlib_listbuilder_create.smlib_Input_AddFileClick;
        maindiv.smlib_Input_AddYouTubeClick = $.fn.smlib_listbuilder_create.smlib_Input_AddYouTubeClick;
        maindiv.smlib_Input_AddUrlClick = $.fn.smlib_listbuilder_create.smlib_Input_AddUrlClick;
        maindiv.smlib_Input_PrintClick = $.fn.smlib_listbuilder_create.smlib_Input_PrintClick;
        maindiv.smlib_Input_ShareClick = $.fn.smlib_listbuilder_create.smlib_Input_ShareClick;
        maindiv.smlib_Input_ShowListMode = $.fn.smlib_listbuilder_create.smlib_Input_ShowListMode;
        maindiv.smlib_Input_ShowContentMode = $.fn.smlib_listbuilder_create.smlib_Input_ShowContentMode;
        maindiv.smlib_Input_ShowListMode();
    }
    $.fn.smlib_listbuilder_create.smlib_Input_AssignControls = function (maindiv) {
       
    }    
    // #endregion

    // #region Global functions
    $.fn.smlib_listbuilder_create.smlib_Input_ShowListMode = function () {
        var innerhtml = '';
        if (this.smlib_listbuilder_create_options.showaddbtn) {
            innerhtml += '<span  role="button" style="width:20px;margin-right:10px;font-size:20px;" ><i id="' + this.smlibid + '_create_addbtn" class="fa fa-plus fa-fw" style="width:auto;" onclick="' + this.smlib_AssignParentActions('smlib_Input_AddListClick()') + '">&nbsp;New List</i></span>';
        }
        $('#' + this.smlibid + '_inputdivcontent').html(innerhtml);
    }
    $.fn.smlib_listbuilder_create.smlib_Input_ShowContentMode = function () {
        var innerhtml = '';
        if (this.smlib_listbuilder_create_options.showlistbtn) {
            innerhtml += '<span  role="button" style="width:20px;margin-right:10px;font-size:20px;" ><i id="' + this.smlibid + '_create_listbtn" class="fa fa-list fa-fw" style="width:auto;" onclick="' + this.smlib_AssignParentActions('smlib_Input_ShowListClick()') + '"></i></span>';
        }
        if (this.smlib_listbuilder_create_options.showcataloguebtn) {
            innerhtml += '<span  role="button" style="width:20px;margin-right:10px;font-size:20px;" ><i id="' + this.smlibid + '_create_cataloguebtn" class="fa fa-book fa-fw" style="width:auto;" onclick="' + this.smlib_AssignParentActions('smlib_Input_AddCatalogueClick()') + '"></i></span>';
        }
        if (this.smlib_listbuilder_create_options.showfilebtn) {
            innerhtml += '<span  role="button" style="width:20px;margin-right:10px;font-size:20px;" ><i id="' + this.smlibid + '_create_filebtn" class="fa fa-file fa-fw" style="width:auto;" onclick="' + this.smlib_AssignParentActions('smlib_Input_AddFileClick()') + '"></i></span>';
        }
        if (this.smlib_listbuilder_create_options.showyoutubebtn) {
            innerhtml += '<span  role="button" style="width:20px;margin-right:10px;font-size:20px;" ><i id="' + this.smlibid + '_create_youtubebtn" class="fa fa-youtube fa-fw" style="width:auto;" onclick="' + this.smlib_AssignParentActions('smlib_Input_AddYouTubeClick()') + '"></i></span>';
        }
        if (this.smlib_listbuilder_create_options.showurlbtn) {
            innerhtml += '<span  role="button" style="width:20px;margin-right:10px;font-size:20px;" ><i id="' + this.smlibid + '_create_urlbtn" class="fa fa-link fa-fw" style="width:auto;" onclick="' + this.smlib_AssignParentActions('smlib_Input_AddUrlClick()') + '"></i></span>';
        }
        if (this.smlib_listbuilder_create_options.showexportbtn) {
            innerhtml += '<span  role="button" style="width:20px;margin-right:10px;font-size:20px;float:right;" ><i id="' + this.smlibid + '_create_exportbtn" class="fa fa-share-alt fa-fw" style="width:auto;" onclick="' + this.smlib_AssignParentActions('smlib_Input_ShareClick()') + '"></i></span>';
        }
        if (this.smlib_listbuilder_create_options.showprintbtn) {
            innerhtml += '<span  role="button" style="width:20px;margin-right:10px;font-size:20px;float:right;" ><i id="' + this.smlibid + '_create_printbtn" class="fa fa-file-pdf-o fa-fw" style="width:auto;" onclick="' + this.smlib_AssignParentActions('smlib_Input_PrintClick()') + '"></i></span>';
        }
        $('#' + this.smlibid + '_inputdivcontent').html(innerhtml);
    }
    // #endregion

    // #region click actions
    $.fn.smlib_listbuilder_create.smlib_Input_ShowListClick = function () {       
        this.smlib_Content_LoadContent("BUILDER_LIST");
        this.smlib_Input_ShowListMode();
    }
    $.fn.smlib_listbuilder_create.smlib_Input_AddListClick = function () {
        this.smlib_Content_LoadContent("ADD_LIST");
        this.smlib_Input_ShowContentMode();
    }
    $.fn.smlib_listbuilder_create.smlib_Input_AddCatalogueClick = function () {
        this.smlib_Content_LoadContent("CATALOGUE_FORM");
    }
    $.fn.smlib_listbuilder_create.smlib_Input_AddFileClick = function () {
        this.smlib_Content_LoadContent("FILE_FORM");
    }
    $.fn.smlib_listbuilder_create.smlib_Input_AddYouTubeClick = function () {
        this.smlib_Content_LoadContent("YOUTUBE_FORM");
    }
    $.fn.smlib_listbuilder_create.smlib_Input_AddUrlClick = function () {
        this.smlib_Content_LoadContent("URL_FORM");
    }
    $.fn.smlib_listbuilder_create.smlib_Input_PrintClick = function () {
        this.smlib_Content_LoadContent("PRINT_FORM");
    }
    $.fn.smlib_listbuilder_create.smlib_Input_ShareClick = function () {
        this.smlib_Content_LoadContent("SHARE_FROM");
    }
    // #endregion

}(jQuery));