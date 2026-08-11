import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Welcome to my portfolio 👋</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Build Amazing Things with
            <span className="bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent"> Modern Tech</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
            Backend & Distributed Systems Engineer | Java, Spring Boot, React, AWS | Built Scalable B2B & GenAI Platforms | IIT Kanpur
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <a className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:-translate-y-1" href="#projects">
              View my work
            </a>
            <a className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-accent hover:text-accent transition" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="flex gap-6 pt-6 border-t border-slate-200">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-slate-900">50+</div>
              <div className="text-sm text-slate-600">Projects Built</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-slate-900">30+</div>
              <div className="text-sm text-slate-600">Happy Clients</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-slate-900">5+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-4 font-medium">Connect with me</p>
            <SocialLinks size="default" />
          </div>
        </div>

        {/* Right image */}
        <div className="relative hidden md:block">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-600/20" />
            <img alt="Aakash Kumar - Software Developer" src="/aks2.jpeg" className="w-full h-full object-cover" />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-slate-200 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-2xl">🚀</div>
              <div>
                <div className="font-semibold text-slate-900">Fast & Reliable</div>
                <div className="text-sm text-slate-600">Production-ready code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
