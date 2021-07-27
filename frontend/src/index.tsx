import React from 'react'
import ReactDOM from 'react-dom'

import { LoadNotesProvider } from './context'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <LoadNotesProvider>
      <App />
    </LoadNotesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

