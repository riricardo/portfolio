export default function Header({ profile }) {
  return (
    <div className="sticky top-0 z-40 border-b border-base-300 bg-base-100/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
        <a href="#" className="font-semibold tracking-tight">
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
  );
}
