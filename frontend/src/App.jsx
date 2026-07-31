import React, { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Sidebar from "./components/Sidebar";
import IoTCanvas from "./components/IoTCanvas";

import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";

import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";


const Portfolio = () => {

  const [active,setActive] = useState("About");


  const handleNavigation=(section)=>{

    setActive(section);

    const element =
      document.getElementById(section);


    if(element){

      element.scrollIntoView({
        behavior:"smooth",
        block:"start",
      });

    }

  };



  useEffect(()=>{


    const sections =
      document.querySelectorAll("section");


    const observer =
      new IntersectionObserver(

        (entries)=>{

          entries.forEach((entry)=>{

            if(entry.isIntersecting){

              setActive(entry.target.id);

            }

          });

        },

        {
          threshold:0.2,
          rootMargin:"-100px 0px -50% 0px",
        }

      );


    sections.forEach((section)=>{

      observer.observe(section);

    });



    return ()=>{

      sections.forEach((section)=>{

        observer.unobserve(section);

      });

    };


  },[]);



  return (

    <div
      className="
        min-h-screen
        relative
      "
    >

      <IoTCanvas />


      <Sidebar
        active={active}
        onNav={handleNavigation}
      />

      <main
        className="
          relative
          z-10
          lg:ml-[32%]
          px-6
          lg:px-12
          max-w-5xl
          pb-10
        "
      >
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </main>

    </div>

  );

};



export default function App(){


return (

<BrowserRouter>

<Routes>


<Route
path="/"
element={<Portfolio/>}
/>



<Route
path="/projects-access"
element={<Login/>}
/>



<Route
path="/adminpanel"
element={<AdminPanel/>}
/>



<Route
path="*"
element={<Navigate to="/" />}
/>

</Routes>

</BrowserRouter>

);


}