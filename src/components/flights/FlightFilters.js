const FlightFilters = () => {

    const allFlights = [
        { airline: "American Airlines", start: { time: "07:00", location: "MSY" }, end: { time: "14:37", location: "SAV" }, duration: "3h 15m", price: "US$ 689.55" },
        { airline: "American Airlines", start: { time: "07:00", location: "MSY" }, end: { time: "14:37", location: "SAV" }, duration: "3h 15m", price: "US$ 689.55" },
        { airline: "American Airlines", start: { time: "07:00", location: "MSY" }, end: { time: "14:37", location: "SAV" }, duration: "3h 15m", price: "US$ 689.55" },
        { airline: "American Airlines", start: { time: "07:00", location: "MSY" }, end: { time: "14:37", location: "SAV" }, duration: "3h 15m", price: "US$ 689.55" },
        { airline: "American Airlines", start: { time: "07:00", location: "MSY" }, end: { time: "14:37", location: "SAV" }, duration: "3h 15m", price: "US$ 689.55" },
        { airline: "American Airlines", start: { time: "07:00", location: "MSY" }, end: { time: "14:37", location: "SAV" }, duration: "3h 15m", price: "US$ 689.55" },
        { airline: "American Airlines", start: { time: "07:00", location: "MSY" }, end: { time: "14:37", location: "SAV" }, duration: "3h 15m", price: "US$ 689.55" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mb-5">
            {allFlights.map((flight, index) => {
                return <div key={index} className="border rounded-lg py-5 cursor-pointer hover:bg-[#FDF0EC]">
                    <p className="text-gray-500 text-center">{flight.airline}</p>
                    <div className="flex items-center justify-evenly">
                        <div>
                            <h4 className="text-xl font-bold">{flight.start.time}</h4>
                            <p>{flight.start.location}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">{flight.duration}</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold">{flight.end.time}</h4>
                            <p>{flight.end.location}</p>
                        </div>
                    </div>
                    <p className="text-center mt-3 text-primary text-2xl font-bold">{flight.price}</p>
                </div>
            })}
        </div>
    )
}

export default FlightFilters