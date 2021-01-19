import React from "react";
import Heading2 from "shared/Heading2";
import CTALink from "shared/CTALink";

import {
  Section,
  Text,
  SubTitle,
  Flexbox,
  TextContainer,
} from "./About.styled";

const About = () => {
  return (
    <Section id="about">
      <Flexbox>
        <Heading2>About Me</Heading2>
        <TextContainer>
          <SubTitle>Ciao!</SubTitle>
          <Text>
            I am a Software Engineer who is passionate about creating rich user
            interfaces and interactive applications using JavaScript.
          </Text>
          <Text>
            I believe in the importance of writing clean, modular and loosely
            coupled code that is easy to extend, maintain and reuse.
          </Text>
          <Text>
            Along with exhaustive experience in using HTML, CSS, JavaScript, the
            list of tools I'm proficient in using includes React, React Native,
            Vue.js, TypeScript, Next.js, Redux, RxJS, GraphQL, Apollo,
            Storybook, Gatsby, Node, Express, Webpack, Jest, Cypress, Detox,
            Google Analytics, Mixpanel, Optimizely, Datadog, CircleCi.
          </Text>
          <Text>
            I am also interested in UX/UI Design, Usability Testing and User
            Research.
          </Text>
          <CTALink variant="primary" href="/resume.pdf">
            Download CV
          </CTALink>
        </TextContainer>
      </Flexbox>
    </Section>
  );
};

export default About;
