import React from "react";
import {
  Section,
  NameInput,
  EmailInput,
  TextInput,
  FormGroup,
  SubmitButton,
} from "./Contact.styled";
import Heading2 from "shared/Heading2";
import emailjs from "emailjs-com";

const serviceID = process.env.NEXT_EMAIL_JS;
const templateID = process.env.NEXT_EMAIL_TEMPLATE;
const userId = process.env.NEXT_EMAIL_USERID;

interface Props {}

const Contact = (props: Props) => {
  console.log(serviceID, templateID, userId);
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
      <form onSubmit={onSubmitHandler}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <NameInput type="text" name="name" id="name" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <EmailInput type="email" name="email" id="email" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Message</label>
          <TextInput
            name="message"
            id="message"
            cols={30}
            rows={10}
          ></TextInput>
        </FormGroup>
        <SubmitButton type="submit" aria-label="send message">
          Submit
        </SubmitButton>
      </form>
    </Section>
  );
};

export default Contact;
