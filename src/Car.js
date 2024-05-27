import React from 'react';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a  Car component as a class!</h2>;
  }
}

// Use of props, come from html attributes
function CarFunc(props) {
  return <h2>Hi, I am a {props.color} Car component as a function!</h2>;
}

export {Car, CarFunc};

