  
  import React from 'react';
  import './style.css';
  import logo from './images/logo.png';
  import {Link} from 'react-router-dom';

  
  const Sidebar = () => {

    return (
      <div className='bg-white sidebar p-2' >
        <div className='m-2'>
          <i className=' me-3 fs-4'> </i>
          <div>
            <span className='brand-name fs-3 me-3'>
              <img src={logo} alt='Logo' className='logo-image' /> Revil
            </span>
          </div>
        </div>

        <hr className='text-dark' />

      
        <nav className='list-group list-group-flush'>
          
          <Link to ="/" className='list-group-item py-2'>
            <i className='bi bi-speedometer2 fs-5 me-3'></i>
            <span className='fs-5'>Instructor Dashboard</span>
          </Link> 

          
            <Link to ="/list" className='list-group-item list-group-item-action my-2'>
              <i className='bi bi-table fs- me-3'></i>
              <span className='fs-5'>Video list</span>
            </Link>
          

          
            <a className='list-group-item py-2'>
            <i className='bi bi-clipboard-data fs-5 me-3'></i>
              <span className='fs-5'>Report</span>
            </a>
          
            <a className='list-group-item list-group-item-action my-2'>
              <i className='bi bi-power fs-5 me-3'></i>
              <span className='fs-5'>Logout</span>
            </a>
          
        </nav>

      
          </div>
        )}
      
    


  export default Sidebar;
