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
        <h4>{likes}</h4>
        <button className={styles.likeButton} onClick={ ()=> setLikes(likes+1) }>❤</button>    
      </div>
    </>
  )
}

export default PokemonCard