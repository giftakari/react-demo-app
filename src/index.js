import React from 'react';
import {render} from 'react-dom';

function getButtonText(){
  return 'Click On Me'
}


const App =() => {
  const h1Style={backgroundColor:'gold',color:'#fff',border:'5px solid red'};
  const btnStyle ={background:'gold', color:'#fff', borderRadius:'1em 2em'}
  let a = 34;
  let b = 70;
  let sum = a * b;
  return <div>
    <h1 style={h1Style}>Hi there, Thanks for and welcome {a} * {b} = {sum}</h1>
    <label className="label" htmlFor="name">
      Enter Name: 
    </label>
    <input id="name" type="text" />
    <button style={btnStyle}>{getButtonText()}</button>

  </div>
}




render(<><App/> <App/></>, document.querySelector('#root'))