(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_BookForm_InnerHTML = function (smlibid, smlib_listbuilder_create_options) {
        var innerhtml = '';        
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_bookform_headerdiv" ';
        innerhtml += 'class="header form"';
        innerhtml += '>';
        innerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        innerhtml += '<input class="form-control" placeholder="Keywrods in Catalogue Title" id="' + smlibid + '_bookform_searchbox" onchange="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_BookForm_SearchClick()', smlibid) + '">';
        innerhtml += '<span class="input-group-addon" role="button"  ><i id="' + smlibid + '_bookform_searchbtn" class="fa fa-search fa-fw" style="width:auto;" ></i></span>';
        innerhtml += '</div>';
        innerhtml += '</div>';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_bookform_contentdiv" ';
        innerhtml += 'class="content form" style="height:' + (smlib_listbuilder_create_options.height - 100) + 'px;min-height:' + (smlib_listbuilder_create_options.height - 100) + 'px;max-height:' + (smlib_listbuilder_create_options.height - 100) + 'px"';
        innerhtml += '>';      
        innerhtml += '</div>';      
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_BookForm_AssignFunctions = function (maindiv) {
        maindiv.smlib_BookForm_ShowLoading = $.fn.smlib_listbuilder_create.smlib_BookForm_ShowLoading;
        maindiv.smlib_BookForm_HideLoading = $.fn.smlib_listbuilder_create.smlib_BookForm_HideLoading;
        maindiv.smlib_BookForm_InputFocus = $.fn.smlib_listbuilder_create.smlib_BookForm_InputFocus;
        maindiv.smlib_BookForm_SearchClick = $.fn.smlib_listbuilder_create.smlib_BookForm_SearchClick;
        maindiv.smlib_BookForm_SearchService = $.fn.smlib_listbuilder_create.smlib_BookForm_SearchService;
        maindiv.smlib_BookForm_SearchServiceResult = $.fn.smlib_listbuilder_create.smlib_BookForm_SearchServiceResult;
        maindiv.smlib_BookForm_ListItemClick = $.fn.smlib_listbuilder_create.smlib_BookForm_ListItemClick;
        maindiv.smlib_BookForm_LoadMoreClick = $.fn.smlib_listbuilder_create.smlib_BookForm_LoadMoreClick;
        $.fn.smlib_listbuilder_create.smlib_BookForm_AssignControls(maindiv);
    }
    $.fn.smlib_listbuilder_create.smlib_BookForm_AssignControls = function (maindiv) {
        maindiv.bookkeyword = "";
        maindiv.bookpagenumber = 1;
        maindiv.bookresultset = [];
    }
    // #endregion

    // #region Global functions
    $.fn.smlib_listbuilder_create.smlib_BookForm_ShowLoading = function () {
        this.smlibShowLoadingMask("Searching Catalogue...");
        $('#' + this.smlibid + '_bookform_searchbtn').removeClass('fa-search');
        $('#' + this.smlibid + '_bookform_searchbtn').removeClass('fa-fw');
        $('#' + this.smlibid + '_bookform_searchbtn').addClass('fa-spinner');
        $('#' + this.smlibid + '_bookform_searchbtn').addClass('fa-spin');        
    }
    $.fn.smlib_listbuilder_create.smlib_BookForm_HideLoading = function () {
        $('#' + this.smlibid + '_bookform_searchbtn').removeClass('fa-spinner');
        $('#' + this.smlibid + '_bookform_searchbtn').removeClass('fa-spin');
        $('#' + this.smlibid + '_bookform_searchbtn').addClass('fa-search');
        $('#' + this.smlibid + '_bookform_searchbtn').addClass('fa-fw');
        this.smlibHideLoadingMask();
    }
    $.fn.smlib_listbuilder_create.smlib_BookForm_InputFocus = function () {
        $('#' + this.smlibid + '_bookform_searchbox').focus();
    }
    // #endregion

    // #region click actions    
    $.fn.smlib_listbuilder_create.smlib_BookForm_SearchClick = function () {
        var keyword = $('#' + this.smlibid + '_bookform_searchbox').val();
        if (keyword == "") {
            alert("Please input a search keyword first.")
        }
        else {
            this.bookpagenumber = 1;
            this.smlib_BookForm_SearchService(keyword,1,true);
        }
    }
    $.fn.smlib_listbuilder_create.smlib_BookForm_ListItemClick = function (index) {
        var newitem = new $.fn.smlib_listbuilder_item();
        newitem.id = '';
        newitem.title = this.bookresultset[index].title;
        newitem.desc = this.bookresultset[index].description;
        newitem.index = this.focuslist.item.length+1;
        newitem.type = 'CATALOGUE';
        newitem.refid = this.bookresultset[index].bookid;
        newitem.url = this.smlib_listbuilder_create_options.titleroot + this.bookresultset[index].bookid;
        newitem.creator = '';
        newitem.creation = '';
        newitem.itemcover = this.bookresultset[index].coverurl;
        newitem.itemlogo = '';
        newitem.msg = '';
        this.smlib_ItemList_ListItemSaveService(newitem);        
    }
    $.fn.smlib_listbuilder_create.smlib_BookForm_LoadMoreClick = function () {
        this.bookpagenumber++;
        this.smlib_BookForm_SearchService(this.bookkeyword, this.bookpagenumber,true);
    }
    // #endregion

    // #region service
    $.fn.smlib_listbuilder_create.smlib_BookForm_SearchService = function (keyword, pagenumber,loadmore) {
        this.smlib_BookForm_ShowLoading();
        if (loadmore == null) {
            loadmore = false;
        }
        if ((pagenumber == null) || (pagenumber == 1)) {
            pagenumber = 1;
            $('#' + this.smlibid + '_bookform_contentdiv').html('');
            this.bookresultset = [];
        }
        this.bookkeyword = keyword;        
        $.ajax({
            parent: this,
            loadmore:loadmore,
            type: "POST",
            url: this.smlib_listbuilder_create_options.booksearchservice,
            data: '{"Keyword": "' + keyword + '", "Count": ' + this.smlib_listbuilder_create_options.maxsearchresult + ', "Page": ' + pagenumber + ', "OrderBy": "TITLERELEVANT", "OrderByDirection": "ASC"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,            
            success: function (data) { try { this.parent.smlib_BookForm_SearchServiceResult(JSON.parse(data.d), this.loadmore); } catch (err) { $('#' + this.parent.smlibid + '_bookform_contentdiv').html("Search Book Fail " + err); } },
            failure: function (errMsg) {
                $('#' + this.parent.smlibid + '_bookform_contentdiv').html("Search Book Fail " + errMsg);
            }
        });
    }
    $.fn.smlib_listbuilder_create.smlib_BookForm_SearchServiceResult = function (result, loadmore) {
        this.smlib_BookForm_HideLoading();        
        $('#' + this.smlibid + '_bookform_loadmore').remove();
        for (var i = 0; i < result.item.length; i++) {
            var subinnerhtml = "";
            subinnerhtml += '<div class="itemdiv">';
            subinnerhtml += '<h5>';
            subinnerhtml += '<a href="' + this.smlib_listbuilder_create_options.titleroot + result.item[i].bookid + '" target="_blank">';
            subinnerhtml += '<strong>' + result.item[i].title + '</strong>';
            subinnerhtml += '</a>';
            subinnerhtml += '</h5>';
            subinnerhtml += '<div style="width:100%;display:inline-block;">';
            subinnerhtml += '<div class="cover">';
            if (result.item[i].coverurl != "") {
                subinnerhtml += '<img src="' + result.item[i].coverurl + '" alt="No Cover"   style="width:100%;min-width:100%;max-width:100%;"/>';
            }
            else
            {
                subinnerhtml += '<img src="' + this.smlib_listbuilder_create_options.webroot + 'Cover/NoCover.jpg" alt="No Cover"   style="width:100%;min-width:100%;max-width:100%;"/>';
            }
            subinnerhtml += '<br/><i class="fa fa-plus fa-fw" onclick="' + this.smlib_AssignParentActions('smlib_BookForm_ListItemClick(' + this.bookresultset.length + ')') + '"></i>';
            subinnerhtml += '</div>';
            subinnerhtml += '<div class="halfdetil"><h5>';
            subinnerhtml += result.item[i].description;
            subinnerhtml += '</h5><h5>';
            subinnerhtml += '</h5></div>';
            subinnerhtml += '</div>';
            subinnerhtml += '</div>';
            this.bookresultset[this.bookresultset.length] = result.item[i];
            $('#' + this.smlibid + '_bookform_contentdiv').append(subinnerhtml);
        }
        if (loadmore) {
            var subinnerhtml = "";
            subinnerhtml += '<div id="' + this.smlibid + '_bookform_loadmore"  class="itemdiv" style="margin-left:0px;margin-bottom:10px;text-align:center" onclick="' + this.smlib_AssignParentActions('smlib_BookForm_LoadMoreClick()') + '">';
            subinnerhtml += '<h4 role="button" class="btn btn-primary" style="width:80%;">';
            subinnerhtml += 'Load More';
            subinnerhtml += '</h4>';
            subinnerhtml += '</div>';
            $('#' + this.smlibid + '_bookform_contentdiv').append(subinnerhtml);
        }
    }
    // #endregion

}(jQuery));