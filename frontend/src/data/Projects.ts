// Import images here
import CinenicheImage from '../assets/Cineniche.png'
import TurtleShelterImage from '../assets//TurtleShelterProject.png'
import CCLMImage from '../assets/CCLM.png'

const projects = [
    {
      title: "CineNiche Streaming Platform",
      date: "04/11/2025",
      description: "A movie streaming site with user lists, ratings, and authentication.",
      longDescription:
        "Cineniche is a full-stack movie discovery platform our team built for BYU's INTEX 2025, enabling users to browse, search, rate, and organize films through personalized watchlists. We developed a responsive React and TypeScript frontend, connected to a .NET Web API backend with Azure Blob Storage for scalable data handling. The application features secure user authentication, dynamic filtering, and a custom data ingestion tool to manage thousands of movie records.\n\nFeel free to make an account and explore it for yourself!",
      image: CinenicheImage,
      repoLink: "https://github.com/AAllred18/IntexDos/tree/main",
      liveLink: "https://moviesappsa79595.z22.web.core.windows.net/",
      tech: [
        "React",                   // Frontend Framework
        "Bootstrap",               // Frontend Styling
        "Azure Services",          // Cloud Hosting & Storage
        ".NET Web API",            // Backend Framework
        "Custom Data Recommender"  // Feature/Tool Integration
      ]
    },
    {
      title: "Turtle Shelter Project Platform",
      date: "12/06/2024",
      description: "A volunteer and event management system with analytics for a nonprofit serving Utah's homeless.",
      longDescription:
        "Built during BYU's 1-week INTEX 2024 competition, the Turtle Shelter Project is a full-stack web platform designed to help a Utah nonprofit manage volunteers and events supporting individuals experiencing homelessness. Our system enables admins to track events, volunteers, and user roles, while allowing anonymous users to request new service opportunities.\n\nWe used React and Bootstrap for the frontend, with a Node.js and PostgreSQL backend. We also analyzed HUD’s PIT dataset and developed a Tableau dashboard to visualize homelessness trends across regions and demographics. While this project is not currently implemented on the official TSP site, it showcases scalable solutions for real-world nonprofit challenges.",
      image: TurtleShelterImage,
      repoLink: "https://github.com/AAllred18/INTEX-2024?tab=readme-ov-file", 
      liveLink: "", // No current live deployment link
      tech: [
        "React",                    // Frontend Framework
        "Bootstrap",                // Frontend Styling
        "Node.js",                  // Backend Runtime
        "Python",                   // Data Processing & ETL
        "PostgreSQL",               // Relational Database
        "Tableau",                  // Data Visualization
        "AWS Deployment"           // Hosting & Infrastructure
      ]
    },
    {
      title: "Interactive Model",
      date: "07/26/2024",
      description: "A volunteer and event management system with analytics for a nonprofit serving Utah's homeless.",
      longDescription:
        "This project is an interactive visualization of the Christlike Leader Model, created in collaboration with the Sorensen Center. Using HTML, CSS, and JavaScript, I designed a responsive, user-friendly interface that allows visitors to explore core leadership principles in a dynamic and memorable way. Users can hover over each principle to reveal concise explanations, click through layered elements for deeper doctrinal context, and navigate seamlessly between visual components that reinforce key attributes of Christlike leadership. The interactivity transforms abstract ideas into an intuitive experience, helping users internalize the spiritual and practical qualities of becoming a Christ-centered leader. This project blends faith-based learning with modern web design, showcasing how technology can support reflective, meaningful engagement.",
      image: CCLMImage,
      repoLink: "https://github.com/AAllred18/Interactive-Circular-Model", 
      liveLink: "https://sorensencenter.byu.edu/about/christ-centered-leader-model", 
      tech: [
        "HTML",                    
        "CSS",                
        "Javascript",                  
        "Figma"          
      ]
    }
    
  ];  
  
  export default projects;
  