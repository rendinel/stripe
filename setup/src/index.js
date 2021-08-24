import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// {2} we import appprovider and we wrap the app inside appProvider
import { AppProvider } from './context'
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
