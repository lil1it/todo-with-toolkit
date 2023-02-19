import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { todoActionType } from "../store/todo/TodoSlice";
import Button from "../components/UI/Button";

import TodoList from "../components/todoComponent/TodoList";

// import { ACTIONS } from "../constants";

export function Todo() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const disabled = todo.trim().length > 0;

  const addTodoHandler = (e) => {
    e.preventDefault();

    const addTodo = (name) => {
      dispatch(todoActionType.ADD_TODO(name));
    };
    setTodo("");
    addTodo(todo);
  };

  return (
    <TodoStyle>
      <Form>
        <Input
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button onClick={addTodoHandler} disabled={!disabled}>
          ADD TODO
        </Button>
      </Form>

      <TodoList setTodo={setTodo} />
    </TodoStyle>
  );
}
const TodoStyle = styled.section`
  margin-left: 5rem;
  margin-top: 4rem;
  margin-bottom: 6rem;
`;

const Input = styled.input`
  border: none;
  border-radius: 3px;
  padding: 10px 10px;
  margin-right: 1.5rem;
  width: 20rem;
  box-shadow: #9402c4 10px 8px 15px 5px;
`;
const Form = styled.form``;
