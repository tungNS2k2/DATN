import axios from "axios";
import actionTypes from "../contants/Contants";

const axiosInstance = axios.create({
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  });

const addImages = (form) => async (dispatch) => {
    dispatch({
        type: actionTypes.CREATE_IMAGES_REQUEST,
        payload: null
    });

    try {
        const response = await axios.post(
            "api/v1/images/",
            form, // Gửi dữ liệu form trong body
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }
        );
        dispatch({
            type: actionTypes.CREATE_IMAGES_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: actionTypes.CREATE_IMAGES_FAILURE,
            payload: err.response ? err.response.data : 'Network error'
        });
    }
};


const getImages = (imageFilterForm, page) => async (dispatch) =>{
    dispatch({
        type: actionTypes.SHOW_IMAGES_REQUEST,
        payload: null,
    });

    try{
        const response = await axiosInstance.get(`/api/v1/images/?` + `accountId=` + imageFilterForm.accountId + `&category=` + imageFilterForm.category +  `&size=` + 8 + `&page=` + page);

        dispatch({
            type: actionTypes.SHOW_IMAGES_SUCCESS,
            payload: response.data
        });
        console.log("image show data...", response.data)
    }
    catch(err){
        dispatch({
            type: actionTypes.SHOW_IMAGES_FAILURE,
            payload: err.response.data
        })
    }
}

const imagesActions = {
    addImages,
    getImages,
};

export default imagesActions;
