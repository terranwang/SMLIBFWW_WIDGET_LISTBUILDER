(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_YouTubeForm_InnerHTML = function (smlibid, smlib_listbuilder_create_options) {
        var innerhtml = '';        
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_youtubeform_headerdiv" ';
        innerhtml += 'class="header form"';
        innerhtml += '>';
        innerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        innerhtml += '<input class="form-control" placeholder="Keywrods in YouTube" id="' + smlibid + '_youtubeform_searchbox" onchange="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_YouTubeForm_SearchClick()', smlibid) + '">';
        innerhtml += '<span class="input-group-addon" role="button"  ><i id="' + smlibid + '_youtubeform_searchbtn" class="fa fa-search fa-fw" style="width:auto;"></i></span>';
        innerhtml += '</div>';
        innerhtml += '</div>';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_youtubeform_contentdiv" ';
        innerhtml += 'class="content form" style="height:' + (smlib_listbuilder_create_options.height - 100) + 'px;min-height:' + (smlib_listbuilder_create_options.height - 100) + 'px;max-height:' + (smlib_listbuilder_create_options.height - 100) + 'px"';
        innerhtml += '>';      
        innerhtml += '</div>';      
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_YouTubeForm_AssignFunctions = function (maindiv) {
        maindiv.smlib_YouTubeForm_ShowLoading = $.fn.smlib_listbuilder_create.smlib_YouTubeForm_ShowLoading;
        maindiv.smlib_YouTubeForm_HideLoading = $.fn.smlib_listbuilder_create.smlib_YouTubeForm_HideLoading;
        maindiv.smlib_YouTubeForm_InputFocus = $.fn.smlib_listbuilder_create.smlib_YouTubeForm_InputFocus;
        maindiv.smlib_YouTubeForm_SearchClick = $.fn.smlib_listbuilder_create.smlib_YouTubeForm_SearchClick;
        maindiv.smlib_YouTubeForm_SearchService = $.fn.smlib_listbuilder_create.smlib_YouTubeForm_SearchService;
        maindiv.smlib_YouTubeForm_SearchServiceResult = $.fn.smlib_listbuilder_create.smlib_YouTubeForm_SearchServiceResult;
        maindiv.smlib_YouTubeForm_ListItemClick = $.fn.smlib_listbuilder_create.smlib_YouTubeForm_ListItemClick;
        maindiv.smlib_YouTubeForm_LoadMoreClick = $.fn.smlib_listbuilder_create.smlib_YouTubeForm_LoadMoreClick;        
        $.fn.smlib_listbuilder_create.smlib_YouTubeForm_AssignControls(maindiv);
    }
    $.fn.smlib_listbuilder_create.smlib_YouTubeForm_AssignControls = function (maindiv) {
        maindiv.youtubekeyword = "";
        maindiv.youtubenextpagetoke = "";
        maindiv.youtubeprepagetoke = "";
        maindiv.youtuberesultset=[];
    }
    // #endregion

    // #region Global functions
    $.fn.smlib_listbuilder_create.smlib_YouTubeForm_ShowLoading = function ()
    {
        this.smlibShowLoadingMask("Searching YouTube...");
        $('#' + this.smlibid + '_youtubeform_searchbtn').removeClass('fa-search');
        $('#' + this.smlibid + '_youtubeform_searchbtn').removeClass('fa-fw');
        $('#' + this.smlibid + '_youtubeform_searchbtn').addClass('fa-spinner');
        $('#' + this.smlibid + '_youtubeform_searchbtn').addClass('fa-spin');
       
    }
    $.fn.smlib_listbuilder_create.smlib_YouTubeForm_HideLoading = function () {
        $('#' + this.smlibid + '_youtubeform_searchbtn').removeClass('fa-spinner');
        $('#' + this.smlibid + '_youtubeform_searchbtn').removeClass('fa-spin');
        $('#' + this.smlibid + '_youtubeform_searchbtn').addClass('fa-search');
        $('#' + this.smlibid + '_youtubeform_searchbtn').addClass('fa-fw');
        this.smlibHideLoadingMask();
    }
    $.fn.smlib_listbuilder_create.smlib_YouTubeForm_InputFocus = function () {
        $('#' + this.smlibid + '_youtubeform_searchbox').focus();
    }
    // #endregion

    // #region click actions    
    $.fn.smlib_listbuilder_create.smlib_YouTubeForm_SearchClick = function () {
        var keyword = $('#' + this.smlibid + '_youtubeform_searchbox').val();
        if (keyword=="")
        {
            alert("Please input a search keyword first.")
        }
        else
        {
            this.smlib_YouTubeForm_SearchService(keyword);
        }
    }
    $.fn.smlib_listbuilder_create.smlib_YouTubeForm_ListItemClick = function (index) {
        var newitem = new $.fn.smlib_listbuilder_item();
        newitem.id = '';
        newitem.title = this.youtuberesultset[index].snippet.title;
        newitem.desc = this.youtuberesultset[index].snippet.description;
        newitem.index = this.focuslist.item.length+1;
        newitem.type = 'YOUTUBE';
        newitem.refid = this.youtuberesultset[index].id.videoId;
        newitem.url = 'https://www.youtube.com/watch?v=' + newitem.refid;
        newitem.creator = '';
        newitem.creation = '';
        newitem.itemcover = this.youtuberesultset[index].snippet.thumbnails.default.url;
        newitem.itemlogo = '';
        newitem.msg = '';
        this.smlib_ItemList_ListItemSaveService(newitem);
    }
    $.fn.smlib_listbuilder_create.smlib_YouTubeForm_LoadMoreClick = function () {
        this.smlib_YouTubeForm_SearchService(this.youtubekeyword, this.youtubenextpagetoke);
    }
    // #endregion

    // #region service
    $.fn.smlib_listbuilder_create.smlib_YouTubeForm_SearchService = function (keyword, nextPageToken) {
        this.smlib_YouTubeForm_ShowLoading();       
        var surl = this.smlib_listbuilder_create_options.youtubesearchservice + "?order=relevance&part=snippet&type=video&maxResults=" + this.smlib_listbuilder_create_options.maxsearchresult + "&key=" + this.smlib_listbuilder_create_options.youtubesearchkey + "&q=" + (keyword);
        if ((nextPageToken == null) || (nextPageToken == '')) {            
            $('#' + this.smlibid + '_youtubeform_contentdiv').html('');
            this.youtuberesultset = [];
        }
        else
        {
            surl += '&pageToken=' + nextPageToken;
        }       
        this.youtubekeyword = keyword;
        $.ajax({
            parent: this,
            type: "GET",
            url: surl,
            async: true,           
            contentType: "text/html; charset=utf-8",            
            success: function (data) { try { this.parent.smlib_YouTubeForm_SearchServiceResult(data); } catch (err) { $('#' + this.parent.smlibid + '_youtubeform_contentdiv').html("Search YouTube Fail " + err); } },
            failure: function (errMsg) {
                $('#' + this.parent.smlibid + '_youtubeform_contentdiv').html("Search YouTube Fail " + errMsg);
            }
        });
    }
    $.fn.smlib_listbuilder_create.smlib_YouTubeForm_SearchServiceResult = function (result) {               
        this.smlib_YouTubeForm_HideLoading();
        $('#' + this.smlibid + '_youtubeform_loadmore').remove();
        this.youtubenextpagetoke = result.nextPageToken;
        this.youtubeprepagetoke = result.prevPageToken;
        if (this.youtubenextpagetoke == null) {
            this.youtubenextpagetoke = "";
        }
        if (this.youtubeprepagetoke== null) {
            this.youtubeprepagetoke = "";
        }        
        for (var i = 0; i < result.items.length; i++) {
            var subinnerhtml = "";
            subinnerhtml += '<div class="itemdiv">';
            subinnerhtml += '<h5>';
            subinnerhtml += '<a href="' + "https://www.youtube.com/watch?v=" + result.items[i].id.videoId + '" target="_blank">';
            subinnerhtml += '<strong>' + result.items[i].snippet.title + '</strong>';
            subinnerhtml += '</a>';
            subinnerhtml += '</h5>';
            subinnerhtml += '<div style="width:100%;display:inline-block;">';
            subinnerhtml += '<div class="cover">';
            if (result.items[i].snippet.thumbnails.default.url != "") {
                subinnerhtml += '<img src="' + result.items[i].snippet.thumbnails.default.url+ '" alt="No Cover"   style="width:100%;min-width:100%;max-width:100%;"/>';
            }
            subinnerhtml += '<br/><i class="fa fa-plus fa-fw" onclick="' + this.smlib_AssignParentActions('smlib_YouTubeForm_ListItemClick(' + this.youtuberesultset.length + ')') + '"></i>';
            subinnerhtml += '</div>';
            subinnerhtml += '<div class="halfdetil"><h5>';
            subinnerhtml += result.items[i].snippet.description;
            subinnerhtml += '</h5><h5>';            
            subinnerhtml += '</h5></div>';
            subinnerhtml += '</div>';
            subinnerhtml += '</div>';
            this.youtuberesultset[this.youtuberesultset.length]=result.items[i];
            $('#' + this.smlibid + '_youtubeform_contentdiv').append(subinnerhtml);            
        }
        var subinnerhtml = "";
        subinnerhtml += '<div id="' + this.smlibid + '_youtubeform_loadmore"  class="itemdiv" style="margin-left:0px;margin-bottom:10px;text-align:center" onclick="' + this.smlib_AssignParentActions('smlib_YouTubeForm_LoadMoreClick()') + '">';
        subinnerhtml += '<h4 role="button" class="btn btn-primary" style="width:80%;">';
        subinnerhtml += 'Load More';
        subinnerhtml += '</h4>';
        subinnerhtml += '</div>';
        $('#' + this.smlibid + '_youtubeform_contentdiv').append(subinnerhtml);
    }   
    // #endregion

}(jQuery));