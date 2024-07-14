import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Checking = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  // Styles for the container div
  const containerStyle = {
    width: "300px", // Adjust width as needed
    height: "300px", // Adjust height as needed
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "20px",
  };

  // Custom styles for the react-select component
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      zIndex: 9999, // Ensure the dropdown appears above other elements
    }),
  };

  return (
    <div style={containerStyle}>
      <h5>Multi Select Dropdown</h5>
      <Select
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        styles={customStyles} // Apply custom styles
        isMulti // Enable multiple selection
      />
    </div>
  );
};

export default Checking;
