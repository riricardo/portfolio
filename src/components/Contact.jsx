export default function Contact({ profile }) {
  const { contacts } = profile;

  return (
    <section id="contact" className="mt-10">
      <h2 className="text-xl font-semibold">Contact</h2>

      <div className="mt-3 card bg-base-100 shadow-sm ring-1 ring-base-300">
        <div className="card-body p-5">
          <p className="text-sm opacity-80">
            Reach out anytime — I’m based in{" "}
            <span className="font-semibold">{profile.location}</span>.
          </p>

          <div className="mt-4 grid gap-2">
            <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
              <div className="text-sm font-semibold">Email</div>
              <a
                className="link link-primary"
                href={`mailto:${contacts.email}`}
              >
                {contacts.email}
              </a>
            </div>

            <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
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

            <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
              <div className="text-sm font-semibold">Phone</div>
              <div className="text-sm opacity-80">{contacts.phone}</div>
            </div>

            <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
              <div className="text-sm font-semibold">Location</div>
              <div className="text-sm opacity-80">{profile.location}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
