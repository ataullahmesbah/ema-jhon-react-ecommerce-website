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
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
        loader: () => fetch('http://localhost:5000/totalProducts')
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLOADER
    
      },
      {
        path: 'inventory',
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: 'checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
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
