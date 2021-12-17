import { workTodoI } from "./todos.interface";

export interface TodoStoreI {
    todos: workTodoI[],
    setTodos: (todos: workTodoI[]) => void,
    deleteTodos: (id: number) => void,
    addTodo: (todo: workTodoI) => void,
    clear: () => void
}

export interface RootStoreI {
    todoState: TodoStoreI
}