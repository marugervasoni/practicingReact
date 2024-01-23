import { React } from 'react'
// import Header from '../Components/Header'
// import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import styles from '../styles/Home.module.css'
import Menu from '../Components/Menu'
// import Menu from '../Components/Menu'

const Home = () => {
  
  return (
    <div className={styles.container}>
      <Menu/>  
      <div className={styles.content}>
        <h1>Hello 🌎 of Pokemon</h1>
        <Outlet/>
      </div>
    </div>
  )
}

export default Home