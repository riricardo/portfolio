export default function Header({ profile }) {
  return (
    <div className="sticky top-0 z-40 bg-base-100/80 backdrop-blur">
      <div className="border-b border-base-300">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
            {profile.name}
          </a>

          <nav className="flex items-center gap-2">
            <a className="btn btn-ghost btn-sm" href="#projects">
              Projects
            </a>
            <a className="btn btn-ghost btn-sm" href="#skills">
              Skills
            </a>
            <a className="btn btn-ghost btn-sm" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* subtle color accent line */}
      <div className="h-0.5 w-full bg-linear-to-r from-primary/70 via-secondary/40 to-accent/60" />
    </div>
  );
}
