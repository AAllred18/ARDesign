import Layout from "../components/Layout";
import PhotoGallery from "../components/PhotoGallery";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";

const About: React.FC = () => {
  return (
    <>
      <Layout>
        <div>
          {/* Welcome Section */}
          <motion.div
            className="welcome-body"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Promo Section */}
            <SectionHeader text="About Me" />

            {/* Welcome Text */}
            <motion.div
              className="text-box px-4 md:px-12 lg:px-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <br />
              <p>
                Aloha! I'm <strong>Andrew Allred</strong>, born and raised in the serene town of <strong>Kealakekua</strong> on the Big Island of Hawaii.
                Growing up surrounded by the beauty of nature and the spirit of <em>ohana</em>, I developed a deep sense of gratitude, perseverance, and purpose.
                I’m also incredibly blessed to be married to my best friend and biggest supporter, <strong>Reagan</strong>.
              </p>

              <br />

              <p>
                From an early age, I found myself drawn to technology—not just as a tool, but as a way to solve problems and bring ideas to life.
                This passion led me to Brigham Young University, where I’m currently pursuing a Bachelor of Science in <strong>Information Systems</strong> at
                the STEM-certified <strong>Marriott School of Business</strong>.
              </p>

              <br />

              <p>
                My junior year has been especially transformative. Through the IS Junior Core, I’ve grown not only as a developer but as a thinker, teammate,
                and problem-solver. Some of the highlights include:
              </p>

              <ul className="list-disc list-inside ml-4">
                <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Leading the development of a full-stack application in our INTEX project to solve real-world client challenges</motion.li>
                <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Building secure and scalable database systems that support business decision-making</motion.li>
                <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Using Python, SQL, and Tableau to analyze data, uncover insights, and present findings to stakeholders</motion.li>
              </ul>

              <br />

              <p>
                This program has helped me see that technology is never just about code—it’s about people.
                I love using data to empower others, simplify complexity, and create meaningful impact.
                Whether it’s through a dashboard that helps a manager make a faster decision or a backend system that improves user experience,
                I’m passionate about building solutions that matter.
              </p>

              <br />

              <p>
                Outside of school, I find joy in connecting with others, serving in my community, and exploring the outdoors.
                My faith is central to who I am, and I firmly believe that our talents are gifts meant to bless the lives of others.
              </p>

              <br />

              <p>
                Feel free to explore my website to learn more about my projects and experience.
                If you have any questions or would like to connect, I’d love to hear from you!
              </p>

              <br />
            </motion.div>
          </motion.div>

          {/* Photo Gallery */}
          <PhotoGallery />

          {/* Closing Note */}
          <motion.div
            className="text-box"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <br />
            <p style={{ textAlign: 'center' }}>
              I hope you’ve enjoyed learning a bit about me! Feel free to browse the other pages or drop a message — I’d be happy to connect.
            </p>
            <br />
          </motion.div>
        </div>
      </Layout>
    </>
  );
};

export default About;
