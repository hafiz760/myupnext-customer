'use client';

import ChoiceImg from '@/assets/images/car.png';
import CustomButton from '@/shared/CustomButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoStarSharp } from "react-icons/io5";

const TransportFilters = () => {

    const router = useRouter();

    const results = [
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, type: 'Compact', name: 'Suzuki Wagon R', properties: ['4 Seats', '1 Suitcase', 'A/C', 'Auto'], features: ['Free Cancellation', 'Unlimited Milage', 'Extra Driver'], price: 'US $ 41.18/day' },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, type: 'Compact', name: 'Suzuki Wagon R', properties: ['4 Seats', '1 Suitcase', 'A/C', 'Auto'], features: ['Free Cancellation', 'Unlimited Milage', 'Extra Driver'], price: 'US $ 41.18/day' },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, type: 'Compact', name: 'Suzuki Wagon R', properties: ['4 Seats', '1 Suitcase', 'A/C', 'Auto'], features: ['Free Cancellation', 'Unlimited Milage', 'Extra Driver'], price: 'US $ 41.18/day' },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, type: 'Compact', name: 'Suzuki Wagon R', properties: ['4 Seats', '1 Suitcase', 'A/C', 'Auto'], features: ['Free Cancellation', 'Unlimited Milage', 'Extra Driver'], price: 'US $ 41.18/day' },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, type: 'Compact', name: 'Suzuki Wagon R', properties: ['4 Seats', '1 Suitcase', 'A/C', 'Auto'], features: ['Free Cancellation', 'Unlimited Milage', 'Extra Driver'], price: 'US $ 41.18/day' },
        { img: <Image className='w-[300px]' src={ChoiceImg} loading='lazy' alt="Feature" />, type: 'Compact', name: 'Suzuki Wagon R', properties: ['4 Seats', '1 Suitcase', 'A/C', 'Auto'], features: ['Free Cancellation', 'Unlimited Milage', 'Extra Driver'], price: 'US $ 41.18/day' },
    ];

    return (
        <div className="grid grid-cols-1 gap-3 mt-5">
            {results.map((choice, index) => {
                return <div key={index} className='border-dotted border-2 p-2 rounded-lg flex items-center justify-start space-x-5 shadow-lg'>
                    <div>
                        {choice.img}
                    </div>
                    <div className="grow">
                        <p className='text-primary font-semibold text-sm'>{choice.type}</p>
                        <h3 className='text-xl font-bold'>{choice.name}</h3>
                        <p className='font-bold text-[18px]'>{choice.title}</p>
                        <div className='flex items-center justify-start space-x-5 flex-wrap mt-2'>
                            {choice.properties.map((property, idx) => {
                                return <p key={`${index - idx}`}>{property}</p>
                            })}
                        </div>
                        <div className='flex items-center justify-start space-x-3 flex-wrap my-2'>
                            {choice.features.map((property, idx) => {
                                return <p key={`${index - idx}`} className='border border-primary text-primary p-1 px-3 rounded-full text-sm'>{property}</p>
                            })}
                        </div>
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

export default TransportFilters