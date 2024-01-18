import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Sidebar';
import Home from './Components/Home';


function App() {
 

  return (
    <div className='container-fluid bg-secondary min-vh-100 '>
       
      <div className='row '>

          <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
            <Sidebar />
          </div>
        
         <div className='col-4 col-md-2'></div>
        <div className='col'>
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
