import { Outlet } from "react-router-dom";
import Body from "./body/Body";
import Header from "./header/Header";
import style from 'styled-components';

const HomeStyles = style.div`
    height: 100vh;
    .header{
        position: fixed;
        top: 0;
        z-index: 1000000;
    }

    .homeContent{
        position: relative;
        top:88px;
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