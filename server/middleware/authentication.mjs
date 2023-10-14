import JWT from "jsonwebtoken";
import { promisify } from "util";

export default async function authentication(req, res, next) {
  try {
    const isAuthHeader = req?.headers?.authorization;
    if (!isAuthHeader || !isAuthHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Please log in to get access"
      })
    }
    const token = isAuthHeader.split(" ")[1];
    const decodedUser = await promisify(JWT.verify)(token, process.env.SECRET_TOKEN);
    if (decodedUser.status !== "active") {
      return res.status(401).json({
        success: false,
        message: "Please verify your email to get access"
      })
    }
    req.user = decodedUser

    next();


  } catch (error) {
    res.status(403).json({
      success: false,
      message: "Invalid token"
    });
  }
};