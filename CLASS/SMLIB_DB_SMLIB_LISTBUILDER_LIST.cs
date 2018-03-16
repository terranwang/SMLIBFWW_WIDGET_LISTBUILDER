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
    public class SMLIB_DB_SMLIB_LISTBUILDER_LIST : SMLIB_DB_MASTER
    {
        public SMLIB_DB_SMLIB_LISTBUILDER_LIST()
        {
            DBUtils = new SmartLibraryLib.Utils.SMLIB_DBUtils();
            DB_TableName = "SMLIB_LISTBUILDER_LIST";
            DB_TableKey = "LIST_ID";
            addColumn("LIST_ID", "Double", true, true, "0", true, 0, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("LIST_NAME", "String", false, false, "", false, 1, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("LIST_DESCRIPTION", "String", false, false, "", false, 2, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("LIST_TYPE", "String", false, false, "", false, 3, PCP_DB_SEARCH_TYPE.NONE);           
            addColumn("LIST_CREATOR", "Double", false, false, "-1", false, 4, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("LIST_CREATION", "Datetime", false, false, "NULL", false, 5, PCP_DB_SEARCH_TYPE.NONE);
            addColumn("LIST_CREATOR_NAME", "String", false, false, "NULL", false, 6, PCP_DB_SEARCH_TYPE.NONE);           
        }
    }
}
