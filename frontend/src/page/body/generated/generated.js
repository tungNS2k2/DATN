import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomSelect from '../../../custom/customselect/CustomSelect';
import styled from 'styled-components';
import CustomInput from '../../../custom/custominput/CustomInput';
import imageActions from '../../../redux/actions/generatedImageActions';
import CustomDisplayGeneratedImage from '../../../custom/CustomDisplayImg/CustomDisplayGeneratedImage';
import imagesActions from '../../../redux/actions/imagesAction';

const Generated_Style = styled.div`
  position: relative;
  top:0;
  right: 0;
  .loading-container{
    width: 100%

  }

  .form-nav{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    .formcontrol-input{
        top: 16px;
        margin-right: 2rem;
    }
    .formcontrol-input input{
        height: 2.2rem;
        border-radius: 20px;
    }
    .btn-generated{
        position: relative;
        top: 16px;
        height: 2.2rem;
        padding: 6px;
        border-radius: 20px;
        background-color: #ffa50000;
        border: 0.5px solid #ccc;
    }

    .div-custom{
        margin-right: 2rem;
    }
    .formcontrol-input fieldset.active {
        border-radius: 20px;
    }
    .formcontrol-input label {
        top: -5px;
    }
    .btn-generated:hover{
        background-color: #00eeff66;
        cursor: pointer;
    }
  }
`;

const Generated = (props) => {
  const [generatedOnce, setGeneratedOnce] = useState(false);
  const [selectedPublicIds, setSelectedPublicIds] = useState([]);
  const [formDataList, setFormDataList] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [nameImage, setNameImage] = useState('');
  const [category, setCategory] = useState('');
  const [accountId, setAccountId] = useState(localStorage.getItem('id'));

  const formik = useFormik({
    initialValues: {
      size: '',
      category: '',
      pair: null,
      folder: '',
      n: ''
    },
    validationSchema: Yup.object({
      category: Yup.string().required('Required!'),
      size: Yup.string().required('Required!'),
      n: Yup.number()
      .integer('Must be an integer')
      .min(1, 'Minimum 1 image')
      .max(10, 'Maximum 10 images')
      .required('Required!')
    }),
    onSubmit: values => {
        props.deleteAllImages("samples")
        const { n, size, folder, pair } = values;
        props.generateImage(n, size, "samples", pair[0], pair[1]);
        // console.log(props.generatedImageUrls);
    }
  });

  useEffect(()=>{
    props.showLoading(props.isLoading);
  }, [props.isLoading]);

  useEffect(() => {
    if (props.generatedImageUrls.length > 0 && !generatedOnce) {
      setGeneratedOnce(true);
    }
    // props.showImage('samples')
  }, [props.generatedImageUrls]);

  const handleImageSelect = (publicId) => {
    if (selectedPublicIds.includes(publicId)) {
      setSelectedPublicIds(selectedPublicIds.filter(id => id !== publicId));
      setFormDataList([...formDataList, selectedPublicIds.filter(id => id !== publicId)]);
    } else {
      setSelectedPublicIds([...selectedPublicIds, publicId]);
    }
  };
  
  const handleMoveImages = () => {
    props.moveImagesToFolder(selectedPublicIds, formik.values.folder);
    setSelectedPublicIds([]); // Clear selected images after moving
  };

  

  


  useEffect(() => {
    if (selectedPublicIds.length > 0) {
      const newDataList = selectedPublicIds.map(publicId => {
        const image = props.generatedImageUrls.find(img => img.publicId === publicId);
        return {
          imageUrl: image ? image.url : "",
          nameImage: `Image_${Date.now()}`,
          category: formik.values.folder, // Sử dụng tên thư mục thực tế
          accountId: accountId
        };
      });
      setFormDataList(newDataList);
    }
  }, [selectedPublicIds, props.generatedImageUrls, accountId, formik.values.folder,]);

  const handleCreateImages = () => {
    formDataList.forEach(item => {
      const { publicId, ...rest } = item; // Loại bỏ publicId
      console.log("Sending data: ", rest);
      props.addImages(rest);
    });
  };

  // const handleCreateImages = () => {
    
  //   formDataList.forEach((item) => {
  //     const { publicId, ...rest } = item; // Loại bỏ publicId
  //     console.log("oke", item);
  //     props.addImages(rest);
  //   });};
  
  const handleMoveAndCreateImages = () => {
    handleMoveImages();
    handleCreateImages();
  };


  const handleCategoryChange = (event) => {
    const selectedOption = options2.find(option => option.value === event.target.value);
    formik.setFieldValue('category', event.target.value);
    formik.setFieldValue('pair', selectedOption ? selectedOption.pair : null);
    formik.setFieldValue('folder', selectedOption ? selectedOption.folder : '');
  };

  const options1 = [
    { value: '128', label: '128' },
    { value: '256', label: '256' },
    { value: '512', label: '512' }
  ];

  const options2 = [
    { value: 'dog', label: 'DOG', pair: [131, 151], folder: 'DOG' },
    { value: 'cat', label: 'CAT', pair: [281, 13], folder: 'CAT' },
    { value: 'more', label: 'MORE', pair: [5, 6], folder: 'ANOTHER' }
  ];

  return (
    <Generated_Style>
      <form className="form-nav" onSubmit={formik.handleSubmit}>
        <div className="div-custom">
          <CustomSelect
            label="Size"
            name="size"
            title="choose size"
            options={options1}
            value={formik.values.size}
            onChange={formik.handleChange}
          />
          {formik.errors.size && formik.touched.size && (
            <div style={{ color: 'red' }}>{formik.errors.size}</div>
          )}
        </div>

        <div className="div-custom">
          <CustomSelect
            label="Category"
            name="category"
            title="Choose category"
            options={options2}
            value={formik.values.category}
            onChange={handleCategoryChange}
          />
          {formik.errors.category && formik.touched.category && (
            <div style={{ color: 'red' }}>{formik.errors.category}</div>
          )}
        </div>

        <div className="div-custom">
          <CustomInput
            label="Number of Images"
            type="text"
            name="n"
            value={formik.values.n}
            onChangeInput={formik.handleChange}
          />
          {formik.errors.n && formik.touched.n && (
            <div className='err-message' style={{ color: 'red' }}>{formik.errors.n}</div>
          )}
        </div>

        <button className='btn-generated' type="submit">Submit</button>
        <button className='btn-generated' onClick={handleMoveAndCreateImages} disabled={selectedPublicIds.length === 0}>
          Save
      </button>
      </form>

      <CustomDisplayGeneratedImage 
        generatedImageUrls={props.generatedImageUrls} 
        selectedPublicIds={selectedPublicIds}
        onImageSelect={handleImageSelect} 
      />

     
    </Generated_Style>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.generatedImage.isLoading,
    error: state.generatedImage.error,
    generatedImageUrls: state.generatedImage.generatedImageUrls
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    generateImage: (n, size, folder, title_start, title_end) => {
      return dispatch(imageActions.generateImage(n, size, folder, title_start, title_end))
        .then((generatedImageUrls) => {
          if (generatedImageUrls && generatedImageUrls.length > 0) {
            return generatedImageUrls;
          }
        });

    },
    // showImage: (folder) =>{
    //   return dispatch(imageActions.getAllImageGenerate(folder));
    // },
    deleteAllImages: (folder) => {
      dispatch(imageActions.deleteGeneratedImageInFolder(folder));
    },
    moveImagesToFolder: (publicIds, folder) =>{
      dispatch(imageActions.moveImagesToFolder(publicIds, folder))
    },
    addImages: (form) =>{
      dispatch(imagesActions.addImages(form));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Generated);
