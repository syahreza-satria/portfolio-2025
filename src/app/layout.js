import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import BubbleMenu from "@/components/BubbleMenu";
import { bubbleMenuItems, donationLinks, profile, socialLinks } from "@/data";
import Footer from "@/components/ui/Footer";

// Gunakan nama variabel dengan huruf kecil untuk membedakannya
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const inter_tight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  title: "Syahreza Satria",
  description: "Freelancer tipis-tipis yang bakal ngerjain apapun yang dia kerjakan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter_tight.variable} antialiased`}>
        <BubbleMenu
          logo={<span style={{ fontWeight: 700 }}>Gogooo~</span>}
          items={bubbleMenuItems}
          menuAriaLabel="Toggle navigation"
          menuBg="#ffffff"
          menuContentColor="#111111"
          useFixedPosition={false}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
        {children}
        <Footer profile={profile} socialLinks={socialLinks} donationLinks={donationLinks} />
      </body>
    </html>
  );
}
