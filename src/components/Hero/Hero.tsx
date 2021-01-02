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
} from "./Hero.styled";
import { FaArrowDown } from "react-icons/fa";
import CTALink from "shared/CTALink";

interface Props {}

const Hero = (props: Props) => {
  return (
    <>
      <Section>
        <Intro>
          <H1>
            <Span>Hello, my name is </Span>
            {`Daniele \nTortora`}
          </H1>
          <P>
            {`I am a Software Engineer who loves building things with JavaScript`}
          </P>
          <CTALink href="#contact" variant="primary" aria-label="Contact Me">
            Contact Me
          </CTALink>
        </Intro>
        <div>
          <ImgCircle>
            <Img src="/images/profilepic.jpeg" />
          </ImgCircle>
        </div>
        <ArrowDown>
          <FaArrowDown />
        </ArrowDown>
      </Section>
    </>
  );
};

export default Hero;
