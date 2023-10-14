import express from "express";
import authentication from "../middleware/authentication.mjs";
import authorization from "../middleware/authorization.mjs";
import {
  confirmEmail,
  controlUser,
  createUser,
  loginUser,
  updateProfile
} from "../controller/user.controller.mjs";

const router = express.Router();

router.post("/signup", createUser);
router.get("/confirm_email", confirmEmail);
router.post("/login", loginUser);
router.patch("/update", authentication, updateProfile);
router.patch("/control/:email", authentication, authorization("admin"), controlUser);

export default router