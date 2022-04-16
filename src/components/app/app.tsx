import Main from '../../pages/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddReview from '../../pages/AddReview/AddReview';
import NotFound404 from '../../pages/NotFound404/NotFound404';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main />} />
        {/* <Route path={AppRoute.AddReview} element={<AddReview />} /> */}
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.NotFound} element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
