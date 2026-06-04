"use client";

import Header from "@/components/ui/Header";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/icons";
import { FaDribbble, FaThreads } from "react-icons/fa6";

export default function projectPage() {
  return (
    <main className="max-w-3xl mx-auto py-24 px-4 md:px-0 md:pt-28 md:pb-4 xl:py-8 space-y-8 text-neutral-200">
      <Header />

      {/* Header Text */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-100 md:text-4xl">Contact</h2>
        <p className="text-lg text-neutral-400 leading-relaxed">Feel free to get in touch. Let's discuss how we can collaborate and create something amazing together.</p>
      </div>

      <hr className="border-neutral-800" />

      {/* Social Media Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold tracking-tight text-neutral-100">Find Me on Social</h3>
        <div className="flex flex-wrap items-center gap-3 md:gap-4 md:flex-nowrap">
          <a
            href="https://github.com/syahreza-satria"
            className="flex items-center gap-2.5 px-4 py-2.5 font-medium text-sm sm:text-base text-neutral-300 transition-all duration-300 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:bg-[#74d4ff]/10 hover:text-[#74d4ff] hover:border-[#74d4ff]/30 active:scale-95"
          >
            <GithubIcon size={18} />
            Github
          </a>
          <a
            href="https://linkedin.com/in/syahreza-satria-alfath"
            className="flex items-center gap-2.5 px-4 py-2.5 font-medium text-sm sm:text-base text-neutral-300 transition-all duration-300 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:bg-[#74d4ff]/10 hover:text-[#74d4ff] hover:border-[#74d4ff]/30 active:scale-95"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
          <a
            href="https://instagram.com/syahreza_satria"
            className="flex items-center gap-2.5 px-4 py-2.5 font-medium text-sm sm:text-base text-neutral-300 transition-all duration-300 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:bg-[#74d4ff]/10 hover:text-[#74d4ff] hover:border-[#74d4ff]/30 active:scale-95"
          >
            <InstagramIcon size={18} />
            Instagram
          </a>
          <a
            href="https://threads.com/syahreza_satria"
            className="flex items-center gap-2.5 px-4 py-2.5 font-medium text-sm sm:text-base text-neutral-300 transition-all duration-300 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:bg-[#74d4ff]/10 hover:text-[#74d4ff] hover:border-[#74d4ff]/30 active:scale-95"
          >
            <FaThreads size={18} />
            Threads
          </a>
          <a
            href="https://dribbble.com/SyahrezaSatria"
            className="flex items-center gap-2.5 px-4 py-2.5 font-medium text-sm sm:text-base text-neutral-300 transition-all duration-300 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:bg-[#74d4ff]/10 hover:text-[#74d4ff] hover:border-[#74d4ff]/30 active:scale-95"
          >
            <FaDribbble size={18} />
            Dribbble
          </a>
        </div>
      </div>

      <hr className="border-neutral-800" />

      {/* Contact Form Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold tracking-tight text-neutral-100">Or send me a message</h3>
        <form method="POST" className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                // Form Input Styling Modern Dark Mode
                className="w-full px-4 py-3.5 text-neutral-200 bg-neutral-900/80 border border-neutral-800 rounded-xl focus:outline-none focus:border-[#74d4ff]/50 focus:ring-1 focus:ring-[#74d4ff]/50 placeholder:text-neutral-600 transition-all duration-300"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-3.5 text-neutral-200 bg-neutral-900/80 border border-neutral-800 rounded-xl focus:outline-none focus:border-[#74d4ff]/50 focus:ring-1 focus:ring-[#74d4ff]/50 placeholder:text-neutral-600 transition-all duration-300"
                placeholder="example@gmail.com"
                required
              />
            </div>
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-3.5 text-neutral-200 bg-neutral-900/80 border border-neutral-800 rounded-xl focus:outline-none focus:border-[#74d4ff]/50 focus:ring-1 focus:ring-[#74d4ff]/50 placeholder:text-neutral-600 transition-all duration-300 resize-y"
              placeholder="I'd like to discuss..."
              rows={5}
              required
            />
          </div>

          <button
            className="w-full mt-2 px-5 py-4 font-bold text-neutral-950 transition-all duration-300 bg-[#74d4ff] rounded-xl hover:bg-[#5bc0eb] hover:shadow-[0_0_20px_rgba(116,212,255,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111] focus:ring-[#74d4ff] active:scale-[0.98]"
            type="submit"
          >
            Submit Message
          </button>
        </form>
      </div>
    </main>
  );
}
