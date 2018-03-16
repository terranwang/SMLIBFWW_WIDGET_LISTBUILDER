

CREATE TABLE [dbo].[SMLIB_LISTBUILDER_ITEM](
	[ITEM_ID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[ITEM_LIST_ID] [numeric](18, 0) NULL,
	[ITEM_TITLE] [nvarchar](500) NULL,
	[ITEM_DESCRIPTION] [nvarchar](max) NULL,
	[ITEM_INDEX] [int] NULL,
	[ITEM_TYPE] [nvarchar](50) NULL,
	[ITEM_REF_ID] [nvarchar](500) NULL,
	[ITEM_URL] [nvarchar](max) NULL,
	[ITEM_COVER] [nvarchar](max) NULL,
	[ITEM_LOGO] [nvarchar](max) NULL,
	[ITEM_CREATOR] [numeric](28, 2) NULL,
	[ITEM_CREATION] [datetime] NULL,
	[ITEM_CREATOR_NAME] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

/*SQLCOMMAND*/

/*END*/