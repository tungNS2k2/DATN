import { useNavigate } from 'react-router-dom';
import style from "styled-components";
import menuHeaderLinks from "../../data/menuLinksHeader/menuHeaderLinks";
import CustomLinks2 from "../../custom/customlinks/CustomLinks2"
import CustomLink3 from "../../custom/customlinks/CustomLinks3";
import logoLink from "../../data/logoLinks/logoLink";

import UserMenu from '../menuuser/MenuUser';

const HeaderStyle = style.div`
    display: flex;
    width: 100%;
    height: 88px;
    margin-bottom: 4px;
    padding: 0 0.8rem;
    align-items: center;
    border-bottom: 1px solid red;
    background-color: #f7f7f7;
    z-index: 10;
    justify-content: space-between;
    .logo{
        margin: 0  5.5rem;
        height: 100%;

        img{
            border: solid 1px #ccc;
            border-radius: 50%;
        }
    }
    .navHeader{
        div{
            display: flex;
            a{
                font-size: 1rem;
            }
        }
    }

    .userMenu{
        // position: absolute;
        // right: 10%;
        margin-right: 4.4rem;
        
    }

    .div-container{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    
`
const Header = () =>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/profile');
    };
    return(
        <HeaderStyle className="header">
            
                <div className="logo">
                    <CustomLink3 imgLinks ={logoLink}
                        height='100%'
                    />
                    
                </div>

               <div className='div-container'>
                    <div className="navHeader">
                            <CustomLinks2 menuLinks ={menuHeaderLinks}/>
                        </div>
                    

                    <UserMenu className="userMenu" />
               </div>
            
        </HeaderStyle>
    )
}

export default Header;