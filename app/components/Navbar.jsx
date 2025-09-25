import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
    <nav>
        <a href="">
            <Image src={assets.ashan} alt='Ashan' className='w-28 cursor-pointer mr-14' />
        </a>

        <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">My work</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>

        <div>
            <a href="#contact">Contact<Image src={assets.arrow_icon} alt='arrow' className="w-3"/></a>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
