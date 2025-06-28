import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, BarChart, Shield } from 'lucide-react';
import { WEBSITE } from '../utils/websiteInfo';

const Cookies= () => {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly.',
      examples: [
        'Authentication and security cookies',
        'Session management cookies',
        'Load balancing cookies',
        'CSRF protection tokens',
      ],
      required: true,
    },
    {
      title: 'Analytics Cookies',
      icon: BarChart,
      description: 'Help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics tracking',
        'Page view statistics',
        'User behavior analysis',
        'Performance monitoring',
      ],
      required: false,
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      description: 'Enable enhanced functionality and personalization.',
      examples: [
        'Language preferences',
        'Theme settings',
        'Form data retention',
        'User interface preferences',
      ],
      required: false,
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="w-16 h-16 bg-primary-1/10 rounded-2xl flex items-center justify-center mx-auto">
              <Cookie className="text-primary-1" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600">
              Learn about how we use cookies to improve your experience on our website.
            </p>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At {WEBSITE.NAME}, we use cookies responsibly and transparently. This policy explains 
              what cookies we use, why we use them, and how you can control them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            <p className="text-xl text-gray-600">
              We use different types of cookies for various purposes
            </p>
          </motion.div>

          <div className="space-y-8">
            {cookieTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-1/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary-1" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          type.required 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {type.required ? 'Required' : 'Optional'}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{type.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, i) => (
                            <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary-1 rounded-full"></div>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-1 text-white p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Managing Your Cookie Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Browser Settings</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Block all cookies</li>
                  <li>• Block third-party cookies only</li>
                  <li>• Delete existing cookies</li>
                  <li>• Set cookie expiration preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Our Cookie Banner</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Accept or reject optional cookies</li>
                  <li>• Customize cookie categories</li>
                  <li>• Change preferences anytime</li>
                  <li>• View detailed cookie information</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Some cookies on our site are set by third-party services we use to enhance your experience:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-primary-1 pl-4">
                <h3 className="font-semibold text-gray-900">Google Analytics</h3>
                <p className="text-sm text-gray-600">
                  Helps us understand website usage and improve our services. 
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                     className="text-primary-1 hover:underline ml-1">
                    Learn more about Google's privacy policy
                  </a>
                </p>
              </div>
              
              <div className="border-l-4 border-primary-1 pl-4">
                <h3 className="font-semibold text-gray-900">Social Media Plugins</h3>
                <p className="text-sm text-gray-600">
                  Enable sharing content on social media platforms. These services may set their own cookies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-8 rounded-2xl text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please contact us.
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> {WEBSITE.EMAIL}</p>
              <p><strong>Phone:</strong> {WEBSITE.PHONE}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. When we make changes, we will 
              update the "Last updated" date at the top of this policy. We encourage you to review 
              this policy periodically to stay informed about our use of cookies.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;