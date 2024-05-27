import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import userAction from '../../redux/actions/userActions';
import { connect } from 'react-redux';

const validationSchema = Yup.object().shape({
  inputValue: Yup.string().required('Vui lòng nhập Username'),
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;

  h2{
    margin-bottom: 8px;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;

const ForgotPassword = (props) => {
    useEffect(()=>{
        props.showLoading(props.isLoading)
    }, [props.isLoading])
  return (
    <Container>
      <Formik
        initialValues={{ inputValue: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values.inputValue);
          props.reset(values.inputValue);
        }}
      >
        {({ errors, touched }) => (
          <FormContainer>
            <h2>Forgot Password</h2>
            <Form>
              <Field name="inputValue">
                {({ field }) => (
                  <div>
                    <Input type="text" {...field} placeholder="Nhập username của bạn..." />
                    {props.inputValue && touched.inputValue && (
                      <ErrorMessage>{errors.inputValue}</ErrorMessage>
                    )}

                    <p>{props.resetErr}</p>
                  </div>
                )}
              </Field>
              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
          </FormContainer>
        )}
      </Formik>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: (username) => dispatch(userAction.resetAccount(username)),
  };
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading,
    resetErr: state.user.resetErr
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
