'use client';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import CustomInput from '@/shared/CustomInput';
import CustomButton from '@/shared/CustomButton';

const TransportForm = ({ setIsSearch }) => {

    const validValues = {
        destination: "Dubai Mall Fashion Avenue",
        dates: "",
    };
    const errorSchema = Yup.object().shape({
        destination: Yup.string().required('Destination is required'),
        dates: Yup.string().required('Date is required'),
    });

    const searchHandler = (values) => {
        console.log({ values });
        setIsSearch(true);
    };

    return (
        <div className='py-5'>
            <Formik initialValues={validValues} validationSchema={errorSchema} onSubmit={searchHandler}>
                {() => (
                    <Form>
                        <div className='flex flex-col md:flex-row items-center justify-center space-x-4'>
                            <CustomInput type="text" label="Locations" name="destination" customClass="grow" fieldClass="border border-black" />
                            <CustomInput type="date" label="Dates" name="dates" customClass="grow" fieldClass="border border-black" />
                            <CustomButton type="submit" style={{ flexGrow: '1' }} colored>Search</CustomButton>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default TransportForm