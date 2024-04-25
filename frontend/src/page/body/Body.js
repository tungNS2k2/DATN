import styled from "styled-components";

import { Outlet } from "react-router-dom";

const HomeContent = styled.div`
    .content{
        border-left: 1px solid black;
        border-right: 1px solid black;
        min-height: 100vh;
        width; 100%;
        margin: 0 6.25rem;
        padding: 1rem 2.8rem;
       
        
    }
`
const Body = ()=>{
    return(
        <HomeContent className="homeContent">
            <div className="content">

                <Outlet />
            </div>
        </HomeContent>
    )
}
export default Body;