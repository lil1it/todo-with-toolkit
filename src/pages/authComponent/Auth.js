import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionsAuth } from "../../store/auth/AuthSlice";
import styled from "styled-components";

import Button from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setState] = useState({
    email: "",
    password: "",
  });
  const inputChangeHandler = (name) => {
    return (event) => {
      setState((prevState) => ({ ...prevState, [name]: event.target.value }));
    };
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formState.email === "test@gmail.com" &&
      formState.password === "123123"
    ) {
      navigate("/todos");
      dispatch(actionsAuth.login(formState.email));
    }
  };
  return (
    // <MainAuth>
    <SectionStyle>
      <form onSubmit={submitHandler}>
        <ControlStyle>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={inputChangeHandler("email")}
          />
        </ControlStyle>
        <ControlStyle>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.password}
            onChange={inputChangeHandler("password")}
            autoComplete="password"
          />
        </ControlStyle>

        <Button>Login</Button>
      </form>
    </SectionStyle>
  );
};

export default Auth;

// const MainAuth = styled.main`
/* margin-left:15rem;
  /* box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa; 
` */

const SectionStyle = styled.section`
  width: 60%;
  margin-top: 1rem;
  /* margin-left: 20rem; */
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-radius: 15px;
  align-self: center;
`;
const ControlStyle = styled.div`
  margin-bottom: 0.5rem;

  label {
    display: block;
    color: #616161;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  input {
    display: block;
    width: 20rem;

    border-radius: 4px;
    padding: 0.25rem;
    border: 1px solid #ccc;
  }
`;
