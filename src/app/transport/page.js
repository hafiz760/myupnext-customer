'use client';

import PageHeader from "@/shared/PageHeader"
import React, { useState } from "react"
import FlightBg from '@/assets/images/flights.png';
import WorldImg from '@/assets/images/world.png';
import BrandsImg from '@/assets/images/brands.png';
import CustomerImg from '@/assets/images/customer.png';
import PlainCard from "@/shared/PlainCard"
import TransportForm from "@/components/transport/TransportForm"
import Image from "next/image";
import BookNow from "@/shared/BookNow";
import Faq from "@/components/home/Faq";
import TransportData from "@/components/transport/TransportData";

const Hotels = () => {

    const [isSearch, setIsSearch] = useState(false);

    const features = [
        { img: WorldImg, title: 'Worldwide Coverage', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { img: BrandsImg, title: 'Top Brands, Awesome Prices', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { img: CustomerImg, title: 'Reliable Customer Support', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    ];

    return (
        <React.Fragment>
            <PageHeader
                title="TRANSPORT"
                description="Save on amazing places to stay and explore unique experiences"
                bg={FlightBg} />
            <div className="container relative mb-[50px] mt-[-40px] z-20">
                <PlainCard customClass="shadow-md">
                    <TransportForm setIsSearch={setIsSearch} />
                </PlainCard>
            </div>
            {!isSearch ? <React.Fragment>
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-5 my-10">
                        {features.map((feature, index) => {
                            return <div key={index} className="flex items-center justify-start space-x-5">
                                <Image src={feature.img} className="w-12" alt="Icon" loading="lazy" />
                                <div>
                                    <h4 className="font-bold">{feature.title}</h4>
                                    <p className="text-sm text-gray-500">{feature.desc}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <BookNow />
                </div>
                <div className="w-full bg-[#FDF0EC] py-10">
                    <Faq />
                </div>
            </React.Fragment> : <TransportData />}

        </React.Fragment>
    )
}

export default Hotels