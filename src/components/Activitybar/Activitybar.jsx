import React from 'react';
import './Activitybar.scss';
import profile from '../../assets/user.png';
import {ReactComponent as Rightarrow} from '../../assets/Vector.svg';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {FiChevronDown} from 'react-icons/fi';
import client1 from '../../assets/meeting1.png';
import client2 from '../../assets/meeting2.png';
import client3 from '../../assets/meeting3.png';
import ScheduleMeetings from './ScheduleMeetings/ScheduleMeetings';

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
    <button type='button' alt="down"><FiChevronDown/></button>
    </div>
    <div className='meeting'>
    <div className='duration-btn'>
    <p>30 minute call with clients</p>
    <button type='button'><BsThreeDotsVertical/></button>
    </div>
    <h4>Project discover call</h4>
    <div className='due-time'>
    <p>Due soon</p>
    <h6>09:20 am</h6>
    </div>
    <div className='clients'>
    <div className='clients-dp'>
    <img src={client1} alt="client1"/>
    <img src={client2} alt="client2"/>
    <img src={client3} alt="client3"/>
    <span>+5</span>
    </div>
    <button type='button'>+ Invite</button>
    </div>
    </div>
    <div className='meeting'>
    <div className='duration-btn'>
    <p>30 minute call with clients</p>
    <button type='button'><BsThreeDotsVertical/></button>
    </div>
    <h4>Project discover call</h4>
    <div className='due-time'>
    <p>Due soon</p>
    <h6>09:20 am</h6>
    </div>
    <div className='clients'>
    <div className='clients-dp'>
    <img src={client1} alt="client1"/>
    <img src={client2} alt="client2"/>
    <img src={client3} alt="client3"/>
    <span>+5</span>
    </div>
    <button type='button'>+ Invite</button>
    </div>
    </div>

    <ScheduleMeetings/>
    </div>
    </div>
    </div>
  )
}

export default Activitybar
