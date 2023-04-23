import "./globals.css";
import Image from "next/image";
import { Montserrat, Roboto } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata = {
  title: "second partner",
  description: "Website for second partner fast foods",
};

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="mt-28 mb-64">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
