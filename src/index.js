import React from 'react';
import {render} from 'react-dom';



const App =() => {
  let a = 34;
  let b = 70;
  let sum = a * b;
  return <div>
    <h1 style={{backgroundColor:'gold',color:'#fff',border:'5px solid red'}}>Hi there, Thanks for and welcome {a} * {b} = {sum}</h1>
    <label className="label" for="name">
      Enter Name: 
    </label>
    <input id="name" type="text" />
    <button style={{background:'gold', color:'#fff', borderRadius:'1em 2em'}}>Submit</button>

  </div>
}




render(<App/>, document.querySelector('#root'))