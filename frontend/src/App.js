import { Route, Routes, Navigate } from 'react-router-dom';
import publicRouters from './data/publicRouter/PublicRouters';
import NotFound from './custom/notfound/NotFound';

function App() {
  return (
    <Routes>
      {publicRouters.map((publicRouter, index) => {
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
      })}

      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
