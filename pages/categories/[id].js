import React from "react"
import ProductList from "../../components/product/productList"

export async function getStaticProps({ params }) {
  const { id } = params

  const res = await fetch(`http://localhost:3000/categories/${id}`)
  let categories = await res.json()
  const res1 = await fetch(
    `http://localhost:3000/categories?_embed=products/${id}`
  )
  let product = await res1.json
  console.log(product, "product")
  return {
    props: {
      categories
    }
  }
}

export async function getStaticPaths(params) {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking"
    }
  }
  const res = await fetch(`http://localhost:3000/categories`)
  const categories = await res.json()

  const paths = categories.map((categories) => ({
    params: { id: categories.id.toString() }
  }))

  return { paths, fallback: false }
}
export default function ProductPage({ categories }) {
  return (
    <React.Fragment>
      <div key={categories.id}>
        <h3>{categories.name}</h3>
      </div>
      <button>Add to Cart</button>
    </React.Fragment>
  )
}
