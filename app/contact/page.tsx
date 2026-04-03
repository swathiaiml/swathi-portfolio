export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            Let's discuss data engineering, AI/ML, or potential opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-6">
            
            {/* Email */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <a 
                    href="mailto:sw.muthyala@gmail.com"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    sw.muthyala@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">💼</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    LinkedIn
                  </h3>
                  <a 
                    href="https://www.linkedin.com/in/swathimuthyala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🐙</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    GitHub
                  </h3>
                  <a 
                    href="https://github.com/swathimuthyala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View My Code
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600">
                    East Brunswick, NJ<br />
                    Open to: Remote, NYC, or NJ
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>
            
            <form className="space-y-6">
              
              {/* Name */}
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-600 focus:border-transparent
                           outline-none transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-600 focus:border-transparent
                           outline-none transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label 
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-600 focus:border-transparent
                           outline-none transition-all"
                  placeholder="What's this about?"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-600 focus:border-transparent
                           outline-none transition-all resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg 
                         font-semibold hover:bg-blue-700 transition-colors
                         focus:ring-4 focus:ring-blue-300"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-500 text-center">
                I'll respond within 24-48 hours
              </p>

            </form>
          </div>

        </div>

      </div>
    </main>
  );
}