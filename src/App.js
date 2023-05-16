import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <div className="App">
        <Homepage />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
