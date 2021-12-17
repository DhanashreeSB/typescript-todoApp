import { makeObservable, observable, action, computed } from "mobx";
import { workTodoI } from "../models/todos.interface";
import RootStore from "./RootStore";
import Store from "./Store";

class TodoStore extends Store {

    todos: workTodoI[];
    constructor(rootStore: RootStore) {
        super(rootStore);
        makeObservable(this, {
            todos: observable,
            setTodos: action,
            deleteTodos: action,
            addTodo: action,
            todoLength: computed
        })
        this.todos = [
            { id: 1, content: 'Presentation at 1PM' },
            { id: 2, content: 'Meeting at 3PM' }
        ];
    }

    setTodos = (todos: workTodoI[]) => {
        this.todos = todos;
    }

    deleteTodos = (id: number) => {
        //This method will be called from Todo.js, when remove is clicked. We iterate over all elemnets in todos and id clicked element's id is equal to current id then that object is not added in new todoList
        const todoList = this.todos.filter(todo => todo.id !== id);
        this.setTodos(todoList);
    }

    addTodo = (todo: workTodoI) => {
        let todoListLength = this.todos.length;
        if (todoListLength === 0) {
            todo.id = 1;
        } else {
            todo.id = this.todos[this.todos.length - 1].id + 1;
        }
        //spread this.state.todos and new element
        let todoList = [...this.todos, todo];
        this.setTodos(todoList);
    }

    get todoLength() {
        return this.todos.length;
    }

    clear = () => {
        this.todos = [];
    }
}

export default TodoStore;