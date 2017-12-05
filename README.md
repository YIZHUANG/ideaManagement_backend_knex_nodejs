Build with Node.js  Knex, and as postgresql as the database.

Make sure you have postgresql installed on your computer. Use port 5432 (whcih is the default). And remember the username 
and password you set for your postgresql.
First, go to the root folder, type 'npn install' in cmd.

And then create a database name "software" or whatever in my PGadmin4. If your database name is anything but 'software' make sure
you change that in  knexfile.js too. And also change the password and username in  knexfile.js.

And finally, in cmd, type node server.js 

The api address for each table: (you can change them in the server.js)
http://localhost:8000/category  
http://localhost:8000/idea  
http://localhost:8000/member  
http://localhost:8000/memberidea 
http://localhost:8000/comment


