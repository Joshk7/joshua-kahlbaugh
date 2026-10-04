export const person = {
  name: "Joshua Kahlbaugh",
  shortName: "Josh Kahlbaugh",
  title: "Software Engineer",
  location: "Liberty Lake, WA",
  email: "joshk7683@gmail.com",
  phone: "218-491-4226",
  links: {
    github: "https://github.com/Joshk7",
    linkedin: "https://www.linkedin.com/in/josh-kahlbaugh-8a307a221",
    leetcode: "https://leetcode.com/u/JoshK7",
    resumePdf: "/JoshuaKahlbaughResume.pdf",
  },
} as const

export const hero = {
  headline: "Building clear, useful interfaces with care.",
  support:
    "Frontend-focused software engineer based in Liberty Lake, WA — shipping React experiences and exploring the outdoors when the code can wait.",
} as const

export const about = {
  lead: "A little about me",
  paragraphs: [
    "I graduated Summa Cum Laude from the University of St. Thomas in St. Paul, MN, with a B.S. in Computer Science and a minor in Data Science.",
    "I'm a software engineer with a passion for building beautiful, performant, and accessible websites. I work with modern CSS, clean JavaScript/TypeScript, and React — and I adapt to whatever tools the problem needs.",
    "I've interned at SecretLab, LLC, led a senior capstone dashboard project, and keep sharpening my skills on LeetCode. You can find more of my work on GitHub.",
  ],
} as const

export const hobbies = {
  lead: "Away from the keyboard",
  intro:
    "Living near water and open landscape shapes how I spend free time — outdoors first, then back to the editor with a clearer head.",
  items: [
    {
      title: "Lake days",
      body: "I've spent a lot of time along Lake Superior near Duluth — Brighton Beach on the North Shore and blooms at Leif Erickson a little further up. There are beautiful sights all around that shore.",
      image: "/images/beach.webp",
      imageFallback: "/images/beach.jpg",
      alt: "Rocky shoreline at Brighton Beach on Lake Superior",
    },
    {
      title: "Fishing",
      body: "Fishing is a chance to relax — it reliably puts me in a better mood and gives problem-solving a quieter backdrop.",
      image: "/images/fishing.webp",
      imageFallback: "/images/fishing.jpg",
      alt: "Fishing outdoors",
    },
    {
      title: "Training",
      body: "I'm a firm believer that health is wealth. Working out and calisthenics keep me sharp mentally and physically — alongside hiking whenever I can get outside.",
      image: "/images/gym.webp",
      imageFallback: "/images/gym.jpg",
      alt: "Strength training and calisthenics",
    },
  ],
} as const

export const experience = {
  lead: "Experience",
  intro: "Roles and projects drawn from my public resume and portfolio.",
  jobs: [
    {
      role: "Software Engineer",
      company: "Alarm.com (OpenEye)",
      location: "WA",
      dates: "June 2025 – Current",
      bullets: [
        "Styled customer-facing dashboards in React by updating HTML and CSS inside styled components to support Marketing and Product Management initiatives.",
        "Resolved a production issue by scanning AWS logs, investigating Java Spring REST API endpoints, and editing TypeScript/JavaScript to restore a broken event report used for analytics on cloud camera events.",
        "Mentored coworkers on Git version branches, CI/CD pipelines, and coordinating with DevOps for a major-version transition.",
        "Developed a SQL-based system to manage feature restrictions for Facial Recognition, AI Visual Check, and AI Visual Search.",
      ],
    },
    {
      role: "Intern",
      company: "SecretLab, LLC",
      location: null,
      dates: "November 2021 – December 2023",
      bullets: [
        "Built interactive React Native components that talked to REST APIs so users could add and delete items in a daily activity tracker timeline.",
        "Designed Figma prototypes to improve interfaces across multiple screens.",
        "Collaborated with designers and backend developers to optimize UI/UX.",
      ],
    },
  ],
  education: {
    school: "University of St. Thomas",
    place: "St. Paul, MN",
    degree: "B.S. in Computer Science",
    minor: "Minor in Data Science",
    honors: "Summa Cum Laude",
    year: "2024",
  },
  projects: [
    {
      name: "Senior Capstone Project",
      body: "Led a team building a dashboard with Java Spring, JPA, and Hibernate to track student progress on assignments, with Chart.js visualizations for Git contribution metrics.",
    },
    {
      name: "Personal Website",
      body: "Created and maintained a portfolio site with React, TypeScript, CSS, HTML, and Git to showcase web development work.",
    },
    {
      name: "Tic Tac Toe (minimax)",
      body: "Built an unbeatable computer opponent using the minimax algorithm to explore every move until a win, loss, or draw score is returned.",
    },
    {
      name: "Sudoku",
      body: "Integrated a Sudoku generator and practiced React board state, styling, and component props — a focused exercise in interactive UI.",
    },
  ],
} as const

export const skills = {
  lead: "Tools I use",
  groups: [
    {
      label: "Frontend",
      items: ["JavaScript", "TypeScript", "React", "React Native", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      label: "Backend & data",
      items: ["Java Spring", "JPA / Hibernate", "SQL", "REST APIs", "Chart.js"],
    },
    {
      label: "Platform & craft",
      items: ["AWS", "Git", "CI/CD", "Figma", "Accessible UI"],
    },
  ],
} as const

export const contact = {
  lead: "Let's talk",
  body: "I'd love to hear about what you're working on and how I could help. Reach out by email or find me on the profiles below.",
} as const
