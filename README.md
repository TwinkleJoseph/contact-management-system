## Contact Managment System


## 1. Context 
Manages the contacts of "A Very Real Company".  	
This application will pull data from a partner rest service. In addition application allows users to create new contacts or update them.

## 2. Design
This application has a front-end built using Vue JS and backend RESTful service built in NodeJS. 
Database is hosted in PostgreSQL database. 

## 3. Deployment on Docker
Application can be deployed onto docker. Make sure that Docker or Docker Desktop is installed on your machine. 

### 3.1. Build images
docker compose build

### 3.2. Start application
docker compose up -d

Services could be started independently using service name in the above command.
eg: docker compose up -d api

## 4. Running locally without docker
Application components could be run without docker using npm run commands.

### 4.1 Creating database.
a. Login to Postgres console using PgAdmin or sqlplus command line utility.  
b. Create a new database 'contactsdb'  

   CREATE DATABASE contactsdb  
    WITH   
    OWNER = postgres  
    ENCODING = 'UTF8'  
    CONNECTION LIMIT = -1;  

c. Create user table using script contacts_db_ddl.sql in the db directory.  

### 4.2 Starting Back-end API  
   cd api  
   $ npm install -y  
   $ npm run dev  
   Access API at http://localhost:5000/api/users  

### 4.3 Starting Web front end
   cd web  
   $ npm install -y  
   $ npm run serve  
   Access Vue application at  http://localhost:8080  

##  5. Testing

This application is a buit using Vue.Js, Node.Js and PostgreSQL database. Application retrieves external contacts from the partner endpoint https://jsonplaceholder.typicode.com/users.  

New contacts are maintained in the PostgreSQL database. As per the design, the contacts from partner api and database are merged together and send to web app. External contacts are currently not saved in the local database. Modifying these contacts will have to be treated differently.

Please see the detailed  test results in Contact Management System Manual Test Cases.xsl attached here.


## Important Links 
Web Application : http://localhost:8080/       
REST API URL : http://localhost:5000/api/   
GET all users: http://localhost:5000/api/users    
Add a new user: http://localhost:5000/api/user (POST)       
Update a user: http://localhost:5000/api/user/:id (PUT)   

## Author
Twinkle Joseph