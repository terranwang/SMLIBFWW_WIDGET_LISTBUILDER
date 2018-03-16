(function ($) {

    // #region blank listbuilder config
    $.fn.smlib_listbuilder_builder= function () {
        return {
            userid: '',
            mylist: [],
            sharelist: [],
            collaboratelist: [],
            msg: ''
        };
    }
    $.fn.smlib_listbuilder_list = function () {
        return {
            id: '',
            name: '',
            desc: '',
            creator: '',
            creation: '',
            creatorname:'',
            type: '',            
            itemcount: 0,
            item: [],
            shared:[],
            msg:''
        };
    }
    $.fn.smlib_listbuilder_item = function () {
        return {
            id: '',
            listid: '',
            title: '',
            desc: '',
            index:0,
            type: '',
            refid: '',            
            url: '',
            creator: '',
            creation: '',
            creatorname: '',
            itemcover: '',
            itemcoverbase64: '',
            itemlogo: '',
            msg: ''
        };
    }    
    // #endregion   
   

    // #region Default Options
    $.fn.smlib_listbuilder_option = function () {
        return {
            position: "relative",
            width: 1000,
            height: 800,
            top: 20,
            left: 20,          
            additional_css: "",
            loadingimg: "",
            bgfile: "",
            maxsearchresult: 10,
            webroot: "",
            widgetroot: "",
            titleroot: "",
            patronroot: "",
            loginuserid: "",
            autoadd: false,
            showlistbtn: true,
            showaddbtn: true,
            showcataloguebtn: true,
            showfilebtn: true,
            showyoutubebtn: true,
            showurlbtn: true,
            showprintbtn: true,
            showexportbtn: true,
            showsearchuserbtn: false,
            loadbuilderservice: "",
            savelistservice: "",
            deletelistservice: "",
            saveitemservice: "",
            deleteitemservice: "",
            reorderitemservice: "",
            savesharedemailservice: "",
            deletesharedemailservice:"",
            youtubesearchservice: "",
            youtubesearchkey: "",
            booksearchservice: "",
            patronsearchservice: "",
            filesearchservice: "",
            getitemdetailservice: "",
            emailsharedemailservice: "",
            sharetypechangeservice:"",

            pdfsizewidth: 210,
            pdfsizeheight: 297,
            pdfmarginleft: 5,
            pdfmarginright: 5,
            pdfmargintop: 7,
            pdfmarginbottom: 2,
            pdfitemperpage: 10,
            pdfitemmargin: 5,            
            pdffont: 'times',
            pdffonttype: 'normal',
            pdffontsize: 12,
            pdffontwidthrate: 2.834646,
            pdffontheightrate: 2.834646 * 2,
           
            pdftablewidth: 0,
            pdftableheight: 0,
            pdfheaderwidth: 0,
            pdfheaderheight: 0,
            pdfcataloguetokenwidth: 0,
            pdfcataloguetokenheight: 0,
            pdfurltokenwidth: 0,
            pdfurltokenheight: 0,
            
                
            catalogueprinttokens: [
                { key: "NOT_SET", value: "Please Choose a Field..." },
                { key: "ADD_PATRON", value: "Add To List By" },
                { key: "ADD_DATE", value: "Add To List Date" },
                { key: "AUTHOR", value: "Author" },
                { key: "CATALOGUER", value: "Catalogue By" },
                { key: "CATALOGUE_DATE", value: "Catalogue Date" },
                { key: "COVER", value: "Cover" },
                { key: "DESCRIPTION", value: "Description" },
                { key: "ISBN", value: "ISBN" },
                { key: "PUBLISHER", value: "Publisher" },
                { key: "PUBLISHER_WITH_PLACE", value: "Publisher / Place" },
                { key: "PUBLISHER_DATE", value: "Publisher Date" },
                { key: "PUBLISHER_PLACE", value: "Publisher Place" },
                { key: "SERIES", value: "Series" },
                { key: "TITLE", value: "Title" },
                { key: "URL", value: "URL" }
            ],
            urlprinttokens: [
                { key: "NOT_SET", value: "Please Choose a Field..." },
                { key: "ADD_PATRON", value: "Add To List By" },
                { key: "ADD_DATE", value: "Add To List Date" },
                { key: "COVER", value: "Cover" },
                { key: "DESCRIPTION", value: "Description" },               
                { key: "TITLE", value: "Title" },
                { key: "URL", value: "URL" }
            ]
        };
    }
    // #endregion

    // #region Common Functions
    
    // #endregion
}(jQuery));