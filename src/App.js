import './App.scss';
import { Activitybar, Sidebar } from './components';
import { Home } from './containers';

function App() {
  return (
    <>
     <div className='app'>
     <Sidebar/>
     <Home/>
     <Activitybar/>
    </div>
    </>
  );
}

export default App;
