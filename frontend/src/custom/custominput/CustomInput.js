import React, { useEffect, useState } from 'react';

import './CustomInput.css';

const CustomInput = (props) => {
    const [inputFocus, setInputFocus] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [value, setValue] = useState('');
    const isEditable = props.editable === undefined ? true : props.editable;

    // Use a default value if state.generatedImage or keywords do not exist
    

    const handleFocus = () => {
        setInputFocus(true);
    };

    const handleBlur = () => {
        setInputFocus(false);
        setIsEmpty(!value);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        props.onChangeInput(e);
        
    };

    useEffect(() => {
        setValue(props.value || '');
        setIsEmpty(!props.value);
    }, [props.value]);

    const customStyles = props.styles || {};

    return (
        <div className='formcontrol-input'>
            <label className={inputFocus ? 'active' : (!isEmpty ? 'not-empty' : '')}>
                {props.label}
            </label>
            <input
                style={customStyles}
                className={inputFocus ? 'active' : (!isEmpty ? 'not-empty' : '')}
                type={props.type}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
                name={props.name}
                onChange={handleChange}
                readOnly={!isEditable}
                autoComplete="off"
            />
           
            <fieldset className={inputFocus ? 'active' : (!isEmpty ? 'not-empty' : '')}>
                <legend>{props.label}</legend>
            </fieldset>
        </div>
    );
};



export default CustomInput;
