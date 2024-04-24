'use client'

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import CustomInput from '@/shared/CustomInput';
import CustomButton from '@/shared/CustomButton';

const LoginForm = () => {

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
                    <CustomInput type="email" label="Email" name="email" />
                    <CustomInput type="password" label="Password" name="password" />
                    <Link href="/customer/forgot-password">
                        <p className="forget text-primary text-end font-bold w-full">Forget Password?</p>
                    </Link>
                    <div className='text-center mt-5'>
                        <CustomButton type="submit" style={{ width: '100%' }} colored>CONTINUE</CustomButton>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm