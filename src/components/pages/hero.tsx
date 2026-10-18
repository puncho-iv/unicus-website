import { ArrowUpRight, CheckCircle2, Code2, Globe, ShoppingCart, Sparkles, Users } from "lucide-react";
import { Header } from "./header";
import { ProductPreview } from "./product-preview";
import OutlineButton from "../buttons/outline-button";
import PrimaryButton from "../buttons/primary-button";

export function Hero() {
  return (
    <section
      id="home"
      className="unicus-hero relative isolate overflow-hidden rounded-[26px] border border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-red-500/10 blur-[100px]" />
        <div className="unicus-grid absolute inset-0 opacity-30" />
      </div>

      <Header />

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300 backdrop-blur">
            <Sparkles size={14} className="text-red-400" />
            Technology. Business. Growth.
          </div>

          <h1 className="text-4xl font-archivo text-[--text-color] font-semibold leading-[1.12] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Build smarter.
            <br />
            <span className="unicus-gradient-text">
              Grow without limits.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            We build digital solutions that simplify business operations,
            connect your data, and help your company move forward — from HR
            and payroll to POS, e-commerce, and custom software.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href="#about" imageSrc={<ArrowUpRight />} >
               Explore Our Solutions
            </PrimaryButton>
             <OutlineButton href="#services" imageSrc={<ArrowUpRight />}>Discover Unicus</OutlineButton>
           
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ProductPreview
            icon={Users}
            label="Human Resources"
            title="HR & Payroll"
            detail="People, attendance and workforce operations."
            className="lg:-translate-y-3"
          />
          <ProductPreview
            icon={ShoppingCart}
            label="Retail & Hospitality"
            title="Smart POS"
            detail="Orders, stock and sales management."
            className="lg:translate-y-5"
          />
          <ProductPreview
            icon={Globe}
            label="Digital Commerce"
            title="E-commerce"
            detail="Products, online orders and digital sales."
            className="lg:-translate-y-1"
          />
          <ProductPreview
            icon={Code2}
            label="Business Technology"
            title="Custom Apps"
            detail="Software built around your business."
            className="lg:translate-y-3"
          />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-red-400" />
            Business-focused
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-red-400" />
            Built to scale
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-red-400" />
            Practical technology
          </span>
        </div>
      </div>
    </section>
  );
}