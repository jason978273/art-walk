import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Public Art Walk West Vancouver",
  description: "Explore curated walking routes through West Vancouver's" +
   "public art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <main className="min-h-screen pb-32 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
