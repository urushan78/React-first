import React from 'react'
import { DiAngularSimple, DiCss3Full, DiHtml5, DiJava, DiJavascript, DiNodejs, DiReact, DiVisualstudio } from "react-icons/di";

const Tech = () => {
  return (
    <div className='space-y-10'>


      <h1 className='text-3xl text-center font-semibold'>Technologies I Use</h1>

      <div className="tech-icons grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-y-4">

      <DiHtml5 size={150}/>
      <DiJava size={150}/>
      <DiCss3Full size={150} className='animate-bounce'/>
      <DiAngularSimple size={150}/>
      <DiReact size={150} className='hover:text-pink-600 hover:scale-125 transition-all'/>
      <DiJavascript size={150}/>
      <DiNodejs size={150}/>
      <DiVisualstudio size={150}/>

      </div>


    </div>
  )
}

export default Tech