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
  import ebtikar from "../assets/company/ebtikar.png"
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
      name: "Stock Management",
      description:
        "Web application that enables users manage students informations",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        
      ],
      image:gestion,
      source_code_link: "https://github.com/Marouane-Elgoumiri/Gestion_produits.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };