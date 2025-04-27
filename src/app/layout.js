import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "WorkNest",
  description: "A team collaboration tool for remote teams",
  icons: {
    icon: "/images/WorkNest.png",
    shortcut: "/images/WorkNest.png",
    apple: "/images/WorkNest.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
