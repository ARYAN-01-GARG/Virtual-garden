'use client';

import NavMenu from "./NavMenu"
import SearchBar from "./SearchBar"

function Navbar() {
  return (
    <div>
    <div className="relative min-h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
         autoPlay
         muted
         loop
         poster="https://images.unsplash.com/photo-1558521558-037f1cb027c5?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhcmRlbiUyMHJvYWR8ZW58MHx8MHx8fDA=">
          <source src="https://www.youtube.com/watch?v=es4x5R-rV9s" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full top-[10px]">
        <NavMenu />
        <SearchBar />
      </div>
    </div>
    <div className="min-h-screen bg-gradient-to-tr from-green-900 to-green-500 flex flex-col justify-center items-center text-4xl">
      Under Developement
    </div>
    </div>
  )
}

export default Navbar