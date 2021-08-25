import React, { useState, useContext } from 'react'
import sublinks from './data'

//we setup the context so we can export the value we need to all the children component
const AppContext = React.createContext()

//we export appprovider and the custom hook at the bottom
export const AppProvider = ({ children }) => {
  //we set up 2 useState and 4 function to open/close sidebar
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  //{7} we setup this to be an empty object so we can update dinamically with the coordinates from the mouseover
  const [location, setLocation] = useState({})
  //{8} we setup page to be an empty object
  const [page, setPage] = useState({ page: '', links: [] })

  const openSideBar = () => {
    setIsSideBarOpen(true)
  }

  const closeSideBar = () => {
    setIsSideBarOpen(false)
  }

  //{7}this function need to look for the text  inside the btn and the coordinates so we can dinamically update the position of the submenu
  const openSubmenu = (text, coordinates) => {
    // {8} we populate object with find where the text inside the button it's equal to the page
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setIsSubmenuOpen(true)
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
  return (
    //we wrap everything inside appcontextprovider and we pass the usestate and the 4 function to the component children
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSideBarOpen,
        openSubmenu,
        closeSubmenu,
        openSideBar,
        closeSideBar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

//{1} we setup the context so we can export the value we need to all the children component
//we export appprovider and the custom hook at the bottom
//we set up 2 useState and 4 function to open/close sidebar
//we wrap everything inside appcontextprovider and we pass the usestate and the 4 function to the component children
