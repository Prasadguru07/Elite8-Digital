import { motion } from 'framer-motion';
import Section from '../components/UI/Section';
import SkillTag from '../components/UI/SkillTag';
import Timeline from '../components/UI/Timeline';
import { skills, experiences } from '../data/skills';
import Button from '../components/UI/Button';
import { Download, Mail } from 'lucide-react';

const About = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Category titles
  const categoryTitles = {
    frontend: 'Frontend',
    backend: 'Backend',
    design: 'Design',
    tools: 'Tools & Methods',
  };

  return (
    <>
      <Section className="pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://imgs.search.brave.com/3Z6h5sPo_yOGyDZ8Npmu4x7MBFAZBlYWbN1a9JXxF0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4Lzk3LzY4Lzgx/LzM2MF9GXzg5NzY4/ODE5Nl96V0lWU0di/dEJ6Q3lvUk10NGtV/UHRDMno4V0xGeUxF/Sy5qcGc"
              alt="Profile"
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-gray-600 mb-4">
              About Me
            </h1>
            
            <p className="text-lg text-blue-700 dark:text-grey-300">
              Hi I'm Guruprasad

              Cybersecurity Researcher | Full-Stack Developer | Tech Community Builder
              "Currently deepening my expertise in cybersecurity and full-stack development through hands-on projects, certifications, and community-driven workshops. Eager to collaborate with teams that value growth, innovation, and secure solutions."

              Information Science graduate blending technical expertise in secure software development with a passion for team leadership - both in tech and on the court. Specializing in building resilient systems while fostering collaborative environments.
            </p>
            
            <p className="text-lg text-black-700 dark:text-black-300">
              Technical Expertise:
              • Cybersecurity: Vulnerability assessment, network defense, phishing detection, SIEM
              • Development: Python, Django, SQL, JavaScript, REST APIs, React.js, Tailwind CSS
              • Tools: Nmap, Wireshark, Burp Suite, Jira, Linux

              Key Achievements:
              🏆 2x Interdepartmental Basketball Champion | Kabaddi Tournament Runner-Up
              • Led 5+ technical workshops at OSCODE Community (40% engagement boost)
              • Developed real-time vulnerability intelligence system with Python
              • Built phishing detection ML model during 48-hour hackathon
              • QA tested Hiremi App (15+ critical bugs documented)

              Certifications:
              Google Cybersecurity | CCNA (Cisco) | Cloud Computing (NPTEL)

              Seeking roles in cybersecurity or software development. Let's connect to discuss how my technical skills and team-driven mindset can contribute to your organization.
            </p>
            
            
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button href="https://drive.google.com/file/d/1A7EPfYRXkDYaeOlIZoW-y3zDhA8hWY-J/view" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        title="My Skills"
        subtitle="Technologies and tools I work with"
        className="bg-blue-50 dark:bg-gray-900"
      >
        <div className="space-y-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
              <div className="flex flex-wrap">
                {categorySkills.map((skill, index) => (
                  <SkillTag key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section
        title="Work Experience"
        subtitle="My professional journey"
      >
        <Timeline experiences={experiences} />
      </Section>

      {/* Education & Certifications */}
      <Section
        title="Education & Certifications"
        subtitle="My academic background and professional qualifications"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Education
            </h3>
            <ul className="space-y-4 mt-4">
              <li>
                <p className="text-primary-600 dark:text-primary-400 font-medium">2021 - 2025</p>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor of Engineering in Information Science and Engineering
                </h4>
                <p className="text-gray-600 dark:text-gray-300">visvesvaraya technological university</p>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Certifications
            </h3>
            <ul className="space-y-4 mt-4">
              <li>
                <p className="text-primary-600 dark:text-primary-400 font-medium">2022</p>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Google Cybersecurity Certified 
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Google coursera</p>
              </li>
              <li>
                <p className="text-primary-600 dark:text-primary-400 font-medium">2021</p>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Cloud Computing
                </h4>
                <p className="text-gray-600 dark:text-gray-300">NPTEL certification </p>
              </li>
              <li>
                <p className="text-primary-600 dark:text-primary-400 font-medium">2023</p>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Cybersecurity Job simulations from Tata group and mastercard
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Forage</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default About;