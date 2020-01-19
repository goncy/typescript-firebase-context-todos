import React from "react";

import { useUser } from "../session/hooks";

import { ITodo, Context, State, Actions } from "./types";
import api from "./resources";
import Loading from "./pages/Loading";

interface Props {
  children: JSX.Element;
}

const TodoContext = React.createContext({} as Context);

const TodoProvider = ({ children }: Props) => {
  const user = useUser();
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected">("pending");

  function add(text: ITodo["text"]) {
    api.add(user.uid, { text, status: "pending" });
  }

  function update(todo: ITodo) {
    api.update(user.uid, todo);
  }

  function remove(id: ITodo["id"]) {
    api.remove(user.uid, id);
  }

  React.useEffect(() => {
    api.onChange(user.uid, (todos: ITodo[]) => {
      setTodos(todos);

      setStatus("resolved");
    });

    return () => setStatus("pending");
  }, [user.uid]);

  if (status === "pending") return <Loading />;

  const state: State = { todos };
  const actions: Actions = { add, update, remove };

  return <TodoContext.Provider value={{ state, actions }}>{children}</TodoContext.Provider>;
};

export { TodoProvider as Provider, TodoContext as default };
