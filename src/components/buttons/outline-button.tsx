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
        "bg-none border border-[--text-color] h-12 rounded-full hover:bg-red-500 hover:border-none text-[14px] transition-colors flex items-center gap-1 px-8",
        className,
      )}
    >
      {children}
      {imageSrc}
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
