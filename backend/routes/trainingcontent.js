const express = require("express");
const router = express.Router();

const {
    create,
    trainingcontentById,
    read,
    remove,
    list,
} = require("../controllers/trainingcontent");
const { requireSignin, isAuth, isEmployee } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/trainingcontent/:trainingcontentId", read);
router.post("/trainingcontent/create/:userId", isEmployee, create);
router.delete(
    "/trainingcontent/:trainingcontentId/:userId",
    requireSignin,
    isAuth,
    isEmployee,
    remove
);

router.get("/trainingcontents", list);

router.param("userId", userById);
router.param("trainingcontentId", trainingcontentById);

module.exports = router;
