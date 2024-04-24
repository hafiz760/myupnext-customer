const NearrbyAttractions = () => {

    const allAttratctions = [
        { place: "Dumaluan Beach", distance: "1.3km" },
        { place: "Dumaluan Beach", distance: "1.3km" },
        { place: "Dumaluan Beach", distance: "1.3km" },
        { place: "Dumaluan Beach", distance: "1.3km" },
        { place: "Dumaluan Beach", distance: "1.3km" },
        { place: "Dumaluan Beach", distance: "1.3km" },
        { place: "Dumaluan Beach", distance: "1.3km" },
        { place: "Dumaluan Beach", distance: "1.3km" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allAttratctions.map((attraction, index) => {
                return <div key={index} className="border rounded-lg p-3 flex items-center justify-between">
                    <p className="text-primary font-bold">{attraction.place}</p>
                    <p>{attraction.distance}</p>
                </div>
            })}
        </div>
    )
}

export default NearrbyAttractions