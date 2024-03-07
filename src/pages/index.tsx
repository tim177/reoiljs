import type { NextPage } from "next";
import React from "react";
import { useRecoilCallback, useRecoilState } from "recoil";
import { todoAtomFamily, todoIdsAtom } from "./atoms/atom";
import Todo from "./components/Todo";

const Home: NextPage = () => {
  // getting the todos
  const [todosIds, setTodosIds] = useRecoilState(todoIdsAtom);

  // insert todo
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title");

    const nextTodoId = todosIds.length;

    insertTodo(title as string, nextTodoId);

    e.currentTarget.reset();
  };

  const insertTodo = useRecoilCallback(
    ({ set }) =>
      (title: string, id: number) => {
        set(todoIdsAtom, [...todosIds, id]);
        set(todoAtomFamily(id), { id: id, title: title });
      }
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {/* Todos */}
      {todosIds.map((todo, index) => (
        <Todo key={index} id={todo as number} />
      ))}

      {/* Input Box for adding todos */}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="enter new todo"
            className="p-2 text-md border-2 border-purple-500 outline-none rounded-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
