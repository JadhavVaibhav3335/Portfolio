import {motion} from "framer-motion";
import {
  Laptop,
  Code,
  Palette,
  Smartphone,
  BadgeCheck,
  Headset,
} from "lucide-react";

const services = [
  {
    icon: <Laptop size={42} />,
    title: "Web Design",
    desc: "I design clean, modern, user-focused layouts that balance aesthetics with usability. Every page is crafted to feel intuitive, fast, and visually engaging.",
  },
  {
    icon: <Code size={42} />,
    title: "Web Development",
    desc: "I build scalable and maintainable web applications using modern tech stacks. From APIs to dynamic UI, I focus on performance, security, and clean architecture.",
  },
  {
    icon: <Palette size={42} />,
    title: "Creative Design",
    desc: "I create visually compelling designs that communicate your brand's message effectively. My approach combines creativity with strategic thinking to deliver impactful results.",
  },
  {
    icon: <Smartphone size={42} />,
    title: "Responsive Design",
    desc: "I ensure your website looks and functions perfectly on all devices, from desktops to smartphones. My responsive designs provide seamless user experiences across various screen sizes.",
  },
  {
    icon: <BadgeCheck size={42} />,
    title: "Branding Identity",
    desc: "I develop strong branding identities that resonate with your target audience. From logos to brand guidelines, I help create a cohesive and memorable brand presence.",
  },
  {
    icon: <Headset size={42} />,
    title: "24/Support",
    desc: "I provide reliable 24/7 support to ensure your website runs smoothly. Whether it's troubleshooting, updates, or maintenance, I'm here to help you keep your online presence strong.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-[#1a1a1a] text-white py-24 flex justify-center px-8 lg:px-20">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Heading */}
        <p className="text-gray-400 text-sm tracking-widest mb-1">
          What I am Expert In
        </p>
        <h2 className="text-3xl font-bold mb-14 tracking-widest uppercase">
          My Service
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.1}}
              viewport={{once: true}}
              className="bg-[#121212] text-center px-6 py-10 rounded-lg border border-gray-800 hover:border-gray-500 transition"
            >
              <div className="flex justify-center mb-4 text-gray-300">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
