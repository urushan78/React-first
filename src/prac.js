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
      
<h1 className='bg-[purple] text-white text-[20px]'>Hello Jee</h1>

<p onCopy={copy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis, fugiat exercitationem architecto iusto adipisci inventore, praesentium quia sapiente, deserunt ut nemo dolorum.</p>
    </div>
  )
} 

export default App