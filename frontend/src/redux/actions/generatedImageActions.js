import axios from 'axios';
import actionTypes from '../contants/Contants';

const axiosInstance = axios.create({
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json',
  },
});

const generateImage = (n, size, folder, title_start, title_end) => async (dispatch) => {
  dispatch({
    type: actionTypes.GENERATE_IMAGE_REQUEST,
    payload: null,
  });

  try {
    const response = await axiosInstance.get(`/api/biggan/generate`, {
      params: {
        n,
        size,
        folder,
        title_start,
        title_end,
      },
    });

    dispatch({
      type: actionTypes.GENERATE_IMAGE_SUCCESS,
      payload: response.data,
    });

    console.log(response.data);

  } catch (error) {
    dispatch({
      type: actionTypes.GENERATE_IMAGE_FAIL,
      payload: error.response ? error.response.data : 'An error occurred',
    });
  }
};

const deleteGeneratedImageInFolder = (folder) => async (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_ALL_IMAGES_REQUEST,
    payload: null,
  });

  try {
    const response = await axiosInstance.delete(`/api/cloudinary/delete/folder`, {
      params: {
        folder,
      },
    });

    dispatch({
      type: actionTypes.DELETE_ALL_IMAGES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_ALL_IMAGES_FAILURE,
      payload: error.response ? error.response.data : 'An error occurred',
    });
  }
};

const moveImagesToFolder = (publicIds, targetFolder) => async (dispatch) => {
  dispatch({
    type: actionTypes.MOVE_IMAGES_REQUEST,
    payload: null,
  });

  try {
    const response = await axiosInstance.post('/api/cloudinary/move', null, {
      params: {
        publicIds: publicIds.join(','), // chuyển danh sách publicIds thành chuỗi ngăn cách bởi dấu phẩy
        targetFolder,
      },
    });

    dispatch({
      type: actionTypes.MOVE_IMAGES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.MOVE_IMAGES_FAILURE,
      payload: error.response ? error.response.data : 'An error occurred',
    });
  }
};

const resetGeneratedImages = () => ({
  type: actionTypes.RESET_GENERATED_IMAGES,
});

const resetState = () => ({
  type: actionTypes.RESET_STATE_IMAGE,
});


const XLNNTN = (inputText) => async (dispatch) =>{
  dispatch({
    type: actionTypes.GET_LABEL_INDEX_REQUEST,
    payload: null
  })

  try{
    const response = await axiosInstance.post("api/predict",{
      input_text: inputText
    }
    
  )

    dispatch({
      type: actionTypes.GET_LABEL_INDEX_SUCCESS,
      payload: response.data
    })
    console.log(response.data)
  }
  catch(err){
    dispatch({
      type: actionTypes.GET_LABEL_INDEX_FAIL,
      payload: 'err'
    })
  }
}

const CreateImageByText = (ntype) => async(dispatch) =>{
  dispatch({
    type: actionTypes.CREATE_IMAGE_BY_TEXT_REQUEST,
    payload: null
  })
  try{
    const response = await axiosInstance.post("api/generate?ntype=" + ntype)
    dispatch({
      type: actionTypes.CREATE_IMAGE_BY_TEXT_SUCCESS,
      payload: response.data
    })
  }catch(err){
    dispatch({
      type: actionTypes.CREATE_IMAGE_BY_TEXT_FAIL,
      payload: "err"
    })
  }
}


const loadKeywords = () => async (dispatch) => {
  dispatch({ type: actionTypes.LOAD_KEYWORDS_REQUEST });

  try {
    
    const response = await axios.get('/api/data');
    const keywords = response.data.split('\n'); // Assuming the file is a simple text file with one keyword per line
    dispatch({ type: actionTypes.LOAD_KEYWORDS_SUCCESS, payload: keywords });
  } catch (error) {
    dispatch({ type: actionTypes.LOAD_KEYWORDS_FAILURE, payload: error.message });
  }
};

const imageActions = {
  generateImage,
  deleteGeneratedImageInFolder,
  moveImagesToFolder,
  resetGeneratedImages,
  XLNNTN,
  CreateImageByText,
  resetState,
  loadKeywords
  
};

export default imageActions;
