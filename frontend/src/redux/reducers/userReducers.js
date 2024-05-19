import actionTypes from "../contants/Contants"



const initState = {
    isLoading: false,
    signinErr: null,
    signupErr: null
   
}

const userReducers = (state = initState, action) =>{
    switch(action.type){
        //signin
        case actionTypes.USER_SIGNIN_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case actionTypes.USER_SIGNIN_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case actionTypes.USER_SIGNIN_FAIL:
            return{
                ...state,
                isLoading: false,
                signinErr: action.payload
            }
        

        case actionTypes.USER_SIGNUP_REQUEST:
        return{
            ...state,
            isLoading: true
        }
        case actionTypes.USER_SIGNUP_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case actionTypes.USER_SIGNUP_FAIL:
            return{
                ...state,
                isLoading: false,
                signupErr: action.payload
            }

        
        default: return state
    }
}
export default userReducers;