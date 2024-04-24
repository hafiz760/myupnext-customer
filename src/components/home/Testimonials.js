import Test1 from '@/assets/images/test1.png';
import Test2 from '@/assets/images/test2.png';
import Test3 from '@/assets/images/test3.png';
import Image from 'next/image';
import PlainCard from '@/shared/PlainCard';

const Testimonials = () => {
    const testimonials = [
        { img: <Image className='w-full' src={Test1} loading='lazy' alt="Feature" />, text: "Lorem ipsum dolor sit amet consectetur. Urna sit nisl nunc nulla eu at nunc maecenas. Dolor est vitae in viverra adipiscing tellus cursus commodo metus. Nulla malesuada et auctor nisl quis pulvinar mauris. Venenatis pellentesque interdum cras urna.", name: "Zoe" },
        { img: <Image className='w-full' src={Test2} loading='lazy' alt="Feature" />, text: "Lorem ipsum dolor sit amet consectetur. Urna sit nisl nunc nulla eu at nunc maecenas. Dolor est vitae in viverra adipiscing tellus cursus commodo metus. Nulla malesuada et auctor nisl quis pulvinar mauris. Venenatis pellentesque interdum cras urna.", name: "Zoe" },
        { img: <Image className='w-full' src={Test3} loading='lazy' alt="Feature" />, text: "Lorem ipsum dolor sit amet consectetur. Urna sit nisl nunc nulla eu at nunc maecenas. Dolor est vitae in viverra adipiscing tellus cursus commodo metus. Nulla malesuada et auctor nisl quis pulvinar mauris. Venenatis pellentesque interdum cras urna.", name: "Zoe" },
    ];
    return (
        <div className='my-[70px] py-[80px] w-full bg-[#0D232E]'>
            <div className="container">
                <p className="text-primary">Testimonials</p>
                <h4 className="text-[25px] font-bold text-white">See What Others Say About Us</h4>
                <div className='grid xs:grid-cols-1 ssm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mt-10'>
                    {testimonials.map((testimonial, index) => {
                        return <div key={index}>
                            <PlainCard>
                                {testimonial.img}
                                <div className='text-center'>
                                    <p className='text-[15px]'>{testimonial.text}</p>
                                    <p className='text-[18px] font-bold'>{testimonial.name}</p>
                                </div>
                            </PlainCard>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Testimonials