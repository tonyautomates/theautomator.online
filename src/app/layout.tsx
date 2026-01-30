import "./globals.css";
import { Montserrat } from "next/font/google";
import TransitionProvider from "./TransitionProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />

        <TransitionProvider>
          {children}
        </TransitionProvider>

        <Footer />
      </body>
    </html>
  );
}
