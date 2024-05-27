import styled from "styled-components";

import { Outlet } from "react-router-dom";

const HomeContent = styled.div`
    .content{
        background-color: #cccccc1a;
        height: fit-content;
        border-left: 0.9px solid black;
        border-right: 0.9px solid black;
        // border-bottom: 1px solid black;
        min-height:  calc(100vh - 88px);
        // width: 100%;
        margin: 0 6.25rem;
        padding: 0 0;
       
        
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