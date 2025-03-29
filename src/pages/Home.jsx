import React from 'react'
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { SlDirection } from "react-icons/sl";
import { NavLink } from 'react-router-dom';
import {useAuth} from "../store/auth";

const Home = () => {
  const {user} = useAuth();
  return (
  <section>
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] bg-lime-100">
      <div className="flex flex-col justify-center py-8 md:py-14 px-4 md:px-0 relative z-20">
        <div className="md:ml-28 text-center md:text-left space-y-6 lg:max-w-[700px]">
          <p className='uppercase text-3xl font-medium italic text-teal-700 '>Welcome, {user ? ` ${user.username} to Ecell!` : `to Ecell` }</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold !leading-snug font-[GT Walsheim Pro]">
            E-Cell Dr.AITD
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            Powering Entrepreneurship
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-medium">
            Entrepreneurship Cell at Dr.AITD believes that entrepreneurship is
            not just about starting companies, but a pathway towards India's
            socio-economic development
          </p>
          <div className="flex flex-row justify-center gap-4 md:gap-5 md:justify-start">
            <NavLink to="/about" ><button className="bg-white text-black py-2 px-4 font-medium rounded hover:bg-[#000000] hover:text-white transition-all duration-500 border-2 border-white">
              Know More
            </button></NavLink>
            <NavLink to="/contact"><button className="bg-transparent text-black font-medium py-2 px-4 border-2 border-black rounded transition-all duration-500">
              Will Come Later
            </button></NavLink>
          </div>
        </div>
      </div>
      {/* Images */}
      <div className="flex justify-center items-center p-4 md:p-0">
        <img
          src="/images/ecell.jpg"
          alt="image"
          className="w-[300px] md:w-[400px] xl:w-[700px] relative z-10 drop-shadow rounded"
        />
      </div>
    </div>

     {/* section 2 */}

     <div className="w-full min-h-[90vh] py-8">
      <div className="container pb-8 md:pb-14 pt-20 md:pt-16">
        <div className="flex flex-col text-center justify-center">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-lime-400 mx-auto tracking-normal leading-tight">
            <h1>What is E-Cell</h1>
          </div>
          <div className="w-[90%] md:w-[75%] lg:w-[65%] mx-auto leading-relaxed mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-gray-600 font-light">
            <p>
              The Entrepreneurship Cell of Dr.AITD is a student-run organisation
              of spirited individuals who are striving to create, foster, and
              promote entrepreneurship among the students of Dr.AITD. The E-Cell
              pilots the budding entrepreneurs towards their goals through all
              the necessary resources like mentoring, consultancy, and networking
              with Alumni, Entrepreneurs, Investors.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-20 mt-8 md:mt-14 text-gray-600">
          <div className="space-y-5 text-center">
            <FaRegHandshake className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-lime-400 mx-auto" />
            <p className="text-base md:text-lg lg:text-xl">Connect</p>
          </div>
          <div className="space-y-5 text-center">
            <HiOutlineLightBulb className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-lime-400 mx-auto" />
            <p className="text-base md:text-lg lg:text-xl">Inspire</p>
          </div>
          <div className="space-y-5 text-center">
            <SlDirection className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-lime-400 mx-auto" />
            <p className="text-base md:text-lg lg:text-xl">Guide</p>
          </div>
        </div>
      </div>
    </div>

  </section>
  )
}

export default Home