(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_BuilderList_InnerHTML = function (smlibid, smlib_listbuilder_create_options) {
        var innerhtml = '';        
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_builderlist_headerdiv" ';
        innerhtml += 'class="header info"';
        innerhtml += '>';
        //innerhtml += '<h5>All List</h5>';
        innerhtml += '</div>';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_builderlist_contentdiv" ';
        innerhtml += 'class="content info" style="height:' + (smlib_listbuilder_create_options.height - 80) + 'px;min-height:' + (smlib_listbuilder_create_options.height - 80) + 'px;max-height:' + (smlib_listbuilder_create_options.height - 80) + 'px"';
        innerhtml += '>';
        innerhtml += '</div>';      
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_BuilderList_AssignFunctions = function (maindiv) {
        $.fn.smlib_listbuilder_create.smlib_BuilderList_AssignControls(maindiv);
        maindiv.smlib_BuilderList_GetListByID = $.fn.smlib_listbuilder_create.smlib_BuilderList_GetListByID;
        maindiv.smlib_BuilderList_RemoveListByID = $.fn.smlib_listbuilder_create.smlib_BuilderList_RemoveListByID;
        maindiv.smlib_BuilderList_Load = $.fn.smlib_listbuilder_create.smlib_BuilderList_Load;
        maindiv.smlib_BuilderList_ListItemDiv = $.fn.smlib_listbuilder_create.smlib_BuilderList_ListItemDiv;
        maindiv.smlib_BuilderList_ListItemClick = $.fn.smlib_listbuilder_create.smlib_BuilderList_ListItemClick;
        maindiv.smlib_BuilderList_ListItemEditClick = $.fn.smlib_listbuilder_create.smlib_BuilderList_ListItemEditClick;
        maindiv.smlib_BuilderList_ListItemDeleteClick = $.fn.smlib_listbuilder_create.smlib_BuilderList_ListItemDeleteClick;
        maindiv.smlib_BuilderList_ListItemDeleteService = $.fn.smlib_listbuilder_create.smlib_BuilderList_ListItemDeleteService;
        maindiv.smlib_BuilderList_ListItemDeleteServiceResult = $.fn.smlib_listbuilder_create.smlib_BuilderList_ListItemDeleteServiceResult;
    }
    $.fn.smlib_listbuilder_create.smlib_BuilderList_AssignControls = function (maindiv) {
       
    }
    // #endregion

    // #region Global functions
    $.fn.smlib_listbuilder_create.smlib_BuilderList_GetListByID = function (listid,updatedlist) {
        var builder = this.focusbuilder;
        for (var i = 0; i < builder.mylist.length; i++) {
            if (builder.mylist[i].id == listid) {
                if (updatedlist != null)
                {
                    builder.mylist[i] = updatedlist;
                }
                return builder.mylist[i];
            }
        }
        for (var i = 0; i < builder.sharelist.length; i++) {
            if (builder.sharelist[i].id == listid) {
                if (updatedlist != null) {
                    builder.sharelist[i] = updatedlist;
                }
                return builder.sharelist[i];
            }
        }
        for (var i = 0; i < builder.collaboratelist.length; i++) {
            if (builder.collaboratelist[i].id == listid) {
                if (updatedlist != null) {
                    builder.collaboratelist[i] = updatedlist;
                }
                return builder.collaboratelist[i];
            }
        }
        return null;
    }
    $.fn.smlib_listbuilder_create.smlib_BuilderList_RemoveListByID = function (listid) {
        var builder = this.focusbuilder;
        var templist = builder.mylist;
        builder.mylist = [];
        for (var i = 0; i < templist.length; i++) {
            if (templist[i].id == listid) {

            }
            else {
                builder.mylist[builder.mylist.length] = templist[i];
            }
        }

        templist = builder.sharelist;
        builder.sharelist = [];
        for (var i = 0; i < templist.length; i++) {
            if (templist[i].id == listid) {

            }
            else {
                builder.sharelist[builder.sharelist.length] = templist[i];
            }
        }

        templist = builder.collaboratelist;
        builder.collaboratelist = [];
        for (var i = 0; i < templist.length; i++) {
            if (templist[i].id == listid) {

            }
            else {
                builder.collaboratelist[builder.collaboratelist.length] = templist[i];
            }
        }
        this.focusbuilder = builder;
    }
    // #endregion

    // #region load actions   
    $.fn.smlib_listbuilder_create.smlib_BuilderList_Load = function (builder) {
        if (builder == null) {
            builder = this.focusbuilder;
        }
        else {
            this.focusbuilder = builder;
        }
        $('#' + this.smlibid + '_builderlist_contentdiv').html('');

        for (var i = 0; i < builder.mylist.length; i++) {
            $('#' + this.smlibid + '_builderlist_contentdiv').append(this.smlib_BuilderList_ListItemDiv(builder.mylist[i]));
        }
        for (var i = 0; i < builder.sharelist.length; i++) {
            $('#' + this.smlibid + '_builderlist_contentdiv').append(this.smlib_BuilderList_ListItemDiv(builder.sharelist[i]));
        }
        for (var i = 0; i < builder.collaboratelist.length; i++) {
            $('#' + this.smlibid + '_builderlist_contentdiv').append(this.smlib_BuilderList_ListItemDiv(builder.collaboratelist[i]));
        }
    }
    $.fn.smlib_listbuilder_create.smlib_BuilderList_ListItemDiv = function (list) {
        var subinnerhtml = "";
        subinnerhtml += '<div class="itemdiv">';
        subinnerhtml += '<h5>';
        //switch (list.type.toUpperCase()) {
        //    case "MY_LIST":
        //        subinnerhtml += '<i class="fa fa-list fa-fw" style="width:auto;"></i>&nbsp;&nbsp;';
        //        break;
        //    case "SHARED_LIST":
        //        subinnerhtml += '<i class="fa fa-share-alt fa-fw"></i>&nbsp;&nbsp;';
        //        break;
        //    case "COLLABORATE_LIST":
        //        subinnerhtml += '<i class="fa fa-users fa-fw"></i>&nbsp;&nbsp;';
        //        break;
        //}
        subinnerhtml += '<strong role="button" onclick="' + this.smlib_AssignParentActions('smlib_BuilderList_ListItemClick(\'' + list.id + '\')') + '">' + list.name + '</strong>';
        subinnerhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-pencil-square-o fa-fw" onclick="' + this.smlib_AssignParentActions('smlib_BuilderList_ListItemEditClick(\'' + list.id + '\')') + '"></i>&nbsp;&nbsp;<i class="fa fa-trash fa-fw" onclick="' + this.smlib_AssignParentActions('smlib_BuilderList_ListItemDeleteClick(\'' + list.id + '\')') + '"></i>';
        subinnerhtml += '</h5>';
        subinnerhtml += '<h5>&nbsp;&nbsp;&nbsp;&nbsp;' + list.desc + '</h5>';
        subinnerhtml += '<h5>&nbsp;&nbsp;&nbsp;&nbsp;By ' + list.creator + ' On ' + list.creation + '</h5>';       
        switch (list.type.toUpperCase()) {
            case "MY_LIST":
                subinnerhtml += '<h5>&nbsp;&nbsp;&nbsp;&nbsp;My List</h5>';
                break;
            case "SHARED_LIST":
                subinnerhtml += '<h5>&nbsp;&nbsp;&nbsp;&nbsp;Static List</h5>';
                break;
            case "COLLABORATE_LIST":
                subinnerhtml += '<h5>&nbsp;&nbsp;&nbsp;&nbsp;Collaborative List</h5>';
                break;
        }
        subinnerhtml += '</div>';
        return subinnerhtml;
    }
    // #endregion

    // #region click actions     
    $.fn.smlib_listbuilder_create.smlib_BuilderList_ListItemClick = function (listid) {
        var list = this.smlib_BuilderList_GetListByID(listid);
        if (list!=null)
        {
            this.focuslist = list;
            this.smlib_Content_LoadContent("ITEM_LIST");
        }
        this.smlib_Input_ShowContentMode();
    }
    $.fn.smlib_listbuilder_create.smlib_BuilderList_ListItemEditClick = function (listid) {
        var list = this.smlib_BuilderList_GetListByID(listid);
        if (list != null) {
            this.focuslist = list;
            this.smlib_Content_LoadContent("EDIT_LIST");
        }
    }
    $.fn.smlib_listbuilder_create.smlib_BuilderList_ListItemDeleteClick = function (listid) {
        var list = this.smlib_BuilderList_GetListByID(listid);
        if (list != null) {
            this.smlib_BuilderList_ListItemDeleteService(list);
        }
    }
    // #endregion

    // #region services  
    $.fn.smlib_listbuilder_create.smlib_BuilderList_ListItemDeleteService = function (list) {
        if (list == null) {
            list = this.focuslist;
        }
        this.smlibShowLoadingMask("Delete List...");
        $.ajax({
            parent: this,
            type: "POST",
            url: this.smlib_listbuilder_create_options.deletelistservice,
            data: '{"id": "' + list.id + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (data) { try { this.parent.smlib_BuilderList_ListItemDeleteServiceResult(JSON.parse(data.d)); } catch (err) { alert("Save Lists Fail " + err); } },
            failure: function (errMsg) {
                alert("Save Lists Fail " + errMsg);
            }
        });        
    }
    $.fn.smlib_listbuilder_create.smlib_BuilderList_ListItemDeleteServiceResult = function (list) {
        if (list.msg != "") {
            alert(list.msg);
        }
        else {
            this.smlib_BuilderList_RemoveListByID(list.id);
            this.smlib_Content_LoadContent("BUILDER_LIST");
        }
        this.smlibHideLoadingMask();
    }
    // #endregion
}(jQuery));