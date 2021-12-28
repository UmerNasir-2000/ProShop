const express = require("express");
const products = require("./data/products");
const app = express();

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product._id === id);
  res.status(200).json(product);
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server Running On http://localhost:${port}`)
);
