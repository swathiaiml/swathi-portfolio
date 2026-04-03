export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About Me
        </h1>

        {/* Professional Summary */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            I'm a Senior Data Engineering, Analytics and AIML Leader with 21 years of 
            experience building AI powered data platforms that transform how organizations 
            leverage their data.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            My journey in data engineering started over two decades ago, and I've 
            had the privilege of building data practices from the ground up at 
            companies like ServiceNow, leading $50M+ transformation programs at 
            PwC, and currently implementing pharmaceutical data infrastructure at 
            Cronus Pharma LLC.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            What drives me is the intersection of data engineering and AI/ML. I 
            founded a Generative AI Center of Excellence that generated $**M in 
            cost savings, and I use Claude API and CahtGPT in production daily for everything 
            from document intelligence to automated pipeline development.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Beyond technical execution, I'm passionate about mentoring. I've mentored 
            data professionals in data Engineering, Analytics and GenAI to achecieve their project goals and senior roles. Building 
            teams and developing talent is as important to me as building great data systems.
          </p>

          {/* Career Timeline */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
            Career Journey
          </h2>

          <div className="space-y-6">
            
            {/* Cronus Pharma */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Cronus Pharma LLC
              </h3>
              <p className="text-gray-600 mb-2">
                Data Management Specialist, Global IT | 2025 - Present
              </p>
              <p className="text-gray-700">
                Leading data engineering, Power BI analytics, DSCSA, EDI and D365 F&O integrations. 
                Built supply chain dashboards, implemented OData connections, and 
                developed AI-powered document intelligence systems.
              </p>
            </div>

            {/* PwC */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">
                PwC
              </h3>
              <p className="text-gray-600 mb-2">
                Senior Manager, Data & Analytics | 2022 - 2025
              </p>
              <p className="text-gray-700">
                Led $50M+ data transformation programs for Fortune 100 clients. 
                Founded Generative AI Center of Excellence generating $**M in cost 
                savings. Managed 100-member teams across cloud data platforms, 
                analytics, and AI/ML initiatives.
              </p>
            </div>

            {/* ServiceNow */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">
                ServiceNow
              </h3>
              <p className="text-gray-600 mb-2">
                Manager - Data Engineering Leader | 2016 - 2022
              </p>
              <p className="text-gray-700">
                Established data quality and data governance frameworks for master data managment and served data requirements of Sales, 
                Marketing, Finance, and Customer Success teams.
              </p>
            </div>

          </div>

          {/* Expertise */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
            Core Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Data Engineering
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• ETL/ELT Pipeline Development</li>
                <li>• Cloud Data Platforms (Snowflake, Databricks)</li>
                <li>• Data Architecture & Modeling</li>
                <li>• Informatica, Azure Data Factory</li>
                <li>• Real-time Data Integration</li>
				<li>• Data Governance amd Quality</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Analytics & BI
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Power BI (Expert - DAX, Power Query M)</li>
                <li>• Semantic model Development</li>
                <li>• Data Visualization</li>
                <li>• Self-Service Analytics</li>
                <li>• BI Strategy & Governance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                AI/ML (Current Focus)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Claude API (Production Use)</li>
                <li>• LangChain & RAG Systems</li>
                <li>• Document Intelligence</li>
                <li>• LLM Integration</li>
                <li>• AI-Powered Automation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Leadership
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Team Building (0→20 members)</li>
                <li>• Mentoring (15+ mentees)</li>
                <li>• Program Management ($50M+)</li>
                <li>• Stakeholder Management</li>
                <li>• Practice Development</li>
              </ul>
            </div>

          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Let's Connect
            </h3>
            <p className="text-gray-700 mb-4">
              I'm always interested in discussing data engineering, AI/ML, Analytics and 
              opportunities to build impactful data solutions.
            </p>
            <a 
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg 
                       font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}