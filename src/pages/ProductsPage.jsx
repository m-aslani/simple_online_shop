import React from 'react'
import { useProducts } from '../context/ProductContext'

import styles from "./ProductsPage.module.css"

function ProductsPage() {
    const products = useProducts();
    console.log(products);
  return (
    <div className={styles.container}>
        <dir className={styles.products}>
            {!products.length && <p>Loading...</p>}
            {products.map((product) => (
                <p key={product.id}>{product.title}</p>
            ))}
        </dir>
        <dir>sidebar</dir>
    </div>
  )
}

export default ProductsPage