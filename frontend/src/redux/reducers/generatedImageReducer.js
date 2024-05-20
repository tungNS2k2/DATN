import actionTypes from "../contants/Contants";

const initialState = {
  isLoading: false,
  generatedImageUrls: [],
  error: null,
  messeage: ''
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_IMAGE_REQUEST:
      return { ...state, isLoading: true, error: null };
      case actionTypes.GENERATE_IMAGE_SUCCESS:
        const matches = action.payload.match(/CloundinaryDTO\(public_id=([^,]*), url=(http[^,]*), format=[^\)]*\)/g);
        const generatedImageUrls = matches.map(match => {
          const [, publicId, url] = match.match(/public_id=([^,]*), url=(http[^,]*)/);
          return { publicId, url };
        });
          return {
            ...state,
            isLoading: false,
            error: null,
            generatedImageUrls
          };
    case actionTypes.GENERATE_IMAGE_FAIL:
      return { ...state, isLoading: false, error: action.payload };



    // case actionTypes.SHOW_GENERATED_IMAGE_REQUEST:
    //   return{
    //     ...state,
    //     isLoading: true,
    //     error: null
    //   }
    // case actionTypes.SHOW_GENERATED_IMAGE_SUCCESS:
    //   const matches1 = action.payload.match(/CloundinaryDTO\(public_id=([^,]*), url=(http[^,]*), format=[^\)]*\)/g);
    //   const generatedImageUrls1 = matches.map(match => {
    //     const [, publicId, url] = match.match(/public_id=([^,]*), url=(http[^,]*)/);
    //     return { publicId, url };
    //   });
    //     return {
    //       ...state,
    //       isLoading: false,
    //       error: null,
    //       generatedImageUrls
    //     };
    // case actionTypes.SHOW_GENERATED_IMAGE_FAIL:
    //   return{
    //     ...state,
    //     isLoading: false,
    //     error: action.payload
    //   }

    case actionTypes.DELETE_ALL_IMAGES_REQUEST:
      return{
        ...state,
        // isLoading: true,
        error: null
      }
    case actionTypes.DELETE_ALL_IMAGES_SUCCESS:
      return{
        ...state,
        // isLoading:  false,
        messeage: action.payload

      }
    case actionTypes.DELETE_ALL_IMAGES_FAILURE:
      return{
        ...state,
        isLoading: false,
        error: action.payload
      }

      case actionTypes.MOVE_IMAGES_REQUEST:
      return{
        ...state,
        isLoading: true,
        error: null
      }
    case actionTypes.MOVE_IMAGES_SUCCESS:
      return{
        ...state,
        isLoading:  false,
        messeage: action.payload

      }
    case actionTypes.MOVE_IMAGES_FAILURE:
      return{
        ...state,
        isLoading: false,
        error: action.payload
      }

      case actionTypes.RESET_GENERATED_IMAGES:
        return {
          ...state,
          generatedImageUrls: [], // Reset generatedImageUrls to empty array
        };

      
    default:
      return state;
  }
};



export default imageReducer;
