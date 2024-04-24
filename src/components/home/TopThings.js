import PlainCard from '@/shared/PlainCard';
import TopThingsBg from '../../assets/images/topthingsbg.png';
import TopThingsImg from '@/assets/images/topthings.png';
import Image from 'next/image';

const TopThings = () => {
  const contentStyle = {
    width: '100%',
    backgroundImage: `url(${TopThingsBg.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };
  const topThings = [
    { img: <Image className='w-[80px]' src={TopThingsImg} alt='top-things' />, title: "Sunway Lagoon Ticket", desc: "Enjoy up to 90 rides and attractions discounts" },
    { img: <Image className='w-[80px]' src={TopThingsImg} alt='top-things' />, title: "Sunway Lagoon Ticket", desc: "Enjoy up to 90 rides and attractions discounts" },
    { img: <Image className='w-[80px]' src={TopThingsImg} alt='top-things' />, title: "Sunway Lagoon Ticket", desc: "Enjoy up to 90 rides and attractions discounts" },
    { img: <Image className='w-[80px]' src={TopThingsImg} alt='top-things' />, title: "Sunway Lagoon Ticket", desc: "Enjoy up to 90 rides and attractions discounts" },
    { img: <Image className='w-[80px]' src={TopThingsImg} alt='top-things' />, title: "Sunway Lagoon Ticket", desc: "Enjoy up to 90 rides and attractions discounts" },
    { img: <Image className='w-[80px]' src={TopThingsImg} alt='top-things' />, title: "Sunway Lagoon Ticket", desc: "Enjoy up to 90 rides and attractions discounts" },
  ];
  return (
    <div style={contentStyle} className='my-[70px] py-[70px]'>
      <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <PlainCard>
            <p className="text-primary">Tripiphy Offers</p>
            <h4 className="text-[25px] font-bold">Top things to do in Thailand</h4>
            <div className='mt-10'>
              {topThings.map((thing, index) => {
                return <div key={index} className='flex items-center justify-start space-x-4 my-3'>
                  <div>
                    {thing.img}
                  </div>
                  <div>
                    <p className='font-bold text-[20px]'>{thing.title}</p>
                    <p className='text-[16px]'>{thing.desc}</p>
                  </div>
                </div>
              })}
            </div>
          </PlainCard>
        </div>
      </div>
    </div>
  )
}

export default TopThings