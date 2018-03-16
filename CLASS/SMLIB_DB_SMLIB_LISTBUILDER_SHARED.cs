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
    public class SMLIB_DB_SMLIB_LISTBUILDER_SHARED : SMLIB_DB_MASTER
    {
        public SMLIB_DB_SMLIB_LISTBUILDER_SHARED()
        {
            DBUtils = new SmartLibraryLib.Utils.SMLIB_DBUtils();
            DB_TableName = "SMLIB_LISTBUILDER_SHARED";
            DB_TableKey = "SHARED_ID";
            addColumn("SHARED_ID", "Double", true, true, "0", true, 0, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("SHARED_LIST_ID", "Double", false, false, "", false, 1, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("SHARED_INDEX", "Int", false, false, "", false, 2, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("SHARED_REF_ID", "String", false, false, "", false, 3, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("SHARED_NAME", "String", false, false, "", false, 4, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("SHARED_EMAIL", "String", false, false, "", false, 5, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("SHARED_TYPE", "String", false, false, "", false, 6, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("SHARED_IMAGE", "String", false, false, "", false, 7, PCP_DB_SEARCH_TYPE.NONE);            
            addColumn("SHARED_CREATOR", "Double", false, false, "-1", false, 8, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("SHARED_CREATION", "Datetime", false, false, "NULL", false, 9, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("SHARED_CREATOR_NAME", "String", false, false, "NULL", false, 10, PCP_DB_SEARCH_TYPE.NONE);
        }
    }
}
