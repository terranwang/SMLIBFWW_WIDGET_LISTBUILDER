(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_URLForm_InnerHTML = function (smlibid, smlib_listbuilder_create_options, mode) {
        if (mode == null) {
            mode = "NEW";
        }
        var innerhtml = '';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_urlform_headerdiv" ';
        innerhtml += 'class="header"';
        innerhtml += '>';
        innerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        innerhtml += '<input type="textbox" class="form-control" placeholder="Title" id="' + smlibid + '_urlform_titlebox">';
        innerhtml += '<span class="input-group-addon" role="button"  >';
        if (mode == "NEW") {
            innerhtml += '<i id="' + smlibid + '_urlform_addbtn" class="fa fa-plus fa-fw" style="width:auto;" onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_URLForm_AddClick()', smlibid) + '"></i>';
        }
        else if (mode == "EDIT") {
            innerhtml += '<i id="' + smlibid + '_urlform_addbtn" class="fa fa-pencil fa-fw" style="width:auto;" onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_URLForm_UpdateClick()', smlibid) + '"></i>';
        }
        innerhtml +='</span>';        
        innerhtml += '</div>';
        innerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        innerhtml += '<textarea class="form-control" placeholder="URL" id="' + smlibid + '_urlform_urlbox" rows="3"></textarea>';        
        innerhtml += '</div>';
        innerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        innerhtml += '<textarea class="form-control" placeholder="Description" id="' + smlibid + '_urlform_descbox" rows="5"></textarea>';        
        innerhtml += '</div>';
        innerhtml += '</div>';
             
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_URLForm_AssignFunctions = function (maindiv) {
        maindiv.smlib_URLForm_InputFocus = $.fn.smlib_listbuilder_create.smlib_URLForm_InputFocus;
        maindiv.smlib_URLForm_LoadItem = $.fn.smlib_listbuilder_create.smlib_URLForm_LoadItem;
        maindiv.smlib_URLForm_LoadBlank = $.fn.smlib_listbuilder_create.smlib_URLForm_LoadBlank;
        maindiv.smlib_URLForm_AddClick = $.fn.smlib_listbuilder_create.smlib_URLForm_AddClick;
        maindiv.smlib_URLForm_UpdateClick = $.fn.smlib_listbuilder_create.smlib_URLForm_UpdateClick;
        $.fn.smlib_listbuilder_create.smlib_URLForm_AssignControls(maindiv);
    }
    $.fn.smlib_listbuilder_create.smlib_URLForm_AssignControls = function (maindiv) {
       
    }
    // #endregion

    // #region Global functions
    $.fn.smlib_listbuilder_create.smlib_URLForm_InputFocus = function () {
        $('#' + this.smlibid + '_urlform_titlebox').focus();
    }
    $.fn.smlib_listbuilder_create.smlib_URLForm_LoadItem = function (item) {
        if (item == null) {
            item = this.focusitem;
        }
        $('#' + this.smlibid + '_urlform_titlebox').val(item.title);
        $('#' + this.smlibid + '_urlform_urlbox').val(item.url);
        $('#' + this.smlibid + '_urlform_descbox').val(item.desc);
        this.smlib_URLForm_InputFocus();
    }
    $.fn.smlib_listbuilder_create.smlib_URLForm_LoadBlank = function () {
        $('#' + this.smlibid + '_urlform_titlebox').val('');
        $('#' + this.smlibid + '_urlform_urlbox').val('');
        $('#' + this.smlibid + '_urlform_descbox').val('');
        this.smlib_URLForm_InputFocus();
    }
    // #endregion

    // #region click actions    
    $.fn.smlib_listbuilder_create.smlib_URLForm_AddClick = function () {
        var newitem = new $.fn.smlib_listbuilder_item();
        newitem.id = '';
        newitem.title = $('#'+this.smlibid+'_urlform_titlebox').val();
        newitem.desc = $('#' + this.smlibid + '_urlform_descbox').val();
        newitem.index = this.focuslist.item.length+1;
        newitem.type = 'URL';
        newitem.refid = '';
        newitem.url = $('#' + this.smlibid + '_urlform_urlbox').val();
        newitem.creator = '';
        newitem.creation = '';
        newitem.itemcover = '';
        newitem.itemlogo = '';
        newitem.msg = '';
        if (newitem.title == "")
        {
            alert("Please input a title for the item.");
            return;
        }
        if (newitem.url == "") {
            alert("Please input a URL for the item.");
            return;
        }
        if (newitem.url.indexOf("../") == 0)
        {

        }
        else
        {
            if (newitem.url.toLowerCase().indexOf("http") != 0) {
                newitem.url = "https://" + newitem.url;
            }
        }
        this.smlib_ItemList_ListItemSaveService(newitem);       
    }
    $.fn.smlib_listbuilder_create.smlib_URLForm_UpdateClick = function () {
        if ($('#' + this.smlibid + '_urlform_titlebox').val() != "") {
            this.focusitem.title = $('#' + this.smlibid + '_urlform_titlebox').val();
            this.focusitem.url = $('#' + this.smlibid + '_urlform_urlbox').val();
            this.focusitem.desc = $('#' + this.smlibid + '_urlform_descbox').val();
            this.smlib_ItemList_ListItemSaveService(this.focusitem);
        }
        else {
            alert("Please enter item title");
        }
    }
    // #endregion

}(jQuery));