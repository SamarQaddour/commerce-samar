import React from "react"
import ProductList from "../components/product/productList"

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/products")
  let products = await res.json()

  return {
    props: {
      products: products
    }
  }
}
export default function ProductsPage({ products }) {
  return (
    <React.Fragment>
      <h1>products</h1>
      <ProductList products={products} />
    </React.Fragment>
  )
}
