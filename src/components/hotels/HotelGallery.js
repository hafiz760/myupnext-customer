import Image from 'next/image';
import ChoiceImg from '@/assets/images/choice.png';

const HotelGallery = () => {

    const images = [
        <Image className="h-auto max-w-full rounded-lg" src={ChoiceImg} loading='lazy' alt="Feature" />,
        <Image className="h-auto max-w-full rounded-lg" src={ChoiceImg} loading='lazy' alt="Feature" />,
        <Image className="h-auto max-w-full rounded-lg" src={ChoiceImg} loading='lazy' alt="Feature" />,
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                {images.map((imag, index) => {
                    return <div key={index}>
                        {imag}
                    </div>
                })}
            </div>
            <div className="grid gap-4">
                {images.map((imag, index) => {
                    return <div key={index}>
                        {imag}
                    </div>
                })}
            </div>
            <div className="grid gap-4">
                {images.map((imag, index) => {
                    return <div key={index}>
                        {imag}
                    </div>
                })}
            </div>
            <div className="grid gap-4">
                {images.map((imag, index) => {
                    return <div key={index}>
                        {imag}
                    </div>
                })}
            </div>
        </div>

    )
}

export default HotelGallery