import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'

//{6} we import useGlobalContext inside the hero so we can access all the data
import { useGlobalContext } from './context'

const Sidebar = () => {
  //{6} we import the function we need
  const { closeSideBar, isSideBarOpen } = useGlobalContext()
  return (
    <aside
      className={`${
        isSideBarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <div className='sidebar'>
        {/* {6} we set up a ternary operator that add/subtract some css class so the sidebar is hide/displayed,we call the function closesidebar that toggle the value that hide/show th sidebar */}
        <button className='close-btn' onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className='seidebar-links'>
          {/* we have the first map where we deconstruct the links and the page and then a second map where we deconstruct url, icon, label from links N>B when we don't have an id we pass the index as a key */}
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
