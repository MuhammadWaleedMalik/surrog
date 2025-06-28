import { WEBSITE } from '../utils/websiteInfo';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const TermsAndConditions = () => {
  return (
    <>

      <main className="bg-gray-50">
        {/* Hero Section */}
        <motion.section 
          className="py-20 px-4 md:px-8"
          style={{ backgroundColor: 'var(--primary-color-1)' }}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={slideInLeft}
            >
              Terms and Conditions
            </motion.h1>
            <motion.p 
              className="text-xl text-white opacity-90 max-w-3xl mx-auto"
              variants={slideInRight}
            >
              Please read these terms carefully before using our services
            </motion.p>
          </div>
        </motion.section>

        {/* Terms Content */}
        <motion.section
          className="py-16 px-4 md:px-8 bg-white"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color-3)' }}>
                1. Introduction
              </h2>
              <p className="mb-6">
                Welcome to {WEBSITE.NAME} ("we", "our", or "us"). These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color-3)' }}>
                2. Services Provided
              </h2>
              <p className="mb-6">
                {WEBSITE.NAME} provides surrogacy matching and related services. We act as an intermediary between intended parents and surrogates, facilitating the surrogacy process while complying with all applicable laws and regulations.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color-3)' }}>
                3. Eligibility
              </h2>
              <p className="mb-6">
                To use our services, you must be at least 18 years old and legally capable of entering into binding contracts. By using our services, you represent and warrant that you meet these eligibility requirements.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color-3)' }}>
                4. User Responsibilities
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain the confidentiality of your account information</li>
                <li>Not engage in any fraudulent or illegal activities</li>
                <li>Not use our services to harass or harm others</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color-3)' }}>
                5. Privacy Policy
              </h2>
              <p className="mb-6">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you consent to our collection and use of your information as described in the Privacy Policy.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color-3)' }}>
                6. Intellectual Property
              </h2>
              <p className="mb-6">
                All content on our website, including text, graphics, logos, and images, is the property of {WEBSITE.NAME} or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without our express written permission.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color-3)' }}>
                7. Limitation of Liability
              </h2>
              <p className="mb-6">
                {WEBSITE.NAME} shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of our services. Our total liability for any claims related to our services shall not exceed the amount you paid us, if any, for using our services.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color-3)' }}>
                8. Changes to Terms
              </h2>
              <p className="mb-6">
                We may modify these Terms at any time. We will notify you of significant changes by posting the new Terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color-3)' }}>
                9. Governing Law
              </h2>
              <p className="mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where {WEBSITE.NAME} is established, without regard to its conflict of law provisions.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color-3)' }}>
                10. Contact Information
              </h2>
              <p className="mb-6">
                If you have any questions about these Terms, please contact us at {WEBSITE.EMAIL} or {WEBSITE.PHONE}.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <p className="text-sm text-gray-500 mt-12">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default TermsAndConditions;