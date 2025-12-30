import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import "./globals.css";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable}>
      {/* Entire page is vertical */}
      <body className="flex flex-col h-screen font-sans">

        {/* HEADER ON TOP (FULL WIDTH) */}
        <Header />

        {/* BELOW HEADER → SIDEBAR + CONTENT */}
        <div className="flex flex-1">

          {/* Sidebar on the left */}
          <Sidebar />

          {/* Page content */}
          <main className="flex-1 bg-white  h-screen p-0 overflow-y-auto">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
