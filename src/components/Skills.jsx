import SectionTitle from "./SectionTitle";

export default function Skills() {
  const groups = [
    {
      title: "Frontend",
      tone: "primary",
      items: ["React", "JavaScript", "WebForms", "ASP.NET MVC"],
    },
    {
      title: "Backend",
      tone: "secondary",
      items: [
        "Node.js",
        "Firebase",
        ".NET / C#",
        "REST APIs",
        "Token Auth",
        "SQL",
      ],
    },
    {
      title: "Mobile",
      tone: "accent",
      items: ["Flutter", "Dart"],
    },
    {
      title: "Desktop",
      tone: "secondary",
      items: ["Delphi"],
    },
    {
      title: "DevOps",
      tone: "neutral",
      items: ["GitHub Actions", "Deploy"],
    },
  ];

  const toneBadge = (tone) => {
    if (tone === "primary")
      return "bg-primary/10 text-primary border-primary/20";
    if (tone === "secondary")
      return "bg-secondary/10 text-secondary border-secondary/20";
    if (tone === "accent") return "bg-accent/10 text-accent border-accent/20";
    return "bg-base-200 text-base-content border-base-300";
  };

  return (
    <section id="skills" className="mt-10">
      <SectionTitle>Skills</SectionTitle>

      <div className="mt-3 grid gap-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="card bg-base-100/80 shadow-sm ring-1 ring-base-300 backdrop-blur"
          >
            <div className="card-body p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="font-semibold">{g.title}</div>
                <div
                  className={`h-1 w-16 rounded-full ${
                    g.tone === "primary"
                      ? "bg-linear-to-r from-primary to-primary/20"
                      : g.tone === "secondary"
                      ? "bg-linear-to-r from-secondary to-secondary/20"
                      : g.tone === "accent"
                      ? "bg-linear-to-r from-accent to-accent/20"
                      : "bg-linear-to-r from-base-content/20 to-base-content/5"
                  }`}
                />
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((x) => (
                  <span key={x} className={`badge border ${toneBadge(g.tone)}`}>
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
