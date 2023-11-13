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
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Smart Contract Writer",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "express",
      icon: figma,
    },
    {
      name: "solidity",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        " I am a skilled web developer proficient in languages such as HTML, CSS, JavaScript, and experienced with popular frameworks and libraries.",
        " I expertise in both front-end and back-end development, ensuring a holistic approach to building interactive and functional websites.",
        "I have a strong problem-solving mindset, with a track record of efficiently addressing and resolving complex technical challenges in web development projects.",
        
      ],
    },
    {
      title: "React Developer",
      company_name: "Tesla",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Proficient in leveraging React.js to build robust and scalable user interfaces, ensuring a seamless and engaging user experience.",
        " I ensure efficient and effective solutions for creating high-quality React applications..",
"Working closely with cross-functional teams, I integrate seamlessly to turn project requirements into tangible React-based solutions, fostering a cooperative and results-driven development environment."
      ],
    },
    {
      title: "Smart Contract Writer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
"I am a proficient Solidity developer: Demonstrating expertise in writing secure and efficient smart contracts on the Ethereum blockchain, I contribute to the evolution of decentralized applications.",
"My skills encompass blockchain development: With a focus on Solidity, I bring a comprehensive understanding of blockchain principles, ensuring the integrity and reliability of smart contracts."
      ],
    },
   
 
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Tushar proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Tushar does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Tushar optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Full stack Ecommerce Website",
      description:
        
       " A full stack ecommerce web developer specializes in creating end-to-end solutions, seamlessly integrating front-end interfaces with back-end functionalities  to deliver robust and user-friendly online shopping platforms",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: "https://tse2.mm.bing.net/th?id=OIP.ajHR9Viocw1TiSg3cr6VmwHaD4&pid=Api&P=0&h=180",
      source_code_link: "https://github.com/Tushar260603/ecommerce-proj",
    },
    {
      name: "Metaverse Website",
      description:
        "Embark on an immersive digital experience with our metaverse website, where virtual reality converges with the real world for limitless exploration and interaction.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
    
      ],
      image: "https://tse1.mm.bing.net/th?id=OIP.wZkifKTBZd9N5erL3wPw1wHaE8&pid=Api&P=0&h=180",
      source_code_link: "https://github.com/Tushar260603/newwmeta",
    },
    {
      name: "Chat Gpt Clone",
      description:
        "Explore the capabilities of our ChatGPT clone, a cutting-edge conversational AI developed using OpenAI's technology. Seamlessly mirroring the intelligence and language proficiency, it's designed to engage and assist users in a variety of contexts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: "https://tse2.mm.bing.net/th?id=OIP.yo_nxiaHj4cRr4u6I015ZgHaE0&pid=Api&P=0&h=180",
      source_code_link: "https://github.com/Tushar260603/chat-gpt-clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };