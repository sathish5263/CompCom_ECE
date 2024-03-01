import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dmsans",
});
export const metadata = {
  title: "COMPCOM 2024 - Where innovation meets inspiration!",
  description:
    "COMPCOM is a distinguished National-level technical symposium hosted by the esteemed Government College of Engineering, Salem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="NvMuCfM5zDlSEVp-SzDJugK4M93cxifGFvAPa5Ek6Qg" />
      <body className={`${inter.variable} ${dmsans.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
