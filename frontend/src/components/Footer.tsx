import { Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-white pt-6 pb-4 text-sm text-gray-600 mt-12"
      style={{ borderTop: '2px solid #4682B4' }}
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center space-y-4">

        {/* Icon Row */}
        <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/andrew-allred2024/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition"
          style={{ color: "#4682B4" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#315f7d")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#4682B4")}
        >
          <Linkedin className="w-6 h-6" />
        </a>

        <a
          href="mailto:andrewallred509@gmail.com"
          aria-label="Email"
          className="transition"
          style={{ color: "#4682B4" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#315f7d")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#4682B4")}
        >
          <Mail className="w-6 h-6" />
        </a>
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} A&amp;R Design &mdash; All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
