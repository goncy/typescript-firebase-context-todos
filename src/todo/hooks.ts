import React from "react";

import TodoContext from "./context";
import { Context, Actions, ITodo } from "./types";

export function useTodos(): ITodo[] {
  const {
    state: { todos },
  } = React.useContext(TodoContext as React.Context<Context>);

  return todos;
}

export function useTodoActions(): Actions {
  const { actions } = React.useContext(TodoContext as React.Context<Context>);

  return actions;
}
