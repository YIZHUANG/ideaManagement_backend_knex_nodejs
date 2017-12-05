-- (C) 2007-2017 - Juhani V?lim?ki (Toan Khuc, Thu Nghiem)

-- MARIADB = MySQL script

-- (USERNAME AND PASSWORD TO LOGIN TO MYSQL)
-- Username: a1xxxxxx  if mariadb.haaga-helia.fi
-- Password: pppppppp
-- (MAKE SURE YOU ALSO CHANGE TO THE a1xxxxx DATABASE IN MYSQL)
--  --------------------------------------------------------------------------
-- (Run in three parts if using Putty connection with small char buffer)

-- --------------------- 1.Tables created in Mother to Child order ---------------------------------------------



CREATE TABLE Category
(
  id               INT             NOT NULL     AUTO_INCREMENT,
  title            VARCHAR(255)    NOT NULL,
	budgetLimit		   DECIMAL(15,4)	 ,
	isActive		     BOOLEAN     			 NOT NULL,

	CONSTRAINT pk_category PRIMARY KEY (id),
	CONSTRAINT ak_title_unique UNIQUE (title)

) ENGINE=InnoDB;
ALTER TABLE Category AUTO_INCREMENT = 101;

---- --------------------- 2.Industry fields --------------------------------

CREATE TABLE Idea
(
   id             INT              NOT NULL     AUTO_INCREMENT,
   title          VARCHAR(200)     NOT NULL,
   description    VARCHAR(2000)    NOT NULL,
   budget         DECIMAL(15,4)   ,
   isReadyForComments BOOLEAN      NOT NULL,
   peopleNeeded   INT             ,
   creationDate   DATE             NOT NULL,
   lastModified   DATETIME         NOT NULL,
   categoryId     INT              NOT NULL,

   CONSTRAINT pk_Idea PRIMARY KEY (id),
   CONSTRAINT unique_Idea_title UNIQUE (title),
   CONSTRAINT fk_Idea_Category FOREIGN KEY (categoryId)
       REFERENCES Category(id)

) ENGINE=InnoDB;
ALTER TABLE Idea AUTO_INCREMENT = 201;


CREATE TABLE Member
(
  id          INT       NOT NULL        AUTO_INCREMENT,
  userName    VARCHAR(200) NOT NULL,
  email       VARCHAR(255),

  CONSTRAINT pk_Member PRIMARY KEY (id),
  CONSTRAINT unique_Member_userName UNIQUE (userName),
  CONSTRAINT unique_Member_emailAddress UNIQUE (email)
) ENGINE=InnoDB;
ALTER TABLE Member AUTO_INCREMENT = 301;

CREATE TABLE MemberIdea
(
  memberId      INT           NOT NULL,
  ideaId        INT           NOT NULL,

  CONSTRAINT pk_MemberIdea PRIMARY KEY (memberId, ideaId),
  
  CONSTRAINT fk_MemberIdea_Member FOREIGN KEY (memberId)
      REFERENCES Member(id),
  CONSTRAINT fk_MemberIdea_Idea FOREIGN KEY (ideaId)
      REFERENCES Idea(id)

) ENGINE=InnoDB;


CREATE TABLE Comment
(
  memberId       INT          NOT NULL,
  ideaId         INT          NOT NULL,
  commentTimeStamp  DATETIME    NOT NULL,
  commentLine     VARCHAR(200)  NOT NULL,

  CONSTRAINT pk_Comment PRIMARY KEY (memberId, ideaId, commentTimeStamp),
  CONSTRAINT unique_Comment_commentLinePerSameMemberAndIdea UNIQUE (memberId, ideaId, commentLine),
  CONSTRAINT fk_Comment_Member FOREIGN KEY (memberId)
      REFERENCES Member(id),
  CONSTRAINT fk_Comment_Idea FOREIGN KEY (ideaId)
  REFERENCES Idea(id)
) ENGINE=InnoDB;



-- Autoincrement field is NOT given any value in insert (or update) the values are
-- now autoincremented: 201, 202, 203 ... and your test data has to take that into account

-- ON DELETE NO ACTION = Cannot delete mother (Category) if (Ideas) exist
-- The second most popular is ON DELETE CASCADE. E.g. when idea deleted,
-- delete also the comments about it

/* Other datatypes and such */
/* Maybe some old, but anyway how to change from SQL standard datatypes to MySQL/MariaDB */

    -- not MONEY, but:  DECIMAL(19,4)
	-- not SMALLMONEY, but:   DECIMAL(10,4)
	-- not VARCHAR(MAX), but:    VARCHAR(20000) OR TEXT

	/*   examples of correct definitions for MariaDB:

	price           DECIMAL(15,2)   NOT NULL,
    someText        VARCHAR(1000)   NOT NULL,
   	maxLongVarChar  VARCHAR(20000) 	NOT NULL,
  	enabled         TINYINT         NOT NULL DEFAULT 1,
	strange_id      INT(11)         NOT NULL AUTO_INCREMENT,

	*/
