import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


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
import book from './assets/book.jpeg';
import blog from './assets/blog.jpeg';
import gig from './assets/gig2.png';
import vote from './assets/vote.jpg';
import school from './assets/school.png';
import lead from './assets/lead.png';
import ai from './assets/ai.png';

import profilePic from './assets/me.jpeg';

const PROJECTS = [

  {
title: " StackSaver AI ",
description: "StackSaver AI is an AI spend audit platform built for startups, engineering teams, and growing SaaS companies. It analyzes AI tooling usage, detects unnecessary spending, and provides actionable optimization recommendations to reduce infrastructure and subscription costs. The platform also includes benchmark comparisons, shareable reports, and lead-capture workflows for high-savings opportunities." ,
tags: ["Frontend : Next.js 15, React , TypeScript ,Tailwind CSS", "Backend / Database : Supabase", "Testing : Vitest", "CI/CD : GitHub Actions" , "Deployment: Vercel"],
link: "https://github.com/barsha20061001/AI-Spend-Audit",
live: "https://ai-spend-audit-sigma-navy.vercel.app/",
image: ai // Replace with your screenshot later
 },

  {
  title: " Blog Management System ",
  description: "A full-featured blog management platform that allows users to create, manage, and explore blogs through a clean and responsive interface. Designed to simplify content publishing while providing an organized reading experience for users and admins.", 
  tags: ["PHP", "MySQL", "HTML5","JavaScript", "CSS3", "jQuery","AJAX", "CKEditor", "InfinityFree Hosting"],
  link: "https://github.com/barsha20061001/Blog-management-system",
  live: "https://barshablog.infinityfreeapp.com/?i=1",
  image: blog // Replace with your screenshot later
   },

{
  title: " GigFlow - Smart Leads Dashboard",
  description: "A freelance collaboration platform that connects clients and freelancers through project posting and bid-based hiring. It helps streamline project management, improve communication, and simplify the process of finding suitable talent for different tasks.",
  tags: ["Frontend : React, TypeScript, TailwindCSS, Vite", "Backend: Node.js, Express, TypeScript, MongoDB, Mongoose", "Backend: Node.js, Express, TypeScript, MongoDB, Mongoose","DevOps : Docker Compose, Vercel, Render, MongoDB Atlas"],
  link: "https://github.com/barsha20061001/gigflow",
  live: "https://gigflow-client-indol.vercel.app/",
  image: gig // Replace with your screenshot later
},

{
  title: "Lead Distribution System",
  description: "An automated lead management system that intelligently distributes incoming leads among agents while preventing duplicate assignments and ensuring balanced allocation. It improves workflow efficiency, enhances team coordination, and simplifies real-time lead tracking.",
  tags: ["Frontend : Next.js + React + Tailwind CSS", "Backend  : Next.js + API + Routes", "Database : MongoDB + Atlas", "Deployment : Vercel"],
  link: "https://github.com/barsha20061001/lead-distribution-system",
  live: "https://lead-distribution-system-xi.vercel.app/",
  image: lead // Replace with your screenshot later
},

{
  title: "Real-Time Expert Session Booking System",
  description: "It is a real-time expert session booking system where users can search experts, view available slots, and book sessions easily.It is useful for preventing double bookings, updating slots in real time, and helping users track their booking status smoothly. ",
  tags: ["Frontend: React (Vite), JavaScript, CSS , HTML ", "Backend: Node.js + Express + MongoDB", "Realtime: Socket.io"],
  link: "https://github.com/barsha20061001/vedaz",
  live: "https://vedaz-frontend.onrender.com/",
  image: book // Replace with your screenshot later
},

{
  title: "School Management API",
  description: "A backend API system designed to manage school-related operations such as student records, classes, and data handling efficiently. It helps streamline school management processes by providing organized data access, scalable API endpoints, and easier integration with frontend applications. ",
  tags: ["JavaScript", "Node.js", "Express.js", "MySQL", "Render", "Postman" , "dotenv"],
  link: "https://github.com/barsha20061001/school-management-api",
  live: "https://school-management-api-lioh.onrender.com",
  image: school // Replace with your screenshot later
},



{
  title: " VoteAble  ",
  description: "Traditional digital voting systems often fail to accommodate voters with disabilities, elderly users, and first-time voters. The goal of this project is to design and implement a secure, inclusive, and accessible voting platform that adapts its interface and interaction methods based on individual user needs, ensuring equal participation for all citizens. ",
  tags: ["Frontend : React(Vite) , React Router , Tailwind CSS , Web Speech API (Speech Synthesis & Recognition)", "Backend : Node.js , Express.js , MongoDB Atlas , Mongoose"],
  link: "https://github.com/barsha20061001/GFGBQ-Team-vibe123",
  live: "https://gfgbq-team-vibe123-1.onrender.com/",
  image: vote // Replace with your screenshot later
},

  {
    title: " BMI-calculator  ",
    description: "BMI Calculator is a simple and handy web tool built with HTML, CSS, and JavaScript that helps you quickly calculate your Body Mass Index (BMI) . Just input your height and weight , and the calculator instantly tells you your BMI value along with a health category — whether you're underweight, normal, overweight, or obese .",
    tags: ["JavaScript", "CSS", "HTML"],
    link: "https://github.com/barsha20061001/BMI-calculator",
    live: "https://barsha20061001.github.io/BMI-calculator/",
    image: BMIimg // Replace with your screenshot later
  },

  {
    title: " Weather App ",
    description: "Real-time weather tracking using OpenWeather API. It lets users search for any city and view real-time weather data including temperature, humidity, wind speed, and conditions — all with a clean and mobile-friendly UI.",
    tags: ["JavaScript", "React", "OpenWeather API", " Tailwind CSS" , "Vite"],
    link: "https://github.com/barsha20061001/weather-web-app",
    live: "https://weather-app-tznv.vercel.app/",
    image: weatherImg
  },

  {
    title: " GUESS-THE-NUMBER",
    description: " Guess the Number is a fun and interactive browser-based game built using HTML, CSS, and JavaScript. The objective is simple: the player must guess a randomly generated number between 1 and 100.",
    tags: ["JavaScript", "CSS" , "HTML"],
    link: "https://github.com/barsha20061001/Guess-The-Number",
    live: "https://barsha20061001.github.io/Guess-The-Number/",
    image: guessImg
  },

  {
    title: " Digital-Clock",
    description: " Digital Clock is a simple and stylish real-time clock built using HTML, CSS, and JavaScript. It displays the current time in a 12-hour or 24-hour format , updating every second to stay accurate down to the second .",
    tags: ["JavaScript", "CSS" , "HTML"],
    link: "https://github.com/barsha20061001/Digital-Clock?tab=readme-ov-file",
    live: "https://barsha20061001.github.io/Digital-Clock/",
    image: clock
  },

   {
    title: " COLOR CHANGER ",
    description: "A sleek and modern Password Generator built with React, Vite, and Tailwind CSS. This web app allows users to create strong, secure, and customizable passwords instantly — perfect for enhancing online security and privacy.",
    tags: [ "JavaScript"," CSS","Browser APIs", "HTML"],
    link: "https://github.com/barsha20061001/color-changer-.",
    live: "https://barsha20061001.github.io/color-changer-./",
    image: paint
  },

  {
    title: " Password Generator ",
    description: "A sleek and modern Password Generator built with React, Vite, and Tailwind CSS. This web app allows users to create strong, secure, and customizable passwords instantly — perfect for enhancing online security and privacy.",
    tags: ["React UI", "JavaScript","Tailwind CSS","Vite", "HTML"],
    link: "https://github.com/barsha20061001/password-generator",
    live: "https://basic-yssf.vercel.app/",
    image: passwordImg
  },

  {
    title: " Memory Lane: Digital Time Capsule",
    description: "Memory Lane is a full-stack web application that allows users to create digital time capsules. Users can store their thoughts, select themes, and set a reveal date to preserve memories for the future.",
    tags: ["React.js", "JavaScript","Tailwind CSS","Vite", "Axios", "Node.js","Express.js"],
    link: "https://github.com/barsha20061001/Memory-Lane-Digital-Capsule-",
    live: "https://memory-lane-digital-capsule.vercel.app/",
    image: old
  }

];



const App = () => {
  return (
    <div className=" relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white">

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">

  <div className="absolute w-[500px] h-[500px] bg-yellow-500/30 rounded-full blur-[120px] top-0 -left-32"></div>

  <div className="absolute w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[120px] bottom-0 -right-32"></div>

</div>
      {/* Navigation */}
      <nav className=" p-6 flex justify-between items-center bg-black/30 backdrop-blur-lg border-b border-white/10 shadow-sm sticky px-8 py-5 top-0 z-10">
        <h1 className="text-xl font-bold tracking-tighter">  MY PORTFOLIO </h1>
        <div className="space-x-6">
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Contact</a>
        </div>
      </nav>

      {/* --- HERO SECTION START --- */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE: Text Content */}
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] text-white-900">
  Build. Scale. Design.
  <br className="hidden md:block" />
</h2>

<TypeAnimation
  sequence={[
    "Frontend Developer",
    2000,
    "Full Stack Developer",
    2000,
    "React Developer",
    2000,
    "Open Source Enthusiast",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-2xl md:text-4xl font-bold text-cyan-400 block mb-6 ml-28"
/>

          {/* Shifting the paragraph slightly right as you requested before */}
          <div className="max-w-xl text-center ml-12">
            <p className="text-lg text-white-700 leading-relaxed max-w-2xl">
  Hi, I'm <span className="font-bold">Barsha Mondal</span> — an
  Electronics & Communication Engineering student at NIT Jamshedpur
  and a passionate Full Stack Web Developer.

  I build responsive, modern and user-friendly web applications using
  React, JavaScript, Tailwind CSS, Node.js and MongoDB.

  I enjoy creating clean UI designs, scalable backend systems and
  impactful real-world projects.
</p>
<div className="flex gap-4 mt-8 flex-wrap ml-24">
  <a
    href="#projects"
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
  >
    View Projects
  </a>

  <a
    href="https://github.com/barsha20061001"
    target="_blank"
    className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/barsha-mondal-5aa83a325"
    target="_blank"
    className="border border-blue-600 text-white-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-yellow transition"
  >
    LinkedIn
  </a>
</div>
            
            
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

      <section className="py-20 px-8">
  <div className="cursor-pointer grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[1400px] mx-auto">

    {[
      ["18+", "Projects"],
      ["20+", "Technologies"],
      ["15+", "Deployments"],
      ["100%", "Responsive"]
    ].map(([num, text]) => (
      <div
        key={text}
        className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg"
      >
        <h2 className="text-4xl font-black text-yellow-300 mb-2">
          {num}
        </h2>

        <p className="text-gray-300">{text}</p>
      </div>
    ))}
  </div>
</section>




      <section id="skills" className="py-20 px-8 bg-transparent ">
  <h2 className="text-5xl font-extrabold text-center mb-12 text-yellow"> My Skills</h2>

  <div className="cursor-pointer grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1400px] mx-auto text-black ">
    {[
      "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Vite",
  "Node.js",
  "PHP",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Python",
  "C++",
  "C",
  "Git",
  "GitHub",
  "VS Code",
  "Vercel",
  "Render",
  "Figma"
      
      
    ].map((skill) => (
      <div
        key={skill}
        className="p-5 rounded-2xl shadow-md text-center font-semibold bg-gray-50 hover:bg-blue-600 hover:text-white hover:scale-105 transition"
      >
        {skill}
      </div>
    ))}
  </div>
</section>

      
      {/* --- PROJECTS SECTION (THE ONE THAT DISAPPEARED) --- */}
      <motion.section
  id="projects"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }} className="cursor-pointer max-w-[1400px] mx-auto px-6 py-16 bg-transparent text-white rounded-3xl">
        <h3  className="text-5xl md:text-6xl font-extrabold text-center mb-24 py-6 bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent leading-relaxed"
>Selected Work & Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {PROJECTS.map((project, index) => (
            <div
  key={index}
  className="group bg-white/5 backdrop-blur-lg border-2 border-yellow-400/20 rounded-3xl overflow-hidden hover:scale-105 hover:border-yellow-400 hover:shadow-yellow-500/30 hover:shadow-2xl transition duration-300"
>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition duration-500" />
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-300 transition">{project.title}</h4>
                <p className="text-white-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-white text-black rounded-full border border-white">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="inline-block mt-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition duration-300">View Project on GitHub →</a>
                <a
  href={project.live}
  target="_blank"
  rel="noreferrer"
  className="inline-block mt-4 ml-3 border border-cyan-400 text-cyan-400 px-5 py-2 rounded-full font-bold hover:bg-cyan-400 hover:text-black transition duration-300"
>
  Live Demo
</a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <section
  id="contact"
  className="py-24 px-8 text-white text-center"
>
  <h2 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    Contact Me
  </h2>

  <p className="text-gray-300 max-w-[1400px] mx-auto mb-10 text-lg">
    Interested in collaborating, internships, freelance projects or
    opportunities! 
     Let's connect.
  </p>

  <div className="flex justify-center gap-6 flex-wrap">
    <a
      href="mailto:barshadgp212@gmail.com"
      className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"
    >
      Email Me
    </a>

    <a
      href="https://github.com/barsha20061001"
      target="_blank"
      className="border border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/barsha-mondal-5aa83a325"
      target="_blank"
      className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-bold hover:bg-cyan-400 hover:text-black transition"
    >
      LinkedIn
    </a>
  </div>
</section>

<footer className="border-t border-white/10 py-8 text-center text-gray-400">
  <p>
    © 2026 Barsha Mondal • Built with React, Tailwind CSS & ❤️
  </p>
</footer>

    </div> // Closes main div 
  );
};
   

export default App;