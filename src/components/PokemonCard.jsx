import React from 'react'
import styles from '../styles/PokemonCard.module.css'


const PokemonCard = (pokemon) => {
  return (
    <>
      <div className={styles.card}>
        <img src={pokemon.url} alt={pokemon.url}></img>
        <h3>{pokemon.name}</h3>
        <p>Tipo: {pokemon.type}</p>
        <br />
      </div>
    </>
  )
}

export default PokemonCard