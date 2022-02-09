import React, { useState } from 'react';
import { MiddleContainer } from '../../styledElements/Container';
import { Form, FormBox, StyledInput, TextArea } from 'styledElements/Form';
import { Button } from 'styledElements/Buttons';

const FORM_ENDPOINT = ''; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <MiddleContainer>
      <FormBox margin='6em auto'>
        <Form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <StyledInput
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
          <StyledInput type="email" placeholder="Email" name="email" required />
          <TextArea placeholder="Your message" name="message" required />
          <Button background="var(--wintergreen)" color='white' type="submit"> Send a message </Button>
        </Form>
      </FormBox>
    </MiddleContainer>
  );
};

export default Contact;
