import React from 'react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GloblaStyles from './styles/globlaStyles'
import Routes from './routes'

function App ():JSX.Element{
  return (
    <React.Fragment>
      <GloblaStyles />
      <Routes />
      <ToastContainer />
    </React.Fragment>
  )
}

export default App
