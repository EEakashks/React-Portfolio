import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <a href='/'>Home</a>
            <a href='#skills'>Skills</a>
            <a href='#experience'>Experience</a>
        </div>
    </div>
  )
}

export default Navbar