import { ArrowRight, BarChart3, Clock3, Code2, Wallet } from "lucide-react";
import PrimaryButton from "../buttons/primary-button";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-[--primary-color] px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-7 sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[--text-color]">
            One partner. Multiple possibilities.
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
            Have a business challenge? Let's build the solution.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            Whether you need to streamline your workforce, manage sales, launch
            an online store, or develop something unique, let's discuss what
            your business needs.
          </p>
          <div className="mt-7">
            <PrimaryButton href="#contact" imageSrc={<ArrowRight className="text-slate-500" />}>Start a Conversation</PrimaryButton>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: Clock3, title: "Save time", text: "Simplify repetitive work." },
            { icon: Wallet, title: "Improve control", text: "Keep operations organized." },
            { icon: BarChart3, title: "See the bigger picture", text: "Understand business performance." },
            { icon: Code2, title: "Build for your needs", text: "Software shaped around your goals." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <Icon size={20} className="text-[--text-color]" />
                <h3 className="mt-4 text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-400">
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