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
          ]
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
          ]
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
          ]
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
          ]
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
        },
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