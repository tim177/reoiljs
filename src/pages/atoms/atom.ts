import { atom, atomFamily } from "recoil";

export type Todo = {
  id: number | undefined;
  title: string;
};

export const todoIdsAtom = atom<number[]>({
  key: "todoIds",
  default: [],
});

export const todoAtomFamily = atomFamily<Todo, number>({
  key: "",
  default: {
    title: "",
    id: undefined,
  },
});
