const resume = {
    firstName: 'Daniel',
    lastName: 'Ramos',
    jobTitle: 'Backend Software Engineer',
    city: 'Bogotá',
    postalCode: '',
    country: 'Colombia',
    phone: '',
    email: 'drramosdev@gmail.com',
    education: [
      {
        school: 'Fundación de Educación Superior San José',
        degree: 'Systems engineer',
      }
    ],
    links: [
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/danielramosdev'
      },
      {
        label: 'Github',
        link: 'https://github.com/meca1'
      }
    ],
    skills: [
      'Jest',
      'React',
      'Flask',
      'Django',
      'Linux',
      'Docker',
      'Python',
      'Node.js',
      'Firebase',
      'TypeScript',
      'JavaScript',
      'Amazon Web Services',
      'Serverless Framework',
      'NoSQL Database Management',
      'CI/CD (AWS Pipelines, GitHub Actions)',
      'Relational Database Management (RDBMS)',
    ],
    languages: ['Español (Nativo)', 'Inglés (Profesional completo)'],
    professionalSummary: `I am a self-taught Software Engineer with six years of industry experience, specializing in Backend and Full-Stack development. My expertise includes Node.js, Python, AWS, Serverless Architecture, and Microservices. I have hands-on experience with databases such as PostgreSQL, MySQL, MongoDB, and DynamoDB, along with proficiency in Docker. Additionally, I am skilled in CI/CD pipelines and testing frameworks like Jest and Cypress. I thrive in agile environments and have a solid understanding of DevOps practices and cloud solutions.
    
    I have successfully led agile teams using tools like Jira and Trello. My passion for technology drives me to stay updated with the latest trends, enabling me to contribute effectively to innovative projects and teams. My broad technical skills and commitment to continuous learning make me a valuable asset in any tech-driven organization.`,
    employmentHistory: [
      {
        jobTitle: 'Software Engineer',
        startDate: 'Jan 2024',
        endDate: 'Present',
        employer: 'Cocora',
        city: 'Bogotá, Colombia',
        achievements: [
          "Led backend projects using Node.js, Express.js, and AWS Lambda. Managed databases with Amazon RDS and coordinated asynchronous communications with Amazon SQS. Utilized Python for various backend tasks.",
          "Enhanced user experience by integrating AngularJS, Firebase, and React for dynamic interfaces and real-time functionalities.",
          "Contributed to team success by delivering high-quality results and quickly adapting to new technologies.",
          "Implemented innovative solutions using Python to tackle complex backend challenges, optimizing performance and scalability while reducing development time."
        ]
      },
      {
        jobTitle: 'Backend Software Engineer',
        startDate: 'Jun 2022',
        endDate: 'Jan 2024',
        employer: 'Perficient',
        city: 'Bogotá, Colombia',
        achievements: [
          'Specialized in serverless projects in the fintech industry, utilizing best software engineering practices.',
          'Employed a range of technologies including Serverless framework, microservices architecture, AWS Cloud, DynamoDB, Node.js, CloudWatch, Lambda, Cognito, PostgreSQL, and Jest.',
          'Optimized development processes to ensure high-quality deliveries within set timelines, leveraging AWS cloud services.',
          'Contributed to diverse projects, from mobile enterprise applications to robust software platforms.'
        ]
      },
      {
        jobTitle: 'Senior Software Developer',
        startDate: 'Apr 2019',
        endDate: 'Jun 2022',
        employer: 'Akily',
        city: 'San Francisco, United States',
        achievements: [
          "Led and oversaw the technical processes of the development team, ensuring high-quality and efficient project execution.",
          "Pioneered cutting-edge technologies and methodologies to optimize project outcomes and enhance team performance, including Angular and React for frontend solutions.",
          "Collaborated with product managers, designers, and QA teams to ensure a cohesive vision and execution throughout the product lifecycle.",
          "Provided mentorship and support to foster continuous learning and development among developers.",
          "Utilized Django and Flask for scalable and efficient backend solutions."
        ]
      }
    ],
    photo: 'https://drramos.s3.us-east-2.amazonaws.com/Screenshot+2024-03-30+at+01.24.18.png',
}

const formatResume = (r) => ({
    ...r,
    address: [
      r.country,
      r.city,
      r.postalCode
    ].filter(Boolean).join(', ')
})

// Initialize Vue when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: formatResume(resume),
        mounted() {
            // Remove d-none class from body when Vue is mounted
            document.body.classList.remove('d-none');
        }
    });
});

function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
}

if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
} else {
    animatableLoaded();
}
  