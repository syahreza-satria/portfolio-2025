import "./globals.css";
import BubbleMenu from "@/components/BubbleMenu";
import { bubbleMenuItems, donationLinks, profile, socialLinks } from "@/data";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Syahreza Satria",
  description: "Freelancer tipis-tipis yang bakal ngerjain apapun yang dia kerjakan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-black text-white`} suppressHydrationWarning>
        <BubbleMenu
          logo={<span style={{ fontWeight: 700 }}>REZA</span>}
          items={bubbleMenuItems}
          menuAriaLabel="Toggle navigation"
          menuBg="#262626"
          menuContentColor="#fff"
          useFixedPosition={false}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
          className={`text-white`}
        />
        {children}
        <Footer profile={profile} socialLinks={socialLinks} donationLinks={donationLinks} />
      </body>
    </html>
  );
}
