const USER_SIGNIN_REQUEST = 'USER_SIGNIN_REQUEST';
const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
const USER_SIGNIN_FAIL = 'USER_SIGNIN_FAIL';


//signup
const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL';

const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
const GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL';

const    GENERATE_IMAGE_REQUEST='GENERATE_IMAGE_REQUEST';
const    GENERATE_IMAGE_SUCCESS='GENERATE_IMAGE_SUCCESS';
const    GENERATE_IMAGE_FAIL='GENERATE_IMAGE_FAIL';

const    SHOW_GENERATED_IMAGE_REQUEST='SHOW_GENERATED_IMAGE_REQUEST';
const    SHOW_GENERATED_IMAGE_SUCCESS='SHOW_GENERATED_IMAGE_SUCCESS';
const    SHOW_GENERATED_IMAGE_FAIL='SHOW_GENERATED_IMAGE_FAIL';

const DELETE_ALL_IMAGES_REQUEST = 'DELETE_ALL_IMAGES_REQUEST';
const DELETE_ALL_IMAGES_SUCCESS = 'DELETE_ALL_IMAGES_SUCCESS';
const DELETE_ALL_IMAGES_FAILURE = 'DELETE_ALL_IMAGES_FAILURE';

 const MOVE_IMAGES_REQUEST = 'MOVE_IMAGES_REQUEST';
 const MOVE_IMAGES_SUCCESS = 'MOVE_IMAGES_SUCCESS';
 const MOVE_IMAGES_FAILURE = 'MOVE_IMAGES_FAILURE';


 const CREATE_IMAGES_REQUEST = 'CREATE_IMAGES_REQUEST';
const CREATE_IMAGES_SUCCESS = 'CREATE_IMAGES_SUCCESS';
const CREATE_IMAGES_FAILURE = 'CREATE_IMAGES_FAILURE';
const actionTypes ={
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,

    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,

    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,


    GENERATE_IMAGE_REQUEST,
    GENERATE_IMAGE_SUCCESS,
    GENERATE_IMAGE_FAIL,

    SHOW_GENERATED_IMAGE_REQUEST,
    SHOW_GENERATED_IMAGE_SUCCESS,
    SHOW_GENERATED_IMAGE_FAIL,

    DELETE_ALL_IMAGES_REQUEST,
    DELETE_ALL_IMAGES_SUCCESS,
    DELETE_ALL_IMAGES_FAILURE,

    MOVE_IMAGES_REQUEST,
    MOVE_IMAGES_SUCCESS,
    MOVE_IMAGES_FAILURE,

    CREATE_IMAGES_REQUEST,
    CREATE_IMAGES_SUCCESS,
    CREATE_IMAGES_FAILURE,



}

export default actionTypes;