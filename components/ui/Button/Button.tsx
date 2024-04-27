"use client";

import Link from "next/link";
import React from "react";
import { HoverBorderGradient } from "../hover-border-gradient";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export const Button = ({ children, href, className }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        "rounded-full bg-primary px-7 py-3 text-white",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export const ButtonHoverGradient = ({ children, href }: ButtonProps) => {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
      >
        <AceternityLogo />
        <span>{children}</span>
      </HoverBorderGradient>
    </div>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
