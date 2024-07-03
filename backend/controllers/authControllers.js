import User from "../models/userModel.js";

const createUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ message: "User already exists." });
    }

    const user = await User.create({
      userName,
      email,
      password,
    });

    if (!user) {
      return res.status(404).json({ message: "Something went wrong." });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export { createUser };
