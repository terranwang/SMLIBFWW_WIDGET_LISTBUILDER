(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_ItemDetail_InnerHTML = function (smlibid, smlib_listbuilder_create_options) {
        var innerhtml = '';        
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_itemdetail_headerdiv" ';
        innerhtml += 'class="header" onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_ItemDetail_HeaderClick()', smlibid) + '"';
        innerhtml += '>';
        innerhtml += '<h5>Item Detail</h5>';
        innerhtml += '</div>';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_itemdetail_contentdiv" ';
        innerhtml += 'class="content" ';
        innerhtml += '>';
        innerhtml += '</div>';      
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_ItemDetail_AssignFunctions = function (maindiv) {
        $.fn.smlib_listbuilder_create.smlib_ItemDetail_AssignControls(maindiv);
        maindiv.smlib_ItemDetail_Load = $.fn.smlib_listbuilder_create.smlib_ItemDetail_Load;
        maindiv.smlib_ItemDetail_ListItemDiv = $.fn.smlib_listbuilder_create.smlib_ItemDetail_ListItemDiv;
        maindiv.smlib_ItemDetail_HeaderClick = $.fn.smlib_listbuilder_create.smlib_ItemDetail_HeaderClick;
    }
    $.fn.smlib_listbuilder_create.smlib_ItemDetail_AssignControls = function (maindiv) {
       
    }
    // #endregion

    // #region Global functions
    
    // #endregion
        
    // #region load functions
    $.fn.smlib_listbuilder_create.smlib_ItemDetail_Load = function (item) {
        if (item == null)
        {
            item = this.focusitem;
        }
        else
        {
            this.focusitem = item;
        }
        $('#' + this.smlibid + '_itemdetail_headerdiv').html('<h5>' + this.focuslist.name + '</h5>');
        $('#' + this.smlibid + '_itemdetail_contentdiv').html('');
        $('#' + this.smlibid + '_itemdetail_contentdiv').append(this.smlib_ItemDetail_ListItemDiv(item));
    }
    $.fn.smlib_listbuilder_create.smlib_ItemDetail_ListItemDiv = function (item) {
        if (item == null) {
            item = this.focusitem;
        }
        else {
            this.focusitem = item;
        }
        //if (item.itemcover == "")
        //{
        //    item.itemcover = this.smlib_listbuilder_create_options.webroot + "cover/NoCover.jpg";
        //}
        var subinnerhtml = "";
        subinnerhtml += '<div class="itemdiv">';
        subinnerhtml += '<h5>';
        subinnerhtml += '<a href="' + item.url + '" target="_blank">';
        subinnerhtml += '<strong>' + item.title + '</strong>';
        subinnerhtml += '</a>';
        subinnerhtml += '</h5>';
        subinnerhtml += '<div style="width:100%;display:inline-block;">';
        subinnerhtml += '<div class="cover">';
        if (item.itemcover != "") {
            subinnerhtml += '<img src="' + item.itemcover + '" alt="No Cover"   style="width:100%;min-width:100%;max-width:100%;"/>';
        }
        subinnerhtml += '</div>';
        subinnerhtml += '<div class="halfdetil"><h5>';
        subinnerhtml += item.desc;
        subinnerhtml += '</h5><h5>';
        subinnerhtml += '&nbsp;&nbsp;<i class="fa fa-trash fa-fw" onclick="' + this.smlib_AssignParentActions('smlib_ItemList_ListItemDeleteClick(\'' + item.id + '\')') + '"></i>';
        subinnerhtml += '</h5></div>';
        subinnerhtml += '</div>';
        subinnerhtml += '</div>';
        return subinnerhtml;
    }
    // #endregion

    // #region click actions    
    $.fn.smlib_listbuilder_create.smlib_ItemDetail_HeaderClick = function () {
        this.smlib_Content_LoadContent("ITEM_LIST");
    }    
    // #endregion

}(jQuery));