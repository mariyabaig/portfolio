import React from "react";
import newsapi from "../assets/portfolio/newsapi.png";
import python from "../assets/portfolio/python.jpg";
import notes from "../assets/portfolio/notes.png";
import todoapp from "../assets/portfolio/todoapp.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todoapp,
      title :"Todo App",
    },
    
    {
      id: 2,
      src: newsapi,
      title : "News Anywhere"
    },
    {
      id: 3,
      src: notes,
      title : "Online Notes"
    },
    {
        id: 4,
        src: reactWeather,
        title : "React Weather Forecast"
      },
      {
        id: 5,
        src: python,
        title : "Face Mask Detection"
      },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-800 w-full text-white px-12 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            {title}
              <img
                src={src}
                alt=""
                
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <button className="w-1/2 px-2  m-4 duration-200 hover:scale-105" >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;