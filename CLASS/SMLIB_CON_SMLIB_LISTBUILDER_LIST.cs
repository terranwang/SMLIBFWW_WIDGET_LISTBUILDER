using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Collections;
using PachCombinePortal.PortalObject.SiteController;
using PachCombinePortal.PortalObject.SiteObject;
using PachCombinePortal.PortalObject.DBObject;
using PachCombinePortal.PortalUtil;
using SmartLibraryLib.Object.DBObject;
using SmartLibraryLib.Object.Object;
using SmartLibraryLib.Utils;
using SmartLibraryLib.Object.Controller;

namespace SMLIBFWW_WIDGET_LISTBUILDER.CLASS
{
    public class SMLIB_CON_SMLIB_LISTBUILDER_LIST : PCP_SiteControllerMaster
    {
        #region Object Create

        public SMLIB_CON_SMLIB_LISTBUILDER_LIST()
        {
            mDBObject = new SMLIB_DB_SMLIB_LISTBUILDER_LIST();
            mObjectHash = new Hashtable();
            mObjectTable = new DataTable();
        }

        public SMLIB_CON_SMLIB_LISTBUILDER_LIST(PCP_DB_Utils DBUtil)
        {
            mDBObject = new SMLIB_DB_SMLIB_LISTBUILDER_LIST();
            mDBObject.DBUtils.DB_ConnectionString = DBUtil.DB_ConnectionString;
            mObjectHash = new Hashtable();
            mObjectTable = new DataTable();
        }

        protected override Hashtable parseResult(DataTable mDT)
        {
            Hashtable ht = new Hashtable();
            foreach (DataRow dr in mDT.Rows)
            {
                SMLIB_OBJ_SMLIB_LISTBUILDER_LIST item = new SMLIB_OBJ_SMLIB_LISTBUILDER_LIST();
                item.getItem(dr);
                ht.Add(item.LIST_ID, item);
            }

            return ht;
        }

        #endregion

        #region Search
        public SMLIB_OBJ_SMLIB_LISTBUILDER_LIST getByID(Double ListID)
        {
            PCP_DB_Queries dbQS = new PCP_DB_Queries();
            dbQS.addCondition("LIST_ID", ListID.ToString("F0"), PCP_DB_SEARCH_TYPE.EQUAL);
            this.getByQuery(dbQS);
            if (this.ObjectHash.Count > 0)
            {
                return (this.getFirstObject() as SMLIB_OBJ_SMLIB_LISTBUILDER_LIST);
            }
            else
            {
                return null;
            }
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_LIST getByListName(String ListName)
        {
            PCP_DB_Queries dbQS = new PCP_DB_Queries();
            dbQS.addCondition("LIST_NAME", ListName, PCP_DB_SEARCH_TYPE.EQUAL);
            this.getByQuery(dbQS);
            if (this.ObjectHash.Count > 0)
            {
                return (this.getFirstObject() as SMLIB_OBJ_SMLIB_LISTBUILDER_LIST);
            }
            else
            {
                return null;
            }
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_LIST getByListNamePatronID(String ListName,Double PatronID)
        {
            PCP_DB_Queries dbQS = new PCP_DB_Queries();
            dbQS.addCondition("LIST_NAME", ListName, PCP_DB_SEARCH_TYPE.EQUAL);
            dbQS.addCondition("LIST_CREATOR", PatronID.ToString("F2"), PCP_DB_SEARCH_TYPE.EQUAL);
            this.getByQuery(dbQS);
            if (this.ObjectHash.Count > 0)
            {
                return (this.getFirstObject() as SMLIB_OBJ_SMLIB_LISTBUILDER_LIST);
            }
            else
            {
                return null;
            }
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_LIST getByPatronID(Double PatronID)
        {
            PCP_DB_Queries dbQS = new PCP_DB_Queries();            
            dbQS.addCondition("LIST_CREATOR", PatronID.ToString("F2"), PCP_DB_SEARCH_TYPE.EQUAL);
            this.getByQuery(dbQS);
            if (this.ObjectHash.Count > 0)
            {
                return (this.getFirstObject() as SMLIB_OBJ_SMLIB_LISTBUILDER_LIST);
            }
            else
            {
                return null;
            }
        }
        public String getAllListJsonByPatronID(Double PatronID, bool FullLoad)
        {
            List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> mylist = this.getListByPatronID(PatronID);
            mylist.Sort((x, y) => x.LIST_NAME.CompareTo(y.LIST_NAME));
            List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> sharelist = this.getSharedByPatronID(PatronID);
            List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> collaboratelist = this.getCollaborateByPatronID(PatronID);
            string rv = "";
            rv += "{";
            rv = rv + "\"mylist\": [";
            foreach (SMLIB_OBJ_SMLIB_LISTBUILDER_LIST item in mylist)
            {
                if (FullLoad)
                {
                    item.getAllSubs();
                }
                item.LIST_TYPE = "MY_LIST";
                rv = rv + item.toJSONString()+",";
            }
            if (rv.EndsWith(","))
            {
                rv = rv.Substring(0, rv.LastIndexOf(","));
            }
            rv = rv + "],";
            rv = rv + "\"sharelist\": [";
            foreach (SMLIB_OBJ_SMLIB_LISTBUILDER_LIST item in sharelist)
            {
                if (FullLoad)
                {
                    item.getAllItems();
                }
                item.LIST_TYPE = "SHARED_LIST";
                rv = rv + item.toJSONString() + ",";
            }
            if (rv.EndsWith(","))
            {
                rv = rv.Substring(0, rv.LastIndexOf(","));
            }
            rv = rv + "],";
            rv = rv + "\"collaboratelist\": [";
            foreach (SMLIB_OBJ_SMLIB_LISTBUILDER_LIST item in collaboratelist)
            {
                if (FullLoad)
                {
                    item.getAllItems();
                }
                item.LIST_TYPE = "COLLABORATE_LIST";
                rv = rv + item.toJSONString() + ",";
            }
            if (rv.EndsWith(","))
            {
                rv = rv.Substring(0, rv.LastIndexOf(","));
            }
            rv = rv + "],";
            rv += "\"msg\":\"\"";
            rv += "}";
            return rv;

        }
        public List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> getListByPatronID(Double PatronID)
        {           
            this.getByPatronID(PatronID);
            return this.ToObjList();

        }
        public List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> getSharedByPatronID(Double PatronID)
        {
            List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> rv = new List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST>();
            String sql = "SELECT * FROM SMLIB_LISTBUILDER_LIST WHERE LIST_ID IN (SELECT SHARED_LIST_ID FROM SMLIB_LISTBUILDER_SHARED WHERE SHARED_REF_ID='"+ PatronID.ToString("F2") + "' AND SHARED_TYPE='READONLY') ORDER BY LIST_NAME ";
            SMLIB_DBUtils dbu = new SMLIB_DBUtils();
            DataTable dt = new DataTable();
            dt = dbu.getTable(sql);
            foreach (DataRow dr in dt.Rows)
            {
                SMLIB_OBJ_SMLIB_LISTBUILDER_LIST item = new SMLIB_OBJ_SMLIB_LISTBUILDER_LIST();
                item.getItem(dr); 
                rv.Add(item);
            }
            return rv;
        }
        public List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> getCollaborateByPatronID(Double PatronID)
        {
            List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> rv = new List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST>();
            String sql = "SELECT * FROM SMLIB_LISTBUILDER_LIST WHERE LIST_ID IN (SELECT SHARED_LIST_ID FROM SMLIB_LISTBUILDER_SHARED WHERE SHARED_REF_ID='" + PatronID.ToString("F2") + "' AND SHARED_TYPE='COLLABORATE') ORDER BY LIST_NAME ";
            SMLIB_DBUtils dbu = new SMLIB_DBUtils();
            DataTable dt = new DataTable();
            dt = dbu.getTable(sql);
            foreach (DataRow dr in dt.Rows)
            {
                SMLIB_OBJ_SMLIB_LISTBUILDER_LIST item = new SMLIB_OBJ_SMLIB_LISTBUILDER_LIST();
                item.getItem(dr);
                rv.Add(item);
            }
            return rv;
        }
        #endregion

        #region Create

        public void CreateNew(ref SMLIB_OBJ_SMLIB_LISTBUILDER_LIST Item)
        {
            SMLIB_DBUtils dbcontext = new SMLIB_DBUtils();
            Item.DBObject.DBUtils = this.DBObject.DBUtils;
            Item.insertItem();
        }
        public void insertOrNullItem(ref SMLIB_OBJ_SMLIB_LISTBUILDER_LIST item)
        {
            if (!String.IsNullOrEmpty(item.LIST_NAME))
            {
                SMLIB_OBJ_SMLIB_LISTBUILDER_LIST obj = this.getByListNamePatronID(item.LIST_NAME, item.LIST_CREATOR);
                if (obj != null)
                {
                    item = obj;
                }
                else
                {
                    CreateNew(ref item);
                }
            }
        }
        public override void insertObject(ref PCP_I_SiteObject SiteObj)
        {
            SMLIB_OBJ_SMLIB_LISTBUILDER_LIST item = SiteObj as SMLIB_OBJ_SMLIB_LISTBUILDER_LIST;
            insertOrNullItem(ref item);
        }
        public List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> ToObjList()
        {
            List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST> list = new List<SMLIB_OBJ_SMLIB_LISTBUILDER_LIST>();
            foreach (SMLIB_OBJ_SMLIB_LISTBUILDER_LIST item in ObjectList)
            {
                list.Add(item);
            }
            return list;
        }

        #endregion
    }
}
