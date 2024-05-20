
import CustomDisplayImg from "../../../custom/CustomDisplayImg/CustomDisplayImg";

import styled from "styled-components"

import imagesActions from "../../../redux/actions/imagesAction";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
const More_Style = styled.div`


.product-home-pages {
    display: flex;
    justify-content: center;
    padding: 0px 50px;
    padding-top: 40px;
  }
  .product-home-page-btn {
    padding: 5px 10px;
    margin: 0 5px;
    .product-home:hover {
      background-color: black !important;
      color: white !important;
    }
  }
`
const More = (props) =>{

    const [page, setPage] = useState(1);
    const groupFilterForm = {
        accountId: localStorage.getItem('id'),
        category: 'OTHER',
    };
    
    useEffect(() => {
        props.showLoading(props.isLoading);
    }, [props.isLoading]);
    let total = props.imageData.totalPages;
    useEffect(() => {
        console.log(props.imageData)
        props.getall(groupFilterForm, page);
        console.log(page);
        
    }, [page]);
    
    return(
        <More_Style className = 'CatPage'>
            <CustomDisplayImg imgUrls = {props.imageData.content} />
            {/* <CustomDisplayGeneratedImage generatedImageUrls={catUrls} /> */}
    
    
        <div className="product-home-pages">
        <button
        onClick={() => setPage(page == 1 ? page : page - 1)}
        className="white-btn product-home-page-btn"
        >
        {'<'}
        </button>
        {Array.from({ length: 7 }).map((_, index) => {
        const pageNumber = index - 3 + page;
        if (pageNumber > 0 && pageNumber <= total) {
            return pageNumber === page ? (
            <button className="black-btn product-home-page-btn" key={index}>
                {pageNumber}
            </button>
            ) : (
            <button
                onClick={() => setPage(pageNumber)}
                className="white-btn product-home-page-btn"
                key={index}
            >
                {pageNumber}
            </button>
            );
        }
        return null;
        })}
        <button
        onClick={() => setPage(page == total ? page : page + 1)}
        className="white-btn product-home-page-btn"
        >
        {'>'}
        </button>
        </div>
        </More_Style>
    
    )
    }
    const mapDispatchToProps = (dispatch) =>{
    return{
        getall:  (groupFilterForm, page)=>{
            dispatch(imagesActions.getImages(groupFilterForm, page));
        }
    }
    }
    const mapStateToProp=(state) =>{
    return{
        isLoading: state.images.isLoading,
        imageData: state.images.imageData
    }
    }
    
    export default connect(mapStateToProp, mapDispatchToProps) (More);