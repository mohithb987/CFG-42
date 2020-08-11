const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();
// import routes
const authRoutes = require("./routes/auth");
const studentRoutes = require('./routes/student');
const trainingcategoryRoutes = require('./routes/trainingcategory');
const trainingcontentRoutes = require('./routes/trainingcontent');
const queryRoutes = require('./routes/query');
const userRoutes = require('./routes/user');
// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log("DB Connected"));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", studentRoutes);
app.use('/api', trainingcategoryRoutes);
app.use('/api', trainingcontentRoutes);
app.use('/api', queryRoutes);
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
