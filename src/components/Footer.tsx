import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { WEBSITE } from '@/utils/websiteInfo';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const companyLinks = [
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.pricing'), href: '/pricing' },
  ];

  const legalLinks = [
    { name: t('footer.privacy'), href: '/privacy' },
    { name: t('footer.cookies'), href: '/cookies' },
    { name: t('footer.terms'), href: '/terms' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: WEBSITE.SOCIAL.FACEBOOK },
    { name: 'Twitter', icon: Twitter, href: WEBSITE.SOCIAL.TWITTER },
    { name: 'Instagram', icon: Instagram, href: WEBSITE.SOCIAL.INSTAGRAM },
    { name: 'LinkedIn', icon: Linkedin, href: WEBSITE.SOCIAL.LINKEDIN },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-primary-1"
            >
              {WEBSITE.NAME}
            </motion.h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {WEBSITE.DESCRIPTION}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail size={16} />
                <span>{WEBSITE.EMAIL}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone size={16} />
                <span>{WEBSITE.PHONE}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin size={16} />
                <span>{WEBSITE.ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.company')}</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.support')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-primary-1 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {WEBSITE.NAME}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;