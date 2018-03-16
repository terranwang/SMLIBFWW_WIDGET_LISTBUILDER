(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_PatronForm_InnerHTML = function (smlibid, smlib_listbuilder_create_options) {
        var innerhtml = '';        
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_patronform_headerdiv" ';
        innerhtml += 'class="header form"';
        innerhtml += '>';
        innerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        innerhtml += '<span class="input-group-addon" ><input class="smlibpatronformitemcheckallbox" type="checkbox" onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_PatronForm_CheckAllClick()', smlibid) + '" /></span>';
        innerhtml += '<input class="form-control" placeholder="Keywrods in Patron" id="' + smlibid + '_patronform_searchbox" onchange="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_PatronForm_SearchClick()', smlibid) + '">';
        innerhtml += '<select style="width:100%;" class="form-control"  id="' + smlibid + '_patronform_typebox" >';
        innerhtml += '<option value="READONLY">Static List</option>';
        innerhtml += '<option value="COLLABORATE">Collaborative List</option>';
        innerhtml += '</select>';
        innerhtml += '<span class="input-group-addon" role="button"  ><i id="' + smlibid + '_patronform_searchbtn" class="fa fa-search fa-fw" style="width:auto;" ></i></span>';
        innerhtml += '<span class="input-group-addon" role="button"  ><i id="' + smlibid + '_patronform_addbtn" class="fa fa-plus fa-fw" style="width:auto;" onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_PatronForm_AddSelectedClick(0)', smlibid) + '">&nbsp;Add Selected</i></span>';
        innerhtml += '</div>';
        innerhtml += '</div>';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_patronform_contentdiv" ';
        innerhtml += 'class="content form" style="top: 80px;height:' + (smlib_listbuilder_create_options.height - 150) + 'px;min-height:' + (smlib_listbuilder_create_options.height - 150) + 'px;max-height:' + (smlib_listbuilder_create_options.height - 150) + 'px"';
        innerhtml += '>';      
        innerhtml += '</div>';      
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_PatronForm_AssignFunctions = function (maindiv) {
        maindiv.smlib_PatronForm_ShowLoading = $.fn.smlib_listbuilder_create.smlib_PatronForm_ShowLoading;
        maindiv.smlib_PatronForm_HideLoading = $.fn.smlib_listbuilder_create.smlib_PatronForm_HideLoading;
        maindiv.smlib_PatronForm_InputFocus = $.fn.smlib_listbuilder_create.smlib_PatronForm_InputFocus;
        maindiv.smlib_PatronForm_SearchClick = $.fn.smlib_listbuilder_create.smlib_PatronForm_SearchClick;
        maindiv.smlib_PatronForm_SearchService = $.fn.smlib_listbuilder_create.smlib_PatronForm_SearchService;
        maindiv.smlib_PatronForm_SearchServiceResult = $.fn.smlib_listbuilder_create.smlib_PatronForm_SearchServiceResult;
        maindiv.smlib_PatronForm_AddSelectedClick = $.fn.smlib_listbuilder_create.smlib_PatronForm_AddSelectedClick;
        maindiv.smlib_PatronForm_LoadMoreClick = $.fn.smlib_listbuilder_create.smlib_PatronForm_LoadMoreClick;
        maindiv.smlib_PatronForm_CheckAllClick = $.fn.smlib_listbuilder_create.smlib_PatronForm_CheckAllClick;
        $.fn.smlib_listbuilder_create.smlib_PatronForm_AssignControls(maindiv);
    }
    $.fn.smlib_listbuilder_create.smlib_PatronForm_AssignControls = function (maindiv) {
        maindiv.patronkeyword = "";
        maindiv.patronpagenumber = 1;
        maindiv.patronresultset = [];
    }
    // #endregion

    // #region Global functions
    $.fn.smlib_listbuilder_create.smlib_PatronForm_ShowLoading = function () {
        this.smlibShowLoadingMask("Searching Patron...");
        $('#' + this.smlibid + '_patronform_searchbtn').removeClass('fa-search');
        $('#' + this.smlibid + '_patronform_searchbtn').removeClass('fa-fw');
        $('#' + this.smlibid + '_patronform_searchbtn').addClass('fa-spinner');
        $('#' + this.smlibid + '_patronform_searchbtn').addClass('fa-spin');
    }
    $.fn.smlib_listbuilder_create.smlib_PatronForm_HideLoading = function () {
        $('#' + this.smlibid + '_patronform_searchbtn').removeClass('fa-spinner');
        $('#' + this.smlibid + '_patronform_searchbtn').removeClass('fa-spin');
        $('#' + this.smlibid + '_patronform_searchbtn').addClass('fa-search');
        $('#' + this.smlibid + '_patronform_searchbtn').addClass('fa-fw');
        this.smlibHideLoadingMask();
    }
    $.fn.smlib_listbuilder_create.smlib_PatronForm_InputFocus = function () {
        $('#' + this.smlibid + '_patronform_searchbox').focus();
    }
    // #endregion

    // #region click actions    
    $.fn.smlib_listbuilder_create.smlib_PatronForm_SearchClick = function () {
        var keyword = $('#' + this.smlibid + '_patronform_searchbox').val();
        if (keyword == "") {
            alert("Please input a search keyword first.")
        }
        else {
            this.patronpagenumber = 1;
            this.smlib_PatronForm_SearchService(keyword, 1, true);
        }
    }
    $.fn.smlib_listbuilder_create.smlib_PatronForm_CheckAllClick = function () {

        if ($('.smlibpatronformitemcheckallbox')[0].checked)
        {
            for (var i = 0; i < $('.smlibpatronformitemcheckbox').length; i++)
            {
                $('.smlibpatronformitemcheckbox')[i].checked=true;
            }            
        }
        else
        {
            for (var i = 0; i < $('.smlibpatronformitemcheckbox').length; i++) {
                $('.smlibpatronformitemcheckbox')[i].checked = false;
            }
        }
    }    
    $.fn.smlib_listbuilder_create.smlib_PatronForm_AddSelectedClick = function (index) {
        
        if (index < $('.smlibpatronformitemcheckbox').length)
        {           
            var emailstr = $('.smlibpatronformitemcheckbox')[index].getAttribute('email');
        
            if (emailstr!="")
            {

                if ($('.smlibpatronformitemcheckbox')[index].checked)
                {
                    var flag = true;
                   
                    for (var iii = 0; iii < this.focuslist.shared.length; iii++)
                    {
                        if (this.focuslist.shared[iii].email.toUpperCase()==emailstr.toUpperCase())
                        {                           
                            flag = false;
                            break;
                        }
                    }                   
                    if (flag) {
                        this.smlibShowLoadingMask("Add Patron " + emailstr + "...");
                        $.ajax({
                            parent: this,
                            parentindex: index,
                            type: "POST",
                            url: this.smlib_listbuilder_create_options.savesharedemailservice,
                            data: '{"listid": "' + this.focuslist.id + '", "email": "' + emailstr + '", "index":"' + (this.focuslist.shared.length + 1) + '", "type":"' + $('#' + this.smlibid + '_patronform_typebox').val() + '"}',
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            async: false,
                            success: function (data) { try { this.parent.focuslist.shared[this.parent.focuslist.shared.length] = JSON.parse(data.d); this.parent.smlib_PatronForm_AddSelectedClick(this.parentindex + 1); } catch (err) {this.parent.smlib_PatronForm_AddSelectedClick(this.parentindex + 1); } },
                            failure: function (errMsg) {
                                this.parent.smlib_PatronForm_AddSelectedClick(this.parentindex + 1);
                            }
                        });
                    }
                    else
                    {
                        this.smlib_PatronForm_AddSelectedClick(index + 1);
                    }
                }
                else
                {
                    var flag = false;
                    for (var iii = 0; iii < this.focuslist.shared.length; iii++) {
                        if (this.focuslist.shared[iii].email.toUpperCase() === emailstr.toUpperCase()) {
                            flag = true;
                            break;
                        }
                    }
                    if (flag) {
                        this.smlibShowLoadingMask("Remove Patron " + emailstr + "...");
                        $.ajax({
                            parent: this,
                            parentindex: index,
                            type: "POST",
                            url: this.smlib_listbuilder_create_options.deletesharedemailservice,
                            data: '{"listid": "' + this.focuslist.id + '", "email": "' + emailstr + '"}',
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            async: false,
                            success: function (data) {
                                try {
                                    var temllist = this.parent.focuslist.shared;
                                    this.parent.focuslist.shared = [];
                                    for (var i = 0; i < temllist.length; i++) {
                                        if (temllist[i].email.toUpperCase() != JSON.parse(data.d).email.toUpperCase()) {
                                            this.parent.focuslist.shared[this.parent.focuslist.shared.length] = temllist[i];
                                        }
                                    }
                                    this.parent.smlib_PatronForm_AddSelectedClick(this.parentindex + 1);
                                } catch (err) { this.parent.smlib_PatronForm_AddSelectedClick(this.parentindex + 1); }
                            },
                            failure: function (errMsg) {
                                this.parent.smlib_PatronForm_AddSelectedClick(this.parentindex + 1);
                            }
                        });
                    }
                    else
                    {
                        this.smlib_PatronForm_AddSelectedClick(index + 1);
                    }
                }
            }
            else
            {
                this.smlib_PatronForm_AddSelectedClick(index + 1);
            }
        }
        else
        {
            this.smlib_BuilderList_GetListByID(this.focuslist.id, this.focuslist);
            this.smlib_ShareForm_LoadList();
            this.smlibHideLoadingMask();
        }              
    }
    $.fn.smlib_listbuilder_create.smlib_PatronForm_LoadMoreClick = function () {
        this.patronpagenumber++;
        this.smlib_PatronForm_SearchService(this.patronkeyword, this.patronpagenumber, true);
    }
    // #endregion

    // #region service
    $.fn.smlib_listbuilder_create.smlib_PatronForm_SearchService = function (keyword, pagenumber, loadmore) {
        this.smlib_PatronForm_ShowLoading();
        if (loadmore == null) {
            loadmore = false;
        }
        if ((pagenumber == null) || (pagenumber == 1)) {
            pagenumber = 1;
            $('#' + this.smlibid + '_patronform_contentdiv').html('');
            this.patronresultset = [];
        }
        this.patronkeyword = keyword;
        $.ajax({
            parent: this,
            loadmore:loadmore,
            type: "POST",
            url: this.smlib_listbuilder_create_options.patronsearchservice,
            data: '{"Keyword": "' + keyword + '", "Count": ' + this.smlib_listbuilder_create_options.maxsearchresult + ', "Page": ' + pagenumber + ', "OrderBy": "FULLNAME", "OrderByDirection": "ASC"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,            
            success: function (data) { try { this.parent.smlib_PatronForm_SearchServiceResult(JSON.parse(data.d), this.loadmore); } catch (err) { $('#' + this.parent.smlibid + '_patronform_contentdiv').html("Search patron Fail " + err); } },
            failure: function (errMsg) {
                $('#' + this.parent.smlibid + '_patronform_contentdiv').html("Search patron Fail " + errMsg);
            }
        });
    }
    $.fn.smlib_listbuilder_create.smlib_PatronForm_SearchServiceResult = function (result, loadmore) {
        this.smlib_PatronForm_HideLoading();
        $('#' + this.smlibid + '_patronform_loadmore').remove();
        for (var i = 0; i < result.item.length; i++) {
            var subinnerhtml = "";
            subinnerhtml += '<div class="itemdiv">';
            subinnerhtml += '<h5>';           
            subinnerhtml += '<strong>' + result.item[i].fullname + '</strong>';        
            subinnerhtml += '</h5>';
            subinnerhtml += '<div style="width:100%;display:inline-block;">';
            subinnerhtml += '<div class="cover">';
            if (result.item[i].photourl != "") {
                subinnerhtml += '<img src="' + result.item[i].photourl + '" alt="No Photo"   style="width:100%;min-width:100%;max-width:100%;"/>';
            }
            else
            {
                subinnerhtml += '<img src="' + this.smlib_listbuilder_create_options.webroot + 'PatronPic/noImage.jpg" alt="No Photo"   style="width:100%;min-width:100%;max-width:100%;"/>';
            }
            if (result.item[i].email == "") {
                subinnerhtml += '<br/><h5>No Email</h5>';
            }
            else
            {
                var flag = false;
                for (var iii = 0; iii < this.focuslist.shared.length; iii++) {
                    if (this.focuslist.shared[iii].email.toUpperCase() == result.item[i].email.toUpperCase()) {
                        flag = true;
                        break;
                    }
                }
                if (flag) {
                    subinnerhtml += '<br/><input class="smlibpatronformitemcheckbox" type="checkbox" checked patronid="' + result.item[i].patronid + '" email="' + result.item[i].email + '"/>';
                }
                else {
                    subinnerhtml += '<br/><input class="smlibpatronformitemcheckbox" type="checkbox" patronid="' + result.item[i].patronid + '" email="' + result.item[i].email + '"/>';
                }
            }
            subinnerhtml += '</div>';
            subinnerhtml += '<div class="halfdetil"><h5>';
            if (result.item[i].email != "") {
                subinnerhtml += result.item[i].email;
            }
            else
            {
                subinnerhtml += 'No Email';
            }
            subinnerhtml += '</h5><h5>';
            subinnerhtml += 'Classgrade: ' + result.item[i].classgrade + "</h5><h5>Home Room: " + result.item[i].homeroom;
            subinnerhtml += '</h5></div>';
            subinnerhtml += '</div>';
            subinnerhtml += '</div>';
            this.patronresultset[this.patronresultset.length] = result.item[i];
            $('#' + this.smlibid + '_patronform_contentdiv').append(subinnerhtml);
        }
        if (loadmore) {
            var subinnerhtml = "";
            subinnerhtml += '<div id="' + this.smlibid + '_patronform_loadmore"  class="itemdiv" style="margin-left:0px;margin-bottom:10px;text-align:center" onclick="' + this.smlib_AssignParentActions('smlib_PatronForm_LoadMoreClick()') + '">';
            subinnerhtml += '<h4 role="button" class="btn btn-primary" style="width:80%;">';
            subinnerhtml += 'Load More';
            subinnerhtml += '</h4>';
            subinnerhtml += '</div>';
            $('#' + this.smlibid + '_patronform_contentdiv').append(subinnerhtml);
        }
    }
    // #endregion

}(jQuery));