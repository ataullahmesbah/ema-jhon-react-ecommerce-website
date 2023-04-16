import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Component/Shop/Shop';
import Home from './Component/Layout/Home';
import Orders from './Component/Orders/Orders';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import cartProductsLOADER from './Component/Loaders/CartProducts';
import Checkout from './Component/Checkout/Checkout';
import SignUp from './Component/SignUp/SignUp';
import AuthProviders from './Component/Providers/AuthProviders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLOADER
    
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProviders>
        <RouterProvider router={router} />
     </AuthProviders>
  </React.StrictMode>,
)
