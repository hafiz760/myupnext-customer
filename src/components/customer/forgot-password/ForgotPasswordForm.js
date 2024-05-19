import * as Yup from "yup";
import { Formik, Form } from "formik";
import CustomInput from "@/shared/CustomInput";
import CustomButton from "@/shared/CustomButton";
import { useRouter } from "next/navigation";
import { ForgotPassApi } from "@/redux/slices/AuthSlic";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.Auth);

  const validValues = {
    email: "",
  };
  const errorSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
  });

  const forgotPasswordHandler = (values) => {
    console.log(values.email);
    let data = {
      email: values.email,
    };
    dispatch(ForgotPassApi({data, router}));
  };
  return (
    <Formik
      initialValues={validValues}
      validationSchema={errorSchema}
      onSubmit={forgotPasswordHandler}
    >
      {() => (
        <Form>
          <CustomInput type="email" label="Email" name="email" />
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

export default ForgotPasswordForm;
