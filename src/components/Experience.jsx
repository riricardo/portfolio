import SectionTitle from "./SectionTitle";

export default function Experience() {
  const items = [
    {
      title: "Bachelor’s Degree in Engineering (2014 – 2019)",
      detail:
        "Graduated from the University of São Paulo (USP), one of the top public universities in Brazil, with a strong foundation in problem-solving and engineering principles.",
    },
    {
      title: "Syshouse Informática (2020 – 2022)",
      detail:
        "Worked on desktop software development using Delphi and Android applications using Xamarin with C#. Contributed to maintaining and extending existing systems while delivering new features.",
    },
    {
      title: "Linx Systems (2022 – 2024)",
      detail:
        "Developed web applications using ASP.NET WebForms and ASP.NET MVC, built APIs with .NET Core, and maintained desktop applications in Delphi. Worked extensively with SQL Server for data modeling, query optimization, and performance tuning. Integrated cloud services such as Azure Service Bus and Blob Storage, and collaborated as part of an Agile Scrum team.",
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
