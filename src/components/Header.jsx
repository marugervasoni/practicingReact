import React from 'react'
import styles from '../styles/Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import {routes} from '../routes'

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.header}>
      {/* <h3>Pokeworld</h3> */}
      <h4 onClick={() => navigate(-1)}>⬅Back</h4>
      <section>
      <Link to={routes.home}>Home</Link>{" | "}
      <Link to={routes.pokedex}>Pokedex</Link>{" | "}
      <Link to={routes.shop}>Shop</Link>{" | "}
      <Link to={routes.login}>Login</Link>
      </section>
    </div>
  )
}

export default Header