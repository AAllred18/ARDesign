import Layout from "../components/Layout";
import FlipCard from '../components/FlipCard';
import '../index.css';
import '../pages/Home.css';
import { motion } from "framer-motion";

import HomeImage from '../assets/ReaganandAndrew.jpg';
import AboutImage from '../assets/About.png';
import ResumeImage from '/src/assets/Resume.png';
import ContactImage from '../assets/Contact.png';
import PortfolioImage from '/src/assets/Portfolio.png';
// import { useEffect, useState } from "react";

const imageMap: Record<string, string> = {
  "About Me": AboutImage,
  Resume: ResumeImage,
  Contact: ContactImage,
  Portfolio: PortfolioImage,
};

const sections = [
  { title: 'About Me', path: '/about', description: 'Learn more about my background and journey.' },
  { title: 'Resume', path: '/resume', description: 'Explore my skills and experience in detail.' },
  { title: 'Portfolio', path: '/portfolio', description: 'See my latest projects and accomplishments.' },
  { title: 'Contact', path: '/contact', description: 'Let’s get in touch!' }
];

const Home: React.FC = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  // useEffect(() => {
  //   const handleResize = () => setIsMobile(window.innerWidth < 600);
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        {/* Hero Section */}
        <div style={{ position: "relative", width: "95%", height: "auto", margin: "0 auto" }}>
          <div className="image-container">
            <img src={HomeImage} alt="Andrew and Reagan" className="responsive-hero-image" />
          </div>

          {/* Overlay text */}
          {/* Overlay text inside image container */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <motion.div
  className="double-corner-box flex flex-col items-center text-center gap-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {/* Welcome Title */}
  <div className="relative inline-block mb-4">
    <h1 className="text-5xl md:text-7xl lg:text-8xl filled-text">Welcome</h1>
    <h1 className="text-5xl md:text-7xl lg:text-8xl outlined-text" aria-hidden="true">Welcome</h1>
  </div>

  {/* Subtitles */}
  {["Build with Purpose", "Design with Intention", "Create with Meaning"].map((line, index) => (
    <motion.div
      key={line}
      className="relative inline-block"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.3, duration: 0.6 }}
    >
      <p className="text-xl md:text-2xl lg:text-3xl filled-text">{line}</p>
      <p className="text-xl md:text-2xl lg:text-3xl outlined-text" aria-hidden="true">{line}</p>
    </motion.div>
  ))}
</motion.div>


          </div>

        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <br /><br />
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            At A&R Design, creativity meets simplicity.
          </h1>
          <br /><br />
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed">
            I'm Andrew Allred — a developer passionate about crafting clean, user-focused websites and thoughtful digital experiences. Whether you're here to browse my work, learn about my journey, or start a conversation, I'm glad you're here.
            <br /><br />
            Take a look around, and feel free to reach out if something resonates. I’m always excited by new challenges, meaningful projects, and opportunities to make a difference through design.
          </p>
          <br /><br />
        </motion.div>

        {/* Cards to link each section */}
        <motion.div className="flex flex-wrap justify-center px-6 py-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {sections.map((section) => (
            <FlipCard
              key={section.title}
              title={section.title}
              description={section.description}
              path={section.path}
              image={imageMap[section.title]}
            />
          ))}
        </motion.div>

        <br /><br />
      </motion.div>
    </Layout>
  );
};

export default Home;
