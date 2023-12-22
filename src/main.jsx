import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import store from './store.js'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
)
