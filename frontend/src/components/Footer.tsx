import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center pt-6 pb-4 text-sm text-gray-600">
      {/* Divider */}
      <hr
        style={{
          borderTop: '2px solid #4682B4',
          width: '95%',
          margin: '20px auto 16px auto',
        }}
      />

      {/* Icon Row */}
      <div className="flex justify-center items-center gap-6 mb-2">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/andrew-allred2024/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <img
            src="/LinkedIn.png"
            alt="LinkedIn"
            style={{ width: "25px", height: "25px" }}
          />
        </a>

        {/* Email */}
        <a
          href="mailto:andrewallred509@gmail.com"
          className="flex flex-col items-center text-blue-600 hover:underline transition"
        >
          <Mail className="w-7 h-7 mb-1" />
        </a>
      </div>

      {/* Footer Text */}
      <div>
        &copy; A&amp;R Design {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
