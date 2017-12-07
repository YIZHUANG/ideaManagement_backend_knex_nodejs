Build with ReactJs as front-end.
Node.js, Knex as back-end, and postgresql as the database.

Make sure you have postgresql installed on your computer.
Set you host and username and password in knexfile.js

Make sure you have set knex to the path in your system environment variable.

1.install the dependencies both in root folder and the client folder
npm install    


2.Go back to the root folder to create the database
first command: knex migrate:rollback
second command: knex migrate:latest
third command : knex seed:run

3.Run the project.
npm run dev  // this will start the back-end and front-end at the same time.

Functions:
display list of data.
add data.
edit the data.
delete the data.

http://localhost:8000/category  
http://localhost:8000/idea  
http://localhost:8000/member  
http://localhost:8000/memberidea
http://localhost:8000/comment
