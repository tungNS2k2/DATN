import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import totalPublic from './data/publicRouter/PublicRouters';
import NotFound from './custom/notfound/NotFound';
import ContentHome from './page/body/ContentHome';
import WithLoading from './custom/HOC/withloading/WithLoading';
import Signup from './page/signup/Signup';
import Signin from './page/Signin/Signin';
import ForgotPassword from './page/forgotpassword/forgotpassword';

const SignupWithLoading = WithLoading(Signup);
const SigninWithLoading = WithLoading(Signin);
const ForgotpasswordWithLoading = WithLoading(ForgotPassword);
function App() {
  const username = localStorage.getItem("username") || '';
  const role = localStorage.getItem("role");

  const renderRoutes = (routes) => {
    return routes.map((publicRouter, index) => {
      const Component = publicRouter.component;
      return (
        <Route key={index} path={publicRouter.path} element={<Component />}>
          {publicRouter.childRoutes?.map((item, childIndex) => {
            const ChildComponent = item.component;
            const childPath = item.path;
            return <Route key={childIndex} path={childPath} element={<ChildComponent />} />;
          })}
        </Route>
      );
    });
  };

  return (
    <Routes>
      {!username ? (
        <>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/home" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SigninWithLoading />} />
          <Route path="/signup" element={<SignupWithLoading />} />
        </>
      ) : (
        role === '[ADMIN]' ? renderRoutes(totalPublic.adminRouters) : renderRoutes(totalPublic.publicRouters)
      )}
      <Route path="*" element={<NotFound />} />
      <Route path="/forgotpassword" element={<ForgotpasswordWithLoading />} />

    </Routes>
  );
}

export default App;
