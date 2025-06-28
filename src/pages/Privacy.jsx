import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { WEBSITE } from '../utils/websiteInfo';

const Privacy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: FileText,
      content: [
        'Personal identification information (name, email, phone number)',
        'Medical and health information relevant to surrogacy',
        'Financial information for payment processing',
        'Communication records and preferences',
        'Website usage data and analytics',
      ],
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'To provide and improve our surrogacy services',
        'To match intended parents with suitable surrogates',
        'To communicate with you about your journey',
        'To process payments and manage accounts',
        'To comply with legal and regulatory requirements',
      ],
    },
    {
      title: 'Information Sharing',
      icon: Shield,
      content: [
        'We only share information with your explicit consent',
        'Information may be shared with matched parties as part of the surrogacy process',
        'We may share data with trusted service providers under strict confidentiality agreements',
        'Legal authorities may receive information if required by law',
        'We never sell your personal information to third parties',
      ],
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'We use industry-standard encryption to protect your data',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and updates are performed',
        'Secure servers and databases protect your information',
        'We maintain backup systems to prevent data loss',
      ],
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy is our priority. Learn how we protect and handle your personal information.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At {WEBSITE.NAME}, we understand the sensitive nature of surrogacy and the importance of 
              protecting your personal information. This Privacy Policy explains how we collect, use, 
              and safeguard your information when you use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance 
              with this policy. We are committed to maintaining the highest standards of privacy and 
              confidentiality throughout your surrogacy journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-1/10 rounded-xl flex items-center justify-center">
                    <Icon className="text-primary-1" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-1 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-1 text-white p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Access & Control</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Request access to your personal data</li>
                  <li>• Update or correct your information</li>
                  <li>• Request deletion of your data</li>
                  <li>• Opt-out of communications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Data Portability</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Export your data in a readable format</li>
                  <li>• Transfer data to another service</li>
                  <li>• Receive copies of your information</li>
                  <li>• Withdraw consent at any time</li>
                </ul>
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
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Privacy?</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> {WEBSITE.EMAIL}</p>
              <p><strong>Phone:</strong> {WEBSITE.PHONE}</p>
              <p><strong>Address:</strong> {WEBSITE.ADDRESS}</p>
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
            className="bg-gray-100 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any material 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              We encourage you to review this Privacy Policy periodically to stay informed about how we 
              protect your information.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;