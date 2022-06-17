import React from 'react';
import './Home.scss';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as LiveIcon} from '../../assets/live.svg';
import { ReactComponent as ProgressIcon} from '../../assets/progress.svg';
import CurrentProjects from './CurrentProjects/CurrentProjects';
import PendingInvoice from './PendingInvoice/PendingInvoice';

const Home = () => {
  return (
    <>
    <div className='app__home'>
    <div className='app__search'>
    <i><Search/></i>
    <input type="search" placeholder="search for products"/>
    </div>

    <div className='app__home-main'>
    <h2>Welcome back, Andrew</h2>
    <p>Have a look at the Quick Progress bar.</p>

    <div className='app__home-status'>
    <div className='app__home-live'>
    <div className='live-btns'>
    <button type='button' className='live-btn'><LiveIcon/>Live projects</button>
    <button type='button' className='view-btn'>View All</button>
    </div>
    <div className='live-numbers'>
    <h1>56</h1>
    <p>Currently, the projects is in progress.</p>
    </div>
    </div>

    <div className='app__home-progress'>
    <div className='progress-btns'>
    <button type='button' className='progress-btn'><ProgressIcon/>In Progress</button>
    </div>
    <div className='progress-numbers'>
    <h1>124</h1>
    <p>Projects in progress.</p>
    </div>
    </div>

    <div className='app__home-completed'>
    <div className='completed-btns'>
    <button type='button' className='completed-btn'>Completed projects</button>
    </div>
    <div className='completed-numbers'>
    <h1>22</h1>
    <p>Currently, the projects is in progress.</p>
    </div>
    </div>
    </div>

    <CurrentProjects/>
    <PendingInvoice/>
    </div>
    </div>
    </>
  )
}

export default Home
