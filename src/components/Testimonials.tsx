const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager, TechCorp',
    text: 'Aakash delivered exceptional work on our React rewrite. His attention to code quality and mentorship elevated the entire team.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CEO, StartUp Co.',
    text: 'In 2 years, Aakash became our most trusted developer. The features he built directly contributed to our 10x growth.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'CTO, Digital Agency',
    text: 'A rare combination of technical excellence and great communication. Aakash makes complex problems simple and maintainable.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Testimonials</h2>
          <p className="text-xl text-slate-600">What clients and colleagues say about working with me </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                />
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
