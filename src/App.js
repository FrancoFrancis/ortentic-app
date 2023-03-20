import logo from './logo.svg';
import './App.css';

// import react router

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"

import Home from './pages/Home/home';
import Products from './pages/Products/products';
import Product from './pages/Product/product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import "./app.scss"
import React from 'react';
import GoToTop from './components/ToTop/ToTop';

const Layout = () => (
  
  <div className='app'>
    <GoToTop/>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
)


const router = createBrowserRouter ([
  {
    path: "/",
    element:<Layout/>,
    children: [
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
      }
    ]
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
