Build with Node.js  Knex, and as postgresql as the database.

Make sure you have postgresql installed on your computer. Use port 5432 (whcih is the default). And remember the username
and password you set for your postgresql.
First, go to the root folder, type 'npn install' in cmd, 
and then go to the client folder do the same thing.
knex migrate:rollback
knex migrate:latest
knex seed:run

And then create a database name "software" or whatever in  PGadmin4. If your database name is anything but 'software' make sure
you change that in  knexfile.js too. And also change the password and username in  knexfile.js.

And finally, in cmd, go back to the root folder where you have the server.js, type 'npm run dev'

For the client: You can insert data with form.

The api address for each table: (you can change them in the server.js)
http://localhost:8000/category  
http://localhost:8000/idea  
http://localhost:8000/member  
http://localhost:8000/memberidea
http://localhost:8000/comment
