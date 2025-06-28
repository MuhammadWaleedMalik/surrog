import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';

const Surrogates: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const surrogateFaqs = [
    {
      id: 1,
      question: "What are the requirements to become a surrogate?",
      answer: "Surrogates typically need to be 21-40 years old, have had at least one successful pregnancy, be in good health, and pass medical and psychological screenings. You must also have a stable living situation and reliable support system."
    },
    {
      id: 2,
      question: "How long does the surrogacy process take?",
      answer: "The entire process usually takes 12-18 months from application to delivery. This includes matching with intended parents, medical screenings, legal contracts, embryo transfer, pregnancy, and delivery."
    },
    {
      id: 3,
      question: "What is the compensation for surrogates?",
      answer: "First-time surrogates typically earn $35,000-$50,000, with experienced surrogates earning more. Additional compensation is provided for milestones, multiples, and other circumstances. All medical and pregnancy-related expenses are covered separately."
    },
    {
      id: 4,
      question: "Will I have contact with the intended parents?",
      answer: "This depends on your preferences and theirs. Some relationships are very close with regular contact, while others maintain more boundaries. We help match you based on these preferences."
    },
    {
      id: 5,
      question: "What medical procedures are involved?",
      answer: "The process includes fertility medications, monitoring appointments, embryo transfer procedure (similar to a pap smear), and standard prenatal care throughout the pregnancy."
    }
  ];

  const surrogateBenefits = [
    {
      title: "Generous Compensation",
      description: "Earn $35,000-$50,000+ while helping create a family",
      icon: "💰"
    },
    {
      title: "Medical Coverage",
      description: "All medical expenses fully covered by intended parents",
      icon: "🏥"
    },
    {
      title: "Legal Protection",
      description: "Comprehensive legal contracts before any medical procedures",
      icon: "⚖️"
    },
    {
      title: "Emotional Support",
      description: "Dedicated support team throughout your journey",
      icon: "💖"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Application",
      description: "Complete our detailed application and initial screening"
    },
    {
      step: 2,
      title: "Matching",
      description: "We'll introduce you to compatible intended parents"
    },
    {
      step: 3,
      title: "Medical Screening",
      description: "Complete fertility and health evaluations"
    },
    {
      step: 4,
      title: "Legal Contracts",
      description: "Independent attorneys draft and review all agreements"
    },
    {
      step: 5,
      title: "Embryo Transfer",
      description: "Simple outpatient procedure at a fertility clinic"
    },
    {
      step: 6,
      title: "Pregnancy & Delivery",
      description: "Regular prenatal care with full support from our team"
    }
  ];

  const handleFaqToggle = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest in becoming a surrogate! Our team will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen mt-24 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-100 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Become a Surrogate
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the profound joy of helping others create their family while receiving exceptional support and generous compensation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Become a Surrogate?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our surrogates receive comprehensive care and support throughout their journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {surrogateBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">The Surrogacy Journey</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Step-by-step process from application to delivery
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-0 left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between`}
                >
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mr-4">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block lg:w-2/12 flex-shrink-0 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="lg:w-5/12 mt-4 lg:mt-0">
                    {/* Empty space for alignment */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about becoming a surrogate
            </p>
          </div>

          <div className="space-y-4">
            {surrogateFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => handleFaqToggle(faq.id)}
                  className="w-full flex justify-between items-center p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  {activeFaq === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  )}
                </button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeFaq === faq.id ? 'auto' : 0,
                    opacity: activeFaq === faq.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Expert Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-0"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Interested in Becoming a Surrogate?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our surrogacy specialists are available to answer all your questions confidentially and without obligation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                    <p className="text-gray-600">(800) 555-7891</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-600">surrogates@fertilityclinic.com</p>
                    <p className="text-sm text-gray-500">Typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Live Chat</h3>
                    <p className="text-gray-600">Available on our website</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 10am-4pm EST</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Our Surrogacy Specialist</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Ready to Begin Your Surrogacy Journey?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join compassionate women who are helping dreams of parenthood come true
            </p>
            <div className="pt-6">
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Surrogates;