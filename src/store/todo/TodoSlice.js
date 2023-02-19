import { createSlice } from "@reduxjs/toolkit";

// export const todoActionType = {
//     ADD: "ADD",
//     EDIT: "EDIT",
//     COMPLETE: "COMPLETE",
//     DELATE: "DELATE",
//   };
  
  export const initialState = { todos: [] };


  export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
      ADD_TODO(state,action){
        const NewTodo = { id: `${new Date().toISOString()}-${action.payload}`, name: action.payload, done: false };
        state.todos.push(NewTodo)
        console.log(state);
      },
      COMPLETE(state , action){
        const doneTodo = state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, done: !todo.done };
          }
          return todo;
        });
        return { state , todos: doneTodo}
      },
      DELETE(state,action){
        const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload);
        return {todos:filteredTodos}
      }


    }
  })

  export const  todoActionType = todoSlice.actions

  // export const reducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case todoActionType.ADD: {
  //       const NewTodo = { id: `${new Date().toISOString()}-${action.payload}`, name: action.payload, done: false };
  
  //       return {
  //         ...state,
  //         todos: [...state.todos, NewTodo],
  //       };
  //     }
  
  //     case todoActionType.COMPLETE:
  //       const doneTodo = state.todos.map((todo) => {
  //         if (todo.id === action.payload) {
  //           return { ...todo, done: !todo.done };
  //         }
  //         return todo;
  //       });
  //       return { ...state, todos: doneTodo };
  //     case todoActionType.DELATE:
  //       const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload);
  //       return {
  //         todos: filteredTodos,
  //       };
  
  //     default:
  //       return state;
  //   }
  // };


  
