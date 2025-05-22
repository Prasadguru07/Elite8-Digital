import { motion } from 'framer-motion';
import { Experience } from '../../data/skills';

interface TimelineProps {
  experiences: Experience[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <div className="relative py-8">
      {/* Vertical line */}
      <div
        className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"
        aria-hidden="true"
      ></div>

      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
          className={`relative mb-12 md:mb-16 ${
            index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
          } md:w-1/2 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}
        >
          {/* Dot */}
          <div
            className="absolute top-0 left-0 md:left-auto md:right-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 transform md:translate-x-1/2 -translate-y-1/4"
            aria-hidden="true"
            style={{
              [index % 2 === 0 ? 'right' : 'left']: '-12px',
            }}
          ></div>

          <div
            className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow ${
              index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
            }`}
          >
            <span className="text-sm font-medium text-primary-500 dark:text-primary-400 block mb-1">
              {experience.period}
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {experience.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
              {experience.company}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {experience.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;