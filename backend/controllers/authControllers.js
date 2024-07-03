import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const signUpuser = async (req, res) => {
  const { userName, email, password } = req.body.user;

  try {
    if (!userName || !email || !password) {
      return res.status(404).json({ message: "All fields are manadatory." });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    if (!user) {
      return res.status(500).json({ message: "Something went wrong." });
    }

    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const signInUser = async (req, res) => {
  const { email, password } = req.body.user;
  try {
    if (!email || !password) {
      return res.status(404).json({ message: "All fields are manadatory." });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.status(404).json({ message: "Password mismatch." });
    }

    return res.status(200).json({ message: "Login successfully." });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export { signUpuser, signInUser };
