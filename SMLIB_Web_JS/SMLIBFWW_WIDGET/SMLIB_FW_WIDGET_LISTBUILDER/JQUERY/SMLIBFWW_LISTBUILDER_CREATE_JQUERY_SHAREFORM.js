(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_ShareForm_InnerHTML = function (smlibid, smlib_listbuilder_create_options) {
        var innerhtml = '';        
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_shareform_headerdiv" ';
        innerhtml += 'class="header"';
        innerhtml += '>';
        innerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        innerhtml += '<input style="width:100%;" class="form-control" placeholder="Email Address" id="' + smlibid + '_shareform_emailbox" >';
        innerhtml += '<select style="width:100%;" class="form-control"  id="' + smlibid + '_shareform_typebox" >';
        innerhtml += '<option value="READONLY">Static List</option>';
        innerhtml += '<option value="COLLABORATE">Collaborative List</option>';
        innerhtml += '</select>';
        innerhtml += '<span class="input-group-addon" role="button" onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_ShareForm_AddClick()', smlibid) + '" ><i id="' + smlibid + '_shareform_searchbtn" class="fa fa-plus fa-fw" style="width:auto;"></i>&nbsp;Share</span>';
        if (smlib_listbuilder_create_options.showsearchuserbtn)
        {
            innerhtml += '<span class="input-group-addon" role="button" onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_ShareForm_SearchUserClick()', smlibid) + '" ><i id="' + smlibid + '_shareform_searchuserbtn" class="fa fa-search fa-fw" style="width:auto;"></i>&nbsp;Search</span>';
        }

        innerhtml += '</div>';
        innerhtml += '</div>';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_shareform_contentdiv" ';
        innerhtml += 'class="content" style="height:' + (smlib_listbuilder_create_options.height - 150) + 'px;min-height:' + (smlib_listbuilder_create_options.height - 150) + 'px;max-height:' + (smlib_listbuilder_create_options.height - 150) + 'px"';
        innerhtml += '>';      
        innerhtml += '</div>';      
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_ShareForm_AssignFunctions = function (maindiv) {
        maindiv.smlib_ShareForm_InputFocus = $.fn.smlib_listbuilder_create.smlib_ShareForm_InputFocus;
        maindiv.smlib_ShareForm_LoadList = $.fn.smlib_listbuilder_create.smlib_ShareForm_LoadList;
        maindiv.smlib_ShareForm_ListItemDiv = $.fn.smlib_listbuilder_create.smlib_ShareForm_ListItemDiv;
        maindiv.smlib_ShareForm_AddClick = $.fn.smlib_listbuilder_create.smlib_ShareForm_AddClick;
        maindiv.smlib_ShareForm_ListItemDeleteClick = $.fn.smlib_listbuilder_create.smlib_ShareForm_ListItemDeleteClick;
        maindiv.smlib_ShareForm_ListItemEmailClick = $.fn.smlib_listbuilder_create.smlib_ShareForm_ListItemEmailClick;
        maindiv.smlib_ShareForm_AddService = $.fn.smlib_listbuilder_create.smlib_ShareForm_AddService;
        maindiv.smlib_ShareForm_AddServiceResult = $.fn.smlib_listbuilder_create.smlib_ShareForm_AddServiceResult;
        maindiv.smlib_ShareForm_DeleteService = $.fn.smlib_listbuilder_create.smlib_ShareForm_DeleteService;
        maindiv.smlib_ShareForm_DeleteServiceResult = $.fn.smlib_listbuilder_create.smlib_ShareForm_DeleteServiceResult;
        maindiv.smlib_ShareForm_ListItemTypeChangeClick = $.fn.smlib_listbuilder_create.smlib_ShareForm_ListItemTypeChangeClick;
        maindiv.smlib_ShareForm_SearchUserClick = $.fn.smlib_listbuilder_create.smlib_ShareForm_SearchUserClick;
        $.fn.smlib_listbuilder_create.smlib_ShareForm_AssignControls(maindiv);
    }
    $.fn.smlib_listbuilder_create.smlib_ShareForm_AssignControls = function (maindiv) {
       
    }
    // #endregion

    // #region Global functions
    $.fn.smlib_listbuilder_create.smlib_ShareForm_InputFocus = function () {
        $('#' + this.smlibid + '_shareform_emailbox').focus();
    }
    // #endregion

    // #region load function
    $.fn.smlib_listbuilder_create.smlib_ShareForm_LoadList = function (list) {
        if (list==null)
        {
            list = this.focuslist;
        }
        $('#' + this.smlibid + '_shareform_contentdiv').html('');

        for (var i=0;i<list.shared.length;i++)
        {
            $('#' + this.smlibid + '_shareform_contentdiv').append(this.smlib_ShareForm_ListItemDiv(list.shared[i]))
        }

        $('#' + this.smlibid + '_shareform_emailbox').val('')
        this.smlib_ShareForm_InputFocus();
    }
    $.fn.smlib_listbuilder_create.smlib_ShareForm_ListItemDiv = function (emailitem) {                
        var subinnerhtml = "";
        subinnerhtml += '<div class="itemdiv">';
        subinnerhtml += '<h5>';
        //switch (emailitem.type.toUpperCase()) {
        //    case "READONLY":
        //        subinnerhtml += '&nbsp;&nbsp;<i class="fa fa-share-alt fa-fw"></i>';
        //        break;
        //    case "COLLABORATE":
        //        subinnerhtml += '&nbsp;&nbsp;<i class="fa fa-pencil-square-o fa-fw"></i>';
        //        break;
        //}       
        subinnerhtml += '<strong>' + emailitem.name + '</strong>&nbsp;&nbsp;';
        switch (emailitem.type.toUpperCase()) {
            case "READONLY":
                subinnerhtml += '<select style="width: 200px;display: inline-block;float:right;margin-right:50px;margin-top: 0px;" id="' + this.smlibid + '_buildlist_listtype' + emailitem.refid.replace(/\./g, '_') + '" onchange="' + this.smlib_AssignParentActions('smlib_ShareForm_ListItemTypeChangeClick(\'' + emailitem.refid + '\')') + '" class=""><option value="READONLY" selected>Static List</option><option value="COLLABORATE">Collaborative List</option></select>';
                break;
            case "COLLABORATE":
                subinnerhtml += '<select style="width: 200px;display: inline-block;float:right;margin-right:50px;margin-top: 0px;" id="' + this.smlibid + '_buildlist_listtype' + emailitem.refid.replace(/\./g, '_') + '" onchange="' + this.smlib_AssignParentActions('smlib_ShareForm_ListItemTypeChangeClick(\'' + emailitem.refid + '\')') + '" class=""><option value="READONLY">Static List</option><option value="COLLABORATE" selected>Collaborative List</option></select>';
                break;
        }
        //if (emailitem.refid == "")
        //{
        //    subinnerhtml += '&nbsp;&nbsp;<i class="fa fa-user-times fa-fw" style="width:auto;"></i>';
        //}
        //else
        //{
        //    subinnerhtml += '&nbsp;&nbsp;<i class="fa fa-user fa-fw" style="width:auto;"></i>';
        //}
        subinnerhtml += '<br/>&nbsp;&nbsp;&nbsp;&nbsp;' + emailitem.email + '';
        subinnerhtml += '&nbsp;&nbsp;<i class="fa fa-envelope fa-fw" role="button" onclick="' + this.smlib_AssignParentActions('smlib_ShareForm_ListItemEmailClick(\'' + emailitem.index + '\')') + '"></i>';
        subinnerhtml += '&nbsp;&nbsp;<i class="fa fa-trash fa-fw" role="button" onclick="' + this.smlib_AssignParentActions('smlib_ShareForm_ListItemDeleteClick(\'' + emailitem.index + '\')') + '"></i>';

        subinnerhtml += '</h5>';
        subinnerhtml += '</div>';
        return subinnerhtml;
    }
    // #endregion

    // #region click actions    
    $.fn.smlib_listbuilder_create.smlib_ShareForm_AddClick = function (index) {
        var email = $('#' + this.smlibid + '_shareform_emailbox').val();
        if (email == "") {
            alert("Please input an email address first.")
        }
        else {
         
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(email)) {
                this.smlib_ShareForm_AddService(email, $('#' + this.smlibid + '_shareform_typebox').val());
            }
            else
            {
                alert("Please input an validated email address.")
            }
        }
    }
    $.fn.smlib_listbuilder_create.smlib_ShareForm_SearchUserClick = function (index) {
        this.smlib_Content_LoadContent("PATRON_FORM");
    }
    $.fn.smlib_listbuilder_create.smlib_ShareForm_ListItemDeleteClick = function (index) {
        for (var i = 0; i < this.focuslist.shared.length; i++) {
            if (this.focuslist.shared[i].index == index) {
                this.smlib_ShareForm_DeleteService(this.focuslist.shared[i].email);
                return;
            }
        }        
    }
    $.fn.smlib_listbuilder_create.smlib_ShareForm_ListItemTypeChangeClick = function (refid) {
        this.smlibShowLoadingMask("Alter Shared Type...");
        $.ajax({
            parent: this,
            type: "POST",
            url: this.smlib_listbuilder_create_options.sharetypechangeservice,
            data: '{"listid": "' + this.focuslist.id + '", "refid": "' + refid + '", "type":"' + $('#' + this.smlibid + '_buildlist_listtype' + refid.replace(/\./g, '_')).val() + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (data) {
                try {                                       
                    for (var i = 0; i < this.parent.focuslist.shared.length; i++) {
                        if (this.parent.focuslist.shared[i].email.toUpperCase() == JSON.parse(data.d).email.toUpperCase()) {
                            this.parent.focuslist.shared[i].type = JSON.parse(data.d).type;
                        }
                    }
                    this.parent.smlibHideLoadingMask();
                } catch (err) { alert("Alter Share Type Fail " + err); this.parent.smlibHideLoadingMask(); }
            },
            failure: function (errMsg) {
                alert("Alter Share Type " + errMsg);
                this.parent.smlibHideLoadingMask();
            }
        });
    }    
    $.fn.smlib_listbuilder_create.smlib_ShareForm_ListItemEmailClick = function (index) {
        for (var i = 0; i < this.focuslist.shared.length; i++) {
            if (this.focuslist.shared[i].index == index) {
                this.smlibShowLoadingMask("Send email...");
                $.ajax({
                    parent: this,
                    type: "POST",
                    url: this.smlib_listbuilder_create_options.emailsharedemailservice,
                    data: '{"listid": "' + this.focuslist.id + '", "email": "' + this.focuslist.shared[i].email + '", "index":"' + this.focuslist.shared[i].index + '", "type":"' + this.focuslist.shared[i].type + '"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: true,
                    success: function (data) { try { this.parent.smlibHideLoadingMask(); } catch (err) { alert("Send Email Fail " + err); this.parent.smlibHideLoadingMask(); } },
                    failure: function (errMsg) {
                        alert("Send Email Fail " + errMsg);
                        this.parent.smlibHideLoadingMask();
                    }
                });
                return;
            }
        }
        
    }
    // #endregion

    // #region service
    $.fn.smlib_listbuilder_create.smlib_ShareForm_AddService = function (email,type) {
        var newemail = new $.fn.smlib_listbuilder_item();
        newemail.listid = this.focuslist.id;
        newemail.index = this.focuslist.shared.length+1;
        newemail.refid = '';
        newemail.name = 'No Name';
        newemail.email = email;
        newemail.image = '';
        newemail.type = type;
        newemail.msg = '';
        for (var i = 0; i < this.focuslist.shared.length; i++) {
            if (this.focuslist.shared[i].email.toUpperCase() == email.toUpperCase()) {
                alert("Email already in the list.")
                return;
            }
        }
        this.smlibShowLoadingMask("Add Shared With...");
        $.ajax({
            parent: this,
            type: "POST",
            url: this.smlib_listbuilder_create_options.savesharedemailservice,
            data: '{"listid": "' + this.focuslist.id + '", "email": "' + newemail.email + '", "index":"' + newemail.index + '", "type":"' + newemail.type + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (data) { try { this.parent.smlib_ShareForm_AddServiceResult(JSON.parse(data.d)); } catch (err) { alert("Save Item Fail " + err); } },
            failure: function (errMsg) {
                alert("Save Item Fail " + errMsg);
            }
        });              
    }
    $.fn.smlib_listbuilder_create.smlib_ShareForm_AddServiceResult = function (newemail) {
        if (newemail.msg != "") {
            alert(newemail.msg);
        }
        else {
            for (var i = 0; i < this.focuslist.shared.length; i++) {
                if (this.focuslist.shared[i].email.toUpperCase() == newemail.email.toUpperCase()) {
                    return;
                }
            }
            this.focuslist.shared[this.focuslist.shared.length] = newemail;
            this.smlib_BuilderList_GetListByID(this.focuslist.id, this.focuslist);
            this.smlib_ShareForm_LoadList();
        }
        this.smlibHideLoadingMask();
    }
    $.fn.smlib_listbuilder_create.smlib_ShareForm_DeleteService = function (email) {
        this.smlibShowLoadingMask("Delete Shared...");
        $.ajax({
            parent: this,
            type: "POST",
            url: this.smlib_listbuilder_create_options.deletesharedemailservice,
            data: '{"listid": "' + this.focuslist.id + '", "email": "' + email + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (data) { try { this.parent.smlib_ShareForm_DeleteServiceResult(JSON.parse(data.d)); } catch (err) { alert("Save Item Fail " + err); } },
            failure: function (errMsg) {
                alert("Save Item Fail " + errMsg);
            }
        });
    }
    $.fn.smlib_listbuilder_create.smlib_ShareForm_DeleteServiceResult = function (newemail) {
        if (newemail.msg != "") {
            alert(newemail.msg);
        }
        else {
            var temllist = this.focuslist.shared;
            this.focuslist.shared = [];
            for (var i = 0; i < temllist.length; i++) {
                if (temllist[i].email != newemail.email) {
                    this.focuslist.shared[this.focuslist.shared.length] = temllist[i];
                }
            }
            this.smlib_BuilderList_GetListByID(this.focuslist.id, this.focuslist);
            this.smlib_ShareForm_LoadList();
        }
        this.smlibHideLoadingMask();
    }
    // #endregion

}(jQuery));