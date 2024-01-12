import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    
    const currentYear = new Date().getFullYear();
  
    return (
    <>
        <h5 className={styles.footer}> &copy;{currentYear} MRG. All rights reserved.</h5>
    </>
  )
}

export default Footer