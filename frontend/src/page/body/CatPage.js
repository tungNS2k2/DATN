import CustomDisplayImg from "../../custom/CustomDisplayImg/CustomDisplayImg";
import styled from "styled-components";
import imagesActions from "../../redux/actions/imagesAction";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const CatPageContainer = styled.div`
    height: 100%;
    // border-left: 1px solid black;
    // border-right: 1px solid black;
    .page {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
    .product-home-pages{
      text-align: center;
    }
    .product-home-page-btn {
      padding: 8px 12px;
      margin: 0 5px;
      border: 1px solid #ddd;
      border-radius: 5px;
      cursor: pointer;
      background-color: #fff;
      color: #000;
    }
  
    .product-home-page-btn:hover {
      background-color: #f0f0f0;
    }
  
    .product-home-page-btn.active {
      background-color: #007bff;
      color: #fff;
      border-color: #007bff;
    }
  
    .black-btn {
      background-color: #007bff;
      color: #fff;
      border: 1px solid #007bff;
    }
  
    .white-btn {
      background-color: #fff;
      color: #000;
      border: 1px solid #ddd;
    }
`;

const CatPage = (props) => {
  const [page, setPage] = useState(1);
  const groupFilterForm = {
    accountId: localStorage.getItem("id"),
    category: "CAT",
  };

  useEffect(() => {
    props.showLoading(props.isLoading);
  }, [props.isLoading]);

  let total = props.imageData.totalPages;

  useEffect(() => {
    props.getall(groupFilterForm, page);
  }, [page]);

  return (
    <CatPageContainer className="CatPage">
      <CustomDisplayImg imgUrls={props.imageData.content} />

      <div className="product-home-pages">
        <button
          onClick={() => setPage(page === 1 ? page : page - 1)}
          className="white-btn product-home-page-btn"
        >
          {"<"}
        </button>
        {Array.from({ length: 7 }).map((_, index) => {
          const pageNumber = index - 3 + page;
          if (pageNumber > 0 && pageNumber <= total) {
            return pageNumber === page ? (
              <button
                className="black-btn product-home-page-btn active"
                key={index}
              >
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
            onClick={() => setPage(page === total ? page : page + 1)}
            className="white-btn product-home-page-btn"
            >
            {">"}
            </button>
        </div>
    </CatPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getall: (groupFilterForm, page) => {
      dispatch(imagesActions.getImages(groupFilterForm, page));
    },
  };
};

const mapStateToProp = (state) => {
  return {
    isLoading: state.images.isLoading,
    imageData: state.images.imageData,
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(CatPage);
