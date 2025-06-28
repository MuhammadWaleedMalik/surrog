import { WEBSITE } from '../utils/websiteInfo'
import { motion } from 'framer-motion';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backOut"
    }
  }
};

const AboutUs = () => {
  return (
    <>
        <title>About Us | {WEBSITE.NAME}</title>
        <meta name="description" content={`Learn about ${WEBSITE.NAME} - ${WEBSITE.DESCRIPTION}`} />

      {/* Hero Section */}
      <section className="relative mt-24 bg-gradient-to-r from-primary-4 to-primary-5 text-white py-24 px-4 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About {WEBSITE.NAME}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl opacity-90">
              {WEBSITE.TAGLINE} - Compassionate, ethical surrogacy services since 2010
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('')" }}
        ></div>
      </section>

      {/* Mission Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row gap-12 items-center"
            variants={staggerContainer}
          >
            <motion.div className="md:w-1/2" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  At {WEBSITE.NAME}, we're dedicated to creating families through ethical, compassionate surrogacy arrangements. We believe every individual deserves the opportunity to experience parenthood, regardless of their circumstances.
                </p>
                <p>
                  Founded in 2010, we've helped bring over 1,200 babies into loving homes through our carefully managed surrogacy programs.
                </p>
                <p>
                  Our team of experienced professionals provides comprehensive support to both intended parents and surrogates throughout the entire journey.
                </p>
              </div>
            </motion.div>
            <motion.div className="md:w-1/2" variants={scaleIn}>
              <img 
                src="https://networksurrogacy.com/wp-content/uploads/2020/04/lubomirkin-XKpPsuuGE_Q-unsplash-768x512.jpg" 
                alt="Our Mission" 
                className="w-full rounded-lg shadow-xl object-cover h-96"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every relationship we build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Compassion",
                description: "We approach every situation with empathy and understanding, recognizing the emotional complexity of surrogacy journeys.",
                icon: "❤️"
              },
              {
                title: "Integrity",
                description: "We maintain the highest ethical standards in all our operations and relationships.",
                icon: "⚖️"
              },
              {
                title: "Excellence",
                description: "We provide world-class service through continuous improvement and attention to detail.",
                icon: "🌟"
              },
              {
                title: "Transparency",
                description: "We believe in open communication and clear expectations at every stage.",
                icon: "🔍"
              },
              {
                title: "Respect",
                description: "We honor the dignity of all individuals involved in the surrogacy process.",
                icon: "🤝"
              },
              {
                title: "Innovation",
                description: "We continually evolve our practices to provide the best possible experience.",
                icon: "💡"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your surrogacy journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                bio: "With over 15 years in reproductive health, Sarah founded {WEBSITE.NAME} to create a more ethical surrogacy process.",
                img: "https://networksurrogacy.com/wp-content/uploads/2020/04/court-cook-le7D9QFiPr8-unsplash-1568x2352.jpg"
              },
              {
                name: "Lisa Thompson",
                role: "Medical Director",
                bio: "Board-certified reproductive endocrinologist overseeing all medical aspects of our programs.",
                img: "https://networksurrogacy.com/wp-content/uploads/2020/04/christiana-rivers-O_XIvDy0pcs-unsplash-768x513.jpg"
              },
              {
                name: "Emily Rodriguez",
                role: "Surrogate Coordinator",
                bio: "Dedicated to supporting surrogates through every step of their journey.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunWAbzTf36uxf9v5aSgwlQBGBiBj1F_2fKg&s"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-primary-3 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio.replace('{WEBSITE.NAME}', WEBSITE.NAME)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Surrogacy Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A clear, step-by-step journey designed for your peace of mind
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-primary-2 transform -translate-x-1/2"></div>
            
            {/* Process steps */}
            <div className="space-y-12 md:space-y-0">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description: "We discuss your goals and explain our comprehensive surrogacy programs.",
                  icon: "🗣️"
                },
                {
                  step: "2",
                  title: "Matching Process",
                  description: "We carefully match you with a surrogate based on your preferences and values.",
                  icon: "❤️"
                },
                {
                  step: "3",
                  title: "Medical Screening",
                  description: "Comprehensive health evaluations for all parties to ensure safety.",
                  icon: "🏥"
                },
                {
                  step: "4",
                  title: "Legal Agreements",
                  description: "We facilitate all necessary legal contracts with specialized attorneys.",
                  icon: "📝"
                },
                {
                  step: "5",
                  title: "Pregnancy Journey",
                  description: "Ongoing support through every stage of the pregnancy.",
                  icon: "🤰"
                },
                {
                  step: "6",
                  title: "Delivery & Beyond",
                  description: "Assistance with hospital arrangements and post-birth legalities.",
                  icon: "👶"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} mb-12`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* For even steps (left side) */}
                  {index % 2 === 0 && (
                    <>
                      <div className="md:w-1/2 md:pr-12 order-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{process.title}</h3>
                        <p className="text-gray-600">{process.description}</p>
                      </div>
                      <div className="md:w-1/2 md:pl-12 order-2 md:flex md:justify-start">
                        <div className="w-16 h-16 rounded-full bg-primary-1 text-white flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 mx-auto md:mx-0">
                          {process.icon}
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* For odd steps (right side) */}
                  {index % 2 !== 0 && (
                    <>
                      <div className="md:w-1/2 md:pr-12 order-2 md:flex md:justify-end">
                        <div className="w-16 h-16 rounded-full bg-primary-1 text-white flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 mx-auto md:mx-0">
                          {process.icon}
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-12 order-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{process.title}</h3>
                        <p className="text-gray-600">{process.description}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-primary-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Surrogacy Journey?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today to schedule a confidential consultation with one of our specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-white text-primary-5 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
              <motion.a
                href="/signup"
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary-5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;