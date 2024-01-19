import React from 'react'

export const Home = () => {
  return (
    <div className='px-3'>  
      
    <div className='container-fluid'>
      <div className='row g-3 my-2'>
        <div className='col-md-3 p-1'>
          <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
              <h3 className='fs-2'>230</h3>
              <p className='fs-5'>Videos</p>
            </div>
            <i className='bi bi-cart-plus p-3 fs-1'></i>
          </div>
        </div>
        <div className='col-md-3 p-1'>
          <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
              <h3 className='fs-2'>2450</h3>
              <p className='fs-5'>Sales</p>
            </div>
            <i className='bi bi-currency-dollar p-3 fs-1'></i>
          </div>
        </div>
        <div className='col-md-3 p-1'>
          <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
              <h3 className='fs-2'>2250</h3>
              <p className='fs-5'>Delivery</p>
            </div>
            <i className='bi bi-truck p-3 fs-1'></i>
          </div>
        </div>
        <div className='col-md-3 p-1'>
          <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>
              <h3 className='fs-2'>20%</h3>
              <p className='fs-5'>Increase</p>
            </div>
            <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
          </div>
        </div>
      </div>
    </div>
    <table className="table caption-top bg-white rounded mt-2">
      <caption className='text-white fs-4'>Recent Updates</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Subscriber</th>
          <th scope="col">Comment</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>hehehe meow meow wewew.....</td>
          <td>@mdo.com</td>
        </tr>
        {/* ... (similar rows) ... */}
        <tr>
          <th scope="row">6</th>
          <td>Larry</td>
          <td>sssheeshh</td>
          <td>@jaff.com</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}
