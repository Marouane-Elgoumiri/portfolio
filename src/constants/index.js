import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import mysql from "../assets/tech/mysql.png"
  import ibnzohr from "../assets/company/ibnzohr.png"
  import tmsapp from "../assets/tms.png";
  import javamobile from "../assets/javamobile.png";
  import javafx from "../assets/javafx.png";
  import gestion from "../assets/gestion.png";
  import blogApp from "../assets/blogAppSpring.jpg";
  import Linkedin from "../assets/linkedin.jpg";
  import ebtikar from "../assets/company/ebtikar.png"
  import codeAlpha from "../assets/company/codeAlpha.png"
  import codeSoft from "../assets/company/codeSoft.png"
  import jobBored from "../assets/jobBoard.png"
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Future Software Engineer",
      icon: web,
    },
    {
      title: "Web App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React.js Developer",
      icon: creator,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    
    {
      name: "git",
      icon: git,
    },
    {
      
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "EbtikarWeb",
      icon: ebtikar,
      iconBg: "#383E56",
      date: "Internship: April 2023 - July 2023",
      points: [
        "Developing a Transport management system web applications using React.js and other related technologies.",
        ,
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "CodeSoft",
      icon: codeSoft,
      iconBg: "#383E56",
      date: "Internship: January 2024 - February 2024",
      points: [
        "Task 1: Building Quiz App with MERN stack.",
        ,
        "Task 2: Building Job Board app with MERN stack",
        "Task 3: Building Developer Portfolio with HTML, CSS and JavaScript",
      ],
    },
    {
      title: "Data Science Intern",
      company_name: "CodeAlpha",
      icon: codeAlpha,
      iconBg: "#383E56",
      date: "Internship: February 2024 - March 2024",
      points: [
        "Task 1: Titanic Classification to predict whether a passenger survived the Titanic sinking based on various features.",
        ,
        "Task 2: Building a predictive model using linear regression to predict the insurence cost based on various features such as age, gender, bmi and more..",
        "Task 3: A/B testing analysis to evaluate the impact of a change or intervention. Analyze the results using statistical techniques and draw actionable insights..",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "TMS App",
      description:
        "Web-based platform that allows Management of transport fleet & supplies",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "pink-text-gradient",
        },
      ],
      image: tmsapp,
      source_code_link: "https://github.com/Marouane-Elgoumiri/TMSapp.git",
    },
    {
      name: "Ticket Booking App (Mobile)",
      description:
        "Mobile application that enables users to book their tickets for travels with transport companies",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: javamobile,
      source_code_link: "https://github.com/Abidox808/TicketCatcher-Mobile-book-Bus-tickets.git",
    },
    {
      name: "Ticket Booking App (Desktop)",
      description:
        "Desktop application that enables users to book their tickets for travels with transport companies",
      tags: [
        {
          name: "JavaFX",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        
      ],
      image: javafx,
      source_code_link: "https://github.com/",
    },
    {
      name: "JobBoard app",
      description:
        "Web application that enables users manage students informations",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "yellow-text-gradient",
        },
        {
          name: "MUI",
          color: "pink-text-gradient",
        },
        
      ],
      image:jobBored,
      source_code_link: "https://github.com/Marouane-Elgoumiri/job_board",
    },
    {
      name: "Blog App SpringBoot",
      description:
        "Blog App with Spring Boot with REST controllers",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
        {
          name: "Postman",
          color: "orange-text-gradient",
        },
      ],
      image:blogApp,
      source_code_link: "https://github.com/Marouane-Elgoumiri/Blog_App_SpringBoot",
    },
    {
      name: "Linkedin data mining",
      description:
        "Analyzing Linkedin Profile data",
      tags: [
        {
          name: "Colab",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
        {
          name: "Plotly",
          color: "orange-text-gradient",
        },
      ],
      image:Linkedin,
      source_code_link: "https://github.com/Marouane-Elgoumiri/Linkedin_mining_data?tab=readme-ov-file#linkedin-data-mining",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };