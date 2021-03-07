import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import Clock from "../img/clock.png"

function Counter(props) {
    return (
      <div className="container">
        <div className="row display-4">
            <div className="col-md-auto bg-secondary text-white bg-dark"> <img src={Clock} width="100" height="100"></img> </div>
            <div className="col-md-auto bg-secondary text-white bg-dark">{props.digitSix % 10}</div>
            <div className="col-md-auto bg-secondary text-white bg-dark">{props.digitFive % 10}</div>
            <div className="col-md-auto bg-secondary text-white bg-dark">{props.digitFour % 10}</div>
            <div className="col-md-auto bg-secondary text-white bg-dark">{props.digitThree % 10}</div>
            <div className="col-md-auto bg-secondary text-white bg-dark">{props.digitTwo % 10}</div>
            <div className="col-md-auto bg-secondary text-white bg-dark">{props.digitOne % 10}</div>
        </div>
      </div>
    );
  }
  
  Counter.propTypes = {
	digitOne: PropTypes.number,
  digitTwo: PropTypes.number,
  digitThree: PropTypes.number,
  digitFour: PropTypes.number,
  digitFive: PropTypes.number,
  digitSix: PropTypes.number

};
 
export default Counter;