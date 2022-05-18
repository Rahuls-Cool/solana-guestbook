import React from 'react'

import Nav from "../components/Navbar";


function showcase() {
    const showcases = ["https://i.imgur.com/TlVNlgH.png"]

  return (
    <div className="bg-gray-50 dark:text-white dark:bg-gray-900  min-h-screen">
         <Nav />
         <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-3/5 lg:w-4/7 flex flex-col relative z-20">
               
                <h1 className="headline mb-3 ">Welcome to Showcase!</h1>
                <p className="text-sm sm:text-base text-gray-700 fonds dark:text-white py-10">
                    Dimension of reality that makes change possible and understandable. Just kidding! An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div className="flex mt-8 py-3">
                    <a href="#" className="btn">
                        Submit A Project!
                    </a>
                </div>
            </div>
            <div className=" sm:block sm:w-2/5 lg:w-3/7 relative grid grid-cols-2  place-content-middle ">
                <img 
                src={showcases[0]}
                alt = "is it working?"
                className="max-w-xs md:max-w-sm m-auto show-img drop-shadow-2xl "/>
                <div className="text-center show-text drop-shadow-2xl bg-blue-200/50 fonds max-w-xs md:max-w-sm m-auto">
                    Made by: Tanishq
                </div>
            </div>
        </div>

    </div>
  )
}

export default showcase