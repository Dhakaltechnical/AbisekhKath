const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product name"],
    minLength: 2,
  },
  price: {
    type: Number,
    required: [true, "Please Enter product's price"],
  },
  description: {
    type: String,
    required: [true, "Please Enter description name"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
    },
  ],
  noOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Select a category"],
    enum: [
      "Electronics",
      "Clothes",
      "Food",
      "Smart Phones",
      "Laptop",
      "Camera",
      "HeadPhones",
      "Beauty",
      "Home Appliances",
    ],
  },
});
module.exports = mongoose.model("Product", productSchema);
