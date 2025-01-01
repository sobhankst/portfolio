import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Sobhan | Front-End Developer",
  description: "Portfolio Website made with Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-darkBlack leading-loose text-white antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
