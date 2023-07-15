import React from 'react'
import Home from './Pages/Home/Home.jsx'
import Product from './Pages/Product/Product'
import Products from './Pages/Products/Products'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import "./app.scss"


const Layout = ()=>{
  return(
     <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
     </div>
  )
}

const router = createBrowserRouter([{
  path:"/",
 element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/products/:id",
      element:<Products/>
    },
    {
      path:"/product/:id",
      element:<Product/>
    },
  ]
},

])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
