import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/DefaultLayout.module.css'

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer/>
    </div>
  );
};

export default DefaultLayout;