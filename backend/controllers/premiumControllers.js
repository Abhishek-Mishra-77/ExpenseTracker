import Stripe from "stripe";
import User from "../models/userModel.js";

const stripe = new Stripe(
  "sk_test_51OKItmSIeTa6z5FVoKSJssDt17TJtIBlZgCVecfPFg4OvLgDaZxC9cXqeO6LOfYEiOascUgIzqdHjhfpJZcWQg7i00LOkb8d8v"
);

const premiumUser = async (req, res) => {
  const tokenDetails = req.body.details;

  try {
    const user = await User.findOne({ email: tokenDetails.email });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }
    user.isPremiumUser = true;
    await user.save();
    return res.status(200).json({ message: "Now you are premium user." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

export { premiumUser };
