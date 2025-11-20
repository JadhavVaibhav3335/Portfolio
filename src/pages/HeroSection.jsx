
import { motion } from "framer-motion";
import profileImg from "../assets/Images/profile-img.jpg";
import "../styles/hero.css";   // import CSS above
import { useEffect, useRef, useState } from "react";
import useTypewriter from "../hooks/useTypewriter";

export default function HeroSection() {
   const text = useTypewriter(
    ["FULLSTACK DEVELOPER", "WEB DESIGNER", "MERN STACK DEVELOPER"],
    90,
    1500
  );

  const fadeRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => setVisible(e.isIntersecting)),
      { threshold: 0.3 }
    );
    if (fadeRef.current) observer.observe(fadeRef.current);
  }, []);

  return (
    <div id="home" className="w-full min-h-screen bg-black text-white flex flex-col">

      {/* NAVBAR */}
      {/* <header className="flex items-center justify-between px-5 py-5 border-b border-gray-800">
        <div className="text-2xl font-bold tracking-widest">VJ</div>
        <button className="p-2 border border-gray-600 rounded-md">
          <Menu className="w-6 h-6" />
        </button>
      </header> */}

      {/* HERO */}
      <div
        ref={fadeRef}
        className={`fade-in-section ${visible ? "visible" : ""} 
        flex flex-col lg:flex-row items-center justify-center lg:justify-between 
        px-6 sm:px-10 lg:px-24 py-10 gap-10 lg:gap-0 flex-grow`}
      >

       
       {/* LEFT SECTION */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left max-w-xl"
>
  <p className="tracking-widest text-xs sm:text-sm font-semibold bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">
    I AM VAIBHAV JADHAV
  </p>

 <h1 className="
  text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight uppercase 
  bg-gradient-to-r from-cyan-300 via-white to-cyan-500 
  text-transparent bg-clip-text 
  tracking-wide transition-all duration-300
">
  {text}
  
  <span className="
    ml-1 inline-block w-[3px] h-10 
    bg-cyan-400 
    animate-pulse-soft
  "></span>
</h1>



  <a
  href="https://www.linkedin.com/in/jadhavvaibhav" 
  target="_blank"
  rel="noopener noreferrer"
  className="mx-auto lg:mx-0 mt-3 sm:mt-6 px-8 py-3 border border-gray-500 rounded-full 
             hover:bg-white hover:text-black transition font-semibold w-fit"
>
  CONTACT ME
</a>


  {/* SOCIAL ICONS BELOW BUTTON */}
  <div className="flex items-center gap-6 mt-4 mx-auto lg:mx-0">
    <a href="https://github.com/jadhavvaibhav3335" target="_blank" className="social-icon">
      <i className="fa-brands fa-github"></i>
    </a>

    <a href="https://www.linkedin.com/in/jadhavvaibhav" target="_blank" className="social-icon">
      <i className="fa-brands fa-linkedin"></i>
    </a>

    
    <a href="https://www.instagram.com/vaibhav_jadhav_08?igsh=Y3dreDlpYzJrNnox" target="_blank" className="social-icon">
      <i className="fa-brands fa-instagram"></i>
    </a>
  </div>
</motion.div>

        

        {/* RIGHT IMAGE */}
        <div className="glow-wrap">
          <motion.img
            src={profileImg}
            alt="profile"
            className="w-44 sm:w-56 md:w-60 lg:w-[320px] rounded-lg object-cover float-img relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>

      </div>
    </div>
  );
}
