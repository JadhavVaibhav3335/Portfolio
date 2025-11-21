import { motion } from "framer-motion";
import aboutImg from "../assets/Images/About-img.jpg";
import "../styles/about.css";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#1a1a1a] text-white py-24 flex justify-center px-8 lg:px-20">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Image with Shapes */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center about-img-wrapper"
        >
          <img
            src={aboutImg}
            alt="About"
            className="w-[320px] h-[460px] object-cover z-10"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 border-b pb-2 w-fit">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
          I'm Vaibhav, a seasoned Fullstack developer driven by the thrill of building robust and dynamic web applications. With expertise spanning both frontend and backend technologies, I infuse projects with versatility and depth, delivering solutions that stand the test of time.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn’t anything embarrassing hidden in the middle of text.
          </p>

  <a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    neon-btn group relative inline-flex items-center gap-3
    px-8 py-3 rounded-xl font-semibold text-white
    bg-white/10 backdrop-blur-md border border-white/20
    shadow-[0_6px_0px_0px_rgba(255,255,255,0.3)]
    transition-all duration-300
    hover:translate-y-[-2px] 
    active:translate-y-[3px] active:shadow-[0_2px_0px_rgba(255,255,255,0.2)]
  "
>
  <span className="text-xl group-hover:scale-110 group-hover:-rotate-6 transition duration-300">
    📄
  </span>

  <span className="transition-all duration-300 group-hover:translate-x-1">
    VIEW RESUME
  </span>

  {/* Neon border layer */}
  <span className="neon-border"></span>
</a>


        </motion.div>
      </div>
    </section>
  );
}
