const express = require("express");
const wrapacync = require("../utils/wrapacync.js");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

// Routes for user signup, login, and logout
router
  .route("/signup")
  .get(userController.signupForm)
  .post(wrapacync(userController.createUser));

router
  .route("/login")
  .get(userController.loginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );
router.get("/logout", userController.logout);

module.exports = router;
