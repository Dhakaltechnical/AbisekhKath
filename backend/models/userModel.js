const mongoose = require("mongoose");
const validator =require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your name"],
    minLength: 2,
  },
  email: {
    type: String,
    required: [true, "Please Enter your email"],
    validator:[validator.email,"please enter a valid email"]
  },
  profile_pic: {
    public_id:{
    type: String,
    default: "default.png",
  },
  url: 
       {
        type: String,
        default: "default.png",
      },
    },
    
  
  password: {
    type: String,
    require:[true,"Please Enter your password"],
    minLength:[8,"Passwordmust be greather than 8 characters"],
  },
  role: 
    {
      
        type: String,
        default: "user",
      
  },
});
module.exports = mongoose.model("User", userSchema);
