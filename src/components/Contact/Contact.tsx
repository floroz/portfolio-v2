import React, { useState } from "react";
import {
  Section,
  NameInput,
  EmailInput,
  TextInput,
  SubmitButton,
  Form,
  Label,
  NameGroup,
  EmailGroup,
  MessageGroup,
  Spinner,
  Check,
} from "./Contact.styled";
import Heading2 from "shared/Heading2";
import emailjs from "emailjs-com";

const serviceID = process.env.NEXT_EMAIL_JS;
const templateID = process.env.NEXT_EMAIL_TEMPLATE;
const userId = process.env.NEXT_EMAIL_USERID;

interface Props {}

enum Status {
  idle = "idle",
  error = "error",
  success = "success",
  pending = "pending",
}

const Contact = (props: Props) => {
  const [status, setStatus] = useState<Status>(Status.idle);

  const isLoading = status === Status.pending;
  const isError = status === Status.success;
  const isSuccess = status === Status.success;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setStatus(Status.pending);

    emailjs
      .sendForm(serviceID, templateID, event.target, userId)
      .then((res) => console.log(res))
      .catch((err) => setStatus(Status.error))
      .finally(() => {
        setStatus(Status.success);
        event.target.reset();
      });
  };

  return (
    <Section id="contact">
      <Heading2>Get in Touch</Heading2>
      <Form onSubmit={onSubmitHandler}>
        <NameGroup>
          <Label htmlFor="name">Name</Label>
          <NameInput type="text" name="name" id="name" />
        </NameGroup>
        <EmailGroup>
          <Label htmlFor="email">Email</Label>
          <EmailInput type="email" name="email" id="email" />
        </EmailGroup>
        <MessageGroup>
          <Label htmlFor="message">Message</Label>
          <TextInput
            cols={30}
            rows={30}
            name="message"
            id="message"
          ></TextInput>
        </MessageGroup>
        <SubmitButton type="submit" aria-label="send message">
          Submit {isLoading && <Spinner />}
          {isSuccess && <Check />}
        </SubmitButton>
      </Form>
    </Section>
  );
};

export default Contact;
