import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

function App() {
  let res = [1,2,3,4].map((value)=>({value}));
  let [value,setValue] = useState(0);
  let [valueMinus,setValueMinus] = useState(10);

  useEffect(()=>{
      console.log({value});
      //setValueMinus(--valueMinus); // will create a infinite loop
  });
  function clickMe(){
    setValue(value++);
    //setValueMinus(--valueMinus);
  }
  return (
    <div className="App">
      <div>{valueMinus}</div>
     <input type='text' value={value}></input>
     <button onClick={clickMe()}>press</button>
    </div>
  );
}

export default App;
