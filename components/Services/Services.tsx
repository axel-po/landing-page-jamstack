import React from "react";
import Section from "../ui/Section/Section";
import { HoverEffect } from "../ui/card-hover-effect";
import { Title } from "../ui/Typography/Typography";
import { Button } from "../ui/Button/Button";

export const projects = [
  {
    title: "Conception sur Mesure",
    description:
      "Nous concevons des designs sur mesure qui expriment pleinement l'identité distinctive de votre marque, captivant instantanément vos visiteurs. Notre approche, axée sur l'utilisateur, assure une expérience optimale, tout en offrant un design esthétique qui sublime votre contenu.",
    link: "https://stripe.com",
  },
  {
    title: "Développement Frontend et Backend",
    description:
      "Nos développeurs maîtrisent les dernières technologies frontend et backend pour garantir des sites web rapides, sécurisés et évolutifs. Que ce soit avec React, Vue.js, ou d'autres frameworks modernes, nous sommes en mesure de créer des interfaces utilisateur dynamiques et des fonctionnalités avancées pour votre site web.",
    link: "https://netflix.com",
  },
  {
    title: "Optimisation SEO",
    description:
      "Nous optimisons chaque aspect de votre site web pour améliorer sa visibilité sur les moteurs de recherche. De la structure du site aux balises méta en passant par la vitesse de chargement des pages, nous nous assurons que votre site est bien positionné pour attirer un trafic organique de qualité.",
    link: "https://google.com",
  },
  {
    title: "Intégration de Contenu Dynamique",
    description:
      "Nous intégrons des systèmes de gestion de contenu (CMS) flexibles et faciles à utiliser pour vous permettre de gérer votre contenu en toute autonomie. ",
    link: "https://meta.com",
  },
  {
    title: "Hébergement fiable et sécurisé",
    description:
      "Nous offrons également des services d'hébergement fiables et sécurisés pour votre site web. Avec des serveurs performants et une surveillance 24/7, vous pouvez avoir l'esprit tranquille en sachant que votre site est entre de bonnes mains.",
    link: "https://amazon.com",
  },
  {
    title: "Maintenance et Support Continus",
    description:
      "Notre engagement envers nos clients ne s'arrête pas à la livraison du site. Nous offrons des services de maintenance et de support continus pour garantir que votre site reste performant et sécurisé en tout temps. Que ce soit pour des mises à jour régulières ou pour résoudre des problèmes techniques, nous sommes là pour vous aider.",
    link: "https://microsoft.com",
  },
];

const Services = () => {
  return (
    <Section>
      <Title>Nos services</Title>
      <HoverEffect items={projects} />

      <div className="flex items-center justify-center">
        <Button href="/">Réserver un appel gratuit</Button>
      </div>
    </Section>
  );
};

export default Services;
