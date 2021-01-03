import React from "react";
import Heading2 from "shared/Heading2";
import { Section } from "./Work.styled";

interface Props {}

const Work = (props: Props) => {
  return (
    <Section id="work">
      <Heading2>My Experience</Heading2>
      <p style={{ margin: "5rem 0" }}>
        This work section is a... work in progress!
      </p>
    </Section>
  );
};

export default Work;
