import { ArrowRight, Code2, Globe, ShoppingCart, Users } from "lucide-react";
const services = [
  {
    number: "01",
    icon: Users,
    title: "HR & Payroll Systems",
    description:
      "Manage employees, attendance, leave, shifts, payroll, and HR operations in one connected platform.",
    tags: ["Employee Management", "Attendance", "Payroll"],
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "Point of Sale Systems",
    description:
      "Streamline sales, restaurant operations, inventory, orders, and business reporting with intelligent POS software.",
    tags: ["Sales", "Inventory", "Restaurant POS"],
  },
  {
    number: "03",
    icon: Globe,
    title: "E-commerce Solutions",
    description:
      "Take your business online with modern storefronts, product management, order processing, and digital shopping experiences.",
    tags: ["Online Stores", "Orders", "Payments"],
  },
  {
    number: "04",
    icon: Code2,
    title: "Custom Software & Websites",
    description:
      "Turn your ideas into practical web applications, business portals, and websites tailored to your workflow.",
    tags: ["Web Apps", "Business Portals", "Websites"],
  },
];
export function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/[0.06] bg-[--primary-color] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[--text-color]">
              What We Do
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl">
              Your Complete Toolkit for Business Growth.
            </h2>
          </div>
          {/* <p className="max-w-md text-sm leading-7 text-slate-400">
            From day-to-day operations to your next big digital idea, we build
            tools that solve real business problems.
          </p> */}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.number}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-[--text-color-50] hover:bg-slate-900 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-[--text-color] ring-1 ring-red-500/20 transition group-hover:bg-[--text-color-50] group-hover:text-slate-500">
                    <Icon size={23} />
                  </div>
                  <span className="text-xs text-slate-600">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-white sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  Discuss this solution
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1 group-hover:text-red-400"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
