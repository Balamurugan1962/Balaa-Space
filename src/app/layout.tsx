import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geist_mono = Geist_Mono({
  variable: "--font-geist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Balaa's Space",
  description: "This is my space to learn, express and do things I love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist_mono.variable} antialiased`}>{children}</body>
    </html>
  );
}
