import React from 'react';
import {render} from 'react-dom';



const App =() => {
  let a = 34;
  let b = 70;
  let sum = a + b;
  return <div>
    Hi there, Thanks for and welcome{a} +{b} = {sum}
  </div>
}




render(<App/>, document.querySelector('#root'))