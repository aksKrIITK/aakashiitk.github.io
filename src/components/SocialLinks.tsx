export default function SocialLinks({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const sizeClasses = {
    small: 'w-10 h-10 text-lg',
    default: 'w-12 h-12 text-xl',
    large: 'w-16 h-16 text-3xl'
  }

  const socials = [
    {
      name: 'GitHub',
      icon: '🐱',
      url: 'https://github.com/aksKrIITK',
      bgColor: 'hover:bg-[#333]'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/aakashkumariitk/',
      bgColor: 'hover:bg-[#0A66C2]'
    },
    {
      name: 'Medium',
      icon: '📝',
      url: 'https://medium.com',
      bgColor: 'hover:bg-[#000]'
    },
    {
      name: 'Email',
      icon: '✉️',
      url: 'mailto:akskr.iitk@gmail.com',
      bgColor: 'hover:bg-accent'
    }
  ]

  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target={social.name !== 'Email' ? '_blank' : undefined}
          rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
          title={social.name}
          className={`${sizeClasses[size]} rounded-xl bg-slate-100 ${social.bgColor} text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-xl`}
        >
          <span>{social.icon}</span>
        </a>
      ))}
    </div>
  )
}
