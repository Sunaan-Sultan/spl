import { Link } from 'react-router-dom'
//styles and images
import './navbar.css'
import SPL from '../assets/spl.jpg'
import React from 'react'

export default function navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li className="logo">
            <img src={SPL} alt='spl'></img>
            <span>SPL</span>
        </li>

        <li><Link to='/login'>login</Link></li>
        <li><Link to='/signup'>signup</Link></li>
        <li>
            <button className='btn'>Logout</button>
        </li>
      </ul>
    </div>
  )
}
