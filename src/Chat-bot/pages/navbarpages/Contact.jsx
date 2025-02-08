import React from "react";

function Contact() {
  return (
    <div className="p-10 px-20">
      <div className="">
        <h1 className="text-4xl flex justify-center">Contact us</h1>

        <p className="text-center mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          aspernatur est, nisi ipsum
        </p>
      </div>
      {/* left side */}
      <div className="md:flex mt-10">
        <div className="md:flex-1">
          <div>
            <h1 className="text-2xl">Address</h1>
            <p className="">
              Glassdoor LLC 2261 Market Street #10389 San Francisco, CA 94114
              United States.
            </p>
          </div>

          <div>
            <h1 className="text-2xl">Phone No</h1>
            <p>+91 1800-456-789</p>
          </div>

          <div>
            <h1 className="text-2xl">Email</h1>
            <p>einfratechsys@gmail.com</p>
          </div>
        </div>

        {/* right side */}
        <div className="md:flex-1  ">
          <form className="md:px-28 sm:px-4 px-0 mt-10 md:-mt-2 sm:mt-0 border py-10 rounded-xl shadow-lg">
            <h1 className="text-2xl flex justify-center">Send message</h1>

            <input
              type="text"
              placeholder="enter your name"
              className="border-black border block w-full h-10 mt-2 md:px-5 outline-none rounded-full focus:outline-green-500 focus:border-none px-10 "
            />
            <input
              type="email"
              placeholder="enter your email"
              className="border-black border block w-full h-10 mt-2 md:px-5 outline-none rounded-full focus:outline-green-500 focus:border-none px-10 "
            />
            <input
              type="text"
              placeholder="enter your subject"
              className="border-black border block w-full h-10 mt-2 md:px-5 outline-none rounded-full focus:outline-green-500 focus:border-none px-10"
            />
            <div className="flex w-full justify-center mt-10">
              <button className=" border text-xl border-green-200 px-20 py-2 bg-green-400 text-black hover:bg-green-500  rounded-full ">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
