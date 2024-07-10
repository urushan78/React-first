import React from 'react'
import Header from './components/Header'
import DisplaySec from './pages/Home/DisplaySec'
import Tech from './pages/Home/Tech'
import Intro from './pages/Home/Intro'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
<Header />
<DisplaySec />
<Tech/>
<Intro/>
<Footer/>
    </div>
  )
}

export default App