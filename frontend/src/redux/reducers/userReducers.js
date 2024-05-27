import { NetworkCell } from "@mui/icons-material"
import actionTypes from "../contants/Contants"



const initState = {
    isLoading: false,
    signinErr: null,
    signupErr: null,
    dataUser: [],
    getUserErr: null,
    updateUserErr: null,
    changeERR: null,
    oke: false,
    accountData: [],
    getAllErr: null,
    resetErr: null,
    errUpdate: ""
   
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
        


            //signup
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

        case actionTypes.GET_USER_INFO_REQUEST:
                return{
                    ...state,
                    isLoading: true
                }
        case actionTypes.GET_USER_INFO_SUCCESS:
            return{
                ...state,
                isLoading: false,
                dataUser: action.payload
            }

        case actionTypes.GET_USER_INFO_FAIL:
            return{
                ...state,
                isLoading: false,
                getUserErr: action.payload
            }

        
        case actionTypes.UPDATE_USER_INFO_REQUEST:
                return{
                    ...state,
                    isLoading: true
                }
        case actionTypes.UPDATE_USER_INFO_SUCCESS:
            return{
                ...state,
                isLoading: false,
            }

        case actionTypes.UPDATE_USER_INFO_FAIL:
            return{
                ...state,
                isLoading: false,
                updateUserErr: action.payload
            }

        case actionTypes.CHANGE_PASSWORD_REQUEST:
            return{
                ...state,
                isLoading: true,
                oke:false
            }
        case actionTypes.CHANGE_PASSWORD_SUCCESS:
            return{
                ...state,
                isLoading: false,
                oke: true
            }

        case actionTypes.CHANGE_PASSWORD_FAILURE:
            return{
                ...state,
                isLoading: false,
                changeERR: action.payload,
                oke: false  
            }
            


        case actionTypes.GET_ALL_ACCOUNT_REQUEST:
            return{
                ...state,
                isLoading: true,
                
            }
        case actionTypes.GET_ALL_ACCOUNT_SUCCESS:
            return{
                ...state,
                isLoading: false,
                accountData: action.payload
            }

        case actionTypes.GET_ALL_ACCOUNT_FAILURE:
            return{
                ...state,
                isLoading: false,
                getAllErr: action.payload,
                 
            }
            
            

        case actionTypes.RESET_PASSWORD_REQUEST:
            return{
                ...state,
                isLoading: true,
                
            }
        case actionTypes.RESET_PASSWORD_SUCCESS:
            return{
                ...state,
                isLoading: false
            }

        case actionTypes.RESET_PASSWORD_FAILURE:
            return{
                ...state,
                isLoading: false,
                resetErr:  action.payload
            }



           


        case actionTypes.DELETE_REQUEST:
            return{
                ...state,
                isLoading: true,
                
            }
        case actionTypes.DELETE_SUCCESS:
            return{
                ...state,
                isLoading: false
            }

        case actionTypes.DELETE_FAILURE:
            return{
                ...state,
                isLoading: false,
                resetErr:  action.payload
            }



        case actionTypes.UPDATE_REQUEST:
            return{
                ...state,
                isLoading: true

            }
        case actionTypes.UPDATE_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        
        case actionTypes.UPDATE_FAILURE:
            return{
                ...state,
                isLoading: false,
                errUpdate: action.payload
            } 
            
            
            case actionTypes.ADD_NEW_ACCOUNT_REQUEST:
                return{
                    ...state,
                    isLoading: true
    
                }
            case actionTypes.ADD_NEW_ACCOUNT_SUCCESS:
                return{
                    ...state,
                    isLoading: false
                }
            
            case actionTypes.ADD_NEW_ACCOUNT_FAIL:
                return{
                    ...state,
                    isLoading: false,
                    errUpdate: action.payload
                } 

        default: return state
    }
}
export default userReducers;