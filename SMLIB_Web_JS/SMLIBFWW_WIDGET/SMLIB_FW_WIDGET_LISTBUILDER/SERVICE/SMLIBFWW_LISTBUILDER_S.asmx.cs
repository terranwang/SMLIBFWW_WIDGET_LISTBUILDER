using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using SmartLibraryLib.Utils;
using SmartLibraryLib.Object.Controller;
using SmartLibraryLib.Object.Object;
using SMLIBFWW_WIDGET_LISTBUILDER.CLASS;


using SMLIB_FW_WIDGET_SEARCH_ENGINE = SMLIBFWW_WIDGET.SMLIB_Web_JS.SMLIBFWW_WIDGET.SMLIB_FW_WIDGET_SEARCH_ENGINE;
namespace SMLIBFWW_WIDGET_LISTBUILDER.SMLIB_Web_JS.SMLIBFWW_WIDGET.SMLIB_FW_WIDGET_LISTBUILDER.SERVICE
{
    /// <summary>
    /// Summary description for SMLIBFWW_LISTBUILDER_S
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class SMLIBFWW_LISTBUILDER_S : System.Web.Services.WebService
    {
        #region framework function
        public String PatronID
        {
            get
            {
                return SMLIB_HTTPContextExtractoe.GetPatronID(System.Web.HttpContext.Current);
            }
        }
        public String UserValidateMessage()
        {
            return SMLIB_LoginUtils.UserValidateMessage("LOGIN");
        }
        public SmartTranslator Translator = new SmartTranslator();
        public void locallog(String message, String loglevelstr)
        {
            SmartLibraryLib.Utils.LocalLogger.locallog(this.GetType().FullName, message, loglevelstr);
        }
        #endregion
        #region service
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
        [WebMethod]
        public string LoadListBuilder()
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    SMLIB_CON_SMLIB_LISTBUILDER_LIST con = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_LIST();
                    rv = con.getAllListJsonByPatronID(pobj.PatronID, true);
                }
                catch (Exception ex)
                {
                    rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("LoadListBuilder exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("LoadListBuilder error " + msg, "C");

            }
            locallog("LoadListBuilder rv " + rv, "D");
            locallog("LoadListBuilder end", "M");
            return rv;

        }
        [WebMethod]
        public string SaveList(String id, String name, String desc, String type)
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    SMLIB_CON_SMLIB_LISTBUILDER_LIST con = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_LIST();
                    SMLIB_OBJ_SMLIB_LISTBUILDER_LIST obj = null;
                    if (!String.IsNullOrEmpty(id))
                    {
                        int iid = 0;
                        int.TryParse(id, out iid);
                        if (iid > 0)
                        {
                            obj = con.getByID(iid);
                        }
                    }
                    if (obj == null)
                    {
                        obj = new SMLIB_OBJ_SMLIB_LISTBUILDER_LIST();
                        obj.LIST_NAME = name;
                        obj.LIST_DESCRIPTION = desc;
                        obj.LIST_TYPE = type.ToUpper().Trim();
                        obj.LIST_CREATOR = pobj.PatronID;
                        obj.LIST_CREATION = DateTime.Now;
                        obj.LIST_CREATOR_NAME = pobj.firstname + " " + pobj.SURNAME;
                        if (!String.IsNullOrEmpty(obj.LIST_NAME))
                        {
                            con.insertOrNullItem(ref obj);
                            obj = con.getByListNamePatronID(name, pobj.PatronID);
                            if (obj != null)
                            {
                                rv = obj.toJSONString();
                            }
                            else
                            {
                                rv = "{\"msg\":\"Save list failed.\"}";
                                locallog("SaveList error Save list failed.", "C");
                            }
                        }
                        else
                        {
                            rv = "{\"msg\":\"List name is required.\"}";
                            locallog("SaveList error List name is required.", "C");
                        }
                    }
                    else
                    {
                        if (obj.LIST_CREATOR == pobj.PatronID)
                        {
                            obj.LIST_NAME = name;
                            obj.LIST_DESCRIPTION = desc;
                            if (!String.IsNullOrEmpty(obj.LIST_NAME))
                            {
                                obj.updateItem();
                                obj.getAllSubs();
                                rv = obj.toJSONString();
                            }
                            else
                            {
                                rv = "{\"msg\":\"List name is required.\"}";
                                locallog("SaveList error List name is required.", "C");
                            }
                        }
                        else
                        {
                            rv = "{\"msg\":\"Only owner can alter the list.\"}";
                            locallog("SaveList error Only owner can alter the list.", "C");
                        }
                    }
                }
                catch (Exception ex)
                {
                    rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("SaveList exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("SaveList error " + msg, "C");

            }
            locallog("SaveList rv " + rv, "D");
            locallog("SaveList end", "M");
            return rv;

        }
        [WebMethod]
        public string DeleteList(String id)
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    SMLIB_CON_SMLIB_LISTBUILDER_LIST con = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_LIST();
                    SMLIB_OBJ_SMLIB_LISTBUILDER_LIST obj = null;
                    if (!String.IsNullOrEmpty(id))
                    {
                        int iid = 0;
                        int.TryParse(id, out iid);
                        if (iid > 0)
                        {
                            obj = con.getByID(iid);
                        }
                    }
                    if (obj == null)
                    {
                        rv = "{\"msg\":\"List not found.\"}";
                        locallog("DeleteList error List not found.", "C");
                    }
                    else
                    {
                        if (obj.LIST_CREATOR == pobj.PatronID)
                        {
                            obj.deleteAllSubs();
                            obj.deleteItem();
                            rv = obj.toJSONString();
                        }
                        else
                        {
                            rv = "{\"msg\":\"Only owner can delete the list.\"}";
                            locallog("DeleteList error Only owner can delete the list.", "C");
                        }
                    }
                }
                catch (Exception ex)
                {
                    rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("DeleteList exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("DeleteList error " + msg, "C");

            }
            locallog("DeleteList rv " + rv, "D");
            locallog("DeleteList end", "M");
            return rv;
        }
        [WebMethod]
        public string SaveItem(String id, String listid, String title, String desc, String index, String type, String refid, String url, String itemcover, String itemlogo)
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    int lid = 0;
                    int iid = 0;
                    int i = 0;
                    SMLIB_CON_SMLIB_LISTBUILDER_LIST con = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_LIST();
                    SMLIB_OBJ_SMLIB_LISTBUILDER_LIST obj = null;
                    if (!String.IsNullOrEmpty(listid))
                    {
                        int.TryParse(listid, out lid);
                        if (lid > 0)
                        {
                            obj = con.getByID(lid);
                        }
                    }
                    if (obj == null)
                    {
                        rv = "{\"msg\":\"List is not found.\"}";
                        locallog("SaveItem error List is not found.", "C");
                    }
                    else
                    {
                        List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> colllist = con.getCollaborateByPatronID(pobj.PatronID);
                        if ((obj.LIST_CREATOR == pobj.PatronID) || (colllist.Find(x => x.LIST_ID.Equals(obj.LIST_ID)) != null))
                        {
                            SMLIB_CON_SMLIB_LISTBUILDER_ITEM itemcon = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_ITEM();
                            SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM itemobj = null;
                            if (!String.IsNullOrEmpty(id))
                            {
                                int.TryParse(id, out iid);
                                if (iid > 0)
                                {
                                    itemobj = itemcon.getByID(iid);
                                }
                            }

                            if (itemobj == null)
                            {
                                itemobj = new SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM();
                                itemobj.ITEM_LIST_ID = Convert.ToDouble(lid);
                                itemobj.ITEM_TITLE = title;
                                itemobj.ITEM_DESCRIPTION = desc;
                                int.TryParse(index, out i);
                                if (i <= 0) { i = 1; }
                                itemobj.ITEM_INDEX = i;
                                itemobj.ITEM_TYPE = type;
                                itemobj.ITEM_REF_ID = refid;
                                itemobj.ITEM_URL = url;
                                itemobj.ITEM_COVER = itemcover;
                                itemobj.ITEM_LOGO = itemlogo;
                                itemobj.ITEM_CREATOR = pobj.PatronID;
                                itemobj.ITEM_CREATION = DateTime.Now;
                                itemobj.ITEM_CREATOR_NAME = pobj.firstname + " " + pobj.SURNAME;
                                if (!String.IsNullOrEmpty(itemobj.ITEM_TITLE))
                                {
                                    itemcon.insertOrNullItem(ref itemobj);
                                    itemobj = itemcon.getByItemTitleListID(itemobj.ITEM_TITLE, itemobj.ITEM_LIST_ID);
                                    if (itemobj != null)
                                    {
                                        rv = itemobj.toJSONString();
                                    }
                                    else
                                    {
                                        rv = "{\"msg\":\"Save item failed.\"}";
                                        locallog("SaveList error Save item failed.", "C");
                                    }
                                }
                                else
                                {
                                    rv = "{\"msg\":\"Item title is required.\"}";
                                    locallog("SaveList error Item title is required.", "C");
                                }
                            }
                            else
                            {
                                if (itemobj.ITEM_CREATOR == pobj.PatronID)
                                {
                                    itemobj.ITEM_LIST_ID = Convert.ToDouble(lid);
                                    itemobj.ITEM_TITLE = title;
                                    itemobj.ITEM_DESCRIPTION = desc;
                                    int.TryParse(index, out i);
                                    if (i <= 0) { i = 1; }
                                    itemobj.ITEM_INDEX = i;
                                    itemobj.ITEM_TYPE = type;
                                    itemobj.ITEM_REF_ID = refid;
                                    itemobj.ITEM_URL = url;
                                    itemobj.ITEM_COVER = itemcover;
                                    itemobj.ITEM_LOGO = itemlogo;
                                    if (!String.IsNullOrEmpty(itemobj.ITEM_TITLE))
                                    {
                                        itemobj.updateItem();
                                        rv = itemobj.toJSONString();
                                    }
                                    else
                                    {
                                        rv = "{\"msg\":\"Item title is required.\"}";
                                        locallog("SaveList error Item title is required.", "C");
                                    }
                                }
                                else
                                {
                                    rv = "{\"msg\":\"Only owner can alter the item.\"}";
                                    locallog("SaveList error Only owner can alter the item.", "C");
                                }
                            }

                        }
                        else
                        {
                            rv = "{\"msg\":\"No permission add item to the list.\"}";
                            locallog("SaveItem error No permission add item to the list.", "C");
                        }
                    }
                }
                catch (Exception ex)
                {
                    rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("SaveItem exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("SaveItem error " + msg, "C");

            }
            locallog("SaveItem rv " + rv, "D");
            locallog("SaveItem end", "M");
            return rv;

        }
        [WebMethod]
        public string DeleteItem(String id, String listid)
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    int lid = 0;
                    int iid = 0;
                    SMLIB_CON_SMLIB_LISTBUILDER_LIST con = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_LIST();
                    SMLIB_OBJ_SMLIB_LISTBUILDER_LIST obj = null;
                    if (!String.IsNullOrEmpty(listid))
                    {
                        int.TryParse(listid, out lid);
                        if (lid > 0)
                        {
                            obj = con.getByID(lid);
                        }
                    }
                    if (obj == null)
                    {
                        rv = "{\"msg\":\"List is not found.\"}";
                        locallog("DeleteItem error List is not found.", "C");
                    }
                    else
                    {
                        List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> colllist = con.getCollaborateByPatronID(pobj.PatronID);
                        if ((obj.LIST_CREATOR == pobj.PatronID) || (colllist.Find(x => x.LIST_ID.Equals(obj.LIST_ID)) != null))
                        {
                            SMLIB_CON_SMLIB_LISTBUILDER_ITEM itemcon = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_ITEM();
                            SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM itemobj = null;
                            if (!String.IsNullOrEmpty(id))
                            {
                                int.TryParse(id, out iid);
                                if (iid > 0)
                                {
                                    itemobj = itemcon.getByID(iid);
                                }
                            }

                            if (itemobj == null)
                            {
                                rv = "{\"msg\":\"Item is not found.\"}";
                                locallog("DeleteItem error is not found.", "C");
                            }
                            else
                            {
                                if (itemobj.ITEM_CREATOR == pobj.PatronID)
                                {
                                    itemobj.deleteItem();
                                    obj.ListItemLoaded = false;
                                    obj.getAllItems();
                                    rv = itemobj.toJSONString();
                                }
                                else
                                {
                                    rv = "{\"msg\":\"Only owner can alter the item.\"}";
                                    locallog("DeleteItem error Only owner can alter the item.", "C");
                                }
                            }

                        }
                        else
                        {
                            rv = "{\"msg\":\"No permission add item to the list.\"}";
                            locallog("DeleteItem error No permission add item to the list.", "C");
                        }
                    }
                }
                catch (Exception ex)
                {
                    rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("DeleteItem exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("DeleteItem error " + msg, "C");

            }
            locallog("DeleteItem rv " + rv, "D");
            locallog("DeleteItem end", "M");
            return rv;

        }
        [WebMethod]
        public string GetItemDetail(String id, String listid)
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    int lid = 0;
                    int iid = 0;
                    SMLIB_CON_SMLIB_LISTBUILDER_LIST con = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_LIST();
                    SMLIB_OBJ_SMLIB_LISTBUILDER_LIST obj = null;
                    if (!String.IsNullOrEmpty(listid))
                    {
                        int.TryParse(listid, out lid);
                        if (lid > 0)
                        {
                            obj = con.getByID(lid);
                        }
                    }
                    if (obj == null)
                    {
                        rv = "{\"msg\":\"List is not found.\"}";
                        locallog("GetItemDetail error List is not found.", "C");
                    }
                    else
                    {
                        List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> colllist = con.getCollaborateByPatronID(pobj.PatronID);
                        List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> sharelist = con.getSharedByPatronID(pobj.PatronID);
                        if ((obj.LIST_CREATOR == pobj.PatronID) || (colllist.Find(x => x.LIST_ID.Equals(obj.LIST_ID)) != null) || (sharelist.Find(x => x.LIST_ID.Equals(obj.LIST_ID)) != null))
                        {
                            SMLIB_CON_SMLIB_LISTBUILDER_ITEM itemcon = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_ITEM();
                            SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM itemobj = null;
                            if (!String.IsNullOrEmpty(id))
                            {
                                int.TryParse(id, out iid);
                                if (iid > 0)
                                {
                                    itemobj = itemcon.getByID(iid);
                                }
                            }

                            if (itemobj == null)
                            {
                                rv = "{\"msg\":\"Item is not found.\"}";
                                locallog("GetItemDetail error is not found.", "C");
                            }
                            else
                            {
                                rv = "";
                                rv = rv + "{";
                                rv = rv + "\"id\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_ID.ToString("F0")) + "\",";
                                rv = rv + "\"listid\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_LIST_ID.ToString("F0")) + "\",";
                                rv = rv + "\"title\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_TITLE) + "\",";
                                rv = rv + "\"desc\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_DESCRIPTION) + "\",";
                                rv = rv + "\"index\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_INDEX.ToString()) + "\",";
                                rv = rv + "\"type\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_TYPE) + "\",";
                                rv = rv + "\"refid\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_REF_ID) + "\",";
                                rv = rv + "\"url\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_URL) + "\",";
                                rv = rv + "\"itemcover\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_COVER) + "\",";
                                rv = rv + "\"itemlogo\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_LOGO) + "\",";
                                rv = rv + "\"creator\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_CREATOR.ToString("F2")) + "\",";
                                rv = rv + "\"creation\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_CREATION.ToString("dd/MM/yyyy")) + "\",";
                                rv = rv + "\"creatorname\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ITEM_CREATOR_NAME) + "\",";

                                if (itemobj.ITEM_TYPE.ToUpper().Trim()== "CATALOGUE")
                                {
                                    SMLIB_CON_TITLE titlecon = new SMLIB_CON_TITLE();
                                    SMLIB_OBJ_TITLE titleobj = null;
                                    double bookid = 0;
                                    double.TryParse(itemobj.ITEM_REF_ID, out bookid);
                                    if (bookid>0)
                                    {
                                        titleobj = titlecon.getByBookID(bookid);
                                        if (titleobj != null)
                                        {
                                            titleobj.getFirstAuthor();
                                            titleobj.getFirstPublisher();
                                            titleobj.getFirstSeries();
                                            titleobj.getCreatorPatron();                                           
                                        }
                                    }

                                    if (titleobj == null)
                                    {
                                        rv = rv + "\"author\": \"\",";
                                        rv = rv + "\"cataloguer\": \"\",";
                                        rv = rv + "\"cataloguedate\": \"\",";
                                        rv = rv + "\"isbn\": \"\",";
                                        rv = rv + "\"publisher\": \"\",";
                                        rv = rv + "\"publisherdate\": \"\",";
                                        rv = rv + "\"publisherplace\": \"\",";
                                        rv = rv + "\"series\": \"\",";
                                    }
                                    else
                                    {                                        
                                        if (titleobj.AUTHORITY_AUTHOR.Count > 0)
                                        {
                                            rv = rv + "\"author\": \"" + SMLIB_StringUtils.TO_JSON_STRING(titleobj.AUTHORITY_AUTHOR [0].Surname)+ "\",";
                                        }
                                        else
                                        {
                                            rv = rv + "\"author\": \"\",";
                                        }


                                        if (titleobj.CREATOR_PATRON.PatronID > 0)
                                        {
                                            rv = rv + "\"cataloguer\": \"" + SMLIB_StringUtils.TO_JSON_STRING(titleobj.CREATOR_PATRON.firstname+" "+ titleobj.CREATOR_PATRON.SURNAME)+ "\",";
                                        }
                                        else
                                        {
                                            rv = rv + "\"cataloguer\": \"\",";
                                        }                                        

                                        rv = rv + "\"cataloguedate\": \"" + SMLIB_StringUtils.TO_JSON_STRING(titleobj.CreationDateTime.ToString("dd/MM/yyyy")) + "\",";                                        
                                        rv = rv + "\"isbn\": \"" + SMLIB_StringUtils.TO_JSON_STRING(titleobj.ISBN) + "\",";

                                        if (titleobj.AUTHORITY_PUBLISHER.Count > 0)
                                        {
                                            rv = rv + "\"publisher\": \"" + SMLIB_StringUtils.TO_JSON_STRING(titleobj.AUTHORITY_PUBLISHER[0].Publisher.Publisher) + "\",";
                                            rv = rv + "\"publisherdate\": \"" + SMLIB_StringUtils.TO_JSON_STRING(titleobj.AUTHORITY_PUBLISHER[0].Date.DATE) + "\",";
                                            rv = rv + "\"publisherplace\": \"" + SMLIB_StringUtils.TO_JSON_STRING(titleobj.AUTHORITY_PUBLISHER[0].Place.PLACE) + "\",";
                                        }
                                        else
                                        {
                                            rv = rv + "\"publisher\": \"\",";
                                            rv = rv + "\"publisherdate\": \"\",";
                                            rv = rv + "\"publisherplace\": \"\",";
                                        }

                                        if (titleobj.AUTHORITY_SERIES.Count > 0)
                                        {
                                            rv = rv + "\"series\": \"" + SMLIB_StringUtils.TO_JSON_STRING(titleobj.AUTHORITY_SERIES[0].Series+" "+ titleobj.AUTHORITY_SERIES[0].SeriesNumber)+ "\",";
                                        }
                                        else
                                        {
                                            rv = rv + "\"series\": \"\",";
                                        }
                                       
                                    }
                                }
                                else
                                {
                                    rv = rv + "\"author\": \"\",";
                                    rv = rv + "\"cataloguer\": \"\",";
                                    rv = rv + "\"cataloguedate\": \"\",";
                                    rv = rv + "\"isbn\": \"\",";
                                    rv = rv + "\"publisher\": \"\",";
                                    rv = rv + "\"publisherdate\": \"\",";
                                    rv = rv + "\"publisherplace\": \"\",";
                                    rv = rv + "\"series\": \"\",";
                                }
                               
                                if (!String.IsNullOrEmpty(itemobj.ITEM_COVER))
                                {
                                    try
                                    {
                                        if (itemobj.ITEM_COVER.ToUpper().Trim().StartsWith("HTTPS://"))
                                        {
                                            itemobj.ITEM_COVER = "http://" + itemobj.ITEM_COVER.Trim().Substring(8);
                                        }
                                        rv = rv + "\"itemcoverbase64\": \"" + SMLIB_ImageUtils.ConvertImageURLToBase64(itemobj.ITEM_COVER) + "\",";
                                    }
                                    catch (Exception ex)
                                    {
                                        locallog("GetItemDetail base64 image "+ itemobj.ITEM_COVER + " error. "+ ex.ToString(), "C");
                                        rv = rv + "\"itemcoverbase64\": \"\",";
                                    }

                                }
                                else
                                {
                                    rv = rv + "\"itemcoverbase64\": \"\",";
                                }

                                rv = rv + "\"msg\": \"" + SMLIB_StringUtils.TO_JSON_STRING(itemobj.ErrorMessage) + "\"";
                                rv = rv + "}";                                
                            }

                        }
                        else
                        {
                            rv = "{\"msg\":\"No permission add item to the list.\"}";
                            locallog("GetItemDetail error No permission add item to the list.", "C");
                        }
                    }
                }
                catch (Exception ex)
                {
                    rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("GetItemDetail exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("GetItemDetail error " + msg, "C");

            }
            //locallog("GetItemDetail rv " + rv, "D");
            locallog("GetItemDetail end", "M");
            return rv;

        }
        [WebMethod]
        public void ReorderItem()
        {
            locallog("ReorderItem start", "M");
            String rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    string listid = "";
                    if (!String.IsNullOrEmpty(System.Web.HttpContext.Current.Request["listid"]))
                    {
                        listid = System.Web.HttpContext.Current.Request["listid"];
                    }
                    SMLIB_CON_SMLIB_LISTBUILDER_LIST con = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_LIST();
                    SMLIB_OBJ_SMLIB_LISTBUILDER_LIST obj = null;
                    if (!String.IsNullOrEmpty(listid))
                    {
                        int iid = 0;
                        int.TryParse(listid, out iid);
                        if (iid > 0)
                        {
                            obj = con.getByID(iid);
                        }
                    }
                    if (obj == null)
                    {
                        rv = "{\"msg\":\"List not found.\"}";
                        locallog("ReorderItem error List not found.", "C");
                    }
                    else
                    {
                        if (obj.LIST_CREATOR == pobj.PatronID)
                        {
                            SMLIB_DBUtils dbu = new SMLIB_DBUtils();
                            string sqlstr = "";
                            int index = 0;
                            while (!String.IsNullOrEmpty(System.Web.HttpContext.Current.Request["id"+index.ToString()]))
                            {
                                double id = 0;
                                double.TryParse(System.Web.HttpContext.Current.Request["id" + index.ToString()], out id);
                                if (id>0)
                                {
                                    int order = 1;
                                    if (!String.IsNullOrEmpty(System.Web.HttpContext.Current.Request["order" + index.ToString()]))
                                    {
                                        int.TryParse(System.Web.HttpContext.Current.Request["order" + index.ToString()], out order);
                                    }
                                    if (order <= 0) { order = 1; }
                                    sqlstr = "UPDATE SMLIB_LISTBUILDER_ITEM SET ITEM_INDEX=" + order.ToString() + " WHERE ITEM_ID=" + id.ToString();
                                    locallog("ReorderItem sqlstr " + sqlstr, "D");
                                    dbu.excuteCommand(sqlstr);
                                }
                                index++;
                            }
                            obj.ListItemLoaded = false;
                            obj.getAllSubs();
                            rv = obj.toJSONString();
                        }
                        else
                        {
                            rv = "{\"msg\":\"Only owner can reorder the list.\"}";
                            locallog("ReorderItem error Only owner can reorder the list.", "C");
                        }
                    }
                }
                catch (Exception ex)
                {
                    rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("ReorderItem exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("ReorderItem error " + msg, "C");

            }
            locallog("ReorderItem rv " + rv, "D");
            locallog("ReorderItem end", "M");
            HttpContext.Current.Response.Clear();
            HttpContext.Current.Response.ContentType = "text/json";
            HttpContext.Current.Response.Write(rv);
            //return rv;
        }
        [WebMethod]
        public string SaveShareItem(String listid, String email, String index, String type)
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    int lid = 0;                    
                    int i = 0;
                    SMLIB_CON_SMLIB_LISTBUILDER_LIST con = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_LIST();
                    SMLIB_OBJ_SMLIB_LISTBUILDER_LIST obj = null;
                    if (!String.IsNullOrEmpty(listid))
                    {
                        int.TryParse(listid, out lid);
                        if (lid > 0)
                        {
                            obj = con.getByID(lid);
                        }
                    }
                    if (obj == null)
                    {
                        rv = "{\"msg\":\"List is not found.\"}";
                        locallog("SaveShareItem error List is not found.", "C");
                    }
                    else
                    {
                        List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> colllist = con.getCollaborateByPatronID(pobj.PatronID);
                        if ((obj.LIST_CREATOR == pobj.PatronID) || (colllist.Find(x => x.LIST_ID.Equals(obj.LIST_ID)) != null))
                        {
                            SMLIB_CON_SMLIB_LISTBUILDER_SHARED itemcon = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_SHARED();
                            SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED itemobj = null;
                            itemobj = itemcon.getByShareEmailListID(email,lid);

                            if (itemobj == null)
                            {
                                itemobj = new SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED();
                                itemobj.SHARED_LIST_ID = Convert.ToDouble(lid);
                                itemobj.SHARED_EMAIL = email;                                
                                int.TryParse(index, out i);
                                if (i <= 0) { i = 1; }
                                itemobj.SHARED_INDEX = i;
                                itemobj.SHARED_TYPE = type;

                                SMLIB_CON_PATRON emailpcon = new SMLIB_CON_PATRON();
                                SMLIB_OBJ_PATRON emailpobj = new SMLIB_OBJ_PATRON();
                                emailpobj = emailpcon.getByEmail(email);
                                if (emailpobj!=null)
                                {
                                    emailpobj.getPatronPIC();
                                    itemobj.SHARED_REF_ID = emailpobj.PatronID.ToString("F2");
                                    itemobj.SHARED_NAME = emailpobj.firstname+" "+ emailpobj.SURNAME;
                                    itemobj.SHARED_IMAGE = emailpobj.PatronPhoto;
                                    itemobj.SHARED_CREATOR = pobj.PatronID;
                                    itemobj.SHARED_CREATION = DateTime.Now;
                                    itemobj.SHARED_CREATOR_NAME = pobj.firstname + " " + pobj.SURNAME;
                                    if (!String.IsNullOrEmpty(itemobj.SHARED_EMAIL))
                                    {
                                        itemcon.insertOrNullItem(ref itemobj);
                                        itemobj = itemcon.getByShareEmailListID(itemobj.SHARED_EMAIL, itemobj.SHARED_LIST_ID);
                                        if (itemobj != null)
                                        {
                                            rv = itemobj.toJSONString();

                                            this.SendEmail(obj, itemobj.SHARED_EMAIL, "SHARED");
                                        }
                                        else
                                        {
                                            rv = "{\"msg\":\"Save email failed.\"}";
                                            locallog("SaveShareItem error Save email failed.", "C");
                                        }
                                    }
                                    else
                                    {
                                        rv = "{\"msg\":\"Email is required.\"}";
                                        locallog("SaveShareItem error Email is required.", "C");
                                    }

                                }
                                else
                                {
                                    rv = "{\"msg\":\"The user’s e-mail you entered does not exist in SmartSuite.\"}";
                                    locallog("SaveShareItem error The user’s e-mail you entered does not exist in SmartSuite.", "C");
                                }

                               
                            }
                            else
                            {
                                rv = "{\"msg\":\"Email already in list.\"}";
                                locallog("SaveShareItem error email already in list.", "C");
                            }

                        }
                        else
                        {
                            rv = "{\"msg\":\"No permission add email to the list.\"}";
                            locallog("SaveShareItem error No permission add email to the list.", "C");
                        }
                    }
                }
                catch (Exception ex)
                {
                    rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("SaveShareItem exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("SaveShareItem error " + msg, "C");

            }
            locallog("SaveShareItem rv " + rv, "D");
            locallog("SaveShareItem end", "M");
            return rv;

        }
        [WebMethod]
        public string ChangeShareItemType(String listid, String refid, String type)
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    int lid = 0;
                    int i = 0;
                    SMLIB_CON_SMLIB_LISTBUILDER_LIST con = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_LIST();
                    SMLIB_OBJ_SMLIB_LISTBUILDER_LIST obj = null;
                    if (!String.IsNullOrEmpty(listid))
                    {
                        int.TryParse(listid, out lid);
                        if (lid > 0)
                        {
                            obj = con.getByID(lid);
                        }
                    }
                    if (obj == null)
                    {
                        rv = "{\"msg\":\"List is not found.\"}";
                        locallog("ChangeShareItemType error List is not found.", "C");
                    }
                    else
                    {
                        List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> colllist = con.getCollaborateByPatronID(pobj.PatronID);
                        if ((obj.LIST_CREATOR == pobj.PatronID) || (colllist.Find(x => x.LIST_ID.Equals(obj.LIST_ID)) != null))
                        {
                            SMLIB_CON_SMLIB_LISTBUILDER_SHARED itemcon = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_SHARED();
                            SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED itemobj = null;
                            itemobj = itemcon.getByShareRefListID(refid, lid);
                            if (itemobj != null)
                            {
                                itemobj.SHARED_TYPE = type;
                                itemobj.updateItem();
                                rv = itemobj.toJSONString();
                            }
                        }
                        else
                        {
                            rv = "{\"msg\":\"No permission alter share type of the list.\"}";
                            locallog("ChangeShareItemType error No permission add email to the list.", "C");
                        }
                    }
                }
                catch (Exception ex)
                {
                    rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("ChangeShareItemType exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("ChangeShareItemType error " + msg, "C");

            }
            locallog("ChangeShareItemType rv " + rv, "D");
            locallog("ChangeShareItemType end", "M");
            return rv;

        }        
        [WebMethod]
        public string DeleteShareItem(String listid, String email)
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    int lid = 0;
                    int i = 0;
                    SMLIB_CON_SMLIB_LISTBUILDER_LIST con = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_LIST();
                    SMLIB_OBJ_SMLIB_LISTBUILDER_LIST obj = null;
                    if (!String.IsNullOrEmpty(listid))
                    {
                        int.TryParse(listid, out lid);
                        if (lid > 0)
                        {
                            obj = con.getByID(lid);
                        }
                    }
                    if (obj == null)
                    {
                        rv = "{\"msg\":\"List is not found.\"}";
                        locallog("DeleteShareItem error List is not found.", "C");
                    }
                    else
                    {
                        List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> colllist = con.getCollaborateByPatronID(pobj.PatronID);
                        if ((obj.LIST_CREATOR == pobj.PatronID) || (colllist.Find(x => x.LIST_ID.Equals(obj.LIST_ID)) != null))
                        {
                            SMLIB_CON_SMLIB_LISTBUILDER_SHARED itemcon = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_SHARED();
                            SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED itemobj = null;
                            itemobj = itemcon.getByShareEmailListID(email, lid);

                            if (itemobj != null)
                            {
                                itemobj.deleteItem();
                                rv = itemobj.toJSONString();
                                obj.ListShareLoaded = false;
                                obj.getAllShares();

                                this.SendEmail(obj, itemobj.SHARED_EMAIL, "REMOVE_SHARED");
                            }
                            else
                            {
                                rv = "{\"msg\":\"Email not found.\"}";
                                locallog("DeleteShareItem error email not found.", "C");
                            }

                        }
                        else
                        {
                            rv = "{\"msg\":\"No permission add email to the list.\"}";
                            locallog("DeleteShareItem error No permission add email to the list.", "C");
                        }
                    }
                }
                catch (Exception ex)
                {
                    rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("DeleteShareItem exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("DeleteShareItem error " + msg, "C");

            }
            locallog("DeleteShareItem rv " + rv, "D");
            locallog("DeleteShareItem end", "M");
            return rv;

        }
        [WebMethod]
        public string EmailShareItem(String listid, String email, String index, String type)
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    int lid = 0;
                    int i = 0;
                    SMLIB_CON_SMLIB_LISTBUILDER_LIST con = new CLASS.SMLIB_CON_SMLIB_LISTBUILDER_LIST();
                    SMLIB_OBJ_SMLIB_LISTBUILDER_LIST obj = null;
                    if (!String.IsNullOrEmpty(listid))
                    {
                        int.TryParse(listid, out lid);
                        if (lid > 0)
                        {
                            obj = con.getByID(lid);
                        }
                    }
                    if (obj == null)
                    {
                        rv = "{\"msg\":\"List is not found.\"}";
                        locallog("EmailShareItem error List is not found.", "C");
                    }
                    else
                    {
                        List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> colllist = con.getCollaborateByPatronID(pobj.PatronID);
                        if ((obj.LIST_CREATOR == pobj.PatronID) || (colllist.Find(x => x.LIST_ID.Equals(obj.LIST_ID)) != null))
                        {
                            this.SendEmail(obj, email, "SHARED");
                        }
                        else
                        {
                            rv = "{\"msg\":\"No permission add email to the list.\"}";
                            locallog("EmailShareItem error No permission add email to the list.", "C");
                        }
                    }
                }
                catch (Exception ex)
                {
                    rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("EmailShareItem exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("SaveShareItem error " + msg, "C");

            }
            locallog("SaveShareItem rv " + rv, "D");
            locallog("SaveShareItem end", "M");
            return rv;

        }        
        [WebMethod]
        public string SearchBookByKeyword(String Keyword, int Count, int Page, String OrderBy, String OrderByDirection)
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            int SecurityFrom = 0;
            int SecurityTo = pobj.SecurityTo;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    rv = "{\"item\":[";
                    SMLIB_FW_WIDGET_SEARCH_ENGINE.SERVICE.SMLIBFWW_SEARCH_ENGINE_S_DB_QUICK searchser = new SMLIB_FW_WIDGET_SEARCH_ENGINE.SERVICE.SMLIBFWW_SEARCH_ENGINE_S_DB_QUICK();
                    List<SMLIB_OBJ_TITLE> list = searchser.OneEngine_OrdinaryList("!tb_KEYWORD_0|" + Keyword, Count, Page, OrderBy, OrderByDirection, SecurityFrom, SecurityTo, true);
                    foreach (SMLIB_OBJ_TITLE item in list)
                    {
                        item.getURL();
                        item.getMultimediaDescription();
                        if (String.IsNullOrEmpty(item.MultimediaDescription))
                        {
                            item.MultimediaDescription = "There is no description for this item.";
                        }
                        rv += "{";
                        rv += "\"bookid\":\"" + SMLIB_StringUtils.TO_JSON_STRING(item.BookID.ToString("F2")) + "\",";
                        rv += "\"title\":\"" + SMLIB_StringUtils.TO_JSON_STRING(item.Title) + "\",";
                        rv += "\"coverurl\":\"" + SMLIB_StringUtils.TO_JSON_STRING(item.CoverURL) + "\",";
                        rv += "\"description\":\"" + SMLIB_StringUtils.TO_JSON_STRING(item.MultimediaDescription) + "\"";
                        rv += "},";
                    }
                    if (rv.EndsWith(","))
                    {
                        rv = rv.Substring(0, rv.LastIndexOf(","));
                    }
                    rv += "],\"msg\":\"\"}";
                }
                catch (Exception ex)
                {
                    rv = "{\"itme\":[],\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("SearchBookByKeyword exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"itme\":[],\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("SearchBookByKeyword error " + msg, "C");

            }
            locallog("SearchBookByKeyword rv " + rv, "D");
            locallog("SearchBookByKeyword end", "M");
            return rv;

        }
        [WebMethod]
        public string SearchPatronByKeyword(String Keyword, int Count, int Page, String OrderBy, String OrderByDirection)
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            int SecurityFrom = 0;
            int SecurityTo = pobj.SecurityTo;
            if (!pobj.IsTeacher())
            {
                msg = "No permission to perform patron search.";
            }
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    String sqlstr = " SELECT TOP "+(Page * Count ).ToString()+ " Patron.PatronID, Patron.Barcode, Patron.Surname+' '+Patron.FirstName as FullName, Patron.Surname, Patron.FirstName, Patron.Email, CLASSGRADE.DESCRIPTION as Classgrade, AUTHORITY_HOME_ROOM.HomeRoom as HomeRoom " +
                        " FROM PATRON " +
                        " LEFT JOIN CLASSGRADE ON Patron.ClassID=CLASSGRADE.ClassID " +
                        " LEFT JOIN AUTHORITY_HOME_ROOM ON Patron.HomeRoomNo=AUTHORITY_HOME_ROOM.HomeRoomNo " +
                        " WHERE Patron.Surname+' '+Patron.FirstName like N'%" + Keyword.Replace("'", "''") + "%' " +
                        " OR CONVERT(nvarchar,Patron.PatronID)=N'" + Keyword.Replace("'", "''") + "' " +
                        " OR Patron.Barcode=N'" + Keyword.Replace("'", "''") + "' " +
                        " OR (Patron.Email like N'%" + Keyword.Replace("'", "''") + "%') " +
                        " OR (CLASSGRADE.DESCRIPTION=N'" + Keyword.Replace("'", "''") + "') " +
                        " OR (AUTHORITY_HOME_ROOM.HomeRoom=N'" + Keyword.Replace("'", "''") + "') " +
                        " ORDER BY  Patron.Surname+' '+Patron.FirstName ASC ";
                    locallog("SearchPatronByKeyword " + sqlstr, "D");
                    SMLIB_DBUtils dbu = new SMLIB_DBUtils();
                    System.Data.DataTable dt = new System.Data.DataTable();
                    dt = dbu.getTable(sqlstr);                    
                    rv = "{\"item\":[";
                    int index=0;
                    foreach (System.Data.DataRow dr in dt.Rows)
                    {
                        index++;
                        if (index > (Page - 1) * Count)
                        {
                            SMLIB_OBJ_PATRON patronobj = new SMLIB_OBJ_PATRON();
                            string fullname = "";
                            string classgrade = "";
                            string homeroom = "";
                            if (!Convert.IsDBNull(dr["PatronID"]))
                            {
                                double d = -1;
                                double.TryParse(dr["PatronID"].ToString(), out d);
                                patronobj.PatronID = d;
                            }
                            if (!Convert.IsDBNull(dr["Surname"]))
                            {
                                patronobj.SURNAME = dr["Surname"].ToString();
                            }
                            if (!Convert.IsDBNull(dr["FirstName"]))
                            {
                                patronobj.SURNAME = dr["FirstName"].ToString();
                            }
                            if (!Convert.IsDBNull(dr["Barcode"]))
                            {
                                patronobj.Barcode = dr["Barcode"].ToString();
                            }
                            if (!Convert.IsDBNull(dr["Email"]))
                            {
                                patronobj.Email = dr["Email"].ToString();
                            }
                            if (!Convert.IsDBNull(dr["FullName"]))
                            {
                                fullname = dr["FullName"].ToString();
                            }
                            if (!Convert.IsDBNull(dr["Classgrade"]))
                            {
                                classgrade = dr["Classgrade"].ToString();
                            }
                            if (!Convert.IsDBNull(dr["HomeRoom"]))
                            {
                                homeroom = dr["HomeRoom"].ToString();
                            }
                            patronobj.getPatronPIC();
                            rv += "{";
                            rv += "\"patronid\":\"" + SMLIB_StringUtils.TO_JSON_STRING(patronobj.PatronID.ToString("F2")) + "\",";
                            rv += "\"email\":\"" + SMLIB_StringUtils.TO_JSON_STRING(patronobj.Email) + "\",";
                            rv += "\"fullname\":\"" + SMLIB_StringUtils.TO_JSON_STRING(fullname) + "\",";
                            rv += "\"surname\":\"" + SMLIB_StringUtils.TO_JSON_STRING(patronobj.SURNAME) + "\",";
                            rv += "\"firstname\":\"" + SMLIB_StringUtils.TO_JSON_STRING(patronobj.firstname) + "\",";
                            rv += "\"photourl\":\"" + SMLIB_StringUtils.TO_JSON_STRING(patronobj.PatronPhoto) + "\",";
                            rv += "\"classgrade\":\"" + SMLIB_StringUtils.TO_JSON_STRING(classgrade) + "\",";
                            rv += "\"homeroom\":\"" + SMLIB_StringUtils.TO_JSON_STRING(homeroom) + "\"";
                            rv += "},";
                        }
                    }
                    if (rv.EndsWith(","))
                    {
                        rv = rv.Substring(0, rv.LastIndexOf(","));
                    }
                    rv += "],\"msg\":\"\"}";
                }
                catch (Exception ex)
                {
                    rv = "{\"itme\":[],\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("SearchBookByKeyword exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"itme\":[],\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("SearchBookByKeyword error " + msg, "C");

            }
            locallog("SearchBookByKeyword rv " + rv, "D");
            locallog("SearchBookByKeyword end", "M");
            return rv;

        }                
        [WebMethod]
        public string SearchFileByKeyword(String Keyword, int Count, int Page)
        {
            string rv = "";
            string msg = UserValidateMessage();
            SMLIB_OBJ_PATRON pobj = SMLIB_LoginUtils.LoginPatron;
            int SecurityFrom = 0;
            int SecurityTo = pobj.SecurityTo;
            if (String.IsNullOrEmpty(msg))
            {
                try
                {
                    String sqlstr = "SELECT TOP " + (Count * Page).ToString() + " * FROM SMLIB_FILEUPLOAD_FILE WHERE FILE_NAME like N'%" + Keyword.Replace("'", "''") + "%' AND FILE_OWNER_ID="+PatronID.ToString()+" ORDER BY FILE_NAME ASC";
                    SMLIB_DBUtils dbu = new SMLIB_DBUtils();
                    System.Data.DataTable dt = new System.Data.DataTable();
                    locallog("SearchFileByKeyword sqlstr " + sqlstr, "D");
                    dt = dbu.getTable(sqlstr);
                    int index = 0;
                    rv = "{\"item\":[";
                    foreach (System.Data.DataRow dr in dt.Rows)
                    {
                        if (index >= Count * (Page - 1))
                        {
                            String id = "";
                            if (!Convert.IsDBNull(dr["FILE_ID"]))
                            {
                                id = dr["FILE_ID"].ToString();
                                String url = SMLIBFWW_WIDGET_FILE_UPLOADER.CLASS.SMLIB_CON_SMLIB_FILEUPLOAD_FILE.getSharedURLOfFileByID(id, HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority) + HttpContext.Current.Request.ApplicationPath + "/");
                                String filename = "";
                                if (!Convert.IsDBNull(dr["FILE_NAME"]))
                                {
                                    filename = dr["FILE_NAME"].ToString();
                                }
                                if (String.IsNullOrEmpty(filename)) { filename = "No Name"; }
                                String desc = "";
                                if (!Convert.IsDBNull(dr["FILE_DESCRIPTION"]))
                                {
                                    desc = dr["FILE_DESCRIPTION"].ToString();
                                }
                                if (String.IsNullOrEmpty(desc)) { desc = "There is no description for this item."; }

                                rv += "{";
                                rv += "\"fileid\":\"" + SMLIB_StringUtils.TO_JSON_STRING(id) + "\",";
                                rv += "\"name\":\"" + SMLIB_StringUtils.TO_JSON_STRING(filename) + "\",";
                                rv += "\"url\":\"" + SMLIB_StringUtils.TO_JSON_STRING(url) + "\",";
                                rv += "\"description\":\"" + SMLIB_StringUtils.TO_JSON_STRING(desc) + "\"";
                                rv += "},";

                            }
                        }
                        index++;
                    }
                    if (rv.EndsWith(","))
                    {
                        rv = rv.Substring(0, rv.LastIndexOf(","));
                    }
                    rv += "],\"msg\":\"\"}";
                }
                catch (Exception ex)
                {
                    rv = "{\"itme\":[],\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(ex.Message) + "\"}";
                    locallog("SearchBookByKeyword exception " + ex.ToString(), "C");
                }
            }
            else
            {
                rv = "{\"itme\":[],\"msg\":\"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"}";
                locallog("SearchBookByKeyword error " + msg, "C");

            }
            locallog("SearchFileByKeyword rv " + rv, "D");
            locallog("SearchFileByKeyword end", "M");
            return rv;

        }
        #endregion
        #region global function
        public void SendEmail(SMLIB_OBJ_SMLIB_LISTBUILDER_LIST listobj, string email, string type)
        {
            try
            {
                SMLIB_CON_PATRON pcon = new SMLIB_CON_PATRON();
                SMLIB_OBJ_PATRON frompobj = new SMLIB_OBJ_PATRON();
                SMLIB_OBJ_PATRON pobj = new SMLIB_OBJ_PATRON();
                pobj = pcon.getByEmail(email);
                if (pobj == null)
                {
                    pobj = new SMLIB_OBJ_PATRON();
                    pobj.SURNAME = "";
                }
                SmartLibraryLib.Utils.Email.SMLIB_EMAILER emailer = new SmartLibraryLib.Utils.Email.SMLIB_EMAILER();
                string fromadd = "";
                string toadd = "";
                string sitename = "";
                string templatefilename = "";
                string mode = "";
                string subjectstr = "";
                string messagestr = "";
                string guidstr = "";

                toadd = email;
                double frompid = 0;
                double.TryParse(PatronID, out frompid);
                frompobj = pcon.getByPatronID(frompid);
                if (frompobj != null)
                {
                    fromadd = frompobj.Email;
                    SMLIB_CON_FUNSYS_SITE sitecon = new SMLIB_CON_FUNSYS_SITE();
                    SMLIB_OBJ_FUNSYS_SITE siteobj = new SMLIB_OBJ_FUNSYS_SITE();
                    if (frompobj.SiteNumber <= 0)
                    {
                        frompobj.SiteNumber = 1;
                    }
                    siteobj = sitecon.getBySite_Number(frompobj.SiteNumber);
                    if (siteobj == null)
                    {
                        sitecon.getAll();
                        List<SMLIB_OBJ_FUNSYS_SITE> l = sitecon.ToObjList();
                        l.Sort((x, y) => x.Site_Number.CompareTo(y.Site_Number));
                        if (l.Count > 0)
                        {
                            siteobj = l[0];
                        }
                    }
                    if (siteobj != null)
                    {
                        if (String.IsNullOrEmpty(fromadd))
                        {
                            fromadd = siteobj.Email;
                        }
                        sitename = siteobj.Site_Name;
                    }
                }

                if (type == "SHARED")
                {
                    templatefilename = System.IO.Path.Combine(System.Web.HttpContext.Current.Server.MapPath("~"), "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/CONFIGURATION/EMAILTEMPLATE/EmailTemplate_SharedList.html");
                }
                else if (type == "REMOVE_SHARED")
                {
                    templatefilename = System.IO.Path.Combine(System.Web.HttpContext.Current.Server.MapPath("~"), "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_LISTBUILDER/CONFIGURATION/EMAILTEMPLATE/EmailTemplate_RemoveShared.html");
                }

                String mURLBefore = System.Web.HttpContext.Current.Request.RawUrl;
                if (mURLBefore.ToUpper().Contains("SMLIB_WEB_JS"))
                {
                    mURLBefore = mURLBefore.Substring(0, mURLBefore.ToUpper().LastIndexOf("SMLIB_WEB_JS"));
                }
                if (mURLBefore.ToLower().Contains("smartlibraryweb"))
                {
                    mURLBefore = mURLBefore.Substring(0, mURLBefore.ToLower().LastIndexOf("smartlibraryweb"));
                }
                else
                {
                    if (mURLBefore.ToLower().Contains("smartlibrary"))
                    {
                        mURLBefore = mURLBefore.Substring(0, mURLBefore.ToLower().LastIndexOf("smartlibrary"));
                    }
                    else
                    {
                        mURLBefore = mURLBefore.Substring(0, mURLBefore.ToLower().LastIndexOf("/") + 1);
                    }
                }

                mURLBefore = mURLBefore + "SmartLibraryWeb/SmartLibraryPageLoader.aspx?PageName=LISTBUILDER&ListID=" + listobj.LIST_ID.ToString("F0");

                if (mURLBefore.ToLower().Contains("http"))
                {

                }
                else
                {
                    mURLBefore = System.Web.HttpContext.Current.Request.Url.Host + mURLBefore;

                }
                if (mURLBefore.ToLower().Contains("http"))
                {

                }
                else
                {
                    string absoluteUri = System.Web.HttpContext.Current.Request.Url.AbsoluteUri;
                    if (absoluteUri.ToUpper().Contains("HTTPS://"))
                    {
                        mURLBefore = "https://" + mURLBefore;
                    }
                    else
                    {
                        mURLBefore = "http://" + mURLBefore;
                    }

                }

                String mlogoURLBefore = System.Web.HttpContext.Current.Request.RawUrl;
                if (mlogoURLBefore.ToUpper().Contains("SMLIB_WEB_JS"))
                {
                    mlogoURLBefore = mlogoURLBefore.Substring(0, mlogoURLBefore.ToUpper().LastIndexOf("SMLIB_WEB_JS"));
                }
                if (mlogoURLBefore.ToLower().Contains("smartlibraryweb"))
                {
                    mlogoURLBefore = mlogoURLBefore.Substring(0, mlogoURLBefore.ToLower().LastIndexOf("smartlibraryweb"));
                }
                else
                {
                    if (mlogoURLBefore.ToLower().Contains("smartlibrary"))
                    {
                        mlogoURLBefore = mlogoURLBefore.Substring(0, mlogoURLBefore.ToLower().LastIndexOf("smartlibrary"));
                    }
                    else
                    {
                        mlogoURLBefore = mlogoURLBefore.Substring(0, mlogoURLBefore.ToLower().LastIndexOf("/") + 1);
                    }
                }

                mlogoURLBefore = mlogoURLBefore + "LOGO/logo.png";

                if (mlogoURLBefore.ToLower().Contains("http"))
                {

                }
                else
                {
                    mlogoURLBefore = System.Web.HttpContext.Current.Request.Url.Host + mlogoURLBefore;

                }
                if (mlogoURLBefore.ToLower().Contains("http"))
                {

                }
                else
                {

                    string absoluteUri = System.Web.HttpContext.Current.Request.Url.AbsoluteUri;
                    if (absoluteUri.ToUpper().Contains("HTTPS://"))
                    {
                        mlogoURLBefore = "https://" + mlogoURLBefore;
                    }
                    else
                    {
                        mlogoURLBefore = "http://" + mlogoURLBefore;
                    }

                }

                guidstr = (new Guid()).ToString();

                System.IO.FileInfo fio = new System.IO.FileInfo(templatefilename);
                if (fio.Exists)
                {
                    System.IO.StreamReader sr = fio.OpenText();
                    messagestr = sr.ReadToEnd();
                    messagestr = messagestr.Replace("[SITE_LOGO]", mlogoURLBefore);
                    messagestr = messagestr.Replace("[SITE_NAME]", sitename);
                    messagestr = messagestr.Replace("[PATRON_NAME]", pobj.firstname + " " + pobj.SURNAME);
                    messagestr = messagestr.Replace("[EDITOR_NAME]", frompobj.firstname + " " + frompobj.SURNAME);
                    messagestr = messagestr.Replace("[LIST_NAME]", listobj.LIST_NAME);
                    messagestr = messagestr.Replace("[LIST_URL]", mURLBefore);
                    sr.Close();
                    sr.Dispose();
                }


                switch (type)
                {
                    case "SHARED":
                        subjectstr = "SmartSuite - List Shared : " + listobj.LIST_NAME + "";
                        messagestr = messagestr.Replace("[AUDIENCE_MESSAGE]", "has just shared a list: (" + listobj.LIST_NAME + ") with you.");
                        break;
                    case "REMOVE_SHARED":
                        subjectstr = "SmartSuite - List Remove: " + listobj.LIST_NAME + "";
                        messagestr = messagestr.Replace("[AUDIENCE_MESSAGE]", "You have been removed from static list (" + listobj.LIST_NAME + ") by " + frompobj.firstname + " " + frompobj.SURNAME + ".");
                        break;
                }

                if ((!String.IsNullOrEmpty(fromadd)) && (!String.IsNullOrEmpty(toadd)) && (!String.IsNullOrEmpty(subjectstr)) && (!String.IsNullOrEmpty(messagestr)))
                {
                    emailer.sendEmail(fromadd, toadd, subjectstr, messagestr, guidstr, frompid);
                }
            }
            catch
            {

            }
        }
        #endregion
    }
}
