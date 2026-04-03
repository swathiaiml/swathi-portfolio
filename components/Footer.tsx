export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Swathi Muthyala</h3>
            <p className="text-gray-400">
              Senior Data Engineering & Analytics Leader building AI-powered 
              data platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:******@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  📧 Email
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/swathi-muthyala-dataspecialist/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  💼 LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/swathiaiml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  🐙 GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Swathi Muthyala. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}