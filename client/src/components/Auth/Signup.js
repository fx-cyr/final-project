import React, { useRef, useState } from "react";
import styled from "styled-components";
import { colorSet } from "../../styles/Colors";
import { useAuth } from "../../contexts/authContext";
import { Link } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup, currentUser } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    //Form validation
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setErrorMsg("unmatching_password");
    }
    try {
      setErrorMsg("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      setErrorMsg("account_creation_failed");
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      {currentUser && <div>{currentUser.email}</div>}
      <Title>Sign up</Title>
      <Form onSubmit={handleSubmit}>
        <Label for="email">
          Email:
          <Input type="email" id="email" ref={emailRef} required />
        </Label>
        <Label for="password">
          Password:
          <Input type="password" id="password" ref={passwordRef} required />
        </Label>
        <Label for="confirm-password">
          Confirm Password:
          <Input
            type="password"
            id="confirm-password"
            ref={confirmPasswordRef}
            required
          />
        </Label>
        {errorMsg && window.alert(errorMsg)}
        <SubmitBtn disabled={loading} type="submit">
          Sign up
        </SubmitBtn>
        <Redirection>
          Already have an account? <Link to="/login">Log in</Link>
        </Redirection>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 20px;
  font-size: 24px;
  text-align: center;
  color: ${colorSet.primaryYellow};
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 7px;
`;

const Input = styled.input``;

const SubmitBtn = styled.button`
  margin: 7px;
`;

const Redirection = styled.p``;
export default Signup;
