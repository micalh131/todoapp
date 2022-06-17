import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface DropdownProps {
  icon?: string;
  options: Array<Option>;
}

export const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropbownClick = (option: Option) => {
    if (option.value === "Edit") {
      setIsOpen(false);
    }
    option.onClick();
  };
  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={toggleDropdown}>
        <BsThreeDotsVertical></BsThreeDotsVertical>
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          {options.map((option: Option) => {
            return (
              <button
                key={option.color}
                className="dropdown-list-btn"
                onClick={() => dropbownClick(option)}
              >
                {option.value}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
