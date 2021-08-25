import React, { useState, useRef, useEffect } from 'react'
//{7} we import useGlobalContext inside the hero so we can access all the data
import { useGlobalContext } from './context'

const Submenu = () => {
  // {7} we import the isSubmenuOpen so we can access it, we also pass location so we can update the value everytime in change with a useeffect
  //{8} we import page and deconstruct because it's an object and we are going to need page and links
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  //{7} we setup a useRef and pass as a ref={container} to our aside because we want to acess our submenu container, it's like getelementby
  const container = useRef(null)

  //{8} we setup this to dinamically updated the css of the submenu based on the lenght of links, we call columns inside the <div className={`submenu-center ${columns}`}> that contain the links
  const [columns, setColumns] = useState('col-2')
  //{7} inside the useeffect we grab our container,we deconstruct the location data so we can access bottom and center and then we use them to dinamically set up the style of the submenu
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { bottom, center } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    // {8} we Setcolumns at the deault value of col-2 and then we update the value based on the length of links
    //{8} we also pass links inside the dependencies so useeffect run also every time links change
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [location, links])
  return (
    //{7} we setup a ternary that make appear disappear the submenu on the mouseover,then we go inside navbar andsetup the function to make this value toggle on mouseover
    <aside
      ref={container}
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
    >
      {/* {8}we render page and we map links  */}
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
