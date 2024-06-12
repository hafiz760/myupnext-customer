import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const FlightLocationsAutoComplete = ({
  placeholder,
  onSelect,
  initialValue,
  label,
}) => {
  return (
    <div className="mb-3">
      <label className={`text-[13px] text-start font-semibold `}>{label}</label>
      <GooglePlacesAutocomplete
        apiOptions={{ types: ["(cities)"] }}
        selectProps={{
          placeholder,
          onChange: onSelect,
          defaultInputValue: initialValue,
          classNamePrefix: "flight-location-input",
        }}
        autocompletionRequest={{
          types: ["airport"],
        }}
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
      />
    </div>
  );
};

export default FlightLocationsAutoComplete;
