const educations = [
  {
    id: '1',
    degree: 'Bachelor of Technology',
    field: 'Electrical Engineering',
    school: 'Indian Institute of Technology (IIT) Kanpur',
    period: '2013 - 2017',
    grade: 'CGPA: 7/10',
    highlights: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Software Engineering']
  },
  {
    id: '2',
    degree: 'Master in International Relations',
    field: 'International Politics',
    school: 'Jawaharlal Nehru University, New Delhi',
    period: '2020 - 2022',
    grade: 'CGPA: 7.5/10',
    highlights: ['International Politics', 'Diplomacy', 'International Law', 'Global Security']
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Education</h2>
          <p className="text-xl text-slate-600">Academic achievements and qualifications</p>
        </div>

        <div className="grid gap-8">
          {educations.map((edu, idx) => (
            <div key={edu.id} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-lg text-accent font-semibold mt-1">{edu.field}</p>
                  <p className="text-slate-600 mt-1">{edu.school}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">{edu.period}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-slate-900 font-semibold">{edu.grade}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((highlight) => (
                  <span key={highlight} className="px-3 py-1 bg-slate-100 border border-slate-300 rounded-full text-sm text-slate-700 hover:bg-accent hover:text-white hover:border-accent transition-all">
                    {highlight}
                  </span>
                ))}
              </div>

              {idx === 0 && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">Key Coursework:</span> Competitive Programming, Machine Learning, Cloud Computing, Web Development, Database Systems
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
