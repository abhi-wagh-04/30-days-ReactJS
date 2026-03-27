
import './App.css';
import {Routes ,Route } from 'react-router-dom';
import Task01 from './Day-01/Task01';
import Home from './Home';
import Task02 from './Day-01/Task02';
import Day01 from './Day-01/Day01';
import Day02 from './Day-02/Day02';
import Task03 from './Day-02/Task03';
import Task04 from './Day-02/Task04';

function App() {
  return (
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Day-01' element={<Day01/>}>
        <Route path='Task-01' element={<Task01/>}/>
        <Route path='Task-02' element={<Task02/>}/>
      </Route>
      <Route path='Day-02' element={<Day02/>}>
         <Route path='Task-03' element={<Task03/>}/>
        <Route path='Task-04' element={<Task04/>}/> 
      </Route>
   </Routes>
  );
}

export default App;
