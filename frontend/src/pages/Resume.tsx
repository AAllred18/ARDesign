import Layout from "../components/Layout";
import AndrewResume from '../assets/AndrewAllredResume.pdf';
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaAward, FaToolbox, FaMusic } from "react-icons/fa";

const Resume: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Header Section */}
        <div style={{
          backgroundColor: '#f0f8ff',
          textAlign: 'center',
          padding: '30px 16px',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1e3a8a'
        }}>
          My Resume
        </div>

        {/* Interactive Resume Section */}
        <div className="px-4 md:px-12 py-6 space-y-12">
          <motion.div className="bg-white p-6 rounded shadow-md" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaGraduationCap /> Education
            </h2>
            <p className="font-bold">Bachelor of Science, Information Systems</p>
            <p>Brigham Young University, Apr 2026</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>GPA: 3.32 | 50% Tuition Scholarship</li>
              <li>Courses: Data Structures, Machine Learning, Enterprise Development</li>
              <li>Association for Information Systems Member</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white p-6 rounded shadow-md" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaBriefcase /> Experience
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Website Manager – BYU Sorensen Center (May 2024 – Present)</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Boosted website search visibility by 20%</li>
                  <li>Developed interactive model with HTML, CSS, JavaScript</li>
                  <li>Improved newsletter open rate by 10%</li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Data Journalist – Sport Radar (Feb 2024 – Present)</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Logged sports stats with 100% accuracy</li>
                  <li>Stayed current on trends & rules impacting scouting</li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Customer Service – Crumbl Cookies (Sep 2022 – May 2024)</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Recovered over $29,000 through FedEx claims</li>
                  <li>Improved productivity 15% with Excel tracking</li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Volunteer Representative – Iowa City, IA (Nov 2021 – Jul 2022)</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Led 8 workshops for 25+ volunteers</li>
                  <li>Increased unit output by 50%</li>
                  <li>Hosted Facebook live event reaching 20,000+ residents</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-6 rounded shadow-md" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaAward /> Other Achievements & Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              <div className="flex items-center gap-2"><FaAward /> Eagle Scout, BSA</div>
              <div className="flex items-center gap-2"><FaAward /> Valedictorian, Konawaena HS</div>
              <div className="flex items-center gap-2"><FaToolbox /> Proficient in woodworking tools</div>
              <div className="flex items-center gap-2"><FaMusic /> Piano, Guitar, Ukulele</div>
            </div>
          </motion.div>
        </div>

        {/* View Official Resume Section */}
        <div className="flex-grow flex flex-col items-center justify-start px-4 md:px-8 py-6">
          <p className="mb-4 text-center text-gray-700">
            Feel free to download my official resume below.
          </p>

          {/* Download Button */}
          <a
            href={AndrewResume}
            download
            style={{
              display: "inline-block",
              padding: "0.5rem 1.5rem",
              border: "2px solid #1e3a8a",
              color: "#1e3a8a",
              fontWeight: "600",
              borderRadius: "0.5rem",
              backgroundColor: "transparent",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1e3a8a";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#1e3a8a";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Download Resume
          </a>
        </div>

      </div>
    </Layout>
  );
};

export default Resume;
