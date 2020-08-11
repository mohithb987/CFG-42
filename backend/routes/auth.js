const express = require("express");
const router = express.Router();

const {
    signup,
    signin,
    signout,
    userProfile,
    requireSignin
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get('/userProfile', userProfile);

module.exports = router;
