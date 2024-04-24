'use client'

import SuccessImg from '../../../assets/images/success.png';
import withAuthLayout from "@/hoc/withAuthLayout";
import PlainCard from "@/shared/PlainCard";
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const VerificationSuccess = () => {

    const searchParams = useSearchParams();

    return (
        <div className="xxs:w-full sm:w-[70%] md:w-full lg:w-[70%]">
            <PlainCard>
                <div className='grid place-items-center'>
                    <Image src={SuccessImg} className='xxs:w-[10px]' alt='Successul' loading='lazy' />
                    <h4 className="xxs:text-[15px] text-[25px] font-bold mb-[30px] text-green-600 mt-5">Email Verification Successul!</h4>
                    {searchParams.get('type') === 'new-account' ? <Link href='/dashboard' className='text-primary font-bold'>Go To Dashboard</Link> : <Link href='/customer/new-password' className='text-primary font-bold'>Reset Password</Link>}
                </div>
            </PlainCard>
        </div>
    )
}

export default withAuthLayout(VerificationSuccess);