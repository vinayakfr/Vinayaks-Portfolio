import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Projects() {
  return (
    <div>
      <Navbar/>
      <h1 className='text-center xl:text-8xl bg-gradient-to-tr from-zinc-800 to-zinc-800 via-rose-600 text-transparent bg-clip-text'>Projects</h1>
      <Footer/>
    </div>
  )
}

export default Projects;
