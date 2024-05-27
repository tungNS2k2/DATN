// src/components/ResetPassword.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import userAction from '../../redux/actions/userActions';
import { connect } from 'react-redux';

const ChangePasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    background-color: #f0f2f5;
`;

const Title = styled.h2`
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Input = styled.input`
    padding: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background-color: #ccc;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    margin-top: 10px;
`;

const AlertOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AlertBox = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    text-align: center;
`;

const ChangePassword = (props) => {
    const username = localStorage.getItem('username');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
            props.ChangePassword(username, password);
        }
    };

    useEffect(() => {
        setShowAlert(props.oke);
    }, [props.oke]);
    
    useEffect(() => {
        props.showLoading(props.isLoading)
    }, [props.isLoading]);

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <ChangePasswordContainer>
            <Title>Change Password for {username}</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button type="submit" disabled={!password || !confirmPassword}>
                    Change Password
                </Button>
            </Form>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {showAlert && (
                <AlertOverlay onClick={handleCloseAlert}>
                    <AlertBox onClick={(e) => e.stopPropagation()}>
                        <p>Password changed successfully!</p>
                        <button onClick={handleCloseAlert}>OK</button>
                    </AlertBox>
                </AlertOverlay>
            )}
        </ChangePasswordContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.user.isLoading,
        oke: state.user.oke,
        changeErr: state.user.changeERR
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        ChangePassword: (username, newPass) => {
            dispatch(userAction.changePassword(username, newPass));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
