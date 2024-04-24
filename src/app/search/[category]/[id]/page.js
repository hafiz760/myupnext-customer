import BookTicket from "@/components/search/BookTicket";
import ItemDetails from "@/components/search/ItemDetails";

const SingleSearch = ({ params }) => {
    console.log(`${params.id} ${params.category}`);
    return (
        <div className="my-[50px]">
            <ItemDetails />
            <BookTicket />
        </div>
    )
}

export default SingleSearch