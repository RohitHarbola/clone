const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Products = require("./Products");
const Users = require("./Users");
const Orders = require("./Orders");
const stripe = require("stripe")(
  "sk_test_51KUDBXSE1AGsrDtwPrEyIlUO6MdKE5YUC77sdqUjLmrwjiEXxcGQPtkEDYlKmlaT6Ll0IIfMtBxaRYoWTEfdXYAh00tng8EKHY"
);

const app = express();
const port = 8000;

// Middlewares
app.use(express.json());
app.use(cors());

// connection url
const connection_url = "mongodb+srv://rohitharbola91:Admin%4012345@cluster0.taxynj1.mongodb.net/yourdbname?retryWrites=true&w=majority";
mongoose.connect(connection_url);

// API
app.get("/", (req, res) => res.status(200).send("Home Page"));

// Add product
app.post("/products/add", async (req, res) => {
  const productDetail = req.body;

  console.log("Product Detail >>>>", productDetail);

  try {
    const data = await Products.create(productDetail);
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err);
  }
});

app.get("/products/get", async (req, res) => {
  try {
    const data = await Products.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// API for SIGNUP
app.post("/auth/signup", async (req, res) => {
  const { email, password, fullName } = req.body;

  const encrypt_password = await bcrypt.hash(password, 10);

  const userDetail = {
    email: email,
    password: encrypt_password,
    fullName: fullName,
  };

  try {
    const user_exist = await Users.findOne({ email: email });

    if (user_exist) {
      res.send({ message: "The Email is already in use !" });
    } else {
      const result = await Users.create(userDetail);
      res.send({ message: "User Created Successfully" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// API for LOGIN
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDetail = await Users.findOne({ email: email });

    if (userDetail) {
      if (await bcrypt.compare(password, userDetail.password)) {
        res.send(userDetail);
      } else {
        res.send({ error: "Invalid Password" });
      }
    } else {
      res.send({ error: "User does not exist" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// API for PAYMENT
app.post("/payment/create", async (req, res) => {
  const total = req.body.amount;
  console.log("Payment Request received for this amount:", total);

  try {
    const payment = await stripe.paymentIntents.create({
      amount: total * 100,
      currency: "inr",
    });

    res.status(201).send({
      clientSecret: payment.client_secret,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// API to add ORDER DETAILS
app.post("/orders/add", async (req, res) => {
  const { basket: products, price, email, address } = req.body;

  const orderDetail = {
    products: products,
    price: price,
    address: address,
    email: email,
  };

  try {
    const result = await Orders.create(orderDetail);
    console.log("Order added to database >> ", result);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.post("/orders/get", async (req, res) => {
  const email = req.body.email;

  try {
    const result = await Orders.find();
    const userOrders = result.filter((order) => order.email === email);
    res.send(userOrders);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(port, () => console.log("listening on the port", port));
