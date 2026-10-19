import { ArrowRight, BarChart3, Database, MonitorSmartphone, Sparkles, Store } from "lucide-react";

const capabilities = [
  {
    icon: Database,
    title: "Connected Data",
    text: "Bring important business information together.",
  },
  {
    icon: BarChart3,
    title: "Better Insights",
    text: "Make informed decisions with useful reports.",
  },
  {
    icon: MonitorSmartphone,
    title: "Modern Experiences",
    text: "Software designed for everyday business use.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-[--pri] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[--text-color]">
            About Unicus
          </p>

          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl">
            Your business.Your Advantage:
            <span className="text-slate-500">
              {" "}Technology that serves you.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Unicus helps businesses replace fragmented processes with
            practical digital tools. We focus on making everyday work easier,
            improving visibility, and giving teams the software they need to
            operate more effectively.
          </p>

          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white transition hover:text-red-400"
          >
            See how we can help
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/15 to-slate-900 p-6 sm:col-span-2 sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-300">Our approach</p>
                <h3 className="mt-3 max-w-sm text-2xl font-semibold text-white">
                  Practical solutions. Meaningful impact.
                </h3>
              </div>
              <div className="rounded-xl bg-[--text-color] p-3 text-white">
            <Store className="text-slate-400" size={22} />
              </div>
            </div>
            <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-[--text-color]" />
            </div>
            <p className="mt-3 text-xs text-slate-400">
              From business needs to usable digital products.
            </p>
          </div>

          {capabilities.slice(0, 2).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
              >
                <Icon size={22} className="text-[--text-color]" />
                <h3 className="mt-5 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}