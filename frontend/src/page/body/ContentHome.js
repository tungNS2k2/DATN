import styled from "styled-components";
const ContentHomeStyle = styled.div`

   .container{
        img{
            width: 50%;
        height: auto;
        margin: auto;
        display: block;
        }
   }



`

const ContentHome = () =>{
    return(
        <ContentHomeStyle className="content-homePage">
            <div className="container">
                <img src ="./img/logo/hello2.gif"/>
                
            </div>
        </ContentHomeStyle>
    )
}

export default ContentHome;