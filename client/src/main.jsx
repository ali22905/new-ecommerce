import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// react router 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>متبعبصش يصحبي</h1>,
  }
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
