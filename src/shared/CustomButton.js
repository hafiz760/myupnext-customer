import React from 'react'

const CustomButton = ({ children, colored, ...props }) => {
    if (colored) {
        return (
            <button {...props} className='bg-primary text-white font-bold rounded-full text-sm px-7 py-2.5 text-center me-2 mb-2'>{children}</button>
        )
    }
    else {
        return (
            <button {...props} className='text-black border font-bold rounded-full text-sm px-7 py-2.5 text-center me-2 mb-2 hover:bg-primary hover:text-white'>{children}</button>
        )
    }
}

export default CustomButton