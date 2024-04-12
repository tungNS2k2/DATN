import { NavLink} from "react-router-dom"
import styled from 'styled-components'

const GroupLink = styled.div `
    .menu-item {
        -webkit-display: flex;
        display: flex;
        padding: 20px 18px;
        color: #505152;
        text-decoration: none;
        font-size: .75rem;
        -webkit-align-items: center;
        align-items: center
    }

    .menu-item:hover {
        color: orange;
    }

    .menu-item.active {
        background-color: #e4e7ee;
    }
    .menu-item.active i{
        color: #288ad6;
    }

    .menu-item span {
        margin-left: 30px
    }
    
    .menu-item i {
        font-size: 1.1rem;
    }
`

const CustomLinks2 = (props) => {

    // console.log('props with router: ')

    // console.log(props)
    
    return (
        <GroupLink>
            {
                props.menuLinks.map((item, index) => 
                    <NavLink key={index} to={item.link} className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                    </NavLink>
                )
            }
        </GroupLink>
    )
}

export default CustomLinks2;