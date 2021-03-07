import React from 'react';
import './components/Styles.css';
import Counter from './components/Counter';


function App() {
  let counter =0;
setInterval(function(){
  const six = Math.floor(counter/100000);
  const five = Math.floor(counter/10000);
  const four = Math.floor(counter/1000);
  const three = Math.floor(counter/100);
  const two = Math.floor(counter/10);
  const one = Math.floor(counter/1);
  console.log(six,five,four,three,two,one);
  counter++;
})
  return (
    <Counter digitOne={one}/>
  );
}

export default App;
