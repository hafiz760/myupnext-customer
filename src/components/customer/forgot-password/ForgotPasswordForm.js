import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import CustomInput from '@/shared/CustomInput';
import CustomButton from '@/shared/CustomButton';
import { useRouter } from 'next/navigation';

const ForgotPasswordForm = () => {

    const router = useRouter();

    const validValues = {
        email: '',
    };
    const errorSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
    });

    const forgotPasswordHandler = (values) => {
        console.log({ values });
        router.push('/customer/verify-otp?type=forgot-password');
    };

    return (
        <Formik initialValues={validValues} validationSchema={errorSchema} onSubmit={forgotPasswordHandler}>
            {() => (
                <Form>
                    <CustomInput type="email" label="Email" name="email" />
                    <div className='text-center mt-5'>
                        <CustomButton type="submit" style={{ width: '100%' }} colored>CONTINUE</CustomButton>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ForgotPasswordForm