'use client'

import ChoiceImg from '@/assets/images/choice.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchResults = () => {

    const router = useRouter();

    const results = [
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", price: "$75.50" },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, top: "Theme parks, hong kong", title: "Hong Kong Disneyland Park Tickets", price: "$75.50" },
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
        <div className="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-3 mt-5">
            {results.map((choice, index) => {
                return <div key={index} className='border-dotted border-2 p-2 rounded-lg cursor-pointer' onClick={() => router.push('search/hotel/1')}>
                    {choice.img}
                    <p className='text-primary font-semibold'>{choice.top}</p>
                    <p className='font-bold text-[18px]'>{choice.title}</p>
                    <p className='text-[15px] font-semibold'>From: <span className='text-[16px] font-bold'>{choice.price}</span></p>
                </div>
            })}
        </div>
    )
}

export default SearchResults