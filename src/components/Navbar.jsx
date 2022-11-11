import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <span onClick={() => window.scroll({
            top: 200,
            behavior: "smooth"
        })}>About</span>
        <span onClick={() => window.scroll({
            top: 1000,
            behavior: "smooth"
        })}>Education</span>
        <span onClick={() => window.scroll({
            top: 1900,
            behavior: "smooth"
        })}>Experience</span>
        <span onClick={() => window.scroll({
            top: 2800,
            behavior: "smooth"
        })}>Skills</span>
        <span onClick={() => window.scroll({
            top: 3700,
            behavior: "smooth"
        })}>Contact</span>
    </nav>
  )
}

export default Navbar