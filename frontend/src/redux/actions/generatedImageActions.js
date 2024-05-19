import axios from 'axios';
import actionTypes from '../contants/Contants';

const generateImage = (n, size, folder, title_start, title_end) => async (dispatch) => {
  dispatch({
    type: actionTypes.GENERATE_IMAGE_REQUEST,
    payload: null,
  });

  try {
    const response = await axios.get(`/api/biggan/generate`, {
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
            payload: response.data
        });
        
        console.log(response.data)
        
    
  } catch (error) {
    dispatch({
      type: actionTypes.GENERATE_IMAGE_FAIL,
      payload: error.response ? error.response.data : 'An error occurred',
    });
  }
};

const deleteGeneratedImageInFolder = (folder) =>async (dispatch) =>{
  dispatch({
    type: actionTypes.DELETE_ALL_IMAGES_REQUEST,
    payload: null
  }
  )

  try {
    const response = await axios.delete(`/api/cloudinary/delete/folder`,
      {
        params: {
                  folder,
                },
      }
    )
    dispatch({
      type: actionTypes.DELETE_ALL_IMAGES_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_ALL_IMAGES_FAILURE,
      payload: error.response.data
    })
  }
}

// const getAllImageGenerate = (folder) => async (dispatch) =>{
//   dispatch({
//     type: actionTypes.SHOW_GENERATED_IMAGE_REQUEST,
//     payload: null
//   })

//   try {
//     const response = await axios.get(`/api/cloudinary/folder`, {
//       params: {
//         folder,
//       },
//     })
//     dispatch({
//       type: actionTypes.SHOW_GENERATED_IMAGE_SUCCESS,
//       payload: response.data
//     });console.log(response.data)
//   } catch (error) {
//     dispatch({
//       type: actionTypes.SHOW_GENERATED_IMAGE_FAIL,
//       payload: ""
//     })
//   }
// }

const moveImagesToFolder = (publicIds, targetFolder) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.MOVE_IMAGES_REQUEST,
      payload: null
  });
    try {
      const response = await axios.post('/api/cloudinary/move', null, {
        params: {
          publicIds: publicIds.join(','),  // chuyển danh sách publicIds thành chuỗi ngăn cách bởi dấu phẩy
          targetFolder,
        },})
        dispatch({
          type: actionTypes.MOVE_IMAGES_SUCCESS,
          payload: response.data
        });
    } catch (error) {
      dispatch(
        {
          type: actionTypes.DELETE_ALL_IMAGES_FAILURE,
          payload: error.response.data
        }
      );
    }
  };
};


const imageActions = {
  generateImage,
  // getAllImageGenerate,
  deleteGeneratedImageInFolder,
  moveImagesToFolder
};

export default imageActions;
