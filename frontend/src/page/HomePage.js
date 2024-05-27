import { Outlet } from "react-router-dom";
import Body from "./body/Body";
import Header from "./header/Header";
import style from 'styled-components';

const HomeStyles = style.div`
    height: 100%;
    .header{
        position: fixed;
        top: 0;
        z-index: 100;
    }

    .homeContent{
        position: relative;
        top:88px;
        height: 100%;
        width: 100%;
    }
`
const HomePage = () =>{
    return(
        <HomeStyles className = "Homepage">
            <Header />
            <Body />
            {/* <Outlet /> */}
        </HomeStyles>
    )
}

export default HomePage;