import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import CustomInput from '@/shared/CustomInput';
import CustomButton from '@/shared/CustomButton';
import { useRouter } from 'next/navigation';

const NewPasswordForm = () => {

    const router = useRouter();

    const validValues = {
        password: '',
        cpassword: '',
    };
    const errorSchema = Yup.object().shape({
        password: Yup.string().min(8, 'Password must be 8 characters long').required('Password is required'),
        cpassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Must match "password" field value')
            .required('Confirm password is required')
    });

    const newPasswordHandler = (values) => {
        console.log({ values });
        router.push('/dashboard');
    };

    return (
        <Formik initialValues={validValues} validationSchema={errorSchema} onSubmit={newPasswordHandler}>
            {() => (
                <Form>
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

export default NewPasswordForm