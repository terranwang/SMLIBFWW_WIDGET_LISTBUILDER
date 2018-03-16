(function ($) {
    // #region listbuilder create entry point
    $.fn.smlib_listbuilder_create = function (options) {
        this.smlib_listbuilder_create_options = $.extend({}, $.fn.smlib_listbuilder_option(), options);
        this.smlibid = $(this).attr("id");
        var innerhtml = $.fn.smlib_listbuilder_create.smlib_InnerHTML(this.smlibid, this.smlib_listbuilder_create_options);
        $(this).html(innerhtml);
        this.maindiv = $("#" + this.smlibid + "_maindiv");
        this.maindiv.smlibid = this.smlibid;
        this.maindiv.parent = this;
        this.maindiv.smlib_listbuilder_create_options = this.smlib_listbuilder_create_options;
        $.fn.smlib_listbuilder_create.smlib_AssignFunctions(this.maindiv);
        return this.maindiv;
    }
    // #endregion

    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_InnerHTML = function (smlibid, smlib_listbuilder_create_options) {
        var innerhtml = '';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_maindiv" ';
        innerhtml += 'class="smlib_listbuilder_create_maindiv ' + smlib_listbuilder_create_options.additional_css + '" ';
        innerhtml += 'style="';
        if (smlib_listbuilder_create_options.bgfile != "") {
            innerhtml += 'background: url(\'' + smlib_listbuilder_create_options.bgfile + '\') TRANSPARENT;';
        }
        innerhtml += 'position:' + smlib_listbuilder_create_options.position + ';width:' + smlib_listbuilder_create_options.width + 'px;min-height:' + smlib_listbuilder_create_options.height + 'px;" ';
        innerhtml += '>';
        innerhtml += $.fn.smlib_listbuilder_create.smlib_Input_InnerHTML(smlibid, smlib_listbuilder_create_options);
        innerhtml += $.fn.smlib_listbuilder_create.smlib_Content_InnerHTML(smlibid, smlib_listbuilder_create_options);      
        innerhtml += '</div>';
        innerhtml += '<div id="' + smlibid + '_hiddenbutton" class="btn btn-danger" style="display:none">HiddenBtn</div>';
        innerhtml += '<div ';
        innerhtml += 'style="width:' + smlib_listbuilder_create_options.width + 'px;height:' + smlib_listbuilder_create_options.height + 'px;" ';
        innerhtml += 'class="mask" ';
        innerhtml += '>';
        innerhtml += '</div>';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_loadingmask" ';
        innerhtml += 'class="smlib_listbuilder_create_loadingmask"';
        innerhtml += 'style="width:' + smlib_listbuilder_create_options.width + 'px;height:' + smlib_listbuilder_create_options.height + 'px;"';
        innerhtml += '>';
        innerhtml += '<div class="loadingimg" style="width:' + (smlib_listbuilder_create_options.width) + 'px;max-width:' + (smlib_listbuilder_create_options.width) + 'px;min-width:' + (smlib_listbuilder_create_options.width) + 'px; font-size:30px;display:block;text-align:center"><i class="fa fa-spinner fa-spin" style="color:inherit;" ></i><div id="' + smlibid + '_loadingmessage" style="display:block;font-size:30px;color:inherit;">Loading...</div></div>';
        innerhtml += '</div>';
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_AssignFunctions = function (maindiv) {
        maindiv.smlib_AssignParentActions = $.fn.smlib_listbuilder_create.smlib_AssignParentActions;
        maindiv.smlibShowLoadingMask = $.fn.smlib_listbuilder_create.smlibShowLoadingMask;
        maindiv.smlibHideLoadingMask = $.fn.smlib_listbuilder_create.smlibHideLoadingMask;
        maindiv.smlibInsertAtCaret = $.fn.smlib_listbuilder_create.smlibInsertAtCaret;
        maindiv.smlibLoadBuilder = $.fn.smlib_listbuilder_create.smlibLoadBuilder;
        maindiv.smlibLoadBuilderResult = $.fn.smlib_listbuilder_create.smlibLoadBuilderResult;
        maindiv.actleft = $('#' + maindiv.smlibid + "_maindiv").offset().left;
        maindiv.acttop = $('#' + maindiv.smlibid + "_maindiv").offset().top;
        $.fn.smlib_listbuilder_create.smlib_AssignControls(maindiv);
        $.fn.smlib_listbuilder_create.smlib_Input_AssignFunctions(maindiv);
        $.fn.smlib_listbuilder_create.smlib_Content_AssignFunctions(maindiv);        
    }
    $.fn.smlib_listbuilder_create.smlib_AssignControls = function (maindiv) {
        maindiv.focusbuilder = new $.fn.smlib_listbuilder_builder();
        maindiv.focuslist = new $.fn.smlib_listbuilder_list();
        maindiv.focusitem = new $.fn.smlib_listbuilder_item();
        maindiv.focuslistid = "";
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover()
        var con = null;
        con = document.getElementById(maindiv.smlibid + '_hiddenbutton');
        if (con != null) {
            con.parent = maindiv;
        }
    }
    // #endregion

    // #region Global functions
    $.fn.smlib_listbuilder_create.smlib_AssignParentActions = function (actionname, smlibid) {
        if (smlibid != null) {
            return "document.getElementById('" + smlibid + "_hiddenbutton').parent." + actionname;
        }
        else {
            return "document.getElementById('" + this.smlibid + "_hiddenbutton').parent." + actionname;
        }
    }
    $.fn.smlib_listbuilder_create.smlibShowLoadingMask = function (msg) {
        if (msg == null) {
            msg = "Loading...";
        }
        $('#' + this.smlibid + '_loadingmessage').html(msg);
        if (!($('#' + this.smlibid + '_loadingmask').hasClass('smlibactive'))) {
            $('#' + this.smlibid + '_loadingmask').addClass('smlibactive');
        }
    }
    $.fn.smlib_listbuilder_create.smlibHideLoadingMask = function () {
        if ($('#' + this.smlibid + '_loadingmask').hasClass('smlibactive')) {            
            $('#' + this.smlibid + '_loadingmask').removeClass('smlibactive');
            $('#' + this.smlibid + '_loadingmessage').val('');
        }
    }
    $.fn.smlib_listbuilder_create.smlibInsertAtCaret = function (control, text) {
        if (document.selection && control.tagName == 'TEXTAREA') {
            //IE textarea support
            control.focus();
            sel = document.selection.createRange();
            sel.text = text;
            control.focus();
        } else if (control.selectionStart || control.selectionStart == '0') {
            //MOZILLA/NETSCAPE support
            startPos = control.selectionStart;
            endPos = control.selectionEnd;
            scrollTop = control.scrollTop;
            control.value = control.value.substring(0, startPos) + text + control.value.substring(endPos, control.value.length);
            control.focus();
            control.selectionStart = startPos + text.length;
            control.selectionEnd = startPos + text.length;
            control.scrollTop = scrollTop;
        } else {
            // IE input[type=text] and other browsers
            control.value += text;
            control.focus();
            control.value = control.value;    // forces cursor to end
        }
    };
    // #endregion

    // #region loading functions
    $.fn.smlib_listbuilder_create.smlibLoadBuilder = function () {
        this.smlibShowLoadingMask("Load All Lists...");
        $.ajax({
            parent: this,
            type: "POST",
            url: this.smlib_listbuilder_create_options.loadbuilderservice,           
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (data) { try { this.parent.smlibLoadBuilderResult(JSON.parse(data.d)); } catch (err) { alert("Load Lists Fail " + err); } },
            failure: function (errMsg) {
                alert("Load Lists Fail " + errMsg);
            }
        });       
    }
    $.fn.smlib_listbuilder_create.smlibLoadBuilderResult = function (builder) {
        if (builder.msg != "") {
            alert(builder.msg);
        }
        else {
            this.focusbuilder = builder;
            this.smlib_Content_ShowContent();
            this.smlib_Content_LoadContent();

            var reg = new RegExp("(^|&)ListID=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            this.focuslistid = "";
            if (r != null) {
                this.focuslistid = unescape(r[2]);
            }

            if (this.focuslistid != "") {
                var list = this.smlib_BuilderList_GetListByID(this.focuslistid);
                if (list != null) {
                    this.focuslist = list;
                    this.smlib_Content_LoadContent("ITEM_LIST");
                }
                else
                {
                    alert("List is not found or no enough permission.")
                }
            }
        }
        this.smlibHideLoadingMask();
    }    
    // #endregion
}(jQuery));