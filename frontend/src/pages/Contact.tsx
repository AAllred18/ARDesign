import Layout from "../components/Layout";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import professionalHeadshot from "../assets/AJ.png";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="py-8 px-4 sm:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="bg-blue-50 text-blue-900 text-center py-6 text-3xl font-bold rounded-md mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.div>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-12">
          {/* Left: Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={professionalHeadshot}
              alt="Profile"
              className="w-full max-w-xs md:max-w-md rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            className="flex flex-col items-center md:items-start w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-2xl space-y-6">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <h2 className="text-2xl font-semibold text-center md:text-left mb-2">Let's Connect</h2>
                <p className="text-gray-700 text-center md:text-left">
                  I'd love to hear from you! Reach out through any of the options below.
                </p>
              </motion.div>

              <motion.div className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                {/* Email */}
                <a
                  href="mailto:andrewallred509@gmail.com"
                  className="flex items-center text-gray-800 hover:text-blue-600 transition"
                >
                  <Mail className="w-6 h-6 mr-3 text-blue-600" />
                  andrewallred509@gmail.com
                </a>

                {/* Phone */}
                <div className="flex items-center text-gray-800">
                  <Phone className="w-6 h-6 mr-3 text-blue-600" />
                  +1 (808) 464-0959
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-800">
                  <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                  Provo, UT, USA
                </div>
              </motion.div>

              {/* Socials */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <h3 className="text-lg font-medium mb-2">Connect with me:</h3>
                <div className="flex gap-5 justify-center md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/andrew-allred2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:opacity-80 transition transform hover:scale-110"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a
                    href="https://github.com/AAllred18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:opacity-80 transition transform hover:scale-110"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
