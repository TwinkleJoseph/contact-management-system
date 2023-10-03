## Contact Managment System


## 1. Context 
Manages the contacts of "A Very Real Company".  	
This application will pull data from a partner rest service. In addition application allows users to create new contacts or update them.

## 2. Design
This application has a front-end built using Vue JS and backend RESTful service built in NodeJS. 
Database is hosted in PostgreSQL database. 

## 3. Deployment 
Application can be deployed onto docker.
### 3.1. Build images
docker compose build

### 3.2. Start application
docker compose up -d

Services could be started independently using service name in the above command.
eg: docker compose up -d api

## Important Links 
Web Application : http://localhost:3000/       
REST API URL : http://localhost:5000/api/   
GET all users: http://localhost:5000/api/users    
Add a new user: http://localhost:5000/api/user (POST)       
Update a user: http://localhost:5000/api/user/:id (PUT)   

## Author
Twinkle Joseph