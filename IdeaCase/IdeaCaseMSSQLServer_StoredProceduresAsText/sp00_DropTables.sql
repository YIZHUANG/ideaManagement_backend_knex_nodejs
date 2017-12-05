-- (Original script templates by Kari Silpiö 2012)
-- Juhani Välimäki 
-- Idea case database creation scripts 2013-05-05


CREATE PROCEDURE sp00_DropTables

AS

/*  Juhani added a template for creating more drops

	IF OBJECT_ID('') IS NOT NULL
		BEGIN
			DROP TABLE xxxxxx;
		END

*/
	IF OBJECT_ID('Comment') IS NOT NULL
		BEGIN
			DROP TABLE Comment;
		END
	
	IF OBJECT_ID('MemberIdea') IS NOT NULL
		BEGIN
			DROP TABLE MemberIdea;
		END

	IF OBJECT_ID('Member') IS NOT NULL
		BEGIN
			DROP TABLE Member;
		END

	IF OBJECT_ID('Idea') IS NOT NULL
		BEGIN
			DROP TABLE Idea;
		END

	IF OBJECT_ID('Category') IS NOT NULL
		BEGIN
			DROP TABLE Category;
		END

/*  Juhani added a template for creating more drops

	IF OBJECT_ID('') IS NOT NULL
		BEGIN
			DROP TABLE xxxxxx;
		END

*/




-- Finally, display a message
IF (@@Error = 0) 
	BEGIN
		PRINT '================================='
		PRINT ' ALL TABLES DROPPED SUCCESSFULLY.'
		PRINT '================================='
		PRINT ' '
	END
ELSE
	BEGIN
		PRINT '=============================='
		PRINT ' See the error messages above!'
		PRINT '=============================='
		PRINT ' '
	END

-- End 
