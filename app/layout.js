// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Optional placeholder

export const metadata = {
  title: "DAVISE Lab - NIT Delhi",
  description: "Official website of DAVISE Lab at NIT Delhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
