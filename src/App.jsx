import axios from 'axios';
import React, { useState } from 'react'

function App() {

  const [ jokee, setJoke ] = useState("");

  const getJoke = async () => {
    const { data } = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: 'application/json'
      }
    })
    // console.log(data)
    setJoke(data.joke)
    // console.log(jokee)
  }
  return (
    <>
      <div className="container">
        <button onClick={getJoke}>Get Joke</button>
        <span className="joke">{jokee}</span>
      </div>
    </>
  )
}

export default App
