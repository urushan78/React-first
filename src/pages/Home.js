import React from 'react'
import Header from '../components/Header'
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { posts } from '../dummy/data';



const Home = () => {
  
  const nav = useNavigate();
  

  return (
    <div className='p-2 space-y-2'>

{posts.map((post, i) => {
  return <div className='shadow-lg p-4' key={post.id}>
    <h1>{post.title}</h1>

  </div>
})}

    </div>
  )
}

export default Home