"use client";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import CustomInput from "@/shared/CustomInput";
import CustomButton from "@/shared/CustomButton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { SignUpApi } from "@/redux/slices/AuthSlic";

const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.Auth);

  const validValues = {
    fname: "",
    email: "",
    password: "",
    cpassword: "",
    role: "Customer",
  };
  const errorSchema = Yup.object().shape({
    fname: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters long")
      .required("Password is required"),
    cpassword: Yup.string()
      .oneOf([Yup.ref("password")], 'Must match "password" field value')
      .required("Confirm password is required"),
  });

  const registerHandler = (values) => {
    const data = {
      email: values.email,
      password: values.password,
      passwordConfirm: values.cpassword,
      role: "Customer",
      fanme: values.fname,
    };
    dispatch(SignUpApi({ data, router }));
  };

  return (
    <Formik
      initialValues={validValues}
      validationSchema={errorSchema}
      onSubmit={registerHandler}
    >
      {() => (
        <Form>
          <CustomInput type="text" label="Name" name="fname" />
          <CustomInput type="email" label="Email" name="email" />
          <CustomInput type="password" label="Password" name="password" />
          <CustomInput
            type="password"
            label="Confirm Password"
            name="cpassword"
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

export default RegisterForm;
