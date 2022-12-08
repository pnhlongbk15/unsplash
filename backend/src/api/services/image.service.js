const { girdBucket: { imageBucket } } = require('../../configs/connectDB.config')
const {}

const { ErrResponse } = require('../helpers/feedback')


module.exports = {
        getImgProfile: (_id) => {
                return new Promise((resolve, reject) => {
                        imageBucket?.find({ _id }).toArray((err, files) => {
                                if (err) {
                                        reject(new ErrResponse(500, err.message))
                                } else {
                                        if (!files[0] || files.length === 0) {
                                                reject(new ErrResponse(404, 'No files exist'))
                                        }
                                        resolve(imageBucket.openDownloadStream(_id))
                                }
                        })
                })
        },
        deleteImgProfile: (_id) => {
                return new Promise((resolve, reject)=>{
                        
                }) 
        }
}