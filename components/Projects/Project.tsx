import Image from "next/image";
import React from "react";
import { Title } from "../ui/Typography/Typography";
import { Button } from "../ui/Button/Button";
import Link from "next/link";

const Project = () => {
  return (
    <article className="">
      <Link href="/project">
        <Image
          className="h-[316px] w-[488px] cursor-pointer rounded-[44px] object-cover object-center"
          src="/images/project-img-demo.png"
          width={488}
          height={316}
          alt="project"
        />
      </Link>

      <div className="my-4 flex justify-between">
        <Title tag="h3" className="cursor-pointer">
          La grande arche Paris
        </Title>

        <Button className="px-12 py-2 text-sm" href="/">
          Voir le projet
        </Button>
      </div>
    </article>
  );
};

export default Project;
