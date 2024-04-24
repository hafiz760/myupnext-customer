'use client'

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation'

import CustomInput from '@/shared/CustomInput';
import CustomButton from '@/shared/CustomButton';
import { Radio } from 'antd';

const BookingForm = () => {

    const ticketTypes = [
        {
            label: '1-Day Ticket',
            value: '1-day-ticket',
        },
        {
            label: '2-Day Ticket (2 Visits within 6 Days)',
            value: '2-day-ticket',
        },
        {
            label: 'Non-admission Tickets (Fast Pass/ Meal E-voucher)',
            value: 'non-admission',
        },
    ];

    const router = useRouter();

    const validValues = {
        email: '',
        password: ''
    };
    const errorSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const loginHandler = (values) => {
        const data = {
            email: values.email,
            password: values.password
        };
        console.log({ data });
        router.push('/dashboard');
    };

    return (
        <Formik initialValues={validValues} validationSchema={errorSchema} onSubmit={loginHandler}>
            {() => (
                <Form>
                    <div>
                        <p className='font-bold text-[18px] mb-3'>Select Date and see available offers</p>
                        <CustomInput customClass="w-[25%]" type="date" label="Date" name="travelDate" />
                    </div>
                    <div className='flex items-center justify-start space-x-10 mt-8'>
                        <p className='font-bold text-[18px] mb-3'>Ticket Types</p>
                        <Radio.Group
                            options={ticketTypes}
                            optionType="button"
                            buttonStyle="solid"
                            buttonSolidCheckedColor="#ee5931"
                        />
                    </div>
                    <div className='flex items-center justify-start space-x-10 mt-8'>
                        <p className='font-bold text-[18px] mb-3'>Ticket Sub Types</p>
                        <Radio.Group
                            options={ticketTypes}
                            optionType="button"
                            buttonStyle="solid"
                            buttonSolidCheckedColor="#ee5931"
                        />
                    </div>
                    <div className='flex items-center justify-start space-x-10 my-8'>
                        <p className='font-bold text-[18px] mb-3'>Add Ons</p>
                        <Radio.Group
                            options={ticketTypes}
                            optionType="button"
                            buttonStyle="solid"
                            buttonSolidCheckedColor="#ee5931"
                        />
                    </div>
                    <hr />
                    <div className='mb-8'>
                        <p className='font-bold text-[18px] mb-3 mt-8'>Quantity</p>
                        <div className='flex items-center justify-between w-[75%]'>
                            <p className='font-semibold'>Adult (aged 12 - 64)</p>
                            <p className='font-semibold'>US $131.55</p>
                        </div>
                        <div className='flex items-center justify-between w-[75%]'>
                            <p className='font-semibold'>Child (aged 3 - 11)</p>
                            <p className='font-semibold'>US $131.55</p>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-8'>
                        <p className='font-bold text-[18px] mb-3 mt-8'>Total</p>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-semibold text-primary text-3xl'>$ 205.55</h4>
                            <div>
                                <CustomButton>Add To Cart</CustomButton>
                                <CustomButton colored>Book Now</CustomButton>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default BookingForm