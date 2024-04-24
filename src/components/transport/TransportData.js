import AllFilters from "@/components/search/AllFilters"
import TransportFilters from "./TransportFilters"

const TransportData = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-x-5 my-10">
                <div className="col-span-12 lg:col-span-3">
                    <AllFilters />
                </div>
                <div className="col-span-12 lg:col-span-9">
                    <TransportFilters />
                </div>
            </div>
        </div>
    )
}

export default TransportData