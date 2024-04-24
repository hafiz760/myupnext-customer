import * as Yup from "yup";
import { Formik, Form } from "formik";

import CustomInput from "@/shared/CustomInput";
import CustomButton from "@/shared/CustomButton";
import { useRouter } from "next/navigation";

const SeachForm = () => {
  const router = useRouter();

  const validValues = {
    from: "Dubai Mall Fashion Avenue",
    to: "Dubai Mall Fashion Avenue",
    dateRange: "",
  };
  const errorSchema = Yup.object().shape({
    from: Yup.string().required("From location is required"),
    to: Yup.string().required("To location is required"),
    dateRange: Yup.string().required("Date range is required"),
  });

  const searchHandler = (values) => {
    console.log({ values });
    router.push("/search");
  };

  return (
    <Formik
      initialValues={validValues}
      validationSchema={errorSchema}
      onSubmit={searchHandler}
    >
      {() => (
        <Form>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4">
            <CustomInput
              type="text"
              label="From"
              name="from"
              customClass="grow w-full"
            />
            <CustomInput
              type="text"
              label="To"
              name="to"
              customClass="grow  w-full"
            />
            <CustomInput
              type="date"
              label="Date Range"
              name="dateRange"
              customClass="grow  w-full"
            />
            <CustomButton type="submit" style={{ flexGrow: "1" }} colored>
              Search
            </CustomButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SeachForm;
