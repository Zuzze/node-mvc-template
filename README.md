# Node.js MVC Template

This repository is based on 40+ hours complete Node.js course by Academind including tools to work with node.js from basic to advanced.

## M = Model

- WHAT: Models represent data in your code, ES6 classes
- WHERE: in `/models`
- FORMAT: `product.js`

```
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // class functions
  save() { ... }
};
```

## V = View

- WHAT: What user sees, UI
- WHERE: in `/views`
- FORMAT: HTML or its variation with templating engines

## C = Controller

- WHAT: logic to connect models and views, API requests and routes
- WHERE: split across middleware functions
- FORMAT:

  - `app.js`: `app.use(publicRoutes);``
  - `/routes/shop.js`:

  ```
    const express = require("express");
    const router = express.Router();
    const productsController = require("../controllers/products");

    router.get("/", productsController.getProducts);

    module.exports = router;

  ```

  - `/controllers/products.js`:

  ```
    const Product = require("../models/product");

    exports.getProducts = (req, res, next) => {
    // second argument is callback as the action is asynchronous
        Product.fetchAll(products => {
            res.render("shop", {
                prods: products,
                pageTitle: "Shop",
                path: "/",
            });
        });
    };
  ```
