import React from "react";
import Heading2 from "shared/Heading2";
import { Section } from "./Contact.styled";

interface Props {}

const Contact = (props: Props) => {
  return (
    <Section id="contact">
      <Heading2>Contact</Heading2>
    </Section>
  );
};

export default Contact;
