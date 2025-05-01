const Footer: React.FC = () => {
    return (
      <div className="footer text-center pt-6 pb-4">
        {/* Horizontal line above footer */}
        <hr
          style={{
            borderTop: '2px solid #4682B4',
            width: '95%',
            margin: '20px auto 16px auto',
          }}
        />
  
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/andrew-allred2024/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/LinkedIn.png"
            alt="LinkedIn"
            className="mx-auto mb-2"
            style={{ width: "24px", height: "24px" }}
          />
        </a>
  
        {/* Footer Text */}
        <div className="text-sm text-gray-600">
          &copy; A&amp;R Design {new Date().getFullYear()}
        </div>
      </div>
    );
  };
  
  export default Footer;
  