-- (C) 2007-2017 - Juhani V?lim?ki (Toan Khuc, Thu Nghiem)
-- (USERNAME AND PASSWORD TO LOGIN TO MYSQL)
-- Username: a1xxxxxx  if mariadb.haaga-helia.fi
-- Password: pppppppp
-- (MAKE SURE YOU ALSO CHANGE TO THE a1xxxxx DATABASE IN MYSQL)
-- --------------------------------------------------------------------
-- DROP is the simplest option to also reset the autoincrement counters
-- for our test data scripts.

-- --------------------- 6. last ----------------------------
DROP TABLE Comment;

DROP TABLE MemberIdea;

DROP TABLE Member;

DROP TABLE Idea;

DROP TABLE Category;

--  ... other tables in opposite order than creates and inserts
-- --------------------- 1. first ---------------------------------------------
