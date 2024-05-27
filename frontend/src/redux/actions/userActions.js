import axios from 'axios';
import actionTypes from '../contants/Contants';

const axiosInstance = axios.create({
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  });

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
        console.log(response.data.status)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('status', response.data.status)
        localStorage.setItem('username', response.data.userDetails.username)
        localStorage.setItem('role', response.data.role)
        localStorage.setItem('id', response.data.id)
        if(response.data.status === "NOT_ACTIVE"){
            alert("ACCOUNT NOT ACTIVE!");

        }else{
            window.location.replace('/');
        }
    } catch (error) {
        dispatch({
            type: actionTypes.USER_SIGNIN_FAIL,
            payload: error.response.data
        })

        alert(error.response.data.message);
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
        alert("PLEASE CHECK EMAIL!")
        window.location.replace('./signin');
    }catch(err){
        
        dispatch({
            type: actionTypes.USER_SIGNUP_FAIL,
            payload: err.response ? err.response.data : "An error occurred"
        })
        console.log(err)
    }

    
}



const getUserInfo = (username)=> async (dispatch) =>{
    dispatch({
        type: actionTypes.GET_USER_INFO_REQUEST,
        payload: null,
    })

    try{
        const response = await axiosInstance.get(`api/v1/accounts/username/` + username);

        dispatch({
            type: actionTypes.GET_USER_INFO_SUCCESS,
            payload: response.data
        });
        console.log('account data...', response.data)
    }catch(error){
        dispatch({
            type: actionTypes.GENERATE_IMAGE_FAIL,
            payload: null
        })
    }
}


const updateUserInfoRequest = () => ({
    type: actionTypes.UPDATE_USER_INFO_REQUEST
});

const updateUserInfoSuccess = (data) => ({
    type: actionTypes.UPDATE_USER_INFO_SUCCESS,
    payload: data
});

const updateUserInfoFail = (error) => ({
    type: actionTypes.UPDATE_USER_INFO_FAIL,
    payload: error
});

export const updateUserInfo = (user, avatarUploadFile) => async (dispatch) => {
    dispatch(updateUserInfoRequest());

    try {
        let avatarUrl = '';

        if (avatarUploadFile) {
            const formData = new FormData();
            formData.append('file', avatarUploadFile, avatarUploadFile.name);

            // Upload image to backend, which will upload it to Cloudinary
            const responseUpload = await axios({
                method: 'POST',
                url: 'http://localhost:8888/api/files/uploadImage',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            });

            avatarUrl = responseUpload.data;
            localStorage.setItem('avatarUrl',avatarUrl);
        }

        // Update user information
        const response = await axios({
            method: 'PUT',
            url: `/api/v1/accounts/${user.id}`,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            data: {
                username: user.username,
                email: user.email,
                password: user.password,
                role: localStorage.getItem('role').replace('[', '').replace(']', ''),
                status: 'ACTIVE',
                avatarUrl: avatarUrl || ''
            }
        });
        console.log(avatarUrl);

        dispatch(updateUserInfoSuccess(response.data));
    } catch (error) {
        dispatch(updateUserInfoFail('Update user info failed'));

        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    }
};



const changePassword =(username, newPass) => async (dispatch) =>{
    dispatch({
        type: actionTypes.CHANGE_PASSWORD_REQUEST,
        payload: null
    })
    try{
        const response = await axiosInstance.post(`api/v1/accounts/change-password?username=` + username + `&newPassword=` + newPass);

        dispatch({
            type: actionTypes.CHANGE_PASSWORD_SUCCESS,
            payload: response.data
        }); console.log("oke")
    }catch(err){
        dispatch({
            type: actionTypes.CHANGE_PASSWORD_FAILURE,
            payload: "dont change password"
        })
    }
}







const getAllAcount =(search, page) => async (dispatch) =>{
    dispatch({
        type: actionTypes.GET_ALL_ACCOUNT_REQUEST,
        payload: null
    })
    try{
        const response = await axiosInstance.get(`api/v1/accounts/?search=`+search+`&page=`+ page+`&size=15`);

        dispatch({
            type: actionTypes.GET_ALL_ACCOUNT_SUCCESS,
            payload: response.data
        }); console.log(response.data)
    }catch(err){
        dispatch({
            type: actionTypes.GET_ALL_ACCOUNT_FAILURE,
            payload: "DONT GET ACCOUNT"
        })
    }
}


const resetAccount =(username) => async (dispatch) =>{
    dispatch({
        type: actionTypes.RESET_PASSWORD_REQUEST,
        payload: null
    })
    try{
        const response = await axios.post(`api/v1/accounts/reset-password?username=` + username);

        dispatch({
            type: actionTypes.RESET_PASSWORD_SUCCESS,
            payload: response.data
        }); alert(response.data, "please check your email!")
    }catch(err){
        dispatch({
            type: actionTypes.RESET_PASSWORD_FAILURE,
            payload: err.response.data
        })
    }
}

const deleteAccount =(id) => async (dispatch) =>{
    dispatch({
        type: actionTypes.DELETE_REQUEST,
        payload: null
    })
    try{
        const response = await axiosInstance.post(`api/v1/accounts/delete/${id}`);

        dispatch({
            type: actionTypes.DELETE_SUCCESS,
            payload: response.data
        });
    }catch(err){
        dispatch({
            type: actionTypes.DELETE_FAILURE,
            payload: "DONT DELETE ACCOUNT"
        })
    }
}


const update = (user) => async (dispatch) => {
    dispatch({
        type: actionTypes.UPDATE_REQUEST,
        payload: null
    });

    try {
        const response = await axiosInstance.put(`api/v1/accounts/update/`+ user.id, {
            username: user.username,
            email: user.email,
            avatarUrl: user.avatarUrl,
            role: user.role,
            status: user.status
        });

        dispatch({
            type: actionTypes.UPDATE_SUCCESS,
            payload: response.data
        });
        console.log("update success!", response.data);
    } catch (err) {
        dispatch({
            type: actionTypes.UPDATE_FAILURE,
            payload: err.response?.data || "Update failed"
        });
        console.error("update error:", err.response?.data || err.message);
    }




};
const addAccount = (user) => async (dispatch) =>{
    dispatch({
        type: actionTypes.ADD_NEW_ACCOUNT_REQUEST,
        payload: null
    })

    try{
        const response = await axiosInstance.post(`api/v1/accounts/`, {
            username: user.username,
            email: user.email,
            avatarUrl: user.avatarUrl,
            password: user.password,
            role: user.role,
            status: user.status
        });

        dispatch({
            type: actionTypes.ADD_NEW_ACCOUNT_SUCCESS,
            payload: response.data
        })
    }catch(err){
        dispatch({
            type: actionTypes.ADD_NEW_ACCOUNT_FAIL,
            payload: err.response || ""
        })
    }
}



const userAction ={
    Signin,
    Signup,
    getUserInfo,
    updateUserInfo,
    changePassword,
    getAllAcount,
    resetAccount,
    deleteAccount,
    update,
    addAccount
}


export default userAction;