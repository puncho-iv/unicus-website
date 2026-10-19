import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  ShoppingCart,
  Users,
} from "lucide-react";
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
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-red-500/10 blur-[100px]" />
        <div className="unicus-grid absolute inset-0 opacity-30" />
      </div>

      <Header />

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Category badges */}
          <div className="mb-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {["Technology", "Commerce", "Logistics"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Main heading */}
          <h1 className="font-archivo text-4xl font-semibold leading-[1.12] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Designed for{" "}
            <span className="unicus-gradient-text">
              Efficiency
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            A single, secure platform built to streamline your business
            operations and drive success. No more switching tabs, re-entering
            data, or chasing updates across multiple tools.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton
              href="#about"
              imageSrc={<ArrowRight color="black" />}
            >
              Explore Our Solutions
            </PrimaryButton>

            <OutlineButton
              href="#services"
              imageSrc={<ArrowRight />}
            >
              Discover Unicus
            </OutlineButton>
          </div>
        </div>

        {/* Product cards */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ProductPreview
            icon={Users}
            label="Human Resources"
            title="HR & Payroll"
            detail=""
            className="lg:-translate-y-3"
          />

          <ProductPreview
            icon={ShoppingCart}
            label="Retail & Hospitality"
            title="Smart POS"
            detail=""
            className="lg:translate-y-5"
          />

          <ProductPreview
            icon={Globe}
            label="Digital Commerce"
            title="E-commerce"
            detail=""
            className="lg:-translate-y-1"
          />

          <ProductPreview
            icon={Code2}
            label="Business Technology"
            title="Custom Apps"
            detail=""
            className="lg:translate-y-3"
          />
        </div>

        {/* Value propositions */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-slate-400">
          {[
            "Business-focused",
            "Built to scale",
            "Practical technology",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CheckCircle2
                size={15}
                className="shrink-0 text-[--text-color]"
              />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
