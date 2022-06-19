import React from 'react';
import './Login.scss';
import Wave from './Wave';
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs';

const Login = () => {
  return (
    <div className='app__login'>
    <div className='app__wave'>
    <div className='app__form'>
      <form>
      <h2>Log In</h2>
      <div className='email'>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" placeholder='Enter you email'/>
      </div>
      <div className='password'>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder='Enter you password'/>
      </div>
      <button type='submit'>Login</button>
      <div className='google-facebook'>
      <p>Or Login with</p>
      <div className='google-facebook-icons'>
      <a href='/' alt="google" className='google'><FcGoogle/></a>
      <a href='/' alt="facebook" className='fb'><BsFacebook/></a>
      </div>
      </div>
      <span>Already registered? <a href='/' alt="signup">Sign Up</a></span>
      </form>
      </div>
     <Wave/>
     </div>
    </div>
  )
}

export default Login
