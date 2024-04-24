const AllFacilities = () => {

    const allFacilities = ["12.76 m²", "Garden view", "Shower", "Free parking", "No breakfast served", "Non-refundable", 'Cameras', 'Electricity', 'Security', 'Insurance'];

    return (
        <div className='flex justify-start space-x-1 flex-wrap'>
            {allFacilities.map((desc, descIndex) => {
                return <p className='text-primary font-semibold border rounded border-primary p-2 m-1 bg-[#fdba74]' key={`${descIndex}`}>{desc}</p>
            })}
        </div>
    )
}

export default AllFacilities