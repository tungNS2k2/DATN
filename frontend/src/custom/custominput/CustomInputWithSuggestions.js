import React, { useState } from 'react';
import styled from 'styled-components';
import CustomInput from './CustomInput'; // Điều chỉnh đường dẫn nếu cần

const InputContainer = styled.div`
  position: relative;
`;

const SuggestionsBox = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 10;
`;

const SuggestionItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CustomInputWithSuggestions = ({ label, type, name, placeholder, onChangeInput, value, suggestions }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    onChangeInput(e);
    if (e.target.value.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onChangeInput({ target: { name, value: suggestion } });
    setShowSuggestions(false);
  };

  return (
    <InputContainer>
      <CustomInput
        label={label}
        type={type}
        name={name}
        placeholder={placeholder}
        onChangeInput={handleInputChange}
        value={value}
        autoComplate = "off"
      />
      {showSuggestions && suggestions.length > 0 && (
        <SuggestionsBox>
          {suggestions.slice(0, 5).map((suggestion, index) => (
            <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsBox>
      )}
    </InputContainer>
  );
};

export default CustomInputWithSuggestions;
