import BookingForm from "./BookingForm"

const BookTicket = () => {

    return (
        <div className="bg-[#FDF0EC] mt-[80px] py-20">
            <div className="container">
                <div className="text-center">
                    <p className="text-primary text-[20px]">Book Ticket</p>
                    <h4 className="text-[30px] font-bold">Check Availability and secure your spot now</h4>
                    <p className="text-primary text-[15px] mt-3">*Important: Choose date first to see available options. You may then refer to the Disney calendar below as the 1-Day Ticket is valid on any date in your selected tier</p>
                </div>
                <div className="bg-white rounded-lg p-10 mt-10">
                    <BookingForm />
                </div>
            </div>
        </div>
    )
}

export default BookTicket