import React from "react";
import Heading2 from "shared/Heading2";
import CTALink from "shared/CTALink";

import {
  Section,
  Text,
  SubTitle,
  Flexbox,
  TextContainer,
  ImgCircle,
  Img,
  Grid,
} from "./About.styled";

const About = () => {
  return (
    <Section id="about">
      <Flexbox>
        <Heading2>About Me</Heading2>
        <Grid>
          <ImgCircle>
            <Img
              src="/images/profilepic.jpeg"
              alt="Daniele Tortora Software Engineer"
            />
          </ImgCircle>
          <TextContainer>
            <SubTitle>Hello!</SubTitle>
            <Text>
              I am a Software Engineer who is passionate about creating rich
              user interfaces and interactive web applications, translating
              interaction designs and product concepts into an immersive
              experience for the end-users.
            </Text>
            <Text>
              I love solving problems and creating flexible and maintainable
              software architectures, which reflect SOLID principles and
              implement fitting design patterns. Through mentoring, pair
              programming, and code reviews, I contribute to building a healthy
              team culture that highlights the importance of writing clean,
              modular, and loosely coupled code that is easy to extend, maintain
              and reuse.
            </Text>
            <Text>
              I am an advocate for web accessibility and inclusiveness, and I
              try to write software that is usable (and enjoyable) by large
              audiences with different needs and skillsets.
            </Text>
            <Text>
              I have commercial experience working with the following
              technologies and tools: React, React Native, Angular, Vue.js,
              TypeScript, Next.js, Redux, RxJS, GraphQL, Apollo, Storybook,
              Gatsby, Node.js, Express, Webpack, Rollup, Babel, Jest, React
              Testing Library, Enzyme, Cypress, Detox, WebDriver IO, Jenkins,
              CircleCi, NX, yarn, npm.
            </Text>
            <CTALink variant="primary" href="/resume.pdf">
              Download CV
            </CTALink>
          </TextContainer>
        </Grid>
      </Flexbox>
    </Section>
  );
};

export default About;
