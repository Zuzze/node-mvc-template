// EXPRESS TEMPLATE
const http = require("http");
const express = require("express");
const app = express();

// add middleware, function will be executed for each incoming request
// you can also chain middlewares if you call next() in earlier middlewaares
/*app.use((req, res, next) => {
  console.log("MIDDLEWARE: request in handling");
  next();
});*/

// Note that most specific path must be first, if "/" is handled first, it matches with all paths
app.use("/users", (req, res, next) => {
  res.send("<h1>Users</h1>");
});

// first optional argument is the url path
app.use("/", (req, res, next) => {
  //  return response by using res.send()
  res.send("<h1>Home</h1>");
});

const server = http.createServer(app);
server.listen(3000);
