import React from "react";
import { Section } from "./About.styled";

interface Props {}

const About = (props: Props) => {
  return (
    <Section>
      <h2>About</h2>
      <div>
        <p>Ciao!</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
          perferendis vel optio ipsam eius perspiciatis non earum sequi
          veritatis enim deserunt magnam numquam voluptatibus sed laborum ea
          deleniti, modi itaque.
        </p>
      </div>
    </Section>
  );
};

export default About;
