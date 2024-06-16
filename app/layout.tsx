import "@/app/globals.css";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";

import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog HomePage",
  description: "Homepage of a blog page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${inter.className} pt-14`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
