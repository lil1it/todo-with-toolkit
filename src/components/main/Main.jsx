import React from "react";
import {  Route, Routes } from "react-router-dom";
import Auth from "../../pages/authComponent/Auth";
import { Todo } from "../../pages/MainTodo";
import styled from "styled-components";




const Main = () => {


  return (
    <>
      <MainStyle>
        <Routes>
          <Route path="/" element={<Auth />} />

          

         <Route path="/todos/" element={<Todo />} />

        </Routes>
      </MainStyle>
    </>
  );
};

export default Main;

const MainStyle = styled.main`
  /* display: flex;
  flex-direction: column;
  margin-left: 15rem;
  margin: 5rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem; */
padding-left: 18rem;
  /* background-color: #f4f0fa; */
`;
