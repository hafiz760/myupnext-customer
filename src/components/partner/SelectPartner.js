import AgentImg from '@/assets/images/agent-signup.png';
import MerchantImg from '@/assets/images/merchant-signup.png';
import CustomButton from '@/shared/CustomButton';
import Image from "next/image";
import { useState } from 'react';

const SelectPartner = () => {
    const [vendorType, setVendorType] = useState('agent');

    const vendorTypes = [
        {
            name: 'agent',
            image: AgentImg,
            title: 'Agent Marketplace',
            desc: 'With partners across Asia and beyond, Klook is a world leading travel and local leisure booking platform for the.'
        },
        {
            name: 'merchant',
            image: MerchantImg,
            title: 'B2B Merchants',
            desc: 'With partners across Asia and beyond, Klook is a world leading travel and local leisure booking platform for the.'
        },
    ];
    return (
        <div>
            {vendorTypes.map((vendor, index) => {
                return <div onClick={() => setVendorType(vendor.name)} key={index} className={`flex flex-col md:flex-row items-center justify-center gap-5 border rounded-lg p-5 my-5 cursor-pointer ${vendorType === vendor.name && 'bg-[#0D232E]'}`}>
                    <Image src={vendor.image} alt="Vendor" />
                    <div>
                        <h2 className={`font-bold ${vendorType === vendor.name && 'text-white'}`}>{vendor.title}</h2>
                        <p className={`${vendorType === vendor.name && 'text-white'}`}>{vendor.desc}</p>
                    </div>
                </div>
            })}
            <CustomButton colored style={{ width: '100%', margin: '20px 0' }}>Next</CustomButton>
        </div>
    )
}

export default SelectPartner