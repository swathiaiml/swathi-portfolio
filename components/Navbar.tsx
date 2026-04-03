import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            Swathi Muthyala
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button (we'll add mobile menu later) */}
          <button className="md:hidden text-gray-700">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}