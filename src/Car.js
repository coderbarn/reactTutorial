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

function Garage(props){
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
          </h2>
      }
    </>
  );
}

export {Car, CarFunc, Garage};

