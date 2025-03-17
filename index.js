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
  profileSummary: "Sr. Software engineer specially focused on web technologies and data processing pipelines, technology enthusiast, and International Business Professional. Looking to tackle endeavors where he will be challenged to greatly impact the real world with software, while learning and growing as a professional in the process.",
  skills: {
    programmingLanguages: [
      "Python",
      "Javascript (V8 engine, ES6+)",
      "NodeJS",
      "Typescript",
      "GoLang",
      "RESTful API",
      "GraphQL API"
    ],
    frameworksAndLibraries: [
      "Django RF",
      "Flask",
      "Apollo",
      "Hapi JS",
      "Express",
      "Testing (Jasmine / Jest / Cypress)",
      "Pandas / PySpark",
      "Bigquery",
      "Snowflake"
    ],
    architectureAndCloud: [
      "Microservices Arq. Design",
      "Serverless Arq. (Cloud Functions, AWS lambda)",
      "AWS (EC2, ECS, SQS, CodeBuild, CodeDeploy, API Gateway)",
      "Data Processing Arq. (Async comm, streams, queue)",
      "AWS Glue and PySpark"
    ]
  },
  experience: [
    {
      title: "Senior Software Engineer - Pennymac (EPAM)",
      period: "Aug/2024 - current",
      responsibilities: [
        "Python, Snowflake, AWS, serverless, Postgres, Microservices Architecture Definition, Data engineering duties like data processing architecture definition, SQS (Queues Systems - async communication), Data ETL implementations.",
        "Responsible for designing and contributing to the implementation of Optimus Prime, a data gateway platform enabling the organization to seamlessly create new data inputs and define destinations for data transformation and efficient loading into various storage systems. The platform currently processes approximately 500GB of data daily, integrating over six data sources and destinations.",
        "Accountable for developing automated tests, load tests, and testing plans across different resource levels and environments. These automated and load tests have been integrated into the CI/CD pipelines of the Optimus Prime project, enhancing the QA processes for the team."
      ]
    },
    {
      title: "Senior Software Engineer - Mercado Libre",
      period: "June/2022 – Aug/2024",
      responsibilities: [
        "Python, GoLang, Flask, BigQuery, MySQL, Microservices Architecture Definition, Data engineering duties like data processing architecture definition, SQS (Queues Systems - async communication), Data ETL implementations.",
        "Responsible for designing, implementing and maintaining Negativization Report service for Credits Area in Mercado Libre Brazil (~300 Million processed data per Month).",
        "Worked closely with the business area in order to gather requirements for different implementations of the team.",
        "Helped to design and implement multiple services from architecture definition to implementation details (design documents and RFC used).",
        "Responsible for onboarding and mentoring new members of the team in both technical and soft aspects.",
        "In charge of quality assurance of team's implementation by helping to enforce high engineering standards on code reviews while keeping a fast pace of delivery."
      ]
    },
    {
      title: "Senior Software Engineer - Cocora",
      period: "May/2023 – Aug/2024",
      responsibilities: [
        "Python, Architecture Definition, NodeJS, Docker, Angular, AWS infra set up, 3rd party integrations.",
        "Responsible for designing, implementing and maintaining MVP of the company (Architecture, Data Structures, Backend, Frontend). Platform that allows users to schedule sessions with coaches. Integrations via API with Google and Calendly.",
        "Created native integrations with Google GCP and Calendly."
      ]
    }
  ],
  projects: [
    {
      name: "Octo. CRM for Whatsapp",
      technologies: "NodeJS, Express, Redis, Firebase, Angular 10",
      url: "https://weareocto.web.app/",
      responsibilities: [
        "Planned the infrastructure of the project",
        "Programmed the project's REST API, data layer, and client side",
        "Coordinated the integration between server-side and client-side"
      ]
    }
  ],
  education: [
    {
      institution: "Platzi Master Program",
      role: "Student",
      period: "May/2020 - Nov/2022"
    },
    {
      institution: "Universidad del Norte, Barranquilla, Colombia",
      degree: "Bachelor of International Business",
      period: "Jan/2015-Mar/2020"
    }
  ]
};

// Función para renderizar el CV
function renderResume() {
  // Información personal
  document.querySelector('.name').textContent = resumeData.personalInfo.name;
  document.querySelector('.contact-info').innerHTML = `
    <a href="mailto:${resumeData.personalInfo.email}">${resumeData.personalInfo.email}</a>
    <br>${resumeData.personalInfo.phone}
  `;
  document.querySelector('.social-links').innerHTML = `
    Github: <a href="${resumeData.personalInfo.social.github}">${resumeData.personalInfo.social.github}</a>
    <br>LinkedIn: <a href="${resumeData.personalInfo.social.linkedin}">${resumeData.personalInfo.social.linkedin}</a>
  `;

  // Resumen del perfil
  document.querySelector('#profile-summary').textContent = resumeData.profileSummary;

  // Habilidades
  document.querySelector('#programming-languages').innerHTML = 
    resumeData.skills.programmingLanguages.map(skill => `<li>${skill}</li>`).join('');
  document.querySelector('#frameworks-libraries').innerHTML = 
    resumeData.skills.frameworksAndLibraries.map(skill => `<li>${skill}</li>`).join('');
  document.querySelector('#architecture-cloud').innerHTML = 
    resumeData.skills.architectureAndCloud.map(skill => `<li>${skill}</li>`).join('');

  // Experiencia
  const experienceHTML = resumeData.experience.map(job => `
    <div class="job">
      <div class="d-flex">
        <h3>${job.title}</h3>
        <span>${job.period}</span>
      </div>
      <ul>
        ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  document.querySelector('#experience').innerHTML = experienceHTML;

  // Proyectos
  const projectsHTML = resumeData.projects.map(project => `
    <div class="project">
      <h3>${project.name}</h3>
      <p>(${project.technologies}) (<a href="${project.url}">${project.url}</a>)</p>
      <ul>
        ${project.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  document.querySelector('#projects').innerHTML = projectsHTML;

  // Educación
  const educationHTML = resumeData.education.map(edu => `
    <div class="education-item">
      <div class="d-flex">
        <h3>${edu.institution}</h3>
        <span>${edu.period}</span>
      </div>
      ${edu.degree ? `<p>${edu.degree}</p>` : ''}
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
  