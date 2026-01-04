export default function Skills() {
  const groups = [
    {
      title: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Vite",
        "Responsive UI",
        "UX fundamentals",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Firebase Functions",
        ".NET / C#",
        "REST APIs",
        "Auth",
      ],
    },
    { title: "Mobile", items: ["Flutter", "Dart"] },
    {
      title: "DevOps",
      items: ["GitHub Actions", "CI/CD", "Deployments", "Env management"],
    },
  ];

  return (
    <section id="skills" className="mt-10">
      <h2 className="text-xl font-semibold">Skills</h2>

      <div className="mt-3 grid gap-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="card bg-base-100 shadow-sm ring-1 ring-base-300"
          >
            <div className="card-body p-5">
              <div className="font-semibold">{g.title}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((x) => (
                  <span key={x} className="badge badge-outline">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
