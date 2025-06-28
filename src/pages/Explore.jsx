import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { WEBSITE } from '../utils/websiteInfo';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [selectedFilter, setSelectedFilter] = useState('all');

  const featureCards = [
    {
      id: 1,
      title: 'Intended Parents',
      description: 'Find compassionate surrogates and egg donors to help build your family. Connect with carefully screened individuals who share your values and vision for the journey ahead.',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800',
      route: '/intendedparents',
      stats: [
        { label: 'Active Profiles', value: '1,240+' },
        { label: 'Success Stories', value: '890+' }
      ]
    },
    {
      id: 2,
      title: 'Surrogates',
      description: 'Connect with intended parents looking for gestational carriers. Our platform helps match you with families based on shared preferences, location, and values.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
      route: '/surrogates',
      stats: [
        { label: 'Active Profiles', value: '850+' },
        { label: 'Matches Made', value: '620+' }
      ]
    },
    {
      id: 3,
      title: 'Egg Donors',
      description: 'Browse our database of carefully screened egg donors. Find donors that match your criteria with detailed profiles including medical history, education, and more.',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
      route: '/eggdonors',
      stats: [
        { label: 'Active Donors', value: '1,500+' },
        { label: 'Successful Matches', value: '1,100+' }
      ]
    }
  ];

  const filteredFeatures = featureCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen pt-16 text-black bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Begin Your Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our platform's three pathways to building families through assisted reproduction
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
            {/*Search*/}
            {/* <div className="relative flex-1 max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
              />
            </div> */}

            {/*Filters*/}
            {/* <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                // value={selectedFilter}
                // onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
              >
                <option value="all">All Options</option>
                <option value="parents">Intended Parents</option>
                <option value="surrogates">Surrogates</option>
                <option value="donors">Egg Donors</option>
              </select>
            </div>
         */}


          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <Link to={feature.route} className="text-2xl font-bold text-white hover:underline">
                        {feature.title}
                      </Link>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8 flex flex-col">
                    <div className="flex-1">
                      <Link to={feature.route} className="text-gray-700 text-lg leading-relaxed mb-6 hover:text-primary-600">
                        <p>{feature.description}</p>
                      </Link>

                      <div className="flex flex-wrap gap-4 mb-8">
                        {feature.stats.map((stat, i) => (
                          <div key={i} className="bg-gray-50 px-4 py-3 rounded-lg">
                            <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Link
                        to={feature.route}
                        className="inline-flex items-center px-6 py-3 bg-primary-500 text-black rounded-lg hover:bg-primary-600 transition-colors group"
                      >
                        <span className="font-medium">Explore {feature.title}</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredFeatures.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-xl shadow-sm"
            >
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No matching features found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  // setSelectedFilter('all');
                }}
                className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r text-black from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our matching specialists can guide you to the right path for your family-building journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact-advisor">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 text-blue-500 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
                >
                  Speak With an Advisor
                </motion.button>
              </Link>
              <Link to="/faqs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 text-blue-700 border-white  rounded-lg font-semibold hover:bg-white/10 transition-colors shadow-md"
                >
                  Browse FAQs
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Explore;