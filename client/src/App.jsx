import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Gigs from './pages/Gigs';
import Gig from './pages/Gig';
import Login from './pages/login';
import Message from './pages/Message';
import Messages from './pages/Messages';
import Orders from './pages/Orders';
import Add from './pages/Add';
import Register from './pages/Register';
import Home from './pages/home';
import MyGigs from './pages/MyGigs';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Pay from './pages/Pay';
import Success from './pages/Success';

const queryClient = new QueryClient()

const App = () => {

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </QueryClientProvider>

    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: '/gig/:id',
          element: <Gig />
        },
        {
          path: '/gigs',
          element: <Gigs />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/message/:id',
          element: <Message />
        },
        {
          path: '/messages',
          element: <Messages />
        },
        {
          path: '/my-gigs',
          element: <MyGigs />
        }, {
          path: '/orders',
          element: <Orders />
        }, {
          path: '/register',
          element: <Register />
        },
        {
          path: '/add',
          element: <Add />
        },
        {
          path: '/pay/:id',
          element: <Pay />
        },
        {
          path: '/success',
          element: <Success />
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App