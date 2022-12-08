const mongoose = require('mongoose')

let imageBucket;

const connectBucket = () => {
        mongoose.connect(
                process.env.MONGODB_URL_AUTH,
                (err) => {
                        if (err) {
                                console.log("Err of connect DB:", err.message)
                        } else {
                                console.log("DB connected !")

                                let db = mongoose.connection.db
                                imageBucket = new mongoose.mongo.GridFSBucket(db, {
                                        bucketName: 'image'
                                })
                        }
                }
        )
}

module.exports = {
        girdBucket: { imageBucket },
        connectBucket
}