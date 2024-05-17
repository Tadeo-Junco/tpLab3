import { useState } from 'react';
import './App.css';
import WorkList from './components/workList/WorkList';
import NewWork from './components/newWork/NewWork';


function App() {
  const [works, setWorks] = useState([]);

  return (
    <>
      
      <NewWork works={works} setWork={setWorks}/>
      
      <WorkList works={works} setWork={setWorks}/>
      
    </>
  )
}

export default App
