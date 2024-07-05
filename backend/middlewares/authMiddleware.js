import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  try {
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - Token Not Provided" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findOne({
      where: {
        id: decoded.id,
        email: decoded.email,
        userName: decoded.userName,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - Invalid User" });
    }
    req.userId = user.id;

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized - Invalid Token" });
  }
};

export default authMiddleware;
