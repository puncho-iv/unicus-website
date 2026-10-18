import { ArrowUpRight, BarChart3, Database, MonitorSmartphone } from "lucide-react";

export function ProductPreview({ icon: Icon, label, title, detail, className = "" }) {
 
  return (
    <div
      className={`rounded-2xl border border-white/15 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/15 text-red-400">
            <Icon size={17} />
          </span>
          <span className="text-xs text-slate-300">{label}</span>
        </div>
        <ArrowUpRight size={15} className="text-slate-500" />
      </div>
      <p className="mt-5 text-xl font-semibold tracking-tight text-white">
        {title}
      </p>
      <p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p>
    </div>
  );
}