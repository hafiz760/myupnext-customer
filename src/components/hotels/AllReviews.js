import { FaUser } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import ClientImg from '@/assets/images/client-review.png';
import Image from "next/image";
import React from "react";

const AllReviews = () => {

    const allReviews = [
        { name: "Kathryn", review: "My husband and I really enjoyed our stay here! It's a good spot if you're looking for somewhere quiet, outside of the main tourist area at Alona" },
        { name: "Kathryn", review: "My husband and I really enjoyed our stay here! It's a good spot if you're looking for somewhere quiet, outside of the main tourist area at Alona" },
        { name: "Kathryn", review: "My husband and I really enjoyed our stay here! It's a good spot if you're looking for somewhere quiet, outside of the main tourist area at Alona" },
        { name: "Kathryn", review: "My husband and I really enjoyed our stay here! It's a good spot if you're looking for somewhere quiet, outside of the main tourist area at Alona" },
        { name: "Kathryn", review: "My husband and I really enjoyed our stay here! It's a good spot if you're looking for somewhere quiet, outside of the main tourist area at Alona" },
        { name: "Kathryn", review: "My husband and I really enjoyed our stay here! It's a good spot if you're looking for somewhere quiet, outside of the main tourist area at Alona" },
    ]

    return (
        <React.Fragment>
            <h1 className="text-center text-3xl font-bold mb-5">Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {allReviews.map((review, index) => {
                    return <div key={index} className="border rounded-lg p-3 shadow-xl">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start space-x-3 mb-3">
                                <Image src={ClientImg} alt="Client Image" className="rounded-full" />
                                <p className="font-bold text-primary text-md">{review.name}</p>
                            </div>
                            <p className="text-gray-500">Reviewed: 24 Dec 2023</p>
                        </div>
                        <div className='flex'>
                            <IoStarSharp className='text-[#fb923c] text-[20px]' />
                            <IoStarSharp className='text-[#fb923c] text-[20px]' />
                            <IoStarSharp className='text-[#fb923c] text-[20px]' />
                            <IoStarSharp className='text-[#fb923c] text-[20px]' />
                            <IoStarSharp className='text-[#fb923c] text-[20px]' />
                        </div>
                        <p>{review.review}</p>
                    </div>
                })}
            </div>
        </React.Fragment>
    )
}

export default AllReviews