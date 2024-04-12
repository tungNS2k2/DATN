import { Component } from 'react';
import styles from './CustomSelect2.module.scss'

class CustomSelect2 extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }


    render(){
        const {
            valueSelected
        } = this.props;

        
        return(
            <div className={styles.divSelection}>
                <select className={styles.selectCustom}>
                    <option value={valueSelected} selected>{valueSelected}</option>
                    {this.props.children.map((item, index)=>{
                        return(
                            <option value={item.value}>{item.value}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

export default CustomSelect2;