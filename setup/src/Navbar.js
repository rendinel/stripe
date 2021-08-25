import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
//{4} we import useGlobalContext inside the navbar so we can access all the data
import { useGlobalContext } from './context'

const Navbar = () => {
  //{4} we import the function from useGlobalContext
  const { openSideBar, openSubmenu, closeSubmenu } = useGlobalContext()
  //{7} we setup a function to make the isSubmenuOpen toggle and make the menu appear/disappear
  const displaySubmenu = (e) => {
    //this way we catch the text of the button we are hovering
    const page = e.target.textContent
    //this way we get the x and y position on the page getBoundingClientRect return an object so we can access the property with the dot notation
    const tempBtn = e.target.getBoundingClientRect()
    // this give us the center of the btn
    const center = (tempBtn.left + tempBtn.right) / 2
    // we lift the submenu 3 pixel up
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }
  // {9} if the element i'm overing with the mouse doesn't have the class link-btn i'm going to close the submenu, i call this function on the navbar
  const handleSubmenu = (e) => {
    if (!!e.target.classList.containes('link-btn')) {
      closeSubmenu()
    }
  }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSideBar}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn' onMouseOver={displaySubmenu}>
          Sign in
        </button>
      </div>
    </nav>
  )
}

export default Navbar
