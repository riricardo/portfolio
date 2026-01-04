import profileImg from "../assets/profile.png";

export default function Hero({ profile }) {
  return (
    <section className="pt-6">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body p-5 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="badge badge-outline">{profile.title}</div>
                <div className="badge badge-ghost">{profile.location}</div>
              </div>

              <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                {profile.name}
              </h1>

              <p className="mt-3 max-w-prose text-base leading-relaxed opacity-80">
                {profile.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <a className="btn btn-primary" href="#projects">
                  View projects
                </a>
                <a className="btn btn-outline" href="#contact">
                  Contact
                </a>
              </div>
            </div>

            <div className="flex justify-start lg:justify-end">
              <div className="avatar">
                <div className="w-48 rounded-2xl ring-1 ring-base-300 sm:w-56">
                  <img src={profileImg} alt={`${profile.name} portrait`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
