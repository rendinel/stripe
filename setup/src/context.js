import React, { useState, useContext } from 'react'
import sublinks from './data'

//we setup the context so we can export the value we need to all the children component
const AppContext = React.createContext()

//we export appprovider and the custom hook at the bottom
export const AppProvider = ({ children }) => {
  //we set up 2 useState and 4 function to open/close sidebar
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

  const openSideBar = () => {
    setIsSideBarOpen(true)
  }

  const closeSideBar = () => {
    setIsSideBarOpen(false)
  }

  const openSubmenu = () => {
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
