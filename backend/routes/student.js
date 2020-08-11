const express = require("express");
const router = express.Router();

const {isTeacher, requireSignin, isAuth} = require("../controllers/auth");
const {userById,} =  require("../controllers/user")

const {createStudent, viewStudent, studentById,studentsBySchool} =  require("../controllers/student")
router.post("/student/create/:userId", isTeacher, createStudent);
router.get("/student/view_student/:userId/:studentId",requireSignin, isAuth, isTeacher, viewStudent);
router.post("/school/students", studentsBySchool);

router.param('studentId', studentById);
router.param("userId", userById);

module.exports = router;