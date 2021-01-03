import React from "react";
import Heading2 from "shared/Heading2";
import HorizonalLines from "shared/HorizonalLines";
import { Section, Text, SubTitle, Flexbox } from "./About.styled";

interface Props {}

const About = (props: Props) => {
  return (
    <Section id="about">
      <Flexbox>
        <Heading2>About Me</Heading2>
        <SubTitle>Ciao!</SubTitle>
        <Text>
          I am a Frontend Engineer who is passionate about creating rich user
          interfaces and interactive applications using JavaScript.
        </Text>
        <Text>
          I believe in the importance of writing clean, modular and loosely
          coupled code that is easy to extend, maintain and reuse.
        </Text>
        <Text>
          Along with exhaustive experience in using HTML, CSS, JavaScript,
          Accessibility and Web Performances, the list of tools I'm proficient
          in using includes React, React Native, Vue.js, TypeScript, Next.js,
          Redux, RxJS, GraphQL, Apollo, Storybook, Gatsby, Node, Express,
          Webpack, Jest, Cypress, Detox, Google Analytics, Mixpanel, Optimizely,
          Datadog, CircleCi. I am also passionate about UX/UI Design, Usability
          Testing and wireframe prototyping using Figma.
        </Text>
      </Flexbox>
    </Section>
  );
};

export default About;
