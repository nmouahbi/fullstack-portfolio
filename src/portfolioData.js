import gators from "./images/gators.png";
import oldPort from "./images/oldport.png";
import privacy from "./images/privacy.png";
import dishes from "./images/morocco.png";
import profileImage from "./images/portfolio.jpeg";
import newport from "./images/newprof.png";

const portfolioData = {
  about: {
    image: profileImage, // replace with the actual path to your image
    name: "Nabil Mouahbi",
    title: "Full Stack Developer",
    description:
      "I am a passionate full-stack developer with experience in building web applications using modern technologies.",
  },
  education: [
    {
      institution: "Valencia College",
      degree: "Bachelor of Science in Computer Science",
      year: "2025",
      description:
        "Studied various computer science topics including algorithms, data structures, web development, and databases.",
    },
    {
      institution: "Miami Dade College",
      degree: "Associate of Science - AS, Computer Science ·",
      year: "2022",
      description:
        "Studied various computer science topics including algorithms, data structures, web development, and databases.",
    },
    {
      institution: "Institute of Tourism Essaouira - Morocco",
      degree: "Technical Diploma in Reception and Hotel Management",
      year: "2007",
      description:
        "Completed a two-year technical program focused on hospitality and tourism management.",
    },
    {
      institution: "Sidi mohamed Ben abdellah",
      degree: "High School Diploma",
      year: "2005",
      description:
        "Completed high school with a focus on science and mathematics.",
    },
  ],
  experience: [
    {
      company: "Dasi",
      position: "Data Analyst",
      year: "2021 - Present",
      description:
        "Working on developing and maintaining web applications using React, Node.js, and MongoDB.",
    },
    {
      company: "ABALSIA Consulting",
      position: "Frontend Developer",
      year: "2021 - 2022",
      description:
        "Assisted in the development of e-commerce websites and collaborated with designers to create user-friendly interfaces.",
    },
    {
      company: "Amazon",
      position: "Delivery Driver",
      year: "2019 - 2021", // Replace with your actual dates
      description:
        "Delivered packages safely and efficiently to customers, ensuring timely arrivals and excellent customer service.",
    },
    {
      company: "Marrakesh Restaurant at Epcot",
      position: "Server",
      year: "2017-2019",
      description:
        "Delivered exceptional service to guests at a Moroccan-themed restaurant within Walt Disney World.",
    },
    {
      company: "IHOP",
      position: "Server",
      year: "2012-2017",
      description:
        "Provided excellent customer service in a fast-paced restaurant environment.",
    },
    {
      company: "Disney",
      position: "International College Program",
      year: "2010-2011",
      description:
        "Participated in a cultural exchange program, interacting with guests from around the world.",
    },
    {
      company: "Jemalhi Riad Essaouira - Morocco",
      position: "Hotel Supervisor",
      year: "2008 - 2010",
      description:
        "Oversaw daily operations, managed staff, resolved guest issues, and ensured a high level of guest satisfaction.",
    },
  ],
  projects: [
    {
      title: "Gator",
      image: gators, // replace with the actual path to your image
      description:
        "I developed a comprehensive website using Wix, a versatile platform for website creation.  Initially utilizing Jotform for user input, I transitioned to the native Wix Forms system to streamline functionality and maintain a cohesive design. This project showcased my ability to integrate payment processing and custom forms within a Wix-based website.",
      link: "https://www.gtlimousineorlando.com//",
    },
    {
      title: "Full-Stack Portfolio with Contact Form",
      image: newport, // Replace with the actual path to your image
      description: `This portfolio website is a showcase of my full-stack development capabilities. It features a dynamic contact form that seamlessly integrates with a Node.js/Express backend server. 
  
        When a user submits the form, their information is securely sent to the backend and stored in a MongoDB database.  After the data is saved, the server automatically triggers an email notification using Nodemailer, alerting me to the new contact submission.
  
        This project demonstrates my proficiency in:
  
        * **Frontend Development:** Building interactive user interfaces with React, managing form state, and sending data to the server via HTTP requests.
        * **Backend Development:** Designing RESTful APIs with Node.js and Express, handling data validation, and securely storing information in a MongoDB database.
        * **Email Integration:** Leveraging Nodemailer to create and send dynamic email notifications based on backend events.
        * **Full-Stack Integration:** Connecting frontend and backend components to create a cohesive and functional user experience.`,
      link: "https://nabilmouahbi.com/",
    },
    {
      title: "Old Portfolio",
      image: oldPort, // replace with the actual path to your image
      description:
        "I embarked on a project where I cloned a simple design from GitHub. This allowed me to experiment with React components, color schemes, and layout adjustments.  While primarily an exercise in design and customization, this project reinforced my understanding of React fundamentals and styling.",
      link: "https://nabilmouahbi.info",
    },
    {
      title: "Dishes",
      image: dishes, // replace with the actual path to your image
      description:
        "I created a React application dedicated to celebrating Moroccan cuisine and sharing traditional recipes. The app features an interactive interface that allows users to explore diverse dishes and learn about their cultural significance.  Built with React, this project highlights my ability to create engaging user experiences and leverage React's component-based architecture for a seamless presentation.",
      link: "http://essaouiras.com",
    },
    {
      title: "Simple Project",
      image: privacy, // replace with the actual path to your image
      description:
        "To ensure transparency and compliance with data protection regulations, I crafted a concise privacy policy page using HTML. This straightforward page clearly outlines the types of information collected from users, how that data is used, and the measures taken to protect user privacy. This project demonstrates my ability to present essential information in a clear and accessible format.",
      link: "http://essaouiras.com",
    },
  ],
  skills: [
    { name: "JavaScript", percentage: 70 },
    { name: "React", percentage: 75 },
    { name: "Node.js", percentage: 75 },
    { name: "Express", percentage: 75 },
    { name: "MongoDB", percentage: 80 },
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 90 },
    { name: "SQL Server Reporting Services (SSRS)", percentage: 75 },
    { name: "Database Queries", percentage: 75 },
  ],
};

export default portfolioData;
