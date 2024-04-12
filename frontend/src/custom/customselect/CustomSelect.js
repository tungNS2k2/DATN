import { Component } from 'react';
import Styles from './CustomSelect.module.scss'
class CustomSelect extends Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }


    render(){
        const {
            action,
            method,
            width,
            height,
            color,
            nameSelect,
            id,
            sWidth,
            sColor,
            sHeight,
            value,
            sFontSize,
            ...otherProps
        } = this.props;
        return(
            <form className={Styles.FormSelect} action={action} method={method}
            style={{
                width: width,
                height: height,
                color: color,
                cursor: 'pointer',
                
            }}
        >
            <select className={Styles.select} name={nameSelect} id = {id}
                style={{
                    fontSize: sFontSize,
                    width: sWidth,
                    color: sColor,
                    height: sHeight
                }}
            >
                {/* {
                this.props.children.map((item)=>{
                    return(
                        <option value={value}>{item.nameOption}</option> 
                    )
                })
            } */}

            <option value={value}>{this.props.children}</option> 
            </select>
        </form>
        )
    }
}
export default CustomSelect;