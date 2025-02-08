import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { AiFillNotification } from "react-icons/ai";
import { AiFillMerge } from "react-icons/ai";
import { AiOutlineDropbox } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillRedditCircle } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineApi } from "react-icons/ai";


function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illo.',
      logo: <RiReactjsFill size={50} />
    },
    {
      id: 2,
      title: 'App Development',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illo.',
      logo: <AiFillNotification size={50} />
    },
    {
      id: 4,
      title: 'Digital Marketing',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illo.',
      logo: <AiFillMerge size={50} />
    },
    { 
      id: 5,
      title: 'Content Writing',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illo.',
      logo: <AiOutlineDropbox size={50} />
    },
    {
      id: 6,
      title: 'Graphic Design',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illo.',
      logo: <AiFillFile size={50} />
    }
    ,
    {
      id: 7,
      title: 'SEO',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illo.',
      logo: <AiFillFileAdd size={50} />
    },
    {
      id: 8,
      title: 'Social Media Marketing',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illo.',
      logo: <AiFillRedditCircle size={50} />
    },
    {
      id: 9,
      title: 'Data Analysis',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illo.',
      logo: <AiOutlineBarChart size={50} />
    },
    {
      id: 10,
      title: 'API Development',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illo.',
      logo: <AiOutlineApi size={50} />
    }

  ]
  return (
    <div>
      <div>
        <div className='flex w-full justify-center flex-col items-center mt-10'>
          <h1 className=' text-5xl'>Our Services</h1>
          <p className='text-2xl my-2 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illo.</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center px-2 flex-wrap  '>
          {services.map((service) => {
            const {id, title, info, logo} = service
            return (
              <div key={id} className='border p-5 rounded-lg shadow-lg mt-5  md:flex sm:flex flex-col items-center gap-5 mr-5'>
                <div className='text-green-400'>
                  {logo}
                </div>
                <div>
                  <h1 className='text-2xl'>{title}</h1>
                  <p className='text-sm'>{info}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className=' flex w-full justify-center my-10'>
          <button className='border px-10 py-3 rounded-2xl bg-green-300 font-semibold hover:bg-green-500'>learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Services