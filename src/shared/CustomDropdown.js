import { ErrorMessage, useField } from "formik";

function CustomDropdown({ label, customClass, fieldClass, items, ...props }) {
  const [field, meta, helpers] = useField(props);

  const handleSelectChange = (e) => {
    const { value } = e.target;
    helpers.setValue(value);
  };

  return (
    <div className={`mb-3 ${customClass && `${customClass}`}`}>
      <fieldset
        className={`border p-1 text-center rounded-full ${
          fieldClass && `${fieldClass}`
        } ${meta.touched && meta.error && "border-red-500"}`}
      >
        <legend
          className={`text-[13px] text-start font-semibold ${
            meta.touched && meta.error && "text-red-500"
          }`}
        >
          {label}
        </legend>
        <div
          className={`mb-1 w-[calc(100%-25px)] border-none focus:border-none focus:outline-none rounded-md`}
        >
          <select
            value={field.value}
            onChange={handleSelectChange}
            className="w-full h-full outline-none border-none"
          >
            {items &&
              items?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
      </fieldset>
      <ErrorMessage
        component="small"
        name={field.name}
        className="text-red-500 text-xs italic"
      />
    </div>
  );
}

export default CustomDropdown;
