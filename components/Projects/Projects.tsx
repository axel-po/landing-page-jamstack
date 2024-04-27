import React from "react";
import Section from "../ui/Section/Section";
import { Text, Title } from "../ui/Typography/Typography";
import Project from "./Project";

const Projects = () => {
  return (
    <Section>
      <Title className="text-center">Projets</Title>

      <Text className="mx-auto mt-6 max-w-xl text-center text-white/50">
        Découvrez quelques-uns de nos projets récents qui illustrent notre
        expertise en création de sites web avec la JamStack.{" "}
      </Text>

      <div className="mt-12 grid grid-cols-2 gap-6">
        <Project />
        <Project />
        <Project />
      </div>
    </Section>
  );
};

export default Projects;
