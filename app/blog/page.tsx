export default function Blog() {
  // We'll add real blog posts later - this is placeholder
  const blogPosts = [
    {
      id: 1,
      title: "Building a RAG System: Lessons from Production",
      date: "April 2, 2026",
      excerpt: "What I learned building a production RAG system for pharmaceutical documents using LangChain and Claude API.",
      readTime: "8 min read",
      tags: ["AI/ML", "LangChain", "Claude API"],
      slug: "building-rag-system"
    },
    {
      id: 2,
      title: "Power BI Performance: 5 Tips That Cut Load Time by 80%",
      date: "March 28, 2026",
      excerpt: "Practical Power BI optimization techniques I use to make dashboards lightning fast.",
      readTime: "6 min read",
      tags: ["Power BI", "Performance", "DAX"],
      slug: "power-bi-performance"
    },
    {
      id: 3,
      title: "My AI/ML Learning Journey: Fast.ai Course Review",
      date: "March 25, 2026",
      excerpt: "Why Fast.ai is the best ML course for experienced engineers who want to build real projects quickly.",
      readTime: "10 min read",
      tags: ["AI/ML", "Learning", "Fast.ai"],
      slug: "fastai-course-review"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Technical articles on data engineering, AI/ML, and lessons learned 
            building data platforms.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded-lg">
          <p className="text-blue-900 font-semibold">
            📝 Blog posts coming soon! I'm currently writing my first articles.
          </p>
          <p className="text-blue-800 mt-2">
            Topics: RAG systems, Power BI optimization, D365 integrations, and my AI/ML learning journey.
          </p>
        </div>

        {/* Blog Posts Preview (placeholder) */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white border border-gray-200 rounded-xl p-6 
                       hover:shadow-lg transition-shadow"
            >
              {/* Date & Read Time */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600">
                <a href={`/blog/${post.slug}`}>
                  {post.title}
                </a>
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-4">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More (disabled for now) */}
              <a 
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-700 
                         inline-flex items-center"
              >
                Coming soon →
              </a>
            </article>
          ))}
        </div>

        {/* Newsletter Signup (optional - add later) */}
        <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Get Notified
          </h3>
          <p className="text-gray-600 mb-6">
            Want to know when I publish new articles? Connect with me on LinkedIn!
          </p>
          <a 
            href="https://www.linkedin.com/in/swathimuthyala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg 
                     font-semibold hover:bg-blue-700 transition-colors"
          >
            Follow on LinkedIn
          </a>
        </div>

      </div>
    </main>
  );
}