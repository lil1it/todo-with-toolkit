import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { todoActionType } from "../../store/todo/TodoSlice";
import Button from "../UI/Button";

export default function TodoList({ setTodo }) {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const delateHandler = (id) => dispatch(todoActionType.DELETE(id));

  const editTodoHandler = (name, id) => {
    delateHandler(id);
    setTodo(name);
  };

  function chengeCheckbox(id) {
    const setDone = (id) => dispatch(todoActionType.COMPLETE(id));
    setDone(id);
  }
  return (
    <List>
      {todos.map((todo, index) => {
        // console.log(todo.id);
        return (
          <ListItems key={index}>
            <CurrentText>
              <CheckBox
                id="check"
                type="checkbox"
                checked={todo.done}
                onChange={() => chengeCheckbox(todo.id)}
              />

              {todo.done ? (
                <CompleteText htmlFor="name">{todo.name}</CompleteText>
              ) : (
                <UnComplete htmlFor="name">{todo.name}</UnComplete>
              )}
            </CurrentText>

            {/* {todo.done ? (
              <Button onClick={() => done(todo.id)}>RETURN</Button>
            ) : (
              <Button onClick={() => done(todo.id)}>DONE</Button>
            )} */}
            <div>
              {" "}
              <Button onClick={() => editTodoHandler(todo.name, todo.id)}>
                EDIT
              </Button>
              <Button onClick={() => delateHandler(todo.id)}>remove</Button>
            </div>
          </ListItems>
        );
      })}
    </List>
  );
}

const CurrentText = styled.div`
  display: flex;
`;

const CheckBox = styled.input`
  margin-right: 1rem;
  background-color: blueviolet;
`;

const List = styled.div`
  width: 70%;
  margin-top: 4rem;
`;

const ListItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  border: none;
  border-radius: 5px;
  box-shadow: #9402c4 15px 10px 15px 5px;
  background: white;
  margin-bottom: 2rem;
`;

const CompleteText = styled.label`
  text-decoration: line-through;
  color: #9402c4;
  font-size: 1.5rem;
  font-family: sans-serif;

  &::before {
    border-color: red !important;
  }
`;
const UnComplete = styled.label`
  text-decoration: none;
  color: black;
  font-family: sans-serif;
  font-size: 1.5rem;
  &::before {
    border-color: red !important;
  }
`;
