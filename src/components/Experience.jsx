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
    <section className="mt-10">
      <h2 className="text-xl font-semibold">Experience</h2>

      <div className="mt-3 grid gap-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="card bg-base-100 shadow-sm ring-1 ring-base-300"
          >
            <div className="card-body p-5">
              <div className="font-semibold">{it.title}</div>
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
