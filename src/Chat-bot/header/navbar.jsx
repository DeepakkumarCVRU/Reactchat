import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import {   NavLink } from 'react-router-dom';
import { BiLogoGitlab } from "react-icons/bi";
import Toggle from '../pages/Toggle';



function Navbar() {
  const [toggle, setToggle] = React.useState(false);

  const toggles = () => {
    setToggle(!toggle);
  }

  const LinksToggle = () => {
    setToggle(!toggle);
  }
  return (
    <>
      <nav className='   bg-gray-100 p-5 md:px-28 sm:px-16   shadow-md '>
        {/* parent div */}
        <div className='flex justify-between items-center '>
          <div>
            <h1 className='cursor-pointer'><BiLogoGitlab size={40} /></h1>
          </div>

          {/* different pages */}
          <div className='md:flex sm:flex hidden gap-10 text-lg ' onClick={LinksToggle}>
            <NavLink to="/" className='cursor-pointer border border-slate-50 hover:bg-slate-300 hover:border-green-200 px-5 rounded-xl py-2' onClick={LinksToggle}>home</NavLink>
            <NavLink to="/about" className='cursor-pointer border border-slate-50 hover:bg-slate-300 hover:border-green-200 px-5 rounded-xl py-2' onClick={LinksToggle}>about</NavLink>
            <NavLink to="/services" className='cursor-pointer border border-slate-50 hover:bg-slate-300 hover:border-green-200 px-5 rounded-xl py-2' onClick={LinksToggle}>services</NavLink>
            <NavLink to="/portfoliyo" className='cursor-pointer border border-slate-50 hover:bg-slate-300 hover:border-green-200 px-5 rounded-xl py-2' onClick={LinksToggle}>Portifoliyo</NavLink>
            <NavLink to="/contact" className='cursor-pointer border border-slate-50 hover:bg-slate-300 hover:border-green-200 px-5 rounded-xl py-2' onClick={LinksToggle}>contact</NavLink>
          </div>

          <div className='md:hidden sm:hidden flex'>
            < CiMenuBurger size={29} className='cursor-pointer' onClick={toggles}/>
          </div>
        </div>
      </nav>
      {toggle ? <Toggle /> : ""}
    </>
    
  )
}

export default Navbar