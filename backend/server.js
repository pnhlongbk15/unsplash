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

const { imageBucket } = require('./src/configs/connectDB.config')


//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());
viewEngine(app);

//Routes
// app.use('/api', require('./src/api/routes'))

app.listen(PORT, async () => {
        console.log(`running at port ${PORT}`)

})
connectBucket()
console.log('imageBuc', imageBucket)

app.get('/album', (req, res) => {
        console.log('internal', imageBucket)

        imageBucket?.find({}).toArray((err, result) => {
                console.log(result)
        })
})

console.log('Port',process.env.PORT)