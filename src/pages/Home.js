import React from 'react'
import Header from '../components/Header'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header/>
      <h1>Hello I am Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim quod nesciunt tempore? Eligendi, explicabo nam? Inventore, debitis minima! Ad odio nisi eos ut nihil quidem omnis ratione, dolorem inventore! Vero sequi error in.</p>

<NavLink to='/page1'> Page1 </NavLink>
<NavLink to='/page2'> Page2 </NavLink>
<Outlet />

    </div>
  )
}

export default Home