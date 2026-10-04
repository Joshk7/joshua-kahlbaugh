export const person = {
  name: "Joshua Kahlbaugh",
  shortName: "Josh Kahlbaugh",
  title: "Software Engineer",
  location: "Spokane Valley, WA",
  email: "joshk7683@gmail.com",
  phone: "218-491-4226",
  links: {
    github: "https://github.com/JoshK7",
    linkedin: "https://www.linkedin.com/in/joshkahlbaugh",
    resumePdf: "/Joshua_Kahlbaugh_SoftwareEngineer_2026.pdf",
  },
} as const

export const hero = {
  headline: "Building clear, useful interfaces with\u00A0care.",
  support:
    "Software engineer based in Spokane Valley, WA, shipping React and Java experiences and exploring the outdoors when the code can wait.",
} as const

export const about = {
  lead: "A little about me",
  paragraphs: [
    "I'm a software engineer at Alarm.com (OpenEye), working across Java Spring services, SQL, TypeScript, and React. I care about building clear, performant experiences and adapting to whatever tools the problem needs.",
    "Before that, I interned at SecretLab, LLC, shipping React Native features for a production consumer health app paired with an FDA-cleared glucose and ketone monitoring device.",
    "I graduated Summa Cum Laude from the University of St. Thomas in St. Paul, MN, with a B.S. in Computer Science and a minor in Data Science. For my senior capstone, I led a team of five building a Java Spring Student Progress Dashboard. You can find more of my work on GitHub.",
  ],
} as const

export const hobbies = {
  lead: "Away from the keyboard",
  intro:
    "Living near water and open landscape shapes how I spend free time. Outdoors first, then back to the editor with a clearer head.",
  items: [
    {
      title: "Lake days",
      body: "I've spent a lot of time along Lake Superior near Duluth, from Brighton Beach on the North Shore to blooms at Leif Erickson a little further up. There are beautiful sights all around that shore.",
      image: "/images/beach.webp",
      imageFallback: "/images/beach.jpg",
      alt: "Rocky shoreline at Brighton Beach on Lake Superior",
    },
    {
      title: "Fishing",
      body: "Fishing is a chance to relax. It reliably puts me in a better mood and gives problem-solving a quieter backdrop.",
      image: "/images/fishing.webp",
      imageFallback: "/images/fishing.jpg",
      alt: "Fishing outdoors",
    },
  ],
} as const

export const experience = {
  lead: "Experience",
  intro: "Roles and projects from my 2026 software engineering resume.",
  jobs: [
    {
      role: "Software Engineer",
      company: "Alarm.com (OpenEye)",
      location: null,
      stack: "Java, Spring, SQL, CrateDB, TypeScript, React",
      dates: "June 2025 – Present",
      bullets: [
        "Designed temporal arm state tracking in CrateDB to fix a defect where delayed device events were evaluated against the current arm state, causing false-positive and suppressed alerts.",
        "Extended MySQL and Java Spring service architecture to support offline deterrent capabilities (white light, audio playback) across 100K+ recording devices.",
        "Fixed a production bug truncating customer alert history exports to 7 days, tracing it through AWS CloudWatch logs to a null pointer exception silently swallowed on alerts missing optional metadata.",
        "Implemented a SAML SSO login flow for devices connecting to web services, reducing login times by 25%.",
        "Migrated the React/TypeScript codebase to TypeScript 7’s native compiler, reducing CI typechecking time by 5x.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "SecretLab, LLC",
      location: null,
      stack: "React Native, REST APIs, Figma",
      dates: "November 2021 – December 2023",
      bullets: [
        "Shipped React Native features to a production consumer health app paired with an FDA-cleared glucose and ketone monitoring device.",
        "Built an interactive timeline visualizing glucose and ketone readings alongside daily activity, backed by RESTful API endpoints.",
        "Designed Figma prototypes for new app screens ahead of implementation.",
        "Integrated React Native frontend features with backend REST APIs across iOS and Android.",
        "Found and fixed an account creation flow that allowed users to bypass terms of service acceptance, closing a compliance gap in a regulated health product.",
      ],
    },
  ],
  education: {
    school: "University of St. Thomas",
    place: "St. Paul, MN",
    degree: "B.S. in Computer Science",
    minor: "Minor in Data Science",
    honors: "Summa Cum Laude",
    gpa: "3.96",
    dates: "September 2021 – May 2024",
    year: "2024",
  },
  projects: [
    {
      name: "Student Progress Dashboard",
      stack: "Java, Spring",
      dates: "May 2024",
      body: "Led a team of 5 developers across 8 sprints building a Java Spring dashboard tracking student assignment progress. Improved backend data retrieval performance by 50% through query and method optimization, built Chart.js visualizations for per-student GitHub contribution metrics for 200+ students, and implemented unit tests to validate aggregation of student performance data.",
    },
  ],
} as const

export const skills = {
  lead: "Tools I use",
  groups: [
    {
      label: "Languages",
      items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      label: "Frameworks",
      items: ["Spring", "React", "React Native", "Express.js"],
    },
    {
      label: "Databases",
      items: ["MySQL", "CrateDB"],
    },
    {
      label: "Developer tools",
      items: ["Git", "Copilot", "Cursor", "Atlassian Bamboo", "AWS", "Figma"],
    },
  ],
} as const

export const contact = {
  lead: "Let's talk",
  body: "I'd love to hear about what you're working on and how I could help. Reach out by email or find me on the profiles below.",
} as const
