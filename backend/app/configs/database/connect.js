const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL_AUTH, () => {
        console.log("Connected to mongoBD");
})

module.exports = mongoose;