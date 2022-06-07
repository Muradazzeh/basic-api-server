# basic-api-server
## links for my work 
* this is the pull request link [pull request](https://github.com/Muradazzeh/basic-api-server/pull/1)
* this is the link for action page from git hub [action page](https://github.com/Muradazzeh/basic-api-server/actions)
* this is the link for heroku web site [ herokulink](https://basic-api-server-main.herokuapp.com/)
* this is the link for main repo [ repo link ](https://github.com/Muradazzeh/basic-api-server)

### Introduction
* first we discussed what is the data base : it is set of organized collection of data that connected together , and stored in table .
* we know that there is tow type of data base , relational DB , and non relational DB 
* SQL : stand for structured query language it is relational  data base 
* we learn about primary key , foreign key and table row and column 
* also we take about PostgreSQL  :open source object-relational database system
*  we talk about Sequelize : Sequelize is a modern TypeScript and Node.js ORM for Postgres,
 we prepare our system Sequelize by running some code in the terminal **npm install --save sequelize** ,**npm install sequelize sqlite3** 
* also we prepare express routes , for server . 

## what required in basic -api - server

* first to create normal server , with express routes , and we have to handle both errors 404 , 500 .
```
app.use("*", notFoundHandler)
app.use(serverErrorHandler)
```

* then we have to prepare our system to use Squlize to help us on database easly and fast 
* then we have to create 2 SQL models , it look like Schema for data base , 
* then we have to connect our data base with squalize so it will implement these data base with primery key and all SQL command
* After that we have to prepare config.json file that have 3 procces , on testing it will create dotenv variable so we can use it to test our data base 
    * on running dev it will creat dotenv varible it will read the development from json file so it will work on similar fake data base using SQL light 
    * last when we deploy it to heroku the dot env variable will change to production so it will use main database , PostGres



* then we have to create 4 routes for all methods , CRUD , 
CREATE , READ , UPDATE AND DELETE . see below tree for my work.
![link](./src/image/Screenshot%20(192).png)

* the sequlize will do all the work , will connect to the data base and it will create the table depends on the modle that we have .


* after we test all the methods and we make sure every thing is working geting data and posting  we have to prepare Test dreven development , using jest , 
see the out put 
![link](./src/image/Screenshot%20(189).png)
![link](./src/image/Screenshot%20(187).png)

* then we have to prepare the testing for the routes we have to make sure everthing running ok locally as shown below :

> note that I did test for both routes  so I got alomst 14 test as shown :
![link](./src/image/Screenshot%20(190).png)
![link](./src/image/Screenshot%20(193).png)

* this is the action page from git hub thats show every things is ok 
![link](./src/image/Screenshot%20(194).png)

* and finally some data from heroku web site that is posted 
![link](./src/image/Screenshot%20(196).png)

