import React from "react";
import html from "../assets/html.png";
import C from "../assets/C.png";
import cpp from "../assets/cpp.png";
import python from "../assets/python.png";
import css from "../assets/css.png";
import dynamo from "../assets/dynamo.png";
import github from "../assets/github.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/javascript.png";
import jenkins from "../assets/jenkins.png";
import mongo from "../assets/mongo.png";
import mui from "../assets/mui.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import tsx from "../assets/tsx.png";
import bitbucket from "../assets/bitbucket.png";
import aws from "../assets/aws.png";

const Experience = () => {
    const techs = [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
      {
        id: 4,
        src: react,
        title: "React",
        style: "shadow-blue-600",
      },
      {
        id: 5,
        src: tsx,
        title: "TypeScript",
        style: "shadow-sky-400",
      },
      {
        id: 6,
        src: node,
        title: "Node",
        style: "shadow-lime-300",
      },
      {
        id: 7,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-sky-400",
      },
      {
        id: 8,
        src: bootstrap,
        title: "Bootstrap",
        style: "shadow-purple-600",
      },
      {
        id: 9,
        src: mui,
        title: "Material UI",
        style: "shadow-blue-500",
      },
      {
        id: 10,
        src: C,
        title: "C",
        style: "shadow-sky-400",
      },
      {
        id: 11,
        src: cpp,
        title: "C++",
        style: "shadow-sky-400",
      },
      {
        id: 12,
        src: python,
        title: "Python",
        style: "shadow-lime-300",
      },
      {
        id: 13,
        src: mysql,
        title: "My SQL",
        style: "shadow-emerald-700",
      },
      {
        id: 14,
        src: mongo,
        title: "Mongo DB",
        style: "shadow-green-500",
      },
      {
        id: 15,
        src: dynamo,
        title: "Dynamo DB",
        style: "shadow-cyan-600",
      },
      {
        id: 16,
        src: jenkins,
        title: "Jenkins",
        style: "shadow-rose-700",
      },
      {
        id: 17,
        src: aws,
        title: "AWS",
        style: "shadow-amber-500",
      },
      
      {
        id: 18,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
      },
      {
        id: 19,
        src: bitbucket,
        title: "Bit Bucket",
        style: "shadow-blue-400",
      },
    ];
  
    return (
      <div
        name="experience"
        className="bg-gradient-to-b from-slate-800  to-slate-900 py-12 w-full"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold  inline">
              Experience
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>
  
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div> 
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;