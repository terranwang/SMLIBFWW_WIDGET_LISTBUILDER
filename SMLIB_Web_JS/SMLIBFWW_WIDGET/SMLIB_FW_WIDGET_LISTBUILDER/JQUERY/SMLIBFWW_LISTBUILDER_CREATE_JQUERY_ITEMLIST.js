(function ($) {   
    // #region inner html 
    $.fn.smlib_listbuilder_create.smlib_ItemList_InnerHTML = function (smlibid, smlib_listbuilder_create_options) {
        var innerhtml = '';        
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_itemlist_headerdiv" ';
        innerhtml += 'class="header"';
        innerhtml += '>';
        innerhtml += '<h5>List</h5>';
        innerhtml += '</div>';
        innerhtml += '<div ';
        innerhtml += 'id="' + smlibid + '_itemlist_contentdiv" ';
        innerhtml += 'class="content" style="height:' + (smlib_listbuilder_create_options.height - 100) + 'px;min-height:' + (smlib_listbuilder_create_options.height - 100) + 'px;max-height:' + (smlib_listbuilder_create_options.height - 100) + 'px"';
        innerhtml += '>';
        innerhtml += '</div>';      
        return innerhtml;
    }
    // #endregion

    // #region Assign Function and Veriables
    $.fn.smlib_listbuilder_create.smlib_ItemList_AssignFunctions = function (maindiv) {
        $.fn.smlib_listbuilder_create.smlib_ItemList_AssignControls(maindiv);
        maindiv.smlib_ItemList_Load = $.fn.smlib_listbuilder_create.smlib_ItemList_Load;
        maindiv.smlib_ItemList_ListItemDiv = $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemDiv;        
        maindiv.smlib_ItemList_HeaderClick = $.fn.smlib_listbuilder_create.smlib_ItemList_HeaderClick;
        maindiv.smlib_ItemList_ListItemClick = $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemClick;
        maindiv.smlib_ItemList_ListItemEditClick = $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemEditClick;
        maindiv.smlib_ItemList_ListItemDeleteClick = $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemDeleteClick;
        maindiv.smlib_ItemList_AutoAddChange = $.fn.smlib_listbuilder_create.smlib_ItemList_AutoAddChange;
        maindiv.smlib_ItemList_ReorderItems = $.fn.smlib_listbuilder_create.smlib_ItemList_ReorderItems;
        maindiv.smlib_ItemList_ListItemSaveService = $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemSaveService;
        maindiv.smlib_ItemList_ListItemSaveServiceResult = $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemSaveServiceResult;
        maindiv.smlib_ItemList_ListItemDeleteService = $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemDeleteService;
        maindiv.smlib_ItemList_ListItemDeleteServiceResult = $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemDeleteServiceResult;
        maindiv.smlib_ItemList_ReorderItemService = $.fn.smlib_listbuilder_create.smlib_ItemList_ReorderItemService;
        maindiv.smlib_ItemList_GetItemByID = $.fn.smlib_listbuilder_create.smlib_ItemList_GetItemByID;
        maindiv.smlib_ItemList_MapItemType = $.fn.smlib_listbuilder_create.smlib_ItemList_MapItemType;
        maindiv.smlib_ItemList_MapItemLogo = $.fn.smlib_listbuilder_create.smlib_ItemList_MapItemLogo;
    }
    $.fn.smlib_listbuilder_create.smlib_ItemList_AssignControls = function (maindiv) {
       
    }
    // #endregion

    // #region Global functions
    $.fn.smlib_listbuilder_create.smlib_ItemList_GetItemByID = function (itemid, item) {       
        for (var i = 0; i < this.focuslist.item.length; i++) {
            if (this.focuslist.item[i].id == itemid) {
                if (item != null)
                {
                    this.focuslist.item[i] = item;
                }
                return this.focuslist.item[i];
            }
        }
        return null;
    }
    $.fn.smlib_listbuilder_create.smlib_ItemList_MapItemLogo = function (item) {

        var templogo = "";      
        if (item.url.toLowerCase().indexOf("worldlii.org") > 0)
        {
            templogo= "WORLDLII";
        } else if (item.url.toLowerCase().indexOf("austlii.edu.au") > 0) {
            templogo = "AUSTLII";
        } else if (item.url.toLowerCase().indexOf("ebscohost.com") > 0) {
            templogo = "EBSCO";
        } else if (item.url.toLowerCase().indexOf("google.com") > 0) {
            templogo= "GOOGLE";
        } else if (item.url.toLowerCase().indexOf("gutenberg.org") > 0) {
            templogo = "GUTENBERG";
        } else if (item.url.toLowerCase().indexOf("worldbookonline.com") > 0) {
            templogo = "WORLDBOOK";
        } else if (item.url.toLowerCase().indexOf("school.eb.com.au") > 0) {
            templogo = "BRITANNICA";
        } else if (item.url.toLowerCase().indexOf("proquest.com") > 0) {
            templogo = "PROQUEST";
        } else if (item.url.toLowerCase().indexOf("tv4education.com") > 0) {
            templogo = "TV4EDUCATION";
        } else if (item.url.toLowerCase().indexOf("youtube.com") > 0) {
            templogo = "YOUTUBE";
        }

        if (templogo == "")
        {
            if (templogo.toLowerCase().indexOf("worldlii") > 0) {
                templogo = "WORLDLII";
            } else if (templogo.toLowerCase().indexOf("austlii") > 0) {
                templogo = "AUSTLII";
            } else if (templogo.toLowerCase().indexOf("ebsco") > 0) {
                templogo = "EBSCO";
            } else if (templogo.toLowerCase().indexOf("google") > 0) {
                templogo = "GOOGLE";
            } else if (templogo.toLowerCase().indexOf("gutenberg") > 0) {
                templogo = "GUTENBERG";
            } else if (templogo.toLowerCase().indexOf("worldbook") > 0) {
                templogo = "WORLDBOOK";
            } else if (templogo.toLowerCase().indexOf("britannica") > 0) {
                templogo = "BRITANNICA";
            } else if (templogo.toLowerCase().indexOf("proquest") > 0) {
                templogo = "PROQUEST";
            } else if (templogo.toLowerCase().indexOf("tv4education") > 0) {
                templogo = "TV4EDUCATION";
            } else if (templogo.toLowerCase().indexOf("youtube.com") > 0) {
                templogo = "YOUTUBE";
            }
        }

        if (templogo == "")
        {
            switch (item.type.toUpperCase()) {
                case "CATALOGUE":
                    templogo = "CATALOGUE"
                    break;
                case "FILE":
                    templogo = "FILE"
                    break;
                case "YOUTUBE":
                    templogo = "YOUTUBE"
                    break;
                case "URL":
                    templogo = "URL"
                default:
                   
                    break;
            }
        }

        item.itemlogo=templogo;
        switch (templogo) {
            case "WORLDLII":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_WORLDLII.png" alt="WORLDLII" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;WORLDLII</h5>';
                break;
            case "AUSTLII":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_AUSTLII.png" alt="AUSTLII" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;AUSTLII</h5>';
                break;
            case "EBSCO":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_EBSCO.png" alt="EBSCO" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;EBSCO</h5>';
                break;
            case "GOOGLE":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_GOOGLE.png" alt="GOOGLE" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;GOOGLE</h5>';
                break;
            case "GUTENBERG":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_GUTENBERG.png" alt="GUTENBERG" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;GUTENBERG</h5>';
                break;
            case "WORLDBOOK":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_WORLDBOOK.png" alt="WORLDBOOK" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;WORLDBOOK</h5>';
                break;
            case "BRITANNICA":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_BRITANNICA.png" alt="BRITANNICA" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;BRITANNICA</h5>';
                break;
            case "PROQUEST":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_PROQUEST.png" alt="PROQUEST" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;PROQUEST</h5>';
                break;
            case "TV4EDUCATION":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_TV4EDUCATION.png" alt="TV4EDUCATION" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;TV4EDUCATION</h5>';
                break;
            case "YOUTUBE":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_YOUTUBE.png" alt="YOUTUBE" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;YOUTUBE</h5>';
                break;
            case "CATALOGUE":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_CATALOGUE.png" alt="CATALOGUE" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;CATALOGUE</h5>';
                break;
            case "FILE":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_FILE.png" alt="FILE" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;FILE</h5>';
                break;
            case "URL":
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemLogo_LINK.png" alt="LINK" />';
                return '<h5>&nbsp;&nbsp;&nbsp;&nbsp;URL</h5>';
                break;
            default:
                break;

        }
        
        return "";
    }
    $.fn.smlib_listbuilder_create.smlib_ItemList_MapItemType = function (item) {
        switch (item.type.toUpperCase())
        {
            case "CATALOGUE":
                //return '<i class="fa fa-book fa-fw" style="width:auto;"></i>';
                return '';
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemType_CATALOGUE.png" />';
                break;
            case "FILE":
                //return '<i class="fa fa-file fa-fw" style="width:auto;"></i>';
                return '';
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemType_FILE.png" />';
                break;
            case "YOUTUBE":
                //return '<i class="fa fa-youtube fa-fw" style="width:auto;"></i>';
                return '';
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemType_YOUTUBE.png" />';
                break;
            case "URL":
            default:
                //return '<i class="fa fa-link fa-fw" style="width:auto;"></i>';
                return '';
                //return '<img class="logoimg" src="' + this.smlib_listbuilder_create_options.widgetroot + 'IMG/ItemType_URL.png" />';
                break;           
        }
    }
    // #endregion

    // #region load functions
    $.fn.smlib_listbuilder_create.smlib_ItemList_Load = function (list) {
        if (list == null) {
            list = this.focuslist;
        }
        else {
            this.focuslist = list;
        }
        var descshort = this.focuslist.desc;
        if (descshort.length > 50) {
            descshort = descshort.substr(0, 50) + "...";
        }
        $('#' + this.smlibid + '_itemlist_headerdiv').html('<h5><a onclick="' + this.smlib_AssignParentActions('smlib_ItemList_HeaderClick()') + '">' + this.focuslist.name + '</a>&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="' + this.smlibid + '_itemlist_autoadd" class="form-input" onchange="' + this.smlib_AssignParentActions('smlib_ItemList_AutoAddChange()') + '"/>&nbsp;Quick Add</h5><h5>&nbsp;&nbsp;&nbsp;&nbsp;' + descshort + '</h5>');



        if (this.smlib_listbuilder_create_options.autoadd) { document.getElementById(this.smlibid + '_itemlist_autoadd').checked = true; }
        $('#' + this.smlibid + '_itemlist_contentdiv').html('<div id="' + this.smlibid + '_itemlist_contentdiv_occupy" style="z-index:200px;position:relative;height:0px;">&nbsp;</div>');
        var top = 1;       
        for (var i = 0; i < list.item.length; i++) {
            $('#' + this.smlibid + '_itemlist_contentdiv_occupy').append(this.smlib_ItemList_ListItemDiv(list.item[i], top));
            top += $('#' + this.smlibid + "_listitemdiv_" + list.item[i].index).innerHeight() + 10;            
        }
        $('#' + this.smlibid + '_itemlist_contentdiv_occupy').css({ height: top + 'px' });

        $('.listitemdragdiv').mousedown(function (e) {
            if (e.which === 1) {
                var listitemdiv = $('#' + $(this).attr("listitemdivid"));
                //console.log("listitemdivid " + $(this).attr("listitemdivid"));
                //console.log("listitemdiv " + listitemdiv);
                var listitemdiv_id = listitemdiv.attr('id');
                var listitemdiv_smlibid = listitemdiv.attr('smlibid');
                var parent_height = listitemdiv.parent().innerHeight();
                var top = parseInt(listitemdiv.css('top'));
                var original_ypos = listitemdiv.position().top; //original ypos
                //var drag_min_ypos = 0 - original_ypos;
                //var drag_max_ypos = parent_height - original_ypos - listitemdiv.outerHeight();
                var drag_start_ypos = e.clientY;
                var my_ypos = original_ypos;
                var prev_listitemdiv = listitemdiv.prev('.listitem');
                var next_listitemdiv = listitemdiv.next('.listitem');
                var prev_listitemdiv_ypos = prev_listitemdiv.length > 0 ? prev_listitemdiv.position().top : '';
                var next_listitemdiv_ypos = next_listitemdiv.length > 0 ? next_listitemdiv.position().top : '';
                $(window).on('mousemove', function (e) {
                    //console.log("mousemove drag");
                    listitemdiv.addClass('drag');
                    var direction = my_ypos > listitemdiv.position().top ? 'up' : 'down';
                    //console.log("direction " + direction);
                    var new_top = top + (e.clientY - drag_start_ypos);
                    //console.log("new_top " + new_top);
                    my_ypos = listitemdiv.position().top;
                    //console.log("my_ypos " + my_ypos);
                    //console.log("prev_listitemdiv_ypos " + prev_listitemdiv_ypos);
                    listitemdiv.css({ top: new_top + 'px' });
                    //if (new_top < drag_min_ypos) { listitemdiv.css({ top: drag_min_ypos + 'px' }); }
                    //if (new_top > drag_max_ypos) { listitemdiv.css({ top: drag_max_ypos + 'px' }); }
                    //Check position over others
                    if (direction == 'down' && next_listitemdiv_ypos != '') {
                        if (my_ypos > next_listitemdiv_ypos + (next_listitemdiv.outerHeight(true) - listitemdiv.outerHeight(true))) { //crossed next listitemdiv                           
                            next_listitemdiv.css({ top: (parseInt(next_listitemdiv.css('top')) - listitemdiv.outerHeight(true)) + 'px' }); //up once
                            var tmp_order = next_listitemdiv.attr('smlib-order');
                            next_listitemdiv.attr('smlib-order', listitemdiv.attr('smlib-order')); //switch order
                            listitemdiv.attr('smlib-order', tmp_order);
                            prev_listitemdiv = next_listitemdiv; next_listitemdiv = next_listitemdiv.nextAll('.listitem:not(.drag)').first();
                            prev_listitemdiv_ypos = prev_listitemdiv.length > 0 ? prev_listitemdiv.position().top : '';
                            next_listitemdiv_ypos = next_listitemdiv.length > 0 ? next_listitemdiv.position().top : '';
                        }
                    } else if (direction == 'up' && prev_listitemdiv_ypos != '') {
                        //console.log("CHECK crossed prev listitemdiv ");
                        if (my_ypos < prev_listitemdiv_ypos) { //crossed prev listitemdiv   
                            //console.log("PERFORM crossed prev listitemdiv ");
                            prev_listitemdiv.css({ top: (parseInt(prev_listitemdiv.css('top')) + listitemdiv.outerHeight(true)) + 'px' }); //down once
                            var tmp_order = prev_listitemdiv.attr('smlib-order');
                            prev_listitemdiv.attr('smlib-order', listitemdiv.attr('smlib-order')); //switch order
                            listitemdiv.attr('smlib-order', tmp_order);
                            next_listitemdiv = prev_listitemdiv; prev_listitemdiv = prev_listitemdiv.prevAll('.listitem:not(.drag)').first();
                            prev_listitemdiv_ypos = prev_listitemdiv.length > 0 ? prev_listitemdiv.position().top : '';
                            next_listitemdiv_ypos = next_listitemdiv.length > 0 ? next_listitemdiv.position().top : '';
                        }
                    }
                });
                $(window).on('mouseup', function (e) {
                    //console.log("mouseup " + e.which);
                    if (e.which === 1) {
                        $('.listitem').removeClass('drag');
                        $(window).off('mouseup mousemove');
                        //Reorder and reposition all
                        var con = null;
                        con = document.getElementById(listitemdiv_smlibid + '_hiddenbutton');
                        if (con != null) {
                            con.parent.smlib_ItemList_ReorderItems();
                        }
                    }
                });
            }
        });


    }
    $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemDiv = function (item,top) {
        var subinnerhtml = "";
        subinnerhtml += '<div class="itemdiv listitem"  id="' + this.smlibid + "_listitemdiv_" + item.index + '" smlibid="' + this.smlibid + '" smlib-order="' + item.index + '" style="top:'+top+'px;">';
        subinnerhtml += '<h5>';
        var typeimg = this.smlib_ItemList_MapItemType(item);
        if (typeimg != "")
        {
            subinnerhtml += typeimg;
            subinnerhtml += '&nbsp;&nbsp;'
        }       
       
        subinnerhtml += '<strong role="button" onclick="' + this.smlib_AssignParentActions('smlib_ItemList_ListItemClick(\'' + item.id + '\')') + '">' + item.title + '</strong>';
        subinnerhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<a href="' + item.url + '" target="_blank">';
        subinnerhtml += '<i class="fa fa-eye fa-fw"></i>';
        subinnerhtml += '</a>';
        subinnerhtml += '&nbsp;&nbsp;<i class="fa fa-arrows-v fa-fw listitemdragdiv" listitemdivid="' + this.smlibid + "_listitemdiv_" + item.index + '"></i>';
        subinnerhtml += '&nbsp;&nbsp;<i class="fa fa-pencil-square-o fa-fw" onclick="' + this.smlib_AssignParentActions('smlib_ItemList_ListItemEditClick(\'' + item.id + '\')') + '"></i>';
        subinnerhtml += '&nbsp;&nbsp;<i class="fa fa-trash fa-fw" onclick="' + this.smlib_AssignParentActions('smlib_ItemList_ListItemDeleteClick(\'' + item.id + '\')') + '"></i>';
        subinnerhtml += '</h5>';

        var logoimg = this.smlib_ItemList_MapItemLogo(item);
        if (logoimg != "") {
            subinnerhtml += '<h5>&nbsp;&nbsp;&nbsp;&nbsp;';
            subinnerhtml += logoimg;
            subinnerhtml += '&nbsp;&nbsp;'
            subinnerhtml += '</h5>';
        }

        subinnerhtml += '<h5>&nbsp;&nbsp;&nbsp;&nbsp;By ' + item.creator + ' On ' + item.creation + '</h5>';
        subinnerhtml += '</div>';
        return subinnerhtml;
    }
    // #endregion

    // #region click actions 
    $.fn.smlib_listbuilder_create.smlib_ItemList_HeaderClick = function (itemid) {
        this.smlib_Content_LoadContent("BUILDER_LIST");
    }
    $.fn.smlib_listbuilder_create.smlib_ItemList_AutoAddChange = function (itemid) {
        this.smlib_listbuilder_create_options.autoadd = document.getElementById(this.smlibid + '_itemlist_autoadd').checked;        
    }
    $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemClick = function (itemid) {
        var item = this.smlib_ItemList_GetItemByID(itemid);
        if (item != null)
        {
            this.focusitem = item;
            this.smlib_Content_LoadContent("ITEM_DETAIL");
        }
    }
    $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemEditClick = function (itemid) {
        var item = this.smlib_ItemList_GetItemByID(itemid);
        if (item != null) {
            this.focusitem = item;
            this.smlib_Content_LoadContent("EDIT_ITEM");
        }
    }     
    $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemDeleteClick = function (itemid) {
        var item = this.smlib_ItemList_GetItemByID(itemid);
        if (item != null) {
            this.smlib_ItemList_ListItemDeleteService(item);
        }
    }
    $.fn.smlib_listbuilder_create.smlib_ItemList_ReorderItems = function () {
        var poststring = "";
        var postindex=0;
        for (var i = 0; i < this.focuslist.item.length; i++) {           
            var newindex = parseInt($('#' + this.smlibid + "_listitemdiv_" + this.focuslist.item[i].index).attr("smlib-order"));
            if (isNaN(newindex))
            {
                newindex = 1;
            }
            if (this.focuslist.item[i].index != newindex) {
                this.focuslist.item[i].index = newindex;
                poststring = poststring + ",\"id" + postindex + "\":\"" + this.focuslist.item[i].id + "\",\"order" + postindex + "\":\"" + this.focuslist.item[i].index+"\"";
                postindex++;
            }
        }
        poststring = "{\"listid\": \"" + this.focuslist.id + "\"" + poststring + "}";
        this.smlib_ItemList_ReorderItemService(poststring);                
    }
    // #endregion

    // #region service 
    $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemSaveService = function (item) {
        if (item == null) {
            item = this.focusitem;
        }
        var urlfalg = true;
        for (var i = 0; i < this.focuslist.item.length; i++) {
            if (this.focuslist.item[i].url.toUpperCase()==item.url.toUpperCase())
            {
                urlfalg = false;
                break;
            }
        }
        if (urlfalg) {
            this.smlibShowLoadingMask("Save Item...");

            $.ajax({
                parent: this,
                type: "POST",
                url: this.smlib_listbuilder_create_options.saveitemservice,
                data: '{"id": "' + item.id + '", "listid": "' + this.focuslist.id + '", "title": "' + item.title.replace(/"/g, '\\"') + '", "desc":"' + item.desc.replace(/"/g, '\\"') + '", "index":"' + item.index + '", "type":"' + item.type + '", "refid":"' + item.refid + '", "url":"' + item.url + '", "itemcover":"' + item.itemcover + '", "itemlogo":"' + item.itemlogo + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: true,
                success: function (data) { try { this.parent.smlib_ItemList_ListItemSaveServiceResult(JSON.parse(data.d)); } catch (err) { alert("Save Item Fail " + err); } },
                failure: function (errMsg) {
                    alert("Save Item Fail " + errMsg);
                }
            });
        }
        else
        {
            this.smlib_Content_LoadContent("ITEM_LIST");
        }
    }
    $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemSaveServiceResult = function (item) {
        if (this.smlib_ItemList_GetItemByID(item.id,item) == null)
        {
            this.focuslist.item[this.focuslist.item.length] = item;
        }        
        this.smlib_BuilderList_GetListByID(this.focuslist.id, this.focuslist);
        this.smlibHideLoadingMask();
        this.smlib_Content_LoadContent("ITEM_LIST");

    }
    $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemDeleteService = function (item) {
        if (item == null) {
            item = this.focusitem;
        }
        this.smlibShowLoadingMask("Delete Item...");
        $.ajax({
            parent: this,
            type: "POST",
            url: this.smlib_listbuilder_create_options.deleteitemservice,
            data: '{"id": "' + item.id + '", "listid": "' + this.focuslist.id + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (data) { try { this.parent.smlib_ItemList_ListItemDeleteServiceResult(JSON.parse(data.d)); } catch (err) { alert("Delete Item Fail " + err); } },
            failure: function (errMsg) {
                alert("Delete Item Fail " + errMsg);
            }
        });        
    }
    $.fn.smlib_listbuilder_create.smlib_ItemList_ListItemDeleteServiceResult = function (item) {
        var list = this.focuslist;
        var templist = list.item;
        list.item = [];
        for (var i = 0; i < templist.length; i++) {
            if (templist[i].id == item.id) {

            }
            else {
                list.item[list.item.length] = templist[i];
            }
        }
        this.focuslist = list;
        this.smlib_BuilderList_GetListByID(this.focuslist.id, this.focuslist);
        this.smlibHideLoadingMask();
        this.smlib_Content_LoadContent("ITEM_LIST");
    }
    $.fn.smlib_listbuilder_create.smlib_ItemList_ReorderItemService = function (poststring) {
        if (poststring == null) {
            poststring = "{\"listid\": \"" + this.focuslist.id + "\"}";
        }
        this.smlibShowLoadingMask("Reorder List...");
        $.ajax({
            parent: this,
            type: "POST",
            url: this.smlib_listbuilder_create_options.reorderitemservice,
            data: JSON.parse(poststring),
            async: true,
            success: function (data) { try { this.parent.smlib_ListForm_AddServiceResult(data); } catch (err) { alert("Reorder Item Fail " + err); } },
            failure: function (errMsg) {                
                alert("Reorder Item Fail " + errMsg);
            }
        });
    }   
    // #endregion

}(jQuery));