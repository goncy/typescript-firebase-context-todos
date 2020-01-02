import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import Todo from "../Todo";

afterEach(cleanup);

it("toggle edit mode", () => {
  const { queryByTestId, getByTestId } = render(
    <Todo id="first-todo" status="pending" text="Some todo" onRemove={jest.fn()} onUpdate={jest.fn()} />
  );

  expect(queryByTestId(/update/i)).not.toBeInTheDocument();
  expect(getByTestId("remove")).toBeTruthy();

  fireEvent.click(getByTestId("text"));

  expect(queryByTestId(/remove/i)).not.toBeInTheDocument();
  expect(getByTestId("update")).toBeTruthy();
});

it("should call onRemove with the correct id", () => {
  const onRemove = jest.fn();

  const { getByTestId } = render(
    <Todo id="todo-to-remove" status="pending" text="Some todo to remove" onRemove={onRemove} onUpdate={jest.fn()} />
  );

  fireEvent.click(getByTestId("remove"));

  expect(onRemove).toBeCalledWith("todo-to-remove");
});

it("should call onUpdate with the correct data", () => {
  const onUpdate = jest.fn();

  const { getByTestId } = render(
    <Todo id="todo-to-update" status="pending" text="Some todo to update" onRemove={jest.fn()} onUpdate={onUpdate} />
  );

  fireEvent.click(getByTestId("text"));
  fireEvent.change(getByTestId("input"), { target: { value: "Some updated to do" } });
  fireEvent.click(getByTestId("update"));

  expect(onUpdate).toBeCalledWith({ status: "pending", text: "Some updated to do" });
});
