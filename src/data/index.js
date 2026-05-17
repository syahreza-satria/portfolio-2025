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
  cv: "https://drive.google.com/file/d/1FrVRyBK6ipSknWWiitO170wY0bSlkaDn/view?usp=sharing",
  portfolio: "https://syahreza-satria.xyz/",
};

export const projects = [
  {
    id: 7,
    title: "Pixbyez",
    description: `Pixbyez is a portfolio website for photographer that wants to share the photo that he hadPIXBYEZ is a modern photography portfolio. It uses a responsive masonry layout and simple search features to put the focus entirely on your visual stories.`,
    imageUrl: "/assets/portfolio/pixbyez.png",
    tags: ["Laravel 10", "DaisyUI", "Tailwind CSS"],
    githubUrl: "https://github.com/syahreza-satria/pixbyez.git",
    liveUrl: "",
  },
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
    logo: "/assets/education/logoTelkom.webp",
    university: "Telkom University",
    degree: "Bachelor of Information Technology",
    gpa: "3.29/4.00",
    period: "Aug 2020 - Sep 2024",
    link: "https://www.youtube.com/watch?v=xfM4X6inBUk",
  },
];

export const experience = [
  {
    id: 5,
    logo: "/assets/experience/logo-lac.png",
    company: "Language Center Telkom University",
    position: "IT Support Coordinator (Freelance)",
    description: [
      "Independently managed end-to-end technical support for regular English Proficiency Test (EPrT) sessions, successfully facilitating both on-site and remote (Zoom-based) examinations.",
      `Guided candidates in installing and configuring the Safe Exam Browser (SEB), ensuring all personal devices strictly met academic testing standards.`,
      "Delivered real-time troubleshooting to resolve hardware, software, and network disruptions across both physical and virtual testing environments.",
      "Performed dual roles as Proctor and Co-Proctor, rigorously verifying participant identities and monitoring academic integrity during assigned shifts.",
    ],
    period: "Feb 2026 - Present",
    link: "https://lac.telkomuniversity.ac.id/",
  },
  {
    id: 4,
    logo: "/assets/experience/logo-lac.png",
    company: "Language Center Telkom University",
    position: "IT Support Coordinator (Freelance)",
    description: [
      "Led a team of 6 IT Support staff to manage the technical preparation and execution of the English Proficiency Test (EPrT) for incoming freshmen.",
      `Trained and mentored IT Support team members on standard troubleshooting procedures to effectively resolve system and device issues.`,
      "Provided real-time, hands-on technical assistance to troubleshoot and resolve participants' laptop, software, or network disruptions during the exam.",
      "Managed post-exam administrative duties, ensuring the accurate completion of daily logbooks and Official Handover Protocols (Berita Acara Pelaksanaan/BAP).",
      "Demonstrated operational flexibility by alternating roles as a Proctor or Co-Proctor to verify participant identities and monitor academic integrity.",
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
      "Led and mentored a distributed team of 8 IT students, effectively delegating tasks and managing workflows to ensure the timely delivery of technical upgrades.",
      `Spearheaded the UI/UX redesign and functional enhancements of three existing core web applications: the in-store POS System, the Mobile Web-App, and the StockApp inventory tool.`,
      "Improved system usability and operational efficiency by optimizing existing features and resolving functionality issues within the applications.",
      "Collaborated with stakeholders to identify pain points in the previous versions and translated them into actionable, technically sound digital improvements.",
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
      "Designed the user interface and overall user experience for a specialized financial application utilized by the CAATIS Laboratory.",
      `Formulated detailed user personas and constructed interactive mockups to guide the system's frontend development.`,
      "Translated multidisciplinary laboratory requirements into user-centric digital designs, maintaining a highly productive and collaborative research environment.",
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
      "Developed and implemented comprehensive visual strategies designed to increase engagement and visibility across various social media platforms.",
      "Collaborated with the content team to translate creative briefs into 20+ engaging social media visual assets using Figma, ensuring alignment with target audience preferences.",
      "Expanded design contributions beyond digital platforms by conceptualizing and producing print-ready physical assets, including official marketing team ID cards and lanyards.",
      "Maintained strict attention to detail and high creative standards across both digital and print outputs to ensure consistent and professional brand representation.",
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
