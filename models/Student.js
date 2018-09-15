const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
    studentName: String,
    studentEmail: String,
    studentPhone: String,
    parentName: String,
    parentEmail: String,
    parentPhone: String
});

mongoose.model("students", studentSchema);