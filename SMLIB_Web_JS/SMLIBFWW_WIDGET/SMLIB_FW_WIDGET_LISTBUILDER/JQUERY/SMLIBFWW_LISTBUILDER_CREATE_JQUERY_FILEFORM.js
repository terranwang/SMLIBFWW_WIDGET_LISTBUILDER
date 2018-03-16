(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_FileForm_InnerHTML = function (smlibid, smlib_listbuilder_create_options) {
        var innerhtml = '';        
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_fileform_headerdiv" ';
        innerhtml += 'class="header form"';
        innerhtml += '>';
        innerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        innerhtml += '<input class="form-control" placeholder="Keywrods in File Name" id="' + smlibid + '_fileform_searchbox" onchange="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_FileForm_SearchClick()', smlibid) + '">';
        innerhtml += '<span class="input-group-addon" role="button"  ><i id="' + smlibid + '_fileform_searchbtn" class="fa fa-search fa-fw" style="width:auto;" ></i></span>';
        innerhtml += '</div>';
        innerhtml += '</div>';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_fileform_contentdiv" ';
        innerhtml += 'class="content form" style="height:' + (smlib_listbuilder_create_options.height - 100) + 'px;min-height:' + (smlib_listbuilder_create_options.height - 100) + 'px;max-height:' + (smlib_listbuilder_create_options.height - 100) + 'px"';
        innerhtml += '>';      
        innerhtml += '</div>';      
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_FileForm_AssignFunctions = function (maindiv) {
        maindiv.smlib_FileForm_ShowLoading = $.fn.smlib_listbuilder_create.smlib_FileForm_ShowLoading;
        maindiv.smlib_FileForm_HideLoading = $.fn.smlib_listbuilder_create.smlib_FileForm_HideLoading;
        maindiv.smlib_FileForm_InputFocus = $.fn.smlib_listbuilder_create.smlib_FileForm_InputFocus;
        maindiv.smlib_FileForm_SearchClick = $.fn.smlib_listbuilder_create.smlib_FileForm_SearchClick;
        maindiv.smlib_FileForm_SearchService = $.fn.smlib_listbuilder_create.smlib_FileForm_SearchService;
        maindiv.smlib_FileForm_SearchServiceResult = $.fn.smlib_listbuilder_create.smlib_FileForm_SearchServiceResult;
        maindiv.smlib_FileForm_ListItemClick = $.fn.smlib_listbuilder_create.smlib_FileForm_ListItemClick;
        maindiv.smlib_FileForm_LoadMoreClick = $.fn.smlib_listbuilder_create.smlib_FileForm_LoadMoreClick;
        $.fn.smlib_listbuilder_create.smlib_FileForm_AssignControls(maindiv);
    }
    $.fn.smlib_listbuilder_create.smlib_FileForm_AssignControls = function (maindiv) {
        maindiv.filekeyword = "";
        maindiv.filepagenumber = 1;
        maindiv.fileresultset = [];
    }
    // #endregion

    // #region Global functions
    $.fn.smlib_listbuilder_create.smlib_FileForm_ShowLoading = function () {
        this.smlibShowLoadingMask("Searching Files...");
        $('#' + this.smlibid + '_fileform_searchbtn').removeClass('fa-search');
        $('#' + this.smlibid + '_fileform_searchbtn').removeClass('fa-fw');
        $('#' + this.smlibid + '_fileform_searchbtn').addClass('fa-spinner');
        $('#' + this.smlibid + '_fileform_searchbtn').addClass('fa-spin');
    }
    $.fn.smlib_listbuilder_create.smlib_FileForm_HideLoading = function () {
        $('#' + this.smlibid + '_fileform_searchbtn').removeClass('fa-spinner');
        $('#' + this.smlibid + '_fileform_searchbtn').removeClass('fa-spin');
        $('#' + this.smlibid + '_fileform_searchbtn').addClass('fa-search');
        $('#' + this.smlibid + '_fileform_searchbtn').addClass('fa-fw');
        this.smlibHideLoadingMask();
    }
    $.fn.smlib_listbuilder_create.smlib_FileForm_InputFocus = function () {
        $('#' + this.smlibid + '_fileform_searchbox').focus();
    }
    // #endregion

    // #region click actions    
    $.fn.smlib_listbuilder_create.smlib_FileForm_SearchClick = function () {
        var keyword = $('#' + this.smlibid + '_fileform_searchbox').val();
        if (keyword == "") {
            alert("Please input a search keyword first.")
        }
        else {
            this.filepagenumber = 1;
            this.smlib_FileForm_SearchService(keyword);
        }
    }
    $.fn.smlib_listbuilder_create.smlib_FileForm_ListItemClick = function (index) {
        var newitem = new $.fn.smlib_listbuilder_item();
        newitem.id = '';
        newitem.title = this.fileresultset[index].name;
        newitem.desc = this.fileresultset[index].description;
        newitem.index = this.focuslist.item.length+1;
        newitem.type = 'FILE';
        newitem.refid = this.fileresultset[index].fileid;
        newitem.url = this.fileresultset[index].url;
        newitem.creator = '';
        newitem.creation = '';
        newitem.itemcover = '';
        newitem.itemlogo = '';
        newitem.msg = '';
        this.smlib_ItemList_ListItemSaveService(newitem);
    }
    $.fn.smlib_listbuilder_create.smlib_FileForm_LoadMoreClick = function () {
        this.filepagenumber++;
        this.smlib_FileForm_SearchService(this.filekeyword, this.filepagenumber);
    }
    // #endregion

    // #region service
    $.fn.smlib_listbuilder_create.smlib_FileForm_SearchService = function (keyword, pagenumber) {
        this.smlib_FileForm_ShowLoading();

        if ((pagenumber == null) || (pagenumber == 1)) {
            pagenumber = 1;
            $('#' + this.smlibid + '_fileform_contentdiv').html('');
            this.fileresultset = [];
        }
        this.filekeyword = keyword;
        $.ajax({
            parent: this,
            type: "POST",
            url: this.smlib_listbuilder_create_options.filesearchservice,
            data: '{"Keyword": "' + keyword + '", "Count": ' + this.smlib_listbuilder_create_options.maxsearchresult + ', "Page": ' + pagenumber + '}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (data) { try { this.parent.smlib_FileForm_SearchServiceResult(JSON.parse(data.d)); } catch (err) { $('#' + this.parent.smlibid + '_fileform_contentdiv').html("Search File Fail " + err); } },
            failure: function (errMsg) {
                $('#' + this.parent.smlibid + '_fileform_contentdiv').html("Search File Fail " + errMsg);
            }
        });
    }
    $.fn.smlib_listbuilder_create.smlib_FileForm_SearchServiceResult = function (result) {
        this.smlib_FileForm_HideLoading();
        $('#' + this.smlibid + '_fileform_loadmore').remove();
        for (var i = 0; i < result.item.length; i++) {
            var subinnerhtml = "";
            subinnerhtml += '<div class="itemdiv">';
            subinnerhtml += '<h5>';
            subinnerhtml += '<a href="' + result.item[i].url + '" target="_blank">';
            subinnerhtml += '<strong>' + result.item[i].name + '</strong>';
            subinnerhtml += '</a>';
            subinnerhtml += '</h5>';
            subinnerhtml += '<div style="width:100%;display:inline-block;">';
            subinnerhtml += '<div class="cover">';            
            subinnerhtml += '<i class="fa fa-plus fa-fw" onclick="' + this.smlib_AssignParentActions('smlib_FileForm_ListItemClick(' + this.fileresultset.length + ')') + '"></i><br/>';
            subinnerhtml += '</div>';
            subinnerhtml += '<div class="halfdetil"><h5>';
            subinnerhtml += result.item[i].description;
            subinnerhtml += '</h5><h5>';
            subinnerhtml += '</h5></div>';
            subinnerhtml += '</div>';
            subinnerhtml += '</div>';
            this.fileresultset[this.fileresultset.length] = result.item[i];
            $('#' + this.smlibid + '_fileform_contentdiv').append(subinnerhtml);
        }
        var subinnerhtml = "";
        subinnerhtml += '<div id="' + this.smlibid + '_fileform_loadmore"  class="itemdiv" style="margin-left:0px;margin-bottom:10px;text-align:center" onclick="' + this.smlib_AssignParentActions('smlib_FileForm_LoadMoreClick()') + '">';
        subinnerhtml += '<h4 role="button" class="btn btn-primary" style="width:80%;">';
        subinnerhtml += 'Load More';
        subinnerhtml += '</h4>';
        subinnerhtml += '</div>';
        $('#' + this.smlibid + '_fileform_contentdiv').append(subinnerhtml);
    }
    // #endregion
}(jQuery));