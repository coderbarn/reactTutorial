import React from 'react';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a  Car component as a class!</h2>;
  }
}

// Use of props, come from html attributes
function CarFunc(props) {
  return <h2>Hi, I am a {props.color} Car component as a function! I am a {props.brand}.</h2>;
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
      
      <h2>Who lives in my garage?</h2>
        <ul>
          {cars.map((car) => <CarFunc brand={car} style="color:Tomato"/>)}
        </ul>
    </>
  );
}

export {Car, CarFunc, Garage};

