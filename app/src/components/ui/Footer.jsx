import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer pt-16 sm:pt-8 relative z-[20] border-white  footer-center p-10 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About Me</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">My Resume</a>
    
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    <Link to="https://www.linkedin.com/in/aman-raj-a3710622a/"><FaLinkedinIn className='hover:text-blue-600 transition-all duration-800' size={30}/></Link>
      <Link to="https://github.com/IAMAmanRaj"><BsGithub className='hover:opacity-85  transition-all duration-800 ' size={30}/></Link>
      <Link  to="https://www.instagram.com/i_m_amanraj87/"><FaInstagram className='hover:text-red-900 transition-all duration-800' size={30}/></Link>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved</p>
    <p>{`Made with <3 `}</p>
    <p>{`Feel free to react out to me  `}</p>
  </aside>
</footer>
  )
}

export default Footer