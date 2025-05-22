export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Real-Time Vulnerability Intelligence and Mitigation System for IT Infrastructure",
    description: "Developed an automated web scraping tool to enhance cybersecurity for critical infrastructure by delivering real-time threat intelligence.",
    image: "https://imgs.search.brave.com/ptGPqBg19KQxUv-_LXywLO2k4W40wkl-9ZXfMH1mVJ4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3RvY2tjYWtl/LmNvbS9wdWJsaWMv/Ny82LzIvNzYyYjY0/YWEtNjAxZC00NmI4/LWEzYTUtMDk2OTVh/MmRkZTk2X2xhcmdl/L2Z1dHVyaXN0aWMt/YnJhaW4tY2lyY3Vp/dC1zdG9ja2Nha2Uu/anBn",
    tags: ["webscrapping", "python", "Firecrawl AI", "Scrapy", "Cybersecurityity"],
    link: "https://github.com/PrasadGuru07",
    github: "https://github.com/PrasadGuru07",
  },
  {
    id: 2,
    title: "Phishing detection ML model",
    description: "This project demonstrates a systematic approach to building a phishing classification model, starting with data cleaning and EDA. Text preprocessing, feature extraction using TF-IDF, and model training with various algorithms",
    image: "https://imgs.search.brave.com/zgbXEJx6s0vjU-uMLXixCxImAkhpLvd6Ixc2mTcTCUs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NWE1NzY0OTlhMWYz/YWE5NDYyZTkxMjAv/NjgyYWE3MTQyZTYx/NGVlYjdmYmZlNWQ5/X2FpLXRyYWNrZXJz/LTIucG5n",
    tags: ["Python", "ML", "Streamlite", "Algorthims", "AI"],
    link: "https://example.com/ML-app",
    github: "https://github.com/Prasadguru07/Hackathon-2024",
  },
  {
    id: 3,
    title: "SECURITY RISK ESTIMATION TOOL",
    description: "I designed and developed a Security Risk Estimation Tool to help organizations assess vulnerabilities in their software and web applications. This user-friendly tool follows the OWASP Risk Rating Methodology, allowing users to estimate likelihood and impact of threats. By prioritizing risks and suggesting mitigation strategies based on OWASP TOP 10, the tool empowers organizations to improve risk management, enhance security posture, and make informed decisions",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["JavaScript", "API Integration", "CSS3", "HTML5", "chart.js", "OWASP TOP 10"],
    link: "https://example.com/SEC-app",
    github: "https://github.com/Prasadguru/Projects-2024",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "A personal portfolio website showcasing my projects, skills, and experiences. Built with React and Tailwind CSS for a modern and responsive design.",
    image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["jquery", "Netlify", "Tailwind CSS", "Framer Motion", "React"],
    link: "https://guru-prasad-0718.netlify.app/",
    
  },
];