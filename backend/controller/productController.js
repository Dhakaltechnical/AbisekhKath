const Product=require("../models/productModel");

//Add a poduct
exports.addProduct=async(req,res,next)=>{
try{
    const product=Product.create(req.body);
    return res.status(200).json({
        success:true,
        product:product,
    });

} catch(e){
    console.log(e);
}
};

exports.getAllProducts=async (req,res)=>{
    return res.status(200).json({
        meaasage:"Success",
    });
};