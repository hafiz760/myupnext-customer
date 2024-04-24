'use client';

import ChoiceImg from '@/assets/images/choice.png';
import CustomButton from '@/shared/CustomButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoStarSharp } from "react-icons/io5";

const HotelFilters = () => {

    const router = useRouter();

    const results = [
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", price: "$75.50" },
    ];

    return (
        <div className="grid grid-cols-1 gap-3 mt-5">
            {results.map((choice, index) => {
                return <div key={index} className='border-dotted border-2 p-2 rounded-lg flex items-center justify-start space-x-5'>
                    <div>
                        {choice.img}
                    </div>
                    <div>
                        <div className='flex items-center justify-start space-x-5'>
                            <p className='text-primary font-semibold'>{choice.top}</p>
                            <div className='flex'>
                                <IoStarSharp className='text-[#fb923c] text-[20px]' />
                                <IoStarSharp className='text-[#fb923c] text-[20px]' />
                                <IoStarSharp className='text-[#fb923c] text-[20px]' />
                                <IoStarSharp className='text-[#fb923c] text-[20px]' />
                                <IoStarSharp className='text-[#fb923c] text-[20px]' />
                            </div>
                        </div>
                        <p className='font-bold text-[18px]'>{choice.title}</p>
                        <p className=''>{choice.desc}</p>
                        <p className='text-[15px] font-semibold text-right mr-5 mb-3'>From: <span className='text-[18px] font-bold text-primary'>{choice.price}</span></p>
                        <div className='text-right'>
                            <CustomButton onClick={() => router.push('/hotels/1')} colored>See Details</CustomButton>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default HotelFilters