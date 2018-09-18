const express = require("express");
const mongoose = require("mongoose");
const keys = require('./config/keys')
require('./models/Student');

mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true });

const app = express();

require("./routes/testRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);