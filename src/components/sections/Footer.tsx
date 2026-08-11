export function Footer() {
  return (
    <footer className="bg-bg2 border-t border-borderW pt-12 px-7 pb-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-5">
          <div className="flex items-center gap-2.5">
            <div className="w-[34px] h-[34px] rounded-lg bg-gradient-to-br from-accent to-violet flex items-center justify-center font-sora font-extrabold text-bg text-[13px]">
              AK
            </div>
            <span className="font-sora font-bold text-textLight text-base">Aakash Kumar</span>
          </div>

          <div className="flex gap-7 flex-wrap">
            {['Skills', 'Experience', 'Projects', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="font-poppins text-[13px] text-dim no-underline hover:text-accent transition-colors">
                {l}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {[
              ['GitHub', 'https://github.com/aksKrIITK'],
              ['LinkedIn', 'https://www.linkedin.com/in/aakashkumariitk/'],
              ['Email', 'mailto:akskr.iitk@gmail.com']
            ].map(([l, u]) => (
              <a key={l} href={u} target="_blank" rel="noopener noreferrer"
                className="font-poppins text-[13px] text-muted no-underline px-3.5 py-1.5 rounded-md border border-borderW hover:border-borderC hover:text-accent transition-all">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-borderW mt-8 pt-6 flex justify-between flex-wrap gap-3">
          <p className="font-poppins text-[13px] text-dim m-0">
            © {new Date().getFullYear()} Aakash Kumar. Built with React & TypeScript.
          </p>
          <p className="font-mono text-[11px] text-dim m-0">
            AI/Fullstack Engineer · IIT Kanpur · India
          </p>
        </div>
      </div>
    </footer>
  );
}
