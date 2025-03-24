import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex justify-center space-x-6">
        <Link href="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link href="/portfolio" className="hover:text-blue-400">
          Portfolio
        </Link>
        <Link href="/contact" className="hover:text-blue-400">
          Contact
        </Link>
      </div>
    </nav>
  );
}
