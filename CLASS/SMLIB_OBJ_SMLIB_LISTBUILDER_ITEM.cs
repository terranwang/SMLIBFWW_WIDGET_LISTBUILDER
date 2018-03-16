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
    public class SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM : PCP_SiteObjectMaster
    {
        private double _ITEM_ID = -1;
        private double _ITEM_LIST_ID = -1;
        private String _ITEM_TITLE = "";
        private String _ITEM_DESCRIPTION = "";
        private int _ITEM_INDEX = 0; 
        private String _ITEM_TYPE = "";
        private String _ITEM_REF_ID = "";
        private String _ITEM_URL = "";
        private String _ITEM_COVER = "";
        private String _ITEM_LOGO = "";
        private double _ITEM_CREATOR = -1;
        private DateTime _ITEM_CREATION = DateTime.Now;
        private String _ITEM_CREATOR_NAME = "";
        private String _ErrorMessage = "";        
        public double ITEM_ID
        {
            get
            {
                return _ITEM_ID;
            }
            set
            {
                _ITEM_ID = value;
            }
        }
        public double ITEM_LIST_ID
        {
            get
            {
                return _ITEM_LIST_ID;
            }
            set
            {
                _ITEM_LIST_ID = value;
            }
        }
        public String ITEM_TITLE
        {
            get
            {
                return _ITEM_TITLE;
            }
            set
            {
                _ITEM_TITLE = value;
            }
        }
        public String ITEM_DESCRIPTION
        {
            get
            {
                return _ITEM_DESCRIPTION;
            }
            set
            {
                _ITEM_DESCRIPTION = value;
            }
        }
        public int ITEM_INDEX
        {
            get
            {
                return _ITEM_INDEX;
            }
            set
            {
                _ITEM_INDEX = value;
            }
        }
        public String ITEM_TYPE
        {
            get
            {
                return _ITEM_TYPE;
            }
            set
            {
                _ITEM_TYPE = value;
            }
        }
        public String ITEM_REF_ID
        {
            get
            {
                return _ITEM_REF_ID;
            }
            set
            {
                _ITEM_REF_ID = value;
            }
        }
        public String ITEM_URL
        {
            get
            {
                return _ITEM_URL;
            }
            set
            {
                _ITEM_URL = value;
            }
        }
        public String ITEM_COVER
        {
            get
            {
                return _ITEM_COVER;
            }
            set
            {
                _ITEM_COVER = value;
            }
        }
        public String ITEM_LOGO
        {
            get
            {
                return _ITEM_LOGO;
            }
            set
            {
                _ITEM_LOGO = value;
            }
        }
        public double ITEM_CREATOR
        {
            get
            {
                return _ITEM_CREATOR;
            }
            set
            {
                _ITEM_CREATOR = value;
            }
        }
        public DateTime ITEM_CREATION
        {
            get
            {
                return _ITEM_CREATION;
            }
            set
            {
                _ITEM_CREATION = value;
            }
        }
        public String ITEM_CREATOR_NAME
        {
            get
            {
                return _ITEM_CREATOR_NAME;
            }
            set
            {
                _ITEM_CREATOR_NAME = value;
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
        public SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM()
        {
            DBObject = new SMLIB_DB_SMLIB_LISTBUILDER_ITEM();
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM(PachCombinePortal.PortalUtil.PCP_DB_Utils ConObj)
        {
            DBObject = new SMLIB_DB_SMLIB_LISTBUILDER_ITEM();
            DBObject.DBUtils.DB_ConnectionString = ConObj.DB_ConnectionString;
        }
        public override void setItem()
        {
            DBObject.addValue("ITEM_ID", ITEM_ID);
            DBObject.addValue("ITEM_LIST_ID", ITEM_LIST_ID);
            DBObject.addValue("ITEM_TITLE", ITEM_TITLE);
            DBObject.addValue("ITEM_DESCRIPTION", ITEM_DESCRIPTION);
            DBObject.addValue("ITEM_INDEX", ITEM_INDEX);
            DBObject.addValue("ITEM_TYPE", ITEM_TYPE);
            DBObject.addValue("ITEM_REF_ID", ITEM_REF_ID);
            DBObject.addValue("ITEM_URL", ITEM_URL);
            DBObject.addValue("ITEM_COVER", ITEM_COVER);
            DBObject.addValue("ITEM_LOGO", ITEM_LOGO);
            DBObject.addValue("ITEM_CREATOR", ITEM_CREATOR);
            DBObject.addValue("ITEM_CREATION", ITEM_CREATION);
            DBObject.addValue("ITEM_CREATOR_NAME", ITEM_CREATOR_NAME);
        }
        public override void getItem(System.Data.DataRow item)
        {
            base.getItem(item);
            getColumnValue(item, "ITEM_ID", ref this._ITEM_ID);
            getColumnValue(item, "ITEM_LIST_ID", ref this._ITEM_LIST_ID);
            getColumnValue(item, "ITEM_TITLE", ref this._ITEM_TITLE);
            getColumnValue(item, "ITEM_DESCRIPTION", ref this._ITEM_DESCRIPTION);
            getColumnValue(item, "ITEM_INDEX", ref this._ITEM_INDEX); 
            getColumnValue(item, "ITEM_TYPE", ref this._ITEM_TYPE);
            getColumnValue(item, "ITEM_REF_ID", ref this._ITEM_REF_ID);
            getColumnValue(item, "ITEM_URL", ref this._ITEM_URL);
            getColumnValue(item, "ITEM_COVER", ref this._ITEM_COVER);
            getColumnValue(item, "ITEM_LOGO", ref this._ITEM_LOGO);
            getColumnValue(item, "ITEM_CREATOR", ref this._ITEM_CREATOR);
            getColumnValue(item, "ITEM_CREATION", ref this._ITEM_CREATION);
            getColumnValue(item, "ITEM_CREATOR_NAME", ref this._ITEM_CREATOR_NAME);
        }
        public override void getItem(PachCombinePortal.PortalObject.DBObject.PCP_I_DBObject item)
        {
            base.getItem(item);
            getColumnValue(item, "ITEM_ID", ref this._ITEM_ID);
            getColumnValue(item, "ITEM_LIST_ID", ref this._ITEM_LIST_ID);
            getColumnValue(item, "ITEM_TITLE", ref this._ITEM_TITLE);
            getColumnValue(item, "ITEM_DESCRIPTION", ref this._ITEM_DESCRIPTION);
            getColumnValue(item, "ITEM_INDEX", ref this._ITEM_INDEX);
            getColumnValue(item, "ITEM_TYPE", ref this._ITEM_TYPE);
            getColumnValue(item, "ITEM_REF_ID", ref this._ITEM_REF_ID);
            getColumnValue(item, "ITEM_URL", ref this._ITEM_URL);
            getColumnValue(item, "ITEM_COVER", ref this._ITEM_COVER);
            getColumnValue(item, "ITEM_LOGO", ref this._ITEM_LOGO);
            getColumnValue(item, "ITEM_CREATOR", ref this._ITEM_CREATOR);
            getColumnValue(item, "ITEM_CREATION", ref this._ITEM_CREATION);
            getColumnValue(item, "ITEM_CREATOR_NAME", ref this._ITEM_CREATOR_NAME);
        }
        public String toJSONString()
        {
            string rv = "";
            rv = rv + "{";
            rv = rv + "\"id\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_ID.ToString("F0")) + "\",";
            rv = rv + "\"listid\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_LIST_ID.ToString("F0")) + "\",";
            rv = rv + "\"title\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_TITLE) + "\",";
            rv = rv + "\"desc\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_DESCRIPTION) + "\",";
            rv = rv + "\"index\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_INDEX.ToString()) + "\","; 
            rv = rv + "\"type\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_TYPE) + "\",";
            rv = rv + "\"refid\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_REF_ID) + "\",";
            rv = rv + "\"url\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_URL) + "\",";
            rv = rv + "\"itemcover\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_COVER) + "\",";
            rv = rv + "\"itemlogo\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_LOGO) + "\",";
            rv = rv + "\"creator\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_CREATOR.ToString("F2")) + "\",";
            rv = rv + "\"creation\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_CREATION.ToString("dd/MM/yyyy")) + "\",";
            rv = rv + "\"creatorname\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ITEM_CREATOR_NAME) + "\",";           
            rv = rv + "\"msg\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.ErrorMessage) + "\"";
            rv = rv + "}";
            return rv;
        }
        public static String BlankJSONString(String msg)
        {
            string rv = "";
            rv = rv + "{";
            rv = rv + "\"id\": \"-1\",";
            rv = rv + "\"listid\": \"-1\",";
            rv = rv + "\"title\": \"\",";
            rv = rv + "\"desc\": \"\",";
            rv = rv + "\"index\": 0,";
            rv = rv + "\"type\": \"\",";
            rv = rv + "\"refid\": \"\",";
            rv = rv + "\"url\": \"\",";
            rv = rv + "\"itemcover\": \"\",";
            rv = rv + "\"itemlogo\": \"\",";
            rv = rv + "\"creator\": \"\",";
            rv = rv + "\"creation\": \"\",";
            rv = rv + "\"creatorname\": \"\",";           
            rv = rv + "\"msg\": \"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"";
            rv = rv + "}";
            return rv;
        }
    }
}