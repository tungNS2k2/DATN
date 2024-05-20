import styled from "styled-components";
import CustomDisplayImg from "../../custom/CustomDisplayImg/CustomDisplayImg";
import imgUrls from "../../data/imgUrls/imgUrls";
const ContentHomeStyle = styled.div`

   .container{
        img{
            width: 80vh;
        height: auto;
        margin: auto;
        display: block;
        }
   }



`

const ContentHome = () =>{
    return(
        <ContentHomeStyle>
            <div className="container">
                <img src ="./img/logo/hello2.gif"/>
                
            </div>
        </ContentHomeStyle>
    )
}

export default ContentHome;