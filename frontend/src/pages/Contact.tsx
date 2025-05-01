import Layout from "../components/Layout";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-md-5 mb-4 mb-md-0 text-center">
            <img 
              src="https://via.placeholder.com/350x350.png?text=Your+Photo" 
              alt="Profile" 
              className="img-fluid rounded-circle shadow" 
              style={{ maxWidth: "300px" }}
            />
          </div>

          {/* Right Side: Contact Information */}
          <div className="col-md-7">
            <h1 className="display-4 mb-4 text-center text-md-start">Contact Me</h1>
            <p className="lead mb-5 text-center text-md-start">
              I'd love to hear from you! Feel free to reach out through any of the options below.
            </p>

            <div className="list-group list-group-flush">
              {/* Email */}
              <a href="mailto:your.email@example.com" className="list-group-item list-group-item-action d-flex align-items-center mb-3">
                <Mail className="me-3 text-primary" size={28} />
                <span>your.email@example.com</span>
              </a>

              {/* Phone */}
              <div className="list-group-item d-flex align-items-center mb-3">
                <Phone className="me-3 text-success" size={28} />
                <span>+1 (123) 456-7890</span>
              </div>

              {/* Location */}
              <div className="list-group-item d-flex align-items-center mb-3">
                <MapPin className="me-3 text-danger" size={28} />
                <span>City, State, Country</span>
              </div>

              {/* Socials */}
              <div className="mt-4">
                <h5 className="mb-3">Connect with me:</h5>
                <div className="d-flex gap-4">
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                    <Linkedin size={32} />
                  </a>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                    <Github size={32} />
                  </a>
                  <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-info">
                    <Twitter size={32} />
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
