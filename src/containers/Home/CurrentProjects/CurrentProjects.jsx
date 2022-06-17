import React from 'react';
import './CurrentProjects.scss';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {MdFilterListAlt} from 'react-icons/md';
import {RiCalendarEventFill} from 'react-icons/ri';
import vender from '../../../assets/vender.png';
import {ReactComponent as Rightarrow} from '../../../assets/Vector.svg';

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
    <div className='slides'>
    {CurrentProjectsList.map((i,k) => {
        return (
            <div className='slide' key={k}>
            <h2>{i.project}</h2>
            <p>{i.name}</p>
            <div className='price'>
            <h4>$ {i.price}</h4>
            <h4><RiCalendarEventFill/> Deadline - {i.deadline}</h4>
            </div>
            <div className='progress-bar'>
            <progress className='progress' max="100" value="70"> {i.progress}% </progress>
            <div className='label'>
            <p>Progress</p>
            <p>{i.progress} %</p>
            </div>
            </div>
            <div className='vender'>
            <div className='vender-name'>
            <img src={i.venderImg} alt="vender"/><p>{i.venderName}</p></div>
            <button type='button' className='vender-view'>View</button>
            </div>
            </div>
        )
    })}
    </div>
    <button type='button' className='right-arrow'><span><Rightarrow/></span></button>
    </div>
    </div>
  )
}

export default CurrentProjects;

const CurrentProjectsList = [
    {
        project:"Construction Project",
        name:"Project name",
        price:"100 - 800",
        deadline:"25 may",
        progress:"70",
        venderImg:`${vender}`,
        venderName:"vender's name"
    },
    {
        project:"Construction Project",
        name:"Project name",
        price:"100 - 800",
        deadline:"25 may",
        progress:"70",
        venderImg:`${vender}`,
        venderName:"vender's name"
    },
    {
        project:"Construction Project",
        name:"Project name",
        price:"100 - 800",
        deadline:"25 may",
        progress:"70",
        venderImg:`${vender}`,
        venderName:"vender's name"
    }
]
