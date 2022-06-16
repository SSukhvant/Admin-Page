import React from 'react';
import './Navbar.scss';
import profile from '../../assets/user.png';
import {ReactComponent as Rightarrow} from '../../assets/Vector.svg';
import { ReactComponent as Search } from '../../assets/search.svg';

const Navbar = () => {
  return (
    <header className='app__header'>
      <nav>
      <div className='app__logo'><a href='https://www.google.com/'>LOGO</a></div>
      <div className='app__search'>
      <i><Search/></i>
      <input type="search" placeholder="search for products"/>
      </div>
      <div className='app__user'>
      <img src={profile} alt="User profile"/>
      <div>
      <h4>Oliver Smith</h4>
      <p>Vender</p>
      </div>
      <button type='button'><Rightarrow/></button>
      </div>
      </nav>
    </header>
  )
}

export default Navbar
