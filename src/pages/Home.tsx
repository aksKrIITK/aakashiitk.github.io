import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import ProjectCard from '../components/ProjectCard'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'

const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform built with React and Node.js. Features real-time inventory, Stripe payments, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    image: '/project-1.jpg',
    link: '#'
  },
  {
    id: '2',
    title: 'SaaS Analytics Dashboard',
    description: 'A comprehensive analytics dashboard with real-time data visualization. Built with React, TypeScript, and Chart.js for 10k+ users.',
    tech: ['React', 'TypeScript', 'Chart.js', 'AWS'],
    image: '/project-2.jpg',
    link: '#'
  },
  {
    id: '3',
    title: 'Mobile App Backend',
    description: 'RESTful API backend for a mobile fitness app with authentication, real-time notifications, and database optimization.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    image: '/project-3.jpg',
    link: '#'
  },
  {
    id: '4',
    title: 'Design System',
    description: 'A comprehensive design system and component library used across multiple projects. Includes 50+ components with Storybook.',
    tech: ['React', 'Tailwind', 'Storybook', 'TypeScript'],
    image: '/project-4.jpg',
    link: '#'
  },
  {
    id: '5',
    title: 'Real-time Chat App',
    description: 'Real-time chat application with WebSockets, message history, and user presence. Scalable architecture for 1k+ concurrent users.',
    tech: ['React', 'Socket.io', 'Node.js', 'Redis'],
    image: '/project-5.jpg',
    link: '#'
  },
  {
    id: '6',
    title: 'Static Site Generator',
    description: 'A high-performance static site generator with Markdown support, incremental builds, and automatic deployments.',
    tech: ['TypeScript', 'Vite', 'MDX', 'GitHub Actions'],
    image: '/project-6.jpg',
    link: '#'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Education />

      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600">A selection of work I'm proud of</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
            <p className="text-xl text-slate-600">Have a project in mind? Let's discuss how I can help.</p>
          </div>

          <form className="bg-white rounded-xl p-8 md:p-12 border border-slate-200 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-900 mb-2">Project Type</label>
              <select title="Project Type" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                <option>Select a project type</option>
                <option>Website</option>
                <option>Web App</option>
                <option>Mobile App</option>
                <option>Consulting</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
              <textarea placeholder="Tell me about your project..." className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent h-32 resize-none" />
            </div>

            <button className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:-translate-y-1">
              Send Message
            </button>

            <p className="text-center text-sm text-slate-600 mt-4">Or reach out directly at <a href="mailto:akskr.iitk@gmail.com" className="text-accent font-semibold hover:underline">akskr.iitk@gmail.com</a></p>
          </form>

          {/* Social Links Section */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 font-medium mb-6">Connect with me on social media</p>
            <div className="flex justify-center">
              <SocialLinks size="large" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
