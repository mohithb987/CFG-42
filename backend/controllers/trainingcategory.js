const Trainingcategory = require('../models/trainingcategory');
const Trainingcontent = require('../models/trainingcontent');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.trainingcategoryById = (req, res, next, id) => {
    Trainingcategory.findById(id).exec((err, trainingcategory) => { 
        if (err || !trainingcategory) {
            return res.status(400).json({
                error: 'Trainingcategory does not exist'
            });
        }
        req.trainingcategory = trainingcategory;
        next();
    });
};

exports.create = (req, res) => {
    console.log("Inside create", req.body);
    const trainingcategory = new Trainingcategory(req.body);
    trainingcategory.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.read = (req, res) => {
    return res.json(req.trainingcategory);
};


exports.remove = (req, res) => {
    const trainingcategory = req.trainingcategory;
    Trainingcontent.find({ trainingcategory }).exec((err, data) => {
        if (data.length >= 1) {
            return res.status(400).json({
                message: `Sorry. You cant delete ${trainingcategory.name}. It has ${data.length} associated trainingcontents.`
            });
        } else {
            trainingcategory.remove((err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                res.json({
                    message: 'Trainingcategory deleted'
                });
            });
        }
    });
};

exports.list = (req, res) => {
    Trainingcategory.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        console.log(data);
        res.json(data);
    });
};
