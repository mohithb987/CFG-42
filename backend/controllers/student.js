const Student = require("../models/student");

const { errorHandler } = require("../helpers/dbErrorHandler");

exports.studentById = (req, res, next, id) => {
    console.log(id);
    Student.findById(id).exec((err, student) => { //find should always be followed by exec.
        if (err || !student) {
            return res.status(400).json({
                error: 'Student does not exist'
            });
        }
        req.student = student;
        next();
    });
};


exports.createStudent = (req, res) => {
    console.log(req.body);
    const student = new Student(req.body);
    student.save((err, student) => {
        if (err) {
            console.log(err);
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ student });
    });
};

exports.viewStudent = (req, res) => {
    return res.json(req.student);
};

exports.studentsBySchool = (req, res) => {
    Student.find({school_id : req.body.school_id}).exec((err, students) => {
        if (err) {
            return res.status(400).json({
                error: 'Students not found'
            });
        }
        res.json(students);
    });
};