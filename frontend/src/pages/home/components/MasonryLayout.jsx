import React from 'react'
import Masonry from '@mui/lab/Masonry'
import Pin from './Pin'

const MasonryLayout = ({ pins }) => {
        
        return (
                <Masonry columns={3} spacing={3} style={{margin: 0}}>
                        {pins?.map((pin) => (
                                <Pin
                                        key={pin.id}
                                        pin={pin}
                                />
                        ))}
                </Masonry>
        )
}

export default MasonryLayout
