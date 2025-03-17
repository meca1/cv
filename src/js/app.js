// Resume Data
const resumeData = {
  name: "Daniel Ricardo Ramos Ruiz",
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
      content: "Ingeniero de Software con más de 6 años de experiencia especializado en desarrollo Backend y arquitecturas distribuidas. " +
               "Experto en Node.js, Python y tecnologías cloud, con sólida experiencia en el diseño e implementación de microservicios y arquitecturas serverless. " +
               "Destaco por mi capacidad para liderar equipos técnicos y optimizar procesos de desarrollo, habiendo contribuido al éxito de múltiples proyectos en fintech y desarrollo empresarial. " +
               "Apasionado por las nuevas tecnologías y la mejora continua, con un enfoque en soluciones escalables y de alto rendimiento."
    },
    technicalSkills: {
      title: "TECHNICAL EXPERTISE",
      subsections: {
        coreTechnologies: {
          title: "Core Technologies",
          items: [
            "Node.js / Express.js",
            "Python / Flask",
            "TypeScript / JavaScript",
            "React / AngularJS",
            "GraphQL / REST APIs"
          ]
        },
        frameworksTools: {
          title: "Frameworks & Tools",
          items: [
            "Docker & Kubernetes",
            "Jest & Testing Frameworks",
            "Linux & Shell Scripting",
            "Firebase & Real-time DB",
            "Terraform & IaC",
            "CI/CD (AWS Pipelines, GitHub Actions)",
            "Feature Flags (LaunchDarkly)",
            "Code Quality (SonarQube)"
          ]
        },
        cloudInfrastructure: {
          title: "Cloud & Infrastructure",
          items: [
            "AWS Services: Lambda, SQS, RDS, DynamoDB, Cognito, CloudWatch, S3, EC2, ECS, API Gateway, Route53, CloudFront",
            "Serverless Architecture & Framework",
            "Microservices Design Patterns",
            "CI/CD Pipelines & DevOps",
            "Database Design & Optimization",
            "System Architecture & Scalability"
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
            "Lideré la migración de una arquitectura monolítica a microservicios utilizando Serverless Framework, reduciendo costos operativos en un 40% y mejorando la escalabilidad",
            "Diseñé e implementé una arquitectura distribuida utilizando AWS (Lambda, SQS, DynamoDB, RDS, API Gateway) y Docker, procesando más de 100,000 transacciones diarias",
            "Desarrollé y mantuve APIs RESTful y GraphQL en Node.js/TypeScript, implementando patrones de diseño y mejores prácticas de arquitectura",
            "Implementé infraestructura como código usando CloudFormation y Serverless Framework, automatizando el despliegue y reduciendo el tiempo de configuración en un 60%",
            "Integré sistemas de monitoreo con CloudWatch y establecí alertas proactivas, reduciendo el tiempo de detección de incidentes en un 70%"
          ]
        },
        {
          title: "Backend Software Engineer",
          company: "Perficient",
          period: "Jun 2022 - Dec 2023",
          location: "Bogotá, Colombia",
          achievements: [
            "Lideré el desarrollo del Directorio Universal, una solución fintech que consolida información de 2M+ usuarios utilizando arquitectura hexagonal y AWS OpenSearch",
            "Implementé un sistema de migración de datos utilizando DynamoDB y DynamoDB Streams, asegurando la integridad y consistencia de la información",
            "Diseñé e implementé APIs RESTful para integración con servicios financieros de terceros, utilizando Serverless Framework y AWS Lambda",
            "Realicé investigación y pruebas de concepto para la implementación de LaunchDarkly (feature flags) y SonarQube (análisis de calidad de código)",
            "Desarrollé y mantuve microservicios serverless procesando más de 1M transacciones mensuales con una latencia promedio de 200ms"
          ]
        },
        {
          title: "Senior Software Developer",
          company: "Akily",
          period: "Apr 2019 - Jun 2022",
          location: "San Francisco, United States",
          achievements: [
            "Lideré un equipo de 5 desarrolladores en la implementación de una plataforma de procesamiento de datos que maneja 5TB diarios",
            "Diseñé e implementé una arquitectura de microservicios que redujo la complejidad del sistema en un 40%",
            "Desarrollé un sistema de monitoreo en tiempo real que mejoró la visibilidad de la plataforma y redujo incidentes en un 45%",
            "Mentoreé a 3 desarrolladores junior, ayudándoles a alcanzar el nivel senior en 12 meses"
          ]
        },
        {
          title: "Full Stack Developer",
          company: "Tap4Click",
          period: "Jun 2018 - Dec 2018",
          location: "Bogotá, Colombia",
          achievements: [
            "Desarrollé una PWA que alcanzó más de 10,000 usuarios activos en 3 meses",
            "Implementé un sistema de notificaciones push que mejoró la retención de usuarios en un 25%",
            "Optimicé el rendimiento de aplicaciones Ruby on Rails reduciendo el tiempo de carga en un 35%"
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
          description: "Diseñé e implementé una plataforma de procesamiento de datos distribuida que maneja millones de registros diarios",
          highlights: [
            "Implementé una arquitectura fault-tolerant que redujo el tiempo de recuperación de fallos en un 70%",
            "Optimicé el procesamiento de datos reduciendo el tiempo de ejecución en un 60%",
            "Automaticé el despliegue usando Terraform, reduciendo el tiempo de configuración en un 80%"
          ]
        },
        {
          name: "Real-time Analytics Dashboard",
          technologies: "Node.js, React, WebSocket, MongoDB",
          description: "Desarrollé un dashboard en tiempo real para visualización de métricas empresariales",
          highlights: [
            "Implementé WebSockets para actualizaciones en tiempo real con latencia < 100ms",
            "Diseñé una arquitectura escalable que maneja más de 10,000 conexiones simultáneas",
            "Integré múltiples fuentes de datos con un tiempo de respuesta < 200ms"
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