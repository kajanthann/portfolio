import { Outfit } from "next/font/google"; // only import what you need
import "./globals.css";

// load fonts at module scope
const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovoFont = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - kajanthan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfitFont.className} ${ovoFont.className} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
