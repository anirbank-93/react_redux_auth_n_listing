import { Route, Routes, Navigate } from 'react-router-dom';

// Pages
import Homepage from '../pages/Homepage';
import Products from '../pages/Products/Products';

// Guards
import { LoginProtected } from '../Protected';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route
        exact
        path="/products"
        element={LoginProtected() ? <Products /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default AppRoutes;
