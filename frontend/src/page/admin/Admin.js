import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import userAction from '../../redux/actions/userActions';
import styled from 'styled-components';

const DivContainer = styled.div`
  width: 80%;
  min-height: 80vh;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  h1 {
    text-align: center;
    margin-bottom: 8px;
    padding-top: 8px;
  }
  p{
    min-height: 65vh;
    text-align: center;
  }

  // form{
  //   min-height: 65vh;
  // }

  .input-username{
    border: none;
    background-color: #fafafa;
    cursor: default;
  }
  .input-username:focus-visible {
    outline: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
    white-space: nowrap;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .excel-row {
    display: flex;
    align-items: center;
  }

  input[type="text"],
  input[type="email"],
  select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  select:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }

  button {
    padding: 8px 16px;
    margin: 10px 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
  }

  button[type="submit"] {
    background-color: #007bff;
    color: white;
  }

  button[type="button"] {
    background-color: #dc3545;
    color: white;
  }

  button:hover {
    background-color: #0056b3;
  }

  button[type="button"]:hover {
    background-color: #bd2130;
  }

  .add-form {
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 10px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
  }

  .form-group input,
  .form-group select {
    width: calc(100% - 16px);
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .form-group input:focus,
  .form-group select:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
  .product-home-pages{
    text-align: center;
    margin-top: 8px;
  }
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .product-home-page-btn {
    padding: 8px 12px;
    margin: 0 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fff;
    color: #000;
  }

  .product-home-page-btn:hover {
    background-color: #f0f0f0;
  }

  .product-home-page-btn.active {
    background-color: #007bff;
    color: #fff;
    border-color: #007bff;
  }

  .black-btn {
    background-color: #007bff;
    color: #fff;
    border: 1px solid #007bff;
  }

  .white-btn {
    background-color: #fff;
    color: #000;
    border: 1px solid #ddd;
  }

  .search-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .search-container input[type="text"] {
    width: auto;
    flex: 1;
    margin-right: 10px;
  }

  .input-search{
    padding: 6px 16px;
  }
  .search-container button {
    margin: 0 5px;
  }
`;


const AddAccountForm = ({ onSubmit, onCancel }) => (
  <Formik
    initialValues={{
      id: '',
      avatar: '',
      username: '',
      password: '',
      email: '',
      role: 'USER',
      status: 'NOT_ACTIVE',
    }}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    }}
  >
    {() => (
      <Form className="add-form">
        <div className="form-group">
          <label>Username:</label>
          <Field name="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <Field name="email" placeholder="Email" type="email" />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <Field as="select" name="role">
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
          </Field>
        </div>
        <div className="form-group">
          <label>Status:</label>
          <Field as="select" name="status">
            <option value="NOT_ACTIVE">NOT_ACTIVE</option>
            <option value="ACTIVE">ACTIVE</option>
          </Field>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </Form>
    )}
  </Formik>
);

const Admin = (props) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const total = props.accountData?.totalPages || 1;

  const handleResetPassword = (username) => {
    try{
      props.resetPassword(username);
      // props.getAllAccount(page, search)
    }catch(er){
      console.log("err")
    }
  };
  useEffect(() => {
    console.log('Account Data:', props.accountData);
  }, [props.accountData]);

  useEffect(() => {
    console.log('Fetching accounts with search:', search, 'and page:', page);
    props.getAllAccount(search, page);
  }, [search, page]);

  useEffect(() => {
    props.showLoading(props.isLoading);
  }, [props.isLoading]);

  const update = (user) => {
    try {
      console.log("user", user);
      props.update(user);
      props.getAllAccount(search, page);
    } catch (err) {
      console.error(err);
    }
  };

  const addAccount = (user) => {
    try {
      props.addAccount(user);
      props.getAllAccount(search, 1);
      setShowAddForm(false);
    } catch (err) {
      console.error(err);
    }
  };

  const remove = (id) =>{
    try{
      props.delete(id);
      props.getAllAccount(search, page);
    }catch(err){
      console.log(err)
    }
  }

  const handleSearch = (values) => {
    setSearch(values.search);
  };

  const handleRefresh = () => {
    setSearch('');
    setPage(1);
    props.getAllAccount('', 1);
  };

  return (
    <DivContainer>
      <h1>User List</h1>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={handleSearch}
      >
        {() => (
          <Form className="search-container">
            <button type="button" onClick={() => setShowAddForm(true)}>Add</button>
            <div>
              <Field className='input-search' name="search" placeholder="Search by username" />
              <button type="submit">Search</button>
            </div>
            <button type="button" onClick={handleRefresh}>Refresh</button>
          </Form>
        )}
      </Formik>
      {showAddForm && <AddAccountForm onSubmit={addAccount} onCancel={() => setShowAddForm(false)} />}
      {props.accountData && props.accountData.content && props.accountData.content.length > 0 ? (
        <Formik
          initialValues={{
            users: props.accountData.content.map((account) => ({
              id: account.id,
              avatar: account.avatar,
              username: account.username,
              password: account.password,
              email: account.email,
              role: account.role,
              status: account.status,
            })),
          }}
          enableReinitialize={true} // Add this line to ensure Formik reinitializes when initialValues change
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <FieldArray name="users">
                    {() => (
                      values.users.map((user, index) => (
                        <tr key={index}>
                          <td>{user.id}</td>
                          <td><Field className="input-username" name={`users[${index}].username`} placeholder="Username" readOnly /></td>
                          <td><Field name={`users[${index}].email`} placeholder="Email" type="email" /></td>
                          <td>
                            <Field as="select" name={`users[${index}].role`}>
                              <option value="ADMIN">ADMIN</option>
                              <option value="USER">USER</option>
                            </Field>
                          </td>
                          <td>
                            <Field as="select" name={`users[${index}].status`}>
                              <option value="NOT_ACTIVE">NOT_ACTIVE</option>
                              <option value="ACTIVE">ACTIVE</option>
                            </Field>
                          </td>
                          <td>
                            <button type="button" onClick={() => handleResetPassword(user.username)}>Reset Password</button>
                            <button type="button" onClick={() => update(user)}>Update</button>
                            <button type="button" onClick={() => remove(user.id)}>Delete</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </FieldArray>
                </tbody>
              </table>
            </Form>
          )}
        </Formik>
      ) : (
        <p>No data available</p>
      )}

      <div className="product-home-pages">
        <button
          onClick={() => setPage(page === 1 ? page : page - 1)}
          className="white-btn product-home-page-btn"
        >
          {"<"}
        </button>
        {Array.from({ length: 7 }).map((_, index) => {
          const pageNumber = index - 3 + page;
          if (pageNumber > 0 && pageNumber <= total) {
            return pageNumber === page ? (
              <button
                className="black-btn product-home-page-btn active"
                key={index}
              >
                {pageNumber}
              </button>
            ) : (
              <button
                onClick={() => setPage(pageNumber)}
                className="white-btn product-home-page-btn"
                key={index}
              >
                {pageNumber}
              </button>
            );
          }
          return null;
        })}
        <button
          onClick={() => setPage(page === total ? page : page + 1)}
          className="white-btn product-home-page-btn"
        >
          {">"}
        </button>
      </div>
    </DivContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading,
    accountData: state.user.accountData,
    getAllErr: state.user.getAllErr,
    resetErr: state.user.resetErr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAccount: (search, page) => {
      dispatch(userAction.getAllAcount(search, page));
    },
    resetPassword: (username) => {
      dispatch(userAction.resetAccount(username));
    },
    delete: (id) => {
      dispatch(userAction.deleteAccount(id));
    },
    update: (user) => {
      dispatch(userAction.update(user));
    },
    addAccount: (user) => {
      dispatch(userAction.addAccount(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
