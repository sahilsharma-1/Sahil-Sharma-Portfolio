import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Sahil Sharma — Brand, Digital Innovation & Automation",
  description:
    "Portfolio of Sahil Sharma — global brand campaigns for Nestlé (podcast, recruiter toolkit, AI talent analytics), motion design across Dubai and Dublin, and end-to-end AI automation. Open to marketing, digital innovation and consulting roles.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] font-sans-body">
        {children}
      </body>
    </html>
  );
}
