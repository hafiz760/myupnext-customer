'use client'

import ChoiceImg from '@/assets/images/choice.png';
import Image from 'next/image';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TravelChoice = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const choices = [
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", price: "$75.50" },
    ];

    return (
        <div className="container w-full my-[20px] py-10">
            <p className="text-primary text-[20px]">Tripiphy Offers</p>
            <h4 className="text-[30px] font-bold mb-10">Travellers Favorite Choice</h4>
            <Slider {...settings}>
                {choices.map((choice, index) => {
                    return <div key={index} className='border-dotted border-2 p-2 rounded-lg'>
                        {choice.img}
                        <p className='text-primary font-semibold'>{choice.top}</p>
                        <p className='font-bold text-[18px]'>{choice.title}</p>
                        <p className='text-[15px] font-semibold'>From: <span className='text-[16px] font-bold'>{choice.price}</span></p>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default TravelChoice