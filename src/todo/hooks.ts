import React from "react";

import TodoContext from "./context";
import { Actions, ITodo } from "./types";

export function useTodos(): ITodo[] {
  const {
    state: { todos },
  } = React.useContext(TodoContext);

  return todos;
}

export function useTodoActions(): Actions {
  const { actions } = React.useContext(TodoContext);

  return actions;
}
