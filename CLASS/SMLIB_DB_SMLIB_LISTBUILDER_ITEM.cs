using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using PachCombinePortal.PortalObject.DBObject;
using SmartLibraryLib.Object.DBObject;
using SmartLibraryLib.Utils;
using SmartLibraryLib.Object.Controller;
using SmartLibraryLib.Object.Object;

namespace SMLIBFWW_WIDGET_LISTBUILDER.CLASS
{
    public class SMLIB_DB_SMLIB_LISTBUILDER_ITEM : SMLIB_DB_MASTER
    {
        public SMLIB_DB_SMLIB_LISTBUILDER_ITEM()
        {
            DBUtils = new SmartLibraryLib.Utils.SMLIB_DBUtils();
            DB_TableName = "SMLIB_LISTBUILDER_ITEM";
            DB_TableKey = "ITEM_ID";
            addColumn("ITEM_ID", "Double", true, true, "0", true, 0, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("ITEM_LIST_ID", "Double", false, false, "", false, 1, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("ITEM_TITLE", "String", false, false, "", false, 2, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("ITEM_DESCRIPTION", "String", false, false, "", false, 3, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("ITEM_INDEX", "Int", false, false, "", false, 5, PCP_DB_SEARCH_TYPE.NONE); 
            addColumn("ITEM_TYPE", "String", false, false, "", false, 5, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("ITEM_REF_ID", "String", false, false, "", false, 6, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("ITEM_URL", "String", false, false, "", false, 7, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("ITEM_COVER", "String", false, false, "", false, 8, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("ITEM_LOGO", "String", false, false, "", false, 9, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("ITEM_CREATOR", "Double", false, false, "-1", false, 10, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("ITEM_CREATION", "Datetime", false, false, "NULL", false, 11, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("ITEM_CREATOR_NAME", "String", false, false, "NULL", false, 12, PCP_DB_SEARCH_TYPE.NONE);
        }
    }
}
