import Layout from "../components/Layout";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import professionalHeadshot from "../assets/AJ.png";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="py-8 px-4 sm:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-blue-50 text-blue-900 text-center py-6 text-3xl font-bold rounded-md mb-8">
          Contact Me
        </div>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-12">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={professionalHeadshot}
              alt="Profile"
              className="w-full max-w-xs md:max-w-md rounded-2xl shadow-lg"
            />
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col items-center md:items-start w-full">
            <div className="w-full max-w-2xl space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-center md:text-left mb-2">Let's Connect</h2>
                <p className="text-gray-700 text-center md:text-left">
                  I'd love to hear from you! Reach out through any of the options below.
                </p>
              </div>

              <div className="space-y-4">
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
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-lg font-medium mb-2">Connect with me:</h3>
                <div className="flex gap-5 justify-center md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/andrew-allred2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:opacity-80 transition"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a
                    href="https://github.com/AAllred18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:opacity-80 transition"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
