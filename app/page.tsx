export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight">
            Swathi Muthyala
          </h1>
          
          {/* Title */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Senior Data Engineering & Analytics Leader | AI/ML Practitioner
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            21 years building data platforms that empower teams to make smarter 
            decisions and drive innovation at market speed. Currently exploring 
            AI/ML to transform how organizations leverage their data.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a 
              href="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold 
                       hover:bg-blue-700 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="/blog"
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 
                       rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Read Blog
            </a>
            <a 
              href="/resume"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold 
                       hover:bg-gray-900 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-blue-600">21</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-blue-600">$15M</p>
            <p className="text-gray-600">Cost Savings (Gen AI COE)</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-blue-600">15+</p>
            <p className="text-gray-600">Mentees (8 Promoted)</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-blue-600">0→1</p>
            <p className="text-gray-600">Built Data Practices</p>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Core Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Python', 'SQL', 'Snowflake', 'Power BI', 'Claude AI', 'AWS', 
            'Azure', 'D365 F&O', 'Databricks', 'Informatica', 'LangChain', 'DAX'].map((skill) => (
            <div 
              key={skill}
              className="px-4 py-3 bg-white rounded-lg border-2 border-gray-200 
                       text-center font-semibold text-gray-700 hover:border-blue-600 
                       hover:text-blue-600 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 
                        hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full 
                             text-sm font-semibold">
                🤖 AI/ML
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              RAG System for Pharmaceutical Documents
            </h3>
            <p className="text-gray-600 mb-4">
              Built Q&A system for GxP compliance documents using LangChain, 
              Pinecone, and Claude API. Reduces document search time from hours to seconds.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                LangChain
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                Claude API
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                Pinecone
              </span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 
                        hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full 
                             text-sm font-semibold">
                📊 Analytics
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Power BI Supply Chain Dashboard
            </h3>
            <p className="text-gray-600 mb-4">
              End-to-end supply chain visibility connecting D365 F&O via OData. 
              Real-time inventory tracking, OTIF monitoring, and 3PL reconciliation.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                Power BI
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                DAX
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                D365 F&O
              </span>
            </div>
          </div>

        </div>
        <div className="text-center mt-8">
          <a 
            href="/projects"
            className="text-blue-600 font-semibold hover:text-blue-700 text-lg"
          >
            View All Projects →
          </a>
        </div>
      </section>

    </main>
  );
}