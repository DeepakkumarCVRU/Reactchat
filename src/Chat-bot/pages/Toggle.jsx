import React, { useState } from "react";
import { BiLogoGitlab } from "react-icons/bi";
import { Link } from "react-router-dom";


function Toggle() {

  const [toggle, setToggle] = useState(false);


    const toggles = () => {
    setToggle(!toggle);
    }
  return (

    
    <div className="  border border-black  md:px-28 sm:px-16 shadow-md rounded-xl h-24 md:hidden sm:hidden bg-green-700">
      <div className="md:hidden sm:hidden flex h-full py-5  flex-col">

        {/* different pages */}
        <div className=" flex gap-1 text-lg flex-wrap">
          <Link to="/" className="cursor-pointer border border-green-300 text-2xl rounded-full px-4 hover:bg-green-300 flex-1 ">
            home
          </Link>
          <Link to="/about" className="cursor-pointer border border-green-300 text-2xl rounded-full px-4 flex-1 hover:bg-green-300">
            about
          </Link>
          <Link to="/services" className="cursor-pointer border border-green-300 text-2xl rounded-full px-4  flex-1hover:bg-green-300 ">
            services
          </Link>
          <Link to="/portfoliyo" className="cursor-pointer border border-green-300 text-2xl rounded-full px-4 flex-1 hover:bg-green-300 ">
            Portifoliyo
          </Link>
          <Link to="/contact" className="cursor-pointer border border-green-300 text-2xl rounded-full px-4  flex-1hover:bg-green-300 ">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
