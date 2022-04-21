import React from 'react'
import { useState } from 'react';
import apiFacade from './apiFacade'


function Animals() {
const [animal, setAnimal] = useState("");
const [joke, setJoke] = useState("");


const getAnimal = async() =>{
    const response  = await fetch("https://lazzoro.dk/ca2/api/animal/rand")
    .then(response => response.json())
    .then(data =>{
     setAnimal(data.name)
    })
}

const getJoke = async() =>{
    const jokeRes = await fetch("https://lazzoro.dk/ca2/api/joke/rand")
    .then(respons => respons.json())
    .then(data =>{
        setJoke(data.value)
    })
}

const saveAnimal = ()=>{
    const options =apiFacade.makeOptions("POST",true,{name: animal});
     console.log(animal);
     return fetch("http://localhost:8080/backend_war_exploded/api/animal/save",options);

}

  return (
    <div>
        <button onClick={getAnimal}>Get Animal</button>
      <p>{animal}</p>
      <button onClick={saveAnimal}>Save animal</button>
      <br/>
      <button onClick={getJoke}>Get a funny joke her!</button>
    <p>{joke}</p>


    </div>
  )
}

export default Animals
