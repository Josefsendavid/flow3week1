import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ShowDate from './clock';
import Change from './inputClass';
import Jokes from './fetchEffect';
import ListDemo from './ListDemo';

let defaultCount = 0;
let amount = 5;

const Count = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(defaultCount);
  const [myObj, setObj] = useState({ name: "Peter" });

  useEffect(()=>{
    localStorage.setItem("count", count);
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + props.amount)}> + </button>
      <button onClick={() => setCount(count - props.amount)}> - </button>
      {props.name}
    </div>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function NamesList(props) {

  const names = props.names;
  const listItems = names.map((name) =>
    <li key={name.fname}>
      {name.fname} {name.lname}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const names = [{ 'fname': 'Anders', 'lname': 'Henriksen' }, { 'fname': 'Britta', 'lname': 'Albertsen' }, { 'fname': 'Kalle', 'lname': 'Fredborg' }]
  if(localStorage.getItem("count") != null) {
    defaultCount = localStorage.getItem("count") //Returns value as a string
  }
  return (
    <div className="App">
      <Count defaultCount={defaultCount} amount={amount}/>
      <ShowDate />
      <Change />
      <NumberList numbers={numbers} />
      <NamesList names={names} />
      <Jokes />
      <ListDemo />
    </div>
  );
}
export default App;
