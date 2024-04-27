/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Section from "../ui/Section/Section";
import { Text, Title } from "../ui/Typography/Typography";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Highlight } from "../ui/hero-highlight";

const items = [
  {
    quote: "🚀 Performance améliorée",
    name: "En pré-générant le contenu et en le servant via un CDN, les sites JamStack bénéficient de temps de chargement rapides et d'une expérience utilisateur fluide.",
  },
  {
    quote: "🔒 Sécurité renforcée",
    name: "Avec un nombre minimal de points d'accès et des ressources statiques servies, les sites JamStack sont moins vulnérables aux attaques malveillantes.",
  },

  {
    quote: "📈 SEO amélioré",
    name: "La JamStack rend les sites web plus rapides, ce qui améliore leur score Google Lighthouse. Cela favorise une meilleure visibilité en ligne et un classement plus élevé dans les résultats de recherche.",
  },

  {
    quote: "⚒️ Évolutivité",
    name: "Grâce à leur architecture modulaire et décentralisée, les sites JamStack peuvent facilement s'adapter à une augmentation de trafic sans compromettre les performances.",
  },
];

export const About = () => {
  return (
    <Section className="!max-w-none">
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

          <Text size="lg" className="mt-12 text-white/50">
            La JamStack offre des avantages significatifs en termes de
            performances, de sécurité, d'évolutivité, de flexibilité et de coût
            par rapport aux solutions traditionnelles. Elle est particulièrement
            adaptée aux entreprises qui recherchent des sites web rapides,
            sécurisés et évolutifs, avec une personnalisation et une flexibilité
            maximales.
          </Text>
        </div>
      </div>

      <div className="my-12">
        <InfiniteMovingCards items={items} speed="slow" />
      </div>
    </Section>
  );
};
