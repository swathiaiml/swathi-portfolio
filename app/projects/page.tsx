export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "RAG System for Pharmaceutical Documents",
      category: "🤖 AI/ML",
      description: "Built Q&A system for GxP compliance documents using LangChain, Pinecone, and Claude API. Reduces document search time from hours to seconds.",
      impact: "Automated compliance document retrieval",
      technologies: ["LangChain", "Claude API", "Pinecone", "Python", "Streamlit"],
      github: "#", // Add your GitHub link later
      demo: "#",   // Add your demo link later
      status: "In Development"
    },
    {
      id: 2,
      title: "Power BI Supply Chain Dashboard",
      category: "📊 Analytics",
      description: "End-to-end supply chain visibility connecting D365 Finance & Operations via OData. Real-time inventory tracking, OTIF monitoring, and 3PL reconciliation across multiple warehouses.",
      impact: "Real-time visibility across 3 warehouses",
      technologies: ["Power BI", "DAX", "Power Query M", "D365 F&O", "OData"],
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      id: 3,
      title: "LLM-Powered Data Quality Framework",
      category: "🤖 AI/ML",
      description: "Automated data quality checks using Claude API to detect anomalies, validate schemas, and suggest fixes. Integrated with existing ETL pipelines for real-time validation.",
      impact: "70% reduction in manual validation time",
      technologies: ["Python", "Claude API", "Pandas", "Great Expectations"],
      github: "#",
      demo: "#",
      status: "In Development"
    },
    {
      id: 4,
      title: "Pharmaceutical Pricing PDF Extractor",
      category: "⚙️ Data Engineering",
      description: "Automated extraction of pharmaceutical pricing data from complex PDF contracts. Handles variable table formats, NDC patterns, and multi-page agreements.",
      impact: "60% accuracy on complex pricing tables",
      technologies: ["Python", "PyMuPDF", "Regex", "Pandas", "OpenCV"],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "Gen AI Center of Excellence",
      category: "🏗️ Practice Building",
      description: "Founded and scaled enterprise Gen AI practice from zero. Built frameworks for safe AI adoption, developed use cases across departments, and established governance policies.",
      impact: "$15M in cost savings across organization",
      technologies: ["Claude API", "LangChain", "Azure OpenAI", "Governance Frameworks"],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      id: 6,
      title: "D365 F&O OData Integration Framework",
      category: "⚙️ Data Engineering",
      description: "Reusable framework for connecting Power BI to D365 Finance & Operations via OData. Includes error handling, parameter patterns, and performance optimization techniques.",
      impact: "Reduced integration time from weeks to days",
      technologies: ["Power Query M", "OData", "D365 F&O", "Power BI"],
      github: "#",
      demo: "#",
      status: "Production"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of data engineering, analytics, and AI/ML projects 
            I've built to solve real business problems.
          </p>
        </div>

        {/* Filter Categories (Optional - add later) */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
            All Projects
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100">
            🤖 AI/ML
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100">
            📊 Analytics
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100">
            ⚙️ Data Engineering
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100">
            🏗️ Architecture
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 
                       hover:shadow-xl transition-shadow"
            >
              {/* Category & Status */}
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full 
                               text-sm font-semibold">
                  {project.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${project.status === 'Production' ? 'bg-green-100 text-green-600' : 
                    project.status === 'Completed' ? 'bg-gray-100 text-gray-600' :
                    'bg-yellow-100 text-yellow-600'}`}>
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Impact */}
              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm font-semibold text-blue-900">
                  💡 Impact: {project.impact}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex gap-2 flex-wrap mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a 
                  href={project.demo}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg 
                           font-semibold text-center hover:bg-blue-700 transition-colors
                           text-sm"
                >
                  View Demo
                </a>
                <a 
                  href={project.github}
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg 
                           font-semibold text-center hover:bg-gray-900 transition-colors
                           text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Interested in Collaborating?
          </h2>
          <p className="text-gray-600 mb-6">
            I'm always excited to discuss data engineering challenges and 
            AI/ML opportunities.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg 
                     font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </main>
  );
}