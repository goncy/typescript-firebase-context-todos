export interface ITodo {
  id: string;
  text: string;
  status: "pending" | "completed";
}

export interface State {
  todos: ITodo[];
}

export interface Actions {
  add: (text: ITodo["text"]) => void;
  update: (todo: ITodo) => void;
  remove: (id: ITodo["id"]) => void;
}

export interface Context {
  state: State;
  actions: Actions;
}
