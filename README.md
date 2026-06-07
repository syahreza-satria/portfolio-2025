# 🌟 Syahreza Satria - Personal Portfolio

A modern, highly interactive, and visually stunning personal portfolio web application built to showcase design and development projects, professional work experience, technical skills, and creative gear.

🔗 **Live Demo:** [syahreza-satria.xyz](https://syahreza-satria.xyz/)

---

## ✨ Features

- **📱 Responsive & Modern Design:** Designed with a mobile-first approach, dark mode aesthetics, and clean typography.
- **🫧 Interactive Bubble Menu:** A custom-animated radial navigation menu powered by **GSAP** that responds dynamically to user interaction.
- **🎨 Creative UI Animations:** Smooth animations using **Framer Motion** and specialized UI effects:
  - `DecryptedText`: Cyberpunk-style decryption text animation on hover/load.
  - `SpotlightCard`: Mouse-tracking hover spotlight effect.
  - `GradientText` & `ShinyText`: Premium text color animations.
  - `ScrollVelocity`: Smooth parallax scrolling text.
- **📂 Modular Architecture:** Clean separation of concerns with a centralized data source. Modify project details, skills, experiences, education, and links directly in a single file: `src/data/index.js`.
- **🛠️ Tools & Gear Section:** A dedicated page highlighting developer gear, camera gear, and favorite workspace items with direct purchase/reference links.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (React 19, App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS
- **Animations:** [GSAP (GreenSock)](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & Custom React Icons
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

To run this project locally, make sure you have **Node.js** (version 18 or above recommended) installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/syahreza-satria/syahreza-satria-portofolio.git
cd syahreza-satria-portofolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio in action.

### 4. Build for Production
To generate an optimized production build:
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```text
├── src/
│   ├── app/                # Next.js App Router pages (Home, Gear, Contact, Project)
│   │   ├── contact/        # Contact and donation section
│   │   ├── gear/           # Gear list page
│   │   ├── project/        # Full list of projects
│   │   ├── globals.css     # Global styles and Tailwind directives
│   │   └── layout.js       # Main layout & metadata configurations
│   ├── components/         # Reusable React UI components
│   │   ├── ui/             # Atomic design elements (Footer, Header, Items)
│   │   └── ...             # Animation wrappers (BubbleMenu, SpotlightCard, etc.)
│   ├── data/
│   │   └── index.js        # Central database for profile, projects, gear, and experiences
│   └── lib/                # Utility helper functions
├── public/                 # Static assets (images, icons, etc.)
├── package.json            # Scripts & project dependencies
└── tailwind.config.js      # Styling customizations
```

---

## ⚙️ Configuration & Customization

You can fully customize the portfolio without writing code by editing the contents of [src/data/index.js](file:///c:/Users/satri/Documents/Development/web-app/syahreza-satria-portofolio/src/data/index.js):

- **Profile Details:** Update the `profile` object (name, bio, avatar, CV link).
- **Navigation Links:** Add or modify items in the `bubbleMenuItems` array.
- **Projects:** Add or edit items in the `projects` array, specifying titles, tags, descriptions, images, and links.
- **Work Experiences & Education:** Fill in the `experience` and `education` arrays to reflect your career timeline.
- **Skills:** Adjust list items in `skillsDev` and `skillsCreative`.
- **Socials & Donations:** Change target social profile URLs in `socialLinks` or support pages in `donationLinks`.

---

## 📄 License

This project is open-source. Feel free to fork it, modify it, and make it your own! If you use this template, a attribution link back to [Syahreza Satria](https://syahreza-satria.xyz/) is greatly appreciated.
