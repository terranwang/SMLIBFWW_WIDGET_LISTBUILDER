(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_Content_InnerHTML = function (smlibid, smlib_listbuilder_create_options) {
        var innerhtml = '';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_contentdiv" ';
        innerhtml += 'class="smlib_listbuilder_create_contentdiv" style="height:' + (smlib_listbuilder_create_options.height - 50) + 'px;min-height:' + (smlib_listbuilder_create_options.height - 50) + 'px;max-height:' + (smlib_listbuilder_create_options.height - 50) + 'px;"';
        innerhtml += '>';
        innerhtml += '</div>';      
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_Content_AssignFunctions = function (maindiv) {        
        maindiv.smlib_Content_ShowContent = $.fn.smlib_listbuilder_create.smlib_Content_ShowContent;
        maindiv.smlib_Content_HideContent = $.fn.smlib_listbuilder_create.smlib_Content_HideContent;
        maindiv.smlib_Content_LoadContent = $.fn.smlib_listbuilder_create.smlib_Content_LoadContent;
        $.fn.smlib_listbuilder_create.smlib_Content_AssignControls(maindiv);
        $.fn.smlib_listbuilder_create.smlib_BuilderList_AssignFunctions(maindiv);
        $.fn.smlib_listbuilder_create.smlib_ListForm_AssignFunctions(maindiv);
        $.fn.smlib_listbuilder_create.smlib_ItemList_AssignFunctions(maindiv);
        $.fn.smlib_listbuilder_create.smlib_ItemDetail_AssignFunctions(maindiv);
        $.fn.smlib_listbuilder_create.smlib_BookForm_AssignFunctions(maindiv);
        $.fn.smlib_listbuilder_create.smlib_FileForm_AssignFunctions(maindiv);
        $.fn.smlib_listbuilder_create.smlib_YouTubeForm_AssignFunctions(maindiv);
        $.fn.smlib_listbuilder_create.smlib_URLForm_AssignFunctions(maindiv);
        $.fn.smlib_listbuilder_create.smlib_PrintForm_AssignFunctions(maindiv);
        $.fn.smlib_listbuilder_create.smlib_ShareForm_AssignFunctions(maindiv);
        $.fn.smlib_listbuilder_create.smlib_PatronForm_AssignFunctions(maindiv);
    }
    $.fn.smlib_listbuilder_create.smlib_Content_AssignControls = function (maindiv) {
       
    }
    // #endregion

    // #region Global functions
    $.fn.smlib_listbuilder_create.smlib_Content_ShowContent = function (type) {
        if (!($('#' + this.smlibid + '_contentdiv').hasClass('smlibactive'))) {
            $('#' + this.smlibid + '_contentdiv').addClass('smlibactive');
        }
    }
    $.fn.smlib_listbuilder_create.smlib_Content_HideContent = function () {
        if ($('#' + this.smlibid + '_contentdiv').hasClass('smlibactive')) {
            $('#' + this.smlibid + '_contentdiv').html('');
            $('#' + this.smlibid + '_contentdiv').removeClass('smlibactive');
        }
    }
    // #endregion

    // #region load actions 
    $.fn.smlib_listbuilder_create.smlib_Content_LoadContent = function (type) {
        if (type == null) {
            type = "BUILDER_LIST";
        }
        switch (type.toUpperCase()) {
            case "CATALOGUE_FORM":
                if (this.focuslist.id == "") {
                    alert("Please select a list first");
                    return;
                }
                if ((this.focuslist.type != "MY_LIST") && (this.focuslist.type != "COLLABORATE_LIST")) {
                    alert("Can only add item to own or collaborative list.");
                    return;
                }
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_BookForm_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options));
                this.smlib_BookForm_InputFocus()
                break;
            case "FILE_FORM":
                if (this.focuslist.id == "") {
                    alert("Please select a list first");
                    return;
                }
                if ((this.focuslist.type != "MY_LIST") && (this.focuslist.type != "COLLABORATE_LIST")) {
                    alert("Can only add item to own or collaborative list.");
                    return;
                }
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_FileForm_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options));
                this.smlib_FileForm_InputFocus();
                break;
            case "YOUTUBE_FORM":
                if (this.focuslist.id == "") {
                    alert("Please select a list first");
                    return;
                }
                if ((this.focuslist.type != "MY_LIST") && (this.focuslist.type != "COLLABORATE_LIST")) {
                    alert("Can only add item to own or collaborative list.");
                    return;
                }
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_YouTubeForm_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options));
                this.smlib_YouTubeForm_InputFocus();
                break;
            case "URL_FORM":
                if (this.focuslist.id == "") {
                    alert("Please select a list first");
                    return;
                }
                if ((this.focuslist.type != "MY_LIST") && (this.focuslist.type != "COLLABORATE_LIST")) {
                    alert("Can only add item to own or collaborative list.");
                    return;
                }
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_URLForm_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options, "NEW"));
                this.smlib_URLForm_LoadBlank();                
                break;
            case "PATRON_FORM":
                if (this.focuslist.id == "") {
                    alert("Please select a list first");
                    return;
                }
                if (this.focuslist.type != "MY_LIST") {
                    alert("Can only add patron to own list.");
                    return;
                }
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_PatronForm_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options, "NEW"));
                this.smlib_PatronForm_InputFocus();
                break;
                
            case "EDIT_ITEM":
                if (this.focuslist.id == "") {
                    alert("Please select a list first");
                    return;
                }
                if ((this.focuslist.type != "MY_LIST") && (this.focuslist.type != "COLLABORATE_LIST")) {
                    alert("Can only edit item to own or collaborative list.");
                    return;
                }
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_URLForm_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options, "EDIT"));
                this.smlib_URLForm_LoadItem();
                break;                
            case "PRINT_FORM":
                if (this.focuslist.id == "") {
                    alert("Please select a list first");
                    return;
                }
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_PrintForm_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options));
                this.smlib_PrintForm_LoadControls();
                break;
            case "SHARE_FROM":
                if (this.focuslist.id == "") {
                    alert("Please select a list first");
                    return;
                }
                if (this.focuslist.type != "MY_LIST") {
                    alert("Can only share own list.");
                    return;
                }
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_ShareForm_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options));
                this.smlib_ShareForm_LoadList();                
                break;
            case "ITEM_DETAIL":
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_ItemDetail_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options));
                this.smlib_ItemDetail_Load();
                break;
            case "ITEM_LIST":
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_ItemList_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options));
                this.smlib_ItemList_Load();
                break;
            case "ADD_LIST":
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_ListForm_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options, "NEW"));
                this.smlib_ListForm_LoadBlank();
                break;
            case "EDIT_LIST":
                if (this.focuslist.type != "MY_LIST") {
                    alert("Can only share own list.");
                    return;
                }
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_ListForm_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options, "EDIT"));
                this.smlib_ListForm_LoadList();
                break;
            case "BUILDER_LIST":
            default:
                $('#' + this.smlibid + '_contentdiv').html($.fn.smlib_listbuilder_create.smlib_BuilderList_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options));
                this.smlib_BuilderList_Load();
                break;
        }
    }
    // #endregion

    // #region click actions   
   
    // #endregion

}(jQuery));