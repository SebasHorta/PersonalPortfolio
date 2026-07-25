// portfolio.js

/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sebastian Horta",
  title: "Hello! I'm Sebas",
  subTitle: emoji(
    "Colombian-American Columbia CS graduate & Full Stack Developer 🚀 — passionate about AI, Robotics, and building tools that make a difference. I also enjoy music, fitness, and martial arts."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SebasHorta",
  linkedin: "https://www.linkedin.com/in/sebastianhorta03",
  gmail: "sh4506@columbia.edu",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};


// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER WITH A PASSION FOR AI, SYSTEMS, AND IMPACT-DRIVEN TECH",

  skills: [
    emoji(
      "⚡ Build responsive full-stack web apps using React, FastAPI, and Flask"
    ),
    emoji(
      "⚡ Develop ML pipelines and intelligent systems using Python and scikit-learn"
    ),
    emoji(
      "⚡ Engineer backend infrastructure and APIs"
    ),
    emoji(
      "⚡ Build with AI — integrating LLM APIs, agentic workflows, and MCP servers into real pipelines"
    ),
    // emoji(
    //   "⚡ Blend software and hardware — drawing on Electrical Engineering principles to create smarter systems"
    // )
  ],

  softwareSkills: [
    { skillName: "HTML-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-flask" }, // Custom icon
    // { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    // { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "ML", fontAwesomeClassname: "fas fa-brain" },
    // { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    // { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" }, // Custom icon
    { skillName: "C/C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    // { skillName: "bootstrap", fontAwesomeClassname: "fab fa-bootstrap" }
  ],

  display: true // Set false to hide this section, defaults to true
};


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Columbia Engineering",
      logo: require("./assets/images/SEASLogo.svg.png"),
      subHeader: "B.S. in Computer Science, Minor in Electrical Engineering",
      duration: "Aug 2023 - May 2026",
      desc: "Focused on AI, Systems Programming, Networks, and Electrical Engineering fundamentals.",
      descBullets: [
        "Coursework: Computer Networks, NLP, Adv. C++ Systems, Artificial Intelligence, Data Structures, Systems Programming, CS Theory, UI Design",
"ML Engineer at Columbia Robotics Lab — gait event detection using KMeans clustering, cross-correlation sync, and Random Forest",
        "Resident Adviser — organized 10+ community events for 700+ residents"
      ]
    },
    {
      schoolName: "Farmingdale State College",
      logo: require("./assets/images/Farmingdale_State_College_logo_1.jpg"),
      subHeader: "B.S. in Computer Science (Transferred)",
      duration: "Aug 2022 - May 2023",
      desc: "Achieved 4.0 GPA and President's List honors.",
      descBullets: [
        "Member of Collegiate Science and Technology Entry Program (CSTEP)"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Full Stack Development (React, FastAPI, Flask)",
      progressPercentage: "80%"
    },
    {
      Stack: "Systems & Backend (C++, Python, Distributed Systems)",
      progressPercentage: "85%"
    },
    {
      Stack: "AI & Machine Learning (scikit-learn, NLP, Signal Processing)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: true
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Machine Learning Engineer",
      company: "CU Robotics Lab",
      companylogo: require("./assets/images/SEASLogo.svg.png"),
      date: "June 2025 – Aug 2025",
      desc: "Built an ML pipeline to detect gait events from VR motion-tracker data under faculty mentorship.",
      descBullets: [
        "Engineered unsupervised KMeans clustering to classify VR trackers by body segment and foot side",
        "Developed cross-correlation-based synchronization between VR tracker streams and MAT ground truth",
        "Trained Random Forest classifier achieving ~85% accuracy on heel strike and toe off detection"
      ]
    },
    {
      role: "Full Stack Developer (Freelance)",
      company: "Self-Employed",
      companylogo: require("./assets/images/fullstack.png"),
      date: "April 2025 – Aug 2025",
      desc: "Built and delivered a full-stack web archiving tool for research use.",
      descBullets: [
        "Built offline web archiver with recursive crawler using requests and BeautifulSoup for HTML and asset capture",
        "Implemented URL rewriting and error handling for irregular link structures",
        "Created React dashboard with real-time progress tracking and iframe previews"
      ]
    },
    {
      role: "Committee Board Member",
      company: "CU SHPE",
      companylogo: require("./assets/images/SHPELogo.png.avif"), // Replace with your actual image path
      date: "September 2023 – May 2026",
      desc: "Support professional development and community outreach within SHPE's Columbia chapter.",
      descBullets: [
        "Organized technical workshops and networking events with industry professionals.",
        "Promoted inclusive engagement and academic support among STEM students."
      ]
    },
    {
      role: "Resident Advisor – Engagement Coordinator",
      company: "CU Res Life",
      companylogo: require("./assets/images/SEASLogo.svg.png"),
      date: "August 2024 – May 2026",
      desc: "Guide and support residents while fostering a positive and inclusive living environment.",
      descBullets: [
        "Planned community-building programs to enhance engagement and connection.",
        "Provided peer support and responded to residents’ needs and concerns."
      ]
    }
  ]
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PRETTY COOL THINGS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/mcp.png"), // add a screenshot
      projectName: "Graph-Scoped Context Server — 2026",
      projectDesc: "MCP server for LLM coding agents that intelligently scopes repository context using dependency-graph traversal, git-diff filtering, and automated fault-injection benchmarking.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/SebasHorta/graph-scoped-context-server"
        }
      ]
    },
    {
      image: require("./assets/images/graph-decreasing.png"), // add a screenshot
      projectName: "Weekly Weight Average Tool — 2026",
      projectDesc: "Pulls RENPHO smart-scale history into SQLite and generates an interactive weekly-average HTML report with goal tracking. Resilient to the underlying unofficial API breaking.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/SebasHorta/renpho-weekly-tracker"
        }
      ]
    },
    {
      image: require("./assets/images/blockchain.png"), // add a screenshot
      projectName: "Allowance — 2026",
      projectDesc: "P2P blockchain enforcing AI agent spending limits via ECDSA-signed transactions, Merkle tree integrity, and proof-of-work mining across 4+ independent nodes. Validated with 106 tests.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/SebasHorta/allowance-blockchain"
        }
      ]
    },
    {
      image: require("./assets/images/database.png"), // add a screenshot
      projectName: "C++ Generic Database & Build Tool — 2026",
      projectDesc: "Generic C++ binary serialization library and GNU make subset with regex-based Makefile parsing, recursive dependency resolution with cycle detection, and binary caching layer.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/SebasHorta/cpp-database-build-tool"
        }
      ]
    },
    {
      image: require("./assets/images/archive.png"), // add a screenshot
      projectName: "Web Archiver Tool — 2025",
      projectDesc: "Full-stack offline web archiver with recursive crawler, URL rewriting, and React dashboard with real-time progress tracking and iframe previews. Built with FastAPI and BeautifulSoup.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/SebasHorta/Web-Archiver-Tool"
        }
      ]
    },
    // {
    //   image: require("./assets/images/SebasHorta.jpeg"), // add a screenshot or lab logo
    //   projectName: "Gait Analysis ML Pipeline",
    //   projectDesc: "ML pipeline detecting heel strikes and toe offs from VR motion-tracker data using KMeans clustering, cross-correlation synchronization, and Random Forest classification — ~85% accuracy.",
    //   footerLink: [
    //     {
    //       name: "Columbia Robotics Lab",
    //       url: "https://roar.me.columbia.edu"
    //     }
    //   ]
    // }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Honors and Scholarships I’m proud of!",

  achievementsCards: [
      {
      title: "Columbia Spirit Award — 2026",
      subtitle: "Presented to students who best represent Columbia's spirit through leadership, community, and impact. Recognized as a first-generation Latino engineer and community leader through SHPE, Sabor, and Columbia BJJ.",
      image: require("./assets/images/SEASLogo.svg.png"),
      imageAlt: "Columbia University Logo",
      footerLink: [
        {
          name: "Award Details",
          url: "https://www.cc-seas.columbia.edu/awards/honorees/2026"
        }
      ]
    },
    {
      title: "Anders Group Scholarship — 2024",
      subtitle:
        "National merit-based scholarship awarded for academic excellence and vision to impact public health through technology.",
      image: require("./assets/images/AndersGroup.webp"),
      imageAlt: "Anders Scholarship Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://www.andersgroup.org/blog/anders-group-announces-2024-scholarship-winner-sebastian-h"
        }
      ]
    },
    {
      title: "Nathaniel Arbiter Scholarship — 2024",
      subtitle:
        "Columbia Engineering scholarship honoring leadership and academic excellence in science and technology.",
      image: require("./assets/images/SEASLogo.svg.png"),
      imageAlt: "Columbia SEAS Logo",
      footerLink: [
        {
          name: "More Info",
          url: "https://engineering.columbia.edu/undergraduate/scholarships" // Replace with your specific link if you have it
        }
      ]
    },
  ],
  display: true
};



// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("CONTENT 🎙️"),
  subtitle: "CONTENT I'VE BEEN A PART OF!",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://www.youtube.com/embed/w27L6VYazgI"],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "sh4506@columbia.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
