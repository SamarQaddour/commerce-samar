import React from "react"
import Image from "next/image"
import Link from "next/link"
function Navbar() {
  return (
    <div className="container">
      <nav>
        <Image src="" alt="no image" />
        <ul>
          <li>
            <Link href="/">Home </Link>
          </li>
          <li>
            <Link href="/guides">Guides</Link>
          </li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="" alt="no image" />
      </div>
    </div>
  )
}

export default Navbar
