import styled from "styled-components";
import CustomInput from "../../custom/custominput/CustomInput";
import FormGroup from "../../custom/formgroup/FormGroup";
import CustomCheckBox from  "../../custom/customcheckbox/CustomCheckbox";
import CustomButton from "../../custom/custombutton/CustomButton2"; 

import { MdLockOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import {connect} from 'react-redux';

import userAction from "../../redux/actions/userActions";

import { useEffect } from 'react';
const SigninContainer = styled.div`
        max-width: 333px;
        margin: auto;
        margin-top: 5rem;

        .signin-header{
                margin-bottom: 1.8rem;
        }


        .signin-header .avatar{
                display: flex;
                width: 40px;
                height: 40px;
                background-color: #9c27b0;
                color: #fff;
                border-radius: 50%;
                margin:auto;
                align-items: center;
                justify-content: center;

        }

        .signin-header h1{
                text-align: center;
                font-size: 1.6rem;
                font-weight: 400;
                margin-top: 1rem;
        }

        .group-link{
                display: flex;
                justify-content: space-between;
                margin-top: 1rem;
        }

        .btn-submit{
                width: 100%;
        }
        .signin-main .group-link{
                margin-top: 1.35rem;
                display: flex;
                justify-content: space-between;
        }
        
        .signin-main .group-link a{
                color: #1679d2;
                font-weight: 400;
                font-size: 0.875rem;
                letter-spacing: 0.01em;
        }
        
        .signin-main .copy-right{
                margin-top: 4rem;
                color: rgba(0, 0, 0, 0.6);
                font-size: 0.875rem;
                font-weight: 400;
                text-align:center;
                letter-spacing:0.01075;
        }
        
        .signin-main .copy-right a{
                color: rgba(0, 0, 0, 0.6);
        }
        .signin-main .form-group p{
                color: red;
                font-size: 0.8rem;
                position: absolute;
        }
        
        
        .signin-main>p:first-child{
                color: red;
                font-size: 0.8rem;
                text-align: center;
                margin-top: 0.5rem;
        }
`




const Signin = (props) =>{
        // localStorage.clear();
        const formik = useFormik({
                initialValues: {
                        username: '',
                        password: ''
                },


                validationSchema: Yup.object({
                        username: Yup.string()
                                .min(2, 'minium 6 characters')
                                .max(15, 'maximum 15 charaters')
                                .required('required!'),
                        password: Yup.string()
                                .min(6, 'minium 6 characters')
                                .max(15, 'maximum 15 charaters')
                                .required('required!'),
                                
                }),
                onSubmit: values => {
                        props.Signin(values);
                }

        })
        // console.log(props.errMessSignin)
        useEffect(()=>{
                console.log(props.isLoading)
                props.showLoading(props.isLoading);
        }, [props.isLoading])
        return(
                <SigninContainer className='signin-container'>
                <div className='signin-header'>
                        <div className = 'avatar'>
                                <MdLockOutline 
                                        size='1.5rem'
                                />
                        </div>
                        <h1>Sign in</h1>
                </div>
                        
                <form className='signin-main' onSubmit={formik.handleSubmit}>
                <p>{props.errMessSignin}</p>
                        <FormGroup>
                                <CustomInput
                                        type='text'
                                        label='Username'
                                        name='username'
                                        value={formik.values.username}
                                        onChangeInput={formik.handleChange}
                                />
                                {
                                formik.errors.username && formik.touched.username && (
                                        <p>{formik.errors.username}</p>
                                )
                                }
                        </FormGroup>

                        <FormGroup>
                                <CustomInput
                                        type='password'
                                        label='Password'
                                        name='password'
                                        value={formik.values.password}
                                        onChangeInput={formik.handleChange}
                                />
                                {
                                formik.errors.password && formik.touched.password && (
                                        <p>{formik.errors.password}</p>
                                )       
                                }                   
                        </FormGroup>
                        
                       


                        <FormGroup>
                                <div className='btn-submit'>
                                        <CustomButton
                                                type='submit'
                                                uppercase
                                                width='100%'
                                                color='white'
                                        >
                                                Sign in
                                        </CustomButton>
                                </div>
                        </FormGroup>


                        <div className = 'group-link'>
                                <Link to='/forgotpassword'>Forgot password?</Link>
                                <Link to ='/signup'> Don't Have an account? Sign Up</Link>
                        </div>
                        <p className='copy-right'>
                                Copyright &copy;&nbsp;
                                <Link to ='/'> Your website</Link>&nbsp; 2024
                        </p>
                </form>

                
        </SigninContainer>
        )
}
const mapStateToProps = state =>{
        console.log(state)
    return{
        isLoading: state.user.isLoading,
        errMessSignin:  state.user.errSignin,
        oke: state.user.oke
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{

         Signin: (account) =>{
            dispatch(userAction.Signin(account))
        }
    }
            
}




export default connect(mapStateToProps, mapDispatchToProps) (Signin);