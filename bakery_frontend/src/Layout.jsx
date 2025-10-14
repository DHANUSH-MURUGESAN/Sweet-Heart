import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router'
import Footer from './Footer'
import { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext'
import Loader from './pages/Loaders/Loader'

const Layout = () => {
  const {loading} = useContext(AuthContext)

  return (
    <div>
        {loading ? (<Loader/>) : (<div><Outlet/></div>) }
    </div>
  )
}

export default Layout
