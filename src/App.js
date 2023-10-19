import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[advice, setAdvice] = useState("");

  useEffect(() => {
   
    getAdvice()
  }, [])

  const getAdvice = async  () => {
    const response = await fetch("http://www.boredapi.com/api/activity/");
    const data = await response.json();
    setAdvice(data.activity)
    }

  return (
    <div className="App">
      <div className='container'>
        <h1 className='advice'>{advice}</h1>
      </div>
       
       <div className='container'>
        <button className='btn' onClick={getAdvice}>Click</button>
      </div>
       
    </div>
  );
}

export default App;
