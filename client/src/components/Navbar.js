import React from 'react';

export default function navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg'>
        <a className='navbar-brand' href='#'>
          E-Mart
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Login
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <i class='fas fa-shopping-cart'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
