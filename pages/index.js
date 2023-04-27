import React from "react"
import CategoryList from "../components/categories/CategoryList"
import ProductList from "../components/product/ProductList"
import Navbar from "../components/Navbar"
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/products")
  let products = await res.json()
  const res1 = await fetch("http://localhost:3000/categories")
  let categories = await res1.json()
  return {
    props: {
      products,
      categories
    }
  }
}
export default function IndexPage({ products, categories }) {
  return (
    <React.Fragment>
      <Navbar />

      <CategoryList categories={categories} />
      <ProductList products={products} />
    </React.Fragment>
  )
}
