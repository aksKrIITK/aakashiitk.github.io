const experiences = [
  {
    id: '1',
    role: 'Backend Developer',
    company: 'WorldRef Technologies Pvt. Ltd.',
    period: 'June 2024 - August 2024',
    description: 'Owned and maintained RESTful APIs using Java Spring boot & RDBMS. Improved system performance by optimizing database queries and implementing notification system (mail and document automatic generation). These features directly enhanced and scaled the B2B platform revenue and also enhance the ease of doing business for users.',
    achievements: ['Led 3 major product launches', '95% test coverage', 'Mentored 5+ developers']
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'WorldRef Technologies Pvt. Ltd.',
    period: 'Sept 2024 - present',
    description: 'Owned the end-to-end design and implementation of backend APIs for multiple business-critical workflows, including search, notifications, PDF generation, and order tracking, built on Java Spring Boot–based microservices. Led the modernization and optimization of legacy backend services by identifying performance bottlenecks, refactoring critical code paths, and improving data access layers, achieving approximately a 30% reduction in response latency. Designed and evolved SQL schemas and query strategies to reliably support increasing data volumes and high-concurrency workloads. Delivered full-stack features by closely coordinating backend APIs with React-based user interfaces, ensuring consistency in system behavior and user experience. Collaborated cross-functionally with product managers and designers to define feature scope, balance engineering trade-offs, and deliver scalable, business-aligned solutions.',
    achievements: ['Improved backend performance by ~30% through code refactoring and database query optimization',
  'Redesigned and modernized legacy service architecture to improve scalability and maintainability',
  'Delivered business-critical features with zero downtime using backward-compatible APIs and safe deployment strategies'
]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Professional Journey</h2>
          <p className="text-xl text-slate-600">2+ years of experience building scalable, secure & intelligent systems</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-blue-600" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className={`flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 w-1/2">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <p className="text-accent font-semibold">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">{exp.period}</span>
                    </div>
                    <p className="text-slate-600 mt-3">{exp.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.achievements.map((achievement) => (
                        <span key={achievement} className="text-xs px-3 py-1 bg-white border border-slate-300 rounded-full text-slate-700">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
