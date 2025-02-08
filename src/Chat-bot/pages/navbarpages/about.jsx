import React from 'react'

function About() {
  return (
    <div>
      
      <div className=' md:w-1/2 md:mx-auto mt-10 border p-8 rounded-lg shadow-lg'>
        <div>
          <h1 className='text-3xl'>WHO WE ARE</h1>
          <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos pariatur voluptate veniam modi magnam ab quibusdam id. Dolore, non! Illum quos animi odit alias quis vero, commodi ipsa libero nesciunt qui iste veniam mollitia consectetur quibusdam delectus sapiente placeat maxime cum vel! Vero, ipsam error sunt autem labore facere magnam?</p>
        </div>
        <div>
          <h1 className='mt-6 text-3xl'>We Are Different Than Rest</h1>
          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consectetur ea voluptates repudiandae quasi, earum laudantium corporis eius ipsum. Voluptate quasi obcaecati accusamus aliquam non corrupti provident, commodi impedit iusto.</p>
          <p className='mt-2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ullam beatae iusto possimus, esse natus libero recusandae nemo sunt enim.
          </p>
        </div>

        <div className='w-full flex justify-center'>

        <button className='border mt-5 px-7 py-2 rounded-2xl hover:bg-green-600 text-black text-[20px] bg-green-400'>Contact us</button>
        </div>
      </div>
    </div>
  )
}

export default About