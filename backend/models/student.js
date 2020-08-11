const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
        },
        school_id: {
            type: ObjectId,
            required: true,
            ref: "User"
        },
        student_id: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        class: {
            type: Number,
            required: true,
            maxlength: 2,
        },
        section: {
            type: String,
            required: true,
            maxlength: 2,
        },
        percentage: {
            type: String,
            required: true,
            maxlength: 4,
        },


    },
    { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
