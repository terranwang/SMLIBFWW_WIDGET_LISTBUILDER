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
    public class SMLIB_CON_SMLIB_LISTBUILDER_ITEM : PCP_SiteControllerMaster
    {
        #region Object Create

        public SMLIB_CON_SMLIB_LISTBUILDER_ITEM()
        {
            mDBObject = new SMLIB_DB_SMLIB_LISTBUILDER_ITEM();
            mObjectHash = new Hashtable();
            mObjectTable = new DataTable();
        }

        public SMLIB_CON_SMLIB_LISTBUILDER_ITEM(PCP_DB_Utils DBUtil)
        {
            mDBObject = new SMLIB_DB_SMLIB_LISTBUILDER_ITEM();
            mDBObject.DBUtils.DB_ConnectionString = DBUtil.DB_ConnectionString;
            mObjectHash = new Hashtable();
            mObjectTable = new DataTable();
        }

        protected override Hashtable parseResult(DataTable mDT)
        {
            Hashtable ht = new Hashtable();
            foreach (DataRow dr in mDT.Rows)
            {
                SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM item = new SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM();
                item.getItem(dr);
                ht.Add(item.ITEM_ID, item);
            }

            return ht;
        }

        #endregion

        #region Search
        public SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM getByID(Double ItemID)
        {
            PCP_DB_Queries dbQS = new PCP_DB_Queries();
            dbQS.addCondition("ITEM_ID", ItemID.ToString("F0"), PCP_DB_SEARCH_TYPE.EQUAL);
            this.getByQuery(dbQS);
            if (this.ObjectHash.Count > 0)
            {
                return (this.getFirstObject() as SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM);
            }
            else
            {
                return null;
            }
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM getByListID(Double ListID)
        {
            PCP_DB_Queries dbQS = new PCP_DB_Queries();            
            dbQS.addCondition("ITEM_LIST_ID", ListID.ToString("F0"), PCP_DB_SEARCH_TYPE.EQUAL);
            this.getByQuery(dbQS);
            if (this.ObjectHash.Count > 0)
            {
                return (this.getFirstObject() as SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM);
            }
            else
            {
                return null;
            }
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM getByItemTitleListID(String ItemTitle, Double ListID)
        {
            PCP_DB_Queries dbQS = new PCP_DB_Queries();
            dbQS.addCondition("ITEM_TITLE", ItemTitle, PCP_DB_SEARCH_TYPE.EQUAL);
            dbQS.addCondition("ITEM_LIST_ID", ListID.ToString("F0"), PCP_DB_SEARCH_TYPE.EQUAL);
            this.getByQuery(dbQS);
            if (this.ObjectHash.Count > 0)
            {
                return (this.getFirstObject() as SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM);
            }
            else
            {
                return null;
            }
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM getByItemUrlListID(String ItemUrl, Double ListID)
        {
            PCP_DB_Queries dbQS = new PCP_DB_Queries();
            dbQS.addCondition("ITEM_URL", ItemUrl, PCP_DB_SEARCH_TYPE.EQUAL);
            dbQS.addCondition("ITEM_LIST_ID", ListID.ToString("F0"), PCP_DB_SEARCH_TYPE.EQUAL);
            this.getByQuery(dbQS);
            if (this.ObjectHash.Count > 0)
            {
                return (this.getFirstObject() as SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM);
            }
            else
            {
                return null;
            }
        }        
        #endregion

        #region Create

        public void CreateNew(ref SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM Item)
        {
            SMLIB_DBUtils dbcontext = new SMLIB_DBUtils();
            Item.DBObject.DBUtils = this.DBObject.DBUtils;
            Item.insertItem();
        }
        public void insertOrNullItem(ref SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM item)
        {
            if (!String.IsNullOrEmpty(item.ITEM_URL))
            {
                SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM obj = this.getByItemUrlListID(item.ITEM_URL, item.ITEM_LIST_ID);
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
            SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM item = SiteObj as SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM;
            insertOrNullItem(ref item);
        }
        public List<SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM> ToObjList()
        {
            List<SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM> list = new List<SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM>();
            foreach (SMLIB_OBJ_SMLIB_LISTBUILDER_ITEM item in ObjectList)
            {
                list.Add(item);
            }
            return list;
        }

        #endregion
    }
}
