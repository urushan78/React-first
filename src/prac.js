import React from 'react'

const App = () => {


const greet = () => {
alert('hello jee');

}

const copy = () => {
  alert('Please Do not Copy');
}
//greet();


  return (
    <div className='p-4'>
      <button className='bg-black rounded-lg text-white mb-3 px-2 py-2' onClick={greet}> Click Me </button>

      <div className="sv h-[200px] w-[200px] border-2 border-black">
        <svg viewBox='0 0 200 200'>
          <circle r={50} cx={100} cy={100} fill='red'/>
        </svg>
      </div>
      
<h1 className='bg-[purple] text-white text-[20px]'>Hello Jee</h1>

<p onCopy={copy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis, fugiat exercitationem architecto iusto adipisci inventore, praesentium quia sapiente, deserunt ut nemo dolorum.</p>
    </div>
  )
} 

export default App