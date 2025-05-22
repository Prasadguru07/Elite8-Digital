import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/UI/Section';
import ProjectCard from '../components/UI/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.tags.includes(filter));

  return (
    <>
      <Section
        title="My Projects"
        subtitle="Explore my recent work and personal projects"
        className="pt-24"
      >
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </motion.button>
          
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>
        
        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  No projects found with the selected filter.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Section>
      
      {/* Contact CTA */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Have a project in mind?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-md bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Projects;