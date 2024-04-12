import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ImgLinks = styled.div`
    height: 100%;
    .img-item{
        img{
            width: auto;
            object-fit: cover;
        }
    }
`
const CustomLink3 = (props) =>{
    return(
        <ImgLinks>
            {
                props.imgLinks.map((item, index) =>
                    <NavLink key={index} to={item.link} className={({isActive}) => isActive ? 'images-item active' : 'image-item'} >
                        <img src={item.src} alt={item.alt}
                            style={{
                                height: props.height ? props.height : 'inherit'
                            }}
                        />
                    </NavLink>
                )
            }
        </ImgLinks>
    )
}
export default CustomLink3;