import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Heart, Shield } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const plans = [
    {
      name: 'Basic Support',
      price: '$25',
      description: 'Essential services for your surrogacy journey',
      features: [
        'Initial consultation',
        'Profile creation and matching',
        'Basic legal guidance',
        'Email support',
        'Resource library access',
      ],
      popular: false,
      color: 'primary-1',
      route: '/basic'
    },
    {
      name: 'Complete Care',
      price: '$100',
      description: 'Comprehensive support throughout your journey',
      features: [
        'Everything in Basic Support',
        'Dedicated coordinator',
        'Comprehensive legal services',
        '24/7 phone support',
        'Counseling services',
        'Medical coordination',
        'Insurance guidance',
      ],
      popular: true,
      color: 'primary-2',
      route: '/pro'
    },
    {
      name: 'Premium Experience',
      price: '$50',
      description: 'White-glove service with personalized attention',
      features: [
        'Everything in Complete Care',
        'Priority matching',
        'Concierge services',
        'Travel coordination',
        'Birth planning support',
        'Post-birth follow-up',
        'Extended support period',
        'VIP access to events',
      ],
      popular: false,
      color: 'primary-3',
      route: '/enterprise'
    },
  ];

  const additionalServices = [
    {
      name: 'Legal Services',
      price: '$1,500 - $3,000',
      description: 'Comprehensive legal support and contract drafting',
      icon: Shield,
    },
    {
      name: 'Counseling Services',
      price: '$150 per session',
      description: 'Professional counseling for all parties involved',
      icon: Heart,
    },
    {
      name: 'Medical Coordination',
      price: '$500 - $1,000',
      description: 'Coordination with fertility clinics and medical providers',
      icon: Star,
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
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the level of support that's right for your surrogacy journey. 
              All plans include our commitment to your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const isCurrentPlan = location.pathname === plan.route;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                    isCurrentPlan ? 'ring-4 ring-primary-1' : 
                    plan.popular ? 'ring-2 ring-primary-1 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-primary-1 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-primary-1 mb-2">{plan.price}</div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(plan.route)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        plan.popular
                          ? 'bg-primary-1 text-white hover:bg-primary-2'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {isCurrentPlan ? 'Selected' : 'Get Started'}
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optional services to enhance your surrogacy experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-2xl text-center"
                >
                  <div className="w-16 h-16 bg-primary-1/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-1" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-primary-1 mb-2">{service.price}</div>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What is included in the service fees?',
                answer: 'Our service fees cover matching services, coordination, support, and guidance throughout your surrogacy journey. Specific inclusions vary by plan.',
              },
              {
                question: 'Are there any hidden costs?',
                answer: 'No, we believe in transparent pricing. All costs are clearly outlined in your agreement. Additional services are optional and clearly priced.',
              },
              {
                question: 'Do you offer payment plans?',
                answer: 'Yes, we offer flexible payment plans to make our services accessible. Contact us to discuss options that work for your situation.',
              },
              {
                question: 'What if I need to change my plan?',
                answer: 'You can upgrade your plan at any time. We\'ll work with you to ensure you have the right level of support for your needs.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your needs and find the perfect plan for your journey.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-1 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;