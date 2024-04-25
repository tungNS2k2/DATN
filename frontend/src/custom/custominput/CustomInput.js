// import { FastField } from 'formik';
import { useEffect, useState } from 'react';
import './CustomInput.css';

const CustomInput = (props) => {
    const [inputFocus, setInputFocus] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [value, setValue] = useState('');
    const { 
        width, 
        type, 
        uppercase, 
        large, 
        color,
        backgroundColor,
        border,
        fontSize,
        height,
        sizeLabel,
        //children,
        ...otherProps
        
    } = props;
    const _onFoucs = () => {
        setInputFocus(true)
    }

    const _onblur = () => {
        setInputFocus(false)
        if (!value) {
            setIsEmpty(true)
        }else setIsEmpty(false)
    }

    const _onChange = e => {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.value)
        setValue(e.target.value);

         props.onChangeInput(e);
        // props.onChangeInput(e.target.value);
    }
// component didUpdate
    useEffect(()=>{
        setValue(props.value)
        if(props.value) 
            setIsEmpty(false)
        else setIsEmpty(true)
    },[props.value])

    return (
        <div className='formcontrol-input'>
            <label
                className={inputFocus ? 'active' : (!isEmpty ?'not-empty' : '')}
                style={{
                    fontSize:sizeLabel ? sizeLabel : 'inherit'
                }}
            >
                {props.label}
            </label>
            <input
                className={inputFocus ? 'active' : (!isEmpty ?'not-empty' : '')}
                type={props.type}
                onFocus={_onFoucs}
                onBlur={_onblur}
                value={value}
                name={props.name}
                onChange={_onChange}
                style={{
                    width: width ? width : 'inherit',
                    height: height ? height: 'inherit',
                    textTransform: uppercase ? 'uppercase' : 'none',
                    color: color,
                    cursor: 'auto',
                    backgroundColor: backgroundColor,
                    border: border,
                    fontSize: fontSize
                }}
                {...otherProps}
            />
            <fieldset className={inputFocus ? 'active' : (!isEmpty ?'not-empty' : '')}>
                <legend>{props.label}</legend>
            </fieldset>
        </div>
    )
}

export default CustomInput;



