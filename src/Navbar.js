import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from './AppContext.js';

export default function Navbar() {
  const app = useContext(AppContext);
  const cart = app.cart;

  const cartCount = app.getCartCount();

  return (
    <nav className='navbar'>
      <NavLink to='/' className='nav-brand'>
        React Market
      </NavLink>
      <ul>
        <li className='nav-item'>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink exact activeClassName='active' to='/about'>
            About us
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName='active' to='/products'>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart' className='nav-item nav-cart btn btn-accent'>
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
