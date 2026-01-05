import SectionTitle from "./SectionTitle";

export default function Contact({ profile }) {
  const { contacts } = profile;

  return (
    <section id="contact" className="mt-10">
      <SectionTitle>Contact</SectionTitle>

      <div className="mt-3 card bg-base-100/80 shadow-sm ring-1 ring-base-300 backdrop-blur">
        <div className="card-body p-5">
          <p className="text-sm opacity-80">
            Reach out anytime — I’m based in{" "}
            <span className="font-semibold">{profile.location}</span>.
          </p>

          <div className="mt-4 grid gap-2">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
              <div className="text-sm font-semibold">Email</div>
              <a
                className="link link-primary"
                href={`mailto:${contacts.email}`}
              >
                {contacts.email}
              </a>
            </div>

            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
              <div className="text-sm font-semibold">LinkedIn</div>
              <a
                className="link link-primary"
                href={contacts.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {contacts.linkedin}
              </a>
            </div>

            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
              <div className="text-sm font-semibold">
                Phone (SMS and Whatsapp)
              </div>
              <div className="text-sm opacity-80">{contacts.phone}</div>
            </div>

            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
              <div className="text-sm font-semibold">Location</div>
              <div className="text-sm opacity-80">{profile.location}</div>
            </div>

            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
              <div className="text-sm font-semibold">Github</div>
              <div className="text-sm opacity-80">{contacts.github}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
