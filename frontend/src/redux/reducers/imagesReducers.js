import actionTypes from "../contants/Contants";

const initialState = {
    isLoading: false,
    error: null,
    messege: 'test',
    imageData: []
};


const imageReducers = (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.CREATE_IMAGES_REQUEST:
            return{
                ...state,
                isLoading: true,
                error: null
            }
        case actionTypes.CREATE_IMAGES_SUCCESS:
            return{
                ...state,
                isLoading: false,
                error: null
            }
        case actionTypes.CREATE_IMAGES_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }


        case actionTypes.SHOW_IMAGES_REQUEST:
            return{
                ...state,
                isLoading: true,
                error: null
            }
        case actionTypes.SHOW_IMAGES_SUCCESS:
            return{
                ...state,
                isLoading: false,
                error: null,
                imageData: action.payload
            }
        case actionTypes.SHOW_IMAGES_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default imageReducers;