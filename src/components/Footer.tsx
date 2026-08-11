import SocialLinks from './SocialLinks'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">AK</div>
              <span className="text-white font-bold text-lg">Aakash Kumar</span>
            </div>
            <p className="text-sm">Building modern, scalable web applications with clean code and great UX.</p>
            <div className="mt-6">
              <p className="text-sm text-slate-300 mb-3 font-medium">Follow me</p>
              <SocialLinks />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#skills" className="hover:text-accent transition">Skills</a></li>
              <li><a href="#experience" className="hover:text-accent transition">Experience</a></li>
              <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/aksKrIITK" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition flex items-center gap-2">
                🐱 <span>GitHub</span>
              </a></li>
              <li><a href="https://www.linkedin.com/in/aakashkumariitk/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition flex items-center gap-2">
                💼 <span>LinkedIn</span>
              </a></li>
              <li><a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition flex items-center gap-2">
                📝 <span>Medium</span>
              </a></li>
              <li><a href="mailto:akskr.iitk@gmail.com" className="hover:text-accent transition flex items-center gap-2">
                ✉️ <span>Email</span>
              </a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4">Stay Updated</h4>
            <p className="text-sm mb-3">Get notified about new projects and posts.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-slate-800 rounded text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-4 py-2 bg-accent text-white rounded font-medium hover:shadow-lg transition text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {currentYear} Aakash Kumar. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition">Terms of Service</a>
              <a href="#" className="hover:text-accent transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
