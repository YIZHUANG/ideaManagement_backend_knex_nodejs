-- (Original script templates by Kari Silpiö 2012)
-- Juhani Välimäki 
-- Idea case database creation scripts 2013-05-05


CREATE PROCEDURE sp02_InsertTestData

AS

	/* Optional: */
/* 
EXEC sp03_DeleteAllData;
*/

/* Template, copy from this, do not edit this template ***

INSERT INTO Category
		(categoryId, 
		categoryTitle,
		description)
	VALUES
		(,
		'',
		'')
		;	

*/

INSERT INTO Category
		( 
		title,
		budgetLimit,	isActive)
	VALUES
		(
		'Purchase',
		5000.00,		1),
		(
		'Event',
		200.50,			1),
		(
		'Training',
		2000.00,		0),
		(
		'Work party',
		10000.00,		0)
		;	

/* Template, copy from this, do not edit this template ***

INSERT INTO Idea
		(ideaId,	title,
		description,
		budget,		isReadyForComments,
		peopleNeeded,		creationDate,		lastModified,
		categoryId)
	VALUES
		(100,		'',
		'',
		'.',		,
		,					'2013--',			'2013-- :',
		1),
		(100,		'',
		'',
		'.',		,
		,					'2013--',			'2013-- :',
		1)
		;

*/

INSERT INTO Idea
		(	title,
		description,
		budget,		isReadyForComments,
		peopleNeeded,		creationDate,		lastModified,
		categoryId)
	VALUES
		(		'Little Xmas party',
		'A little xmas party so early that the restaurants still have vacancy. E.g. early Sept?',
		250.00,		1,
		5,					'2013-04-01',		'2013-04-11 12:59',
		2),
		(		'Fire extinguisher training 28.4.2013 at 18:00',
		'According to our safety regulations at least one from each flat has to know how to use the extinguisher. Training consists of 15 min theory and then one hour practice',
		49.99,		1,
		5,					'2013-04-01',		'2013-05-24 09:00',
		2),
		(		'Type writer training',
		'Who wants to learn to type with 10 fingers? Should we have a club every Monday night at 17:00?',
		1500.00,		0,
		7,					'2012-11-15',		'2013-06-02 11:40',		
		3)
		;


/* Template, copy from this, do not edit this template ***

INSERT INTO Member
		(memberId,
		userName,			
		email)
	VALUES
		(10,
		'',
		'@.'
		)
		;

*/		

INSERT INTO Member
		(
		userName,			
		email)
	VALUES
		(
		'pekka',
		'peku@gmail.com'
		),
		(
		'anna',
		'annukka@sahkoposti.fi'
		),
		(
		'tuukka',
		'tuukka@kolmepojoo.com'
		),
		(
		'antti',
		'ratkaisija@todayshockey.org'
		),
		(
		'john',
		'john@doe.com'
		)
		;

/* Template, copy from this, do not edit this template ***

INSERT INTO MemberIdea
		(memberId, ideaId)
	VALUES
		(10,		100),
		(10,		100)
		;

*/		

INSERT INTO MemberIdea
		(memberId, ideaId)
	VALUES
		(101,		1003),
		(101,		1001),
		(102,		1001)
		;



/* Template, copy from this, do not edit this template ***

INSERT INTO Comment
		(memberId,	ideaId,		commentTimeStamp,			commentLine)
	VALUES
		(10,		100,		'-- :',		''),
		(10,		100,		'-- :',		'')
		;

*/		

INSERT INTO Comment
		(memberId,	ideaId,		commentTimeStamp,			commentLine)
	VALUES
		(102,		1001,		'2013-05-11 13:16',		'Completely agree'),
		(102,		1001,		'2013-06-30 23:59',		'Now I start to doubt it')
		;


-- Finally, display a message (not robust error handling...)
IF (@@Error = 0) 
	BEGIN
		PRINT '================================='
		PRINT ' TEST DATA INSERTED SUCCESSFULLY.'
		PRINT '================================='
		PRINT ' '
	END
ELSE
	BEGIN
		PRINT '================================='
		PRINT ' TEST DATA INSERTION FAILED!'
		PRINT ' See the error messages above.'
		PRINT ' '
		PRINT ' (Maybe tables do not exist yet?)'
		PRINT '================================='
		PRINT ' '
	END

-- End --