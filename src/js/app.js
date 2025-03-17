// Resume Data
const resumeData = {
  name: "Juan David Jaramillo Zúñiga",
  role: "Senior Software Engineer | Data Engineering & Cloud Architecture",
  contact: {
    email: {
      label: "Email",
      value: "djaramilloj1@gmail.com",
      href: "mailto:djaramilloj1@gmail.com"
    },
    phone: {
      label: "Phone",
      value: "(+57)3113768003"
    },
    github: {
      label: "GitHub",
      value: "https://github.com/djaramilloj",
      href: "https://github.com/djaramilloj"
    },
    linkedin: {
      label: "LinkedIn",
      value: "www.linkedin.com/in/djaramilloj",
      href: "https://www.linkedin.com/in/djaramilloj"
    },
    languages: {
      label: "Languages",
      value: "Spanish (Native), English (Professional)"
    }
  },
  sections: {
    technicalSkills: {
      title: "TECHNICAL EXPERTISE",
      subsections: {
        coreTechnologies: {
          title: "Core Technologies",
          items: [
            "Python (Expert)",
            "Java (Advanced)",
            "SQL (Expert)",
            "JavaScript/TypeScript",
            "Scala",
            "Shell Scripting"
          ]
        },
        frameworksTools: {
          title: "Frameworks & Tools",
          items: [
            "Apache Spark",
            "Airflow",
            "Docker",
            "Kubernetes",
            "FastAPI",
            "Spring Boot",
            "React/Vue.js"
          ]
        },
        cloudInfrastructure: {
          title: "Cloud & Infrastructure",
          items: [
            "AWS (Certified Solutions Architect)",
            "GCP (Professional Data Engineer)",
            "Azure",
            "Terraform",
            "CI/CD",
            "Microservices Architecture"
          ]
        }
      }
    },
    experience: {
      title: "PROFESSIONAL EXPERIENCE",
      items: [
        {
          title: "Senior Data Engineer",
          company: "Tech Company",
          period: "2021 - Present",
          location: "Medellín, Colombia",
          achievements: [
            "Led the design and implementation of data pipelines processing 500GB+ daily",
            "Reduced processing costs by 40% through optimization of Spark jobs",
            "Architected and deployed cloud-native data solutions using AWS and GCP",
            "Mentored junior engineers and established best practices for the team"
          ]
        },
        {
          title: "Software Engineer",
          company: "Another Tech Company",
          period: "2019 - 2021",
          location: "Bogotá, Colombia",
          achievements: [
            "Developed and maintained microservices using Spring Boot and Kubernetes",
            "Implemented real-time data processing pipelines using Apache Kafka",
            "Improved system reliability by implementing comprehensive monitoring",
            "Collaborated with cross-functional teams to deliver critical features"
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
    summary: {
      title: "PROFESSIONAL SUMMARY",
      content: "Senior Software Engineer with extensive experience in Data Engineering and Cloud Architecture. " +
              "Proven track record in designing and implementing scalable data solutions, with expertise in cloud technologies " +
              "and distributed systems. Passionate about solving complex problems and delivering high-impact solutions."
    },
    education: {
      title: "EDUCATION",
      items: [
        {
          degree: "Master's in Computer Science",
          institution: "Universidad Nacional de Colombia",
          period: "2018 - 2020",
          location: "Medellín, Colombia"
        },
        {
          degree: "Bachelor's in Systems Engineering",
          institution: "Universidad de Antioquia",
          period: "2014 - 2018",
          location: "Medellín, Colombia"
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