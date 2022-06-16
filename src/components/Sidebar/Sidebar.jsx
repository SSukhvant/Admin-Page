import React from 'react';
import './Sidebar.scss';
// import { ReactComponent as DashboardIcon } from '../../assets/dashboard.svg';
import {RiDashboardFill,RiCalendarEventFill,RiPhoneFill} from 'react-icons/ri';
import {IoDocumentText,IoSend} from 'react-icons/io5';
import {MdNotificationsActive} from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className='app__sidebar'>
    <div className='app__logo'><a href='https://www.google.com/'>LOGO</a></div>
    <div className='app__links'>
    <ul>
    <li className='active'><div/><RiDashboardFill/><a href='/' alt="link">Dashboard</a></li>
    <li><div/><IoDocumentText/><a href='/' alt="link">Projects</a></li>
    <li><div/><RiCalendarEventFill/><a href='/' alt="link">Calender</a></li>
    <li><div/><IoSend/><a href='/' alt="link">Messages</a><span>5</span></li>
    <li><div/><MdNotificationsActive/><a href='/' alt="link">Notifications</a><span>21</span></li>
    <li><div/><RiPhoneFill/><a href='/' alt="link">Contacts</a></li>
    </ul>
    </div>
    </div>
  )
}

export default Sidebar

// <a href='/' alt="link">Dashboard</a>
// <a href='/' alt="link">Projects</a>
// <a href='/' alt="link">Calender</a>
// <a href='/' alt="link">Messages</a>
// <a href='/' alt="link">Notifications</a>
// <a href='/' alt="link">Contacts</a>
