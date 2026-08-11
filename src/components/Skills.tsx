const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite'] },
  { category: 'Backend', items: ['Java', 'Spring Boot', 'FastAPI', 'Microservices', 'JPA/Hibernate'] },
  { category: 'Cloud & DevOps', items: ['Git', 'Docker', 'CI/CD', 'AWS', 'Linux'] },
  { category: 'AI/GenAI/Agentic AI', items: ['FastAPI', 'Python', 'VectorDB', 'RAG', 'Langgraph'] },
  { category: 'Soft Skills', items: ['Communication', 'Problem Solving', 'Leadership', 'Mentoring', 'Agile'] }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-600">Specialized in modern web development and scalable architectures</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-accent/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-slate-600 flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="mt-20 bg-white rounded-xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Proficiency</h3>
          <div className="space-y-6">
            {[
              { skill: 'React & TypeScript', level: 95 },
              { skill: 'Node.js Backend', level: 85 },
              { skill: 'Tailwind CSS', level: 90 },
              { skill: 'Database Design', level: 80 }
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-900">{item.skill}</span>
                  <span className="text-accent font-bold">{item.level}%</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
