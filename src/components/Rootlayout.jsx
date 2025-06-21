import React from 'react'
import { Outlet } from 'react-router'
import Header from './header'
import About from '../pages/about/About'
import Menu from '../pages/menu/Menu'
import Contact from '../pages/contact/Contact'


export default function Rootlayout() {
  return (
    <div>


      <Header />

      <Outlet />
    </div>

  )


}
