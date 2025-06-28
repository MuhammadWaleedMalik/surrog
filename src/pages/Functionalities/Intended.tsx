import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, Mail, ChevronDown, ChevronUp, Heart } from 'lucide-react';

const IntendedParents: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const parentFaqs = [
    {
      id: 1,
      question: "How do we get started with the surrogacy process?",
      answer: "The first step is a consultation with our team to discuss your options, whether you need an egg donor, surrogate, or both. We'll guide you through every step of creating your family-building plan."
    },
    {
      id: 2,
      question: "What are the costs involved?",
      answer: "Costs vary depending on your specific needs, but we provide transparent pricing breakdowns. Typical journeys range from $100,000-$150,000 including agency fees, surrogate compensation, medical expenses, and legal costs."
    },
    {
      id: 3,
      question: "How are surrogates screened?",
      answer: "Our surrogates undergo rigorous medical, psychological, and background screenings. We only work with women who have had healthy pregnancies, stable lifestyles, and are fully committed to helping create families."
    },
    {
      id: 4,
      question: "Can we choose our egg donor or surrogate?",
      answer: "Yes, you'll have access to our carefully curated databases where you can select based on characteristics important to you. We also facilitate meetings when both parties are comfortable."
    },
    {
      id: 5,
      question: "What legal protections are in place?",
      answer: "We work with experienced reproductive attorneys who draft comprehensive contracts covering all aspects of the arrangement. Parental rights are established before any medical procedures begin."
    }
  ];

  const programOptions = [
    {
      title: "Traditional Surrogacy",
      description: "Working with a surrogate who uses her own eggs",
      icon: "👩‍👧"
    },
    {
      title: "Gestational Surrogacy",
      description: "Using your embryos or donor eggs with a gestational carrier",
      icon: "🤰"
    },
    {
      title: "Egg Donation",
      description: "Select from our exceptional donor database",
      icon: "🥚"
    },
    {
      title: "Embryo Donation",
      description: "Receive donated embryos from other families",
      icon: "🧬"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Meet with our team to discuss your family-building goals"
    },
    {
      step: 2,
      title: "Matching",
      description: "Select your egg donor and/or surrogate from our database"
    },
    {
      step: 3,
      title: "Medical Process",
      description: "Complete fertility treatments and embryo creation"
    },
    {
      step: 4,
      title: "Legal Contracts",
      description: "Establish parental rights and financial agreements"
    },
    {
      step: 5,
      title: "Pregnancy Journey",
      description: "Support throughout the pregnancy with regular updates"
    },
    {
      step: 6,
      title: "Delivery & Parenthood",
      description: "Welcome your baby with our full support team"
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
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! Our team will contact you shortly to discuss your family-building options.');
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
      <section className="relative py-20 bg-gradient-to-r from-green-100 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              For Intended Parents
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your journey to parenthood starts here. Let us help you build the family you've dreamed of.
            </p>
             </motion.div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Family Building Options</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive programs tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-all"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Your Path to Parenthood</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our step-by-step process makes your journey clear and supported
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-0 left-1/2 h-full w-0.5 bg-indigo-200 transform -translate-x-1/2"></div>
            
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
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xl mr-4">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block lg:w-2/12 flex-shrink-0 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
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

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from families we've helped create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-indigo-600 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "After years of infertility struggles, our surrogate gave us the greatest gift. The team supported us every step of the way."
              </blockquote>
              <p className="font-medium">— Michael & David</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-indigo-600 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Our egg donor was perfect for us. The matching process was so smooth, and now we have beautiful twins!"
              </blockquote>
              <p className="font-medium">— Sarah & James</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-indigo-600 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "As a single father by choice, I couldn't have done this without the guidance and support of this amazing team."
              </blockquote>
              <p className="font-medium">— Robert</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Answers to common questions from intended parents
            </p>
          </div>

          <div className="space-y-4">
            {parentFaqs.map((faq) => (
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
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-indigo-600" />
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
      <section className="py-16 bg-gradient-to-br from-green-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-0"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Journey Today</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our parent coordinators are available to guide you through your options with compassion and expertise.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3 mr-4">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                    <p className="text-gray-600">(800) 555-7892</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 8am-6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3 mr-4">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-600">parents@fertilityclinic.com</p>
                    <p className="text-sm text-gray-500">Typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3 mr-4">
                    <MessageCircle className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Schedule Consultation</h3>
                    <p className="text-gray-600">Online booking available</p>
                    <p className="text-sm text-gray-500">Virtual or in-person options</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Our Parent Coordinator</h3>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md"
                  >
                    Get Started
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Ready to Begin Your Parenting Journey?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let us help you navigate the path to welcoming your child
            </p>
            <div className="pt-6">
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IntendedParents;