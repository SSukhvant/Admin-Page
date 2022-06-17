import React from 'react';
import './Activitybar.scss';
import profile from '../../assets/user.png';
import {ReactComponent as Rightarrow} from '../../assets/Vector.svg';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {FiChevronDown} from 'react-icons/fi';

const Activitybar = () => {
  return (
    <div className='app__activitybar'>
    <div className='app__user'>
    <img src={profile} alt="User profile"/>
    <div>
    <h4>Oliver Smith</h4>
    <p>Vender</p>
    </div>
    <button type='button'><Rightarrow/></button>
    </div>

    <div className='app__activitybar-content'>
    <div className='app__upcoming-meeting'>
    <h2>Upcoming Meeting</h2>
    <button type='button' className='threeDot'><BsThreeDotsVertical/></button>
    </div>
    <div className='hr'/>
    <div className='todays-meetings'>
    <div className='head-btn'>
    <h2>Today's Meetings</h2>
    <button type='button' alt="down"><FiChevronDown/></button></div>
    </div>
    </div>
    </div>
  )
}

export default Activitybar
