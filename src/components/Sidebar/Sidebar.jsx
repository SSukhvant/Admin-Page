import React, { useState } from 'react';
import './Sidebar.scss';
import {RiDashboardFill,RiCalendarEventFill,RiPhoneFill} from 'react-icons/ri';
import {IoDocumentText,IoSend} from 'react-icons/io5';
import {MdNotificationsActive} from 'react-icons/md';
import {FiTarget} from 'react-icons/fi';
import {BsChevronRight} from 'react-icons/bs';

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
       setToggle(!toggle);
  }
  return (
    <>
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
    <li className='promotions'>Promotions</li>
    <li><div/><FiTarget/><a href='/' alt="link">Promotions</a></li>
    </ul>
    </div>
    </div>
    <div className='app__menubar1'><button type='button' className='toggle-btn' onClick={handleToggle}><BsChevronRight/></button></div>
    {toggle && (
      <div className='app__menu'>
      <div className='app__logo'><a href='https://www.google.com/'>LOGO</a></div>
      <div className='app__menubar'><button type='button' className='toggle-btn' onClick={handleToggle}><BsChevronRight/></button></div>

      <div className='app__menu-links'>
      <ul>
      <li className='active'><div/><RiDashboardFill/><a href='/' alt="link">Dashboard</a></li>
      <li><div/><IoDocumentText/><a href='/' alt="link">Projects</a></li>
      <li><div/><RiCalendarEventFill/><a href='/' alt="link">Calender</a></li>
      <li><div/><IoSend/><a href='/' alt="link">Messages</a><span>5</span></li>
      <li><div/><MdNotificationsActive/><a href='/' alt="link">Notifications</a><span>21</span></li>
      <li><div/><RiPhoneFill/><a href='/' alt="link">Contacts</a></li>
      <li className='menu-promotions'>Promotions</li>
      <li><div/><FiTarget/><a href='/' alt="link">Promotions</a></li>
      </ul>
      </div>

      </div>
    )}

    </>
  )
}

export default Sidebar;
