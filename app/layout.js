import {Fira_Sans, Oswald} from "next/font/google";
import "./globals.css";

import {Hedaer} from "@/components/sections/Header/Header";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-firaSans",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Ecosolution",
  description:
    "Ecosolution's ultimate goal is to create a sustainable future through innovative environmental technologies. We specialize in developing and implementing environmental improvement and resource management solutions for a greener world.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className={`${firaSans.variable} ${oswald.variable}`}>
      <body>
        <Hedaer />
        {children}
      </body>
    </html>
  );
}
