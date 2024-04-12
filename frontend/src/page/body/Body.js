import styled from "styled-components";
import CustomDisplayImg from "../../custom/CustomDisplayImg/CustomDisplayImg";
import imgUrls from "../../data/imgUrls/imgUrls";

const HomeContent = styled.div`
    .content{
        background-color: #ccc;
        min-height: 100vh;
        width; 100%;
        margin: 0 6.25rem;
        padding: 1rem 2.8rem;
        
        .hot-img-cotainer{
            position: relative;
            height: 25%;
            margin-bottom: 4rem;
            background-color: white;
            border-radius: 4px;

            .view-more{
                //position: absolute;
                // right: 7rem;
                // top: 1rem;
            }
        }

        a{
        
        }
        .img-item{
            border:solid 0.8px red;
            height: auto;
            width: 20%;
            margin: 0.5rem 0.8rem 0.8rem 1.8rem;
        }
        
    }
`
const Body = ()=>{
    return(
        <HomeContent className="homeContent">
            <div className="content">

                <div className="hot-img-cotainer hot-dog-display">
                    <div className="view-more">view more</div>
                    <CustomDisplayImg imgUrls = {imgUrls} />
                </div>

                <div className="hot-img-cotainer hot-cat-display">
                    <div className="view-more">view more</div>
                    <CustomDisplayImg imgUrls = {imgUrls} />
                    
                </div>
            </div>
        </HomeContent>
    )
}
export default Body;