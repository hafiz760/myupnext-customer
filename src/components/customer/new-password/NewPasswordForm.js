import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import CustomInput from "@/shared/CustomInput";
import CustomButton from "@/shared/CustomButton";
import { useRouter } from "next/navigation";
import { ResetPassApi } from "@/redux/slices/AuthSlic";
import { useSelector } from "react-redux";

const NewPasswordForm = () => {
  const router = useRouter();
  const { isLoading } = useSelector((state) => state.Auth);

  const validValues = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const errorSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters long")
      .required("Password is required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password")], 'Must match "password" field value')
      .required("Confirm password is required"),
  });

  const newPasswordHandler = (values) => {
    console.log({ values });
    const data = {
      email: values.email,
      password: password.password,
      passwordConfirm: values.passwordConfirm,
    };
    dispatch(ResetPassApi({ data, router }));
  };

  return (
    <Formik
      initialValues={validValues}
      validationSchema={errorSchema}
      onSubmit={newPasswordHandler}
    >
      {() => (
        <Form>
          <CustomInput type="email" label="Email" name="email" />
          <CustomInput type="password" label="Password" name="password" />
          <CustomInput
            type="password"
            label="Confirm Password"
            name="passwordConfirm"
          />
          <div className="text-center mt-5">
            <CustomButton
              type="submit"
              disabled={isLoading}
              style={{ width: "100%" }}
              colored
            >
              {isLoading ? (
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 24,
                        color: "white",
                      }}
                      spin
                    />
                  }
                />
              ) : (
                "CONTINUE"
              )}
            </CustomButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewPasswordForm;
