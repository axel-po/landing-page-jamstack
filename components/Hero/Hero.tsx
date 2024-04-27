import React from "react";
import Button from "../ui/Button/Button";
import { Text, Title } from "../ui/Typography/Typography";
import Image from "next/image";

const Hero = () => {
  return (
    <header className="relative mb-20 h-[737px] bg-[url('/images/hero-background.svg')] bg-cover bg-center">
      <Image
        className="absolute bottom-0 left-[30px] -rotate-12"
        src="/images/svg1.svg"
        alt="d"
        width={300}
        height={300}
      />

      <div className="mx-auto flex h-full max-w-[1090px] flex-col items-center justify-center text-center">
        <Title tag="h1" className="italic">
          Des Sites Web Modernes et Performants avec la Technologie JamStack
        </Title>
        <Text tag="span" className="max-w-[722px] py-6">
          Nous créons des sites web rapides, sécurisés et au design élégant.
          Notre objectif est de rendre votre visibilité en ligne moderne et
          sérieuse aux yeux de vos potentiels clients ou visiteurs.
        </Text>

        <div className="flex gap-6">
          <Button href="/services">Réserver un appel gratuit</Button>
          <Button href="/services">Voir les services</Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
