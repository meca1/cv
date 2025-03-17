const resumeData = {
  personalInfo: {
    name: "JUAN DAVID JARAMILLO ZÚÑIGA",
    email: "djaramilloj1@gmail.com",
    phone: "(+57)3113768003",
    social: {
      github: "https://github.com/djaramilloj",
      linkedin: "www.linkedin.com/in/djaramilloj"
    }
  },
  profileSummary: "Senior Software Engineer with extensive experience in web technologies and data processing pipelines. Specialized in Python, JavaScript, and cloud technologies with a strong focus on building scalable microservices architectures and data engineering solutions. Proven track record in designing and implementing high-performance data processing systems handling 500GB+ daily data volume.",
  skills: {
    programmingLanguages: [
      "Python (Data Processing, ETL, API Development)",
      "JavaScript/TypeScript (ES6+, Node.js)",
      "GoLang (Microservices)",
      "SQL (PostgreSQL, MySQL)",
      "RESTful & GraphQL API Design"
    ],
    frameworksAndLibraries: [
      "Django REST Framework",
      "Flask, Express, Hapi.js",
      "Testing (Jasmine, Jest, Cypress)",
      "Data Processing (Pandas, PySpark)",
      "Database (Snowflake, BigQuery)"
    ],
    architectureAndCloud: [
      "AWS (EC2, ECS, SQS, Lambda, CodeBuild/Deploy)",
      "Microservices Architecture",
      "Serverless Architecture",
      "Data Pipeline Design",
      "Cloud Infrastructure & DevOps"
    ]
  },
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Pennymac (EPAM)",
      period: "Aug/2024 - Present",
      responsibilities: [
        "Lead developer for Optimus Prime data gateway platform processing 500GB+ daily data",
        "Designed and implemented microservices architecture using Python, AWS, and Snowflake",
        "Developed automated testing and CI/CD pipelines improving QA processes",
        "Technologies: Python, Snowflake, AWS, PostgreSQL, Microservices, ETL"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Mercado Libre",
      period: "June/2022 – Aug/2024",
      responsibilities: [
        "Led development of Negativization Report service processing 300M+ monthly records",
        "Designed microservices architecture using Python and GoLang",
        "Mentored team members and maintained high engineering standards",
        "Technologies: Python, GoLang, Flask, BigQuery, MySQL, AWS"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Cocora",
      period: "May/2023 – Aug/2024",
      responsibilities: [
        "Architected and developed company's MVP platform for scheduling coaching sessions",
        "Implemented full-stack solution using Python, Node.js, and Angular",
        "Integrated with Google Cloud Platform and Calendly APIs",
        "Technologies: Python, Node.js, Angular, Docker, AWS, GCP"
      ]
    }
  ],
  projects: [
    {
      name: "Octo - CRM for WhatsApp",
      technologies: ["Node.js", "Express", "Redis", "Firebase", "Angular 10"],
      url: "https://weareocto.web.app/",
      highlights: [
        "Designed and implemented scalable architecture for WhatsApp CRM",
        "Built REST API and real-time data synchronization",
        "Developed responsive front-end with Angular"
      ]
    }
  ],
  education: [
    {
      institution: "Platzi Master Program",
      credential: "Advanced Software Engineering",
      period: "May/2020 - Nov/2022"
    },
    {
      institution: "Universidad del Norte",
      location: "Barranquilla, Colombia",
      credential: "Bachelor of International Business",
      period: "Jan/2015-Mar/2020"
    }
  ]
};

// Función para renderizar el CV
function renderResume() {
  // Header
  document.querySelector('.name').textContent = resumeData.personalInfo.name;
  document.querySelector('.contact-info').innerHTML = `
    <div><strong>Email:</strong> <a href="mailto:${resumeData.personalInfo.email}">${resumeData.personalInfo.email}</a></div>
    <div><strong>Phone:</strong> ${resumeData.personalInfo.phone}</div>
    <div><strong>GitHub:</strong> <a href="${resumeData.personalInfo.social.github}">${resumeData.personalInfo.social.github}</a></div>
    <div><strong>LinkedIn:</strong> <a href="${resumeData.personalInfo.social.linkedin}">${resumeData.personalInfo.social.linkedin}</a></div>
  `;

  // Profile Summary
  document.querySelector('#profile-summary').textContent = resumeData.profileSummary;

  // Skills
  document.querySelector('#programming-languages').innerHTML = 
    resumeData.skills.programmingLanguages.map(skill => `<li>${skill}</li>`).join('');
  document.querySelector('#frameworks-libraries').innerHTML = 
    resumeData.skills.frameworksAndLibraries.map(skill => `<li>${skill}</li>`).join('');
  document.querySelector('#architecture-cloud').innerHTML = 
    resumeData.skills.architectureAndCloud.map(skill => `<li>${skill}</li>`).join('');

  // Experience
  const experienceHTML = resumeData.experience.map(job => `
    <div class="job">
      <div class="job-header">
        <h3>${job.title} - ${job.company}</h3>
        <div class="job-period">${job.period}</div>
      </div>
      <ul>
        ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  document.querySelector('#experience').innerHTML = experienceHTML;

  // Projects
  const projectsHTML = resumeData.projects.map(project => `
    <div class="project">
      <h3>${project.name}</h3>
      <div class="project-tech">Technologies: ${project.technologies.join(', ')}</div>
      <ul>
        ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
      </ul>
      <div><a href="${project.url}">${project.url}</a></div>
    </div>
  `).join('');
  document.querySelector('#projects').innerHTML = projectsHTML;

  // Education
  const educationHTML = resumeData.education.map(edu => `
    <div class="education-item">
      <h3>${edu.institution}</h3>
      <div class="education-period">${edu.period}</div>
      <div>${edu.credential}${edu.location ? ` - ${edu.location}` : ''}</div>
    </div>
  `).join('');
  document.querySelector('#education').innerHTML = educationHTML;
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', renderResume);

function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
}

if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
} else {
    animatableLoaded();
}
  