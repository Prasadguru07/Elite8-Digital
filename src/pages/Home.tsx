import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronRight, Code, Layout, Paintbrush } from 'lucide-react';
import Button from '../components/UI/Button';
import Section from '../components/UI/Section';
import { projects } from '../data/projects';
import ProjectCard from '../components/UI/ProjectCard';

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    });
  }, [controls]);

  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary-500" />,
      title: 'Web Development',
      description: 'Creating responsive, accessible, and performant websites using modern technologies.',
    },
    {
      icon: <Layout className="h-10 w-10 text-primary-500" />,
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces and experiences that engage and delight users.',
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-primary-500" />,
      title: 'Brand Identity',
      description: 'Developing cohesive brand systems that communicate your unique value proposition.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 to-secondary-900/10 -z-10"></div>
        
        {/* Background Circles */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl"></div>
          <div className="absolute bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary-500/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent-500/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-6xl md:text-6xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Guru prasad
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-600 mb-8 max-w-3xl"
            >
              Building beautiful, functional, and user-friendly digital experiences.
              Specializing in modern web technologies and creative solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/projects" size="lg">
                View My Work
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          animate={controls}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll</span>
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-primary-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* Services Section */}
      <Section
        title="What I Do"
        subtitle="Specialized services tailored to meet your digital needs"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section
        title="Featured Projects"
        subtitle="Explore some of my recent work"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/projects">
            View All Projects
            <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Let's work together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Have a project in mind? I'm available for freelance work and open to new opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Home;