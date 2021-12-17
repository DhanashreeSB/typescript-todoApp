import { RootStoreI, TodoStoreI } from "../models/stores.interface";
import TodoState from "./TodoStore"

export default class RootStore {
    todoState!: TodoStoreI;
}

export const createRootStore = (): RootStoreI => {
    const store = new RootStore();
    store.todoState = new TodoState(store);
    return store;
}