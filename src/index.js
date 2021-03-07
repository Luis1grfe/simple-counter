import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Counter from './components/Counter';

let counter =0;
setInterval(function(){
  const six = Math.floor(counter/1000000);
  const five = Math.floor(counter/100000);
  const four = Math.floor(counter/10000);
  const three = Math.floor(counter/1000);
  const two = Math.floor(counter/100);
  const one = Math.floor(counter/10);
  console.log(six,five,four,three,two,one);
  counter++;

  ReactDOM.render(
    <React.StrictMode>
      <Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
},100);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
