export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'design' | 'tools';
  icon?: string;
}

export const skills: Skill[] = [
  { name: 'JavaScript', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'HTML5/CSS3', level: 5, category: 'frontend' },
  { name: 'Tailwind CSS', level: 4, category: 'frontend' },
  { name: 'Framer Motion', level: 3, category: 'frontend' },
  { name: 'Postgresql', level: 3, category: 'backend' },
  { name: 'Firebase', level: 4, category: 'backend' },
  { name: 'UI/UX Design', level: 4, category: 'design' },
  { name: 'Figma', level: 4, category: 'design' },
  { name: 'Git', level: 4, category: 'tools' },
  { name: 'Jest/Testing', level: 3, category: 'tools' },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    title: 'QA Analyst intern',
    company: 'Wyreflow Technologies',
    period: '2 months',
    description: 'Collaborating with our passionate community to foster a dynamic and inclusive environment. Setting creative direction that aligns with our mission and inspires our team and community members.'
  },
  {
    title: 'Creative team lead',
    company: 'OScode community',
    period: '2023 - 2024',
    description: 'Developed full-stack applications using React, Node.js, and MongoDB. Improved deployment processes and mentored junior developers.'
  },
  {
    title: 'Cybersecurity intern',
    company: 'OScode community',
    period: '2 months',
    description: 'Successfully completed a comprehensive cybersecurity internship, gaining hands-on experience in network and web application security. Mastered essential tools like Wireshark, Nmap, OpenVAS, OWASP ZAP, and DVWA.Conducted in-depth vulnerability assessments and developed effective mitigation strategies.Contributed to the security of digital systems through threat detection and prevention.'
  },
  
];