import Layout from "../components/Layout";
import FlipCard from '../components/FlipCard';
import '../index.css'
import '../pages/Home.css'

import AboutImage from '../assets/About.jpg';
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
            width: "100%",
            height: "auto",
          }}
        >
          <div className="image-container">
            <img
              src="/src/assets/ReaganandAndrew.jpg"
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
              width: "100%",
              height: "100%",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <div className="w-full max-w-[90vw] md:max-w-[600px] mx-auto">
              <svg
                viewBox="0 0 1000 110"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-auto"
              >
                <text
                  x="50%"
                  y="100"
                  fontSize="90"
                  fontWeight="bold"
                  fill="white"
                  stroke="#4682B4"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  fontFamily="inherit"
                  textAnchor="middle"
                >
                  Welcome
                </text>
                <text
                  x="50%"
                  y="100"
                  fontSize="90"
                  fontWeight="bold"
                  fill="white"
                  fontFamily="inherit"
                  textAnchor="middle"
                >
                  Welcome
                </text>
              </svg>
            </div>

            <div className="w-full max-w-[90vw] md:max-w-[700px] mt-4 mx-auto">
              <svg
                viewBox="0 30 1000 100"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-auto"
              >
                <text
                  x="50%"
                  y="60"
                  fontSize="30"
                  fontWeight="bold"
                  fill="white"
                  stroke="#4682B4"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fontFamily="inherit"
                  textAnchor="middle"
                >
                  Let’s create something impactful
                </text>
                <text
                  x="50%"
                  y="60"
                  fontSize="30"
                  fontWeight="bold"
                  fill="white"
                  fontFamily="inherit"
                  textAnchor="middle"
                >
                  Let’s create something impactful
                </text>
              </svg>
            </div>
          </div>
        </div>

        <br />
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
  Welcome to A&R Design
</h1>
<p className="text-center text-lg text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed">
  I'm Andrew Allred, and I'm excited to welcome you to A&R Design — a space where creativity meets simplicity. This site is a reflection of my passion for clean, user-focused web design and thoughtful digital experiences. Whether you're here to explore my portfolio, learn more about my background, or get in touch for future collaboration, I'm glad you stopped by.  
  <br /><br />
  Take a look around, and feel free to reach out if anything resonates with you. I’m always looking forward to new challenges, great conversations, and creating work that makes an impact.
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