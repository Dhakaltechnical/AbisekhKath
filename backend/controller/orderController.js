const Order = require("../models/orderModule");

exports.createOrder = async (req, res, next) => {
  const { shipping, orderItems, taxCost,payment,itemsPrice,deliveryCharge,totalPrice, } = req.body;
 const order= await Order.create({
    shipping, orderItems, taxCost,payment,itemsPrice,deliveryCharge,totalPrice,user:req.user._id,
 })
 .then((result)=>{
  return res.status(200).json({
    status:true,
    order:result,
  });
 }).catch((err)=>{
    res.json({
        status:false,
        message:err.message,
    });
 });
};
