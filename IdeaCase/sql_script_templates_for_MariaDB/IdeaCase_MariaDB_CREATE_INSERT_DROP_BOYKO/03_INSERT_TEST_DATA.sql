

INSERT INTO Category(title, budgetLimit, isActive)
	VALUES
		('Purchase', 5000.00, 1),
		('Event', 250.50, 0),
		('Training', 2000.20, 1),
		('Work party', 10000.50, 1),
		('Grocery', 3750.50, 0),
		('Hardware', 17378.35, 1);

INSERT INTO Idea(title,
	 	description,
		budget, isReadyForComments,	peopleNeeded,
		creationDate, lastModified, categoryId)
	VALUES
		(	'B-day party',
			'Birthday party for collegues from work',
			557.00,		1,	9,
			'2017-04-01',		'2017-05-11 12:59',	2),
		(	'Little Xmas party',
			'A little xmas party so early that the restaurants still have vacancy. E.g. early Sept?',
			250.00,		1,	5,
			'2013-04-01',		'2013-04-11 12:59',	2),
		(	'Car purchase',
			'It is time to buy a new car',
			19900.00,		1,	1,
			'2015-01-03',		'2016-01-11 20:53',	1),
		(	'Washing machine',
			'Better your own than common',
			400.00,		1,	2,
			'2015-04-07',		'2016-11-27 11:33',	1),
		(	'Cesar Salad',
			'Dont forget the ingredients',
			45.00,		1,	1,
			'2010-07-07',		'2012-01-14 20:53',	5),
		(	'New switch',
			'Do not mess up Nintendo Switch and network switch',
			100.00,		0,	7,
			'2012-02-17',		'2017-08-20 16:23',	6),
		(	'PS4 Pro',
			'PS4 Pro is out, check out the new VR possibilities',
			900.00,		1,	20,
			'2017-05-17',		'2017-08-25 19:13',	6),
		(	'Running',
			'Running event shape yourself',
			54.00,		0,	70,
			'2015-05-17',		'2015-08-20 09:10',	3),
		(	'Crossfit',
			'Forget about working with free weights, cross fit is what you need',
			5.00,		0,	5,
			'2014-03-10',		'2016-11-24 16:23',	3),
		(	'Work party',
			'For all newcomers in our company we organaize this event',
			370.00,		1,	37,
			'2017-06-17',		'2017-09-1 12:13',	4);


INSERT INTO Member (userName,
										email)
   VALUES
	 	 ('pekka',
 		'peku@gmail.com'),
		('alex',
		'alex@somemail.ro'),
		('fred',
	  	'fred@gmail.com'),
	  	('alexandr',
	  	'alexandr@somemail.ro'),
	  	('timothy',
		  'timo@gmail.com'),
		  ('rosa',
		  'rosa@somemail.ro'),
		  ('sander',
 		   'sander@gmail.com'),
 		   ('esse',
  		  'esse@somemail.ro');

INSERT INTO MemberIdea (memberId, ideaId)
		VALUES
			(301, 204),
			(301, 205),
			(301, 201);


INSERT INTO Comment(memberId, ideaId,
		commentTimeStamp, commentLine)
		VALUES
		(301, 202,
		'2014-05-11 13:16', 'Completely agree'),
		(301, 204,
		'2011-02-11 10:16', 'that is wierd');

-- --------------------- 5.Actual Form Submissions ---------------------------

--  -------------------- *** END *** -----------------------------------------
		



	