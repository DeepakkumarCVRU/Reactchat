import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrAmazon } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";

function Portifoliyo() {
  const portfoliyo = [
    {
      id: 1,
      icon: <FaFacebookF/>,
      title: "Facebook",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates.",
    },
    {
      id: 2,
      icon: <FcGoogle/>,
      title: "Google",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates.",
    },
    {
      id: 3,
      icon: <GrAmazon/>,
      title: "Amazon",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates.",
    },
    {
      id: 4,
      icon: <AiOutlineTwitter/>,
      title: "Twitter",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates.",
    }
  ]
  return (
    <div className='w-full h-full '>
      <div>
        <div className='flex justify-center items-center p-5 mb-10'>
          <h1 className='text-4xl'> OUR Portifoliyo</h1>
        </div>
        <div className='flex justify-center w-full text-2xl  border-b-2 border-black'>our client</div>
        <div className='flex flex-wrap justify-center items-center p-4'>
          {portfoliyo.map((port) => {
            const {id, icon, title, desc} = port
            return (
              <div key={id} className='border p-5 rounded-lg shadow-lg mt-5  md:flex sm:flex flex-col items-center gap-5 mr-5'>
                <span className='text-3xl'>{icon}</span>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            )
          })}
        </div>
      </div>


      <div>
        
      </div>
    </div>
  )
}

export default Portifoliyo