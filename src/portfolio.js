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
  username: "NATHAN NGUYEN",
  title: "Hi all, I'm Nathan",
  subTitle: emoji(
    "An aspiring Back-End Developer experienced in building Windows applications and recreations of games using Java, C# and C++."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1p9U-GyBUvnGa2_hPW4BEEI3_7gwHC6aj_za_ClCUKfs/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ukulele2fire",
  linkedin: "https://www.linkedin.com/in/nathannn3",
  gmail: "nathann3@usc.edu",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AMBITIOUS BACK-END DEVELOPER WHO WANTS TO DO ANYTHING MATH-HEAVY",
  skills: [
    emoji(
      "⚡ Implement algorithms involving game theory and applied probability"
    ),
    emoji(
      "⚡ Windows applications using .NET (C#) and WindowBuilder (Java)"
    ),
    emoji(
      "⚡ Recreate classic video games from the ground up 🕹️"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-c#"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-c"  //uh oh
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Southern California",
      logo: require("./assets/images/usc_logo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2023 - Present"/*,
      desc: "Participating in Solar Car programming team",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "10%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Inventory Management Intern",
      company: "CalDigit",
      companylogo: require("./assets/images/caldigitLogo.png"),
      date: "June 2022 – August 2022",
      desc: "Participated in internship at CalDigit, a hardware manufacturer/retailer specializing in Thunderbolt/USB-C technology.",
      descBullets: [
        "Managed inventory of returned & refurbished products including docking stations and Thunderbolt cables",
	"Analyzed devices for proper functioning by testing each individual port (USB-C, Ethernet, Audio)",
	"Assisted in logging of package information on returned shipments into detailed inventory spreadsheets",
	"Taught how to construct financial reports by analyzing sales of all products across multiple months"

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
  subtitle: "SOME PROGRAMS/APPLICATIONS THAT I HAVE MADE",
  projects: [
    {
      image: require("./assets/images/tetris.png"),
      projectName: "Tetris Multiplayer",
      projectDesc: "Client/Server application for Tetris (Singleplayer and Battle Royale)",
      footerLink: [
        {
          name: "Link to Project",
          url: "https://github.com/ukulele2fire/Tetris-Multiplayer"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/titan.png"),
      projectName: "Dental Data Ledger",
      projectDesc: "Windows application for managing patient data for a dental practice",
      footerLink: [
        {
          name: "Link to Project",
          url: "https://drive.google.com/drive/folders/1w7_Md2_yU3E36Tx2aqkXsPJyl7aqyngd?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/Tic_tac_toe.svg.png"),
      projectName: "Tic-Tac-Toe",
      projectDesc: ".NET application for playing against AI of 3 difficulty levels",
      footerLink: [
        {
          name: "Link to Project",
          url: "https://github.com/ukulele2fire/TicTacToe"
        }
      ]
    },
    {
      image: require("./assets/images/sudoku.png"),
      projectName: "Sudoku Solver/Creator",
      projectDesc: ".NET application for solving and generating sudokus",
      footerLink: [
        {
          name: "Link to Project",
          url: "https://github.com/ukulele2fire/Sudoku"
        }
      ]
    },
    {
      image: require("./assets/images/2048.png"),
      projectName: "2048",
      projectDesc: "Python console app recreating 2048 mobile game",
      footerLink: [
        {
          name: "Link to Project",
          url: "https://replit.com/@ukulele2fire/2048?v=1"
        }
      ]
    },
    {
      image: require("./assets/images/hangman.png"),
      projectName: "Hangman",
      projectDesc: "Python console app recreating hangman word game",
      footerLink: [
        {
          name: "Link to Project",
          url: "https://replit.com/@ukulele2fire/Hangman?v=1"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-714-622-8072",
  email_address: "nathann3@usc.edu"
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
  isHireable
};
