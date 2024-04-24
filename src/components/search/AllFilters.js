import { Checkbox } from 'antd';
import React from 'react';

const AllFilters = () => {

    const allFilters = [
        { value: 'discounted', title: "Discounted Offers" },
        { value: 'tickets_available', title: "Tickets Available" },
    ];
    
    const countriesFilters = [
        { value: 'dubai', title: "Dubai" },
        { value: 'singapore', title: "Singapore" },
        { value: 'maldives', title: "Maldives" },
        { value: 'canada', title: "Canada" },
        { value: 'us', title: "United States" },
    ];

    return (
        <React.Fragment>
            <div className='border rounded-md p-5 divide-y mt-5'>
                <div className='font-bold'>
                    1 selected
                </div>
                <div className='flex flex-col'>
                    {allFilters.map((item, index) => {
                        return <Checkbox key={index} checked className='mt-3'>{item.title}</Checkbox>
                    })}
                </div>
            </div>
            <div className='border rounded-md p-5 divide-y mt-5'>
                <div className='font-bold'>
                    1 selected
                </div>
                <div className='flex flex-col'>
                    {allFilters.map((item, index) => {
                        return <Checkbox key={index} checked className='mt-3'>{item.title}</Checkbox>
                    })}
                </div>
            </div>
            <div className='border rounded-md p-5 divide-y mt-5'>
                <div className='font-bold'>
                    1 selected
                </div>
                <div className='flex flex-col'>
                    {countriesFilters.map((item, index) => {
                        return <Checkbox key={index} checked className='mt-3'>{item.title}</Checkbox>
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default AllFilters