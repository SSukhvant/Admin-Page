import './App.scss';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Login } from './containers';
import Main from './Main';

function App() {
  return (
    <>
    <Routes>
    <Route exact path='/' element={<Main/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
    </>
  );
}

export default App;
