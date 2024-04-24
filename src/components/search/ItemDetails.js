import ItemImg from '@/assets/images/detail.png';
import CustomButton from '@/shared/CustomButton';
import Image from 'next/image';

const ItemDetails = () => {

    const details = [
        "Guests holding 1 day / 2 day tickets must make a reservation through the Park’s official website before the visit",
        "Guests holding 1 day / 2 day tickets must make a reservation through the Park’s official website before the visit",
        "Guests holding 1 day / 2 day tickets must make a reservation through the Park’s official website before the visit",
    ];

    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Image src={ItemImg} alt="Item" loading='eager' className='rounded-2xl aspect-video' />
                <div>
                    <p className="text-primary text-[20px]">Theme parks, hong kong</p>
                    <h4 className="text-[30px] font-bold">Hong Kong Disneyland Park Tickets</h4>
                    <p className='text-[20px] font-semibold mt-5'>From: <span className='font-bold'>$75.36</span></p>
                    <div className='mt-5'>
                        <CustomButton style={{ width: '50%' }} colored>Check Availability Now</CustomButton>
                    </div>
                    <ul className="list-disc custom-list mt-5">
                        {details.map((detail, index) => {
                            return <li key={index}>{detail}</li>
                        })}
                    </ul>
                    <p className='text-[20px] mt-5 text-primary border-b border-primary pb-3'>Highlights</p>
                    <ul className="list-disc mt-5">
                        <li>Explore 7 theme parks in Hong Kong Disneyland, start your amazing and exciting adventure now!</li>
                        <li>Visit the newly transformed Castle of Magical Dreams and meet your favorite Princess and Queen in the regally appointed Royal Reception Hall</li>
                        <li>Visit your favourite Disney Characters at the Fantasyland, Mickey, Minnie, Winnie the Pooh, Dumbo, etc and all the fun rides await!</li>
                        <li>You must not miss Tomorrowland if you are a die-hard Marvel fan, work together with the Iron Man, Ant-Man and The Wasp to complete “mission-impossible”</li>
                        <li>More theme attractions are waiting for you to reveal the magic. Remember to enjoy stage shows, live ….“Follow Your Dream” Castle shows, live performance and more!</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails