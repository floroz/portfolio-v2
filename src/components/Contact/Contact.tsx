import React from "react";
import {
  Section,
  NameInput,
  EmailInput,
  TextInput,
  FormGroup,
  SubmitButton,
  Form,
  Label,
} from "./Contact.styled";
import Heading2 from "shared/Heading2";
import emailjs from "emailjs-com";

const serviceID = process.env.NEXT_EMAIL_JS;
const templateID = process.env.NEXT_EMAIL_TEMPLATE;
const userId = process.env.NEXT_EMAIL_USERID;

interface Props {}

const Contact = (props: Props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, event.target, userId)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => event.target.reset());
  };

  return (
    <Section id="contact">
      <Heading2>Get in Touch</Heading2>
      <Form onSubmit={onSubmitHandler}>
        <FormGroup style={{ gridRow: "1/2", gridColumn: "1/2" }}>
          <Label htmlFor="name">Name</Label>
          <NameInput type="text" name="name" id="name" />
        </FormGroup>
        <FormGroup style={{ gridRow: "1/2", gridColumn: "2/3" }}>
          <Label htmlFor="email">Email</Label>
          <EmailInput type="email" name="email" id="email" />
        </FormGroup>
        <FormGroup style={{ gridRow: "2/3", gridColumn: "1/3" }}>
          <Label htmlFor="message">Message</Label>
          <TextInput type="text" name="message" id="message"></TextInput>
        </FormGroup>
        <SubmitButton type="submit" aria-label="send message">
          Submit
        </SubmitButton>
      </Form>
    </Section>
  );
};

export default Contact;
