# Express Backend Structural Template

********************************
## Structure Quick Look

This is a template for an Express backend application server.
When creating a new repository to pull data from a specified Database Table, the following directories and files are required:
  1.  *Model*
    - Directory: Model
    - Files: <table-name>.js
  2. *Controller*
    - Directory: controllers
    - Files: <table-name>Controller.js
  3. *ViewController*
    - Directory: controllers
    - Files: <table-name>ViewController.js
  4. *Router*
    - Directory: routers
    - Files: <table-name>Router.js

********************************


## Application Tree

*create DB prior to the following*

#### NPM File Tree
```
check _package.js_

Server.js (where to load app requires, app definition, middleware, listener)

config —|_
          |—|-connection.js
              |-dbConfig.js


controllers—|___
                |—|—myappController (handles request)(require  the model because it use the functions within it to retrieve data from DB)
                    |
                    |—myappViewController (handles request)(will render views to pass DB data)


db————|_      
        |—|—schema.sql (the table declaration and table structure)
            |
            | —seed.sql (The initial table content injection)


models— (Database queries)


routes— (the client query that link to the DB queries inside of the models file)(handles request)(http request -> path —passes functions to handle the request)


views-|_
       |     
       |—|— partials——|—boilerplate_
           |                        |
           |                        |—footer
           |                        |
           |                        |—object-wrapper
           |
           |
           |
           |—app-pages—|_
                        |
                        |—

public (static (css, one off js))

_dependencies_ (package.js, .gitignore, node-models)
```
********************************

## SECURITY

[+] HTTP
is stateless (it changes
partneridsyncomplete&guest
152244732544921716&=1523978330602

********************************

## AUTH PROJECT

[+] *DB*
  - Create new SQL table to store user info
  - Update schema.sql and seed.sql files to create new DB

[+] *Model*
  - Create a file to query from the newly created users table

[+] *Route*
  - Create GET routes for /login, /register, and /logout
  - Create POST routes for /login, /register, and /logout

[+] *Views*
  - Create new ‘view’ pages
    - boilerplate.ejs (include a form for username and password) ***DO THIS FIRST***
    - login.ejs
    - register.ejs
    - logout.ejs


[+] *ViewController*
  - Add  a new View Controller file to handle user DB queries
