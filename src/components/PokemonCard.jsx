import React, { useState } from 'react'
import styles from '../styles/PokemonCard.module.css'
import PropTypes from 'prop-types'

const PokemonCard = ({number, name}) => {

  const pokeNumber = number+1;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNumber}.png`;

  const [likes, setLikes] = useState(0);
 
  const toUpperCaseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <div className={styles.card}>
        <img src={imageUrl} alt={name}></img>
        <h3>{toUpperCaseFirstLetter(name)}</h3>
        <button onClick={ ()=> setLikes(likes+1) }>{likes} ❤</button>        
      </div>
    </>
  )
}

export default PokemonCard