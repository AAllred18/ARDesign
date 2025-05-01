import Layout from "../components/Layout";
import PhotoGallery from "../components/PhotoGallery";

const About: React.FC = () => {
    return (
        <>
            <Layout>
            <div>
                {/* Welcome Section */}
                <div className="welcome-body">
                {/* Welcome Text */}
                <div className="text-box">
                    <h2>Welcome!</h2>
                    <p>
                    Hi there! I'm <strong>Andrew Allred</strong>, and I grew up in the beautiful town of <strong>Kealakekua</strong> on the island of <strong>Hawaii</strong>. 
                    I’m married to my wonderful wife, <strong>Reagan</strong>. 
                    My deep love for technology from a young age led me to pursue <strong>Information Systems</strong> at <strong>BYU Provo</strong>. 
                    Through my program, I’ve had the opportunity to expand and refine my skills in various ways.
                    </p>
                    <p>
                    Feel free to explore my website to learn more about my professional background and projects. 
                    If you’d like to connect or have any questions, don’t hesitate to reach out!
                    </p>
                </div>
                </div>
                {/* Photo Gallery */}
                <PhotoGallery /> 
                <div className="text-box">
                    <p>
                    Feel free to explore my website to learn more about my professional background and projects. 
                    If you’d like to connect or have any questions, don’t hesitate to reach out!
                    </p>
                </div>
            </div>

            </Layout>
        </>
    );
  };
  
  export default About;
  