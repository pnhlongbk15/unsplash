import React, { useEffect, useState } from 'react'
import MasonryLayout from './MasonryLayout';

const Feed = () => {
        const [loading, setLoading] = useState(false);
        const [pins, setPins] = useState(null);

        useEffect(() => {
                setLoading(true);

                const source = `${process.env.REACT_APP_UNSPLASH_LOCATION}/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
                // console.log('source',source)
                const params = new URLSearchParams({
                        page: 1,
                        per_page: 10
                }).toString()

                fetch(source + '&' + params)
                        .then((res) => {
                                res.json()
                                        .then((data) => setPins(data))
                                        .catch((error) => console.error(error.message));

                                setLoading(false);
                        })
                        .catch((error) => console.error(error.message));

                setLoading(false);
        }, [])

        if(loading) return (
                <p>Loading</p>
        ) 

        return (
                <>
                        {pins && <MasonryLayout pins={pins} />}
                </>
        )
}

export default Feed
