import clsx from "clsx";
import { ReactNode } from "react";

const Section = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={clsx("wrapper my-12 md:my-20", className)}>
      {children}
    </section>
  );
};

export default Section;
