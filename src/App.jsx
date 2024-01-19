import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Home } from './Components/Home';  // Import the component for the home page
import { List } from './Components/List';  // Import the component for the video list page

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='container-fluid bg-secondary min-vh-100'>
            <div className='row'>
              <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                <Sidebar />
              </div>
              <div className='col-4 col-md-2'></div>
              <div className='col'>
                <Home />
                {/* Add more routes for other pages/components */}
              </div>
            </div>
          </div>
        } 
      />
      <Route
        path='/list'
        element={
          <div className='container-fluid bg-secondary min-vh-100'>
            <div className='row'>
              <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                <Sidebar />
              </div>
              <div className='col-4 col-md-2'></div>
              <div className='col'>
                <List />
                {/* Add more routes for other pages/components */}
              </div>
            </div>
          </div>
        }
      />
      {/* Add more Route components for other pages/components */}
    </Routes>
  );
}
  
export default App;
