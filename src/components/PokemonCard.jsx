import React, { useState } from 'react'
import styles from '../styles/PokemonCard.module.css'


const PokemonCard = (pokemon) => {
  const [likes, setLikes] = useState(0);
  return (
    <>
      <div className={styles.card}>
        <img src={pokemon.url} alt={pokemon.url}></img>
        <h3>{pokemon.name}</h3>
        <p>Type: {pokemon.type}</p>
        <button onClick={ ()=> setLikes(likes+1) }>{likes} ❤</button>        
      </div>
    </>
  )
}

export default PokemonCard