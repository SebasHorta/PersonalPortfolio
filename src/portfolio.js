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
    "Colombian-American CS student & Full Stack Developer 🚀 minoring in EE — passionate about AI, systems, and building tools that make a difference. I also enjoy music, fitness, and martial arts."
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
      "⚡ Build responsive, user-friendly web apps using React, Flask, and Bootstrap"
    ),
    emoji(
      "⚡ Develop intelligent systems and ML pipelines using Python, TensorFlow, and scikit-learn"
    ),
    emoji(
      "⚡ Engineer backend infrastructure and APIs with Flask, SQL, and multithreaded C programs"
    ),
    emoji(
      "⚡ Work with cloud services like GCP and integrate real-time features and databases"
    ),
    emoji(
      "⚡ Blend software and hardware — drawing on Electrical Engineering principles to create smarter systems"
    )
  ],

  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "flask", fontAwesomeClassname: "fas fa-flask" }, // Custom icon
    // { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    // { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    // { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "tensorflow", fontAwesomeClassname: "fas fa-brain" }, // Custom icon
    { skillName: "c", fontAwesomeClassname: "fas fa-code" },
    { skillName: "java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "bootstrap", fontAwesomeClassname: "fab fa-bootstrap" }
  ],

  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Columbia Engineering",
      logo: require("./assets/images/SEASLogo.svg.png"),
      subHeader: "B.S. in Computer Science, Minor in Electrical Engineering",
      duration: "Aug 2023 - May 2026 (Expected)",
      desc: "Focused on AI, Systems Programming, UI Design, and Electrical Engineering fundamentals.",
      descBullets: [
        "Relevant coursework: AI, Systems Programming, UI Design, Fundamentals of Computer Systems, CS Theory, Data Structures, Discrete Math, Probability for Engineers",
        "Conducted gait analysis research at Columbia’s ROAR Lab using machine learning",
        "Resident Adviser & Engagement Coordinator organizing community events"
      ]
    },
    {
      schoolName: "Farmingdale State College",
      logo: require("./assets/images/Farmingdale_State_College_logo_1.jpg"),
      subHeader: "B.S. in Computer Science (Transferred)",
      duration: "Aug 2022 - May 2023",
      desc: "Achieved 4.0 GPA and President’s List honors.",
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
      Stack: "Frontend Development (React, HTML/CSS, JS)",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend & Systems (Flask, C, SQL, Web Servers)",
      progressPercentage: "75%"
    },
    {
      Stack: "AI & Programming (Python, ML, Java)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Independent Developer & Researcher",
      company: "Columbia University",
      companylogo: require("./assets/images/SEASLogo.svg.png"),
      date: "2024 – Present",
      desc: "Hands-on research and development projects in machine learning and full-stack web applications.",
      descBullets: [
        "Developed ML pipeline for personalized gait analysis using VR sensor data with ~85% accuracy.",
        "Built an interactive Flask web app to teach photography exposure concepts.",
        "Created a full-stack sustainability app to track food expiration and notify users."
      ]
    },
    {
      role: "Committee Board Member",
      company: "Society of Hispanic Professional Engineers – Columbia University",
      companylogo: require("./assets/images/SHPELogo.png.avif"), // Replace with your actual image path
      date: "2023 – Present",
      desc: "Support professional development and community outreach within SHPE's Columbia chapter.",
      descBullets: [
        "Organized technical workshops and networking events with industry professionals.",
        "Promoted inclusive engagement and academic support among STEM students."
      ]
    },
    {
      role: "Resident Advisor – Engagement Coordinator",
      company: "Columbia University Residential Life",
      companylogo: require("./assets/images/SEASLogo.svg.png"),
      date: "2024 – Present",
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/SebasHorta.jpeg"),
      projectName: "Sebas",
      projectDesc: "Sebas",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://website.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/SebasHorta.jpeg"),
      projectName: "Sebas",
      projectDesc: "Sebas",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://website.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Honors, Scholarships, and Projects I’m proud of!",

  achievementsCards: [
    {
      title: "Anders Group Scholarship",
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
      title: "Nathaniel Arbiter Scholarship",
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
    {
      title: "Personalized Gait Analysis (Columbia ROAR Lab)",
      subtitle:
        "Developed a machine learning pipeline analyzing VR sensor data to detect gait abnormalities with ~85% accuracy, advancing tech-healthcare integration.",
      image: require("./assets/images/SEASLogo.svg.png"),
      imageAlt: "Columbia ROAR Lab Logo",
      footerLink: [
        {
          name: "Project Details",
          url: "https://github.com/SebasHorta/Gait-Analysis-Project" // Replace with actual project URL if available
        }
      ]
    }
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
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
