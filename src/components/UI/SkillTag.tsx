import { motion } from 'framer-motion';
import { Skill } from '../../data/skills';

interface SkillTagProps {
  skill: Skill;
  index: number;
}

const SkillTag = ({ skill, index }: SkillTagProps) => {
  const getBgColor = () => {
    switch (skill.category) {
      case 'frontend':
        return 'bg-primary-100 dark:bg-primary-900';
      case 'backend':
        return 'bg-secondary-100 dark:bg-secondary-900';
      case 'design':
        return 'bg-accent-100 dark:bg-accent-900';
      case 'tools':
        return 'bg-gray-100 dark:bg-gray-800';
      default:
        return 'bg-gray-100 dark:bg-gray-800';
    }
  };

  const getTextColor = () => {
    switch (skill.category) {
      case 'frontend':
        return 'text-primary-700 dark:text-primary-300';
      case 'backend':
        return 'text-secondary-700 dark:text-secondary-300';
      case 'design':
        return 'text-accent-700 dark:text-accent-300';
      case 'tools':
        return 'text-gray-700 dark:text-gray-300';
      default:
        return 'text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${getBgColor()} ${getTextColor()} m-1`}
    >
      {skill.name}
      <div className="ml-2 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full mx-0.5 ${
              i < skill.level
                ? getTextColor()
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </motion.span>
  );
};

export default SkillTag;