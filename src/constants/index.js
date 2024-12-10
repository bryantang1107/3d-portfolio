export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myLife = [
  {
    title: "Coffee Enthusiast",
    desc: "Fueling my days, one cup at a time! As a self-proclaimed coffee addict, I thrive on the rich aroma and bold flavours of my favourite brews - Latte, Americano, and Cold Brew.",
    subdesc:
      "I enjoy café hopping, exploring the unique atmospheres, delicious brews, and cozy corners each café has to offer. It’s not just about the coffee, but also about discovering new spots, enjoying the quiet moments, and sometimes catching up with friends. Each café visit is an opportunity to unwind, recharge, and soak in the creative vibes of the space.",
    logo: "/assets/about-me1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: ["☕", "🍵", "🥐"],
    model: "Caffe",
    scale: 0.00045,
    position: [-0.5, 0, 0],
    rotation: [0.1, -1.3, -0.1],
    maxPolarAngle: Math.PI / 2,
    minPolarAngle: Math.PI / 6,
  },
  {
    title: "Born in Miri, Sarawak",
    desc: "This house model represents a glimpse of my childhood in Sarawak, where I was born and raised.",
    subdesc:
      "The design and structure reflect the familiar surroundings of my early years, capturing the essence of the environment I grew up in. Each corner of this model carries memories of the landscape, the people, and the culture that shaped me. The architecture, with its traditional influences, evokes a sense of home and nostalgia, reminding me of the peaceful life I enjoyed amidst the natural beauty of Sarawak.",
    logo: "/assets/about-me2.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: ["🐊", "🦜", "🌿"],
    model: "HomeTown",
    scale: 0.2,
    position: [0, 1, 10],
    rotation: [0, -0.7, 0],
    maxPolarAngle: Math.PI / 1.3,
    minPolarAngle: Math.PI / 6,
  },
  {
    title: "Tech Lover",
    desc: "I've been in love with technology since 2014, sparked by watching MKBHD's videos. From that moment, I've been captivated by the endless possibilities of tech offers - whether it's the latest gadgets, innovations, or the rapid evolution of software and hardware.",
    subdesc:
      "Constantly exploring new advancements, I’m always eager to stay ahead of the curve, learning and experimenting with the tech that shapes our world.",
    logo: "/assets/about-me3.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: ["🖥️", "💻", "📱", "🎧", "🖱️", "⌨️"],
    model: "Tech",
    scale: 0.14,
    position: [-0.2, 0, 0.1],
    rotation: [0.3, 0.0, 0.0],
    maxPolarAngle: Math.PI / 2,
    minPolarAngle: 0,
  },
  {
    title: "Sports Junkie",
    desc: "I’m a true sports junkie with a passion for trying and mastering different games. From the rhythm of swimming laps to the precision of bowling strikes, the speed of badminton rallies, and the teamwork in football and basketball, I’ve explored it all.",
    subdesc:
      "Sports aren’t just hobbies for me—they’re a way to stay active, challenge myself, and enjoy the thrill of competition. Whether it’s hitting the court, field, or pool, I’m always up for the next game and the chance to push my limits!",
    logo: "/assets/about-me4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: ["🏀", "⚽", "🏸", "🏊", "🎳"],
    model: "Sport",
    scale: 0.8,
    position: [-0.5, -0.1, -1.5],
    rotation: [-2.5, -2.0, -3],
    maxPolarAngle: Math.PI / 1.5,
    minPolarAngle: 0,
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "FINEXUS Group",
    pos: "Software Engineer",
    duration: "Jan 2023 - Nov 2024",
    title:
      "Full Stack Developer - Engineered scalable APIs for Finexus' proprietary E-Wallet leveraging the Java Ecosystem. " +
      "Crafted user-friendly front-end interfaces with React, integrating GraphQL middleware for optimized data handling.",
    icon: "/assets/finexus.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "B2BE GSS Sdn. Bhd.",
    pos: "Software Engineer (Intern)",
    duration: "Sept 2022 - Dec 2022",
    title:
      "Full Stack Developer (Intern) - Developed an internal project management and ticketing system with Laravel & Vue. " +
      "Optimize Webpack to enhance performance and reduce bundle size. Led the migration from Vue2 to Vue3 to leverage Composition API for better scalability and maintainability.",
    icon: "/assets/b2be.png",
    animation: "clapping",
  },
];
