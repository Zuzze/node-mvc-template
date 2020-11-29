# Node.js MVC Template

Basic MVC file structure

```
app.js
|-routes
    |-shop.js
|-models
    |-product.js
|-views
    |-shop.ejs
|-controllers
    |-products.js
```

## M = Model

- **_what_** : Models represent data in your code, ES6 classes
- **_where_**: in `/models`
- **_format_**: `product.js`

```
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // class functions
  save() { ... }

  fetchAll() { ... }
};
```

## V = View

- **_what_**: What user sees, UI
- **_where_**: in `/views`
- **_format_**: HTML or its variation with templating engines

## C = Controller

- **_what_**: logic to connect models and views, API requests and routes
- **_where_**: split across middleware functions
- **_format_**:

  - `app.js`

  ```
  const publicRoutes = require("./routes/shop");

  app.use(publicRoutes);
  ```

  - `/routes/shop.js`

  ```
    const express = require("express");
    const router = express.Router();
    const productsController = require("../controllers/products");

    router.get("/", productsController.getProducts);

    module.exports = router;

  ```

  - `/controllers/products.js`

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
