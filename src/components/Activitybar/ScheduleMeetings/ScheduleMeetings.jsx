import React from 'react'
import './ScheduleMeetings.scss';
import { FiChevronUp } from 'react-icons/fi'
import { BsThreeDotsVertical } from 'react-icons/bs';
import profile1 from '../../../assets/profile1.png';
import profile2 from '../../../assets/profile2.png';

const ScheduleMeetings = () => {
  return (
    <div className='schedule-meetings'>
      <div className='schedule-meetings-head'>
      <h2>Schedule Meetings</h2>
      <button type='button'><FiChevronUp/></button></div>
      <div className='hrr'/>
      <div className='recently-activity'>
      <h2>Recently Activity</h2>
      <button type='button'><BsThreeDotsVertical/></button>
      </div>

      {Activity.map((index,key) => {
        return (
            <div className='recently-activity-list' key={key}>
            <div className='activity'>
            <div className='dot'/>
            <div className='notification'>
            <h6>{index.notification}</h6>
            <h4>{index.name}</h4>
            <p>{index.date} at {index.time}</p>
            </div>
            </div>
            <img src={index.imgUrl} alt="profile-dp"/>
            </div>
        )
      })}
    </div>
  )
}

export default ScheduleMeetings;

const Activity = [
    {
        notification:"Thanks you for booking a meeting with JJ.",
        name:"Kevin Dukkon",
        date:"Jun 14, 2021",
        time:"5:31 PM",
        imgUrl:`${profile1}`
    },
    {
        notification:"You received a message from Ashish",
        name:"Ashish Sharma",
        date:"Jun 14, 2021",
        time:"5:31 PM",
        imgUrl:`${profile2}`
    },
    {
        notification:"You received a message from Ashish",
        name:"Ashish Sharma",
        date:"Jun 14, 2021",
        time:"5:31 PM",
        imgUrl:`${profile2}`
    },
    {
        notification:"You received a message from Ashish",
        name:"Ashish Sharma",
        date:"Jun 14, 2021",
        time:"5:31 PM",
        imgUrl:`${profile2}`
    },
    {
        notification:"You received a message from Ashish",
        name:"Ashish Sharma",
        date:"Jun 14, 2021",
        time:"5:31 PM",
        imgUrl:`${profile2}`
    },
]
