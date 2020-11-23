// EXPRESS TEMPLATE
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const publicRoutes = require("./routes/shop");

// NOTE! bodyparser in the init
app.use(bodyParser.urlencoded({ extended: false }));

// add router modules this way
app.use(adminRoutes);
app.use(publicRoutes);

// 404 page
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

const server = http.createServer(app);
server.listen(3000);
