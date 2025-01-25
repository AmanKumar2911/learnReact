import { useState } from 'react';
import './App.css'

function App() {

  const [counter,setCounter] = useState(0);

  function addValue(){
    setCounter(counter + 1);
  }

  function removeValue(){
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue} >remove value : {counter}</button>
    </>
  )
}

export default App
