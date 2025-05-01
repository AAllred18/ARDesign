import Layout from "../components/Layout";
import FlipCard from '../components/FlipCard';
import '../index.css'
import '../pages/Home.css'

import HomeImage from '../assets/ReaganandAndrew.jpg'

import AboutImage from '../assets/About.png';
import ResumeImage from '/src/assets/Resume.png';
import ContactImage from '../assets/Contact.png';
import PortfolioImage from '/src/assets/Portfolio.png';

const imageMap: Record<string, string> = {
  "About Me": AboutImage,
  Resume: ResumeImage,
  Contact: ContactImage,
  Portfolio: PortfolioImage,
};

const sections = [
  { title: 'About Me', path: '/about', description: 'Learn more about my background and journey.' },
  { title: 'Resume', path: '/resume', description: 'Explore my skills and experience in detail.' },
  { title: 'Portfolio', path: '/projects', description: 'See my latest projects and accomplishments.' },
  { title: 'Contact', path: '/contact', description: 'Let’s get in touch!' }
];

const Home: React.FC = () => {

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <div
          style={{
            position: "relative",
            width: "95%",
            height: "auto",
            margin: "0 auto"
          }}
        >
          <div className="image-container">
            <img
              src={HomeImage}
              alt="Andrew and Reagan"
              className="responsive-hero-image"
            />
          </div>

          {/* Overlay text without background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "95%",
              height: "100%",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              textAlign: "center",
              margin: "0 auto"
            }}
          >
            <div className="w-full max-w-[90vw] md:max-w-[600px] mx-auto fade-in-up">
              <svg
                viewBox="0 -30 1100 200"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-auto svg-welcome-wrapper"
              >
                <text
                  x="50%"
                  y="120"
                  fontSize="90"
                  fontWeight="bold"
                  fill="white"
                  stroke="#4682B4"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  fontFamily="inherit"
                  textAnchor="middle"
                  className="svg-welcome"
                >
                  Welcome
                </text>
                <text
                  x="50%"
                  y="120"
                  fontSize="90"
                  fontWeight="bold"
                  fill="white"
                  fontFamily="inherit"
                  textAnchor="middle"
                  className="svg-welcome"
                >
                  Welcome
                </text>
              </svg>
            </div>

            <div className="w-full max-w-[90vw] md:max-w-[700px] mt-4 mx-auto  fade-in-up"
              style={{ animationDelay: "0.8s" }}>
              <svg
                viewBox="0 25 1000 80"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-auto svg-subtitle-wrapper"
                
              >
                <text
                  x="50%"
                  y="60"
                  fontSize="35"
                  fontWeight="bold"
                  fill="white"
                  stroke="#4682B4"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                  fontFamily="inherit"
                  textAnchor="middle"
                  className="svg-subtitle"
                >
                  Let’s create something impactful
                </text>
                <text
                  x="50%"
                  y="60"
                  fontSize="35"
                  fontWeight="bold"
                  fill="white"
                  fontFamily="inherit"
                  textAnchor="middle"
                  className="svg-subtitle"
                >
                  Let’s create something impactful
                </text>
              </svg>
            </div>
          </div>
        </div>

        <br />
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          At A&R Design, creativity meets simplicity.
        </h1>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed">
          I'm Andrew Allred — a developer passionate about crafting clean, user-focused websites and thoughtful digital experiences. Whether you're here to browse my work, learn about my journey, or start a conversation, I'm glad you're here.
          <br /><br />
          Take a look around, and feel free to reach out if something resonates. I’m always excited by new challenges, meaningful projects, and opportunities to make a difference through design.
        </p>

        {/* Cards to link each section */}
        <div className="flex flex-wrap justify-center px-6 py-10">
          {sections.map((section) => (
            <FlipCard
              key={section.title}
              title={section.title}
              description={section.description}
              path={section.path}
              image={imageMap[section.title]}
            />
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Home;