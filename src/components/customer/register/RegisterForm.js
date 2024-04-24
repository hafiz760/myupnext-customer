'use client'

import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import CustomInput from '@/shared/CustomInput';
import CustomButton from '@/shared/CustomButton';
import { useRouter } from 'next/navigation';


const RegisterForm = () => {

    const router = useRouter();

    const validValues = {
        fname: '',
        email: '',
        password: '',
        cpassword: '',
    };
    const errorSchema = Yup.object().shape({
        fname: Yup.string().required('Name is required'),
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().min(8, 'Password must be 8 characters long').required('Password is required'),
        cpassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Must match "password" field value')
            .required('Confirm password is required')
    });

    const registerHandler = (values) => {
        console.log({ values });
        router.push('/customer/verify-otp?type=new-account');
    };

    return (
        <Formik initialValues={validValues} validationSchema={errorSchema} onSubmit={registerHandler}>
            {() => (
                <Form>
                    <CustomInput type="text" label="Name" name="fname" />
                    <CustomInput type="email" label="Email" name="email" />
                    <CustomInput type="password" label="Password" name="password" />
                    <CustomInput type="password" label="Confirm Password" name="cpassword" />
                    <div className='text-center mt-5'>
                        <CustomButton type="submit" style={{ width: '100%' }} colored>CONTINUE</CustomButton>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm