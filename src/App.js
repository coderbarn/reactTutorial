import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AnimalTray from './AnimalTray.js';
import VehicleDisplay from './VehicleDisplay.js';

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
 
let initialTrucks = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'Toyota'},
    {id: 3, brand: 'Chevy'}
  ];
 
export default function App() {

  let [animals, setAnimals] = useState(initialAnimals);
  let [trucks, setTrucks] = useState(initialTrucks);
  
  return (

    <div className="App">

      <h1>Hello World!</h1>
      <br/>
      <AnimalTray animals={animals} />
      <VehicleDisplay trucks={trucks} />

    </div>
  );
}

function MyForm() {
  
  //const [name, setName] = useState(""); //for single field
  const [inputs, setInputs] = useState({userdescription:"Something here"});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`The name you entered was: ${name}`)
    alert(inputs.username + "   age:" + inputs.age + " description:" + inputs.userdescription);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
      </label><br/>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label><br/>
	<textarea name="userdescription" value={inputs.userdescription} onChange={handleChange} >
	  Default Content of the textarea.
	</textarea><br/>
	<label>Your car:
	  <select value={inputs.myCar || ""} onChange={handleChange}>
	    <option value="NA">N/A</option>
	    <option value="Ford">Ford</option>
	    <option value="Toyota">Volvo</option>
	    <option value="Mazda">Fiat</option>
	  </select>
	</label>
	<br/><br/>
      <input type="submit" />
    </form>
  )
}

export {App, MyForm};
