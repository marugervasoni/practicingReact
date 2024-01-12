import React from 'react'
import { pokemonArray } from '../assets/pokemones'
import PokemonCard from '../components/PokemonCard'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
        <h1>Hello 🌎 of Pokemons</h1>
        <h2></h2>
        <h2>Here begins the Pokedex 😎😁</h2>
        <article className={styles.card}>
          {pokemonArray.map(
            (pokemon, index) => (<PokemonCard key={index}{...pokemon}/>
          ))}
        </article>
    </>
  )
}

export default Home