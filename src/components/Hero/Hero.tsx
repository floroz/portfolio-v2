import React from "react";
import {
  Section,
  H1,
  Grid,
  P,
  Span,
  Intro,
  ArrowDown,
  Link,
} from "./Hero.styled";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <Section id="home">
        <Grid>
          <Intro>
            <H1>
              <Span>Hello, my name is </Span>
              {`Daniele \nTortora`}
            </H1>
            <P>
              {`I am a Software Engineer who loves building things with JavaScript`}
            </P>
            <Link href="#contact" variant="primary" aria-label="Contact Me">
              Contact Me
            </Link>
          </Intro>
          <ArrowDown>
            <FaArrowDown />
          </ArrowDown>
        </Grid>
      </Section>
    </>
  );
};

export default Hero;
