import Main from '../../pages/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddReview from '../../pages/AddReview/AddReview';
import NotFound404 from '../../pages/NotFound404/NotFound404';
import Player from '../../pages/Player/Player';

type AppProps = {
  films: any[];
  reviews: any[];
};

function App({ films, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main films={films} />} />
        {/* <Route path={AppRoute.AddReview} element={<AddReview />} /> */}
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.NotFound} element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
