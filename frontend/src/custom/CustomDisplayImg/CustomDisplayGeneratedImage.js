import React from 'react';
import styled from 'styled-components';

const ContainerImageGenerated = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  flex-direction: row; /* Sắp xếp các phần tử con theo hàng ngang */

  .img-box {
    overflow: hidden;
    width: 256px; /* Đảm bảo rộng của hình ảnh */
    border-radius: 10px;
    position: relative;
    cursor: pointer;

    img {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
      width: 100%; /* Đảm bảo rằng hình ảnh lấp đầy đúng kích thước */
      height: auto;
      object-fit: cover;
      border-bottom: 1px solid black;
      border-radius: 10px;
      transition: transform 0.7s ease;
    }

    &.selected {
      border: 2px solid blue; /* Thiết lập đường viền khi được chọn */
    }
  }
`;

const CustomDisplayGeneratedImage = ({ generatedImageUrls, selectedPublicIds, onImageSelect }) => {
  const handleImageClick = (publicId) => {
    onImageSelect(publicId);
  };

  return (
    <ContainerImageGenerated>
      {generatedImageUrls.map((item, index) => (
        <div key={index} className={`img-box ${selectedPublicIds.includes(item.publicId) ? 'selected' : ''}`} onClick={() => handleImageClick(item.publicId)}>
          <img src={item.url} alt={`Generated ${index}`} />
        </div>
      ))}
    </ContainerImageGenerated>
  );
};

export default CustomDisplayGeneratedImage;
