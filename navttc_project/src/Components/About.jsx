import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
        {/* Profile Section */}
        <div className="flex items-center mb-6">
          {/* <img 
            src="https://via.placeholder.com/150" 
            alt="Imran Ahmad" 
            className="rounded-full w-32 h-32 border-4 border-red-500"
          /> */}
          <div className="ml-6">
            <h1 className="text-3xl font-bold text-gray-800">Imran Ahmad</h1>
            <p className="text-red-500 text-lg">MERN Stack Developer</p>
          </div>
        </div>

        {/* Description */}
        <div className="text-gray-700">
          <p className="mb-4">
            I am a passionate MERN stack developer who loves building dynamic and responsive web applications. My expertise lies in using MongoDB, Express.js, React.js, and Node.js to create robust full-stack solutions.
          </p>
          <p className="mb-4">
            My journey into web development began with a curiosity for how things work. I love transforming ideas into reality through code and am constantly learning new technologies to improve my skills.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or engaging with the developer community. I'm always open to collaboration and networking!
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-6 space-x-4">
        <a href="https://www.facebook.com/share/DpT1ukwxAVFnRCZW/?mibextid=xfxF2i" className=" p-2 rounded-full">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://github.com/imranahmad537/" className="  p-2 rounded-full">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/imran-ahmad-968660271" className="  p-2 rounded-full">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

  );
};

export default About;
