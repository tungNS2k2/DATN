import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContentHomeStyle = styled.div`
  .container {
    
    position: relative;
    width: 30%;
    margin: auto;
    display: block;

    img {
      width: 100%;
      height: auto;
    }

    .overlay {
      position: relative;
      top: 40px;
      left: -60px;
      width: 150%;
      height: 100px;
      border-radius: 15px;
      background-color: rgb(251 214 137);
      opacity: 0.8;
      transition: opacity 0.5s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      cursor: pointer;

      &:hover {
        opacity: 1;
        color: red;
      }

      i{
        margin: 0 8px;
      }
    }
  }
`;

const ContentHome = () => {
const navigate = useNavigate();

  const handleClick = () => {
    navigate("/generated")
  };

  return (
    <ContentHomeStyle className="content-homePage">
      <div className="container">
        <img src="./img/logo/hello2.gif" alt="Hello" />
        <div className="overlay" onClick={handleClick}>
        <i className="fa-solid fa-paw"></i>
          Welcome to the website, create images now
          <i className="fa-solid fa-paw"></i>
        </div>
      </div>
    </ContentHomeStyle>
  );
};

export default ContentHome;
