-- (C) 2007-2017 - Juhani Välimäki (Toan Khuc, Thu Nghiem)

-- ***********************************************************
-- QUERIES USED IN APP

-- ****** Form ****** 
-- Selects all data for Category '3'
SELECT c.id, c.name
	FROM Category c
WHERE c.id = 3;

-- etc. sample queries from Category, first Category table alone,
-- then joined with others

-- collect here all the queries that are needed in the application.
-- write them directly to a runnable form. 

-- Actually all these scripts should be runnable one after another,
-- without errors. First you need to make them all match of course.
-- That is DROP, CREATE, INSERT, DELETE, SELECT will all be coherent

-- ****************For checking for all table data etc. fast while coding****************

SHOW TABLES;

DESC Category;
SELECT * FROM Category;
SELECT * FROM Category WHERE id=2;

-- etc, similar statements of all tables



 
-- *************************************************************
-- * RAW QUERIES FOR TECHNICAL TESTS * *=not used in app, right?

-- * JUMBOJOIN Selects certain data with all tables joined 
-- CREATES LARGE sheet of duplicated data, almost like Cartesian product

SELECT a.y, a.z, b.x, b.p, c.other
FROM Aaaa a 
JOIN Beee b ON a.id = b.aaaId
JOIN Ceee c ON b.id = c.beeId 
ORDER BY a.y DESC, b.x ASC;
