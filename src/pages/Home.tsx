import { AlternateCards } from '@/components/AlternateCards';
import { motion } from 'framer-motion';

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



// Home Component
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}

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
            Build Your Family with  Surrogacy
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
            <motion.a
              href="#about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
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
              About Surrogacy
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              At  Surrogacy, we believe in creating families through trust, compassion, and expertise. With over a decade of experience, our team supports intended parents, surrogates, and egg donors through every step of the surrogacy journey. Our mission is to provide ethical, transparent, and personalized services to make your dreams of parenthood a reality.
            </p>
            <p className="text-gray-600 text-lg">
              We are committed to fostering meaningful connections and ensuring a supportive environment for all parties involved. Our dedicated coordinators and legal experts guide you with care and professionalism.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            variants={slideInRight}
          >
            <img
              src="https://networksurrogacy.com/wp-content/uploads/2020/03/picsea-RW1GPQFNy-A-unsplash-1536x1025.jpg"
              alt="About Surrogacy"
              className="w-full rounded-lg shadow-xl object-cover"
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

      {/* Process Timeline Section */}
      <motion.section
        className="py-20 px-4 md:px-8 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
            variants={fadeIn}
          >
            Our Surrogacy Process
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600 hidden md:block"></div>
            {[
              {
                step: '1. Consultation',
                description: 'Meet with our team to discuss your goals and options.',
                side: 'left',
              },
              {
                step: '2. Matching',
                description: 'Find the perfect surrogate or donor with our personalized matching process.',
                side: 'right',
              },
              {
                step: '3. Legal Agreements',
                description: 'Our legal team ensures all contracts are clear and binding.',
                side: 'left',
              },
              {
                step: '4. Medical Process',
                description: 'Complete medical evaluations and embryo transfer with trusted clinics.',
                side: 'right',
              },
              {
                step: '5. Pregnancy & Support',
                description: 'Ongoing support for surrogates and parents throughout the pregnancy.',
                side: 'left',
              },
              {
                step: '6. Welcome Your Baby',
                description: 'Celebrate the arrival of your child with our continued support.',
                side: 'right',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className={`mb-12 flex flex-col md:flex-row ${
                  step.side === 'left' ? 'md:justify-start' : 'md:justify-end'
                }`}
                variants={step.side === 'left' ? slideInLeft : slideInRight}
              >
                <div
                  className={`w-full md:w-5/12 p-6 bg-gray-50 rounded-lg shadow-lg relative ${
                    step.side === 'left' ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full md:block hidden ${
                      step.side === 'left' ? 'right-[-3.5rem]' : 'left-[-3.5rem]'
                    }`}
                  ></div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.step}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 px-4 md:px-8 bg-gray-100"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
            variants={fadeIn}
          >
            Stories from Our Families
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Surrogacy made our dream of parenthood come true. Their team was with us every step of the way, and we now have our beautiful twins!',
                author: 'Sarah & John, Intended Parents',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28J31YvpKPzMiVypxBgBhROamGu4YC53tPA&s',
              },
              {
                quote:
                  'Being a surrogate was one of the most fulfilling experiences of my life. Surrogacy provided incredible support and care.',
                author: 'Emily, Surrogate',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxaRSFAHYbVv9VdL-hj_-hg7epv_yRPGs5caagtYq1yvb6FBtI9ugvd9LQmVMdUFoWZw&usqp=CAU',
              },
              {
                quote:
                  'The egg donation process was smooth and transparent. I felt valued and supported throughout.',
                author: 'Lisa, Egg Donor',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxaRSFAHYbVv9VdL-hj_-hg7epv_yRPGs5caagtYq1yvb6FBtI9ugvd9LQmVMdUFoWZw&usqp=CAU',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-gray-800 font-semibold">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 px-4 md:px-8 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
            variants={fadeIn}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                question: 'What is the surrogacy process like?',
                answer:
                  'The surrogacy process involves consultation, matching, legal agreements, medical procedures, pregnancy, and delivery. We guide you through each step with personalized support.',
              },
              {
                question: 'How are surrogates screened?',
                answer:
                  'Our surrogates undergo thorough medical, psychological, and background screenings to ensure they are healthy and prepared for the journey.',
              },
              {
                question: 'What are the costs involved?',
                answer:
                  'Costs vary based on individual circumstances. Contact us for a detailed consultation to understand the financial aspects of your surrogacy journey.',
              },
              {
                question: 'How long does the process take?',
                answer:
                  'The timeline varies, but typically the process takes 12-18 months from consultation to delivery, depending on individual circumstances.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
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

      {/* Footer */}
    </div>
  );
};

export default Home;