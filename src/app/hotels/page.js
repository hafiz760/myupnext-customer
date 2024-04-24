import HotelFilters from "@/components/hotels/HotelFilters"
import HotelForm from "@/components/hotels/HotelForm"
import AllFilters from "@/components/search/AllFilters"
import PageHeader from "@/shared/PageHeader"
import React from "react"
import HotelBg from '@/assets/images/hotels-bg.png';
import PlainCard from "@/shared/PlainCard"

const Hotels = () => {
    return (
        <React.Fragment>
            <PageHeader
                title="HOTELS"
                description="Save on amazing places to stay and explore unique experiences"
                bg={HotelBg} />
            <div className="container relative mb-[50px] mt-[-40px] z-20">
                <PlainCard>
                    <HotelForm />
                </PlainCard>
                <div className="grid grid-cols-12 gap-x-5 my-10">
                    <div className="col-span-12 md:col-span-3">
                        <AllFilters />
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <HotelFilters />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hotels