import React, { useState } from 'react'
import styles from '../styles/ShopCard.module.css'

const ShopCard = (product) => {

    const [addedProduct, setaddedProduct] = useState(0);
    const onAddProduct = (e) => {
        e.preventDefault();

        if (product.stock > addedProduct) {
            setaddedProduct(addedProduct + 1);
        } else {
            addedProduct;
            alert("there is no more stock available");
        }
    }

    return (
    <>
        <div className={styles.card}>
          <img src={product.url} alt={product.name}></img>
          <h3>{product.name}</h3>
          <h4>U$D {product.price}</h4>
          <p>Stock: {product.stock} </p>
          <button className={styles.shopBtn} onClick={onAddProduct}> {addedProduct ? addedProduct > 1 ? `${addedProduct} products added` : `${addedProduct} product added `  : `Add to 🛒`}</button>        
        </div>
    </>
  )
}

export default ShopCard