import { NavLink } from "react-router-dom";
import styled from "styled-components";
const DisplayImg = styled.div`

`

const CustomDisplayImg = (props) =>{
    return(
        <DisplayImg>
             {
                props.imgUrls.map((item, index) => 
                    <NavLink key={index} to={item.url} className={({ isActive }) => isActive ? 'url-item active' : 'url-item'}>
                        <img className='img-item' src={item.url} alt={item.alt}/>
                    </NavLink>
                )
            }
        </DisplayImg>
    )
}


export default CustomDisplayImg;