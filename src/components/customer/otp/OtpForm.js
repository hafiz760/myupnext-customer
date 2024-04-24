import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import CustomInput from '@/shared/CustomInput';
import CustomButton from '@/shared/CustomButton';
import { useRouter, useSearchParams } from 'next/navigation';

const OtpForm = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const validValues = {
        otp: '',
    };
    const errorSchema = Yup.object().shape({
        otp: Yup.string().required('OTP is required'),
    });

    const otpHandler = (values) => {
        console.log({ values });
        router.push(`/customer/verification-success?type=${searchParams.has('type') ? searchParams.get('type') : 'new-account'}`);
    };

    return (
        <Formik initialValues={validValues} validationSchema={errorSchema} onSubmit={otpHandler}>
            {() => (
                <Form>
                    <CustomInput type="text" label="OTP" name="otp" />
                    <div className='text-center mt-5'>
                        <CustomButton type="submit" style={{ width: '100%' }} colored>CONTINUE</CustomButton>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default OtpForm