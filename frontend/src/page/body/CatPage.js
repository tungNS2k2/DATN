import styled from "styled-components";
import catUrls from "../../data/imgUrls/catUrls";
import CustomDisplayImg from "../../custom/CustomDisplayImg/CustomDisplayImg";
import CustomDisplayGeneratedImage from "../../custom/CustomDisplayImg/CustomDisplayGeneratedImage";

const CatPageContainer = styled.div`
    .catPage{
        
    }
    .CustomDisplayIMG{
    }
`
const CatPage = () =>{
    return(
        <CatPageContainer className = 'CatPage'>
            <CustomDisplayImg imgUrls = {catUrls} />
            {/* <CustomDisplayGeneratedImage generatedImageUrls={catUrls} /> */}
        </CatPageContainer>
    )
}
export default CatPage;