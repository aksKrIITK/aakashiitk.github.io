export default function Nav() {
  return (
    <header className="sticky top-0 z-50  bg-white/80 border-b border-slate-200/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">AK</div>
          <div className="text-lg font-bold">Aakash Kumar</div>
        </div>
        <nav className="hidden md:flex space-x-8 text-slate-600">
          <a href="#skills" className="hover:text-accent transition font-medium">
            Skills
          </a>
          <a href="#experience" className="hover:text-accent transition font-medium">
            Experience
          </a>
          <a href="#education" className="hover:text-accent transition font-medium">
            Education
          </a>
          <a href="#projects" className="hover:text-accent transition font-medium">
            Projects
          </a>
          <a href="#testimonials" className="hover:text-accent transition font-medium">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-accent transition font-medium">
            Contact
          </a>
        </nav>
        <a className="hidden md:block px-6 py-2 bg-accent text-white rounded-lg font-medium hover:shadow-lg transition" href="#contact">
          Connect To Solve Your Problem
        </a>
      </div>
    </header>
  )
}
