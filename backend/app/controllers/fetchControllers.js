const axios = require("axios");
const { Photo } = require(__path_configs);

const fetchControllers = {
        photos: async (req, res) => {
                const page = req.body.page;
                const perPage = req.body.perPage;
                const { data } = await axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_CLIENT_ID}&page=${page}&per_page=${perPage}`)

                data.forEach(async (photo) => {
                        const item = await Photo.findOne({ id: photo.id })
                        if (!item) {
                                const newPhoto = await new Photo({ ...photo });
                                //Save to DB
                                await newPhoto.save();
                        }
                })
                return res.status(200).send("success")
        }
}

module.exports = fetchControllers;