import React, { useState, useEffect, utils } from 'react';

function Jokes(){
  const [joke, setJoke] = useState("");
  const url = 'https://api.chucknorris.io/jokes/random';
  const [dadJoke, setDadJoke] = useState("");
  const dadUrl= 'https://icanhazdadjoke.com';

function chuckNorris() {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setJoke(data.value);
        })
    }
  
function fetchJoke() {
    fetch(dadUrl, {headers: {'Accept': 'application/json'}})
    .then(res => res.json())
    .then(data => {
      setDadJoke(data.joke);
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetchJoke()
    }, 10000)
    return() => {
      clearInterval(interval);
    }
  }, [])

  return(
    <div>
      <p>{joke}</p>
      <button onClick={chuckNorris}>Get joke</button>
      <br></br>
      Dad joke:
      <p>{dadJoke}</p>
    </div>
  )
  }
  export default Jokes;