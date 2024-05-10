import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navBar.css';

const NavBar = () => {
  return (
    <header className='navbar'>
      <div className='logo__container'>
        <img className='image__commerce' src="https://app-ecommerce-nu.vercel.app/assets/logo-80741903.png" alt="logo" />
        <h1><Link className='navbar__title' to = '/'>Ecommerce</Link></h1>
      </div>
        <ul className='navbar__list'>
          <div className='login'>
            <li className='item'><Link to = '/login'><ion-icon name="person-outline"></ion-icon></Link></li>
          </div>
          <div className='purchases'>
            <li className='item'><Link to = '/purchases'><ion-icon name="bag-outline"></ion-icon></Link></li>
          </div>
          <div className='cart'>
            <li className='item'><Link to = '/cart'><ion-icon name="cart-outline"></ion-icon></Link></li>
          </div>
            
        </ul>
    </header>
  )
}

export default NavBar;