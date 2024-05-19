import axios from 'axios';
import actionTypes from '../contants/Contants';



const Signin =(user) =>async dispatch =>{
    dispatch(
        {
            type: actionTypes.USER_SIGNIN_REQUEST,
            payload: null
        }
    )

    try {
        const response = await axios.post('api/v1/auth/signin', { 
            ...user
        }
        )
        dispatch({
            type: actionTypes.USER_SIGNIN_SUCCESS,
            payload: response.data
        })
        console.log(response.data.role)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('username', response.data.userDetails.username)
        localStorage.setItem('role', response.data.role)
        localStorage.setItem('id', response.data.id)

        window.location.replace('./');
    } catch (error) {
        dispatch({
            type: actionTypes.USER_SIGNIN_FAIL,
            payload: error.response.data
        })
    }
    
}



const Signup = (user) => async dispatch =>{
    dispatch(
        {
            type: actionTypes.USER_SIGNUP_REQUEST,
            payload: null
        }
    )
    try{
        const res = await axios.post('api/v1/auth/signup', user)
        console.log(res)
        dispatch({
            type: actionTypes.USER_SIGNUP_SUCCESS,
            payload: res.data
        })
        window.location.replace('./signin');
    }catch(err){
        
        dispatch({
            type: actionTypes.USER_SIGNUP_FAIL,
            payload: err.response ? err.response.data : "An error occurred"
        })
        console.log(err)
    }

    
}


const userAction ={
    Signin,
    Signup
}

export default userAction;