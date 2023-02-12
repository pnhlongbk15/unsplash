const mongoose = require('mongoose')
const { ImageFile } = require('../models/imageBucket/image.files')
const { ImageChuck } = require('../models/imageBucket/image.chucks')

const { imageBucket } = require('../../configs/connectDB.config')
const { ModelResponse } = require('../helpers/feedback')

module.exports = {
    getImgProfile: (id) => {
        return new Promise((resolve, reject) => {
            const _id = mongoose.Types.ObjectId(id);
            console.log('imgBucket in getImage',imageBucket)
            imageBucket?.find({ _id }).toArray((error, files) => {
                console.log(error, files)
                if (error) {
                    reject(new ModelResponse(error.message))
                } else {
                    if (!files[0] || files.length === 0) {
                        reject(new ModelResponse('No files exist'))
                    }
                    resolve(imageBucket.openDownloadStream(_id))
                    // resolve(new ModelResponse('success', imageBucket.openDownloadStream(_id)))
                }
            })
        })
    },
    deleteImgProfile: (id) => {
        return new Promise((resolve, reject) => {
            const _id = mongoose.Types.ObjectId(id);
            ImageFile.findById(_id).then((files) => {
                if (files.length > 0) {
                    ImageFile.deleteOne(_id).then((result) => {
                        if (result.deletedCount > 0) {
                            ImageChuck.find({ files_id: _id }).then((files) => {
                                if (files.length > 0) {
                                    ImageChuck.deleteMany({ files_id: _id }).then((result) => {
                                        if (result.deletedCount > 0) {
                                            resolve(new ModelResponse('File is deleted from files and chucks collection!'))
                                        } else {
                                            resolve(new ModelResponse('File is not deleted from chucks collection!'))
                                        }
                                    }).catch((error) => reject(new ModelResponse(error.message)))
                                } else {
                                    resolve(new ModelResponse('Chucks collection of file does not exist!'))
                                }
                            }).catch((error) => reject(new ModelResponse(error.message)))
                        } else {
                            resolve(new ModelResponse('File is not deleted from files collection!'))
                        }
                    }).catch((error) => reject(new ModelResponse(error.message)))
                } else {
                    reject(new ModelResponse('File does not exist!'))
                }
            }).catch((error) => reject(new ModelResponse(error.message)))
        })
    }
}