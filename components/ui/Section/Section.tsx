import React, { PropsWithChildren } from "react";

const Section = ({ children }: PropsWithChildren) => {
  return <section className="wrapper my-12 md:my-20">{children}</section>;
};

export default Section;
