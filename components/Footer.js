// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-blue-800">DAVISE Lab</h2>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} NIT Delhi. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-700 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-700 transition">About</Link>
          <Link href="/internship" className="hover:text-blue-700 transition">Internship</Link>
          <Link href="/research" className="hover:text-blue-700 transition">Research</Link>
          {/* <Link href="/project" className="hover:text-blue-700 transition">Project</Link> */}
          <Link href="/infrastructure" className="hover:text-blue-700 transition">Infrastructure</Link>
          <Link href="/contact" className="hover:text-blue-700 transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
