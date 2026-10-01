# HTTP Module
HTTP- Hyper Text Transfer Protocol
It is build in Node.js MOdule which allow developers to create web server and  web client without installing any external package.
one of the most important modue in node.js originally designed for building scalabel entwork application and webservers.

1. create web server
2. handle client request
3. build REST APIs
4. Non -blocking i/o
5. Foundation of Express.js


## http status codes -> res.writeHead( ), res.statusCode
 - 200 -> ok
 - 201 -> created
 - 400 -> bad request
 - 401 -> unauthorized
 - 403 -> forbidden
 - 404 -> not found
 - 500 -> Internal server error

 ### server can send to the client
  1. html contents -> prg2,prg3
  2. html file -> prg5
  3. json data -> prg4
  4. plain file
  5. js file
  6. any file to download
  7. etc

## Type of information -> res.writeHead( ), res.setHeader( )
1. text/html -> for html file/contents
2. text/json -> for json data
3. text/css -> for css file/contents
4. application -> for file
5. text/plain -> for plain text file

### Note: .gitignore -> this files contains the list of files or folder that is not added to git , these files/folder will not push on Github
