This is the back-end for my project https://github.com/YIZHUANG/ideaManagement_frontend_reactjs

Build by YI ZHUANG.  // 05.12/2017

Build with ReactJs as front-end.
Node.js, Knex as back-end, and postgresql as the database.

```
/listData   is the route I am using for getting a list of ideas with join operations, and yes! I know I should have named it better.
```
```
$ Make sure you have postresql installed, and set the postgresql/bin and lib folder to your environment path.
if you are using mariadb or mysql, fine! just remember to change your client type in knexfile.js file
```
## Install project dependencies
```
$ npm install
```
#Rollback the database
``` type in these commands in orders
$ knex migrate:rollback

knex migrate:latest

knex seed:run
```

## Run the app:
```
$ npm run server
```

## Back-end files explained.  server is running on port 8000.
```
 knexfile.js : where the database connection is , replace them with your own database configs.
 server.js : where the port and main things are defined.
 routes/featuresApi.js : all the routes that I am using in the front-end. (where I have the join operations and triggers)
$routes/deleteData.js and the rest of the files in this folder are for testing purposes with postman and for future usage perhaps.
```
## Database files explained.
```
 db/migrations/20171205155213_create_users.js is the fine where I define the tables and attributes constraints all those stuff.
 db/seeds/   the files in this folder are the inserted test data. You can also do these stuff manually with the database client. Or with postman
```

```
Functions:
display list of data.
add data. (when you add data, it will trigger another add data request automatically)
edit the data. (when you edit data, it will trigger another edit data request automatically)
delete the data.(Associated rows from other tables will be deleted as well due to onDelete('CASCADE'))
```
