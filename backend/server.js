require("dotenv").config();
require('./path');

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const viewEngine = require('./src/configs/viewEngine.config');
const { connectBucket } = require('./src/configs/connectDB.config')

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
        console.log(`running at port ${PORT}`)
        connectBucket()
})


//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());
viewEngine(app);

//Routes
app.use('/api', require('./src/api/routes'))


