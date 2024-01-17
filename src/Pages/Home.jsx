import { React } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import styles from '../styles/Home.module.css'
// import Index from '../Components/Index'

const Home = () => {
  
  return (
    <div className={styles.container}>  
      <Header/>
      <div className={styles.content}>
        <h1>Hello 🌎 of Pokemon</h1>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home