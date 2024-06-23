import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [jokes, setJokes]= useState([])

  useEffect(() =>{
    axios.get('/api/jokes')
    .then((response) =>{
      setJokes(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  })

  return (
    <>
      <h1>My Jokes</h1>
      <p>Total Jokes: {jokes.length}</p>

      {
      jokes.map((joke, index) =>(
        <div className='joke' key={joke.id}>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </div>
      ))
      }
    </>
  )
}

export default App
