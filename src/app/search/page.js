import AllFilters from "@/components/search/AllFilters"
import SearchResults from "@/components/search/SearchResults"
import CustomButton from "@/shared/CustomButton"

const Search = () => {
    return (
        <div className="container my-[50px]">
            <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-12 md:col-span-3">
                    <AllFilters />
                </div>
                <div className="col-span-12 md:col-span-9">
                    <SearchResults />
                    <div className="mt-10 text-center">
                        <CustomButton colored>Load More</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search