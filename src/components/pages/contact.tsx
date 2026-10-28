import { ArrowRight, ArrowUpRight } from "lucide-react";
import PrimaryButton from "../buttons/primary-button";

export function Contact() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#060912] px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <a href="#home" className="flex shrink-0 items-center gap-2.5">
            <img
              src="/unicus_logo.png"
              alt="Unicus"
              className="h-32 w-auto object-contain sm:h-36 lg:h-40"
            />
          </a>
          <p className=" max-w-md text-sm leading-6 text-slate-400">
            Smart digital solutions for businesses ready to work better and
            grow.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:hello@unicusdnl.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white transition hover:bg-white/5"
          >
            hello@unicusdnl.com
            <ArrowUpRight size={16} />
          </a>
          <PrimaryButton
            imageSrc={<ArrowRight className="text-slate-500" />}
            href="mailto:hello@unicusdnl.com"
          >
            Contact Unicus
          </PrimaryButton>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Unicus. All rights reserved.</p>
        <a href="#home" className="transition hover:text-white">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
