import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider as SessionProvider } from "../session/context";
import { Provider as TodoProvider } from "../todo/context";

import Routes from "./routes";

import "./theme.css";

const App = () => (
  <BrowserRouter>
    <SessionProvider>
      <TodoProvider>
        <Routes />
      </TodoProvider>
    </SessionProvider>
  </BrowserRouter>
);

export default App;
