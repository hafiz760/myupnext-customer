import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import CustomInput from "@/shared/CustomInput";
import CustomButton from "@/shared/CustomButton";
import { useRouter, useSearchParams } from "next/navigation";
import { VerifyOTP } from "@/redux/slices/AuthSlic";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const OtpForm = () => {
  const router = useRouter();
  const { isLoading } = useSelector((state) => state.Auth);

  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const validValues = {
    email: "",
    otp: "",
  };
  const errorSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    otp: Yup.string().required("OTP is required"),
  });

  const otpHandler = (values) => {
    console.log({ values });
    dispatch(VerifyOTP({ values, router, searchParams }));
  };

  return (
    <Formik
      initialValues={validValues}
      validationSchema={errorSchema}
      onSubmit={otpHandler}
    >
      {() => (
        <Form>
          <CustomInput type="email" label="Email" name="email" />
          <CustomInput type="text" label="OTP" name="otp" />
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

export default OtpForm;
