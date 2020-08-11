const express = require("express");
const { requireSignin, isAuth, isEmployee } = require("../controllers/auth");
const { list, schoolById, userById, viewSchool } = require("../controllers/user");
const router = express.Router();

router.get("/list/schools/:userId", isEmployee, list);
router.get("/view/school/:userId/:schoolId", isEmployee,viewSchool);
router.param("userId", userById);
router.param("schoolId", schoolById);

module.exports = router;
