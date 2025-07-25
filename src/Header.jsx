import React from 'react'
import { GiClown } from "react-icons/gi";

const Header = () => {
  return (
    <header className='flex p-4 items-center gap-4 shadow-lg h-[65px] bg-gradient-to-r from-blue-400 to-purple-500'>
      <GiClown className='text-5xl' />
      <h1 className='text-2xl font-semibold'>Meme Generator</h1>
    </header>
  )
}

export default Header