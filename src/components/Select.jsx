import React, { useState } from "react";
import "../assets/scss/components/select.scss";
import { IoIosArrowDown } from "react-icons/io";

const Select = () => {
  const [selectedOption, setSelectedOption] = useState("EN");
  const options = ["EN", "AZ", "RU"];
  const [showOptions, setShowOptions] = useState(false);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const handleSelectClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="dropdown_lang">
      <div className="dropdown__select" onClick={handleSelectClick}>
        {selectedOption}
      </div>
      <IoIosArrowDown className="dropdown__arrow" />
      <div className={`dropdown__options ${showOptions ? "show" : ""}`}>
        {options.map((option) => (
          <div
            key={option}
            className="dropdown__option"
            onClick={() => {
              handleOptionChange(option);
              setShowOptions(false);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
