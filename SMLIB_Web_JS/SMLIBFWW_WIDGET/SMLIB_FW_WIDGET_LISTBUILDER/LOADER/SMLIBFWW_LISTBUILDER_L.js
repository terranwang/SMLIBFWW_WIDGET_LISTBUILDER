﻿var SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST = JSON.parse('{"ITEMS":[]}');



if (typeof jsPDF === "undefined") {
    SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS[SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS.length] =
     JSON.parse('{"WIDGETNAME":"LISTBUILDER","WIDGETELEMENT":"jspdf.debug","TYPE":"JS","FILETYPE":"JS","VERSION":"2.0.0"}');
    SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS[SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS.length] =
    JSON.parse('{"WIDGETNAME":"LISTBUILDER","WIDGETELEMENT":"addimage","TYPE":"JS","FILETYPE":"JS","VERSION":"2.0.0"}');
    SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS[SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS.length] =
    JSON.parse('{"WIDGETNAME":"LISTBUILDER","WIDGETELEMENT":"from_html","TYPE":"JS","FILETYPE":"JS","VERSION":"2.0.0"}');
    SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS[SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS.length] =
    JSON.parse('{"WIDGETNAME":"LISTBUILDER","WIDGETELEMENT":"split_text_to_size","TYPE":"JS","FILETYPE":"JS","VERSION":"2.0.0"}');
}



//JQUERY
SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS[SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS.length] =
      JSON.parse('{"WIDGETNAME":"LISTBUILDER","WIDGETELEMENT":"SMLIBFWW_LISTBUILDER_JQUERY.min","TYPE":"JQUERY","FILETYPE":"JS","VERSION":"2.0.0"}');

//WIDGET
SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS[SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS.length] =
      JSON.parse('{"WIDGETNAME":"LISTBUILDER","WIDGETELEMENT":"SMLIBFWW_LISTBUILDER_W_CREATE","TYPE":"WIDGET","FILETYPE":"JS","VERSION":"2.0.0"}');


//CSS
SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS[SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST.ITEMS.length] =
      JSON.parse('{"WIDGETNAME":"LISTBUILDER","WIDGETELEMENT":"SMLIBFWW_LISTBUILDER_CSS.min","TYPE":"CSS","FILETYPE":"CSS","VERSION":"2.0.0"}');

AttachWidgetContentList(SMLIB_FW_WIDGET_LISTBUILDER_LOADER_LIST);