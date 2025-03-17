// Resume Data
const resumeData = {
  personalInfo: {
    name: "Juan David Jaramillo Zúñiga",
    role: "Senior Software Engineer | Data Engineering & Cloud Architecture",
    contact: {
      email: "jdjaramillo@gmail.com",
      phone: "+57 300 000 0000",
      location: "Medellín, Colombia",
      linkedin: "linkedin.com/in/jdjaramillo",
      github: "github.com/jdjaramillo"
    }
  },
  
  summary: `Senior Software Engineer with extensive experience in Data Engineering and Cloud Architecture. 
  Proven track record in designing and implementing scalable data solutions, with expertise in cloud technologies 
  and distributed systems. Passionate about solving complex problems and delivering high-impact solutions.`,
  
  skills: {
    coreTechnologies: [
      "Python (Expert)",
      "Java (Advanced)",
      "SQL (Expert)",
      "JavaScript/TypeScript",
      "Scala",
      "Shell Scripting"
    ],
    frameworksTools: [
      "Apache Spark",
      "Airflow",
      "Docker",
      "Kubernetes",
      "FastAPI",
      "Spring Boot",
      "React/Vue.js"
    ],
    cloudInfrastructure: [
      "AWS (Certified Solutions Architect)",
      "GCP (Professional Data Engineer)",
      "Azure",
      "Terraform",
      "CI/CD",
      "Microservices Architecture"
    ]
  },
  
  experience: [
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
  ],
  
  projects: [
    {
      name: "Data Processing Platform",
      technologies: "Python, Apache Spark, AWS, Airflow",
      description: "Designed and implemented a scalable data processing platform handling millions of records daily",
      highlights: [
        "Implemented fault-tolerant architecture",
        "Reduced processing time by 60%",
        "Automated deployment using Terraform"
      ]
    },
    {
      name: "Real-time Analytics Dashboard",
      technologies: "React, FastAPI, PostgreSQL, Redis",
      description: "Built a real-time analytics dashboard for monitoring system metrics",
      highlights: [
        "Implemented WebSocket for real-time updates",
        "Designed responsive UI with Material-UI",
        "Optimized database queries for performance"
      ]
    }
  ],
  
  education: [
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
};

// Components
class Header {
  constructor(personalInfo) {
    this.personalInfo = personalInfo;
  }

  render() {
    const { name, role, contact } = this.personalInfo;
    
    document.querySelector('.name').textContent = name;
    document.querySelector('.role').textContent = role;
    
    const contactHTML = `
      <div><i class="fas fa-envelope"></i> <a href="mailto:${contact.email}">${contact.email}</a></div>
      <div><i class="fas fa-phone"></i> ${contact.phone}</div>
      <div><i class="fas fa-map-marker-alt"></i> ${contact.location}</div>
      <div><i class="fab fa-linkedin"></i> <a href="https://${contact.linkedin}" target="_blank">${contact.linkedin}</a></div>
      <div><i class="fab fa-github"></i> <a href="https://${contact.github}" target="_blank">${contact.github}</a></div>
    `;
    
    document.querySelector('.contact-info').innerHTML = contactHTML;
  }
}

class Skills {
  constructor(skills) {
    this.skills = skills;
  }

  render() {
    const { coreTechnologies, frameworksTools, cloudInfrastructure } = this.skills;
    
    document.getElementById('programming-languages').innerHTML = this.createList(coreTechnologies);
    document.getElementById('frameworks-libraries').innerHTML = this.createList(frameworksTools);
    document.getElementById('architecture-cloud').innerHTML = this.createList(cloudInfrastructure);
  }

  createList(items) {
    return items.map(item => `<li>${item}</li>`).join('');
  }
}

class Experience {
  constructor(experience) {
    this.experience = experience;
  }

  render() {
    const experienceHTML = this.experience.map(job => `
      <div class="job">
        <div class="job-header">
          <h3>${job.title} at ${job.company}</h3>
          <div class="job-period">${job.period} | ${job.location}</div>
        </div>
        <ul>
          ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    document.getElementById('experience').innerHTML = experienceHTML;
  }
}

class Projects {
  constructor(projects) {
    this.projects = projects;
  }

  render() {
    const projectsHTML = this.projects.map(project => `
      <div class="project">
        <h3>${project.name}</h3>
        <div class="project-tech">${project.technologies}</div>
        <p>${project.description}</p>
        <ul>
          ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    document.getElementById('projects').innerHTML = projectsHTML;
  }
}

class Education {
  constructor(education) {
    this.education = education;
  }

  render() {
    const educationHTML = this.education.map(edu => `
      <div class="education-item">
        <h3>${edu.degree}</h3>
        <div class="education-period">${edu.institution} | ${edu.period}</div>
        <div class="education-location">${edu.location}</div>
      </div>
    `).join('');

    document.getElementById('education').innerHTML = educationHTML;
  }
}

// Main Resume Class
class Resume {
  constructor(data) {
    this.data = data;
    this.components = {
      header: new Header(data.personalInfo),
      skills: new Skills(data.skills),
      experience: new Experience(data.experience),
      projects: new Projects(data.projects),
      education: new Education(data.education)
    };
  }

  render() {
    try {
      // Render all components
      Object.entries(this.components).forEach(([name, component]) => {
        try {
          component.render();
          console.log(`✅ ${name} component rendered successfully`);
        } catch (error) {
          console.error(`Error rendering ${name} component:`, error);
        }
      });
      
      // Set summary
      const summaryElement = document.getElementById('profile-summary');
      if (summaryElement) {
        summaryElement.textContent = this.data.summary;
      }
      
      // Initialize print functionality
      this.initializePrint();
    } catch (error) {
      console.error('Error rendering resume:', error);
    }
  }

  initializePrint() {
    const printButton = document.querySelector('.print-button button');
    if (printButton) {
      printButton.addEventListener('click', () => {
        window.print();
      });
    }
  }
}

// Initialize the resume when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  try {
    const resume = new Resume(resumeData);
    resume.render();
  } catch (error) {
    console.error('Error initializing resume:', error);
  }
}); 