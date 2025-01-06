import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audify AI",
  description: "An AI Podcast Platform",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
