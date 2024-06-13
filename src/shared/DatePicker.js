import React from "react";
import { DatePicker, Space } from "antd";

const DatePickerInput = ({ label, defaultValue, setValue, placeholder }) => {
  const onChange = (date, dateString) => {
    setValue(dateString);
  };
  return (
    <div className={`mb-3`}>
      <label className={`text-[13px] text-start font-semibold `}>
        Select Date
      </label>
      <Space direction="vertical" className="block">
        <DatePicker
          onChange={onChange}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`flex items-center mb-1 w-full text-[16px] h-[45px] text-black rounded-full border border-primary focus:border-none focus:outline-none hover:border-primary focus:border-primary`}
        />
      </Space>
    </div>
  );
};

export default DatePickerInput;
