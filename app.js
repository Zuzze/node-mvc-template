// EXPRESS TEMPLATE
const path = require("path");
const http = require("http");
const express = require("express");
const root = require("./utils/path");
const app = express();
const bodyParser = require("body-parser");
//const expressHbs = require("express-handlebars");

// ======== TEMPLATING ENGINE ========
// -PUG-
// app.set("view engine", "pug");
//app.set("views", "views"); // compile templates in views to views

// -HANDLEBARS-
// remember to import require("express-handlebars");!
// the selected name (here "handlebars") will be the extension of the file e.g. "shop.handlebars"
// first parameter is extension for views files, extname is extension for layout
/*app.engine(
  "handlebars",
  expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: "handlebars"
  })
);
app.set("view engine", "handlebars");
app.set("views", "views");*/

// -EJS-
app.set("view engine", "ejs");
app.set("views", "views");

// ============= ROUTING ==============
const adminData = require("./routes/admin");
const publicRoutes = require("./routes/shop");

// NOTE! bodyparser in the init
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// add router modules this way
// first parameter is optional `filter`
app.use("/admin", adminData.router);
app.use(publicRoutes);

// ============= 404 PAGE ==============
app.use((req, res, next) => {
  //res.status(404).send("<h1>Page not found</h1>");
  //path.join(__dirname, "..", "views", "page-not-found.html")
  //res.status(404).sendFile(path.join(root, "views", "page-not-found.html"));
  res.status(404).render("page-not-found", { pageTitle: "Page not found" });
});

app.listen(3000);
