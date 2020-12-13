import React, { useRef, useState } from "react";
import styled from "styled-components";
import { colorSet } from "../../styles/Colors";
import { useAuth } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, logout, currentUser, forceUpdate } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      setErrorMsg("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch (err) {
      setErrorMsg("login_failed");
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    setErrorMsg("");
    try {
      await logout();
    } catch (err) {
      console.log(err.stack);
      setErrorMsg("logout_failed");
    }
  };

  return (
    <Wrapper>
      <Title>Log in</Title>
      <Form onSubmit={handleSubmit}>
        <Label for="email">
          <Input
            type="email"
            id="email"
            placeholder="Email"
            ref={emailRef}
            required
          />
        </Label>
        <Label for="password">
          <Input
            type="password"
            id="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </Label>
        {errorMsg && window.alert(errorMsg)}
        {currentUser ? (
          <SubmitBtn type="reset" onClick={handleLogout}>
            Log out
          </SubmitBtn>
        ) : (
          <SubmitBtn disabled={loading} type="submit">
            Log in
          </SubmitBtn>
        )}

        <Redirection>
          Need an account?{" "}
          <Link style={{ color: colorSet.primaryGreen }} to="/signup">
            Sign up
          </Link>
        </Redirection>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5% 20%;
  border: 2px solid ${colorSet.primaryGray};
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: ${colorSet.primaryYellow};
`;

const Form = styled.form`
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 7px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 0 5px;
`;

const SubmitBtn = styled.button`
  color: white;
  margin: 17px;
  width: 200px;
  height: 50px;
  font-size: 18px;
  border: 2px solid ${colorSet.primaryYellow};
  background: transparent;

  &:hover {
    background-color: ${colorSet.primaryYellow};
    cursor: pointer;
  }
`;

const Redirection = styled.p``;
export default Login;
