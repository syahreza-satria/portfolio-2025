import React from "react";

const Footer = ({ profile, socialLinks, donationLinks }) => {
  if (!profile) {
    console.warn("Profile prop is missing in Footer component.");
    return null;
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-8 max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10 mt-10 border-t border-neutral-800/80">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-lg md:text-xl text-neutral-200 tracking-tight">{profile.name}</h1>
          <p className="text-neutral-400 text-sm md:text-base mt-1">Frontend Developer · UI Designer · Content Creator</p>
        </div>

        <p className="text-neutral-500 text-sm mt-8 md:mt-0 font-medium tracking-wide">
          © {currentYear} {profile.name}. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
        <div className="space-y-4">
          <h2 className="font-bold text-sm uppercase tracking-wider text-neutral-300">Get in touch</h2>
          <div className="flex gap-4">
            {socialLinks &&
              socialLinks.map((link, index) => (
                <a
                  key={`social-${index}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-[#74d4ff] hover:-translate-y-1 transition-all duration-300"
                  aria-label={link.name || "social link"}
                >
                  {link.icon}
                </a>
              ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-bold text-sm uppercase tracking-wider text-neutral-300">Support Me</h2>
          <div className="flex gap-4">
            {donationLinks &&
              donationLinks.map((link, index) => (
                <a
                  key={`donation-${index}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-[#74d4ff] hover:-translate-y-1 transition-all duration-300"
                  aria-label={link.name || "donation link"}
                >
                  {link.icon}
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
