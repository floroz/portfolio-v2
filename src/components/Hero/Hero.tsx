import React from "react";
import {
  Section,
  H1,
  P,
  Span,
  Img,
  ImgCircle,
  Intro,
  ArrowDown,
  Link,
} from "./Hero.styled";
import { FaArrowDown } from "react-icons/fa";
import CTALink from "shared/CTALink";

const Hero = () => {
  return (
    <>
      <Section id="home">
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
        <ImgCircle>
          <Img
            src="/images/profilepic.jpeg"
            alt="Daniele Tortora Software Engineer"
          />
        </ImgCircle>
        <ArrowDown>
          <FaArrowDown />
        </ArrowDown>
      </Section>
    </>
  );
};

export default Hero;
