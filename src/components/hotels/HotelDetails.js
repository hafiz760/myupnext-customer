import CustomButton from "@/shared/CustomButton";
import React from "react";
import { IoStarSharp } from "react-icons/io5";

const HotelDetails = () => {
    return (
        <React.Fragment>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h2 className="text-xl md:text-3xl font-bold mb-3">13 Ways Room Rental</h2>
                    <div className='flex'>
                        <IoStarSharp className='text-[#fb923c] text-[20px]' />
                        <IoStarSharp className='text-[#fb923c] text-[20px]' />
                        <IoStarSharp className='text-[#fb923c] text-[20px]' />
                        <IoStarSharp className='text-[#fb923c] text-[20px]' />
                        <IoStarSharp className='text-[#fb923c] text-[20px]' />
                    </div>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <h2 className="text-xl md:text-3xl font-bold  mb-3">US$ 23.97 <span className="text-xl text-[#6b7280]">per night</span></h2>
                    <CustomButton colored>Select Room</CustomButton>
                </div>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="border border-primary p-5 rounded-lg">
                    <div className="flex items-center justify-start space-x-5">
                        <h2 className="text-3xl font-bold mb-3 text-primary">4.5 <span className="text-xl text-[#6b7280]">/5</span></h2>
                        <p className="font-bold text-green-700">Fantastic</p>
                    </div>
                    <div>
                        <p className="font-semibold">Kathryn</p>
                        <p>My husband and I really enjoyed our stay here! It's a good spot.</p>
                    </div>
                </div>
                <div className="border border-primary p-5 rounded-lg flex items-center justify-between space-x-5">
                    <div>
                        <p className="font-semibold text-primary">Purok 2, Bgy. Libaong(Lourdes-Libaong Road)</p>
                        <p className="text-[#6b7280]">Dumaluan Beach, 1.3km</p>
                    </div>
                    <div>
                        <CustomButton>Map View</CustomButton>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HotelDetails