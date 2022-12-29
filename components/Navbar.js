import Link from "next/link"
import React, { useState } from "react"
import { TfiShoppingCart } from "react-icons/tfi"
import { IoMdNotifications } from "react-icons/io"
import { HiShoppingBag } from "react-icons/hi"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>NEW</span>
        <HiShoppingBag size={50} className="HiShoppingBag" />
        <span>MARKET</span>
      </div>
      <div className="search">
        <label>Search</label>
        <input placeholder="Enter Categories" className="inputCategories" />
      </div>

      <div className="listLeft">
        <div className="singinSecetion">
          <button>
            <Link href="/validate" className="selectsignin">
              Email
            </Link>
            <span>/</span>
            <Link href="/login">Google</Link>
          </button>
        </div>
        <div className="icon">
          <ul>
            <li>
              <a href="/cart">
                <TfiShoppingCart size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <IoMdNotifications size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
