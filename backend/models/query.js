const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
    {
        description: {
            type: String,
        },
        response:{
            type: String,
            default: null
        }
    },
    {timestamps: true}
    );

module.exports = mongoose.model("Query", querySchema);
