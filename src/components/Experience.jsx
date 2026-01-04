import SectionTitle from "./SectionTitle";

export default function Experience() {
  const items = [
    {
      title: "Portfolio-driven engineering",
      detail:
        "Building production-style apps end-to-end (UI, auth, APIs, data) with an emphasis on clean structure and shipping.",
    },
    {
      title: "Engineering background mindset",
      detail:
        "Strong documentation habits, problem-solving, and reliability — applied directly to modern software development.",
    },
  ];

  return (
    <section className="mt-10" id="experience">
      <SectionTitle>Experience</SectionTitle>

      <div className="mt-3 grid gap-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="card bg-base-100/80 shadow-sm ring-1 ring-base-300 backdrop-blur"
          >
            <div className="card-body p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="font-semibold">{it.title}</div>
              </div>
              <p className="mt-2 text-sm leading-relaxed opacity-80">
                {it.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
