import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, YoutubeIcon, TakoIcon, PaypalIcon } from "@/components/ui/icons";

export const bubbleMenuItems = [
  {
    label: "HOME",
    href: "/",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "PROJECT",
    href: "/project",
    ariaLabel: "Project",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "GEAR",
    href: "/gear",
    ariaLabel: "Gear",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "CONTACT",
    href: "/contact",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

export const profile = {
  name: "Syahreza Satria Alfath",
  bio: `I don't just build websites, I bring them to life. I design beautiful interfaces, write the code that makes them work, and create the stories they tell. I'm a digital creator, from concept to execution.`,
  avatar: "/assets/img/profilePic.png",
  cv: "https://drive.google.com/file/d/1gplQTTVjASTT4jr2kvAZTR3lb5jhyZdC/view?usp=sharing",
  portfolio: "https://drive.google.com/file/d/1FrVRyBK6ipSknWWiitO170wY0bSlkaDn/view?usp=sharing",
};

export const projects = [
  {
    id: 6,
    title: "GardenLink",
    description: `GardenLink Engineered a high-performance "Link-in-Bio" platform using Next.js and Tailwind CSS, featuring ReactBits animations for superior visual engagement and scalability.`,
    imageUrl: "/assets/portfolio/gardenlink.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Typescript"],
    githubUrl: "https://github.com/syahreza-satria/gardenlink.git",
    liveUrl: "https://gardenlink-phi.vercel.app/",
  },
  {
    id: 5,
    title: "LunasinYuk",
    description: "LunasinYuk is a financial tracker using Google Apps Script and Tailwind CSS, featuring cloud-based data integration and intuitive bill status management.",
    imageUrl: "/assets/portfolio/lunasinyuk.png",
    tags: ["Apps Script", "Microsoft Excel", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "https://script.google.com/macros/s/AKfycby0yCcgK4mckyGJ3Wki8tjxl92Dx0Qz7BrNpntIiZEmzTPOGmjGsqB1AKDAP0gjb2Y/exec",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal Branding Platform Engineered a high-performance portfolio using Next.js and Tailwind CSS, featuring React Bits animations for a modern presence at syahreza-satria.xyz.",
    imageUrl: "/assets/portfolio/portfolio.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/syahreza-satria/syahreza-satria-portofolio.git",
    liveUrl: "https://syahreza-satria.xyz",
  },
  {
    id: 3,
    title: "Lakeside Membership",
    description: "Lakeside Membership Developed a mobile F&B platform featuring seamless food ordering and integrated loyalty rewards, designed to elevate customer engagement and streamline membership management.",
    imageUrl: "/assets/portfolio/lakesideMembership.png",
    tags: ["Figma", "Laravel", "Bootstrap CSS"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 2,
    title: "Hellena",
    description: "Hellena Designed an intuitive UI for a doctor appointment platform, collaborating with developers to streamline the patient booking experience and ensure seamless navigation.",
    imageUrl: "/assets/portfolio/helenna.png",
    tags: ["Figma", "Adobe Illustrator"],
    githubUrl: "",
    liveUrl: "https://www.figma.com/design/cxU81kBo98mlKMDAJk680G/Hellena?node-id=0-1&t=WQdSg6bh85qGCcbH-1",
  },
  {
    id: 1,
    title: "Nomads",
    description: "Nomads Developed a functional flight booking platform as a collegiate capstone project, applying advanced full-stack development principles to create a seamless online reservation system.",
    imageUrl: "/assets/portfolio/nomads.png",
    tags: ["Figma", "Laravel", "Bootstrap CSS"],
    githubUrl: "https://github.com/syahreza-satria/nomads.git",
    liveUrl: "",
  },
];

export const education = [
  {
    id: 1,
    logo: "/assets/education/logoTelkom.png",
    university: "Telkom University",
    degree: "Bachelor of Information Technology",
    gpa: "3.29/4.00",
    period: "Aug 2020 - Sep 2024",
    link: "https://www.youtube.com/watch?v=xfM4X6inBUk",
  },
];

export const experience = [
  {
    id: 4,
    logo: "/assets/experience/logo-lac.png",
    company: "Telkom University Language Center",
    position: "IT Support Coordinator (Freelance)",
    description: [
      "Team Coordination: Led and coordinated a team of 6 IT Support staff, delegating tasks and ensuring technical readiness for all test sessions.",
      `Technical Support: Provided guidance and ensured all participants successfully installed and configured the Safe Exam Browser (SEB) according to required standards.`,
      "Troubleshooting: Performed real-time problem identification and troubleshooting for device or network issues experienced by participants during the test.",
      "Proctoring: Served as a Proctor and Co-Proctor based on assigned shifts, responsible for participant verification and monitoring academic integrity during the exam.",
      "Operational Management: Ensured the stability of all technical aspects of the exam, from initial setup and execution to test completion, to prevent disruptions.",
    ],
    period: "Oct 2025 - Des 2025",
    link: "https://lac.telkomuniversity.ac.id/",
  },
  {
    id: 3,
    logo: "/assets/experience/caatis.png",
    company: "Lakeside F&B Group (Venture by CAATIS COE)",
    position: "IT Lead (Hybrid)",
    description: [
      "Remote Team Leadership: Lead and mentor a distributed team of 8 IT professionals, overseeing task delegation and development workflows to ensure seamless operations for Lakeside F&B Group.",
      `Application Ecosystem Management: Direct the full lifecycle—architecture, development, and maintenance—of three core platforms: the customer-facing Mobile App, the in-store POS System, and the Stock Lakeside inventory management tool.`,
      "Scalability & Performance: Engineer high-performance architectures designed to scale with business growth, ensuring system stability during peak operational hours.",
      "Strategic Collaboration: Partner with cross-functional stakeholders to translate complex business requirements into effective, technically sound digital solutions.",
    ],
    period: "Sep 2024 - Jan 2025",
    link: "https://caatis.telkomuniversity.ac.id/",
  },
  {
    id: 2,
    logo: "/assets/experience/caatis.png",
    company: "CAATIS COE",
    position: "UX Designer (Internship)",
    description: [
      "Multidisciplinary Collaboration: Collaborated effectively within an alliance research setting that accommodates diverse disciplines, fostering cross-functional teamwork and knowledge exchange.",
      `Research Support: Supported the laboratory’s core research activities by assisting in data collection, analysis, and the implementation of technical project requirements.`,
      "Project Implementation: Contributed to the execution of laboratory projects, ensuring technical objectives were met within the established timelines.",
      "Operational Compliance: Adhered to laboratory standards and protocols within the facility to maintain a productive and professional research environment.",
    ],
    period: "Jun 2023 - Jul 2024",
    link: "https://caatis.telkomuniversity.ac.id/",
  },
  {
    id: 1,
    logo: "/assets/experience/mcsmb.jpeg",
    company: "Telkom University Marketing Crew",
    position: "Social Media Designer",
    description: [
      "Visual Strategy: Developed and implemented comprehensive visual strategies designed to increase engagement and visibility across various social media platforms.",
      "Content Creation: Designed high-quality, engaging, and relevant visual content tailored to specific target audiences, ensuring strong resonance with followers.",
      "Performance Analysis: Monitored and analyzed campaign performance metrics to identify trends and insights, using data to optimize future designs and results.",
      "Quality Assurance: Maintained strict attention to detail and high creative standards in all visual outputs to ensure professional and impactful brand representation.",
    ],
    period: "Nov 2022 - Des 2024",
    link: "https://www.instagram.com/mcsmbtelkom/",
  },
];

export const skillsDev = ["MySQL", "React", "Next.js", "Tailwind CSS", "Node.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Laravel", "Bootstrap CSS", "Material UI"];

export const skillsCreative = ["Adobe Photoshop", "Figma", "Adobe Lightroom", "Capcut", "Canva", "Adobe Premiere Pro", "Notion", "Google Docs", "Google Sheets", "Google Sheets"];

export const socialLinks = [
  { href: "https://github.com/syahreza-satria", icon: <GithubIcon /> },
  { href: "https://instagram.com/syahreza_satria", icon: <InstagramIcon /> },
  {
    href: "https://linkedin.com/in/syahreza-satria-alfath",
    icon: <LinkedinIcon />,
  },
  { href: "mailto:satriaeza221@gmail.com", icon: <MailIcon /> },
  { href: "https://www.youtube.com/@SyahrezaSatria", icon: <YoutubeIcon /> },
];

export const donationLinks = [
  { href: "https://tako.id/SyahrezaSatria", icon: <TakoIcon /> },
  { href: "https://paypal.me/SyahrezaSatriaAlfath", icon: <PaypalIcon /> },
];

export const gears = [
  {
    id: 10,
    brand: "Acome",
    model: "3D Subwoofers Wired Earphone",
    category: "Computer",
    description: "Good & Cheap wired earphone",
    image: "/assets/gear/Acome-3d-subwoofer.webp",
    link: "https://tk.tokopedia.com/ZSa4PseNE/",
  },
  {
    id: 9,
    brand: "Asus",
    model: "Gaming V16",
    category: "Computer",
    description: "Great gaming laptop to do all my work",
    image: "/assets/gear/asus-v16.webp",
    link: "https://tk.tokopedia.com/ZSaXKuaqH/",
  },
  {
    id: 8,
    brand: "Rexus",
    model: "QB400",
    category: "Computer",
    description: "Cheap wireless bluetooth mouse",
    image: "/assets/gear/QB400.webp",
    link: "https://tk.tokopedia.com/ZSaXKUGbw/",
  },
  {
    id: 7,
    brand: "Canon",
    model: "EOS RP",
    category: "Camera",
    description: "Main camera, great for photography.",
    image: "/assets/gear/canon-eos-rp.webp",
    link: "https://tk.tokopedia.com/ZSaXKqmuw/",
  },
  {
    id: 6,
    brand: "Canon",
    model: "RF 50mm f/1.8",
    category: "Camera",
    description: "Great lens for taking potraits.",
    image: "/assets/gear/canon-rf-35mm.webp",
    link: "https://tk.tokopedia.com/ZSaXKDF8G/",
  },
  {
    id: 5,
    brand: "VortexSeries",
    model: "Mono 75",
    category: "Computer",
    description: "Cheap and quality keyboard.",
    image: "/assets/gear/vortexseries-mono-75.webp",
    link: "https://tk.tokopedia.com/ZSaXKyaP4/",
  },
  {
    id: 4,
    brand: "Lenovo",
    model: "Ideapad Gaming M100",
    category: "Computer",
    description: "Wired mouse, great for gaming.",
    image: "/assets/gear/lenovo-ideapad-gaming-m100.webp",
    link: "https://tokopedia.com/",
  },
  {
    id: 3,
    brand: "AOC",
    model: "24G4E",
    category: "Computer",
    description: "Monitor 180Hz, with okei color.",
    image: "/assets/gear/aoc-24g4e.webp",
    link: "https://tk.tokopedia.com/ZSaXE2Gn4/",
  },
  {
    id: 2,
    brand: "Rexus",
    model: "Gladius GX2",
    category: "Camera",
    description: "For simple gaming.",
    image: "/assets/gear/rexus-gladius-gx2.webp",
    link: "https://tk.tokopedia.com/ZSaXENnDb/",
  },
  {
    id: 1,
    brand: "Rexus",
    model: "RXC 305",
    category: "Camera",
    description: "Great for transfering files from camera to laptop",
    image: "/assets/gear/rexus-rxc-305.webp",
    link: "https://tk.tokopedia.com/ZSaXK7uTG/",
  },
];
