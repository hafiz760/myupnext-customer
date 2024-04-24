import { ErrorMessage, useField } from 'formik';

const CustomInput = ({ label, customClass, fieldClass, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={`mb-3 ${customClass && `${customClass}`}`}>
            <fieldset className={`border p-1 text-center rounded-full ${fieldClass && `${fieldClass}`} ${meta.touched && meta.error && 'border-red-500'}`}>
                <legend className={`text-[13px] text-start font-semibold ${meta.touched && meta.error && 'text-red-500'}`}>{label}</legend>
                <input className={`mb-1 w-[calc(100%-25px)] border-none focus:border-none focus:outline-none rounded-md`} {...field} {...props} autoComplete="off" />
            </fieldset>
            <ErrorMessage component="small" name={field.name} className="text-red-500 text-xs italic" />
        </div>
    )
}

export default CustomInput;