const mongoose = require("mongoose");
const { ObjectId }= mongoose.Schema;
const TrainingcontentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 50,
            unique: true
        },
        description: {
            type: String,
            required : true,
            maxlength: 2000
        },
        trainingcategory: {
            type: ObjectId,
            ref: "TrainingCategory",
            required: true
        },
        url: {
            type: String,
            required: true,
        }
        
        
    },

    { timestamps: true }
);

module.exports = mongoose.model("TrainingContent", TrainingcontentSchema);
