export function TrustStrip() {
  const items = [
    "Business Automation",
    "Human Resources",
    "Retail Technology",
    "Digital Commerce",
    "Custom Software",
  ];

  return (
    <section className="border-b border-white/[0.07] bg-[--primary-color]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-5 py-7 sm:justify-between sm:px-8 lg:px-12">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-xs font-medium text-slate-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}