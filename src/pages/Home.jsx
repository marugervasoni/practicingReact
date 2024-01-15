import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Home = () => {
  
  const url = "https://pokeapi.co/api/v2/pokemon"
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    console.log("component did mount"); 
    axios
    .get(url)
    .then(res => setPokemons(res.data.results))
    .catch(err => console.log(err))
  }, []);
  
  return (
    <>
        <h1>Hello 🌎 of Pokemons</h1>
        <h2>Here begins the Pokedex 😎😁</h2>
        <div className={styles.card}>
          {pokemons.map((item, index)  => <PokemonCard key={index} name={item.name} number={index}/>)}
        </div>  
    </>
  )
}

export default Home