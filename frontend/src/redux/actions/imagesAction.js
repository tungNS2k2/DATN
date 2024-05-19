import axios from "axios"
import actionTypes from "../contants/Contants"

const addImages = (form) => async(dispatch) =>{
    dispatch({
        type: actionTypes.CREATE_IMAGES_REQUEST,
        payload: null
    })

    try{
        const response = await axios.post("api/v1/images/",{
            ...form
        })
        dispatch({
            type: actionTypes.CREATE_IMAGES_SUCCESS,
            payload: response.data
        })
    }catch(err){
        dispatch({
            type: actionTypes.CREATE_IMAGES_FAILURE,
            payload: err.response.data
        })
    }
}


const imagesActions ={
    addImages,
}

export default imagesActions;