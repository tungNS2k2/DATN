import styled from "styled-components"
import CustomInput from '../../../custom/custominput/CustomInput';
import FormGroup from '../../../custom/formgroup/FormGroup';
import CustomButton from '../../../custom/custombutton/CustomButton';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import { RiFolderUploadFill } from 'react-icons/ri'

import userAction from "../../../redux/actions/userActions";

const UserInfo = (props) => {
    const [avatarUrl, setAvatarUrl] = useState(localStorage.getItem("avatarUrl"))
    const [avatarUploadFile, setAvatarUploadFile] = useState(null)

    useEffect(() => {
        if (props.dataUser.avatarUrl) {
            setAvatarUrl(props.dataUser.avatarUrl);
        }
    }, [props.dataUser.avatarUrl])

    useEffect(() => {
        props.getUserInfo(localStorage.getItem('username'))
    }, [])

    useEffect(() => {
        props.showLoading(props.isLoading)
    }, [props.isLoading])

    const formik = useFormik({
        initialValues: {
            id: localStorage.getItem('id'),
            username: props.dataUser.username || '',
            email: props.dataUser.email || ''
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            username: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required')
        }),
        onSubmit: (values) => {
            props.updateUserInfo(values, avatarUploadFile)
        },
    })

    const onFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatarUploadFile(file);
            const url = URL.createObjectURL(file);
            setAvatarUrl(url);
        }
    }

    return (
        <div className={props.className}>
            <div className='user-container'>
                <div className="top"></div>
                <div className="overlay-top"></div>
                <div className="avatar">
                    <img src={avatarUrl || 'placeholder.jpg'} alt="" />
                    <div className="upload">
                        <label htmlFor="file_id">
                            <RiFolderUploadFill color="gray" fontSize="1.2em" className="icon-upload" />
                        </label>
                        <input type="file" name="file" id="file_id" onChange={onFileChange} />
                    </div>
                </div>
                <div className="icon-plus">
                    <span>+</span>
                </div>
                <div className="content">
                    <form className="form-update" onSubmit={formik.handleSubmit}>
                        {props.errorMessage &&
                            <div className="error">
                                <p>Server response status code: {props.errorMessage.statusCode}.&nbsp;</p>
                            </div>
                        }
                        {!props.errorMessage &&
                            <div className="about-user">
                                <h1>ABOUT USER</h1>
                                <p>
                                    FrontEnd Developer@Creative-Tim • Major interest in Web
                                    Development: motivated to achieve measurable results,
                                    to deepen my knowledge and improve my skills.
                                </p>
                            </div>
                        }
                        <FormGroup>
                            <CustomInput
                                type="text"
                                label="Username *"
                                name="username"
                                value={formik.values.username}
                                onChangeInput={formik.handleChange}
                                onBlur={formik.handleBlur}
                                editable={false}
                                styles={{ cursor: 'no-drop' }}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <div className="error">{formik.errors.username}</div>
                            ) : null}
                        </FormGroup>
                        <FormGroup>
                            <CustomInput
                                type="email"
                                label="Email *"
                                name="email"
                                value={formik.values.email}
                                onChangeInput={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="error">{formik.errors.email}</div>
                            ) : null}
                        </FormGroup>
                        <div className='btn-submit'>
                            <CustomButton
                                type="submit"
                                uppercase
                                width="100%"
                            >
                                update
                            </CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const StyledUserInfo = styled(UserInfo)`
    height: 640px;
    width: 560px;
    margin: auto;
    padding: 30px 0 20px 0;
    overflow: hidden;

    .about-user {
        margin-top: -50px;
    }

    .about-user h1 {
        text-align: center;
        color: rgba(0, 0, 0, .4);
        font-size: 24px;
    }

    .about-user p {
        text-align: center;
        color: rgba(0, 0, 0, .5);
        font-size: .75rem;
        margin-top: 8px;
        margin-bottom: 16px;
    }

    .form-update {
        width: 60%;
        margin: auto;
    }
    
    .icon-plus {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #9e27b0;
        position: absolute;
        top: 27%;
        right: 2rem;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .icon-plus span {
        font-size: 1.6rem;
    }

    .avatar {
        width: 130px;
        height: 130px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 1rem;
        left: 2rem;
        background-position: center;
        background-size: cover;
    }

    .avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .error {
        color: red;
    }

    .error p {
        margin-bottom: 0;
    }

    .user-container {
        height: fit-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        position: relative;
        overflow: hidden;
    }

    .top {
        height: 320px;
        background-image: linear-gradient(315deg, rgba(0, 128, 206, 0.8) 0%,  rgba(0, 128, 206, 0.8) 74%), url('/img/mountain.jpg');
        background-position: center;
        background-size: cover;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .overlay-top {
        height: 160px;
        background-color: #eeeeee;
        transform: rotate(-10deg);
        position: absolute;
        width: 150%;
        top: 13rem;
        z-index: 0;
    }

    .content {
        background-color: #eeeeee;
        flex: 1;
        border-radius: 6px;
        position: relative;
        // z-index: 2;
        padding-bottom: 12px;
    }

    .full-name {
        display: flex;
    }

    .full-name > div:first-child {
        margin-right: 5px;
    }

    .full-name > div:last-child {
        margin-left: 5px;
    }

    .upload input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .icon-upload {
        position: absolute;
        left: 50%;
        bottom: -17px;
        cursor: pointer;
        transform: translate(-50%, 0);
        z-index: 3;
    }

    .btn-submit {
        margin-top: .8rem;
        text-align: center;
    }
`


const mapStateToProps = (state) => ({
    isLoading: state.user.isLoading,
    dataUser: state.user.dataUser,
    errorMessage: state.user.getUserErr,
})

const mapDispatchToProps = (dispatch) => ({
    getUserInfo: (username) => dispatch(userAction.getUserInfo(username)),
    updateUserInfo: (user, avatarUploadFile) => dispatch(userAction.updateUserInfo(user, avatarUploadFile))
})

export default connect(mapStateToProps, mapDispatchToProps)(StyledUserInfo)
