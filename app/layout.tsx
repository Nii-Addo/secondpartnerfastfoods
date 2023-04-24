import "./globals.css";
import { Poppins, Montserrat } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "second partner",
  description: "Website for second partner fast foods",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="mt-28 mb-64">{children}</main>
        <div className={montserrat.className}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
