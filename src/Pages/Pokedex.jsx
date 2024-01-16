import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PokemonCard from '../Components/PokemonCard';
import styles from '../styles/Pokedex.module.css'

const Pokedex = () => {

    const url = "https://pokeapi.co/api/v2/pokemon"
    const [pokemons, setPokemons] = useState([])
  
    useEffect(() => {
        console.log("component did mount"); 
        axios.get(url)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
      }, []);
    
  return (
    <>
        <h2>Pokedex <img  src="/pokeball.svg" alt="pokeball" width="25" height="25"/> </h2>
        <div className={styles.card}>
            {pokemons.map((item, index)  => <PokemonCard key={index} name={item.name} number={index}/>)}
        </div>  
    </>
  )
}

export default Pokedex