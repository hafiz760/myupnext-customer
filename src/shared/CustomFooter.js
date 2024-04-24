import WhiteLogo from '@/assets/images/whitelogo.png';
import Image from 'next/image';

const CustomFooter = () => {
    return (
        <div className="w-full bg-[#0D232E]">
            <div className="container py-8">
                <div className='grid xs:grid-cols-2 ssm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xs:place-items-start md:place-items-center gap-5 py-5'>
                    <div>
                        <Image src={WhiteLogo} alt='logo' loading='lazy' />
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur. Tincidunt pellentesque risus dignissim sagittis et. Morbi lectus morbil.</p>
                    </div>
                    <div>
                        <h2 className='text-white font-bold text-[18px] mb-4'>Quick Links</h2>
                        <ul className='text-white'>
                            <li>Promotions</li>
                            <li>Top Locations</li>
                            <li>Triphiphy App</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white font-bold text-[18px] mb-4'>Quick Links</h2>
                        <ul className='text-white'>
                            <li>Promotions</li>
                            <li>Top Locations</li>
                            <li>Triphiphy App</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white font-bold text-[18px] mb-4'>Quick Links</h2>
                        <ul className='text-white'>
                            <li>Promotions</li>
                            <li>Top Locations</li>
                            <li>Triphiphy App</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-5 py-5'>
                    <div>
                        <p className='text-white xs:text-center md:text-left'>Copyright © 2023 Triphipy All Rights Reserved.</p>
                    </div>
                    <div className='flex items-center xs:justify-center md:justify-end space-x-10'>
                        <p className='text-white'>Terms & Conditions</p>
                        <p className='text-white'>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomFooter