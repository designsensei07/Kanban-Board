import React, { useState } from 'react';
// Import your CSS file for styling

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedValue ? selectedValue : 'Select an option'}
      </button>
      {isOpen && (
        <div className="dropdown-list">
          <div onClick={() => handleItemClick('Option 1')}>Option 1</div>
          <div onClick={() => handleItemClick('Option 2')}>Option 2</div>
          <div onClick={() => handleItemClick('Option 3')}>Option 3</div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
