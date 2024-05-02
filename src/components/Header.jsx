
import { Link } from 'react-router-dom'
import React from 'react'

export default function Header() {
  return (
    <div className="flex justify-between  px-5 w-screen bg-red-200 py-5 ">
      <Link className="font-bold text-xl p-5 rounded-full hover:bg-pink-300"  to="/">Home</Link>
      <Link className="font-bold text-xl p-5 rounded-full hover:bg-pink-300"  to="/Autores">Autores</Link>
    </div>
  )
}
