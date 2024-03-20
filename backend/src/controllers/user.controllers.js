import User from "../models/user.model.js";

const registerUser = async (req, res) => {
  //get user data from req.body
  //validation
  //check if user already exists
  //check for images,avatar
  //upload images to cloudinary
  //create user object-create entry
  //remove password and refresh token
  //check for user creation
  //return response

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
  const newUser = await User.create({ name, email, password });
  const createdUser = await User.findById(newUser._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "User not created");
  }
  res.status(201).json(createdUser);
};

const loginUser = async (req, res) => {
  //data from req.body
  //validation
  //login using email or username
  //find the user
  //password validation
  //generate token
  //send cookie

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = user.generateAccessToken();
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({ message: "Login success" });
};

export { registerUser, loginUser };
