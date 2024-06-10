import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import PlainCard from "@/shared/PlainCard";
import { Formik } from "formik";
import CustomInput from "@/shared/CustomInput";
import * as Yup from "yup";
import CustomButton from "@/shared/CustomButton";

const steps = [{}, {}, {}, {}];
const AgentForm = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const validationSchemas = [
    Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
      c_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    Yup.object().shape({
      full_name: Yup.string().required("Required"),
      c_email: Yup.string().email("Invalid email").required("Required"),
      phone_number: Yup.string().required("Required"),
      language: Yup.string().required("Required"),
    }),
    Yup.object().shape({
      travel_agency_license: Yup.mixed().required("Required"),
      company_insurance: Yup.mixed().required("Required"),
      address_proof: Yup.string().required("Required"),
      document_file: Yup.mixed().required("Required"),
    }),
    Yup.object().shape({
      buisness_name: Yup.string().required("Required"),
      buisness_city: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      web_url: Yup.string().url("Invalid URL").required("Required"),
      merchent_code: Yup.string().required("Required"),
      estd_date: Yup.date().required("Required"),
      services: Yup.string().required("Required"),
    }),
  ];
  const initialValues = {
    email: "",
    password: "",
    c_password: "",
    c_email: "",
    phone_number: "",
    language: "",
    full_name: "",
    travel_agency_license: "",
    company_insurance: "",
    address_proof: "",
    document_file: "",
    buisness_name: "",
    buisness_city: "",
    country: "",
    web_url: "",
    merchent_code: "",
    estd_date: "",
    services: "",
  };
  return (
    <div className={`relative w-full flex justify-end p-4 sm:pr-[50px]`}>
      <PlainCard customClass="w-[400px]">
        <Steps
          current={current}
          items={steps}
          onChange={(e) => console.log(e)}
        />
        <div>
          <div className="flex flex-col justify-start my-5">
            <span className="text-[#EE5931]">Become a partner</span>
            <h1 className=" text-lg font-bold">
              {current === 0
                ? "Travel Agent Registration"
                : current === 1
                ? "Travel Agent Details"
                : current === 2
                ? "Company Documents"
                : "Company Details"}
            </h1>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemas[current]}
            onSubmit={(values) => {
              if (current < steps.length - 1) {
                next();
              } else {
                message.success("Processing complete!");
              }
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                {current === 0 ? (
                  <div>
                    <CustomInput type="email" label="Email" name="email" />
                    <CustomInput
                      type="password"
                      label="Password"
                      name="password"
                    />
                    <CustomInput
                      type="password"
                      label="Confirm Password"
                      name="c_password"
                    />
                  </div>
                ) : current === 1 ? (
                  <div>
                    <CustomInput
                      type="text"
                      label="Full Name"
                      name="full_name"
                    />
                    <CustomInput
                      type="email"
                      label="Company Email"
                      name="c_email"
                    />
                    <CustomInput
                      type="tel"
                      label="Phone Number"
                      name="phone_number"
                    />
                    <CustomInput type="text" label="Language" name="language" />
                  </div>
                ) : current === 2 ? (
                  <div>
                    <CustomInput
                      type="file"
                      label="Travel Agency License"
                      name="travel_agency_license"
                    />
                    <CustomInput
                      type="file"
                      label="Company Insurance"
                      name="company_insurance"
                    />
                    <div>
                      <h1 className=" font-bold text-lg mb-1 mt-3">
                        Proof of Address
                      </h1>
                      <CustomInput
                        type="text"
                        label="Select Document Type for Proof of Address"
                        name="address_proof"
                      />
                      <CustomInput
                        type="file"
                        label="Document File"
                        name="document_file"
                      />
                    </div>
                  </div>
                ) : current === 3 ? (
                  <div>
                    <CustomInput
                      type="text"
                      label="Buisness Name"
                      name="buisness_name"
                    />
                    <div className="flex flex-row gap-2">
                      <CustomInput
                        type="text"
                        label="Buisness City"
                        name="buisness_city"
                      />
                      <CustomInput type="text" label="Country" name="country" />
                    </div>
                    <CustomInput
                      type="text"
                      label="Website url"
                      name="web_url"
                    />
                    <CustomInput
                      type="text"
                      label="Merchent Code"
                      name="merchent_code"
                    />
                    <div className="flex flex-row gap-2">
                      <CustomInput
                        type="date"
                        label="Date of estd"
                        name="estd_date"
                        customClass="w-full"
                      />
                      <CustomInput
                        type="text"
                        label="Services"
                        name="services"
                        customClass="w-full"
                      />
                    </div>
                  </div>
                ) : null}
                <CustomButton type="submit" style={{ width: "100%" }} colored>
                  Next
                </CustomButton>
                {/* <div
                  style={{
                    marginTop: 24,
                  }}
                >
                  {current === steps.length - 1 && (
                    <Button
                      type="submit"
                      className="w-full bg-[#EE5931] text-white rounded-full h-[45px] text-center mt-2 hover:!border-[#EE5931] hover:!text-white"
                    >
                      Submit
                    </Button>
                  )}
                  {current < steps.length - 1 && (
                    <Button
                      type="button"
                      onClick={() => next()}
                      className="w-full bg-[#EE5931] text-white rounded-full h-[45px] text-center hover:!border-[#EE5931] hover:!text-white"
                    >
                      Next
                    </Button>
                  )}
                  {current > 0 && (
                    <Button
                      type="button"
                      onClick={() => prev()}
                      className="w-full bg-[#EE5931] text-white rounded-full h-[45px] text-center mt-2 hover:!border-[#EE5931] hover:!text-white"
                    >
                      Previous
                    </Button>
                  )}
                </div> */}
              </form>
            )}
          </Formik>
        </div>
      </PlainCard>
    </div>
  );
};

export default AgentForm;
