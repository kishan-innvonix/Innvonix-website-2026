import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import "../styles/globals.scss";
import Header from "./main/header";
import Footer from "./main/footer";

const poppinsSans = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const manropeSans = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innvonix Tech Solutions",
  description:
    "We are a one stop platform which provides end to end software solutions from Designing to Development to QA. Our Digital Marketing team ensures your platform gets the right launch in the market. Our company is trusted by clients from over 25 countries worldwide. Satisfied with our web and mobile app development services, they come back to us with new ideas to grow their business. Next, our deep niche analysis and extensive technical skills allow us to create feature-rich products with amazing designs. Finally, our engagement models will enable us to develop software at reasonable prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppinsSans.variable} ${manropeSans.variable} h-full antialiased`}
    >
      <body className="h-screen">
        <Header />
        <main className="h-11/12">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
