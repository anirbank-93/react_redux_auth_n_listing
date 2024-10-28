import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <div className="App">
        <AppRoutes />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
