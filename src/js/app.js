// Resume Data
const resumeData = {
  en: {
  name: "Daniel Ricardo Ramos Ruiz",
  role: "Software Engineer",
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
      value: "Spanish (Native), English (Professional working proficiency)"
    }
  },
  sections: {
    summary: {
      title: "ABOUT ME",
      content: "Software Engineer with over 6 years of experience specializing in Backend development and distributed architectures. " +
               "Expert in Node.js, Python, and cloud technologies, with solid experience in designing and implementing microservices and serverless architectures. " +
               "I excel in leading technical teams and optimizing development processes, having contributed to the success of multiple projects in fintech and enterprise development. " +
               "Passionate about new technologies and continuous improvement, with a focus on scalable and high-performance solutions."
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
            "Jest & Cypress",
            "Postman & Swagger/OpenAPI",
            "DataDog & Sentry",
            "AWS CloudWatch & JMeter",
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
            "AWS Lambda & Serverless",
            "AWS RDS & DynamoDB",
            "AWS Secrets Manager",
            "AWS SQS & API Gateway",
            "AWS S3, CloudFront, Route53",
            "AWS Cognito & IAM",
            "AWS CloudWatch & CloudTrail",
            "Microservices Architecture",
            "CI/CD & DevOps Practices"
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
            "Led the migration from a monolithic architecture to microservices using Serverless Framework, reducing operational costs by 40% and improving scalability",
            "Designed and implemented a distributed architecture using AWS (Lambda, SQS, DynamoDB, RDS, API Gateway) and Docker, processing over 100,000 daily transactions",
            "Developed and maintained RESTful and GraphQL APIs in Node.js/TypeScript, implementing design patterns and architectural best practices",
            "Implemented infrastructure as code using CloudFormation and Serverless Framework, automating deployment and reducing configuration time by 60%",
            "Integrated monitoring systems with CloudWatch and established proactive alerts, reducing incident detection time by 70%"
            ],
            detailedDescription: "As a Software Engineer at Cocora, I led the transformation of the company's core platform from a monolithic architecture to a microservices-based system. Using Node.js and TypeScript, I designed and implemented a robust backend architecture that leveraged AWS serverless technologies. The system handles complex financial transactions and user management, with a focus on scalability and performance. I worked closely with a cross-functional team to implement CI/CD pipelines and automated testing, significantly reducing deployment time and improving code quality. The migration to microservices architecture resulted in better system resilience and easier maintenance.",
            teamComposition: "Team of 6: 2 Backend Developers, 2 Frontend Developers, 1 DevOps Engineer, 1 Project Manager",
            technologies: "Node.js, TypeScript, AWS (Lambda, SQS, DynamoDB, RDS, API Gateway), Docker, Serverless Framework, CloudFormation, GraphQL, REST APIs"
        },
        {
          title: "Backend Software Engineer",
          company: "Perficient",
          period: "Jun 2022 - Dec 2023",
          location: "Bogotá, Colombia",
          achievements: [
            "Led the development of the Universal Directory, a fintech solution consolidating information for 2M+ users using hexagonal architecture and AWS OpenSearch",
            "Implemented a data migration system using DynamoDB and DynamoDB Streams, ensuring data integrity and consistency",
            "Designed and implemented RESTful APIs for third-party financial services integration, using Serverless Framework and AWS Lambda",
            "Conducted research and proof of concept for implementing LaunchDarkly (feature flags) and SonarQube (code quality analysis)",
            "Developed and maintained serverless microservices processing over 1M monthly transactions with an average latency of 200ms"
            ],
            detailedDescription: "At Perficient, I served as a technical lead in a large-scale fintech project with approximately 40 developers distributed across multiple teams. I led the Universal Directory project, a critical fintech solution that consolidated user information across multiple systems. Using Node.js and TypeScript, I implemented a hexagonal architecture that improved system maintainability and testability. The project involved complex data synchronization challenges, which we solved using DynamoDB Streams and custom event-driven patterns. I collaborated with three team leads to coordinate development efforts across backend, frontend, and QA teams, ensuring consistent implementation of architectural patterns and best practices. I also led the implementation of feature flags and code quality tools, significantly improving our development workflow and code standards across all teams.",
            teamComposition: "Large-scale project with ~40 developers: 3 Team Leads, 15 Backend Developers, 12 Frontend Developers, 6 QA Engineers, 2 DevOps Engineers, 2 Project Managers",
            technologies: "Node.js, TypeScript, AWS (Lambda, DynamoDB, OpenSearch), Serverless Framework, LaunchDarkly, SonarQube, REST APIs"
        },
        {
          title: "Senior Software Developer",
          company: "Akily",
          period: "Apr 2019 - Jun 2022",
          location: "San Francisco, United States",
          achievements: [
            "Led the migration of the mobile app from Ionic 3 to Ionic 4, improving code performance and maintainability",
            "Designed and implemented a CI/CD pipeline using Bitrise to automate deployment to App Store and Google Play Store",
            "Developed a push notification system using Firebase Cloud Messaging, increasing user retention by 30%",
            "Implemented GraphQL and RESTful APIs using Node.js/TypeScript and Python/Flask, improving query efficiency",
            "Integrated AWS services (Lambda, S3, CloudWatch) and Solr to optimize search and data processing",
            "Mentored 3 junior developers, helping them reach senior level within 12 months"
            ],
            detailedDescription: "As a Senior Software Developer at Akily, I led the development of a comprehensive mobile and web platform for healthcare management. Using Node.js and TypeScript, I built a robust backend system that handled real-time data synchronization and complex business logic. The platform included features like appointment scheduling, patient records management, and telemedicine capabilities. I implemented a GraphQL API that significantly improved frontend performance and reduced network overhead. The system was built with scalability in mind, using AWS serverless technologies and microservices architecture.",
            teamComposition: "Team of 10: 4 Mobile Developers, 3 Backend Developers, 2 Frontend Developers, 1 Project Manager",
            technologies: "Node.js, TypeScript, Python, Flask, GraphQL, AWS (Lambda, S3, CloudWatch), Firebase, Ionic, Solr"
        },
        {
          title: "Full Stack Developer",
          company: "Tap4Click",
          period: "Jun 2018 - Dec 2018",
          location: "Bogotá, Colombia",
          achievements: [
            "Contributed to the development of a PWA using Angular/Ionic and TypeScript, reaching over 10,000 active users",
            "Implemented push notification features using Firebase, improving user retention",
            "Contributed to Ruby on Rails application optimization, implementing caching techniques and improving performance",
            "Participated in developing new features and bug fixing for web and mobile applications"
            ],
            detailedDescription: "At Tap4Click, I worked on developing a Progressive Web Application (PWA) for a digital marketing platform. Using Node.js and TypeScript, I implemented backend services that handled user authentication, content management, and analytics tracking. The application featured real-time updates and push notifications, which I implemented using Firebase Cloud Messaging. I also contributed to optimizing the existing Ruby on Rails application by implementing caching strategies and improving database queries.",
            teamComposition: "Team of 5: 2 Full Stack Developers, 2 Frontend Developers, 1 Project Manager",
            technologies: "Node.js, TypeScript, Angular, Ionic, Ruby on Rails, Firebase, PostgreSQL"
        }
      ]
    },
    projects: {
      title: "NOTABLE PROJECTS",
      items: [
        {
          name: "Ecija - Automated Tax Document Processing Platform",
          technologies: "Python, Node.js/TypeScript, AWS (Lambda, SQS, RDS, DynamoDB, S3, Secrets Manager), OpenAI, Google Drive API, Serverless Framework, AWS CDK",
          description: "Led the development of an automated platform for processing tax documents from DIAN (Colombian Tax Authority), implementing AI-powered data extraction and microservices architecture with secure data handling",
          highlights: [
            "Implemented AI-powered document processing using OpenAI and Tesseract OCR, achieving 95% accuracy in data extraction from tax documents",
            "Designed and implemented a microservices architecture using Python and Node.js/TypeScript, with 90% test coverage and automated CI/CD pipelines",
            "Developed a robust file processing system with secure data storage using RDS, DynamoDB, and Secrets Manager for sensitive information",
            "Built a scalable infrastructure using AWS CDK and Serverless Framework, implementing SQS for event-driven processing and S3 for document storage",
            "Created an automated workflow system that reduced manual processing time by 85% and improved data accuracy by 40%"
          ]
          }
      ]
    },
    education: {
      title: "EDUCATION",
      items: [
        {
          degree: "Systems Engineering",
          institution: "Fundación de Educación Superior San José",
          period: "",
          location: "Bogotá, Colombia"
        }
      ]
      }
    }
  },
  es: {
    name: "Daniel Ricardo Ramos Ruiz",
    role: "Ingeniero de Software",
    contact: {
      email: {
        label: "Correo",
        value: "drramosdev@gmail.com",
        href: "mailto:drramosdev@gmail.com"
      },
      phone: {
        label: "Teléfono",
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
        label: "Idiomas",
        value: "Español (Nativo), Inglés (Competencia profesional)"
      }
    },
    sections: {
      summary: {
        title: "SOBRE MÍ",
        content: "Ingeniero de Software con más de 6 años de experiencia especializado en desarrollo Backend y arquitecturas distribuidas. " +
                 "Experto en Node.js, Python y tecnologías cloud, con sólida experiencia en el diseño e implementación de microservicios y arquitecturas serverless. " +
                 "Me destaco en la dirección de equipos técnicos y la optimización de procesos de desarrollo, habiendo contribuido al éxito de múltiples proyectos en fintech y desarrollo empresarial. " +
                 "Apasionado por las nuevas tecnologías y la mejora continua, con enfoque en soluciones escalables y de alto rendimiento."
      },
      technicalSkills: {
        title: "EXPERTISE TÉCNICO",
        subsections: {
          coreTechnologies: {
            title: "Tecnologías Principales",
            items: [
              "Node.js / Express.js",
              "Python / Flask",
              "TypeScript / JavaScript",
              "React / AngularJS",
              "GraphQL / REST APIs"
            ]
          },
          frameworksTools: {
            title: "Frameworks y Herramientas",
            items: [
              "Docker & Kubernetes",
              "Jest & Cypress",
              "Postman & Swagger/OpenAPI",
              "DataDog & Sentry",
              "AWS CloudWatch & JMeter",
              "Linux & Shell Scripting",
              "Firebase & Real-time DB",
              "Terraform & IaC",
              "CI/CD (AWS Pipelines, GitHub Actions)",
              "Feature Flags (LaunchDarkly)",
              "Code Quality (SonarQube)"
            ]
          },
          cloudInfrastructure: {
            title: "Cloud e Infraestructura",
            items: [
              "AWS Lambda & Serverless",
              "AWS RDS & DynamoDB",
              "AWS Secrets Manager",
              "AWS SQS & API Gateway",
              "AWS S3, CloudFront, Route53",
              "AWS Cognito & IAM",
              "AWS CloudWatch & CloudTrail",
              "Arquitectura de Microservicios",
              "CI/CD & Prácticas DevOps"
            ]
          }
        }
      },
      experience: {
        title: "EXPERIENCIA PROFESIONAL",
        items: [
          {
            title: "Ingeniero de Software",
            company: "Cocora",
            period: "Ene 2024 - Presente",
            location: "Bogotá, Colombia",
            achievements: [
              "Lideré la migración de una arquitectura monolítica a microservicios usando Serverless Framework, reduciendo costos operativos en 40% y mejorando la escalabilidad",
              "Diseñé e implementé una arquitectura distribuida usando AWS (Lambda, SQS, DynamoDB, RDS, API Gateway) y Docker, procesando más de 100,000 transacciones diarias",
              "Desarrollé y mantuve APIs RESTful y GraphQL en Node.js/TypeScript, implementando patrones de diseño y mejores prácticas arquitectónicas",
              "Implementé infraestructura como código usando CloudFormation y Serverless Framework, automatizando el despliegue y reduciendo el tiempo de configuración en 60%",
              "Integré sistemas de monitoreo con CloudWatch y establecí alertas proactivas, reduciendo el tiempo de detección de incidentes en 70%"
            ],
            detailedDescription: "Como Ingeniero de Software en Cocora, lideré la transformación de la plataforma principal de la empresa de una arquitectura monolítica a un sistema basado en microservicios. Utilizando Node.js y TypeScript, diseñé e implementé una arquitectura backend robusta que aprovechó las tecnologías serverless de AWS. El sistema maneja transacciones financieras complejas y gestión de usuarios, con un enfoque en escalabilidad y rendimiento. Trabajé estrechamente con un equipo multifuncional para implementar pipelines CI/CD y pruebas automatizadas, reduciendo significativamente el tiempo de despliegue y mejorando la calidad del código. La migración a la arquitectura de microservicios resultó en una mejor resiliencia del sistema y un mantenimiento más sencillo.",
            teamComposition: "Equipo de 6: 2 Desarrolladores Backend, 2 Desarrolladores Frontend, 1 Ingeniero DevOps, 1 Gerente de Proyecto",
            technologies: "Node.js, TypeScript, AWS (Lambda, SQS, DynamoDB, RDS, API Gateway), Docker, Serverless Framework, CloudFormation, GraphQL, REST APIs"
          },
          {
            title: "Ingeniero de Software Backend",
            company: "Perficient",
            period: "Jun 2022 - Dic 2023",
            location: "Bogotá, Colombia",
            achievements: [
              "Lideré el desarrollo del Directorio Universal, una solución fintech que consolida información para más de 2M usuarios usando arquitectura hexagonal y AWS OpenSearch",
              "Implementé un sistema de migración de datos usando DynamoDB y DynamoDB Streams, asegurando la integridad y consistencia de los datos",
              "Diseñé e implementé APIs RESTful para la integración de servicios financieros de terceros, usando Serverless Framework y AWS Lambda",
              "Realicé investigación y prueba de concepto para la implementación de LaunchDarkly (feature flags) y SonarQube (análisis de calidad de código)",
              "Desarrollé y mantuve microservicios serverless procesando más de 1M transacciones mensuales con una latencia promedio de 200ms"
            ],
            detailedDescription: "En Perficient, fui líder técnico en un proyecto fintech a gran escala con aproximadamente 40 desarrolladores distribuidos en múltiples equipos. Lideré el proyecto del Directorio Universal, una solución fintech crítica que consolidaba información de usuarios a través de múltiples sistemas. Utilizando Node.js y TypeScript, implementé una arquitectura hexagonal que mejoró la mantenibilidad y testabilidad del sistema. El proyecto involucró desafíos complejos de sincronización de datos, que resolvimos usando DynamoDB Streams y patrones personalizados basados en eventos. Colaboré con tres líderes de equipo para coordinar los esfuerzos de desarrollo entre equipos de backend, frontend y QA, asegurando una implementación consistente de patrones arquitectónicos y mejores prácticas. También lideré la implementación de feature flags y herramientas de calidad de código, mejorando significativamente nuestro flujo de trabajo de desarrollo y estándares de código en todos los equipos.",
            teamComposition: "Proyecto a gran escala con ~40 desarrolladores: 3 Líderes de Equipo, 15 Desarrolladores Backend, 12 Desarrolladores Frontend, 6 Ingenieros QA, 2 Ingenieros DevOps, 2 Gerentes de Proyecto",
            technologies: "Node.js, TypeScript, AWS (Lambda, DynamoDB, OpenSearch), Serverless Framework, LaunchDarkly, SonarQube, REST APIs"
          },
          {
            title: "Senior Software Developer",
            company: "Akily",
            period: "Apr 2019 - Jun 2022",
            location: "San Francisco, United States",
            achievements: [
              "Led the migration of the mobile app from Ionic 3 to Ionic 4, improving code performance and maintainability",
              "Designed and implemented a CI/CD pipeline using Bitrise to automate deployment to App Store and Google Play Store",
              "Developed a push notification system using Firebase Cloud Messaging, increasing user retention by 30%",
              "Implemented GraphQL and RESTful APIs using Node.js/TypeScript and Python/Flask, improving query efficiency",
              "Integrated AWS services (Lambda, S3, CloudWatch) and Solr to optimize search and data processing",
              "Mentored 3 junior developers, helping them reach senior level within 12 months"
            ],
            detailedDescription: "As a Senior Software Developer at Akily, I led the development of a comprehensive mobile and web platform for healthcare management. Using Node.js and TypeScript, I built a robust backend system that handled real-time data synchronization and complex business logic. The platform included features like appointment scheduling, patient records management, and telemedicine capabilities. I implemented a GraphQL API that significantly improved frontend performance and reduced network overhead. The system was built with scalability in mind, using AWS serverless technologies and microservices architecture.",
            teamComposition: "Team of 10: 4 Mobile Developers, 3 Backend Developers, 2 Frontend Developers, 1 Project Manager",
            technologies: "Node.js, TypeScript, Python, Flask, GraphQL, AWS (Lambda, S3, CloudWatch), Firebase, Ionic, Solr"
          },
          {
            title: "Full Stack Developer",
            company: "Tap4Click",
            period: "Jun 2018 - Dec 2018",
            location: "Bogotá, Colombia",
            achievements: [
              "Contributed to the development of a PWA using Angular/Ionic and TypeScript, reaching over 10,000 active users",
              "Implemented push notification features using Firebase, improving user retention",
              "Contributed to Ruby on Rails application optimization, implementing caching techniques and improving performance",
              "Participated in developing new features and bug fixing for web and mobile applications"
            ],
            detailedDescription: "At Tap4Click, I worked on developing a Progressive Web Application (PWA) for a digital marketing platform. Using Node.js and TypeScript, I implemented backend services that handled user authentication, content management, and analytics tracking. The application featured real-time updates and push notifications, which I implemented using Firebase Cloud Messaging. I also contributed to optimizing the existing Ruby on Rails application by implementing caching strategies and improving database queries.",
            teamComposition: "Team of 5: 2 Full Stack Developers, 2 Frontend Developers, 1 Project Manager",
            technologies: "Node.js, TypeScript, Angular, Ionic, Ruby on Rails, Firebase, PostgreSQL"
          }
        ]
      },
      projects: {
        title: "PROYECTOS DESTACADOS",
        items: [
          {
            name: "Ecija - Plataforma Automatizada de Procesamiento de Documentos Fiscales",
            technologies: "Python, Node.js/TypeScript, AWS (Lambda, SQS, RDS, DynamoDB, S3, Secrets Manager), OpenAI, Google Drive API, Serverless Framework, AWS CDK",
            description: "Lideré el desarrollo de una plataforma automatizada para el procesamiento de documentos fiscales de la DIAN (Autoridad Tributaria Colombiana), implementando extracción de datos con IA y arquitectura de microservicios con manejo seguro de datos",
            highlights: [
              "Implementé procesamiento de documentos con IA usando OpenAI y Tesseract OCR, logrando 95% de precisión en la extracción de datos de documentos fiscales",
              "Diseñé e implementé una arquitectura de microservicios usando Python y Node.js/TypeScript, con 90% de cobertura de pruebas y pipelines CI/CD automatizados",
              "Desarrollé un sistema robusto de procesamiento de archivos con almacenamiento seguro de datos usando RDS, DynamoDB y Secrets Manager para información sensible",
              "Construí una infraestructura escalable usando AWS CDK y Serverless Framework, implementando SQS para procesamiento basado en eventos y S3 para almacenamiento de documentos",
              "Creé un sistema de flujo de trabajo automatizado que redujo el tiempo de procesamiento manual en 85% y mejoró la precisión de los datos en 40%"
            ]
          }
        ]
      },
      education: {
        title: "EDUCACIÓN",
        items: [
          {
            degree: "Ingeniería de Sistemas",
            institution: "Fundación de Educación Superior San José",
            period: "",
            location: "Bogotá, Colombia"
          }
        ]
      }
    }
  }
};

let currentLanguage = 'en';

// Initialize the page
function initializePage() {
  updateLanguage(currentLanguage);
}

function updateLanguage(lang) {
  const data = resumeData[lang];
  
  // Set page title and header
  document.getElementById('page-title').textContent = `${data.name} - ${lang === 'en' ? 'Resume' : 'Currículum'}`;
  document.getElementById('full-name').textContent = data.name;
  document.getElementById('role').textContent = data.role;
  
  // Initialize contact info
  initializeContact(data.contact);
  
  // Initialize all sections
  initializeSections(data.sections);
  
  // Update language toggle button
  document.querySelector('#language-toggle span').textContent = lang === 'en' ? 'ES' : 'EN';
}

function initializeContact(contact) {
  const contactInfo = document.getElementById('contact-info');
  contactInfo.innerHTML = '';
  
  Object.entries(contact).forEach(([key, item]) => {
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

function initializeSections(sections) {
  // Initialize Professional Summary
  const summarySection = document.getElementById('professional-summary');
  if (summarySection) {
    summarySection.querySelector('h2').textContent = sections.summary.title;
    document.getElementById('profile-summary').textContent = sections.summary.content;
  }

  // Initialize Technical Skills
  const skillsSection = document.getElementById('technical-skills');
  if (skillsSection) {
    skillsSection.querySelector('h2').textContent = sections.technicalSkills.title;
    const subsections = sections.technicalSkills.subsections;
    
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
    experienceSection.querySelector('h2').textContent = sections.experience.title;
    const experienceContainer = document.getElementById('experience');
    experienceContainer.innerHTML = sections.experience.items
      .map(job => `
        <div class="job">
          <div class="job-header">
            <h3>${job.title} at ${job.company}</h3>
            <div class="job-period">${job.period} | ${job.location}</div>
          </div>
          <div class="job-details">
            <div class="job-description">
              <p>${job.detailedDescription}</p>
            </div>
            <div class="job-info">
              <div class="job-technologies">
                <strong>${currentLanguage === 'en' ? 'Technologies' : 'Tecnologías'}:</strong> ${job.technologies}
              </div>
              <div class="job-team">
                <strong>${currentLanguage === 'en' ? 'Team' : 'Equipo'}:</strong> ${job.teamComposition}
              </div>
            </div>
            <div class="job-achievements">
              <h4>${currentLanguage === 'en' ? 'Key Achievements' : 'Logros Clave'}:</h4>
          <ul>
            ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
          </ul>
            </div>
          </div>
        </div>
      `)
      .join('');
  }

  // Initialize Projects
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.querySelector('h2').textContent = sections.projects.title;
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = sections.projects.items
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
    educationSection.querySelector('h2').textContent = sections.education.title;
    const educationContainer = document.getElementById('education-container');
    educationContainer.innerHTML = sections.education.items
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

// Initialize language toggle
document.getElementById('language-toggle').addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  updateLanguage(currentLanguage);
});

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage); 