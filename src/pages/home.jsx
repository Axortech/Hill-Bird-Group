import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';
import teamMembers from '../data/teammembers';
import businesses from '../data/business'; // Import business data

const Home = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      {/* About Us Section */}
      <section id="about-us" className="flex flex-wrap items-center py-12 scroll-mt-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="aboutus.png"
            alt="About Us"
            className="rounded-lg w-full"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold text-primary mb-4">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> About Us
          </h2>
          <p className="text-gray-600 mb-4">
            Hillbird Group is a dynamic multipurpose investment company with a diverse portfolio that spans across key sectors such as real estate, jewelry, and agriculture. Founded with the vision to drive sustainable growth and innovation, we are committed to delivering value and excellence in every venture we undertake.          </p>
          <p className="text-gray-600">
            Our real estate investments focus on developing premium properties that enhance urban living and contribute to community growth. In the jewelry sector, we combine craftsmanship with cutting-edge design, offering timeless pieces that reflect sophistication and elegance. Our agriculture investments prioritize sustainable practices, promoting eco-friendly farming methods to ensure long-term food security and environmental stewardship.          </p>
          <p className='text-gray-600'>At Hillbird Group, we believe in the power of diversification, enabling us to create opportunities that benefit our clients, partners, and stakeholders. Our dedication to excellence, sustainability, and innovation is the cornerstone of our success, as we continue to expand our influence and grow our portfolio across industries.</p>
        </div>
      </section>

      {/* Our Business Section */}
      <section id="our-companies" className="py-12 scroll-mt-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Our Business
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <a
              key={index}
              href={business.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition"
            >
              <img
                src={business.logo}
                alt={business.name}
                className="w-full h-24 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold">{business.name}</h3>
              <p className="text-gray-600">{business.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-12 scroll-mt-16">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Our Services
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-4">
            <li>Premium real estate development for residential and commercial properties</li>
            <li>Exclusive jewelry investments and collaboration with skilled artisans</li>
            <li>Sustainable agricultural development for long-term productivity</li>
            <li>Investment consulting tailored to real estate, jewelry, and agriculture sectors</li>
            <li>Commitment to community development and environmentally sustainable practices</li>
          </ul>
        </div>
      </section>


      {/* Our Team Section */}
      <section id="our-team" className="py-12 scroll-mt-16">
        <h2 className="text-3xl text-primary font-bold text-center mb-8">
          <FontAwesomeIcon icon={faUser} className="mr-2" /> Our Team
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.email} className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
              <img
                src={member.profileImage}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 mt-2 block">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> {member.email}
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mt-2 block">
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
