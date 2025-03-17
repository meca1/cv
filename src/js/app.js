// Resume Data
const resumeData = {
  name: "Daniel Ramos",
  role: "Backend Software Engineer",
  contact: {
    email: {
      label: "Email",
      value: "drramosdev@gmail.com",
      href: "mailto:drramosdev@gmail.com"
    },
    phone: {
      label: "Phone",
      value: "+573219952993"
    },
    github: {
      label: "GitHub",
      value: "github.com/meca1",
      href: "https://github.com/meca1"
    },
    linkedin: {
      label: "LinkedIn",
      value: "linkedin.com/in/danielramosdev",
      href: "https://www.linkedin.com/in/danielramosdev"
    },
    languages: {
      label: "Languages",
      value: "Español (Nativo), Inglés (Profesional completo)"
    }
  },
  sections: {
    summary: {
      title: "ABOUT ME",
      content: "I am a self-taught Software Engineer proficient in technologies such as Node.js, Python, Golang, distributed systems, and Docker. " +
              "With six years of industry experience, I have a strong expertise in Backend and Full-Stack development, specializing in Node.js, AWS, Python, Serverless Architecture, and Microservices. " +
              "My skills also include working with various databases like PostgreSQL, MySQL, MongoDB, DynamoDB, as well as CI/CD pipelines and testing frameworks like Jest and Cypress. " +
              "I excel in agile environments and have experience in DevOps practices, cloud solutions, and leading agile teams using tools like Jira and Trello. " +
              "I am eager to bring my passion for technology and software development to innovative teams and projects, constantly staying updated with the latest trends and technologies."
    },
    technicalSkills: {
      title: "TECHNICAL EXPERTISE",
      subsections: {
        coreTechnologies: {
          title: "Core Technologies",
          items: [
            "Node.js",
            "Python",
            "TypeScript/JavaScript",
            "Golang",
            "React",
            "Flask"
          ]
        },
        frameworksTools: {
          title: "Frameworks & Tools",
          items: [
            "Docker",
            "Jest",
            "Linux",
            "Firebase",
            "Terraform",
            "CI/CD (AWS Pipelines, GitHub Actions)"
          ]
        },
        cloudInfrastructure: {
          title: "Cloud & Infrastructure",
          items: [
            "Amazon Web Services",
            "Serverless Framework",
            "NoSQL Database Management",
            "Relational Database Management (RDBMS)",
            "Microservices Architecture",
            "Distributed Systems"
          ]
        }
      }
    },
    experience: {
      title: "PROFESSIONAL EXPERIENCE",
      items: [
        {
          title: "Software Engineer",
          company: "Cocora",
          period: "Jan 2024 - Present",
          location: "Bogotá, Colombia",
          achievements: [
            "Led backend projects using Node.js, Express.js, and AWS Lambda. Managed databases with Amazon RDS and coordinated asynchronous communications with Amazon SQS. Utilized Python for various backend tasks",
            "Enhanced user experience by integrating AngularJS, Firebase, and React for dynamic interfaces and real-time functionalities",
            "Contributed to team success by delivering high-quality results and quickly adapting to new technologies",
            "Implemented innovative solutions using Python to tackle complex backend challenges, optimizing performance and scalability while reducing development time"
          ]
        },
        {
          title: "Backend Software Engineer",
          company: "Perficient",
          period: "Jun 2022 - Dec 2023",
          location: "Bogotá, Colombia",
          achievements: [
            "Specialized in working on serverless projects in the fintech industry, leveraging leading software engineering practices",
            "Utilized a wide range of technologies including Serverless framework, microservices architecture, AWS Cloud, DynamoDB, Node.js, CloudWatch, Lambda, Cognito, PostgreSQL, and Jest to provide high-quality solutions",
            "Focus on optimizing development processes, ensuring high-quality deliveries within set timelines, using AWS cloud services",
            "Contributed to a wide variety of projects, developing solutions from mobile enterprise applications to robust software platforms"
          ]
        },
        {
          title: "Senior Software Developer",
          company: "Akily",
          period: "Apr 2019 - Jun 2022",
          location: "San Francisco, United States",
          achievements: [
            "Technical Leadership: Led and oversaw the technical processes of the development team at Akily, ensuring projects were executed with high standards of quality and efficiency",
            "Continuous Improvement: Stayed updated with industry best practices and emerging technologies, proposing and implementing innovative solutions to drive ongoing success",
            "Cross-Functional Collaboration: Worked closely with product managers, designers, and quality assurance teams to ensure a cohesive vision and execution throughout the product development lifecycle",
            "Mentorship and Professional Growth: Provided guidance and support to developers, fostering an environment of continuous learning and development"
          ]
        },
        {
          title: "Full Stack Developer",
          company: "Tap4Click",
          period: "Jun 2018 - Dec 2018",
          location: "Bogotá, Colombia",
          achievements: [
            "Worked on a variety of mobile app and PWA projects, utilizing Angular/Ionic, TypeScript, NativeScript, and Apollo-GraphQL",
            "Contributed to the Veur app project, an app designed to help vehicle owners manage maintenance alerts and document expiration reminders",
            "Enhanced multiple web applications using Ruby on Rails as a part of our technology stack"
          ]
        }
      ]
    },
    projects: {
      title: "NOTABLE PROJECTS",
      items: [
        {
          name: "Data Processing Platform",
          technologies: "Python, Apache Spark, AWS, Airflow",
          description: "Designed and implemented a scalable data processing platform handling millions of records daily",
          highlights: [
            "Implemented fault-tolerant architecture",
            "Reduced processing time by 60%",
            "Automated deployment using Terraform"
          ]
        }
      ]
    },
    education: {
      title: "EDUCATION",
      items: [
        {
          degree: "Ingeniería de Sistemas",
          institution: "Fundación de Educación Superior San José",
          period: "",
          location: "Colombia, Bogotá"
        }
      ]
    }
  }
};

// Initialize the page
function initializePage() {
  // Set page title and header
  document.getElementById('page-title').textContent = `${resumeData.name} - Resume`;
  document.getElementById('full-name').textContent = resumeData.name;
  document.getElementById('role').textContent = resumeData.role;
  
  // Initialize contact info
  initializeContact();
  
  // Initialize all sections
  initializeSections();
}

function initializeContact() {
  const contactInfo = document.getElementById('contact-info');
  contactInfo.innerHTML = '';
  
  Object.entries(resumeData.contact).forEach(([key, item]) => {
    const div = document.createElement('div');
    const label = document.createElement('span');
    label.className = 'label';
    label.textContent = item.label + ':';
    
    const value = item.href 
      ? document.createElement('a') 
      : document.createElement('span');
    
    if (item.href) {
      value.href = item.href;
      value.target = '_blank';
    }
    value.textContent = item.value;
    
    div.appendChild(label);
    div.appendChild(value);
    contactInfo.appendChild(div);
  });
}

function initializeSections() {
  // Initialize Professional Summary
  const summarySection = document.getElementById('professional-summary');
  if (summarySection) {
    summarySection.querySelector('h2').textContent = resumeData.sections.summary.title;
    document.getElementById('profile-summary').textContent = resumeData.sections.summary.content;
  }

  // Initialize Technical Skills
  const skillsSection = document.getElementById('technical-skills');
  if (skillsSection) {
    skillsSection.querySelector('h2').textContent = resumeData.sections.technicalSkills.title;
    const subsections = resumeData.sections.technicalSkills.subsections;
    
    Object.entries(subsections).forEach(([key, subsection]) => {
      const sectionElement = document.getElementById(key.replace(/([A-Z])/g, '-$1').toLowerCase());
      if (sectionElement) {
        sectionElement.querySelector('h3').textContent = subsection.title;
        const ul = sectionElement.querySelector('ul');
        ul.innerHTML = subsection.items.map(item => `<li>${item}</li>`).join('');
      }
    });
  }

  // Initialize Experience
  const experienceSection = document.getElementById('professional-experience');
  if (experienceSection) {
    experienceSection.querySelector('h2').textContent = resumeData.sections.experience.title;
    const experienceContainer = document.getElementById('experience');
    experienceContainer.innerHTML = resumeData.sections.experience.items
      .map(job => `
        <div class="job">
          <div class="job-header">
            <h3>${job.title} at ${job.company}</h3>
            <div class="job-period">${job.period} | ${job.location}</div>
          </div>
          <ul>
            ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
          </ul>
        </div>
      `)
      .join('');
  }

  // Initialize Projects
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.querySelector('h2').textContent = resumeData.sections.projects.title;
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = resumeData.sections.projects.items
      .map(project => `
        <div class="project">
          <h3>${project.name}</h3>
          <div class="project-tech">${project.technologies}</div>
          <p>${project.description}</p>
          <ul>
            ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
          </ul>
        </div>
      `)
      .join('');
  }

  // Initialize Education
  const educationSection = document.getElementById('education');
  if (educationSection) {
    educationSection.querySelector('h2').textContent = resumeData.sections.education.title;
    const educationContainer = document.getElementById('education-container');
    educationContainer.innerHTML = resumeData.sections.education.items
      .map(edu => `
        <div class="education-item">
          <h3>${edu.degree}</h3>
          <div class="education-period">${edu.institution} | ${edu.period}</div>
          <div class="education-location">${edu.location}</div>
        </div>
      `)
      .join('');
  }
}

// Initialize print functionality
document.querySelector('.print-button button').addEventListener('click', () => {
  window.print();
});

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage); 