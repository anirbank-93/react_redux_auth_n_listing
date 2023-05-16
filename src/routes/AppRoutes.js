import { Route, Routes, Navigate } from 'react-router-dom';

// Pages
import Homepage from '../pages/Homepage';
import Game from '../pages/Game/Game';

// Guards
import { LoginProtected } from '../Protected';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route
        exact
        path="/game"
        element={LoginProtected() ? <Game /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default AppRoutes;
