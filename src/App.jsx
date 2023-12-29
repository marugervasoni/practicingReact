import './App.css'
import { pokemonArray } from './assets/pokemones'
import PokemonCard from './components/PokemonCard'

function App() {

  return (
    <>
      <h1>Hello 🌎 of Pokemons</h1>
      <div className="card">
        <h2>Here begins the Pokedex 😎😁</h2>
        {pokemonArray.map(
          (pokemon, index) => (<PokemonCard key={index}{...pokemon}/>
        ))}
      </div>
    </>
  )
}

export default App
