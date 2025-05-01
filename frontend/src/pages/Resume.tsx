import Layout from "../components/Layout";
import AndrewResume from '../assets/AndrewAllredResume.pdf'

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

                {/* Content Section */}
                <div className="flex-grow flex flex-col items-center justify-start px-4 md:px-8 py-6">
                <br/>
                    <p className="mb-4 text-center text-gray-700">
                        You can view or download my resume below.
                    </p>
                    <br/>

                    {/* Download Button */}
                    <a
                        href="/assets/AndrewAllredResume.pdf"
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

                    <br></br>

                    {/* Resume Viewer */}
                    <div className="flex justify-center w-full mb-6">
                        <div className="w-[80vw] h-[90vh] border shadow-lg">
                            <iframe
                                src={AndrewResume}
                                className="w-full h-full"
                                title="Andrew Allred Resume"
                            />
                        </div>
                    </div>

                    <br></br>

                </div>
            </div>
        </Layout>
    );
};

export default Resume;
