import React, { Component, useState } from 'react';

export default function MitInput() {
    const[myValue, setMyValue] = useState("");
    function change(event) {
        setMyValue(event.target.value);
    }
    return (
        <div>
            <input type="text" value={myValue} onChange={change}/>
            {myValue}
        </div>
    )
}


//------- Thomas' metode
/*
const MyInput = () => {
    const [myValue, setMyValue] = useState("");
  
    return (
      <div>
        <input type="text" id="myInput" placeholder="Skriv noget" value={myValue} onChange={(event)=> setMyValue(event.target.value)}/>
        {myValue}
      </div>
    )
  }
  */