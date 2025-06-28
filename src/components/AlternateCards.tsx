import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, MotionProps } from 'framer-motion';

// Animation variants for Framer Motion
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
  
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

// Interface for Service data
interface Service {
  title: string;
  description: string;
  image: string;
  path: string;
}

// Navbar Component
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  interface NavItem {
    name: string;
    path: string;
  }

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Intended Parents', path: '/intendedparents' },
    { name: 'Surrogates', path: '/surrogates' },
    { name: 'Egg Donors', path: '/eggdonors' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <motion.header
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Network Surrogacy
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.nav
          className="md:hidden bg-white px-4 py-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

// AlternateCards Component
export const AlternateCards: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Intended Parents',
      description:
        'Our surrogacy program for intended parents offers personalized support to guide you through every step of your journey to parenthood. From matching with a compassionate surrogate to navigating legal and medical processes, our dedicated team ensures a seamless and emotionally fulfilling experience. We prioritize transparency, ethical practices, and ongoing communication to make your dream of building a family a reality.',
      image: 'https://networksurrogacy.com/wp-content/uploads/2020/03/stephanie-liverani-zbsUo-DW3uU-unsplash-683x1024.jpg',
      path: '/intendedparents',
    },
    {
      title: 'Surrogates',
      description:
        'Becoming a surrogate is a deeply rewarding experience, and we’re here to support you every step of the way. Our program provides comprehensive medical, emotional, and financial support, ensuring you feel valued and empowered. We carefully match surrogates with intended parents, offer thorough screenings, and provide ongoing care to make your surrogacy journey safe and fulfilling.',
      image: 'https://networksurrogacy.com/wp-content/uploads/2020/03/charlotte-karlsen-jEOivVpqIyo-unsplash-683x1024.jpg',
      path: '/surrogates',
    },
    {
      title: 'Egg Donors',
      description:
        'As an egg donor, you have the power to help create families. Our egg donation program connects you with intended parents through a transparent and ethical process. We offer thorough medical and psychological screenings, personalized support, and fair compensation. Our team ensures you feel respected and informed throughout your donation journey, making it a meaningful experience.',
      image: 'https://networksurrogacy.com/wp-content/uploads/2020/03/kelly-sikkema-genZFP4itVc-unsplash-683x1024.jpg',
      path: '/eggdonors',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
        variants={fadeIn}
      >
        Our Services
      </motion.h2>
      <div className="space-y-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="w-full md:w-1/2 relative overflow-hidden border-4 border-gray-300 rounded-[50px_10px_10px_50px] [clip-path:polygon(10%_0%,90%_0%,100%_50%,90%_100%,10%_100%,0%_50%)]"
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover object-center"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
                  (e.currentTarget.src = '/assets/fallback-image.jpg')
                }
              />
            </motion.div>
            <motion.div
              className="w-full md:w-1/2"
              variants={index % 2 === 0 ? slideInRight : slideInLeft}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={service.path}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Service Page Components
const IntendedParents: React.FC = () => (
  <motion.div
    className="max-w-6xl mx-auto py-20 px-4 md:px-8"
    variants={fadeIn}
    initial="hidden"
    animate="visible"
  >
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      Intended Parents
    </h1>
    <p className="text-gray-600 text-lg mb-6">
      At Network Surrogacy, we understand the profound desire to build a family. Our surrogacy program for intended parents is designed to provide a compassionate, transparent, and supportive journey. We guide you through every step, from selecting a surrogate who aligns with your values to navigating medical procedures and legal agreements. Our team offers personalized counseling, regular updates, and access to trusted fertility clinics to ensure a smooth process. With over a decade of experience, we’ve helped countless parents welcome their children, fostering trust and joy every step of the way.
    </p>
    <p className="text-gray-600 text-lg">
      Our services include comprehensive matching, legal support, and ongoing communication to keep you informed and confident. We also provide resources for emotional support, helping you navigate the joys and challenges of surrogacy. Start your journey today and let us help you build your family with care and expertise.
    </p>
  </motion.div>
);

const Surrogates: React.FC = () => (
  <motion.div
    className="max-w-6xl mx-auto py-20 px-4 md:px-8"
    variants={fadeIn}
    initial="hidden"
    animate="visible"
  >
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      Surrogates
    </h1>
    <p className="text-gray-600 text-lg mb-6">
      Becoming a surrogate is a life-changing decision, and Network Surrogacy is committed to making your experience rewarding and safe. We offer extensive support, including medical screenings, psychological evaluations, and financial compensation that reflects your incredible contribution. Our matching process ensures you connect with intended parents who share your vision, fostering a meaningful relationship. Throughout the pregnancy, our coordinators provide regular check-ins, access to healthcare professionals, and emotional support to ensure your well-being.
    </p>
    <p className="text-gray-600 text-lg">
      Eligible surrogates must be between 21-40 years old, have had at least one healthy pregnancy, and pass our thorough screening process. We value your generosity and are dedicated to making your surrogacy journey empowering and fulfilling. Join our community of surrogates and make a lasting impact on a family’s life.
    </p>
  </motion.div>
);

const EggDonors: React.FC = () => (
  <motion.div
    className="max-w-6xl mx-auto py-20 px-4 md:px-8"
    variants={fadeIn}
    initial="hidden"
    animate="visible"
  >
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      Egg Donors
    </h1>
    <p className="text-gray-600 text-lg mb-6">
      Egg donation is a powerful gift that helps intended parents achieve their dream of parenthood. At Network Surrogacy, we offer a supportive and ethical egg donation program that prioritizes your health and comfort. Our process includes comprehensive medical and psychological screenings, personalized matching with intended parents, and fair compensation for your time and effort. We provide clear information and ongoing support to ensure you feel confident and valued throughout your donation journey.
    </p>
    <p className="text-gray-600 text-lg">
      Eligible donors are typically 20-30 years old, in good health, and committed to helping others. Our team handles all logistics, from medical appointments to legal agreements, so you can focus on making a difference. Become an egg donor with us and contribute to creating families with compassion and care.
    </p>
  </motion.div>
);

// Home Component
const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-white"
        style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={fadeIn}
          >
            Build Your Family with Network Surrogacy
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Compassionate, ethical, and personalized surrogacy services to help you start or grow your family.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            variants={fadeIn}
          >
            <motion.a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg font-semibold"
              whileHover={{ scale: 1.1, boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <Link
              to="/intended-parents"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-20 px-4 md:px-8 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            variants={slideInLeft}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Network Surrogacy
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              At Network Surrogacy, we believe in creating families through trust, compassion, and expertise. With over a decade of experience, our team supports intended parents, surrogates, and egg donors through every step of the surrogacy journey. Our mission is to provide ethical, transparent, and personalized services to make your dreams of parenthood a reality.
            </p>
            <p className="text-gray-600 text-lg">
              We are committed to fostering meaningful connections and ensuring a supportive environment for all parties involved. Our dedicated coordinators and legal experts guide you with care and professionalism.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 relative overflow-hidden border-4 border-gray-300 rounded-[50px_10px_10px_50px] [clip-path:polygon(10%_0%,90%_0%,100%_50%,90%_100%,10%_100%,0%_50%)]"
            variants={slideInRight}
          >
            <img
              src="/assets/about-image.jpg"
              alt="About Network Surrogacy"
              className="w-full h-64 object-cover object-center"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
                (e.currentTarget.src = '/assets/fallback-image.jpg')
              }
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 px-4 md:px-8 bg-gray-100"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AlternateCards />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-20 px-4 md:px-8 bg-blue-600 text-white"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id="contact"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Surrogacy Journey Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you’re an intended parent, surrogate, or egg donor, our team is here to guide you with compassion and expertise. Reach out to learn more.
          </p>
          <form className="max-w-xl mx-auto space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={5}
              required
            ></textarea>
            <motion.button
              type="submit"
              className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-full text-lg font-semibold"
              whileHover={{ scale: 1.1, boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};
