const express = require("express");
const router = express.Router();
const{createOrder}= require("../controller/orderController");
const {isAuthenticated,authorizedRole}=require("../middleware/auth");

router.route("/").post(isAuthenticated,createOrder);
module.exports=router;