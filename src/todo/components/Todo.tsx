import React from "react";
import styled from "styled-components";

import { ITodo } from "../types";
import Button from "../../ui/controls/Button";

interface Props extends ITodo {
  onRemove: (id: ITodo["id"]) => void;
  onUpdate: (todo: Pick<ITodo, "status" | "text">) => void;
}

const Container = styled.div`
  padding: 12px;
  border: 3px solid var(--foreground);
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Todo = ({ id, text, status, onRemove, onUpdate }: Props) => {
  const [draftText, setDraftText] = React.useState<ITodo["text"]>(text);
  const [draftStatus, setDraftStatus] = React.useState<ITodo["status"]>(status);
  const [mode, setMode] = React.useState<"view" | "edit">("view");

  function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onUpdate({ text: draftText, status: draftStatus });

    setMode("view");
  }

  return (
    <Container>
      {mode === "view" && (
        <>
          <span onClick={() => setMode("edit")}>
            <span data-testid="text">{text}</span> (<span data-testid="status">{status}</span>)
          </span>
          <Button data-testid="remove" onClick={() => onRemove(id)}>
            <span aria-label="remove todo" role="img">
              ❎
            </span>
          </Button>
        </>
      )}
      {mode === "edit" && (
        <form onSubmit={handleUpdate}>
          <input
            autoFocus
            data-testid="input"
            type="text"
            value={draftText}
            onChange={e => setDraftText(e.target.value)}
          />
          <select
            data-testid="select"
            value={draftStatus}
            onChange={e => setDraftStatus(e.target.value as ITodo["status"])}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <Button data-testid="update" type="submit">
            <span aria-label="remove todo" role="img">
              ✅
            </span>
          </Button>
        </form>
      )}
    </Container>
  );
};

export default Todo;
