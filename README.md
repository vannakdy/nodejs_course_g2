# nodejs_course_g2

==== Course Outline ====
កាណែនាំ NodeJS
    - what is Node.js
        - Node.js is open source 
        - Cross platform(Windows, Linux, Unix, Mac OS X)  
        - Use javaScript runtime environment that run  on the V8 engine 
        - Node.js run JavaScript on server  
        - Was written initially by Ryan Dahi in 2009
        - Last current version 18. in 2022។
    - Why Node.js
        - Node.js open source free cross platform(Windows, Linux, Unix, Mac OS X, etc.)
        - Node.js can generate dynamic page content
        - Node.js can create, open, read, write, delete and close file on server
        - Node.js can add, delete, modify data from database
ចាប់ផ្តើម NodeJS
    - install node
    - install text editor (VS Code, SublineText, Nodepad++)
    - run node 
ស្វែងយល់ពី Variable, Loop, Function, Arr, …
    - Variable 
        - var let const
        - global and local variable
    - Condition
        - if , else if , else
        - switch case
    - Function
        - param and no param
        - return and non return 
        - call function
    - Array
        - array string
        - array object
        - array length
    - Loop
        - for loop
        - while loop
        - do while loop
        - for in
        - for of
        - foreach
        - map
ស្វែងយល់ពី NodeJS Module
        To include a module, use the require() function with the name of the module:
        - const http = require("http")
ស្វែងយល់ពី Express 
        - What is express
        - Express route in Node.js
        - Create route
        - Create controller
- Node.js Express route
- Create Route Controller
- Get Requset From Client
- Using Postman
    - install postman
    - create collection
    - create request
    - pass params or body
    Or using Thunder Client plugin in VS cod
    - create collection
    - create folder
    - create some request
    - request api No

- Install MySQL (Xampp service)
- Stop and start MySQL service
- Create DB
- Create Table
    Data type
    Premery key
- Design table relationship
- SQL statement
    SELECT , UPDATE , DELETE WHERE , AND , OR , ORDER BY, GROUP BY , COUNT , SUM , IF , AS ...
- SELECT data using VS_CODE DB and phpmyadmin in browser
- Backup Database 
- Restore Database
- Execute Query
- Node.js connect MYSQL
- Node.js SELECT DELETE UPDATE data from Database

- Install nodmon
- API Login/Register bcrypt password
- Login with JWT Json Web Token
- Generate Token and Refresh token
- Access Module required token
- Respone data for client request
- Validate data client request
- Project course


- Test final
- Review code

- Signup git account
- Create account repositry
- Prepare code for production
- Push code to git account

- Signup Clever Cloud Server
- Create Invironment for Node.js
- Create Database
- Connect application to git project
- Deploy Node.js

- Testing

API NODE.JS + MySQL => Build API (Shool,Sale,Hospital,...)

Node.js
PHP
laravel
Java
    - spring
    - groovy
    - gails
Python


JavaScript
React JS
Vue.js
Angola.js
PHP
Java
React Native
IONIC
Flutter


* Create Route And Controller

- call route in server.js
    require("../app/route/teacher.route.js)
    require("../app/route/course.route.js)
    ....
- create route
    teacher.route.js
    course.routes.js
    student.route.js
    classroom.route.js
    user.router.js

    const student = (app) => {
        const router = require("express").Router();

        router.method(url,handler)
        router.get("/api/student",handler)
        router.post("/api/student",handler)
        router.put("/api/student",handler)

    }

- create controller
    teacher.route.js
        const getAll(){
            
        }
    course.routes.js
    student.route.js
    classroom.route.js
    user.router.js
