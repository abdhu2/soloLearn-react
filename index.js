import React, { useState } from 'react';
//import React from 'react';
import ReactDOM from 'react-dom';
//import React, { useState, useEffect } from 'react';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

function Items(props)
{
  return <div className="item">
    <b>Product Name : </b> {props.name} <br/>
    <b>Price : </b> {props.price}
  </div>;
}

function App()
{
  return <div>
    <Items name="Cheese" price="4.99"/>
    <Items name="Bread" price="2.99"/>
    <Items name="Ice cream" price="10.99"/>

  </div>
}

class Counter extends React.Component{

  state ={
    Counter : 0
  }

  increment = () =>{
    this.setState({
      Counter : this.state.Counter+1
    });
  }

  render(){
    return <div>
      <p>{this.state.Counter}</p>
      <button onClick = {this.increment}>click here</button>
    </div>;
  }

}


function Converter() {
  const [km, setKm]=useState(0);

  function handleChange(e)
  {
    setKm(e.target.value);
  }

  function convert(km){
    return (km/1.609).toFixed(2);
  }

  return <div>
    <input type="text" value={km} onChange={handleChange}/>
    <p>{km} Km is {convert(km)} miles</p>
  </div>;

}
function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="number" value={num} onChange={handleChange} />
  <input type="submit" value="Add" />
  <p> Sum is {sum} </p>
  </form>;
}

function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val) =>
    <li>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

const arr = ["A", "B", "C"];



function AddPersonForm(props){
  const [person, setPerson]= useState('');

  function handleChange(e)
  {
    setPerson(e.target.value);
  }

  function handleSubmit(e)
  {
    props.handleSubmit(person);
    setPerson('');
    e.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add New Contact" 
      onChange={handleChange }value={person} />
       <button type="submit">Add</button>
  
    </form>
  
    );

}

function PeopleList(props){
  const arr= props.data;
  const listItems = arr.map((val, index)=>
  <li key={index}>{val}</li>);
  return <ul>{listItems}</ul>
}


function ContactManager(props){
  const [contacts, setContats]=useState(props.data);

  function addPerson(name)
  {
    setContats([contacts, name]);
  }
  return (
    <div>
      < AddPersonForm handleSubmit={addPerson}/>
      <PeopleList data={contacts} />
    </div>
  )
}

const contacts = [];





const ct= <ContactManager data={contacts}/>
const li= <MyList data={arr}/>
const frm= <AddForm />
const it=<App />
const ex=<Counter />
const con=<Converter />


ReactDOM.render(
  <h1>welcome to react {it} {ex} {con} {frm} {li} {ct}</h1>,

  document.getElementById('root')
);



