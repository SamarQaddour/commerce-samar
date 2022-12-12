import React from "react"

export async function getStaticProps({ params }) {
  const { id } = params

  const res = await fetch(`http://localhost:3000/products/${id}`)
  let product = await res.json()

  return {
    props: {
      product
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
  const res = await fetch(`http://localhost:3000/products`)
  const product = await res.json()

  const paths = product.map((product) => ({
    params: { id: product.id.toString() }
  }))

  return { paths, fallback: false }
}
export default function ProductPage({ product }) {
  return (
    <React.Fragment>
      <div key={product.id}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
      <button>Add to Cart</button>
    </React.Fragment>
  )
}
