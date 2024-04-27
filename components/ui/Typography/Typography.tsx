import React from "react";
import clsx from "clsx";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title: React.FC<TitleProps> = ({
  children,
  className,
  tag = "h2",
}) => {
  const Tag = tag;

  let styles = "font-bold text-white ";
  switch (tag) {
    case "h1":
      styles += "text-6xl ";
      break;
    case "h2":
      styles += "text-5xl ";
      break;
    case "h3":
      styles += "text-xl ";
      break;
    case "h4":
      styles += "text-xl ";
      break;
    case "h4":
      styles += "text-lg ";
      break;

    default:
      break;
  }

  return <Tag className={clsx(styles, className)}>{children}</Tag>;
};

interface TextProps {
  children: React.ReactNode;
  className?: string;
  tag?: "p" | "span";
  size?: "sm" | "md" | "lg";
}

export const Text: React.FC<TextProps> = ({
  children,
  className,
  tag = "p",
  size = "md",
}) => {
  const Tag = tag;

  let styles = "text-white ";
  switch (tag) {
    case "p":
      styles += "";
      break;
    case "span":
      styles += "";
      break;

    default:
      break;
  }
  switch (size) {
    case "lg":
      styles += " text-lg";
      break;

    case "md":
      styles += " text-md";
      break;

    case "sm":
      styles += "text-sm";
      break;

    default:
      break;
  }

  return <Tag className={clsx(styles, className)}>{children}</Tag>;
};
