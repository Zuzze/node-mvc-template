const path = require("path");
const http = require("http");
const express = require("express");
const root = require("./utils/path");
const app = express();
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");

// ====== EJS TEMPLATING ENGINE =======
app.set("view engine", "ejs");
app.set("views", "views");

// ============= ROUTING ==============
const adminRoutes = require("./routes/admin");
const publicRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// add router modules this way
// first parameter is optional `filter`
app.use("/admin", adminRoutes);
app.use(publicRoutes);

// ============= 404 PAGE ==============
app.use(errorController.get404);

app.listen(3000);
