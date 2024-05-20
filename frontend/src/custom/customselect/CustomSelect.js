import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const CustomSelect = ({ label, options, value, onChange, name, title }) => {
  return (
    <SelectContainer className = "custom_select">
      {/* {label && <Label htmlFor={name}>{label}</Label>} */}
      <Select id={name} name={name} value={value} onChange={onChange}>
        <option value="" disabled>{title}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default CustomSelect;
