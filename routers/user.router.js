import express from "express";
import {
  addUser,
  createAndSendOTP,
  deleteUser,
  getUser,
  getUsers,
  removeUser,
  signInUser,
  signInWithOTP,
  signUpUser,
  updateUser,
} from "../controllers/user.controller";
const router = express.Router();

router.post("/add_user", addUser);
router.get("/get_users", getUsers);
router.get("/get_user/:user_id", getUser);
router.put("/update_user/:user_id", updateUser);
router.delete("/delete_user/:user_id", deleteUser);
router.delete("/remove_user/:user_id", removeUser);

// Authentication API :-
router.post("/sign_up", signUpUser);
router.post("/sign_in", signInUser);

// Send OTP
router.post("/send_otp", createAndSendOTP);
router.post("/signIn_with_otp", signInWithOTP);

export default router;
