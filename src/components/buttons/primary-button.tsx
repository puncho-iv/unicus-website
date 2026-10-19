
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface IPrimaryButton {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  imageSrc?: React.ReactNode;
  imageWidth?: number;
  imageHeight?: number;
  disabled?: boolean;
}

const PrimaryButton = ({
  className,
  onClick,
  children,
  href,
  imageSrc,
  disabled,
}: IPrimaryButton) => {
  const button = (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "group relative flex h-12 w-full items-center justify-center rounded-full bg-[var(--text-color)] px-12 text-center text-[14px] text-slate-600 transition-colors hover:bg-[var(--text-color-50)]",
        className,
      )}
    >
      <span className="text-center">{children}</span>

      {imageSrc && (
        <span className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 text-red-500">
          <span className="inline-flex transition-transform duration-300 ease-out group-hover:translate-x-1">
            {imageSrc}
          </span>
        </span>
      )}
    </Button>
  );

  if (href) {
    return (
      <a href={href} className="inline-flex">
        {button}
      </a>
    );
  }

  return button;
};

export default PrimaryButton;
