import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
//{4} we import useGlobalContext inside the navbar so we can access all the data
import { useGlobalContext } from './context'

const Navbar = () => {
  //{4} we import the function from useGlobalContext
  const { openSideBar, openSubmenu, closeSubmenu } = useGlobalContext()
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSideBar}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn'>products</button>
          </li>
          <li>
            <button className='link-btn'>developers</button>
          </li>
          <li>
            <button className='link-btn'>company</button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
