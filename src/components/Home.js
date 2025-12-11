import React from 'react'
import programming from '../imgs/Programming.jpg'

function Home() {
  return (
<section id="Home" className=" h-screen pt-32 pb-20 px-4 animate-fade animate-once animate-ease-linear flex justify-center items-center "> 
    <img src={programming} alt="Programming" className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"/>       
        <div className="max-w-3xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            HI I'M
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SOUFIANE ELMILOUDI
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with over 2 years of experience building modern web applications. I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#Contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">Get In Touch</a>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm border border-white/20 transition-all duration-200">
              View Works
            </button>
          </div>

        </div>
      </section>
  )
}

export default Home
