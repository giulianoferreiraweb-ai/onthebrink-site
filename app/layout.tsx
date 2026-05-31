import "./globals.css";
import { Inter, Modak } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const modak = Modak({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-modak",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}