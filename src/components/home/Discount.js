import DiscontBg from '@/assets/images/discounts-bg.png';
import CustomButton from '@/shared/CustomButton';

const Discount = () => {
    const contentStyle = {
        width: '100%',
        backgroundImage: `url(${DiscontBg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };
    return (
        <div style={contentStyle} className='my-[70px] py-[80px]'>
            <div className='container'>
                <div className='flex flex-col items-center justify-center py-[30px]'>
                    <h2 className='font-bold text-4xl text-white my-3'>Unlock Your Travel Discounts</h2>
                    <p className='text-white text-lg mb-20'>From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
                    <CustomButton colored>Get Started</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Discount