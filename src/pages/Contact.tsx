import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { WEBSITE } from '@/utils/websiteInfo';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: WEBSITE.PHONE,
      description: 'Mon-Fri from 8am to 6pm',
    },
    {
      icon: Mail,
      title: 'Email',
      details: WEBSITE.EMAIL,
      description: 'We\'ll respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: WEBSITE.ADDRESS,
      description: 'Visit us for in-person consultation',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 8am-6pm',
      description: 'Weekend appointments available',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to answer your questions and guide you through your surrogacy journey. 
              Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-primary-1/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-1" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-primary-1 font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="intended_parent">Intended Parent Services</option>
                      <option value="surrogate">Surrogate Services</option>
                      <option value="consultation">Schedule Consultation</option>
                      <option value="support">Support Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent resize-none"
                    placeholder="Tell us about your situation and how we can help..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary-1 text-white rounded-lg hover:bg-primary-2 transition-colors font-medium"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Map/Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Office Image */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Office"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Office</h3>
                  <p className="text-gray-600 mb-4">
                    We welcome you to visit our comfortable office space for in-person consultations 
                    and meetings. Our team is here to provide personalized support.
                  </p>
                  <div className="text-sm text-gray-600">
                    <p className="mb-1"><strong>Address:</strong> {WEBSITE.ADDRESS}</p>
                    <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-primary-1 text-white p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-4 opacity-90">
                  For urgent matters or immediate support, don't hesitate to call us directly.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone size={16} />
                    <span className="font-medium">{WEBSITE.PHONE}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} />
                    <span className="font-medium">{WEBSITE.EMAIL}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to frequently asked questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How quickly can I expect a response?',
                answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.',
              },
              {
                question: 'Do you offer free consultations?',
                answer: 'Yes, we offer complimentary initial consultations to discuss your needs and how we can help with your surrogacy journey.',
              },
              {
                question: 'Can I schedule a weekend appointment?',
                answer: 'While our regular hours are Monday-Friday, we do offer weekend appointments by special arrangement for consultations.',
              },
              {
                question: 'Do you provide services internationally?',
                answer: 'Yes, we work with intended parents and surrogates internationally, though specific services may vary by location.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;