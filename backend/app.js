const express = require("express");
const app = express();
app.use(express.json());
const cookieParser=require("cookie-parser");
app.use(cookieParser());

const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const orderRoute= require("./routes/orderRoute");

app.use("/api/product", productRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);

module.exports = app;
