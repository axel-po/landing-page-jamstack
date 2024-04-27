/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Section from "../ui/Section/Section";
import { Text, Title } from "../ui/Typography/Typography";

export const About = () => {
  return (
    <Section>
      <div className="flex gap-12">
        <Title className="w-6/12" tag="h2">
          Qu'est que la Jamstack ?
        </Title>

        <div className="w-6/12">
          <Text size="lg">
            La JAMStack est une approche moderne de développement web qui repose
            sur JavaScript, les APIs et le Markup. Cette méthode permet de créer
            des sites web rapides, sécurisés et évolutifs en pré-générant le
            contenu et en le distribuant via un CDN.
          </Text>

          <Text size="lg" className="mt-12 text-blue-300">
            La JamStack offre des avantages significatifs en termes de
            performances, de sécurité, d'évolutivité, de flexibilité et de coût
            par rapport aux solutions traditionnelles. Elle est particulièrement
            adaptée aux entreprises qui recherchent des sites web rapides,
            sécurisés et évolutifs, avec une personnalisation et une flexibilité
            maximales.
          </Text>
        </div>
      </div>
    </Section>
  );
};
