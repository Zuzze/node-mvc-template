const express = require("express");
const router = express.Router();
const path = require("path");
const root = require("../utils/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  // core module path.join() will build the path that works on all operating systems
  // __dirname points to routes folder
  // second argument points to where routes folder is
  // console.log(adminData.products);
  // res.sendFile(path.join(root, "./", "views", "shop.html"));

  // render uses templating engine defined in app.js
  // /views is default path
  // set dynamic content as key-value pairs as second argument
  res.render("shop", { prods: adminData.products, docTitle: "Shop" });
});

module.exports = router;
