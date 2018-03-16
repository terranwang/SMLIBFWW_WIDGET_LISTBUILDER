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
    public class SMLIB_CON_SMLIB_LISTBUILDER_SHARED : PCP_SiteControllerMaster
    {
        #region Object Create

        public SMLIB_CON_SMLIB_LISTBUILDER_SHARED()
        {
            mDBObject = new SMLIB_DB_SMLIB_LISTBUILDER_SHARED();
            mObjectHash = new Hashtable();
            mObjectTable = new DataTable();
        }

        public SMLIB_CON_SMLIB_LISTBUILDER_SHARED(PCP_DB_Utils DBUtil)
        {
            mDBObject = new SMLIB_DB_SMLIB_LISTBUILDER_SHARED();
            mDBObject.DBUtils.DB_ConnectionString = DBUtil.DB_ConnectionString;
            mObjectHash = new Hashtable();
            mObjectTable = new DataTable();
        }

        protected override Hashtable parseResult(DataTable mDT)
        {
            Hashtable ht = new Hashtable();
            foreach (DataRow dr in mDT.Rows)
            {
                SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED item = new SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED();
                item.getItem(dr);
                ht.Add(item.SHARED_ID, item);
            }

            return ht;
        }

        #endregion

        #region Search
        public SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED getByID(Double ShareID)
        {
            PCP_DB_Queries dbQS = new PCP_DB_Queries();
            dbQS.addCondition("SHARED_ID", ShareID.ToString("F0"), PCP_DB_SEARCH_TYPE.EQUAL);
            this.getByQuery(dbQS);
            if (this.ObjectHash.Count > 0)
            {
                return (this.getFirstObject() as SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED);
            }
            else
            {
                return null;
            }
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED getByListID(Double ListID)
        {
            PCP_DB_Queries dbQS = new PCP_DB_Queries();
            dbQS.addCondition("SHARED_LIST_ID", ListID.ToString("F0"), PCP_DB_SEARCH_TYPE.EQUAL);
            this.getByQuery(dbQS);
            if (this.ObjectHash.Count > 0)
            {
                return (this.getFirstObject() as SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED);
            }
            else
            {
                return null;
            }
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED getByShareRefListID(String ShareRef, Double ListID)
        {
            PCP_DB_Queries dbQS = new PCP_DB_Queries();
            dbQS.addCondition("SHARED_REF_ID", ShareRef, PCP_DB_SEARCH_TYPE.EQUAL);
            dbQS.addCondition("SHARED_LIST_ID", ListID.ToString("F0"), PCP_DB_SEARCH_TYPE.EQUAL);
            this.getByQuery(dbQS);
            if (this.ObjectHash.Count > 0)
            {
                return (this.getFirstObject() as SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED);
            }
            else
            {
                return null;
            }
        }
        public SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED getByShareEmailListID(String ShareEmail, Double ListID)
        {
            PCP_DB_Queries dbQS = new PCP_DB_Queries();
            dbQS.addCondition("SHARED_EMAIL", ShareEmail, PCP_DB_SEARCH_TYPE.EQUAL);
            dbQS.addCondition("SHARED_LIST_ID", ListID.ToString("F0"), PCP_DB_SEARCH_TYPE.EQUAL);
            this.getByQuery(dbQS);
            if (this.ObjectHash.Count > 0)
            {
                return (this.getFirstObject() as SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED);
            }
            else
            {
                return null;
            }
        }
        #endregion

        #region Create

        public void CreateNew(ref SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED Item)
        {
            SMLIB_DBUtils dbcontext = new SMLIB_DBUtils();
            Item.DBObject.DBUtils = this.DBObject.DBUtils;
            Item.insertItem();
        }
        public void insertOrNullItem(ref SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED item)
        {
            if (!String.IsNullOrEmpty(item.SHARED_EMAIL))
            {
                SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED obj = this.getByShareEmailListID(item.SHARED_EMAIL, item.SHARED_LIST_ID);
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
            SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED item = SiteObj as SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED;
            insertOrNullItem(ref item);
        }
        public List<SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED> ToObjList()
        {
            List<SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED> list = new List<SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED>();
            foreach (SMLIB_OBJ_SMLIB_LISTBUILDER_SHARED item in ObjectList)
            {
                list.Add(item);
            }
            return list;
        }

        #endregion
    }
}
