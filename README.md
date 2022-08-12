# skillfactory-first-task
 
# Developer: *Joaquin Labrador 👨‍💻*



Warning: This project uses Node.js version: >=v18.0.0 since it uses native fetch API that is not supported in previous versions without installing a dependency. Please install Node.js version >=v18.0.0 to run this project.


## Exercises:
- [x] Create a project and install all needed dependencies.
- [x] Create an app.js file that runs a local server.
- [x] Using the provided API, generate models for Products, Carts and Users.
- [x] Create a simple middleware that logs each request to the server.
- [x] Create a middleware that handles invalid endpoints (404 Http Error).
- [x] Create the following endpoints:
  - [x] all basic `GET` endpoints (/products, /products/:id, users, etc)
  - [x] `GET /products/categories` should return an array of objects that contains the name of the category and their respective products.
  - [x] `GET /users/firsts/` should return the first three users sorted by ID.
  - [x] `GET /products/prices` should return a list of products that has the keys: id, title and price. It should be possible to sort by price the response with 'order' query.
  - [x] `GET /products/expensive` should return the most expensive products from their respective category.
  - [x] `GET /carts/bigcarts` should return all the carts that contain more than 2 products and the username of the person that ordered that cart.
