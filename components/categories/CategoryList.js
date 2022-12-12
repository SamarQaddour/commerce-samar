import Link from "next/link"
import Category from "./Category"
export default function CategoryList({ categories }) {
  if (!categories) return null

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={`/categories/${category.id}`}>
            <Category {...category} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
