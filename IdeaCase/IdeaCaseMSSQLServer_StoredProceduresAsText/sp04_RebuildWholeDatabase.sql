-- (Original script templates by Kari Silpiö 2012)
-- Juhani Välimäki 
-- Idea case database creation scripts 2013-05-05


CREATE PROCEDURE sp04_RebuildWholeDatabase

AS
	BEGIN
		SET NOCOUNT ON

		EXEC sp00_DropTables

		EXEC sp01_CreateTables

		EXEC sp02_InsertTestData
	END
