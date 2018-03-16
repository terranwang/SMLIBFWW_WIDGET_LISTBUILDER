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
    public class SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED : PCP_SiteObjectMaster
    {
        private double _SHARED_ID = -1;
        private double _SHARED_LIST_ID = -1;
        private int _SHARED_INDEX = 0;
        private String _SHARED_REF_ID = "";
        private String _SHARED_NAME = "";
        private String _SHARED_EMAIL = "";
        private String _SHARED_TYPE = "";
        private String _SHARED_IMAGE = "";
        private double _SHARED_CREATOR = -1;
        private DateTime _SHARED_CREATION = DateTime.Now;
        private String _SHARED_CREATOR_NAME = "";
        private String _ErrorMessage = "";
        public double SHARED_ID
        {
            get
            {
                return _SHARED_ID;
            }
            set
            {
                _SHARED_ID = value;
            }
        }
        public double SHARED_LIST_ID
        {
            get
            {
                return _SHARED_LIST_ID;
            }
            set
            {
                _SHARED_LIST_ID = value;
            }
        }
        public int SHARED_INDEX
        {
            get
            {
                return _SHARED_INDEX;
            }
            set
            {
                _SHARED_INDEX = value;
            }
        }
        public String SHARED_REF_ID
        {
            get
            {
                return _SHARED_REF_ID;
            }
            set
            {
                _SHARED_REF_ID = value;
            }
        }
        public String SHARED_NAME
        {
            get
            {
                return _SHARED_NAME;
            }
            set
            {
                _SHARED_NAME = value;
            }
        }
        public String SHARED_EMAIL
        {
            get
            {
                return _SHARED_EMAIL;
            }
            set
            {
                _SHARED_EMAIL = value;
            }
        }
        public String SHARED_TYPE
        {
            get
            {
                return _SHARED_TYPE;
            }
            set
            {
                _SHARED_TYPE = value;
            }
        }
        public String SHARED_IMAGE
        {
            get
            {
                return _SHARED_IMAGE;
            }
            set
            {
                _SHARED_IMAGE = value;
            }
        }        
        public double SHARED_CREATOR
        {
            get
            {
                return _SHARED_CREATOR;
            }
            set
            {
                _SHARED_CREATOR = value;
            }
        }
        public DateTime SHARED_CREATION
        {
            get
            {
                return _SHARED_CREATION;
            }
            set
            {
                _SHARED_CREATION = value;
            }
        }
        public String SHARED_CREATOR_NAME
        {
            get
            {
                return _SHARED_CREATOR_NAME;
            }
            set
            {
                _SHARED_CREATOR_NAME = value;
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
        public SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED()
        {
            DBObject = new SMLIB_DB_SMLIB_LISTBUILDER_SHARED();
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED(PachCombinePortal.PortalUtil.PCP_DB_Utils ConObj)
        {
            DBObject = new SMLIB_DB_SMLIB_LISTBUILDER_SHARED();
            DBObject.DBUtils.DB_ConnectionString = ConObj.DB_ConnectionString;
        }
        public override void setItem()
        {
            DBObject.addValue("SHARED_ID", SHARED_ID);
            DBObject.addValue("SHARED_LIST_ID", SHARED_LIST_ID);
            DBObject.addValue("SHARED_INDEX", SHARED_INDEX);
            DBObject.addValue("SHARED_REF_ID", SHARED_REF_ID);
            DBObject.addValue("SHARED_NAME", SHARED_NAME);
            DBObject.addValue("SHARED_EMAIL", SHARED_EMAIL);
            DBObject.addValue("SHARED_TYPE", SHARED_TYPE);
            DBObject.addValue("SHARED_IMAGE", SHARED_IMAGE);
            DBObject.addValue("SHARED_CREATOR", SHARED_CREATOR);
            DBObject.addValue("SHARED_CREATION", SHARED_CREATION);
            DBObject.addValue("SHARED_CREATOR_NAME", SHARED_CREATOR_NAME);
        }
        public override void getItem(System.Data.DataRow item)
        {
            base.getItem(item);
            getColumnValue(item, "SHARED_ID", ref this._SHARED_ID);
            getColumnValue(item, "SHARED_LIST_ID", ref this._SHARED_LIST_ID);
            getColumnValue(item, "SHARED_INDEX", ref this._SHARED_INDEX);
            getColumnValue(item, "SHARED_REF_ID", ref this._SHARED_REF_ID);
            getColumnValue(item, "SHARED_NAME", ref this._SHARED_NAME);
            getColumnValue(item, "SHARED_EMAIL", ref this._SHARED_EMAIL);
            getColumnValue(item, "SHARED_TYPE", ref this._SHARED_TYPE);
            getColumnValue(item, "SHARED_IMAGE", ref this._SHARED_IMAGE);
            getColumnValue(item, "SHARED_CREATOR", ref this._SHARED_CREATOR);
            getColumnValue(item, "SHARED_CREATION", ref this._SHARED_CREATION);
            getColumnValue(item, "SHARED_CREATOR_NAME", ref this._SHARED_CREATOR_NAME);
        }
        public override void getItem(PachCombinePortal.PortalObject.DBObject.PCP_I_DBObject item)
        {
            base.getItem(item);
            getColumnValue(item, "SHARED_ID", ref this._SHARED_ID);
            getColumnValue(item, "SHARED_LIST_ID", ref this._SHARED_LIST_ID);
            getColumnValue(item, "SHARED_INDEX", ref this._SHARED_INDEX);
            getColumnValue(item, "SHARED_REF_ID", ref this._SHARED_REF_ID);
            getColumnValue(item, "SHARED_NAME", ref this._SHARED_NAME);
            getColumnValue(item, "SHARED_EMAIL", ref this._SHARED_EMAIL);
            getColumnValue(item, "SHARED_TYPE", ref this._SHARED_TYPE);
            getColumnValue(item, "SHARED_IMAGE", ref this._SHARED_IMAGE);
            getColumnValue(item, "SHARED_CREATOR", ref this._SHARED_CREATOR);
            getColumnValue(item, "SHARED_CREATION", ref this._SHARED_CREATION);
            getColumnValue(item, "SHARED_CREATOR_NAME", ref this._SHARED_CREATOR_NAME);
        }
        public String toJSONString()
        {
            string rv = "";
            rv = rv + "{";
            rv = rv + "\"id\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.SHARED_ID.ToString("F0")) + "\",";
            rv = rv + "\"listid\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.SHARED_LIST_ID.ToString("F0")) + "\",";
            rv = rv + "\"index\": " + SMLIB_StringUtils.TO_JSON_STRING(this.SHARED_INDEX.ToString()) + ",";
            rv = rv + "\"refid\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.SHARED_REF_ID) + "\",";
            rv = rv + "\"name\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.SHARED_NAME) + "\",";
            rv = rv + "\"email\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.SHARED_EMAIL) + "\",";
            rv = rv + "\"type\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.SHARED_TYPE) + "\",";
            rv = rv + "\"image\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.SHARED_IMAGE) + "\",";            
            rv = rv + "\"creator\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.SHARED_CREATOR.ToString("F2")) + "\",";
            rv = rv + "\"creation\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.SHARED_CREATION.ToString("dd/MM/yyyy")) + "\",";
            rv = rv + "\"creatorname\": \"" + SMLIB_StringUtils.TO_JSON_STRING(this.SHARED_CREATOR_NAME) + "\",";
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
            rv = rv + "\"index\": 0,";
            rv = rv + "\"refid\": \"\",";
            rv = rv + "\"name\": \"\",";
            rv = rv + "\"email\": \"\",";
            rv = rv + "\"type\": \"\",";
            rv = rv + "\"image\": \"\",";
            rv = rv + "\"creator\": \"\",";
            rv = rv + "\"creation\": \"\",";
            rv = rv + "\"creatorname\": \"\",";
            rv = rv + "\"msg\": \"" + SMLIB_StringUtils.TO_JSON_STRING(msg) + "\"";
            rv = rv + "}";
            return rv;
        }
    }
}