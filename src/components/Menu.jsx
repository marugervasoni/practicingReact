import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../styles/Menu.module.css'
import {routes} from '../routes'

const Menu = () => {

    const navigate = useNavigate()

  return (
    <div className={styles.menu}>
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

export default Menu