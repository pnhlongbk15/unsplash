require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

require("./path");
const { viewEngine } = require(__path_configs)

const app = express();
viewEngine(app);
const PORT = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());

//Routes
app.use('/', require(__path_routes))


app.listen(PORT, () => {
        console.log(`running at port ${PORT}`)
})