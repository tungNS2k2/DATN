import style from "styled-components";
import menuHeaderLinks from "../../data/menuLinksHeader/menuHeaderLinks";
import CustomLinks2 from "../../custom/customlinks/CustomLinks2"
import FormGroup from "../../custom/formgroup/FormGroup"
import CustomInput from "../../custom/custominput/CustomInput"
import CustomButton from "../../custom/custombutton/CustomButton"
import { CiSearch } from "react-icons/ci";
import CustomLink3 from "../../custom/customlinks/CustomLinks3";
import logoLink from "../../data/logoLinks/logoLink";

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
        position: absolute;
        right: 0px;
        margin: 0 6.25rem 0 0;
        display: block;
    }
    .button-search{
        position: absolute;
        top: 0;
        right: 0;
        button{
            border: none;
            background-color: rgba(255, 255, 255, 0.0);
        }
    }

`
const Header = () =>{
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

            <div className="search">
                <FormGroup className= 'formGroup' marginBottom= "0">
                    <CustomInput 
                        label='Search...'
                        sizeLabel ='0.8rem'
                        type = 'search'
                        name = 'search'
                        height='1.3rem'

                    />
                    <div className="button-search">
                        <CustomButton>
                        <CiSearch 
                        size={22}
                        color = 'rgba(0,0,0,0.5)'
                        style={{}}
                         />
                        </CustomButton>
                    </div>
                </FormGroup>
            </div>
        </HeaderStyle>
    )
}

export default Header;