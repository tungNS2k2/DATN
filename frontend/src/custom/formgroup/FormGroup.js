import './FormGroup.css'

const FormGroup = (props, className) => {
    return (
        <div className={`.form-group ${className}`}
            style={{ width: props.width ? props.width : '100%',
             marginBottom: props.marginBottom ? props.marginBottom : 'inherit'
        }}
        >
            {props.children}
        </div>
    )
}

export default FormGroup;