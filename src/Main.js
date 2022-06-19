import React from 'react';
import { Activitybar, Sidebar } from './components';
import { Home} from './containers';

const Main = () => {
  return (
    <>
    <div className='app'>
    <Sidebar/>
    <Home/>
    <Activitybar/>
   </div>
    </>
  )
}

export default Main
