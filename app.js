const path = require("path");
const http = require("http");
const express = require("express");
const root = require("./utils/path");
const app = express();
const bodyParser = require("body-parser");

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
app.use((req, res, next) => {
  res.status(404).render("page-not-found", { pageTitle: "Page not found" });
});

app.listen(3000);
