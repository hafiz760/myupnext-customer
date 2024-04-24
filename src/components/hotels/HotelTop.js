import React, { useState } from "react";
import Hotel1Img from '@/assets/images/hotel1.png';
import Hotel2Img from '@/assets/images/hotel2.png';
import Hotel3Img from '@/assets/images/hotel3.png';
import Hotel4Img from '@/assets/images/hotel4.png';
import ImageGallery from "react-image-gallery";

const HotelTop = () => {

    const [images, setImages] = useState([
        {
            original: Hotel1Img.src,
            thumbnail: Hotel1Img.src,
        },
        {
            original: Hotel2Img.src,
            thumbnail: Hotel2Img.src,
        },
        {
            original: Hotel3Img.src,
            thumbnail: Hotel3Img.src,
        },
        {
            original: Hotel4Img.src,
            thumbnail: Hotel4Img.src,
        },
    ]);

    return (
        <React.Fragment>
            <h1 className="text-primary text-3xl font-bold mb-10">13 Ways Room Rental <span className="text-black">( Best Hotel )</span></h1>
            {images.length > 0 && <ImageGallery
                items={images} 
                lazyLoad
                showPlayButton={false}
                showFullscreenButton={false}
                autoPlay
                showBullets
                showNav={false}
                thumbnailPosition="right" />}
        </React.Fragment>
    )
}

export default HotelTop