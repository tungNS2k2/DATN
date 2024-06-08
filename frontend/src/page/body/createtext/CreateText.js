import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import CustomInput from '../../../custom/custominput/CustomInput';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import imageActions from '../../../redux/actions/generatedImageActions';
import CustomModal from '../../../custom/custommodel/CustomModel'; // Import modal component

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .img-box {
    overflow: hidden;
    width: 400px;
    border-radius: 10px;
    position: relative;

    img {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-bottom: 1px solid black;
      border-radius: 10px;
      transition: transform 0.7s ease;
    }

    .title {
      position: absolute;
      bottom: 0px;
      font-size: 13px;
      color: white;
      font-family: serif;
      display: none;
      padding: 4px 0px 8px 4px;
      width: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 1) 100%);
      min-height: 24px;
    }

    span {
      overflow: hidden;
      width: 80%;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;
      font-size: 20px;
      text-align: center;
    }

    .fa-heart {
      position: absolute;
      bottom: 4px;
      right: 2px;
      margin-right: 4px;
      font-size: 16px;
      color: white;
    }

    img:hover {
      transform: scale(1.2);
    }

    img:hover + .title {
      display: block;
    }
  }

  &:hover .title {
    display: block;
  }
`;

const FormInput = styled.form`
  height: 70px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid #ff0000;
  margin-bottom: 20px;
  width: 100%;
  justify-content: flex-end;

  span{
    height: 40px;
    line-height: 40px;
    /* align-items: center; */
    /* margin-right: 50%; */
    position: absolute;
    left: 0px;
    border: 1px solid;
    border-radius: 20px;
    padding: 0 14px;
    color: white;
    background-color: red;
    margin-left: 6rem;
    cursor: pointer;
    &:hover{
        background-color: #d80000;
    }
  }

  .err-message {
    position: relative;
    left: 38%;
    color: red;
  }

  .formcontrol-input {
    margin-right: 16px;
  }

  .formcontrol-input input {
    height: 2.2rem;
    width: 20rem;
    border-radius: 20px;
  }

  .formcontrol-input fieldset.active {
    border-radius: 20px;
  }

  .formcontrol-input label {
    top: -5px;
  }

  .formcontrol-input fieldset {
    border-radius: 20px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  margin-right: 28px;

  &:hover {
    background-color: #000;
  }
`;

const OutputDiv = styled.div`
  margin-top: 20px;

  img {
    width: 100%;
    height: auto;
  }
`;

// Component
const CreateText = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageBase64, setImageBase64] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState('');

  useEffect(() => {
    console.log(props.predictData[0]);
  }, [props.predictData]);

  useEffect(() => {
    props.showLoading(props.isLoading);
  }, [props.isLoading]);

  useEffect(() => {
    return () => {
      props.resetState();
    };
  }, []);

  useEffect(() => {
    if (props.predictData.length > 0) {
      props.createImage(props.predictData[1]);
    }
  }, [props.predictData]);

  const formik = useFormik({
    initialValues: { input_text: '' },
    validationSchema: Yup.object({
      input_text: Yup.string().required('Required'),
    }),
    onSubmit: async (values, actions) => {
      try {
        await props.resetState();
        await props.XLNNTN(values.input_text);
      } catch (error) {
        console.error('Error during form submission:', error);
      }
    },
  });

  const handleImageClick = (imageUrl, title) => {
    setSelectedImage(imageUrl);
    setSelectedImageTitle(title);
  };
  const openNewTab = () => {
    // Đường dẫn URL bạn muốn mở trong tab mới
    const url = 'https://gist.github.com/yrevar/942d3a0ac09ec9e5eb3a';
    
    // Mở tab mới
    window.open(url, '_blank');
};

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageTitle('');
  };

  return (
    <Container>

      <FormInput onSubmit={formik.handleSubmit} className="form_input">
        <span onClick = {openNewTab}>
            Types of photos that the website supports creating - see here
        </span>
        <div>
          <CustomInput
            label="Pet name"
            type="text"
            name="input_text"
            placeholder="Nhập chữ"
            onChangeInput={formik.handleChange}
            value={formik.values.input_text}
            showSuggestions={true}
          />
          {formik.errors.input_text && formik.touched.input_text && (
            <div className="err-message">{formik.errors.input_text}</div>
          )}
        </div>
        <SubmitButton type="submit">Create</SubmitButton>
      </FormInput>
      <OutputDiv>
        {props.imageByText.imageBase64 && (
          <StyledImageContainer>
            <div className="img-box" onClick={() => handleImageClick(`data:image/png;base64,${props.imageByText.imageBase64}`, props.predictData[0])}>
              <img src={`data:image/png;base64,${props.imageByText.imageBase64}`} alt={props.predictData[0]} />
              <div className="title">
                <span>{props.predictData[0]}</span>
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>
          </StyledImageContainer>
        )}
      </OutputDiv>
      {selectedImage && (
        <CustomModal imageUrl={selectedImage}  onClose={closeModal} />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.generatedImage.isLoading,
    predictData: state.generatedImage.predictData,
    imageByText: state.generatedImage.imageByText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    XLNNTN: (text) => {
      return dispatch(imageActions.XLNNTN(text));
    },
    createImage: (ntype) => {
      return dispatch(imageActions.CreateImageByText(ntype));
    },
    resetState: () => {
      return dispatch(imageActions.resetState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateText);
