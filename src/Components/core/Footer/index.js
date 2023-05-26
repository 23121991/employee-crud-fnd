import React from 'react';
import "./footer.css";

const footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">

            <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><span className='nav-link px-2 text-muted'>Home</span></li>
            <li className="ms-3"><span className='nav-link px-2 text-muted'>Features</span></li>
            <li className="ms-3"><span className='nav-link px-2 text-muted'>Pricing</span></li>
            <li className="ms-3"><span className='nav-link px-2 text-muted'>FAQ</span></li>
            <li className="ms-3"><span className='nav-link px-2 text-muted'>About</span></li>
          </ul>
        </footer>
      </div>
    </div>

  )
}

export default footer