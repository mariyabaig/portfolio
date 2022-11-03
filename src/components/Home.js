import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Typewriter from "typewriter-effect";
import {Link} from "react-scroll";

const Home = ( ) => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col  items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
         <h2 className="text-4xl sm:text-6xl font-bold text-white">
         <Typewriter
            onInit={(typewriter)=>{
              typewriter.typeString("Hello, I'm a Full Stack Developer!").pauseFor(500)
       .deleteChars(23)
       .typeString("Mariya Baig.")
       .start()
            }}
          />
          </h2> 
          
          
  
  
          <p className="text-gray-500 py-4 max-w-md">
            I have 10 months of corporate experience and three years of experience building and desgining software.
            Currently, specializing in building highly performant applications that solve real-world problems and provide users with an awesome experience.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-sky-900 to-sky-900 cursor-pointer">
            <Link to="experience" smooth duration={500}>Skills</Link> 
              
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

    