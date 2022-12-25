const User = require("../models/userModel");
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      profile_pic: {
        public_id: "default",
        url: "default",
      },
    });
    return res.status(200).json({
      message: "User Registered",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: errorMessage,
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.json({
      success: false,
      message: "Invalid Credentials",
    });
  }
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return res.json({
      success: false,
      message: "Invalid Credentials",
    });
  }
  const token = user.getToken();
res.cookie("token",token,{
    expires:new Date(Date.now()+5*24*60*60*1000),
    httpOnly:true,
});
  return res.status(200).json({
    success: true,
    user,
   
  });
};
