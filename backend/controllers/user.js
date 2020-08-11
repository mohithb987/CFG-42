const User = require('../models/user');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
};

var s_id= null;
exports.schoolById = (req, res, next, id) => {
    s_id=id;
    User.findById(s_id).exec((err, school) => {
        if (err || !school) {
            return res.status(400).json({
                error: 'School not found'
            });
        }
        next();
    });
};

exports.viewSchool = (req, res) => {
    const school = User.findById(s_id).exec((err, school) => {
        if (err || !school) {
            return res.status(400).json({
                error: 'School not found'
            });
        }
        else
        res.json({school});
})
};


exports.list = (req, res) => {
    User.find({role: 1}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

