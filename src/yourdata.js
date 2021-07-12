// Skills Icons
import htmlIcon from "./images/html.svg";
import cssIcon from "./images/css.svg";
import reactIcon from "./images/react.svg";
import jsIcon from "./images/javascript.svg";
import designIcon from "./images/design.svg";
import codeIcon from "./images/code.svg";
import sassIcon from "./images/sass.png";
import nodeJSIcon from "./images/node-js-logo.jpeg";
import mongoDBIcon from "./images/mongoDB.jpg";
import gitIcon from "./images/git.png";
import expressIcon from "./images/express.png";
import jiraIcon from "./images/jira.png";

//About Icons
import movieIcon from "./images/binge-watching.png";
import photographyIcon from "./images/photography.png";
import webDevIcon from "./images/website-dev.png";
import travelIcon from "./images/travel-logo.jpg";

// Social Icon
import githubIcon from "./images/github.svg";
import instagramIcon from "./images/instagram.svg";

export default {
  //   Header Details ---------------------
  name: "James",
  headerTagline: [
    //Line 1 For Header
    "React Developer,",
    //Line 2 For Header
    "Software Engineer,",
    //Line 3 For Header
    "Photographer",
  ],
  //   Header Paragraph
  headerParagraph:
    "I build custom websites to help businesses strengthen their brand identity that eventually convert to increases in sales. ",

  //Contact Email
  contactEmail: "james.rathh@gmail.com",
  //Phone Number
  contactCell: "312-598-2464",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Development Portfolio",
      para: "A collection of projects I've worked on.",

      imageSrc:
        "https://image.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg",

      url: "https://www.vrcode.dev",
    },
    {
      title: "Photography Portfolio",
      para:
        "This photography portfolio showcases my photography enthusiasm to the world. It contains pieces that I consider one of my best works.", // Add Your Service Type Here

      // imageSrc: "./images/2.jpg",
      imageSrc:
        "https://image.freepik.com/free-vector/ui-ux-app-development-concept_52683-48848.jpg",
      url: "http://www.vrpixs.com/",
    },
    {
      title: "Yard Waste Gone",
      para:
        "Just a simple website I made to display an environmental project I was involved in.",
      // imageSrc: "./images/3.jpg",
      imageSrc:
        "https://image.freepik.com/free-vector/engineer-developer-with-laptop-tablet-code-cross-platform-development-cross-platform-operating-systems-software-environments-concept-bright-vibrant-violet-isolated-illustration_335657-312.jpg",
      url: "https://vrcode-dev.github.io/yardwastegone/",
    },
    {
      title: "News Gateway",
      para: "An android application that fetches news APIs",

      imageSrc:
        // "./images/4.jpg",
        "https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg",
      url: "https://github.com/vrcode-dev/News-Gateway",
    },
    {
      title: "Stock Watch",
      para: "An android application that retrived real time stock data.",

      // imageSrc: "./images/5.jpg",
      imageSrc:
        "https://image.freepik.com/free-vector/app-development-illustration_52683-47743.jpg",
      url: "https://github.com/vrcode-dev/Stock-Watch",
    },
    {
      title: "Prototype Design",
      para: "Some mock up designs I made for a NGO that I volunteered for.",

      // imageSrc: "./images/6.jpg",
      imageSrc:
        "https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
      url:
        "https://www.figma.com/file/INjmdKk5cLuRFSrlM8Fgth/Untitled?node-id=0%3A1",
    },
  ],
  projectsSummary: [
    {
      title: "Photography Portfolio",
      para:
        "This photography portfolio showcases my photography enthusiasm to the world. It contains pieces that I consider one of my best works.", // Add Your Service Type Here

      imageSrc:
        "https://image.freepik.com/free-vector/ui-ux-app-development-concept_52683-48848.jpg",
      url: "http://www.vrpixs.com/",
    },
    {
      title: "News Gateway",
      para: "An android application that fetches news APIs",

      imageSrc:
        "https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg",
      url: "https://github.com/vrcode-dev/News-Gateway",
    },
    {
      title: "Prototype Design",
      para: "Some mock up designs I made for a NGO that I volunteered for.",

      imageSrc:
        "https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
      url:
        "https://www.figma.com/file/INjmdKk5cLuRFSrlM8Fgth/Untitled?node-id=0%3A1",
    },
  ],
  // End Work Section -----------------------

  //Experience Section
  experince: [
    {
      company: "Oak Street Health",
      jobTitle: "React Developer",
      responsibilities: [
        "Managed the development of a shared UI library for the SPA using React, Babel, Webpack, SCSS,  HTML5, JavaScript, etc.",
        "Implemented the schedule viewing table with Material UI, React Hooks, and Redux.",
        "Refactored the React components’ state into Redux to increase scalability and code readability.",
        "Used React Router to achieve dynamic routing and to avoid blankness caused by web page refreshes in the application for seamless user experience as the user navigates throughout the website.",
        "Built decent and user friendly interfaces for content pages in the SPA through CSS layouts along with style mark-up presentations in JavaScript.",
        "Utilized NPM to manage various versions of code and code dependencies while upgrading the application conveniently as the source code is altered.",
        "Developed the router for the SPA to send HTTP requests while carrying out both synchronous and asynchronous data by using of Node.js and Express.",
        "Wrote unit tests using testing runners such as Jest and Enzyme for the application.",
        "Managed version control and tracked code changes during the application development using Git.",
        "Participated in the Agile/Scrum development process and reported to the administrative team regarding development progress in a timely manner.",
      ],
    },
    {
      company: "Peapod Digital Labs",
      jobTitle: "Web Developer",
      responsibilities: [
        "Developed dynamic website pages for the client-side application using React along with Bootstrap and upgraded its user experience both visually as well as functionally through developing responsive UI components through CSS3, JavaScript, HTML5, etc.",
        "Managed unidirectional data flow via Props and States of class components by creating re-usable React components for the web application.",
        "Used Redux to downgrade the intricacy of handling states over time during the development process of the application.",
        "Promoted smooth user experience by utilizing React Router to enhance browser performance, which enabled users to refresh the page without the interruption of the page view.",
        "Developed style components that could be recycled throughout the application by making use of CSS preprocessors such as SCSS.",
        "Handled the server-side code to design through RESTful APIs using Node.js and Express.",
        "Ensured the stability and accessibility of the application with self-created test cases using Jest and Enzyme.",
        "Guaranteed swift and reliable development collaboration using Git as the version control tool.",
        "Actively involved in daily stand-up meetings, periodic sprint reports, as well as other Agile/Scrum work activities.",
      ],
    },
    {
      company: "PNC Financial Services",
      jobTitle: "Front-End Developer",
      responsibilities: [
        "Took responsibilities for developing web widgets by making use of cutting-edge web technologies such as HTML5, CSS3, JavaScript, Bootstrap, SCSS, and the MERN stack.",
        "Established an SPA with React components using State, Specs, Props, and Events through the React architecture, Webpack, and Gulp.",
        "Utilized React Router to achieve dynamic routing for HTTP requests.",
        "Used Redux to manage states and the pass-around of stateless data in the components for the SPA.",
        "Designed and implemented CSS templates that might be reused throughout the application by utilizing CSS history, setting, margin, padding, table, etc.",
        "Developed web components consisting of but not limited to Button, Checkbox, Input Area, Icons, Toggle Button, Drop-down Menu for re-usable UI collections following UI standards requirements.",
        "Used NPM to generate organizations to coordinate package upkeep, coding and to conform packages of code for the SPA.",
        "Built HTTP RESTful APIs using Node.js along with Express while extensively testing RESTful services via Postman.",
        "Created screening cases and wrote unit-tests using testing tools such as Jest and Enzyme.",
        "Used Git to team up with peer developers collaborative development with velocity and productivity.",
        "Participated in the Agile/Scrum process that featured daily stand-up meetings and seasonal sprints, etc.",
      ],
    },
    {
      company: "CCC Intelligent Solutions",
      jobTitle: "Web Developer",
      responsibilities: [
        "Applied modern client-side and server-side development technologies such as HTML5, CSS3, as well as JavaScript into creating interactive web pages for the SPA.",
        "Engaged in the design of conceptual UI web structures and executed the design protocol using CSS3 and JavaScript based on the given requirements and guidelines.",
        "Brought out client-side authentications for the in-build web application using JavaScript and jQuery.",
        "Developed UI prototypes that could be clicked while refurbishing the existing website by adding new features utilizing HTML5 and CSS3.",
        "Boosted cross-browser compatibility and carried out responsive designs for the application using the Media Query in CSS3.",
        "Retrieved data from APIs/web services via Ajax-JSON calls to update DOM of the website within collections of outcomes.",
        "Operated on testing frameworks such as Mocha and Chai to perform unit tests for the web application to ensure reliability and stability.",
        "Used Git for version control as well as tracking and tracing project development while effectively collaborating with other developers.",
        "Took part in the Agile/Scrum workflow in the development process.",
      ],
    },
  ],
  // About Secton --------------
  aboutParaOne:
    "I'm a full-time frontend software engineer based in Chicago, IL. I build websites that make people feel like they need one.",
  aboutParaTwo:
    "When I'm not coding, you can find me strolling around the city of Chicago with my camera taking photos like those seen on advertisement billboard or local businesses' Instagram feed.",
  aboutParaThree:
    "Other interests include meeting up with new people, playing badminton, spending hours on YouTube teaching myself new web technologies as well as solving Leetcode problems and binge-ing NBA hightlights.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  about: [webDevIcon, photographyIcon, movieIcon, travelIcon],
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para: "HTML5",
    },
    {
      img: cssIcon,
      para: "CSS3",
    },

    {
      img: jsIcon,
      para: "JavaScript",
    },
    {
      img: sassIcon,
      para: "SCSS",
    },
    {
      img: reactIcon,
      para: "ReactJS",
    },
    {
      img: nodeJSIcon,
      para: "NodeJS",
    },
    {
      img: expressIcon,
      para: "ExpressJS",
    },
    {
      img: mongoDBIcon,
      para: "MongoDB",
    },
    {
      img: gitIcon,
      para: "Git",
    },
    {
      img: jiraIcon,
      para: "Jira",
    },

    {
      img: designIcon,
      para: "Design & Prototype",
    },
    {
      img: codeIcon,
      para: "Code",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: 'Say "hi" or discuss the next big thing together',
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "http://github.com/vrcode-dev" },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/vrpixs",
    },
  ],

  // End Contact Section ---------------
};

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
