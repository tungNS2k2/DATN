import { useNavigate } from 'react-router-dom';
import style from "styled-components";
import menuHeaderLinks from "../../data/menuLinksHeader/menuHeaderLinks";
import CustomLinks2 from "../../custom/customlinks/CustomLinks2"
import FormGroup from "../../custom/formgroup/FormGroup"
import CustomInput from "../../custom/custominput/CustomInput"
import CustomButton from "../../custom/custombutton/CustomButton"
import { CiSearch } from "react-icons/ci";
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

    .search{
        // position: absolute;
        right: 0px;
        margin: 0 6.25rem 0 4.25rem;
        display: block;
    }
    .button-search{
        position: absolute;
        top: 5px;
        right: 8px;
        button{
            border: none;
            background-color: rgba(255, 255, 255, 0.0);
        }
    }

    .formcontrol-input{
        position: relative;
        order: 1px solid rgba(0, 0, 0, .23);
        outline: none;
        border-radius: 4px;
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        // padding: 0px 14px 28px 0px;
        transition: border-color ease-in-out .2s;
    }
    .formcontrol-input label {
        top: -5px;
    }
    .formcontrol-input input{
        height: 2rem;
        border-radius: 20px;
    }

    .formcontrol-input fieldset.active {
        border-radius: 20px;
    }

    .form-group{
        position: relative;
        top: 7px;
    }

    .menu-item{
        border-radius: 30px;
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

            <div className="navHeader">
                <CustomLinks2 menuLinks ={menuHeaderLinks}/>
            </div>

            <UserMenu />
            
        </HeaderStyle>
    )
}

export default Header;