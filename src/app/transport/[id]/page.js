'use client';

import AllDetails from '@/components/hotels/AllDetails';
import AllReviews from '@/components/hotels/AllReviews';
import HotelDetails from '@/components/hotels/HotelDetails';
import HotelTop from '@/components/hotels/HotelTop';
import React from 'react';

const SingleHotel = ({ params }) => {
    console.log(params.id);
    return (
        <React.Fragment>
            <div className='container'>
                <HotelTop />
                <HotelDetails />
                <AllDetails />
                <AllReviews />
            </div>
        </React.Fragment>
    )
}

export default SingleHotel