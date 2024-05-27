import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AnimalTray from './AnimalTray.js';

const myElement = <h1>I Love JSX!</h1>;
// or 
/*
 
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
*/
 
let initialAnimals = [
	{id:0, name:"Crosby", type:"dog"},
	{id:1, name:"Geno", type:"dog"},
	{id:2, name:"Nala", type:"dog"},
	{id:3, name:"Finn", type:"dog"},
	{id:4, name:"Mystique", type:"cat"},
	{id:5, name:"Mazie", type:"cat"},
	{id:6, name:"Milo", type:"cat"}
];
 
function App() {

  let [animals, setAnimals] = useState(initialAnimals)

  return (

    <div className="App">

      <h1>Hello World!</h1>
      <br/>
      <AnimalTray animals={animals} />

    </div>
  );
}

export default App;
