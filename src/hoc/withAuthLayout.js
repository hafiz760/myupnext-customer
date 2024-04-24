import Link from 'next/link';
import '../assets/css/auth.css';
import Image from 'next/image';
import Logo from '@/assets/images/Logo.png';

const withAuthLayout = (Component) => props => {
    return (
        <div className='w-full min-h-screen max-h-full auth-background grid place-items-center'>
            <div className='container mx-auto h-full grid xxs:grid-cols-1 md:grid-cols-2 place-items-center'>
                <div className="flex flex-col justify-center">
                    <Link href="/home">
                        <Image src={Logo} className='cursor-pointer' alt='Logo' loading='lazy' />
                    </Link>
                    <h1 className='text-[40px] font-extrabold mb-3 text-white'>Building The Future</h1>
                    <p className='mb-5 text-[17px] text-white'>From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
                </div>
                <Component />
            </div>
        </div>
    )
}

export default withAuthLayout;