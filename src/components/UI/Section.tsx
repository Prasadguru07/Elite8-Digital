import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  fullWidth = false,
}: SectionProps) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={sectionVariants}
      className={`py-16 ${className}`}
    >
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8'}>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <motion.h2
                variants={contentVariants}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={contentVariants}
                className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        <motion.div variants={contentVariants}>{children}</motion.div>
      </div>
    </motion.section>
  );
};

export default Section;