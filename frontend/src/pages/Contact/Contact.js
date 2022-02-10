import React, { useState } from 'react';
import { MiddleContainer } from '../../styledElements/Container';
import { Form, FormBox, StyledInput, TextArea } from 'styledElements/Form';
import { Button } from 'styledElements/Buttons';
import { H6 } from 'styledElements/Texts';
import styled from 'styled-components';

const FORM_ENDPOINT = ''; // TODO - fill on the later step

const Header = styled.div`
height: 100%;
margin: 0 auto;
padding: 2em 1em 0em 1em;
`;

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
    <MiddleContainer direction="column"> 
      <Header>      
      <H6 color="black" weight="400">If you hve any questions please hesitate before sending us an email. </H6>
      </Header>
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
