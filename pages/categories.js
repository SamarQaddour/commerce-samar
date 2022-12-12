import React from "react"
import CategoryList from "../components/categories/CategoryList"

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/categories")
  let categories = await res.json()

  return {
    props: {
      categories: categories
    }
  }
}
export default function ProductsPage({ categories }) {
  return (
    <React.Fragment>
      <h1>categories</h1>
      <CategoryList categories={categories} />
    </React.Fragment>
  )
}
