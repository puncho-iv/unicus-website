
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
        "bg-red-500 h-12 gap-2  rounded-full text-[14px]  hover:bg-red-400 text-white transition-colors flex items-center gap-1 px-8",
        className,
      )}
    >
    {children}
    <span className="bg-white rounded-full p-1">
          {imageSrc}
    </span>

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
