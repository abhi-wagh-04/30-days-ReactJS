
import './App.css';
import {Routes ,Route } from 'react-router-dom';
import Task01 from './Day-01/Task01';
import Home from './Home';
import Task02 from './Day-01/Task02';
import Day01 from './Day-01/Day01';
import Day02 from './Day-02/Day02';
import Task03 from './Day-02/Task03';
import Task04 from './Day-02/Task04';
import Task05 from './Day-03/Task05';
import Day03 from './Day-03/Day03';
import Task06 from './Day-03/Task06';

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
      <Route path='Day-03' element={<Day03/>}>
        <Route path='Task-05' element={<Task05 />}/>
        <Route path='Task-06' element={<Task06/>}/>
      </Route>
      
   </Routes>
  );
}

export default App;
