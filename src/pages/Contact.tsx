import { motion } from 'framer-motion';
import Section from '../components/UI/Section';
import ContactForm from '../components/UI/ContactForm';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary-500" />,
      title: 'Location',
      details: 'Bengalauru, KA',
    },
    {
      icon: <Mail className="h-6 w-7 text-primary-500" />,
      title: 'Email',
      details: 'guruprasad2903@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary-500" />,
      title: 'Phone',
      details: '+9008749883',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-900 max-w-2xl mx-auto"
            >
              I'd love to hear from you! Whether you have a question, want to start a project, or just want to connect.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="col-span-full md:col-span-1 space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <div className="mr-4">{item.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-full md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </Section>

      
    </>
  );
};

export default Contact;