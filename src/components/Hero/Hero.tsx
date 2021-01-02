import React from "react";
import { Section, H1, P, H5, Img, ImgCircle, Intro } from "./Hero.styled";

interface Props {}

const Hero = (props: Props) => {
  return (
    <Section>
      <Intro>
        <H5>Hello, my name is </H5>
        <H1>{`Daniele \nTortora`}</H1>
        <P>I love building things with JavaScript and React</P>
      </Intro>
      <div>
        <ImgCircle>
          <Img src="/images/profilepic.jpeg" />
        </ImgCircle>
      </div>
    </Section>
  );
};

export default Hero;
