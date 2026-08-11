type Props = {
  id: string
  title: string
  description: string
  tech: string[]
  image?: string
  link?: string
}

export default function ProjectCard({ title, description, tech, image, link }: Props) {
  return (
    <article className="group rounded-xl overflow-hidden border border-slate-200 hover:border-accent/50 transition-all duration-300 hover:shadow-xl bg-white">
      {image && (
        <div className="relative h-48 overflow-hidden bg-slate-200">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-accent transition">{title}</h3>
        <p className="mt-3 text-slate-600 leading-relaxed">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
              {t}
            </span>
          ))}
        </div>
        {link && (
          <a href={link} className="mt-4 text-accent font-semibold hover:gap-2 flex items-center group/link">
            View project
            <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
          </a>
        )}
      </div>
    </article>
  )
}
