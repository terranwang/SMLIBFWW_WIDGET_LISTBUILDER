(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_PrintForm_InnerHTML = function (smlibid, smlib_listbuilder_create_options) {
        var innerhtml = '';        
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_printform_headerdiv" ';
        innerhtml += 'class="header form"';
        innerhtml += '>';      
        innerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        innerhtml += '<select id="' + smlibid + '_printform_modeselect" class="form-control" onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_PrintForm_LoadTemplate()', smlibid) + '">';
        innerhtml += '<option value="HARVARD">Harvard Style</option>';
        innerhtml += '<option value="APA">APA Style</option>';
        innerhtml += '</select>';
        //innerhtml += '<span class="input-group-addon" role="button"  ><i id="' + smlibid + '_printform_printbtn" class="fa fa-print fa-fw" style="width:auto;" onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_PrintForm_PrintClick()', smlibid) + '"></i></span>';
        innerhtml += '<span class="input-group-addon" role="button"  onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_PrintForm_ExportClick()', smlibid) + '"><i id="' + smlibid + '_printform_exportbtn" class="fa fa-file-pdf-o fa-fw" style="width:auto;"></i>&nbsp;PDF</span>';
        innerhtml += '<span class="input-group-addon" role="button"  onclick="' + $.fn.smlib_listbuilder_create.smlib_AssignParentActions('smlib_PrintForm_ExportTxtClick()', smlibid) + '"><i id="' + smlibid + '_printform_exporttxtbtn" class="fa fa-file-pdf-o fa-fw" style="width:auto;"></i>&nbsp;TXT</span>';
        innerhtml += '</div>';
        innerhtml += '</div>';

        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_printform_contentdiv" ';
        innerhtml += 'class="content form" style="display:none;height:' + (smlib_listbuilder_create_options.height - 100) + 'px;min-height:' + (smlib_listbuilder_create_options.height - 100) + 'px;max-height:' + (smlib_listbuilder_create_options.height - 100) + 'px"';
        innerhtml += '>';
        innerhtml += '<div style="width:100%;padding-left:20px;padding-right:20px;">';
        innerhtml += '<h5><a role="button" data-toggle="collapse" href="#' + smlibid + '_printform_cataloguetemplate" aria-expanded="false" aria-controls="' + smlibid + '_printform_cataloguetemplate" style="width:100%;;max-width:100%; overflow:hidden;position: relative;display: block;text-align: left;">Catalogue Item Template</a></h5>';
        innerhtml += '<div id="' + smlibid + '_printform_cataloguetemplate" class="collapse"  style="text-align: left; position: relative;width:100%;;max-width:100%; overflow:hidden;">';
        innerhtml += "</div>";
        innerhtml += '</div>';
        innerhtml += '<div style="width:100%;padding-left:20px;padding-right:20px;">';
        innerhtml += '<h5><a role="button" data-toggle="collapse" href="#' + smlibid + '_printform_urltemplate" aria-expanded="false" aria-controls="' + smlibid + '_printform_urltemplate" style="width:100%;;max-width:100%; overflow:hidden;position: relative;display: block;text-align: left;">URL Item Template</a></h5>';
        innerhtml += '<div id="' + smlibid + '_printform_urltemplate" class="collapse"  style="text-align: left; position: relative;width:100%;;max-width:100%; overflow:hidden;">';
        innerhtml += "</div>";
        innerhtml += '</div>';
        innerhtml += '</div>';
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_PrintForm_AssignFunctions = function (maindiv) {
        
        maindiv.smlib_PrintForm_LoadControls = $.fn.smlib_listbuilder_create.smlib_PrintForm_LoadControls;
        maindiv.smlib_PrintForm_LoadCatalogueTemplate = $.fn.smlib_listbuilder_create.smlib_PrintForm_LoadCatalogueTemplate;
        maindiv.smlib_PrintForm_LoadURLTemplate = $.fn.smlib_listbuilder_create.smlib_PrintForm_LoadURLTemplate;
        maindiv.smlib_PrintForm_LoadTemplate = $.fn.smlib_listbuilder_create.smlib_PrintForm_LoadTemplate;
        maindiv.smlib_PrintForm_PrintClick = $.fn.smlib_listbuilder_create.smlib_PrintForm_PrintClick;
        maindiv.smlib_PrintForm_ExportClick = $.fn.smlib_listbuilder_create.smlib_PrintForm_ExportClick;
        maindiv.smlib_PrintForm_ExportTxtClick = $.fn.smlib_listbuilder_create.smlib_PrintForm_ExportTxtClick;
        maindiv.smlib_PrintForm_CatalogueHeaderTokenAddClick = $.fn.smlib_listbuilder_create.smlib_PrintForm_CatalogueHeaderTokenAddClick;
        maindiv.smlib_PrintForm_URLHeaderTokenAddClick = $.fn.smlib_listbuilder_create.smlib_PrintForm_URLHeaderTokenAddClick;
        maindiv.smlib_PrintForm_InitPDFPage = $.fn.smlib_listbuilder_create.smlib_PrintForm_InitPDFPage;
        maindiv.smlib_PrintForm_GeneratePDFTableService = $.fn.smlib_listbuilder_create.smlib_PrintForm_GeneratePDFTableService;
        maindiv.smlib_PrintForm_GeneratePDFTableServiceResult = $.fn.smlib_listbuilder_create.smlib_PrintForm_GeneratePDFTableServiceResult;
        maindiv.smlib_PrintForm_GenerateCataloguePDFTableServiceResult = $.fn.smlib_listbuilder_create.smlib_PrintForm_GenerateCataloguePDFTableServiceResult;
        maindiv.smlib_PrintForm_GenerateUrlPDFTableServiceResult = $.fn.smlib_listbuilder_create.smlib_PrintForm_GenerateUrlPDFTableServiceResult;
        maindiv.smlib_PrintForm_PDFMapCatalogueTokenValue = $.fn.smlib_listbuilder_create.smlib_PrintForm_PDFMapCatalogueTokenValue;
        maindiv.smlib_PrintForm_PDFMapCatalogueHeaderValue = $.fn.smlib_listbuilder_create.smlib_PrintForm_PDFMapCatalogueHeaderValue;
        maindiv.smlib_PrintForm_PDFMapURLTokenValue = $.fn.smlib_listbuilder_create.smlib_PrintForm_PDFMapURLTokenValue;
        maindiv.smlib_PrintForm_PDFMapURLHeaderValue = $.fn.smlib_listbuilder_create.smlib_PrintForm_PDFMapURLHeaderValue;
        maindiv.smlib_PrintForm_GeneratePDFImages = $.fn.smlib_listbuilder_create.smlib_PrintForm_GeneratePDFImages;
        maindiv.smlib_PrintForm_GenerateTXTContentService = $.fn.smlib_listbuilder_create.smlib_PrintForm_GenerateTXTContentService;
        maindiv.smlib_PrintForm_GenerateTXTContentServiceResult = $.fn.smlib_listbuilder_create.smlib_PrintForm_GenerateTXTContentServiceResult;
        $.fn.smlib_listbuilder_create.smlib_PrintForm_AssignControls(maindiv);
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_AssignControls = function (maindiv) {
        maindiv.PDFDoc = null;
        maindiv.cataloguetokencount = 0;
        maindiv.urltokencount = 0;
        maindiv.pdfimagelist = { image: [] };
    }
    // #endregion

    // #region Global functions
   
    // #endregion

    // #region click actions    
    $.fn.smlib_listbuilder_create.smlib_PrintForm_PrintClick = function () {
        var win = window.open(this.smlib_listbuilder_create_options.widgetroot + "PAGE/ListPrint.html");
        win.focuslist = this.focuslist;
        win.printtype = $('#'+this.smlibid+"_printform_modeselect").val();
        win.smlib_listbuilder_create_options = this.smlib_listbuilder_create_options;     
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_ExportTxtClick = function () {
        this.txtexportcontent = '';
        switch ($('#' + this.smlibid + '_printform_modeselect').val()) {
            case "APA":
                this.cataloguetemplate_titlebox = "[Author].([Publisher Date]).[Title].[Publisher Place]:[Publisher]";
                this.urltemplate_titlebox = "[Add To List By].[Title].[Add To List Date], from [URL]";
                break;

            case "HARVARD":
            default:
                this.cataloguetemplate_titlebox = "[Author] [Publisher Date], [Title], [Publisher]";
                this.urltemplate_titlebox = "[Add To List By], [Title], [Add To List Date], <[URL]>";
                break;
        }
        this.smlibShowLoadingMask("");
        if (this.focuslist.item.length > 0) {
            this.smlib_PrintForm_GenerateTXTContentService(0);
        }

    }   
    $.fn.smlib_listbuilder_create.smlib_PrintForm_ExportClick = function () {
        
        this.PDFDoc = null;
        this.PDFDoc = new jsPDF({
            orientation: 'P',
            unit: 'mm',
            format: [this.smlib_listbuilder_create_options.pdfsizewidth, this.smlib_listbuilder_create_options.pdfsizeheight]
        });
        this.smlib_listbuilder_create_options.pdftablewidth = this.smlib_listbuilder_create_options.pdfsizewidth - this.smlib_listbuilder_create_options.pdfmarginleft - this.smlib_listbuilder_create_options.pdfmarginright;
        this.smlib_listbuilder_create_options.pdftableheight = (this.smlib_listbuilder_create_options.pdfsizeheight - this.smlib_listbuilder_create_options.pdfmargintop - this.smlib_listbuilder_create_options.pdfmarginbottom - this.smlib_listbuilder_create_options.pdfitemperpage * this.smlib_listbuilder_create_options.pdfitemmargin) / this.smlib_listbuilder_create_options.pdfitemperpage;
        this.smlib_listbuilder_create_options.pdfheaderwidth = this.smlib_listbuilder_create_options.pdftablewidth;
        this.smlib_listbuilder_create_options.pdfheaderheight = this.smlib_listbuilder_create_options.pdftableheight * 0.33;
        //terran disable config as requested
        this.cataloguetokencount = 0;
        this.urltokencount = 0;
        switch ($('#' + this.smlibid + '_printform_modeselect').val()) {
            case "APA":               
                this.cataloguetemplate_titlebox="[Author].([Publisher Date]).[Title].[Publisher Place]:[Publisher]";             
                this.urltemplate_titlebox = "[Add To List By].[Title].[Add To List Date], from [URL]";
                break;

            case "HARVARD":
            default:
                this.cataloguetemplate_titlebox="[Author] [Publisher Date], [Title], [Publisher]";
                this.urltemplate_titlebox ="[Add To List By], [Title], [Add To List Date], <[URL]>";
                break;
        }

        //this.cataloguetokencount = 0;
        //for (var i = 1; i <= 5; i++)
        //{
        //    if ($('#' + this.smlibid + '_printform_cataloguetemplate_token'+i).val()!="NOT_SET")
        //    {
        //        this.cataloguetokencount++;
        //    }
        //}
        //this.smlib_listbuilder_create_options.pdfcataloguetokenwidth = this.smlib_listbuilder_create_options.pdftablewidth / this.cataloguetokencount;
        //this.smlib_listbuilder_create_options.pdfcataloguetokenheight = this.smlib_listbuilder_create_options.pdftableheight * 0.67;
        //this.urltokencount = 0;
        //for (var i = 1; i <= 5; i++) {
        //    if ($('#' + this.smlibid + '_printform_urltemplate_token' + i).val() != "NOT_SET") {
        //        this.urltokencount++;
        //    }
        //}
        //this.smlib_listbuilder_create_options.pdfurltokenwidth = this.smlib_listbuilder_create_options.pdftablewidth / this.urltokencount;
        //this.smlib_listbuilder_create_options.pdfurltokenheight = this.smlib_listbuilder_create_options.pdftableheight * 0.67;
       
        this.smlib_PrintForm_InitPDFPage();
        this.smlibShowLoadingMask("");
        if (this.focuslist.item.length > 0) {
            this.smlib_PrintForm_GeneratePDFTableService(0);
        }              
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_CatalogueHeaderTokenAddClick = function () {
        var selectcolumn = $('#' + this.smlibid + '_printform_cataloguetemplate_titletoken').val();
        if (selectcolumn != "NOT_SET") {
            var selectcolumndisplay = $('#' + this.smlibid + '_printform_cataloguetemplate_titletoken option:selected').text();            
            this.smlibInsertAtCaret(document.getElementById(this.smlibid + '_printform_cataloguetemplate_titlebox'), '[' + selectcolumndisplay + ']');
        }
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_URLHeaderTokenAddClick = function () {
        var selectcolumn = $('#' + this.smlibid + '_printform_urltemplate_titletoken').val();
        if (selectcolumn != "NOT_SET") {
            var selectcolumndisplay = $('#' + this.smlibid + '_printform_urltemplate_titletoken option:selected').text();
            this.smlibInsertAtCaret(document.getElementById(this.smlibid + '_printform_urltemplate_titlebox'), '[' + selectcolumndisplay + ']');
        }
    }
    // #endregion

    // #region Load actions 
    $.fn.smlib_listbuilder_create.smlib_PrintForm_LoadControls = function () {
        $('#' + this.smlibid + '_printform_cataloguetemplate').html(this.smlib_PrintForm_LoadCatalogueTemplate());
        $('#' + this.smlibid + '_printform_urltemplate').html(this.smlib_PrintForm_LoadURLTemplate());
        this.smlib_PrintForm_LoadTemplate();
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_LoadTemplate = function () {
        //terran disable config as requested
        return;
        switch ($('#' + this.smlibid + '_printform_modeselect').val()) {
            case "APA":
                $('#' + this.smlibid + '_printform_cataloguetemplate_token1').val("AUTHOR");
                $('#' + this.smlibid + '_printform_cataloguetemplate_token2').val("PUBLISHER_DATE");
                $('#' + this.smlibid + '_printform_cataloguetemplate_token3').val("TITLE");
                $('#' + this.smlibid + '_printform_cataloguetemplate_token4').val("PUBLISHER_PLACE");
                $('#' + this.smlibid + '_printform_cataloguetemplate_token5').val("PUBLISHER");
                $('#' + this.smlibid + '_printform_cataloguetemplate_titletoken').val("NOT_SET");
                $('#' + this.smlibid + '_printform_cataloguetemplate_titlebox').val("[Author].([Publisher Date]).[Title].[Publisher Place]:[Publisher]");
                $('#' + this.smlibid + '_printform_urltemplate_token1').val("ADD_PATRON");
                $('#' + this.smlibid + '_printform_urltemplate_token2').val("TITLE");
                $('#' + this.smlibid + '_printform_urltemplate_token3').val("ADD_DATE");
                $('#' + this.smlibid + '_printform_urltemplate_token4').val("URL");
                $('#' + this.smlibid + '_printform_urltemplate_token5').val("NOT_SET");
                $('#' + this.smlibid + '_printform_urltemplate_titletoken').val("NOT_SET");
                $('#' + this.smlibid + '_printform_urltemplate_titlebox').val("[Add To List By].[Title].[Add To List Date], from [URL]");
                break;

            case "HARVARD":
            default:
                $('#' + this.smlibid + '_printform_cataloguetemplate_token1').val("AUTHOR");
                $('#' + this.smlibid + '_printform_cataloguetemplate_token2').val("PUBLISHER_DATE");
                $('#' + this.smlibid + '_printform_cataloguetemplate_token3').val("TITLE");
                $('#' + this.smlibid + '_printform_cataloguetemplate_token4').val("PUBLISHER_WITH_PLACE");
                $('#' + this.smlibid + '_printform_cataloguetemplate_token5').val("NOT_SET");
                $('#' + this.smlibid + '_printform_cataloguetemplate_titletoken').val("NOT_SET");
                $('#' + this.smlibid + '_printform_cataloguetemplate_titlebox').val("[Author] [Publisher Date], [Title], [Publisher]");
                $('#' + this.smlibid + '_printform_urltemplate_token1').val("ADD_PATRON");
                $('#' + this.smlibid + '_printform_urltemplate_token2').val("TITLE");
                $('#' + this.smlibid + '_printform_urltemplate_token3').val("ADD_DATE");
                $('#' + this.smlibid + '_printform_urltemplate_token4').val("URL");
                $('#' + this.smlibid + '_printform_urltemplate_token5').val("NOT_SET");
                $('#' + this.smlibid + '_printform_urltemplate_titletoken').val("NOT_SET");
                $('#' + this.smlibid + '_printform_urltemplate_titlebox').val("[Add To List By], [Title], [Add To List Date], <[URL]>");
                break;
        }
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_LoadCatalogueTemplate = function () {

        var optionstr = "";
        for (var i = 0; i < this.smlib_listbuilder_create_options.catalogueprinttokens.length; i++) {
            optionstr += '<option value="' + this.smlib_listbuilder_create_options.catalogueprinttokens[i].key + '">' + this.smlib_listbuilder_create_options.catalogueprinttokens[i].value + '</option>';
        }
        var subinnerhtml = "";
        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;">Token One</span>';
        subinnerhtml += '<select id="' + this.smlibid + '_printform_cataloguetemplate_token1" class="form-control">';
        subinnerhtml += optionstr;
        subinnerhtml += '</select>';
        subinnerhtml += '</div>';

        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;">Token Two</span>';
        subinnerhtml += '<select id="' + this.smlibid + '_printform_cataloguetemplate_token2" class="form-control">';
        subinnerhtml += optionstr;
        subinnerhtml += '</select>';
        subinnerhtml += '</div>';

        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;">Token Three</span>';
        subinnerhtml += '<select id="' + this.smlibid + '_printform_cataloguetemplate_token3" class="form-control">';
        subinnerhtml += optionstr;
        subinnerhtml += '</select>';
        subinnerhtml += '</div>';

        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;">Token Four</span>';
        subinnerhtml += '<select id="' + this.smlibid + '_printform_cataloguetemplate_token4" class="form-control">';
        subinnerhtml += optionstr;
        subinnerhtml += '</select>';
        subinnerhtml += '</div>';

        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;">Token Five</span>';
        subinnerhtml += '<select id="' + this.smlibid + '_printform_cataloguetemplate_token5" class="form-control">';
        subinnerhtml += optionstr;
        subinnerhtml += '</select>';
        subinnerhtml += '</div>';

        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;" role="button" onclick="' + this.smlib_AssignParentActions('smlib_PrintForm_CatalogueHeaderTokenAddClick()') + '"><i class="fa fa-plus fa-fw" style="width:auto;"></i>&nbsp;Header Token</span>';
        subinnerhtml += '<select id="' + this.smlibid + '_printform_cataloguetemplate_titletoken" class="form-control">';
        subinnerhtml += optionstr;
        subinnerhtml += '</select>';
        subinnerhtml += '</div>';

        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;" role="button">Header</span>';
        subinnerhtml += '<textarea id="' + this.smlibid + '_printform_cataloguetemplate_titlebox" rows="5" class="form-control" style="width:100%;"></textarea>';
        subinnerhtml += '</div>';
        return subinnerhtml;

    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_LoadURLTemplate = function () {

        var optionstr = "";
        for (var i = 0; i < this.smlib_listbuilder_create_options.urlprinttokens.length; i++) {
            optionstr += '<option value="' + this.smlib_listbuilder_create_options.urlprinttokens[i].key + '">' + this.smlib_listbuilder_create_options.urlprinttokens[i].value + '</option>';
        }
        var subinnerhtml = "";
        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;">Token One</span>';
        subinnerhtml += '<select id="' + this.smlibid + '_printform_urltemplate_token1" class="form-control">';
        subinnerhtml += optionstr;
        subinnerhtml += '</select>';
        subinnerhtml += '</div>';

        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;">Token Two</span>';
        subinnerhtml += '<select id="' + this.smlibid + '_printform_urltemplate_token2" class="form-control">';
        subinnerhtml += optionstr;
        subinnerhtml += '</select>';
        subinnerhtml += '</div>';

        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;">Token Three</span>';
        subinnerhtml += '<select id="' + this.smlibid + '_printform_urltemplate_token3" class="form-control">';
        subinnerhtml += optionstr;
        subinnerhtml += '</select>';
        subinnerhtml += '</div>';

        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;">Token Four</span>';
        subinnerhtml += '<select id="' + this.smlibid + '_printform_urltemplate_token4" class="form-control">';
        subinnerhtml += optionstr;
        subinnerhtml += '</select>';
        subinnerhtml += '</div>';

        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;">Token Five</span>';
        subinnerhtml += '<select id="' + this.smlibid + '_printform_urltemplate_token5" class="form-control">';
        subinnerhtml += optionstr;
        subinnerhtml += '</select>';
        subinnerhtml += '</div>';

        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;" role="button" onclick="' + this.smlib_AssignParentActions('smlib_PrintForm_URLHeaderTokenAddClick()') + '"><i class="fa fa-plus fa-fw" style="width:auto;"></i>&nbsp;Header Token</span>';
        subinnerhtml += '<select id="' + this.smlibid + '_printform_urltemplate_titletoken" class="form-control">';
        subinnerhtml += optionstr;
        subinnerhtml += '</select>';
        subinnerhtml += '</div>';

        subinnerhtml += '<div class="input-group inputdiv" style="width:100%;">';
        subinnerhtml += '<span class="input-group-addon" style="width:120px;" role="button">Header</span>';
        subinnerhtml += '<textarea id="' + this.smlibid + '_printform_urltemplate_titlebox" rows="5" class="form-control" style="width:100%;"></textarea>';
        subinnerhtml += '</div>';
        return subinnerhtml;

    }
    // #endregion

    // #region PDF
    $.fn.smlib_listbuilder_create.smlib_PrintForm_InitPDFPage = function () {
        this.PDFDoc.setFont(this.smlib_listbuilder_create_options.pdffont, this.smlib_listbuilder_create_options.pdffonttype);
        this.PDFDoc.setFontSize(this.smlib_listbuilder_create_options.pdffontsize + '');
        this.PDFDoc.setTextColor(0, 0, 0);
        this.PDFDoc.setFillColor(255, 255, 255);
    }   
    $.fn.smlib_listbuilder_create.smlib_PrintForm_GeneratePDFImages = function (imagelist, imageindex, itemindex) {
        //console.log("GeneratePDFImages " +imagelist.length+" - " + imageindex + " for " + itemindex);
        if (imageindex < imagelist.length)
        {
            var tempimgi = new Image();           
            tempimgi.parent = this;
            tempimgi.itemindex = itemindex;
            tempimgi.imagelist = imagelist;
            tempimgi.imageindex = imageindex;           
            tempimgi.smlib_listbuilder_create_options = this.smlib_listbuilder_create_options;
            tempimgi.onload = function () {
                try
                {
                    this.actwidth = imagelist[imageindex].width;
                    this.actheight = (this.height / this.width) * this.actwidth;
                    if (this.actheight > imagelist[imageindex].height)
                    {
                        this.actheight = imagelist[imageindex].height;
                        this.actwidth = (this.width / this.height) * this.actheight;
                    }
                    this.leftmargin = 0;
                    this.topmargin = 0;
                    if (this.actwidth < imagelist[imageindex].width)
                    {
                        this.leftmargin = (imagelist[imageindex].width - this.actwidth) / 2;
                    }
                    if (this.actheight < imagelist[imageindex].height) {
                        this.topmargin = (imagelist[imageindex].height - this.actheight) / 2;
                    }
                    this.parent.PDFDoc.addImage(this.src, imagelist[imageindex].imgtype, imagelist[imageindex].left + this.leftmargin, imagelist[imageindex].top + this.topmargin, this.actwidth, this.actheight);
                }
                catch (err)
                {

                }
                this.parent.smlib_PrintForm_GeneratePDFImages(this.imagelist, this.imageindex+1, this.itemindex);
            };
            tempimgi.onerror = function () {
                this.parent.smlib_PrintForm_GeneratePDFImages(this.imagelist, this.imageindex+1, this.itemindex);
            }
            tempimgi.src = (imagelist[imageindex].itemcoverbase64);
        }
        else
        {
            this.smlib_PrintForm_GeneratePDFTableService(itemindex + 1);
        }
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_PDFMapCatalogueTokenValue = function (item, token) {
        switch (token.toUpperCase()) {
            case "NOT_SET":
                return '';
                break;
            case "ADD_PATRON":
                return item.creatorname;
                break;
            case "ADD_DATE":
                return item.creation;
                break;
            case "AUTHOR":
                return item.author;
                break;
            case "CATALOGUER":
                return item.cataloguer;
                break;
            case "CATALOGUE_DATE":
                return item.cataloguedate;
                break
            case "COVER":
                return "N/A";
                break;
            case "DESCRIPTION":
                return item.desc;
                break;
            case "ISBN":
                return item.isbn;
                break;
            case "PUBLISHER":
                return item.publisher;
                break;
            case "PUBLISHER_WITH_PLACE":
                return item.publisher + " " + item.publisherplace;
                break;
            case "PUBLISHER_DATE":
                return item.publisherdate;
                break;
            case "PUBLISHER_PLACE":
                return item.publisherplace;
                break;
            case "SERIES":
                return item.series;
                break;
            case "URL":
                return item.url;
                break;
            case "TITLE":
            default:
                return item.title;
                break;
        }
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_PDFMapCatalogueHeaderValue = function (item, header) {
        if (item.creatorname == "") {
            header = header.replace(/\[Add To List By\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Add To List By\]/g, item.creatorname);
        }

        if (item.creation == "") {
            header = header.replace(/\[Add To List Date\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Add To List Date\]/g, item.creation);
        }

        if (item.author == "") {
            header = header.replace(/\[Author\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Author\]/g, item.author);
        }

        if (item.cataloguer == "") {
            header = header.replace(/\[Catalogue By\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Catalogue By\]/g, item.cataloguer);
        }

        if (item.cataloguedate == "") {
            header = header.replace(/\[Catalogue Date\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Catalogue Date\]/g, item.cataloguedate);
        }

        if (item.itemcover == "") {
            header = header.replace(/\[Cover\]/g, "");
        }
        else {
            header = header.replace(/\[Cover\]/g, "");
        }

        if (item.desc == "") {
            header = header.replace(/\[Description\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Description\]/g, item.desc);
        }

        if (item.isbn == "") {
            header = header.replace(/\[ISBN\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[ISBN\]/g, item.isbn);
        }

        if (item.publisher == "") {
            header = header.replace(/\[Publisher\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Publisher\]/g, item.publisher);
        }

        if ((item.publisher + " " + item.publisherplace) == "") {
            header = header.replace(/\[Publisher \/ Place\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Publisher \/ Place\]/g, item.publisher + " " + item.publisherplace);
        }

        if (item.publisherdate == "") {
            header = header.replace(/\[Publisher Date\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Publisher Date\]/g, item.publisherdate);
        }

        if (item.publisherplace == "") {
            header = header.replace(/\[Publisher Place\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Publisher Place\]/g, item.publisherplace);
        }

        if (item.series == "") {
            header = header.replace(/\[Series\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Series\]/g, item.series);
        }

        if (item.title == "") {
            header = header.replace(/\[Title\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Title\]/g, item.title);
        }

        if (item.url == "") {
            header = header.replace(/\[URL\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[URL\]/g, item.url);
        }
        return header;
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_PDFMapURLTokenValue = function (item, token) {
        switch (token.toUpperCase())
        {
            case "NOT_SET":
                return '';
                break;
            case "ADD_PATRON":
                return item.creatorname;
                break;
            case "ADD_DATE":
                return item.creation;
                break;
            case "COVER":
                return "N/A";
                break;
            case "DESCRIPTION":
                return item.desc;
                break;
            case "URL":
                return item.url;
                break;
            case "TITLE":
            default:
                return item.title;
                break;
        }
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_PDFMapURLHeaderValue = function (item, header) {
        if (item.creatorname == "") {
            header = header.replace(/\[Add To List By\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Add To List By\]/g, item.creatorname);
        }
        if (item.creation == "") {
            header = header.replace(/\[Add To List Date\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Add To List Date\]/g, item.creation);
        }
        if (item.itemcover == "") {
            header = header.replace(/\[Cover\]/g, "");
        }
        else {
            header = header.replace(/\[Cover\]/g, "");
        }
        if (item.desc == "") {
            header = header.replace(/\[Description\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Description\]/g, item.desc);
        }
        if (item.title == "") {
            header = header.replace(/\[Title\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[Title\]/g, item.title);
        }
        if (item.url == "") {
            header = header.replace(/\[URL\]/g, 'N/A');
        }
        else {
            header = header.replace(/\[URL\]/g, item.url);
        }
        return header;
    }
    // #endregion

    // #region service
    $.fn.smlib_listbuilder_create.smlib_PrintForm_GenerateTXTContentService = function (index) {
        if (index < this.focuslist.item.length) {
            this.smlibShowLoadingMask("Export Item " + (index + 1));

            $.ajax({
                parent: this,
                parentindex: index,
                type: "POST",
                url: this.smlib_listbuilder_create_options.getitemdetailservice,
                data: '{"id": "' + this.focuslist.item[index].id + '", "listid": "' + this.focuslist.id + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (data) { try { this.parent.smlib_PrintForm_GenerateTXTContentServiceResult(JSON.parse(data.d), this.parentindex); } catch (err) { } },
                failure: function (errMsg) {

                }
            });
        }
        else {
            this.smlibHideLoadingMask();
            var d = new Date();
            var days = d.getDay();
            var yyyy = d.getFullYear();
            var MM = d.getMonth() + 1;
            var dd = d.getDate();
            var HH = d.getHours();
            var min = d.getMinutes();
            var ss = d.getSeconds();
            if (dd < 10) { dd = "0" + dd; }
            if (MM < 10) { MM = "0" + MM; }
            if (HH < 10) { HH = "0" + HH; }
            if (min < 10) { min = "0" + min; }
            if (ss < 10) { ss = "0" + ss }
            var filename = this.focuslist.name + "_" + yyyy + "" + MM + "" + dd + ".txt";
            var uriContent = "data:application/octet-stream," + encodeURIComponent(this.txtexportcontent);
            var downloadLink = document.createElement("a");
            downloadLink.href = uriContent;
            downloadLink.download = filename;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_GenerateTXTContentServiceResult = function (item, index) {
        var text = '';

        if (item.type == "CATALOGUE") {
            text = this.smlib_PrintForm_PDFMapCatalogueHeaderValue(item, this.cataloguetemplate_titlebox);
        }
        else {
            text = this.smlib_PrintForm_PDFMapURLHeaderValue(item, this.urltemplate_titlebox);
        }
        if (text == "") {
            text = "N/A";
        }
        this.txtexportcontent += text + "\r\n";
        this.smlib_PrintForm_GenerateTXTContentService(index + 1);
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_GeneratePDFTableService = function (index) {
        if (index < this.focuslist.item.length) {
            this.smlibShowLoadingMask("Export Item " + (index + 1));

            $.ajax({
                parent: this,
                parentindex: index,
                type: "POST",
                url: this.smlib_listbuilder_create_options.getitemdetailservice,
                data: '{"id": "' + this.focuslist.item[index].id + '", "listid": "' + this.focuslist.id + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (data) { try { this.parent.smlib_PrintForm_GeneratePDFTableServiceResult(JSON.parse(data.d), this.parentindex); } catch (err) { } },
                failure: function (errMsg) {

                }
            });
        }
        else {
            this.smlibHideLoadingMask();
            var d = new Date();
            var days = d.getDay();
            var yyyy = d.getFullYear();
            var MM = d.getMonth() + 1;
            var dd = d.getDate();
            var HH = d.getHours();
            var min = d.getMinutes();
            var ss = d.getSeconds();
            if (dd < 10) { dd = "0" + dd; }
            if (MM < 10) { MM = "0" + MM; }
            if (HH < 10) { HH = "0" + HH; }
            if (min < 10) { min = "0" + min; }
            if (ss < 10) { ss = "0" + ss }
            this.PDFDoc.save(this.focuslist.name + "_" + yyyy + "" + MM + "" + dd + ".pdf");
        }
    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_GeneratePDFTableServiceResult = function (item, index) {

        if (item.msg != "") {
            return;
        }

        this.pdfimagelist.image = [];
        if (item.type == "CATALOGUE") {
            this.smlib_PrintForm_GenerateCataloguePDFTableServiceResult(item, index);
        }
        else {
            this.smlib_PrintForm_GenerateUrlPDFTableServiceResult(item, index);
        }

    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_GenerateCataloguePDFTableServiceResult = function (item, index) {
        var itempageindex = index % this.smlib_listbuilder_create_options.pdfitemperpage
        if ((index > 0) && (itempageindex == 0)) {
            this.PDFDoc.addPage();
        }
        //for (var celli = 0; celli < this.cataloguetokencount; celli++) {
        //    this.PDFDoc.rect(this.smlib_listbuilder_create_options.pdfmarginleft + celli * this.smlib_listbuilder_create_options.pdfcataloguetokenwidth, this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin), this.smlib_listbuilder_create_options.pdfcataloguetokenwidth, this.smlib_listbuilder_create_options.pdfcataloguetokenheight, 'D');
        //}
        //this.PDFDoc.rect(this.smlib_listbuilder_create_options.pdfmarginleft, this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin) + this.smlib_listbuilder_create_options.pdfcataloguetokenheight, this.smlib_listbuilder_create_options.pdfheaderwidth, this.smlib_listbuilder_create_options.pdfheaderheight, 'D');
        this.PDFDoc.rect(this.smlib_listbuilder_create_options.pdfmarginleft, this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin), this.smlib_listbuilder_create_options.pdfheaderwidth, this.smlib_listbuilder_create_options.pdftableheight, 'D');
        //var cellvaluei = 0
        //for (var i = 1; i <= this.cataloguetokencount; i++) {
        //    if ($('#' + this.smlibid + '_printform_cataloguetemplate_token' + i).val() != "NOT_SET") {

        //        if (($('#' + this.smlibid + '_printform_cataloguetemplate_token' + i).val() == "COVER")&&(item.itemcoverbase64!="")) {                 
        //            try
        //            {                        
        //                var imgtype = "JPEG";
        //                if (item.itemcoverbase64.indexOf('png') >= 0) {
        //                    imgtype = "PNG";
        //                }
        //                this.pdfimagelist.image[this.pdfimagelist.image.length] = {
        //                    itemcoverbase64: item.itemcoverbase64,
        //                    imgtype: imgtype,
        //                    left: this.smlib_listbuilder_create_options.pdfmarginleft + cellvaluei * this.smlib_listbuilder_create_options.pdfcataloguetokenwidth,
        //                    top: this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin),
        //                    width: this.smlib_listbuilder_create_options.pdfcataloguetokenwidth,
        //                    height: this.smlib_listbuilder_create_options.pdfcataloguetokenheight
        //                };
        //            }
        //            catch (err)
        //            {

        //            }
        //        }
        //        else {
        //            var text = this.smlib_PrintForm_PDFMapCatalogueTokenValue(item, $('#' + this.smlibid + '_printform_cataloguetemplate_token' + i).val());
        //            if (text == "") {
        //                text = "N/A";
        //            }
        //            var textlist = this.PDFDoc.splitTextToSize(text, this.smlib_listbuilder_create_options.pdfcataloguetokenwidth);
        //            for (var j = 0; j < Math.floor(this.smlib_listbuilder_create_options.pdfcataloguetokenheight / this.smlib_listbuilder_create_options.pdffontheightrate) ; j++) {
        //                if (j > textlist.length - 1) {
        //                    break;
        //                }
        //                else {

        //                    this.PDFDoc.text(textlist[j], this.smlib_listbuilder_create_options.pdfmarginleft + cellvaluei * this.smlib_listbuilder_create_options.pdfcataloguetokenwidth + this.smlib_listbuilder_create_options.pdfcataloguetokenwidth / 2, this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin) + (this.smlib_listbuilder_create_options.pdffontsize / this.smlib_listbuilder_create_options.pdffontwidthrate) * (j + 1), 'center');
        //                }
        //            }
        //        }
        //        cellvaluei++;
        //    }
        //}
        var text = this.smlib_PrintForm_PDFMapCatalogueHeaderValue(item, this.cataloguetemplate_titlebox);
        if (text == "") {
            text = "N/A";
        }
        var textlist = this.PDFDoc.splitTextToSize(text, this.smlib_listbuilder_create_options.pdfheaderwidth);
        for (var j = 0; j < Math.floor(this.smlib_listbuilder_create_options.pdftableheight / this.smlib_listbuilder_create_options.pdffontheightrate) ; j++) {
            if (j > textlist.length - 1) {
                break;
            }
            else {
                //this.PDFDoc.text(textlist[j], this.smlib_listbuilder_create_options.pdfmarginleft + this.smlib_listbuilder_create_options.pdfheaderwidth / 2, this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin) + this.smlib_listbuilder_create_options.pdfcataloguetokenheight + (this.smlib_listbuilder_create_options.pdffontsize / this.smlib_listbuilder_create_options.pdffontwidthrate) * (j + 1), 'center');
                this.PDFDoc.text(textlist[j], this.smlib_listbuilder_create_options.pdfmarginleft + this.smlib_listbuilder_create_options.pdfheaderwidth / 2, this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin) + (this.smlib_listbuilder_create_options.pdffontsize / this.smlib_listbuilder_create_options.pdffontwidthrate) * (j + 1), 'center');
            }
        }

        if (this.pdfimagelist.image.length > 0) {
            this.smlib_PrintForm_GeneratePDFImages(this.pdfimagelist.image, 0, index);
        }
        else {
            this.smlib_PrintForm_GeneratePDFTableService(index + 1);
        }

    }
    $.fn.smlib_listbuilder_create.smlib_PrintForm_GenerateUrlPDFTableServiceResult = function (item, index) {
        var itempageindex = index % this.smlib_listbuilder_create_options.pdfitemperpage
        if ((index > 0) && (itempageindex == 0)) {
            this.PDFDoc.addPage();
        }
        //for (var celli = 0; celli < this.urltokencount; celli++) {
        //    this.PDFDoc.rect(this.smlib_listbuilder_create_options.pdfmarginleft + celli * this.smlib_listbuilder_create_options.pdfurltokenwidth, this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin), this.smlib_listbuilder_create_options.pdfurltokenwidth, this.smlib_listbuilder_create_options.pdfurltokenheight, 'D');
        //}
        //this.PDFDoc.rect(this.smlib_listbuilder_create_options.pdfmarginleft, this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin) + this.smlib_listbuilder_create_options.pdfurltokenheight, this.smlib_listbuilder_create_options.pdfheaderwidth, this.smlib_listbuilder_create_options.pdfheaderheight, 'D');
        this.PDFDoc.rect(this.smlib_listbuilder_create_options.pdfmarginleft, this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin), this.smlib_listbuilder_create_options.pdfheaderwidth, this.smlib_listbuilder_create_options.pdftableheight, 'D');

        //var cellvaluei = 0
        //for (var i = 1; i <= this.urltokencount; i++) {
        //    if ($('#' + this.smlibid + '_printform_urltemplate_token' + i).val() != "NOT_SET") {

        //        if (($('#' + this.smlibid + '_printform_urltemplate_token' + i).val() == "COVER")&&(item.itemcoverbase64!="")) {
        //            try {
        //                var imgtype = "JPEG";
        //                if (item.itemcoverbase64.indexOf('png') >= 0) {
        //                    imgtype = "PNG";
        //                }
        //                this.pdfimagelist.image[this.pdfimagelist.image.length] = {
        //                    itemcoverbase64: item.itemcoverbase64,
        //                    imgtype: imgtype,
        //                    left: this.smlib_listbuilder_create_options.pdfmarginleft + cellvaluei * this.smlib_listbuilder_create_options.pdfurltokenwidth,
        //                    top: this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin),
        //                    width: this.smlib_listbuilder_create_options.pdfurltokenwidth,
        //                    height: this.smlib_listbuilder_create_options.pdfurltokenheight
        //                };
        //            }
        //            catch (err) {

        //            }
        //        }
        //        else {
        //            var text = this.smlib_PrintForm_PDFMapURLTokenValue(item, $('#' + this.smlibid + '_printform_urltemplate_token' + i).val());
        //            if (text == "") {
        //                text = "N/A";
        //            }
        //            var textlist = this.PDFDoc.splitTextToSize(text, this.smlib_listbuilder_create_options.pdfurltokenwidth);
        //            for (var j = 0; j < Math.floor(this.smlib_listbuilder_create_options.pdfurltokenheight / this.smlib_listbuilder_create_options.pdffontheightrate) ; j++) {
        //                if (j > textlist.length - 1) {
        //                    break;
        //                }
        //                else {
        //                    this.PDFDoc.text(textlist[j], this.smlib_listbuilder_create_options.pdfmarginleft + cellvaluei * this.smlib_listbuilder_create_options.pdfurltokenwidth + this.smlib_listbuilder_create_options.pdfurltokenwidth / 2, this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin) + (this.smlib_listbuilder_create_options.pdffontsize / this.smlib_listbuilder_create_options.pdffontwidthrate) * (j + 1), 'center');
        //                }
        //            }
        //        }
        //        cellvaluei++;
        //    }
        //}
        var text = this.smlib_PrintForm_PDFMapURLHeaderValue(item, this.urltemplate_titlebox);
        if (text == "") {
            text = "N/A";
        }
        var textlist = this.PDFDoc.splitTextToSize(text, this.smlib_listbuilder_create_options.pdfheaderwidth);
        for (var j = 0; j < Math.floor(this.smlib_listbuilder_create_options.pdftableheight / this.smlib_listbuilder_create_options.pdffontheightrate) ; j++) {
            if (j > textlist.length - 1) {
                break;
            }
            else {
                //this.PDFDoc.text(textlist[j], this.smlib_listbuilder_create_options.pdfmarginleft + this.smlib_listbuilder_create_options.pdfheaderwidth / 2, this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin) + this.smlib_listbuilder_create_options.pdfurltokenheight + (this.smlib_listbuilder_create_options.pdffontsize / this.smlib_listbuilder_create_options.pdffontwidthrate) * (j + 1), 'center');
                this.PDFDoc.text(textlist[j], this.smlib_listbuilder_create_options.pdfmarginleft + this.smlib_listbuilder_create_options.pdfheaderwidth / 2, this.smlib_listbuilder_create_options.pdfmargintop + itempageindex * (this.smlib_listbuilder_create_options.pdftableheight + this.smlib_listbuilder_create_options.pdfitemmargin) + (this.smlib_listbuilder_create_options.pdffontsize / this.smlib_listbuilder_create_options.pdffontwidthrate) * (j + 1), 'center');
            }
        }

        if (this.pdfimagelist.image.length > 0) {
            this.smlib_PrintForm_GeneratePDFImages(this.pdfimagelist.image, 0, index);
        }
        else {
            this.smlib_PrintForm_GeneratePDFTableService(index + 1);
        }
    }
    // #endregion

}(jQuery));