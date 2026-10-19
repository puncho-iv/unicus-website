import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface ProductPreviewProps {
  icon: LucideIcon;
  label: string;
  title: string;
  detail: string;
  className?: string;
}

export function ProductPreview({
  icon: Icon,
  label,
  title,
  detail,
  className = "",
}: ProductPreviewProps) {
  return (
    <div
      className={`rounded-2xl border border-white/15 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[var(--text-color)]">
            <Icon size={17} />
          </span>

          <span className="text-xs text-slate-300">{label}</span>
        </div>

        <ArrowUpRight
          size={15}
          className="text-[var(--text-color-50)]"
        />
      </div>

      <p className="mt-5 text-xl font-semibold tracking-tight text-white">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-400">
        {detail}
      </p>
    </div>
  );
}