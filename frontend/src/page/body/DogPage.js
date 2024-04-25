import CustomDisplayImg from "../../custom/CustomDisplayImg/CustomDisplayImg"
import dogUrls from "../../data/imgUrls/dogUrls"

import styled from "styled-components"
const DogpageContainer = styled.div`
`

const DogPage = () =>{
    return(
        <DogpageContainer className ='dogPage'>
            <CustomDisplayImg imgUrls ={dogUrls} />
        </DogpageContainer>
    )
}

export default DogPage;