import React from 'react'
import ShopCard from '../Components/ShopCard'
import { products } from '../assets/products'
import styles from '../styles/Shop.module.css'

const Shop = () => {
  return (
    <>
      <h2>Shop</h2>
      <article className={styles.card}>
          {products.map(
            (product, index) => (<ShopCard key={index}{...product}/>
          ))}
      </article>
    </>
  )
}

export default Shop