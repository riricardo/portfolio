export default function SectionTitle({ children, right }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div>
        <h2 className="text-xl font-semibold">{children}</h2>
        <div className="mt-2 h-1 w-24 rounded-full bg-linear-to-r from-primary to-secondary" />
      </div>
      {right ? <div className="text-sm opacity-70">{right}</div> : null}
    </div>
  );
}
