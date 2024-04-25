import styled from "styled-components";
import CustomDisplayImg from "../../custom/CustomDisplayImg/CustomDisplayImg";
import imgUrls from "../../data/imgUrls/imgUrls";
const ContentHomeStyle = styled.div`
.hot-img-cotainer{
    position: relative;
    height: 25%;
    margin-bottom: 4rem;
    background-color: white;
    border-radius: 8px;
    padding-bottom: 2rem;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);


    .title-hot-img{
        
        height: 2rem;
        line-height: 2rem; 
        background-color: #a351a5a6;
    }
    .img-item{
        // height: auto;
        // width: 20%;
        // margin: 0.5rem 0.8rem 0.8rem 1.8rem;
        margin-left: 8px;
    }
    .view-more{
        position: absolute;
        height: 100%;
        padding-left: 95%;
        // paddidng-right: 5%;
        right: 8px;
        bottom: 0px;
        border-radius: 0 4px 0 4px;

        transition: transform 0.3s ease;
        opacity: 0.7;
        // align-items: center;
        line-height: 25;
        i{
            font-weight: 600;
            margin-left: 6px;
            font-size: 3rem;
            width: 4rem;

            
        }
    }
    .view-more:hover{
        cursor: pointer;
        color: white;
        // background-color: #cccccc60;
         background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
        transform: translateX(8px);
        opacity: 100%;

    }
}



`

const ContentHome = () =>{
    return(
        <ContentHomeStyle>
            <div className="hot-img-cotainer hot-dog-display">
                    <div className="title-hot-img">
                        Trending top Dog
                    </div>
                    <CustomDisplayImg imgUrls = {imgUrls} />
                    <div className="view-more">
                        
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>

                <div className="hot-img-cotainer hot-cat-display">
                    <div className="title-hot-img">
                        Trending top cat
                    </div>
                    <CustomDisplayImg imgUrls = {imgUrls} />
                    <div className="view-more">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                    
                </div>
        </ContentHomeStyle>
    )
}

export default ContentHome;