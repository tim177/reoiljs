import React from "react";
import { useRecoilState } from "recoil";
import { todoAtomFamily } from "../atoms/atom";

function Todo({ id }: { id: number }) {
  // fetching the specific todo by it's id
  const [todo, setTodo] = useRecoilState(todoAtomFamily(id));

  console.log(todo);

  return (
    <div>
      <input
        type="text"
        value={todo?.title}
        onChange={(e) => {
          setTodo({
            ...todo,
            title: e.target.value,
          });
        }}
        placeholder="todo title"
        className="p-2 text-md border-2  rounded-lg mb-2"
      />
    </div>
  );
}

export default Todo;
