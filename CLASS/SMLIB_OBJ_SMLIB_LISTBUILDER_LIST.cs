using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using PachCombinePortal.PortalObject.SiteObject;
using SmartLibraryLib.Object.DBObject;
using SmartLibraryLib.Utils;
using SmartLibraryLib.Object.Controller;
using SmartLibraryLib.Object.Object;


namespace SMLIBFWW_WIDGET_LISTBUILDER.CLASS
{
    public class SMLIB_OBJ_SMLIB_LISTBUILDER_LIST : PCP_SiteObjectMaster
    {
        private double _LIST_ID = -1;
        private String _LIST_NAME = "";
        private String _LIST_DESCRIPTION = "";
        private String _LIST_TYPE = "MY_LIST";
        private double _LIST_CREATOR = -1;
        private DateTime _LIST_CREATION = DateTime.Now;
        private String _LIST_CREATOR_NAME = "";       
        private String _ErrorMessage = "";
        private bool _ListItemLoaded = false;
        private bool _ListShareLoaded = false;
        private bool _ListAllLoaded = false;
        List<SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM> _ListItems = new List<SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM>();
        List<SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED> _ListShares = new List<SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED>();
        public double LIST_ID
        {
            get
            {
                return _LIST_ID;
            }
            set
            {
                _LIST_ID = value;
            }
        }
        public String LIST_NAME
        {
            get
            {
                return _LIST_NAME;
            }
            set
            {
                _LIST_NAME = value;
            }
        }
        public String LIST_DESCRIPTION
        {
            get
            {
                return _LIST_DESCRIPTION;
            }
            set
            {
                _LIST_DESCRIPTION = value;
            }
        }
        public String LIST_TYPE
        {
            get
            {
                return _LIST_TYPE;
            }
            set
            {
                _LIST_TYPE = value;
            }
        }
        public double LIST_CREATOR
        {
            get
            {
                return _LIST_CREATOR;
            }
            set
            {
                _LIST_CREATOR = value;
            }
        }
        public DateTime LIST_CREATION
        {
            get
            {
                return _LIST_CREATION;
            }
            set
            {
                _LIST_CREATION = value;
            }
        }
        public String LIST_CREATOR_NAME
        {
            get
            {
                return _LIST_CREATOR_NAME;
            }
            set
            {
                _LIST_CREATOR_NAME = value;
            }
        }        
        public String ErrorMessage
        {
            get
            {
                return _ErrorMessage;
            }
            set
            {
                _ErrorMessage = value;
            }
        }
        public bool ListItemLoaded
        {
            get
            {
                return _ListItemLoaded;
            }
            set
            {
                _ListItemLoaded = value;
            }
        }
        public bool ListShareLoaded
        {
            get
            {
                return _ListShareLoaded;
            }
            set
            {
                _ListShareLoaded = value;
            }
        }
        public bool ListAllLoaded
        {
            get
            {
                return _ListAllLoaded;
            }
            set
            {
                _ListAllLoaded = value;
            }
        }
        public List<SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM> ListItems
        {
            get
            {
                return _ListItems;
            }
            set
            {
                _ListItems = value;
            }
        }
        public List<SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED> ListShares
        {
            get
            {
                return _ListShares;
            }
            set
            {
                _ListShares = value;
            }
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_LIST()
        {
            DBObject = new SMLIB_DB_SMLIB_LISTBUILDER_LIST();
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_LIST(PachCombinePortal.PortalUtil.PCP_DB_Utils ConObj)
        {
            DBObject = new SMLIB_DB_SMLIB_LISTBUILDER_LIST();
            DBObject.DBUtils.DB_ConnectionString = ConObj.DB_ConnectionString;
        }
        public override void setItem()
        {
            DBObject.addValue("LIST_ID", LIST_ID);
            DBObject.addValue("LIST_NAME", LIST_NAME);
            DBObject.addValue("LIST_DESCRIPTION", LIST_DESCRIPTION);
            DBObject.addValue("LIST_TYPE", LIST_TYPE);
            DBObject.addValue("LIST_CREATOR", LIST_CREATOR);
            DBObject.addValue("LIST_CREATION", LIST_CREATION);
            DBObject.addValue("LIST_CREATOR_NAME", LIST_CREATOR_NAME);
        }
        public override void getItem(System.Data.DataRow item)
        {
            base.getItem(item);
            getColumnValue(item, "LIST_ID", ref this._LIST_ID);
            getColumnValue(item, "LIST_NAME", ref this._LIST_NAME);
            getColumnValue(item, "LIST_DESCRIPTION", ref this._LIST_DESCRIPTION);
            getColumnValue(item, "LIST_TYPE", ref this._LIST_TYPE);
            getColumnValue(item, "LIST_CREATOR", ref this._LIST_CREATOR);
            getColumnValue(item, "LIST_CREATION", ref this._LIST_CREATION);
            getColumnValue(item, "LIST_CREATOR_NAME", ref this._LIST_CREATOR_NAME);
        }
        public override void getItem(PachCombinePortal.PortalObject.DBObject.PCP_I_DBObject item)
        {
            base.getItem(item);
            getColumnValue(item, "LIST_ID", ref this._LIST_ID);
            getColumnValue(item, "LIST_NAME", ref this._LIST_NAME);
            getColumnValue(item, "LIST_DESCRIPTION", ref this._LIST_DESCRIPTION);
            getColumnValue(item, "LIST_TYPE", ref this._LIST_TYPE);
            getColumnValue(item, "LIST_CREATOR", ref this._LIST_CREATOR);
            getColumnValue(item, "LIST_CREATION", ref this._LIST_CREATION);
            getColumnValue(item, "LIST_CREATOR_NAME", ref this._LIST_CREATOR_NAME);
        }
        public String toJSONString()
        {
            string rv = "";
            rv = rv + "{";
            rv = rv + "\"id\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.LIST_ID.ToString("F0")) + "\",";
            rv = rv + "\"name\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.LIST_NAME) + "\",";
            rv = rv + "\"desc\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.LIST_DESCRIPTION) + "\",";
            rv = rv + "\"type\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.LIST_TYPE) + "\",";                
            rv = rv + "\"creator\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.LIST_CREATOR.ToString("F2")) + "\",";
            rv = rv + "\"creation\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.LIST_CREATION.ToString("dd/MM/yyyy")) + "\",";
            rv = rv + "\"creatorname\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.LIST_CREATOR_NAME) + "\",";
            rv = rv + "\"itemcount\": " + SMLIB_StringUtils.TO_JSON_STRING(this.ListItems.Count.ToString()) + ","; 
            rv = rv + "\"item\": [";
            foreach (SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM item in this.ListItems)
            {
                rv = rv + item.toJSONString() + ",";
            }
            if (rv.EndsWith(","))
            {
                rv = rv.Substring(0, rv.LastIndexOf(","));
            }
            rv = rv + "],";
            rv = rv + "\"shared\": [";
            foreach (SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED share in this.ListShares)
            {
                rv = rv + share.toJSONString() + ",";
            }
            if (rv.EndsWith(","))
            {
                rv = rv.Substring(0, rv.LastIndexOf(","));
            }
            rv = rv + "],";
            rv = rv + "\"msg\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ErrorMessage) + "\"";
            rv = rv + "}";
            return rv;
        }       
        public static String BlankJSONString(String msg)
        {
            string rv = "";
            rv = rv + "{";
            rv = rv + "\"id\": \"-1\",";
            rv = rv + "\"name\": \"\",";
            rv = rv + "\"desc\": \"\",";
            rv = rv + "\"type\": \"\",";
            rv = rv + "\"creator\": \"\",";
            rv = rv + "\"creation\": \"\",";
            rv = rv + "\"creatorname\": \"\",";
            rv = rv + "\"itemcount\": 0,";
            rv = rv + "\"item\": [],";
            rv = rv + "\"shared\": [],";
            rv = rv + "\"msg\": \"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"";
            rv = rv + "}";
            return rv;
        }
        public void getAllItems()
        {
            if (!this.ListItemLoaded)
            {
                this.ListItems = new List<SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM>();
                SMLIB_CON_SMLIB_LISTBUILDER_ITEM con = new SMLIB_CON_SMLIB_LISTBUILDER_ITEM();
                con.getByListID(this.LIST_ID);
                this.ListItems = con.ToObjList();
                this.ListItems.Sort((x, y) => x.ITEM_INDEX.CompareTo(y.ITEM_INDEX));
                for (int i=0;i< this.ListItems.Count;i++)
                {
                    if (this.ListItems[i].ITEM_INDEX!=i+1)
                    {
                        this.ListItems[i].ITEM_INDEX = i + 1;
                        this.ListItems[i].updateItem();
                    }
                }
                this.ListItemLoaded = true;
                if (this.ListShareLoaded)
                {
                    this.ListAllLoaded = true;
                }
            }
        }
        public void getAllShares()
        {
            if (!this.ListShareLoaded)
            {
                this.ListShares = new List<SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED>();
                SMLIB_CON_SMLIB_LISTBUILDER_SHARED con = new SMLIB_CON_SMLIB_LISTBUILDER_SHARED();
                con.getByListID(this.LIST_ID);
                this.ListShares = con.ToObjList();
                this.ListShares.Sort((x, y) => x.SHARED_INDEX.CompareTo(y.SHARED_INDEX));
                for (int i = 0; i < this.ListShares.Count; i++)
                {
                    if (this.ListShares[i].SHARED_INDEX != i + 1)
                    {
                        this.ListShares[i].SHARED_INDEX = i + 1;
                        this.ListShares[i].updateItem();
                    }
                }
                this.ListShareLoaded = true;
                if (this.ListItemLoaded)
                {
                    this.ListAllLoaded = true;
                }
            }
        }
        public void getAllSubs()
        {
            if (!this.ListAllLoaded)
            {
                this.getAllItems();
                this.getAllShares();
                this.ListAllLoaded = true;
            }
        }
        public void deleteAllSubs()
        {           
            SMLIB_DBUtils dbu = new SMLIB_DBUtils();
            dbu.excuteCommand("DELETE SMLIB_LISTBUILDER_ITEM WHERE ITEM_LIST_ID=" + this.LIST_ID.ToString("F0"));
            dbu.excuteCommand("DELETE SMLIB_LISTBUILDER_SHARED WHERE SHARED_LIST_ID=" + this.LIST_ID.ToString("F0"));
        }
        
    }
}