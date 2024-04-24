import RoomImg from '@/assets/images/room.png';
import CustomButton from '@/shared/CustomButton';
import Image from 'next/image';

const SelectRooms = () => {

    const allRooms = [
        {
            title: 'Deluxe Double Room',
            img: <Image src={RoomImg} className='rounded-lg' alt="Room" loading="lazy" />,
            descriptions: ["12.76 m²", "Garden view", "Shower", "Free parking", "No breakfast served", "Non-refundable"],
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            price: "US$ 23.97"
        },
        {
            title: 'Deluxe Double Room',
            img: <Image src={RoomImg} className='rounded-lg' alt="Room" loading="lazy" />,
            descriptions: ["12.76 m²", "Garden view", "Shower", "Free parking", "No breakfast served", "Non-refundable"],
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            price: "US$ 23.97"
        },
        {
            title: 'Deluxe Double Room',
            img: <Image src={RoomImg} className='rounded-lg' alt="Room" loading="lazy" />,
            descriptions: ["12.76 m²", "Garden view", "Shower", "Free parking", "No breakfast served", "Non-refundable"],
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            price: "US$ 23.97"
        },
        {
            title: 'Deluxe Double Room',
            img: <Image src={RoomImg} className='rounded-lg' alt="Room" loading="lazy" />,
            descriptions: ["12.76 m²", "Garden view", "Shower", "Free parking", "No breakfast served", "Non-refundable"],
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            price: "US$ 23.97"
        },
        {
            title: 'Deluxe Double Room',
            img: <Image src={RoomImg} className='rounded-lg' alt="Room" loading="lazy" />,
            descriptions: ["12.76 m²", "Garden view", "Shower", "Free parking", "No breakfast served", "Non-refundable"],
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            price: "US$ 23.97"
        }
    ];

    return (
        <div>
            {allRooms.map((room, index) => {
                return <div key={index} className='flex justify-start space-x-5 my-5 border border-primary rounded-lg p-3 bg-[#fafafa]'>
                    <div>
                        {room.img}
                    </div>
                    <div>
                        <div className='flex items-center justify-start space-x-3 mb-3'>
                            <h2 className='text-xl font-bold'>{room.title}</h2>
                            <p className='text-primary font-semibold cursor-pointer'>See All Details</p>
                        </div>
                        <div className='flex justify-start space-x-1 flex-wrap'>
                            {room.descriptions.map((desc, descIndex) => {
                                return <p className='text-primary font-semibold border rounded border-primary p-2 m-1 bg-[#fdba74]' key={`${index}-${descIndex}`}>{desc}</p>
                            })}
                        </div>
                        <p>{room.text}</p>
                        <div className='flex flex-col items-end justify-end'>
                            <h2 className='text-xl font-bold my-2'>{room.price}</h2>
                            <CustomButton colored>BOOK</CustomButton>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default SelectRooms