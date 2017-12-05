-- (Original script format by Kari Silpiö 2012)
-- This case created by Juhani Välimäki
-- Idea case database creation scripts 2017-07-06

-- Keywords that should be avoided: user, table, name, text, password
-- In some systems avoid even: description, owner, id, level
-- Or at least surround them by square brackets [description] which means this


CREATE PROCEDURE sp01_CreateTables

AS

	CREATE TABLE Category
	(
		id					INTEGER			NOT NULL IDENTITY(1,1),	-- Surrogate key and auto-generated, autoincrement
		title				VARCHAR(200)	NOT NULL,
		budgetLimit			MONEY			,
		isActive			BIT				NOT NULL,

		CONSTRAINT pk_Category PRIMARY KEY (id),

		CONSTRAINT unique_Category_title UNIQUE (title)
	);

	CREATE TABLE Idea
	(
		id					INTEGER			NOT NULL IDENTITY(1001,1),	-- Surrogate key
		title				VARCHAR(200)	NOT NULL,
		[description]		VARCHAR(MAX)	NOT NULL,
		budget				DECIMAL(12,4)	,

		isReadyForComments	BIT				NOT NULL,
		peopleNeeded		INTEGER			,
		creationDate		DATE			NOT NULL,


		lastModified		DATETIME		NOT NULL,
		categoryId			INTEGER			NOT NULL,


		CONSTRAINT pk_Idea PRIMARY KEY (id),

		CONSTRAINT unique_Idea_title UNIQUE (title),

		CONSTRAINT fk_Idea_Category FOREIGN KEY (categoryId)
				REFERENCES Category(id),

		CONSTRAINT chk_Idea_peopleNeeded_between_1_and_10
				CHECK (peopleNeeded IS NULL
					OR
					(peopleNeeded IS NOT NULL AND (peopleNeeded >= 1 AND peopleNeeded <=10) ) )
	);

	CREATE TABLE Member
	(
		id					INTEGER			NOT NULL IDENTITY(101,1),	-- Surrogate key
		userName			VARCHAR(200)	NOT NULL,
		email				VARCHAR(400)	,

		CONSTRAINT pk_Member PRIMARY KEY (id),

		CONSTRAINT unique_Member_userName UNIQUE (userName),
		CONSTRAINT unique_Member_emailAddress UNIQUE (email)
	);

	-- Members who created the idea, Many to many, technical linkage table
	CREATE TABLE MemberIdea
	(
		memberId			INTEGER			NOT NULL,
		ideaId				INTEGER			NOT NULL,

		CONSTRAINT pk_MemberIdea PRIMARY KEY (memberId, ideaId),

		CONSTRAINT fk_MemberIdea_Member FOREIGN KEY (memberId)
				REFERENCES Member(id),

		CONSTRAINT fk_MemberIdea_Idea FOREIGN KEY (ideaId)
				REFERENCES Idea(id)
	);

	CREATE TABLE Comment
	(
		memberId			INTEGER			NOT NULL,
		ideaId				INTEGER			NOT NULL,
		commentTimeStamp	DATETIME		NOT NULL,
		commentLine			VARCHAR(200)	NOT NULL,

		CONSTRAINT pk_Comment PRIMARY KEY (memberId, ideaId, commentTimeStamp),

		CONSTRAINT unique_Comment_commentLinePerSameMemberAndIdea UNIQUE (memberId, ideaId, commentLine),

		CONSTRAINT fk_Comment_Member FOREIGN KEY (memberId)
				REFERENCES Member(id),

		CONSTRAINT fk_Comment_Idea FOREIGN KEY (ideaId)
				REFERENCES Idea(id),
	);

-- Finally, display a message
IF (@@Error = 0)
	BEGIN
		PRINT '============================='
		PRINT ' TABLES CREATED SUCCESSFULLY.'
		PRINT '============================='
		PRINT ' '
	END

-- End --

('', '', ,1 ,
	 ,NOW() , NOW(), ),
('', '', ,1 ,
	 ,NOW() , NOW(), ),
('', '', ,1 ,
	 ,NOW() , NOW(), ),
('', '', ,1 ,
	 ,NOW() , NOW(), ),
('', '', ,1 ,
	 ,NOW() , NOW(), ),
('', '', ,1 ,
	 ,NOW() , NOW(), ),
('', '', ,1 ,
	 ,NOW() , NOW(), ),
('', '', ,1 ,
	 ,NOW() , NOW(), ),
