import Link from "next/link";
import React from "react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

const Button = ({ children, href }: ButtonProps) => {
  return (
    <Link href={href} className="rounded-full bg-primary px-7 py-3 text-white ">
      {children}
    </Link>
  );
};

export default Button;
