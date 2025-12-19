import { useState } from 'react'
import './App.css'
import React from 'react';
import weatherImg from './assets/weather_forecast.png';
import BMIimg from './assets/bmibg.png';
import passwordImg from './assets/pass.jpg';
import guessImg from './assets/banner.png';
import clock from './assets/digital-clock.jpg';
import paint from './assets/color.jpg';
import old from './assets/memory.webp';
import profilePic from './assets/me.jpeg';

const PROJECTS = [
  {
    title: "📊 BMI-calculator 📊 ",
    description: "BMI Calculator is a simple and handy web tool built with HTML, CSS, and JavaScript that helps you quickly calculate your Body Mass Index (BMI) 💪✨. Just input your height and weight 🏋️‍♂️📏, and the calculator instantly tells you your BMI value along with a health category — whether you're underweight, normal, overweight, or obese 🟢🟡🔴.",
    tags: ["JavaScript", "CSS", "HTML"],
    link: "https://github.com/barsha20061001/BMI-calculator",
    image: BMIimg // Replace with your screenshot later
  },
  {
    title: " 🌤️Weather App 🌤️",
    description: "Real-time weather tracking using OpenWeather API. It lets users search for any city and view real-time 🌡️ weather data including temperature, humidity, wind speed, and conditions — all with a clean and mobile-friendly UI.",
    tags: ["JavaScript", "React", "OpenWeather API", " Tailwind CSS" , "Vite"],
    link: "https://github.com/barsha20061001/weather-web-app",
    image: weatherImg
  },

  {
    title: "🎮 GUESS-THE-NUMBER",
    description: "🎯 Guess the Number is a fun and interactive browser-based game built using HTML, CSS, and JavaScript. The objective is simple: the player must guess a randomly generated number between 1 and 100.",
    tags: ["JavaScript", "CSS" , "HTML"],
    link: "https://github.com/barsha20061001/Guess-The-Number",
    image: guessImg
  },

  {
    title: "🕒 Digital-Clock",
    description: "🕒 Digital Clock is a simple and stylish real-time clock built using HTML, CSS, and JavaScript. It displays the current time in a 12-hour or 24-hour format ⏰, updating every second to stay accurate down to the second ⌛.",
    tags: ["JavaScript", "CSS" , "HTML"],
    link: "https://github.com/barsha20061001/Digital-Clock?tab=readme-ov-file",
    image: clock
  },

   {
    title: "🌈 COLOR CHANGER ",
    description: "A sleek and modern Password Generator built with ⚛️ React, ⚡ Vite, and 🌬️ Tailwind CSS. This web app allows users to create strong, secure, and customizable passwords instantly — perfect for enhancing online security and privacy.",
    tags: [ "JavaScript"," CSS","Browser APIs", "HTML"],
    link: "https://github.com/barsha20061001/color-changer-.",
    image: paint
  },

  {
    title: "🔐 Password Generator ",
    description: "A sleek and modern Password Generator built with ⚛️ React, ⚡ Vite, and 🌬️ Tailwind CSS. This web app allows users to create strong, secure, and customizable passwords instantly — perfect for enhancing online security and privacy.",
    tags: ["React UI", "JavaScript","Tailwind CSS","Vite", "HTML"],
    link: "https://github.com/barsha20061001/password-generator",
    image: passwordImg
  },

  {
    title: "🕰️ Memory Lane: Digital Time Capsule",
    description: "Memory Lane is a full-stack web application that allows users to create digital time capsules. Users can store their thoughts, select themes, and set a reveal date to preserve memories for the future.",
    tags: ["React.js", "JavaScript","Tailwind CSS","Vite", "Axios", "Node.js","Express.js"],
    link: "https://github.com/barsha20061001/Memory-Lane-Digital-Capsule-",
    image: old
  }

];



const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-xl font-bold tracking-tighter"> 🚀✨ MY PORTFOLIO ✨🚀</h1>
        <div className="space-x-6">
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Contact</a>
        </div>
      </nav>

      {/* --- HERO SECTION START --- */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE: Text Content */}
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] text-blue-900">
            Build. Scale. Design. <br className="hidden md:block" />
            
          </h2>
          {/* Shifting the paragraph slightly right as you requested before */}
          <div className="max-w-xl text-center ml-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Hi, I'm <span className="font-bold text-gray-900">Barsha Mondal</span>. I am a driven Electronics and Communication (ECE) 
      Branch student at National Institute Of Technology, Jamshedpur (Jharkhand), 
      currently pursuing my Bachelor Of Technology (B.Tech). My academic 
      journey has provided me with a solid foundation in core engineering 
      principles, while my passion for modern web development has led me to 
      master React, JavaScript, Tailwind CSS, HTML, Modern APIs, 
      Backend (Node.js, Express.js) and Databases. I specialize in building 
      responsive, high-performance web applications that bridge the gap 
      between complex backend logic and intuitive user interfaces. Further, I am 
      proficient in English, Hindi and Bengali. I am constantly looking for 
      opportunities to apply my technical skills to solve real-world problems and 
      contribute to innovative digital solutions.
            </p>
            
            
          </div>
        </div>

        {/* RIGHT SIDE: Your Photo */}
        <div className="flex-shrink-0">
          <div className="relative">
            {/* Soft glow behind the image */}
            <div className="absolute -inset-4 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
            <img 
              src={profilePic} 
              alt="Barsha Mondal" 
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white transition-transform hover:scale-105 duration-300"
            />
          </div>
        </div>

      </section> 
      {/* --- HERO SECTION END --- */}

      
      {/* --- PROJECTS SECTION (THE ONE THAT DISAPPEARED) --- */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 rounded-3xl">
        <h3 className="text-3xl font-bold mb-10 text-gray-800 text-center">Selected Work & Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl text-centre font-bold mb-2 group-hover:text-blue-600">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-gray-100 rounded-md">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">View Project on GitHub →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div> // Closes main div
  );
};
   

export default App;