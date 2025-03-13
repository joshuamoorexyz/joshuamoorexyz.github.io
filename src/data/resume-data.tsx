import { GitHubIcon, LinkedInIcon, GoogleScholarIcon, ResearchGateIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Joshua J. Moore",
  initials: "JM",
  location: "Columbus, MS",
  locationLink: "https://www.google.com/maps/place/Columbus,+MS/",
  about:
    "PhD Student @ Mississippi State University focused on wireless communications",
  summary:
    "I am currently pursuing my PhD in Computer Engineering at Mississippi State University. My research areas include O-RAN, NextG technologies, RAN Orchestration, AI/ML in O-RAN among others.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D5603AQEIu7LkDVH9kA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723001134476?e=1747267200&v=beta&t=79MQlsY93PIpwqQHbyqLaDKr4fvXPQQd9daJAsU2Vl4",
  personalWebsiteUrl: "http://joshmoore.vercel.app/",
  contact: {
    email: "jjm702@msstate.edu",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/joshuamoorexyz/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joshuamoorexyz/",
        icon: LinkedInIcon,
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=872cufwAAAAJ&hl=en",
        icon: GoogleScholarIcon,
      },
      {
        name: "Research Gate",
        url: "https://www.researchgate.net/profile/Joshua-Moore-42",
        icon: ResearchGateIcon,
      },
      {
        name: "Resume",
        url: "/Josh_resume.pdf",
      },
    ],
  },

  education: [
    {
      id: 1,
      school: "Mississippi State University",
      degree: "Ph.D. in Electrical Engineering",
      start: "Dec 2022",
      end: "Present",
      // gpa: "",
    },
    {
      id: 2,
      school: "Mississippi State University",
      degree: "B.S. in Software Engineering",
      start: "Aug 2020",
      end: "Dec 2022",
      // gpa: "",
    },
    {
      id: 3,
      school: "Hinds Community College",
      degree: "Associates degree in General Studies",
      start: "May 2018",
      end: "May 2020",
      // gpa: "",
    },
  ],

  work: [
    {
      id: 1,
      company: "Wireless Communications Lab",
      link: "https://sites.google.com/view/msu-wireless/team/",
      title: "Graduate Research Assistant",
      start: "Dec 2023",
      end: null,
      description: `(Enter description here)`,
    },
    {
      id: 2,
      company: "Department of Electrical and Computer Engineering, MSU",
      link: "https://www.ece.msstate.edu/",
      title: "Graduate Teaching Assistant",
      start: "Jan 2023",
      end: "May 2023",
      description: `(Enter description here)`,
    },
    {
      id: 3,
      company: "Wireless Communications Lab",
      link: "https://sites.google.com/view/msu-wireless/team/",
      title: "Undergraduate Research Assistant",
      start: "Aug 2020",
      end: "Dec 2022",
      description: `(Enter description here)`,
    },
  ],

  skills: [
    "C++",
    "Python",
    "MATLAB",
    "PyTorch",
    "TensorFlow",
    "Docker",
  ],

  projects: [
    {
      title: "RAN Tester UE ",
      techStack: ["C++", "Docker"],
      description: "Open-source RAN UE centric security testing software",
      link: {
        href: "https://github.com/oran-testing/ran-tester-ue",
      },
      isActive: true,
    },
    {
      title: "LSTM-GAN hybrid model ",
      techStack: ["PyTorch"],
      description: "Enhancing UAV-to-Ground channel modeling for the AERPAW digital twin",
      link: {
        href: "https://github.com/joshuamoorexyz/GAN-Channel_Modeling-IntrotoML",
      },
      isActive: true,
    },
  ],

  extracurricularActivities: [
    {
      id: 1,
      role: "Founder",
      organization: "Open Source Software Group (MSU)",
      link: "https://discord.gg/caZFZWYw",
      start: "Aug 2020",
      end: "Present",
      description: `(Enter description here)`,
    },
    {
      id: 2,
      role: "Founder",
      organization: "Wireless Research Community (Discord)",
      link: "https://discord.gg/yCTESWgg",
      start: "Feb 2025",
      end: "Present",
      description: `(Enter description here)`,
    },
  ],
} as const;
