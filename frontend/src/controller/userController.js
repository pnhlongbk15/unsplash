import axios from "axios"

const updateInfo = (newInfo) => {
        try {
                const accessToken = sessionStorage.getItem('accessToken')
                axios.post('/api/user/update',
                        newInfo,
                        {
                                headers: {
                                        authorization: accessToken
                                }
                        })
                        .then(({ data }) => {
                                console.log(data)
                        })
        } catch (err) {
                console.log('updateInfo error', err.message)
        }
}

const updateImage = (newImage) => {
        var formData = new FormData();
        formData.append("file", newImage)
        try {
                const accessToken = sessionStorage.getItem('accessToken')
                axios.post('/api/image/update', formData, {
                        headers: {
                                'Content-Type': 'multipart/form-data',
                                'authorization': accessToken
                        }
                }).then(({ data }) => {
                        console.log(data)
                }).catch((err)=> console.log('err:',err.message))

        } catch (err) {
                console.log('updateImage error', err.message)

        }
}

export {
        updateInfo,
        updateImage
}