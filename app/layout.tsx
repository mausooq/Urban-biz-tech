import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Geist } from 'next/font/google';
import "./globals.css";

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={geist.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
