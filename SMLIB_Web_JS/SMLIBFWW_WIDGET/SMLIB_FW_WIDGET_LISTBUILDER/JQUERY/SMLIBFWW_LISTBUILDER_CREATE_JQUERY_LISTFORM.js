(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_ListForm_InnerHTML = function (smlibid, smlib_listbuilder_create_options, mode) {
        if (mode == null)
        {
            mode = "NEW";
        }
        var innerhtml = '';        
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_listform_headerdiv" ';
        innerhtml += 'class="header"';
        innerhtml += '>';
        innerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        innerhtml += '<input type="textbox" class="form-control" placeholder="List Name" id="' + smlibid + '_listform_namebox"/>';
        innerhtml += '<span class="input-group-addon" role="button"  >';
        if (mode == "NEW")
        {
            innerhtml += '<i id="' + smlibid + '_listform_addbtn" class="fa fa-plus fa-fw" style="width:auto;" onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_ListForm_AddClick()', smlibid) + '"></i>';
        }
        else if (mode == "EDIT") {
            innerhtml += '<i id="' + smlibid + '_listform_addbtn" class="fa fa-pencil fa-fw" style="width:auto;" onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_ListForm_UpdateClick()', smlibid) + '"></i>';
        }
        innerhtml += '</span>';
        innerhtml += '</div>';
        innerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        innerhtml += '<textarea class="form-control" placeholder="Description" id="' + smlibid + '_listform_descbox" rows="5"></textarea>';        
        innerhtml += '</div>';
        innerhtml += '</div>';
             
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_ListForm_AssignFunctions = function (maindiv) {
        maindiv.smlib_ListForm_LoadList = $.fn.smlib_listbuilder_create.smlib_ListForm_LoadList;
        maindiv.smlib_ListForm_LoadBlank = $.fn.smlib_listbuilder_create.smlib_ListForm_LoadBlank;
        maindiv.smlib_ListForm_AddClick = $.fn.smlib_listbuilder_create.smlib_ListForm_AddClick;
        maindiv.smlib_ListForm_UpdateClick = $.fn.smlib_listbuilder_create.smlib_ListForm_UpdateClick;
        maindiv.smlib_ListForm_AddService = $.fn.smlib_listbuilder_create.smlib_ListForm_AddService;
        maindiv.smlib_ListForm_AddServiceResult = $.fn.smlib_listbuilder_create.smlib_ListForm_AddServiceResult;
        $.fn.smlib_listbuilder_create.smlib_ListForm_AssignControls(maindiv);
    }
    $.fn.smlib_listbuilder_create.smlib_ListForm_AssignControls = function (maindiv) {
       
    }    
    // #endregion

    // #region Global functions
    $.fn.smlib_listbuilder_create.smlib_ListForm_LoadList = function (list) {
        if (list == null) {
            list = this.focuslist;
        }
        $('#' + this.smlibid + '_listform_namebox').val(list.name);
        $('#' + this.smlibid + '_listform_descbox').val(list.desc);
    } 
    $.fn.smlib_listbuilder_create.smlib_ListForm_LoadBlank = function () {
        $('#' + this.smlibid + '_listform_namebox').val('');
        $('#' + this.smlibid + '_listform_descbox').val('');
    }
    // #endregion

    // #region click actions    
    $.fn.smlib_listbuilder_create.smlib_ListForm_AddClick = function () {
        if ($('#' + this.smlibid + '_listform_namebox').val() != "") {
            var newlist = new $.fn.smlib_listbuilder_list();
            newlist.id = '';
            newlist.name = $('#' + this.smlibid + '_listform_namebox').val();
            newlist.desc = $('#' + this.smlibid + '_listform_descbox').val();
            newlist.creator = "";
            newlist.creation = "";
            newlist.type = "MY_LIST";
            newlist.itemcount = 0;
            newlist.item = [];
            this.smlib_ListForm_AddService(newlist);
        }
        else
        {
            alert("Please enter list name");
        }
    }
    $.fn.smlib_listbuilder_create.smlib_ListForm_UpdateClick = function () {
        if ($('#' + this.smlibid + '_listform_namebox').val() != "") {
            this.focuslist.name = $('#' + this.smlibid + '_listform_namebox').val();
            this.focuslist.desc = $('#' + this.smlibid + '_listform_descbox').val();
            this.focuslist.type = "MY_LIST";            
            this.smlib_ListForm_AddService(this.focuslist);
        }
        else {
            alert("Please enter list name");
        }
    }    
    // #endregion

    // #region service functions
    $.fn.smlib_listbuilder_create.smlib_ListForm_AddService = function (list) {
        if (list==null)
        {
            list = this.focuslist;
        }
        this.smlibShowLoadingMask("Add List...");
        $.ajax({
            parent: this,
            type: "POST",
            url: this.smlib_listbuilder_create_options.savelistservice,
            data: '{"id": "' + list.id + '", "name": "' + list.name + '", "desc": "' + list.desc + '", "type":"' + list.type + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (data) { try { this.parent.smlib_ListForm_AddServiceResult(JSON.parse(data.d)); } catch (err) { alert("Save Lists Fail " + err); } },
            failure: function (errMsg) {
                alert("Save Lists Fail " + errMsg);
            }
        });


    }
    $.fn.smlib_listbuilder_create.smlib_ListForm_AddServiceResult = function (list) {
        if (list.msg != "") {
            alert(list.msg);
        }
        else {
            this.focuslist = list;
            if (this.smlib_BuilderList_GetListByID(list.id, list) == null)
            {
                this.focusbuilder.mylist[this.focusbuilder.mylist.length] = list;
            }
            this.smlib_Content_LoadContent("ITEM_LIST");
        }
        this.smlibHideLoadingMask();
    }
    // #endregion

}(jQuery));