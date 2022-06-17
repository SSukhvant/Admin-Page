import React from 'react';
import './CurrentProjects.scss';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {MdFilterListAlt} from 'react-icons/md';

const CurrentProjects = () => {
  return (
    <div className='app__current-projects'>
    <div className='app__current-projects-head'>
    <div className='headings'>
      <h2>Current Projects</h2>
      <p>Projects that are currently in progress</p>
    </div>
    <div className='btns'>
    <button type='button' className='filter-btn'><MdFilterListAlt/> Filter</button>
    <button type='button' className='dots-btn'><BsThreeDotsVertical/></button>
    </div>
    </div>
    <div className='app__current-projects-slides'>
    </div>
    </div>
  )
}

export default CurrentProjects
