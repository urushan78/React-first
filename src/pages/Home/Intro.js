import React from 'react'

const Intro = () => {
  return (
  <div className='space-y-9'>

    <h1 className='text-3xl font-semibold text-center'>Who am I</h1>


    {
    // This is used to build the round box
    }
    <div className='h-[370px] w-[370px] bg-black rounded-full border-[7px] border-green-700 flex justify-center items-center mx-auto'> 
    

       <div className="info text-white">
          <p>Name: Urusha</p>
          <p>Email: someperson@gmail.com</p>
          <p>Tel: 9777777</p>
          <p>Age: 25</p>
          <p>Experience: Javascript, React</p>
       </div>

    </div>

  </div>
  )
}

export default Intro