
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

const OutlineButton = ({
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
        "group flex h-12 px-8 items-center gap-2 rounded-full border border-[var(--text-color)] bg-transparent px-8 text-[14px] transition-colors hover:border-[--text-color] hover:text-slate-600 hover:bg-[--text-color]",
        className,
      )}
    >
      <span>{children}</span>

      {imageSrc && (
        <span className="inline-flex transition-transform duration-300 ease-out group-hover:translate-x-1">
          {imageSrc}
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

export default OutlineButton;
